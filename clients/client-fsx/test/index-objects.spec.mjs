import {
  AdministrativeActionType,
  AliasLifecycle,
  AssociateFileSystemAliasesCommand,
  AutoImportPolicyType,
  AutocommitPeriodType,
  BackupLifecycle,
  BackupType,
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
  DataRepositoryLifecycle,
  DataRepositoryTaskFilterName,
  DataRepositoryTaskLifecycle,
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
  FileCacheType,
  FileSystemLifecycle,
  FileSystemMaintenanceOperation,
  FileSystemType,
  FilterName,
  FlexCacheEndpointType,
  InputOntapVolumeType,
  ListTagsForResourceCommand,
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
  ReleaseFileSystemNfsV3LocksCommand,
  ReportFormat,
  ReportScope,
  ResourceType,
  RestoreOpenZFSVolumeOption,
  RestoreVolumeFromSnapshotCommand,
  RetentionPeriodType,
  S3AccessPointAttachmentLifecycle,
  S3AccessPointAttachmentType,
  S3AccessPointAttachmentsFilterName,
  SecurityStyle,
  SnaplockType,
  SnapshotFilterName,
  SnapshotLifecycle,
  StartMisconfiguredStateRecoveryCommand,
  Status,
  StorageType,
  StorageVirtualMachineFilterName,
  StorageVirtualMachineLifecycle,
  StorageVirtualMachineRootVolumeSecurityStyle,
  StorageVirtualMachineSubtype,
  TagResourceCommand,
  TieringPolicyName,
  Unit,
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
