// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ActiveDirectoryErrorType = {
  DOMAIN_NOT_FOUND: "DOMAIN_NOT_FOUND",
  INCOMPATIBLE_DOMAIN_MODE: "INCOMPATIBLE_DOMAIN_MODE",
  INVALID_DOMAIN_STAGE: "INVALID_DOMAIN_STAGE",
  INVALID_NETWORK_TYPE: "INVALID_NETWORK_TYPE",
  WRONG_VPC: "WRONG_VPC",
} as const;
/**
 * @public
 */
export type ActiveDirectoryErrorType = (typeof ActiveDirectoryErrorType)[keyof typeof ActiveDirectoryErrorType];

/**
 * @public
 * @enum
 */
export const AdministrativeActionType = {
  DOWNLOAD_DATA_FROM_BACKUP: "DOWNLOAD_DATA_FROM_BACKUP",
  FILE_SYSTEM_ALIAS_ASSOCIATION: "FILE_SYSTEM_ALIAS_ASSOCIATION",
  FILE_SYSTEM_ALIAS_DISASSOCIATION: "FILE_SYSTEM_ALIAS_DISASSOCIATION",
  FILE_SYSTEM_UPDATE: "FILE_SYSTEM_UPDATE",
  IOPS_OPTIMIZATION: "IOPS_OPTIMIZATION",
  MISCONFIGURED_STATE_RECOVERY: "MISCONFIGURED_STATE_RECOVERY",
  RELEASE_NFS_V3_LOCKS: "RELEASE_NFS_V3_LOCKS",
  SNAPSHOT_UPDATE: "SNAPSHOT_UPDATE",
  STORAGE_OPTIMIZATION: "STORAGE_OPTIMIZATION",
  STORAGE_TYPE_OPTIMIZATION: "STORAGE_TYPE_OPTIMIZATION",
  THROUGHPUT_OPTIMIZATION: "THROUGHPUT_OPTIMIZATION",
  VOLUME_INITIALIZE_WITH_SNAPSHOT: "VOLUME_INITIALIZE_WITH_SNAPSHOT",
  VOLUME_RESTORE: "VOLUME_RESTORE",
  VOLUME_UPDATE: "VOLUME_UPDATE",
  VOLUME_UPDATE_WITH_SNAPSHOT: "VOLUME_UPDATE_WITH_SNAPSHOT",
} as const;
/**
 * @public
 */
export type AdministrativeActionType = (typeof AdministrativeActionType)[keyof typeof AdministrativeActionType];

/**
 * @public
 * @enum
 */
export const Status = {
  CANCELLED: "CANCELLED",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  OPTIMIZING: "OPTIMIZING",
  PAUSED: "PAUSED",
  PENDING: "PENDING",
  UPDATED_OPTIMIZING: "UPDATED_OPTIMIZING",
} as const;
/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

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
export const LustreReadCacheSizingMode = {
  NO_CACHE: "NO_CACHE",
  PROPORTIONAL_TO_THROUGHPUT_CAPACITY: "PROPORTIONAL_TO_THROUGHPUT_CAPACITY",
  USER_PROVISIONED: "USER_PROVISIONED",
} as const;
/**
 * @public
 */
export type LustreReadCacheSizingMode = (typeof LustreReadCacheSizingMode)[keyof typeof LustreReadCacheSizingMode];

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
 * @enum
 */
export const MetadataConfigurationMode = {
  AUTOMATIC: "AUTOMATIC",
  USER_PROVISIONED: "USER_PROVISIONED",
} as const;
/**
 * @public
 */
export type MetadataConfigurationMode = (typeof MetadataConfigurationMode)[keyof typeof MetadataConfigurationMode];

/**
 * @public
 * @enum
 */
export const NetworkType = {
  DUAL: "DUAL",
  IPV4: "IPV4",
} as const;
/**
 * @public
 */
export type NetworkType = (typeof NetworkType)[keyof typeof NetworkType];

/**
 * @public
 * @enum
 */
export const OntapDeploymentType = {
  MULTI_AZ_1: "MULTI_AZ_1",
  MULTI_AZ_2: "MULTI_AZ_2",
  SINGLE_AZ_1: "SINGLE_AZ_1",
  SINGLE_AZ_2: "SINGLE_AZ_2",
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
 * @enum
 */
export const OpenZFSDeploymentType = {
  MULTI_AZ_1: "MULTI_AZ_1",
  SINGLE_AZ_1: "SINGLE_AZ_1",
  SINGLE_AZ_2: "SINGLE_AZ_2",
  SINGLE_AZ_HA_1: "SINGLE_AZ_HA_1",
  SINGLE_AZ_HA_2: "SINGLE_AZ_HA_2",
} as const;
/**
 * @public
 */
export type OpenZFSDeploymentType = (typeof OpenZFSDeploymentType)[keyof typeof OpenZFSDeploymentType];

/**
 * @public
 * @enum
 */
export const OpenZFSReadCacheSizingMode = {
  NO_CACHE: "NO_CACHE",
  PROPORTIONAL_TO_THROUGHPUT_CAPACITY: "PROPORTIONAL_TO_THROUGHPUT_CAPACITY",
  USER_PROVISIONED: "USER_PROVISIONED",
} as const;
/**
 * @public
 */
export type OpenZFSReadCacheSizingMode = (typeof OpenZFSReadCacheSizingMode)[keyof typeof OpenZFSReadCacheSizingMode];

/**
 * @public
 * @enum
 */
export const StorageType = {
  HDD: "HDD",
  INTELLIGENT_TIERING: "INTELLIGENT_TIERING",
  SSD: "SSD",
} as const;
/**
 * @public
 */
export type StorageType = (typeof StorageType)[keyof typeof StorageType];

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
 * @enum
 */
export const VolumeStyle = {
  FLEXGROUP: "FLEXGROUP",
  FLEXVOL: "FLEXVOL",
} as const;
/**
 * @public
 */
export type VolumeStyle = (typeof VolumeStyle)[keyof typeof VolumeStyle];

/**
 * @public
 * @enum
 */
export const OpenZFSCopyStrategy = {
  CLONE: "CLONE",
  FULL_COPY: "FULL_COPY",
  INCREMENTAL_COPY: "INCREMENTAL_COPY",
} as const;
/**
 * @public
 */
export type OpenZFSCopyStrategy = (typeof OpenZFSCopyStrategy)[keyof typeof OpenZFSCopyStrategy];

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
 * @enum
 */
export const UpdateOpenZFSVolumeOption = {
  DELETE_CLONED_VOLUMES: "DELETE_CLONED_VOLUMES",
  DELETE_INTERMEDIATE_DATA: "DELETE_INTERMEDIATE_DATA",
  DELETE_INTERMEDIATE_SNAPSHOTS: "DELETE_INTERMEDIATE_SNAPSHOTS",
} as const;
/**
 * @public
 */
export type UpdateOpenZFSVolumeOption = (typeof UpdateOpenZFSVolumeOption)[keyof typeof UpdateOpenZFSVolumeOption];

/**
 * @public
 * @enum
 */
export const OpenZFSFileSystemUserType = {
  POSIX: "POSIX",
} as const;
/**
 * @public
 */
export type OpenZFSFileSystemUserType = (typeof OpenZFSFileSystemUserType)[keyof typeof OpenZFSFileSystemUserType];

/**
 * @public
 * @enum
 */
export const S3AccessPointAttachmentType = {
  OPENZFS: "OPENZFS",
} as const;
/**
 * @public
 */
export type S3AccessPointAttachmentType =
  (typeof S3AccessPointAttachmentType)[keyof typeof S3AccessPointAttachmentType];

/**
 * @public
 * @enum
 */
export const S3AccessPointAttachmentLifecycle = {
  AVAILABLE: "AVAILABLE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type S3AccessPointAttachmentLifecycle =
  (typeof S3AccessPointAttachmentLifecycle)[keyof typeof S3AccessPointAttachmentLifecycle];

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
 * @enum
 */
export const S3AccessPointAttachmentsFilterName = {
  FILE_SYSTEM_ID: "file-system-id",
  TYPE: "type",
  VOLUME_ID: "volume-id",
} as const;
/**
 * @public
 */
export type S3AccessPointAttachmentsFilterName =
  (typeof S3AccessPointAttachmentsFilterName)[keyof typeof S3AccessPointAttachmentsFilterName];

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
