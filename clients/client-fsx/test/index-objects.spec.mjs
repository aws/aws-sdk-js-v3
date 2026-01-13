import {
  AccessPointAlreadyOwnedByYou,
  AccessPointAlreadyOwnedByYou$,
  ActiveDirectoryBackupAttributes$,
  ActiveDirectoryError,
  ActiveDirectoryError$,
  ActiveDirectoryErrorType,
  AdministrativeAction$,
  AdministrativeActionFailureDetails$,
  AdministrativeActionType,
  AggregateConfiguration$,
  Alias$,
  AliasLifecycle,
  AssociateFileSystemAliases$,
  AssociateFileSystemAliasesCommand,
  AssociateFileSystemAliasesRequest$,
  AssociateFileSystemAliasesResponse$,
  AutocommitPeriod$,
  AutocommitPeriodType,
  AutoExportPolicy$,
  AutoImportPolicy$,
  AutoImportPolicyType,
  Backup$,
  BackupBeingCopied,
  BackupBeingCopied$,
  BackupFailureDetails$,
  BackupInProgress,
  BackupInProgress$,
  BackupLifecycle,
  BackupNotFound,
  BackupNotFound$,
  BackupRestoring,
  BackupRestoring$,
  BackupType,
  BadRequest,
  BadRequest$,
  CancelDataRepositoryTask$,
  CancelDataRepositoryTaskCommand,
  CancelDataRepositoryTaskRequest$,
  CancelDataRepositoryTaskResponse$,
  CompletionReport$,
  CopyBackup$,
  CopyBackupCommand,
  CopyBackupRequest$,
  CopyBackupResponse$,
  CopySnapshotAndUpdateVolume$,
  CopySnapshotAndUpdateVolumeCommand,
  CopySnapshotAndUpdateVolumeRequest$,
  CopySnapshotAndUpdateVolumeResponse$,
  CreateAggregateConfiguration$,
  CreateAndAttachS3AccessPoint$,
  CreateAndAttachS3AccessPointCommand,
  CreateAndAttachS3AccessPointOntapConfiguration$,
  CreateAndAttachS3AccessPointOpenZFSConfiguration$,
  CreateAndAttachS3AccessPointRequest$,
  CreateAndAttachS3AccessPointResponse$,
  CreateAndAttachS3AccessPointS3Configuration$,
  CreateBackup$,
  CreateBackupCommand,
  CreateBackupRequest$,
  CreateBackupResponse$,
  CreateDataRepositoryAssociation$,
  CreateDataRepositoryAssociationCommand,
  CreateDataRepositoryAssociationRequest$,
  CreateDataRepositoryAssociationResponse$,
  CreateDataRepositoryTask$,
  CreateDataRepositoryTaskCommand,
  CreateDataRepositoryTaskRequest$,
  CreateDataRepositoryTaskResponse$,
  CreateFileCache$,
  CreateFileCacheCommand,
  CreateFileCacheLustreConfiguration$,
  CreateFileCacheRequest$,
  CreateFileCacheResponse$,
  CreateFileSystem$,
  CreateFileSystemCommand,
  CreateFileSystemFromBackup$,
  CreateFileSystemFromBackupCommand,
  CreateFileSystemFromBackupRequest$,
  CreateFileSystemFromBackupResponse$,
  CreateFileSystemLustreConfiguration$,
  CreateFileSystemLustreMetadataConfiguration$,
  CreateFileSystemOntapConfiguration$,
  CreateFileSystemOpenZFSConfiguration$,
  CreateFileSystemRequest$,
  CreateFileSystemResponse$,
  CreateFileSystemWindowsConfiguration$,
  CreateOntapVolumeConfiguration$,
  CreateOpenZFSOriginSnapshotConfiguration$,
  CreateOpenZFSVolumeConfiguration$,
  CreateSnaplockConfiguration$,
  CreateSnapshot$,
  CreateSnapshotCommand,
  CreateSnapshotRequest$,
  CreateSnapshotResponse$,
  CreateStorageVirtualMachine$,
  CreateStorageVirtualMachineCommand,
  CreateStorageVirtualMachineRequest$,
  CreateStorageVirtualMachineResponse$,
  CreateSvmActiveDirectoryConfiguration$,
  CreateVolume$,
  CreateVolumeCommand,
  CreateVolumeFromBackup$,
  CreateVolumeFromBackupCommand,
  CreateVolumeFromBackupRequest$,
  CreateVolumeFromBackupResponse$,
  CreateVolumeRequest$,
  CreateVolumeResponse$,
  DataCompressionType,
  DataRepositoryAssociation$,
  DataRepositoryAssociationNotFound,
  DataRepositoryAssociationNotFound$,
  DataRepositoryConfiguration$,
  DataRepositoryFailureDetails$,
  DataRepositoryLifecycle,
  DataRepositoryTask$,
  DataRepositoryTaskEnded,
  DataRepositoryTaskEnded$,
  DataRepositoryTaskExecuting,
  DataRepositoryTaskExecuting$,
  DataRepositoryTaskFailureDetails$,
  DataRepositoryTaskFilter$,
  DataRepositoryTaskFilterName,
  DataRepositoryTaskLifecycle,
  DataRepositoryTaskNotFound,
  DataRepositoryTaskNotFound$,
  DataRepositoryTaskStatus$,
  DataRepositoryTaskType,
  DeleteBackup$,
  DeleteBackupCommand,
  DeleteBackupRequest$,
  DeleteBackupResponse$,
  DeleteDataRepositoryAssociation$,
  DeleteDataRepositoryAssociationCommand,
  DeleteDataRepositoryAssociationRequest$,
  DeleteDataRepositoryAssociationResponse$,
  DeleteFileCache$,
  DeleteFileCacheCommand,
  DeleteFileCacheRequest$,
  DeleteFileCacheResponse$,
  DeleteFileSystem$,
  DeleteFileSystemCommand,
  DeleteFileSystemLustreConfiguration$,
  DeleteFileSystemLustreResponse$,
  DeleteFileSystemOpenZFSConfiguration$,
  DeleteFileSystemOpenZFSOption,
  DeleteFileSystemOpenZFSResponse$,
  DeleteFileSystemRequest$,
  DeleteFileSystemResponse$,
  DeleteFileSystemWindowsConfiguration$,
  DeleteFileSystemWindowsResponse$,
  DeleteOpenZFSVolumeOption,
  DeleteSnapshot$,
  DeleteSnapshotCommand,
  DeleteSnapshotRequest$,
  DeleteSnapshotResponse$,
  DeleteStorageVirtualMachine$,
  DeleteStorageVirtualMachineCommand,
  DeleteStorageVirtualMachineRequest$,
  DeleteStorageVirtualMachineResponse$,
  DeleteVolume$,
  DeleteVolumeCommand,
  DeleteVolumeOntapConfiguration$,
  DeleteVolumeOntapResponse$,
  DeleteVolumeOpenZFSConfiguration$,
  DeleteVolumeRequest$,
  DeleteVolumeResponse$,
  DescribeBackups$,
  DescribeBackupsCommand,
  DescribeBackupsRequest$,
  DescribeBackupsResponse$,
  DescribeDataRepositoryAssociations$,
  DescribeDataRepositoryAssociationsCommand,
  DescribeDataRepositoryAssociationsRequest$,
  DescribeDataRepositoryAssociationsResponse$,
  DescribeDataRepositoryTasks$,
  DescribeDataRepositoryTasksCommand,
  DescribeDataRepositoryTasksRequest$,
  DescribeDataRepositoryTasksResponse$,
  DescribeFileCaches$,
  DescribeFileCachesCommand,
  DescribeFileCachesRequest$,
  DescribeFileCachesResponse$,
  DescribeFileSystemAliases$,
  DescribeFileSystemAliasesCommand,
  DescribeFileSystemAliasesRequest$,
  DescribeFileSystemAliasesResponse$,
  DescribeFileSystems$,
  DescribeFileSystemsCommand,
  DescribeFileSystemsRequest$,
  DescribeFileSystemsResponse$,
  DescribeS3AccessPointAttachments$,
  DescribeS3AccessPointAttachmentsCommand,
  DescribeS3AccessPointAttachmentsRequest$,
  DescribeS3AccessPointAttachmentsResponse$,
  DescribeSharedVpcConfiguration$,
  DescribeSharedVpcConfigurationCommand,
  DescribeSharedVpcConfigurationRequest$,
  DescribeSharedVpcConfigurationResponse$,
  DescribeSnapshots$,
  DescribeSnapshotsCommand,
  DescribeSnapshotsRequest$,
  DescribeSnapshotsResponse$,
  DescribeStorageVirtualMachines$,
  DescribeStorageVirtualMachinesCommand,
  DescribeStorageVirtualMachinesRequest$,
  DescribeStorageVirtualMachinesResponse$,
  DescribeVolumes$,
  DescribeVolumesCommand,
  DescribeVolumesRequest$,
  DescribeVolumesResponse$,
  DetachAndDeleteS3AccessPoint$,
  DetachAndDeleteS3AccessPointCommand,
  DetachAndDeleteS3AccessPointRequest$,
  DetachAndDeleteS3AccessPointResponse$,
  DisassociateFileSystemAliases$,
  DisassociateFileSystemAliasesCommand,
  DisassociateFileSystemAliasesRequest$,
  DisassociateFileSystemAliasesResponse$,
  DiskIopsConfiguration$,
  DiskIopsConfigurationMode,
  DriveCacheType,
  DurationSinceLastAccess$,
  EventType,
  FileCache$,
  FileCacheCreating$,
  FileCacheDataRepositoryAssociation$,
  FileCacheFailureDetails$,
  FileCacheLifecycle,
  FileCacheLustreConfiguration$,
  FileCacheLustreDeploymentType,
  FileCacheLustreMetadataConfiguration$,
  FileCacheNFSConfiguration$,
  FileCacheNotFound,
  FileCacheNotFound$,
  FileCacheType,
  FileSystem$,
  FileSystemEndpoint$,
  FileSystemEndpoints$,
  FileSystemFailureDetails$,
  FileSystemLifecycle,
  FileSystemLustreMetadataConfiguration$,
  FileSystemMaintenanceOperation,
  FileSystemNotFound,
  FileSystemNotFound$,
  FileSystemType,
  Filter$,
  FilterName,
  FlexCacheEndpointType,
  FSx,
  FSxClient,
  FSxServiceException,
  IncompatibleParameterError,
  IncompatibleParameterError$,
  IncompatibleRegionForMultiAZ,
  IncompatibleRegionForMultiAZ$,
  InputOntapVolumeType,
  InternalServerError,
  InternalServerError$,
  InvalidAccessPoint,
  InvalidAccessPoint$,
  InvalidDataRepositoryType,
  InvalidDataRepositoryType$,
  InvalidDestinationKmsKey,
  InvalidDestinationKmsKey$,
  InvalidExportPath,
  InvalidExportPath$,
  InvalidImportPath,
  InvalidImportPath$,
  InvalidNetworkSettings,
  InvalidNetworkSettings$,
  InvalidPerUnitStorageThroughput,
  InvalidPerUnitStorageThroughput$,
  InvalidRegion,
  InvalidRegion$,
  InvalidRequest,
  InvalidRequest$,
  InvalidSourceKmsKey,
  InvalidSourceKmsKey$,
  LifecycleTransitionReason$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  LustreAccessAuditLogLevel,
  LustreDeploymentType,
  LustreFileSystemConfiguration$,
  LustreLogConfiguration$,
  LustreLogCreateConfiguration$,
  LustreReadCacheConfiguration$,
  LustreReadCacheSizingMode,
  LustreRootSquashConfiguration$,
  MetadataConfigurationMode,
  MissingFileCacheConfiguration,
  MissingFileCacheConfiguration$,
  MissingFileSystemConfiguration,
  MissingFileSystemConfiguration$,
  MissingVolumeConfiguration,
  MissingVolumeConfiguration$,
  NetworkType,
  NFSDataRepositoryConfiguration$,
  NfsVersion,
  NotServiceResourceError,
  NotServiceResourceError$,
  OntapDeploymentType,
  OntapFileSystemConfiguration$,
  OntapFileSystemIdentity$,
  OntapFileSystemUserType,
  OntapUnixFileSystemUser$,
  OntapVolumeConfiguration$,
  OntapVolumeType,
  OntapWindowsFileSystemUser$,
  OpenZFSClientConfiguration$,
  OpenZFSCopyStrategy,
  OpenZFSCreateRootVolumeConfiguration$,
  OpenZFSDataCompressionType,
  OpenZFSDeploymentType,
  OpenZFSFileSystemConfiguration$,
  OpenZFSFileSystemIdentity$,
  OpenZFSFileSystemUserType,
  OpenZFSNfsExport$,
  OpenZFSOriginSnapshotConfiguration$,
  OpenZFSPosixFileSystemUser$,
  OpenZFSQuotaType,
  OpenZFSReadCacheConfiguration$,
  OpenZFSReadCacheSizingMode,
  OpenZFSUserOrGroupQuota$,
  OpenZFSVolumeConfiguration$,
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
  PrivilegedDelete,
  ReleaseConfiguration$,
  ReleaseFileSystemNfsV3Locks$,
  ReleaseFileSystemNfsV3LocksCommand,
  ReleaseFileSystemNfsV3LocksRequest$,
  ReleaseFileSystemNfsV3LocksResponse$,
  ReportFormat,
  ReportScope,
  ResourceDoesNotSupportTagging,
  ResourceDoesNotSupportTagging$,
  ResourceNotFound,
  ResourceNotFound$,
  ResourceType,
  RestoreOpenZFSVolumeOption,
  RestoreVolumeFromSnapshot$,
  RestoreVolumeFromSnapshotCommand,
  RestoreVolumeFromSnapshotRequest$,
  RestoreVolumeFromSnapshotResponse$,
  RetentionPeriod$,
  RetentionPeriodType,
  S3AccessPoint$,
  S3AccessPointAttachment$,
  S3AccessPointAttachmentLifecycle,
  S3AccessPointAttachmentNotFound,
  S3AccessPointAttachmentNotFound$,
  S3AccessPointAttachmentsFilter$,
  S3AccessPointAttachmentsFilterName,
  S3AccessPointAttachmentType,
  S3AccessPointOntapConfiguration$,
  S3AccessPointOpenZFSConfiguration$,
  S3AccessPointVpcConfiguration$,
  S3DataRepositoryConfiguration$,
  SecurityStyle,
  SelfManagedActiveDirectoryAttributes$,
  SelfManagedActiveDirectoryConfiguration$,
  SelfManagedActiveDirectoryConfigurationUpdates$,
  ServiceLimit,
  ServiceLimitExceeded,
  ServiceLimitExceeded$,
  SnaplockConfiguration$,
  SnaplockRetentionPeriod$,
  SnaplockType,
  Snapshot$,
  SnapshotFilter$,
  SnapshotFilterName,
  SnapshotLifecycle,
  SnapshotNotFound,
  SnapshotNotFound$,
  SourceBackupUnavailable,
  SourceBackupUnavailable$,
  StartMisconfiguredStateRecovery$,
  StartMisconfiguredStateRecoveryCommand,
  StartMisconfiguredStateRecoveryRequest$,
  StartMisconfiguredStateRecoveryResponse$,
  Status,
  StorageType,
  StorageVirtualMachine$,
  StorageVirtualMachineFilter$,
  StorageVirtualMachineFilterName,
  StorageVirtualMachineLifecycle,
  StorageVirtualMachineNotFound,
  StorageVirtualMachineNotFound$,
  StorageVirtualMachineRootVolumeSecurityStyle,
  StorageVirtualMachineSubtype,
  SvmActiveDirectoryConfiguration$,
  SvmEndpoint$,
  SvmEndpoints$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TieringPolicy$,
  TieringPolicyName,
  TooManyAccessPoints,
  TooManyAccessPoints$,
  Unit,
  UnsupportedOperation,
  UnsupportedOperation$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateDataRepositoryAssociation$,
  UpdateDataRepositoryAssociationCommand,
  UpdateDataRepositoryAssociationRequest$,
  UpdateDataRepositoryAssociationResponse$,
  UpdateFileCache$,
  UpdateFileCacheCommand,
  UpdateFileCacheLustreConfiguration$,
  UpdateFileCacheRequest$,
  UpdateFileCacheResponse$,
  UpdateFileSystem$,
  UpdateFileSystemCommand,
  UpdateFileSystemLustreConfiguration$,
  UpdateFileSystemLustreMetadataConfiguration$,
  UpdateFileSystemOntapConfiguration$,
  UpdateFileSystemOpenZFSConfiguration$,
  UpdateFileSystemRequest$,
  UpdateFileSystemResponse$,
  UpdateFileSystemWindowsConfiguration$,
  UpdateOntapVolumeConfiguration$,
  UpdateOpenZFSVolumeConfiguration$,
  UpdateOpenZFSVolumeOption,
  UpdateSharedVpcConfiguration$,
  UpdateSharedVpcConfigurationCommand,
  UpdateSharedVpcConfigurationRequest$,
  UpdateSharedVpcConfigurationResponse$,
  UpdateSnaplockConfiguration$,
  UpdateSnapshot$,
  UpdateSnapshotCommand,
  UpdateSnapshotRequest$,
  UpdateSnapshotResponse$,
  UpdateStorageVirtualMachine$,
  UpdateStorageVirtualMachineCommand,
  UpdateStorageVirtualMachineRequest$,
  UpdateStorageVirtualMachineResponse$,
  UpdateSvmActiveDirectoryConfiguration$,
  UpdateVolume$,
  UpdateVolumeCommand,
  UpdateVolumeRequest$,
  UpdateVolumeResponse$,
  Volume$,
  VolumeFilter$,
  VolumeFilterName,
  VolumeLifecycle,
  VolumeNotFound,
  VolumeNotFound$,
  VolumeStyle,
  VolumeType,
  WindowsAccessAuditLogLevel,
  WindowsAuditLogConfiguration$,
  WindowsAuditLogCreateConfiguration$,
  WindowsDeploymentType,
  WindowsFileSystemConfiguration$,
  WindowsFsrmConfiguration$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof FSxClient === "function");
assert(typeof FSx === "function");
// commands
assert(typeof AssociateFileSystemAliasesCommand === "function");
assert(typeof AssociateFileSystemAliases$ === "object");
assert(typeof CancelDataRepositoryTaskCommand === "function");
assert(typeof CancelDataRepositoryTask$ === "object");
assert(typeof CopyBackupCommand === "function");
assert(typeof CopyBackup$ === "object");
assert(typeof CopySnapshotAndUpdateVolumeCommand === "function");
assert(typeof CopySnapshotAndUpdateVolume$ === "object");
assert(typeof CreateAndAttachS3AccessPointCommand === "function");
assert(typeof CreateAndAttachS3AccessPoint$ === "object");
assert(typeof CreateBackupCommand === "function");
assert(typeof CreateBackup$ === "object");
assert(typeof CreateDataRepositoryAssociationCommand === "function");
assert(typeof CreateDataRepositoryAssociation$ === "object");
assert(typeof CreateDataRepositoryTaskCommand === "function");
assert(typeof CreateDataRepositoryTask$ === "object");
assert(typeof CreateFileCacheCommand === "function");
assert(typeof CreateFileCache$ === "object");
assert(typeof CreateFileSystemCommand === "function");
assert(typeof CreateFileSystem$ === "object");
assert(typeof CreateFileSystemFromBackupCommand === "function");
assert(typeof CreateFileSystemFromBackup$ === "object");
assert(typeof CreateSnapshotCommand === "function");
assert(typeof CreateSnapshot$ === "object");
assert(typeof CreateStorageVirtualMachineCommand === "function");
assert(typeof CreateStorageVirtualMachine$ === "object");
assert(typeof CreateVolumeCommand === "function");
assert(typeof CreateVolume$ === "object");
assert(typeof CreateVolumeFromBackupCommand === "function");
assert(typeof CreateVolumeFromBackup$ === "object");
assert(typeof DeleteBackupCommand === "function");
assert(typeof DeleteBackup$ === "object");
assert(typeof DeleteDataRepositoryAssociationCommand === "function");
assert(typeof DeleteDataRepositoryAssociation$ === "object");
assert(typeof DeleteFileCacheCommand === "function");
assert(typeof DeleteFileCache$ === "object");
assert(typeof DeleteFileSystemCommand === "function");
assert(typeof DeleteFileSystem$ === "object");
assert(typeof DeleteSnapshotCommand === "function");
assert(typeof DeleteSnapshot$ === "object");
assert(typeof DeleteStorageVirtualMachineCommand === "function");
assert(typeof DeleteStorageVirtualMachine$ === "object");
assert(typeof DeleteVolumeCommand === "function");
assert(typeof DeleteVolume$ === "object");
assert(typeof DescribeBackupsCommand === "function");
assert(typeof DescribeBackups$ === "object");
assert(typeof DescribeDataRepositoryAssociationsCommand === "function");
assert(typeof DescribeDataRepositoryAssociations$ === "object");
assert(typeof DescribeDataRepositoryTasksCommand === "function");
assert(typeof DescribeDataRepositoryTasks$ === "object");
assert(typeof DescribeFileCachesCommand === "function");
assert(typeof DescribeFileCaches$ === "object");
assert(typeof DescribeFileSystemAliasesCommand === "function");
assert(typeof DescribeFileSystemAliases$ === "object");
assert(typeof DescribeFileSystemsCommand === "function");
assert(typeof DescribeFileSystems$ === "object");
assert(typeof DescribeS3AccessPointAttachmentsCommand === "function");
assert(typeof DescribeS3AccessPointAttachments$ === "object");
assert(typeof DescribeSharedVpcConfigurationCommand === "function");
assert(typeof DescribeSharedVpcConfiguration$ === "object");
assert(typeof DescribeSnapshotsCommand === "function");
assert(typeof DescribeSnapshots$ === "object");
assert(typeof DescribeStorageVirtualMachinesCommand === "function");
assert(typeof DescribeStorageVirtualMachines$ === "object");
assert(typeof DescribeVolumesCommand === "function");
assert(typeof DescribeVolumes$ === "object");
assert(typeof DetachAndDeleteS3AccessPointCommand === "function");
assert(typeof DetachAndDeleteS3AccessPoint$ === "object");
assert(typeof DisassociateFileSystemAliasesCommand === "function");
assert(typeof DisassociateFileSystemAliases$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ReleaseFileSystemNfsV3LocksCommand === "function");
assert(typeof ReleaseFileSystemNfsV3Locks$ === "object");
assert(typeof RestoreVolumeFromSnapshotCommand === "function");
assert(typeof RestoreVolumeFromSnapshot$ === "object");
assert(typeof StartMisconfiguredStateRecoveryCommand === "function");
assert(typeof StartMisconfiguredStateRecovery$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateDataRepositoryAssociationCommand === "function");
assert(typeof UpdateDataRepositoryAssociation$ === "object");
assert(typeof UpdateFileCacheCommand === "function");
assert(typeof UpdateFileCache$ === "object");
assert(typeof UpdateFileSystemCommand === "function");
assert(typeof UpdateFileSystem$ === "object");
assert(typeof UpdateSharedVpcConfigurationCommand === "function");
assert(typeof UpdateSharedVpcConfiguration$ === "object");
assert(typeof UpdateSnapshotCommand === "function");
assert(typeof UpdateSnapshot$ === "object");
assert(typeof UpdateStorageVirtualMachineCommand === "function");
assert(typeof UpdateStorageVirtualMachine$ === "object");
assert(typeof UpdateVolumeCommand === "function");
assert(typeof UpdateVolume$ === "object");
// structural schemas
assert(typeof ActiveDirectoryBackupAttributes$ === "object");
assert(typeof AdministrativeAction$ === "object");
assert(typeof AdministrativeActionFailureDetails$ === "object");
assert(typeof AggregateConfiguration$ === "object");
assert(typeof Alias$ === "object");
assert(typeof AssociateFileSystemAliasesRequest$ === "object");
assert(typeof AssociateFileSystemAliasesResponse$ === "object");
assert(typeof AutocommitPeriod$ === "object");
assert(typeof AutoExportPolicy$ === "object");
assert(typeof AutoImportPolicy$ === "object");
assert(typeof Backup$ === "object");
assert(typeof BackupFailureDetails$ === "object");
assert(typeof CancelDataRepositoryTaskRequest$ === "object");
assert(typeof CancelDataRepositoryTaskResponse$ === "object");
assert(typeof CompletionReport$ === "object");
assert(typeof CopyBackupRequest$ === "object");
assert(typeof CopyBackupResponse$ === "object");
assert(typeof CopySnapshotAndUpdateVolumeRequest$ === "object");
assert(typeof CopySnapshotAndUpdateVolumeResponse$ === "object");
assert(typeof CreateAggregateConfiguration$ === "object");
assert(typeof CreateAndAttachS3AccessPointOntapConfiguration$ === "object");
assert(typeof CreateAndAttachS3AccessPointOpenZFSConfiguration$ === "object");
assert(typeof CreateAndAttachS3AccessPointRequest$ === "object");
assert(typeof CreateAndAttachS3AccessPointResponse$ === "object");
assert(typeof CreateAndAttachS3AccessPointS3Configuration$ === "object");
assert(typeof CreateBackupRequest$ === "object");
assert(typeof CreateBackupResponse$ === "object");
assert(typeof CreateDataRepositoryAssociationRequest$ === "object");
assert(typeof CreateDataRepositoryAssociationResponse$ === "object");
assert(typeof CreateDataRepositoryTaskRequest$ === "object");
assert(typeof CreateDataRepositoryTaskResponse$ === "object");
assert(typeof CreateFileCacheLustreConfiguration$ === "object");
assert(typeof CreateFileCacheRequest$ === "object");
assert(typeof CreateFileCacheResponse$ === "object");
assert(typeof CreateFileSystemFromBackupRequest$ === "object");
assert(typeof CreateFileSystemFromBackupResponse$ === "object");
assert(typeof CreateFileSystemLustreConfiguration$ === "object");
assert(typeof CreateFileSystemLustreMetadataConfiguration$ === "object");
assert(typeof CreateFileSystemOntapConfiguration$ === "object");
assert(typeof CreateFileSystemOpenZFSConfiguration$ === "object");
assert(typeof CreateFileSystemRequest$ === "object");
assert(typeof CreateFileSystemResponse$ === "object");
assert(typeof CreateFileSystemWindowsConfiguration$ === "object");
assert(typeof CreateOntapVolumeConfiguration$ === "object");
assert(typeof CreateOpenZFSOriginSnapshotConfiguration$ === "object");
assert(typeof CreateOpenZFSVolumeConfiguration$ === "object");
assert(typeof CreateSnaplockConfiguration$ === "object");
assert(typeof CreateSnapshotRequest$ === "object");
assert(typeof CreateSnapshotResponse$ === "object");
assert(typeof CreateStorageVirtualMachineRequest$ === "object");
assert(typeof CreateStorageVirtualMachineResponse$ === "object");
assert(typeof CreateSvmActiveDirectoryConfiguration$ === "object");
assert(typeof CreateVolumeFromBackupRequest$ === "object");
assert(typeof CreateVolumeFromBackupResponse$ === "object");
assert(typeof CreateVolumeRequest$ === "object");
assert(typeof CreateVolumeResponse$ === "object");
assert(typeof DataRepositoryAssociation$ === "object");
assert(typeof DataRepositoryConfiguration$ === "object");
assert(typeof DataRepositoryFailureDetails$ === "object");
assert(typeof DataRepositoryTask$ === "object");
assert(typeof DataRepositoryTaskFailureDetails$ === "object");
assert(typeof DataRepositoryTaskFilter$ === "object");
assert(typeof DataRepositoryTaskStatus$ === "object");
assert(typeof DeleteBackupRequest$ === "object");
assert(typeof DeleteBackupResponse$ === "object");
assert(typeof DeleteDataRepositoryAssociationRequest$ === "object");
assert(typeof DeleteDataRepositoryAssociationResponse$ === "object");
assert(typeof DeleteFileCacheRequest$ === "object");
assert(typeof DeleteFileCacheResponse$ === "object");
assert(typeof DeleteFileSystemLustreConfiguration$ === "object");
assert(typeof DeleteFileSystemLustreResponse$ === "object");
assert(typeof DeleteFileSystemOpenZFSConfiguration$ === "object");
assert(typeof DeleteFileSystemOpenZFSResponse$ === "object");
assert(typeof DeleteFileSystemRequest$ === "object");
assert(typeof DeleteFileSystemResponse$ === "object");
assert(typeof DeleteFileSystemWindowsConfiguration$ === "object");
assert(typeof DeleteFileSystemWindowsResponse$ === "object");
assert(typeof DeleteSnapshotRequest$ === "object");
assert(typeof DeleteSnapshotResponse$ === "object");
assert(typeof DeleteStorageVirtualMachineRequest$ === "object");
assert(typeof DeleteStorageVirtualMachineResponse$ === "object");
assert(typeof DeleteVolumeOntapConfiguration$ === "object");
assert(typeof DeleteVolumeOntapResponse$ === "object");
assert(typeof DeleteVolumeOpenZFSConfiguration$ === "object");
assert(typeof DeleteVolumeRequest$ === "object");
assert(typeof DeleteVolumeResponse$ === "object");
assert(typeof DescribeBackupsRequest$ === "object");
assert(typeof DescribeBackupsResponse$ === "object");
assert(typeof DescribeDataRepositoryAssociationsRequest$ === "object");
assert(typeof DescribeDataRepositoryAssociationsResponse$ === "object");
assert(typeof DescribeDataRepositoryTasksRequest$ === "object");
assert(typeof DescribeDataRepositoryTasksResponse$ === "object");
assert(typeof DescribeFileCachesRequest$ === "object");
assert(typeof DescribeFileCachesResponse$ === "object");
assert(typeof DescribeFileSystemAliasesRequest$ === "object");
assert(typeof DescribeFileSystemAliasesResponse$ === "object");
assert(typeof DescribeFileSystemsRequest$ === "object");
assert(typeof DescribeFileSystemsResponse$ === "object");
assert(typeof DescribeS3AccessPointAttachmentsRequest$ === "object");
assert(typeof DescribeS3AccessPointAttachmentsResponse$ === "object");
assert(typeof DescribeSharedVpcConfigurationRequest$ === "object");
assert(typeof DescribeSharedVpcConfigurationResponse$ === "object");
assert(typeof DescribeSnapshotsRequest$ === "object");
assert(typeof DescribeSnapshotsResponse$ === "object");
assert(typeof DescribeStorageVirtualMachinesRequest$ === "object");
assert(typeof DescribeStorageVirtualMachinesResponse$ === "object");
assert(typeof DescribeVolumesRequest$ === "object");
assert(typeof DescribeVolumesResponse$ === "object");
assert(typeof DetachAndDeleteS3AccessPointRequest$ === "object");
assert(typeof DetachAndDeleteS3AccessPointResponse$ === "object");
assert(typeof DisassociateFileSystemAliasesRequest$ === "object");
assert(typeof DisassociateFileSystemAliasesResponse$ === "object");
assert(typeof DiskIopsConfiguration$ === "object");
assert(typeof DurationSinceLastAccess$ === "object");
assert(typeof FileCache$ === "object");
assert(typeof FileCacheCreating$ === "object");
assert(typeof FileCacheDataRepositoryAssociation$ === "object");
assert(typeof FileCacheFailureDetails$ === "object");
assert(typeof FileCacheLustreConfiguration$ === "object");
assert(typeof FileCacheLustreMetadataConfiguration$ === "object");
assert(typeof FileCacheNFSConfiguration$ === "object");
assert(typeof FileSystem$ === "object");
assert(typeof FileSystemEndpoint$ === "object");
assert(typeof FileSystemEndpoints$ === "object");
assert(typeof FileSystemFailureDetails$ === "object");
assert(typeof FileSystemLustreMetadataConfiguration$ === "object");
assert(typeof Filter$ === "object");
assert(typeof LifecycleTransitionReason$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof LustreFileSystemConfiguration$ === "object");
assert(typeof LustreLogConfiguration$ === "object");
assert(typeof LustreLogCreateConfiguration$ === "object");
assert(typeof LustreReadCacheConfiguration$ === "object");
assert(typeof LustreRootSquashConfiguration$ === "object");
assert(typeof NFSDataRepositoryConfiguration$ === "object");
assert(typeof OntapFileSystemConfiguration$ === "object");
assert(typeof OntapFileSystemIdentity$ === "object");
assert(typeof OntapUnixFileSystemUser$ === "object");
assert(typeof OntapVolumeConfiguration$ === "object");
assert(typeof OntapWindowsFileSystemUser$ === "object");
assert(typeof OpenZFSClientConfiguration$ === "object");
assert(typeof OpenZFSCreateRootVolumeConfiguration$ === "object");
assert(typeof OpenZFSFileSystemConfiguration$ === "object");
assert(typeof OpenZFSFileSystemIdentity$ === "object");
assert(typeof OpenZFSNfsExport$ === "object");
assert(typeof OpenZFSOriginSnapshotConfiguration$ === "object");
assert(typeof OpenZFSPosixFileSystemUser$ === "object");
assert(typeof OpenZFSReadCacheConfiguration$ === "object");
assert(typeof OpenZFSUserOrGroupQuota$ === "object");
assert(typeof OpenZFSVolumeConfiguration$ === "object");
assert(typeof ReleaseConfiguration$ === "object");
assert(typeof ReleaseFileSystemNfsV3LocksRequest$ === "object");
assert(typeof ReleaseFileSystemNfsV3LocksResponse$ === "object");
assert(typeof RestoreVolumeFromSnapshotRequest$ === "object");
assert(typeof RestoreVolumeFromSnapshotResponse$ === "object");
assert(typeof RetentionPeriod$ === "object");
assert(typeof S3AccessPoint$ === "object");
assert(typeof S3AccessPointAttachment$ === "object");
assert(typeof S3AccessPointAttachmentsFilter$ === "object");
assert(typeof S3AccessPointOntapConfiguration$ === "object");
assert(typeof S3AccessPointOpenZFSConfiguration$ === "object");
assert(typeof S3AccessPointVpcConfiguration$ === "object");
assert(typeof S3DataRepositoryConfiguration$ === "object");
assert(typeof SelfManagedActiveDirectoryAttributes$ === "object");
assert(typeof SelfManagedActiveDirectoryConfiguration$ === "object");
assert(typeof SelfManagedActiveDirectoryConfigurationUpdates$ === "object");
assert(typeof SnaplockConfiguration$ === "object");
assert(typeof SnaplockRetentionPeriod$ === "object");
assert(typeof Snapshot$ === "object");
assert(typeof SnapshotFilter$ === "object");
assert(typeof StartMisconfiguredStateRecoveryRequest$ === "object");
assert(typeof StartMisconfiguredStateRecoveryResponse$ === "object");
assert(typeof StorageVirtualMachine$ === "object");
assert(typeof StorageVirtualMachineFilter$ === "object");
assert(typeof SvmActiveDirectoryConfiguration$ === "object");
assert(typeof SvmEndpoint$ === "object");
assert(typeof SvmEndpoints$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TieringPolicy$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateDataRepositoryAssociationRequest$ === "object");
assert(typeof UpdateDataRepositoryAssociationResponse$ === "object");
assert(typeof UpdateFileCacheLustreConfiguration$ === "object");
assert(typeof UpdateFileCacheRequest$ === "object");
assert(typeof UpdateFileCacheResponse$ === "object");
assert(typeof UpdateFileSystemLustreConfiguration$ === "object");
assert(typeof UpdateFileSystemLustreMetadataConfiguration$ === "object");
assert(typeof UpdateFileSystemOntapConfiguration$ === "object");
assert(typeof UpdateFileSystemOpenZFSConfiguration$ === "object");
assert(typeof UpdateFileSystemRequest$ === "object");
assert(typeof UpdateFileSystemResponse$ === "object");
assert(typeof UpdateFileSystemWindowsConfiguration$ === "object");
assert(typeof UpdateOntapVolumeConfiguration$ === "object");
assert(typeof UpdateOpenZFSVolumeConfiguration$ === "object");
assert(typeof UpdateSharedVpcConfigurationRequest$ === "object");
assert(typeof UpdateSharedVpcConfigurationResponse$ === "object");
assert(typeof UpdateSnaplockConfiguration$ === "object");
assert(typeof UpdateSnapshotRequest$ === "object");
assert(typeof UpdateSnapshotResponse$ === "object");
assert(typeof UpdateStorageVirtualMachineRequest$ === "object");
assert(typeof UpdateStorageVirtualMachineResponse$ === "object");
assert(typeof UpdateSvmActiveDirectoryConfiguration$ === "object");
assert(typeof UpdateVolumeRequest$ === "object");
assert(typeof UpdateVolumeResponse$ === "object");
assert(typeof Volume$ === "object");
assert(typeof VolumeFilter$ === "object");
assert(typeof WindowsAuditLogConfiguration$ === "object");
assert(typeof WindowsAuditLogCreateConfiguration$ === "object");
assert(typeof WindowsFileSystemConfiguration$ === "object");
assert(typeof WindowsFsrmConfiguration$ === "object");
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
assert(typeof AccessPointAlreadyOwnedByYou$ === "object");
assert(ActiveDirectoryError.prototype instanceof FSxServiceException);
assert(typeof ActiveDirectoryError$ === "object");
assert(BackupBeingCopied.prototype instanceof FSxServiceException);
assert(typeof BackupBeingCopied$ === "object");
assert(BackupInProgress.prototype instanceof FSxServiceException);
assert(typeof BackupInProgress$ === "object");
assert(BackupNotFound.prototype instanceof FSxServiceException);
assert(typeof BackupNotFound$ === "object");
assert(BackupRestoring.prototype instanceof FSxServiceException);
assert(typeof BackupRestoring$ === "object");
assert(BadRequest.prototype instanceof FSxServiceException);
assert(typeof BadRequest$ === "object");
assert(DataRepositoryAssociationNotFound.prototype instanceof FSxServiceException);
assert(typeof DataRepositoryAssociationNotFound$ === "object");
assert(DataRepositoryTaskEnded.prototype instanceof FSxServiceException);
assert(typeof DataRepositoryTaskEnded$ === "object");
assert(DataRepositoryTaskExecuting.prototype instanceof FSxServiceException);
assert(typeof DataRepositoryTaskExecuting$ === "object");
assert(DataRepositoryTaskNotFound.prototype instanceof FSxServiceException);
assert(typeof DataRepositoryTaskNotFound$ === "object");
assert(FileCacheNotFound.prototype instanceof FSxServiceException);
assert(typeof FileCacheNotFound$ === "object");
assert(FileSystemNotFound.prototype instanceof FSxServiceException);
assert(typeof FileSystemNotFound$ === "object");
assert(IncompatibleParameterError.prototype instanceof FSxServiceException);
assert(typeof IncompatibleParameterError$ === "object");
assert(IncompatibleRegionForMultiAZ.prototype instanceof FSxServiceException);
assert(typeof IncompatibleRegionForMultiAZ$ === "object");
assert(InternalServerError.prototype instanceof FSxServiceException);
assert(typeof InternalServerError$ === "object");
assert(InvalidAccessPoint.prototype instanceof FSxServiceException);
assert(typeof InvalidAccessPoint$ === "object");
assert(InvalidDataRepositoryType.prototype instanceof FSxServiceException);
assert(typeof InvalidDataRepositoryType$ === "object");
assert(InvalidDestinationKmsKey.prototype instanceof FSxServiceException);
assert(typeof InvalidDestinationKmsKey$ === "object");
assert(InvalidExportPath.prototype instanceof FSxServiceException);
assert(typeof InvalidExportPath$ === "object");
assert(InvalidImportPath.prototype instanceof FSxServiceException);
assert(typeof InvalidImportPath$ === "object");
assert(InvalidNetworkSettings.prototype instanceof FSxServiceException);
assert(typeof InvalidNetworkSettings$ === "object");
assert(InvalidPerUnitStorageThroughput.prototype instanceof FSxServiceException);
assert(typeof InvalidPerUnitStorageThroughput$ === "object");
assert(InvalidRegion.prototype instanceof FSxServiceException);
assert(typeof InvalidRegion$ === "object");
assert(InvalidRequest.prototype instanceof FSxServiceException);
assert(typeof InvalidRequest$ === "object");
assert(InvalidSourceKmsKey.prototype instanceof FSxServiceException);
assert(typeof InvalidSourceKmsKey$ === "object");
assert(MissingFileCacheConfiguration.prototype instanceof FSxServiceException);
assert(typeof MissingFileCacheConfiguration$ === "object");
assert(MissingFileSystemConfiguration.prototype instanceof FSxServiceException);
assert(typeof MissingFileSystemConfiguration$ === "object");
assert(MissingVolumeConfiguration.prototype instanceof FSxServiceException);
assert(typeof MissingVolumeConfiguration$ === "object");
assert(NotServiceResourceError.prototype instanceof FSxServiceException);
assert(typeof NotServiceResourceError$ === "object");
assert(ResourceDoesNotSupportTagging.prototype instanceof FSxServiceException);
assert(typeof ResourceDoesNotSupportTagging$ === "object");
assert(ResourceNotFound.prototype instanceof FSxServiceException);
assert(typeof ResourceNotFound$ === "object");
assert(S3AccessPointAttachmentNotFound.prototype instanceof FSxServiceException);
assert(typeof S3AccessPointAttachmentNotFound$ === "object");
assert(ServiceLimitExceeded.prototype instanceof FSxServiceException);
assert(typeof ServiceLimitExceeded$ === "object");
assert(SnapshotNotFound.prototype instanceof FSxServiceException);
assert(typeof SnapshotNotFound$ === "object");
assert(SourceBackupUnavailable.prototype instanceof FSxServiceException);
assert(typeof SourceBackupUnavailable$ === "object");
assert(StorageVirtualMachineNotFound.prototype instanceof FSxServiceException);
assert(typeof StorageVirtualMachineNotFound$ === "object");
assert(TooManyAccessPoints.prototype instanceof FSxServiceException);
assert(typeof TooManyAccessPoints$ === "object");
assert(UnsupportedOperation.prototype instanceof FSxServiceException);
assert(typeof UnsupportedOperation$ === "object");
assert(VolumeNotFound.prototype instanceof FSxServiceException);
assert(typeof VolumeNotFound$ === "object");
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
