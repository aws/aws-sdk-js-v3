import {
  AccessPointAlreadyOwnedByYou,
  ActiveDirectoryError,
  ActiveDirectoryErrorType,
  AdministrativeActionType,
  AliasLifecycle,
  AssociateFileSystemAliasesCommand,
  AutoImportPolicyType,
  AutocommitPeriodType,
  BackupBeingCopied,
  BackupInProgress,
  BackupLifecycle,
  BackupNotFound,
  BackupRestoring,
  BackupType,
  BadRequest,
  CancelDataRepositoryTaskCommand,
  CopyBackupCommand,
  CopySnapshotAndUpdateVolumeCommand,
  CreateAndAttachS3AccessPointCommand,
  CreateBackupCommand,
  CreateDataRepositoryAssociationCommand,
  CreateDataRepositoryTaskCommand,
  CreateFileCacheCommand,
  CreateFileSystemCommand,
  CreateFileSystemFromBackupCommand,
  CreateSnapshotCommand,
  CreateStorageVirtualMachineCommand,
  CreateVolumeCommand,
  CreateVolumeFromBackupCommand,
  DataCompressionType,
  DataRepositoryAssociationNotFound,
  DataRepositoryLifecycle,
  DataRepositoryTaskEnded,
  DataRepositoryTaskExecuting,
  DataRepositoryTaskFilterName,
  DataRepositoryTaskLifecycle,
  DataRepositoryTaskNotFound,
  DataRepositoryTaskType,
  DeleteBackupCommand,
  DeleteDataRepositoryAssociationCommand,
  DeleteFileCacheCommand,
  DeleteFileSystemCommand,
  DeleteFileSystemOpenZFSOption,
  DeleteOpenZFSVolumeOption,
  DeleteSnapshotCommand,
  DeleteStorageVirtualMachineCommand,
  DeleteVolumeCommand,
  DescribeBackupsCommand,
  DescribeDataRepositoryAssociationsCommand,
  DescribeDataRepositoryTasksCommand,
  DescribeFileCachesCommand,
  DescribeFileSystemAliasesCommand,
  DescribeFileSystemsCommand,
  DescribeS3AccessPointAttachmentsCommand,
  DescribeSharedVpcConfigurationCommand,
  DescribeSnapshotsCommand,
  DescribeStorageVirtualMachinesCommand,
  DescribeVolumesCommand,
  DetachAndDeleteS3AccessPointCommand,
  DisassociateFileSystemAliasesCommand,
  DiskIopsConfigurationMode,
  DriveCacheType,
  EventType,
  FSx,
  FSxClient,
  FSxServiceException,
  FileCacheLifecycle,
  FileCacheLustreDeploymentType,
  FileCacheNotFound,
  FileCacheType,
  FileSystemLifecycle,
  FileSystemMaintenanceOperation,
  FileSystemNotFound,
  FileSystemType,
  FilterName,
  FlexCacheEndpointType,
  IncompatibleParameterError,
  IncompatibleRegionForMultiAZ,
  InputOntapVolumeType,
  InternalServerError,
  InvalidAccessPoint,
  InvalidDataRepositoryType,
  InvalidDestinationKmsKey,
  InvalidExportPath,
  InvalidImportPath,
  InvalidNetworkSettings,
  InvalidPerUnitStorageThroughput,
  InvalidRegion,
  InvalidRequest,
  InvalidSourceKmsKey,
  ListTagsForResourceCommand,
  LustreAccessAuditLogLevel,
  LustreDeploymentType,
  LustreReadCacheSizingMode,
  MetadataConfigurationMode,
  MissingFileCacheConfiguration,
  MissingFileSystemConfiguration,
  MissingVolumeConfiguration,
  NetworkType,
  NfsVersion,
  NotServiceResourceError,
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
  ReleaseFileSystemNfsV3LocksCommand,
  ReportFormat,
  ReportScope,
  ResourceDoesNotSupportTagging,
  ResourceNotFound,
  ResourceType,
  RestoreOpenZFSVolumeOption,
  RestoreVolumeFromSnapshotCommand,
  RetentionPeriodType,
  S3AccessPointAttachmentLifecycle,
  S3AccessPointAttachmentNotFound,
  S3AccessPointAttachmentType,
  S3AccessPointAttachmentsFilterName,
  SecurityStyle,
  ServiceLimit,
  ServiceLimitExceeded,
  SnaplockType,
  SnapshotFilterName,
  SnapshotLifecycle,
  SnapshotNotFound,
  SourceBackupUnavailable,
  StartMisconfiguredStateRecoveryCommand,
  Status,
  StorageType,
  StorageVirtualMachineFilterName,
  StorageVirtualMachineLifecycle,
  StorageVirtualMachineNotFound,
  StorageVirtualMachineRootVolumeSecurityStyle,
  StorageVirtualMachineSubtype,
  TagResourceCommand,
  TieringPolicyName,
  TooManyAccessPoints,
  Unit,
  UnsupportedOperation,
  UntagResourceCommand,
  UpdateDataRepositoryAssociationCommand,
  UpdateFileCacheCommand,
  UpdateFileSystemCommand,
  UpdateOpenZFSVolumeOption,
  UpdateSharedVpcConfigurationCommand,
  UpdateSnapshotCommand,
  UpdateStorageVirtualMachineCommand,
  UpdateVolumeCommand,
  VolumeFilterName,
  VolumeLifecycle,
  VolumeNotFound,
  VolumeStyle,
  VolumeType,
  WindowsAccessAuditLogLevel,
  WindowsDeploymentType,
  paginateDescribeBackups,
  paginateDescribeDataRepositoryAssociations,
  paginateDescribeDataRepositoryTasks,
  paginateDescribeFileCaches,
  paginateDescribeFileSystemAliases,
  paginateDescribeFileSystems,
  paginateDescribeS3AccessPointAttachments,
  paginateDescribeSnapshots,
  paginateDescribeStorageVirtualMachines,
  paginateDescribeVolumes,
  paginateListTagsForResource,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof FSxClient === "function");
assert(typeof FSx === "function");
// commands
assert(typeof AssociateFileSystemAliasesCommand === "function");
assert(typeof CancelDataRepositoryTaskCommand === "function");
assert(typeof CopyBackupCommand === "function");
assert(typeof CopySnapshotAndUpdateVolumeCommand === "function");
assert(typeof CreateAndAttachS3AccessPointCommand === "function");
assert(typeof CreateBackupCommand === "function");
assert(typeof CreateDataRepositoryAssociationCommand === "function");
assert(typeof CreateDataRepositoryTaskCommand === "function");
assert(typeof CreateFileCacheCommand === "function");
assert(typeof CreateFileSystemCommand === "function");
assert(typeof CreateFileSystemFromBackupCommand === "function");
assert(typeof CreateSnapshotCommand === "function");
assert(typeof CreateStorageVirtualMachineCommand === "function");
assert(typeof CreateVolumeCommand === "function");
assert(typeof CreateVolumeFromBackupCommand === "function");
assert(typeof DeleteBackupCommand === "function");
assert(typeof DeleteDataRepositoryAssociationCommand === "function");
assert(typeof DeleteFileCacheCommand === "function");
assert(typeof DeleteFileSystemCommand === "function");
assert(typeof DeleteSnapshotCommand === "function");
assert(typeof DeleteStorageVirtualMachineCommand === "function");
assert(typeof DeleteVolumeCommand === "function");
assert(typeof DescribeBackupsCommand === "function");
assert(typeof DescribeDataRepositoryAssociationsCommand === "function");
assert(typeof DescribeDataRepositoryTasksCommand === "function");
assert(typeof DescribeFileCachesCommand === "function");
assert(typeof DescribeFileSystemAliasesCommand === "function");
assert(typeof DescribeFileSystemsCommand === "function");
assert(typeof DescribeS3AccessPointAttachmentsCommand === "function");
assert(typeof DescribeSharedVpcConfigurationCommand === "function");
assert(typeof DescribeSnapshotsCommand === "function");
assert(typeof DescribeStorageVirtualMachinesCommand === "function");
assert(typeof DescribeVolumesCommand === "function");
assert(typeof DetachAndDeleteS3AccessPointCommand === "function");
assert(typeof DisassociateFileSystemAliasesCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ReleaseFileSystemNfsV3LocksCommand === "function");
assert(typeof RestoreVolumeFromSnapshotCommand === "function");
assert(typeof StartMisconfiguredStateRecoveryCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateDataRepositoryAssociationCommand === "function");
assert(typeof UpdateFileCacheCommand === "function");
assert(typeof UpdateFileSystemCommand === "function");
assert(typeof UpdateSharedVpcConfigurationCommand === "function");
assert(typeof UpdateSnapshotCommand === "function");
assert(typeof UpdateStorageVirtualMachineCommand === "function");
assert(typeof UpdateVolumeCommand === "function");
// enums
assert(typeof ActiveDirectoryErrorType === "object");
assert(typeof AdministrativeActionType === "object");
assert(typeof AliasLifecycle === "object");
assert(typeof AutocommitPeriodType === "object");
assert(typeof AutoImportPolicyType === "object");
assert(typeof BackupLifecycle === "object");
assert(typeof BackupType === "object");
assert(typeof DataCompressionType === "object");
assert(typeof DataRepositoryLifecycle === "object");
assert(typeof DataRepositoryTaskFilterName === "object");
assert(typeof DataRepositoryTaskLifecycle === "object");
assert(typeof DataRepositoryTaskType === "object");
assert(typeof DeleteFileSystemOpenZFSOption === "object");
assert(typeof DeleteOpenZFSVolumeOption === "object");
assert(typeof DiskIopsConfigurationMode === "object");
assert(typeof DriveCacheType === "object");
assert(typeof EventType === "object");
assert(typeof FileCacheLifecycle === "object");
assert(typeof FileCacheLustreDeploymentType === "object");
assert(typeof FileCacheType === "object");
assert(typeof FileSystemLifecycle === "object");
assert(typeof FileSystemMaintenanceOperation === "object");
assert(typeof FileSystemType === "object");
assert(typeof FilterName === "object");
assert(typeof FlexCacheEndpointType === "object");
assert(typeof InputOntapVolumeType === "object");
assert(typeof LustreAccessAuditLogLevel === "object");
assert(typeof LustreDeploymentType === "object");
assert(typeof LustreReadCacheSizingMode === "object");
assert(typeof MetadataConfigurationMode === "object");
assert(typeof NetworkType === "object");
assert(typeof NfsVersion === "object");
assert(typeof OntapDeploymentType === "object");
assert(typeof OntapFileSystemUserType === "object");
assert(typeof OntapVolumeType === "object");
assert(typeof OpenZFSCopyStrategy === "object");
assert(typeof OpenZFSDataCompressionType === "object");
assert(typeof OpenZFSDeploymentType === "object");
assert(typeof OpenZFSFileSystemUserType === "object");
assert(typeof OpenZFSQuotaType === "object");
assert(typeof OpenZFSReadCacheSizingMode === "object");
assert(typeof PrivilegedDelete === "object");
assert(typeof ReportFormat === "object");
assert(typeof ReportScope === "object");
assert(typeof ResourceType === "object");
assert(typeof RestoreOpenZFSVolumeOption === "object");
assert(typeof RetentionPeriodType === "object");
assert(typeof S3AccessPointAttachmentLifecycle === "object");
assert(typeof S3AccessPointAttachmentsFilterName === "object");
assert(typeof S3AccessPointAttachmentType === "object");
assert(typeof SecurityStyle === "object");
assert(typeof ServiceLimit === "object");
assert(typeof SnaplockType === "object");
assert(typeof SnapshotFilterName === "object");
assert(typeof SnapshotLifecycle === "object");
assert(typeof Status === "object");
assert(typeof StorageType === "object");
assert(typeof StorageVirtualMachineFilterName === "object");
assert(typeof StorageVirtualMachineLifecycle === "object");
assert(typeof StorageVirtualMachineRootVolumeSecurityStyle === "object");
assert(typeof StorageVirtualMachineSubtype === "object");
assert(typeof TieringPolicyName === "object");
assert(typeof Unit === "object");
assert(typeof UpdateOpenZFSVolumeOption === "object");
assert(typeof VolumeFilterName === "object");
assert(typeof VolumeLifecycle === "object");
assert(typeof VolumeStyle === "object");
assert(typeof VolumeType === "object");
assert(typeof WindowsAccessAuditLogLevel === "object");
assert(typeof WindowsDeploymentType === "object");
// errors
assert(AccessPointAlreadyOwnedByYou.prototype instanceof FSxServiceException);
assert(ActiveDirectoryError.prototype instanceof FSxServiceException);
assert(BackupBeingCopied.prototype instanceof FSxServiceException);
assert(BackupInProgress.prototype instanceof FSxServiceException);
assert(BackupNotFound.prototype instanceof FSxServiceException);
assert(BackupRestoring.prototype instanceof FSxServiceException);
assert(BadRequest.prototype instanceof FSxServiceException);
assert(DataRepositoryAssociationNotFound.prototype instanceof FSxServiceException);
assert(DataRepositoryTaskEnded.prototype instanceof FSxServiceException);
assert(DataRepositoryTaskExecuting.prototype instanceof FSxServiceException);
assert(DataRepositoryTaskNotFound.prototype instanceof FSxServiceException);
assert(FileCacheNotFound.prototype instanceof FSxServiceException);
assert(FileSystemNotFound.prototype instanceof FSxServiceException);
assert(IncompatibleParameterError.prototype instanceof FSxServiceException);
assert(IncompatibleRegionForMultiAZ.prototype instanceof FSxServiceException);
assert(InternalServerError.prototype instanceof FSxServiceException);
assert(InvalidAccessPoint.prototype instanceof FSxServiceException);
assert(InvalidDataRepositoryType.prototype instanceof FSxServiceException);
assert(InvalidDestinationKmsKey.prototype instanceof FSxServiceException);
assert(InvalidExportPath.prototype instanceof FSxServiceException);
assert(InvalidImportPath.prototype instanceof FSxServiceException);
assert(InvalidNetworkSettings.prototype instanceof FSxServiceException);
assert(InvalidPerUnitStorageThroughput.prototype instanceof FSxServiceException);
assert(InvalidRegion.prototype instanceof FSxServiceException);
assert(InvalidRequest.prototype instanceof FSxServiceException);
assert(InvalidSourceKmsKey.prototype instanceof FSxServiceException);
assert(MissingFileCacheConfiguration.prototype instanceof FSxServiceException);
assert(MissingFileSystemConfiguration.prototype instanceof FSxServiceException);
assert(MissingVolumeConfiguration.prototype instanceof FSxServiceException);
assert(NotServiceResourceError.prototype instanceof FSxServiceException);
assert(ResourceDoesNotSupportTagging.prototype instanceof FSxServiceException);
assert(ResourceNotFound.prototype instanceof FSxServiceException);
assert(S3AccessPointAttachmentNotFound.prototype instanceof FSxServiceException);
assert(ServiceLimitExceeded.prototype instanceof FSxServiceException);
assert(SnapshotNotFound.prototype instanceof FSxServiceException);
assert(SourceBackupUnavailable.prototype instanceof FSxServiceException);
assert(StorageVirtualMachineNotFound.prototype instanceof FSxServiceException);
assert(TooManyAccessPoints.prototype instanceof FSxServiceException);
assert(UnsupportedOperation.prototype instanceof FSxServiceException);
assert(VolumeNotFound.prototype instanceof FSxServiceException);
assert(FSxServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribeBackups === "function");
assert(typeof paginateDescribeDataRepositoryAssociations === "function");
assert(typeof paginateDescribeDataRepositoryTasks === "function");
assert(typeof paginateDescribeFileCaches === "function");
assert(typeof paginateDescribeFileSystemAliases === "function");
assert(typeof paginateDescribeFileSystems === "function");
assert(typeof paginateDescribeS3AccessPointAttachments === "function");
assert(typeof paginateDescribeSnapshots === "function");
assert(typeof paginateDescribeStorageVirtualMachines === "function");
assert(typeof paginateDescribeVolumes === "function");
assert(typeof paginateListTagsForResource === "function");
console.log(`FSx index test passed.`);
