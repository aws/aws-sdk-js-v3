// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  parseEpochTimestamp as __parseEpochTimestamp,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

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
import { CancelCacheReportCommandInput, CancelCacheReportCommandOutput } from "../commands/CancelCacheReportCommand";
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
import { DeleteCacheReportCommandInput, DeleteCacheReportCommandOutput } from "../commands/DeleteCacheReportCommand";
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
  DescribeCacheReportCommandInput,
  DescribeCacheReportCommandOutput,
} from "../commands/DescribeCacheReportCommand";
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
import { ListCacheReportsCommandInput, ListCacheReportsCommandOutput } from "../commands/ListCacheReportsCommand";
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
import { StartCacheReportCommandInput, StartCacheReportCommandOutput } from "../commands/StartCacheReportCommand";
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
  AddCacheInput,
  AddTagsToResourceInput,
  AddUploadBufferInput,
  AddWorkingStorageInput,
  AssignTapePoolInput,
  AssociateFileSystemInput,
  AttachVolumeInput,
  AutomaticTapeCreationRule,
  BandwidthRateLimitInterval,
  CacheAttributes,
  CachediSCSIVolume,
  CacheReportFilter,
  CacheReportInfo,
  CancelArchivalInput,
  CancelCacheReportInput,
  CancelRetrievalInput,
  CreateCachediSCSIVolumeInput,
  CreateNFSFileShareInput,
  CreateSMBFileShareInput,
  CreateSnapshotFromVolumeRecoveryPointInput,
  CreateSnapshotInput,
  CreateStorediSCSIVolumeInput,
  CreateTapePoolInput,
  CreateTapesInput,
  CreateTapeWithBarcodeInput,
  DeleteAutomaticTapeCreationPolicyInput,
  DeleteBandwidthRateLimitInput,
  DeleteCacheReportInput,
  DeleteChapCredentialsInput,
  DeleteFileShareInput,
  DeleteGatewayInput,
  DeleteSnapshotScheduleInput,
  DeleteTapeArchiveInput,
  DeleteTapeInput,
  DeleteTapePoolInput,
  DeleteVolumeInput,
  DescribeAvailabilityMonitorTestInput,
  DescribeAvailabilityMonitorTestOutput,
  DescribeBandwidthRateLimitInput,
  DescribeBandwidthRateLimitScheduleInput,
  DescribeCachediSCSIVolumesInput,
  DescribeCachediSCSIVolumesOutput,
  DescribeCacheInput,
  DescribeCacheOutput,
  DescribeCacheReportInput,
  DescribeCacheReportOutput,
  DescribeChapCredentialsInput,
  DescribeFileSystemAssociationsInput,
  DescribeGatewayInformationInput,
  DescribeMaintenanceStartTimeInput,
  DescribeNFSFileSharesInput,
  DescribeSMBFileSharesInput,
  DescribeSMBSettingsInput,
  DescribeSnapshotScheduleInput,
  DescribeStorediSCSIVolumesInput,
  DescribeStorediSCSIVolumesOutput,
  DescribeTapeArchivesInput,
  DescribeTapeArchivesOutput,
  DescribeTapeRecoveryPointsInput,
  DescribeTapeRecoveryPointsOutput,
  DescribeTapesInput,
  DescribeTapesOutput,
  DescribeUploadBufferInput,
  DescribeVTLDevicesInput,
  DescribeWorkingStorageInput,
  DetachVolumeInput,
  DisableGatewayInput,
  DisassociateFileSystemInput,
  EndpointNetworkConfiguration,
  InternalServerError,
  InvalidGatewayRequestException,
  JoinDomainInput,
  ListAutomaticTapeCreationPoliciesInput,
  ListCacheReportsInput,
  ListCacheReportsOutput,
  ListFileSharesInput,
  ListFileSystemAssociationsInput,
  ListGatewaysInput,
  ListLocalDisksInput,
  ListTagsForResourceInput,
  ListTapePoolsInput,
  ListTapesInput,
  ListTapesOutput,
  ListVolumeInitiatorsInput,
  ListVolumeRecoveryPointsInput,
  ListVolumesInput,
  NFSFileShareDefaults,
  NotifyWhenUploadedInput,
  RefreshCacheInput,
  RemoveTagsFromResourceInput,
  ResetCacheInput,
  RetrieveTapeArchiveInput,
  RetrieveTapeRecoveryPointInput,
  ServiceUnavailableError,
  SetLocalConsolePasswordInput,
  SetSMBGuestPasswordInput,
  ShutdownGatewayInput,
  SMBLocalGroups,
  SoftwareUpdatePreferences,
  StartAvailabilityMonitorTestInput,
  StartCacheReportInput,
  StartGatewayInput,
  StorediSCSIVolume,
  Tag,
  Tape,
  TapeArchive,
  TapeInfo,
  TapeRecoveryPointInfo,
  UpdateAutomaticTapeCreationPolicyInput,
  UpdateBandwidthRateLimitInput,
  UpdateBandwidthRateLimitScheduleInput,
  UpdateChapCredentialsInput,
  UpdateFileSystemAssociationInput,
  UpdateGatewayInformationInput,
  UpdateGatewaySoftwareNowInput,
  UpdateMaintenanceStartTimeInput,
  UpdateNFSFileShareInput,
  UpdateSMBFileShareInput,
  UpdateSMBFileShareVisibilityInput,
  UpdateSMBLocalGroupsInput,
  UpdateSMBSecurityStrategyInput,
  UpdateSnapshotScheduleInput,
  UpdateVTLDeviceTypeInput,
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CancelCacheReportCommand
 */
export const se_CancelCacheReportCommand = async (
  input: CancelCacheReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CancelCacheReport");
  let body: any;
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteCacheReportCommand
 */
export const se_DeleteCacheReportCommand = async (
  input: DeleteCacheReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteCacheReport");
  let body: any;
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeCacheReportCommand
 */
export const se_DescribeCacheReportCommand = async (
  input: DescribeCacheReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeCacheReport");
  let body: any;
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListCacheReportsCommand
 */
export const se_ListCacheReportsCommand = async (
  input: ListCacheReportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListCacheReports");
  let body: any;
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartCacheReportCommand
 */
export const se_StartCacheReportCommand = async (
  input: StartCacheReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartCacheReport");
  let body: any;
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ActivateGatewayCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AddCacheCommand
 */
export const de_AddCacheCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddCacheCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AddCacheCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AddTagsToResourceCommand
 */
export const de_AddTagsToResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AddTagsToResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AddUploadBufferCommand
 */
export const de_AddUploadBufferCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddUploadBufferCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AddUploadBufferCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AddWorkingStorageCommand
 */
export const de_AddWorkingStorageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddWorkingStorageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AddWorkingStorageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AssignTapePoolCommand
 */
export const de_AssignTapePoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssignTapePoolCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AssignTapePoolCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AssociateFileSystemCommand
 */
export const de_AssociateFileSystemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateFileSystemCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AssociateFileSystemCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AttachVolumeCommand
 */
export const de_AttachVolumeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachVolumeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AttachVolumeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CancelArchivalCommand
 */
export const de_CancelArchivalCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelArchivalCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CancelArchivalCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CancelCacheReportCommand
 */
export const de_CancelCacheReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelCacheReportCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CancelCacheReportCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CancelRetrievalCommand
 */
export const de_CancelRetrievalCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelRetrievalCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CancelRetrievalCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateCachediSCSIVolumeCommand
 */
export const de_CreateCachediSCSIVolumeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCachediSCSIVolumeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateCachediSCSIVolumeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateNFSFileShareCommand
 */
export const de_CreateNFSFileShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNFSFileShareCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateNFSFileShareCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateSMBFileShareCommand
 */
export const de_CreateSMBFileShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSMBFileShareCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateSMBFileShareCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateSnapshotCommand
 */
export const de_CreateSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointCommand
 */
export const de_CreateSnapshotFromVolumeRecoveryPointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSnapshotFromVolumeRecoveryPointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateSnapshotFromVolumeRecoveryPointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateStorediSCSIVolumeCommand
 */
export const de_CreateStorediSCSIVolumeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStorediSCSIVolumeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateStorediSCSIVolumeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateTapePoolCommand
 */
export const de_CreateTapePoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTapePoolCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateTapePoolCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateTapesCommand
 */
export const de_CreateTapesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTapesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateTapesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateTapeWithBarcodeCommand
 */
export const de_CreateTapeWithBarcodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTapeWithBarcodeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateTapeWithBarcodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteAutomaticTapeCreationPolicyCommand
 */
export const de_DeleteAutomaticTapeCreationPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAutomaticTapeCreationPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteAutomaticTapeCreationPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteBandwidthRateLimitCommand
 */
export const de_DeleteBandwidthRateLimitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBandwidthRateLimitCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteBandwidthRateLimitCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteCacheReportCommand
 */
export const de_DeleteCacheReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCacheReportCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteCacheReportCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteChapCredentialsCommand
 */
export const de_DeleteChapCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChapCredentialsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteChapCredentialsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteFileShareCommand
 */
export const de_DeleteFileShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFileShareCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteFileShareCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteGatewayCommand
 */
export const de_DeleteGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGatewayCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteGatewayCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteSnapshotScheduleCommand
 */
export const de_DeleteSnapshotScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSnapshotScheduleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteSnapshotScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteTapeCommand
 */
export const de_DeleteTapeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTapeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteTapeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteTapeArchiveCommand
 */
export const de_DeleteTapeArchiveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTapeArchiveCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteTapeArchiveCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteTapePoolCommand
 */
export const de_DeleteTapePoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTapePoolCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteTapePoolCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteVolumeCommand
 */
export const de_DeleteVolumeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVolumeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteVolumeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeAvailabilityMonitorTestCommand
 */
export const de_DescribeAvailabilityMonitorTestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAvailabilityMonitorTestCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAvailabilityMonitorTestOutput(data, context);
  const response: DescribeAvailabilityMonitorTestCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeBandwidthRateLimitCommand
 */
export const de_DescribeBandwidthRateLimitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBandwidthRateLimitCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeBandwidthRateLimitCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeBandwidthRateLimitScheduleCommand
 */
export const de_DescribeBandwidthRateLimitScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBandwidthRateLimitScheduleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeBandwidthRateLimitScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeCacheCommand
 */
export const de_DescribeCacheCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCacheCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeCacheOutput(data, context);
  const response: DescribeCacheCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeCachediSCSIVolumesCommand
 */
export const de_DescribeCachediSCSIVolumesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCachediSCSIVolumesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeCachediSCSIVolumesOutput(data, context);
  const response: DescribeCachediSCSIVolumesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeCacheReportCommand
 */
export const de_DescribeCacheReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCacheReportCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeCacheReportOutput(data, context);
  const response: DescribeCacheReportCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeChapCredentialsCommand
 */
export const de_DescribeChapCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChapCredentialsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeChapCredentialsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeFileSystemAssociationsCommand
 */
export const de_DescribeFileSystemAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFileSystemAssociationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeFileSystemAssociationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeGatewayInformationCommand
 */
export const de_DescribeGatewayInformationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGatewayInformationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeGatewayInformationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeMaintenanceStartTimeCommand
 */
export const de_DescribeMaintenanceStartTimeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMaintenanceStartTimeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeMaintenanceStartTimeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeNFSFileSharesCommand
 */
export const de_DescribeNFSFileSharesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNFSFileSharesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeNFSFileSharesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeSMBFileSharesCommand
 */
export const de_DescribeSMBFileSharesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSMBFileSharesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeSMBFileSharesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeSMBSettingsCommand
 */
export const de_DescribeSMBSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSMBSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeSMBSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeSnapshotScheduleCommand
 */
export const de_DescribeSnapshotScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSnapshotScheduleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeSnapshotScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeStorediSCSIVolumesCommand
 */
export const de_DescribeStorediSCSIVolumesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStorediSCSIVolumesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeStorediSCSIVolumesOutput(data, context);
  const response: DescribeStorediSCSIVolumesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeTapeArchivesCommand
 */
export const de_DescribeTapeArchivesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTapeArchivesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTapeArchivesOutput(data, context);
  const response: DescribeTapeArchivesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeTapeRecoveryPointsCommand
 */
export const de_DescribeTapeRecoveryPointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTapeRecoveryPointsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTapeRecoveryPointsOutput(data, context);
  const response: DescribeTapeRecoveryPointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeTapesCommand
 */
export const de_DescribeTapesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTapesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTapesOutput(data, context);
  const response: DescribeTapesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeUploadBufferCommand
 */
export const de_DescribeUploadBufferCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUploadBufferCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeUploadBufferCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeVTLDevicesCommand
 */
export const de_DescribeVTLDevicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVTLDevicesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeVTLDevicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeWorkingStorageCommand
 */
export const de_DescribeWorkingStorageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkingStorageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeWorkingStorageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DetachVolumeCommand
 */
export const de_DetachVolumeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachVolumeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DetachVolumeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DisableGatewayCommand
 */
export const de_DisableGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableGatewayCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DisableGatewayCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DisassociateFileSystemCommand
 */
export const de_DisassociateFileSystemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateFileSystemCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DisassociateFileSystemCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1JoinDomainCommand
 */
export const de_JoinDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JoinDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: JoinDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListAutomaticTapeCreationPoliciesCommand
 */
export const de_ListAutomaticTapeCreationPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAutomaticTapeCreationPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListAutomaticTapeCreationPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListCacheReportsCommand
 */
export const de_ListCacheReportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCacheReportsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListCacheReportsOutput(data, context);
  const response: ListCacheReportsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListFileSharesCommand
 */
export const de_ListFileSharesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFileSharesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListFileSharesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListFileSystemAssociationsCommand
 */
export const de_ListFileSystemAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFileSystemAssociationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListFileSystemAssociationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListGatewaysCommand
 */
export const de_ListGatewaysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGatewaysCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListGatewaysCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListLocalDisksCommand
 */
export const de_ListLocalDisksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLocalDisksCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListLocalDisksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListTapePoolsCommand
 */
export const de_ListTapePoolsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTapePoolsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListTapePoolsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListTapesCommand
 */
export const de_ListTapesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTapesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTapesOutput(data, context);
  const response: ListTapesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListVolumeInitiatorsCommand
 */
export const de_ListVolumeInitiatorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVolumeInitiatorsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListVolumeInitiatorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListVolumeRecoveryPointsCommand
 */
export const de_ListVolumeRecoveryPointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVolumeRecoveryPointsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListVolumeRecoveryPointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListVolumesCommand
 */
export const de_ListVolumesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVolumesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListVolumesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1NotifyWhenUploadedCommand
 */
export const de_NotifyWhenUploadedCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NotifyWhenUploadedCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: NotifyWhenUploadedCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1RefreshCacheCommand
 */
export const de_RefreshCacheCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RefreshCacheCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: RefreshCacheCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1RemoveTagsFromResourceCommand
 */
export const de_RemoveTagsFromResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: RemoveTagsFromResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ResetCacheCommand
 */
export const de_ResetCacheCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetCacheCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ResetCacheCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1RetrieveTapeArchiveCommand
 */
export const de_RetrieveTapeArchiveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetrieveTapeArchiveCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: RetrieveTapeArchiveCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1RetrieveTapeRecoveryPointCommand
 */
export const de_RetrieveTapeRecoveryPointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetrieveTapeRecoveryPointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: RetrieveTapeRecoveryPointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1SetLocalConsolePasswordCommand
 */
export const de_SetLocalConsolePasswordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetLocalConsolePasswordCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: SetLocalConsolePasswordCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1SetSMBGuestPasswordCommand
 */
export const de_SetSMBGuestPasswordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetSMBGuestPasswordCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: SetSMBGuestPasswordCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ShutdownGatewayCommand
 */
export const de_ShutdownGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ShutdownGatewayCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ShutdownGatewayCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartAvailabilityMonitorTestCommand
 */
export const de_StartAvailabilityMonitorTestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartAvailabilityMonitorTestCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartAvailabilityMonitorTestCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartCacheReportCommand
 */
export const de_StartCacheReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartCacheReportCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartCacheReportCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartGatewayCommand
 */
export const de_StartGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartGatewayCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartGatewayCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateAutomaticTapeCreationPolicyCommand
 */
export const de_UpdateAutomaticTapeCreationPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAutomaticTapeCreationPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateAutomaticTapeCreationPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateBandwidthRateLimitCommand
 */
export const de_UpdateBandwidthRateLimitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBandwidthRateLimitCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateBandwidthRateLimitCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateBandwidthRateLimitScheduleCommand
 */
export const de_UpdateBandwidthRateLimitScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBandwidthRateLimitScheduleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateBandwidthRateLimitScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateChapCredentialsCommand
 */
export const de_UpdateChapCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChapCredentialsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateChapCredentialsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateFileSystemAssociationCommand
 */
export const de_UpdateFileSystemAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFileSystemAssociationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateFileSystemAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateGatewayInformationCommand
 */
export const de_UpdateGatewayInformationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGatewayInformationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateGatewayInformationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateGatewaySoftwareNowCommand
 */
export const de_UpdateGatewaySoftwareNowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGatewaySoftwareNowCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateGatewaySoftwareNowCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateMaintenanceStartTimeCommand
 */
export const de_UpdateMaintenanceStartTimeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMaintenanceStartTimeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateMaintenanceStartTimeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateNFSFileShareCommand
 */
export const de_UpdateNFSFileShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNFSFileShareCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateNFSFileShareCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateSMBFileShareCommand
 */
export const de_UpdateSMBFileShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSMBFileShareCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateSMBFileShareCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateSMBFileShareVisibilityCommand
 */
export const de_UpdateSMBFileShareVisibilityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSMBFileShareVisibilityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateSMBFileShareVisibilityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateSMBLocalGroupsCommand
 */
export const de_UpdateSMBLocalGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSMBLocalGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateSMBLocalGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateSMBSecurityStrategyCommand
 */
export const de_UpdateSMBSecurityStrategyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSMBSecurityStrategyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateSMBSecurityStrategyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateSnapshotScheduleCommand
 */
export const de_UpdateSnapshotScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSnapshotScheduleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateSnapshotScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateVTLDeviceTypeCommand
 */
export const de_UpdateVTLDeviceTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVTLDeviceTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateVTLDeviceTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserialize_Aws_json1_1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

/**
 * deserializeAws_json1_1InternalServerErrorRes
 */
const de_InternalServerErrorRes = async (parsedOutput: any, context: __SerdeContext): Promise<InternalServerError> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
  const exception = new ServiceUnavailableError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_ActivateGatewayInput omitted.

// se_AddCacheInput omitted.

// se_AddTagsToResourceInput omitted.

// se_AddUploadBufferInput omitted.

// se_AddWorkingStorageInput omitted.

// se_AssignTapePoolInput omitted.

// se_AssociateFileSystemInput omitted.

// se_AttachVolumeInput omitted.

// se_AutomaticTapeCreationRule omitted.

// se_AutomaticTapeCreationRules omitted.

// se_BandwidthRateLimitInterval omitted.

// se_BandwidthRateLimitIntervals omitted.

// se_CacheAttributes omitted.

// se_CacheReportFilter omitted.

// se_CacheReportFilterList omitted.

// se_CacheReportFilterValues omitted.

// se_CancelArchivalInput omitted.

// se_CancelCacheReportInput omitted.

// se_CancelRetrievalInput omitted.

// se_CreateCachediSCSIVolumeInput omitted.

// se_CreateNFSFileShareInput omitted.

// se_CreateSMBFileShareInput omitted.

// se_CreateSnapshotFromVolumeRecoveryPointInput omitted.

// se_CreateSnapshotInput omitted.

// se_CreateStorediSCSIVolumeInput omitted.

// se_CreateTapePoolInput omitted.

// se_CreateTapesInput omitted.

// se_CreateTapeWithBarcodeInput omitted.

// se_DaysOfWeek omitted.

// se_DeleteAutomaticTapeCreationPolicyInput omitted.

// se_DeleteBandwidthRateLimitInput omitted.

// se_DeleteCacheReportInput omitted.

// se_DeleteChapCredentialsInput omitted.

// se_DeleteFileShareInput omitted.

// se_DeleteGatewayInput omitted.

// se_DeleteSnapshotScheduleInput omitted.

// se_DeleteTapeArchiveInput omitted.

// se_DeleteTapeInput omitted.

// se_DeleteTapePoolInput omitted.

// se_DeleteVolumeInput omitted.

// se_DescribeAvailabilityMonitorTestInput omitted.

// se_DescribeBandwidthRateLimitInput omitted.

// se_DescribeBandwidthRateLimitScheduleInput omitted.

// se_DescribeCachediSCSIVolumesInput omitted.

// se_DescribeCacheInput omitted.

// se_DescribeCacheReportInput omitted.

// se_DescribeChapCredentialsInput omitted.

// se_DescribeFileSystemAssociationsInput omitted.

// se_DescribeGatewayInformationInput omitted.

// se_DescribeMaintenanceStartTimeInput omitted.

// se_DescribeNFSFileSharesInput omitted.

// se_DescribeSMBFileSharesInput omitted.

// se_DescribeSMBSettingsInput omitted.

// se_DescribeSnapshotScheduleInput omitted.

// se_DescribeStorediSCSIVolumesInput omitted.

// se_DescribeTapeArchivesInput omitted.

// se_DescribeTapeRecoveryPointsInput omitted.

// se_DescribeTapesInput omitted.

// se_DescribeUploadBufferInput omitted.

// se_DescribeVTLDevicesInput omitted.

// se_DescribeWorkingStorageInput omitted.

// se_DetachVolumeInput omitted.

// se_DisableGatewayInput omitted.

// se_DisassociateFileSystemInput omitted.

// se_DiskIds omitted.

// se_EndpointNetworkConfiguration omitted.

// se_FileShareARNList omitted.

// se_FileShareClientList omitted.

// se_FileSystemAssociationARNList omitted.

// se_FolderList omitted.

// se_Hosts omitted.

// se_IpAddressList omitted.

// se_JoinDomainInput omitted.

// se_ListAutomaticTapeCreationPoliciesInput omitted.

// se_ListCacheReportsInput omitted.

// se_ListFileSharesInput omitted.

// se_ListFileSystemAssociationsInput omitted.

// se_ListGatewaysInput omitted.

// se_ListLocalDisksInput omitted.

// se_ListTagsForResourceInput omitted.

// se_ListTapePoolsInput omitted.

// se_ListTapesInput omitted.

// se_ListVolumeInitiatorsInput omitted.

// se_ListVolumeRecoveryPointsInput omitted.

// se_ListVolumesInput omitted.

// se_NFSFileShareDefaults omitted.

// se_NotifyWhenUploadedInput omitted.

// se_PoolARNs omitted.

// se_RefreshCacheInput omitted.

// se_RemoveTagsFromResourceInput omitted.

// se_ResetCacheInput omitted.

// se_RetrieveTapeArchiveInput omitted.

// se_RetrieveTapeRecoveryPointInput omitted.

// se_SetLocalConsolePasswordInput omitted.

// se_SetSMBGuestPasswordInput omitted.

// se_ShutdownGatewayInput omitted.

// se_SMBLocalGroups omitted.

// se_SoftwareUpdatePreferences omitted.

// se_StartAvailabilityMonitorTestInput omitted.

// se_StartCacheReportInput omitted.

// se_StartGatewayInput omitted.

// se_Tag omitted.

// se_TagKeys omitted.

// se_Tags omitted.

// se_TapeARNs omitted.

// se_UpdateAutomaticTapeCreationPolicyInput omitted.

// se_UpdateBandwidthRateLimitInput omitted.

// se_UpdateBandwidthRateLimitScheduleInput omitted.

// se_UpdateChapCredentialsInput omitted.

// se_UpdateFileSystemAssociationInput omitted.

// se_UpdateGatewayInformationInput omitted.

// se_UpdateGatewaySoftwareNowInput omitted.

// se_UpdateMaintenanceStartTimeInput omitted.

// se_UpdateNFSFileShareInput omitted.

// se_UpdateSMBFileShareInput omitted.

// se_UpdateSMBFileShareVisibilityInput omitted.

// se_UpdateSMBLocalGroupsInput omitted.

// se_UpdateSMBSecurityStrategyInput omitted.

// se_UpdateSnapshotScheduleInput omitted.

// se_UpdateVTLDeviceTypeInput omitted.

// se_UserList omitted.

// se_VolumeARNs omitted.

// se_VTLDeviceARNs omitted.

// de_ActivateGatewayOutput omitted.

// de_AddCacheOutput omitted.

// de_AddTagsToResourceOutput omitted.

// de_AddUploadBufferOutput omitted.

// de_AddWorkingStorageOutput omitted.

// de_AssignTapePoolOutput omitted.

// de_AssociateFileSystemOutput omitted.

// de_AttachVolumeOutput omitted.

// de_AutomaticTapeCreationPolicyInfo omitted.

// de_AutomaticTapeCreationPolicyInfos omitted.

// de_AutomaticTapeCreationRule omitted.

// de_AutomaticTapeCreationRules omitted.

// de_BandwidthRateLimitInterval omitted.

// de_BandwidthRateLimitIntervals omitted.

// de_CacheAttributes omitted.

/**
 * deserializeAws_json1_1CachediSCSIVolume
 */
const de_CachediSCSIVolume = (output: any, context: __SerdeContext): CachediSCSIVolume => {
  return take(output, {
    CreatedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    KMSKey: __expectString,
    SourceSnapshotId: __expectString,
    TargetName: __expectString,
    VolumeARN: __expectString,
    VolumeAttachmentStatus: __expectString,
    VolumeId: __expectString,
    VolumeProgress: __limitedParseDouble,
    VolumeSizeInBytes: __expectLong,
    VolumeStatus: __expectString,
    VolumeType: __expectString,
    VolumeUsedInBytes: __expectLong,
    VolumeiSCSIAttributes: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1CachediSCSIVolumes
 */
const de_CachediSCSIVolumes = (output: any, context: __SerdeContext): CachediSCSIVolume[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CachediSCSIVolume(entry, context);
    });
  return retVal;
};

// de_CacheReportFilter omitted.

// de_CacheReportFilterList omitted.

// de_CacheReportFilterValues omitted.

/**
 * deserializeAws_json1_1CacheReportInfo
 */
const de_CacheReportInfo = (output: any, context: __SerdeContext): CacheReportInfo => {
  return take(output, {
    CacheReportARN: __expectString,
    CacheReportStatus: __expectString,
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ExclusionFilters: _json,
    FileShareARN: __expectString,
    InclusionFilters: _json,
    LocationARN: __expectString,
    ReportCompletionPercent: __expectInt32,
    ReportName: __expectString,
    Role: __expectString,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Tags: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1CacheReportList
 */
const de_CacheReportList = (output: any, context: __SerdeContext): CacheReportInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CacheReportInfo(entry, context);
    });
  return retVal;
};

// de_CancelArchivalOutput omitted.

// de_CancelCacheReportOutput omitted.

// de_CancelRetrievalOutput omitted.

// de_ChapCredentials omitted.

// de_ChapInfo omitted.

// de_CreateCachediSCSIVolumeOutput omitted.

// de_CreateNFSFileShareOutput omitted.

// de_CreateSMBFileShareOutput omitted.

// de_CreateSnapshotFromVolumeRecoveryPointOutput omitted.

// de_CreateSnapshotOutput omitted.

// de_CreateStorediSCSIVolumeOutput omitted.

// de_CreateTapePoolOutput omitted.

// de_CreateTapesOutput omitted.

// de_CreateTapeWithBarcodeOutput omitted.

// de_DaysOfWeek omitted.

// de_DeleteAutomaticTapeCreationPolicyOutput omitted.

// de_DeleteBandwidthRateLimitOutput omitted.

// de_DeleteCacheReportOutput omitted.

// de_DeleteChapCredentialsOutput omitted.

// de_DeleteFileShareOutput omitted.

// de_DeleteGatewayOutput omitted.

// de_DeleteSnapshotScheduleOutput omitted.

// de_DeleteTapeArchiveOutput omitted.

// de_DeleteTapeOutput omitted.

// de_DeleteTapePoolOutput omitted.

// de_DeleteVolumeOutput omitted.

/**
 * deserializeAws_json1_1DescribeAvailabilityMonitorTestOutput
 */
const de_DescribeAvailabilityMonitorTestOutput = (
  output: any,
  context: __SerdeContext
): DescribeAvailabilityMonitorTestOutput => {
  return take(output, {
    GatewayARN: __expectString,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
  }) as any;
};

// de_DescribeBandwidthRateLimitOutput omitted.

// de_DescribeBandwidthRateLimitScheduleOutput omitted.

/**
 * deserializeAws_json1_1DescribeCachediSCSIVolumesOutput
 */
const de_DescribeCachediSCSIVolumesOutput = (
  output: any,
  context: __SerdeContext
): DescribeCachediSCSIVolumesOutput => {
  return take(output, {
    CachediSCSIVolumes: (_: any) => de_CachediSCSIVolumes(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeCacheOutput
 */
const de_DescribeCacheOutput = (output: any, context: __SerdeContext): DescribeCacheOutput => {
  return take(output, {
    CacheAllocatedInBytes: __expectLong,
    CacheDirtyPercentage: __limitedParseDouble,
    CacheHitPercentage: __limitedParseDouble,
    CacheMissPercentage: __limitedParseDouble,
    CacheUsedPercentage: __limitedParseDouble,
    DiskIds: _json,
    GatewayARN: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeCacheReportOutput
 */
const de_DescribeCacheReportOutput = (output: any, context: __SerdeContext): DescribeCacheReportOutput => {
  return take(output, {
    CacheReportInfo: (_: any) => de_CacheReportInfo(_, context),
  }) as any;
};

// de_DescribeChapCredentialsOutput omitted.

// de_DescribeFileSystemAssociationsOutput omitted.

// de_DescribeGatewayInformationOutput omitted.

// de_DescribeMaintenanceStartTimeOutput omitted.

// de_DescribeNFSFileSharesOutput omitted.

// de_DescribeSMBFileSharesOutput omitted.

// de_DescribeSMBSettingsOutput omitted.

// de_DescribeSnapshotScheduleOutput omitted.

/**
 * deserializeAws_json1_1DescribeStorediSCSIVolumesOutput
 */
const de_DescribeStorediSCSIVolumesOutput = (
  output: any,
  context: __SerdeContext
): DescribeStorediSCSIVolumesOutput => {
  return take(output, {
    StorediSCSIVolumes: (_: any) => de_StorediSCSIVolumes(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeTapeArchivesOutput
 */
const de_DescribeTapeArchivesOutput = (output: any, context: __SerdeContext): DescribeTapeArchivesOutput => {
  return take(output, {
    Marker: __expectString,
    TapeArchives: (_: any) => de_TapeArchives(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeTapeRecoveryPointsOutput
 */
const de_DescribeTapeRecoveryPointsOutput = (
  output: any,
  context: __SerdeContext
): DescribeTapeRecoveryPointsOutput => {
  return take(output, {
    GatewayARN: __expectString,
    Marker: __expectString,
    TapeRecoveryPointInfos: (_: any) => de_TapeRecoveryPointInfos(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeTapesOutput
 */
const de_DescribeTapesOutput = (output: any, context: __SerdeContext): DescribeTapesOutput => {
  return take(output, {
    Marker: __expectString,
    Tapes: (_: any) => de_Tapes(_, context),
  }) as any;
};

// de_DescribeUploadBufferOutput omitted.

// de_DescribeVTLDevicesOutput omitted.

// de_DescribeWorkingStorageOutput omitted.

// de_DetachVolumeOutput omitted.

// de_DeviceiSCSIAttributes omitted.

// de_DisableGatewayOutput omitted.

// de_DisassociateFileSystemOutput omitted.

// de_Disk omitted.

// de_DiskAttributeList omitted.

// de_DiskIds omitted.

// de_Disks omitted.

// de_EndpointNetworkConfiguration omitted.

// de_errorDetails omitted.

// de_FileShareClientList omitted.

// de_FileShareInfo omitted.

// de_FileShareInfoList omitted.

// de_FileSystemAssociationInfo omitted.

// de_FileSystemAssociationInfoList omitted.

// de_FileSystemAssociationStatusDetail omitted.

// de_FileSystemAssociationStatusDetails omitted.

// de_FileSystemAssociationSummary omitted.

// de_FileSystemAssociationSummaryList omitted.

// de_GatewayInfo omitted.

// de_GatewayNetworkInterfaces omitted.

// de_Gateways omitted.

// de_Initiators omitted.

// de_InternalServerError omitted.

// de_InvalidGatewayRequestException omitted.

// de_IpAddressList omitted.

// de_JoinDomainOutput omitted.

// de_ListAutomaticTapeCreationPoliciesOutput omitted.

/**
 * deserializeAws_json1_1ListCacheReportsOutput
 */
const de_ListCacheReportsOutput = (output: any, context: __SerdeContext): ListCacheReportsOutput => {
  return take(output, {
    CacheReportList: (_: any) => de_CacheReportList(_, context),
    Marker: __expectString,
  }) as any;
};

// de_ListFileSharesOutput omitted.

// de_ListFileSystemAssociationsOutput omitted.

// de_ListGatewaysOutput omitted.

// de_ListLocalDisksOutput omitted.

// de_ListTagsForResourceOutput omitted.

// de_ListTapePoolsOutput omitted.

/**
 * deserializeAws_json1_1ListTapesOutput
 */
const de_ListTapesOutput = (output: any, context: __SerdeContext): ListTapesOutput => {
  return take(output, {
    Marker: __expectString,
    TapeInfos: (_: any) => de_TapeInfos(_, context),
  }) as any;
};

// de_ListVolumeInitiatorsOutput omitted.

// de_ListVolumeRecoveryPointsOutput omitted.

// de_ListVolumesOutput omitted.

// de_NetworkInterface omitted.

// de_NFSFileShareDefaults omitted.

// de_NFSFileShareInfo omitted.

// de_NFSFileShareInfoList omitted.

// de_NotifyWhenUploadedOutput omitted.

// de_PoolInfo omitted.

// de_PoolInfos omitted.

// de_RefreshCacheOutput omitted.

// de_RemoveTagsFromResourceOutput omitted.

// de_ResetCacheOutput omitted.

// de_RetrieveTapeArchiveOutput omitted.

// de_RetrieveTapeRecoveryPointOutput omitted.

// de_ServiceUnavailableError omitted.

// de_SetLocalConsolePasswordOutput omitted.

// de_SetSMBGuestPasswordOutput omitted.

// de_ShutdownGatewayOutput omitted.

// de_SMBFileShareInfo omitted.

// de_SMBFileShareInfoList omitted.

// de_SMBLocalGroups omitted.

// de_SoftwareUpdatePreferences omitted.

// de_StartAvailabilityMonitorTestOutput omitted.

// de_StartCacheReportOutput omitted.

// de_StartGatewayOutput omitted.

// de_StorageGatewayError omitted.

/**
 * deserializeAws_json1_1StorediSCSIVolume
 */
const de_StorediSCSIVolume = (output: any, context: __SerdeContext): StorediSCSIVolume => {
  return take(output, {
    CreatedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    KMSKey: __expectString,
    PreservedExistingData: __expectBoolean,
    SourceSnapshotId: __expectString,
    TargetName: __expectString,
    VolumeARN: __expectString,
    VolumeAttachmentStatus: __expectString,
    VolumeDiskId: __expectString,
    VolumeId: __expectString,
    VolumeProgress: __limitedParseDouble,
    VolumeSizeInBytes: __expectLong,
    VolumeStatus: __expectString,
    VolumeType: __expectString,
    VolumeUsedInBytes: __expectLong,
    VolumeiSCSIAttributes: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1StorediSCSIVolumes
 */
const de_StorediSCSIVolumes = (output: any, context: __SerdeContext): StorediSCSIVolume[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_StorediSCSIVolume(entry, context);
    });
  return retVal;
};

// de_SupportedGatewayCapacities omitted.

// de_Tag omitted.

// de_Tags omitted.

/**
 * deserializeAws_json1_1Tape
 */
const de_Tape = (output: any, context: __SerdeContext): Tape => {
  return take(output, {
    KMSKey: __expectString,
    PoolEntryDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    PoolId: __expectString,
    Progress: __limitedParseDouble,
    RetentionStartDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TapeARN: __expectString,
    TapeBarcode: __expectString,
    TapeCreatedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TapeSizeInBytes: __expectLong,
    TapeStatus: __expectString,
    TapeUsedInBytes: __expectLong,
    VTLDevice: __expectString,
    Worm: __expectBoolean,
  }) as any;
};

/**
 * deserializeAws_json1_1TapeArchive
 */
const de_TapeArchive = (output: any, context: __SerdeContext): TapeArchive => {
  return take(output, {
    CompletionTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    KMSKey: __expectString,
    PoolEntryDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    PoolId: __expectString,
    RetentionStartDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RetrievedTo: __expectString,
    TapeARN: __expectString,
    TapeBarcode: __expectString,
    TapeCreatedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TapeSizeInBytes: __expectLong,
    TapeStatus: __expectString,
    TapeUsedInBytes: __expectLong,
    Worm: __expectBoolean,
  }) as any;
};

/**
 * deserializeAws_json1_1TapeArchives
 */
const de_TapeArchives = (output: any, context: __SerdeContext): TapeArchive[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TapeArchive(entry, context);
    });
  return retVal;
};

// de_TapeARNs omitted.

/**
 * deserializeAws_json1_1TapeInfo
 */
const de_TapeInfo = (output: any, context: __SerdeContext): TapeInfo => {
  return take(output, {
    GatewayARN: __expectString,
    PoolEntryDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    PoolId: __expectString,
    RetentionStartDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TapeARN: __expectString,
    TapeBarcode: __expectString,
    TapeSizeInBytes: __expectLong,
    TapeStatus: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1TapeInfos
 */
const de_TapeInfos = (output: any, context: __SerdeContext): TapeInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TapeInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TapeRecoveryPointInfo
 */
const de_TapeRecoveryPointInfo = (output: any, context: __SerdeContext): TapeRecoveryPointInfo => {
  return take(output, {
    TapeARN: __expectString,
    TapeRecoveryPointTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TapeSizeInBytes: __expectLong,
    TapeStatus: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1TapeRecoveryPointInfos
 */
const de_TapeRecoveryPointInfos = (output: any, context: __SerdeContext): TapeRecoveryPointInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
      return de_Tape(entry, context);
    });
  return retVal;
};

// de_UpdateAutomaticTapeCreationPolicyOutput omitted.

// de_UpdateBandwidthRateLimitOutput omitted.

// de_UpdateBandwidthRateLimitScheduleOutput omitted.

// de_UpdateChapCredentialsOutput omitted.

// de_UpdateFileSystemAssociationOutput omitted.

// de_UpdateGatewayInformationOutput omitted.

// de_UpdateGatewaySoftwareNowOutput omitted.

// de_UpdateMaintenanceStartTimeOutput omitted.

// de_UpdateNFSFileShareOutput omitted.

// de_UpdateSMBFileShareOutput omitted.

// de_UpdateSMBFileShareVisibilityOutput omitted.

// de_UpdateSMBLocalGroupsOutput omitted.

// de_UpdateSMBSecurityStrategyOutput omitted.

// de_UpdateSnapshotScheduleOutput omitted.

// de_UpdateVTLDeviceTypeOutput omitted.

// de_UserList omitted.

// de_VolumeInfo omitted.

// de_VolumeInfos omitted.

// de_VolumeiSCSIAttributes omitted.

// de_VolumeRecoveryPointInfo omitted.

// de_VolumeRecoveryPointInfos omitted.

// de_VTLDevice omitted.

// de_VTLDevices omitted.

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const throwDefaultError = withBaseException(__BaseException);
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
