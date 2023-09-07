// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  ActivateGatewayCommand,
  ActivateGatewayCommandInput,
  ActivateGatewayCommandOutput,
} from "./commands/ActivateGatewayCommand";
import { AddCacheCommand, AddCacheCommandInput, AddCacheCommandOutput } from "./commands/AddCacheCommand";
import {
  AddTagsToResourceCommand,
  AddTagsToResourceCommandInput,
  AddTagsToResourceCommandOutput,
} from "./commands/AddTagsToResourceCommand";
import {
  AddUploadBufferCommand,
  AddUploadBufferCommandInput,
  AddUploadBufferCommandOutput,
} from "./commands/AddUploadBufferCommand";
import {
  AddWorkingStorageCommand,
  AddWorkingStorageCommandInput,
  AddWorkingStorageCommandOutput,
} from "./commands/AddWorkingStorageCommand";
import {
  AssignTapePoolCommand,
  AssignTapePoolCommandInput,
  AssignTapePoolCommandOutput,
} from "./commands/AssignTapePoolCommand";
import {
  AssociateFileSystemCommand,
  AssociateFileSystemCommandInput,
  AssociateFileSystemCommandOutput,
} from "./commands/AssociateFileSystemCommand";
import {
  AttachVolumeCommand,
  AttachVolumeCommandInput,
  AttachVolumeCommandOutput,
} from "./commands/AttachVolumeCommand";
import {
  CancelArchivalCommand,
  CancelArchivalCommandInput,
  CancelArchivalCommandOutput,
} from "./commands/CancelArchivalCommand";
import {
  CancelRetrievalCommand,
  CancelRetrievalCommandInput,
  CancelRetrievalCommandOutput,
} from "./commands/CancelRetrievalCommand";
import {
  CreateCachediSCSIVolumeCommand,
  CreateCachediSCSIVolumeCommandInput,
  CreateCachediSCSIVolumeCommandOutput,
} from "./commands/CreateCachediSCSIVolumeCommand";
import {
  CreateNFSFileShareCommand,
  CreateNFSFileShareCommandInput,
  CreateNFSFileShareCommandOutput,
} from "./commands/CreateNFSFileShareCommand";
import {
  CreateSMBFileShareCommand,
  CreateSMBFileShareCommandInput,
  CreateSMBFileShareCommandOutput,
} from "./commands/CreateSMBFileShareCommand";
import {
  CreateSnapshotCommand,
  CreateSnapshotCommandInput,
  CreateSnapshotCommandOutput,
} from "./commands/CreateSnapshotCommand";
import {
  CreateSnapshotFromVolumeRecoveryPointCommand,
  CreateSnapshotFromVolumeRecoveryPointCommandInput,
  CreateSnapshotFromVolumeRecoveryPointCommandOutput,
} from "./commands/CreateSnapshotFromVolumeRecoveryPointCommand";
import {
  CreateStorediSCSIVolumeCommand,
  CreateStorediSCSIVolumeCommandInput,
  CreateStorediSCSIVolumeCommandOutput,
} from "./commands/CreateStorediSCSIVolumeCommand";
import {
  CreateTapePoolCommand,
  CreateTapePoolCommandInput,
  CreateTapePoolCommandOutput,
} from "./commands/CreateTapePoolCommand";
import { CreateTapesCommand, CreateTapesCommandInput, CreateTapesCommandOutput } from "./commands/CreateTapesCommand";
import {
  CreateTapeWithBarcodeCommand,
  CreateTapeWithBarcodeCommandInput,
  CreateTapeWithBarcodeCommandOutput,
} from "./commands/CreateTapeWithBarcodeCommand";
import {
  DeleteAutomaticTapeCreationPolicyCommand,
  DeleteAutomaticTapeCreationPolicyCommandInput,
  DeleteAutomaticTapeCreationPolicyCommandOutput,
} from "./commands/DeleteAutomaticTapeCreationPolicyCommand";
import {
  DeleteBandwidthRateLimitCommand,
  DeleteBandwidthRateLimitCommandInput,
  DeleteBandwidthRateLimitCommandOutput,
} from "./commands/DeleteBandwidthRateLimitCommand";
import {
  DeleteChapCredentialsCommand,
  DeleteChapCredentialsCommandInput,
  DeleteChapCredentialsCommandOutput,
} from "./commands/DeleteChapCredentialsCommand";
import {
  DeleteFileShareCommand,
  DeleteFileShareCommandInput,
  DeleteFileShareCommandOutput,
} from "./commands/DeleteFileShareCommand";
import {
  DeleteGatewayCommand,
  DeleteGatewayCommandInput,
  DeleteGatewayCommandOutput,
} from "./commands/DeleteGatewayCommand";
import {
  DeleteSnapshotScheduleCommand,
  DeleteSnapshotScheduleCommandInput,
  DeleteSnapshotScheduleCommandOutput,
} from "./commands/DeleteSnapshotScheduleCommand";
import {
  DeleteTapeArchiveCommand,
  DeleteTapeArchiveCommandInput,
  DeleteTapeArchiveCommandOutput,
} from "./commands/DeleteTapeArchiveCommand";
import { DeleteTapeCommand, DeleteTapeCommandInput, DeleteTapeCommandOutput } from "./commands/DeleteTapeCommand";
import {
  DeleteTapePoolCommand,
  DeleteTapePoolCommandInput,
  DeleteTapePoolCommandOutput,
} from "./commands/DeleteTapePoolCommand";
import {
  DeleteVolumeCommand,
  DeleteVolumeCommandInput,
  DeleteVolumeCommandOutput,
} from "./commands/DeleteVolumeCommand";
import {
  DescribeAvailabilityMonitorTestCommand,
  DescribeAvailabilityMonitorTestCommandInput,
  DescribeAvailabilityMonitorTestCommandOutput,
} from "./commands/DescribeAvailabilityMonitorTestCommand";
import {
  DescribeBandwidthRateLimitCommand,
  DescribeBandwidthRateLimitCommandInput,
  DescribeBandwidthRateLimitCommandOutput,
} from "./commands/DescribeBandwidthRateLimitCommand";
import {
  DescribeBandwidthRateLimitScheduleCommand,
  DescribeBandwidthRateLimitScheduleCommandInput,
  DescribeBandwidthRateLimitScheduleCommandOutput,
} from "./commands/DescribeBandwidthRateLimitScheduleCommand";
import {
  DescribeCacheCommand,
  DescribeCacheCommandInput,
  DescribeCacheCommandOutput,
} from "./commands/DescribeCacheCommand";
import {
  DescribeCachediSCSIVolumesCommand,
  DescribeCachediSCSIVolumesCommandInput,
  DescribeCachediSCSIVolumesCommandOutput,
} from "./commands/DescribeCachediSCSIVolumesCommand";
import {
  DescribeChapCredentialsCommand,
  DescribeChapCredentialsCommandInput,
  DescribeChapCredentialsCommandOutput,
} from "./commands/DescribeChapCredentialsCommand";
import {
  DescribeFileSystemAssociationsCommand,
  DescribeFileSystemAssociationsCommandInput,
  DescribeFileSystemAssociationsCommandOutput,
} from "./commands/DescribeFileSystemAssociationsCommand";
import {
  DescribeGatewayInformationCommand,
  DescribeGatewayInformationCommandInput,
  DescribeGatewayInformationCommandOutput,
} from "./commands/DescribeGatewayInformationCommand";
import {
  DescribeMaintenanceStartTimeCommand,
  DescribeMaintenanceStartTimeCommandInput,
  DescribeMaintenanceStartTimeCommandOutput,
} from "./commands/DescribeMaintenanceStartTimeCommand";
import {
  DescribeNFSFileSharesCommand,
  DescribeNFSFileSharesCommandInput,
  DescribeNFSFileSharesCommandOutput,
} from "./commands/DescribeNFSFileSharesCommand";
import {
  DescribeSMBFileSharesCommand,
  DescribeSMBFileSharesCommandInput,
  DescribeSMBFileSharesCommandOutput,
} from "./commands/DescribeSMBFileSharesCommand";
import {
  DescribeSMBSettingsCommand,
  DescribeSMBSettingsCommandInput,
  DescribeSMBSettingsCommandOutput,
} from "./commands/DescribeSMBSettingsCommand";
import {
  DescribeSnapshotScheduleCommand,
  DescribeSnapshotScheduleCommandInput,
  DescribeSnapshotScheduleCommandOutput,
} from "./commands/DescribeSnapshotScheduleCommand";
import {
  DescribeStorediSCSIVolumesCommand,
  DescribeStorediSCSIVolumesCommandInput,
  DescribeStorediSCSIVolumesCommandOutput,
} from "./commands/DescribeStorediSCSIVolumesCommand";
import {
  DescribeTapeArchivesCommand,
  DescribeTapeArchivesCommandInput,
  DescribeTapeArchivesCommandOutput,
} from "./commands/DescribeTapeArchivesCommand";
import {
  DescribeTapeRecoveryPointsCommand,
  DescribeTapeRecoveryPointsCommandInput,
  DescribeTapeRecoveryPointsCommandOutput,
} from "./commands/DescribeTapeRecoveryPointsCommand";
import {
  DescribeTapesCommand,
  DescribeTapesCommandInput,
  DescribeTapesCommandOutput,
} from "./commands/DescribeTapesCommand";
import {
  DescribeUploadBufferCommand,
  DescribeUploadBufferCommandInput,
  DescribeUploadBufferCommandOutput,
} from "./commands/DescribeUploadBufferCommand";
import {
  DescribeVTLDevicesCommand,
  DescribeVTLDevicesCommandInput,
  DescribeVTLDevicesCommandOutput,
} from "./commands/DescribeVTLDevicesCommand";
import {
  DescribeWorkingStorageCommand,
  DescribeWorkingStorageCommandInput,
  DescribeWorkingStorageCommandOutput,
} from "./commands/DescribeWorkingStorageCommand";
import {
  DetachVolumeCommand,
  DetachVolumeCommandInput,
  DetachVolumeCommandOutput,
} from "./commands/DetachVolumeCommand";
import {
  DisableGatewayCommand,
  DisableGatewayCommandInput,
  DisableGatewayCommandOutput,
} from "./commands/DisableGatewayCommand";
import {
  DisassociateFileSystemCommand,
  DisassociateFileSystemCommandInput,
  DisassociateFileSystemCommandOutput,
} from "./commands/DisassociateFileSystemCommand";
import { JoinDomainCommand, JoinDomainCommandInput, JoinDomainCommandOutput } from "./commands/JoinDomainCommand";
import {
  ListAutomaticTapeCreationPoliciesCommand,
  ListAutomaticTapeCreationPoliciesCommandInput,
  ListAutomaticTapeCreationPoliciesCommandOutput,
} from "./commands/ListAutomaticTapeCreationPoliciesCommand";
import {
  ListFileSharesCommand,
  ListFileSharesCommandInput,
  ListFileSharesCommandOutput,
} from "./commands/ListFileSharesCommand";
import {
  ListFileSystemAssociationsCommand,
  ListFileSystemAssociationsCommandInput,
  ListFileSystemAssociationsCommandOutput,
} from "./commands/ListFileSystemAssociationsCommand";
import {
  ListGatewaysCommand,
  ListGatewaysCommandInput,
  ListGatewaysCommandOutput,
} from "./commands/ListGatewaysCommand";
import {
  ListLocalDisksCommand,
  ListLocalDisksCommandInput,
  ListLocalDisksCommandOutput,
} from "./commands/ListLocalDisksCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTapePoolsCommand,
  ListTapePoolsCommandInput,
  ListTapePoolsCommandOutput,
} from "./commands/ListTapePoolsCommand";
import { ListTapesCommand, ListTapesCommandInput, ListTapesCommandOutput } from "./commands/ListTapesCommand";
import {
  ListVolumeInitiatorsCommand,
  ListVolumeInitiatorsCommandInput,
  ListVolumeInitiatorsCommandOutput,
} from "./commands/ListVolumeInitiatorsCommand";
import {
  ListVolumeRecoveryPointsCommand,
  ListVolumeRecoveryPointsCommandInput,
  ListVolumeRecoveryPointsCommandOutput,
} from "./commands/ListVolumeRecoveryPointsCommand";
import { ListVolumesCommand, ListVolumesCommandInput, ListVolumesCommandOutput } from "./commands/ListVolumesCommand";
import {
  NotifyWhenUploadedCommand,
  NotifyWhenUploadedCommandInput,
  NotifyWhenUploadedCommandOutput,
} from "./commands/NotifyWhenUploadedCommand";
import {
  RefreshCacheCommand,
  RefreshCacheCommandInput,
  RefreshCacheCommandOutput,
} from "./commands/RefreshCacheCommand";
import {
  RemoveTagsFromResourceCommand,
  RemoveTagsFromResourceCommandInput,
  RemoveTagsFromResourceCommandOutput,
} from "./commands/RemoveTagsFromResourceCommand";
import { ResetCacheCommand, ResetCacheCommandInput, ResetCacheCommandOutput } from "./commands/ResetCacheCommand";
import {
  RetrieveTapeArchiveCommand,
  RetrieveTapeArchiveCommandInput,
  RetrieveTapeArchiveCommandOutput,
} from "./commands/RetrieveTapeArchiveCommand";
import {
  RetrieveTapeRecoveryPointCommand,
  RetrieveTapeRecoveryPointCommandInput,
  RetrieveTapeRecoveryPointCommandOutput,
} from "./commands/RetrieveTapeRecoveryPointCommand";
import {
  SetLocalConsolePasswordCommand,
  SetLocalConsolePasswordCommandInput,
  SetLocalConsolePasswordCommandOutput,
} from "./commands/SetLocalConsolePasswordCommand";
import {
  SetSMBGuestPasswordCommand,
  SetSMBGuestPasswordCommandInput,
  SetSMBGuestPasswordCommandOutput,
} from "./commands/SetSMBGuestPasswordCommand";
import {
  ShutdownGatewayCommand,
  ShutdownGatewayCommandInput,
  ShutdownGatewayCommandOutput,
} from "./commands/ShutdownGatewayCommand";
import {
  StartAvailabilityMonitorTestCommand,
  StartAvailabilityMonitorTestCommandInput,
  StartAvailabilityMonitorTestCommandOutput,
} from "./commands/StartAvailabilityMonitorTestCommand";
import {
  StartGatewayCommand,
  StartGatewayCommandInput,
  StartGatewayCommandOutput,
} from "./commands/StartGatewayCommand";
import {
  UpdateAutomaticTapeCreationPolicyCommand,
  UpdateAutomaticTapeCreationPolicyCommandInput,
  UpdateAutomaticTapeCreationPolicyCommandOutput,
} from "./commands/UpdateAutomaticTapeCreationPolicyCommand";
import {
  UpdateBandwidthRateLimitCommand,
  UpdateBandwidthRateLimitCommandInput,
  UpdateBandwidthRateLimitCommandOutput,
} from "./commands/UpdateBandwidthRateLimitCommand";
import {
  UpdateBandwidthRateLimitScheduleCommand,
  UpdateBandwidthRateLimitScheduleCommandInput,
  UpdateBandwidthRateLimitScheduleCommandOutput,
} from "./commands/UpdateBandwidthRateLimitScheduleCommand";
import {
  UpdateChapCredentialsCommand,
  UpdateChapCredentialsCommandInput,
  UpdateChapCredentialsCommandOutput,
} from "./commands/UpdateChapCredentialsCommand";
import {
  UpdateFileSystemAssociationCommand,
  UpdateFileSystemAssociationCommandInput,
  UpdateFileSystemAssociationCommandOutput,
} from "./commands/UpdateFileSystemAssociationCommand";
import {
  UpdateGatewayInformationCommand,
  UpdateGatewayInformationCommandInput,
  UpdateGatewayInformationCommandOutput,
} from "./commands/UpdateGatewayInformationCommand";
import {
  UpdateGatewaySoftwareNowCommand,
  UpdateGatewaySoftwareNowCommandInput,
  UpdateGatewaySoftwareNowCommandOutput,
} from "./commands/UpdateGatewaySoftwareNowCommand";
import {
  UpdateMaintenanceStartTimeCommand,
  UpdateMaintenanceStartTimeCommandInput,
  UpdateMaintenanceStartTimeCommandOutput,
} from "./commands/UpdateMaintenanceStartTimeCommand";
import {
  UpdateNFSFileShareCommand,
  UpdateNFSFileShareCommandInput,
  UpdateNFSFileShareCommandOutput,
} from "./commands/UpdateNFSFileShareCommand";
import {
  UpdateSMBFileShareCommand,
  UpdateSMBFileShareCommandInput,
  UpdateSMBFileShareCommandOutput,
} from "./commands/UpdateSMBFileShareCommand";
import {
  UpdateSMBFileShareVisibilityCommand,
  UpdateSMBFileShareVisibilityCommandInput,
  UpdateSMBFileShareVisibilityCommandOutput,
} from "./commands/UpdateSMBFileShareVisibilityCommand";
import {
  UpdateSMBLocalGroupsCommand,
  UpdateSMBLocalGroupsCommandInput,
  UpdateSMBLocalGroupsCommandOutput,
} from "./commands/UpdateSMBLocalGroupsCommand";
import {
  UpdateSMBSecurityStrategyCommand,
  UpdateSMBSecurityStrategyCommandInput,
  UpdateSMBSecurityStrategyCommandOutput,
} from "./commands/UpdateSMBSecurityStrategyCommand";
import {
  UpdateSnapshotScheduleCommand,
  UpdateSnapshotScheduleCommandInput,
  UpdateSnapshotScheduleCommandOutput,
} from "./commands/UpdateSnapshotScheduleCommand";
import {
  UpdateVTLDeviceTypeCommand,
  UpdateVTLDeviceTypeCommandInput,
  UpdateVTLDeviceTypeCommandOutput,
} from "./commands/UpdateVTLDeviceTypeCommand";
import { StorageGatewayClient, StorageGatewayClientConfig } from "./StorageGatewayClient";

const commands = {
  ActivateGatewayCommand,
  AddCacheCommand,
  AddTagsToResourceCommand,
  AddUploadBufferCommand,
  AddWorkingStorageCommand,
  AssignTapePoolCommand,
  AssociateFileSystemCommand,
  AttachVolumeCommand,
  CancelArchivalCommand,
  CancelRetrievalCommand,
  CreateCachediSCSIVolumeCommand,
  CreateNFSFileShareCommand,
  CreateSMBFileShareCommand,
  CreateSnapshotCommand,
  CreateSnapshotFromVolumeRecoveryPointCommand,
  CreateStorediSCSIVolumeCommand,
  CreateTapePoolCommand,
  CreateTapesCommand,
  CreateTapeWithBarcodeCommand,
  DeleteAutomaticTapeCreationPolicyCommand,
  DeleteBandwidthRateLimitCommand,
  DeleteChapCredentialsCommand,
  DeleteFileShareCommand,
  DeleteGatewayCommand,
  DeleteSnapshotScheduleCommand,
  DeleteTapeCommand,
  DeleteTapeArchiveCommand,
  DeleteTapePoolCommand,
  DeleteVolumeCommand,
  DescribeAvailabilityMonitorTestCommand,
  DescribeBandwidthRateLimitCommand,
  DescribeBandwidthRateLimitScheduleCommand,
  DescribeCacheCommand,
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
  JoinDomainCommand,
  ListAutomaticTapeCreationPoliciesCommand,
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
  RefreshCacheCommand,
  RemoveTagsFromResourceCommand,
  ResetCacheCommand,
  RetrieveTapeArchiveCommand,
  RetrieveTapeRecoveryPointCommand,
  SetLocalConsolePasswordCommand,
  SetSMBGuestPasswordCommand,
  ShutdownGatewayCommand,
  StartAvailabilityMonitorTestCommand,
  StartGatewayCommand,
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
};

export interface StorageGateway {
  /**
   * @see {@link ActivateGatewayCommand}
   */
  activateGateway(
    args: ActivateGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ActivateGatewayCommandOutput>;
  activateGateway(args: ActivateGatewayCommandInput, cb: (err: any, data?: ActivateGatewayCommandOutput) => void): void;
  activateGateway(
    args: ActivateGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ActivateGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link AddCacheCommand}
   */
  addCache(args: AddCacheCommandInput, options?: __HttpHandlerOptions): Promise<AddCacheCommandOutput>;
  addCache(args: AddCacheCommandInput, cb: (err: any, data?: AddCacheCommandOutput) => void): void;
  addCache(
    args: AddCacheCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddCacheCommandOutput) => void
  ): void;

  /**
   * @see {@link AddTagsToResourceCommand}
   */
  addTagsToResource(
    args: AddTagsToResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddTagsToResourceCommandOutput>;
  addTagsToResource(
    args: AddTagsToResourceCommandInput,
    cb: (err: any, data?: AddTagsToResourceCommandOutput) => void
  ): void;
  addTagsToResource(
    args: AddTagsToResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddTagsToResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link AddUploadBufferCommand}
   */
  addUploadBuffer(
    args: AddUploadBufferCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddUploadBufferCommandOutput>;
  addUploadBuffer(args: AddUploadBufferCommandInput, cb: (err: any, data?: AddUploadBufferCommandOutput) => void): void;
  addUploadBuffer(
    args: AddUploadBufferCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddUploadBufferCommandOutput) => void
  ): void;

  /**
   * @see {@link AddWorkingStorageCommand}
   */
  addWorkingStorage(
    args: AddWorkingStorageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddWorkingStorageCommandOutput>;
  addWorkingStorage(
    args: AddWorkingStorageCommandInput,
    cb: (err: any, data?: AddWorkingStorageCommandOutput) => void
  ): void;
  addWorkingStorage(
    args: AddWorkingStorageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddWorkingStorageCommandOutput) => void
  ): void;

  /**
   * @see {@link AssignTapePoolCommand}
   */
  assignTapePool(
    args: AssignTapePoolCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssignTapePoolCommandOutput>;
  assignTapePool(args: AssignTapePoolCommandInput, cb: (err: any, data?: AssignTapePoolCommandOutput) => void): void;
  assignTapePool(
    args: AssignTapePoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssignTapePoolCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateFileSystemCommand}
   */
  associateFileSystem(
    args: AssociateFileSystemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateFileSystemCommandOutput>;
  associateFileSystem(
    args: AssociateFileSystemCommandInput,
    cb: (err: any, data?: AssociateFileSystemCommandOutput) => void
  ): void;
  associateFileSystem(
    args: AssociateFileSystemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateFileSystemCommandOutput) => void
  ): void;

  /**
   * @see {@link AttachVolumeCommand}
   */
  attachVolume(args: AttachVolumeCommandInput, options?: __HttpHandlerOptions): Promise<AttachVolumeCommandOutput>;
  attachVolume(args: AttachVolumeCommandInput, cb: (err: any, data?: AttachVolumeCommandOutput) => void): void;
  attachVolume(
    args: AttachVolumeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachVolumeCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelArchivalCommand}
   */
  cancelArchival(
    args: CancelArchivalCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelArchivalCommandOutput>;
  cancelArchival(args: CancelArchivalCommandInput, cb: (err: any, data?: CancelArchivalCommandOutput) => void): void;
  cancelArchival(
    args: CancelArchivalCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelArchivalCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelRetrievalCommand}
   */
  cancelRetrieval(
    args: CancelRetrievalCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelRetrievalCommandOutput>;
  cancelRetrieval(args: CancelRetrievalCommandInput, cb: (err: any, data?: CancelRetrievalCommandOutput) => void): void;
  cancelRetrieval(
    args: CancelRetrievalCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelRetrievalCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCachediSCSIVolumeCommand}
   */
  createCachediSCSIVolume(
    args: CreateCachediSCSIVolumeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCachediSCSIVolumeCommandOutput>;
  createCachediSCSIVolume(
    args: CreateCachediSCSIVolumeCommandInput,
    cb: (err: any, data?: CreateCachediSCSIVolumeCommandOutput) => void
  ): void;
  createCachediSCSIVolume(
    args: CreateCachediSCSIVolumeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCachediSCSIVolumeCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateNFSFileShareCommand}
   */
  createNFSFileShare(
    args: CreateNFSFileShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateNFSFileShareCommandOutput>;
  createNFSFileShare(
    args: CreateNFSFileShareCommandInput,
    cb: (err: any, data?: CreateNFSFileShareCommandOutput) => void
  ): void;
  createNFSFileShare(
    args: CreateNFSFileShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNFSFileShareCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSMBFileShareCommand}
   */
  createSMBFileShare(
    args: CreateSMBFileShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSMBFileShareCommandOutput>;
  createSMBFileShare(
    args: CreateSMBFileShareCommandInput,
    cb: (err: any, data?: CreateSMBFileShareCommandOutput) => void
  ): void;
  createSMBFileShare(
    args: CreateSMBFileShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSMBFileShareCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSnapshotCommand}
   */
  createSnapshot(
    args: CreateSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSnapshotCommandOutput>;
  createSnapshot(args: CreateSnapshotCommandInput, cb: (err: any, data?: CreateSnapshotCommandOutput) => void): void;
  createSnapshot(
    args: CreateSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSnapshotFromVolumeRecoveryPointCommand}
   */
  createSnapshotFromVolumeRecoveryPoint(
    args: CreateSnapshotFromVolumeRecoveryPointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSnapshotFromVolumeRecoveryPointCommandOutput>;
  createSnapshotFromVolumeRecoveryPoint(
    args: CreateSnapshotFromVolumeRecoveryPointCommandInput,
    cb: (err: any, data?: CreateSnapshotFromVolumeRecoveryPointCommandOutput) => void
  ): void;
  createSnapshotFromVolumeRecoveryPoint(
    args: CreateSnapshotFromVolumeRecoveryPointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSnapshotFromVolumeRecoveryPointCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateStorediSCSIVolumeCommand}
   */
  createStorediSCSIVolume(
    args: CreateStorediSCSIVolumeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateStorediSCSIVolumeCommandOutput>;
  createStorediSCSIVolume(
    args: CreateStorediSCSIVolumeCommandInput,
    cb: (err: any, data?: CreateStorediSCSIVolumeCommandOutput) => void
  ): void;
  createStorediSCSIVolume(
    args: CreateStorediSCSIVolumeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStorediSCSIVolumeCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTapePoolCommand}
   */
  createTapePool(
    args: CreateTapePoolCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTapePoolCommandOutput>;
  createTapePool(args: CreateTapePoolCommandInput, cb: (err: any, data?: CreateTapePoolCommandOutput) => void): void;
  createTapePool(
    args: CreateTapePoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTapePoolCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTapesCommand}
   */
  createTapes(args: CreateTapesCommandInput, options?: __HttpHandlerOptions): Promise<CreateTapesCommandOutput>;
  createTapes(args: CreateTapesCommandInput, cb: (err: any, data?: CreateTapesCommandOutput) => void): void;
  createTapes(
    args: CreateTapesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTapesCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTapeWithBarcodeCommand}
   */
  createTapeWithBarcode(
    args: CreateTapeWithBarcodeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTapeWithBarcodeCommandOutput>;
  createTapeWithBarcode(
    args: CreateTapeWithBarcodeCommandInput,
    cb: (err: any, data?: CreateTapeWithBarcodeCommandOutput) => void
  ): void;
  createTapeWithBarcode(
    args: CreateTapeWithBarcodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTapeWithBarcodeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAutomaticTapeCreationPolicyCommand}
   */
  deleteAutomaticTapeCreationPolicy(
    args: DeleteAutomaticTapeCreationPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAutomaticTapeCreationPolicyCommandOutput>;
  deleteAutomaticTapeCreationPolicy(
    args: DeleteAutomaticTapeCreationPolicyCommandInput,
    cb: (err: any, data?: DeleteAutomaticTapeCreationPolicyCommandOutput) => void
  ): void;
  deleteAutomaticTapeCreationPolicy(
    args: DeleteAutomaticTapeCreationPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAutomaticTapeCreationPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBandwidthRateLimitCommand}
   */
  deleteBandwidthRateLimit(
    args: DeleteBandwidthRateLimitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBandwidthRateLimitCommandOutput>;
  deleteBandwidthRateLimit(
    args: DeleteBandwidthRateLimitCommandInput,
    cb: (err: any, data?: DeleteBandwidthRateLimitCommandOutput) => void
  ): void;
  deleteBandwidthRateLimit(
    args: DeleteBandwidthRateLimitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBandwidthRateLimitCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteChapCredentialsCommand}
   */
  deleteChapCredentials(
    args: DeleteChapCredentialsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteChapCredentialsCommandOutput>;
  deleteChapCredentials(
    args: DeleteChapCredentialsCommandInput,
    cb: (err: any, data?: DeleteChapCredentialsCommandOutput) => void
  ): void;
  deleteChapCredentials(
    args: DeleteChapCredentialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteChapCredentialsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFileShareCommand}
   */
  deleteFileShare(
    args: DeleteFileShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFileShareCommandOutput>;
  deleteFileShare(args: DeleteFileShareCommandInput, cb: (err: any, data?: DeleteFileShareCommandOutput) => void): void;
  deleteFileShare(
    args: DeleteFileShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFileShareCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGatewayCommand}
   */
  deleteGateway(args: DeleteGatewayCommandInput, options?: __HttpHandlerOptions): Promise<DeleteGatewayCommandOutput>;
  deleteGateway(args: DeleteGatewayCommandInput, cb: (err: any, data?: DeleteGatewayCommandOutput) => void): void;
  deleteGateway(
    args: DeleteGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSnapshotScheduleCommand}
   */
  deleteSnapshotSchedule(
    args: DeleteSnapshotScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSnapshotScheduleCommandOutput>;
  deleteSnapshotSchedule(
    args: DeleteSnapshotScheduleCommandInput,
    cb: (err: any, data?: DeleteSnapshotScheduleCommandOutput) => void
  ): void;
  deleteSnapshotSchedule(
    args: DeleteSnapshotScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSnapshotScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTapeCommand}
   */
  deleteTape(args: DeleteTapeCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTapeCommandOutput>;
  deleteTape(args: DeleteTapeCommandInput, cb: (err: any, data?: DeleteTapeCommandOutput) => void): void;
  deleteTape(
    args: DeleteTapeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTapeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTapeArchiveCommand}
   */
  deleteTapeArchive(
    args: DeleteTapeArchiveCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTapeArchiveCommandOutput>;
  deleteTapeArchive(
    args: DeleteTapeArchiveCommandInput,
    cb: (err: any, data?: DeleteTapeArchiveCommandOutput) => void
  ): void;
  deleteTapeArchive(
    args: DeleteTapeArchiveCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTapeArchiveCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTapePoolCommand}
   */
  deleteTapePool(
    args: DeleteTapePoolCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTapePoolCommandOutput>;
  deleteTapePool(args: DeleteTapePoolCommandInput, cb: (err: any, data?: DeleteTapePoolCommandOutput) => void): void;
  deleteTapePool(
    args: DeleteTapePoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTapePoolCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVolumeCommand}
   */
  deleteVolume(args: DeleteVolumeCommandInput, options?: __HttpHandlerOptions): Promise<DeleteVolumeCommandOutput>;
  deleteVolume(args: DeleteVolumeCommandInput, cb: (err: any, data?: DeleteVolumeCommandOutput) => void): void;
  deleteVolume(
    args: DeleteVolumeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVolumeCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAvailabilityMonitorTestCommand}
   */
  describeAvailabilityMonitorTest(
    args: DescribeAvailabilityMonitorTestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAvailabilityMonitorTestCommandOutput>;
  describeAvailabilityMonitorTest(
    args: DescribeAvailabilityMonitorTestCommandInput,
    cb: (err: any, data?: DescribeAvailabilityMonitorTestCommandOutput) => void
  ): void;
  describeAvailabilityMonitorTest(
    args: DescribeAvailabilityMonitorTestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAvailabilityMonitorTestCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBandwidthRateLimitCommand}
   */
  describeBandwidthRateLimit(
    args: DescribeBandwidthRateLimitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBandwidthRateLimitCommandOutput>;
  describeBandwidthRateLimit(
    args: DescribeBandwidthRateLimitCommandInput,
    cb: (err: any, data?: DescribeBandwidthRateLimitCommandOutput) => void
  ): void;
  describeBandwidthRateLimit(
    args: DescribeBandwidthRateLimitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBandwidthRateLimitCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBandwidthRateLimitScheduleCommand}
   */
  describeBandwidthRateLimitSchedule(
    args: DescribeBandwidthRateLimitScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBandwidthRateLimitScheduleCommandOutput>;
  describeBandwidthRateLimitSchedule(
    args: DescribeBandwidthRateLimitScheduleCommandInput,
    cb: (err: any, data?: DescribeBandwidthRateLimitScheduleCommandOutput) => void
  ): void;
  describeBandwidthRateLimitSchedule(
    args: DescribeBandwidthRateLimitScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBandwidthRateLimitScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCacheCommand}
   */
  describeCache(args: DescribeCacheCommandInput, options?: __HttpHandlerOptions): Promise<DescribeCacheCommandOutput>;
  describeCache(args: DescribeCacheCommandInput, cb: (err: any, data?: DescribeCacheCommandOutput) => void): void;
  describeCache(
    args: DescribeCacheCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCacheCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCachediSCSIVolumesCommand}
   */
  describeCachediSCSIVolumes(
    args: DescribeCachediSCSIVolumesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCachediSCSIVolumesCommandOutput>;
  describeCachediSCSIVolumes(
    args: DescribeCachediSCSIVolumesCommandInput,
    cb: (err: any, data?: DescribeCachediSCSIVolumesCommandOutput) => void
  ): void;
  describeCachediSCSIVolumes(
    args: DescribeCachediSCSIVolumesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCachediSCSIVolumesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeChapCredentialsCommand}
   */
  describeChapCredentials(
    args: DescribeChapCredentialsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeChapCredentialsCommandOutput>;
  describeChapCredentials(
    args: DescribeChapCredentialsCommandInput,
    cb: (err: any, data?: DescribeChapCredentialsCommandOutput) => void
  ): void;
  describeChapCredentials(
    args: DescribeChapCredentialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeChapCredentialsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFileSystemAssociationsCommand}
   */
  describeFileSystemAssociations(
    args: DescribeFileSystemAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFileSystemAssociationsCommandOutput>;
  describeFileSystemAssociations(
    args: DescribeFileSystemAssociationsCommandInput,
    cb: (err: any, data?: DescribeFileSystemAssociationsCommandOutput) => void
  ): void;
  describeFileSystemAssociations(
    args: DescribeFileSystemAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFileSystemAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeGatewayInformationCommand}
   */
  describeGatewayInformation(
    args: DescribeGatewayInformationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeGatewayInformationCommandOutput>;
  describeGatewayInformation(
    args: DescribeGatewayInformationCommandInput,
    cb: (err: any, data?: DescribeGatewayInformationCommandOutput) => void
  ): void;
  describeGatewayInformation(
    args: DescribeGatewayInformationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeGatewayInformationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeMaintenanceStartTimeCommand}
   */
  describeMaintenanceStartTime(
    args: DescribeMaintenanceStartTimeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMaintenanceStartTimeCommandOutput>;
  describeMaintenanceStartTime(
    args: DescribeMaintenanceStartTimeCommandInput,
    cb: (err: any, data?: DescribeMaintenanceStartTimeCommandOutput) => void
  ): void;
  describeMaintenanceStartTime(
    args: DescribeMaintenanceStartTimeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMaintenanceStartTimeCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeNFSFileSharesCommand}
   */
  describeNFSFileShares(
    args: DescribeNFSFileSharesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeNFSFileSharesCommandOutput>;
  describeNFSFileShares(
    args: DescribeNFSFileSharesCommandInput,
    cb: (err: any, data?: DescribeNFSFileSharesCommandOutput) => void
  ): void;
  describeNFSFileShares(
    args: DescribeNFSFileSharesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeNFSFileSharesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSMBFileSharesCommand}
   */
  describeSMBFileShares(
    args: DescribeSMBFileSharesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSMBFileSharesCommandOutput>;
  describeSMBFileShares(
    args: DescribeSMBFileSharesCommandInput,
    cb: (err: any, data?: DescribeSMBFileSharesCommandOutput) => void
  ): void;
  describeSMBFileShares(
    args: DescribeSMBFileSharesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSMBFileSharesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSMBSettingsCommand}
   */
  describeSMBSettings(
    args: DescribeSMBSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSMBSettingsCommandOutput>;
  describeSMBSettings(
    args: DescribeSMBSettingsCommandInput,
    cb: (err: any, data?: DescribeSMBSettingsCommandOutput) => void
  ): void;
  describeSMBSettings(
    args: DescribeSMBSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSMBSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSnapshotScheduleCommand}
   */
  describeSnapshotSchedule(
    args: DescribeSnapshotScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSnapshotScheduleCommandOutput>;
  describeSnapshotSchedule(
    args: DescribeSnapshotScheduleCommandInput,
    cb: (err: any, data?: DescribeSnapshotScheduleCommandOutput) => void
  ): void;
  describeSnapshotSchedule(
    args: DescribeSnapshotScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSnapshotScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeStorediSCSIVolumesCommand}
   */
  describeStorediSCSIVolumes(
    args: DescribeStorediSCSIVolumesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStorediSCSIVolumesCommandOutput>;
  describeStorediSCSIVolumes(
    args: DescribeStorediSCSIVolumesCommandInput,
    cb: (err: any, data?: DescribeStorediSCSIVolumesCommandOutput) => void
  ): void;
  describeStorediSCSIVolumes(
    args: DescribeStorediSCSIVolumesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStorediSCSIVolumesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTapeArchivesCommand}
   */
  describeTapeArchives(
    args: DescribeTapeArchivesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTapeArchivesCommandOutput>;
  describeTapeArchives(
    args: DescribeTapeArchivesCommandInput,
    cb: (err: any, data?: DescribeTapeArchivesCommandOutput) => void
  ): void;
  describeTapeArchives(
    args: DescribeTapeArchivesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTapeArchivesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTapeRecoveryPointsCommand}
   */
  describeTapeRecoveryPoints(
    args: DescribeTapeRecoveryPointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTapeRecoveryPointsCommandOutput>;
  describeTapeRecoveryPoints(
    args: DescribeTapeRecoveryPointsCommandInput,
    cb: (err: any, data?: DescribeTapeRecoveryPointsCommandOutput) => void
  ): void;
  describeTapeRecoveryPoints(
    args: DescribeTapeRecoveryPointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTapeRecoveryPointsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTapesCommand}
   */
  describeTapes(args: DescribeTapesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTapesCommandOutput>;
  describeTapes(args: DescribeTapesCommandInput, cb: (err: any, data?: DescribeTapesCommandOutput) => void): void;
  describeTapes(
    args: DescribeTapesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTapesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeUploadBufferCommand}
   */
  describeUploadBuffer(
    args: DescribeUploadBufferCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeUploadBufferCommandOutput>;
  describeUploadBuffer(
    args: DescribeUploadBufferCommandInput,
    cb: (err: any, data?: DescribeUploadBufferCommandOutput) => void
  ): void;
  describeUploadBuffer(
    args: DescribeUploadBufferCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeUploadBufferCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeVTLDevicesCommand}
   */
  describeVTLDevices(
    args: DescribeVTLDevicesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVTLDevicesCommandOutput>;
  describeVTLDevices(
    args: DescribeVTLDevicesCommandInput,
    cb: (err: any, data?: DescribeVTLDevicesCommandOutput) => void
  ): void;
  describeVTLDevices(
    args: DescribeVTLDevicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVTLDevicesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeWorkingStorageCommand}
   */
  describeWorkingStorage(
    args: DescribeWorkingStorageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWorkingStorageCommandOutput>;
  describeWorkingStorage(
    args: DescribeWorkingStorageCommandInput,
    cb: (err: any, data?: DescribeWorkingStorageCommandOutput) => void
  ): void;
  describeWorkingStorage(
    args: DescribeWorkingStorageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWorkingStorageCommandOutput) => void
  ): void;

  /**
   * @see {@link DetachVolumeCommand}
   */
  detachVolume(args: DetachVolumeCommandInput, options?: __HttpHandlerOptions): Promise<DetachVolumeCommandOutput>;
  detachVolume(args: DetachVolumeCommandInput, cb: (err: any, data?: DetachVolumeCommandOutput) => void): void;
  detachVolume(
    args: DetachVolumeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachVolumeCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableGatewayCommand}
   */
  disableGateway(
    args: DisableGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableGatewayCommandOutput>;
  disableGateway(args: DisableGatewayCommandInput, cb: (err: any, data?: DisableGatewayCommandOutput) => void): void;
  disableGateway(
    args: DisableGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateFileSystemCommand}
   */
  disassociateFileSystem(
    args: DisassociateFileSystemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateFileSystemCommandOutput>;
  disassociateFileSystem(
    args: DisassociateFileSystemCommandInput,
    cb: (err: any, data?: DisassociateFileSystemCommandOutput) => void
  ): void;
  disassociateFileSystem(
    args: DisassociateFileSystemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateFileSystemCommandOutput) => void
  ): void;

  /**
   * @see {@link JoinDomainCommand}
   */
  joinDomain(args: JoinDomainCommandInput, options?: __HttpHandlerOptions): Promise<JoinDomainCommandOutput>;
  joinDomain(args: JoinDomainCommandInput, cb: (err: any, data?: JoinDomainCommandOutput) => void): void;
  joinDomain(
    args: JoinDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: JoinDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAutomaticTapeCreationPoliciesCommand}
   */
  listAutomaticTapeCreationPolicies(
    args: ListAutomaticTapeCreationPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAutomaticTapeCreationPoliciesCommandOutput>;
  listAutomaticTapeCreationPolicies(
    args: ListAutomaticTapeCreationPoliciesCommandInput,
    cb: (err: any, data?: ListAutomaticTapeCreationPoliciesCommandOutput) => void
  ): void;
  listAutomaticTapeCreationPolicies(
    args: ListAutomaticTapeCreationPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAutomaticTapeCreationPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFileSharesCommand}
   */
  listFileShares(
    args: ListFileSharesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFileSharesCommandOutput>;
  listFileShares(args: ListFileSharesCommandInput, cb: (err: any, data?: ListFileSharesCommandOutput) => void): void;
  listFileShares(
    args: ListFileSharesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFileSharesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFileSystemAssociationsCommand}
   */
  listFileSystemAssociations(
    args: ListFileSystemAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFileSystemAssociationsCommandOutput>;
  listFileSystemAssociations(
    args: ListFileSystemAssociationsCommandInput,
    cb: (err: any, data?: ListFileSystemAssociationsCommandOutput) => void
  ): void;
  listFileSystemAssociations(
    args: ListFileSystemAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFileSystemAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGatewaysCommand}
   */
  listGateways(args: ListGatewaysCommandInput, options?: __HttpHandlerOptions): Promise<ListGatewaysCommandOutput>;
  listGateways(args: ListGatewaysCommandInput, cb: (err: any, data?: ListGatewaysCommandOutput) => void): void;
  listGateways(
    args: ListGatewaysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGatewaysCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLocalDisksCommand}
   */
  listLocalDisks(
    args: ListLocalDisksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLocalDisksCommandOutput>;
  listLocalDisks(args: ListLocalDisksCommandInput, cb: (err: any, data?: ListLocalDisksCommandOutput) => void): void;
  listLocalDisks(
    args: ListLocalDisksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLocalDisksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTapePoolsCommand}
   */
  listTapePools(args: ListTapePoolsCommandInput, options?: __HttpHandlerOptions): Promise<ListTapePoolsCommandOutput>;
  listTapePools(args: ListTapePoolsCommandInput, cb: (err: any, data?: ListTapePoolsCommandOutput) => void): void;
  listTapePools(
    args: ListTapePoolsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTapePoolsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTapesCommand}
   */
  listTapes(args: ListTapesCommandInput, options?: __HttpHandlerOptions): Promise<ListTapesCommandOutput>;
  listTapes(args: ListTapesCommandInput, cb: (err: any, data?: ListTapesCommandOutput) => void): void;
  listTapes(
    args: ListTapesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTapesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListVolumeInitiatorsCommand}
   */
  listVolumeInitiators(
    args: ListVolumeInitiatorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVolumeInitiatorsCommandOutput>;
  listVolumeInitiators(
    args: ListVolumeInitiatorsCommandInput,
    cb: (err: any, data?: ListVolumeInitiatorsCommandOutput) => void
  ): void;
  listVolumeInitiators(
    args: ListVolumeInitiatorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVolumeInitiatorsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListVolumeRecoveryPointsCommand}
   */
  listVolumeRecoveryPoints(
    args: ListVolumeRecoveryPointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVolumeRecoveryPointsCommandOutput>;
  listVolumeRecoveryPoints(
    args: ListVolumeRecoveryPointsCommandInput,
    cb: (err: any, data?: ListVolumeRecoveryPointsCommandOutput) => void
  ): void;
  listVolumeRecoveryPoints(
    args: ListVolumeRecoveryPointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVolumeRecoveryPointsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListVolumesCommand}
   */
  listVolumes(args: ListVolumesCommandInput, options?: __HttpHandlerOptions): Promise<ListVolumesCommandOutput>;
  listVolumes(args: ListVolumesCommandInput, cb: (err: any, data?: ListVolumesCommandOutput) => void): void;
  listVolumes(
    args: ListVolumesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVolumesCommandOutput) => void
  ): void;

  /**
   * @see {@link NotifyWhenUploadedCommand}
   */
  notifyWhenUploaded(
    args: NotifyWhenUploadedCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<NotifyWhenUploadedCommandOutput>;
  notifyWhenUploaded(
    args: NotifyWhenUploadedCommandInput,
    cb: (err: any, data?: NotifyWhenUploadedCommandOutput) => void
  ): void;
  notifyWhenUploaded(
    args: NotifyWhenUploadedCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: NotifyWhenUploadedCommandOutput) => void
  ): void;

  /**
   * @see {@link RefreshCacheCommand}
   */
  refreshCache(args: RefreshCacheCommandInput, options?: __HttpHandlerOptions): Promise<RefreshCacheCommandOutput>;
  refreshCache(args: RefreshCacheCommandInput, cb: (err: any, data?: RefreshCacheCommandOutput) => void): void;
  refreshCache(
    args: RefreshCacheCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RefreshCacheCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveTagsFromResourceCommand}
   */
  removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveTagsFromResourceCommandOutput>;
  removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    cb: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void
  ): void;
  removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ResetCacheCommand}
   */
  resetCache(args: ResetCacheCommandInput, options?: __HttpHandlerOptions): Promise<ResetCacheCommandOutput>;
  resetCache(args: ResetCacheCommandInput, cb: (err: any, data?: ResetCacheCommandOutput) => void): void;
  resetCache(
    args: ResetCacheCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetCacheCommandOutput) => void
  ): void;

  /**
   * @see {@link RetrieveTapeArchiveCommand}
   */
  retrieveTapeArchive(
    args: RetrieveTapeArchiveCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RetrieveTapeArchiveCommandOutput>;
  retrieveTapeArchive(
    args: RetrieveTapeArchiveCommandInput,
    cb: (err: any, data?: RetrieveTapeArchiveCommandOutput) => void
  ): void;
  retrieveTapeArchive(
    args: RetrieveTapeArchiveCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RetrieveTapeArchiveCommandOutput) => void
  ): void;

  /**
   * @see {@link RetrieveTapeRecoveryPointCommand}
   */
  retrieveTapeRecoveryPoint(
    args: RetrieveTapeRecoveryPointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RetrieveTapeRecoveryPointCommandOutput>;
  retrieveTapeRecoveryPoint(
    args: RetrieveTapeRecoveryPointCommandInput,
    cb: (err: any, data?: RetrieveTapeRecoveryPointCommandOutput) => void
  ): void;
  retrieveTapeRecoveryPoint(
    args: RetrieveTapeRecoveryPointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RetrieveTapeRecoveryPointCommandOutput) => void
  ): void;

  /**
   * @see {@link SetLocalConsolePasswordCommand}
   */
  setLocalConsolePassword(
    args: SetLocalConsolePasswordCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetLocalConsolePasswordCommandOutput>;
  setLocalConsolePassword(
    args: SetLocalConsolePasswordCommandInput,
    cb: (err: any, data?: SetLocalConsolePasswordCommandOutput) => void
  ): void;
  setLocalConsolePassword(
    args: SetLocalConsolePasswordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetLocalConsolePasswordCommandOutput) => void
  ): void;

  /**
   * @see {@link SetSMBGuestPasswordCommand}
   */
  setSMBGuestPassword(
    args: SetSMBGuestPasswordCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetSMBGuestPasswordCommandOutput>;
  setSMBGuestPassword(
    args: SetSMBGuestPasswordCommandInput,
    cb: (err: any, data?: SetSMBGuestPasswordCommandOutput) => void
  ): void;
  setSMBGuestPassword(
    args: SetSMBGuestPasswordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetSMBGuestPasswordCommandOutput) => void
  ): void;

  /**
   * @see {@link ShutdownGatewayCommand}
   */
  shutdownGateway(
    args: ShutdownGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ShutdownGatewayCommandOutput>;
  shutdownGateway(args: ShutdownGatewayCommandInput, cb: (err: any, data?: ShutdownGatewayCommandOutput) => void): void;
  shutdownGateway(
    args: ShutdownGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ShutdownGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link StartAvailabilityMonitorTestCommand}
   */
  startAvailabilityMonitorTest(
    args: StartAvailabilityMonitorTestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartAvailabilityMonitorTestCommandOutput>;
  startAvailabilityMonitorTest(
    args: StartAvailabilityMonitorTestCommandInput,
    cb: (err: any, data?: StartAvailabilityMonitorTestCommandOutput) => void
  ): void;
  startAvailabilityMonitorTest(
    args: StartAvailabilityMonitorTestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartAvailabilityMonitorTestCommandOutput) => void
  ): void;

  /**
   * @see {@link StartGatewayCommand}
   */
  startGateway(args: StartGatewayCommandInput, options?: __HttpHandlerOptions): Promise<StartGatewayCommandOutput>;
  startGateway(args: StartGatewayCommandInput, cb: (err: any, data?: StartGatewayCommandOutput) => void): void;
  startGateway(
    args: StartGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAutomaticTapeCreationPolicyCommand}
   */
  updateAutomaticTapeCreationPolicy(
    args: UpdateAutomaticTapeCreationPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAutomaticTapeCreationPolicyCommandOutput>;
  updateAutomaticTapeCreationPolicy(
    args: UpdateAutomaticTapeCreationPolicyCommandInput,
    cb: (err: any, data?: UpdateAutomaticTapeCreationPolicyCommandOutput) => void
  ): void;
  updateAutomaticTapeCreationPolicy(
    args: UpdateAutomaticTapeCreationPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAutomaticTapeCreationPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBandwidthRateLimitCommand}
   */
  updateBandwidthRateLimit(
    args: UpdateBandwidthRateLimitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBandwidthRateLimitCommandOutput>;
  updateBandwidthRateLimit(
    args: UpdateBandwidthRateLimitCommandInput,
    cb: (err: any, data?: UpdateBandwidthRateLimitCommandOutput) => void
  ): void;
  updateBandwidthRateLimit(
    args: UpdateBandwidthRateLimitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBandwidthRateLimitCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBandwidthRateLimitScheduleCommand}
   */
  updateBandwidthRateLimitSchedule(
    args: UpdateBandwidthRateLimitScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBandwidthRateLimitScheduleCommandOutput>;
  updateBandwidthRateLimitSchedule(
    args: UpdateBandwidthRateLimitScheduleCommandInput,
    cb: (err: any, data?: UpdateBandwidthRateLimitScheduleCommandOutput) => void
  ): void;
  updateBandwidthRateLimitSchedule(
    args: UpdateBandwidthRateLimitScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBandwidthRateLimitScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateChapCredentialsCommand}
   */
  updateChapCredentials(
    args: UpdateChapCredentialsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateChapCredentialsCommandOutput>;
  updateChapCredentials(
    args: UpdateChapCredentialsCommandInput,
    cb: (err: any, data?: UpdateChapCredentialsCommandOutput) => void
  ): void;
  updateChapCredentials(
    args: UpdateChapCredentialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateChapCredentialsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFileSystemAssociationCommand}
   */
  updateFileSystemAssociation(
    args: UpdateFileSystemAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFileSystemAssociationCommandOutput>;
  updateFileSystemAssociation(
    args: UpdateFileSystemAssociationCommandInput,
    cb: (err: any, data?: UpdateFileSystemAssociationCommandOutput) => void
  ): void;
  updateFileSystemAssociation(
    args: UpdateFileSystemAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFileSystemAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGatewayInformationCommand}
   */
  updateGatewayInformation(
    args: UpdateGatewayInformationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGatewayInformationCommandOutput>;
  updateGatewayInformation(
    args: UpdateGatewayInformationCommandInput,
    cb: (err: any, data?: UpdateGatewayInformationCommandOutput) => void
  ): void;
  updateGatewayInformation(
    args: UpdateGatewayInformationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGatewayInformationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGatewaySoftwareNowCommand}
   */
  updateGatewaySoftwareNow(
    args: UpdateGatewaySoftwareNowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGatewaySoftwareNowCommandOutput>;
  updateGatewaySoftwareNow(
    args: UpdateGatewaySoftwareNowCommandInput,
    cb: (err: any, data?: UpdateGatewaySoftwareNowCommandOutput) => void
  ): void;
  updateGatewaySoftwareNow(
    args: UpdateGatewaySoftwareNowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGatewaySoftwareNowCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMaintenanceStartTimeCommand}
   */
  updateMaintenanceStartTime(
    args: UpdateMaintenanceStartTimeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMaintenanceStartTimeCommandOutput>;
  updateMaintenanceStartTime(
    args: UpdateMaintenanceStartTimeCommandInput,
    cb: (err: any, data?: UpdateMaintenanceStartTimeCommandOutput) => void
  ): void;
  updateMaintenanceStartTime(
    args: UpdateMaintenanceStartTimeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMaintenanceStartTimeCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateNFSFileShareCommand}
   */
  updateNFSFileShare(
    args: UpdateNFSFileShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateNFSFileShareCommandOutput>;
  updateNFSFileShare(
    args: UpdateNFSFileShareCommandInput,
    cb: (err: any, data?: UpdateNFSFileShareCommandOutput) => void
  ): void;
  updateNFSFileShare(
    args: UpdateNFSFileShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateNFSFileShareCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSMBFileShareCommand}
   */
  updateSMBFileShare(
    args: UpdateSMBFileShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSMBFileShareCommandOutput>;
  updateSMBFileShare(
    args: UpdateSMBFileShareCommandInput,
    cb: (err: any, data?: UpdateSMBFileShareCommandOutput) => void
  ): void;
  updateSMBFileShare(
    args: UpdateSMBFileShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSMBFileShareCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSMBFileShareVisibilityCommand}
   */
  updateSMBFileShareVisibility(
    args: UpdateSMBFileShareVisibilityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSMBFileShareVisibilityCommandOutput>;
  updateSMBFileShareVisibility(
    args: UpdateSMBFileShareVisibilityCommandInput,
    cb: (err: any, data?: UpdateSMBFileShareVisibilityCommandOutput) => void
  ): void;
  updateSMBFileShareVisibility(
    args: UpdateSMBFileShareVisibilityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSMBFileShareVisibilityCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSMBLocalGroupsCommand}
   */
  updateSMBLocalGroups(
    args: UpdateSMBLocalGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSMBLocalGroupsCommandOutput>;
  updateSMBLocalGroups(
    args: UpdateSMBLocalGroupsCommandInput,
    cb: (err: any, data?: UpdateSMBLocalGroupsCommandOutput) => void
  ): void;
  updateSMBLocalGroups(
    args: UpdateSMBLocalGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSMBLocalGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSMBSecurityStrategyCommand}
   */
  updateSMBSecurityStrategy(
    args: UpdateSMBSecurityStrategyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSMBSecurityStrategyCommandOutput>;
  updateSMBSecurityStrategy(
    args: UpdateSMBSecurityStrategyCommandInput,
    cb: (err: any, data?: UpdateSMBSecurityStrategyCommandOutput) => void
  ): void;
  updateSMBSecurityStrategy(
    args: UpdateSMBSecurityStrategyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSMBSecurityStrategyCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSnapshotScheduleCommand}
   */
  updateSnapshotSchedule(
    args: UpdateSnapshotScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSnapshotScheduleCommandOutput>;
  updateSnapshotSchedule(
    args: UpdateSnapshotScheduleCommandInput,
    cb: (err: any, data?: UpdateSnapshotScheduleCommandOutput) => void
  ): void;
  updateSnapshotSchedule(
    args: UpdateSnapshotScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSnapshotScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateVTLDeviceTypeCommand}
   */
  updateVTLDeviceType(
    args: UpdateVTLDeviceTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateVTLDeviceTypeCommandOutput>;
  updateVTLDeviceType(
    args: UpdateVTLDeviceTypeCommandInput,
    cb: (err: any, data?: UpdateVTLDeviceTypeCommandOutput) => void
  ): void;
  updateVTLDeviceType(
    args: UpdateVTLDeviceTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVTLDeviceTypeCommandOutput) => void
  ): void;
}

/**
 * @public
 * <fullname>Storage Gateway Service</fullname>
 *          <p>Storage Gateway is the service that connects an on-premises software appliance
 *          with cloud-based storage to provide seamless and secure integration between an
 *          organization's on-premises IT environment and the Amazon Web Services storage
 *          infrastructure. The service enables you to securely upload data to the Amazon Web Services Cloud for cost effective backup and rapid disaster recovery.</p>
 *          <p>Use the following links to get started using the <i>Storage Gateway
 *             Service API Reference</i>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/AWSStorageGatewayAPI.html#AWSStorageGatewayHTTPRequestsHeaders">Storage Gateway required request headers</a>: Describes the required
 *                headers that you must send with every POST request to Storage Gateway.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/AWSStorageGatewayAPI.html#AWSStorageGatewaySigningRequests">Signing requests</a>: Storage Gateway requires that you authenticate
 *                every request you send; this topic describes how sign such a request.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/AWSStorageGatewayAPI.html#APIErrorResponses">Error responses</a>: Provides reference information about Storage Gateway errors.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_Operations.html">Operations in Storage Gateway</a>: Contains detailed descriptions of all Storage Gateway operations, their request parameters, response elements, possible errors, and
 *                examples of requests and responses.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/general/latest/gr/sg.html">Storage Gateway
 *                   endpoints and quotas</a>: Provides a list of each Amazon Web Services Region
 *                and the endpoints available for use with Storage Gateway.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>Storage Gateway resource IDs are in uppercase. When you use these resource IDs
 *             with the Amazon EC2 API, EC2 expects resource IDs in lowercase. You must change
 *             your resource ID to lowercase to use it with the EC2 API. For example, in Storage
 *             Gateway the ID for a volume might be <code>vol-AA22BB012345DAF670</code>. When you use
 *             this ID with the EC2 API, you must change it to <code>vol-aa22bb012345daf670</code>.
 *             Otherwise, the EC2 API might not behave as expected.</p>
 *          </note>
 *          <important>
 *             <p>IDs for Storage Gateway volumes and Amazon EBS snapshots created from gateway
 *             volumes are changing to a longer format. Starting in December 2016, all new volumes and
 *             snapshots will be created with a 17-character string. Starting in April 2016, you will
 *             be able to use these longer IDs so you can test your systems with the new format. For
 *             more information, see <a href="http://aws.amazon.com/ec2/faqs/#longer-ids">Longer EC2 and
 *                EBS resource IDs</a>.</p>
 *             <p>For example, a volume Amazon Resource Name (ARN) with the longer volume ID format
 *             looks like the following:</p>
 *             <p>
 *                <code>arn:aws:storagegateway:us-west-2:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABBCCDDEEFFG</code>.</p>
 *             <p>A snapshot ID with the longer ID format looks like the following:
 *                <code>snap-78e226633445566ee</code>.</p>
 *             <p>For more information, see <a href="http://forums.aws.amazon.com/ann.jspa?annID=3557">Announcement:
 *                Heads-up – Longer Storage Gateway volume and snapshot IDs coming in
 *             2016</a>.</p>
 *          </important>
 */
export class StorageGateway extends StorageGatewayClient implements StorageGateway {}
createAggregatedClient(commands, StorageGateway);
