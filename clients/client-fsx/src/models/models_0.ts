// smithy-typescript generated code
import type {
  AdministrativeActionType,
  AliasLifecycle,
  AutocommitPeriodType,
  AutoImportPolicyType,
  BackupLifecycle,
  BackupType,
  DataCompressionType,
  DataRepositoryLifecycle,
  DataRepositoryTaskFilterName,
  DataRepositoryTaskLifecycle,
  DataRepositoryTaskType,
  DeleteFileSystemOpenZFSOption,
  DeleteOpenZFSVolumeOption,
  DiskIopsConfigurationMode,
  DriveCacheType,
  EventType,
  FileCacheLifecycle,
  FileCacheLustreDeploymentType,
  FileCacheType,
  FileSystemLifecycle,
  FileSystemMaintenanceOperation,
  FileSystemType,
  FilterName,
  FlexCacheEndpointType,
  InputOntapVolumeType,
  LustreAccessAuditLogLevel,
  LustreDeploymentType,
  LustreReadCacheSizingMode,
  MetadataConfigurationMode,
  NetworkType,
  NfsVersion,
  OntapDeploymentType,
  OntapFileSystemUserType,
  OntapVolumeType,
  OpenZFSCopyStrategy,
  OpenZFSDataCompressionType,
  OpenZFSDeploymentType,
  OpenZFSFileSystemUserType,
  OpenZFSQuotaType,
  OpenZFSReadCacheSizingMode,
  PrivilegedDelete,
  ReportFormat,
  ReportScope,
  ResourceType,
  RestoreOpenZFSVolumeOption,
  RetentionPeriodType,
  S3AccessPointAttachmentLifecycle,
  S3AccessPointAttachmentsFilterName,
  S3AccessPointAttachmentType,
  SecurityStyle,
  SnaplockType,
  SnapshotFilterName,
  SnapshotLifecycle,
  Status,
  StorageType,
  StorageVirtualMachineFilterName,
  StorageVirtualMachineLifecycle,
  StorageVirtualMachineRootVolumeSecurityStyle,
  StorageVirtualMachineSubtype,
  TieringPolicyName,
  Unit,
  UpdateOpenZFSVolumeOption,
  VolumeFilterName,
  VolumeLifecycle,
  VolumeStyle,
  VolumeType,
  WindowsAccessAuditLogLevel,
  WindowsDeploymentType,
} from "./enums";

/**
 * The Microsoft Active Directory attributes of the Amazon FSx for Windows File Server file system.
 *
 * @public
 */
export interface ActiveDirectoryBackupAttributes {
  /**
   * The fully qualified domain name of the self-managed Active Directory directory.
   *
   * @public
   */
  DomainName?: string | undefined;

  /**
   * The ID of the Amazon Web Services Managed Microsoft Active Directory instance to which the file system is joined.
   *
   * @public
   */
  ActiveDirectoryId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services resources. We require an ARN when you need to specify a resource unambiguously across all of Amazon Web Services. For more information, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  ResourceARN?: string | undefined;
}

/**
 * Provides information about a failed administrative action.
 *
 * @public
 */
export interface AdministrativeActionFailureDetails {
  /**
   * Error message providing details about the failed administrative action.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * A structure providing details of any failures that occurred.
 *
 * @public
 */
export interface FileSystemFailureDetails {
  /**
   * A message describing any failures that occurred.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * The configuration for the optional provisioned SSD read cache on Amazon FSx for Lustre file systems that use the Intelligent-Tiering storage class.
 *
 * @public
 */
export interface LustreReadCacheConfiguration {
  /**
   * Specifies how the provisioned SSD read cache is sized, as follows:
   *
   * - Set to `NO_CACHE` if you do not want to use an SSD read cache with your Intelligent-Tiering file system.
   * - Set to `USER_PROVISIONED` to specify the exact size of your SSD read cache.
   * - Set to `PROPORTIONAL_TO_THROUGHPUT_CAPACITY` to have your SSD read cache automatically sized based on your throughput capacity.
   *
   * @public
   */
  SizingMode?: LustreReadCacheSizingMode | undefined;

  /**
   * Required if `SizingMode` is set to `USER_PROVISIONED`. Specifies the size of the file system's SSD read cache, in gibibytes (GiB).
   *
   * The SSD read cache size is distributed across provisioned file servers in your file system. Intelligent-Tiering file systems support a minimum of 32 GiB and maximum of 131072 GiB for SSD read cache size for every 4,000 MB/s of throughput capacity provisioned.
   *
   * @public
   */
  SizeGiB?: number | undefined;
}

/**
 * Provides detailed information about the data repository if its `Lifecycle` is set to `MISCONFIGURED` or `FAILED`.
 *
 * @public
 */
export interface DataRepositoryFailureDetails {
  /**
   * A detailed error message.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * The data repository configuration object for Lustre file systems returned in the response of the `CreateFileSystem` operation.
 *
 * This data type is not supported on file systems with a data repository association. For file systems with a data repository association, see .
 *
 * @public
 */
export interface DataRepositoryConfiguration {
  /**
   * Describes the state of the file system's S3 durable data repository, if it is configured with an S3 repository. The lifecycle can have the following values:
   *
   * - `CREATING` - The data repository configuration between the FSx file system and the linked S3 data repository is being created. The data repository is unavailable.
   * - `AVAILABLE` - The data repository is available for use.
   * - `MISCONFIGURED` - Amazon FSx cannot automatically import updates from the S3 bucket until the data repository configuration is corrected. For more information, see [Troubleshooting a Misconfigured linked S3 bucket](https://docs.aws.amazon.com/fsx/latest/LustreGuide/troubleshooting.html#troubleshooting-misconfigured-data-repository).
   * - `UPDATING` - The data repository is undergoing a customer initiated update and availability may be impacted.
   * - `FAILED` - The data repository is in a terminal state that cannot be recovered.
   *
   * @public
   */
  Lifecycle?: DataRepositoryLifecycle | undefined;

  /**
   * The import path to the Amazon S3 bucket (and optional prefix) that you're using as the data repository for your FSx for Lustre file system, for example `s3://import-bucket/optional-prefix`. If a prefix is specified after the Amazon S3 bucket name, only object keys with that prefix are loaded into the file system.
   *
   * @public
   */
  ImportPath?: string | undefined;

  /**
   * The export path to the Amazon S3 bucket (and prefix) that you are using to store new and changed Lustre file system files in S3.
   *
   * @public
   */
  ExportPath?: string | undefined;

  /**
   * For files imported from a data repository, this value determines the stripe count and maximum amount of data per file (in MiB) stored on a single physical disk. The maximum number of disks that a single file can be striped across is limited by the total number of disks that make up the file system.
   *
   * The default chunk size is 1,024 MiB (1 GiB) and can go as high as 512,000 MiB (500 GiB). Amazon S3 objects have a maximum size of 5 TB.
   *
   * @public
   */
  ImportedFileChunkSize?: number | undefined;

  /**
   * Describes the file system's linked S3 data repository's `AutoImportPolicy`. The AutoImportPolicy configures how Amazon FSx keeps your file and directory listings up to date as you add or modify objects in your linked S3 bucket. `AutoImportPolicy` can have the following values:
   *
   * - `NONE` - (Default) AutoImport is off. Amazon FSx only updates file and directory listings from the linked S3 bucket when the file system is created. FSx does not update file and directory listings for any new or changed objects after choosing this option.
   * - `NEW` - AutoImport is on. Amazon FSx automatically imports directory listings of any new objects added to the linked S3 bucket that do not currently exist in the FSx file system.
   * - `NEW_CHANGED` - AutoImport is on. Amazon FSx automatically imports file and directory listings of any new objects added to the S3 bucket and any existing objects that are changed in the S3 bucket after you choose this option.
   * - `NEW_CHANGED_DELETED` - AutoImport is on. Amazon FSx automatically imports file and directory listings of any new objects added to the S3 bucket, any existing objects that are changed in the S3 bucket, and any objects that were deleted in the S3 bucket.
   *
   * @public
   */
  AutoImportPolicy?: AutoImportPolicyType | undefined;

  /**
   * Provides detailed information about the data repository if its `Lifecycle` is set to `MISCONFIGURED` or `FAILED`.
   *
   * @public
   */
  FailureDetails?: DataRepositoryFailureDetails | undefined;
}

/**
 * The configuration for Lustre logging used to write the enabled logging events for your Amazon FSx for Lustre file system or Amazon File Cache resource to Amazon CloudWatch Logs.
 *
 * @public
 */
export interface LustreLogConfiguration {
  /**
   * The data repository events that are logged by Amazon FSx.
   *
   * - `WARN_ONLY` - only warning events are logged.
   * - `ERROR_ONLY` - only error events are logged.
   * - `WARN_ERROR` - both warning events and error events are logged.
   * - `DISABLED` - logging of data repository events is turned off.
   *
   * Note that Amazon File Cache uses a default setting of `WARN_ERROR`, which can't be changed.
   *
   * @public
   */
  Level: LustreAccessAuditLogLevel | undefined;

  /**
   * The Amazon Resource Name (ARN) that specifies the destination of the logs. The destination can be any Amazon CloudWatch Logs log group ARN. The destination ARN must be in the same Amazon Web Services partition, Amazon Web Services Region, and Amazon Web Services account as your Amazon FSx file system.
   *
   * @public
   */
  Destination?: string | undefined;
}

/**
 * The Lustre metadata performance configuration of an Amazon FSx for Lustre file system using a `PERSISTENT_2` deployment type. The configuration enables the file system to support increasing metadata performance.
 *
 * @public
 */
export interface FileSystemLustreMetadataConfiguration {
  /**
   * The number of Metadata IOPS provisioned for the file system.
   *
   * - For SSD file systems, valid values are `1500`, `3000`, `6000`, `12000`, and multiples of `12000` up to a maximum of `192000`.
   * - For Intelligent-Tiering file systems, valid values are `6000` and `12000`.
   *
   * @public
   */
  Iops?: number | undefined;

  /**
   * The metadata configuration mode for provisioning Metadata IOPS for the file system.
   *
   * - In AUTOMATIC mode (supported only on SSD file systems), FSx for Lustre automatically provisions and scales the number of Metadata IOPS on your file system based on your file system storage capacity.
   * - In USER_PROVISIONED mode, you can choose to specify the number of Metadata IOPS to provision for your file system.
   *
   * @public
   */
  Mode: MetadataConfigurationMode | undefined;
}

/**
 * The configuration for Lustre root squash used to restrict root-level access from clients that try to access your FSx for Lustre file system as root. Use the `RootSquash` parameter to enable root squash. To learn more about Lustre root squash, see [Lustre root squash](https://docs.aws.amazon.com/fsx/latest/LustreGuide/root-squash.html).
 *
 * You can also use the `NoSquashNids` parameter to provide an array of clients who are not affected by the root squash setting. These clients will access the file system as root, with unrestricted privileges.
 *
 * @public
 */
export interface LustreRootSquashConfiguration {
  /**
   * You enable root squash by setting a user ID (UID) and group ID (GID) for the file system in the format `UID:GID` (for example, `365534:65534`). The UID and GID values can range from `0` to `4294967294`:
   *
   * - A non-zero value for UID and GID enables root squash. The UID and GID values can be different, but each must be a non-zero value.
   * - A value of `0` (zero) for UID and GID indicates root, and therefore disables root squash.
   *
   * When root squash is enabled, the user ID and group ID of a root user accessing the file system are re-mapped to the UID and GID you provide.
   *
   * @public
   */
  RootSquash?: string | undefined;

  /**
   * When root squash is enabled, you can optionally specify an array of NIDs of clients for which root squash does not apply. A client NID is a Lustre Network Identifier used to uniquely identify a client. You can specify the NID as either a single address or a range of addresses:
   *
   * - A single address is described in standard Lustre NID format by specifying the client’s IP address followed by the Lustre network ID (for example, `10.0.1.6@tcp`).
   * - An address range is described using a dash to separate the range (for example, `10.0.[2-10].[1-255]@tcp`).
   *
   * @public
   */
  NoSquashNids?: string[] | undefined;
}

/**
 * The configuration for the Amazon FSx for Lustre file system.
 *
 * @public
 */
export interface LustreFileSystemConfiguration {
  /**
   * The preferred start time to perform weekly maintenance, formatted d:HH:MM in the UTC time zone. Here, `d` is the weekday number, from 1 through 7, beginning with Monday and ending with Sunday.
   *
   * @public
   */
  WeeklyMaintenanceStartTime?: string | undefined;

  /**
   * The data repository configuration object for Lustre file systems returned in the response of the `CreateFileSystem` operation.
   *
   * This data type is not supported on file systems with a data repository association. For file systems with a data repository association, see .
   *
   * @public
   */
  DataRepositoryConfiguration?: DataRepositoryConfiguration | undefined;

  /**
   * The deployment type of the FSx for Lustre file system. *Scratch deployment type* is designed for temporary storage and shorter-term processing of data.
   *
   * `SCRATCH_1` and `SCRATCH_2` deployment types are best suited for when you need temporary storage and shorter-term processing of data. The `SCRATCH_2` deployment type provides in-transit encryption of data and higher burst throughput capacity than `SCRATCH_1`.
   *
   * The `PERSISTENT_1` and `PERSISTENT_2` deployment type is used for longer-term storage and workloads and encryption of data in transit. `PERSISTENT_2` offers higher `PerUnitStorageThroughput` (up to 1000 MB/s/TiB) along with a lower minimum storage capacity requirement (600 GiB). To learn more about FSx for Lustre deployment types, see [Deployment and storage class options for FSx for Lustre file systems](https://docs.aws.amazon.com/fsx/latest/LustreGuide/using-fsx-lustre.html).
   *
   * The default is `SCRATCH_1`.
   *
   * @public
   */
  DeploymentType?: LustreDeploymentType | undefined;

  /**
   * Per unit storage throughput represents the megabytes per second of read or write throughput per 1 tebibyte of storage provisioned. File system throughput capacity is equal to Storage capacity (TiB) * PerUnitStorageThroughput (MB/s/TiB). This option is only valid for `PERSISTENT_1` and `PERSISTENT_2` deployment types.
   *
   * Valid values:
   *
   * - For `PERSISTENT_1` SSD storage: 50, 100, 200.
   * - For `PERSISTENT_1` HDD storage: 12, 40.
   * - For `PERSISTENT_2` SSD storage: 125, 250, 500, 1000.
   *
   * @public
   */
  PerUnitStorageThroughput?: number | undefined;

  /**
   * You use the `MountName` value when mounting the file system.
   *
   * For the `SCRATCH_1` deployment type, this value is always "`fsx`". For `SCRATCH_2`, `PERSISTENT_1`, and `PERSISTENT_2` deployment types, this value is a string that is unique within an Amazon Web Services Region.
   *
   * @public
   */
  MountName?: string | undefined;

  /**
   * A recurring daily time, in the format `HH:MM`. `HH` is the zero-padded hour of the day (0-23), and `MM` is the zero-padded minute of the hour. For example, `05:00` specifies 5 AM daily.
   *
   * @public
   */
  DailyAutomaticBackupStartTime?: string | undefined;

  /**
   * The number of days to retain automatic backups. Setting this property to `0` disables automatic backups. You can retain automatic backups for a maximum of 90 days. The default is `30`.
   *
   * @public
   */
  AutomaticBackupRetentionDays?: number | undefined;

  /**
   * A boolean flag indicating whether tags on the file system are copied to backups. If it's set to true, all tags on the file system are copied to all automatic backups and any user-initiated backups where the user doesn't specify any tags. If this value is true, and you specify one or more tags, only the specified tags are copied to backups. If you specify one or more tags when creating a user-initiated backup, no tags are copied from the file system, regardless of this value. (Default = false)
   *
   * @public
   */
  CopyTagsToBackups?: boolean | undefined;

  /**
   * The type of drive cache used by `PERSISTENT_1` file systems that are provisioned with HDD storage devices. This parameter is required when `StorageType` is HDD. When set to `READ` the file system has an SSD storage cache that is sized to 20% of the file system's storage capacity. This improves the performance for frequently accessed files by caching up to 20% of the total storage capacity.
   *
   * This parameter is required when `StorageType` is set to HDD.
   *
   * @public
   */
  DriveCacheType?: DriveCacheType | undefined;

  /**
   * The data compression configuration for the file system. `DataCompressionType` can have the following values:
   *
   * - `NONE` - Data compression is turned off for the file system.
   * - `LZ4` - Data compression is turned on with the LZ4 algorithm.
   *
   * For more information, see [Lustre data compression](https://docs.aws.amazon.com/fsx/latest/LustreGuide/data-compression.html).
   *
   * @public
   */
  DataCompressionType?: DataCompressionType | undefined;

  /**
   * The Lustre logging configuration. Lustre logging writes the enabled log events for your file system to Amazon CloudWatch Logs.
   *
   * @public
   */
  LogConfiguration?: LustreLogConfiguration | undefined;

  /**
   * The Lustre root squash configuration for an Amazon FSx for Lustre file system. When enabled, root squash restricts root-level access from clients that try to access your file system as a root user.
   *
   * @public
   */
  RootSquashConfiguration?: LustreRootSquashConfiguration | undefined;

  /**
   * The Lustre metadata performance configuration for an Amazon FSx for Lustre file system using a `PERSISTENT_2` deployment type.
   *
   * @public
   */
  MetadataConfiguration?: FileSystemLustreMetadataConfiguration | undefined;

  /**
   * Specifies whether Elastic Fabric Adapter (EFA) and GPUDirect Storage (GDS) support is enabled for the Amazon FSx for Lustre file system.
   *
   * @public
   */
  EfaEnabled?: boolean | undefined;

  /**
   * The throughput of an Amazon FSx for Lustre file system using the Intelligent-Tiering storage class, measured in megabytes per second (MBps).
   *
   * @public
   */
  ThroughputCapacity?: number | undefined;

  /**
   * Required when `StorageType` is set to `INTELLIGENT_TIERING`. Specifies the optional provisioned SSD read cache.
   *
   * @public
   */
  DataReadCacheConfiguration?: LustreReadCacheConfiguration | undefined;
}

/**
 * The SSD IOPS (input/output operations per second) configuration for an Amazon FSx for NetApp ONTAP, Amazon FSx for Windows File Server, or FSx for OpenZFS file system. By default, Amazon FSx automatically provisions 3 IOPS per GB of storage capacity. You can provision additional IOPS per GB of storage. The configuration consists of the total number of provisioned SSD IOPS and how it is was provisioned, or the mode (by the customer or by Amazon FSx).
 *
 * @public
 */
export interface DiskIopsConfiguration {
  /**
   * Specifies whether the file system is using the `AUTOMATIC` setting of SSD IOPS of 3 IOPS per GB of storage capacity, or if it using a `USER_PROVISIONED` value.
   *
   * @public
   */
  Mode?: DiskIopsConfigurationMode | undefined;

  /**
   * The total number of SSD IOPS provisioned for the file system.
   *
   * The minimum and maximum values for this property depend on the value of `HAPairs` and `StorageCapacity`. The minimum value is calculated as `StorageCapacity` * 3 * `HAPairs` (3 IOPS per GB of `StorageCapacity`). The maximum value is calculated as 200,000 * `HAPairs`.
   *
   * Amazon FSx responds with an HTTP status code 400 (Bad Request) if the value of `Iops` is outside of the minimum or maximum values.
   *
   * @public
   */
  Iops?: number | undefined;
}

/**
 * An Amazon FSx for NetApp ONTAP file system has two endpoints that are used to access data or to manage the file system using the NetApp ONTAP CLI, REST API, or NetApp SnapMirror. They are the `Management` and `Intercluster` endpoints.
 *
 * @public
 */
export interface FileSystemEndpoint {
  /**
   * The file system's DNS name. You can mount your file system using its DNS name.
   *
   * @public
   */
  DNSName?: string | undefined;

  /**
   * The IPv4 addresses of the file system endpoint.
   *
   * @public
   */
  IpAddresses?: string[] | undefined;

  /**
   * The IPv6 addresses of the file system endpoint.
   *
   * @public
   */
  Ipv6Addresses?: string[] | undefined;
}

/**
 * An Amazon FSx for NetApp ONTAP file system has the following endpoints that are used to access data or to manage the file system using the NetApp ONTAP CLI, REST API, or NetApp SnapMirror.
 *
 * @public
 */
export interface FileSystemEndpoints {
  /**
   * An endpoint for managing your file system by setting up NetApp SnapMirror with other ONTAP systems.
   *
   * @public
   */
  Intercluster?: FileSystemEndpoint | undefined;

  /**
   * An endpoint for managing your file system using the NetApp ONTAP CLI and NetApp ONTAP API.
   *
   * @public
   */
  Management?: FileSystemEndpoint | undefined;
}

/**
 * Configuration for the FSx for NetApp ONTAP file system.
 *
 * @public
 */
export interface OntapFileSystemConfiguration {
  /**
   * The number of days to retain automatic backups. Setting this property to `0` disables automatic backups. You can retain automatic backups for a maximum of 90 days. The default is `30`.
   *
   * @public
   */
  AutomaticBackupRetentionDays?: number | undefined;

  /**
   * A recurring daily time, in the format `HH:MM`. `HH` is the zero-padded hour of the day (0-23), and `MM` is the zero-padded minute of the hour. For example, `05:00` specifies 5 AM daily.
   *
   * @public
   */
  DailyAutomaticBackupStartTime?: string | undefined;

  /**
   * Specifies the FSx for ONTAP file system deployment type in use in the file system.
   *
   * - `MULTI_AZ_1` - A high availability file system configured for Multi-AZ redundancy to tolerate temporary Availability Zone (AZ) unavailability. This is a first-generation FSx for ONTAP file system.
   * - `MULTI_AZ_2` - A high availability file system configured for Multi-AZ redundancy to tolerate temporary AZ unavailability. This is a second-generation FSx for ONTAP file system.
   * - `SINGLE_AZ_1` - A file system configured for Single-AZ redundancy. This is a first-generation FSx for ONTAP file system.
   * - `SINGLE_AZ_2` - A file system configured with multiple high-availability (HA) pairs for Single-AZ redundancy. This is a second-generation FSx for ONTAP file system.
   *
   * For information about the use cases for Multi-AZ and Single-AZ deployments, refer to [Choosing Multi-AZ or Single-AZ file system deployment](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/high-availability-multiAZ.html).
   *
   * @public
   */
  DeploymentType?: OntapDeploymentType | undefined;

  /**
   * (Multi-AZ only) Specifies the IPv4 address range in which the endpoints to access your file system will be created. By default in the Amazon FSx API, Amazon FSx selects an unused IP address range for you from the 198.19.* range. By default in the Amazon FSx console, Amazon FSx chooses the last 64 IP addresses from the VPC’s primary CIDR range to use as the endpoint IP address range for the file system. You can have overlapping endpoint IP addresses for file systems deployed in the same VPC/route tables.
   *
   * @public
   */
  EndpointIpAddressRange?: string | undefined;

  /**
   * The `Management` and `Intercluster` endpoints that are used to access data or to manage the file system using the NetApp ONTAP CLI, REST API, or NetApp SnapMirror.
   *
   * @public
   */
  Endpoints?: FileSystemEndpoints | undefined;

  /**
   * The SSD IOPS configuration for the ONTAP file system, specifying the number of provisioned IOPS and the provision mode.
   *
   * @public
   */
  DiskIopsConfiguration?: DiskIopsConfiguration | undefined;

  /**
   * The ID for a subnet. A *subnet* is a range of IP addresses in your virtual private cloud (VPC). For more information, see [VPC and subnets](https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html) in the *Amazon VPC User Guide.*
   *
   * @public
   */
  PreferredSubnetId?: string | undefined;

  /**
   * (Multi-AZ only) The VPC route tables in which your file system's endpoints are created.
   *
   * @public
   */
  RouteTableIds?: string[] | undefined;

  /**
   * The sustained throughput of an Amazon FSx file system in Megabytes per second (MBps).
   *
   * @public
   */
  ThroughputCapacity?: number | undefined;

  /**
   * The preferred start time to perform weekly maintenance, formatted d:HH:MM in the UTC time zone, where d is the weekday number, from 1 through 7, beginning with Monday and ending with Sunday.
   *
   * For example, `1:05:00` specifies maintenance at 5 AM Monday.
   *
   * @public
   */
  WeeklyMaintenanceStartTime?: string | undefined;

  /**
   * You can use the `fsxadmin` user account to access the NetApp ONTAP CLI and REST API. The password value is always redacted in the response.
   *
   * @public
   */
  FsxAdminPassword?: string | undefined;

  /**
   * Specifies how many high-availability (HA) file server pairs the file system will have. The default value is 1. The value of this property affects the values of `StorageCapacity`, `Iops`, and `ThroughputCapacity`. For more information, see [High-availability (HA) pairs](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/HA-pairs.html) in the FSx for ONTAP user guide.
   *
   * Amazon FSx responds with an HTTP status code 400 (Bad Request) for the following conditions:
   *
   * - The value of `HAPairs` is less than 1 or greater than 12.
   * - The value of `HAPairs` is greater than 1 and the value of `DeploymentType` is `SINGLE_AZ_1`, `MULTI_AZ_1`, or `MULTI_AZ_2`.
   *
   * @public
   */
  HAPairs?: number | undefined;

  /**
   * Use to choose the throughput capacity per HA pair. When the value of `HAPairs` is equal to 1, the value of `ThroughputCapacityPerHAPair` is the total throughput for the file system.
   *
   * This field and `ThroughputCapacity` cannot be defined in the same API call, but one is required.
   *
   * This field and `ThroughputCapacity` are the same for file systems with one HA pair.
   *
   * - For `SINGLE_AZ_1` and `MULTI_AZ_1` file systems, valid values are 128, 256, 512, 1024, 2048, or 4096 MBps.
   * - For `SINGLE_AZ_2`, valid values are 1536, 3072, or 6144 MBps.
   * - For `MULTI_AZ_2`, valid values are 384, 768, 1536, 3072, or 6144 MBps.
   *
   * Amazon FSx responds with an HTTP status code 400 (Bad Request) for the following conditions:
   *
   * - The value of `ThroughputCapacity` and `ThroughputCapacityPerHAPair` are not the same value.
   * - The value of deployment type is `SINGLE_AZ_2` and `ThroughputCapacity` / `ThroughputCapacityPerHAPair` is not a valid HA pair (a value between 1 and 12).
   * - The value of `ThroughputCapacityPerHAPair` is not a valid value.
   *
   * @public
   */
  ThroughputCapacityPerHAPair?: number | undefined;

  /**
   * (Multi-AZ only) Specifies the IPv6 address range in which the endpoints to access your file system will be created. By default in the Amazon FSx API and Amazon FSx console, Amazon FSx selects an available /118 IP address range for you from one of the VPC's CIDR ranges. You can have overlapping endpoint IP addresses for file systems deployed in the same VPC/route tables, as long as they don't overlap with any subnet.
   *
   * @public
   */
  EndpointIpv6AddressRange?: string | undefined;
}

/**
 * The configuration for the optional provisioned SSD read cache on Amazon FSx for OpenZFS file systems that use the Intelligent-Tiering storage class.
 *
 * @public
 */
export interface OpenZFSReadCacheConfiguration {
  /**
   * Specifies how the provisioned SSD read cache is sized, as follows:
   *
   * - Set to `NO_CACHE` if you do not want to use an SSD read cache with your Intelligent-Tiering file system.
   * - Set to `USER_PROVISIONED` to specify the exact size of your SSD read cache.
   * - Set to `PROPORTIONAL_TO_THROUGHPUT_CAPACITY` to have your SSD read cache automatically sized based on your throughput capacity.
   *
   * @public
   */
  SizingMode?: OpenZFSReadCacheSizingMode | undefined;

  /**
   * Required if `SizingMode` is set to `USER_PROVISIONED`. Specifies the size of the file system's SSD read cache, in gibibytes (GiB).
   *
   * @public
   */
  SizeGiB?: number | undefined;
}

/**
 * The configuration for the Amazon FSx for OpenZFS file system.
 *
 * @public
 */
export interface OpenZFSFileSystemConfiguration {
  /**
   * The number of days to retain automatic backups. Setting this property to `0` disables automatic backups. You can retain automatic backups for a maximum of 90 days. The default is `30`.
   *
   * @public
   */
  AutomaticBackupRetentionDays?: number | undefined;

  /**
   * A Boolean value indicating whether tags on the file system should be copied to backups. If it's set to `true`, all tags on the file system are copied to all automatic backups and any user-initiated backups where the user doesn't specify any tags. If this value is `true` and you specify one or more tags, only the specified tags are copied to backups. If you specify one or more tags when creating a user-initiated backup, no tags are copied from the file system, regardless of this value.
   *
   * @public
   */
  CopyTagsToBackups?: boolean | undefined;

  /**
   * A Boolean value indicating whether tags for the volume should be copied to snapshots. This value defaults to `false`. If it's set to `true`, all tags for the volume are copied to snapshots where the user doesn't specify tags. If this value is `true` and you specify one or more tags, only the specified tags are copied to snapshots. If you specify one or more tags when creating the snapshot, no tags are copied from the volume, regardless of this value.
   *
   * @public
   */
  CopyTagsToVolumes?: boolean | undefined;

  /**
   * A recurring daily time, in the format `HH:MM`. `HH` is the zero-padded hour of the day (0-23), and `MM` is the zero-padded minute of the hour. For example, `05:00` specifies 5 AM daily.
   *
   * @public
   */
  DailyAutomaticBackupStartTime?: string | undefined;

  /**
   * Specifies the file-system deployment type. Amazon FSx for OpenZFS supports  `MULTI_AZ_1`, `SINGLE_AZ_HA_2`, `SINGLE_AZ_HA_1`, `SINGLE_AZ_2`, and `SINGLE_AZ_1`.
   *
   * @public
   */
  DeploymentType?: OpenZFSDeploymentType | undefined;

  /**
   * The throughput of an Amazon FSx file system, measured in megabytes per second (MBps).
   *
   * @public
   */
  ThroughputCapacity?: number | undefined;

  /**
   * The preferred start time to perform weekly maintenance, formatted d:HH:MM in the UTC time zone, where d is the weekday number, from 1 through 7, beginning with Monday and ending with Sunday.
   *
   * For example, `1:05:00` specifies maintenance at 5 AM Monday.
   *
   * @public
   */
  WeeklyMaintenanceStartTime?: string | undefined;

  /**
   * The SSD IOPS (input/output operations per second) configuration for an Amazon FSx for NetApp ONTAP, Amazon FSx for Windows File Server, or FSx for OpenZFS file system. By default, Amazon FSx automatically provisions 3 IOPS per GB of storage capacity. You can provision additional IOPS per GB of storage. The configuration consists of the total number of provisioned SSD IOPS and how it is was provisioned, or the mode (by the customer or by Amazon FSx).
   *
   * @public
   */
  DiskIopsConfiguration?: DiskIopsConfiguration | undefined;

  /**
   * The ID of the root volume of the OpenZFS file system.
   *
   * @public
   */
  RootVolumeId?: string | undefined;

  /**
   * Required when `DeploymentType` is set to `MULTI_AZ_1`. This specifies the subnet in which you want the preferred file server to be located.
   *
   * @public
   */
  PreferredSubnetId?: string | undefined;

  /**
   * (Multi-AZ only) Specifies the IPv4 address range in which the endpoints to access your file system will be created. By default in the Amazon FSx API and Amazon FSx console, Amazon FSx selects an available /28 IP address range for you from one of the VPC's CIDR ranges. You can have overlapping endpoint IP addresses for file systems deployed in the same VPC/route tables.
   *
   * @public
   */
  EndpointIpAddressRange?: string | undefined;

  /**
   * (Multi-AZ only) Specifies the IPv6 address range in which the endpoints to access your file system will be created. By default in the Amazon FSx API and Amazon FSx console, Amazon FSx selects an available /118 IP address range for you from one of the VPC's CIDR ranges. You can have overlapping endpoint IP addresses for file systems deployed in the same VPC/route tables, as long as they don't overlap with any subnet.
   *
   * @public
   */
  EndpointIpv6AddressRange?: string | undefined;

  /**
   * (Multi-AZ only) The VPC route tables in which your file system's endpoints are created.
   *
   * @public
   */
  RouteTableIds?: string[] | undefined;

  /**
   * The IPv4 address of the endpoint that is used to access data or to manage the file system.
   *
   * @public
   */
  EndpointIpAddress?: string | undefined;

  /**
   * The IPv6 address of the endpoint that is used to access data or to manage the file system.
   *
   * @public
   */
  EndpointIpv6Address?: string | undefined;

  /**
   * Required when `StorageType` is set to `INTELLIGENT_TIERING`. Specifies the optional provisioned SSD read cache.
   *
   * @public
   */
  ReadCacheConfiguration?: OpenZFSReadCacheConfiguration | undefined;
}

/**
 * Specifies a key-value pair for a resource tag.
 *
 * @public
 */
export interface Tag {
  /**
   * A value that specifies the `TagKey`, the name of the tag. Tag keys must be unique for the resource to which they are attached.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * A value that specifies the `TagValue`, the value assigned to the corresponding tag key. Tag values can be null and don't have to be unique in a tag set. For example, you can have a key-value pair in a tag set of `finances : April` and also of `payroll : April`.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * A DNS alias that is associated with the file system. You can use a DNS alias to access a file system using user-defined DNS names, in addition to the default DNS name that Amazon FSx assigns to the file system. For more information, see [DNS aliases](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-dns-aliases.html) in the *FSx for Windows File Server User Guide*.
 *
 * @public
 */
export interface Alias {
  /**
   * The name of the DNS alias. The alias name has to meet the following requirements:
   *
   * - Formatted as a fully-qualified domain name (FQDN), `hostname.domain`, for example, `accounting.example.com`.
   * - Can contain alphanumeric characters, the underscore (_), and the hyphen (-).
   * - Cannot start or end with a hyphen.
   * - Can start with a numeric.
   *
   * For DNS names, Amazon FSx stores alphabetic characters as lowercase letters (a-z), regardless of how you specify them: as uppercase letters, lowercase letters, or the corresponding letters in escape codes.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Describes the state of the DNS alias.
   *
   * - AVAILABLE - The DNS alias is associated with an Amazon FSx file system.
   * - CREATING - Amazon FSx is creating the DNS alias and associating it with the file system.
   * - CREATE_FAILED - Amazon FSx was unable to associate the DNS alias with the file system.
   * - DELETING - Amazon FSx is disassociating the DNS alias from the file system and deleting it.
   * - DELETE_FAILED - Amazon FSx was unable to disassociate the DNS alias from the file system.
   *
   * @public
   */
  Lifecycle?: AliasLifecycle | undefined;
}

/**
 * The configuration that Amazon FSx for Windows File Server uses to audit and log user accesses of files, folders, and file shares on the Amazon FSx for Windows File Server file system. For more information, see [File access auditing](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/file-access-auditing.html).
 *
 * @public
 */
export interface WindowsAuditLogConfiguration {
  /**
   * Sets which attempt type is logged by Amazon FSx for file and folder accesses.
   *
   * - `SUCCESS_ONLY` - only successful attempts to access files or folders are logged.
   * - `FAILURE_ONLY` - only failed attempts to access files or folders are logged.
   * - `SUCCESS_AND_FAILURE` - both successful attempts and failed attempts to access files or folders are logged.
   * - `DISABLED` - access auditing of files and folders is turned off.
   *
   * @public
   */
  FileAccessAuditLogLevel: WindowsAccessAuditLogLevel | undefined;

  /**
   * Sets which attempt type is logged by Amazon FSx for file share accesses.
   *
   * - `SUCCESS_ONLY` - only successful attempts to access file shares are logged.
   * - `FAILURE_ONLY` - only failed attempts to access file shares are logged.
   * - `SUCCESS_AND_FAILURE` - both successful attempts and failed attempts to access file shares are logged.
   * - `DISABLED` - access auditing of file shares is turned off.
   *
   * @public
   */
  FileShareAccessAuditLogLevel: WindowsAccessAuditLogLevel | undefined;

  /**
   * The Amazon Resource Name (ARN) for the destination of the audit logs. The destination can be any Amazon CloudWatch Logs log group ARN or Amazon Kinesis Data Firehose delivery stream ARN.
   *
   * The name of the Amazon CloudWatch Logs log group must begin with the `/aws/fsx` prefix. The name of the Amazon Kinesis Data Firehose delivery stream must begin with the `aws-fsx` prefix.
   *
   * The destination ARN (either CloudWatch Logs log group or Kinesis Data Firehose delivery stream) must be in the same Amazon Web Services partition, Amazon Web Services Region, and Amazon Web Services account as your Amazon FSx file system.
   *
   * @public
   */
  AuditLogDestination?: string | undefined;
}

/**
 * The File Server Resource Manager (FSRM) configuration that Amazon FSx for Windows File Server uses for the file system. When FSRM is enabled, you can manage and monitor storage quotas, file screening, storage reports, and file classification.
 *
 * @public
 */
export interface WindowsFsrmConfiguration {
  /**
   * Specifies whether FSRM is enabled or disabled on the file system. When `TRUE`, the FSRM service is enabled and monitor file operations according to configured policies. When `FALSE` or omitted, FSRM is disabled. The default value is `FALSE`.
   *
   * @public
   */
  FsrmServiceEnabled: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) for the destination of the FSRM event logs. The destination can be any Amazon CloudWatch Logs log group ARN or Amazon Kinesis Data Firehose delivery stream ARN.
   *
   * The name of the Amazon CloudWatch Logs log group must begin with the `/aws/fsx` prefix. The name of the Amazon Kinesis Data Firehose delivery stream must begin with the `aws-fsx` prefix.
   *
   * The destination ARN (either CloudWatch Logs log group or Kinesis Data Firehose delivery stream) must be in the same Amazon Web Services partition, Amazon Web Services Region, and Amazon Web Services account as your Amazon FSx file system.
   *
   * @public
   */
  EventLogDestination?: string | undefined;
}

/**
 * The configuration of the self-managed Microsoft Active Directory (AD) directory to which the Windows File Server or ONTAP storage virtual machine (SVM) instance is joined.
 *
 * @public
 */
export interface SelfManagedActiveDirectoryAttributes {
  /**
   * The fully qualified domain name of the self-managed AD directory.
   *
   * @public
   */
  DomainName?: string | undefined;

  /**
   * The fully qualified distinguished name of the organizational unit within the self-managed AD directory to which the Windows File Server or ONTAP storage virtual machine (SVM) instance is joined.
   *
   * @public
   */
  OrganizationalUnitDistinguishedName?: string | undefined;

  /**
   * The name of the domain group whose members have administrative privileges for the FSx file system.
   *
   * @public
   */
  FileSystemAdministratorsGroup?: string | undefined;

  /**
   * The user name for the service account on your self-managed AD domain that FSx uses to join to your AD domain.
   *
   * @public
   */
  UserName?: string | undefined;

  /**
   * A list of up to three IP addresses of DNS servers or domain controllers in the self-managed AD directory.
   *
   * @public
   */
  DnsIps?: string[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services Secrets Manager secret containing the service account credentials used to join the file system to your self-managed Active Directory domain.
   *
   * @public
   */
  DomainJoinServiceAccountSecret?: string | undefined;
}

/**
 * The configuration for this Microsoft Windows file system.
 *
 * @public
 */
export interface WindowsFileSystemConfiguration {
  /**
   * The ID for an existing Amazon Web Services Managed Microsoft Active Directory instance that the file system is joined to.
   *
   * @public
   */
  ActiveDirectoryId?: string | undefined;

  /**
   * The configuration of the self-managed Microsoft Active Directory (AD) directory to which the Windows File Server or ONTAP storage virtual machine (SVM) instance is joined.
   *
   * @public
   */
  SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryAttributes | undefined;

  /**
   * Specifies the file system deployment type, valid values are the following:
   *
   * - `MULTI_AZ_1` - Specifies a high availability file system that is configured for Multi-AZ redundancy to tolerate temporary Availability Zone (AZ) unavailability, and supports SSD and HDD storage.
   * - `SINGLE_AZ_1` - (Default) Specifies a file system that is configured for single AZ redundancy, only supports SSD storage.
   * - `SINGLE_AZ_2` - Latest generation Single AZ file system. Specifies a file system that is configured for single AZ redundancy and supports SSD and HDD storage.
   *
   * For more information, see [Single-AZ and Multi-AZ File Systems](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/high-availability-multiAZ.html).
   *
   * @public
   */
  DeploymentType?: WindowsDeploymentType | undefined;

  /**
   * For `MULTI_AZ_1` deployment types, use this endpoint when performing administrative tasks on the file system using Amazon FSx Remote PowerShell.
   *
   * For `SINGLE_AZ_1` and `SINGLE_AZ_2` deployment types, this is the DNS name of the file system.
   *
   * This endpoint is temporarily unavailable when the file system is undergoing maintenance.
   *
   * @public
   */
  RemoteAdministrationEndpoint?: string | undefined;

  /**
   * For `MULTI_AZ_1` deployment types, it specifies the ID of the subnet where the preferred file server is located. Must be one of the two subnet IDs specified in `SubnetIds` property. Amazon FSx serves traffic from this subnet except in the event of a failover to the secondary file server.
   *
   * For `SINGLE_AZ_1` and `SINGLE_AZ_2` deployment types, this value is the same as that for `SubnetIDs`. For more information, see [Availability and durability: Single-AZ and Multi-AZ file systems](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/high-availability-multiAZ.html#single-multi-az-resources).
   *
   * @public
   */
  PreferredSubnetId?: string | undefined;

  /**
   * For `MULTI_AZ_1` deployment types, the IPv4 address of the primary, or preferred, file server.
   *
   * Use this IP address when mounting the file system on Linux SMB clients or Windows SMB clients that are not joined to a Microsoft Active Directory. Applicable for all Windows file system deployment types. This IPv4 address is temporarily unavailable when the file system is undergoing maintenance. For Linux and Windows SMB clients that are joined to an Active Directory, use the file system's DNSName instead. For more information on mapping and mounting file shares, see [Accessing data using file shares](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/using-file-shares.html).
   *
   * @public
   */
  PreferredFileServerIp?: string | undefined;

  /**
   * The throughput of the Amazon FSx file system, measured in megabytes per second.
   *
   * @public
   */
  ThroughputCapacity?: number | undefined;

  /**
   * The list of maintenance operations in progress for this file system.
   *
   * @public
   */
  MaintenanceOperationsInProgress?: FileSystemMaintenanceOperation[] | undefined;

  /**
   * The preferred start time to perform weekly maintenance, formatted d:HH:MM in the UTC time zone. d is the weekday number, from 1 through 7, beginning with Monday and ending with Sunday.
   *
   * @public
   */
  WeeklyMaintenanceStartTime?: string | undefined;

  /**
   * The preferred time to take daily automatic backups, in the UTC time zone.
   *
   * @public
   */
  DailyAutomaticBackupStartTime?: string | undefined;

  /**
   * The number of days to retain automatic backups. Setting this to 0 disables automatic backups. You can retain automatic backups for a maximum of 90 days.
   *
   * @public
   */
  AutomaticBackupRetentionDays?: number | undefined;

  /**
   * A boolean flag indicating whether tags on the file system should be copied to backups. This value defaults to false. If it's set to true, all tags on the file system are copied to all automatic backups and any user-initiated backups where the user doesn't specify any tags. If this value is true, and you specify one or more tags, only the specified tags are copied to backups. If you specify one or more tags when creating a user-initiated backup, no tags are copied from the file system, regardless of this value.
   *
   * @public
   */
  CopyTagsToBackups?: boolean | undefined;

  /**
   * An array of one or more DNS aliases that are currently associated with the Amazon FSx file system. Aliases allow you to use existing DNS names to access the data in your Amazon FSx file system. You can associate up to 50 aliases with a file system at any time. You can associate additional DNS aliases after you create the file system using the AssociateFileSystemAliases operation. You can remove DNS aliases from the file system after it is created using the DisassociateFileSystemAliases operation. You only need to specify the alias name in the request payload. For more information, see [Managing DNS aliases](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-dns-aliases.html).
   *
   * @public
   */
  Aliases?: Alias[] | undefined;

  /**
   * The configuration that Amazon FSx for Windows File Server uses to audit and log user accesses of files, folders, and file shares on the Amazon FSx for Windows File Server file system.
   *
   * @public
   */
  AuditLogConfiguration?: WindowsAuditLogConfiguration | undefined;

  /**
   * The SSD IOPS (input/output operations per second) configuration for an Amazon FSx for Windows file system. By default, Amazon FSx automatically provisions 3 IOPS per GiB of storage capacity. You can provision additional IOPS per GiB of storage, up to the maximum limit associated with your chosen throughput capacity.
   *
   * @public
   */
  DiskIopsConfiguration?: DiskIopsConfiguration | undefined;

  /**
   * For MULTI_AZ_1 deployment types, the IPv6 address of the primary, or preferred, file server. Use this IP address when mounting the file system on Linux SMB clients or Windows SMB clients that are not joined to a Microsoft Active Directory. Applicable for all Windows file system deployment types. This IPv6 address is temporarily unavailable when the file system is undergoing maintenance. For Linux and Windows SMB clients that are joined to an Active Directory, use the file system's DNSName instead.
   *
   * @public
   */
  PreferredFileServerIpv6?: string | undefined;

  /**
   * The File Server Resource Manager (FSRM) configuration that Amazon FSx for Windows File Server uses for the file system. FSRM is disabled by default.
   *
   * @public
   */
  FsrmConfiguration?: WindowsFsrmConfiguration | undefined;
}

/**
 * Describes why a resource lifecycle state changed.
 *
 * @public
 */
export interface LifecycleTransitionReason {
  /**
   * A detailed error message.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * Used to specify configuration options for a volume’s storage aggregate or aggregates.
 *
 * @public
 */
export interface AggregateConfiguration {
  /**
   * The list of aggregates that this volume resides on. Aggregates are storage pools which make up your primary storage tier. Each high-availability (HA) pair has one aggregate. The names of the aggregates map to the names of the aggregates in the ONTAP CLI and REST API. For FlexVols, there will always be a single entry.
   *
   * Amazon FSx responds with an HTTP status code 400 (Bad Request) for the following conditions:
   *
   * - The strings in the value of `Aggregates` are not are not formatted as `aggrX`, where X is a number between 1 and 12.
   * - The value of `Aggregates` contains aggregates that are not present.
   * - One or more of the aggregates supplied are too close to the volume limit to support adding more volumes.
   *
   * @public
   */
  Aggregates?: string[] | undefined;

  /**
   * The total number of constituents this FlexGroup volume has. Not applicable for FlexVols.
   *
   * @public
   */
  TotalConstituents?: number | undefined;
}

/**
 * Sets the autocommit period of files in an FSx for ONTAP SnapLock volume, which determines how long the files must remain unmodified before they're automatically transitioned to the write once, read many (WORM) state.
 *
 * For more information, see [Autocommit](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/worm-state.html#worm-state-autocommit).
 *
 * @public
 */
export interface AutocommitPeriod {
  /**
   * Defines the type of time for the autocommit period of a file in an FSx for ONTAP SnapLock volume. Setting this value to `NONE` disables autocommit. The default value is `NONE`.
   *
   * @public
   */
  Type: AutocommitPeriodType | undefined;

  /**
   * Defines the amount of time for the autocommit period of a file in an FSx for ONTAP SnapLock volume. The following ranges are valid:
   *
   * - `Minutes`: 5 - 65,535
   * - `Hours`: 1 - 65,535
   * - `Days`: 1 - 3,650
   * - `Months`: 1 - 120
   * - `Years`: 1 - 10
   *
   * @public
   */
  Value?: number | undefined;
}

/**
 * Specifies the retention period of an FSx for ONTAP SnapLock volume. After it is set, it can't be changed. Files can't be deleted or modified during the retention period.
 *
 * For more information, see [Working with the retention period in SnapLock](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/snaplock-retention.html).
 *
 * @public
 */
export interface RetentionPeriod {
  /**
   * Defines the type of time for the retention period of an FSx for ONTAP SnapLock volume. Set it to one of the valid types. If you set it to `INFINITE`, the files are retained forever. If you set it to `UNSPECIFIED`, the files are retained until you set an explicit retention period.
   *
   * @public
   */
  Type: RetentionPeriodType | undefined;

  /**
   * Defines the amount of time for the retention period of an FSx for ONTAP SnapLock volume. You can't set a value for `INFINITE` or `UNSPECIFIED`. For all other options, the following ranges are valid:
   *
   * - `Seconds`: 0 - 65,535
   * - `Minutes`: 0 - 65,535
   * - `Hours`: 0 - 24
   * - `Days`: 0 - 365
   * - `Months`: 0 - 12
   * - `Years`: 0 - 100
   *
   * @public
   */
  Value?: number | undefined;
}

/**
 * The configuration to set the retention period of an FSx for ONTAP SnapLock volume. The retention period includes default, maximum, and minimum settings. For more information, see [Working with the retention period in SnapLock](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/snaplock-retention.html).
 *
 * @public
 */
export interface SnaplockRetentionPeriod {
  /**
   * The retention period assigned to a write once, read many (WORM) file by default if an explicit retention period is not set for an FSx for ONTAP SnapLock volume. The default retention period must be greater than or equal to the minimum retention period and less than or equal to the maximum retention period.
   *
   * @public
   */
  DefaultRetention: RetentionPeriod | undefined;

  /**
   * The shortest retention period that can be assigned to a WORM file on an FSx for ONTAP SnapLock volume.
   *
   * @public
   */
  MinimumRetention: RetentionPeriod | undefined;

  /**
   * The longest retention period that can be assigned to a WORM file on an FSx for ONTAP SnapLock volume.
   *
   * @public
   */
  MaximumRetention: RetentionPeriod | undefined;
}

/**
 * Specifies the SnapLock configuration for an FSx for ONTAP SnapLock volume.
 *
 * @public
 */
export interface SnaplockConfiguration {
  /**
   * Enables or disables the audit log volume for an FSx for ONTAP SnapLock volume. The default value is `false`. If you set `AuditLogVolume` to `true`, the SnapLock volume is created as an audit log volume. The minimum retention period for an audit log volume is six months.
   *
   * For more information, see [SnapLock audit log volumes](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/how-snaplock-works.html#snaplock-audit-log-volume).
   *
   * @public
   */
  AuditLogVolume?: boolean | undefined;

  /**
   * The configuration object for setting the autocommit period of files in an FSx for ONTAP SnapLock volume.
   *
   * @public
   */
  AutocommitPeriod?: AutocommitPeriod | undefined;

  /**
   * Enables, disables, or permanently disables privileged delete on an FSx for ONTAP SnapLock Enterprise volume. Enabling privileged delete allows SnapLock administrators to delete write once, read many (WORM) files even if they have active retention periods. `PERMANENTLY_DISABLED` is a terminal state. If privileged delete is permanently disabled on a SnapLock volume, you can't re-enable it. The default value is `DISABLED`.
   *
   * For more information, see [Privileged delete](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/snaplock-enterprise.html#privileged-delete).
   *
   * @public
   */
  PrivilegedDelete?: PrivilegedDelete | undefined;

  /**
   * Specifies the retention period of an FSx for ONTAP SnapLock volume.
   *
   * @public
   */
  RetentionPeriod?: SnaplockRetentionPeriod | undefined;

  /**
   * Specifies the retention mode of an FSx for ONTAP SnapLock volume. After it is set, it can't be changed. You can choose one of the following retention modes:
   *
   * - `COMPLIANCE`: Files transitioned to write once, read many (WORM) on a Compliance volume can't be deleted until their retention periods expire. This retention mode is used to address government or industry-specific mandates or to protect against ransomware attacks. For more information, see [SnapLock Compliance](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/snaplock-compliance.html).
   * - `ENTERPRISE`: Files transitioned to WORM on an Enterprise volume can be deleted by authorized users before their retention periods expire using privileged delete. This retention mode is used to advance an organization's data integrity and internal compliance or to test retention settings before using SnapLock Compliance. For more information, see [SnapLock Enterprise](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/snaplock-enterprise.html).
   *
   * @public
   */
  SnaplockType?: SnaplockType | undefined;

  /**
   * Enables or disables volume-append mode on an FSx for ONTAP SnapLock volume. Volume-append mode allows you to create WORM-appendable files and write data to them incrementally. The default value is `false`.
   *
   * For more information, see [Volume-append mode](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/worm-state.html#worm-state-append).
   *
   * @public
   */
  VolumeAppendModeEnabled?: boolean | undefined;
}

/**
 * Describes the data tiering policy for an ONTAP volume. When enabled, Amazon FSx for ONTAP's intelligent tiering automatically transitions a volume's data between the file system's primary storage and capacity pool storage based on your access patterns.
 *
 * Valid tiering policies are the following:
 *
 * - `SNAPSHOT_ONLY` - (Default value) moves cold snapshots to the capacity pool storage tier.
 *
 * - `AUTO` - moves cold user data and snapshots to the capacity pool storage tier based on your access patterns.
 *
 * - `ALL` - moves all user data blocks in both the active file system and Snapshot copies to the storage pool tier.
 *
 * - `NONE` - keeps a volume's data in the primary storage tier, preventing it from being moved to the capacity pool tier.
 *
 * @public
 */
export interface TieringPolicy {
  /**
   * Specifies the number of days that user data in a volume must remain inactive before it is considered "cold" and moved to the capacity pool. Used with the `AUTO` and `SNAPSHOT_ONLY` tiering policies. Enter a whole number between 2 and 183. Default values are 31 days for `AUTO` and 2 days for `SNAPSHOT_ONLY`.
   *
   * @public
   */
  CoolingPeriod?: number | undefined;

  /**
   * Specifies the tiering policy used to transition data. Default value is `SNAPSHOT_ONLY`.
   *
   * - `SNAPSHOT_ONLY` - moves cold snapshots to the capacity pool storage tier.
   * - `AUTO` - moves cold user data and snapshots to the capacity pool storage tier based on your access patterns.
   * - `ALL` - moves all user data blocks in both the active file system and Snapshot copies to the storage pool tier.
   * - `NONE` - keeps a volume's data in the primary storage tier, preventing it from being moved to the capacity pool tier.
   *
   * @public
   */
  Name?: TieringPolicyName | undefined;
}

/**
 * The configuration of an Amazon FSx for NetApp ONTAP volume.
 *
 * @public
 */
export interface OntapVolumeConfiguration {
  /**
   * Specifies the FlexCache endpoint type of the volume. Valid values are the following:
   *
   * - `NONE` specifies that the volume doesn't have a FlexCache configuration. `NONE` is the default.
   * - `ORIGIN` specifies that the volume is the origin volume for a FlexCache volume.
   * - `CACHE` specifies that the volume is a FlexCache volume.
   *
   * @public
   */
  FlexCacheEndpointType?: FlexCacheEndpointType | undefined;

  /**
   * Specifies the directory that network-attached storage (NAS) clients use to mount the volume, along with the storage virtual machine (SVM) Domain Name System (DNS) name or IP address. You can create a `JunctionPath` directly below a parent volume junction or on a directory within a volume. A `JunctionPath` for a volume named `vol3` might be `/vol1/vol2/vol3`, or `/vol1/dir2/vol3`, or even `/dir1/dir2/vol3`.
   *
   * @public
   */
  JunctionPath?: string | undefined;

  /**
   * The security style for the volume, which can be `UNIX`, `NTFS`, or `MIXED`.
   *
   * @public
   */
  SecurityStyle?: SecurityStyle | undefined;

  /**
   * The configured size of the volume, in megabytes (MBs).
   *
   * @public
   */
  SizeInMegabytes?: number | undefined;

  /**
   * The volume's storage efficiency setting.
   *
   * @public
   */
  StorageEfficiencyEnabled?: boolean | undefined;

  /**
   * The ID of the volume's storage virtual machine.
   *
   * @public
   */
  StorageVirtualMachineId?: string | undefined;

  /**
   * A Boolean flag indicating whether this volume is the root volume for its storage virtual machine (SVM). Only one volume on an SVM can be the root volume. This value defaults to `false`. If this value is `true`, then this is the SVM root volume.
   *
   * This flag is useful when you're deleting an SVM, because you must first delete all non-root volumes. This flag, when set to `false`, helps you identify which volumes to delete before you can delete the SVM.
   *
   * @public
   */
  StorageVirtualMachineRoot?: boolean | undefined;

  /**
   * The volume's `TieringPolicy` setting.
   *
   * @public
   */
  TieringPolicy?: TieringPolicy | undefined;

  /**
   * The volume's universally unique identifier (UUID).
   *
   * @public
   */
  UUID?: string | undefined;

  /**
   * Specifies the type of volume. Valid values are the following:
   *
   * - `RW` specifies a read/write volume. `RW` is the default.
   * - `DP` specifies a data-protection volume. You can protect data by replicating it to data-protection mirror copies. If a disaster occurs, you can use these data-protection mirror copies to recover data.
   * - `LS` specifies a load-sharing mirror volume. A load-sharing mirror reduces the network traffic to a FlexVol volume by providing additional read-only access to clients.
   *
   * @public
   */
  OntapVolumeType?: OntapVolumeType | undefined;

  /**
   * Specifies the snapshot policy for the volume. There are three built-in snapshot policies:
   *
   * - `default`: This is the default policy. A maximum of six hourly snapshots taken five minutes past the hour. A maximum of two daily snapshots taken Monday through Saturday at 10 minutes after midnight. A maximum of two weekly snapshots taken every Sunday at 15 minutes after midnight.
   * - `default-1weekly`: This policy is the same as the `default` policy except that it only retains one snapshot from the weekly schedule.
   * - `none`: This policy does not take any snapshots. This policy can be assigned to volumes to prevent automatic snapshots from being taken.
   *
   * You can also provide the name of a custom policy that you created with the ONTAP CLI or REST API.
   *
   * For more information, see [Snapshot policies](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/snapshots-ontap.html#snapshot-policies) in the Amazon FSx for NetApp ONTAP User Guide.
   *
   * @public
   */
  SnapshotPolicy?: string | undefined;

  /**
   * A boolean flag indicating whether tags for the volume should be copied to backups. This value defaults to false. If it's set to true, all tags for the volume are copied to all automatic and user-initiated backups where the user doesn't specify tags. If this value is true, and you specify one or more tags, only the specified tags are copied to backups. If you specify one or more tags when creating a user-initiated backup, no tags are copied from the volume, regardless of this value.
   *
   * @public
   */
  CopyTagsToBackups?: boolean | undefined;

  /**
   * The SnapLock configuration object for an FSx for ONTAP SnapLock volume.
   *
   * @public
   */
  SnaplockConfiguration?: SnaplockConfiguration | undefined;

  /**
   * Use to specify the style of an ONTAP volume. For more information about FlexVols and FlexGroups, see [Volume types](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/volume-types.html) in Amazon FSx for NetApp ONTAP User Guide.
   *
   * @public
   */
  VolumeStyle?: VolumeStyle | undefined;

  /**
   * This structure specifies configuration options for a volume’s storage aggregate or aggregates.
   *
   * @public
   */
  AggregateConfiguration?: AggregateConfiguration | undefined;

  /**
   * The configured size of the volume, in bytes.
   *
   * @public
   */
  SizeInBytes?: number | undefined;
}

/**
 * Specifies who can mount an OpenZFS file system and the options available while mounting the file system.
 *
 * @public
 */
export interface OpenZFSClientConfiguration {
  /**
   * A value that specifies who can mount the file system. You can provide a wildcard character (`*`), an IP address (`0.0.0.0`), or a CIDR address (`192.0.2.0/24`). By default, Amazon FSx uses the wildcard character when specifying the client.
   *
   * @public
   */
  Clients: string | undefined;

  /**
   * The options to use when mounting the file system. For a list of options that you can use with Network File System (NFS), see the [exports(5) - Linux man page](https://linux.die.net/man/5/exports). When choosing your options, consider the following:
   *
   * - `crossmnt` is used by default. If you don't specify `crossmnt` when changing the client configuration, you won't be able to see or access snapshots in your file system's snapshot directory.
   * - `sync` is used by default. If you instead specify `async`, the system acknowledges writes before writing to disk. If the system crashes before the writes are finished, you lose the unwritten data.
   *
   * @public
   */
  Options: string[] | undefined;
}

/**
 * The Network File System (NFS) configurations for mounting an Amazon FSx for OpenZFS file system.
 *
 * @public
 */
export interface OpenZFSNfsExport {
  /**
   * A list of configuration objects that contain the client and options for mounting the OpenZFS file system.
   *
   * @public
   */
  ClientConfigurations: OpenZFSClientConfiguration[] | undefined;
}

/**
 * The snapshot configuration used when creating an Amazon FSx for OpenZFS volume from a snapshot.
 *
 * @public
 */
export interface OpenZFSOriginSnapshotConfiguration {
  /**
   * The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services resources. We require an ARN when you need to specify a resource unambiguously across all of Amazon Web Services. For more information, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  SnapshotARN?: string | undefined;

  /**
   * The strategy used when copying data from the snapshot to the new volume.
   *
   * - `CLONE` - The new volume references the data in the origin snapshot. Cloning a snapshot is faster than copying the data from a snapshot to a new volume and doesn't consume disk throughput. However, the origin snapshot can't be deleted if there is a volume using its copied data.
   * - `FULL_COPY` - Copies all data from the snapshot to the new volume.
   *
   * > **Note:** The `INCREMENTAL_COPY` option is only for updating an existing volume by using a snapshot from another FSx for OpenZFS file system. For more information, see [CopySnapshotAndUpdateVolume](https://docs.aws.amazon.com/fsx/latest/APIReference/API_CopySnapshotAndUpdateVolume.html).
   *
   * @public
   */
  CopyStrategy?: OpenZFSCopyStrategy | undefined;
}

/**
 * Used to configure quotas that define how much storage a user or group can use on an FSx for OpenZFS volume. For more information, see [Volume properties](https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/managing-volumes.html#volume-properties) in the FSx for OpenZFS User Guide.
 *
 * @public
 */
export interface OpenZFSUserOrGroupQuota {
  /**
   * Specifies whether the quota applies to a user or group.
   *
   * @public
   */
  Type: OpenZFSQuotaType | undefined;

  /**
   * The ID of the user or group that the quota applies to.
   *
   * @public
   */
  Id: number | undefined;

  /**
   * The user or group's storage quota, in gibibytes (GiB).
   *
   * @public
   */
  StorageCapacityQuotaGiB: number | undefined;
}

/**
 * The configuration of an Amazon FSx for OpenZFS volume.
 *
 * @public
 */
export interface OpenZFSVolumeConfiguration {
  /**
   * The ID of the parent volume.
   *
   * @public
   */
  ParentVolumeId?: string | undefined;

  /**
   * The path to the volume from the root volume. For example, `fsx/parentVolume/volume1`.
   *
   * @public
   */
  VolumePath?: string | undefined;

  /**
   * The amount of storage in gibibytes (GiB) to reserve from the parent volume. You can't reserve more storage than the parent volume has reserved.
   *
   * @public
   */
  StorageCapacityReservationGiB?: number | undefined;

  /**
   * The maximum amount of storage in gibibytes (GiB) that the volume can use from its parent. You can specify a quota larger than the storage on the parent volume.
   *
   * @public
   */
  StorageCapacityQuotaGiB?: number | undefined;

  /**
   * The record size of an OpenZFS volume, in kibibytes (KiB). Valid values are 4, 8, 16, 32, 64, 128, 256, 512, or 1024 KiB. The default is 128 KiB. Most workloads should use the default record size. For guidance on when to set a custom record size, see the *Amazon FSx for OpenZFS User Guide*.
   *
   * @public
   */
  RecordSizeKiB?: number | undefined;

  /**
   * Specifies the method used to compress the data on the volume. The compression type is `NONE` by default.
   *
   * - `NONE` - Doesn't compress the data on the volume. `NONE` is the default.
   * - `ZSTD` - Compresses the data in the volume using the Zstandard (ZSTD) compression algorithm. Compared to LZ4, Z-Standard provides a better compression ratio to minimize on-disk storage utilization.
   * - `LZ4` - Compresses the data in the volume using the LZ4 compression algorithm. Compared to Z-Standard, LZ4 is less compute-intensive and delivers higher write throughput speeds.
   *
   * @public
   */
  DataCompressionType?: OpenZFSDataCompressionType | undefined;

  /**
   * A Boolean value indicating whether tags for the volume should be copied to snapshots. This value defaults to `false`. If it's set to `true`, all tags for the volume are copied to snapshots where the user doesn't specify tags. If this value is `true` and you specify one or more tags, only the specified tags are copied to snapshots. If you specify one or more tags when creating the snapshot, no tags are copied from the volume, regardless of this value.
   *
   * @public
   */
  CopyTagsToSnapshots?: boolean | undefined;

  /**
   * The configuration object that specifies the snapshot to use as the origin of the data for the volume.
   *
   * @public
   */
  OriginSnapshot?: OpenZFSOriginSnapshotConfiguration | undefined;

  /**
   * A Boolean value indicating whether the volume is read-only.
   *
   * @public
   */
  ReadOnly?: boolean | undefined;

  /**
   * The configuration object for mounting a Network File System (NFS) file system.
   *
   * @public
   */
  NfsExports?: OpenZFSNfsExport[] | undefined;

  /**
   * An object specifying how much storage users or groups can use on the volume.
   *
   * @public
   */
  UserAndGroupQuotas?: OpenZFSUserOrGroupQuota[] | undefined;

  /**
   * Specifies the ID of the snapshot to which the volume was restored.
   *
   * @public
   */
  RestoreToSnapshot?: string | undefined;

  /**
   * A Boolean value indicating whether snapshots between the current state and the specified snapshot should be deleted when a volume is restored from snapshot.
   *
   * @public
   */
  DeleteIntermediateSnaphots?: boolean | undefined;

  /**
   * A Boolean value indicating whether dependent clone volumes created from intermediate snapshots should be deleted when a volume is restored from snapshot.
   *
   * @public
   */
  DeleteClonedVolumes?: boolean | undefined;

  /**
   * A Boolean value indicating whether snapshot data that differs between the current state and the specified snapshot should be overwritten when a volume is restored from a snapshot.
   *
   * @public
   */
  DeleteIntermediateData?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services resources. We require an ARN when you need to specify a resource unambiguously across all of Amazon Web Services. For more information, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  SourceSnapshotARN?: string | undefined;

  /**
   * The ID of the snapshot that's being copied or was most recently copied to the destination volume.
   *
   * @public
   */
  DestinationSnapshot?: string | undefined;

  /**
   * Specifies the strategy used when copying data from the snapshot to the new volume.
   *
   * - `CLONE` - The new volume references the data in the origin snapshot. Cloning a snapshot is faster than copying data from the snapshot to a new volume and doesn't consume disk throughput. However, the origin snapshot can't be deleted if there is a volume using its copied data.
   * - `FULL_COPY` - Copies all data from the snapshot to the new volume.
   *
   *   Specify this option to create the volume from a snapshot on another FSx for OpenZFS file system.
   *
   * > **Note:** The `INCREMENTAL_COPY` option is only for updating an existing volume by using a snapshot from another FSx for OpenZFS file system. For more information, see [CopySnapshotAndUpdateVolume](https://docs.aws.amazon.com/fsx/latest/APIReference/API_CopySnapshotAndUpdateVolume.html).
   *
   * @public
   */
  CopyStrategy?: OpenZFSCopyStrategy | undefined;
}

/**
 * The request object specifying one or more DNS alias names to associate with an Amazon FSx for Windows File Server file system.
 *
 * @public
 */
export interface AssociateFileSystemAliasesRequest {
  /**
   * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * Specifies the file system with which you want to associate one or more DNS aliases.
   *
   * @public
   */
  FileSystemId: string | undefined;

  /**
   * An array of one or more DNS alias names to associate with the file system. The alias name has to comply with the following formatting requirements:
   *
   * - Formatted as a fully-qualified domain name (FQDN), *`hostname.domain`* , for example, `accounting.corp.example.com`.
   * - Can contain alphanumeric characters and the hyphen (-).
   * - Cannot start or end with a hyphen.
   * - Can start with a numeric.
   *
   * For DNS alias names, Amazon FSx stores alphabetic characters as lowercase letters (a-z), regardless of how you specify them: as uppercase letters, lowercase letters, or the corresponding letters in escape codes.
   *
   * @public
   */
  Aliases: string[] | undefined;
}

/**
 * The system generated response showing the DNS aliases that Amazon FSx is attempting to associate with the file system. Use the API operation to monitor the status of the aliases Amazon FSx is associating with the file system. It can take up to 2.5 minutes for the alias status to change from `CREATING` to `AVAILABLE`.
 *
 * @public
 */
export interface AssociateFileSystemAliasesResponse {
  /**
   * An array of the DNS aliases that Amazon FSx is associating with the file system.
   *
   * @public
   */
  Aliases?: Alias[] | undefined;
}

/**
 * Describes a data repository association's automatic export policy. The `AutoExportPolicy` defines the types of updated objects on the file system that will be automatically exported to the data repository. As you create, modify, or delete files, Amazon FSx for Lustre automatically exports the defined changes asynchronously once your application finishes modifying the file.
 *
 * The `AutoExportPolicy` is only supported on Amazon FSx for Lustre file systems with a data repository association.
 *
 * @public
 */
export interface AutoExportPolicy {
  /**
   * The `AutoExportPolicy` can have the following event values:
   *
   * - `NEW` - New files and directories are automatically exported to the data repository as they are added to the file system.
   * - `CHANGED` - Changes to files and directories on the file system are automatically exported to the data repository.
   * - `DELETED` - Files and directories are automatically deleted on the data repository when they are deleted on the file system.
   *
   * You can define any combination of event types for your `AutoExportPolicy`.
   *
   * @public
   */
  Events?: EventType[] | undefined;
}

/**
 * Describes the data repository association's automatic import policy. The AutoImportPolicy defines how Amazon FSx keeps your file metadata and directory listings up to date by importing changes to your Amazon FSx for Lustre file system as you modify objects in a linked S3 bucket.
 *
 * The `AutoImportPolicy` is only supported on Amazon FSx for Lustre file systems with a data repository association.
 *
 * @public
 */
export interface AutoImportPolicy {
  /**
   * The `AutoImportPolicy` can have the following event values:
   *
   * - `NEW` - Amazon FSx automatically imports metadata of files added to the linked S3 bucket that do not currently exist in the FSx file system.
   * - `CHANGED` - Amazon FSx automatically updates file metadata and invalidates existing file content on the file system as files change in the data repository.
   * - `DELETED` - Amazon FSx automatically deletes files on the file system as corresponding files are deleted in the data repository.
   *
   * You can define any combination of event types for your `AutoImportPolicy`.
   *
   * @public
   */
  Events?: EventType[] | undefined;
}

/**
 * Cancels a data repository task.
 *
 * @public
 */
export interface CancelDataRepositoryTaskRequest {
  /**
   * Specifies the data repository task to cancel.
   *
   * @public
   */
  TaskId: string | undefined;
}

/**
 * @public
 */
export interface CancelDataRepositoryTaskResponse {
  /**
   * The lifecycle status of the data repository task, as follows:
   *
   * - `PENDING` - Amazon FSx has not started the task.
   * - `EXECUTING` - Amazon FSx is processing the task.
   * - `FAILED` - Amazon FSx was not able to complete the task. For example, there may be files the task failed to process. The DataRepositoryTaskFailureDetails property provides more information about task failures.
   * - `SUCCEEDED` - FSx completed the task successfully.
   * - `CANCELED` - Amazon FSx canceled the task and it did not complete.
   * - `CANCELING` - FSx is in process of canceling the task.
   *
   * @public
   */
  Lifecycle?: DataRepositoryTaskLifecycle | undefined;

  /**
   * The ID of the task being canceled.
   *
   * @public
   */
  TaskId?: string | undefined;
}

/**
 * @public
 */
export interface CopyBackupRequest {
  /**
   * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The ID of the source backup. Specifies the ID of the backup that's being copied.
   *
   * @public
   */
  SourceBackupId: string | undefined;

  /**
   * The source Amazon Web Services Region of the backup. Specifies the Amazon Web Services Region from which the backup is being copied. The source and destination Regions must be in the same Amazon Web Services partition. If you don't specify a Region, `SourceRegion` defaults to the Region where the request is sent from (in-Region copy).
   *
   * @public
   */
  SourceRegion?: string | undefined;

  /**
   * Specifies the ID of the Key Management Service (KMS) key to use for encrypting data on Amazon FSx file systems, as follows:
   *
   * - Amazon FSx for Lustre `PERSISTENT_1` and `PERSISTENT_2` deployment types only.
   *
   *   `SCRATCH_1` and `SCRATCH_2` types are encrypted using the Amazon FSx service KMS key for your account.
   * - Amazon FSx for NetApp ONTAP
   * - Amazon FSx for OpenZFS
   * - Amazon FSx for Windows File Server
   *
   * If a `KmsKeyId` isn't specified, the Amazon FSx-managed KMS key for your account is used. For more information, see [Encrypt](https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html) in the *Key Management Service API Reference*.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * A Boolean flag indicating whether tags from the source backup should be copied to the backup copy. This value defaults to `false`.
   *
   * If you set `CopyTags` to `true` and the source backup has existing tags, you can use the `Tags` parameter to create new tags, provided that the sum of the source backup tags and the new tags doesn't exceed 50. Both sets of tags are merged. If there are tag conflicts (for example, two tags with the same key but different values), the tags created with the `Tags` parameter take precedence.
   *
   * @public
   */
  CopyTags?: boolean | undefined;

  /**
   * A list of `Tag` values, with a maximum of 50 elements.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * If backup creation fails, this structure contains the details of that failure.
 *
 * @public
 */
export interface BackupFailureDetails {
  /**
   * A message describing the backup-creation failure.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface CopySnapshotAndUpdateVolumeRequest {
  /**
   * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * Specifies the ID of the volume that you are copying the snapshot to.
   *
   * @public
   */
  VolumeId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services resources. We require an ARN when you need to specify a resource unambiguously across all of Amazon Web Services. For more information, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  SourceSnapshotARN: string | undefined;

  /**
   * Specifies the strategy to use when copying data from a snapshot to the volume.
   *
   * - `FULL_COPY` - Copies all data from the snapshot to the volume.
   * - `INCREMENTAL_COPY` - Copies only the snapshot data that's changed since the previous replication.
   *
   * > **Note:** `CLONE` isn't a valid copy strategy option for the `CopySnapshotAndUpdateVolume` operation.
   *
   * @public
   */
  CopyStrategy?: OpenZFSCopyStrategy | undefined;

  /**
   * Confirms that you want to delete data on the destination volume that wasn’t there during the previous snapshot replication.
   *
   * Your replication will fail if you don’t include an option for a specific type of data and that data is on your destination. For example, if you don’t include `DELETE_INTERMEDIATE_SNAPSHOTS` and there are intermediate snapshots on the destination, you can’t copy the snapshot.
   *
   * - `DELETE_INTERMEDIATE_SNAPSHOTS` - Deletes snapshots on the destination volume that aren’t on the source volume.
   * - `DELETE_CLONED_VOLUMES` - Deletes snapshot clones on the destination volume that aren't on the source volume.
   * - `DELETE_INTERMEDIATE_DATA` - Overwrites snapshots on the destination volume that don’t match the source snapshot that you’re copying.
   *
   * @public
   */
  Options?: UpdateOpenZFSVolumeOption[] | undefined;
}

/**
 * The FSx for ONTAP UNIX file system user that is used for authorizing all file access requests that are made using the S3 access point.
 *
 * @public
 */
export interface OntapUnixFileSystemUser {
  /**
   * The name of the UNIX user. The name can be up to 256 characters long.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * The FSx for ONTAP Windows file system user that is used for authorizing all file access requests that are made using the S3 access point.
 *
 * @public
 */
export interface OntapWindowsFileSystemUser {
  /**
   * The name of the Windows user. The name can be up to 256 characters long and supports Active Directory users.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * Specifies the file system user identity that will be used for authorizing all file access requests that are made using the S3 access point. The identity can be either a UNIX user or a Windows user.
 *
 * @public
 */
export interface OntapFileSystemIdentity {
  /**
   * Specifies the FSx for ONTAP user identity type. Valid values are `UNIX` and `WINDOWS`.
   *
   * @public
   */
  Type: OntapFileSystemUserType | undefined;

  /**
   * Specifies the UNIX user identity for file system operations.
   *
   * @public
   */
  UnixUser?: OntapUnixFileSystemUser | undefined;

  /**
   * Specifies the Windows user identity for file system operations.
   *
   * @public
   */
  WindowsUser?: OntapWindowsFileSystemUser | undefined;
}

/**
 * Specifies the FSx for ONTAP volume that the S3 access point will be attached to, and the file system user identity.
 *
 * @public
 */
export interface CreateAndAttachS3AccessPointOntapConfiguration {
  /**
   * The ID of the FSx for ONTAP volume to which you want the S3 access point attached.
   *
   * @public
   */
  VolumeId: string | undefined;

  /**
   * Specifies the file system user identity to use for authorizing file read and write requests that are made using this S3 access point.
   *
   * @public
   */
  FileSystemIdentity: OntapFileSystemIdentity | undefined;
}

/**
 * The FSx for OpenZFS file system user that is used for authorizing all file access requests that are made using the S3 access point.
 *
 * @public
 */
export interface OpenZFSPosixFileSystemUser {
  /**
   * The UID of the file system user.
   *
   * @public
   */
  Uid: number | undefined;

  /**
   * The GID of the file system user.
   *
   * @public
   */
  Gid: number | undefined;

  /**
   * The list of secondary GIDs for the file system user.
   *
   * @public
   */
  SecondaryGids?: number[] | undefined;
}

/**
 * Specifies the file system user identity that will be used for authorizing all file access requests that are made using the S3 access point.
 *
 * @public
 */
export interface OpenZFSFileSystemIdentity {
  /**
   * Specifies the FSx for OpenZFS user identity type, accepts only `POSIX`.
   *
   * @public
   */
  Type: OpenZFSFileSystemUserType | undefined;

  /**
   * Specifies the UID and GIDs of the file system POSIX user.
   *
   * @public
   */
  PosixUser?: OpenZFSPosixFileSystemUser | undefined;
}

/**
 * Specifies the FSx for OpenZFS volume that the S3 access point will be attached to, and the file system user identity.
 *
 * @public
 */
export interface CreateAndAttachS3AccessPointOpenZFSConfiguration {
  /**
   * The ID of the FSx for OpenZFS volume to which you want the S3 access point attached.
   *
   * @public
   */
  VolumeId: string | undefined;

  /**
   * Specifies the file system user identity to use for authorizing file read and write requests that are made using this S3 access point.
   *
   * @public
   */
  FileSystemIdentity: OpenZFSFileSystemIdentity | undefined;
}

/**
 * If included, Amazon S3 restricts access to this access point to requests from the specified virtual private cloud (VPC).
 *
 * @public
 */
export interface S3AccessPointVpcConfiguration {
  /**
   * Specifies the virtual private cloud (VPC) for the S3 access point VPC configuration, if one exists.
   *
   * @public
   */
  VpcId?: string | undefined;
}

/**
 * Used to create an S3 access point that accepts requests only from a virtual private cloud (VPC) to restrict data access to a private network.
 *
 * @public
 */
export interface CreateAndAttachS3AccessPointS3Configuration {
  /**
   * If included, Amazon S3 restricts access to this S3 access point to requests made from the specified virtual private cloud (VPC).
   *
   * @public
   */
  VpcConfiguration?: S3AccessPointVpcConfiguration | undefined;

  /**
   * Specifies an access policy to associate with the S3 access point configuration. For more information, see [Configuring IAM policies for using access points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points-policies.html) in the Amazon Simple Storage Service User Guide.
   *
   * @public
   */
  Policy?: string | undefined;
}

/**
 * @public
 */
export interface CreateAndAttachS3AccessPointRequest {
  /**
   * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The name you want to assign to this S3 access point.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The type of S3 access point you want to create. Only `OpenZFS` is supported.
   *
   * @public
   */
  Type: S3AccessPointAttachmentType | undefined;

  /**
   * Specifies the configuration to use when creating and attaching an S3 access point to an FSx for OpenZFS volume.
   *
   * @public
   */
  OpenZFSConfiguration?: CreateAndAttachS3AccessPointOpenZFSConfiguration | undefined;

  /**
   * Specifies the FSx for ONTAP volume that the S3 access point will be attached to, and the file system user identity.
   *
   * @public
   */
  OntapConfiguration?: CreateAndAttachS3AccessPointOntapConfiguration | undefined;

  /**
   * Specifies the virtual private cloud (VPC) configuration if you're creating an access point that is restricted to a VPC. For more information, see [Creating access points restricted to a virtual private cloud](https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/access-points-vpc.html).
   *
   * @public
   */
  S3AccessPoint?: CreateAndAttachS3AccessPointS3Configuration | undefined;
}

/**
 * Describes the FSx for ONTAP attachment configuration of an S3 access point attachment.
 *
 * @public
 */
export interface S3AccessPointOntapConfiguration {
  /**
   * The ID of the FSx for ONTAP volume that the S3 access point is attached to.
   *
   * @public
   */
  VolumeId?: string | undefined;

  /**
   * The file system identity used to authorize file access requests made using the S3 access point.
   *
   * @public
   */
  FileSystemIdentity?: OntapFileSystemIdentity | undefined;
}

/**
 * Describes the FSx for OpenZFS attachment configuration of an S3 access point attachment.
 *
 * @public
 */
export interface S3AccessPointOpenZFSConfiguration {
  /**
   * The ID of the FSx for OpenZFS volume that the S3 access point is attached to.
   *
   * @public
   */
  VolumeId?: string | undefined;

  /**
   * The file system identity used to authorize file access requests made using the S3 access point.
   *
   * @public
   */
  FileSystemIdentity?: OpenZFSFileSystemIdentity | undefined;
}

/**
 * Describes the S3 access point configuration of the S3 access point attachment.
 *
 * @public
 */
export interface S3AccessPoint {
  /**
   * he S3 access point's ARN.
   *
   * @public
   */
  ResourceARN?: string | undefined;

  /**
   * The S3 access point's alias.
   *
   * @public
   */
  Alias?: string | undefined;

  /**
   * The S3 access point's virtual private cloud (VPC) configuration.
   *
   * @public
   */
  VpcConfiguration?: S3AccessPointVpcConfiguration | undefined;
}

/**
 * An S3 access point attached to an Amazon FSx volume.
 *
 * @public
 */
export interface S3AccessPointAttachment {
  /**
   * The lifecycle status of the S3 access point attachment. The lifecycle can have the following values:
   *
   * - AVAILABLE - the S3 access point attachment is available for use
   * - CREATING - Amazon FSx is creating the S3 access point and attachment
   * - DELETING - Amazon FSx is deleting the S3 access point and attachment
   * - FAILED - The S3 access point attachment is in a failed state. Delete and detach the S3 access point attachment, and create a new one.
   * - UPDATING - Amazon FSx is updating the S3 access point attachment
   *
   * @public
   */
  Lifecycle?: S3AccessPointAttachmentLifecycle | undefined;

  /**
   * Describes why a resource lifecycle state changed.
   *
   * @public
   */
  LifecycleTransitionReason?: LifecycleTransitionReason | undefined;

  /**
   * The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z), also known as Unix time.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The name of the S3 access point attachment; also used for the name of the S3 access point.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The type of Amazon FSx volume that the S3 access point is attached to.
   *
   * @public
   */
  Type?: S3AccessPointAttachmentType | undefined;

  /**
   * The OpenZFSConfiguration of the S3 access point attachment.
   *
   * @public
   */
  OpenZFSConfiguration?: S3AccessPointOpenZFSConfiguration | undefined;

  /**
   * The ONTAP configuration of the S3 access point attachment.
   *
   * @public
   */
  OntapConfiguration?: S3AccessPointOntapConfiguration | undefined;

  /**
   * The S3 access point configuration of the S3 access point attachment.
   *
   * @public
   */
  S3AccessPoint?: S3AccessPoint | undefined;
}

/**
 * @public
 */
export interface CreateAndAttachS3AccessPointResponse {
  /**
   * Describes the configuration of the S3 access point created.
   *
   * @public
   */
  S3AccessPointAttachment?: S3AccessPointAttachment | undefined;
}

/**
 * The request object for the `CreateBackup` operation.
 *
 * @public
 */
export interface CreateBackupRequest {
  /**
   * The ID of the file system to back up.
   *
   * @public
   */
  FileSystemId?: string | undefined;

  /**
   * (Optional) A string of up to 63 ASCII characters that Amazon FSx uses to ensure idempotent creation. This string is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * (Optional) The tags to apply to the backup at backup creation. The key value of the `Name` tag appears in the console as the backup name. If you have set `CopyTagsToBackups` to `true`, and you specify one or more tags using the `CreateBackup` operation, no existing file system tags are copied from the file system to the backup.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * (Optional) The ID of the FSx for ONTAP volume to back up.
   *
   * @public
   */
  VolumeId?: string | undefined;
}

/**
 * The configuration for an Amazon S3 data repository linked to an Amazon FSx for Lustre file system with a data repository association. The configuration consists of an `AutoImportPolicy` that defines which file events on the data repository are automatically imported to the file system and an `AutoExportPolicy` that defines which file events on the file system are automatically exported to the data repository. File events are when files or directories are added, changed, or deleted on the file system or the data repository.
 *
 * > **Note:** Data repository associations on Amazon File Cache don't use `S3DataRepositoryConfiguration` because they don't support automatic import or automatic export.
 *
 * @public
 */
export interface S3DataRepositoryConfiguration {
  /**
   * Specifies the type of updated objects (new, changed, deleted) that will be automatically imported from the linked S3 bucket to your file system.
   *
   * @public
   */
  AutoImportPolicy?: AutoImportPolicy | undefined;

  /**
   * Specifies the type of updated objects (new, changed, deleted) that will be automatically exported from your file system to the linked S3 bucket.
   *
   * @public
   */
  AutoExportPolicy?: AutoExportPolicy | undefined;
}

/**
 * @public
 */
export interface CreateDataRepositoryAssociationRequest {
  /**
   * The globally unique ID of the file system, assigned by Amazon FSx.
   *
   * @public
   */
  FileSystemId: string | undefined;

  /**
   * A path on the file system that points to a high-level directory (such as `/ns1/`) or subdirectory (such as `/ns1/subdir/`) that will be mapped 1-1 with `DataRepositoryPath`. The leading forward slash in the name is required. Two data repository associations cannot have overlapping file system paths. For example, if a data repository is associated with file system path `/ns1/`, then you cannot link another data repository with file system path `/ns1/ns2`.
   *
   * This path specifies where in your file system files will be exported from or imported to. This file system directory can be linked to only one Amazon S3 bucket, and no other S3 bucket can be linked to the directory.
   *
   * > **Note:** If you specify only a forward slash (`/`) as the file system path, you can link only one data repository to the file system. You can only specify "/" as the file system path for the first data repository associated with a file system.
   *
   * @public
   */
  FileSystemPath?: string | undefined;

  /**
   * The path to the Amazon S3 data repository that will be linked to the file system. The path can be an S3 bucket or prefix in the format `s3://bucket-name/prefix/` (where `prefix` is optional). This path specifies where in the S3 data repository files will be imported from or exported to.
   *
   * @public
   */
  DataRepositoryPath: string | undefined;

  /**
   * Set to `true` to run an import data repository task to import metadata from the data repository to the file system after the data repository association is created. Default is `false`.
   *
   * @public
   */
  BatchImportMetaDataOnCreate?: boolean | undefined;

  /**
   * For files imported from a data repository, this value determines the stripe count and maximum amount of data per file (in MiB) stored on a single physical disk. The maximum number of disks that a single file can be striped across is limited by the total number of disks that make up the file system.
   *
   * The default chunk size is 1,024 MiB (1 GiB) and can go as high as 512,000 MiB (500 GiB). Amazon S3 objects have a maximum size of 5 TB.
   *
   * @public
   */
  ImportedFileChunkSize?: number | undefined;

  /**
   * The configuration for an Amazon S3 data repository linked to an Amazon FSx Lustre file system with a data repository association. The configuration defines which file events (new, changed, or deleted files or directories) are automatically imported from the linked data repository to the file system or automatically exported from the file system to the data repository.
   *
   * @public
   */
  S3?: S3DataRepositoryConfiguration | undefined;

  /**
   * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * A list of `Tag` values, with a maximum of 50 elements.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * The configuration for a data repository association that links an Amazon File Cache resource to an NFS data repository.
 *
 * @public
 */
export interface NFSDataRepositoryConfiguration {
  /**
   * The version of the NFS (Network File System) protocol of the NFS data repository. Currently, the only supported value is `NFS3`, which indicates that the data repository must support the NFSv3 protocol.
   *
   * @public
   */
  Version: NfsVersion | undefined;

  /**
   * A list of up to 2 IP addresses of DNS servers used to resolve the NFS file system domain name. The provided IP addresses can either be the IP addresses of a DNS forwarder or resolver that the customer manages and runs inside the customer VPC, or the IP addresses of the on-premises DNS servers.
   *
   * @public
   */
  DnsIps?: string[] | undefined;

  /**
   * This parameter is not supported for Amazon File Cache.
   *
   * @public
   */
  AutoExportPolicy?: AutoExportPolicy | undefined;
}

/**
 * The configuration of a data repository association that links an Amazon FSx for Lustre file system to an Amazon S3 bucket or an Amazon File Cache resource to an Amazon S3 bucket or an NFS file system. The data repository association configuration object is returned in the response of the following operations:
 *
 * - `CreateDataRepositoryAssociation`
 * - `UpdateDataRepositoryAssociation`
 * - `DescribeDataRepositoryAssociations`
 *
 * Data repository associations are supported on Amazon File Cache resources and all FSx for Lustre 2.12 and 2.15 file systems, excluding Intelligent-Tiering and `scratch_1` file systems.
 *
 * @public
 */
export interface DataRepositoryAssociation {
  /**
   * The system-generated, unique ID of the data repository association.
   *
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services resources. We require an ARN when you need to specify a resource unambiguously across all of Amazon Web Services. For more information, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  ResourceARN?: string | undefined;

  /**
   * The globally unique ID of the file system, assigned by Amazon FSx.
   *
   * @public
   */
  FileSystemId?: string | undefined;

  /**
   * Describes the state of a data repository association. The lifecycle can have the following values:
   *
   * - `CREATING` - The data repository association between the file system or cache and the data repository is being created. The data repository is unavailable.
   * - `AVAILABLE` - The data repository association is available for use.
   * - `MISCONFIGURED` - The data repository association is misconfigured. Until the configuration is corrected, automatic import and automatic export will not work (only for Amazon FSx for Lustre).
   * - `UPDATING` - The data repository association is undergoing a customer initiated update that might affect its availability.
   * - `DELETING` - The data repository association is undergoing a customer initiated deletion.
   * - `FAILED` - The data repository association is in a terminal state that cannot be recovered.
   *
   * @public
   */
  Lifecycle?: DataRepositoryLifecycle | undefined;

  /**
   * Provides detailed information about the data repository if its `Lifecycle` is set to `MISCONFIGURED` or `FAILED`.
   *
   * @public
   */
  FailureDetails?: DataRepositoryFailureDetails | undefined;

  /**
   * A path on the Amazon FSx for Lustre file system that points to a high-level directory (such as `/ns1/`) or subdirectory (such as `/ns1/subdir/`) that will be mapped 1-1 with `DataRepositoryPath`. The leading forward slash in the name is required. Two data repository associations cannot have overlapping file system paths. For example, if a data repository is associated with file system path `/ns1/`, then you cannot link another data repository with file system path `/ns1/ns2`.
   *
   * This path specifies where in your file system files will be exported from or imported to. This file system directory can be linked to only one Amazon S3 bucket, and no other S3 bucket can be linked to the directory.
   *
   * > **Note:** If you specify only a forward slash (`/`) as the file system path, you can link only one data repository to the file system. You can only specify "/" as the file system path for the first data repository associated with a file system.
   *
   * @public
   */
  FileSystemPath?: string | undefined;

  /**
   * The path to the data repository that will be linked to the cache or file system.
   *
   * - For Amazon File Cache, the path can be an NFS data repository that will be linked to the cache. The path can be in one of two formats:
   *
   *   - If you are not using the `DataRepositorySubdirectories` parameter, the path is to an NFS Export directory (or one of its subdirectories) in the format `nsf://nfs-domain-name/exportpath`. You can therefore link a single NFS Export to a single data repository association.
   *   - If you are using the `DataRepositorySubdirectories` parameter, the path is the domain name of the NFS file system in the format `nfs://filer-domain-name`, which indicates the root of the subdirectories specified with the `DataRepositorySubdirectories` parameter.
   * - For Amazon File Cache, the path can be an S3 bucket or prefix in the format `s3://bucket-name/prefix/` (where `prefix` is optional).
   * - For Amazon FSx for Lustre, the path can be an S3 bucket or prefix in the format `s3://bucket-name/prefix/` (where `prefix` is optional).
   *
   * @public
   */
  DataRepositoryPath?: string | undefined;

  /**
   * A boolean flag indicating whether an import data repository task to import metadata should run after the data repository association is created. The task runs if this flag is set to `true`.
   *
   * > **Note:** `BatchImportMetaDataOnCreate` is not supported for data repositories linked to an Amazon File Cache resource.
   *
   * @public
   */
  BatchImportMetaDataOnCreate?: boolean | undefined;

  /**
   * For files imported from a data repository, this value determines the stripe count and maximum amount of data per file (in MiB) stored on a single physical disk. The maximum number of disks that a single file can be striped across is limited by the total number of disks that make up the file system or cache.
   *
   * The default chunk size is 1,024 MiB (1 GiB) and can go as high as 512,000 MiB (500 GiB). Amazon S3 objects have a maximum size of 5 TB.
   *
   * @public
   */
  ImportedFileChunkSize?: number | undefined;

  /**
   * The configuration for an Amazon S3 data repository linked to an Amazon FSx for Lustre file system with a data repository association.
   *
   * @public
   */
  S3?: S3DataRepositoryConfiguration | undefined;

  /**
   * A list of `Tag` values, with a maximum of 50 elements.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z), also known as Unix time.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The globally unique ID of the Amazon File Cache resource.
   *
   * @public
   */
  FileCacheId?: string | undefined;

  /**
   * A path on the Amazon File Cache that points to a high-level directory (such as `/ns1/`) or subdirectory (such as `/ns1/subdir/`) that will be mapped 1-1 with `DataRepositoryPath`. The leading forward slash in the path is required. Two data repository associations cannot have overlapping cache paths. For example, if a data repository is associated with cache path `/ns1/`, then you cannot link another data repository with cache path `/ns1/ns2`.
   *
   * This path specifies the directory in your cache where files will be exported from. This cache directory can be linked to only one data repository (S3 or NFS) and no other data repository can be linked to the directory.
   *
   * > **Note:**
   * >
   * > The cache path can only be set to root (/) on an NFS DRA when `DataRepositorySubdirectories` is specified. If you specify root (/) as the cache path, you can create only one DRA on the cache.
   * >
   * > The cache path cannot be set to root (/) for an S3 DRA.
   *
   * @public
   */
  FileCachePath?: string | undefined;

  /**
   * For Amazon File Cache, a list of NFS Exports that will be linked with an NFS data repository association. All the subdirectories must be on a single NFS file system. The Export paths are in the format `/exportpath1`. To use this parameter, you must configure `DataRepositoryPath` as the domain name of the NFS file system. The NFS file system domain name in effect is the root of the subdirectories. Note that `DataRepositorySubdirectories` is not supported for S3 data repositories.
   *
   * @public
   */
  DataRepositorySubdirectories?: string[] | undefined;

  /**
   * The configuration for an NFS data repository linked to an Amazon File Cache resource with a data repository association.
   *
   * @public
   */
  NFS?: NFSDataRepositoryConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateDataRepositoryAssociationResponse {
  /**
   * The response object returned after the data repository association is created.
   *
   * @public
   */
  Association?: DataRepositoryAssociation | undefined;
}

/**
 * Defines the minimum amount of time since last access for a file to be eligible for release. Only files that have been exported to S3 and that were last accessed or modified before this point-in-time are eligible to be released from the Amazon FSx for Lustre file system.
 *
 * @public
 */
export interface DurationSinceLastAccess {
  /**
   * The unit of time used by the `Value` parameter to determine if a file can be released, based on when it was last accessed. `DAYS` is the only supported value. This is a required parameter.
   *
   * @public
   */
  Unit?: Unit | undefined;

  /**
   * An integer that represents the minimum amount of time (in days) since a file was last accessed in the file system. Only exported files with a `MAX(atime, ctime, mtime)` timestamp that is more than this amount of time in the past (relative to the task create time) will be released. The default of `Value` is `0`. This is a required parameter.
   *
   * > **Note:** If an exported file meets the last accessed time criteria, its file or directory path must also be specified in the `Paths` parameter of the operation in order for the file to be released.
   *
   * @public
   */
  Value?: number | undefined;
}

/**
 * The configuration that specifies a minimum amount of time since last access for an exported file to be eligible for release from an Amazon FSx for Lustre file system. Only files that were last accessed before this point-in-time can be released. For example, if you specify a last accessed time criteria of 9 days, only files that were last accessed 9.00001 or more days ago can be released.
 *
 * Only file data that has been exported to S3 can be released. Files that have not yet been exported to S3, such as new or changed files that have not been exported, are not eligible for release. When files are released, their metadata stays on the file system, so they can still be accessed later. Users and applications can access a released file by reading the file again, which restores data from Amazon S3 to the FSx for Lustre file system.
 *
 * > **Note:** If a file meets the last accessed time criteria, its file or directory path must also be specified with the `Paths` parameter of the operation in order for the file to be released.
 *
 * @public
 */
export interface ReleaseConfiguration {
  /**
   * Defines the point-in-time since an exported file was last accessed, in order for that file to be eligible for release. Only files that were last accessed before this point-in-time are eligible to be released from the file system.
   *
   * @public
   */
  DurationSinceLastAccess?: DurationSinceLastAccess | undefined;
}

/**
 * Provides a report detailing the data repository task results of the files processed that match the criteria specified in the report `Scope` parameter. FSx delivers the report to the file system's linked data repository in Amazon S3, using the path specified in the report `Path` parameter. You can specify whether or not a report gets generated for a task using the `Enabled` parameter.
 *
 * @public
 */
export interface CompletionReport {
  /**
   * Set `Enabled` to `True` to generate a `CompletionReport` when the task completes. If set to `true`, then you need to provide a report `Scope`, `Path`, and `Format`. Set `Enabled` to `False` if you do not want a `CompletionReport` generated when the task completes.
   *
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * Required if `Enabled` is set to `true`. Specifies the location of the report on the file system's linked S3 data repository. An absolute path that defines where the completion report will be stored in the destination location. The `Path` you provide must be located within the file system’s ExportPath. An example `Path` value is "s3://amzn-s3-demo-bucket/myExportPath/optionalPrefix". The report provides the following information for each file in the report: FilePath, FileStatus, and ErrorCode.
   *
   * @public
   */
  Path?: string | undefined;

  /**
   * Required if `Enabled` is set to `true`. Specifies the format of the `CompletionReport`. `REPORT_CSV_20191124` is the only format currently supported. When `Format` is set to `REPORT_CSV_20191124`, the `CompletionReport` is provided in CSV format, and is delivered to `\{path\}/task-\{id\}/failures.csv`.
   *
   * @public
   */
  Format?: ReportFormat | undefined;

  /**
   * Required if `Enabled` is set to `true`. Specifies the scope of the `CompletionReport`; `FAILED_FILES_ONLY` is the only scope currently supported. When `Scope` is set to `FAILED_FILES_ONLY`, the `CompletionReport` only contains information about files that the data repository task failed to process.
   *
   * @public
   */
  Scope?: ReportScope | undefined;
}

/**
 * @public
 */
export interface CreateDataRepositoryTaskRequest {
  /**
   * Specifies the type of data repository task to create.
   *
   * - `EXPORT_TO_REPOSITORY` tasks export from your Amazon FSx for Lustre file system to a linked data repository.
   * - `IMPORT_METADATA_FROM_REPOSITORY` tasks import metadata changes from a linked S3 bucket to your Amazon FSx for Lustre file system.
   * - `RELEASE_DATA_FROM_FILESYSTEM` tasks release files in your Amazon FSx for Lustre file system that have been exported to a linked S3 bucket and that meet your specified release criteria.
   * - `AUTO_RELEASE_DATA` tasks automatically release files from an Amazon File Cache resource.
   *
   * @public
   */
  Type: DataRepositoryTaskType | undefined;

  /**
   * A list of paths for the data repository task to use when the task is processed. If a path that you provide isn't valid, the task fails. If you don't provide paths, the default behavior is to export all files to S3 (for export tasks), import all files from S3 (for import tasks), or release all exported files that meet the last accessed time criteria (for release tasks).
   *
   * - For export tasks, the list contains paths on the FSx for Lustre file system from which the files are exported to the Amazon S3 bucket. The default path is the file system root directory. The paths you provide need to be relative to the mount point of the file system. If the mount point is `/mnt/fsx` and `/mnt/fsx/path1` is a directory or file on the file system you want to export, then the path to provide is `path1`.
   * - For import tasks, the list contains paths in the Amazon S3 bucket from which POSIX metadata changes are imported to the FSx for Lustre file system. The path can be an S3 bucket or prefix in the format `s3://bucket-name/prefix` (where `prefix` is optional).
   * - For release tasks, the list contains directory or file paths on the FSx for Lustre file system from which to release exported files. If a directory is specified, files within the directory are released. If a file path is specified, only that file is released. To release all exported files in the file system, specify a forward slash (/) as the path.
   *
   *   > **Note:** A file must also meet the last accessed time criteria specified in for the file to be released.
   *
   * @public
   */
  Paths?: string[] | undefined;

  /**
   * The globally unique ID of the file system, assigned by Amazon FSx.
   *
   * @public
   */
  FileSystemId: string | undefined;

  /**
   * Defines whether or not Amazon FSx provides a CompletionReport once the task has completed. A CompletionReport provides a detailed report on the files that Amazon FSx processed that meet the criteria specified by the `Scope` parameter. For more information, see [Working with Task Completion Reports](https://docs.aws.amazon.com/fsx/latest/LustreGuide/task-completion-report.html).
   *
   * @public
   */
  Report: CompletionReport | undefined;

  /**
   * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * A list of `Tag` values, with a maximum of 50 elements.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Specifies the amount of data to release, in GiB, by an Amazon File Cache `AUTO_RELEASE_DATA` task that automatically releases files from the cache.
   *
   * @public
   */
  CapacityToRelease?: number | undefined;

  /**
   * The configuration that specifies the last accessed time criteria for files that will be released from an Amazon FSx for Lustre file system.
   *
   * @public
   */
  ReleaseConfiguration?: ReleaseConfiguration | undefined;
}

/**
 * Provides information about why a data repository task failed. Only populated when the task `Lifecycle` is set to `FAILED`.
 *
 * @public
 */
export interface DataRepositoryTaskFailureDetails {
  /**
   * A detailed error message.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * Provides the task status showing a running total of the total number of files to be processed, the number successfully processed, and the number of files the task failed to process.
 *
 * @public
 */
export interface DataRepositoryTaskStatus {
  /**
   * The total number of files that the task will process. While a task is executing, the sum of `SucceededCount` plus `FailedCount` may not equal `TotalCount`. When the task is complete, `TotalCount` equals the sum of `SucceededCount` plus `FailedCount`.
   *
   * @public
   */
  TotalCount?: number | undefined;

  /**
   * A running total of the number of files that the task has successfully processed.
   *
   * @public
   */
  SucceededCount?: number | undefined;

  /**
   * A running total of the number of files that the task failed to process.
   *
   * @public
   */
  FailedCount?: number | undefined;

  /**
   * The time at which the task status was last updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * The total amount of data, in GiB, released by an Amazon File Cache AUTO_RELEASE_DATA task that automatically releases files from the cache.
   *
   * @public
   */
  ReleasedCapacity?: number | undefined;
}

/**
 * A description of the data repository task.
 *
 * - You use import and export data repository tasks to perform bulk transfer operations between an Amazon FSx for Lustre file system and a linked data repository.
 * - You use release data repository tasks to release files that have been exported to a linked S3 bucket from your Amazon FSx for Lustre file system.
 * - An Amazon File Cache resource uses a task to automatically release files from the cache.
 *
 * To learn more about data repository tasks, see [Data Repository Tasks](https://docs.aws.amazon.com/fsx/latest/LustreGuide/data-repository-tasks.html).
 *
 * @public
 */
export interface DataRepositoryTask {
  /**
   * The system-generated, unique 17-digit ID of the data repository task.
   *
   * @public
   */
  TaskId: string | undefined;

  /**
   * The lifecycle status of the data repository task, as follows:
   *
   * - `PENDING` - The task has not started.
   * - `EXECUTING` - The task is in process.
   * - `FAILED` - The task was not able to be completed. For example, there may be files the task failed to process. The DataRepositoryTaskFailureDetails property provides more information about task failures.
   * - `SUCCEEDED` - The task has completed successfully.
   * - `CANCELED` - The task was canceled and it did not complete.
   * - `CANCELING` - The task is in process of being canceled.
   *
   * > **Note:** You cannot delete an FSx for Lustre file system if there are data repository tasks for the file system in the `PENDING` or `EXECUTING` states. Please retry when the data repository task is finished (with a status of `CANCELED`, `SUCCEEDED`, or `FAILED`). You can use the DescribeDataRepositoryTask action to monitor the task status. Contact the FSx team if you need to delete your file system immediately.
   *
   * @public
   */
  Lifecycle: DataRepositoryTaskLifecycle | undefined;

  /**
   * The type of data repository task.
   *
   * - `EXPORT_TO_REPOSITORY` tasks export from your Amazon FSx for Lustre file system to a linked data repository.
   * - `IMPORT_METADATA_FROM_REPOSITORY` tasks import metadata changes from a linked S3 bucket to your Amazon FSx for Lustre file system.
   * - `RELEASE_DATA_FROM_FILESYSTEM` tasks release files in your Amazon FSx for Lustre file system that have been exported to a linked S3 bucket and that meet your specified release criteria.
   * - `AUTO_RELEASE_DATA` tasks automatically release files from an Amazon File Cache resource.
   *
   * @public
   */
  Type: DataRepositoryTaskType | undefined;

  /**
   * The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z), also known as Unix time.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The time the system began processing the task.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The time the system completed processing the task, populated after the task is complete.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services resources. We require an ARN when you need to specify a resource unambiguously across all of Amazon Web Services. For more information, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  ResourceARN?: string | undefined;

  /**
   * A list of `Tag` values, with a maximum of 50 elements.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The globally unique ID of the file system.
   *
   * @public
   */
  FileSystemId?: string | undefined;

  /**
   * An array of paths that specify the data for the data repository task to process. For example, in an EXPORT_TO_REPOSITORY task, the paths specify which data to export to the linked data repository.
   *
   * (Default) If `Paths` is not specified, Amazon FSx uses the file system root directory.
   *
   * @public
   */
  Paths?: string[] | undefined;

  /**
   * Failure message describing why the task failed, it is populated only when `Lifecycle` is set to `FAILED`.
   *
   * @public
   */
  FailureDetails?: DataRepositoryTaskFailureDetails | undefined;

  /**
   * Provides the status of the number of files that the task has processed successfully and failed to process.
   *
   * @public
   */
  Status?: DataRepositoryTaskStatus | undefined;

  /**
   * Provides a report detailing the data repository task results of the files processed that match the criteria specified in the report `Scope` parameter. FSx delivers the report to the file system's linked data repository in Amazon S3, using the path specified in the report `Path` parameter. You can specify whether or not a report gets generated for a task using the `Enabled` parameter.
   *
   * @public
   */
  Report?: CompletionReport | undefined;

  /**
   * Specifies the amount of data to release, in GiB, by an Amazon File Cache AUTO_RELEASE_DATA task that automatically releases files from the cache.
   *
   * @public
   */
  CapacityToRelease?: number | undefined;

  /**
   * The system-generated, unique ID of the cache.
   *
   * @public
   */
  FileCacheId?: string | undefined;

  /**
   * The configuration that specifies the last accessed time criteria for files that will be released from an Amazon FSx for Lustre file system.
   *
   * @public
   */
  ReleaseConfiguration?: ReleaseConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateDataRepositoryTaskResponse {
  /**
   * The description of the data repository task that you just created.
   *
   * @public
   */
  DataRepositoryTask?: DataRepositoryTask | undefined;
}

/**
 * The configuration for an NFS data repository association (DRA) created during the creation of the Amazon File Cache resource.
 *
 * @public
 */
export interface FileCacheNFSConfiguration {
  /**
   * The version of the NFS (Network File System) protocol of the NFS data repository. The only supported value is `NFS3`, which indicates that the data repository must support the NFSv3 protocol.
   *
   * @public
   */
  Version: NfsVersion | undefined;

  /**
   * A list of up to 2 IP addresses of DNS servers used to resolve the NFS file system domain name. The provided IP addresses can either be the IP addresses of a DNS forwarder or resolver that the customer manages and runs inside the customer VPC, or the IP addresses of the on-premises DNS servers.
   *
   * @public
   */
  DnsIps?: string[] | undefined;
}

/**
 * The configuration for a data repository association (DRA) to be created during the Amazon File Cache resource creation. The DRA links the cache to either an Amazon S3 bucket or prefix, or a Network File System (NFS) data repository that supports the NFSv3 protocol.
 *
 * The DRA does not support automatic import or automatic export.
 *
 * @public
 */
export interface FileCacheDataRepositoryAssociation {
  /**
   * A path on the cache that points to a high-level directory (such as `/ns1/`) or subdirectory (such as `/ns1/subdir/`) that will be mapped 1-1 with `DataRepositoryPath`. The leading forward slash in the name is required. Two data repository associations cannot have overlapping cache paths. For example, if a data repository is associated with cache path `/ns1/`, then you cannot link another data repository with cache path `/ns1/ns2`.
   *
   * This path specifies where in your cache files will be exported from. This cache directory can be linked to only one data repository, and no data repository other can be linked to the directory.
   *
   * > **Note:**
   * >
   * > The cache path can only be set to root (/) on an NFS DRA when `DataRepositorySubdirectories` is specified. If you specify root (/) as the cache path, you can create only one DRA on the cache.
   * >
   * > The cache path cannot be set to root (/) for an S3 DRA.
   *
   * @public
   */
  FileCachePath: string | undefined;

  /**
   * The path to the S3 or NFS data repository that links to the cache. You must provide one of the following paths:
   *
   * - The path can be an NFS data repository that links to the cache. The path can be in one of two formats:
   *
   *   - If you are not using the `DataRepositorySubdirectories` parameter, the path is to an NFS Export directory (or one of its subdirectories) in the format `nfs://nfs-domain-name/exportpath`. You can therefore link a single NFS Export to a single data repository association.
   *   - If you are using the `DataRepositorySubdirectories` parameter, the path is the domain name of the NFS file system in the format `nfs://filer-domain-name`, which indicates the root of the subdirectories specified with the `DataRepositorySubdirectories` parameter.
   * - The path can be an S3 bucket or prefix in the format `s3://bucket-name/prefix/` (where `prefix` is optional).
   *
   * @public
   */
  DataRepositoryPath: string | undefined;

  /**
   * A list of NFS Exports that will be linked with this data repository association. The Export paths are in the format `/exportpath1`. To use this parameter, you must configure `DataRepositoryPath` as the domain name of the NFS file system. The NFS file system domain name in effect is the root of the subdirectories. Note that `DataRepositorySubdirectories` is not supported for S3 data repositories.
   *
   * @public
   */
  DataRepositorySubdirectories?: string[] | undefined;

  /**
   * The configuration for a data repository association that links an Amazon File Cache resource to an NFS data repository.
   *
   * @public
   */
  NFS?: FileCacheNFSConfiguration | undefined;
}

/**
 * The configuration for a Lustre MDT (Metadata Target) storage volume. The metadata on Amazon File Cache is managed by a Lustre Metadata Server (MDS) while the actual metadata is persisted on an MDT.
 *
 * @public
 */
export interface FileCacheLustreMetadataConfiguration {
  /**
   * The storage capacity of the Lustre MDT (Metadata Target) storage volume in gibibytes (GiB). The only supported value is `2400` GiB.
   *
   * @public
   */
  StorageCapacity: number | undefined;
}

/**
 * The Amazon File Cache configuration for the cache that you are creating.
 *
 * @public
 */
export interface CreateFileCacheLustreConfiguration {
  /**
   * Provisions the amount of read and write throughput for each 1 tebibyte (TiB) of cache storage capacity, in MB/s/TiB. The only supported value is `1000`.
   *
   * @public
   */
  PerUnitStorageThroughput: number | undefined;

  /**
   * Specifies the cache deployment type, which must be `CACHE_1`.
   *
   * @public
   */
  DeploymentType: FileCacheLustreDeploymentType | undefined;

  /**
   * The preferred start time to perform weekly maintenance, formatted d:HH:MM in the UTC time zone, where d is the weekday number, from 1 through 7, beginning with Monday and ending with Sunday.
   *
   * For example, `1:05:00` specifies maintenance at 5 AM Monday.
   *
   * @public
   */
  WeeklyMaintenanceStartTime?: string | undefined;

  /**
   * The configuration for a Lustre MDT (Metadata Target) storage volume.
   *
   * @public
   */
  MetadataConfiguration: FileCacheLustreMetadataConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateFileCacheRequest {
  /**
   * An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
   *
   * By using the idempotent operation, you can retry a `CreateFileCache` operation without the risk of creating an extra cache. This approach can be useful when an initial call fails in a way that makes it unclear whether a cache was created. Examples are if a transport level timeout occurred, or your connection was reset. If you use the same client request token and the initial call created a cache, the client receives success as long as the parameters are the same.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The type of cache that you're creating, which must be `LUSTRE`.
   *
   * @public
   */
  FileCacheType: FileCacheType | undefined;

  /**
   * Sets the Lustre version for the cache that you're creating, which must be `2.12`.
   *
   * @public
   */
  FileCacheTypeVersion: string | undefined;

  /**
   * The storage capacity of the cache in gibibytes (GiB). Valid values are 1200 GiB, 2400 GiB, and increments of 2400 GiB.
   *
   * @public
   */
  StorageCapacity: number | undefined;

  /**
   * A list of subnet IDs that the cache will be accessible from. You can specify only one subnet ID in a call to the `CreateFileCache` operation.
   *
   * @public
   */
  SubnetIds: string[] | undefined;

  /**
   * A list of IDs specifying the security groups to apply to all network interfaces created for Amazon File Cache access. This list isn't returned in later requests to describe the cache.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * A list of `Tag` values, with a maximum of 50 elements.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * A boolean flag indicating whether tags for the cache should be copied to data repository associations. This value defaults to false.
   *
   * @public
   */
  CopyTagsToDataRepositoryAssociations?: boolean | undefined;

  /**
   * Specifies the ID of the Key Management Service (KMS) key to use for encrypting data on an Amazon File Cache. If a `KmsKeyId` isn't specified, the Amazon FSx-managed KMS key for your account is used. For more information, see [Encrypt](https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html) in the *Key Management Service API Reference*.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The configuration for the Amazon File Cache resource being created.
   *
   * @public
   */
  LustreConfiguration?: CreateFileCacheLustreConfiguration | undefined;

  /**
   * A list of up to 8 configurations for data repository associations (DRAs) to be created during the cache creation. The DRAs link the cache to either an Amazon S3 data repository or a Network File System (NFS) data repository that supports the NFSv3 protocol.
   *
   * The DRA configurations must meet the following requirements:
   *
   * - All configurations on the list must be of the same data repository type, either all S3 or all NFS. A cache can't link to different data repository types at the same time.
   * - An NFS DRA must link to an NFS file system that supports the NFSv3 protocol.
   *
   * DRA automatic import and automatic export is not supported.
   *
   * @public
   */
  DataRepositoryAssociations?: FileCacheDataRepositoryAssociation[] | undefined;
}

/**
 * A structure providing details of any failures that occurred.
 *
 * @public
 */
export interface FileCacheFailureDetails {
  /**
   * A message describing any failures that occurred.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * The configuration for the Amazon File Cache resource.
 *
 * @public
 */
export interface FileCacheLustreConfiguration {
  /**
   * Per unit storage throughput represents the megabytes per second of read or write throughput per 1 tebibyte of storage provisioned. Cache throughput capacity is equal to Storage capacity (TiB) * PerUnitStorageThroughput (MB/s/TiB). The only supported value is `1000`.
   *
   * @public
   */
  PerUnitStorageThroughput?: number | undefined;

  /**
   * The deployment type of the Amazon File Cache resource, which must be `CACHE_1`.
   *
   * @public
   */
  DeploymentType?: FileCacheLustreDeploymentType | undefined;

  /**
   * You use the `MountName` value when mounting the cache. If you pass a cache ID to the `DescribeFileCaches` operation, it returns the the `MountName` value as part of the cache's description.
   *
   * @public
   */
  MountName?: string | undefined;

  /**
   * The preferred start time to perform weekly maintenance, formatted d:HH:MM in the UTC time zone, where d is the weekday number, from 1 through 7, beginning with Monday and ending with Sunday.
   *
   * For example, `1:05:00` specifies maintenance at 5 AM Monday.
   *
   * @public
   */
  WeeklyMaintenanceStartTime?: string | undefined;

  /**
   * The configuration for a Lustre MDT (Metadata Target) storage volume.
   *
   * @public
   */
  MetadataConfiguration?: FileCacheLustreMetadataConfiguration | undefined;

  /**
   * The configuration for Lustre logging used to write the enabled logging events for your Amazon File Cache resource to Amazon CloudWatch Logs.
   *
   * @public
   */
  LogConfiguration?: LustreLogConfiguration | undefined;
}

/**
 * The response object for the Amazon File Cache resource being created in the `CreateFileCache` operation.
 *
 * @public
 */
export interface FileCacheCreating {
  /**
   * An Amazon Web Services account ID. This ID is a 12-digit number that you use to construct Amazon Resource Names (ARNs) for resources.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z), also known as Unix time.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The system-generated, unique ID of the cache.
   *
   * @public
   */
  FileCacheId?: string | undefined;

  /**
   * The type of cache, which must be `LUSTRE`.
   *
   * @public
   */
  FileCacheType?: FileCacheType | undefined;

  /**
   * The Lustre version of the cache, which must be `2.12`.
   *
   * @public
   */
  FileCacheTypeVersion?: string | undefined;

  /**
   * The lifecycle status of the cache. The following are the possible values and what they mean:
   *
   * - `AVAILABLE` - The cache is in a healthy state, and is reachable and available for use.
   * - `CREATING` - The new cache is being created.
   * - `DELETING` - An existing cache is being deleted.
   * - `UPDATING` - The cache is undergoing a customer-initiated update.
   * - `FAILED` - An existing cache has experienced an unrecoverable failure. When creating a new cache, the cache was unable to be created.
   *
   * @public
   */
  Lifecycle?: FileCacheLifecycle | undefined;

  /**
   * A structure providing details of any failures that occurred in creating a cache.
   *
   * @public
   */
  FailureDetails?: FileCacheFailureDetails | undefined;

  /**
   * The storage capacity of the cache in gibibytes (GiB).
   *
   * @public
   */
  StorageCapacity?: number | undefined;

  /**
   * The ID of your virtual private cloud (VPC). For more information, see [VPC and subnets](https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html) in the *Amazon VPC User Guide*.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * A list of subnet IDs that the cache will be accessible from. You can specify only one subnet ID in a call to the `CreateFileCache` operation.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * A list of network interface IDs.
   *
   * @public
   */
  NetworkInterfaceIds?: string[] | undefined;

  /**
   * The Domain Name System (DNS) name for the cache.
   *
   * @public
   */
  DNSName?: string | undefined;

  /**
   * Specifies the ID of the Key Management Service (KMS) key to use for encrypting data on an Amazon File Cache. If a `KmsKeyId` isn't specified, the Amazon FSx-managed KMS key for your account is used. For more information, see [Encrypt](https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html) in the *Key Management Service API Reference*.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services resources. We require an ARN when you need to specify a resource unambiguously across all of Amazon Web Services. For more information, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  ResourceARN?: string | undefined;

  /**
   * A list of `Tag` values, with a maximum of 50 elements.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * A boolean flag indicating whether tags for the cache should be copied to data repository associations.
   *
   * @public
   */
  CopyTagsToDataRepositoryAssociations?: boolean | undefined;

  /**
   * The configuration for the Amazon File Cache resource.
   *
   * @public
   */
  LustreConfiguration?: FileCacheLustreConfiguration | undefined;

  /**
   * A list of IDs of data repository associations that are associated with this cache.
   *
   * @public
   */
  DataRepositoryAssociationIds?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateFileCacheResponse {
  /**
   * A description of the cache that was created.
   *
   * @public
   */
  FileCache?: FileCacheCreating | undefined;
}

/**
 * The Lustre logging configuration used when creating or updating an Amazon FSx for Lustre file system. An Amazon File Cache is created with Lustre logging enabled by default, with a setting of `WARN_ERROR` for the logging events. which can't be changed.
 *
 * Lustre logging writes the enabled logging events for your file system or cache to Amazon CloudWatch Logs.
 *
 * @public
 */
export interface LustreLogCreateConfiguration {
  /**
   * Sets which data repository events are logged by Amazon FSx.
   *
   * - `WARN_ONLY` - only warning events are logged.
   * - `ERROR_ONLY` - only error events are logged.
   * - `WARN_ERROR` - both warning events and error events are logged.
   * - `DISABLED` - logging of data repository events is turned off.
   *
   * @public
   */
  Level: LustreAccessAuditLogLevel | undefined;

  /**
   * The Amazon Resource Name (ARN) that specifies the destination of the logs.
   *
   * The destination can be any Amazon CloudWatch Logs log group ARN, with the following requirements:
   *
   * - The destination ARN that you provide must be in the same Amazon Web Services partition, Amazon Web Services Region, and Amazon Web Services account as your Amazon FSx file system.
   * - The name of the Amazon CloudWatch Logs log group must begin with the `/aws/fsx` prefix.
   * - If you do not provide a destination, Amazon FSx will create and use a log stream in the CloudWatch Logs `/aws/fsx/lustre` log group (for Amazon FSx for Lustre) or `/aws/fsx/filecache` (for Amazon File Cache).
   * - If `Destination` is provided and the resource does not exist, the request will fail with a `BadRequest` error.
   * - If `Level` is set to `DISABLED`, you cannot specify a destination in `Destination`.
   *
   * @public
   */
  Destination?: string | undefined;
}

/**
 * The Lustre metadata performance configuration for the creation of an Amazon FSx for Lustre file system using a `PERSISTENT_2` deployment type. The configuration uses a Metadata IOPS value to set the maximum rate of metadata disk IOPS supported by the file system.
 *
 * After creation, the file system supports increasing metadata performance. For more information on Metadata IOPS, see [Lustre metadata performance configuration](https://docs.aws.amazon.com/fsx/latest/LustreGuide/managing-metadata-performance.html#metadata-configuration) in the *Amazon FSx for Lustre User Guide*.
 *
 * @public
 */
export interface CreateFileSystemLustreMetadataConfiguration {
  /**
   * (USER_PROVISIONED mode only) Specifies the number of Metadata IOPS to provision for the file system. This parameter sets the maximum rate of metadata disk IOPS supported by the file system.
   *
   * - For SSD file systems, valid values are `1500`, `3000`, `6000`, `12000`, and multiples of `12000` up to a maximum of `192000`.
   * - For Intelligent-Tiering file systems, valid values are `6000` and `12000`.
   *
   * > **Note:** `Iops` doesn’t have a default value. If you're using USER_PROVISIONED mode, you can choose to specify a valid value. If you're using AUTOMATIC mode, you cannot specify a value because FSx for Lustre automatically sets the value based on your file system storage capacity.
   *
   * @public
   */
  Iops?: number | undefined;

  /**
   * The metadata configuration mode for provisioning Metadata IOPS for an FSx for Lustre file system using a `PERSISTENT_2` deployment type.
   *
   * - In AUTOMATIC mode (supported only on SSD file systems), FSx for Lustre automatically provisions and scales the number of Metadata IOPS for your file system based on your file system storage capacity.
   * - In USER_PROVISIONED mode, you specify the number of Metadata IOPS to provision for your file system.
   *
   * @public
   */
  Mode: MetadataConfigurationMode | undefined;
}

/**
 * The Lustre configuration for the file system being created.
 *
 * > **Note:**
 * >
 * > The following parameters are not supported for file systems with a data repository association created with .
 * >
 * > - `AutoImportPolicy`
 * > - `ExportPath`
 * > - `ImportedFileChunkSize`
 * > - `ImportPath`
 *
 * @public
 */
export interface CreateFileSystemLustreConfiguration {
  /**
   * (Optional) The preferred start time to perform weekly maintenance, formatted d:HH:MM in the UTC time zone, where d is the weekday number, from 1 through 7, beginning with Monday and ending with Sunday.
   *
   * @public
   */
  WeeklyMaintenanceStartTime?: string | undefined;

  /**
   * (Optional) The path to the Amazon S3 bucket (including the optional prefix) that you're using as the data repository for your Amazon FSx for Lustre file system. The root of your FSx for Lustre file system will be mapped to the root of the Amazon S3 bucket you select. An example is `s3://import-bucket/optional-prefix`. If you specify a prefix after the Amazon S3 bucket name, only object keys with that prefix are loaded into the file system.
   *
   * > **Note:** This parameter is not supported for file systems with a data repository association.
   *
   * @public
   */
  ImportPath?: string | undefined;

  /**
   * (Optional) Specifies the path in the Amazon S3 bucket where the root of your Amazon FSx file system is exported. The path must use the same Amazon S3 bucket as specified in ImportPath. You can provide an optional prefix to which new and changed data is to be exported from your Amazon FSx for Lustre file system. If an `ExportPath` value is not provided, Amazon FSx sets a default export path, `s3://import-bucket/FSxLustre[creation-timestamp]`. The timestamp is in UTC format, for example `s3://import-bucket/FSxLustre20181105T222312Z`.
   *
   * The Amazon S3 export bucket must be the same as the import bucket specified by `ImportPath`. If you specify only a bucket name, such as `s3://import-bucket`, you get a 1:1 mapping of file system objects to S3 bucket objects. This mapping means that the input data in S3 is overwritten on export. If you provide a custom prefix in the export path, such as `s3://import-bucket/[custom-optional-prefix]`, Amazon FSx exports the contents of your file system to that export prefix in the Amazon S3 bucket.
   *
   * > **Note:** This parameter is not supported for file systems with a data repository association.
   *
   * @public
   */
  ExportPath?: string | undefined;

  /**
   * (Optional) For files imported from a data repository, this value determines the stripe count and maximum amount of data per file (in MiB) stored on a single physical disk. The maximum number of disks that a single file can be striped across is limited by the total number of disks that make up the file system.
   *
   * The default chunk size is 1,024 MiB (1 GiB) and can go as high as 512,000 MiB (500 GiB). Amazon S3 objects have a maximum size of 5 TB.
   *
   * > **Note:** This parameter is not supported for file systems with a data repository association.
   *
   * @public
   */
  ImportedFileChunkSize?: number | undefined;

  /**
   * (Optional) Choose `SCRATCH_1` and `SCRATCH_2` deployment types when you need temporary storage and shorter-term processing of data. The `SCRATCH_2` deployment type provides in-transit encryption of data and higher burst throughput capacity than `SCRATCH_1`.
   *
   * Choose `PERSISTENT_1` for longer-term storage and for throughput-focused workloads that aren’t latency-sensitive. `PERSISTENT_1` supports encryption of data in transit, and is available in all Amazon Web Services Regions in which FSx for Lustre is available.
   *
   * Choose `PERSISTENT_2` for longer-term storage and for latency-sensitive workloads that require the highest levels of IOPS/throughput. `PERSISTENT_2` supports the SSD and Intelligent-Tiering storage classes. You can optionally specify a metadata configuration mode for `PERSISTENT_2` which supports increasing metadata performance. `PERSISTENT_2` is available in a limited number of Amazon Web Services Regions. For more information, and an up-to-date list of Amazon Web Services Regions in which `PERSISTENT_2` is available, see [Deployment and storage class options for FSx for Lustre file systems](https://docs.aws.amazon.com/fsx/latest/LustreGuide/using-fsx-lustre.html) in the *Amazon FSx for Lustre User Guide*.
   *
   * > **Note:** If you choose `PERSISTENT_2`, and you set `FileSystemTypeVersion` to `2.10`, the `CreateFileSystem` operation fails.
   *
   * Encryption of data in transit is automatically turned on when you access `SCRATCH_2`, `PERSISTENT_1`, and `PERSISTENT_2` file systems from Amazon EC2 instances that support automatic encryption in the Amazon Web Services Regions where they are available. For more information about encryption in transit for FSx for Lustre file systems, see [Encrypting data in transit](https://docs.aws.amazon.com/fsx/latest/LustreGuide/encryption-in-transit-fsxl.html) in the *Amazon FSx for Lustre User Guide*.
   *
   * (Default = `SCRATCH_1`)
   *
   * @public
   */
  DeploymentType?: LustreDeploymentType | undefined;

  /**
   * (Optional) When you create your file system, your existing S3 objects appear as file and directory listings. Use this parameter to choose how Amazon FSx keeps your file and directory listings up to date as you add or modify objects in your linked S3 bucket. `AutoImportPolicy` can have the following values:
   *
   * - `NONE` - (Default) AutoImport is off. Amazon FSx only updates file and directory listings from the linked S3 bucket when the file system is created. FSx does not update file and directory listings for any new or changed objects after choosing this option.
   * - `NEW` - AutoImport is on. Amazon FSx automatically imports directory listings of any new objects added to the linked S3 bucket that do not currently exist in the FSx file system.
   * - `NEW_CHANGED` - AutoImport is on. Amazon FSx automatically imports file and directory listings of any new objects added to the S3 bucket and any existing objects that are changed in the S3 bucket after you choose this option.
   * - `NEW_CHANGED_DELETED` - AutoImport is on. Amazon FSx automatically imports file and directory listings of any new objects added to the S3 bucket, any existing objects that are changed in the S3 bucket, and any objects that were deleted in the S3 bucket.
   *
   * For more information, see [Automatically import updates from your S3 bucket](https://docs.aws.amazon.com/fsx/latest/LustreGuide/older-deployment-types.html#legacy-auto-import-from-s3).
   *
   * > **Note:** This parameter is not supported for file systems with a data repository association.
   *
   * @public
   */
  AutoImportPolicy?: AutoImportPolicyType | undefined;

  /**
   * Required with `PERSISTENT_1` and `PERSISTENT_2` deployment types using an SSD or HDD storage class, provisions the amount of read and write throughput for each 1 tebibyte (TiB) of file system storage capacity, in MB/s/TiB. File system throughput capacity is calculated by multiplying ﬁle system storage capacity (TiB) by the `PerUnitStorageThroughput` (MB/s/TiB). For a 2.4-TiB ﬁle system, provisioning 50 MB/s/TiB of `PerUnitStorageThroughput` yields 120 MB/s of ﬁle system throughput. You pay for the amount of throughput that you provision.
   *
   * Valid values:
   *
   * - For `PERSISTENT_1` SSD storage: 50, 100, 200 MB/s/TiB.
   * - For `PERSISTENT_1` HDD storage: 12, 40 MB/s/TiB.
   * - For `PERSISTENT_2` SSD storage: 125, 250, 500, 1000 MB/s/TiB.
   *
   * @public
   */
  PerUnitStorageThroughput?: number | undefined;

  /**
   * A recurring daily time, in the format `HH:MM`. `HH` is the zero-padded hour of the day (0-23), and `MM` is the zero-padded minute of the hour. For example, `05:00` specifies 5 AM daily.
   *
   * @public
   */
  DailyAutomaticBackupStartTime?: string | undefined;

  /**
   * The number of days to retain automatic backups. Setting this property to `0` disables automatic backups. You can retain automatic backups for a maximum of 90 days. The default is `0`.
   *
   * @public
   */
  AutomaticBackupRetentionDays?: number | undefined;

  /**
   * (Optional) Not available for use with file systems that are linked to a data repository. A boolean flag indicating whether tags for the file system should be copied to backups. The default value is false. If `CopyTagsToBackups` is set to true, all file system tags are copied to all automatic and user-initiated backups when the user doesn't specify any backup-specific tags. If `CopyTagsToBackups` is set to true and you specify one or more backup tags, only the specified tags are copied to backups. If you specify one or more tags when creating a user-initiated backup, no tags are copied from the file system, regardless of this value.
   *
   * (Default = `false`)
   *
   * For more information, see [Working with backups](https://docs.aws.amazon.com/fsx/latest/LustreGuide/using-backups-fsx.html) in the *Amazon FSx for Lustre User Guide*.
   *
   * @public
   */
  CopyTagsToBackups?: boolean | undefined;

  /**
   * The type of drive cache used by `PERSISTENT_1` file systems that are provisioned with HDD storage devices. This parameter is required when storage type is HDD. Set this property to `READ` to improve the performance for frequently accessed files by caching up to 20% of the total storage capacity of the file system.
   *
   * This parameter is required when `StorageType` is set to `HDD`.
   *
   * @public
   */
  DriveCacheType?: DriveCacheType | undefined;

  /**
   * Sets the data compression configuration for the file system. `DataCompressionType` can have the following values:
   *
   * - `NONE` - (Default) Data compression is turned off when the file system is created.
   * - `LZ4` - Data compression is turned on with the LZ4 algorithm.
   *
   * For more information, see [Lustre data compression](https://docs.aws.amazon.com/fsx/latest/LustreGuide/data-compression.html) in the *Amazon FSx for Lustre User Guide*.
   *
   * @public
   */
  DataCompressionType?: DataCompressionType | undefined;

  /**
   * (Optional) Specifies whether Elastic Fabric Adapter (EFA) and GPUDirect Storage (GDS) support is enabled for the Amazon FSx for Lustre file system.
   *
   * (Default = `false`)
   *
   * @public
   */
  EfaEnabled?: boolean | undefined;

  /**
   * The Lustre logging configuration used when creating an Amazon FSx for Lustre file system. When logging is enabled, Lustre logs error and warning events for data repositories associated with your file system to Amazon CloudWatch Logs.
   *
   * @public
   */
  LogConfiguration?: LustreLogCreateConfiguration | undefined;

  /**
   * The Lustre root squash configuration used when creating an Amazon FSx for Lustre file system. When enabled, root squash restricts root-level access from clients that try to access your file system as a root user.
   *
   * @public
   */
  RootSquashConfiguration?: LustreRootSquashConfiguration | undefined;

  /**
   * The Lustre metadata performance configuration for the creation of an FSx for Lustre file system using a `PERSISTENT_2` deployment type.
   *
   * @public
   */
  MetadataConfiguration?: CreateFileSystemLustreMetadataConfiguration | undefined;

  /**
   * Specifies the throughput of an FSx for Lustre file system using the Intelligent-Tiering storage class, measured in megabytes per second (MBps). Valid values are 4000 MBps or multiples of 4000 MBps. You pay for the amount of throughput that you provision.
   *
   * @public
   */
  ThroughputCapacity?: number | undefined;

  /**
   * Specifies the optional provisioned SSD read cache on FSx for Lustre file systems that use the Intelligent-Tiering storage class. Required when `StorageType` is set to `INTELLIGENT_TIERING`.
   *
   * @public
   */
  DataReadCacheConfiguration?: LustreReadCacheConfiguration | undefined;
}

/**
 * The ONTAP configuration properties of the FSx for ONTAP file system that you are creating.
 *
 * @public
 */
export interface CreateFileSystemOntapConfiguration {
  /**
   * The number of days to retain automatic backups. Setting this property to `0` disables automatic backups. You can retain automatic backups for a maximum of 90 days. The default is `30`.
   *
   * @public
   */
  AutomaticBackupRetentionDays?: number | undefined;

  /**
   * A recurring daily time, in the format `HH:MM`. `HH` is the zero-padded hour of the day (0-23), and `MM` is the zero-padded minute of the hour. For example, `05:00` specifies 5 AM daily.
   *
   * @public
   */
  DailyAutomaticBackupStartTime?: string | undefined;

  /**
   * Specifies the FSx for ONTAP file system deployment type to use in creating the file system.
   *
   * - `MULTI_AZ_1` - A high availability file system configured for Multi-AZ redundancy to tolerate temporary Availability Zone (AZ) unavailability. This is a first-generation FSx for ONTAP file system.
   * - `MULTI_AZ_2` - A high availability file system configured for Multi-AZ redundancy to tolerate temporary AZ unavailability. This is a second-generation FSx for ONTAP file system.
   * - `SINGLE_AZ_1` - A file system configured for Single-AZ redundancy. This is a first-generation FSx for ONTAP file system.
   * - `SINGLE_AZ_2` - A file system configured with multiple high-availability (HA) pairs for Single-AZ redundancy. This is a second-generation FSx for ONTAP file system.
   *
   * For information about the use cases for Multi-AZ and Single-AZ deployments, refer to [Choosing a file system deployment type](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/high-availability-AZ.html).
   *
   * @public
   */
  DeploymentType: OntapDeploymentType | undefined;

  /**
   * (Multi-AZ only) Specifies the IPv4 address range in which the endpoints to access your file system will be created. By default in the Amazon FSx API, Amazon FSx selects an unused IP address range for you from the 198.19.* range. By default in the Amazon FSx console, Amazon FSx chooses the last 64 IP addresses from the VPC’s primary CIDR range to use as the endpoint IP address range for the file system. You can have overlapping endpoint IP addresses for file systems deployed in the same VPC/route tables, as long as they don't overlap with any subnet.
   *
   * @public
   */
  EndpointIpAddressRange?: string | undefined;

  /**
   * The ONTAP administrative password for the `fsxadmin` user with which you administer your file system using the NetApp ONTAP CLI and REST API.
   *
   * @public
   */
  FsxAdminPassword?: string | undefined;

  /**
   * The SSD IOPS configuration for the FSx for ONTAP file system.
   *
   * @public
   */
  DiskIopsConfiguration?: DiskIopsConfiguration | undefined;

  /**
   * Required when `DeploymentType` is set to `MULTI_AZ_1` or `MULTI_AZ_2`. This specifies the subnet in which you want the preferred file server to be located.
   *
   * @public
   */
  PreferredSubnetId?: string | undefined;

  /**
   * (Multi-AZ only) Specifies the route tables in which Amazon FSx creates the rules for routing traffic to the correct file server. You should specify all virtual private cloud (VPC) route tables associated with the subnets in which your clients are located. By default, Amazon FSx selects your VPC's default route table.
   *
   * > **Note:** Amazon FSx manages these route tables for Multi-AZ file systems using tag-based authentication. These route tables are tagged with `Key: AmazonFSx; Value: ManagedByAmazonFSx`. When creating FSx for ONTAP Multi-AZ file systems using CloudFormation we recommend that you add the `Key: AmazonFSx; Value: ManagedByAmazonFSx` tag manually.
   *
   * @public
   */
  RouteTableIds?: string[] | undefined;

  /**
   * Sets the throughput capacity for the file system that you're creating in megabytes per second (MBps). For more information, see [Managing throughput capacity](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-throughput-capacity.html) in the FSx for ONTAP User Guide.
   *
   * Amazon FSx responds with an HTTP status code 400 (Bad Request) for the following conditions:
   *
   * - The value of `ThroughputCapacity` and `ThroughputCapacityPerHAPair` are not the same value.
   * - The value of `ThroughputCapacity` when divided by the value of `HAPairs` is outside of the valid range for `ThroughputCapacity`.
   *
   * @public
   */
  ThroughputCapacity?: number | undefined;

  /**
   * The preferred start time to perform weekly maintenance, formatted d:HH:MM in the UTC time zone, where d is the weekday number, from 1 through 7, beginning with Monday and ending with Sunday.
   *
   * For example, `1:05:00` specifies maintenance at 5 AM Monday.
   *
   * @public
   */
  WeeklyMaintenanceStartTime?: string | undefined;

  /**
   * Specifies how many high-availability (HA) pairs of file servers will power your file system. First-generation file systems are powered by 1 HA pair. Second-generation multi-AZ file systems are powered by 1 HA pair. Second generation single-AZ file systems are powered by up to 12 HA pairs. The default value is 1. The value of this property affects the values of `StorageCapacity`, `Iops`, and `ThroughputCapacity`. For more information, see [High-availability (HA) pairs](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/administering-file-systems.html#HA-pairs) in the FSx for ONTAP user guide. Block storage protocol support (iSCSI and NVMe over TCP) is disabled on file systems with more than 6 HA pairs. For more information, see [Using block storage protocols](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/supported-fsx-clients.html#using-block-storage).
   *
   * Amazon FSx responds with an HTTP status code 400 (Bad Request) for the following conditions:
   *
   * - The value of `HAPairs` is less than 1 or greater than 12.
   * - The value of `HAPairs` is greater than 1 and the value of `DeploymentType` is `SINGLE_AZ_1`, `MULTI_AZ_1`, or `MULTI_AZ_2`.
   *
   * @public
   */
  HAPairs?: number | undefined;

  /**
   * Use to choose the throughput capacity per HA pair, rather than the total throughput for the file system.
   *
   * You can define either the `ThroughputCapacityPerHAPair` or the `ThroughputCapacity` when creating a file system, but not both.
   *
   * This field and `ThroughputCapacity` are the same for file systems powered by one HA pair.
   *
   * - For `SINGLE_AZ_1` and `MULTI_AZ_1` file systems, valid values are 128, 256, 512, 1024, 2048, or 4096 MBps.
   * - For `SINGLE_AZ_2`, valid values are 1536, 3072, or 6144 MBps.
   * - For `MULTI_AZ_2`, valid values are 384, 768, 1536, 3072, or 6144 MBps.
   *
   * Amazon FSx responds with an HTTP status code 400 (Bad Request) for the following conditions:
   *
   * - The value of `ThroughputCapacity` and `ThroughputCapacityPerHAPair` are not the same value for file systems with one HA pair.
   * - The value of deployment type is `SINGLE_AZ_2` and `ThroughputCapacity` / `ThroughputCapacityPerHAPair` is not a valid HA pair (a value between 1 and 12).
   * - The value of `ThroughputCapacityPerHAPair` is not a valid value.
   *
   * @public
   */
  ThroughputCapacityPerHAPair?: number | undefined;

  /**
   * (Multi-AZ only) Specifies the IPv6 address range in which the endpoints to access your file system will be created. By default in the Amazon FSx API and Amazon FSx console, Amazon FSx selects an available /118 IP address range for you from one of the VPC's CIDR ranges. You can have overlapping endpoint IP addresses for file systems deployed in the same VPC/route tables, as long as they don't overlap with any subnet.
   *
   * @public
   */
  EndpointIpv6AddressRange?: string | undefined;
}

/**
 * The configuration of an Amazon FSx for OpenZFS root volume.
 *
 * @public
 */
export interface OpenZFSCreateRootVolumeConfiguration {
  /**
   * Specifies the record size of an OpenZFS root volume, in kibibytes (KiB). Valid values are 4, 8, 16, 32, 64, 128, 256, 512, or 1024 KiB. The default is 128 KiB. Most workloads should use the default record size. Database workflows can benefit from a smaller record size, while streaming workflows can benefit from a larger record size. For additional guidance on setting a custom record size, see [Tips for maximizing performance](https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/performance.html#performance-tips-zfs) in the *Amazon FSx for OpenZFS User Guide*.
   *
   * @public
   */
  RecordSizeKiB?: number | undefined;

  /**
   * Specifies the method used to compress the data on the volume. The compression type is `NONE` by default.
   *
   * - `NONE` - Doesn't compress the data on the volume. `NONE` is the default.
   * - `ZSTD` - Compresses the data in the volume using the Zstandard (ZSTD) compression algorithm. Compared to LZ4, Z-Standard provides a better compression ratio to minimize on-disk storage utilization.
   * - `LZ4` - Compresses the data in the volume using the LZ4 compression algorithm. Compared to Z-Standard, LZ4 is less compute-intensive and delivers higher write throughput speeds.
   *
   * @public
   */
  DataCompressionType?: OpenZFSDataCompressionType | undefined;

  /**
   * The configuration object for mounting a file system.
   *
   * @public
   */
  NfsExports?: OpenZFSNfsExport[] | undefined;

  /**
   * An object specifying how much storage users or groups can use on the volume.
   *
   * @public
   */
  UserAndGroupQuotas?: OpenZFSUserOrGroupQuota[] | undefined;

  /**
   * A Boolean value indicating whether tags for the volume should be copied to snapshots of the volume. This value defaults to `false`. If it's set to `true`, all tags for the volume are copied to snapshots where the user doesn't specify tags. If this value is `true` and you specify one or more tags, only the specified tags are copied to snapshots. If you specify one or more tags when creating the snapshot, no tags are copied from the volume, regardless of this value.
   *
   * @public
   */
  CopyTagsToSnapshots?: boolean | undefined;

  /**
   * A Boolean value indicating whether the volume is read-only. Setting this value to `true` can be useful after you have completed changes to a volume and no longer want changes to occur.
   *
   * @public
   */
  ReadOnly?: boolean | undefined;
}

/**
 * The Amazon FSx for OpenZFS configuration properties for the file system that you are creating.
 *
 * @public
 */
export interface CreateFileSystemOpenZFSConfiguration {
  /**
   * The number of days to retain automatic backups. Setting this property to `0` disables automatic backups. You can retain automatic backups for a maximum of 90 days. The default is `30`.
   *
   * @public
   */
  AutomaticBackupRetentionDays?: number | undefined;

  /**
   * A Boolean value indicating whether tags for the file system should be copied to backups. This value defaults to `false`. If it's set to `true`, all tags for the file system are copied to all automatic and user-initiated backups where the user doesn't specify tags. If this value is `true`, and you specify one or more tags, only the specified tags are copied to backups. If you specify one or more tags when creating a user-initiated backup, no tags are copied from the file system, regardless of this value.
   *
   * @public
   */
  CopyTagsToBackups?: boolean | undefined;

  /**
   * A Boolean value indicating whether tags for the file system should be copied to volumes. This value defaults to `false`. If it's set to `true`, all tags for the file system are copied to volumes where the user doesn't specify tags. If this value is `true`, and you specify one or more tags, only the specified tags are copied to volumes. If you specify one or more tags when creating the volume, no tags are copied from the file system, regardless of this value.
   *
   * @public
   */
  CopyTagsToVolumes?: boolean | undefined;

  /**
   * A recurring daily time, in the format `HH:MM`. `HH` is the zero-padded hour of the day (0-23), and `MM` is the zero-padded minute of the hour. For example, `05:00` specifies 5 AM daily.
   *
   * @public
   */
  DailyAutomaticBackupStartTime?: string | undefined;

  /**
   * Specifies the file system deployment type. Valid values are the following:
   *
   * - `MULTI_AZ_1`- Creates file systems with high availability and durability by replicating your data and supporting failover across multiple Availability Zones in the same Amazon Web Services Region.
   * - `SINGLE_AZ_HA_2`- Creates file systems with high availability and throughput capacities of 160 - 10,240 MB/s using an NVMe L2ARC cache by deploying a primary and standby file system within the same Availability Zone.
   * - `SINGLE_AZ_HA_1`- Creates file systems with high availability and throughput capacities of 64 - 4,096 MB/s by deploying a primary and standby file system within the same Availability Zone.
   * - `SINGLE_AZ_2`- Creates file systems with throughput capacities of 160 - 10,240 MB/s using an NVMe L2ARC cache that automatically recover within a single Availability Zone.
   * - `SINGLE_AZ_1`- Creates file systems with throughput capacities of 64 - 4,096 MBs that automatically recover within a single Availability Zone.
   *
   * For a list of which Amazon Web Services Regions each deployment type is available in, see [Deployment type availability](https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/availability-durability.html#available-aws-regions). For more information on the differences in performance between deployment types, see [File system performance](https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/performance.html#zfs-fs-performance) in the *Amazon FSx for OpenZFS User Guide*.
   *
   * @public
   */
  DeploymentType: OpenZFSDeploymentType | undefined;

  /**
   * Specifies the throughput of an Amazon FSx for OpenZFS file system, measured in megabytes per second (MBps). Valid values depend on the `DeploymentType` that you choose, as follows:
   *
   * - For `MULTI_AZ_1` and `SINGLE_AZ_2`, valid values are 160, 320, 640, 1280, 2560, 3840, 5120, 7680, or 10240 MBps.
   * - For `SINGLE_AZ_1`, valid values are 64, 128, 256, 512, 1024, 2048, 3072, or 4096 MBps.
   *
   * You pay for additional throughput capacity that you provision.
   *
   * @public
   */
  ThroughputCapacity: number | undefined;

  /**
   * The preferred start time to perform weekly maintenance, formatted d:HH:MM in the UTC time zone, where d is the weekday number, from 1 through 7, beginning with Monday and ending with Sunday.
   *
   * For example, `1:05:00` specifies maintenance at 5 AM Monday.
   *
   * @public
   */
  WeeklyMaintenanceStartTime?: string | undefined;

  /**
   * The SSD IOPS (input/output operations per second) configuration for an Amazon FSx for NetApp ONTAP, Amazon FSx for Windows File Server, or FSx for OpenZFS file system. By default, Amazon FSx automatically provisions 3 IOPS per GB of storage capacity. You can provision additional IOPS per GB of storage. The configuration consists of the total number of provisioned SSD IOPS and how it is was provisioned, or the mode (by the customer or by Amazon FSx).
   *
   * @public
   */
  DiskIopsConfiguration?: DiskIopsConfiguration | undefined;

  /**
   * The configuration Amazon FSx uses when creating the root value of the Amazon FSx for OpenZFS file system. All volumes are children of the root volume.
   *
   * @public
   */
  RootVolumeConfiguration?: OpenZFSCreateRootVolumeConfiguration | undefined;

  /**
   * Required when `DeploymentType` is set to `MULTI_AZ_1`. This specifies the subnet in which you want the preferred file server to be located.
   *
   * @public
   */
  PreferredSubnetId?: string | undefined;

  /**
   * (Multi-AZ only) Specifies the IPv4 address range in which the endpoints to access your file system will be created. By default in the Amazon FSx API and Amazon FSx console, Amazon FSx selects an available /28 IP address range for you from one of the VPC's CIDR ranges. You can have overlapping endpoint IP addresses for file systems deployed in the same VPC/route tables, as long as they don't overlap with any subnet.
   *
   * @public
   */
  EndpointIpAddressRange?: string | undefined;

  /**
   * (Multi-AZ only) Specifies the IPv6 address range in which the endpoints to access your file system will be created. By default in the Amazon FSx API and Amazon FSx console, Amazon FSx selects an available /118 IP address range for you from one of the VPC's CIDR ranges. You can have overlapping endpoint IP addresses for file systems deployed in the same VPC/route tables, as long as they don't overlap with any subnet.
   *
   * @public
   */
  EndpointIpv6AddressRange?: string | undefined;

  /**
   * (Multi-AZ only) Specifies the route tables in which Amazon FSx creates the rules for routing traffic to the correct file server. You should specify all virtual private cloud (VPC) route tables associated with the subnets in which your clients are located. By default, Amazon FSx selects your VPC's default route table.
   *
   * @public
   */
  RouteTableIds?: string[] | undefined;

  /**
   * Specifies the optional provisioned SSD read cache on file systems that use the Intelligent-Tiering storage class.
   *
   * @public
   */
  ReadCacheConfiguration?: OpenZFSReadCacheConfiguration | undefined;
}

/**
 * The Windows file access auditing configuration used when creating or updating an Amazon FSx for Windows File Server file system.
 *
 * @public
 */
export interface WindowsAuditLogCreateConfiguration {
  /**
   * Sets which attempt type is logged by Amazon FSx for file and folder accesses.
   *
   * - `SUCCESS_ONLY` - only successful attempts to access files or folders are logged.
   * - `FAILURE_ONLY` - only failed attempts to access files or folders are logged.
   * - `SUCCESS_AND_FAILURE` - both successful attempts and failed attempts to access files or folders are logged.
   * - `DISABLED` - access auditing of files and folders is turned off.
   *
   * @public
   */
  FileAccessAuditLogLevel: WindowsAccessAuditLogLevel | undefined;

  /**
   * Sets which attempt type is logged by Amazon FSx for file share accesses.
   *
   * - `SUCCESS_ONLY` - only successful attempts to access file shares are logged.
   * - `FAILURE_ONLY` - only failed attempts to access file shares are logged.
   * - `SUCCESS_AND_FAILURE` - both successful attempts and failed attempts to access file shares are logged.
   * - `DISABLED` - access auditing of file shares is turned off.
   *
   * @public
   */
  FileShareAccessAuditLogLevel: WindowsAccessAuditLogLevel | undefined;

  /**
   * The Amazon Resource Name (ARN) that specifies the destination of the audit logs.
   *
   * The destination can be any Amazon CloudWatch Logs log group ARN or Amazon Kinesis Data Firehose delivery stream ARN, with the following requirements:
   *
   * - The destination ARN that you provide (either CloudWatch Logs log group or Kinesis Data Firehose delivery stream) must be in the same Amazon Web Services partition, Amazon Web Services Region, and Amazon Web Services account as your Amazon FSx file system.
   * - The name of the Amazon CloudWatch Logs log group must begin with the `/aws/fsx` prefix. The name of the Amazon Kinesis Data Firehose delivery stream must begin with the `aws-fsx` prefix.
   * - If you do not provide a destination in `AuditLogDestination`, Amazon FSx will create and use a log stream in the CloudWatch Logs `/aws/fsx/windows` log group.
   * - If `AuditLogDestination` is provided and the resource does not exist, the request will fail with a `BadRequest` error.
   * - If `FileAccessAuditLogLevel` and `FileShareAccessAuditLogLevel` are both set to `DISABLED`, you cannot specify a destination in `AuditLogDestination`.
   *
   * @public
   */
  AuditLogDestination?: string | undefined;
}

/**
 * The configuration that Amazon FSx uses to join a FSx for Windows File Server file system or an FSx for ONTAP storage virtual machine (SVM) to a self-managed (including on-premises) Microsoft Active Directory (AD) directory. For more information, see [Using Amazon FSx for Windows with your self-managed Microsoft Active Directory](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/self-managed-AD.html) or [Managing FSx for ONTAP SVMs](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-svms.html).
 *
 * @public
 */
export interface SelfManagedActiveDirectoryConfiguration {
  /**
   * The fully qualified domain name of the self-managed AD directory, such as `corp.example.com`.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * (Optional) The fully qualified distinguished name of the organizational unit within your self-managed AD directory. Amazon FSx only accepts OU as the direct parent of the file system. An example is `OU=FSx,DC=yourdomain,DC=corp,DC=com`. To learn more, see [RFC 2253](https://tools.ietf.org/html/rfc2253). If none is provided, the FSx file system is created in the default location of your self-managed AD directory.
   *
   * > **Important:** Only Organizational Unit (OU) objects can be the direct parent of the file system that you're creating.
   *
   * @public
   */
  OrganizationalUnitDistinguishedName?: string | undefined;

  /**
   * (Optional) The name of the domain group whose members are granted administrative privileges for the file system. Administrative privileges include taking ownership of files and folders, setting audit controls (audit ACLs) on files and folders, and administering the file system remotely by using the FSx Remote PowerShell. The group that you specify must already exist in your domain. If you don't provide one, your AD domain's Domain Admins group is used.
   *
   * @public
   */
  FileSystemAdministratorsGroup?: string | undefined;

  /**
   * The user name for the service account on your self-managed AD domain that Amazon FSx will use to join to your AD domain. This account must have the permission to join computers to the domain in the organizational unit provided in `OrganizationalUnitDistinguishedName`, or in the default location of your AD domain.
   *
   * @public
   */
  UserName?: string | undefined;

  /**
   * The password for the service account on your self-managed AD domain that Amazon FSx will use to join to your AD domain.
   *
   * @public
   */
  Password?: string | undefined;

  /**
   * A list of up to three IP addresses of DNS servers or domain controllers in the self-managed AD directory.
   *
   * @public
   */
  DnsIps: string[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services Secrets Manager secret containing the self-managed Active Directory domain join service account credentials. When provided, Amazon FSx uses the credentials stored in this secret to join the file system to your self-managed Active Directory domain.
   *
   * The secret must contain two key-value pairs:
   *
   * - `CUSTOMER_MANAGED_ACTIVE_DIRECTORY_USERNAME` - The username for the service account
   * - `CUSTOMER_MANAGED_ACTIVE_DIRECTORY_PASSWORD` - The password for the service account
   *
   * For more information, see [Using Amazon FSx for Windows with your self-managed Microsoft Active Directory](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/self-manage-prereqs.html) or [Using Amazon FSx for ONTAP with your self-managed Microsoft Active Directory](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/self-manage-prereqs.html).
   *
   * @public
   */
  DomainJoinServiceAccountSecret?: string | undefined;
}

/**
 * The configuration object for the Microsoft Windows file system used in `CreateFileSystem` and `CreateFileSystemFromBackup` operations.
 *
 * @public
 */
export interface CreateFileSystemWindowsConfiguration {
  /**
   * The ID for an existing Amazon Web Services Managed Microsoft Active Directory (AD) instance that the file system should join when it's created.
   *
   * @public
   */
  ActiveDirectoryId?: string | undefined;

  /**
   * The configuration that Amazon FSx uses to join a FSx for Windows File Server file system or an FSx for ONTAP storage virtual machine (SVM) to a self-managed (including on-premises) Microsoft Active Directory (AD) directory. For more information, see [Using Amazon FSx for Windows with your self-managed Microsoft Active Directory](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/self-managed-AD.html) or [Managing FSx for ONTAP SVMs](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-svms.html).
   *
   * @public
   */
  SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryConfiguration | undefined;

  /**
   * Specifies the file system deployment type, valid values are the following:
   *
   * - `MULTI_AZ_1` - Deploys a high availability file system that is configured for Multi-AZ redundancy to tolerate temporary Availability Zone (AZ) unavailability. You can only deploy a Multi-AZ file system in Amazon Web Services Regions that have a minimum of three Availability Zones. Also supports HDD storage type
   * - `SINGLE_AZ_1` - (Default) Choose to deploy a file system that is configured for single AZ redundancy.
   * - `SINGLE_AZ_2` - The latest generation Single AZ file system. Specifies a file system that is configured for single AZ redundancy and supports HDD storage type.
   *
   * For more information, see [Availability and Durability: Single-AZ and Multi-AZ File Systems](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/high-availability-multiAZ.html).
   *
   * @public
   */
  DeploymentType?: WindowsDeploymentType | undefined;

  /**
   * Required when `DeploymentType` is set to `MULTI_AZ_1`. This specifies the subnet in which you want the preferred file server to be located. For in-Amazon Web Services applications, we recommend that you launch your clients in the same Availability Zone (AZ) as your preferred file server to reduce cross-AZ data transfer costs and minimize latency.
   *
   * @public
   */
  PreferredSubnetId?: string | undefined;

  /**
   * Sets the throughput capacity of an Amazon FSx file system, measured in megabytes per second (MB/s), in 2 to the *n*th increments, between 2^3 (8) and 2^11 (2048).
   *
   * @public
   */
  ThroughputCapacity: number | undefined;

  /**
   * The preferred start time to perform weekly maintenance, formatted d:HH:MM in the UTC time zone, where d is the weekday number, from 1 through 7, beginning with Monday and ending with Sunday.
   *
   * @public
   */
  WeeklyMaintenanceStartTime?: string | undefined;

  /**
   * The preferred time to take daily automatic backups, formatted HH:MM in the UTC time zone.
   *
   * @public
   */
  DailyAutomaticBackupStartTime?: string | undefined;

  /**
   * The number of days to retain automatic backups. Setting this property to `0` disables automatic backups. You can retain automatic backups for a maximum of 90 days. The default is `30`.
   *
   * @public
   */
  AutomaticBackupRetentionDays?: number | undefined;

  /**
   * A boolean flag indicating whether tags for the file system should be copied to backups. This value defaults to false. If it's set to true, all tags for the file system are copied to all automatic and user-initiated backups where the user doesn't specify tags. If this value is true, and you specify one or more tags, only the specified tags are copied to backups. If you specify one or more tags when creating a user-initiated backup, no tags are copied from the file system, regardless of this value.
   *
   * @public
   */
  CopyTagsToBackups?: boolean | undefined;

  /**
   * An array of one or more DNS alias names that you want to associate with the Amazon FSx file system. Aliases allow you to use existing DNS names to access the data in your Amazon FSx file system. You can associate up to 50 aliases with a file system at any time. You can associate additional DNS aliases after you create the file system using the AssociateFileSystemAliases operation. You can remove DNS aliases from the file system after it is created using the DisassociateFileSystemAliases operation. You only need to specify the alias name in the request payload. For more information, see [Managing DNS aliases](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-dns-aliases.html) and [Accessing data using DNS aliases](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/dns-aliases.html).
   *
   * An alias name has to meet the following requirements:
   *
   * - Formatted as a fully-qualified domain name (FQDN), `hostname.domain`, for example, `accounting.example.com`.
   * - Can contain alphanumeric characters, the underscore (_), and the hyphen (-).
   * - Cannot start or end with a hyphen.
   * - Can start with a numeric.
   *
   * For DNS alias names, Amazon FSx stores alphabetic characters as lowercase letters (a-z), regardless of how you specify them: as uppercase letters, lowercase letters, or the corresponding letters in escape codes.
   *
   * @public
   */
  Aliases?: string[] | undefined;

  /**
   * The configuration that Amazon FSx for Windows File Server uses to audit and log user accesses of files, folders, and file shares on the Amazon FSx for Windows File Server file system.
   *
   * @public
   */
  AuditLogConfiguration?: WindowsAuditLogCreateConfiguration | undefined;

  /**
   * The SSD IOPS (input/output operations per second) configuration for an Amazon FSx for Windows file system. By default, Amazon FSx automatically provisions 3 IOPS per GiB of storage capacity. You can provision additional IOPS per GiB of storage, up to the maximum limit associated with your chosen throughput capacity.
   *
   * @public
   */
  DiskIopsConfiguration?: DiskIopsConfiguration | undefined;

  /**
   * The File Server Resource Manager (FSRM) configuration that Amazon FSx for Windows File Server uses for the file system. FSRM is disabled by default.
   *
   * @public
   */
  FsrmConfiguration?: WindowsFsrmConfiguration | undefined;
}

/**
 * The request object used to create a new Amazon FSx file system.
 *
 * @public
 */
export interface CreateFileSystemRequest {
  /**
   * A string of up to 63 ASCII characters that Amazon FSx uses to ensure idempotent creation. This string is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The type of Amazon FSx file system to create. Valid values are `WINDOWS`, `LUSTRE`, `ONTAP`, and `OPENZFS`.
   *
   * @public
   */
  FileSystemType: FileSystemType | undefined;

  /**
   * Sets the storage capacity of the file system that you're creating, in gibibytes (GiB).
   *
   * **FSx for Lustre file systems** - The amount of storage capacity that you can configure depends on the value that you set for `StorageType` and the Lustre `DeploymentType`, as follows:
   *
   * - For `SCRATCH_2`, `PERSISTENT_2`, and `PERSISTENT_1` deployment types using SSD storage type, the valid values are 1200 GiB, 2400 GiB, and increments of 2400 GiB.
   * - For `PERSISTENT_1` HDD file systems, valid values are increments of 6000 GiB for 12 MB/s/TiB file systems and increments of 1800 GiB for 40 MB/s/TiB file systems.
   * - For `SCRATCH_1` deployment type, valid values are 1200 GiB, 2400 GiB, and increments of 3600 GiB.
   *
   * **FSx for ONTAP file systems** - The amount of storage capacity that you can configure depends on the value of the `HAPairs` property. The minimum value is calculated as 1,024 * `HAPairs` and the maximum is calculated as 524,288 * `HAPairs`.
   *
   * **FSx for OpenZFS file systems** - The amount of storage capacity that you can configure is from 64 GiB up to 524,288 GiB (512 TiB).
   *
   * **FSx for Windows File Server file systems** - The amount of storage capacity that you can configure depends on the value that you set for `StorageType` as follows:
   *
   * - For SSD storage, valid values are 32 GiB-65,536 GiB (64 TiB).
   * - For HDD storage, valid values are 2000 GiB-65,536 GiB (64 TiB).
   *
   * @public
   */
  StorageCapacity?: number | undefined;

  /**
   * Sets the storage class for the file system that you're creating. Valid values are `SSD`, `HDD`, and `INTELLIGENT_TIERING`.
   *
   * - Set to `SSD` to use solid state drive storage. SSD is supported on all Windows, Lustre, ONTAP, and OpenZFS deployment types.
   * - Set to `HDD` to use hard disk drive storage, which is supported on `SINGLE_AZ_2` and `MULTI_AZ_1` Windows file system deployment types, and on `PERSISTENT_1` Lustre file system deployment types.
   * - Set to `INTELLIGENT_TIERING` to use fully elastic, intelligently-tiered storage. Intelligent-Tiering is only available for OpenZFS file systems with the Multi-AZ deployment type and for Lustre file systems with the Persistent_2 deployment type.
   *
   * Default value is `SSD`. For more information, see [Storage type options](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/optimize-fsx-costs.html#storage-type-options) in the *FSx for Windows File Server User Guide*, [FSx for Lustre storage classes](https://docs.aws.amazon.com/fsx/latest/LustreGuide/using-fsx-lustre.html#lustre-storage-classes) in the *FSx for Lustre User Guide*, and [Working with Intelligent-Tiering](https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/performance-intelligent-tiering) in the *Amazon FSx for OpenZFS User Guide*.
   *
   * @public
   */
  StorageType?: StorageType | undefined;

  /**
   * Specifies the IDs of the subnets that the file system will be accessible from. For Windows and ONTAP `MULTI_AZ_1` deployment types,provide exactly two subnet IDs, one for the preferred file server and one for the standby file server. You specify one of these subnets as the preferred subnet using the `WindowsConfiguration > PreferredSubnetID` or `OntapConfiguration > PreferredSubnetID` properties. For more information about Multi-AZ file system configuration, see [Availability and durability: Single-AZ and Multi-AZ file systems](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/high-availability-multiAZ.html) in the *Amazon FSx for Windows User Guide* and [Availability and durability](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/high-availability-multiAZ.html) in the *Amazon FSx for ONTAP User Guide*.
   *
   * For Windows `SINGLE_AZ_1` and `SINGLE_AZ_2` and all Lustre deployment types, provide exactly one subnet ID. The file server is launched in that subnet's Availability Zone.
   *
   * @public
   */
  SubnetIds: string[] | undefined;

  /**
   * A list of IDs specifying the security groups to apply to all network interfaces created for file system access. This list isn't returned in later requests to describe the file system.
   *
   * > **Important:** You must specify a security group if you are creating a Multi-AZ FSx for ONTAP file system in a VPC subnet that has been shared with you.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * The tags to apply to the file system that's being created. The key value of the `Name` tag appears in the console as the file system name.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Specifies the ID of the Key Management Service (KMS) key to use for encrypting data on Amazon FSx file systems, as follows:
   *
   * - Amazon FSx for Lustre `PERSISTENT_1` and `PERSISTENT_2` deployment types only.
   *
   *   `SCRATCH_1` and `SCRATCH_2` types are encrypted using the Amazon FSx service KMS key for your account.
   * - Amazon FSx for NetApp ONTAP
   * - Amazon FSx for OpenZFS
   * - Amazon FSx for Windows File Server
   *
   * If a `KmsKeyId` isn't specified, the Amazon FSx-managed KMS key for your account is used. For more information, see [Encrypt](https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html) in the *Key Management Service API Reference*.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The Microsoft Windows configuration for the file system that's being created.
   *
   * @public
   */
  WindowsConfiguration?: CreateFileSystemWindowsConfiguration | undefined;

  /**
   * The Lustre configuration for the file system being created.
   *
   * > **Note:**
   * >
   * > The following parameters are not supported for file systems with a data repository association created with .
   * >
   * > - `AutoImportPolicy`
   * > - `ExportPath`
   * > - `ImportedFileChunkSize`
   * > - `ImportPath`
   *
   * @public
   */
  LustreConfiguration?: CreateFileSystemLustreConfiguration | undefined;

  /**
   * The ONTAP configuration properties of the FSx for ONTAP file system that you are creating.
   *
   * @public
   */
  OntapConfiguration?: CreateFileSystemOntapConfiguration | undefined;

  /**
   * For FSx for Lustre file systems, sets the Lustre version for the file system that you're creating. Valid values are `2.10`, `2.12`, and `2.15`:
   *
   * - `2.10` is supported by the Scratch and Persistent_1 Lustre deployment types.
   * - `2.12` is supported by all Lustre deployment types, except for `PERSISTENT_2` with a metadata configuration mode.
   * - `2.15` is supported by all Lustre deployment types and is recommended for all new file systems.
   *
   * Default value is `2.10`, except for the following deployments:
   *
   * - Default value is `2.12` when `DeploymentType` is set to `PERSISTENT_2` without a metadata configuration mode.
   * - Default value is `2.15` when `DeploymentType` is set to `PERSISTENT_2` with a metadata configuration mode.
   *
   * @public
   */
  FileSystemTypeVersion?: string | undefined;

  /**
   * The OpenZFS configuration for the file system that's being created.
   *
   * @public
   */
  OpenZFSConfiguration?: CreateFileSystemOpenZFSConfiguration | undefined;

  /**
   * The network type of the Amazon FSx file system that you are creating. Valid values are `IPV4` (which supports IPv4 only) and `DUAL` (for dual-stack mode, which supports both IPv4 and IPv6). The default is `IPV4`. Supported for FSx for OpenZFS, FSx for ONTAP, and FSx for Windows File Server file systems.
   *
   * @public
   */
  NetworkType?: NetworkType | undefined;
}

/**
 * The request object for the `CreateFileSystemFromBackup` operation.
 *
 * @public
 */
export interface CreateFileSystemFromBackupRequest {
  /**
   * The ID of the source backup. Specifies the backup that you are copying.
   *
   * @public
   */
  BackupId: string | undefined;

  /**
   * A string of up to 63 ASCII characters that Amazon FSx uses to ensure idempotent creation. This string is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * Specifies the IDs of the subnets that the file system will be accessible from. For Windows `MULTI_AZ_1` file system deployment types, provide exactly two subnet IDs, one for the preferred file server and one for the standby file server. You specify one of these subnets as the preferred subnet using the `WindowsConfiguration > PreferredSubnetID` property.
   *
   * Windows `SINGLE_AZ_1` and `SINGLE_AZ_2` file system deployment types, Lustre file systems, and OpenZFS file systems provide exactly one subnet ID. The file server is launched in that subnet's Availability Zone.
   *
   * @public
   */
  SubnetIds: string[] | undefined;

  /**
   * A list of IDs for the security groups that apply to the specified network interfaces created for file system access. These security groups apply to all network interfaces. This value isn't returned in later `DescribeFileSystem` requests.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * The tags to be applied to the file system at file system creation. The key value of the `Name` tag appears in the console as the file system name.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The configuration for this Microsoft Windows file system.
   *
   * @public
   */
  WindowsConfiguration?: CreateFileSystemWindowsConfiguration | undefined;

  /**
   * The Lustre configuration for the file system being created.
   *
   * > **Note:**
   * >
   * > The following parameters are not supported for file systems with a data repository association created with .
   * >
   * > - `AutoImportPolicy`
   * > - `ExportPath`
   * > - `ImportedFileChunkSize`
   * > - `ImportPath`
   *
   * @public
   */
  LustreConfiguration?: CreateFileSystemLustreConfiguration | undefined;

  /**
   * Sets the storage type for the Windows, OpenZFS, or Lustre file system that you're creating from a backup. Valid values are `SSD`, `HDD`, and `INTELLIGENT_TIERING`.
   *
   * - Set to `SSD` to use solid state drive storage. SSD is supported on all Windows and OpenZFS deployment types.
   * - Set to `HDD` to use hard disk drive storage. HDD is supported on `SINGLE_AZ_2` and `MULTI_AZ_1` FSx for Windows File Server file system deployment types.
   * - Set to `INTELLIGENT_TIERING` to use fully elastic, intelligently-tiered storage. Intelligent-Tiering is only available for OpenZFS file systems with the Multi-AZ deployment type and for Lustre file systems with the Persistent_2 deployment type.
   *
   * The default value is `SSD`.
   *
   * > **Note:** HDD and SSD storage types have different minimum storage capacity requirements. A restored file system's storage capacity is tied to the file system that was backed up. You can create a file system that uses HDD storage from a backup of a file system that used SSD storage if the original SSD file system had a storage capacity of at least 2000 GiB.
   *
   * @public
   */
  StorageType?: StorageType | undefined;

  /**
   * Specifies the ID of the Key Management Service (KMS) key to use for encrypting data on Amazon FSx file systems, as follows:
   *
   * - Amazon FSx for Lustre `PERSISTENT_1` and `PERSISTENT_2` deployment types only.
   *
   *   `SCRATCH_1` and `SCRATCH_2` types are encrypted using the Amazon FSx service KMS key for your account.
   * - Amazon FSx for NetApp ONTAP
   * - Amazon FSx for OpenZFS
   * - Amazon FSx for Windows File Server
   *
   * If a `KmsKeyId` isn't specified, the Amazon FSx-managed KMS key for your account is used. For more information, see [Encrypt](https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html) in the *Key Management Service API Reference*.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * Sets the version for the Amazon FSx for Lustre file system that you're creating from a backup. Valid values are `2.10`, `2.12`, and `2.15`.
   *
   * You can enter a Lustre version that is newer than the backup's `FileSystemTypeVersion` setting. If you don't enter a newer Lustre version, it defaults to the backup's setting.
   *
   * @public
   */
  FileSystemTypeVersion?: string | undefined;

  /**
   * The OpenZFS configuration for the file system that's being created.
   *
   * @public
   */
  OpenZFSConfiguration?: CreateFileSystemOpenZFSConfiguration | undefined;

  /**
   * Sets the storage capacity of the OpenZFS file system that you're creating from a backup, in gibibytes (GiB). Valid values are from 64 GiB up to 524,288 GiB (512 TiB). However, the value that you specify must be equal to or greater than the backup's storage capacity value. If you don't use the `StorageCapacity` parameter, the default is the backup's `StorageCapacity` value.
   *
   * If used to create a file system other than OpenZFS, you must provide a value that matches the backup's `StorageCapacity` value. If you provide any other value, Amazon FSx responds with an HTTP status code 400 Bad Request.
   *
   * @public
   */
  StorageCapacity?: number | undefined;

  /**
   * Sets the network type for the Amazon FSx for OpenZFS file system that you're creating from a backup.
   *
   * @public
   */
  NetworkType?: NetworkType | undefined;
}

/**
 * @public
 */
export interface CreateSnapshotRequest {
  /**
   * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The name of the snapshot.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The ID of the volume that you are taking a snapshot of.
   *
   * @public
   */
  VolumeId: string | undefined;

  /**
   * A list of `Tag` values, with a maximum of 50 elements.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * The configuration that Amazon FSx uses to join the ONTAP storage virtual machine (SVM) to your self-managed (including on-premises) Microsoft Active Directory directory.
 *
 * @public
 */
export interface CreateSvmActiveDirectoryConfiguration {
  /**
   * The NetBIOS name of the Active Directory computer object that will be created for your SVM.
   *
   * @public
   */
  NetBiosName: string | undefined;

  /**
   * The configuration that Amazon FSx uses to join a FSx for Windows File Server file system or an FSx for ONTAP storage virtual machine (SVM) to a self-managed (including on-premises) Microsoft Active Directory (AD) directory. For more information, see [Using Amazon FSx for Windows with your self-managed Microsoft Active Directory](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/self-managed-AD.html) or [Managing FSx for ONTAP SVMs](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-svms.html).
   *
   * @public
   */
  SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateStorageVirtualMachineRequest {
  /**
   * Describes the self-managed Microsoft Active Directory to which you want to join the SVM. Joining an Active Directory provides user authentication and access control for SMB clients, including Microsoft Windows and macOS clients accessing the file system.
   *
   * @public
   */
  ActiveDirectoryConfiguration?: CreateSvmActiveDirectoryConfiguration | undefined;

  /**
   * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The globally unique ID of the file system, assigned by Amazon FSx.
   *
   * @public
   */
  FileSystemId: string | undefined;

  /**
   * The name of the SVM.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The password to use when managing the SVM using the NetApp ONTAP CLI or REST API. If you do not specify a password, you can still use the file system's `fsxadmin` user to manage the SVM.
   *
   * @public
   */
  SvmAdminPassword?: string | undefined;

  /**
   * A list of `Tag` values, with a maximum of 50 elements.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The security style of the root volume of the SVM. Specify one of the following values:
   *
   * - `UNIX` if the file system is managed by a UNIX administrator, the majority of users are NFS clients, and an application accessing the data uses a UNIX user as the service account.
   * - `NTFS` if the file system is managed by a Microsoft Windows administrator, the majority of users are SMB clients, and an application accessing the data uses a Microsoft Windows user as the service account.
   * - `MIXED` This is an advanced setting. For more information, see [Volume security style](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/volume-security-style.html) in the Amazon FSx for NetApp ONTAP User Guide.
   *
   * @public
   */
  RootVolumeSecurityStyle?: StorageVirtualMachineRootVolumeSecurityStyle | undefined;
}

/**
 * Describes the Microsoft Active Directory (AD) directory configuration to which the FSx for ONTAP storage virtual machine (SVM) is joined. Note that account credentials are not returned in the response payload.
 *
 * @public
 */
export interface SvmActiveDirectoryConfiguration {
  /**
   * The NetBIOS name of the AD computer object to which the SVM is joined.
   *
   * @public
   */
  NetBiosName?: string | undefined;

  /**
   * The configuration of the self-managed Microsoft Active Directory (AD) directory to which the Windows File Server or ONTAP storage virtual machine (SVM) instance is joined.
   *
   * @public
   */
  SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryAttributes | undefined;
}

/**
 * An Amazon FSx for NetApp ONTAP storage virtual machine (SVM) has four endpoints that are used to access data or to manage the SVM using the NetApp ONTAP CLI, REST API, or NetApp CloudManager. They are the `Iscsi`, `Management`, `Nfs`, and `Smb` endpoints.
 *
 * @public
 */
export interface SvmEndpoint {
  /**
   * The file system's DNS name. You can mount your file system using its DNS name.
   *
   * @public
   */
  DNSName?: string | undefined;

  /**
   * The SVM endpoint's IPv4 addresses.
   *
   * @public
   */
  IpAddresses?: string[] | undefined;

  /**
   * The SVM endpoint's IPv6 addresses.
   *
   * @public
   */
  Ipv6Addresses?: string[] | undefined;
}

/**
 * An Amazon FSx for NetApp ONTAP storage virtual machine (SVM) has the following endpoints that are used to access data or to manage the SVM using the NetApp ONTAP CLI, REST API, or NetApp CloudManager.
 *
 * @public
 */
export interface SvmEndpoints {
  /**
   * An endpoint for connecting using the Internet Small Computer Systems Interface (iSCSI) protocol.
   *
   * @public
   */
  Iscsi?: SvmEndpoint | undefined;

  /**
   * An endpoint for managing SVMs using the NetApp ONTAP CLI, NetApp ONTAP API, or NetApp CloudManager.
   *
   * @public
   */
  Management?: SvmEndpoint | undefined;

  /**
   * An endpoint for connecting using the Network File System (NFS) protocol.
   *
   * @public
   */
  Nfs?: SvmEndpoint | undefined;

  /**
   * An endpoint for connecting using the Server Message Block (SMB) protocol.
   *
   * @public
   */
  Smb?: SvmEndpoint | undefined;
}

/**
 * Describes the Amazon FSx for NetApp ONTAP storage virtual machine (SVM) configuration.
 *
 * @public
 */
export interface StorageVirtualMachine {
  /**
   * Describes the Microsoft Active Directory configuration to which the SVM is joined, if applicable.
   *
   * @public
   */
  ActiveDirectoryConfiguration?: SvmActiveDirectoryConfiguration | undefined;

  /**
   * The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z), also known as Unix time.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The endpoints that are used to access data or to manage the SVM using the NetApp ONTAP CLI, REST API, or NetApp CloudManager. They are the `Iscsi`, `Management`, `Nfs`, and `Smb` endpoints.
   *
   * @public
   */
  Endpoints?: SvmEndpoints | undefined;

  /**
   * The globally unique ID of the file system, assigned by Amazon FSx.
   *
   * @public
   */
  FileSystemId?: string | undefined;

  /**
   * Describes the SVM's lifecycle status.
   *
   * - `CREATED` - The SVM is fully available for use.
   * - `CREATING` - Amazon FSx is creating the new SVM.
   * - `DELETING` - Amazon FSx is deleting an existing SVM.
   * - `FAILED` - Amazon FSx was unable to create the SVM.
   * - `MISCONFIGURED` - The SVM is in a failed but recoverable state.
   * - `PENDING` - Amazon FSx has not started creating the SVM.
   *
   * @public
   */
  Lifecycle?: StorageVirtualMachineLifecycle | undefined;

  /**
   * The name of the SVM, if provisioned.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services resources. We require an ARN when you need to specify a resource unambiguously across all of Amazon Web Services. For more information, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  ResourceARN?: string | undefined;

  /**
   * The SVM's system generated unique ID.
   *
   * @public
   */
  StorageVirtualMachineId?: string | undefined;

  /**
   * Describes the SVM's subtype.
   *
   * @public
   */
  Subtype?: StorageVirtualMachineSubtype | undefined;

  /**
   * The SVM's UUID (universally unique identifier).
   *
   * @public
   */
  UUID?: string | undefined;

  /**
   * A list of `Tag` values, with a maximum of 50 elements.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Describes why the SVM lifecycle state changed.
   *
   * @public
   */
  LifecycleTransitionReason?: LifecycleTransitionReason | undefined;

  /**
   * The security style of the root volume of the SVM.
   *
   * @public
   */
  RootVolumeSecurityStyle?: StorageVirtualMachineRootVolumeSecurityStyle | undefined;
}

/**
 * @public
 */
export interface CreateStorageVirtualMachineResponse {
  /**
   * Returned after a successful `CreateStorageVirtualMachine` operation; describes the SVM just created.
   *
   * @public
   */
  StorageVirtualMachine?: StorageVirtualMachine | undefined;
}

/**
 * Used to specify the configuration options for an FSx for ONTAP volume's storage aggregate or aggregates.
 *
 * @public
 */
export interface CreateAggregateConfiguration {
  /**
   * Used to specify the names of aggregates on which the volume will be created.
   *
   * @public
   */
  Aggregates?: string[] | undefined;

  /**
   * Used to explicitly set the number of constituents within the FlexGroup per storage aggregate. This field is optional when creating a FlexGroup volume. If unspecified, the default value will be 8. This field cannot be provided when creating a FlexVol volume.
   *
   * @public
   */
  ConstituentsPerAggregate?: number | undefined;
}

/**
 * Defines the SnapLock configuration when creating an FSx for ONTAP SnapLock volume.
 *
 * @public
 */
export interface CreateSnaplockConfiguration {
  /**
   * Enables or disables the audit log volume for an FSx for ONTAP SnapLock volume. The default value is `false`. If you set `AuditLogVolume` to `true`, the SnapLock volume is created as an audit log volume. The minimum retention period for an audit log volume is six months.
   *
   * For more information, see [SnapLock audit log volumes](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/how-snaplock-works.html#snaplock-audit-log-volume).
   *
   * @public
   */
  AuditLogVolume?: boolean | undefined;

  /**
   * The configuration object for setting the autocommit period of files in an FSx for ONTAP SnapLock volume.
   *
   * @public
   */
  AutocommitPeriod?: AutocommitPeriod | undefined;

  /**
   * Enables, disables, or permanently disables privileged delete on an FSx for ONTAP SnapLock Enterprise volume. Enabling privileged delete allows SnapLock administrators to delete WORM files even if they have active retention periods. `PERMANENTLY_DISABLED` is a terminal state. If privileged delete is permanently disabled on a SnapLock volume, you can't re-enable it. The default value is `DISABLED`.
   *
   * For more information, see [Privileged delete](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/snaplock-enterprise.html#privileged-delete).
   *
   * @public
   */
  PrivilegedDelete?: PrivilegedDelete | undefined;

  /**
   * Specifies the retention period of an FSx for ONTAP SnapLock volume.
   *
   * @public
   */
  RetentionPeriod?: SnaplockRetentionPeriod | undefined;

  /**
   * Specifies the retention mode of an FSx for ONTAP SnapLock volume. After it is set, it can't be changed. You can choose one of the following retention modes:
   *
   * - `COMPLIANCE`: Files transitioned to write once, read many (WORM) on a Compliance volume can't be deleted until their retention periods expire. This retention mode is used to address government or industry-specific mandates or to protect against ransomware attacks. For more information, see [SnapLock Compliance](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/snaplock-compliance.html).
   * - `ENTERPRISE`: Files transitioned to WORM on an Enterprise volume can be deleted by authorized users before their retention periods expire using privileged delete. This retention mode is used to advance an organization's data integrity and internal compliance or to test retention settings before using SnapLock Compliance. For more information, see [SnapLock Enterprise](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/snaplock-enterprise.html).
   *
   * @public
   */
  SnaplockType: SnaplockType | undefined;

  /**
   * Enables or disables volume-append mode on an FSx for ONTAP SnapLock volume. Volume-append mode allows you to create WORM-appendable files and write data to them incrementally. The default value is `false`.
   *
   * For more information, see [Volume-append mode](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/worm-state.html#worm-state-append).
   *
   * @public
   */
  VolumeAppendModeEnabled?: boolean | undefined;
}

/**
 * Specifies the configuration of the ONTAP volume that you are creating.
 *
 * @public
 */
export interface CreateOntapVolumeConfiguration {
  /**
   * Specifies the location in the SVM's namespace where the volume is mounted. This parameter is required. The `JunctionPath` must have a leading forward slash, such as `/vol3`.
   *
   * @public
   */
  JunctionPath?: string | undefined;

  /**
   * Specifies the security style for the volume. If a volume's security style is not specified, it is automatically set to the root volume's security style. The security style determines the type of permissions that FSx for ONTAP uses to control data access. Specify one of the following values:
   *
   * - `UNIX` if the file system is managed by a UNIX administrator, the majority of users are NFS clients, and an application accessing the data uses a UNIX user as the service account.
   * - `NTFS` if the file system is managed by a Windows administrator, the majority of users are SMB clients, and an application accessing the data uses a Windows user as the service account.
   * - `MIXED` This is an advanced setting. For more information, see the topic [What the security styles and their effects are](https://docs.netapp.com/us-en/ontap/nfs-admin/security-styles-their-effects-concept.html) in the NetApp Documentation Center.
   *
   * For more information, see [Volume security style](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-volumes.html#volume-security-style) in the FSx for ONTAP User Guide.
   *
   * @public
   */
  SecurityStyle?: SecurityStyle | undefined;

  /**
   * Use `SizeInBytes` instead. Specifies the size of the volume, in megabytes (MB), that you are creating.
   *
   * @deprecated This property is deprecated, use SizeInBytes instead.
   * @public
   */
  SizeInMegabytes?: number | undefined;

  /**
   * Set to true to enable deduplication, compression, and compaction storage efficiency features on the volume, or set to false to disable them.
   *
   * `StorageEfficiencyEnabled` is required when creating a `RW` volume (`OntapVolumeType` set to `RW`).
   *
   * @public
   */
  StorageEfficiencyEnabled?: boolean | undefined;

  /**
   * Specifies the ONTAP SVM in which to create the volume.
   *
   * @public
   */
  StorageVirtualMachineId: string | undefined;

  /**
   * Describes the data tiering policy for an ONTAP volume. When enabled, Amazon FSx for ONTAP's intelligent tiering automatically transitions a volume's data between the file system's primary storage and capacity pool storage based on your access patterns.
   *
   * Valid tiering policies are the following:
   *
   * - `SNAPSHOT_ONLY` - (Default value) moves cold snapshots to the capacity pool storage tier.
   *
   * - `AUTO` - moves cold user data and snapshots to the capacity pool storage tier based on your access patterns.
   *
   * - `ALL` - moves all user data blocks in both the active file system and Snapshot copies to the storage pool tier.
   *
   * - `NONE` - keeps a volume's data in the primary storage tier, preventing it from being moved to the capacity pool tier.
   *
   * @public
   */
  TieringPolicy?: TieringPolicy | undefined;

  /**
   * Specifies the type of volume you are creating. Valid values are the following:
   *
   * - `RW` specifies a read/write volume. `RW` is the default.
   * - `DP` specifies a data-protection volume. A `DP` volume is read-only and can be used as the destination of a NetApp SnapMirror relationship.
   *
   * For more information, see [Volume types](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-volumes.html#volume-types) in the Amazon FSx for NetApp ONTAP User Guide.
   *
   * @public
   */
  OntapVolumeType?: InputOntapVolumeType | undefined;

  /**
   * Specifies the snapshot policy for the volume. There are three built-in snapshot policies:
   *
   * - `default`: This is the default policy. A maximum of six hourly snapshots taken five minutes past the hour. A maximum of two daily snapshots taken Monday through Saturday at 10 minutes after midnight. A maximum of two weekly snapshots taken every Sunday at 15 minutes after midnight.
   * - `default-1weekly`: This policy is the same as the `default` policy except that it only retains one snapshot from the weekly schedule.
   * - `none`: This policy does not take any snapshots. This policy can be assigned to volumes to prevent automatic snapshots from being taken.
   *
   * You can also provide the name of a custom policy that you created with the ONTAP CLI or REST API.
   *
   * For more information, see [Snapshot policies](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/snapshots-ontap.html#snapshot-policies) in the Amazon FSx for NetApp ONTAP User Guide.
   *
   * @public
   */
  SnapshotPolicy?: string | undefined;

  /**
   * A boolean flag indicating whether tags for the volume should be copied to backups. This value defaults to false. If it's set to true, all tags for the volume are copied to all automatic and user-initiated backups where the user doesn't specify tags. If this value is true, and you specify one or more tags, only the specified tags are copied to backups. If you specify one or more tags when creating a user-initiated backup, no tags are copied from the volume, regardless of this value.
   *
   * @public
   */
  CopyTagsToBackups?: boolean | undefined;

  /**
   * Specifies the SnapLock configuration for an FSx for ONTAP volume.
   *
   * @public
   */
  SnaplockConfiguration?: CreateSnaplockConfiguration | undefined;

  /**
   * Use to specify the style of an ONTAP volume. FSx for ONTAP offers two styles of volumes that you can use for different purposes, FlexVol and FlexGroup volumes. For more information, see [Volume styles](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-volumes.html#volume-styles) in the Amazon FSx for NetApp ONTAP User Guide.
   *
   * @public
   */
  VolumeStyle?: VolumeStyle | undefined;

  /**
   * Use to specify configuration options for a volume’s storage aggregate or aggregates.
   *
   * @public
   */
  AggregateConfiguration?: CreateAggregateConfiguration | undefined;

  /**
   * Specifies the configured size of the volume, in bytes.
   *
   * @public
   */
  SizeInBytes?: number | undefined;
}

/**
 * The snapshot configuration to use when creating an Amazon FSx for OpenZFS volume from a snapshot.
 *
 * @public
 */
export interface CreateOpenZFSOriginSnapshotConfiguration {
  /**
   * The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services resources. We require an ARN when you need to specify a resource unambiguously across all of Amazon Web Services. For more information, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  SnapshotARN: string | undefined;

  /**
   * Specifies the strategy used when copying data from the snapshot to the new volume.
   *
   * - `CLONE` - The new volume references the data in the origin snapshot. Cloning a snapshot is faster than copying data from the snapshot to a new volume and doesn't consume disk throughput. However, the origin snapshot can't be deleted if there is a volume using its copied data.
   * - `FULL_COPY` - Copies all data from the snapshot to the new volume.
   *
   *   Specify this option to create the volume from a snapshot on another FSx for OpenZFS file system.
   *
   * > **Note:** The `INCREMENTAL_COPY` option is only for updating an existing volume by using a snapshot from another FSx for OpenZFS file system. For more information, see [CopySnapshotAndUpdateVolume](https://docs.aws.amazon.com/fsx/latest/APIReference/API_CopySnapshotAndUpdateVolume.html).
   *
   * @public
   */
  CopyStrategy: OpenZFSCopyStrategy | undefined;
}

/**
 * Specifies the configuration of the Amazon FSx for OpenZFS volume that you are creating.
 *
 * @public
 */
export interface CreateOpenZFSVolumeConfiguration {
  /**
   * The ID of the volume to use as the parent volume of the volume that you are creating.
   *
   * @public
   */
  ParentVolumeId: string | undefined;

  /**
   * Specifies the amount of storage in gibibytes (GiB) to reserve from the parent volume. Setting `StorageCapacityReservationGiB` guarantees that the specified amount of storage space on the parent volume will always be available for the volume. You can't reserve more storage than the parent volume has. To *not* specify a storage capacity reservation, set this to `0` or `-1`. For more information, see [Volume properties](https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/managing-volumes.html#volume-properties) in the *Amazon FSx for OpenZFS User Guide*.
   *
   * @public
   */
  StorageCapacityReservationGiB?: number | undefined;

  /**
   * Sets the maximum storage size in gibibytes (GiB) for the volume. You can specify a quota that is larger than the storage on the parent volume. A volume quota limits the amount of storage that the volume can consume to the configured amount, but does not guarantee the space will be available on the parent volume. To guarantee quota space, you must also set `StorageCapacityReservationGiB`. To *not* specify a storage capacity quota, set this to `-1`.
   *
   * For more information, see [Volume properties](https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/managing-volumes.html#volume-properties) in the *Amazon FSx for OpenZFS User Guide*.
   *
   * @public
   */
  StorageCapacityQuotaGiB?: number | undefined;

  /**
   * Specifies the suggested block size for a volume in a ZFS dataset, in kibibytes (KiB). For file systems using the Intelligent-Tiering storage class, valid values are 128, 256, 512, 1024, 2048, or 4096 KiB, with a default of 1024 KiB. For all other file systems, valid values are 4, 8, 16, 32, 64, 128, 256, 512, or 1024 KiB, with a default of 128 KiB. We recommend using the default setting for the majority of use cases. Generally, workloads that write in fixed small or large record sizes may benefit from setting a custom record size, like database workloads (small record size) or media streaming workloads (large record size). For additional guidance on when to set a custom record size, see [ZFS Record size](https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/performance.html#record-size-performance) in the *Amazon FSx for OpenZFS User Guide*.
   *
   * @public
   */
  RecordSizeKiB?: number | undefined;

  /**
   * Specifies the method used to compress the data on the volume. The compression type is `NONE` by default.
   *
   * - `NONE` - Doesn't compress the data on the volume. `NONE` is the default.
   * - `ZSTD` - Compresses the data in the volume using the Zstandard (ZSTD) compression algorithm. ZSTD compression provides a higher level of data compression and higher read throughput performance than LZ4 compression.
   * - `LZ4` - Compresses the data in the volume using the LZ4 compression algorithm. LZ4 compression provides a lower level of compression and higher write throughput performance than ZSTD compression.
   *
   * For more information about volume compression types and the performance of your Amazon FSx for OpenZFS file system, see [Tips for maximizing performance](https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/performance.html#performance-tips-zfs) File system and volume settings in the *Amazon FSx for OpenZFS User Guide*.
   *
   * @public
   */
  DataCompressionType?: OpenZFSDataCompressionType | undefined;

  /**
   * A Boolean value indicating whether tags for the volume should be copied to snapshots. This value defaults to `false`. If this value is set to `true`, and you do not specify any tags, all tags for the original volume are copied over to snapshots. If this value is set to `true`, and you do specify one or more tags, only the specified tags for the original volume are copied over to snapshots. If you specify one or more tags when creating a new snapshot, no tags are copied over from the original volume, regardless of this value.
   *
   * @public
   */
  CopyTagsToSnapshots?: boolean | undefined;

  /**
   * The configuration object that specifies the snapshot to use as the origin of the data for the volume.
   *
   * @public
   */
  OriginSnapshot?: CreateOpenZFSOriginSnapshotConfiguration | undefined;

  /**
   * A Boolean value indicating whether the volume is read-only.
   *
   * @public
   */
  ReadOnly?: boolean | undefined;

  /**
   * The configuration object for mounting a Network File System (NFS) file system.
   *
   * @public
   */
  NfsExports?: OpenZFSNfsExport[] | undefined;

  /**
   * Configures how much storage users and groups can use on the volume.
   *
   * @public
   */
  UserAndGroupQuotas?: OpenZFSUserOrGroupQuota[] | undefined;
}

/**
 * @public
 */
export interface CreateVolumeRequest {
  /**
   * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * Specifies the type of volume to create; `ONTAP` and `OPENZFS` are the only valid volume types.
   *
   * @public
   */
  VolumeType: VolumeType | undefined;

  /**
   * Specifies the name of the volume that you're creating.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Specifies the configuration to use when creating the ONTAP volume.
   *
   * @public
   */
  OntapConfiguration?: CreateOntapVolumeConfiguration | undefined;

  /**
   * A list of `Tag` values, with a maximum of 50 elements.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Specifies the configuration to use when creating the OpenZFS volume.
   *
   * @public
   */
  OpenZFSConfiguration?: CreateOpenZFSVolumeConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateVolumeFromBackupRequest {
  /**
   * The ID of the source backup. Specifies the backup that you are copying.
   *
   * @public
   */
  BackupId: string | undefined;

  /**
   * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The name of the new volume you're creating.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Specifies the configuration of the ONTAP volume that you are creating.
   *
   * @public
   */
  OntapConfiguration?: CreateOntapVolumeConfiguration | undefined;

  /**
   * A list of `Tag` values, with a maximum of 50 elements.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * The request object for the `DeleteBackup` operation.
 *
 * @public
 */
export interface DeleteBackupRequest {
  /**
   * The ID of the backup that you want to delete.
   *
   * @public
   */
  BackupId: string | undefined;

  /**
   * A string of up to 63 ASCII characters that Amazon FSx uses to ensure idempotent deletion. This parameter is automatically filled on your behalf when using the CLI or SDK.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * The response object for the `DeleteBackup` operation.
 *
 * @public
 */
export interface DeleteBackupResponse {
  /**
   * The ID of the backup that was deleted.
   *
   * @public
   */
  BackupId?: string | undefined;

  /**
   * The lifecycle status of the backup. If the `DeleteBackup` operation is successful, the status is `DELETED`.
   *
   * @public
   */
  Lifecycle?: BackupLifecycle | undefined;
}

/**
 * @public
 */
export interface DeleteDataRepositoryAssociationRequest {
  /**
   * The ID of the data repository association that you want to delete.
   *
   * @public
   */
  AssociationId: string | undefined;

  /**
   * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * Set to `true` to delete the data in the file system that corresponds to the data repository association.
   *
   * @public
   */
  DeleteDataInFileSystem?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteDataRepositoryAssociationResponse {
  /**
   * The ID of the data repository association being deleted.
   *
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * Describes the lifecycle state of the data repository association being deleted.
   *
   * @public
   */
  Lifecycle?: DataRepositoryLifecycle | undefined;

  /**
   * Indicates whether data in the file system that corresponds to the data repository association is being deleted. Default is `false`.
   *
   * @public
   */
  DeleteDataInFileSystem?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteFileCacheRequest {
  /**
   * The ID of the cache that's being deleted.
   *
   * @public
   */
  FileCacheId: string | undefined;

  /**
   * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteFileCacheResponse {
  /**
   * The ID of the cache that's being deleted.
   *
   * @public
   */
  FileCacheId?: string | undefined;

  /**
   * The cache lifecycle for the deletion request. If the `DeleteFileCache` operation is successful, this status is `DELETING`.
   *
   * @public
   */
  Lifecycle?: FileCacheLifecycle | undefined;
}

/**
 * The configuration object for the Amazon FSx for Lustre file system being deleted in the `DeleteFileSystem` operation.
 *
 * @public
 */
export interface DeleteFileSystemLustreConfiguration {
  /**
   * Set `SkipFinalBackup` to false if you want to take a final backup of the file system you are deleting. By default, Amazon FSx will not take a final backup on your behalf when the `DeleteFileSystem` operation is invoked. (Default = true)
   *
   * > **Note:** The `fsx:CreateBackup` permission is required if you set `SkipFinalBackup` to `false` in order to delete the file system and take a final backup.
   *
   * @public
   */
  SkipFinalBackup?: boolean | undefined;

  /**
   * Use if `SkipFinalBackup` is set to `false`, and you want to apply an array of tags to the final backup. If you have set the file system property `CopyTagsToBackups` to true, and you specify one or more `FinalBackupTags` when deleting a file system, Amazon FSx will not copy any existing file system tags to the backup.
   *
   * @public
   */
  FinalBackupTags?: Tag[] | undefined;
}

/**
 * The configuration object for the Amazon FSx for OpenZFS file system used in the `DeleteFileSystem` operation.
 *
 * @public
 */
export interface DeleteFileSystemOpenZFSConfiguration {
  /**
   * By default, Amazon FSx for OpenZFS takes a final backup on your behalf when the `DeleteFileSystem` operation is invoked. Doing this helps protect you from data loss, and we highly recommend taking the final backup. If you want to skip taking a final backup, set this value to `true`.
   *
   * @public
   */
  SkipFinalBackup?: boolean | undefined;

  /**
   * A list of tags to apply to the file system's final backup.
   *
   * @public
   */
  FinalBackupTags?: Tag[] | undefined;

  /**
   * To delete a file system if there are child volumes present below the root volume, use the string `DELETE_CHILD_VOLUMES_AND_SNAPSHOTS`. If your file system has child volumes and you don't use this option, the delete request will fail.
   *
   * @public
   */
  Options?: DeleteFileSystemOpenZFSOption[] | undefined;
}

/**
 * The configuration object for the Microsoft Windows file system used in the `DeleteFileSystem` operation.
 *
 * @public
 */
export interface DeleteFileSystemWindowsConfiguration {
  /**
   * By default, Amazon FSx for Windows takes a final backup on your behalf when the `DeleteFileSystem` operation is invoked. Doing this helps protect you from data loss, and we highly recommend taking the final backup. If you want to skip this backup, use this flag to do so.
   *
   * @public
   */
  SkipFinalBackup?: boolean | undefined;

  /**
   * A set of tags for your final backup.
   *
   * @public
   */
  FinalBackupTags?: Tag[] | undefined;
}

/**
 * The request object for `DeleteFileSystem` operation.
 *
 * @public
 */
export interface DeleteFileSystemRequest {
  /**
   * The ID of the file system that you want to delete.
   *
   * @public
   */
  FileSystemId: string | undefined;

  /**
   * A string of up to 63 ASCII characters that Amazon FSx uses to ensure idempotent deletion. This token is automatically filled on your behalf when using the Command Line Interface (CLI) or an Amazon Web Services SDK.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The configuration object for the Microsoft Windows file system used in the `DeleteFileSystem` operation.
   *
   * @public
   */
  WindowsConfiguration?: DeleteFileSystemWindowsConfiguration | undefined;

  /**
   * The configuration object for the Amazon FSx for Lustre file system being deleted in the `DeleteFileSystem` operation.
   *
   * @public
   */
  LustreConfiguration?: DeleteFileSystemLustreConfiguration | undefined;

  /**
   * The configuration object for the OpenZFS file system used in the `DeleteFileSystem` operation.
   *
   * @public
   */
  OpenZFSConfiguration?: DeleteFileSystemOpenZFSConfiguration | undefined;
}

/**
 * The response object for the Amazon FSx for Lustre file system being deleted in the `DeleteFileSystem` operation.
 *
 * @public
 */
export interface DeleteFileSystemLustreResponse {
  /**
   * The ID of the final backup for this file system.
   *
   * @public
   */
  FinalBackupId?: string | undefined;

  /**
   * The set of tags applied to the final backup.
   *
   * @public
   */
  FinalBackupTags?: Tag[] | undefined;
}

/**
 * The response object for the Amazon FSx for OpenZFS file system that's being deleted in the `DeleteFileSystem` operation.
 *
 * @public
 */
export interface DeleteFileSystemOpenZFSResponse {
  /**
   * The ID of the source backup. Specifies the backup that you are copying.
   *
   * @public
   */
  FinalBackupId?: string | undefined;

  /**
   * A list of `Tag` values, with a maximum of 50 elements.
   *
   * @public
   */
  FinalBackupTags?: Tag[] | undefined;
}

/**
 * The response object for the Microsoft Windows file system used in the `DeleteFileSystem` operation.
 *
 * @public
 */
export interface DeleteFileSystemWindowsResponse {
  /**
   * The ID of the final backup for this file system.
   *
   * @public
   */
  FinalBackupId?: string | undefined;

  /**
   * The set of tags applied to the final backup.
   *
   * @public
   */
  FinalBackupTags?: Tag[] | undefined;
}

/**
 * The response object for the `DeleteFileSystem` operation.
 *
 * @public
 */
export interface DeleteFileSystemResponse {
  /**
   * The ID of the file system that's being deleted.
   *
   * @public
   */
  FileSystemId?: string | undefined;

  /**
   * The file system lifecycle for the deletion request. If the `DeleteFileSystem` operation is successful, this status is `DELETING`.
   *
   * @public
   */
  Lifecycle?: FileSystemLifecycle | undefined;

  /**
   * The response object for the Microsoft Windows file system used in the `DeleteFileSystem` operation.
   *
   * @public
   */
  WindowsResponse?: DeleteFileSystemWindowsResponse | undefined;

  /**
   * The response object for the Amazon FSx for Lustre file system being deleted in the `DeleteFileSystem` operation.
   *
   * @public
   */
  LustreResponse?: DeleteFileSystemLustreResponse | undefined;

  /**
   * The response object for the OpenZFS file system that's being deleted in the `DeleteFileSystem` operation.
   *
   * @public
   */
  OpenZFSResponse?: DeleteFileSystemOpenZFSResponse | undefined;
}

/**
 * @public
 */
export interface DeleteSnapshotRequest {
  /**
   * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The ID of the snapshot that you want to delete.
   *
   * @public
   */
  SnapshotId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSnapshotResponse {
  /**
   * The ID of the deleted snapshot.
   *
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * The lifecycle status of the snapshot. If the `DeleteSnapshot` operation is successful, this status is `DELETING`.
   *
   * @public
   */
  Lifecycle?: SnapshotLifecycle | undefined;
}

/**
 * @public
 */
export interface DeleteStorageVirtualMachineRequest {
  /**
   * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The ID of the SVM that you want to delete.
   *
   * @public
   */
  StorageVirtualMachineId: string | undefined;
}

/**
 * @public
 */
export interface DeleteStorageVirtualMachineResponse {
  /**
   * The ID of the SVM Amazon FSx is deleting.
   *
   * @public
   */
  StorageVirtualMachineId?: string | undefined;

  /**
   * Describes the lifecycle state of the SVM being deleted.
   *
   * @public
   */
  Lifecycle?: StorageVirtualMachineLifecycle | undefined;
}

/**
 * Use to specify skipping a final backup, adding tags to a final backup, or bypassing the retention period of an FSx for ONTAP SnapLock Enterprise volume when deleting an FSx for ONTAP volume.
 *
 * @public
 */
export interface DeleteVolumeOntapConfiguration {
  /**
   * Set to true if you want to skip taking a final backup of the volume you are deleting.
   *
   * @public
   */
  SkipFinalBackup?: boolean | undefined;

  /**
   * A list of `Tag` values, with a maximum of 50 elements.
   *
   * @public
   */
  FinalBackupTags?: Tag[] | undefined;

  /**
   * Setting this to `true` allows a SnapLock administrator to delete an FSx for ONTAP SnapLock Enterprise volume with unexpired write once, read many (WORM) files. The IAM permission `fsx:BypassSnaplockEnterpriseRetention` is also required to delete SnapLock Enterprise volumes with unexpired WORM files. The default value is `false`.
   *
   * For more information, see [Deleting a SnapLock volume](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/snaplock-delete-volume.html).
   *
   * @public
   */
  BypassSnaplockEnterpriseRetention?: boolean | undefined;
}

/**
 * A value that specifies whether to delete all child volumes and snapshots.
 *
 * @public
 */
export interface DeleteVolumeOpenZFSConfiguration {
  /**
   * To delete the volume's child volumes, snapshots, and clones, use the string `DELETE_CHILD_VOLUMES_AND_SNAPSHOTS`.
   *
   * @public
   */
  Options?: DeleteOpenZFSVolumeOption[] | undefined;
}

/**
 * @public
 */
export interface DeleteVolumeRequest {
  /**
   * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The ID of the volume that you are deleting.
   *
   * @public
   */
  VolumeId: string | undefined;

  /**
   * For Amazon FSx for ONTAP volumes, specify whether to take a final backup of the volume and apply tags to the backup. To apply tags to the backup, you must have the `fsx:TagResource` permission.
   *
   * @public
   */
  OntapConfiguration?: DeleteVolumeOntapConfiguration | undefined;

  /**
   * For Amazon FSx for OpenZFS volumes, specify whether to delete all child volumes and snapshots.
   *
   * @public
   */
  OpenZFSConfiguration?: DeleteVolumeOpenZFSConfiguration | undefined;
}

/**
 * The response object for the Amazon FSx for NetApp ONTAP volume being deleted in the `DeleteVolume` operation.
 *
 * @public
 */
export interface DeleteVolumeOntapResponse {
  /**
   * The ID of the source backup. Specifies the backup that you are copying.
   *
   * @public
   */
  FinalBackupId?: string | undefined;

  /**
   * A list of `Tag` values, with a maximum of 50 elements.
   *
   * @public
   */
  FinalBackupTags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DeleteVolumeResponse {
  /**
   * The ID of the volume that's being deleted.
   *
   * @public
   */
  VolumeId?: string | undefined;

  /**
   * The lifecycle state of the volume being deleted. If the `DeleteVolume` operation is successful, this value is `DELETING`.
   *
   * @public
   */
  Lifecycle?: VolumeLifecycle | undefined;

  /**
   * Returned after a `DeleteVolume` request, showing the status of the delete request.
   *
   * @public
   */
  OntapResponse?: DeleteVolumeOntapResponse | undefined;
}

/**
 * A filter used to restrict the results of describe calls. You can use multiple filters to return results that meet all applied filter requirements.
 *
 * @public
 */
export interface Filter {
  /**
   * The name for this filter.
   *
   * @public
   */
  Name?: FilterName | undefined;

  /**
   * The values of the filter. These are all the values for any of the applied filters.
   *
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * The request object for the `DescribeBackups` operation.
 *
 * @public
 */
export interface DescribeBackupsRequest {
  /**
   * The IDs of the backups that you want to retrieve. This parameter value overrides any filters. If any IDs aren't found, a `BackupNotFound` error occurs.
   *
   * @public
   */
  BackupIds?: string[] | undefined;

  /**
   * The filters structure. The supported names are `file-system-id`, `backup-type`, `file-system-type`, and `volume-id`.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * Maximum number of backups to return in the response. This parameter value must be greater than 0. The number of items that Amazon FSx returns is the minimum of the `MaxResults` parameter specified in the request and the service's internal maximum number of items per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * An opaque pagination token returned from a previous `DescribeBackups` operation. If a token is present, the operation continues the list from where the returning call left off.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataRepositoryAssociationsRequest {
  /**
   * IDs of the data repository associations whose descriptions you want to retrieve (String).
   *
   * @public
   */
  AssociationIds?: string[] | undefined;

  /**
   * A list of `Filter` elements.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of resources to return in the response. This value must be an integer greater than zero.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * (Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous `NextToken` value left off.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataRepositoryAssociationsResponse {
  /**
   * An array of one or more data repository association descriptions.
   *
   * @public
   */
  Associations?: DataRepositoryAssociation[] | undefined;

  /**
   * (Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous `NextToken` value left off.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * (Optional) An array of filter objects you can use to filter the response of data repository tasks you will see in the response. You can filter the tasks returned in the response by one or more file system IDs, task lifecycles, and by task type. A filter object consists of a filter `Name`, and one or more `Values` for the filter.
 *
 * @public
 */
export interface DataRepositoryTaskFilter {
  /**
   * Name of the task property to use in filtering the tasks returned in the response.
   *
   * - Use `file-system-id` to retrieve data repository tasks for specific file systems.
   * - Use `task-lifecycle` to retrieve data repository tasks with one or more specific lifecycle states, as follows: CANCELED, EXECUTING, FAILED, PENDING, and SUCCEEDED.
   *
   * @public
   */
  Name?: DataRepositoryTaskFilterName | undefined;

  /**
   * Use Values to include the specific file system IDs and task lifecycle states for the filters you are using.
   *
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeDataRepositoryTasksRequest {
  /**
   * (Optional) IDs of the tasks whose descriptions you want to retrieve (String).
   *
   * @public
   */
  TaskIds?: string[] | undefined;

  /**
   * (Optional) You can use filters to narrow the `DescribeDataRepositoryTasks` response to include just tasks for specific file systems, or tasks in a specific lifecycle state.
   *
   * @public
   */
  Filters?: DataRepositoryTaskFilter[] | undefined;

  /**
   * The maximum number of resources to return in the response. This value must be an integer greater than zero.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * (Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous `NextToken` value left off.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataRepositoryTasksResponse {
  /**
   * The collection of data repository task descriptions returned.
   *
   * @public
   */
  DataRepositoryTasks?: DataRepositoryTask[] | undefined;

  /**
   * (Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous `NextToken` value left off.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFileCachesRequest {
  /**
   * IDs of the caches whose descriptions you want to retrieve (String).
   *
   * @public
   */
  FileCacheIds?: string[] | undefined;

  /**
   * The maximum number of resources to return in the response. This value must be an integer greater than zero.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * (Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous `NextToken` value left off.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A description of a specific Amazon File Cache resource, which is a response object from the `DescribeFileCaches` operation.
 *
 * @public
 */
export interface FileCache {
  /**
   * An Amazon Web Services account ID. This ID is a 12-digit number that you use to construct Amazon Resource Names (ARNs) for resources.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z), also known as Unix time.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The system-generated, unique ID of the cache.
   *
   * @public
   */
  FileCacheId?: string | undefined;

  /**
   * The type of cache, which must be `LUSTRE`.
   *
   * @public
   */
  FileCacheType?: FileCacheType | undefined;

  /**
   * The Lustre version of the cache, which must be `2.12`.
   *
   * @public
   */
  FileCacheTypeVersion?: string | undefined;

  /**
   * The lifecycle status of the cache. The following are the possible values and what they mean:
   *
   * - `AVAILABLE` - The cache is in a healthy state, and is reachable and available for use.
   * - `CREATING` - The new cache is being created.
   * - `DELETING` - An existing cache is being deleted.
   * - `UPDATING` - The cache is undergoing a customer-initiated update.
   * - `FAILED` - An existing cache has experienced an unrecoverable failure. When creating a new cache, the cache was unable to be created.
   *
   * @public
   */
  Lifecycle?: FileCacheLifecycle | undefined;

  /**
   * A structure providing details of any failures that occurred.
   *
   * @public
   */
  FailureDetails?: FileCacheFailureDetails | undefined;

  /**
   * The storage capacity of the cache in gibibytes (GiB).
   *
   * @public
   */
  StorageCapacity?: number | undefined;

  /**
   * The ID of your virtual private cloud (VPC). For more information, see [VPC and subnets](https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html) in the *Amazon VPC User Guide*.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * A list of subnet IDs that the cache will be accessible from. You can specify only one subnet ID in a call to the `CreateFileCache` operation.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * A list of network interface IDs.
   *
   * @public
   */
  NetworkInterfaceIds?: string[] | undefined;

  /**
   * The Domain Name System (DNS) name for the cache.
   *
   * @public
   */
  DNSName?: string | undefined;

  /**
   * Specifies the ID of the Key Management Service (KMS) key to use for encrypting data on an Amazon File Cache. If a `KmsKeyId` isn't specified, the Amazon FSx-managed KMS key for your account is used. For more information, see [Encrypt](https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html) in the *Key Management Service API Reference*.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services resources. We require an ARN when you need to specify a resource unambiguously across all of Amazon Web Services. For more information, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  ResourceARN?: string | undefined;

  /**
   * The configuration for the Amazon File Cache resource.
   *
   * @public
   */
  LustreConfiguration?: FileCacheLustreConfiguration | undefined;

  /**
   * A list of IDs of data repository associations that are associated with this cache.
   *
   * @public
   */
  DataRepositoryAssociationIds?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeFileCachesResponse {
  /**
   * The response object for the `DescribeFileCaches` operation.
   *
   * @public
   */
  FileCaches?: FileCache[] | undefined;

  /**
   * (Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous `NextToken` value left off.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The request object for `DescribeFileSystemAliases` operation.
 *
 * @public
 */
export interface DescribeFileSystemAliasesRequest {
  /**
   * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The ID of the file system to return the associated DNS aliases for (String).
   *
   * @public
   */
  FileSystemId: string | undefined;

  /**
   * Maximum number of DNS aliases to return in the response (integer). This parameter value must be greater than 0. The number of items that Amazon FSx returns is the minimum of the `MaxResults` parameter specified in the request and the service's internal maximum number of items per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Opaque pagination token returned from a previous `DescribeFileSystemAliases` operation (String). If a token is included in the request, the action continues the list from where the previous returning call left off.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The response object for `DescribeFileSystemAliases` operation.
 *
 * @public
 */
export interface DescribeFileSystemAliasesResponse {
  /**
   * An array of one or more DNS aliases currently associated with the specified file system.
   *
   * @public
   */
  Aliases?: Alias[] | undefined;

  /**
   * Present if there are more DNS aliases than returned in the response (String). You can use the `NextToken` value in a later request to fetch additional descriptions.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The request object for `DescribeFileSystems` operation.
 *
 * @public
 */
export interface DescribeFileSystemsRequest {
  /**
   * IDs of the file systems whose descriptions you want to retrieve (String).
   *
   * @public
   */
  FileSystemIds?: string[] | undefined;

  /**
   * Maximum number of file systems to return in the response (integer). This parameter value must be greater than 0. The number of items that Amazon FSx returns is the minimum of the `MaxResults` parameter specified in the request and the service's internal maximum number of items per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Opaque pagination token returned from a previous `DescribeFileSystems` operation (String). If a token present, the operation continues the list from where the returning call left off.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A set of Name and Values pairs used to view a select set of S3 access point attachments.
 *
 * @public
 */
export interface S3AccessPointAttachmentsFilter {
  /**
   * The name of the filter.
   *
   * @public
   */
  Name?: S3AccessPointAttachmentsFilterName | undefined;

  /**
   * The values of the filter.
   *
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeS3AccessPointAttachmentsRequest {
  /**
   * The names of the S3 access point attachments whose descriptions you want to retrieve.
   *
   * @public
   */
  Names?: string[] | undefined;

  /**
   * Enter a filter Name and Values pair to view a select set of S3 access point attachments.
   *
   * @public
   */
  Filters?: S3AccessPointAttachmentsFilter[] | undefined;

  /**
   * The maximum number of resources to return in the response. This value must be an integer greater than zero.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * (Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous `NextToken` value left off.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeS3AccessPointAttachmentsResponse {
  /**
   * Array of S3 access point attachments returned after a successful `DescribeS3AccessPointAttachments` operation.
   *
   * @public
   */
  S3AccessPointAttachments?: S3AccessPointAttachment[] | undefined;

  /**
   * (Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous `NextToken` value left off.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSharedVpcConfigurationRequest {}

/**
 * @public
 */
export interface DescribeSharedVpcConfigurationResponse {
  /**
   * Indicates whether participant accounts can create FSx for ONTAP Multi-AZ file systems in shared subnets.
   *
   * @public
   */
  EnableFsxRouteTableUpdatesFromParticipantAccounts?: string | undefined;
}

/**
 * A filter used to restrict the results of `DescribeSnapshots` calls. You can use multiple filters to return results that meet all applied filter requirements.
 *
 * @public
 */
export interface SnapshotFilter {
  /**
   * The name of the filter to use. You can filter by the `file-system-id` or by `volume-id`.
   *
   * @public
   */
  Name?: SnapshotFilterName | undefined;

  /**
   * The `file-system-id` or `volume-id` that you are filtering for.
   *
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeSnapshotsRequest {
  /**
   * The IDs of the snapshots that you want to retrieve. This parameter value overrides any filters. If any IDs aren't found, a `SnapshotNotFound` error occurs.
   *
   * @public
   */
  SnapshotIds?: string[] | undefined;

  /**
   * The filters structure. The supported names are `file-system-id` or `volume-id`.
   *
   * @public
   */
  Filters?: SnapshotFilter[] | undefined;

  /**
   * The maximum number of resources to return in the response. This value must be an integer greater than zero.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * (Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous `NextToken` value left off.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Set to `false` (default) if you want to only see the snapshots owned by your Amazon Web Services account. Set to `true` if you want to see the snapshots in your account and the ones shared with you from another account.
   *
   * @public
   */
  IncludeShared?: boolean | undefined;
}

/**
 * A filter used to restrict the results of describe calls for Amazon FSx for NetApp ONTAP storage virtual machines (SVMs). You can use multiple filters to return results that meet all applied filter requirements.
 *
 * @public
 */
export interface StorageVirtualMachineFilter {
  /**
   * The name for this filter.
   *
   * @public
   */
  Name?: StorageVirtualMachineFilterName | undefined;

  /**
   * The values of the filter. These are all the values for any of the applied filters.
   *
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeStorageVirtualMachinesRequest {
  /**
   * Enter the ID of one or more SVMs that you want to view.
   *
   * @public
   */
  StorageVirtualMachineIds?: string[] | undefined;

  /**
   * Enter a filter name:value pair to view a select set of SVMs.
   *
   * @public
   */
  Filters?: StorageVirtualMachineFilter[] | undefined;

  /**
   * The maximum number of resources to return in the response. This value must be an integer greater than zero.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * (Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous `NextToken` value left off.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeStorageVirtualMachinesResponse {
  /**
   * Returned after a successful `DescribeStorageVirtualMachines` operation, describing each SVM.
   *
   * @public
   */
  StorageVirtualMachines?: StorageVirtualMachine[] | undefined;

  /**
   * (Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous `NextToken` value left off.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A filter used to restrict the results of describe calls for Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS volumes. You can use multiple filters to return results that meet all applied filter requirements.
 *
 * @public
 */
export interface VolumeFilter {
  /**
   * The name for this filter.
   *
   * @public
   */
  Name?: VolumeFilterName | undefined;

  /**
   * The values of the filter. These are all the values for any of the applied filters.
   *
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeVolumesRequest {
  /**
   * The IDs of the volumes whose descriptions you want to retrieve.
   *
   * @public
   */
  VolumeIds?: string[] | undefined;

  /**
   * Enter a filter `Name` and `Values` pair to view a select set of volumes.
   *
   * @public
   */
  Filters?: VolumeFilter[] | undefined;

  /**
   * The maximum number of resources to return in the response. This value must be an integer greater than zero.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * (Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous `NextToken` value left off.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DetachAndDeleteS3AccessPointRequest {
  /**
   * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The name of the S3 access point attachment that you want to delete.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DetachAndDeleteS3AccessPointResponse {
  /**
   * The lifecycle status of the S3 access point attachment.
   *
   * @public
   */
  Lifecycle?: S3AccessPointAttachmentLifecycle | undefined;

  /**
   * The name of the S3 access point attachment being deleted.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * The request object of DNS aliases to disassociate from an Amazon FSx for Windows File Server file system.
 *
 * @public
 */
export interface DisassociateFileSystemAliasesRequest {
  /**
   * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * Specifies the file system from which to disassociate the DNS aliases.
   *
   * @public
   */
  FileSystemId: string | undefined;

  /**
   * An array of one or more DNS alias names to disassociate, or remove, from the file system.
   *
   * @public
   */
  Aliases: string[] | undefined;
}

/**
 * The system generated response showing the DNS aliases that Amazon FSx is attempting to disassociate from the file system. Use the API operation to monitor the status of the aliases Amazon FSx is removing from the file system.
 *
 * @public
 */
export interface DisassociateFileSystemAliasesResponse {
  /**
   * An array of one or more DNS aliases that Amazon FSx is attempting to disassociate from the file system.
   *
   * @public
   */
  Aliases?: Alias[] | undefined;
}

/**
 * The request object for `ListTagsForResource` operation.
 *
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The ARN of the Amazon FSx resource that will have its tags listed.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * Maximum number of tags to return in the response (integer). This parameter value must be greater than 0. The number of items that Amazon FSx returns is the minimum of the `MaxResults` parameter specified in the request and the service's internal maximum number of items per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Opaque pagination token returned from a previous `ListTagsForResource` operation (String). If a token present, the action continues the list from where the returning call left off.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The response object for `ListTagsForResource` operation.
 *
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * A list of tags on the resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * This is present if there are more tags than returned in the response (String). You can use the `NextToken` value in the later request to fetch the tags.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ReleaseFileSystemNfsV3LocksRequest {
  /**
   * The globally unique ID of the file system, assigned by Amazon FSx.
   *
   * @public
   */
  FileSystemId: string | undefined;

  /**
   * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface RestoreVolumeFromSnapshotRequest {
  /**
   * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The ID of the volume that you are restoring.
   *
   * @public
   */
  VolumeId: string | undefined;

  /**
   * The ID of the source snapshot. Specifies the snapshot that you are restoring from.
   *
   * @public
   */
  SnapshotId: string | undefined;

  /**
   * The settings used when restoring the specified volume from snapshot.
   *
   * - `DELETE_INTERMEDIATE_SNAPSHOTS` - Deletes snapshots between the current state and the specified snapshot. If there are intermediate snapshots and this option isn't used, `RestoreVolumeFromSnapshot` fails.
   * - `DELETE_CLONED_VOLUMES` - Deletes any dependent clone volumes created from intermediate snapshots. If there are any dependent clone volumes and this option isn't used, `RestoreVolumeFromSnapshot` fails.
   *
   * @public
   */
  Options?: RestoreOpenZFSVolumeOption[] | undefined;
}

/**
 * @public
 */
export interface StartMisconfiguredStateRecoveryRequest {
  /**
   * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The globally unique ID of the file system, assigned by Amazon FSx.
   *
   * @public
   */
  FileSystemId: string | undefined;
}

/**
 * The request object for the `TagResource` operation.
 *
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the Amazon FSx resource that you want to tag.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * A list of tags for the resource. If a tag with a given key already exists, the value is replaced by the one specified in this parameter.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * The response object for the `TagResource` operation.
 *
 * @public
 */
export interface TagResourceResponse {}

/**
 * The request object for `UntagResource` action.
 *
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The ARN of the Amazon FSx resource to untag.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * A list of keys of tags on the resource to untag. In case the tag key doesn't exist, the call will still succeed to be idempotent.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * The response object for `UntagResource` action.
 *
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateDataRepositoryAssociationRequest {
  /**
   * The ID of the data repository association that you are updating.
   *
   * @public
   */
  AssociationId: string | undefined;

  /**
   * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * For files imported from a data repository, this value determines the stripe count and maximum amount of data per file (in MiB) stored on a single physical disk. The maximum number of disks that a single file can be striped across is limited by the total number of disks that make up the file system.
   *
   * The default chunk size is 1,024 MiB (1 GiB) and can go as high as 512,000 MiB (500 GiB). Amazon S3 objects have a maximum size of 5 TB.
   *
   * @public
   */
  ImportedFileChunkSize?: number | undefined;

  /**
   * The configuration for an Amazon S3 data repository linked to an Amazon FSx Lustre file system with a data repository association. The configuration defines which file events (new, changed, or deleted files or directories) are automatically imported from the linked data repository to the file system or automatically exported from the file system to the data repository.
   *
   * @public
   */
  S3?: S3DataRepositoryConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateDataRepositoryAssociationResponse {
  /**
   * The response object returned after the data repository association is updated.
   *
   * @public
   */
  Association?: DataRepositoryAssociation | undefined;
}

/**
 * The configuration update for an Amazon File Cache resource.
 *
 * @public
 */
export interface UpdateFileCacheLustreConfiguration {
  /**
   * The preferred start time to perform weekly maintenance, formatted d:HH:MM in the UTC time zone, where d is the weekday number, from 1 through 7, beginning with Monday and ending with Sunday.
   *
   * For example, `1:05:00` specifies maintenance at 5 AM Monday.
   *
   * @public
   */
  WeeklyMaintenanceStartTime?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFileCacheRequest {
  /**
   * The ID of the cache that you are updating.
   *
   * @public
   */
  FileCacheId: string | undefined;

  /**
   * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The configuration updates for an Amazon File Cache resource.
   *
   * @public
   */
  LustreConfiguration?: UpdateFileCacheLustreConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateFileCacheResponse {
  /**
   * A description of the cache that was updated.
   *
   * @public
   */
  FileCache?: FileCache | undefined;
}

/**
 * The Lustre metadata performance configuration update for an Amazon FSx for Lustre file system using a `PERSISTENT_2` deployment type. You can request an increase in your file system's Metadata IOPS and/or switch your file system's metadata configuration mode. For more information, see [Managing metadata performance](https://docs.aws.amazon.com/fsx/latest/LustreGuide/managing-metadata-performance.html) in the *Amazon FSx for Lustre User Guide*.
 *
 * @public
 */
export interface UpdateFileSystemLustreMetadataConfiguration {
  /**
   * (USER_PROVISIONED mode only) Specifies the number of Metadata IOPS to provision for your file system.
   *
   * - For SSD file systems, valid values are `1500`, `3000`, `6000`, `12000`, and multiples of `12000` up to a maximum of `192000`.
   * - For Intelligent-Tiering file systems, valid values are `6000` and `12000`.
   *
   * The value you provide must be greater than or equal to the current number of Metadata IOPS provisioned for the file system.
   *
   * @public
   */
  Iops?: number | undefined;

  /**
   * The metadata configuration mode for provisioning Metadata IOPS for an FSx for Lustre file system using a `PERSISTENT_2` deployment type.
   *
   * - To increase the Metadata IOPS or to switch an SSD file system from AUTOMATIC, specify `USER_PROVISIONED` as the value for this parameter. Then use the Iops parameter to provide a Metadata IOPS value that is greater than or equal to the current number of Metadata IOPS provisioned for the file system.
   * - To switch from USER_PROVISIONED mode on an SSD file system, specify `AUTOMATIC` as the value for this parameter, but do not input a value for Iops.
   *
   *   > **Note:**
   *   >
   *   > - If you request to switch from USER_PROVISIONED to AUTOMATIC mode and the current Metadata IOPS value is greater than the automated default, FSx for Lustre rejects the request because downscaling Metadata IOPS is not supported.
   *   > - AUTOMATIC mode is not supported on Intelligent-Tiering file systems. For Intelligent-Tiering file systems, use USER_PROVISIONED mode.
   *
   * @public
   */
  Mode?: MetadataConfigurationMode | undefined;
}

/**
 * The configuration object for Amazon FSx for Lustre file systems used in the `UpdateFileSystem` operation.
 *
 * @public
 */
export interface UpdateFileSystemLustreConfiguration {
  /**
   * (Optional) The preferred start time to perform weekly maintenance, formatted d:HH:MM in the UTC time zone. d is the weekday number, from 1 through 7, beginning with Monday and ending with Sunday.
   *
   * @public
   */
  WeeklyMaintenanceStartTime?: string | undefined;

  /**
   * A recurring daily time, in the format `HH:MM`. `HH` is the zero-padded hour of the day (0-23), and `MM` is the zero-padded minute of the hour. For example, `05:00` specifies 5 AM daily.
   *
   * @public
   */
  DailyAutomaticBackupStartTime?: string | undefined;

  /**
   * The number of days to retain automatic backups. Setting this property to `0` disables automatic backups. You can retain automatic backups for a maximum of 90 days. The default is `0`.
   *
   * @public
   */
  AutomaticBackupRetentionDays?: number | undefined;

  /**
   * (Optional) When you create your file system, your existing S3 objects appear as file and directory listings. Use this property to choose how Amazon FSx keeps your file and directory listing up to date as you add or modify objects in your linked S3 bucket. `AutoImportPolicy` can have the following values:
   *
   * - `NONE` - (Default) AutoImport is off. Amazon FSx only updates file and directory listings from the linked S3 bucket when the file system is created. FSx does not update the file and directory listing for any new or changed objects after choosing this option.
   * - `NEW` - AutoImport is on. Amazon FSx automatically imports directory listings of any new objects added to the linked S3 bucket that do not currently exist in the FSx file system.
   * - `NEW_CHANGED` - AutoImport is on. Amazon FSx automatically imports file and directory listings of any new objects added to the S3 bucket and any existing objects that are changed in the S3 bucket after you choose this option.
   * - `NEW_CHANGED_DELETED` - AutoImport is on. Amazon FSx automatically imports file and directory listings of any new objects added to the S3 bucket, any existing objects that are changed in the S3 bucket, and any objects that were deleted in the S3 bucket.
   *
   * This parameter is not supported for file systems with a data repository association.
   *
   * @public
   */
  AutoImportPolicy?: AutoImportPolicyType | undefined;

  /**
   * Sets the data compression configuration for the file system. `DataCompressionType` can have the following values:
   *
   * - `NONE` - Data compression is turned off for the file system.
   * - `LZ4` - Data compression is turned on with the LZ4 algorithm.
   *
   * If you don't use `DataCompressionType`, the file system retains its current data compression configuration.
   *
   * For more information, see [Lustre data compression](https://docs.aws.amazon.com/fsx/latest/LustreGuide/data-compression.html).
   *
   * @public
   */
  DataCompressionType?: DataCompressionType | undefined;

  /**
   * The Lustre logging configuration used when updating an Amazon FSx for Lustre file system. When logging is enabled, Lustre logs error and warning events for data repositories associated with your file system to Amazon CloudWatch Logs.
   *
   * @public
   */
  LogConfiguration?: LustreLogCreateConfiguration | undefined;

  /**
   * The Lustre root squash configuration used when updating an Amazon FSx for Lustre file system. When enabled, root squash restricts root-level access from clients that try to access your file system as a root user.
   *
   * @public
   */
  RootSquashConfiguration?: LustreRootSquashConfiguration | undefined;

  /**
   * The throughput of an Amazon FSx for Lustre Persistent SSD-based file system, measured in megabytes per second per tebibyte (MB/s/TiB). You can increase or decrease your file system's throughput. Valid values depend on the deployment type of the file system, as follows:
   *
   * - For `PERSISTENT_1` SSD-based deployment types, valid values are 50, 100, and 200 MB/s/TiB.
   * - For `PERSISTENT_2` SSD-based deployment types, valid values are 125, 250, 500, and 1000 MB/s/TiB.
   *
   * For more information, see [Managing throughput capacity](https://docs.aws.amazon.com/fsx/latest/LustreGuide/managing-throughput-capacity.html).
   *
   * @public
   */
  PerUnitStorageThroughput?: number | undefined;

  /**
   * The Lustre metadata performance configuration for an Amazon FSx for Lustre file system using a `PERSISTENT_2` deployment type. When this configuration is enabled, the file system supports increasing metadata performance.
   *
   * @public
   */
  MetadataConfiguration?: UpdateFileSystemLustreMetadataConfiguration | undefined;

  /**
   * The throughput of an Amazon FSx for Lustre file system using an Intelligent-Tiering storage class, measured in megabytes per second (MBps). You can only increase your file system's throughput. Valid values are 4000 MBps or multiples of 4000 MBps.
   *
   * @public
   */
  ThroughputCapacity?: number | undefined;

  /**
   * Specifies the optional provisioned SSD read cache on Amazon FSx for Lustre file systems that use the Intelligent-Tiering storage class.
   *
   * @public
   */
  DataReadCacheConfiguration?: LustreReadCacheConfiguration | undefined;
}

/**
 * The configuration updates for an Amazon FSx for NetApp ONTAP file system.
 *
 * @public
 */
export interface UpdateFileSystemOntapConfiguration {
  /**
   * The number of days to retain automatic backups. Setting this property to `0` disables automatic backups. You can retain automatic backups for a maximum of 90 days. The default is `30`.
   *
   * @public
   */
  AutomaticBackupRetentionDays?: number | undefined;

  /**
   * A recurring daily time, in the format `HH:MM`. `HH` is the zero-padded hour of the day (0-23), and `MM` is the zero-padded minute of the hour. For example, `05:00` specifies 5 AM daily.
   *
   * @public
   */
  DailyAutomaticBackupStartTime?: string | undefined;

  /**
   * Update the password for the `fsxadmin` user by entering a new password. You use the `fsxadmin` user to access the NetApp ONTAP CLI and REST API to manage your file system resources. For more information, see [Managing resources using NetApp Application](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-resources-ontap-apps.html).
   *
   * @public
   */
  FsxAdminPassword?: string | undefined;

  /**
   * The preferred start time to perform weekly maintenance, formatted d:HH:MM in the UTC time zone, where d is the weekday number, from 1 through 7, beginning with Monday and ending with Sunday.
   *
   * For example, `1:05:00` specifies maintenance at 5 AM Monday.
   *
   * @public
   */
  WeeklyMaintenanceStartTime?: string | undefined;

  /**
   * The SSD IOPS (input output operations per second) configuration for an Amazon FSx for NetApp ONTAP file system. The default is 3 IOPS per GB of storage capacity, but you can provision additional IOPS per GB of storage. The configuration consists of an IOPS mode (`AUTOMATIC` or `USER_PROVISIONED`), and in the case of `USER_PROVISIONED` IOPS, the total number of SSD IOPS provisioned. For more information, see [File system storage capacity and IOPS](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/storage-capacity-and-IOPS.html).
   *
   * @public
   */
  DiskIopsConfiguration?: DiskIopsConfiguration | undefined;

  /**
   * Enter a new value to change the amount of throughput capacity for the file system in megabytes per second (MBps). For more information, see [Managing throughput capacity](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-throughput-capacity.html) in the FSx for ONTAP User Guide.
   *
   * Amazon FSx responds with an HTTP status code 400 (Bad Request) for the following conditions:
   *
   * - The value of `ThroughputCapacity` and `ThroughputCapacityPerHAPair` are not the same value.
   * - The value of `ThroughputCapacity` when divided by the value of `HAPairs` is outside of the valid range for `ThroughputCapacity`.
   *
   * @public
   */
  ThroughputCapacity?: number | undefined;

  /**
   * (Multi-AZ only) A list of IDs of new virtual private cloud (VPC) route tables to associate (add) with your Amazon FSx for NetApp ONTAP file system.
   *
   * @public
   */
  AddRouteTableIds?: string[] | undefined;

  /**
   * (Multi-AZ only) A list of IDs of existing virtual private cloud (VPC) route tables to disassociate (remove) from your Amazon FSx for NetApp ONTAP file system. You can use the API operation to retrieve the list of VPC route table IDs for a file system.
   *
   * @public
   */
  RemoveRouteTableIds?: string[] | undefined;

  /**
   * Use to choose the throughput capacity per HA pair, rather than the total throughput for the file system.
   *
   * This field and `ThroughputCapacity` cannot be defined in the same API call, but one is required.
   *
   * This field and `ThroughputCapacity` are the same for file systems with one HA pair.
   *
   * - For `SINGLE_AZ_1` and `MULTI_AZ_1` file systems, valid values are 128, 256, 512, 1024, 2048, or 4096 MBps.
   * - For `SINGLE_AZ_2`, valid values are 1536, 3072, or 6144 MBps.
   * - For `MULTI_AZ_2`, valid values are 384, 768, 1536, 3072, or 6144 MBps.
   *
   * Amazon FSx responds with an HTTP status code 400 (Bad Request) for the following conditions:
   *
   * - The value of `ThroughputCapacity` and `ThroughputCapacityPerHAPair` are not the same value for file systems with one HA pair.
   * - The value of deployment type is `SINGLE_AZ_2` and `ThroughputCapacity` / `ThroughputCapacityPerHAPair` is not a valid HA pair (a value between 1 and 12).
   * - The value of `ThroughputCapacityPerHAPair` is not a valid value.
   *
   * @public
   */
  ThroughputCapacityPerHAPair?: number | undefined;

  /**
   * Use to update the number of high-availability (HA) pairs for a second-generation single-AZ file system. If you increase the number of HA pairs for your file system, you must specify proportional increases for `StorageCapacity`, `Iops`, and `ThroughputCapacity`. For more information, see [High-availability (HA) pairs](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/administering-file-systems.html#HA-pairs) in the FSx for ONTAP user guide. Block storage protocol support (iSCSI and NVMe over TCP) is disabled on file systems with more than 6 HA pairs. For more information, see [Using block storage protocols](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/supported-fsx-clients.html#using-block-storage).
   *
   * @public
   */
  HAPairs?: number | undefined;

  /**
   * (Multi-AZ only) Specifies the IPv6 address range in which the endpoints to access your file system will be created. By default in the Amazon FSx API and Amazon FSx console, Amazon FSx selects an available /118 IP address range for you from one of the VPC's CIDR ranges. You can have overlapping endpoint IP addresses for file systems deployed in the same VPC/route tables, as long as they don't overlap with any subnet.
   *
   * @public
   */
  EndpointIpv6AddressRange?: string | undefined;
}

/**
 * The configuration updates for an Amazon FSx for OpenZFS file system.
 *
 * @public
 */
export interface UpdateFileSystemOpenZFSConfiguration {
  /**
   * The number of days to retain automatic backups. Setting this property to `0` disables automatic backups. You can retain automatic backups for a maximum of 90 days. The default is `30`.
   *
   * @public
   */
  AutomaticBackupRetentionDays?: number | undefined;

  /**
   * A Boolean value indicating whether tags for the file system should be copied to backups. This value defaults to `false`. If it's set to `true`, all tags for the file system are copied to all automatic and user-initiated backups where the user doesn't specify tags. If this value is `true` and you specify one or more tags, only the specified tags are copied to backups. If you specify one or more tags when creating a user-initiated backup, no tags are copied from the file system, regardless of this value.
   *
   * @public
   */
  CopyTagsToBackups?: boolean | undefined;

  /**
   * A Boolean value indicating whether tags for the volume should be copied to snapshots. This value defaults to `false`. If it's set to `true`, all tags for the volume are copied to snapshots where the user doesn't specify tags. If this value is `true` and you specify one or more tags, only the specified tags are copied to snapshots. If you specify one or more tags when creating the snapshot, no tags are copied from the volume, regardless of this value.
   *
   * @public
   */
  CopyTagsToVolumes?: boolean | undefined;

  /**
   * A recurring daily time, in the format `HH:MM`. `HH` is the zero-padded hour of the day (0-23), and `MM` is the zero-padded minute of the hour. For example, `05:00` specifies 5 AM daily.
   *
   * @public
   */
  DailyAutomaticBackupStartTime?: string | undefined;

  /**
   * The throughput of an Amazon FSx for OpenZFS file system, measured in megabytes per second  (MB/s). Valid values depend on the DeploymentType you choose, as follows:
   *
   * - For `MULTI_AZ_1` and `SINGLE_AZ_2`, valid values are 160, 320, 640, 1280, 2560, 3840, 5120, 7680, or 10240 MB/s.
   * - For `SINGLE_AZ_1`, valid values are 64, 128, 256, 512, 1024, 2048, 3072, or 4096 MB/s.
   *
   * @public
   */
  ThroughputCapacity?: number | undefined;

  /**
   * The preferred start time to perform weekly maintenance, formatted d:HH:MM in the UTC time zone, where d is the weekday number, from 1 through 7, beginning with Monday and ending with Sunday.
   *
   * For example, `1:05:00` specifies maintenance at 5 AM Monday.
   *
   * @public
   */
  WeeklyMaintenanceStartTime?: string | undefined;

  /**
   * The SSD IOPS (input/output operations per second) configuration for an Amazon FSx for NetApp ONTAP, Amazon FSx for Windows File Server, or FSx for OpenZFS file system. By default, Amazon FSx automatically provisions 3 IOPS per GB of storage capacity. You can provision additional IOPS per GB of storage. The configuration consists of the total number of provisioned SSD IOPS and how it is was provisioned, or the mode (by the customer or by Amazon FSx).
   *
   * @public
   */
  DiskIopsConfiguration?: DiskIopsConfiguration | undefined;

  /**
   * (Multi-AZ only) A list of IDs of new virtual private cloud (VPC) route tables to associate (add) with your Amazon FSx for OpenZFS file system.
   *
   * @public
   */
  AddRouteTableIds?: string[] | undefined;

  /**
   * (Multi-AZ only) A list of IDs of existing virtual private cloud (VPC) route tables to disassociate (remove) from your Amazon FSx for OpenZFS file system. You can use the API operation to retrieve the list of VPC route table IDs for a file system.
   *
   * @public
   */
  RemoveRouteTableIds?: string[] | undefined;

  /**
   * The configuration for the optional provisioned SSD read cache on file systems that use the Intelligent-Tiering storage class.
   *
   * @public
   */
  ReadCacheConfiguration?: OpenZFSReadCacheConfiguration | undefined;

  /**
   * (Multi-AZ only) Specifies the IPv6 address range in which the endpoints to access your file system will be created. By default in the Amazon FSx API and Amazon FSx console, Amazon FSx selects an available /118 IP address range for you from one of the VPC's CIDR ranges. You can have overlapping endpoint IP addresses for file systems deployed in the same VPC/route tables, as long as they don't overlap with any subnet.
   *
   * @public
   */
  EndpointIpv6AddressRange?: string | undefined;
}

/**
 * Specifies changes you are making to the self-managed Microsoft Active Directory configuration to which an FSx for Windows File Server file system or an FSx for ONTAP SVM is joined.
 *
 * @public
 */
export interface SelfManagedActiveDirectoryConfigurationUpdates {
  /**
   * Specifies the updated user name for the service account on your self-managed Active Directory domain. Amazon FSx uses this account to join to your self-managed Active Directory domain.
   *
   * This account must have the permissions required to join computers to the domain in the organizational unit provided in `OrganizationalUnitDistinguishedName`.
   *
   * @public
   */
  UserName?: string | undefined;

  /**
   * Specifies the updated password for the service account on your self-managed Active Directory domain. Amazon FSx uses this account to join to your self-managed Active Directory domain.
   *
   * @public
   */
  Password?: string | undefined;

  /**
   * A list of up to three DNS server or domain controller IP addresses in your self-managed Active Directory domain.
   *
   * @public
   */
  DnsIps?: string[] | undefined;

  /**
   * Specifies an updated fully qualified domain name of your self-managed Active Directory configuration.
   *
   * @public
   */
  DomainName?: string | undefined;

  /**
   * Specifies an updated fully qualified distinguished name of the organization unit within your self-managed Active Directory.
   *
   * @public
   */
  OrganizationalUnitDistinguishedName?: string | undefined;

  /**
   * For FSx for ONTAP file systems only - Specifies the updated name of the self-managed Active Directory domain group whose members are granted administrative privileges for the Amazon FSx resource.
   *
   * @public
   */
  FileSystemAdministratorsGroup?: string | undefined;

  /**
   * Specifies the updated Amazon Resource Name (ARN) of the Amazon Web Services Secrets Manager secret containing the self-managed Active Directory domain join service account credentials. Amazon FSx uses this account to join to your self-managed Active Directory domain.
   *
   * @public
   */
  DomainJoinServiceAccountSecret?: string | undefined;
}

/**
 * Updates the configuration for an existing Amazon FSx for Windows File Server file system. Amazon FSx only overwrites existing properties with non-null values provided in the request.
 *
 * @public
 */
export interface UpdateFileSystemWindowsConfiguration {
  /**
   * The preferred start time to perform weekly maintenance, formatted d:HH:MM in the UTC time zone. Where d is the weekday number, from 1 through 7, with 1 = Monday and 7 = Sunday.
   *
   * @public
   */
  WeeklyMaintenanceStartTime?: string | undefined;

  /**
   * The preferred time to start the daily automatic backup, in the UTC time zone, for example, `02:00`
   *
   * @public
   */
  DailyAutomaticBackupStartTime?: string | undefined;

  /**
   * The number of days to retain automatic backups. Setting this property to `0` disables automatic backups. You can retain automatic backups for a maximum of 90 days. The default is `30`. For more information, see [Working with Automatic Daily Backups](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/using-backups.html#automatic-backups).
   *
   * @public
   */
  AutomaticBackupRetentionDays?: number | undefined;

  /**
   * Sets the target value for a file system's throughput capacity, in MB/s, that you are updating the file system to. Valid values are 8, 16, 32, 64, 128, 256, 512, 1024, 2048. You cannot make a throughput capacity update request if there is an existing throughput capacity update request in progress. For more information, see [Managing Throughput Capacity](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-throughput-capacity.html).
   *
   * @public
   */
  ThroughputCapacity?: number | undefined;

  /**
   * The configuration Amazon FSx uses to join the Windows File Server instance to the self-managed Microsoft AD directory. You cannot make a self-managed Microsoft AD update request if there is an existing self-managed Microsoft AD update request in progress.
   *
   * @public
   */
  SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryConfigurationUpdates | undefined;

  /**
   * The configuration that Amazon FSx for Windows File Server uses to audit and log user accesses of files, folders, and file shares on the Amazon FSx for Windows File Server file system..
   *
   * @public
   */
  AuditLogConfiguration?: WindowsAuditLogCreateConfiguration | undefined;

  /**
   * The SSD IOPS (input/output operations per second) configuration for an Amazon FSx for Windows file system. By default, Amazon FSx automatically provisions 3 IOPS per GiB of storage capacity. You can provision additional IOPS per GiB of storage, up to the maximum limit associated with your chosen throughput capacity.
   *
   * @public
   */
  DiskIopsConfiguration?: DiskIopsConfiguration | undefined;

  /**
   * The File Server Resource Manager (FSRM) configuration that Amazon FSx for Windows File Server uses for the file system. FSRM is disabled by default.
   *
   * @public
   */
  FsrmConfiguration?: WindowsFsrmConfiguration | undefined;
}

/**
 * The request object for the `UpdateFileSystem` operation.
 *
 * @public
 */
export interface UpdateFileSystemRequest {
  /**
   * The ID of the file system that you are updating.
   *
   * @public
   */
  FileSystemId: string | undefined;

  /**
   * A string of up to 63 ASCII characters that Amazon FSx uses to ensure idempotent updates. This string is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * Use this parameter to increase the storage capacity of an FSx for Windows File Server, FSx for Lustre, FSx for OpenZFS, or FSx for ONTAP file system. For second-generation FSx for ONTAP file systems, you can also decrease the storage capacity. Specifies the storage capacity target value, in GiB, for the file system that you're updating.
   *
   * > **Note:** You can't make a storage capacity increase request if there is an existing storage capacity increase request in progress.
   *
   * For Lustre file systems, the storage capacity target value can be the following:
   *
   * - For `SCRATCH_2`, `PERSISTENT_1`, and `PERSISTENT_2 SSD` deployment types, valid values are in multiples of 2400 GiB. The value must be greater than the current storage capacity.
   * - For `PERSISTENT HDD` file systems, valid values are multiples of 6000 GiB for 12-MBps throughput per TiB file systems and multiples of 1800 GiB for 40-MBps throughput per TiB file systems. The values must be greater than the current storage capacity.
   * - For `SCRATCH_1` file systems, you can't increase the storage capacity.
   *
   * For more information, see [Managing storage and throughput capacity](https://docs.aws.amazon.com/fsx/latest/LustreGuide/managing-storage-capacity.html) in the *FSx for Lustre User Guide*.
   *
   * For FSx for OpenZFS file systems, the storage capacity target value must be at least 10 percent greater than the current storage capacity value. For more information, see [Managing storage capacity](https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/managing-storage-capacity.html) in the *FSx for OpenZFS User Guide*.
   *
   * For Windows file systems, the storage capacity target value must be at least 10 percent greater than the current storage capacity value. To increase storage capacity, the file system must have at least 16 MBps of throughput capacity. For more information, see [Managing storage capacity](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-storage-capacity.html) in the *Amazon FSxfor Windows File Server User Guide*.
   *
   * For ONTAP file systems, when increasing storage capacity, the storage capacity target value must be at least 10 percent greater than the current storage capacity value. When decreasing storage capacity on second-generation file systems, the target value must be at least 9 percent smaller than the current SSD storage capacity. For more information, see [File system storage capacity and IOPS](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/storage-capacity-and-IOPS.html) in the Amazon FSx for NetApp ONTAP User Guide.
   *
   * @public
   */
  StorageCapacity?: number | undefined;

  /**
   * The configuration updates for an Amazon FSx for Windows File Server file system.
   *
   * @public
   */
  WindowsConfiguration?: UpdateFileSystemWindowsConfiguration | undefined;

  /**
   * The configuration object for Amazon FSx for Lustre file systems used in the `UpdateFileSystem` operation.
   *
   * @public
   */
  LustreConfiguration?: UpdateFileSystemLustreConfiguration | undefined;

  /**
   * The configuration updates for an Amazon FSx for NetApp ONTAP file system.
   *
   * @public
   */
  OntapConfiguration?: UpdateFileSystemOntapConfiguration | undefined;

  /**
   * The configuration updates for an FSx for OpenZFS file system.
   *
   * @public
   */
  OpenZFSConfiguration?: UpdateFileSystemOpenZFSConfiguration | undefined;

  /**
   * Specifies the file system's storage type.
   *
   * @public
   */
  StorageType?: StorageType | undefined;

  /**
   * The Lustre version you are updating an FSx for Lustre file system to. Valid values are `2.12` and `2.15`. The value you choose must be newer than the file system's current Lustre version.
   *
   * @public
   */
  FileSystemTypeVersion?: string | undefined;

  /**
   * Changes the network type of an FSx for OpenZFS file system.
   *
   * @public
   */
  NetworkType?: NetworkType | undefined;
}

/**
 * @public
 */
export interface UpdateSharedVpcConfigurationRequest {
  /**
   * Specifies whether participant accounts can create FSx for ONTAP Multi-AZ file systems in shared subnets. Set to `true` to enable or `false` to disable.
   *
   * @public
   */
  EnableFsxRouteTableUpdatesFromParticipantAccounts?: string | undefined;

  /**
   * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSharedVpcConfigurationResponse {
  /**
   * Indicates whether participant accounts can create FSx for ONTAP Multi-AZ file systems in shared subnets.
   *
   * @public
   */
  EnableFsxRouteTableUpdatesFromParticipantAccounts?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSnapshotRequest {
  /**
   * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The name of the snapshot to update.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The ID of the snapshot that you want to update, in the format `fsvolsnap-0123456789abcdef0`.
   *
   * @public
   */
  SnapshotId: string | undefined;
}

/**
 * Specifies updates to an FSx for ONTAP storage virtual machine's (SVM) Microsoft Active Directory (AD) configuration. Note that account credentials are not returned in the response payload.
 *
 * @public
 */
export interface UpdateSvmActiveDirectoryConfiguration {
  /**
   * Specifies changes you are making to the self-managed Microsoft Active Directory configuration to which an FSx for Windows File Server file system or an FSx for ONTAP SVM is joined.
   *
   * @public
   */
  SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryConfigurationUpdates | undefined;

  /**
   * Specifies an updated NetBIOS name of the AD computer object `NetBiosName` to which an SVM is joined.
   *
   * @public
   */
  NetBiosName?: string | undefined;
}

/**
 * @public
 */
export interface UpdateStorageVirtualMachineRequest {
  /**
   * Specifies updates to an SVM's Microsoft Active Directory (AD) configuration.
   *
   * @public
   */
  ActiveDirectoryConfiguration?: UpdateSvmActiveDirectoryConfiguration | undefined;

  /**
   * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The ID of the SVM that you want to update, in the format `svm-0123456789abcdef0`.
   *
   * @public
   */
  StorageVirtualMachineId: string | undefined;

  /**
   * Specifies a new SvmAdminPassword.
   *
   * @public
   */
  SvmAdminPassword?: string | undefined;
}

/**
 * @public
 */
export interface UpdateStorageVirtualMachineResponse {
  /**
   * Describes the Amazon FSx for NetApp ONTAP storage virtual machine (SVM) configuration.
   *
   * @public
   */
  StorageVirtualMachine?: StorageVirtualMachine | undefined;
}

/**
 * Updates the SnapLock configuration for an existing FSx for ONTAP volume.
 *
 * @public
 */
export interface UpdateSnaplockConfiguration {
  /**
   * Enables or disables the audit log volume for an FSx for ONTAP SnapLock volume. The default value is `false`. If you set `AuditLogVolume` to `true`, the SnapLock volume is created as an audit log volume. The minimum retention period for an audit log volume is six months.
   *
   * For more information, see [SnapLock audit log volumes](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/how-snaplock-works.html#snaplock-audit-log-volume).
   *
   * @public
   */
  AuditLogVolume?: boolean | undefined;

  /**
   * The configuration object for setting the autocommit period of files in an FSx for ONTAP SnapLock volume.
   *
   * @public
   */
  AutocommitPeriod?: AutocommitPeriod | undefined;

  /**
   * Enables, disables, or permanently disables privileged delete on an FSx for ONTAP SnapLock Enterprise volume. Enabling privileged delete allows SnapLock administrators to delete write once, read many (WORM) files even if they have active retention periods. `PERMANENTLY_DISABLED` is a terminal state. If privileged delete is permanently disabled on a SnapLock volume, you can't re-enable it. The default value is `DISABLED`.
   *
   * For more information, see [Privileged delete](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/snaplock-enterprise.html#privileged-delete).
   *
   * @public
   */
  PrivilegedDelete?: PrivilegedDelete | undefined;

  /**
   * Specifies the retention period of an FSx for ONTAP SnapLock volume.
   *
   * @public
   */
  RetentionPeriod?: SnaplockRetentionPeriod | undefined;

  /**
   * Enables or disables volume-append mode on an FSx for ONTAP SnapLock volume. Volume-append mode allows you to create WORM-appendable files and write data to them incrementally. The default value is `false`.
   *
   * For more information, see [Volume-append mode](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/worm-state.html#worm-state-append).
   *
   * @public
   */
  VolumeAppendModeEnabled?: boolean | undefined;
}

/**
 * Used to specify changes to the ONTAP configuration for the volume you are updating.
 *
 * @public
 */
export interface UpdateOntapVolumeConfiguration {
  /**
   * Specifies the location in the SVM's namespace where the volume is mounted. The `JunctionPath` must have a leading forward slash, such as `/vol3`.
   *
   * @public
   */
  JunctionPath?: string | undefined;

  /**
   * The security style for the volume, which can be `UNIX`, `NTFS`, or `MIXED`.
   *
   * @public
   */
  SecurityStyle?: SecurityStyle | undefined;

  /**
   * Specifies the size of the volume in megabytes.
   *
   * @public
   */
  SizeInMegabytes?: number | undefined;

  /**
   * Default is `false`. Set to true to enable the deduplication, compression, and compaction storage efficiency features on the volume.
   *
   * @public
   */
  StorageEfficiencyEnabled?: boolean | undefined;

  /**
   * Update the volume's data tiering policy.
   *
   * @public
   */
  TieringPolicy?: TieringPolicy | undefined;

  /**
   * Specifies the snapshot policy for the volume. There are three built-in snapshot policies:
   *
   * - `default`: This is the default policy. A maximum of six hourly snapshots taken five minutes past the hour. A maximum of two daily snapshots taken Monday through Saturday at 10 minutes after midnight. A maximum of two weekly snapshots taken every Sunday at 15 minutes after midnight.
   * - `default-1weekly`: This policy is the same as the `default` policy except that it only retains one snapshot from the weekly schedule.
   * - `none`: This policy does not take any snapshots. This policy can be assigned to volumes to prevent automatic snapshots from being taken.
   *
   * You can also provide the name of a custom policy that you created with the ONTAP CLI or REST API.
   *
   * For more information, see [Snapshot policies](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/snapshots-ontap.html#snapshot-policies) in the *Amazon FSx for NetApp ONTAP User Guide*.
   *
   * @public
   */
  SnapshotPolicy?: string | undefined;

  /**
   * A boolean flag indicating whether tags for the volume should be copied to backups. This value defaults to false. If it's set to true, all tags for the volume are copied to all automatic and user-initiated backups where the user doesn't specify tags. If this value is true, and you specify one or more tags, only the specified tags are copied to backups. If you specify one or more tags when creating a user-initiated backup, no tags are copied from the volume, regardless of this value.
   *
   * @public
   */
  CopyTagsToBackups?: boolean | undefined;

  /**
   * The configuration object for updating the SnapLock configuration of an FSx for ONTAP SnapLock volume.
   *
   * @public
   */
  SnaplockConfiguration?: UpdateSnaplockConfiguration | undefined;

  /**
   * The configured size of the volume, in bytes.
   *
   * @public
   */
  SizeInBytes?: number | undefined;
}

/**
 * Used to specify changes to the OpenZFS configuration for the volume that you are updating.
 *
 * @public
 */
export interface UpdateOpenZFSVolumeConfiguration {
  /**
   * The amount of storage in gibibytes (GiB) to reserve from the parent volume. You can't reserve more storage than the parent volume has reserved. You can specify a value of `-1` to unset a volume's storage capacity reservation.
   *
   * @public
   */
  StorageCapacityReservationGiB?: number | undefined;

  /**
   * The maximum amount of storage in gibibytes (GiB) that the volume can use from its parent. You can specify a quota larger than the storage on the parent volume. You can specify a value of `-1` to unset a volume's storage capacity quota.
   *
   * @public
   */
  StorageCapacityQuotaGiB?: number | undefined;

  /**
   * Specifies the record size of an OpenZFS volume, in kibibytes (KiB). Valid values are 4, 8, 16, 32, 64, 128, 256, 512, or 1024 KiB. The default is 128 KiB. Most workloads should use the default record size. Database workflows can benefit from a smaller record size, while streaming workflows can benefit from a larger record size. For additional guidance on when to set a custom record size, see [Tips for maximizing performance](https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/performance.html#performance-tips-zfs) in the *Amazon FSx for OpenZFS User Guide*.
   *
   * @public
   */
  RecordSizeKiB?: number | undefined;

  /**
   * Specifies the method used to compress the data on the volume. The compression type is `NONE` by default.
   *
   * - `NONE` - Doesn't compress the data on the volume. `NONE` is the default.
   * - `ZSTD` - Compresses the data in the volume using the Zstandard (ZSTD) compression algorithm. Compared to LZ4, Z-Standard provides a better compression ratio to minimize on-disk storage utilization.
   * - `LZ4` - Compresses the data in the volume using the LZ4 compression algorithm. Compared to Z-Standard, LZ4 is less compute-intensive and delivers higher write throughput speeds.
   *
   * @public
   */
  DataCompressionType?: OpenZFSDataCompressionType | undefined;

  /**
   * The configuration object for mounting a Network File System (NFS) file system.
   *
   * @public
   */
  NfsExports?: OpenZFSNfsExport[] | undefined;

  /**
   * An object specifying how much storage users or groups can use on the volume.
   *
   * @public
   */
  UserAndGroupQuotas?: OpenZFSUserOrGroupQuota[] | undefined;

  /**
   * A Boolean value indicating whether the volume is read-only.
   *
   * @public
   */
  ReadOnly?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateVolumeRequest {
  /**
   * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The ID of the volume that you want to update, in the format `fsvol-0123456789abcdef0`.
   *
   * @public
   */
  VolumeId: string | undefined;

  /**
   * The configuration of the ONTAP volume that you are updating.
   *
   * @public
   */
  OntapConfiguration?: UpdateOntapVolumeConfiguration | undefined;

  /**
   * The name of the OpenZFS volume. OpenZFS root volumes are automatically named `FSX`. Child volume names must be unique among their parent volume's children. The name of the volume is part of the mount string for the OpenZFS volume.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The configuration of the OpenZFS volume that you are updating.
   *
   * @public
   */
  OpenZFSConfiguration?: UpdateOpenZFSVolumeConfiguration | undefined;
}

/**
 * Describes a specific Amazon FSx administrative action for the current Windows, Lustre, OpenZFS, or ONTAP file system or volume.
 *
 * @public
 */
export interface AdministrativeAction {
  /**
   * Describes the type of administrative action, as follows:
   *
   * - `FILE_SYSTEM_UPDATE` - A file system update administrative action initiated from the Amazon FSx console, API (`UpdateFileSystem`), or CLI (`update-file-system`).
   * - `THROUGHPUT_OPTIMIZATION` - After the `FILE_SYSTEM_UPDATE` task to increase a file system's throughput capacity has been completed successfully, a `THROUGHPUT_OPTIMIZATION` task starts.
   *
   *   You can track the storage-optimization progress using the `ProgressPercent` property. When `THROUGHPUT_OPTIMIZATION` has been completed successfully, the parent `FILE_SYSTEM_UPDATE` action status changes to `COMPLETED`. For more information, see [Managing throughput capacity](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-throughput-capacity.html) in the *Amazon FSx for Windows File Server User Guide*.
   * - `STORAGE_OPTIMIZATION` - After the `FILE_SYSTEM_UPDATE` task to increase a file system's storage capacity has completed successfully, a `STORAGE_OPTIMIZATION` task starts.
   *
   *   - For Windows and ONTAP, storage optimization is the process of migrating the file system data to newer larger disks.
   *   - For Lustre, storage optimization consists of rebalancing the data across the existing and newly added file servers.
   *
   *   You can track the storage-optimization progress using the `ProgressPercent` property. When `STORAGE_OPTIMIZATION` has been completed successfully, the parent `FILE_SYSTEM_UPDATE` action status changes to `COMPLETED`. For more information, see [Managing storage capacity](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-storage-capacity.html) in the *Amazon FSx for Windows File Server User Guide*, [Managing storage capacity](https://docs.aws.amazon.com/fsx/latest/LustreGuide/managing-storage-capacity.html) in the *Amazon FSx for Lustre User Guide*, and [Managing storage capacity and provisioned IOPS](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-storage-capacity.html) in the *Amazon FSx for NetApp ONTAP User Guide*.
   * - `FILE_SYSTEM_ALIAS_ASSOCIATION` - A file system update to associate a new Domain Name System (DNS) alias with the file system. For more information, see [AssociateFileSystemAliases](https://docs.aws.amazon.com/fsx/latest/APIReference/API_AssociateFileSystemAliases.html).
   * - `FILE_SYSTEM_ALIAS_DISASSOCIATION` - A file system update to disassociate a DNS alias from the file system. For more information, see [DisassociateFileSystemAliases](https://docs.aws.amazon.com/fsx/latest/APIReference/API_DisassociateFileSystemAliases.html).
   * - `IOPS_OPTIMIZATION` - After the `FILE_SYSTEM_UPDATE` task to increase a file system's throughput capacity has been completed successfully, a `IOPS_OPTIMIZATION` task starts.
   *
   *   You can track the storage-optimization progress using the `ProgressPercent` property. When `IOPS_OPTIMIZATION` has been completed successfully, the parent `FILE_SYSTEM_UPDATE` action status changes to `COMPLETED`. For more information, see [Managing provisioned SSD IOPS](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-provisioned-ssd-iops.html) in the Amazon FSx for Windows File Server User Guide.
   * - `STORAGE_TYPE_OPTIMIZATION` - After the `FILE_SYSTEM_UPDATE` task to increase a file system's throughput capacity has been completed successfully, a `STORAGE_TYPE_OPTIMIZATION` task starts.
   *
   *   You can track the storage-optimization progress using the `ProgressPercent` property. When `STORAGE_TYPE_OPTIMIZATION` has been completed successfully, the parent `FILE_SYSTEM_UPDATE` action status changes to `COMPLETED`.
   * - `VOLUME_UPDATE` - A volume update to an Amazon FSx for OpenZFS volume initiated from the Amazon FSx console, API (`UpdateVolume`), or CLI (`update-volume`).
   * - `VOLUME_RESTORE` - An Amazon FSx for OpenZFS volume is returned to the state saved by the specified snapshot, initiated from an API (`RestoreVolumeFromSnapshot`) or CLI (`restore-volume-from-snapshot`).
   * - `SNAPSHOT_UPDATE` - A snapshot update to an Amazon FSx for OpenZFS volume initiated from the Amazon FSx console, API (`UpdateSnapshot`), or CLI (`update-snapshot`).
   * - `RELEASE_NFS_V3_LOCKS` - Tracks the release of Network File System (NFS) V3 locks on an Amazon FSx for OpenZFS file system.
   * - `DOWNLOAD_DATA_FROM_BACKUP` - An FSx for ONTAP backup is being restored to a new volume on a second-generation file system. Once the all the file metadata is loaded onto the volume, you can mount the volume with read-only access. during this process.
   * - `VOLUME_INITIALIZE_WITH_SNAPSHOT` - A volume is being created from a snapshot on a different FSx for OpenZFS file system. You can initiate this from the Amazon FSx console, API (`CreateVolume`), or CLI (`create-volume`) when using the using the `FULL_COPY` strategy.
   * - `VOLUME_UPDATE_WITH_SNAPSHOT` - A volume is being updated from a snapshot on a different FSx for OpenZFS file system. You can initiate this from the Amazon FSx console, API (`CopySnapshotAndUpdateVolume`), or CLI (`copy-snapshot-and-update-volume`).
   *
   * @public
   */
  AdministrativeActionType?: AdministrativeActionType | undefined;

  /**
   * The percentage-complete status of a `STORAGE_OPTIMIZATION` or `DOWNLOAD_DATA_FROM_BACKUP` administrative action. Does not apply to any other administrative action type.
   *
   * @public
   */
  ProgressPercent?: number | undefined;

  /**
   * The time that the administrative action request was received.
   *
   * @public
   */
  RequestTime?: Date | undefined;

  /**
   * The status of the administrative action, as follows:
   *
   * - `FAILED` - Amazon FSx failed to process the administrative action successfully.
   * - `IN_PROGRESS` - Amazon FSx is processing the administrative action.
   * - `PENDING` - Amazon FSx is waiting to process the administrative action.
   * - `COMPLETED` - Amazon FSx has finished processing the administrative task.
   *
   *   For a backup restore to a second-generation FSx for ONTAP file system, indicates that all data has been downloaded to the volume, and clients now have read-write access to volume.
   * - `UPDATED_OPTIMIZING` - For a storage-capacity increase update, Amazon FSx has updated the file system with the new storage capacity, and is now performing the storage-optimization process.
   * - `PENDING` - For a backup restore to a second-generation FSx for ONTAP file system, indicates that the file metadata is being downloaded onto the volume. The volume's Lifecycle state is CREATING.
   * - `IN_PROGRESS` - For a backup restore to a second-generation FSx for ONTAP file system, indicates that all metadata has been downloaded to the new volume and client can access data with read-only access while Amazon FSx downloads the file data to the volume. Track the progress of this process with the `ProgressPercent` element.
   *
   * @public
   */
  Status?: Status | undefined;

  /**
   * The target value for the administration action, provided in the `UpdateFileSystem` operation. Returned for `FILE_SYSTEM_UPDATE` administrative actions.
   *
   * @public
   */
  TargetFileSystemValues?: FileSystem | undefined;

  /**
   * Provides information about a failed administrative action.
   *
   * @public
   */
  FailureDetails?: AdministrativeActionFailureDetails | undefined;

  /**
   * Describes an Amazon FSx volume.
   *
   * @public
   */
  TargetVolumeValues?: Volume | undefined;

  /**
   * A snapshot of an Amazon FSx for OpenZFS volume.
   *
   * @public
   */
  TargetSnapshotValues?: Snapshot | undefined;

  /**
   * The number of bytes that have transferred for the FSx for OpenZFS snapshot that you're copying.
   *
   * @public
   */
  TotalTransferBytes?: number | undefined;

  /**
   * The remaining bytes to transfer for the FSx for OpenZFS snapshot that you're copying.
   *
   * @public
   */
  RemainingTransferBytes?: number | undefined;

  /**
   * A detailed error message.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * A description of a specific Amazon FSx file system.
 *
 * @public
 */
export interface FileSystem {
  /**
   * The Amazon Web Services account that created the file system. If the file system was created by a user in IAM Identity Center, the Amazon Web Services account to which the IAM user belongs is the owner.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The time that the file system was created, in seconds (since 1970-01-01T00:00:00Z), also known as Unix time.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The system-generated, unique 17-digit ID of the file system.
   *
   * @public
   */
  FileSystemId?: string | undefined;

  /**
   * The type of Amazon FSx file system, which can be `LUSTRE`, `WINDOWS`, `ONTAP`, or `OPENZFS`.
   *
   * @public
   */
  FileSystemType?: FileSystemType | undefined;

  /**
   * The lifecycle status of the file system. The following are the possible values and what they mean:
   *
   * - `AVAILABLE` - The file system is in a healthy state, and is reachable and available for use.
   * - `CREATING` - Amazon FSx is creating the new file system.
   * - `DELETING` - Amazon FSx is deleting an existing file system.
   * - `FAILED` - An existing file system has experienced an unrecoverable failure. When creating a new file system, Amazon FSx was unable to create the file system.
   * - `MISCONFIGURED` - The file system is in a failed but recoverable state.
   * - `MISCONFIGURED_UNAVAILABLE` - (Amazon FSx for Windows File Server only) The file system is currently unavailable due to a change in your Active Directory configuration.
   * - `UPDATING` - The file system is undergoing a customer-initiated update.
   *
   * @public
   */
  Lifecycle?: FileSystemLifecycle | undefined;

  /**
   * A structure providing details of any failures that occurred.
   *
   * @public
   */
  FailureDetails?: FileSystemFailureDetails | undefined;

  /**
   * The storage capacity of the file system in gibibytes (GiB).
   *
   * Amazon FSx responds with an HTTP status code 400 (Bad Request) if the value of `StorageCapacity` is outside of the minimum or maximum values.
   *
   * @public
   */
  StorageCapacity?: number | undefined;

  /**
   * The type of storage the file system is using.
   *
   * - If set to `SSD`, the file system uses solid state drive storage.
   * - If set to `HDD`, the file system uses hard disk drive storage.
   * - If set to `INTELLIGENT_TIERING`, the file system uses fully elastic, intelligently-tiered storage.
   *
   * @public
   */
  StorageType?: StorageType | undefined;

  /**
   * The ID of the primary virtual private cloud (VPC) for the file system.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * Specifies the IDs of the subnets that the file system is accessible from. For the Amazon FSx Windows and ONTAP `MULTI_AZ_1` file system deployment type, there are two subnet IDs, one for the preferred file server and one for the standby file server. The preferred file server subnet identified in the `PreferredSubnetID` property. All other file systems have only one subnet ID.
   *
   * For FSx for Lustre file systems, and Single-AZ Windows file systems, this is the ID of the subnet that contains the file system's endpoint. For `MULTI_AZ_1` Windows and ONTAP file systems, the file system endpoint is available in the `PreferredSubnetID`.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * The IDs of the elastic network interfaces from which a specific file system is accessible. The elastic network interface is automatically created in the same virtual private cloud (VPC) that the Amazon FSx file system was created in. For more information, see [Elastic Network Interfaces](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html) in the *Amazon EC2 User Guide.*
   *
   * For an Amazon FSx for Windows File Server file system, you can have one network interface ID. For an Amazon FSx for Lustre file system, you can have more than one.
   *
   * @public
   */
  NetworkInterfaceIds?: string[] | undefined;

  /**
   * The Domain Name System (DNS) name for the file system.
   *
   * @public
   */
  DNSName?: string | undefined;

  /**
   * The ID of the Key Management Service (KMS) key used to encrypt Amazon FSx file system data. Used as follows with Amazon FSx file system types:
   *
   * - Amazon FSx for Lustre `PERSISTENT_1` and `PERSISTENT_2` deployment types only.
   *
   *   `SCRATCH_1` and `SCRATCH_2` types are encrypted using the Amazon FSx service KMS key for your account.
   * - Amazon FSx for NetApp ONTAP
   * - Amazon FSx for OpenZFS
   * - Amazon FSx for Windows File Server
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the file system resource.
   *
   * @public
   */
  ResourceARN?: string | undefined;

  /**
   * The tags to associate with the file system. For more information, see [Tagging your Amazon FSx resources](https://docs.aws.amazon.com/fsx/latest/LustreGuide/tag-resources.html) in the *Amazon FSx for Lustre User Guide*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The configuration for this Amazon FSx for Windows File Server file system.
   *
   * @public
   */
  WindowsConfiguration?: WindowsFileSystemConfiguration | undefined;

  /**
   * The configuration for the Amazon FSx for Lustre file system.
   *
   * @public
   */
  LustreConfiguration?: LustreFileSystemConfiguration | undefined;

  /**
   * A list of administrative actions for the file system that are in process or waiting to be processed. Administrative actions describe changes to the Amazon FSx system that you have initiated using the `UpdateFileSystem` operation.
   *
   * @public
   */
  AdministrativeActions?: AdministrativeAction[] | undefined;

  /**
   * The configuration for this Amazon FSx for NetApp ONTAP file system.
   *
   * @public
   */
  OntapConfiguration?: OntapFileSystemConfiguration | undefined;

  /**
   * The Lustre version of the Amazon FSx for Lustre file system, which can be `2.10`, `2.12`, or `2.15`.
   *
   * @public
   */
  FileSystemTypeVersion?: string | undefined;

  /**
   * The configuration for this Amazon FSx for OpenZFS file system.
   *
   * @public
   */
  OpenZFSConfiguration?: OpenZFSFileSystemConfiguration | undefined;

  /**
   * The network type of the file system.
   *
   * @public
   */
  NetworkType?: NetworkType | undefined;
}

/**
 * A snapshot of an Amazon FSx for OpenZFS volume.
 *
 * @public
 */
export interface Snapshot {
  /**
   * The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services resources. We require an ARN when you need to specify a resource unambiguously across all of Amazon Web Services. For more information, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  ResourceARN?: string | undefined;

  /**
   * The ID of the snapshot.
   *
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * The name of the snapshot.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The ID of the volume that the snapshot is of.
   *
   * @public
   */
  VolumeId?: string | undefined;

  /**
   * The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z), also known as Unix time.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The lifecycle status of the snapshot.
   *
   * - `PENDING` - Amazon FSx hasn't started creating the snapshot.
   * - `CREATING` - Amazon FSx is creating the snapshot.
   * - `DELETING` - Amazon FSx is deleting the snapshot.
   * - `AVAILABLE` - The snapshot is fully available.
   *
   * @public
   */
  Lifecycle?: SnapshotLifecycle | undefined;

  /**
   * Describes why a resource lifecycle state changed.
   *
   * @public
   */
  LifecycleTransitionReason?: LifecycleTransitionReason | undefined;

  /**
   * A list of `Tag` values, with a maximum of 50 elements.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * A list of administrative actions for the file system that are in process or waiting to be processed. Administrative actions describe changes to the Amazon FSx system.
   *
   * @public
   */
  AdministrativeActions?: AdministrativeAction[] | undefined;
}

/**
 * Describes an Amazon FSx volume.
 *
 * @public
 */
export interface Volume {
  /**
   * The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z), also known as Unix time.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The globally unique ID of the file system, assigned by Amazon FSx.
   *
   * @public
   */
  FileSystemId?: string | undefined;

  /**
   * The lifecycle status of the volume.
   *
   * - `AVAILABLE` - The volume is fully available for use.
   * - `CREATED` - The volume has been created.
   * - `CREATING` - Amazon FSx is creating the new volume.
   * - `DELETING` - Amazon FSx is deleting an existing volume.
   * - `FAILED` - Amazon FSx was unable to create the volume.
   * - `MISCONFIGURED` - The volume is in a failed but recoverable state.
   * - `PENDING` - Amazon FSx hasn't started creating the volume.
   *
   * @public
   */
  Lifecycle?: VolumeLifecycle | undefined;

  /**
   * The name of the volume.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The configuration of an Amazon FSx for NetApp ONTAP volume.
   *
   * @public
   */
  OntapConfiguration?: OntapVolumeConfiguration | undefined;

  /**
   * The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services resources. We require an ARN when you need to specify a resource unambiguously across all of Amazon Web Services. For more information, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  ResourceARN?: string | undefined;

  /**
   * A list of `Tag` values, with a maximum of 50 elements.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The system-generated, unique ID of the volume.
   *
   * @public
   */
  VolumeId?: string | undefined;

  /**
   * The type of the volume.
   *
   * @public
   */
  VolumeType?: VolumeType | undefined;

  /**
   * The reason why the volume lifecycle status changed.
   *
   * @public
   */
  LifecycleTransitionReason?: LifecycleTransitionReason | undefined;

  /**
   * A list of administrative actions for the volume that are in process or waiting to be processed. Administrative actions describe changes to the volume that you have initiated using the `UpdateVolume` action.
   *
   * @public
   */
  AdministrativeActions?: AdministrativeAction[] | undefined;

  /**
   * The configuration of an Amazon FSx for OpenZFS volume.
   *
   * @public
   */
  OpenZFSConfiguration?: OpenZFSVolumeConfiguration | undefined;
}

/**
 * @public
 */
export interface CopySnapshotAndUpdateVolumeResponse {
  /**
   * The ID of the volume that you copied the snapshot to.
   *
   * @public
   */
  VolumeId?: string | undefined;

  /**
   * The lifecycle state of the destination volume.
   *
   * @public
   */
  Lifecycle?: VolumeLifecycle | undefined;

  /**
   * A list of administrative actions for the file system that are in process or waiting to be processed. Administrative actions describe changes to the Amazon FSx system.
   *
   * @public
   */
  AdministrativeActions?: AdministrativeAction[] | undefined;
}

/**
 * @public
 */
export interface RestoreVolumeFromSnapshotResponse {
  /**
   * The ID of the volume that you restored.
   *
   * @public
   */
  VolumeId?: string | undefined;

  /**
   * The lifecycle state of the volume being restored.
   *
   * @public
   */
  Lifecycle?: VolumeLifecycle | undefined;

  /**
   * A list of administrative actions for the file system that are in process or waiting to be processed. Administrative actions describe changes to the Amazon FSx system.
   *
   * @public
   */
  AdministrativeActions?: AdministrativeAction[] | undefined;
}

/**
 * The response object for the `CreateFileSystemFromBackup` operation.
 *
 * @public
 */
export interface CreateFileSystemFromBackupResponse {
  /**
   * A description of the file system.
   *
   * @public
   */
  FileSystem?: FileSystem | undefined;
}

/**
 * The response object returned after the file system is created.
 *
 * @public
 */
export interface CreateFileSystemResponse {
  /**
   * The configuration of the file system that was created.
   *
   * @public
   */
  FileSystem?: FileSystem | undefined;
}

/**
 * @public
 */
export interface CreateSnapshotResponse {
  /**
   * A description of the snapshot.
   *
   * @public
   */
  Snapshot?: Snapshot | undefined;
}

/**
 * @public
 */
export interface CreateVolumeFromBackupResponse {
  /**
   * Returned after a successful `CreateVolumeFromBackup` API operation, describing the volume just created.
   *
   * @public
   */
  Volume?: Volume | undefined;
}

/**
 * @public
 */
export interface CreateVolumeResponse {
  /**
   * Returned after a successful `CreateVolume` API operation, describing the volume just created.
   *
   * @public
   */
  Volume?: Volume | undefined;
}

/**
 * @public
 */
export interface ReleaseFileSystemNfsV3LocksResponse {
  /**
   * A description of a specific Amazon FSx file system.
   *
   * @public
   */
  FileSystem?: FileSystem | undefined;
}

/**
 * @public
 */
export interface StartMisconfiguredStateRecoveryResponse {
  /**
   * A description of a specific Amazon FSx file system.
   *
   * @public
   */
  FileSystem?: FileSystem | undefined;
}

/**
 * The response object for the `UpdateFileSystem` operation.
 *
 * @public
 */
export interface UpdateFileSystemResponse {
  /**
   * A description of the file system that was updated.
   *
   * @public
   */
  FileSystem?: FileSystem | undefined;
}

/**
 * @public
 */
export interface UpdateSnapshotResponse {
  /**
   * Returned after a successful `UpdateSnapshot` operation, describing the snapshot that you updated.
   *
   * @public
   */
  Snapshot?: Snapshot | undefined;
}

/**
 * @public
 */
export interface UpdateVolumeResponse {
  /**
   * A description of the volume just updated. Returned after a successful `UpdateVolume` API operation.
   *
   * @public
   */
  Volume?: Volume | undefined;
}

/**
 * The response object for `DescribeFileSystems` operation.
 *
 * @public
 */
export interface DescribeFileSystemsResponse {
  /**
   * An array of file system descriptions.
   *
   * @public
   */
  FileSystems?: FileSystem[] | undefined;

  /**
   * Present if there are more file systems than returned in the response (String). You can use the `NextToken` value in the later request to fetch the descriptions.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSnapshotsResponse {
  /**
   * An array of snapshots.
   *
   * @public
   */
  Snapshots?: Snapshot[] | undefined;

  /**
   * (Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous `NextToken` value left off.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeVolumesResponse {
  /**
   * Returned after a successful `DescribeVolumes` operation, describing each volume.
   *
   * @public
   */
  Volumes?: Volume[] | undefined;

  /**
   * (Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous `NextToken` value left off.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A backup of an Amazon FSx for Windows File Server, Amazon FSx for Lustre file system, Amazon FSx for NetApp ONTAP volume, or Amazon FSx for OpenZFS file system.
 *
 * @public
 */
export interface Backup {
  /**
   * The ID of the backup.
   *
   * @public
   */
  BackupId: string | undefined;

  /**
   * The lifecycle status of the backup.
   *
   * - `AVAILABLE` - The backup is fully available.
   * - `PENDING` - For user-initiated backups on Lustre file systems only; Amazon FSx hasn't started creating the backup.
   * - `CREATING` - Amazon FSx is creating the backup.
   * - `TRANSFERRING` - For user-initiated backups on Lustre file systems only; Amazon FSx is transferring the backup to Amazon S3.
   * - `COPYING` - Amazon FSx is copying the backup.
   * - `DELETED` - Amazon FSx deleted the backup and it's no longer available.
   * - `FAILED` - Amazon FSx couldn't finish the backup.
   *
   * @public
   */
  Lifecycle: BackupLifecycle | undefined;

  /**
   * Details explaining any failures that occurred when creating a backup.
   *
   * @public
   */
  FailureDetails?: BackupFailureDetails | undefined;

  /**
   * The type of the file-system backup.
   *
   * @public
   */
  Type: BackupType | undefined;

  /**
   * Displays the current percent of progress of an asynchronous task.
   *
   * @public
   */
  ProgressPercent?: number | undefined;

  /**
   * The time when a particular backup was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The ID of the Key Management Service (KMS) key used to encrypt the backup of the Amazon FSx file system's data at rest.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the backup resource.
   *
   * @public
   */
  ResourceARN?: string | undefined;

  /**
   * The tags associated with a particular file system.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The metadata of the file system associated with the backup. This metadata is persisted even if the file system is deleted.
   *
   * @public
   */
  FileSystem: FileSystem | undefined;

  /**
   * The configuration of the self-managed Microsoft Active Directory directory to which the Windows File Server instance is joined.
   *
   * @public
   */
  DirectoryInformation?: ActiveDirectoryBackupAttributes | undefined;

  /**
   * An Amazon Web Services account ID. This ID is a 12-digit number that you use to construct Amazon Resource Names (ARNs) for resources.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The ID of the source backup. Specifies the backup that you are copying.
   *
   * @public
   */
  SourceBackupId?: string | undefined;

  /**
   * The source Region of the backup. Specifies the Region from where this backup is copied.
   *
   * @public
   */
  SourceBackupRegion?: string | undefined;

  /**
   * Specifies the resource type that's backed up.
   *
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * Describes an Amazon FSx volume.
   *
   * @public
   */
  Volume?: Volume | undefined;

  /**
   * The size of the backup in bytes. This represents the amount of data that the file system would contain if you restore this backup.
   *
   * @public
   */
  SizeInBytes?: number | undefined;
}

/**
 * @public
 */
export interface CopyBackupResponse {
  /**
   * A backup of an Amazon FSx for Windows File Server, Amazon FSx for Lustre file system, Amazon FSx for NetApp ONTAP volume, or Amazon FSx for OpenZFS file system.
   *
   * @public
   */
  Backup?: Backup | undefined;
}

/**
 * The response object for the `CreateBackup` operation.
 *
 * @public
 */
export interface CreateBackupResponse {
  /**
   * A description of the backup.
   *
   * @public
   */
  Backup?: Backup | undefined;
}

/**
 * Response object for the `DescribeBackups` operation.
 *
 * @public
 */
export interface DescribeBackupsResponse {
  /**
   * An array of backups.
   *
   * @public
   */
  Backups?: Backup[] | undefined;

  /**
   * A `NextToken` value is present if there are more backups than returned in the response. You can use the `NextToken` value in the subsequent request to fetch the backups.
   *
   * @public
   */
  NextToken?: string | undefined;
}
