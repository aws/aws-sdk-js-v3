import {
  ActivateGatewayCommand,
  ActiveDirectoryStatus,
  AddCacheCommand,
  AddTagsToResourceCommand,
  AddUploadBufferCommand,
  AddWorkingStorageCommand,
  AssignTapePoolCommand,
  AssociateFileSystemCommand,
  AttachVolumeCommand,
  AutomaticUpdatePolicy,
  AvailabilityMonitorTestStatus,
  CacheReportFilterName,
  CacheReportStatus,
  CancelArchivalCommand,
  CancelCacheReportCommand,
  CancelRetrievalCommand,
  CaseSensitivity,
  CreateCachediSCSIVolumeCommand,
  CreateNFSFileShareCommand,
  CreateSMBFileShareCommand,
  CreateSnapshotCommand,
  CreateSnapshotFromVolumeRecoveryPointCommand,
  CreateStorediSCSIVolumeCommand,
  CreateTapePoolCommand,
  CreateTapeWithBarcodeCommand,
  CreateTapesCommand,
  DeleteAutomaticTapeCreationPolicyCommand,
  DeleteBandwidthRateLimitCommand,
  DeleteCacheReportCommand,
  DeleteChapCredentialsCommand,
  DeleteFileShareCommand,
  DeleteGatewayCommand,
  DeleteSnapshotScheduleCommand,
  DeleteTapeArchiveCommand,
  DeleteTapeCommand,
  DeleteTapePoolCommand,
  DeleteVolumeCommand,
  DescribeAvailabilityMonitorTestCommand,
  DescribeBandwidthRateLimitCommand,
  DescribeBandwidthRateLimitScheduleCommand,
  DescribeCacheCommand,
  DescribeCacheReportCommand,
  DescribeCachediSCSIVolumesCommand,
  DescribeChapCredentialsCommand,
  DescribeFileSystemAssociationsCommand,
  DescribeGatewayInformationCommand,
  DescribeMaintenanceStartTimeCommand,
  DescribeNFSFileSharesCommand,
  DescribeSMBFileSharesCommand,
  DescribeSMBSettingsCommand,
  DescribeSnapshotScheduleCommand,
  DescribeStorediSCSIVolumesCommand,
  DescribeTapeArchivesCommand,
  DescribeTapeRecoveryPointsCommand,
  DescribeTapesCommand,
  DescribeUploadBufferCommand,
  DescribeVTLDevicesCommand,
  DescribeWorkingStorageCommand,
  DetachVolumeCommand,
  DisableGatewayCommand,
  DisassociateFileSystemCommand,
  EncryptionType,
  EvictFilesFailingUploadCommand,
  FileShareType,
  GatewayCapacity,
  HostEnvironment,
  JoinDomainCommand,
  ListAutomaticTapeCreationPoliciesCommand,
  ListCacheReportsCommand,
  ListFileSharesCommand,
  ListFileSystemAssociationsCommand,
  ListGatewaysCommand,
  ListLocalDisksCommand,
  ListTagsForResourceCommand,
  ListTapePoolsCommand,
  ListTapesCommand,
  ListVolumeInitiatorsCommand,
  ListVolumeRecoveryPointsCommand,
  ListVolumesCommand,
  NotifyWhenUploadedCommand,
  ObjectACL,
  PoolStatus,
  RefreshCacheCommand,
  RemoveTagsFromResourceCommand,
  ResetCacheCommand,
  RetentionLockType,
  RetrieveTapeArchiveCommand,
  RetrieveTapeRecoveryPointCommand,
  SMBSecurityStrategy,
  SetLocalConsolePasswordCommand,
  SetSMBGuestPasswordCommand,
  ShutdownGatewayCommand,
  StartAvailabilityMonitorTestCommand,
  StartCacheReportCommand,
  StartGatewayCommand,
  StorageGateway,
  StorageGatewayClient,
  StorageGatewayServiceException,
  TapeStorageClass,
  UpdateAutomaticTapeCreationPolicyCommand,
  UpdateBandwidthRateLimitCommand,
  UpdateBandwidthRateLimitScheduleCommand,
  UpdateChapCredentialsCommand,
  UpdateFileSystemAssociationCommand,
  UpdateGatewayInformationCommand,
  UpdateGatewaySoftwareNowCommand,
  UpdateMaintenanceStartTimeCommand,
  UpdateNFSFileShareCommand,
  UpdateSMBFileShareCommand,
  UpdateSMBFileShareVisibilityCommand,
  UpdateSMBLocalGroupsCommand,
  UpdateSMBSecurityStrategyCommand,
  UpdateSnapshotScheduleCommand,
  UpdateVTLDeviceTypeCommand,
  paginateDescribeTapeArchives,
  paginateDescribeTapeRecoveryPoints,
  paginateDescribeTapes,
  paginateDescribeVTLDevices,
  paginateListCacheReports,
  paginateListFileShares,
  paginateListFileSystemAssociations,
  paginateListGateways,
  paginateListTagsForResource,
  paginateListTapePools,
  paginateListTapes,
  paginateListVolumes,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof StorageGatewayClient === "function");
assert(typeof StorageGateway === "function");
// commands
assert(typeof ActivateGatewayCommand === "function");
assert(typeof AddCacheCommand === "function");
assert(typeof AddTagsToResourceCommand === "function");
assert(typeof AddUploadBufferCommand === "function");
assert(typeof AddWorkingStorageCommand === "function");
assert(typeof AssignTapePoolCommand === "function");
assert(typeof AssociateFileSystemCommand === "function");
assert(typeof AttachVolumeCommand === "function");
assert(typeof CancelArchivalCommand === "function");
assert(typeof CancelCacheReportCommand === "function");
assert(typeof CancelRetrievalCommand === "function");
assert(typeof CreateCachediSCSIVolumeCommand === "function");
assert(typeof CreateNFSFileShareCommand === "function");
assert(typeof CreateSMBFileShareCommand === "function");
assert(typeof CreateSnapshotCommand === "function");
assert(typeof CreateSnapshotFromVolumeRecoveryPointCommand === "function");
assert(typeof CreateStorediSCSIVolumeCommand === "function");
assert(typeof CreateTapePoolCommand === "function");
assert(typeof CreateTapesCommand === "function");
assert(typeof CreateTapeWithBarcodeCommand === "function");
assert(typeof DeleteAutomaticTapeCreationPolicyCommand === "function");
assert(typeof DeleteBandwidthRateLimitCommand === "function");
assert(typeof DeleteCacheReportCommand === "function");
assert(typeof DeleteChapCredentialsCommand === "function");
assert(typeof DeleteFileShareCommand === "function");
assert(typeof DeleteGatewayCommand === "function");
assert(typeof DeleteSnapshotScheduleCommand === "function");
assert(typeof DeleteTapeCommand === "function");
assert(typeof DeleteTapeArchiveCommand === "function");
assert(typeof DeleteTapePoolCommand === "function");
assert(typeof DeleteVolumeCommand === "function");
assert(typeof DescribeAvailabilityMonitorTestCommand === "function");
assert(typeof DescribeBandwidthRateLimitCommand === "function");
assert(typeof DescribeBandwidthRateLimitScheduleCommand === "function");
assert(typeof DescribeCacheCommand === "function");
assert(typeof DescribeCachediSCSIVolumesCommand === "function");
assert(typeof DescribeCacheReportCommand === "function");
assert(typeof DescribeChapCredentialsCommand === "function");
assert(typeof DescribeFileSystemAssociationsCommand === "function");
assert(typeof DescribeGatewayInformationCommand === "function");
assert(typeof DescribeMaintenanceStartTimeCommand === "function");
assert(typeof DescribeNFSFileSharesCommand === "function");
assert(typeof DescribeSMBFileSharesCommand === "function");
assert(typeof DescribeSMBSettingsCommand === "function");
assert(typeof DescribeSnapshotScheduleCommand === "function");
assert(typeof DescribeStorediSCSIVolumesCommand === "function");
assert(typeof DescribeTapeArchivesCommand === "function");
assert(typeof DescribeTapeRecoveryPointsCommand === "function");
assert(typeof DescribeTapesCommand === "function");
assert(typeof DescribeUploadBufferCommand === "function");
assert(typeof DescribeVTLDevicesCommand === "function");
assert(typeof DescribeWorkingStorageCommand === "function");
assert(typeof DetachVolumeCommand === "function");
assert(typeof DisableGatewayCommand === "function");
assert(typeof DisassociateFileSystemCommand === "function");
assert(typeof EvictFilesFailingUploadCommand === "function");
assert(typeof JoinDomainCommand === "function");
assert(typeof ListAutomaticTapeCreationPoliciesCommand === "function");
assert(typeof ListCacheReportsCommand === "function");
assert(typeof ListFileSharesCommand === "function");
assert(typeof ListFileSystemAssociationsCommand === "function");
assert(typeof ListGatewaysCommand === "function");
assert(typeof ListLocalDisksCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTapePoolsCommand === "function");
assert(typeof ListTapesCommand === "function");
assert(typeof ListVolumeInitiatorsCommand === "function");
assert(typeof ListVolumeRecoveryPointsCommand === "function");
assert(typeof ListVolumesCommand === "function");
assert(typeof NotifyWhenUploadedCommand === "function");
assert(typeof RefreshCacheCommand === "function");
assert(typeof RemoveTagsFromResourceCommand === "function");
assert(typeof ResetCacheCommand === "function");
assert(typeof RetrieveTapeArchiveCommand === "function");
assert(typeof RetrieveTapeRecoveryPointCommand === "function");
assert(typeof SetLocalConsolePasswordCommand === "function");
assert(typeof SetSMBGuestPasswordCommand === "function");
assert(typeof ShutdownGatewayCommand === "function");
assert(typeof StartAvailabilityMonitorTestCommand === "function");
assert(typeof StartCacheReportCommand === "function");
assert(typeof StartGatewayCommand === "function");
assert(typeof UpdateAutomaticTapeCreationPolicyCommand === "function");
assert(typeof UpdateBandwidthRateLimitCommand === "function");
assert(typeof UpdateBandwidthRateLimitScheduleCommand === "function");
assert(typeof UpdateChapCredentialsCommand === "function");
assert(typeof UpdateFileSystemAssociationCommand === "function");
assert(typeof UpdateGatewayInformationCommand === "function");
assert(typeof UpdateGatewaySoftwareNowCommand === "function");
assert(typeof UpdateMaintenanceStartTimeCommand === "function");
assert(typeof UpdateNFSFileShareCommand === "function");
assert(typeof UpdateSMBFileShareCommand === "function");
assert(typeof UpdateSMBFileShareVisibilityCommand === "function");
assert(typeof UpdateSMBLocalGroupsCommand === "function");
assert(typeof UpdateSMBSecurityStrategyCommand === "function");
assert(typeof UpdateSnapshotScheduleCommand === "function");
assert(typeof UpdateVTLDeviceTypeCommand === "function");
// enums
assert(typeof ActiveDirectoryStatus === "object");
assert(typeof AutomaticUpdatePolicy === "object");
assert(typeof AvailabilityMonitorTestStatus === "object");
assert(typeof CacheReportFilterName === "object");
assert(typeof CacheReportStatus === "object");
assert(typeof CaseSensitivity === "object");
assert(typeof EncryptionType === "object");
assert(typeof FileShareType === "object");
assert(typeof GatewayCapacity === "object");
assert(typeof HostEnvironment === "object");
assert(typeof ObjectACL === "object");
assert(typeof PoolStatus === "object");
assert(typeof RetentionLockType === "object");
assert(typeof SMBSecurityStrategy === "object");
assert(typeof TapeStorageClass === "object");
// errors
assert(StorageGatewayServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribeTapeArchives === "function");
assert(typeof paginateDescribeTapeRecoveryPoints === "function");
assert(typeof paginateDescribeTapes === "function");
assert(typeof paginateDescribeVTLDevices === "function");
assert(typeof paginateListCacheReports === "function");
assert(typeof paginateListFileShares === "function");
assert(typeof paginateListFileSystemAssociations === "function");
assert(typeof paginateListGateways === "function");
assert(typeof paginateListTagsForResource === "function");
assert(typeof paginateListTapePools === "function");
assert(typeof paginateListTapes === "function");
assert(typeof paginateListVolumes === "function");
console.log(`StorageGateway index test passed.`);
