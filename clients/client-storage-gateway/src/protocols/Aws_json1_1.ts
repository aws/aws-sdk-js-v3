// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  parseEpochTimestamp as __parseEpochTimestamp,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { ActivateGatewayCommandInput, ActivateGatewayCommandOutput } from "../commands/ActivateGatewayCommand";
import { AddCacheCommandInput, AddCacheCommandOutput } from "../commands/AddCacheCommand";
import { AddTagsToResourceCommandInput, AddTagsToResourceCommandOutput } from "../commands/AddTagsToResourceCommand";
import { AddUploadBufferCommandInput, AddUploadBufferCommandOutput } from "../commands/AddUploadBufferCommand";
import { AddWorkingStorageCommandInput, AddWorkingStorageCommandOutput } from "../commands/AddWorkingStorageCommand";
import { AssignTapePoolCommandInput, AssignTapePoolCommandOutput } from "../commands/AssignTapePoolCommand";
import {
  AssociateFileSystemCommandInput,
  AssociateFileSystemCommandOutput,
} from "../commands/AssociateFileSystemCommand";
import { AttachVolumeCommandInput, AttachVolumeCommandOutput } from "../commands/AttachVolumeCommand";
import { CancelArchivalCommandInput, CancelArchivalCommandOutput } from "../commands/CancelArchivalCommand";
import { CancelRetrievalCommandInput, CancelRetrievalCommandOutput } from "../commands/CancelRetrievalCommand";
import {
  CreateCachediSCSIVolumeCommandInput,
  CreateCachediSCSIVolumeCommandOutput,
} from "../commands/CreateCachediSCSIVolumeCommand";
import { CreateNFSFileShareCommandInput, CreateNFSFileShareCommandOutput } from "../commands/CreateNFSFileShareCommand";
import { CreateSMBFileShareCommandInput, CreateSMBFileShareCommandOutput } from "../commands/CreateSMBFileShareCommand";
import { CreateSnapshotCommandInput, CreateSnapshotCommandOutput } from "../commands/CreateSnapshotCommand";
import {
  CreateSnapshotFromVolumeRecoveryPointCommandInput,
  CreateSnapshotFromVolumeRecoveryPointCommandOutput,
} from "../commands/CreateSnapshotFromVolumeRecoveryPointCommand";
import {
  CreateStorediSCSIVolumeCommandInput,
  CreateStorediSCSIVolumeCommandOutput,
} from "../commands/CreateStorediSCSIVolumeCommand";
import { CreateTapePoolCommandInput, CreateTapePoolCommandOutput } from "../commands/CreateTapePoolCommand";
import { CreateTapesCommandInput, CreateTapesCommandOutput } from "../commands/CreateTapesCommand";
import {
  CreateTapeWithBarcodeCommandInput,
  CreateTapeWithBarcodeCommandOutput,
} from "../commands/CreateTapeWithBarcodeCommand";
import {
  DeleteAutomaticTapeCreationPolicyCommandInput,
  DeleteAutomaticTapeCreationPolicyCommandOutput,
} from "../commands/DeleteAutomaticTapeCreationPolicyCommand";
import {
  DeleteBandwidthRateLimitCommandInput,
  DeleteBandwidthRateLimitCommandOutput,
} from "../commands/DeleteBandwidthRateLimitCommand";
import {
  DeleteChapCredentialsCommandInput,
  DeleteChapCredentialsCommandOutput,
} from "../commands/DeleteChapCredentialsCommand";
import { DeleteFileShareCommandInput, DeleteFileShareCommandOutput } from "../commands/DeleteFileShareCommand";
import { DeleteGatewayCommandInput, DeleteGatewayCommandOutput } from "../commands/DeleteGatewayCommand";
import {
  DeleteSnapshotScheduleCommandInput,
  DeleteSnapshotScheduleCommandOutput,
} from "../commands/DeleteSnapshotScheduleCommand";
import { DeleteTapeArchiveCommandInput, DeleteTapeArchiveCommandOutput } from "../commands/DeleteTapeArchiveCommand";
import { DeleteTapeCommandInput, DeleteTapeCommandOutput } from "../commands/DeleteTapeCommand";
import { DeleteTapePoolCommandInput, DeleteTapePoolCommandOutput } from "../commands/DeleteTapePoolCommand";
import { DeleteVolumeCommandInput, DeleteVolumeCommandOutput } from "../commands/DeleteVolumeCommand";
import {
  DescribeAvailabilityMonitorTestCommandInput,
  DescribeAvailabilityMonitorTestCommandOutput,
} from "../commands/DescribeAvailabilityMonitorTestCommand";
import {
  DescribeBandwidthRateLimitCommandInput,
  DescribeBandwidthRateLimitCommandOutput,
} from "../commands/DescribeBandwidthRateLimitCommand";
import {
  DescribeBandwidthRateLimitScheduleCommandInput,
  DescribeBandwidthRateLimitScheduleCommandOutput,
} from "../commands/DescribeBandwidthRateLimitScheduleCommand";
import { DescribeCacheCommandInput, DescribeCacheCommandOutput } from "../commands/DescribeCacheCommand";
import {
  DescribeCachediSCSIVolumesCommandInput,
  DescribeCachediSCSIVolumesCommandOutput,
} from "../commands/DescribeCachediSCSIVolumesCommand";
import {
  DescribeChapCredentialsCommandInput,
  DescribeChapCredentialsCommandOutput,
} from "../commands/DescribeChapCredentialsCommand";
import {
  DescribeFileSystemAssociationsCommandInput,
  DescribeFileSystemAssociationsCommandOutput,
} from "../commands/DescribeFileSystemAssociationsCommand";
import {
  DescribeGatewayInformationCommandInput,
  DescribeGatewayInformationCommandOutput,
} from "../commands/DescribeGatewayInformationCommand";
import {
  DescribeMaintenanceStartTimeCommandInput,
  DescribeMaintenanceStartTimeCommandOutput,
} from "../commands/DescribeMaintenanceStartTimeCommand";
import {
  DescribeNFSFileSharesCommandInput,
  DescribeNFSFileSharesCommandOutput,
} from "../commands/DescribeNFSFileSharesCommand";
import {
  DescribeSMBFileSharesCommandInput,
  DescribeSMBFileSharesCommandOutput,
} from "../commands/DescribeSMBFileSharesCommand";
import {
  DescribeSMBSettingsCommandInput,
  DescribeSMBSettingsCommandOutput,
} from "../commands/DescribeSMBSettingsCommand";
import {
  DescribeSnapshotScheduleCommandInput,
  DescribeSnapshotScheduleCommandOutput,
} from "../commands/DescribeSnapshotScheduleCommand";
import {
  DescribeStorediSCSIVolumesCommandInput,
  DescribeStorediSCSIVolumesCommandOutput,
} from "../commands/DescribeStorediSCSIVolumesCommand";
import {
  DescribeTapeArchivesCommandInput,
  DescribeTapeArchivesCommandOutput,
} from "../commands/DescribeTapeArchivesCommand";
import {
  DescribeTapeRecoveryPointsCommandInput,
  DescribeTapeRecoveryPointsCommandOutput,
} from "../commands/DescribeTapeRecoveryPointsCommand";
import { DescribeTapesCommandInput, DescribeTapesCommandOutput } from "../commands/DescribeTapesCommand";
import {
  DescribeUploadBufferCommandInput,
  DescribeUploadBufferCommandOutput,
} from "../commands/DescribeUploadBufferCommand";
import { DescribeVTLDevicesCommandInput, DescribeVTLDevicesCommandOutput } from "../commands/DescribeVTLDevicesCommand";
import {
  DescribeWorkingStorageCommandInput,
  DescribeWorkingStorageCommandOutput,
} from "../commands/DescribeWorkingStorageCommand";
import { DetachVolumeCommandInput, DetachVolumeCommandOutput } from "../commands/DetachVolumeCommand";
import { DisableGatewayCommandInput, DisableGatewayCommandOutput } from "../commands/DisableGatewayCommand";
import {
  DisassociateFileSystemCommandInput,
  DisassociateFileSystemCommandOutput,
} from "../commands/DisassociateFileSystemCommand";
import { JoinDomainCommandInput, JoinDomainCommandOutput } from "../commands/JoinDomainCommand";
import {
  ListAutomaticTapeCreationPoliciesCommandInput,
  ListAutomaticTapeCreationPoliciesCommandOutput,
} from "../commands/ListAutomaticTapeCreationPoliciesCommand";
import { ListFileSharesCommandInput, ListFileSharesCommandOutput } from "../commands/ListFileSharesCommand";
import {
  ListFileSystemAssociationsCommandInput,
  ListFileSystemAssociationsCommandOutput,
} from "../commands/ListFileSystemAssociationsCommand";
import { ListGatewaysCommandInput, ListGatewaysCommandOutput } from "../commands/ListGatewaysCommand";
import { ListLocalDisksCommandInput, ListLocalDisksCommandOutput } from "../commands/ListLocalDisksCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListTapePoolsCommandInput, ListTapePoolsCommandOutput } from "../commands/ListTapePoolsCommand";
import { ListTapesCommandInput, ListTapesCommandOutput } from "../commands/ListTapesCommand";
import {
  ListVolumeInitiatorsCommandInput,
  ListVolumeInitiatorsCommandOutput,
} from "../commands/ListVolumeInitiatorsCommand";
import {
  ListVolumeRecoveryPointsCommandInput,
  ListVolumeRecoveryPointsCommandOutput,
} from "../commands/ListVolumeRecoveryPointsCommand";
import { ListVolumesCommandInput, ListVolumesCommandOutput } from "../commands/ListVolumesCommand";
import { NotifyWhenUploadedCommandInput, NotifyWhenUploadedCommandOutput } from "../commands/NotifyWhenUploadedCommand";
import { RefreshCacheCommandInput, RefreshCacheCommandOutput } from "../commands/RefreshCacheCommand";
import {
  RemoveTagsFromResourceCommandInput,
  RemoveTagsFromResourceCommandOutput,
} from "../commands/RemoveTagsFromResourceCommand";
import { ResetCacheCommandInput, ResetCacheCommandOutput } from "../commands/ResetCacheCommand";
import {
  RetrieveTapeArchiveCommandInput,
  RetrieveTapeArchiveCommandOutput,
} from "../commands/RetrieveTapeArchiveCommand";
import {
  RetrieveTapeRecoveryPointCommandInput,
  RetrieveTapeRecoveryPointCommandOutput,
} from "../commands/RetrieveTapeRecoveryPointCommand";
import {
  SetLocalConsolePasswordCommandInput,
  SetLocalConsolePasswordCommandOutput,
} from "../commands/SetLocalConsolePasswordCommand";
import {
  SetSMBGuestPasswordCommandInput,
  SetSMBGuestPasswordCommandOutput,
} from "../commands/SetSMBGuestPasswordCommand";
import { ShutdownGatewayCommandInput, ShutdownGatewayCommandOutput } from "../commands/ShutdownGatewayCommand";
import {
  StartAvailabilityMonitorTestCommandInput,
  StartAvailabilityMonitorTestCommandOutput,
} from "../commands/StartAvailabilityMonitorTestCommand";
import { StartGatewayCommandInput, StartGatewayCommandOutput } from "../commands/StartGatewayCommand";
import {
  UpdateAutomaticTapeCreationPolicyCommandInput,
  UpdateAutomaticTapeCreationPolicyCommandOutput,
} from "../commands/UpdateAutomaticTapeCreationPolicyCommand";
import {
  UpdateBandwidthRateLimitCommandInput,
  UpdateBandwidthRateLimitCommandOutput,
} from "../commands/UpdateBandwidthRateLimitCommand";
import {
  UpdateBandwidthRateLimitScheduleCommandInput,
  UpdateBandwidthRateLimitScheduleCommandOutput,
} from "../commands/UpdateBandwidthRateLimitScheduleCommand";
import {
  UpdateChapCredentialsCommandInput,
  UpdateChapCredentialsCommandOutput,
} from "../commands/UpdateChapCredentialsCommand";
import {
  UpdateFileSystemAssociationCommandInput,
  UpdateFileSystemAssociationCommandOutput,
} from "../commands/UpdateFileSystemAssociationCommand";
import {
  UpdateGatewayInformationCommandInput,
  UpdateGatewayInformationCommandOutput,
} from "../commands/UpdateGatewayInformationCommand";
import {
  UpdateGatewaySoftwareNowCommandInput,
  UpdateGatewaySoftwareNowCommandOutput,
} from "../commands/UpdateGatewaySoftwareNowCommand";
import {
  UpdateMaintenanceStartTimeCommandInput,
  UpdateMaintenanceStartTimeCommandOutput,
} from "../commands/UpdateMaintenanceStartTimeCommand";
import { UpdateNFSFileShareCommandInput, UpdateNFSFileShareCommandOutput } from "../commands/UpdateNFSFileShareCommand";
import { UpdateSMBFileShareCommandInput, UpdateSMBFileShareCommandOutput } from "../commands/UpdateSMBFileShareCommand";
import {
  UpdateSMBFileShareVisibilityCommandInput,
  UpdateSMBFileShareVisibilityCommandOutput,
} from "../commands/UpdateSMBFileShareVisibilityCommand";
import {
  UpdateSMBLocalGroupsCommandInput,
  UpdateSMBLocalGroupsCommandOutput,
} from "../commands/UpdateSMBLocalGroupsCommand";
import {
  UpdateSMBSecurityStrategyCommandInput,
  UpdateSMBSecurityStrategyCommandOutput,
} from "../commands/UpdateSMBSecurityStrategyCommand";
import {
  UpdateSnapshotScheduleCommandInput,
  UpdateSnapshotScheduleCommandOutput,
} from "../commands/UpdateSnapshotScheduleCommand";
import {
  UpdateVTLDeviceTypeCommandInput,
  UpdateVTLDeviceTypeCommandOutput,
} from "../commands/UpdateVTLDeviceTypeCommand";
import {
  ActivateGatewayInput,
  ActivateGatewayOutput,
  AddCacheInput,
  AddCacheOutput,
  AddTagsToResourceInput,
  AddTagsToResourceOutput,
  AddUploadBufferInput,
  AddUploadBufferOutput,
  AddWorkingStorageInput,
  AddWorkingStorageOutput,
  AssignTapePoolInput,
  AssignTapePoolOutput,
  AssociateFileSystemInput,
  AssociateFileSystemOutput,
  AttachVolumeInput,
  AttachVolumeOutput,
  AutomaticTapeCreationPolicyInfo,
  AutomaticTapeCreationRule,
  BandwidthRateLimitInterval,
  CacheAttributes,
  CachediSCSIVolume,
  CancelArchivalInput,
  CancelArchivalOutput,
  CancelRetrievalInput,
  CancelRetrievalOutput,
  ChapInfo,
  CreateCachediSCSIVolumeInput,
  CreateCachediSCSIVolumeOutput,
  CreateNFSFileShareInput,
  CreateNFSFileShareOutput,
  CreateSMBFileShareInput,
  CreateSMBFileShareOutput,
  CreateSnapshotFromVolumeRecoveryPointInput,
  CreateSnapshotFromVolumeRecoveryPointOutput,
  CreateSnapshotInput,
  CreateSnapshotOutput,
  CreateStorediSCSIVolumeInput,
  CreateStorediSCSIVolumeOutput,
  CreateTapePoolInput,
  CreateTapePoolOutput,
  CreateTapesInput,
  CreateTapesOutput,
  CreateTapeWithBarcodeInput,
  CreateTapeWithBarcodeOutput,
  DeleteAutomaticTapeCreationPolicyInput,
  DeleteAutomaticTapeCreationPolicyOutput,
  DeleteBandwidthRateLimitInput,
  DeleteBandwidthRateLimitOutput,
  DeleteChapCredentialsInput,
  DeleteChapCredentialsOutput,
  DeleteFileShareInput,
  DeleteFileShareOutput,
  DeleteGatewayInput,
  DeleteGatewayOutput,
  DeleteSnapshotScheduleInput,
  DeleteSnapshotScheduleOutput,
  DeleteTapeArchiveInput,
  DeleteTapeArchiveOutput,
  DeleteTapeInput,
  DeleteTapeOutput,
  DeleteTapePoolInput,
  DeleteTapePoolOutput,
  DeleteVolumeInput,
  DeleteVolumeOutput,
  DescribeAvailabilityMonitorTestInput,
  DescribeAvailabilityMonitorTestOutput,
  DescribeBandwidthRateLimitInput,
  DescribeBandwidthRateLimitOutput,
  DescribeBandwidthRateLimitScheduleInput,
  DescribeBandwidthRateLimitScheduleOutput,
  DescribeCachediSCSIVolumesInput,
  DescribeCachediSCSIVolumesOutput,
  DescribeCacheInput,
  DescribeCacheOutput,
  DescribeChapCredentialsInput,
  DescribeChapCredentialsOutput,
  DescribeFileSystemAssociationsInput,
  DescribeFileSystemAssociationsOutput,
  DescribeGatewayInformationInput,
  DescribeGatewayInformationOutput,
  DescribeMaintenanceStartTimeInput,
  DescribeMaintenanceStartTimeOutput,
  DescribeNFSFileSharesInput,
  DescribeNFSFileSharesOutput,
  DescribeSMBFileSharesInput,
  DescribeSMBFileSharesOutput,
  DescribeSMBSettingsInput,
  DescribeSMBSettingsOutput,
  DescribeSnapshotScheduleInput,
  DescribeSnapshotScheduleOutput,
  DescribeStorediSCSIVolumesInput,
  DescribeStorediSCSIVolumesOutput,
  DescribeTapeArchivesInput,
  DescribeTapeArchivesOutput,
  DescribeTapeRecoveryPointsInput,
  DescribeTapeRecoveryPointsOutput,
  DescribeTapesInput,
  DescribeTapesOutput,
  DescribeUploadBufferInput,
  DescribeUploadBufferOutput,
  DescribeVTLDevicesInput,
  DescribeVTLDevicesOutput,
  DescribeWorkingStorageInput,
  DescribeWorkingStorageOutput,
  DetachVolumeInput,
  DetachVolumeOutput,
  DeviceiSCSIAttributes,
  DisableGatewayInput,
  DisableGatewayOutput,
  DisassociateFileSystemInput,
  DisassociateFileSystemOutput,
  Disk,
  EndpointNetworkConfiguration,
  FileShareInfo,
  FileSystemAssociationInfo,
  FileSystemAssociationStatusDetail,
  FileSystemAssociationSummary,
  GatewayCapacity,
  GatewayInfo,
  InternalServerError,
  InvalidGatewayRequestException,
  JoinDomainInput,
  JoinDomainOutput,
  ListAutomaticTapeCreationPoliciesInput,
  ListAutomaticTapeCreationPoliciesOutput,
  ListFileSharesInput,
  ListFileSharesOutput,
  ListFileSystemAssociationsInput,
  ListFileSystemAssociationsOutput,
  ListGatewaysInput,
  ListGatewaysOutput,
  ListLocalDisksInput,
  ListLocalDisksOutput,
  ListTagsForResourceInput,
  ListTagsForResourceOutput,
  ListTapePoolsInput,
  ListTapePoolsOutput,
  ListTapesInput,
  ListTapesOutput,
  ListVolumeInitiatorsInput,
  ListVolumeInitiatorsOutput,
  ListVolumeRecoveryPointsInput,
  ListVolumeRecoveryPointsOutput,
  ListVolumesInput,
  ListVolumesOutput,
  NetworkInterface,
  NFSFileShareDefaults,
  NFSFileShareInfo,
  NotifyWhenUploadedInput,
  NotifyWhenUploadedOutput,
  PoolInfo,
  RefreshCacheInput,
  RefreshCacheOutput,
  RemoveTagsFromResourceInput,
  RemoveTagsFromResourceOutput,
  ResetCacheInput,
  ResetCacheOutput,
  RetrieveTapeArchiveInput,
  RetrieveTapeArchiveOutput,
  RetrieveTapeRecoveryPointInput,
  RetrieveTapeRecoveryPointOutput,
  ServiceUnavailableError,
  SetLocalConsolePasswordInput,
  SetLocalConsolePasswordOutput,
  SetSMBGuestPasswordInput,
  SetSMBGuestPasswordOutput,
  ShutdownGatewayInput,
  ShutdownGatewayOutput,
  SMBFileShareInfo,
  SMBLocalGroups,
  StartAvailabilityMonitorTestInput,
  StartAvailabilityMonitorTestOutput,
  StartGatewayInput,
  StartGatewayOutput,
  StorageGatewayError,
  StorediSCSIVolume,
  Tag,
  Tape,
  TapeArchive,
  TapeInfo,
  TapeRecoveryPointInfo,
  UpdateAutomaticTapeCreationPolicyInput,
  UpdateAutomaticTapeCreationPolicyOutput,
  UpdateBandwidthRateLimitInput,
  UpdateBandwidthRateLimitOutput,
  UpdateBandwidthRateLimitScheduleInput,
  UpdateBandwidthRateLimitScheduleOutput,
  UpdateChapCredentialsInput,
  UpdateChapCredentialsOutput,
  UpdateFileSystemAssociationInput,
  UpdateFileSystemAssociationOutput,
  UpdateGatewayInformationInput,
  UpdateGatewayInformationOutput,
  UpdateGatewaySoftwareNowInput,
  UpdateGatewaySoftwareNowOutput,
  UpdateMaintenanceStartTimeInput,
  UpdateMaintenanceStartTimeOutput,
  UpdateNFSFileShareInput,
  UpdateNFSFileShareOutput,
  UpdateSMBFileShareInput,
  UpdateSMBFileShareOutput,
  UpdateSMBFileShareVisibilityInput,
  UpdateSMBFileShareVisibilityOutput,
  UpdateSMBLocalGroupsInput,
  UpdateSMBLocalGroupsOutput,
  UpdateSMBSecurityStrategyInput,
  UpdateSMBSecurityStrategyOutput,
  UpdateSnapshotScheduleInput,
  UpdateSnapshotScheduleOutput,
  UpdateVTLDeviceTypeInput,
  UpdateVTLDeviceTypeOutput,
  VolumeInfo,
  VolumeiSCSIAttributes,
  VolumeRecoveryPointInfo,
  VTLDevice,
} from "../models/models_0";
import { StorageGatewayServiceException as __BaseException } from "../models/StorageGatewayServiceException";

/**
 * serializeAws_json1_1ActivateGatewayCommand
 */
export const se_ActivateGatewayCommand = async (
  input: ActivateGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ActivateGateway");
  let body: any;
  body = JSON.stringify(se_ActivateGatewayInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AddCacheCommand
 */
export const se_AddCacheCommand = async (
  input: AddCacheCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AddCache");
  let body: any;
  body = JSON.stringify(se_AddCacheInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AddTagsToResourceCommand
 */
export const se_AddTagsToResourceCommand = async (
  input: AddTagsToResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AddTagsToResource");
  let body: any;
  body = JSON.stringify(se_AddTagsToResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AddUploadBufferCommand
 */
export const se_AddUploadBufferCommand = async (
  input: AddUploadBufferCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AddUploadBuffer");
  let body: any;
  body = JSON.stringify(se_AddUploadBufferInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AddWorkingStorageCommand
 */
export const se_AddWorkingStorageCommand = async (
  input: AddWorkingStorageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AddWorkingStorage");
  let body: any;
  body = JSON.stringify(se_AddWorkingStorageInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AssignTapePoolCommand
 */
export const se_AssignTapePoolCommand = async (
  input: AssignTapePoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssignTapePool");
  let body: any;
  body = JSON.stringify(se_AssignTapePoolInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AssociateFileSystemCommand
 */
export const se_AssociateFileSystemCommand = async (
  input: AssociateFileSystemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateFileSystem");
  let body: any;
  body = JSON.stringify(se_AssociateFileSystemInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AttachVolumeCommand
 */
export const se_AttachVolumeCommand = async (
  input: AttachVolumeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AttachVolume");
  let body: any;
  body = JSON.stringify(se_AttachVolumeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CancelArchivalCommand
 */
export const se_CancelArchivalCommand = async (
  input: CancelArchivalCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CancelArchival");
  let body: any;
  body = JSON.stringify(se_CancelArchivalInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CancelRetrievalCommand
 */
export const se_CancelRetrievalCommand = async (
  input: CancelRetrievalCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CancelRetrieval");
  let body: any;
  body = JSON.stringify(se_CancelRetrievalInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateCachediSCSIVolumeCommand
 */
export const se_CreateCachediSCSIVolumeCommand = async (
  input: CreateCachediSCSIVolumeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateCachediSCSIVolume");
  let body: any;
  body = JSON.stringify(se_CreateCachediSCSIVolumeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateNFSFileShareCommand
 */
export const se_CreateNFSFileShareCommand = async (
  input: CreateNFSFileShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateNFSFileShare");
  let body: any;
  body = JSON.stringify(se_CreateNFSFileShareInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateSMBFileShareCommand
 */
export const se_CreateSMBFileShareCommand = async (
  input: CreateSMBFileShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateSMBFileShare");
  let body: any;
  body = JSON.stringify(se_CreateSMBFileShareInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateSnapshotCommand
 */
export const se_CreateSnapshotCommand = async (
  input: CreateSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateSnapshot");
  let body: any;
  body = JSON.stringify(se_CreateSnapshotInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointCommand
 */
export const se_CreateSnapshotFromVolumeRecoveryPointCommand = async (
  input: CreateSnapshotFromVolumeRecoveryPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateSnapshotFromVolumeRecoveryPoint");
  let body: any;
  body = JSON.stringify(se_CreateSnapshotFromVolumeRecoveryPointInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateStorediSCSIVolumeCommand
 */
export const se_CreateStorediSCSIVolumeCommand = async (
  input: CreateStorediSCSIVolumeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateStorediSCSIVolume");
  let body: any;
  body = JSON.stringify(se_CreateStorediSCSIVolumeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateTapePoolCommand
 */
export const se_CreateTapePoolCommand = async (
  input: CreateTapePoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateTapePool");
  let body: any;
  body = JSON.stringify(se_CreateTapePoolInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateTapesCommand
 */
export const se_CreateTapesCommand = async (
  input: CreateTapesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateTapes");
  let body: any;
  body = JSON.stringify(se_CreateTapesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateTapeWithBarcodeCommand
 */
export const se_CreateTapeWithBarcodeCommand = async (
  input: CreateTapeWithBarcodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateTapeWithBarcode");
  let body: any;
  body = JSON.stringify(se_CreateTapeWithBarcodeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteAutomaticTapeCreationPolicyCommand
 */
export const se_DeleteAutomaticTapeCreationPolicyCommand = async (
  input: DeleteAutomaticTapeCreationPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteAutomaticTapeCreationPolicy");
  let body: any;
  body = JSON.stringify(se_DeleteAutomaticTapeCreationPolicyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteBandwidthRateLimitCommand
 */
export const se_DeleteBandwidthRateLimitCommand = async (
  input: DeleteBandwidthRateLimitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteBandwidthRateLimit");
  let body: any;
  body = JSON.stringify(se_DeleteBandwidthRateLimitInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteChapCredentialsCommand
 */
export const se_DeleteChapCredentialsCommand = async (
  input: DeleteChapCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteChapCredentials");
  let body: any;
  body = JSON.stringify(se_DeleteChapCredentialsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteFileShareCommand
 */
export const se_DeleteFileShareCommand = async (
  input: DeleteFileShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteFileShare");
  let body: any;
  body = JSON.stringify(se_DeleteFileShareInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteGatewayCommand
 */
export const se_DeleteGatewayCommand = async (
  input: DeleteGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteGateway");
  let body: any;
  body = JSON.stringify(se_DeleteGatewayInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteSnapshotScheduleCommand
 */
export const se_DeleteSnapshotScheduleCommand = async (
  input: DeleteSnapshotScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteSnapshotSchedule");
  let body: any;
  body = JSON.stringify(se_DeleteSnapshotScheduleInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteTapeCommand
 */
export const se_DeleteTapeCommand = async (
  input: DeleteTapeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteTape");
  let body: any;
  body = JSON.stringify(se_DeleteTapeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteTapeArchiveCommand
 */
export const se_DeleteTapeArchiveCommand = async (
  input: DeleteTapeArchiveCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteTapeArchive");
  let body: any;
  body = JSON.stringify(se_DeleteTapeArchiveInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteTapePoolCommand
 */
export const se_DeleteTapePoolCommand = async (
  input: DeleteTapePoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteTapePool");
  let body: any;
  body = JSON.stringify(se_DeleteTapePoolInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteVolumeCommand
 */
export const se_DeleteVolumeCommand = async (
  input: DeleteVolumeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteVolume");
  let body: any;
  body = JSON.stringify(se_DeleteVolumeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAvailabilityMonitorTestCommand
 */
export const se_DescribeAvailabilityMonitorTestCommand = async (
  input: DescribeAvailabilityMonitorTestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeAvailabilityMonitorTest");
  let body: any;
  body = JSON.stringify(se_DescribeAvailabilityMonitorTestInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeBandwidthRateLimitCommand
 */
export const se_DescribeBandwidthRateLimitCommand = async (
  input: DescribeBandwidthRateLimitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeBandwidthRateLimit");
  let body: any;
  body = JSON.stringify(se_DescribeBandwidthRateLimitInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeBandwidthRateLimitScheduleCommand
 */
export const se_DescribeBandwidthRateLimitScheduleCommand = async (
  input: DescribeBandwidthRateLimitScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeBandwidthRateLimitSchedule");
  let body: any;
  body = JSON.stringify(se_DescribeBandwidthRateLimitScheduleInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeCacheCommand
 */
export const se_DescribeCacheCommand = async (
  input: DescribeCacheCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeCache");
  let body: any;
  body = JSON.stringify(se_DescribeCacheInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeCachediSCSIVolumesCommand
 */
export const se_DescribeCachediSCSIVolumesCommand = async (
  input: DescribeCachediSCSIVolumesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeCachediSCSIVolumes");
  let body: any;
  body = JSON.stringify(se_DescribeCachediSCSIVolumesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeChapCredentialsCommand
 */
export const se_DescribeChapCredentialsCommand = async (
  input: DescribeChapCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeChapCredentials");
  let body: any;
  body = JSON.stringify(se_DescribeChapCredentialsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeFileSystemAssociationsCommand
 */
export const se_DescribeFileSystemAssociationsCommand = async (
  input: DescribeFileSystemAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeFileSystemAssociations");
  let body: any;
  body = JSON.stringify(se_DescribeFileSystemAssociationsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeGatewayInformationCommand
 */
export const se_DescribeGatewayInformationCommand = async (
  input: DescribeGatewayInformationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeGatewayInformation");
  let body: any;
  body = JSON.stringify(se_DescribeGatewayInformationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeMaintenanceStartTimeCommand
 */
export const se_DescribeMaintenanceStartTimeCommand = async (
  input: DescribeMaintenanceStartTimeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeMaintenanceStartTime");
  let body: any;
  body = JSON.stringify(se_DescribeMaintenanceStartTimeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeNFSFileSharesCommand
 */
export const se_DescribeNFSFileSharesCommand = async (
  input: DescribeNFSFileSharesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeNFSFileShares");
  let body: any;
  body = JSON.stringify(se_DescribeNFSFileSharesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeSMBFileSharesCommand
 */
export const se_DescribeSMBFileSharesCommand = async (
  input: DescribeSMBFileSharesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeSMBFileShares");
  let body: any;
  body = JSON.stringify(se_DescribeSMBFileSharesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeSMBSettingsCommand
 */
export const se_DescribeSMBSettingsCommand = async (
  input: DescribeSMBSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeSMBSettings");
  let body: any;
  body = JSON.stringify(se_DescribeSMBSettingsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeSnapshotScheduleCommand
 */
export const se_DescribeSnapshotScheduleCommand = async (
  input: DescribeSnapshotScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeSnapshotSchedule");
  let body: any;
  body = JSON.stringify(se_DescribeSnapshotScheduleInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeStorediSCSIVolumesCommand
 */
export const se_DescribeStorediSCSIVolumesCommand = async (
  input: DescribeStorediSCSIVolumesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeStorediSCSIVolumes");
  let body: any;
  body = JSON.stringify(se_DescribeStorediSCSIVolumesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeTapeArchivesCommand
 */
export const se_DescribeTapeArchivesCommand = async (
  input: DescribeTapeArchivesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeTapeArchives");
  let body: any;
  body = JSON.stringify(se_DescribeTapeArchivesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeTapeRecoveryPointsCommand
 */
export const se_DescribeTapeRecoveryPointsCommand = async (
  input: DescribeTapeRecoveryPointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeTapeRecoveryPoints");
  let body: any;
  body = JSON.stringify(se_DescribeTapeRecoveryPointsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeTapesCommand
 */
export const se_DescribeTapesCommand = async (
  input: DescribeTapesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeTapes");
  let body: any;
  body = JSON.stringify(se_DescribeTapesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeUploadBufferCommand
 */
export const se_DescribeUploadBufferCommand = async (
  input: DescribeUploadBufferCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeUploadBuffer");
  let body: any;
  body = JSON.stringify(se_DescribeUploadBufferInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeVTLDevicesCommand
 */
export const se_DescribeVTLDevicesCommand = async (
  input: DescribeVTLDevicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeVTLDevices");
  let body: any;
  body = JSON.stringify(se_DescribeVTLDevicesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeWorkingStorageCommand
 */
export const se_DescribeWorkingStorageCommand = async (
  input: DescribeWorkingStorageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeWorkingStorage");
  let body: any;
  body = JSON.stringify(se_DescribeWorkingStorageInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DetachVolumeCommand
 */
export const se_DetachVolumeCommand = async (
  input: DetachVolumeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DetachVolume");
  let body: any;
  body = JSON.stringify(se_DetachVolumeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisableGatewayCommand
 */
export const se_DisableGatewayCommand = async (
  input: DisableGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisableGateway");
  let body: any;
  body = JSON.stringify(se_DisableGatewayInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateFileSystemCommand
 */
export const se_DisassociateFileSystemCommand = async (
  input: DisassociateFileSystemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateFileSystem");
  let body: any;
  body = JSON.stringify(se_DisassociateFileSystemInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1JoinDomainCommand
 */
export const se_JoinDomainCommand = async (
  input: JoinDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("JoinDomain");
  let body: any;
  body = JSON.stringify(se_JoinDomainInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAutomaticTapeCreationPoliciesCommand
 */
export const se_ListAutomaticTapeCreationPoliciesCommand = async (
  input: ListAutomaticTapeCreationPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAutomaticTapeCreationPolicies");
  let body: any;
  body = JSON.stringify(se_ListAutomaticTapeCreationPoliciesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListFileSharesCommand
 */
export const se_ListFileSharesCommand = async (
  input: ListFileSharesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListFileShares");
  let body: any;
  body = JSON.stringify(se_ListFileSharesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListFileSystemAssociationsCommand
 */
export const se_ListFileSystemAssociationsCommand = async (
  input: ListFileSystemAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListFileSystemAssociations");
  let body: any;
  body = JSON.stringify(se_ListFileSystemAssociationsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListGatewaysCommand
 */
export const se_ListGatewaysCommand = async (
  input: ListGatewaysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListGateways");
  let body: any;
  body = JSON.stringify(se_ListGatewaysInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListLocalDisksCommand
 */
export const se_ListLocalDisksCommand = async (
  input: ListLocalDisksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListLocalDisks");
  let body: any;
  body = JSON.stringify(se_ListLocalDisksInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTagsForResource");
  let body: any;
  body = JSON.stringify(se_ListTagsForResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTapePoolsCommand
 */
export const se_ListTapePoolsCommand = async (
  input: ListTapePoolsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTapePools");
  let body: any;
  body = JSON.stringify(se_ListTapePoolsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTapesCommand
 */
export const se_ListTapesCommand = async (
  input: ListTapesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTapes");
  let body: any;
  body = JSON.stringify(se_ListTapesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListVolumeInitiatorsCommand
 */
export const se_ListVolumeInitiatorsCommand = async (
  input: ListVolumeInitiatorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListVolumeInitiators");
  let body: any;
  body = JSON.stringify(se_ListVolumeInitiatorsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListVolumeRecoveryPointsCommand
 */
export const se_ListVolumeRecoveryPointsCommand = async (
  input: ListVolumeRecoveryPointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListVolumeRecoveryPoints");
  let body: any;
  body = JSON.stringify(se_ListVolumeRecoveryPointsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListVolumesCommand
 */
export const se_ListVolumesCommand = async (
  input: ListVolumesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListVolumes");
  let body: any;
  body = JSON.stringify(se_ListVolumesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1NotifyWhenUploadedCommand
 */
export const se_NotifyWhenUploadedCommand = async (
  input: NotifyWhenUploadedCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("NotifyWhenUploaded");
  let body: any;
  body = JSON.stringify(se_NotifyWhenUploadedInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RefreshCacheCommand
 */
export const se_RefreshCacheCommand = async (
  input: RefreshCacheCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RefreshCache");
  let body: any;
  body = JSON.stringify(se_RefreshCacheInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RemoveTagsFromResourceCommand
 */
export const se_RemoveTagsFromResourceCommand = async (
  input: RemoveTagsFromResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RemoveTagsFromResource");
  let body: any;
  body = JSON.stringify(se_RemoveTagsFromResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ResetCacheCommand
 */
export const se_ResetCacheCommand = async (
  input: ResetCacheCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ResetCache");
  let body: any;
  body = JSON.stringify(se_ResetCacheInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RetrieveTapeArchiveCommand
 */
export const se_RetrieveTapeArchiveCommand = async (
  input: RetrieveTapeArchiveCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RetrieveTapeArchive");
  let body: any;
  body = JSON.stringify(se_RetrieveTapeArchiveInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RetrieveTapeRecoveryPointCommand
 */
export const se_RetrieveTapeRecoveryPointCommand = async (
  input: RetrieveTapeRecoveryPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RetrieveTapeRecoveryPoint");
  let body: any;
  body = JSON.stringify(se_RetrieveTapeRecoveryPointInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SetLocalConsolePasswordCommand
 */
export const se_SetLocalConsolePasswordCommand = async (
  input: SetLocalConsolePasswordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SetLocalConsolePassword");
  let body: any;
  body = JSON.stringify(se_SetLocalConsolePasswordInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SetSMBGuestPasswordCommand
 */
export const se_SetSMBGuestPasswordCommand = async (
  input: SetSMBGuestPasswordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SetSMBGuestPassword");
  let body: any;
  body = JSON.stringify(se_SetSMBGuestPasswordInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ShutdownGatewayCommand
 */
export const se_ShutdownGatewayCommand = async (
  input: ShutdownGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ShutdownGateway");
  let body: any;
  body = JSON.stringify(se_ShutdownGatewayInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartAvailabilityMonitorTestCommand
 */
export const se_StartAvailabilityMonitorTestCommand = async (
  input: StartAvailabilityMonitorTestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartAvailabilityMonitorTest");
  let body: any;
  body = JSON.stringify(se_StartAvailabilityMonitorTestInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartGatewayCommand
 */
export const se_StartGatewayCommand = async (
  input: StartGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartGateway");
  let body: any;
  body = JSON.stringify(se_StartGatewayInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateAutomaticTapeCreationPolicyCommand
 */
export const se_UpdateAutomaticTapeCreationPolicyCommand = async (
  input: UpdateAutomaticTapeCreationPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateAutomaticTapeCreationPolicy");
  let body: any;
  body = JSON.stringify(se_UpdateAutomaticTapeCreationPolicyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateBandwidthRateLimitCommand
 */
export const se_UpdateBandwidthRateLimitCommand = async (
  input: UpdateBandwidthRateLimitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateBandwidthRateLimit");
  let body: any;
  body = JSON.stringify(se_UpdateBandwidthRateLimitInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateBandwidthRateLimitScheduleCommand
 */
export const se_UpdateBandwidthRateLimitScheduleCommand = async (
  input: UpdateBandwidthRateLimitScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateBandwidthRateLimitSchedule");
  let body: any;
  body = JSON.stringify(se_UpdateBandwidthRateLimitScheduleInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateChapCredentialsCommand
 */
export const se_UpdateChapCredentialsCommand = async (
  input: UpdateChapCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateChapCredentials");
  let body: any;
  body = JSON.stringify(se_UpdateChapCredentialsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateFileSystemAssociationCommand
 */
export const se_UpdateFileSystemAssociationCommand = async (
  input: UpdateFileSystemAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateFileSystemAssociation");
  let body: any;
  body = JSON.stringify(se_UpdateFileSystemAssociationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateGatewayInformationCommand
 */
export const se_UpdateGatewayInformationCommand = async (
  input: UpdateGatewayInformationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateGatewayInformation");
  let body: any;
  body = JSON.stringify(se_UpdateGatewayInformationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateGatewaySoftwareNowCommand
 */
export const se_UpdateGatewaySoftwareNowCommand = async (
  input: UpdateGatewaySoftwareNowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateGatewaySoftwareNow");
  let body: any;
  body = JSON.stringify(se_UpdateGatewaySoftwareNowInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateMaintenanceStartTimeCommand
 */
export const se_UpdateMaintenanceStartTimeCommand = async (
  input: UpdateMaintenanceStartTimeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateMaintenanceStartTime");
  let body: any;
  body = JSON.stringify(se_UpdateMaintenanceStartTimeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateNFSFileShareCommand
 */
export const se_UpdateNFSFileShareCommand = async (
  input: UpdateNFSFileShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateNFSFileShare");
  let body: any;
  body = JSON.stringify(se_UpdateNFSFileShareInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateSMBFileShareCommand
 */
export const se_UpdateSMBFileShareCommand = async (
  input: UpdateSMBFileShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateSMBFileShare");
  let body: any;
  body = JSON.stringify(se_UpdateSMBFileShareInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateSMBFileShareVisibilityCommand
 */
export const se_UpdateSMBFileShareVisibilityCommand = async (
  input: UpdateSMBFileShareVisibilityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateSMBFileShareVisibility");
  let body: any;
  body = JSON.stringify(se_UpdateSMBFileShareVisibilityInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateSMBLocalGroupsCommand
 */
export const se_UpdateSMBLocalGroupsCommand = async (
  input: UpdateSMBLocalGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateSMBLocalGroups");
  let body: any;
  body = JSON.stringify(se_UpdateSMBLocalGroupsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateSMBSecurityStrategyCommand
 */
export const se_UpdateSMBSecurityStrategyCommand = async (
  input: UpdateSMBSecurityStrategyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateSMBSecurityStrategy");
  let body: any;
  body = JSON.stringify(se_UpdateSMBSecurityStrategyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateSnapshotScheduleCommand
 */
export const se_UpdateSnapshotScheduleCommand = async (
  input: UpdateSnapshotScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateSnapshotSchedule");
  let body: any;
  body = JSON.stringify(se_UpdateSnapshotScheduleInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateVTLDeviceTypeCommand
 */
export const se_UpdateVTLDeviceTypeCommand = async (
  input: UpdateVTLDeviceTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateVTLDeviceType");
  let body: any;
  body = JSON.stringify(se_UpdateVTLDeviceTypeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1ActivateGatewayCommand
 */
export const de_ActivateGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ActivateGatewayCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ActivateGatewayCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ActivateGatewayOutput(data, context);
  const response: ActivateGatewayCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ActivateGatewayCommandError
 */
const de_ActivateGatewayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ActivateGatewayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AddCacheCommand
 */
export const de_AddCacheCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddCacheCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AddCacheCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AddCacheOutput(data, context);
  const response: AddCacheCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AddCacheCommandError
 */
const de_AddCacheCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddCacheCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AddTagsToResourceCommand
 */
export const de_AddTagsToResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AddTagsToResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AddTagsToResourceOutput(data, context);
  const response: AddTagsToResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AddTagsToResourceCommandError
 */
const de_AddTagsToResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AddUploadBufferCommand
 */
export const de_AddUploadBufferCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddUploadBufferCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AddUploadBufferCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AddUploadBufferOutput(data, context);
  const response: AddUploadBufferCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AddUploadBufferCommandError
 */
const de_AddUploadBufferCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddUploadBufferCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AddWorkingStorageCommand
 */
export const de_AddWorkingStorageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddWorkingStorageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AddWorkingStorageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AddWorkingStorageOutput(data, context);
  const response: AddWorkingStorageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AddWorkingStorageCommandError
 */
const de_AddWorkingStorageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddWorkingStorageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AssignTapePoolCommand
 */
export const de_AssignTapePoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssignTapePoolCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssignTapePoolCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AssignTapePoolOutput(data, context);
  const response: AssignTapePoolCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AssignTapePoolCommandError
 */
const de_AssignTapePoolCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssignTapePoolCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AssociateFileSystemCommand
 */
export const de_AssociateFileSystemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateFileSystemCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateFileSystemCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AssociateFileSystemOutput(data, context);
  const response: AssociateFileSystemCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AssociateFileSystemCommandError
 */
const de_AssociateFileSystemCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateFileSystemCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AttachVolumeCommand
 */
export const de_AttachVolumeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachVolumeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AttachVolumeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AttachVolumeOutput(data, context);
  const response: AttachVolumeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AttachVolumeCommandError
 */
const de_AttachVolumeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachVolumeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CancelArchivalCommand
 */
export const de_CancelArchivalCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelArchivalCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CancelArchivalCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CancelArchivalOutput(data, context);
  const response: CancelArchivalCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CancelArchivalCommandError
 */
const de_CancelArchivalCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelArchivalCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CancelRetrievalCommand
 */
export const de_CancelRetrievalCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelRetrievalCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CancelRetrievalCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CancelRetrievalOutput(data, context);
  const response: CancelRetrievalCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CancelRetrievalCommandError
 */
const de_CancelRetrievalCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelRetrievalCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateCachediSCSIVolumeCommand
 */
export const de_CreateCachediSCSIVolumeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCachediSCSIVolumeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateCachediSCSIVolumeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateCachediSCSIVolumeOutput(data, context);
  const response: CreateCachediSCSIVolumeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateCachediSCSIVolumeCommandError
 */
const de_CreateCachediSCSIVolumeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCachediSCSIVolumeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateNFSFileShareCommand
 */
export const de_CreateNFSFileShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNFSFileShareCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateNFSFileShareCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateNFSFileShareOutput(data, context);
  const response: CreateNFSFileShareCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateNFSFileShareCommandError
 */
const de_CreateNFSFileShareCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNFSFileShareCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateSMBFileShareCommand
 */
export const de_CreateSMBFileShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSMBFileShareCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateSMBFileShareCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateSMBFileShareOutput(data, context);
  const response: CreateSMBFileShareCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateSMBFileShareCommandError
 */
const de_CreateSMBFileShareCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSMBFileShareCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateSnapshotCommand
 */
export const de_CreateSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateSnapshotOutput(data, context);
  const response: CreateSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateSnapshotCommandError
 */
const de_CreateSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    case "ServiceUnavailableError":
    case "com.amazonaws.storagegateway#ServiceUnavailableError":
      throw await de_ServiceUnavailableErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointCommand
 */
export const de_CreateSnapshotFromVolumeRecoveryPointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSnapshotFromVolumeRecoveryPointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateSnapshotFromVolumeRecoveryPointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateSnapshotFromVolumeRecoveryPointOutput(data, context);
  const response: CreateSnapshotFromVolumeRecoveryPointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointCommandError
 */
const de_CreateSnapshotFromVolumeRecoveryPointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSnapshotFromVolumeRecoveryPointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    case "ServiceUnavailableError":
    case "com.amazonaws.storagegateway#ServiceUnavailableError":
      throw await de_ServiceUnavailableErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateStorediSCSIVolumeCommand
 */
export const de_CreateStorediSCSIVolumeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStorediSCSIVolumeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateStorediSCSIVolumeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateStorediSCSIVolumeOutput(data, context);
  const response: CreateStorediSCSIVolumeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateStorediSCSIVolumeCommandError
 */
const de_CreateStorediSCSIVolumeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStorediSCSIVolumeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateTapePoolCommand
 */
export const de_CreateTapePoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTapePoolCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateTapePoolCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateTapePoolOutput(data, context);
  const response: CreateTapePoolCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateTapePoolCommandError
 */
const de_CreateTapePoolCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTapePoolCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateTapesCommand
 */
export const de_CreateTapesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTapesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateTapesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateTapesOutput(data, context);
  const response: CreateTapesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateTapesCommandError
 */
const de_CreateTapesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTapesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateTapeWithBarcodeCommand
 */
export const de_CreateTapeWithBarcodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTapeWithBarcodeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateTapeWithBarcodeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateTapeWithBarcodeOutput(data, context);
  const response: CreateTapeWithBarcodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateTapeWithBarcodeCommandError
 */
const de_CreateTapeWithBarcodeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTapeWithBarcodeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteAutomaticTapeCreationPolicyCommand
 */
export const de_DeleteAutomaticTapeCreationPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAutomaticTapeCreationPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteAutomaticTapeCreationPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteAutomaticTapeCreationPolicyOutput(data, context);
  const response: DeleteAutomaticTapeCreationPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteAutomaticTapeCreationPolicyCommandError
 */
const de_DeleteAutomaticTapeCreationPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAutomaticTapeCreationPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteBandwidthRateLimitCommand
 */
export const de_DeleteBandwidthRateLimitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBandwidthRateLimitCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteBandwidthRateLimitCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteBandwidthRateLimitOutput(data, context);
  const response: DeleteBandwidthRateLimitCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteBandwidthRateLimitCommandError
 */
const de_DeleteBandwidthRateLimitCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBandwidthRateLimitCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteChapCredentialsCommand
 */
export const de_DeleteChapCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChapCredentialsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteChapCredentialsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteChapCredentialsOutput(data, context);
  const response: DeleteChapCredentialsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteChapCredentialsCommandError
 */
const de_DeleteChapCredentialsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChapCredentialsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteFileShareCommand
 */
export const de_DeleteFileShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFileShareCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteFileShareCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteFileShareOutput(data, context);
  const response: DeleteFileShareCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteFileShareCommandError
 */
const de_DeleteFileShareCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFileShareCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteGatewayCommand
 */
export const de_DeleteGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGatewayCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteGatewayCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteGatewayOutput(data, context);
  const response: DeleteGatewayCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteGatewayCommandError
 */
const de_DeleteGatewayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGatewayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteSnapshotScheduleCommand
 */
export const de_DeleteSnapshotScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSnapshotScheduleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteSnapshotScheduleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteSnapshotScheduleOutput(data, context);
  const response: DeleteSnapshotScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteSnapshotScheduleCommandError
 */
const de_DeleteSnapshotScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSnapshotScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteTapeCommand
 */
export const de_DeleteTapeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTapeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteTapeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteTapeOutput(data, context);
  const response: DeleteTapeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteTapeCommandError
 */
const de_DeleteTapeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTapeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteTapeArchiveCommand
 */
export const de_DeleteTapeArchiveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTapeArchiveCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteTapeArchiveCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteTapeArchiveOutput(data, context);
  const response: DeleteTapeArchiveCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteTapeArchiveCommandError
 */
const de_DeleteTapeArchiveCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTapeArchiveCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteTapePoolCommand
 */
export const de_DeleteTapePoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTapePoolCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteTapePoolCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteTapePoolOutput(data, context);
  const response: DeleteTapePoolCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteTapePoolCommandError
 */
const de_DeleteTapePoolCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTapePoolCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteVolumeCommand
 */
export const de_DeleteVolumeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVolumeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteVolumeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteVolumeOutput(data, context);
  const response: DeleteVolumeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteVolumeCommandError
 */
const de_DeleteVolumeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVolumeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeAvailabilityMonitorTestCommand
 */
export const de_DescribeAvailabilityMonitorTestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAvailabilityMonitorTestCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAvailabilityMonitorTestCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAvailabilityMonitorTestOutput(data, context);
  const response: DescribeAvailabilityMonitorTestCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeAvailabilityMonitorTestCommandError
 */
const de_DescribeAvailabilityMonitorTestCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAvailabilityMonitorTestCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeBandwidthRateLimitCommand
 */
export const de_DescribeBandwidthRateLimitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBandwidthRateLimitCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeBandwidthRateLimitCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeBandwidthRateLimitOutput(data, context);
  const response: DescribeBandwidthRateLimitCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeBandwidthRateLimitCommandError
 */
const de_DescribeBandwidthRateLimitCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBandwidthRateLimitCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeBandwidthRateLimitScheduleCommand
 */
export const de_DescribeBandwidthRateLimitScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBandwidthRateLimitScheduleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeBandwidthRateLimitScheduleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeBandwidthRateLimitScheduleOutput(data, context);
  const response: DescribeBandwidthRateLimitScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeBandwidthRateLimitScheduleCommandError
 */
const de_DescribeBandwidthRateLimitScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBandwidthRateLimitScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeCacheCommand
 */
export const de_DescribeCacheCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCacheCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeCacheCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeCacheOutput(data, context);
  const response: DescribeCacheCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeCacheCommandError
 */
const de_DescribeCacheCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCacheCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeCachediSCSIVolumesCommand
 */
export const de_DescribeCachediSCSIVolumesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCachediSCSIVolumesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeCachediSCSIVolumesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeCachediSCSIVolumesOutput(data, context);
  const response: DescribeCachediSCSIVolumesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeCachediSCSIVolumesCommandError
 */
const de_DescribeCachediSCSIVolumesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCachediSCSIVolumesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeChapCredentialsCommand
 */
export const de_DescribeChapCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChapCredentialsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeChapCredentialsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeChapCredentialsOutput(data, context);
  const response: DescribeChapCredentialsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeChapCredentialsCommandError
 */
const de_DescribeChapCredentialsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChapCredentialsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeFileSystemAssociationsCommand
 */
export const de_DescribeFileSystemAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFileSystemAssociationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeFileSystemAssociationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeFileSystemAssociationsOutput(data, context);
  const response: DescribeFileSystemAssociationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeFileSystemAssociationsCommandError
 */
const de_DescribeFileSystemAssociationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFileSystemAssociationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeGatewayInformationCommand
 */
export const de_DescribeGatewayInformationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGatewayInformationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeGatewayInformationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeGatewayInformationOutput(data, context);
  const response: DescribeGatewayInformationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeGatewayInformationCommandError
 */
const de_DescribeGatewayInformationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGatewayInformationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeMaintenanceStartTimeCommand
 */
export const de_DescribeMaintenanceStartTimeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMaintenanceStartTimeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeMaintenanceStartTimeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeMaintenanceStartTimeOutput(data, context);
  const response: DescribeMaintenanceStartTimeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeMaintenanceStartTimeCommandError
 */
const de_DescribeMaintenanceStartTimeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMaintenanceStartTimeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeNFSFileSharesCommand
 */
export const de_DescribeNFSFileSharesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNFSFileSharesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeNFSFileSharesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeNFSFileSharesOutput(data, context);
  const response: DescribeNFSFileSharesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeNFSFileSharesCommandError
 */
const de_DescribeNFSFileSharesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNFSFileSharesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeSMBFileSharesCommand
 */
export const de_DescribeSMBFileSharesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSMBFileSharesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeSMBFileSharesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeSMBFileSharesOutput(data, context);
  const response: DescribeSMBFileSharesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeSMBFileSharesCommandError
 */
const de_DescribeSMBFileSharesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSMBFileSharesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeSMBSettingsCommand
 */
export const de_DescribeSMBSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSMBSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeSMBSettingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeSMBSettingsOutput(data, context);
  const response: DescribeSMBSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeSMBSettingsCommandError
 */
const de_DescribeSMBSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSMBSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeSnapshotScheduleCommand
 */
export const de_DescribeSnapshotScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSnapshotScheduleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeSnapshotScheduleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeSnapshotScheduleOutput(data, context);
  const response: DescribeSnapshotScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeSnapshotScheduleCommandError
 */
const de_DescribeSnapshotScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSnapshotScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeStorediSCSIVolumesCommand
 */
export const de_DescribeStorediSCSIVolumesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStorediSCSIVolumesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeStorediSCSIVolumesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeStorediSCSIVolumesOutput(data, context);
  const response: DescribeStorediSCSIVolumesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeStorediSCSIVolumesCommandError
 */
const de_DescribeStorediSCSIVolumesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStorediSCSIVolumesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeTapeArchivesCommand
 */
export const de_DescribeTapeArchivesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTapeArchivesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeTapeArchivesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTapeArchivesOutput(data, context);
  const response: DescribeTapeArchivesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeTapeArchivesCommandError
 */
const de_DescribeTapeArchivesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTapeArchivesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeTapeRecoveryPointsCommand
 */
export const de_DescribeTapeRecoveryPointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTapeRecoveryPointsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeTapeRecoveryPointsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTapeRecoveryPointsOutput(data, context);
  const response: DescribeTapeRecoveryPointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeTapeRecoveryPointsCommandError
 */
const de_DescribeTapeRecoveryPointsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTapeRecoveryPointsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeTapesCommand
 */
export const de_DescribeTapesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTapesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeTapesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTapesOutput(data, context);
  const response: DescribeTapesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeTapesCommandError
 */
const de_DescribeTapesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTapesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeUploadBufferCommand
 */
export const de_DescribeUploadBufferCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUploadBufferCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeUploadBufferCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeUploadBufferOutput(data, context);
  const response: DescribeUploadBufferCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeUploadBufferCommandError
 */
const de_DescribeUploadBufferCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUploadBufferCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeVTLDevicesCommand
 */
export const de_DescribeVTLDevicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVTLDevicesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeVTLDevicesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeVTLDevicesOutput(data, context);
  const response: DescribeVTLDevicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeVTLDevicesCommandError
 */
const de_DescribeVTLDevicesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVTLDevicesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeWorkingStorageCommand
 */
export const de_DescribeWorkingStorageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkingStorageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeWorkingStorageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeWorkingStorageOutput(data, context);
  const response: DescribeWorkingStorageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeWorkingStorageCommandError
 */
const de_DescribeWorkingStorageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkingStorageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DetachVolumeCommand
 */
export const de_DetachVolumeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachVolumeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DetachVolumeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DetachVolumeOutput(data, context);
  const response: DetachVolumeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DetachVolumeCommandError
 */
const de_DetachVolumeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachVolumeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DisableGatewayCommand
 */
export const de_DisableGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableGatewayCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisableGatewayCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DisableGatewayOutput(data, context);
  const response: DisableGatewayCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DisableGatewayCommandError
 */
const de_DisableGatewayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableGatewayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DisassociateFileSystemCommand
 */
export const de_DisassociateFileSystemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateFileSystemCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociateFileSystemCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DisassociateFileSystemOutput(data, context);
  const response: DisassociateFileSystemCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DisassociateFileSystemCommandError
 */
const de_DisassociateFileSystemCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateFileSystemCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1JoinDomainCommand
 */
export const de_JoinDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JoinDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_JoinDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_JoinDomainOutput(data, context);
  const response: JoinDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1JoinDomainCommandError
 */
const de_JoinDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JoinDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListAutomaticTapeCreationPoliciesCommand
 */
export const de_ListAutomaticTapeCreationPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAutomaticTapeCreationPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAutomaticTapeCreationPoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAutomaticTapeCreationPoliciesOutput(data, context);
  const response: ListAutomaticTapeCreationPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListAutomaticTapeCreationPoliciesCommandError
 */
const de_ListAutomaticTapeCreationPoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAutomaticTapeCreationPoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListFileSharesCommand
 */
export const de_ListFileSharesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFileSharesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListFileSharesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListFileSharesOutput(data, context);
  const response: ListFileSharesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListFileSharesCommandError
 */
const de_ListFileSharesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFileSharesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListFileSystemAssociationsCommand
 */
export const de_ListFileSystemAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFileSystemAssociationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListFileSystemAssociationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListFileSystemAssociationsOutput(data, context);
  const response: ListFileSystemAssociationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListFileSystemAssociationsCommandError
 */
const de_ListFileSystemAssociationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFileSystemAssociationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListGatewaysCommand
 */
export const de_ListGatewaysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGatewaysCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListGatewaysCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListGatewaysOutput(data, context);
  const response: ListGatewaysCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListGatewaysCommandError
 */
const de_ListGatewaysCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGatewaysCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListLocalDisksCommand
 */
export const de_ListLocalDisksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLocalDisksCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListLocalDisksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListLocalDisksOutput(data, context);
  const response: ListLocalDisksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListLocalDisksCommandError
 */
const de_ListLocalDisksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLocalDisksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTagsForResourceOutput(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommandError
 */
const de_ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListTapePoolsCommand
 */
export const de_ListTapePoolsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTapePoolsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTapePoolsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTapePoolsOutput(data, context);
  const response: ListTapePoolsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListTapePoolsCommandError
 */
const de_ListTapePoolsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTapePoolsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListTapesCommand
 */
export const de_ListTapesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTapesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTapesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTapesOutput(data, context);
  const response: ListTapesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListTapesCommandError
 */
const de_ListTapesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTapesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListVolumeInitiatorsCommand
 */
export const de_ListVolumeInitiatorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVolumeInitiatorsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListVolumeInitiatorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListVolumeInitiatorsOutput(data, context);
  const response: ListVolumeInitiatorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListVolumeInitiatorsCommandError
 */
const de_ListVolumeInitiatorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVolumeInitiatorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListVolumeRecoveryPointsCommand
 */
export const de_ListVolumeRecoveryPointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVolumeRecoveryPointsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListVolumeRecoveryPointsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListVolumeRecoveryPointsOutput(data, context);
  const response: ListVolumeRecoveryPointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListVolumeRecoveryPointsCommandError
 */
const de_ListVolumeRecoveryPointsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVolumeRecoveryPointsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListVolumesCommand
 */
export const de_ListVolumesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVolumesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListVolumesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListVolumesOutput(data, context);
  const response: ListVolumesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListVolumesCommandError
 */
const de_ListVolumesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVolumesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1NotifyWhenUploadedCommand
 */
export const de_NotifyWhenUploadedCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NotifyWhenUploadedCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_NotifyWhenUploadedCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_NotifyWhenUploadedOutput(data, context);
  const response: NotifyWhenUploadedCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1NotifyWhenUploadedCommandError
 */
const de_NotifyWhenUploadedCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NotifyWhenUploadedCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RefreshCacheCommand
 */
export const de_RefreshCacheCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RefreshCacheCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RefreshCacheCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RefreshCacheOutput(data, context);
  const response: RefreshCacheCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RefreshCacheCommandError
 */
const de_RefreshCacheCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RefreshCacheCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RemoveTagsFromResourceCommand
 */
export const de_RemoveTagsFromResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RemoveTagsFromResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RemoveTagsFromResourceOutput(data, context);
  const response: RemoveTagsFromResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RemoveTagsFromResourceCommandError
 */
const de_RemoveTagsFromResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ResetCacheCommand
 */
export const de_ResetCacheCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetCacheCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ResetCacheCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ResetCacheOutput(data, context);
  const response: ResetCacheCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ResetCacheCommandError
 */
const de_ResetCacheCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetCacheCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RetrieveTapeArchiveCommand
 */
export const de_RetrieveTapeArchiveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetrieveTapeArchiveCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RetrieveTapeArchiveCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RetrieveTapeArchiveOutput(data, context);
  const response: RetrieveTapeArchiveCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RetrieveTapeArchiveCommandError
 */
const de_RetrieveTapeArchiveCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetrieveTapeArchiveCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RetrieveTapeRecoveryPointCommand
 */
export const de_RetrieveTapeRecoveryPointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetrieveTapeRecoveryPointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RetrieveTapeRecoveryPointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RetrieveTapeRecoveryPointOutput(data, context);
  const response: RetrieveTapeRecoveryPointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RetrieveTapeRecoveryPointCommandError
 */
const de_RetrieveTapeRecoveryPointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetrieveTapeRecoveryPointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1SetLocalConsolePasswordCommand
 */
export const de_SetLocalConsolePasswordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetLocalConsolePasswordCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SetLocalConsolePasswordCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SetLocalConsolePasswordOutput(data, context);
  const response: SetLocalConsolePasswordCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1SetLocalConsolePasswordCommandError
 */
const de_SetLocalConsolePasswordCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetLocalConsolePasswordCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1SetSMBGuestPasswordCommand
 */
export const de_SetSMBGuestPasswordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetSMBGuestPasswordCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SetSMBGuestPasswordCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SetSMBGuestPasswordOutput(data, context);
  const response: SetSMBGuestPasswordCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1SetSMBGuestPasswordCommandError
 */
const de_SetSMBGuestPasswordCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetSMBGuestPasswordCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ShutdownGatewayCommand
 */
export const de_ShutdownGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ShutdownGatewayCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ShutdownGatewayCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ShutdownGatewayOutput(data, context);
  const response: ShutdownGatewayCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ShutdownGatewayCommandError
 */
const de_ShutdownGatewayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ShutdownGatewayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartAvailabilityMonitorTestCommand
 */
export const de_StartAvailabilityMonitorTestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartAvailabilityMonitorTestCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartAvailabilityMonitorTestCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartAvailabilityMonitorTestOutput(data, context);
  const response: StartAvailabilityMonitorTestCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartAvailabilityMonitorTestCommandError
 */
const de_StartAvailabilityMonitorTestCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartAvailabilityMonitorTestCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartGatewayCommand
 */
export const de_StartGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartGatewayCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartGatewayCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartGatewayOutput(data, context);
  const response: StartGatewayCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartGatewayCommandError
 */
const de_StartGatewayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartGatewayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateAutomaticTapeCreationPolicyCommand
 */
export const de_UpdateAutomaticTapeCreationPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAutomaticTapeCreationPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateAutomaticTapeCreationPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateAutomaticTapeCreationPolicyOutput(data, context);
  const response: UpdateAutomaticTapeCreationPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateAutomaticTapeCreationPolicyCommandError
 */
const de_UpdateAutomaticTapeCreationPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAutomaticTapeCreationPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateBandwidthRateLimitCommand
 */
export const de_UpdateBandwidthRateLimitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBandwidthRateLimitCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateBandwidthRateLimitCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateBandwidthRateLimitOutput(data, context);
  const response: UpdateBandwidthRateLimitCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateBandwidthRateLimitCommandError
 */
const de_UpdateBandwidthRateLimitCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBandwidthRateLimitCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateBandwidthRateLimitScheduleCommand
 */
export const de_UpdateBandwidthRateLimitScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBandwidthRateLimitScheduleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateBandwidthRateLimitScheduleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateBandwidthRateLimitScheduleOutput(data, context);
  const response: UpdateBandwidthRateLimitScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateBandwidthRateLimitScheduleCommandError
 */
const de_UpdateBandwidthRateLimitScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBandwidthRateLimitScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateChapCredentialsCommand
 */
export const de_UpdateChapCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChapCredentialsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateChapCredentialsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateChapCredentialsOutput(data, context);
  const response: UpdateChapCredentialsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateChapCredentialsCommandError
 */
const de_UpdateChapCredentialsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChapCredentialsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateFileSystemAssociationCommand
 */
export const de_UpdateFileSystemAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFileSystemAssociationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateFileSystemAssociationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateFileSystemAssociationOutput(data, context);
  const response: UpdateFileSystemAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateFileSystemAssociationCommandError
 */
const de_UpdateFileSystemAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFileSystemAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateGatewayInformationCommand
 */
export const de_UpdateGatewayInformationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGatewayInformationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateGatewayInformationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateGatewayInformationOutput(data, context);
  const response: UpdateGatewayInformationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateGatewayInformationCommandError
 */
const de_UpdateGatewayInformationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGatewayInformationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateGatewaySoftwareNowCommand
 */
export const de_UpdateGatewaySoftwareNowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGatewaySoftwareNowCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateGatewaySoftwareNowCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateGatewaySoftwareNowOutput(data, context);
  const response: UpdateGatewaySoftwareNowCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateGatewaySoftwareNowCommandError
 */
const de_UpdateGatewaySoftwareNowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGatewaySoftwareNowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateMaintenanceStartTimeCommand
 */
export const de_UpdateMaintenanceStartTimeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMaintenanceStartTimeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateMaintenanceStartTimeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateMaintenanceStartTimeOutput(data, context);
  const response: UpdateMaintenanceStartTimeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateMaintenanceStartTimeCommandError
 */
const de_UpdateMaintenanceStartTimeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMaintenanceStartTimeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateNFSFileShareCommand
 */
export const de_UpdateNFSFileShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNFSFileShareCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateNFSFileShareCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateNFSFileShareOutput(data, context);
  const response: UpdateNFSFileShareCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateNFSFileShareCommandError
 */
const de_UpdateNFSFileShareCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNFSFileShareCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateSMBFileShareCommand
 */
export const de_UpdateSMBFileShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSMBFileShareCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateSMBFileShareCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateSMBFileShareOutput(data, context);
  const response: UpdateSMBFileShareCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateSMBFileShareCommandError
 */
const de_UpdateSMBFileShareCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSMBFileShareCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateSMBFileShareVisibilityCommand
 */
export const de_UpdateSMBFileShareVisibilityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSMBFileShareVisibilityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateSMBFileShareVisibilityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateSMBFileShareVisibilityOutput(data, context);
  const response: UpdateSMBFileShareVisibilityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateSMBFileShareVisibilityCommandError
 */
const de_UpdateSMBFileShareVisibilityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSMBFileShareVisibilityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateSMBLocalGroupsCommand
 */
export const de_UpdateSMBLocalGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSMBLocalGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateSMBLocalGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateSMBLocalGroupsOutput(data, context);
  const response: UpdateSMBLocalGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateSMBLocalGroupsCommandError
 */
const de_UpdateSMBLocalGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSMBLocalGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateSMBSecurityStrategyCommand
 */
export const de_UpdateSMBSecurityStrategyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSMBSecurityStrategyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateSMBSecurityStrategyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateSMBSecurityStrategyOutput(data, context);
  const response: UpdateSMBSecurityStrategyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateSMBSecurityStrategyCommandError
 */
const de_UpdateSMBSecurityStrategyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSMBSecurityStrategyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateSnapshotScheduleCommand
 */
export const de_UpdateSnapshotScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSnapshotScheduleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateSnapshotScheduleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateSnapshotScheduleOutput(data, context);
  const response: UpdateSnapshotScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateSnapshotScheduleCommandError
 */
const de_UpdateSnapshotScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSnapshotScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateVTLDeviceTypeCommand
 */
export const de_UpdateVTLDeviceTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVTLDeviceTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateVTLDeviceTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateVTLDeviceTypeOutput(data, context);
  const response: UpdateVTLDeviceTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateVTLDeviceTypeCommandError
 */
const de_UpdateVTLDeviceTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVTLDeviceTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      throw await de_InvalidGatewayRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1InternalServerErrorRes
 */
const de_InternalServerErrorRes = async (parsedOutput: any, context: __SerdeContext): Promise<InternalServerError> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InternalServerError(body, context);
  const exception = new InternalServerError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidGatewayRequestExceptionRes
 */
const de_InvalidGatewayRequestExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidGatewayRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidGatewayRequestException(body, context);
  const exception = new InvalidGatewayRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ServiceUnavailableErrorRes
 */
const de_ServiceUnavailableErrorRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableError> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ServiceUnavailableError(body, context);
  const exception = new ServiceUnavailableError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1ActivateGatewayInput
 */
const se_ActivateGatewayInput = (input: ActivateGatewayInput, context: __SerdeContext): any => {
  return {
    ...(input.ActivationKey != null && { ActivationKey: input.ActivationKey }),
    ...(input.GatewayName != null && { GatewayName: input.GatewayName }),
    ...(input.GatewayRegion != null && { GatewayRegion: input.GatewayRegion }),
    ...(input.GatewayTimezone != null && { GatewayTimezone: input.GatewayTimezone }),
    ...(input.GatewayType != null && { GatewayType: input.GatewayType }),
    ...(input.MediumChangerType != null && { MediumChangerType: input.MediumChangerType }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
    ...(input.TapeDriveType != null && { TapeDriveType: input.TapeDriveType }),
  };
};

/**
 * serializeAws_json1_1AddCacheInput
 */
const se_AddCacheInput = (input: AddCacheInput, context: __SerdeContext): any => {
  return {
    ...(input.DiskIds != null && { DiskIds: se_DiskIds(input.DiskIds, context) }),
    ...(input.GatewayARN != null && { GatewayARN: input.GatewayARN }),
  };
};

/**
 * serializeAws_json1_1AddTagsToResourceInput
 */
const se_AddTagsToResourceInput = (input: AddTagsToResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1AddUploadBufferInput
 */
const se_AddUploadBufferInput = (input: AddUploadBufferInput, context: __SerdeContext): any => {
  return {
    ...(input.DiskIds != null && { DiskIds: se_DiskIds(input.DiskIds, context) }),
    ...(input.GatewayARN != null && { GatewayARN: input.GatewayARN }),
  };
};

/**
 * serializeAws_json1_1AddWorkingStorageInput
 */
const se_AddWorkingStorageInput = (input: AddWorkingStorageInput, context: __SerdeContext): any => {
  return {
    ...(input.DiskIds != null && { DiskIds: se_DiskIds(input.DiskIds, context) }),
    ...(input.GatewayARN != null && { GatewayARN: input.GatewayARN }),
  };
};

/**
 * serializeAws_json1_1AssignTapePoolInput
 */
const se_AssignTapePoolInput = (input: AssignTapePoolInput, context: __SerdeContext): any => {
  return {
    ...(input.BypassGovernanceRetention != null && { BypassGovernanceRetention: input.BypassGovernanceRetention }),
    ...(input.PoolId != null && { PoolId: input.PoolId }),
    ...(input.TapeARN != null && { TapeARN: input.TapeARN }),
  };
};

/**
 * serializeAws_json1_1AssociateFileSystemInput
 */
const se_AssociateFileSystemInput = (input: AssociateFileSystemInput, context: __SerdeContext): any => {
  return {
    ...(input.AuditDestinationARN != null && { AuditDestinationARN: input.AuditDestinationARN }),
    ...(input.CacheAttributes != null && { CacheAttributes: se_CacheAttributes(input.CacheAttributes, context) }),
    ...(input.ClientToken != null && { ClientToken: input.ClientToken }),
    ...(input.EndpointNetworkConfiguration != null && {
      EndpointNetworkConfiguration: se_EndpointNetworkConfiguration(input.EndpointNetworkConfiguration, context),
    }),
    ...(input.GatewayARN != null && { GatewayARN: input.GatewayARN }),
    ...(input.LocationARN != null && { LocationARN: input.LocationARN }),
    ...(input.Password != null && { Password: input.Password }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
    ...(input.UserName != null && { UserName: input.UserName }),
  };
};

/**
 * serializeAws_json1_1AttachVolumeInput
 */
const se_AttachVolumeInput = (input: AttachVolumeInput, context: __SerdeContext): any => {
  return {
    ...(input.DiskId != null && { DiskId: input.DiskId }),
    ...(input.GatewayARN != null && { GatewayARN: input.GatewayARN }),
    ...(input.NetworkInterfaceId != null && { NetworkInterfaceId: input.NetworkInterfaceId }),
    ...(input.TargetName != null && { TargetName: input.TargetName }),
    ...(input.VolumeARN != null && { VolumeARN: input.VolumeARN }),
  };
};

/**
 * serializeAws_json1_1AutomaticTapeCreationRule
 */
const se_AutomaticTapeCreationRule = (input: AutomaticTapeCreationRule, context: __SerdeContext): any => {
  return {
    ...(input.MinimumNumTapes != null && { MinimumNumTapes: input.MinimumNumTapes }),
    ...(input.PoolId != null && { PoolId: input.PoolId }),
    ...(input.TapeBarcodePrefix != null && { TapeBarcodePrefix: input.TapeBarcodePrefix }),
    ...(input.TapeSizeInBytes != null && { TapeSizeInBytes: input.TapeSizeInBytes }),
    ...(input.Worm != null && { Worm: input.Worm }),
  };
};

/**
 * serializeAws_json1_1AutomaticTapeCreationRules
 */
const se_AutomaticTapeCreationRules = (input: AutomaticTapeCreationRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AutomaticTapeCreationRule(entry, context);
    });
};

/**
 * serializeAws_json1_1BandwidthRateLimitInterval
 */
const se_BandwidthRateLimitInterval = (input: BandwidthRateLimitInterval, context: __SerdeContext): any => {
  return {
    ...(input.AverageDownloadRateLimitInBitsPerSec != null && {
      AverageDownloadRateLimitInBitsPerSec: input.AverageDownloadRateLimitInBitsPerSec,
    }),
    ...(input.AverageUploadRateLimitInBitsPerSec != null && {
      AverageUploadRateLimitInBitsPerSec: input.AverageUploadRateLimitInBitsPerSec,
    }),
    ...(input.DaysOfWeek != null && { DaysOfWeek: se_DaysOfWeek(input.DaysOfWeek, context) }),
    ...(input.EndHourOfDay != null && { EndHourOfDay: input.EndHourOfDay }),
    ...(input.EndMinuteOfHour != null && { EndMinuteOfHour: input.EndMinuteOfHour }),
    ...(input.StartHourOfDay != null && { StartHourOfDay: input.StartHourOfDay }),
    ...(input.StartMinuteOfHour != null && { StartMinuteOfHour: input.StartMinuteOfHour }),
  };
};

/**
 * serializeAws_json1_1BandwidthRateLimitIntervals
 */
const se_BandwidthRateLimitIntervals = (input: BandwidthRateLimitInterval[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_BandwidthRateLimitInterval(entry, context);
    });
};

/**
 * serializeAws_json1_1CacheAttributes
 */
const se_CacheAttributes = (input: CacheAttributes, context: __SerdeContext): any => {
  return {
    ...(input.CacheStaleTimeoutInSeconds != null && { CacheStaleTimeoutInSeconds: input.CacheStaleTimeoutInSeconds }),
  };
};

/**
 * serializeAws_json1_1CancelArchivalInput
 */
const se_CancelArchivalInput = (input: CancelArchivalInput, context: __SerdeContext): any => {
  return {
    ...(input.GatewayARN != null && { GatewayARN: input.GatewayARN }),
    ...(input.TapeARN != null && { TapeARN: input.TapeARN }),
  };
};

/**
 * serializeAws_json1_1CancelRetrievalInput
 */
const se_CancelRetrievalInput = (input: CancelRetrievalInput, context: __SerdeContext): any => {
  return {
    ...(input.GatewayARN != null && { GatewayARN: input.GatewayARN }),
    ...(input.TapeARN != null && { TapeARN: input.TapeARN }),
  };
};

/**
 * serializeAws_json1_1CreateCachediSCSIVolumeInput
 */
const se_CreateCachediSCSIVolumeInput = (input: CreateCachediSCSIVolumeInput, context: __SerdeContext): any => {
  return {
    ...(input.ClientToken != null && { ClientToken: input.ClientToken }),
    ...(input.GatewayARN != null && { GatewayARN: input.GatewayARN }),
    ...(input.KMSEncrypted != null && { KMSEncrypted: input.KMSEncrypted }),
    ...(input.KMSKey != null && { KMSKey: input.KMSKey }),
    ...(input.NetworkInterfaceId != null && { NetworkInterfaceId: input.NetworkInterfaceId }),
    ...(input.SnapshotId != null && { SnapshotId: input.SnapshotId }),
    ...(input.SourceVolumeARN != null && { SourceVolumeARN: input.SourceVolumeARN }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
    ...(input.TargetName != null && { TargetName: input.TargetName }),
    ...(input.VolumeSizeInBytes != null && { VolumeSizeInBytes: input.VolumeSizeInBytes }),
  };
};

/**
 * serializeAws_json1_1CreateNFSFileShareInput
 */
const se_CreateNFSFileShareInput = (input: CreateNFSFileShareInput, context: __SerdeContext): any => {
  return {
    ...(input.AuditDestinationARN != null && { AuditDestinationARN: input.AuditDestinationARN }),
    ...(input.BucketRegion != null && { BucketRegion: input.BucketRegion }),
    ...(input.CacheAttributes != null && { CacheAttributes: se_CacheAttributes(input.CacheAttributes, context) }),
    ...(input.ClientList != null && { ClientList: se_FileShareClientList(input.ClientList, context) }),
    ...(input.ClientToken != null && { ClientToken: input.ClientToken }),
    ...(input.DefaultStorageClass != null && { DefaultStorageClass: input.DefaultStorageClass }),
    ...(input.FileShareName != null && { FileShareName: input.FileShareName }),
    ...(input.GatewayARN != null && { GatewayARN: input.GatewayARN }),
    ...(input.GuessMIMETypeEnabled != null && { GuessMIMETypeEnabled: input.GuessMIMETypeEnabled }),
    ...(input.KMSEncrypted != null && { KMSEncrypted: input.KMSEncrypted }),
    ...(input.KMSKey != null && { KMSKey: input.KMSKey }),
    ...(input.LocationARN != null && { LocationARN: input.LocationARN }),
    ...(input.NFSFileShareDefaults != null && {
      NFSFileShareDefaults: se_NFSFileShareDefaults(input.NFSFileShareDefaults, context),
    }),
    ...(input.NotificationPolicy != null && { NotificationPolicy: input.NotificationPolicy }),
    ...(input.ObjectACL != null && { ObjectACL: input.ObjectACL }),
    ...(input.ReadOnly != null && { ReadOnly: input.ReadOnly }),
    ...(input.RequesterPays != null && { RequesterPays: input.RequesterPays }),
    ...(input.Role != null && { Role: input.Role }),
    ...(input.Squash != null && { Squash: input.Squash }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
    ...(input.VPCEndpointDNSName != null && { VPCEndpointDNSName: input.VPCEndpointDNSName }),
  };
};

/**
 * serializeAws_json1_1CreateSMBFileShareInput
 */
const se_CreateSMBFileShareInput = (input: CreateSMBFileShareInput, context: __SerdeContext): any => {
  return {
    ...(input.AccessBasedEnumeration != null && { AccessBasedEnumeration: input.AccessBasedEnumeration }),
    ...(input.AdminUserList != null && { AdminUserList: se_UserList(input.AdminUserList, context) }),
    ...(input.AuditDestinationARN != null && { AuditDestinationARN: input.AuditDestinationARN }),
    ...(input.Authentication != null && { Authentication: input.Authentication }),
    ...(input.BucketRegion != null && { BucketRegion: input.BucketRegion }),
    ...(input.CacheAttributes != null && { CacheAttributes: se_CacheAttributes(input.CacheAttributes, context) }),
    ...(input.CaseSensitivity != null && { CaseSensitivity: input.CaseSensitivity }),
    ...(input.ClientToken != null && { ClientToken: input.ClientToken }),
    ...(input.DefaultStorageClass != null && { DefaultStorageClass: input.DefaultStorageClass }),
    ...(input.FileShareName != null && { FileShareName: input.FileShareName }),
    ...(input.GatewayARN != null && { GatewayARN: input.GatewayARN }),
    ...(input.GuessMIMETypeEnabled != null && { GuessMIMETypeEnabled: input.GuessMIMETypeEnabled }),
    ...(input.InvalidUserList != null && { InvalidUserList: se_UserList(input.InvalidUserList, context) }),
    ...(input.KMSEncrypted != null && { KMSEncrypted: input.KMSEncrypted }),
    ...(input.KMSKey != null && { KMSKey: input.KMSKey }),
    ...(input.LocationARN != null && { LocationARN: input.LocationARN }),
    ...(input.NotificationPolicy != null && { NotificationPolicy: input.NotificationPolicy }),
    ...(input.ObjectACL != null && { ObjectACL: input.ObjectACL }),
    ...(input.OplocksEnabled != null && { OplocksEnabled: input.OplocksEnabled }),
    ...(input.ReadOnly != null && { ReadOnly: input.ReadOnly }),
    ...(input.RequesterPays != null && { RequesterPays: input.RequesterPays }),
    ...(input.Role != null && { Role: input.Role }),
    ...(input.SMBACLEnabled != null && { SMBACLEnabled: input.SMBACLEnabled }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
    ...(input.VPCEndpointDNSName != null && { VPCEndpointDNSName: input.VPCEndpointDNSName }),
    ...(input.ValidUserList != null && { ValidUserList: se_UserList(input.ValidUserList, context) }),
  };
};

/**
 * serializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointInput
 */
const se_CreateSnapshotFromVolumeRecoveryPointInput = (
  input: CreateSnapshotFromVolumeRecoveryPointInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.SnapshotDescription != null && { SnapshotDescription: input.SnapshotDescription }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
    ...(input.VolumeARN != null && { VolumeARN: input.VolumeARN }),
  };
};

/**
 * serializeAws_json1_1CreateSnapshotInput
 */
const se_CreateSnapshotInput = (input: CreateSnapshotInput, context: __SerdeContext): any => {
  return {
    ...(input.SnapshotDescription != null && { SnapshotDescription: input.SnapshotDescription }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
    ...(input.VolumeARN != null && { VolumeARN: input.VolumeARN }),
  };
};

/**
 * serializeAws_json1_1CreateStorediSCSIVolumeInput
 */
const se_CreateStorediSCSIVolumeInput = (input: CreateStorediSCSIVolumeInput, context: __SerdeContext): any => {
  return {
    ...(input.DiskId != null && { DiskId: input.DiskId }),
    ...(input.GatewayARN != null && { GatewayARN: input.GatewayARN }),
    ...(input.KMSEncrypted != null && { KMSEncrypted: input.KMSEncrypted }),
    ...(input.KMSKey != null && { KMSKey: input.KMSKey }),
    ...(input.NetworkInterfaceId != null && { NetworkInterfaceId: input.NetworkInterfaceId }),
    ...(input.PreserveExistingData != null && { PreserveExistingData: input.PreserveExistingData }),
    ...(input.SnapshotId != null && { SnapshotId: input.SnapshotId }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
    ...(input.TargetName != null && { TargetName: input.TargetName }),
  };
};

/**
 * serializeAws_json1_1CreateTapePoolInput
 */
const se_CreateTapePoolInput = (input: CreateTapePoolInput, context: __SerdeContext): any => {
  return {
    ...(input.PoolName != null && { PoolName: input.PoolName }),
    ...(input.RetentionLockTimeInDays != null && { RetentionLockTimeInDays: input.RetentionLockTimeInDays }),
    ...(input.RetentionLockType != null && { RetentionLockType: input.RetentionLockType }),
    ...(input.StorageClass != null && { StorageClass: input.StorageClass }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateTapesInput
 */
const se_CreateTapesInput = (input: CreateTapesInput, context: __SerdeContext): any => {
  return {
    ...(input.ClientToken != null && { ClientToken: input.ClientToken }),
    ...(input.GatewayARN != null && { GatewayARN: input.GatewayARN }),
    ...(input.KMSEncrypted != null && { KMSEncrypted: input.KMSEncrypted }),
    ...(input.KMSKey != null && { KMSKey: input.KMSKey }),
    ...(input.NumTapesToCreate != null && { NumTapesToCreate: input.NumTapesToCreate }),
    ...(input.PoolId != null && { PoolId: input.PoolId }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
    ...(input.TapeBarcodePrefix != null && { TapeBarcodePrefix: input.TapeBarcodePrefix }),
    ...(input.TapeSizeInBytes != null && { TapeSizeInBytes: input.TapeSizeInBytes }),
    ...(input.Worm != null && { Worm: input.Worm }),
  };
};

/**
 * serializeAws_json1_1CreateTapeWithBarcodeInput
 */
const se_CreateTapeWithBarcodeInput = (input: CreateTapeWithBarcodeInput, context: __SerdeContext): any => {
  return {
    ...(input.GatewayARN != null && { GatewayARN: input.GatewayARN }),
    ...(input.KMSEncrypted != null && { KMSEncrypted: input.KMSEncrypted }),
    ...(input.KMSKey != null && { KMSKey: input.KMSKey }),
    ...(input.PoolId != null && { PoolId: input.PoolId }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
    ...(input.TapeBarcode != null && { TapeBarcode: input.TapeBarcode }),
    ...(input.TapeSizeInBytes != null && { TapeSizeInBytes: input.TapeSizeInBytes }),
    ...(input.Worm != null && { Worm: input.Worm }),
  };
};

/**
 * serializeAws_json1_1DaysOfWeek
 */
const se_DaysOfWeek = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1DeleteAutomaticTapeCreationPolicyInput
 */
const se_DeleteAutomaticTapeCreationPolicyInput = (
  input: DeleteAutomaticTapeCreationPolicyInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayARN != null && { GatewayARN: input.GatewayARN }),
  };
};

/**
 * serializeAws_json1_1DeleteBandwidthRateLimitInput
 */
const se_DeleteBandwidthRateLimitInput = (input: DeleteBandwidthRateLimitInput, context: __SerdeContext): any => {
  return {
    ...(input.BandwidthType != null && { BandwidthType: input.BandwidthType }),
    ...(input.GatewayARN != null && { GatewayARN: input.GatewayARN }),
  };
};

/**
 * serializeAws_json1_1DeleteChapCredentialsInput
 */
const se_DeleteChapCredentialsInput = (input: DeleteChapCredentialsInput, context: __SerdeContext): any => {
  return {
    ...(input.InitiatorName != null && { InitiatorName: input.InitiatorName }),
    ...(input.TargetARN != null && { TargetARN: input.TargetARN }),
  };
};

/**
 * serializeAws_json1_1DeleteFileShareInput
 */
const se_DeleteFileShareInput = (input: DeleteFileShareInput, context: __SerdeContext): any => {
  return {
    ...(input.FileShareARN != null && { FileShareARN: input.FileShareARN }),
    ...(input.ForceDelete != null && { ForceDelete: input.ForceDelete }),
  };
};

/**
 * serializeAws_json1_1DeleteGatewayInput
 */
const se_DeleteGatewayInput = (input: DeleteGatewayInput, context: __SerdeContext): any => {
  return {
    ...(input.GatewayARN != null && { GatewayARN: input.GatewayARN }),
  };
};

/**
 * serializeAws_json1_1DeleteSnapshotScheduleInput
 */
const se_DeleteSnapshotScheduleInput = (input: DeleteSnapshotScheduleInput, context: __SerdeContext): any => {
  return {
    ...(input.VolumeARN != null && { VolumeARN: input.VolumeARN }),
  };
};

/**
 * serializeAws_json1_1DeleteTapeArchiveInput
 */
const se_DeleteTapeArchiveInput = (input: DeleteTapeArchiveInput, context: __SerdeContext): any => {
  return {
    ...(input.BypassGovernanceRetention != null && { BypassGovernanceRetention: input.BypassGovernanceRetention }),
    ...(input.TapeARN != null && { TapeARN: input.TapeARN }),
  };
};

/**
 * serializeAws_json1_1DeleteTapeInput
 */
const se_DeleteTapeInput = (input: DeleteTapeInput, context: __SerdeContext): any => {
  return {
    ...(input.BypassGovernanceRetention != null && { BypassGovernanceRetention: input.BypassGovernanceRetention }),
    ...(input.GatewayARN != null && { GatewayARN: input.GatewayARN }),
    ...(input.TapeARN != null && { TapeARN: input.TapeARN }),
  };
};

/**
 * serializeAws_json1_1DeleteTapePoolInput
 */
const se_DeleteTapePoolInput = (input: DeleteTapePoolInput, context: __SerdeContext): any => {
  return {
    ...(input.PoolARN != null && { PoolARN: input.PoolARN }),
  };
};

/**
 * serializeAws_json1_1DeleteVolumeInput
 */
const se_DeleteVolumeInput = (input: DeleteVolumeInput, context: __SerdeContext): any => {
  return {
    ...(input.VolumeARN != null && { VolumeARN: input.VolumeARN }),
  };
};

/**
 * serializeAws_json1_1DescribeAvailabilityMonitorTestInput
 */
const se_DescribeAvailabilityMonitorTestInput = (
  input: DescribeAvailabilityMonitorTestInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayARN != null && { GatewayARN: input.GatewayARN }),
  };
};

/**
 * serializeAws_json1_1DescribeBandwidthRateLimitInput
 */
const se_DescribeBandwidthRateLimitInput = (input: DescribeBandwidthRateLimitInput, context: __SerdeContext): any => {
  return {
    ...(input.GatewayARN != null && { GatewayARN: input.GatewayARN }),
  };
};

/**
 * serializeAws_json1_1DescribeBandwidthRateLimitScheduleInput
 */
const se_DescribeBandwidthRateLimitScheduleInput = (
  input: DescribeBandwidthRateLimitScheduleInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayARN != null && { GatewayARN: input.GatewayARN }),
  };
};

/**
 * serializeAws_json1_1DescribeCachediSCSIVolumesInput
 */
const se_DescribeCachediSCSIVolumesInput = (input: DescribeCachediSCSIVolumesInput, context: __SerdeContext): any => {
  return {
    ...(input.VolumeARNs != null && { VolumeARNs: se_VolumeARNs(input.VolumeARNs, context) }),
  };
};

/**
 * serializeAws_json1_1DescribeCacheInput
 */
const se_DescribeCacheInput = (input: DescribeCacheInput, context: __SerdeContext): any => {
  return {
    ...(input.GatewayARN != null && { GatewayARN: input.GatewayARN }),
  };
};

/**
 * serializeAws_json1_1DescribeChapCredentialsInput
 */
const se_DescribeChapCredentialsInput = (input: DescribeChapCredentialsInput, context: __SerdeContext): any => {
  return {
    ...(input.TargetARN != null && { TargetARN: input.TargetARN }),
  };
};

/**
 * serializeAws_json1_1DescribeFileSystemAssociationsInput
 */
const se_DescribeFileSystemAssociationsInput = (
  input: DescribeFileSystemAssociationsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.FileSystemAssociationARNList != null && {
      FileSystemAssociationARNList: se_FileSystemAssociationARNList(input.FileSystemAssociationARNList, context),
    }),
  };
};

/**
 * serializeAws_json1_1DescribeGatewayInformationInput
 */
const se_DescribeGatewayInformationInput = (input: DescribeGatewayInformationInput, context: __SerdeContext): any => {
  return {
    ...(input.GatewayARN != null && { GatewayARN: input.GatewayARN }),
  };
};

/**
 * serializeAws_json1_1DescribeMaintenanceStartTimeInput
 */
const se_DescribeMaintenanceStartTimeInput = (
  input: DescribeMaintenanceStartTimeInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayARN != null && { GatewayARN: input.GatewayARN }),
  };
};

/**
 * serializeAws_json1_1DescribeNFSFileSharesInput
 */
const se_DescribeNFSFileSharesInput = (input: DescribeNFSFileSharesInput, context: __SerdeContext): any => {
  return {
    ...(input.FileShareARNList != null && { FileShareARNList: se_FileShareARNList(input.FileShareARNList, context) }),
  };
};

/**
 * serializeAws_json1_1DescribeSMBFileSharesInput
 */
const se_DescribeSMBFileSharesInput = (input: DescribeSMBFileSharesInput, context: __SerdeContext): any => {
  return {
    ...(input.FileShareARNList != null && { FileShareARNList: se_FileShareARNList(input.FileShareARNList, context) }),
  };
};

/**
 * serializeAws_json1_1DescribeSMBSettingsInput
 */
const se_DescribeSMBSettingsInput = (input: DescribeSMBSettingsInput, context: __SerdeContext): any => {
  return {
    ...(input.GatewayARN != null && { GatewayARN: input.GatewayARN }),
  };
};

/**
 * serializeAws_json1_1DescribeSnapshotScheduleInput
 */
const se_DescribeSnapshotScheduleInput = (input: DescribeSnapshotScheduleInput, context: __SerdeContext): any => {
  return {
    ...(input.VolumeARN != null && { VolumeARN: input.VolumeARN }),
  };
};

/**
 * serializeAws_json1_1DescribeStorediSCSIVolumesInput
 */
const se_DescribeStorediSCSIVolumesInput = (input: DescribeStorediSCSIVolumesInput, context: __SerdeContext): any => {
  return {
    ...(input.VolumeARNs != null && { VolumeARNs: se_VolumeARNs(input.VolumeARNs, context) }),
  };
};

/**
 * serializeAws_json1_1DescribeTapeArchivesInput
 */
const se_DescribeTapeArchivesInput = (input: DescribeTapeArchivesInput, context: __SerdeContext): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.TapeARNs != null && { TapeARNs: se_TapeARNs(input.TapeARNs, context) }),
  };
};

/**
 * serializeAws_json1_1DescribeTapeRecoveryPointsInput
 */
const se_DescribeTapeRecoveryPointsInput = (input: DescribeTapeRecoveryPointsInput, context: __SerdeContext): any => {
  return {
    ...(input.GatewayARN != null && { GatewayARN: input.GatewayARN }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.Marker != null && { Marker: input.Marker }),
  };
};

/**
 * serializeAws_json1_1DescribeTapesInput
 */
const se_DescribeTapesInput = (input: DescribeTapesInput, context: __SerdeContext): any => {
  return {
    ...(input.GatewayARN != null && { GatewayARN: input.GatewayARN }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.TapeARNs != null && { TapeARNs: se_TapeARNs(input.TapeARNs, context) }),
  };
};

/**
 * serializeAws_json1_1DescribeUploadBufferInput
 */
const se_DescribeUploadBufferInput = (input: DescribeUploadBufferInput, context: __SerdeContext): any => {
  return {
    ...(input.GatewayARN != null && { GatewayARN: input.GatewayARN }),
  };
};

/**
 * serializeAws_json1_1DescribeVTLDevicesInput
 */
const se_DescribeVTLDevicesInput = (input: DescribeVTLDevicesInput, context: __SerdeContext): any => {
  return {
    ...(input.GatewayARN != null && { GatewayARN: input.GatewayARN }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.VTLDeviceARNs != null && { VTLDeviceARNs: se_VTLDeviceARNs(input.VTLDeviceARNs, context) }),
  };
};

/**
 * serializeAws_json1_1DescribeWorkingStorageInput
 */
const se_DescribeWorkingStorageInput = (input: DescribeWorkingStorageInput, context: __SerdeContext): any => {
  return {
    ...(input.GatewayARN != null && { GatewayARN: input.GatewayARN }),
  };
};

/**
 * serializeAws_json1_1DetachVolumeInput
 */
const se_DetachVolumeInput = (input: DetachVolumeInput, context: __SerdeContext): any => {
  return {
    ...(input.ForceDetach != null && { ForceDetach: input.ForceDetach }),
    ...(input.VolumeARN != null && { VolumeARN: input.VolumeARN }),
  };
};

/**
 * serializeAws_json1_1DisableGatewayInput
 */
const se_DisableGatewayInput = (input: DisableGatewayInput, context: __SerdeContext): any => {
  return {
    ...(input.GatewayARN != null && { GatewayARN: input.GatewayARN }),
  };
};

/**
 * serializeAws_json1_1DisassociateFileSystemInput
 */
const se_DisassociateFileSystemInput = (input: DisassociateFileSystemInput, context: __SerdeContext): any => {
  return {
    ...(input.FileSystemAssociationARN != null && { FileSystemAssociationARN: input.FileSystemAssociationARN }),
    ...(input.ForceDelete != null && { ForceDelete: input.ForceDelete }),
  };
};

/**
 * serializeAws_json1_1DiskIds
 */
const se_DiskIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1EndpointNetworkConfiguration
 */
const se_EndpointNetworkConfiguration = (input: EndpointNetworkConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.IpAddresses != null && { IpAddresses: se_IpAddressList(input.IpAddresses, context) }),
  };
};

/**
 * serializeAws_json1_1FileShareARNList
 */
const se_FileShareARNList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1FileShareClientList
 */
const se_FileShareClientList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1FileSystemAssociationARNList
 */
const se_FileSystemAssociationARNList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1FolderList
 */
const se_FolderList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1Hosts
 */
const se_Hosts = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1IpAddressList
 */
const se_IpAddressList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1JoinDomainInput
 */
const se_JoinDomainInput = (input: JoinDomainInput, context: __SerdeContext): any => {
  return {
    ...(input.DomainControllers != null && { DomainControllers: se_Hosts(input.DomainControllers, context) }),
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.GatewayARN != null && { GatewayARN: input.GatewayARN }),
    ...(input.OrganizationalUnit != null && { OrganizationalUnit: input.OrganizationalUnit }),
    ...(input.Password != null && { Password: input.Password }),
    ...(input.TimeoutInSeconds != null && { TimeoutInSeconds: input.TimeoutInSeconds }),
    ...(input.UserName != null && { UserName: input.UserName }),
  };
};

/**
 * serializeAws_json1_1ListAutomaticTapeCreationPoliciesInput
 */
const se_ListAutomaticTapeCreationPoliciesInput = (
  input: ListAutomaticTapeCreationPoliciesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayARN != null && { GatewayARN: input.GatewayARN }),
  };
};

/**
 * serializeAws_json1_1ListFileSharesInput
 */
const se_ListFileSharesInput = (input: ListFileSharesInput, context: __SerdeContext): any => {
  return {
    ...(input.GatewayARN != null && { GatewayARN: input.GatewayARN }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.Marker != null && { Marker: input.Marker }),
  };
};

/**
 * serializeAws_json1_1ListFileSystemAssociationsInput
 */
const se_ListFileSystemAssociationsInput = (input: ListFileSystemAssociationsInput, context: __SerdeContext): any => {
  return {
    ...(input.GatewayARN != null && { GatewayARN: input.GatewayARN }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.Marker != null && { Marker: input.Marker }),
  };
};

/**
 * serializeAws_json1_1ListGatewaysInput
 */
const se_ListGatewaysInput = (input: ListGatewaysInput, context: __SerdeContext): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.Marker != null && { Marker: input.Marker }),
  };
};

/**
 * serializeAws_json1_1ListLocalDisksInput
 */
const se_ListLocalDisksInput = (input: ListLocalDisksInput, context: __SerdeContext): any => {
  return {
    ...(input.GatewayARN != null && { GatewayARN: input.GatewayARN }),
  };
};

/**
 * serializeAws_json1_1ListTagsForResourceInput
 */
const se_ListTagsForResourceInput = (input: ListTagsForResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
  };
};

/**
 * serializeAws_json1_1ListTapePoolsInput
 */
const se_ListTapePoolsInput = (input: ListTapePoolsInput, context: __SerdeContext): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.PoolARNs != null && { PoolARNs: se_PoolARNs(input.PoolARNs, context) }),
  };
};

/**
 * serializeAws_json1_1ListTapesInput
 */
const se_ListTapesInput = (input: ListTapesInput, context: __SerdeContext): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.TapeARNs != null && { TapeARNs: se_TapeARNs(input.TapeARNs, context) }),
  };
};

/**
 * serializeAws_json1_1ListVolumeInitiatorsInput
 */
const se_ListVolumeInitiatorsInput = (input: ListVolumeInitiatorsInput, context: __SerdeContext): any => {
  return {
    ...(input.VolumeARN != null && { VolumeARN: input.VolumeARN }),
  };
};

/**
 * serializeAws_json1_1ListVolumeRecoveryPointsInput
 */
const se_ListVolumeRecoveryPointsInput = (input: ListVolumeRecoveryPointsInput, context: __SerdeContext): any => {
  return {
    ...(input.GatewayARN != null && { GatewayARN: input.GatewayARN }),
  };
};

/**
 * serializeAws_json1_1ListVolumesInput
 */
const se_ListVolumesInput = (input: ListVolumesInput, context: __SerdeContext): any => {
  return {
    ...(input.GatewayARN != null && { GatewayARN: input.GatewayARN }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.Marker != null && { Marker: input.Marker }),
  };
};

/**
 * serializeAws_json1_1NFSFileShareDefaults
 */
const se_NFSFileShareDefaults = (input: NFSFileShareDefaults, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryMode != null && { DirectoryMode: input.DirectoryMode }),
    ...(input.FileMode != null && { FileMode: input.FileMode }),
    ...(input.GroupId != null && { GroupId: input.GroupId }),
    ...(input.OwnerId != null && { OwnerId: input.OwnerId }),
  };
};

/**
 * serializeAws_json1_1NotifyWhenUploadedInput
 */
const se_NotifyWhenUploadedInput = (input: NotifyWhenUploadedInput, context: __SerdeContext): any => {
  return {
    ...(input.FileShareARN != null && { FileShareARN: input.FileShareARN }),
  };
};

/**
 * serializeAws_json1_1PoolARNs
 */
const se_PoolARNs = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1RefreshCacheInput
 */
const se_RefreshCacheInput = (input: RefreshCacheInput, context: __SerdeContext): any => {
  return {
    ...(input.FileShareARN != null && { FileShareARN: input.FileShareARN }),
    ...(input.FolderList != null && { FolderList: se_FolderList(input.FolderList, context) }),
    ...(input.Recursive != null && { Recursive: input.Recursive }),
  };
};

/**
 * serializeAws_json1_1RemoveTagsFromResourceInput
 */
const se_RemoveTagsFromResourceInput = (input: RemoveTagsFromResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeys != null && { TagKeys: se_TagKeys(input.TagKeys, context) }),
  };
};

/**
 * serializeAws_json1_1ResetCacheInput
 */
const se_ResetCacheInput = (input: ResetCacheInput, context: __SerdeContext): any => {
  return {
    ...(input.GatewayARN != null && { GatewayARN: input.GatewayARN }),
  };
};

/**
 * serializeAws_json1_1RetrieveTapeArchiveInput
 */
const se_RetrieveTapeArchiveInput = (input: RetrieveTapeArchiveInput, context: __SerdeContext): any => {
  return {
    ...(input.GatewayARN != null && { GatewayARN: input.GatewayARN }),
    ...(input.TapeARN != null && { TapeARN: input.TapeARN }),
  };
};

/**
 * serializeAws_json1_1RetrieveTapeRecoveryPointInput
 */
const se_RetrieveTapeRecoveryPointInput = (input: RetrieveTapeRecoveryPointInput, context: __SerdeContext): any => {
  return {
    ...(input.GatewayARN != null && { GatewayARN: input.GatewayARN }),
    ...(input.TapeARN != null && { TapeARN: input.TapeARN }),
  };
};

/**
 * serializeAws_json1_1SetLocalConsolePasswordInput
 */
const se_SetLocalConsolePasswordInput = (input: SetLocalConsolePasswordInput, context: __SerdeContext): any => {
  return {
    ...(input.GatewayARN != null && { GatewayARN: input.GatewayARN }),
    ...(input.LocalConsolePassword != null && { LocalConsolePassword: input.LocalConsolePassword }),
  };
};

/**
 * serializeAws_json1_1SetSMBGuestPasswordInput
 */
const se_SetSMBGuestPasswordInput = (input: SetSMBGuestPasswordInput, context: __SerdeContext): any => {
  return {
    ...(input.GatewayARN != null && { GatewayARN: input.GatewayARN }),
    ...(input.Password != null && { Password: input.Password }),
  };
};

/**
 * serializeAws_json1_1ShutdownGatewayInput
 */
const se_ShutdownGatewayInput = (input: ShutdownGatewayInput, context: __SerdeContext): any => {
  return {
    ...(input.GatewayARN != null && { GatewayARN: input.GatewayARN }),
  };
};

/**
 * serializeAws_json1_1SMBLocalGroups
 */
const se_SMBLocalGroups = (input: SMBLocalGroups, context: __SerdeContext): any => {
  return {
    ...(input.GatewayAdmins != null && { GatewayAdmins: se_UserList(input.GatewayAdmins, context) }),
  };
};

/**
 * serializeAws_json1_1StartAvailabilityMonitorTestInput
 */
const se_StartAvailabilityMonitorTestInput = (
  input: StartAvailabilityMonitorTestInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayARN != null && { GatewayARN: input.GatewayARN }),
  };
};

/**
 * serializeAws_json1_1StartGatewayInput
 */
const se_StartGatewayInput = (input: StartGatewayInput, context: __SerdeContext): any => {
  return {
    ...(input.GatewayARN != null && { GatewayARN: input.GatewayARN }),
  };
};

/**
 * serializeAws_json1_1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1TagKeys
 */
const se_TagKeys = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1Tags
 */
const se_Tags = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_1TapeARNs
 */
const se_TapeARNs = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1UpdateAutomaticTapeCreationPolicyInput
 */
const se_UpdateAutomaticTapeCreationPolicyInput = (
  input: UpdateAutomaticTapeCreationPolicyInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutomaticTapeCreationRules != null && {
      AutomaticTapeCreationRules: se_AutomaticTapeCreationRules(input.AutomaticTapeCreationRules, context),
    }),
    ...(input.GatewayARN != null && { GatewayARN: input.GatewayARN }),
  };
};

/**
 * serializeAws_json1_1UpdateBandwidthRateLimitInput
 */
const se_UpdateBandwidthRateLimitInput = (input: UpdateBandwidthRateLimitInput, context: __SerdeContext): any => {
  return {
    ...(input.AverageDownloadRateLimitInBitsPerSec != null && {
      AverageDownloadRateLimitInBitsPerSec: input.AverageDownloadRateLimitInBitsPerSec,
    }),
    ...(input.AverageUploadRateLimitInBitsPerSec != null && {
      AverageUploadRateLimitInBitsPerSec: input.AverageUploadRateLimitInBitsPerSec,
    }),
    ...(input.GatewayARN != null && { GatewayARN: input.GatewayARN }),
  };
};

/**
 * serializeAws_json1_1UpdateBandwidthRateLimitScheduleInput
 */
const se_UpdateBandwidthRateLimitScheduleInput = (
  input: UpdateBandwidthRateLimitScheduleInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.BandwidthRateLimitIntervals != null && {
      BandwidthRateLimitIntervals: se_BandwidthRateLimitIntervals(input.BandwidthRateLimitIntervals, context),
    }),
    ...(input.GatewayARN != null && { GatewayARN: input.GatewayARN }),
  };
};

/**
 * serializeAws_json1_1UpdateChapCredentialsInput
 */
const se_UpdateChapCredentialsInput = (input: UpdateChapCredentialsInput, context: __SerdeContext): any => {
  return {
    ...(input.InitiatorName != null && { InitiatorName: input.InitiatorName }),
    ...(input.SecretToAuthenticateInitiator != null && {
      SecretToAuthenticateInitiator: input.SecretToAuthenticateInitiator,
    }),
    ...(input.SecretToAuthenticateTarget != null && { SecretToAuthenticateTarget: input.SecretToAuthenticateTarget }),
    ...(input.TargetARN != null && { TargetARN: input.TargetARN }),
  };
};

/**
 * serializeAws_json1_1UpdateFileSystemAssociationInput
 */
const se_UpdateFileSystemAssociationInput = (input: UpdateFileSystemAssociationInput, context: __SerdeContext): any => {
  return {
    ...(input.AuditDestinationARN != null && { AuditDestinationARN: input.AuditDestinationARN }),
    ...(input.CacheAttributes != null && { CacheAttributes: se_CacheAttributes(input.CacheAttributes, context) }),
    ...(input.FileSystemAssociationARN != null && { FileSystemAssociationARN: input.FileSystemAssociationARN }),
    ...(input.Password != null && { Password: input.Password }),
    ...(input.UserName != null && { UserName: input.UserName }),
  };
};

/**
 * serializeAws_json1_1UpdateGatewayInformationInput
 */
const se_UpdateGatewayInformationInput = (input: UpdateGatewayInformationInput, context: __SerdeContext): any => {
  return {
    ...(input.CloudWatchLogGroupARN != null && { CloudWatchLogGroupARN: input.CloudWatchLogGroupARN }),
    ...(input.GatewayARN != null && { GatewayARN: input.GatewayARN }),
    ...(input.GatewayCapacity != null && { GatewayCapacity: input.GatewayCapacity }),
    ...(input.GatewayName != null && { GatewayName: input.GatewayName }),
    ...(input.GatewayTimezone != null && { GatewayTimezone: input.GatewayTimezone }),
  };
};

/**
 * serializeAws_json1_1UpdateGatewaySoftwareNowInput
 */
const se_UpdateGatewaySoftwareNowInput = (input: UpdateGatewaySoftwareNowInput, context: __SerdeContext): any => {
  return {
    ...(input.GatewayARN != null && { GatewayARN: input.GatewayARN }),
  };
};

/**
 * serializeAws_json1_1UpdateMaintenanceStartTimeInput
 */
const se_UpdateMaintenanceStartTimeInput = (input: UpdateMaintenanceStartTimeInput, context: __SerdeContext): any => {
  return {
    ...(input.DayOfMonth != null && { DayOfMonth: input.DayOfMonth }),
    ...(input.DayOfWeek != null && { DayOfWeek: input.DayOfWeek }),
    ...(input.GatewayARN != null && { GatewayARN: input.GatewayARN }),
    ...(input.HourOfDay != null && { HourOfDay: input.HourOfDay }),
    ...(input.MinuteOfHour != null && { MinuteOfHour: input.MinuteOfHour }),
  };
};

/**
 * serializeAws_json1_1UpdateNFSFileShareInput
 */
const se_UpdateNFSFileShareInput = (input: UpdateNFSFileShareInput, context: __SerdeContext): any => {
  return {
    ...(input.AuditDestinationARN != null && { AuditDestinationARN: input.AuditDestinationARN }),
    ...(input.CacheAttributes != null && { CacheAttributes: se_CacheAttributes(input.CacheAttributes, context) }),
    ...(input.ClientList != null && { ClientList: se_FileShareClientList(input.ClientList, context) }),
    ...(input.DefaultStorageClass != null && { DefaultStorageClass: input.DefaultStorageClass }),
    ...(input.FileShareARN != null && { FileShareARN: input.FileShareARN }),
    ...(input.FileShareName != null && { FileShareName: input.FileShareName }),
    ...(input.GuessMIMETypeEnabled != null && { GuessMIMETypeEnabled: input.GuessMIMETypeEnabled }),
    ...(input.KMSEncrypted != null && { KMSEncrypted: input.KMSEncrypted }),
    ...(input.KMSKey != null && { KMSKey: input.KMSKey }),
    ...(input.NFSFileShareDefaults != null && {
      NFSFileShareDefaults: se_NFSFileShareDefaults(input.NFSFileShareDefaults, context),
    }),
    ...(input.NotificationPolicy != null && { NotificationPolicy: input.NotificationPolicy }),
    ...(input.ObjectACL != null && { ObjectACL: input.ObjectACL }),
    ...(input.ReadOnly != null && { ReadOnly: input.ReadOnly }),
    ...(input.RequesterPays != null && { RequesterPays: input.RequesterPays }),
    ...(input.Squash != null && { Squash: input.Squash }),
  };
};

/**
 * serializeAws_json1_1UpdateSMBFileShareInput
 */
const se_UpdateSMBFileShareInput = (input: UpdateSMBFileShareInput, context: __SerdeContext): any => {
  return {
    ...(input.AccessBasedEnumeration != null && { AccessBasedEnumeration: input.AccessBasedEnumeration }),
    ...(input.AdminUserList != null && { AdminUserList: se_UserList(input.AdminUserList, context) }),
    ...(input.AuditDestinationARN != null && { AuditDestinationARN: input.AuditDestinationARN }),
    ...(input.CacheAttributes != null && { CacheAttributes: se_CacheAttributes(input.CacheAttributes, context) }),
    ...(input.CaseSensitivity != null && { CaseSensitivity: input.CaseSensitivity }),
    ...(input.DefaultStorageClass != null && { DefaultStorageClass: input.DefaultStorageClass }),
    ...(input.FileShareARN != null && { FileShareARN: input.FileShareARN }),
    ...(input.FileShareName != null && { FileShareName: input.FileShareName }),
    ...(input.GuessMIMETypeEnabled != null && { GuessMIMETypeEnabled: input.GuessMIMETypeEnabled }),
    ...(input.InvalidUserList != null && { InvalidUserList: se_UserList(input.InvalidUserList, context) }),
    ...(input.KMSEncrypted != null && { KMSEncrypted: input.KMSEncrypted }),
    ...(input.KMSKey != null && { KMSKey: input.KMSKey }),
    ...(input.NotificationPolicy != null && { NotificationPolicy: input.NotificationPolicy }),
    ...(input.ObjectACL != null && { ObjectACL: input.ObjectACL }),
    ...(input.OplocksEnabled != null && { OplocksEnabled: input.OplocksEnabled }),
    ...(input.ReadOnly != null && { ReadOnly: input.ReadOnly }),
    ...(input.RequesterPays != null && { RequesterPays: input.RequesterPays }),
    ...(input.SMBACLEnabled != null && { SMBACLEnabled: input.SMBACLEnabled }),
    ...(input.ValidUserList != null && { ValidUserList: se_UserList(input.ValidUserList, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateSMBFileShareVisibilityInput
 */
const se_UpdateSMBFileShareVisibilityInput = (
  input: UpdateSMBFileShareVisibilityInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.FileSharesVisible != null && { FileSharesVisible: input.FileSharesVisible }),
    ...(input.GatewayARN != null && { GatewayARN: input.GatewayARN }),
  };
};

/**
 * serializeAws_json1_1UpdateSMBLocalGroupsInput
 */
const se_UpdateSMBLocalGroupsInput = (input: UpdateSMBLocalGroupsInput, context: __SerdeContext): any => {
  return {
    ...(input.GatewayARN != null && { GatewayARN: input.GatewayARN }),
    ...(input.SMBLocalGroups != null && { SMBLocalGroups: se_SMBLocalGroups(input.SMBLocalGroups, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateSMBSecurityStrategyInput
 */
const se_UpdateSMBSecurityStrategyInput = (input: UpdateSMBSecurityStrategyInput, context: __SerdeContext): any => {
  return {
    ...(input.GatewayARN != null && { GatewayARN: input.GatewayARN }),
    ...(input.SMBSecurityStrategy != null && { SMBSecurityStrategy: input.SMBSecurityStrategy }),
  };
};

/**
 * serializeAws_json1_1UpdateSnapshotScheduleInput
 */
const se_UpdateSnapshotScheduleInput = (input: UpdateSnapshotScheduleInput, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.RecurrenceInHours != null && { RecurrenceInHours: input.RecurrenceInHours }),
    ...(input.StartAt != null && { StartAt: input.StartAt }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
    ...(input.VolumeARN != null && { VolumeARN: input.VolumeARN }),
  };
};

/**
 * serializeAws_json1_1UpdateVTLDeviceTypeInput
 */
const se_UpdateVTLDeviceTypeInput = (input: UpdateVTLDeviceTypeInput, context: __SerdeContext): any => {
  return {
    ...(input.DeviceType != null && { DeviceType: input.DeviceType }),
    ...(input.VTLDeviceARN != null && { VTLDeviceARN: input.VTLDeviceARN }),
  };
};

/**
 * serializeAws_json1_1UserList
 */
const se_UserList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1VolumeARNs
 */
const se_VolumeARNs = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1VTLDeviceARNs
 */
const se_VTLDeviceARNs = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * deserializeAws_json1_1ActivateGatewayOutput
 */
const de_ActivateGatewayOutput = (output: any, context: __SerdeContext): ActivateGatewayOutput => {
  return {
    GatewayARN: __expectString(output.GatewayARN),
  } as any;
};

/**
 * deserializeAws_json1_1AddCacheOutput
 */
const de_AddCacheOutput = (output: any, context: __SerdeContext): AddCacheOutput => {
  return {
    GatewayARN: __expectString(output.GatewayARN),
  } as any;
};

/**
 * deserializeAws_json1_1AddTagsToResourceOutput
 */
const de_AddTagsToResourceOutput = (output: any, context: __SerdeContext): AddTagsToResourceOutput => {
  return {
    ResourceARN: __expectString(output.ResourceARN),
  } as any;
};

/**
 * deserializeAws_json1_1AddUploadBufferOutput
 */
const de_AddUploadBufferOutput = (output: any, context: __SerdeContext): AddUploadBufferOutput => {
  return {
    GatewayARN: __expectString(output.GatewayARN),
  } as any;
};

/**
 * deserializeAws_json1_1AddWorkingStorageOutput
 */
const de_AddWorkingStorageOutput = (output: any, context: __SerdeContext): AddWorkingStorageOutput => {
  return {
    GatewayARN: __expectString(output.GatewayARN),
  } as any;
};

/**
 * deserializeAws_json1_1AssignTapePoolOutput
 */
const de_AssignTapePoolOutput = (output: any, context: __SerdeContext): AssignTapePoolOutput => {
  return {
    TapeARN: __expectString(output.TapeARN),
  } as any;
};

/**
 * deserializeAws_json1_1AssociateFileSystemOutput
 */
const de_AssociateFileSystemOutput = (output: any, context: __SerdeContext): AssociateFileSystemOutput => {
  return {
    FileSystemAssociationARN: __expectString(output.FileSystemAssociationARN),
  } as any;
};

/**
 * deserializeAws_json1_1AttachVolumeOutput
 */
const de_AttachVolumeOutput = (output: any, context: __SerdeContext): AttachVolumeOutput => {
  return {
    TargetARN: __expectString(output.TargetARN),
    VolumeARN: __expectString(output.VolumeARN),
  } as any;
};

/**
 * deserializeAws_json1_1AutomaticTapeCreationPolicyInfo
 */
const de_AutomaticTapeCreationPolicyInfo = (output: any, context: __SerdeContext): AutomaticTapeCreationPolicyInfo => {
  return {
    AutomaticTapeCreationRules:
      output.AutomaticTapeCreationRules != null
        ? de_AutomaticTapeCreationRules(output.AutomaticTapeCreationRules, context)
        : undefined,
    GatewayARN: __expectString(output.GatewayARN),
  } as any;
};

/**
 * deserializeAws_json1_1AutomaticTapeCreationPolicyInfos
 */
const de_AutomaticTapeCreationPolicyInfos = (
  output: any,
  context: __SerdeContext
): AutomaticTapeCreationPolicyInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AutomaticTapeCreationPolicyInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AutomaticTapeCreationRule
 */
const de_AutomaticTapeCreationRule = (output: any, context: __SerdeContext): AutomaticTapeCreationRule => {
  return {
    MinimumNumTapes: __expectInt32(output.MinimumNumTapes),
    PoolId: __expectString(output.PoolId),
    TapeBarcodePrefix: __expectString(output.TapeBarcodePrefix),
    TapeSizeInBytes: __expectLong(output.TapeSizeInBytes),
    Worm: __expectBoolean(output.Worm),
  } as any;
};

/**
 * deserializeAws_json1_1AutomaticTapeCreationRules
 */
const de_AutomaticTapeCreationRules = (output: any, context: __SerdeContext): AutomaticTapeCreationRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AutomaticTapeCreationRule(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1BandwidthRateLimitInterval
 */
const de_BandwidthRateLimitInterval = (output: any, context: __SerdeContext): BandwidthRateLimitInterval => {
  return {
    AverageDownloadRateLimitInBitsPerSec: __expectLong(output.AverageDownloadRateLimitInBitsPerSec),
    AverageUploadRateLimitInBitsPerSec: __expectLong(output.AverageUploadRateLimitInBitsPerSec),
    DaysOfWeek: output.DaysOfWeek != null ? de_DaysOfWeek(output.DaysOfWeek, context) : undefined,
    EndHourOfDay: __expectInt32(output.EndHourOfDay),
    EndMinuteOfHour: __expectInt32(output.EndMinuteOfHour),
    StartHourOfDay: __expectInt32(output.StartHourOfDay),
    StartMinuteOfHour: __expectInt32(output.StartMinuteOfHour),
  } as any;
};

/**
 * deserializeAws_json1_1BandwidthRateLimitIntervals
 */
const de_BandwidthRateLimitIntervals = (output: any, context: __SerdeContext): BandwidthRateLimitInterval[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BandwidthRateLimitInterval(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CacheAttributes
 */
const de_CacheAttributes = (output: any, context: __SerdeContext): CacheAttributes => {
  return {
    CacheStaleTimeoutInSeconds: __expectInt32(output.CacheStaleTimeoutInSeconds),
  } as any;
};

/**
 * deserializeAws_json1_1CachediSCSIVolume
 */
const de_CachediSCSIVolume = (output: any, context: __SerdeContext): CachediSCSIVolume => {
  return {
    CreatedDate:
      output.CreatedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedDate)))
        : undefined,
    KMSKey: __expectString(output.KMSKey),
    SourceSnapshotId: __expectString(output.SourceSnapshotId),
    TargetName: __expectString(output.TargetName),
    VolumeARN: __expectString(output.VolumeARN),
    VolumeAttachmentStatus: __expectString(output.VolumeAttachmentStatus),
    VolumeId: __expectString(output.VolumeId),
    VolumeProgress: __limitedParseDouble(output.VolumeProgress),
    VolumeSizeInBytes: __expectLong(output.VolumeSizeInBytes),
    VolumeStatus: __expectString(output.VolumeStatus),
    VolumeType: __expectString(output.VolumeType),
    VolumeUsedInBytes: __expectLong(output.VolumeUsedInBytes),
    VolumeiSCSIAttributes:
      output.VolumeiSCSIAttributes != null
        ? de_VolumeiSCSIAttributes(output.VolumeiSCSIAttributes, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CachediSCSIVolumes
 */
const de_CachediSCSIVolumes = (output: any, context: __SerdeContext): CachediSCSIVolume[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CachediSCSIVolume(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CancelArchivalOutput
 */
const de_CancelArchivalOutput = (output: any, context: __SerdeContext): CancelArchivalOutput => {
  return {
    TapeARN: __expectString(output.TapeARN),
  } as any;
};

/**
 * deserializeAws_json1_1CancelRetrievalOutput
 */
const de_CancelRetrievalOutput = (output: any, context: __SerdeContext): CancelRetrievalOutput => {
  return {
    TapeARN: __expectString(output.TapeARN),
  } as any;
};

/**
 * deserializeAws_json1_1ChapCredentials
 */
const de_ChapCredentials = (output: any, context: __SerdeContext): ChapInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ChapInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ChapInfo
 */
const de_ChapInfo = (output: any, context: __SerdeContext): ChapInfo => {
  return {
    InitiatorName: __expectString(output.InitiatorName),
    SecretToAuthenticateInitiator: __expectString(output.SecretToAuthenticateInitiator),
    SecretToAuthenticateTarget: __expectString(output.SecretToAuthenticateTarget),
    TargetARN: __expectString(output.TargetARN),
  } as any;
};

/**
 * deserializeAws_json1_1CreateCachediSCSIVolumeOutput
 */
const de_CreateCachediSCSIVolumeOutput = (output: any, context: __SerdeContext): CreateCachediSCSIVolumeOutput => {
  return {
    TargetARN: __expectString(output.TargetARN),
    VolumeARN: __expectString(output.VolumeARN),
  } as any;
};

/**
 * deserializeAws_json1_1CreateNFSFileShareOutput
 */
const de_CreateNFSFileShareOutput = (output: any, context: __SerdeContext): CreateNFSFileShareOutput => {
  return {
    FileShareARN: __expectString(output.FileShareARN),
  } as any;
};

/**
 * deserializeAws_json1_1CreateSMBFileShareOutput
 */
const de_CreateSMBFileShareOutput = (output: any, context: __SerdeContext): CreateSMBFileShareOutput => {
  return {
    FileShareARN: __expectString(output.FileShareARN),
  } as any;
};

/**
 * deserializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointOutput
 */
const de_CreateSnapshotFromVolumeRecoveryPointOutput = (
  output: any,
  context: __SerdeContext
): CreateSnapshotFromVolumeRecoveryPointOutput => {
  return {
    SnapshotId: __expectString(output.SnapshotId),
    VolumeARN: __expectString(output.VolumeARN),
    VolumeRecoveryPointTime: __expectString(output.VolumeRecoveryPointTime),
  } as any;
};

/**
 * deserializeAws_json1_1CreateSnapshotOutput
 */
const de_CreateSnapshotOutput = (output: any, context: __SerdeContext): CreateSnapshotOutput => {
  return {
    SnapshotId: __expectString(output.SnapshotId),
    VolumeARN: __expectString(output.VolumeARN),
  } as any;
};

/**
 * deserializeAws_json1_1CreateStorediSCSIVolumeOutput
 */
const de_CreateStorediSCSIVolumeOutput = (output: any, context: __SerdeContext): CreateStorediSCSIVolumeOutput => {
  return {
    TargetARN: __expectString(output.TargetARN),
    VolumeARN: __expectString(output.VolumeARN),
    VolumeSizeInBytes: __expectLong(output.VolumeSizeInBytes),
  } as any;
};

/**
 * deserializeAws_json1_1CreateTapePoolOutput
 */
const de_CreateTapePoolOutput = (output: any, context: __SerdeContext): CreateTapePoolOutput => {
  return {
    PoolARN: __expectString(output.PoolARN),
  } as any;
};

/**
 * deserializeAws_json1_1CreateTapesOutput
 */
const de_CreateTapesOutput = (output: any, context: __SerdeContext): CreateTapesOutput => {
  return {
    TapeARNs: output.TapeARNs != null ? de_TapeARNs(output.TapeARNs, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateTapeWithBarcodeOutput
 */
const de_CreateTapeWithBarcodeOutput = (output: any, context: __SerdeContext): CreateTapeWithBarcodeOutput => {
  return {
    TapeARN: __expectString(output.TapeARN),
  } as any;
};

/**
 * deserializeAws_json1_1DaysOfWeek
 */
const de_DaysOfWeek = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectInt32(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DeleteAutomaticTapeCreationPolicyOutput
 */
const de_DeleteAutomaticTapeCreationPolicyOutput = (
  output: any,
  context: __SerdeContext
): DeleteAutomaticTapeCreationPolicyOutput => {
  return {
    GatewayARN: __expectString(output.GatewayARN),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteBandwidthRateLimitOutput
 */
const de_DeleteBandwidthRateLimitOutput = (output: any, context: __SerdeContext): DeleteBandwidthRateLimitOutput => {
  return {
    GatewayARN: __expectString(output.GatewayARN),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteChapCredentialsOutput
 */
const de_DeleteChapCredentialsOutput = (output: any, context: __SerdeContext): DeleteChapCredentialsOutput => {
  return {
    InitiatorName: __expectString(output.InitiatorName),
    TargetARN: __expectString(output.TargetARN),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteFileShareOutput
 */
const de_DeleteFileShareOutput = (output: any, context: __SerdeContext): DeleteFileShareOutput => {
  return {
    FileShareARN: __expectString(output.FileShareARN),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteGatewayOutput
 */
const de_DeleteGatewayOutput = (output: any, context: __SerdeContext): DeleteGatewayOutput => {
  return {
    GatewayARN: __expectString(output.GatewayARN),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteSnapshotScheduleOutput
 */
const de_DeleteSnapshotScheduleOutput = (output: any, context: __SerdeContext): DeleteSnapshotScheduleOutput => {
  return {
    VolumeARN: __expectString(output.VolumeARN),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteTapeArchiveOutput
 */
const de_DeleteTapeArchiveOutput = (output: any, context: __SerdeContext): DeleteTapeArchiveOutput => {
  return {
    TapeARN: __expectString(output.TapeARN),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteTapeOutput
 */
const de_DeleteTapeOutput = (output: any, context: __SerdeContext): DeleteTapeOutput => {
  return {
    TapeARN: __expectString(output.TapeARN),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteTapePoolOutput
 */
const de_DeleteTapePoolOutput = (output: any, context: __SerdeContext): DeleteTapePoolOutput => {
  return {
    PoolARN: __expectString(output.PoolARN),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteVolumeOutput
 */
const de_DeleteVolumeOutput = (output: any, context: __SerdeContext): DeleteVolumeOutput => {
  return {
    VolumeARN: __expectString(output.VolumeARN),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeAvailabilityMonitorTestOutput
 */
const de_DescribeAvailabilityMonitorTestOutput = (
  output: any,
  context: __SerdeContext
): DescribeAvailabilityMonitorTestOutput => {
  return {
    GatewayARN: __expectString(output.GatewayARN),
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeBandwidthRateLimitOutput
 */
const de_DescribeBandwidthRateLimitOutput = (
  output: any,
  context: __SerdeContext
): DescribeBandwidthRateLimitOutput => {
  return {
    AverageDownloadRateLimitInBitsPerSec: __expectLong(output.AverageDownloadRateLimitInBitsPerSec),
    AverageUploadRateLimitInBitsPerSec: __expectLong(output.AverageUploadRateLimitInBitsPerSec),
    GatewayARN: __expectString(output.GatewayARN),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeBandwidthRateLimitScheduleOutput
 */
const de_DescribeBandwidthRateLimitScheduleOutput = (
  output: any,
  context: __SerdeContext
): DescribeBandwidthRateLimitScheduleOutput => {
  return {
    BandwidthRateLimitIntervals:
      output.BandwidthRateLimitIntervals != null
        ? de_BandwidthRateLimitIntervals(output.BandwidthRateLimitIntervals, context)
        : undefined,
    GatewayARN: __expectString(output.GatewayARN),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeCachediSCSIVolumesOutput
 */
const de_DescribeCachediSCSIVolumesOutput = (
  output: any,
  context: __SerdeContext
): DescribeCachediSCSIVolumesOutput => {
  return {
    CachediSCSIVolumes:
      output.CachediSCSIVolumes != null ? de_CachediSCSIVolumes(output.CachediSCSIVolumes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeCacheOutput
 */
const de_DescribeCacheOutput = (output: any, context: __SerdeContext): DescribeCacheOutput => {
  return {
    CacheAllocatedInBytes: __expectLong(output.CacheAllocatedInBytes),
    CacheDirtyPercentage: __limitedParseDouble(output.CacheDirtyPercentage),
    CacheHitPercentage: __limitedParseDouble(output.CacheHitPercentage),
    CacheMissPercentage: __limitedParseDouble(output.CacheMissPercentage),
    CacheUsedPercentage: __limitedParseDouble(output.CacheUsedPercentage),
    DiskIds: output.DiskIds != null ? de_DiskIds(output.DiskIds, context) : undefined,
    GatewayARN: __expectString(output.GatewayARN),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeChapCredentialsOutput
 */
const de_DescribeChapCredentialsOutput = (output: any, context: __SerdeContext): DescribeChapCredentialsOutput => {
  return {
    ChapCredentials: output.ChapCredentials != null ? de_ChapCredentials(output.ChapCredentials, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeFileSystemAssociationsOutput
 */
const de_DescribeFileSystemAssociationsOutput = (
  output: any,
  context: __SerdeContext
): DescribeFileSystemAssociationsOutput => {
  return {
    FileSystemAssociationInfoList:
      output.FileSystemAssociationInfoList != null
        ? de_FileSystemAssociationInfoList(output.FileSystemAssociationInfoList, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeGatewayInformationOutput
 */
const de_DescribeGatewayInformationOutput = (
  output: any,
  context: __SerdeContext
): DescribeGatewayInformationOutput => {
  return {
    CloudWatchLogGroupARN: __expectString(output.CloudWatchLogGroupARN),
    DeprecationDate: __expectString(output.DeprecationDate),
    Ec2InstanceId: __expectString(output.Ec2InstanceId),
    Ec2InstanceRegion: __expectString(output.Ec2InstanceRegion),
    EndpointType: __expectString(output.EndpointType),
    GatewayARN: __expectString(output.GatewayARN),
    GatewayCapacity: __expectString(output.GatewayCapacity),
    GatewayId: __expectString(output.GatewayId),
    GatewayName: __expectString(output.GatewayName),
    GatewayNetworkInterfaces:
      output.GatewayNetworkInterfaces != null
        ? de_GatewayNetworkInterfaces(output.GatewayNetworkInterfaces, context)
        : undefined,
    GatewayState: __expectString(output.GatewayState),
    GatewayTimezone: __expectString(output.GatewayTimezone),
    GatewayType: __expectString(output.GatewayType),
    HostEnvironment: __expectString(output.HostEnvironment),
    HostEnvironmentId: __expectString(output.HostEnvironmentId),
    LastSoftwareUpdate: __expectString(output.LastSoftwareUpdate),
    NextUpdateAvailabilityDate: __expectString(output.NextUpdateAvailabilityDate),
    SoftwareUpdatesEndDate: __expectString(output.SoftwareUpdatesEndDate),
    SupportedGatewayCapacities:
      output.SupportedGatewayCapacities != null
        ? de_SupportedGatewayCapacities(output.SupportedGatewayCapacities, context)
        : undefined,
    Tags: output.Tags != null ? de_Tags(output.Tags, context) : undefined,
    VPCEndpoint: __expectString(output.VPCEndpoint),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeMaintenanceStartTimeOutput
 */
const de_DescribeMaintenanceStartTimeOutput = (
  output: any,
  context: __SerdeContext
): DescribeMaintenanceStartTimeOutput => {
  return {
    DayOfMonth: __expectInt32(output.DayOfMonth),
    DayOfWeek: __expectInt32(output.DayOfWeek),
    GatewayARN: __expectString(output.GatewayARN),
    HourOfDay: __expectInt32(output.HourOfDay),
    MinuteOfHour: __expectInt32(output.MinuteOfHour),
    Timezone: __expectString(output.Timezone),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeNFSFileSharesOutput
 */
const de_DescribeNFSFileSharesOutput = (output: any, context: __SerdeContext): DescribeNFSFileSharesOutput => {
  return {
    NFSFileShareInfoList:
      output.NFSFileShareInfoList != null ? de_NFSFileShareInfoList(output.NFSFileShareInfoList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeSMBFileSharesOutput
 */
const de_DescribeSMBFileSharesOutput = (output: any, context: __SerdeContext): DescribeSMBFileSharesOutput => {
  return {
    SMBFileShareInfoList:
      output.SMBFileShareInfoList != null ? de_SMBFileShareInfoList(output.SMBFileShareInfoList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeSMBSettingsOutput
 */
const de_DescribeSMBSettingsOutput = (output: any, context: __SerdeContext): DescribeSMBSettingsOutput => {
  return {
    ActiveDirectoryStatus: __expectString(output.ActiveDirectoryStatus),
    DomainName: __expectString(output.DomainName),
    FileSharesVisible: __expectBoolean(output.FileSharesVisible),
    GatewayARN: __expectString(output.GatewayARN),
    SMBGuestPasswordSet: __expectBoolean(output.SMBGuestPasswordSet),
    SMBLocalGroups: output.SMBLocalGroups != null ? de_SMBLocalGroups(output.SMBLocalGroups, context) : undefined,
    SMBSecurityStrategy: __expectString(output.SMBSecurityStrategy),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeSnapshotScheduleOutput
 */
const de_DescribeSnapshotScheduleOutput = (output: any, context: __SerdeContext): DescribeSnapshotScheduleOutput => {
  return {
    Description: __expectString(output.Description),
    RecurrenceInHours: __expectInt32(output.RecurrenceInHours),
    StartAt: __expectInt32(output.StartAt),
    Tags: output.Tags != null ? de_Tags(output.Tags, context) : undefined,
    Timezone: __expectString(output.Timezone),
    VolumeARN: __expectString(output.VolumeARN),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeStorediSCSIVolumesOutput
 */
const de_DescribeStorediSCSIVolumesOutput = (
  output: any,
  context: __SerdeContext
): DescribeStorediSCSIVolumesOutput => {
  return {
    StorediSCSIVolumes:
      output.StorediSCSIVolumes != null ? de_StorediSCSIVolumes(output.StorediSCSIVolumes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeTapeArchivesOutput
 */
const de_DescribeTapeArchivesOutput = (output: any, context: __SerdeContext): DescribeTapeArchivesOutput => {
  return {
    Marker: __expectString(output.Marker),
    TapeArchives: output.TapeArchives != null ? de_TapeArchives(output.TapeArchives, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeTapeRecoveryPointsOutput
 */
const de_DescribeTapeRecoveryPointsOutput = (
  output: any,
  context: __SerdeContext
): DescribeTapeRecoveryPointsOutput => {
  return {
    GatewayARN: __expectString(output.GatewayARN),
    Marker: __expectString(output.Marker),
    TapeRecoveryPointInfos:
      output.TapeRecoveryPointInfos != null
        ? de_TapeRecoveryPointInfos(output.TapeRecoveryPointInfos, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeTapesOutput
 */
const de_DescribeTapesOutput = (output: any, context: __SerdeContext): DescribeTapesOutput => {
  return {
    Marker: __expectString(output.Marker),
    Tapes: output.Tapes != null ? de_Tapes(output.Tapes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeUploadBufferOutput
 */
const de_DescribeUploadBufferOutput = (output: any, context: __SerdeContext): DescribeUploadBufferOutput => {
  return {
    DiskIds: output.DiskIds != null ? de_DiskIds(output.DiskIds, context) : undefined,
    GatewayARN: __expectString(output.GatewayARN),
    UploadBufferAllocatedInBytes: __expectLong(output.UploadBufferAllocatedInBytes),
    UploadBufferUsedInBytes: __expectLong(output.UploadBufferUsedInBytes),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeVTLDevicesOutput
 */
const de_DescribeVTLDevicesOutput = (output: any, context: __SerdeContext): DescribeVTLDevicesOutput => {
  return {
    GatewayARN: __expectString(output.GatewayARN),
    Marker: __expectString(output.Marker),
    VTLDevices: output.VTLDevices != null ? de_VTLDevices(output.VTLDevices, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeWorkingStorageOutput
 */
const de_DescribeWorkingStorageOutput = (output: any, context: __SerdeContext): DescribeWorkingStorageOutput => {
  return {
    DiskIds: output.DiskIds != null ? de_DiskIds(output.DiskIds, context) : undefined,
    GatewayARN: __expectString(output.GatewayARN),
    WorkingStorageAllocatedInBytes: __expectLong(output.WorkingStorageAllocatedInBytes),
    WorkingStorageUsedInBytes: __expectLong(output.WorkingStorageUsedInBytes),
  } as any;
};

/**
 * deserializeAws_json1_1DetachVolumeOutput
 */
const de_DetachVolumeOutput = (output: any, context: __SerdeContext): DetachVolumeOutput => {
  return {
    VolumeARN: __expectString(output.VolumeARN),
  } as any;
};

/**
 * deserializeAws_json1_1DeviceiSCSIAttributes
 */
const de_DeviceiSCSIAttributes = (output: any, context: __SerdeContext): DeviceiSCSIAttributes => {
  return {
    ChapEnabled: __expectBoolean(output.ChapEnabled),
    NetworkInterfaceId: __expectString(output.NetworkInterfaceId),
    NetworkInterfacePort: __expectInt32(output.NetworkInterfacePort),
    TargetARN: __expectString(output.TargetARN),
  } as any;
};

/**
 * deserializeAws_json1_1DisableGatewayOutput
 */
const de_DisableGatewayOutput = (output: any, context: __SerdeContext): DisableGatewayOutput => {
  return {
    GatewayARN: __expectString(output.GatewayARN),
  } as any;
};

/**
 * deserializeAws_json1_1DisassociateFileSystemOutput
 */
const de_DisassociateFileSystemOutput = (output: any, context: __SerdeContext): DisassociateFileSystemOutput => {
  return {
    FileSystemAssociationARN: __expectString(output.FileSystemAssociationARN),
  } as any;
};

/**
 * deserializeAws_json1_1Disk
 */
const de_Disk = (output: any, context: __SerdeContext): Disk => {
  return {
    DiskAllocationResource: __expectString(output.DiskAllocationResource),
    DiskAllocationType: __expectString(output.DiskAllocationType),
    DiskAttributeList:
      output.DiskAttributeList != null ? de_DiskAttributeList(output.DiskAttributeList, context) : undefined,
    DiskId: __expectString(output.DiskId),
    DiskNode: __expectString(output.DiskNode),
    DiskPath: __expectString(output.DiskPath),
    DiskSizeInBytes: __expectLong(output.DiskSizeInBytes),
    DiskStatus: __expectString(output.DiskStatus),
  } as any;
};

/**
 * deserializeAws_json1_1DiskAttributeList
 */
const de_DiskAttributeList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DiskIds
 */
const de_DiskIds = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Disks
 */
const de_Disks = (output: any, context: __SerdeContext): Disk[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Disk(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EndpointNetworkConfiguration
 */
const de_EndpointNetworkConfiguration = (output: any, context: __SerdeContext): EndpointNetworkConfiguration => {
  return {
    IpAddresses: output.IpAddresses != null ? de_IpAddressList(output.IpAddresses, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1errorDetails
 */
const de_errorDetails = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1FileShareClientList
 */
const de_FileShareClientList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FileShareInfo
 */
const de_FileShareInfo = (output: any, context: __SerdeContext): FileShareInfo => {
  return {
    FileShareARN: __expectString(output.FileShareARN),
    FileShareId: __expectString(output.FileShareId),
    FileShareStatus: __expectString(output.FileShareStatus),
    FileShareType: __expectString(output.FileShareType),
    GatewayARN: __expectString(output.GatewayARN),
  } as any;
};

/**
 * deserializeAws_json1_1FileShareInfoList
 */
const de_FileShareInfoList = (output: any, context: __SerdeContext): FileShareInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FileShareInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FileSystemAssociationInfo
 */
const de_FileSystemAssociationInfo = (output: any, context: __SerdeContext): FileSystemAssociationInfo => {
  return {
    AuditDestinationARN: __expectString(output.AuditDestinationARN),
    CacheAttributes: output.CacheAttributes != null ? de_CacheAttributes(output.CacheAttributes, context) : undefined,
    EndpointNetworkConfiguration:
      output.EndpointNetworkConfiguration != null
        ? de_EndpointNetworkConfiguration(output.EndpointNetworkConfiguration, context)
        : undefined,
    FileSystemAssociationARN: __expectString(output.FileSystemAssociationARN),
    FileSystemAssociationStatus: __expectString(output.FileSystemAssociationStatus),
    FileSystemAssociationStatusDetails:
      output.FileSystemAssociationStatusDetails != null
        ? de_FileSystemAssociationStatusDetails(output.FileSystemAssociationStatusDetails, context)
        : undefined,
    GatewayARN: __expectString(output.GatewayARN),
    LocationARN: __expectString(output.LocationARN),
    Tags: output.Tags != null ? de_Tags(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1FileSystemAssociationInfoList
 */
const de_FileSystemAssociationInfoList = (output: any, context: __SerdeContext): FileSystemAssociationInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FileSystemAssociationInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FileSystemAssociationStatusDetail
 */
const de_FileSystemAssociationStatusDetail = (
  output: any,
  context: __SerdeContext
): FileSystemAssociationStatusDetail => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
  } as any;
};

/**
 * deserializeAws_json1_1FileSystemAssociationStatusDetails
 */
const de_FileSystemAssociationStatusDetails = (
  output: any,
  context: __SerdeContext
): FileSystemAssociationStatusDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FileSystemAssociationStatusDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FileSystemAssociationSummary
 */
const de_FileSystemAssociationSummary = (output: any, context: __SerdeContext): FileSystemAssociationSummary => {
  return {
    FileSystemAssociationARN: __expectString(output.FileSystemAssociationARN),
    FileSystemAssociationId: __expectString(output.FileSystemAssociationId),
    FileSystemAssociationStatus: __expectString(output.FileSystemAssociationStatus),
    GatewayARN: __expectString(output.GatewayARN),
  } as any;
};

/**
 * deserializeAws_json1_1FileSystemAssociationSummaryList
 */
const de_FileSystemAssociationSummaryList = (output: any, context: __SerdeContext): FileSystemAssociationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FileSystemAssociationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1GatewayInfo
 */
const de_GatewayInfo = (output: any, context: __SerdeContext): GatewayInfo => {
  return {
    Ec2InstanceId: __expectString(output.Ec2InstanceId),
    Ec2InstanceRegion: __expectString(output.Ec2InstanceRegion),
    GatewayARN: __expectString(output.GatewayARN),
    GatewayId: __expectString(output.GatewayId),
    GatewayName: __expectString(output.GatewayName),
    GatewayOperationalState: __expectString(output.GatewayOperationalState),
    GatewayType: __expectString(output.GatewayType),
    HostEnvironment: __expectString(output.HostEnvironment),
    HostEnvironmentId: __expectString(output.HostEnvironmentId),
  } as any;
};

/**
 * deserializeAws_json1_1GatewayNetworkInterfaces
 */
const de_GatewayNetworkInterfaces = (output: any, context: __SerdeContext): NetworkInterface[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_NetworkInterface(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Gateways
 */
const de_Gateways = (output: any, context: __SerdeContext): GatewayInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_GatewayInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Initiators
 */
const de_Initiators = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InternalServerError
 */
const de_InternalServerError = (output: any, context: __SerdeContext): InternalServerError => {
  return {
    error: output.error != null ? de_StorageGatewayError(output.error, context) : undefined,
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidGatewayRequestException
 */
const de_InvalidGatewayRequestException = (output: any, context: __SerdeContext): InvalidGatewayRequestException => {
  return {
    error: output.error != null ? de_StorageGatewayError(output.error, context) : undefined,
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1IpAddressList
 */
const de_IpAddressList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1JoinDomainOutput
 */
const de_JoinDomainOutput = (output: any, context: __SerdeContext): JoinDomainOutput => {
  return {
    ActiveDirectoryStatus: __expectString(output.ActiveDirectoryStatus),
    GatewayARN: __expectString(output.GatewayARN),
  } as any;
};

/**
 * deserializeAws_json1_1ListAutomaticTapeCreationPoliciesOutput
 */
const de_ListAutomaticTapeCreationPoliciesOutput = (
  output: any,
  context: __SerdeContext
): ListAutomaticTapeCreationPoliciesOutput => {
  return {
    AutomaticTapeCreationPolicyInfos:
      output.AutomaticTapeCreationPolicyInfos != null
        ? de_AutomaticTapeCreationPolicyInfos(output.AutomaticTapeCreationPolicyInfos, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListFileSharesOutput
 */
const de_ListFileSharesOutput = (output: any, context: __SerdeContext): ListFileSharesOutput => {
  return {
    FileShareInfoList:
      output.FileShareInfoList != null ? de_FileShareInfoList(output.FileShareInfoList, context) : undefined,
    Marker: __expectString(output.Marker),
    NextMarker: __expectString(output.NextMarker),
  } as any;
};

/**
 * deserializeAws_json1_1ListFileSystemAssociationsOutput
 */
const de_ListFileSystemAssociationsOutput = (
  output: any,
  context: __SerdeContext
): ListFileSystemAssociationsOutput => {
  return {
    FileSystemAssociationSummaryList:
      output.FileSystemAssociationSummaryList != null
        ? de_FileSystemAssociationSummaryList(output.FileSystemAssociationSummaryList, context)
        : undefined,
    Marker: __expectString(output.Marker),
    NextMarker: __expectString(output.NextMarker),
  } as any;
};

/**
 * deserializeAws_json1_1ListGatewaysOutput
 */
const de_ListGatewaysOutput = (output: any, context: __SerdeContext): ListGatewaysOutput => {
  return {
    Gateways: output.Gateways != null ? de_Gateways(output.Gateways, context) : undefined,
    Marker: __expectString(output.Marker),
  } as any;
};

/**
 * deserializeAws_json1_1ListLocalDisksOutput
 */
const de_ListLocalDisksOutput = (output: any, context: __SerdeContext): ListLocalDisksOutput => {
  return {
    Disks: output.Disks != null ? de_Disks(output.Disks, context) : undefined,
    GatewayARN: __expectString(output.GatewayARN),
  } as any;
};

/**
 * deserializeAws_json1_1ListTagsForResourceOutput
 */
const de_ListTagsForResourceOutput = (output: any, context: __SerdeContext): ListTagsForResourceOutput => {
  return {
    Marker: __expectString(output.Marker),
    ResourceARN: __expectString(output.ResourceARN),
    Tags: output.Tags != null ? de_Tags(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTapePoolsOutput
 */
const de_ListTapePoolsOutput = (output: any, context: __SerdeContext): ListTapePoolsOutput => {
  return {
    Marker: __expectString(output.Marker),
    PoolInfos: output.PoolInfos != null ? de_PoolInfos(output.PoolInfos, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTapesOutput
 */
const de_ListTapesOutput = (output: any, context: __SerdeContext): ListTapesOutput => {
  return {
    Marker: __expectString(output.Marker),
    TapeInfos: output.TapeInfos != null ? de_TapeInfos(output.TapeInfos, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListVolumeInitiatorsOutput
 */
const de_ListVolumeInitiatorsOutput = (output: any, context: __SerdeContext): ListVolumeInitiatorsOutput => {
  return {
    Initiators: output.Initiators != null ? de_Initiators(output.Initiators, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListVolumeRecoveryPointsOutput
 */
const de_ListVolumeRecoveryPointsOutput = (output: any, context: __SerdeContext): ListVolumeRecoveryPointsOutput => {
  return {
    GatewayARN: __expectString(output.GatewayARN),
    VolumeRecoveryPointInfos:
      output.VolumeRecoveryPointInfos != null
        ? de_VolumeRecoveryPointInfos(output.VolumeRecoveryPointInfos, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListVolumesOutput
 */
const de_ListVolumesOutput = (output: any, context: __SerdeContext): ListVolumesOutput => {
  return {
    GatewayARN: __expectString(output.GatewayARN),
    Marker: __expectString(output.Marker),
    VolumeInfos: output.VolumeInfos != null ? de_VolumeInfos(output.VolumeInfos, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1NetworkInterface
 */
const de_NetworkInterface = (output: any, context: __SerdeContext): NetworkInterface => {
  return {
    Ipv4Address: __expectString(output.Ipv4Address),
    Ipv6Address: __expectString(output.Ipv6Address),
    MacAddress: __expectString(output.MacAddress),
  } as any;
};

/**
 * deserializeAws_json1_1NFSFileShareDefaults
 */
const de_NFSFileShareDefaults = (output: any, context: __SerdeContext): NFSFileShareDefaults => {
  return {
    DirectoryMode: __expectString(output.DirectoryMode),
    FileMode: __expectString(output.FileMode),
    GroupId: __expectLong(output.GroupId),
    OwnerId: __expectLong(output.OwnerId),
  } as any;
};

/**
 * deserializeAws_json1_1NFSFileShareInfo
 */
const de_NFSFileShareInfo = (output: any, context: __SerdeContext): NFSFileShareInfo => {
  return {
    AuditDestinationARN: __expectString(output.AuditDestinationARN),
    BucketRegion: __expectString(output.BucketRegion),
    CacheAttributes: output.CacheAttributes != null ? de_CacheAttributes(output.CacheAttributes, context) : undefined,
    ClientList: output.ClientList != null ? de_FileShareClientList(output.ClientList, context) : undefined,
    DefaultStorageClass: __expectString(output.DefaultStorageClass),
    FileShareARN: __expectString(output.FileShareARN),
    FileShareId: __expectString(output.FileShareId),
    FileShareName: __expectString(output.FileShareName),
    FileShareStatus: __expectString(output.FileShareStatus),
    GatewayARN: __expectString(output.GatewayARN),
    GuessMIMETypeEnabled: __expectBoolean(output.GuessMIMETypeEnabled),
    KMSEncrypted: __expectBoolean(output.KMSEncrypted),
    KMSKey: __expectString(output.KMSKey),
    LocationARN: __expectString(output.LocationARN),
    NFSFileShareDefaults:
      output.NFSFileShareDefaults != null ? de_NFSFileShareDefaults(output.NFSFileShareDefaults, context) : undefined,
    NotificationPolicy: __expectString(output.NotificationPolicy),
    ObjectACL: __expectString(output.ObjectACL),
    Path: __expectString(output.Path),
    ReadOnly: __expectBoolean(output.ReadOnly),
    RequesterPays: __expectBoolean(output.RequesterPays),
    Role: __expectString(output.Role),
    Squash: __expectString(output.Squash),
    Tags: output.Tags != null ? de_Tags(output.Tags, context) : undefined,
    VPCEndpointDNSName: __expectString(output.VPCEndpointDNSName),
  } as any;
};

/**
 * deserializeAws_json1_1NFSFileShareInfoList
 */
const de_NFSFileShareInfoList = (output: any, context: __SerdeContext): NFSFileShareInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_NFSFileShareInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1NotifyWhenUploadedOutput
 */
const de_NotifyWhenUploadedOutput = (output: any, context: __SerdeContext): NotifyWhenUploadedOutput => {
  return {
    FileShareARN: __expectString(output.FileShareARN),
    NotificationId: __expectString(output.NotificationId),
  } as any;
};

/**
 * deserializeAws_json1_1PoolInfo
 */
const de_PoolInfo = (output: any, context: __SerdeContext): PoolInfo => {
  return {
    PoolARN: __expectString(output.PoolARN),
    PoolName: __expectString(output.PoolName),
    PoolStatus: __expectString(output.PoolStatus),
    RetentionLockTimeInDays: __expectInt32(output.RetentionLockTimeInDays),
    RetentionLockType: __expectString(output.RetentionLockType),
    StorageClass: __expectString(output.StorageClass),
  } as any;
};

/**
 * deserializeAws_json1_1PoolInfos
 */
const de_PoolInfos = (output: any, context: __SerdeContext): PoolInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PoolInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RefreshCacheOutput
 */
const de_RefreshCacheOutput = (output: any, context: __SerdeContext): RefreshCacheOutput => {
  return {
    FileShareARN: __expectString(output.FileShareARN),
    NotificationId: __expectString(output.NotificationId),
  } as any;
};

/**
 * deserializeAws_json1_1RemoveTagsFromResourceOutput
 */
const de_RemoveTagsFromResourceOutput = (output: any, context: __SerdeContext): RemoveTagsFromResourceOutput => {
  return {
    ResourceARN: __expectString(output.ResourceARN),
  } as any;
};

/**
 * deserializeAws_json1_1ResetCacheOutput
 */
const de_ResetCacheOutput = (output: any, context: __SerdeContext): ResetCacheOutput => {
  return {
    GatewayARN: __expectString(output.GatewayARN),
  } as any;
};

/**
 * deserializeAws_json1_1RetrieveTapeArchiveOutput
 */
const de_RetrieveTapeArchiveOutput = (output: any, context: __SerdeContext): RetrieveTapeArchiveOutput => {
  return {
    TapeARN: __expectString(output.TapeARN),
  } as any;
};

/**
 * deserializeAws_json1_1RetrieveTapeRecoveryPointOutput
 */
const de_RetrieveTapeRecoveryPointOutput = (output: any, context: __SerdeContext): RetrieveTapeRecoveryPointOutput => {
  return {
    TapeARN: __expectString(output.TapeARN),
  } as any;
};

/**
 * deserializeAws_json1_1ServiceUnavailableError
 */
const de_ServiceUnavailableError = (output: any, context: __SerdeContext): ServiceUnavailableError => {
  return {
    error: output.error != null ? de_StorageGatewayError(output.error, context) : undefined,
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1SetLocalConsolePasswordOutput
 */
const de_SetLocalConsolePasswordOutput = (output: any, context: __SerdeContext): SetLocalConsolePasswordOutput => {
  return {
    GatewayARN: __expectString(output.GatewayARN),
  } as any;
};

/**
 * deserializeAws_json1_1SetSMBGuestPasswordOutput
 */
const de_SetSMBGuestPasswordOutput = (output: any, context: __SerdeContext): SetSMBGuestPasswordOutput => {
  return {
    GatewayARN: __expectString(output.GatewayARN),
  } as any;
};

/**
 * deserializeAws_json1_1ShutdownGatewayOutput
 */
const de_ShutdownGatewayOutput = (output: any, context: __SerdeContext): ShutdownGatewayOutput => {
  return {
    GatewayARN: __expectString(output.GatewayARN),
  } as any;
};

/**
 * deserializeAws_json1_1SMBFileShareInfo
 */
const de_SMBFileShareInfo = (output: any, context: __SerdeContext): SMBFileShareInfo => {
  return {
    AccessBasedEnumeration: __expectBoolean(output.AccessBasedEnumeration),
    AdminUserList: output.AdminUserList != null ? de_UserList(output.AdminUserList, context) : undefined,
    AuditDestinationARN: __expectString(output.AuditDestinationARN),
    Authentication: __expectString(output.Authentication),
    BucketRegion: __expectString(output.BucketRegion),
    CacheAttributes: output.CacheAttributes != null ? de_CacheAttributes(output.CacheAttributes, context) : undefined,
    CaseSensitivity: __expectString(output.CaseSensitivity),
    DefaultStorageClass: __expectString(output.DefaultStorageClass),
    FileShareARN: __expectString(output.FileShareARN),
    FileShareId: __expectString(output.FileShareId),
    FileShareName: __expectString(output.FileShareName),
    FileShareStatus: __expectString(output.FileShareStatus),
    GatewayARN: __expectString(output.GatewayARN),
    GuessMIMETypeEnabled: __expectBoolean(output.GuessMIMETypeEnabled),
    InvalidUserList: output.InvalidUserList != null ? de_UserList(output.InvalidUserList, context) : undefined,
    KMSEncrypted: __expectBoolean(output.KMSEncrypted),
    KMSKey: __expectString(output.KMSKey),
    LocationARN: __expectString(output.LocationARN),
    NotificationPolicy: __expectString(output.NotificationPolicy),
    ObjectACL: __expectString(output.ObjectACL),
    OplocksEnabled: __expectBoolean(output.OplocksEnabled),
    Path: __expectString(output.Path),
    ReadOnly: __expectBoolean(output.ReadOnly),
    RequesterPays: __expectBoolean(output.RequesterPays),
    Role: __expectString(output.Role),
    SMBACLEnabled: __expectBoolean(output.SMBACLEnabled),
    Tags: output.Tags != null ? de_Tags(output.Tags, context) : undefined,
    VPCEndpointDNSName: __expectString(output.VPCEndpointDNSName),
    ValidUserList: output.ValidUserList != null ? de_UserList(output.ValidUserList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SMBFileShareInfoList
 */
const de_SMBFileShareInfoList = (output: any, context: __SerdeContext): SMBFileShareInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SMBFileShareInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SMBLocalGroups
 */
const de_SMBLocalGroups = (output: any, context: __SerdeContext): SMBLocalGroups => {
  return {
    GatewayAdmins: output.GatewayAdmins != null ? de_UserList(output.GatewayAdmins, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1StartAvailabilityMonitorTestOutput
 */
const de_StartAvailabilityMonitorTestOutput = (
  output: any,
  context: __SerdeContext
): StartAvailabilityMonitorTestOutput => {
  return {
    GatewayARN: __expectString(output.GatewayARN),
  } as any;
};

/**
 * deserializeAws_json1_1StartGatewayOutput
 */
const de_StartGatewayOutput = (output: any, context: __SerdeContext): StartGatewayOutput => {
  return {
    GatewayARN: __expectString(output.GatewayARN),
  } as any;
};

/**
 * deserializeAws_json1_1StorageGatewayError
 */
const de_StorageGatewayError = (output: any, context: __SerdeContext): StorageGatewayError => {
  return {
    errorCode: __expectString(output.errorCode),
    errorDetails: output.errorDetails != null ? de_errorDetails(output.errorDetails, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1StorediSCSIVolume
 */
const de_StorediSCSIVolume = (output: any, context: __SerdeContext): StorediSCSIVolume => {
  return {
    CreatedDate:
      output.CreatedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedDate)))
        : undefined,
    KMSKey: __expectString(output.KMSKey),
    PreservedExistingData: __expectBoolean(output.PreservedExistingData),
    SourceSnapshotId: __expectString(output.SourceSnapshotId),
    TargetName: __expectString(output.TargetName),
    VolumeARN: __expectString(output.VolumeARN),
    VolumeAttachmentStatus: __expectString(output.VolumeAttachmentStatus),
    VolumeDiskId: __expectString(output.VolumeDiskId),
    VolumeId: __expectString(output.VolumeId),
    VolumeProgress: __limitedParseDouble(output.VolumeProgress),
    VolumeSizeInBytes: __expectLong(output.VolumeSizeInBytes),
    VolumeStatus: __expectString(output.VolumeStatus),
    VolumeType: __expectString(output.VolumeType),
    VolumeUsedInBytes: __expectLong(output.VolumeUsedInBytes),
    VolumeiSCSIAttributes:
      output.VolumeiSCSIAttributes != null
        ? de_VolumeiSCSIAttributes(output.VolumeiSCSIAttributes, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1StorediSCSIVolumes
 */
const de_StorediSCSIVolumes = (output: any, context: __SerdeContext): StorediSCSIVolume[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_StorediSCSIVolume(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SupportedGatewayCapacities
 */
const de_SupportedGatewayCapacities = (output: any, context: __SerdeContext): (GatewayCapacity | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1Tags
 */
const de_Tags = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Tape
 */
const de_Tape = (output: any, context: __SerdeContext): Tape => {
  return {
    KMSKey: __expectString(output.KMSKey),
    PoolEntryDate:
      output.PoolEntryDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.PoolEntryDate)))
        : undefined,
    PoolId: __expectString(output.PoolId),
    Progress: __limitedParseDouble(output.Progress),
    RetentionStartDate:
      output.RetentionStartDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.RetentionStartDate)))
        : undefined,
    TapeARN: __expectString(output.TapeARN),
    TapeBarcode: __expectString(output.TapeBarcode),
    TapeCreatedDate:
      output.TapeCreatedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.TapeCreatedDate)))
        : undefined,
    TapeSizeInBytes: __expectLong(output.TapeSizeInBytes),
    TapeStatus: __expectString(output.TapeStatus),
    TapeUsedInBytes: __expectLong(output.TapeUsedInBytes),
    VTLDevice: __expectString(output.VTLDevice),
    Worm: __expectBoolean(output.Worm),
  } as any;
};

/**
 * deserializeAws_json1_1TapeArchive
 */
const de_TapeArchive = (output: any, context: __SerdeContext): TapeArchive => {
  return {
    CompletionTime:
      output.CompletionTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CompletionTime)))
        : undefined,
    KMSKey: __expectString(output.KMSKey),
    PoolEntryDate:
      output.PoolEntryDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.PoolEntryDate)))
        : undefined,
    PoolId: __expectString(output.PoolId),
    RetentionStartDate:
      output.RetentionStartDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.RetentionStartDate)))
        : undefined,
    RetrievedTo: __expectString(output.RetrievedTo),
    TapeARN: __expectString(output.TapeARN),
    TapeBarcode: __expectString(output.TapeBarcode),
    TapeCreatedDate:
      output.TapeCreatedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.TapeCreatedDate)))
        : undefined,
    TapeSizeInBytes: __expectLong(output.TapeSizeInBytes),
    TapeStatus: __expectString(output.TapeStatus),
    TapeUsedInBytes: __expectLong(output.TapeUsedInBytes),
    Worm: __expectBoolean(output.Worm),
  } as any;
};

/**
 * deserializeAws_json1_1TapeArchives
 */
const de_TapeArchives = (output: any, context: __SerdeContext): TapeArchive[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TapeArchive(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TapeARNs
 */
const de_TapeARNs = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TapeInfo
 */
const de_TapeInfo = (output: any, context: __SerdeContext): TapeInfo => {
  return {
    GatewayARN: __expectString(output.GatewayARN),
    PoolEntryDate:
      output.PoolEntryDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.PoolEntryDate)))
        : undefined,
    PoolId: __expectString(output.PoolId),
    RetentionStartDate:
      output.RetentionStartDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.RetentionStartDate)))
        : undefined,
    TapeARN: __expectString(output.TapeARN),
    TapeBarcode: __expectString(output.TapeBarcode),
    TapeSizeInBytes: __expectLong(output.TapeSizeInBytes),
    TapeStatus: __expectString(output.TapeStatus),
  } as any;
};

/**
 * deserializeAws_json1_1TapeInfos
 */
const de_TapeInfos = (output: any, context: __SerdeContext): TapeInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TapeInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TapeRecoveryPointInfo
 */
const de_TapeRecoveryPointInfo = (output: any, context: __SerdeContext): TapeRecoveryPointInfo => {
  return {
    TapeARN: __expectString(output.TapeARN),
    TapeRecoveryPointTime:
      output.TapeRecoveryPointTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.TapeRecoveryPointTime)))
        : undefined,
    TapeSizeInBytes: __expectLong(output.TapeSizeInBytes),
    TapeStatus: __expectString(output.TapeStatus),
  } as any;
};

/**
 * deserializeAws_json1_1TapeRecoveryPointInfos
 */
const de_TapeRecoveryPointInfos = (output: any, context: __SerdeContext): TapeRecoveryPointInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TapeRecoveryPointInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Tapes
 */
const de_Tapes = (output: any, context: __SerdeContext): Tape[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tape(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1UpdateAutomaticTapeCreationPolicyOutput
 */
const de_UpdateAutomaticTapeCreationPolicyOutput = (
  output: any,
  context: __SerdeContext
): UpdateAutomaticTapeCreationPolicyOutput => {
  return {
    GatewayARN: __expectString(output.GatewayARN),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateBandwidthRateLimitOutput
 */
const de_UpdateBandwidthRateLimitOutput = (output: any, context: __SerdeContext): UpdateBandwidthRateLimitOutput => {
  return {
    GatewayARN: __expectString(output.GatewayARN),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateBandwidthRateLimitScheduleOutput
 */
const de_UpdateBandwidthRateLimitScheduleOutput = (
  output: any,
  context: __SerdeContext
): UpdateBandwidthRateLimitScheduleOutput => {
  return {
    GatewayARN: __expectString(output.GatewayARN),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateChapCredentialsOutput
 */
const de_UpdateChapCredentialsOutput = (output: any, context: __SerdeContext): UpdateChapCredentialsOutput => {
  return {
    InitiatorName: __expectString(output.InitiatorName),
    TargetARN: __expectString(output.TargetARN),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateFileSystemAssociationOutput
 */
const de_UpdateFileSystemAssociationOutput = (
  output: any,
  context: __SerdeContext
): UpdateFileSystemAssociationOutput => {
  return {
    FileSystemAssociationARN: __expectString(output.FileSystemAssociationARN),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateGatewayInformationOutput
 */
const de_UpdateGatewayInformationOutput = (output: any, context: __SerdeContext): UpdateGatewayInformationOutput => {
  return {
    GatewayARN: __expectString(output.GatewayARN),
    GatewayName: __expectString(output.GatewayName),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateGatewaySoftwareNowOutput
 */
const de_UpdateGatewaySoftwareNowOutput = (output: any, context: __SerdeContext): UpdateGatewaySoftwareNowOutput => {
  return {
    GatewayARN: __expectString(output.GatewayARN),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateMaintenanceStartTimeOutput
 */
const de_UpdateMaintenanceStartTimeOutput = (
  output: any,
  context: __SerdeContext
): UpdateMaintenanceStartTimeOutput => {
  return {
    GatewayARN: __expectString(output.GatewayARN),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateNFSFileShareOutput
 */
const de_UpdateNFSFileShareOutput = (output: any, context: __SerdeContext): UpdateNFSFileShareOutput => {
  return {
    FileShareARN: __expectString(output.FileShareARN),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateSMBFileShareOutput
 */
const de_UpdateSMBFileShareOutput = (output: any, context: __SerdeContext): UpdateSMBFileShareOutput => {
  return {
    FileShareARN: __expectString(output.FileShareARN),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateSMBFileShareVisibilityOutput
 */
const de_UpdateSMBFileShareVisibilityOutput = (
  output: any,
  context: __SerdeContext
): UpdateSMBFileShareVisibilityOutput => {
  return {
    GatewayARN: __expectString(output.GatewayARN),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateSMBLocalGroupsOutput
 */
const de_UpdateSMBLocalGroupsOutput = (output: any, context: __SerdeContext): UpdateSMBLocalGroupsOutput => {
  return {
    GatewayARN: __expectString(output.GatewayARN),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateSMBSecurityStrategyOutput
 */
const de_UpdateSMBSecurityStrategyOutput = (output: any, context: __SerdeContext): UpdateSMBSecurityStrategyOutput => {
  return {
    GatewayARN: __expectString(output.GatewayARN),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateSnapshotScheduleOutput
 */
const de_UpdateSnapshotScheduleOutput = (output: any, context: __SerdeContext): UpdateSnapshotScheduleOutput => {
  return {
    VolumeARN: __expectString(output.VolumeARN),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateVTLDeviceTypeOutput
 */
const de_UpdateVTLDeviceTypeOutput = (output: any, context: __SerdeContext): UpdateVTLDeviceTypeOutput => {
  return {
    VTLDeviceARN: __expectString(output.VTLDeviceARN),
  } as any;
};

/**
 * deserializeAws_json1_1UserList
 */
const de_UserList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1VolumeInfo
 */
const de_VolumeInfo = (output: any, context: __SerdeContext): VolumeInfo => {
  return {
    GatewayARN: __expectString(output.GatewayARN),
    GatewayId: __expectString(output.GatewayId),
    VolumeARN: __expectString(output.VolumeARN),
    VolumeAttachmentStatus: __expectString(output.VolumeAttachmentStatus),
    VolumeId: __expectString(output.VolumeId),
    VolumeSizeInBytes: __expectLong(output.VolumeSizeInBytes),
    VolumeType: __expectString(output.VolumeType),
  } as any;
};

/**
 * deserializeAws_json1_1VolumeInfos
 */
const de_VolumeInfos = (output: any, context: __SerdeContext): VolumeInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_VolumeInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1VolumeiSCSIAttributes
 */
const de_VolumeiSCSIAttributes = (output: any, context: __SerdeContext): VolumeiSCSIAttributes => {
  return {
    ChapEnabled: __expectBoolean(output.ChapEnabled),
    LunNumber: __expectInt32(output.LunNumber),
    NetworkInterfaceId: __expectString(output.NetworkInterfaceId),
    NetworkInterfacePort: __expectInt32(output.NetworkInterfacePort),
    TargetARN: __expectString(output.TargetARN),
  } as any;
};

/**
 * deserializeAws_json1_1VolumeRecoveryPointInfo
 */
const de_VolumeRecoveryPointInfo = (output: any, context: __SerdeContext): VolumeRecoveryPointInfo => {
  return {
    VolumeARN: __expectString(output.VolumeARN),
    VolumeRecoveryPointTime: __expectString(output.VolumeRecoveryPointTime),
    VolumeSizeInBytes: __expectLong(output.VolumeSizeInBytes),
    VolumeUsageInBytes: __expectLong(output.VolumeUsageInBytes),
  } as any;
};

/**
 * deserializeAws_json1_1VolumeRecoveryPointInfos
 */
const de_VolumeRecoveryPointInfos = (output: any, context: __SerdeContext): VolumeRecoveryPointInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_VolumeRecoveryPointInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1VTLDevice
 */
const de_VTLDevice = (output: any, context: __SerdeContext): VTLDevice => {
  return {
    DeviceiSCSIAttributes:
      output.DeviceiSCSIAttributes != null
        ? de_DeviceiSCSIAttributes(output.DeviceiSCSIAttributes, context)
        : undefined,
    VTLDeviceARN: __expectString(output.VTLDeviceARN),
    VTLDeviceProductIdentifier: __expectString(output.VTLDeviceProductIdentifier),
    VTLDeviceType: __expectString(output.VTLDeviceType),
    VTLDeviceVendor: __expectString(output.VTLDeviceVendor),
  } as any;
};

/**
 * deserializeAws_json1_1VTLDevices
 */
const de_VTLDevices = (output: any, context: __SerdeContext): VTLDevice[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_VTLDevice(entry, context);
    });
  return retVal;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers,
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `StorageGateway_20130630.${operation}`,
  };
}

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }
};
