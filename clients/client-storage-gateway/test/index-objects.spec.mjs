import {
  ActivateGateway$,
  ActivateGatewayCommand,
  ActivateGatewayInput$,
  ActivateGatewayOutput$,
  ActiveDirectoryStatus,
  AddCache$,
  AddCacheCommand,
  AddCacheInput$,
  AddCacheOutput$,
  AddTagsToResource$,
  AddTagsToResourceCommand,
  AddTagsToResourceInput$,
  AddTagsToResourceOutput$,
  AddUploadBuffer$,
  AddUploadBufferCommand,
  AddUploadBufferInput$,
  AddUploadBufferOutput$,
  AddWorkingStorage$,
  AddWorkingStorageCommand,
  AddWorkingStorageInput$,
  AddWorkingStorageOutput$,
  AssignTapePool$,
  AssignTapePoolCommand,
  AssignTapePoolInput$,
  AssignTapePoolOutput$,
  AssociateFileSystem$,
  AssociateFileSystemCommand,
  AssociateFileSystemInput$,
  AssociateFileSystemOutput$,
  AttachVolume$,
  AttachVolumeCommand,
  AttachVolumeInput$,
  AttachVolumeOutput$,
  AutomaticTapeCreationPolicyInfo$,
  AutomaticTapeCreationRule$,
  AutomaticUpdatePolicy,
  AvailabilityMonitorTestStatus,
  BandwidthRateLimitInterval$,
  CacheAttributes$,
  CacheReportFilter$,
  CacheReportFilterName,
  CacheReportInfo$,
  CacheReportStatus,
  CachediSCSIVolume$,
  CancelArchival$,
  CancelArchivalCommand,
  CancelArchivalInput$,
  CancelArchivalOutput$,
  CancelCacheReport$,
  CancelCacheReportCommand,
  CancelCacheReportInput$,
  CancelCacheReportOutput$,
  CancelRetrieval$,
  CancelRetrievalCommand,
  CancelRetrievalInput$,
  CancelRetrievalOutput$,
  CaseSensitivity,
  ChapInfo$,
  CreateCachediSCSIVolume$,
  CreateCachediSCSIVolumeCommand,
  CreateCachediSCSIVolumeInput$,
  CreateCachediSCSIVolumeOutput$,
  CreateNFSFileShare$,
  CreateNFSFileShareCommand,
  CreateNFSFileShareInput$,
  CreateNFSFileShareOutput$,
  CreateSMBFileShare$,
  CreateSMBFileShareCommand,
  CreateSMBFileShareInput$,
  CreateSMBFileShareOutput$,
  CreateSnapshot$,
  CreateSnapshotCommand,
  CreateSnapshotFromVolumeRecoveryPoint$,
  CreateSnapshotFromVolumeRecoveryPointCommand,
  CreateSnapshotFromVolumeRecoveryPointInput$,
  CreateSnapshotFromVolumeRecoveryPointOutput$,
  CreateSnapshotInput$,
  CreateSnapshotOutput$,
  CreateStorediSCSIVolume$,
  CreateStorediSCSIVolumeCommand,
  CreateStorediSCSIVolumeInput$,
  CreateStorediSCSIVolumeOutput$,
  CreateTapePool$,
  CreateTapePoolCommand,
  CreateTapePoolInput$,
  CreateTapePoolOutput$,
  CreateTapeWithBarcode$,
  CreateTapeWithBarcodeCommand,
  CreateTapeWithBarcodeInput$,
  CreateTapeWithBarcodeOutput$,
  CreateTapes$,
  CreateTapesCommand,
  CreateTapesInput$,
  CreateTapesOutput$,
  DeleteAutomaticTapeCreationPolicy$,
  DeleteAutomaticTapeCreationPolicyCommand,
  DeleteAutomaticTapeCreationPolicyInput$,
  DeleteAutomaticTapeCreationPolicyOutput$,
  DeleteBandwidthRateLimit$,
  DeleteBandwidthRateLimitCommand,
  DeleteBandwidthRateLimitInput$,
  DeleteBandwidthRateLimitOutput$,
  DeleteCacheReport$,
  DeleteCacheReportCommand,
  DeleteCacheReportInput$,
  DeleteCacheReportOutput$,
  DeleteChapCredentials$,
  DeleteChapCredentialsCommand,
  DeleteChapCredentialsInput$,
  DeleteChapCredentialsOutput$,
  DeleteFileShare$,
  DeleteFileShareCommand,
  DeleteFileShareInput$,
  DeleteFileShareOutput$,
  DeleteGateway$,
  DeleteGatewayCommand,
  DeleteGatewayInput$,
  DeleteGatewayOutput$,
  DeleteSnapshotSchedule$,
  DeleteSnapshotScheduleCommand,
  DeleteSnapshotScheduleInput$,
  DeleteSnapshotScheduleOutput$,
  DeleteTape$,
  DeleteTapeArchive$,
  DeleteTapeArchiveCommand,
  DeleteTapeArchiveInput$,
  DeleteTapeArchiveOutput$,
  DeleteTapeCommand,
  DeleteTapeInput$,
  DeleteTapeOutput$,
  DeleteTapePool$,
  DeleteTapePoolCommand,
  DeleteTapePoolInput$,
  DeleteTapePoolOutput$,
  DeleteVolume$,
  DeleteVolumeCommand,
  DeleteVolumeInput$,
  DeleteVolumeOutput$,
  DescribeAvailabilityMonitorTest$,
  DescribeAvailabilityMonitorTestCommand,
  DescribeAvailabilityMonitorTestInput$,
  DescribeAvailabilityMonitorTestOutput$,
  DescribeBandwidthRateLimit$,
  DescribeBandwidthRateLimitCommand,
  DescribeBandwidthRateLimitInput$,
  DescribeBandwidthRateLimitOutput$,
  DescribeBandwidthRateLimitSchedule$,
  DescribeBandwidthRateLimitScheduleCommand,
  DescribeBandwidthRateLimitScheduleInput$,
  DescribeBandwidthRateLimitScheduleOutput$,
  DescribeCache$,
  DescribeCacheCommand,
  DescribeCacheInput$,
  DescribeCacheOutput$,
  DescribeCacheReport$,
  DescribeCacheReportCommand,
  DescribeCacheReportInput$,
  DescribeCacheReportOutput$,
  DescribeCachediSCSIVolumes$,
  DescribeCachediSCSIVolumesCommand,
  DescribeCachediSCSIVolumesInput$,
  DescribeCachediSCSIVolumesOutput$,
  DescribeChapCredentials$,
  DescribeChapCredentialsCommand,
  DescribeChapCredentialsInput$,
  DescribeChapCredentialsOutput$,
  DescribeFileSystemAssociations$,
  DescribeFileSystemAssociationsCommand,
  DescribeFileSystemAssociationsInput$,
  DescribeFileSystemAssociationsOutput$,
  DescribeGatewayInformation$,
  DescribeGatewayInformationCommand,
  DescribeGatewayInformationInput$,
  DescribeGatewayInformationOutput$,
  DescribeMaintenanceStartTime$,
  DescribeMaintenanceStartTimeCommand,
  DescribeMaintenanceStartTimeInput$,
  DescribeMaintenanceStartTimeOutput$,
  DescribeNFSFileShares$,
  DescribeNFSFileSharesCommand,
  DescribeNFSFileSharesInput$,
  DescribeNFSFileSharesOutput$,
  DescribeSMBFileShares$,
  DescribeSMBFileSharesCommand,
  DescribeSMBFileSharesInput$,
  DescribeSMBFileSharesOutput$,
  DescribeSMBSettings$,
  DescribeSMBSettingsCommand,
  DescribeSMBSettingsInput$,
  DescribeSMBSettingsOutput$,
  DescribeSnapshotSchedule$,
  DescribeSnapshotScheduleCommand,
  DescribeSnapshotScheduleInput$,
  DescribeSnapshotScheduleOutput$,
  DescribeStorediSCSIVolumes$,
  DescribeStorediSCSIVolumesCommand,
  DescribeStorediSCSIVolumesInput$,
  DescribeStorediSCSIVolumesOutput$,
  DescribeTapeArchives$,
  DescribeTapeArchivesCommand,
  DescribeTapeArchivesInput$,
  DescribeTapeArchivesOutput$,
  DescribeTapeRecoveryPoints$,
  DescribeTapeRecoveryPointsCommand,
  DescribeTapeRecoveryPointsInput$,
  DescribeTapeRecoveryPointsOutput$,
  DescribeTapes$,
  DescribeTapesCommand,
  DescribeTapesInput$,
  DescribeTapesOutput$,
  DescribeUploadBuffer$,
  DescribeUploadBufferCommand,
  DescribeUploadBufferInput$,
  DescribeUploadBufferOutput$,
  DescribeVTLDevices$,
  DescribeVTLDevicesCommand,
  DescribeVTLDevicesInput$,
  DescribeVTLDevicesOutput$,
  DescribeWorkingStorage$,
  DescribeWorkingStorageCommand,
  DescribeWorkingStorageInput$,
  DescribeWorkingStorageOutput$,
  DetachVolume$,
  DetachVolumeCommand,
  DetachVolumeInput$,
  DetachVolumeOutput$,
  DeviceiSCSIAttributes$,
  DisableGateway$,
  DisableGatewayCommand,
  DisableGatewayInput$,
  DisableGatewayOutput$,
  DisassociateFileSystem$,
  DisassociateFileSystemCommand,
  DisassociateFileSystemInput$,
  DisassociateFileSystemOutput$,
  Disk$,
  EncryptionType,
  EndpointNetworkConfiguration$,
  ErrorCode,
  EvictFilesFailingUpload$,
  EvictFilesFailingUploadCommand,
  EvictFilesFailingUploadInput$,
  EvictFilesFailingUploadOutput$,
  FileShareInfo$,
  FileShareType,
  FileSystemAssociationInfo$,
  FileSystemAssociationStatusDetail$,
  FileSystemAssociationSummary$,
  GatewayCapacity,
  GatewayInfo$,
  HostEnvironment,
  InternalServerError,
  InternalServerError$,
  InvalidGatewayRequestException,
  InvalidGatewayRequestException$,
  JoinDomain$,
  JoinDomainCommand,
  JoinDomainInput$,
  JoinDomainOutput$,
  ListAutomaticTapeCreationPolicies$,
  ListAutomaticTapeCreationPoliciesCommand,
  ListAutomaticTapeCreationPoliciesInput$,
  ListAutomaticTapeCreationPoliciesOutput$,
  ListCacheReports$,
  ListCacheReportsCommand,
  ListCacheReportsInput$,
  ListCacheReportsOutput$,
  ListFileShares$,
  ListFileSharesCommand,
  ListFileSharesInput$,
  ListFileSharesOutput$,
  ListFileSystemAssociations$,
  ListFileSystemAssociationsCommand,
  ListFileSystemAssociationsInput$,
  ListFileSystemAssociationsOutput$,
  ListGateways$,
  ListGatewaysCommand,
  ListGatewaysInput$,
  ListGatewaysOutput$,
  ListLocalDisks$,
  ListLocalDisksCommand,
  ListLocalDisksInput$,
  ListLocalDisksOutput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceInput$,
  ListTagsForResourceOutput$,
  ListTapePools$,
  ListTapePoolsCommand,
  ListTapePoolsInput$,
  ListTapePoolsOutput$,
  ListTapes$,
  ListTapesCommand,
  ListTapesInput$,
  ListTapesOutput$,
  ListVolumeInitiators$,
  ListVolumeInitiatorsCommand,
  ListVolumeInitiatorsInput$,
  ListVolumeInitiatorsOutput$,
  ListVolumeRecoveryPoints$,
  ListVolumeRecoveryPointsCommand,
  ListVolumeRecoveryPointsInput$,
  ListVolumeRecoveryPointsOutput$,
  ListVolumes$,
  ListVolumesCommand,
  ListVolumesInput$,
  ListVolumesOutput$,
  NFSFileShareDefaults$,
  NFSFileShareInfo$,
  NetworkInterface$,
  NotifyWhenUploaded$,
  NotifyWhenUploadedCommand,
  NotifyWhenUploadedInput$,
  NotifyWhenUploadedOutput$,
  ObjectACL,
  PoolInfo$,
  PoolStatus,
  RefreshCache$,
  RefreshCacheCommand,
  RefreshCacheInput$,
  RefreshCacheOutput$,
  RemoveTagsFromResource$,
  RemoveTagsFromResourceCommand,
  RemoveTagsFromResourceInput$,
  RemoveTagsFromResourceOutput$,
  ResetCache$,
  ResetCacheCommand,
  ResetCacheInput$,
  ResetCacheOutput$,
  RetentionLockType,
  RetrieveTapeArchive$,
  RetrieveTapeArchiveCommand,
  RetrieveTapeArchiveInput$,
  RetrieveTapeArchiveOutput$,
  RetrieveTapeRecoveryPoint$,
  RetrieveTapeRecoveryPointCommand,
  RetrieveTapeRecoveryPointInput$,
  RetrieveTapeRecoveryPointOutput$,
  SMBFileShareInfo$,
  SMBLocalGroups$,
  SMBSecurityStrategy,
  ServiceUnavailableError,
  ServiceUnavailableError$,
  SetLocalConsolePassword$,
  SetLocalConsolePasswordCommand,
  SetLocalConsolePasswordInput$,
  SetLocalConsolePasswordOutput$,
  SetSMBGuestPassword$,
  SetSMBGuestPasswordCommand,
  SetSMBGuestPasswordInput$,
  SetSMBGuestPasswordOutput$,
  ShutdownGateway$,
  ShutdownGatewayCommand,
  ShutdownGatewayInput$,
  ShutdownGatewayOutput$,
  SoftwareUpdatePreferences$,
  StartAvailabilityMonitorTest$,
  StartAvailabilityMonitorTestCommand,
  StartAvailabilityMonitorTestInput$,
  StartAvailabilityMonitorTestOutput$,
  StartCacheReport$,
  StartCacheReportCommand,
  StartCacheReportInput$,
  StartCacheReportOutput$,
  StartGateway$,
  StartGatewayCommand,
  StartGatewayInput$,
  StartGatewayOutput$,
  StorageGateway,
  StorageGatewayClient,
  StorageGatewayError$,
  StorageGatewayServiceException,
  StorediSCSIVolume$,
  Tag$,
  Tape$,
  TapeArchive$,
  TapeInfo$,
  TapeRecoveryPointInfo$,
  TapeStorageClass,
  UpdateAutomaticTapeCreationPolicy$,
  UpdateAutomaticTapeCreationPolicyCommand,
  UpdateAutomaticTapeCreationPolicyInput$,
  UpdateAutomaticTapeCreationPolicyOutput$,
  UpdateBandwidthRateLimit$,
  UpdateBandwidthRateLimitCommand,
  UpdateBandwidthRateLimitInput$,
  UpdateBandwidthRateLimitOutput$,
  UpdateBandwidthRateLimitSchedule$,
  UpdateBandwidthRateLimitScheduleCommand,
  UpdateBandwidthRateLimitScheduleInput$,
  UpdateBandwidthRateLimitScheduleOutput$,
  UpdateChapCredentials$,
  UpdateChapCredentialsCommand,
  UpdateChapCredentialsInput$,
  UpdateChapCredentialsOutput$,
  UpdateFileSystemAssociation$,
  UpdateFileSystemAssociationCommand,
  UpdateFileSystemAssociationInput$,
  UpdateFileSystemAssociationOutput$,
  UpdateGatewayInformation$,
  UpdateGatewayInformationCommand,
  UpdateGatewayInformationInput$,
  UpdateGatewayInformationOutput$,
  UpdateGatewaySoftwareNow$,
  UpdateGatewaySoftwareNowCommand,
  UpdateGatewaySoftwareNowInput$,
  UpdateGatewaySoftwareNowOutput$,
  UpdateMaintenanceStartTime$,
  UpdateMaintenanceStartTimeCommand,
  UpdateMaintenanceStartTimeInput$,
  UpdateMaintenanceStartTimeOutput$,
  UpdateNFSFileShare$,
  UpdateNFSFileShareCommand,
  UpdateNFSFileShareInput$,
  UpdateNFSFileShareOutput$,
  UpdateSMBFileShare$,
  UpdateSMBFileShareCommand,
  UpdateSMBFileShareInput$,
  UpdateSMBFileShareOutput$,
  UpdateSMBFileShareVisibility$,
  UpdateSMBFileShareVisibilityCommand,
  UpdateSMBFileShareVisibilityInput$,
  UpdateSMBFileShareVisibilityOutput$,
  UpdateSMBLocalGroups$,
  UpdateSMBLocalGroupsCommand,
  UpdateSMBLocalGroupsInput$,
  UpdateSMBLocalGroupsOutput$,
  UpdateSMBSecurityStrategy$,
  UpdateSMBSecurityStrategyCommand,
  UpdateSMBSecurityStrategyInput$,
  UpdateSMBSecurityStrategyOutput$,
  UpdateSnapshotSchedule$,
  UpdateSnapshotScheduleCommand,
  UpdateSnapshotScheduleInput$,
  UpdateSnapshotScheduleOutput$,
  UpdateVTLDeviceType$,
  UpdateVTLDeviceTypeCommand,
  UpdateVTLDeviceTypeInput$,
  UpdateVTLDeviceTypeOutput$,
  VTLDevice$,
  VolumeInfo$,
  VolumeRecoveryPointInfo$,
  VolumeiSCSIAttributes$,
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
assert(typeof ActivateGateway$ === "object");
assert(typeof AddCacheCommand === "function");
assert(typeof AddCache$ === "object");
assert(typeof AddTagsToResourceCommand === "function");
assert(typeof AddTagsToResource$ === "object");
assert(typeof AddUploadBufferCommand === "function");
assert(typeof AddUploadBuffer$ === "object");
assert(typeof AddWorkingStorageCommand === "function");
assert(typeof AddWorkingStorage$ === "object");
assert(typeof AssignTapePoolCommand === "function");
assert(typeof AssignTapePool$ === "object");
assert(typeof AssociateFileSystemCommand === "function");
assert(typeof AssociateFileSystem$ === "object");
assert(typeof AttachVolumeCommand === "function");
assert(typeof AttachVolume$ === "object");
assert(typeof CancelArchivalCommand === "function");
assert(typeof CancelArchival$ === "object");
assert(typeof CancelCacheReportCommand === "function");
assert(typeof CancelCacheReport$ === "object");
assert(typeof CancelRetrievalCommand === "function");
assert(typeof CancelRetrieval$ === "object");
assert(typeof CreateCachediSCSIVolumeCommand === "function");
assert(typeof CreateCachediSCSIVolume$ === "object");
assert(typeof CreateNFSFileShareCommand === "function");
assert(typeof CreateNFSFileShare$ === "object");
assert(typeof CreateSMBFileShareCommand === "function");
assert(typeof CreateSMBFileShare$ === "object");
assert(typeof CreateSnapshotCommand === "function");
assert(typeof CreateSnapshot$ === "object");
assert(typeof CreateSnapshotFromVolumeRecoveryPointCommand === "function");
assert(typeof CreateSnapshotFromVolumeRecoveryPoint$ === "object");
assert(typeof CreateStorediSCSIVolumeCommand === "function");
assert(typeof CreateStorediSCSIVolume$ === "object");
assert(typeof CreateTapePoolCommand === "function");
assert(typeof CreateTapePool$ === "object");
assert(typeof CreateTapesCommand === "function");
assert(typeof CreateTapes$ === "object");
assert(typeof CreateTapeWithBarcodeCommand === "function");
assert(typeof CreateTapeWithBarcode$ === "object");
assert(typeof DeleteAutomaticTapeCreationPolicyCommand === "function");
assert(typeof DeleteAutomaticTapeCreationPolicy$ === "object");
assert(typeof DeleteBandwidthRateLimitCommand === "function");
assert(typeof DeleteBandwidthRateLimit$ === "object");
assert(typeof DeleteCacheReportCommand === "function");
assert(typeof DeleteCacheReport$ === "object");
assert(typeof DeleteChapCredentialsCommand === "function");
assert(typeof DeleteChapCredentials$ === "object");
assert(typeof DeleteFileShareCommand === "function");
assert(typeof DeleteFileShare$ === "object");
assert(typeof DeleteGatewayCommand === "function");
assert(typeof DeleteGateway$ === "object");
assert(typeof DeleteSnapshotScheduleCommand === "function");
assert(typeof DeleteSnapshotSchedule$ === "object");
assert(typeof DeleteTapeCommand === "function");
assert(typeof DeleteTape$ === "object");
assert(typeof DeleteTapeArchiveCommand === "function");
assert(typeof DeleteTapeArchive$ === "object");
assert(typeof DeleteTapePoolCommand === "function");
assert(typeof DeleteTapePool$ === "object");
assert(typeof DeleteVolumeCommand === "function");
assert(typeof DeleteVolume$ === "object");
assert(typeof DescribeAvailabilityMonitorTestCommand === "function");
assert(typeof DescribeAvailabilityMonitorTest$ === "object");
assert(typeof DescribeBandwidthRateLimitCommand === "function");
assert(typeof DescribeBandwidthRateLimit$ === "object");
assert(typeof DescribeBandwidthRateLimitScheduleCommand === "function");
assert(typeof DescribeBandwidthRateLimitSchedule$ === "object");
assert(typeof DescribeCacheCommand === "function");
assert(typeof DescribeCache$ === "object");
assert(typeof DescribeCachediSCSIVolumesCommand === "function");
assert(typeof DescribeCachediSCSIVolumes$ === "object");
assert(typeof DescribeCacheReportCommand === "function");
assert(typeof DescribeCacheReport$ === "object");
assert(typeof DescribeChapCredentialsCommand === "function");
assert(typeof DescribeChapCredentials$ === "object");
assert(typeof DescribeFileSystemAssociationsCommand === "function");
assert(typeof DescribeFileSystemAssociations$ === "object");
assert(typeof DescribeGatewayInformationCommand === "function");
assert(typeof DescribeGatewayInformation$ === "object");
assert(typeof DescribeMaintenanceStartTimeCommand === "function");
assert(typeof DescribeMaintenanceStartTime$ === "object");
assert(typeof DescribeNFSFileSharesCommand === "function");
assert(typeof DescribeNFSFileShares$ === "object");
assert(typeof DescribeSMBFileSharesCommand === "function");
assert(typeof DescribeSMBFileShares$ === "object");
assert(typeof DescribeSMBSettingsCommand === "function");
assert(typeof DescribeSMBSettings$ === "object");
assert(typeof DescribeSnapshotScheduleCommand === "function");
assert(typeof DescribeSnapshotSchedule$ === "object");
assert(typeof DescribeStorediSCSIVolumesCommand === "function");
assert(typeof DescribeStorediSCSIVolumes$ === "object");
assert(typeof DescribeTapeArchivesCommand === "function");
assert(typeof DescribeTapeArchives$ === "object");
assert(typeof DescribeTapeRecoveryPointsCommand === "function");
assert(typeof DescribeTapeRecoveryPoints$ === "object");
assert(typeof DescribeTapesCommand === "function");
assert(typeof DescribeTapes$ === "object");
assert(typeof DescribeUploadBufferCommand === "function");
assert(typeof DescribeUploadBuffer$ === "object");
assert(typeof DescribeVTLDevicesCommand === "function");
assert(typeof DescribeVTLDevices$ === "object");
assert(typeof DescribeWorkingStorageCommand === "function");
assert(typeof DescribeWorkingStorage$ === "object");
assert(typeof DetachVolumeCommand === "function");
assert(typeof DetachVolume$ === "object");
assert(typeof DisableGatewayCommand === "function");
assert(typeof DisableGateway$ === "object");
assert(typeof DisassociateFileSystemCommand === "function");
assert(typeof DisassociateFileSystem$ === "object");
assert(typeof EvictFilesFailingUploadCommand === "function");
assert(typeof EvictFilesFailingUpload$ === "object");
assert(typeof JoinDomainCommand === "function");
assert(typeof JoinDomain$ === "object");
assert(typeof ListAutomaticTapeCreationPoliciesCommand === "function");
assert(typeof ListAutomaticTapeCreationPolicies$ === "object");
assert(typeof ListCacheReportsCommand === "function");
assert(typeof ListCacheReports$ === "object");
assert(typeof ListFileSharesCommand === "function");
assert(typeof ListFileShares$ === "object");
assert(typeof ListFileSystemAssociationsCommand === "function");
assert(typeof ListFileSystemAssociations$ === "object");
assert(typeof ListGatewaysCommand === "function");
assert(typeof ListGateways$ === "object");
assert(typeof ListLocalDisksCommand === "function");
assert(typeof ListLocalDisks$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListTapePoolsCommand === "function");
assert(typeof ListTapePools$ === "object");
assert(typeof ListTapesCommand === "function");
assert(typeof ListTapes$ === "object");
assert(typeof ListVolumeInitiatorsCommand === "function");
assert(typeof ListVolumeInitiators$ === "object");
assert(typeof ListVolumeRecoveryPointsCommand === "function");
assert(typeof ListVolumeRecoveryPoints$ === "object");
assert(typeof ListVolumesCommand === "function");
assert(typeof ListVolumes$ === "object");
assert(typeof NotifyWhenUploadedCommand === "function");
assert(typeof NotifyWhenUploaded$ === "object");
assert(typeof RefreshCacheCommand === "function");
assert(typeof RefreshCache$ === "object");
assert(typeof RemoveTagsFromResourceCommand === "function");
assert(typeof RemoveTagsFromResource$ === "object");
assert(typeof ResetCacheCommand === "function");
assert(typeof ResetCache$ === "object");
assert(typeof RetrieveTapeArchiveCommand === "function");
assert(typeof RetrieveTapeArchive$ === "object");
assert(typeof RetrieveTapeRecoveryPointCommand === "function");
assert(typeof RetrieveTapeRecoveryPoint$ === "object");
assert(typeof SetLocalConsolePasswordCommand === "function");
assert(typeof SetLocalConsolePassword$ === "object");
assert(typeof SetSMBGuestPasswordCommand === "function");
assert(typeof SetSMBGuestPassword$ === "object");
assert(typeof ShutdownGatewayCommand === "function");
assert(typeof ShutdownGateway$ === "object");
assert(typeof StartAvailabilityMonitorTestCommand === "function");
assert(typeof StartAvailabilityMonitorTest$ === "object");
assert(typeof StartCacheReportCommand === "function");
assert(typeof StartCacheReport$ === "object");
assert(typeof StartGatewayCommand === "function");
assert(typeof StartGateway$ === "object");
assert(typeof UpdateAutomaticTapeCreationPolicyCommand === "function");
assert(typeof UpdateAutomaticTapeCreationPolicy$ === "object");
assert(typeof UpdateBandwidthRateLimitCommand === "function");
assert(typeof UpdateBandwidthRateLimit$ === "object");
assert(typeof UpdateBandwidthRateLimitScheduleCommand === "function");
assert(typeof UpdateBandwidthRateLimitSchedule$ === "object");
assert(typeof UpdateChapCredentialsCommand === "function");
assert(typeof UpdateChapCredentials$ === "object");
assert(typeof UpdateFileSystemAssociationCommand === "function");
assert(typeof UpdateFileSystemAssociation$ === "object");
assert(typeof UpdateGatewayInformationCommand === "function");
assert(typeof UpdateGatewayInformation$ === "object");
assert(typeof UpdateGatewaySoftwareNowCommand === "function");
assert(typeof UpdateGatewaySoftwareNow$ === "object");
assert(typeof UpdateMaintenanceStartTimeCommand === "function");
assert(typeof UpdateMaintenanceStartTime$ === "object");
assert(typeof UpdateNFSFileShareCommand === "function");
assert(typeof UpdateNFSFileShare$ === "object");
assert(typeof UpdateSMBFileShareCommand === "function");
assert(typeof UpdateSMBFileShare$ === "object");
assert(typeof UpdateSMBFileShareVisibilityCommand === "function");
assert(typeof UpdateSMBFileShareVisibility$ === "object");
assert(typeof UpdateSMBLocalGroupsCommand === "function");
assert(typeof UpdateSMBLocalGroups$ === "object");
assert(typeof UpdateSMBSecurityStrategyCommand === "function");
assert(typeof UpdateSMBSecurityStrategy$ === "object");
assert(typeof UpdateSnapshotScheduleCommand === "function");
assert(typeof UpdateSnapshotSchedule$ === "object");
assert(typeof UpdateVTLDeviceTypeCommand === "function");
assert(typeof UpdateVTLDeviceType$ === "object");
// structural schemas
assert(typeof ActivateGatewayInput$ === "object");
assert(typeof ActivateGatewayOutput$ === "object");
assert(typeof AddCacheInput$ === "object");
assert(typeof AddCacheOutput$ === "object");
assert(typeof AddTagsToResourceInput$ === "object");
assert(typeof AddTagsToResourceOutput$ === "object");
assert(typeof AddUploadBufferInput$ === "object");
assert(typeof AddUploadBufferOutput$ === "object");
assert(typeof AddWorkingStorageInput$ === "object");
assert(typeof AddWorkingStorageOutput$ === "object");
assert(typeof AssignTapePoolInput$ === "object");
assert(typeof AssignTapePoolOutput$ === "object");
assert(typeof AssociateFileSystemInput$ === "object");
assert(typeof AssociateFileSystemOutput$ === "object");
assert(typeof AttachVolumeInput$ === "object");
assert(typeof AttachVolumeOutput$ === "object");
assert(typeof AutomaticTapeCreationPolicyInfo$ === "object");
assert(typeof AutomaticTapeCreationRule$ === "object");
assert(typeof BandwidthRateLimitInterval$ === "object");
assert(typeof CacheAttributes$ === "object");
assert(typeof CachediSCSIVolume$ === "object");
assert(typeof CacheReportFilter$ === "object");
assert(typeof CacheReportInfo$ === "object");
assert(typeof CancelArchivalInput$ === "object");
assert(typeof CancelArchivalOutput$ === "object");
assert(typeof CancelCacheReportInput$ === "object");
assert(typeof CancelCacheReportOutput$ === "object");
assert(typeof CancelRetrievalInput$ === "object");
assert(typeof CancelRetrievalOutput$ === "object");
assert(typeof ChapInfo$ === "object");
assert(typeof CreateCachediSCSIVolumeInput$ === "object");
assert(typeof CreateCachediSCSIVolumeOutput$ === "object");
assert(typeof CreateNFSFileShareInput$ === "object");
assert(typeof CreateNFSFileShareOutput$ === "object");
assert(typeof CreateSMBFileShareInput$ === "object");
assert(typeof CreateSMBFileShareOutput$ === "object");
assert(typeof CreateSnapshotFromVolumeRecoveryPointInput$ === "object");
assert(typeof CreateSnapshotFromVolumeRecoveryPointOutput$ === "object");
assert(typeof CreateSnapshotInput$ === "object");
assert(typeof CreateSnapshotOutput$ === "object");
assert(typeof CreateStorediSCSIVolumeInput$ === "object");
assert(typeof CreateStorediSCSIVolumeOutput$ === "object");
assert(typeof CreateTapePoolInput$ === "object");
assert(typeof CreateTapePoolOutput$ === "object");
assert(typeof CreateTapesInput$ === "object");
assert(typeof CreateTapesOutput$ === "object");
assert(typeof CreateTapeWithBarcodeInput$ === "object");
assert(typeof CreateTapeWithBarcodeOutput$ === "object");
assert(typeof DeleteAutomaticTapeCreationPolicyInput$ === "object");
assert(typeof DeleteAutomaticTapeCreationPolicyOutput$ === "object");
assert(typeof DeleteBandwidthRateLimitInput$ === "object");
assert(typeof DeleteBandwidthRateLimitOutput$ === "object");
assert(typeof DeleteCacheReportInput$ === "object");
assert(typeof DeleteCacheReportOutput$ === "object");
assert(typeof DeleteChapCredentialsInput$ === "object");
assert(typeof DeleteChapCredentialsOutput$ === "object");
assert(typeof DeleteFileShareInput$ === "object");
assert(typeof DeleteFileShareOutput$ === "object");
assert(typeof DeleteGatewayInput$ === "object");
assert(typeof DeleteGatewayOutput$ === "object");
assert(typeof DeleteSnapshotScheduleInput$ === "object");
assert(typeof DeleteSnapshotScheduleOutput$ === "object");
assert(typeof DeleteTapeArchiveInput$ === "object");
assert(typeof DeleteTapeArchiveOutput$ === "object");
assert(typeof DeleteTapeInput$ === "object");
assert(typeof DeleteTapeOutput$ === "object");
assert(typeof DeleteTapePoolInput$ === "object");
assert(typeof DeleteTapePoolOutput$ === "object");
assert(typeof DeleteVolumeInput$ === "object");
assert(typeof DeleteVolumeOutput$ === "object");
assert(typeof DescribeAvailabilityMonitorTestInput$ === "object");
assert(typeof DescribeAvailabilityMonitorTestOutput$ === "object");
assert(typeof DescribeBandwidthRateLimitInput$ === "object");
assert(typeof DescribeBandwidthRateLimitOutput$ === "object");
assert(typeof DescribeBandwidthRateLimitScheduleInput$ === "object");
assert(typeof DescribeBandwidthRateLimitScheduleOutput$ === "object");
assert(typeof DescribeCachediSCSIVolumesInput$ === "object");
assert(typeof DescribeCachediSCSIVolumesOutput$ === "object");
assert(typeof DescribeCacheInput$ === "object");
assert(typeof DescribeCacheOutput$ === "object");
assert(typeof DescribeCacheReportInput$ === "object");
assert(typeof DescribeCacheReportOutput$ === "object");
assert(typeof DescribeChapCredentialsInput$ === "object");
assert(typeof DescribeChapCredentialsOutput$ === "object");
assert(typeof DescribeFileSystemAssociationsInput$ === "object");
assert(typeof DescribeFileSystemAssociationsOutput$ === "object");
assert(typeof DescribeGatewayInformationInput$ === "object");
assert(typeof DescribeGatewayInformationOutput$ === "object");
assert(typeof DescribeMaintenanceStartTimeInput$ === "object");
assert(typeof DescribeMaintenanceStartTimeOutput$ === "object");
assert(typeof DescribeNFSFileSharesInput$ === "object");
assert(typeof DescribeNFSFileSharesOutput$ === "object");
assert(typeof DescribeSMBFileSharesInput$ === "object");
assert(typeof DescribeSMBFileSharesOutput$ === "object");
assert(typeof DescribeSMBSettingsInput$ === "object");
assert(typeof DescribeSMBSettingsOutput$ === "object");
assert(typeof DescribeSnapshotScheduleInput$ === "object");
assert(typeof DescribeSnapshotScheduleOutput$ === "object");
assert(typeof DescribeStorediSCSIVolumesInput$ === "object");
assert(typeof DescribeStorediSCSIVolumesOutput$ === "object");
assert(typeof DescribeTapeArchivesInput$ === "object");
assert(typeof DescribeTapeArchivesOutput$ === "object");
assert(typeof DescribeTapeRecoveryPointsInput$ === "object");
assert(typeof DescribeTapeRecoveryPointsOutput$ === "object");
assert(typeof DescribeTapesInput$ === "object");
assert(typeof DescribeTapesOutput$ === "object");
assert(typeof DescribeUploadBufferInput$ === "object");
assert(typeof DescribeUploadBufferOutput$ === "object");
assert(typeof DescribeVTLDevicesInput$ === "object");
assert(typeof DescribeVTLDevicesOutput$ === "object");
assert(typeof DescribeWorkingStorageInput$ === "object");
assert(typeof DescribeWorkingStorageOutput$ === "object");
assert(typeof DetachVolumeInput$ === "object");
assert(typeof DetachVolumeOutput$ === "object");
assert(typeof DeviceiSCSIAttributes$ === "object");
assert(typeof DisableGatewayInput$ === "object");
assert(typeof DisableGatewayOutput$ === "object");
assert(typeof DisassociateFileSystemInput$ === "object");
assert(typeof DisassociateFileSystemOutput$ === "object");
assert(typeof Disk$ === "object");
assert(typeof EndpointNetworkConfiguration$ === "object");
assert(typeof EvictFilesFailingUploadInput$ === "object");
assert(typeof EvictFilesFailingUploadOutput$ === "object");
assert(typeof FileShareInfo$ === "object");
assert(typeof FileSystemAssociationInfo$ === "object");
assert(typeof FileSystemAssociationStatusDetail$ === "object");
assert(typeof FileSystemAssociationSummary$ === "object");
assert(typeof GatewayInfo$ === "object");
assert(typeof JoinDomainInput$ === "object");
assert(typeof JoinDomainOutput$ === "object");
assert(typeof ListAutomaticTapeCreationPoliciesInput$ === "object");
assert(typeof ListAutomaticTapeCreationPoliciesOutput$ === "object");
assert(typeof ListCacheReportsInput$ === "object");
assert(typeof ListCacheReportsOutput$ === "object");
assert(typeof ListFileSharesInput$ === "object");
assert(typeof ListFileSharesOutput$ === "object");
assert(typeof ListFileSystemAssociationsInput$ === "object");
assert(typeof ListFileSystemAssociationsOutput$ === "object");
assert(typeof ListGatewaysInput$ === "object");
assert(typeof ListGatewaysOutput$ === "object");
assert(typeof ListLocalDisksInput$ === "object");
assert(typeof ListLocalDisksOutput$ === "object");
assert(typeof ListTagsForResourceInput$ === "object");
assert(typeof ListTagsForResourceOutput$ === "object");
assert(typeof ListTapePoolsInput$ === "object");
assert(typeof ListTapePoolsOutput$ === "object");
assert(typeof ListTapesInput$ === "object");
assert(typeof ListTapesOutput$ === "object");
assert(typeof ListVolumeInitiatorsInput$ === "object");
assert(typeof ListVolumeInitiatorsOutput$ === "object");
assert(typeof ListVolumeRecoveryPointsInput$ === "object");
assert(typeof ListVolumeRecoveryPointsOutput$ === "object");
assert(typeof ListVolumesInput$ === "object");
assert(typeof ListVolumesOutput$ === "object");
assert(typeof NetworkInterface$ === "object");
assert(typeof NFSFileShareDefaults$ === "object");
assert(typeof NFSFileShareInfo$ === "object");
assert(typeof NotifyWhenUploadedInput$ === "object");
assert(typeof NotifyWhenUploadedOutput$ === "object");
assert(typeof PoolInfo$ === "object");
assert(typeof RefreshCacheInput$ === "object");
assert(typeof RefreshCacheOutput$ === "object");
assert(typeof RemoveTagsFromResourceInput$ === "object");
assert(typeof RemoveTagsFromResourceOutput$ === "object");
assert(typeof ResetCacheInput$ === "object");
assert(typeof ResetCacheOutput$ === "object");
assert(typeof RetrieveTapeArchiveInput$ === "object");
assert(typeof RetrieveTapeArchiveOutput$ === "object");
assert(typeof RetrieveTapeRecoveryPointInput$ === "object");
assert(typeof RetrieveTapeRecoveryPointOutput$ === "object");
assert(typeof SetLocalConsolePasswordInput$ === "object");
assert(typeof SetLocalConsolePasswordOutput$ === "object");
assert(typeof SetSMBGuestPasswordInput$ === "object");
assert(typeof SetSMBGuestPasswordOutput$ === "object");
assert(typeof ShutdownGatewayInput$ === "object");
assert(typeof ShutdownGatewayOutput$ === "object");
assert(typeof SMBFileShareInfo$ === "object");
assert(typeof SMBLocalGroups$ === "object");
assert(typeof SoftwareUpdatePreferences$ === "object");
assert(typeof StartAvailabilityMonitorTestInput$ === "object");
assert(typeof StartAvailabilityMonitorTestOutput$ === "object");
assert(typeof StartCacheReportInput$ === "object");
assert(typeof StartCacheReportOutput$ === "object");
assert(typeof StartGatewayInput$ === "object");
assert(typeof StartGatewayOutput$ === "object");
assert(typeof StorageGatewayError$ === "object");
assert(typeof StorediSCSIVolume$ === "object");
assert(typeof Tag$ === "object");
assert(typeof Tape$ === "object");
assert(typeof TapeArchive$ === "object");
assert(typeof TapeInfo$ === "object");
assert(typeof TapeRecoveryPointInfo$ === "object");
assert(typeof UpdateAutomaticTapeCreationPolicyInput$ === "object");
assert(typeof UpdateAutomaticTapeCreationPolicyOutput$ === "object");
assert(typeof UpdateBandwidthRateLimitInput$ === "object");
assert(typeof UpdateBandwidthRateLimitOutput$ === "object");
assert(typeof UpdateBandwidthRateLimitScheduleInput$ === "object");
assert(typeof UpdateBandwidthRateLimitScheduleOutput$ === "object");
assert(typeof UpdateChapCredentialsInput$ === "object");
assert(typeof UpdateChapCredentialsOutput$ === "object");
assert(typeof UpdateFileSystemAssociationInput$ === "object");
assert(typeof UpdateFileSystemAssociationOutput$ === "object");
assert(typeof UpdateGatewayInformationInput$ === "object");
assert(typeof UpdateGatewayInformationOutput$ === "object");
assert(typeof UpdateGatewaySoftwareNowInput$ === "object");
assert(typeof UpdateGatewaySoftwareNowOutput$ === "object");
assert(typeof UpdateMaintenanceStartTimeInput$ === "object");
assert(typeof UpdateMaintenanceStartTimeOutput$ === "object");
assert(typeof UpdateNFSFileShareInput$ === "object");
assert(typeof UpdateNFSFileShareOutput$ === "object");
assert(typeof UpdateSMBFileShareInput$ === "object");
assert(typeof UpdateSMBFileShareOutput$ === "object");
assert(typeof UpdateSMBFileShareVisibilityInput$ === "object");
assert(typeof UpdateSMBFileShareVisibilityOutput$ === "object");
assert(typeof UpdateSMBLocalGroupsInput$ === "object");
assert(typeof UpdateSMBLocalGroupsOutput$ === "object");
assert(typeof UpdateSMBSecurityStrategyInput$ === "object");
assert(typeof UpdateSMBSecurityStrategyOutput$ === "object");
assert(typeof UpdateSnapshotScheduleInput$ === "object");
assert(typeof UpdateSnapshotScheduleOutput$ === "object");
assert(typeof UpdateVTLDeviceTypeInput$ === "object");
assert(typeof UpdateVTLDeviceTypeOutput$ === "object");
assert(typeof VolumeInfo$ === "object");
assert(typeof VolumeiSCSIAttributes$ === "object");
assert(typeof VolumeRecoveryPointInfo$ === "object");
assert(typeof VTLDevice$ === "object");
// enums
assert(typeof ActiveDirectoryStatus === "object");
assert(typeof AutomaticUpdatePolicy === "object");
assert(typeof AvailabilityMonitorTestStatus === "object");
assert(typeof CacheReportFilterName === "object");
assert(typeof CacheReportStatus === "object");
assert(typeof CaseSensitivity === "object");
assert(typeof EncryptionType === "object");
assert(typeof ErrorCode === "object");
assert(typeof FileShareType === "object");
assert(typeof GatewayCapacity === "object");
assert(typeof HostEnvironment === "object");
assert(typeof ObjectACL === "object");
assert(typeof PoolStatus === "object");
assert(typeof RetentionLockType === "object");
assert(typeof SMBSecurityStrategy === "object");
assert(typeof TapeStorageClass === "object");
// errors
assert(InternalServerError.prototype instanceof StorageGatewayServiceException);
assert(typeof InternalServerError$ === "object");
assert(InvalidGatewayRequestException.prototype instanceof StorageGatewayServiceException);
assert(typeof InvalidGatewayRequestException$ === "object");
assert(ServiceUnavailableError.prototype instanceof StorageGatewayServiceException);
assert(typeof ServiceUnavailableError$ === "object");
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
