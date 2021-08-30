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
import {
  CreateTapeWithBarcodeCommandInput,
  CreateTapeWithBarcodeCommandOutput,
} from "../commands/CreateTapeWithBarcodeCommand";
import { CreateTapesCommandInput, CreateTapesCommandOutput } from "../commands/CreateTapesCommand";
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
  CreateTapeWithBarcodeInput,
  CreateTapeWithBarcodeOutput,
  CreateTapesInput,
  CreateTapesOutput,
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
  DescribeCacheInput,
  DescribeCacheOutput,
  DescribeCachediSCSIVolumesInput,
  DescribeCachediSCSIVolumesOutput,
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
  NFSFileShareDefaults,
  NFSFileShareInfo,
  NetworkInterface,
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
  SMBFileShareInfo,
  ServiceUnavailableError,
  SetLocalConsolePasswordInput,
  SetLocalConsolePasswordOutput,
  SetSMBGuestPasswordInput,
  SetSMBGuestPasswordOutput,
  ShutdownGatewayInput,
  ShutdownGatewayOutput,
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
  UpdateSMBSecurityStrategyInput,
  UpdateSMBSecurityStrategyOutput,
  UpdateSnapshotScheduleInput,
  UpdateSnapshotScheduleOutput,
  UpdateVTLDeviceTypeInput,
  UpdateVTLDeviceTypeOutput,
  VTLDevice,
  VolumeInfo,
  VolumeRecoveryPointInfo,
  VolumeiSCSIAttributes,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";

export const serializeAws_json1_1ActivateGatewayCommand = async (
  input: ActivateGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.ActivateGateway",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ActivateGatewayInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AddCacheCommand = async (
  input: AddCacheCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.AddCache",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AddCacheInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AddTagsToResourceCommand = async (
  input: AddTagsToResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.AddTagsToResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AddTagsToResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AddUploadBufferCommand = async (
  input: AddUploadBufferCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.AddUploadBuffer",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AddUploadBufferInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AddWorkingStorageCommand = async (
  input: AddWorkingStorageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.AddWorkingStorage",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AddWorkingStorageInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AssignTapePoolCommand = async (
  input: AssignTapePoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.AssignTapePool",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AssignTapePoolInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AssociateFileSystemCommand = async (
  input: AssociateFileSystemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.AssociateFileSystem",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AssociateFileSystemInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AttachVolumeCommand = async (
  input: AttachVolumeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.AttachVolume",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AttachVolumeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CancelArchivalCommand = async (
  input: CancelArchivalCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.CancelArchival",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CancelArchivalInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CancelRetrievalCommand = async (
  input: CancelRetrievalCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.CancelRetrieval",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CancelRetrievalInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateCachediSCSIVolumeCommand = async (
  input: CreateCachediSCSIVolumeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.CreateCachediSCSIVolume",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateCachediSCSIVolumeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateNFSFileShareCommand = async (
  input: CreateNFSFileShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.CreateNFSFileShare",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateNFSFileShareInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateSMBFileShareCommand = async (
  input: CreateSMBFileShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.CreateSMBFileShare",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateSMBFileShareInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateSnapshotCommand = async (
  input: CreateSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.CreateSnapshot",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateSnapshotInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointCommand = async (
  input: CreateSnapshotFromVolumeRecoveryPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.CreateSnapshotFromVolumeRecoveryPoint",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateStorediSCSIVolumeCommand = async (
  input: CreateStorediSCSIVolumeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.CreateStorediSCSIVolume",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateStorediSCSIVolumeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateTapePoolCommand = async (
  input: CreateTapePoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.CreateTapePool",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateTapePoolInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateTapesCommand = async (
  input: CreateTapesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.CreateTapes",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateTapesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateTapeWithBarcodeCommand = async (
  input: CreateTapeWithBarcodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.CreateTapeWithBarcode",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateTapeWithBarcodeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteAutomaticTapeCreationPolicyCommand = async (
  input: DeleteAutomaticTapeCreationPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.DeleteAutomaticTapeCreationPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteAutomaticTapeCreationPolicyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteBandwidthRateLimitCommand = async (
  input: DeleteBandwidthRateLimitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.DeleteBandwidthRateLimit",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteBandwidthRateLimitInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteChapCredentialsCommand = async (
  input: DeleteChapCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.DeleteChapCredentials",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteChapCredentialsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteFileShareCommand = async (
  input: DeleteFileShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.DeleteFileShare",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteFileShareInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteGatewayCommand = async (
  input: DeleteGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.DeleteGateway",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteGatewayInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteSnapshotScheduleCommand = async (
  input: DeleteSnapshotScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.DeleteSnapshotSchedule",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteSnapshotScheduleInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteTapeCommand = async (
  input: DeleteTapeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.DeleteTape",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteTapeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteTapeArchiveCommand = async (
  input: DeleteTapeArchiveCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.DeleteTapeArchive",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteTapeArchiveInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteTapePoolCommand = async (
  input: DeleteTapePoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.DeleteTapePool",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteTapePoolInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteVolumeCommand = async (
  input: DeleteVolumeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.DeleteVolume",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteVolumeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeAvailabilityMonitorTestCommand = async (
  input: DescribeAvailabilityMonitorTestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.DescribeAvailabilityMonitorTest",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeAvailabilityMonitorTestInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeBandwidthRateLimitCommand = async (
  input: DescribeBandwidthRateLimitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.DescribeBandwidthRateLimit",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeBandwidthRateLimitInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeBandwidthRateLimitScheduleCommand = async (
  input: DescribeBandwidthRateLimitScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.DescribeBandwidthRateLimitSchedule",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeBandwidthRateLimitScheduleInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeCacheCommand = async (
  input: DescribeCacheCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.DescribeCache",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeCacheInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeCachediSCSIVolumesCommand = async (
  input: DescribeCachediSCSIVolumesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.DescribeCachediSCSIVolumes",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeCachediSCSIVolumesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeChapCredentialsCommand = async (
  input: DescribeChapCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.DescribeChapCredentials",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeChapCredentialsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeFileSystemAssociationsCommand = async (
  input: DescribeFileSystemAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.DescribeFileSystemAssociations",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeFileSystemAssociationsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeGatewayInformationCommand = async (
  input: DescribeGatewayInformationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.DescribeGatewayInformation",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeGatewayInformationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeMaintenanceStartTimeCommand = async (
  input: DescribeMaintenanceStartTimeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.DescribeMaintenanceStartTime",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeMaintenanceStartTimeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeNFSFileSharesCommand = async (
  input: DescribeNFSFileSharesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.DescribeNFSFileShares",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeNFSFileSharesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeSMBFileSharesCommand = async (
  input: DescribeSMBFileSharesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.DescribeSMBFileShares",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeSMBFileSharesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeSMBSettingsCommand = async (
  input: DescribeSMBSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.DescribeSMBSettings",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeSMBSettingsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeSnapshotScheduleCommand = async (
  input: DescribeSnapshotScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.DescribeSnapshotSchedule",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeSnapshotScheduleInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeStorediSCSIVolumesCommand = async (
  input: DescribeStorediSCSIVolumesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.DescribeStorediSCSIVolumes",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeStorediSCSIVolumesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeTapeArchivesCommand = async (
  input: DescribeTapeArchivesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.DescribeTapeArchives",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeTapeArchivesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeTapeRecoveryPointsCommand = async (
  input: DescribeTapeRecoveryPointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.DescribeTapeRecoveryPoints",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeTapeRecoveryPointsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeTapesCommand = async (
  input: DescribeTapesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.DescribeTapes",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeTapesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeUploadBufferCommand = async (
  input: DescribeUploadBufferCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.DescribeUploadBuffer",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeUploadBufferInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeVTLDevicesCommand = async (
  input: DescribeVTLDevicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.DescribeVTLDevices",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeVTLDevicesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeWorkingStorageCommand = async (
  input: DescribeWorkingStorageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.DescribeWorkingStorage",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeWorkingStorageInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DetachVolumeCommand = async (
  input: DetachVolumeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.DetachVolume",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DetachVolumeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisableGatewayCommand = async (
  input: DisableGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.DisableGateway",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisableGatewayInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisassociateFileSystemCommand = async (
  input: DisassociateFileSystemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.DisassociateFileSystem",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisassociateFileSystemInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1JoinDomainCommand = async (
  input: JoinDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.JoinDomain",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1JoinDomainInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListAutomaticTapeCreationPoliciesCommand = async (
  input: ListAutomaticTapeCreationPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.ListAutomaticTapeCreationPolicies",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListAutomaticTapeCreationPoliciesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListFileSharesCommand = async (
  input: ListFileSharesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.ListFileShares",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListFileSharesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListFileSystemAssociationsCommand = async (
  input: ListFileSystemAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.ListFileSystemAssociations",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListFileSystemAssociationsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListGatewaysCommand = async (
  input: ListGatewaysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.ListGateways",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListGatewaysInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListLocalDisksCommand = async (
  input: ListLocalDisksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.ListLocalDisks",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListLocalDisksInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsForResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTapePoolsCommand = async (
  input: ListTapePoolsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.ListTapePools",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTapePoolsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTapesCommand = async (
  input: ListTapesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.ListTapes",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTapesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListVolumeInitiatorsCommand = async (
  input: ListVolumeInitiatorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.ListVolumeInitiators",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListVolumeInitiatorsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListVolumeRecoveryPointsCommand = async (
  input: ListVolumeRecoveryPointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.ListVolumeRecoveryPoints",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListVolumeRecoveryPointsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListVolumesCommand = async (
  input: ListVolumesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.ListVolumes",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListVolumesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1NotifyWhenUploadedCommand = async (
  input: NotifyWhenUploadedCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.NotifyWhenUploaded",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1NotifyWhenUploadedInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RefreshCacheCommand = async (
  input: RefreshCacheCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.RefreshCache",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RefreshCacheInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RemoveTagsFromResourceCommand = async (
  input: RemoveTagsFromResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.RemoveTagsFromResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RemoveTagsFromResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ResetCacheCommand = async (
  input: ResetCacheCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.ResetCache",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ResetCacheInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RetrieveTapeArchiveCommand = async (
  input: RetrieveTapeArchiveCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.RetrieveTapeArchive",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RetrieveTapeArchiveInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RetrieveTapeRecoveryPointCommand = async (
  input: RetrieveTapeRecoveryPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.RetrieveTapeRecoveryPoint",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RetrieveTapeRecoveryPointInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SetLocalConsolePasswordCommand = async (
  input: SetLocalConsolePasswordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.SetLocalConsolePassword",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SetLocalConsolePasswordInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SetSMBGuestPasswordCommand = async (
  input: SetSMBGuestPasswordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.SetSMBGuestPassword",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SetSMBGuestPasswordInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ShutdownGatewayCommand = async (
  input: ShutdownGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.ShutdownGateway",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ShutdownGatewayInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartAvailabilityMonitorTestCommand = async (
  input: StartAvailabilityMonitorTestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.StartAvailabilityMonitorTest",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartAvailabilityMonitorTestInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartGatewayCommand = async (
  input: StartGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.StartGateway",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartGatewayInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateAutomaticTapeCreationPolicyCommand = async (
  input: UpdateAutomaticTapeCreationPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.UpdateAutomaticTapeCreationPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateAutomaticTapeCreationPolicyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateBandwidthRateLimitCommand = async (
  input: UpdateBandwidthRateLimitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.UpdateBandwidthRateLimit",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateBandwidthRateLimitInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateBandwidthRateLimitScheduleCommand = async (
  input: UpdateBandwidthRateLimitScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.UpdateBandwidthRateLimitSchedule",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateBandwidthRateLimitScheduleInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateChapCredentialsCommand = async (
  input: UpdateChapCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.UpdateChapCredentials",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateChapCredentialsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateFileSystemAssociationCommand = async (
  input: UpdateFileSystemAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.UpdateFileSystemAssociation",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateFileSystemAssociationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateGatewayInformationCommand = async (
  input: UpdateGatewayInformationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.UpdateGatewayInformation",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateGatewayInformationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateGatewaySoftwareNowCommand = async (
  input: UpdateGatewaySoftwareNowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.UpdateGatewaySoftwareNow",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateGatewaySoftwareNowInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateMaintenanceStartTimeCommand = async (
  input: UpdateMaintenanceStartTimeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.UpdateMaintenanceStartTime",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateMaintenanceStartTimeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateNFSFileShareCommand = async (
  input: UpdateNFSFileShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.UpdateNFSFileShare",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateNFSFileShareInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateSMBFileShareCommand = async (
  input: UpdateSMBFileShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.UpdateSMBFileShare",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateSMBFileShareInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateSMBFileShareVisibilityCommand = async (
  input: UpdateSMBFileShareVisibilityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.UpdateSMBFileShareVisibility",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateSMBFileShareVisibilityInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateSMBSecurityStrategyCommand = async (
  input: UpdateSMBSecurityStrategyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.UpdateSMBSecurityStrategy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateSMBSecurityStrategyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateSnapshotScheduleCommand = async (
  input: UpdateSnapshotScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.UpdateSnapshotSchedule",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateSnapshotScheduleInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateVTLDeviceTypeCommand = async (
  input: UpdateVTLDeviceTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StorageGateway_20130630.UpdateVTLDeviceType",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateVTLDeviceTypeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1ActivateGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ActivateGatewayCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ActivateGatewayCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ActivateGatewayOutput(data, context);
  const response: ActivateGatewayCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ActivateGatewayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ActivateGatewayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1AddCacheCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddCacheCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AddCacheCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AddCacheOutput(data, context);
  const response: AddCacheCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AddCacheCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddCacheCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1AddTagsToResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AddTagsToResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AddTagsToResourceOutput(data, context);
  const response: AddTagsToResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AddTagsToResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1AddUploadBufferCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddUploadBufferCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AddUploadBufferCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AddUploadBufferOutput(data, context);
  const response: AddUploadBufferCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AddUploadBufferCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddUploadBufferCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1AddWorkingStorageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddWorkingStorageCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AddWorkingStorageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AddWorkingStorageOutput(data, context);
  const response: AddWorkingStorageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AddWorkingStorageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddWorkingStorageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1AssignTapePoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssignTapePoolCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AssignTapePoolCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AssignTapePoolOutput(data, context);
  const response: AssignTapePoolCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AssignTapePoolCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssignTapePoolCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1AssociateFileSystemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateFileSystemCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AssociateFileSystemCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AssociateFileSystemOutput(data, context);
  const response: AssociateFileSystemCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AssociateFileSystemCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateFileSystemCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1AttachVolumeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachVolumeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AttachVolumeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AttachVolumeOutput(data, context);
  const response: AttachVolumeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AttachVolumeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachVolumeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CancelArchivalCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelArchivalCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CancelArchivalCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CancelArchivalOutput(data, context);
  const response: CancelArchivalCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CancelArchivalCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelArchivalCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CancelRetrievalCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelRetrievalCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CancelRetrievalCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CancelRetrievalOutput(data, context);
  const response: CancelRetrievalCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CancelRetrievalCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelRetrievalCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateCachediSCSIVolumeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCachediSCSIVolumeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateCachediSCSIVolumeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateCachediSCSIVolumeOutput(data, context);
  const response: CreateCachediSCSIVolumeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateCachediSCSIVolumeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCachediSCSIVolumeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateNFSFileShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNFSFileShareCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateNFSFileShareCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateNFSFileShareOutput(data, context);
  const response: CreateNFSFileShareCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateNFSFileShareCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNFSFileShareCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateSMBFileShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSMBFileShareCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateSMBFileShareCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateSMBFileShareOutput(data, context);
  const response: CreateSMBFileShareCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateSMBFileShareCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSMBFileShareCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateSnapshotOutput(data, context);
  const response: CreateSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableError":
    case "com.amazonaws.storagegateway#ServiceUnavailableError":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSnapshotFromVolumeRecoveryPointCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointOutput(data, context);
  const response: CreateSnapshotFromVolumeRecoveryPointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSnapshotFromVolumeRecoveryPointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableError":
    case "com.amazonaws.storagegateway#ServiceUnavailableError":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateStorediSCSIVolumeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStorediSCSIVolumeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateStorediSCSIVolumeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateStorediSCSIVolumeOutput(data, context);
  const response: CreateStorediSCSIVolumeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateStorediSCSIVolumeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStorediSCSIVolumeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateTapePoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTapePoolCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateTapePoolCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateTapePoolOutput(data, context);
  const response: CreateTapePoolCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateTapePoolCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTapePoolCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateTapesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTapesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateTapesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateTapesOutput(data, context);
  const response: CreateTapesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateTapesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTapesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateTapeWithBarcodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTapeWithBarcodeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateTapeWithBarcodeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateTapeWithBarcodeOutput(data, context);
  const response: CreateTapeWithBarcodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateTapeWithBarcodeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTapeWithBarcodeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteAutomaticTapeCreationPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAutomaticTapeCreationPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteAutomaticTapeCreationPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteAutomaticTapeCreationPolicyOutput(data, context);
  const response: DeleteAutomaticTapeCreationPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteAutomaticTapeCreationPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAutomaticTapeCreationPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteBandwidthRateLimitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBandwidthRateLimitCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteBandwidthRateLimitCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteBandwidthRateLimitOutput(data, context);
  const response: DeleteBandwidthRateLimitCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteBandwidthRateLimitCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBandwidthRateLimitCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteChapCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChapCredentialsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteChapCredentialsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteChapCredentialsOutput(data, context);
  const response: DeleteChapCredentialsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteChapCredentialsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChapCredentialsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteFileShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFileShareCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteFileShareCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteFileShareOutput(data, context);
  const response: DeleteFileShareCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteFileShareCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFileShareCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGatewayCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteGatewayCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteGatewayOutput(data, context);
  const response: DeleteGatewayCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteGatewayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGatewayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteSnapshotScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSnapshotScheduleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteSnapshotScheduleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteSnapshotScheduleOutput(data, context);
  const response: DeleteSnapshotScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteSnapshotScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSnapshotScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteTapeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTapeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteTapeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteTapeOutput(data, context);
  const response: DeleteTapeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteTapeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTapeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteTapeArchiveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTapeArchiveCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteTapeArchiveCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteTapeArchiveOutput(data, context);
  const response: DeleteTapeArchiveCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteTapeArchiveCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTapeArchiveCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteTapePoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTapePoolCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteTapePoolCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteTapePoolOutput(data, context);
  const response: DeleteTapePoolCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteTapePoolCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTapePoolCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteVolumeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVolumeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteVolumeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteVolumeOutput(data, context);
  const response: DeleteVolumeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteVolumeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVolumeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeAvailabilityMonitorTestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAvailabilityMonitorTestCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeAvailabilityMonitorTestCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAvailabilityMonitorTestOutput(data, context);
  const response: DescribeAvailabilityMonitorTestCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeAvailabilityMonitorTestCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAvailabilityMonitorTestCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeBandwidthRateLimitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBandwidthRateLimitCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeBandwidthRateLimitCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeBandwidthRateLimitOutput(data, context);
  const response: DescribeBandwidthRateLimitCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeBandwidthRateLimitCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBandwidthRateLimitCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeBandwidthRateLimitScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBandwidthRateLimitScheduleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeBandwidthRateLimitScheduleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeBandwidthRateLimitScheduleOutput(data, context);
  const response: DescribeBandwidthRateLimitScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeBandwidthRateLimitScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBandwidthRateLimitScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeCacheCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCacheCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeCacheCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeCacheOutput(data, context);
  const response: DescribeCacheCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeCacheCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCacheCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeCachediSCSIVolumesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCachediSCSIVolumesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeCachediSCSIVolumesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeCachediSCSIVolumesOutput(data, context);
  const response: DescribeCachediSCSIVolumesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeCachediSCSIVolumesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCachediSCSIVolumesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeChapCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChapCredentialsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeChapCredentialsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeChapCredentialsOutput(data, context);
  const response: DescribeChapCredentialsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeChapCredentialsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChapCredentialsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeFileSystemAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFileSystemAssociationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeFileSystemAssociationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeFileSystemAssociationsOutput(data, context);
  const response: DescribeFileSystemAssociationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeFileSystemAssociationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFileSystemAssociationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeGatewayInformationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGatewayInformationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeGatewayInformationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeGatewayInformationOutput(data, context);
  const response: DescribeGatewayInformationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeGatewayInformationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGatewayInformationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeMaintenanceStartTimeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMaintenanceStartTimeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeMaintenanceStartTimeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeMaintenanceStartTimeOutput(data, context);
  const response: DescribeMaintenanceStartTimeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeMaintenanceStartTimeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMaintenanceStartTimeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeNFSFileSharesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNFSFileSharesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeNFSFileSharesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeNFSFileSharesOutput(data, context);
  const response: DescribeNFSFileSharesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeNFSFileSharesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNFSFileSharesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeSMBFileSharesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSMBFileSharesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeSMBFileSharesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeSMBFileSharesOutput(data, context);
  const response: DescribeSMBFileSharesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeSMBFileSharesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSMBFileSharesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeSMBSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSMBSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeSMBSettingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeSMBSettingsOutput(data, context);
  const response: DescribeSMBSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeSMBSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSMBSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeSnapshotScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSnapshotScheduleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeSnapshotScheduleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeSnapshotScheduleOutput(data, context);
  const response: DescribeSnapshotScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeSnapshotScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSnapshotScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeStorediSCSIVolumesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStorediSCSIVolumesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeStorediSCSIVolumesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeStorediSCSIVolumesOutput(data, context);
  const response: DescribeStorediSCSIVolumesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeStorediSCSIVolumesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStorediSCSIVolumesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeTapeArchivesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTapeArchivesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeTapeArchivesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeTapeArchivesOutput(data, context);
  const response: DescribeTapeArchivesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeTapeArchivesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTapeArchivesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeTapeRecoveryPointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTapeRecoveryPointsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeTapeRecoveryPointsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeTapeRecoveryPointsOutput(data, context);
  const response: DescribeTapeRecoveryPointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeTapeRecoveryPointsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTapeRecoveryPointsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeTapesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTapesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeTapesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeTapesOutput(data, context);
  const response: DescribeTapesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeTapesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTapesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeUploadBufferCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUploadBufferCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeUploadBufferCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeUploadBufferOutput(data, context);
  const response: DescribeUploadBufferCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeUploadBufferCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUploadBufferCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeVTLDevicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVTLDevicesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeVTLDevicesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeVTLDevicesOutput(data, context);
  const response: DescribeVTLDevicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeVTLDevicesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVTLDevicesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeWorkingStorageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkingStorageCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeWorkingStorageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeWorkingStorageOutput(data, context);
  const response: DescribeWorkingStorageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeWorkingStorageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkingStorageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DetachVolumeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachVolumeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DetachVolumeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DetachVolumeOutput(data, context);
  const response: DetachVolumeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DetachVolumeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachVolumeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DisableGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableGatewayCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisableGatewayCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisableGatewayOutput(data, context);
  const response: DisableGatewayCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisableGatewayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableGatewayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DisassociateFileSystemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateFileSystemCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisassociateFileSystemCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisassociateFileSystemOutput(data, context);
  const response: DisassociateFileSystemCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisassociateFileSystemCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateFileSystemCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1JoinDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JoinDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1JoinDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1JoinDomainOutput(data, context);
  const response: JoinDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1JoinDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JoinDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListAutomaticTapeCreationPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAutomaticTapeCreationPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListAutomaticTapeCreationPoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAutomaticTapeCreationPoliciesOutput(data, context);
  const response: ListAutomaticTapeCreationPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListAutomaticTapeCreationPoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAutomaticTapeCreationPoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListFileSharesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFileSharesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListFileSharesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListFileSharesOutput(data, context);
  const response: ListFileSharesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListFileSharesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFileSharesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListFileSystemAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFileSystemAssociationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListFileSystemAssociationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListFileSystemAssociationsOutput(data, context);
  const response: ListFileSystemAssociationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListFileSystemAssociationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFileSystemAssociationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListGatewaysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGatewaysCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListGatewaysCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListGatewaysOutput(data, context);
  const response: ListGatewaysCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListGatewaysCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGatewaysCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListLocalDisksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLocalDisksCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListLocalDisksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListLocalDisksOutput(data, context);
  const response: ListLocalDisksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListLocalDisksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLocalDisksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceOutput(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListTapePoolsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTapePoolsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTapePoolsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTapePoolsOutput(data, context);
  const response: ListTapePoolsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTapePoolsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTapePoolsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListTapesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTapesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTapesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTapesOutput(data, context);
  const response: ListTapesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTapesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTapesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListVolumeInitiatorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVolumeInitiatorsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListVolumeInitiatorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListVolumeInitiatorsOutput(data, context);
  const response: ListVolumeInitiatorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListVolumeInitiatorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVolumeInitiatorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListVolumeRecoveryPointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVolumeRecoveryPointsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListVolumeRecoveryPointsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListVolumeRecoveryPointsOutput(data, context);
  const response: ListVolumeRecoveryPointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListVolumeRecoveryPointsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVolumeRecoveryPointsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListVolumesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVolumesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListVolumesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListVolumesOutput(data, context);
  const response: ListVolumesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListVolumesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVolumesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1NotifyWhenUploadedCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NotifyWhenUploadedCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1NotifyWhenUploadedCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1NotifyWhenUploadedOutput(data, context);
  const response: NotifyWhenUploadedCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1NotifyWhenUploadedCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NotifyWhenUploadedCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1RefreshCacheCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RefreshCacheCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RefreshCacheCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RefreshCacheOutput(data, context);
  const response: RefreshCacheCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RefreshCacheCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RefreshCacheCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1RemoveTagsFromResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RemoveTagsFromResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RemoveTagsFromResourceOutput(data, context);
  const response: RemoveTagsFromResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RemoveTagsFromResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ResetCacheCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetCacheCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ResetCacheCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ResetCacheOutput(data, context);
  const response: ResetCacheCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ResetCacheCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetCacheCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1RetrieveTapeArchiveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetrieveTapeArchiveCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RetrieveTapeArchiveCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RetrieveTapeArchiveOutput(data, context);
  const response: RetrieveTapeArchiveCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RetrieveTapeArchiveCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetrieveTapeArchiveCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1RetrieveTapeRecoveryPointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetrieveTapeRecoveryPointCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RetrieveTapeRecoveryPointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RetrieveTapeRecoveryPointOutput(data, context);
  const response: RetrieveTapeRecoveryPointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RetrieveTapeRecoveryPointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetrieveTapeRecoveryPointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1SetLocalConsolePasswordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetLocalConsolePasswordCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SetLocalConsolePasswordCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SetLocalConsolePasswordOutput(data, context);
  const response: SetLocalConsolePasswordCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SetLocalConsolePasswordCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetLocalConsolePasswordCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1SetSMBGuestPasswordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetSMBGuestPasswordCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SetSMBGuestPasswordCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SetSMBGuestPasswordOutput(data, context);
  const response: SetSMBGuestPasswordCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SetSMBGuestPasswordCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetSMBGuestPasswordCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ShutdownGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ShutdownGatewayCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ShutdownGatewayCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ShutdownGatewayOutput(data, context);
  const response: ShutdownGatewayCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ShutdownGatewayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ShutdownGatewayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1StartAvailabilityMonitorTestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartAvailabilityMonitorTestCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartAvailabilityMonitorTestCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartAvailabilityMonitorTestOutput(data, context);
  const response: StartAvailabilityMonitorTestCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartAvailabilityMonitorTestCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartAvailabilityMonitorTestCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1StartGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartGatewayCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartGatewayCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartGatewayOutput(data, context);
  const response: StartGatewayCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartGatewayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartGatewayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateAutomaticTapeCreationPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAutomaticTapeCreationPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateAutomaticTapeCreationPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateAutomaticTapeCreationPolicyOutput(data, context);
  const response: UpdateAutomaticTapeCreationPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateAutomaticTapeCreationPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAutomaticTapeCreationPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateBandwidthRateLimitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBandwidthRateLimitCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateBandwidthRateLimitCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateBandwidthRateLimitOutput(data, context);
  const response: UpdateBandwidthRateLimitCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateBandwidthRateLimitCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBandwidthRateLimitCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateBandwidthRateLimitScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBandwidthRateLimitScheduleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateBandwidthRateLimitScheduleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateBandwidthRateLimitScheduleOutput(data, context);
  const response: UpdateBandwidthRateLimitScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateBandwidthRateLimitScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBandwidthRateLimitScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateChapCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChapCredentialsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateChapCredentialsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateChapCredentialsOutput(data, context);
  const response: UpdateChapCredentialsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateChapCredentialsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChapCredentialsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateFileSystemAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFileSystemAssociationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateFileSystemAssociationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateFileSystemAssociationOutput(data, context);
  const response: UpdateFileSystemAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateFileSystemAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFileSystemAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateGatewayInformationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGatewayInformationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateGatewayInformationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateGatewayInformationOutput(data, context);
  const response: UpdateGatewayInformationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateGatewayInformationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGatewayInformationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateGatewaySoftwareNowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGatewaySoftwareNowCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateGatewaySoftwareNowCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateGatewaySoftwareNowOutput(data, context);
  const response: UpdateGatewaySoftwareNowCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateGatewaySoftwareNowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGatewaySoftwareNowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateMaintenanceStartTimeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMaintenanceStartTimeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateMaintenanceStartTimeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateMaintenanceStartTimeOutput(data, context);
  const response: UpdateMaintenanceStartTimeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateMaintenanceStartTimeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMaintenanceStartTimeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateNFSFileShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNFSFileShareCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateNFSFileShareCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateNFSFileShareOutput(data, context);
  const response: UpdateNFSFileShareCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateNFSFileShareCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNFSFileShareCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateSMBFileShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSMBFileShareCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateSMBFileShareCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateSMBFileShareOutput(data, context);
  const response: UpdateSMBFileShareCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateSMBFileShareCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSMBFileShareCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateSMBFileShareVisibilityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSMBFileShareVisibilityCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateSMBFileShareVisibilityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateSMBFileShareVisibilityOutput(data, context);
  const response: UpdateSMBFileShareVisibilityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateSMBFileShareVisibilityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSMBFileShareVisibilityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateSMBSecurityStrategyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSMBSecurityStrategyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateSMBSecurityStrategyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateSMBSecurityStrategyOutput(data, context);
  const response: UpdateSMBSecurityStrategyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateSMBSecurityStrategyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSMBSecurityStrategyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateSnapshotScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSnapshotScheduleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateSnapshotScheduleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateSnapshotScheduleOutput(data, context);
  const response: UpdateSnapshotScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateSnapshotScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSnapshotScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateVTLDeviceTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVTLDeviceTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateVTLDeviceTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateVTLDeviceTypeOutput(data, context);
  const response: UpdateVTLDeviceTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateVTLDeviceTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVTLDeviceTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_json1_1InternalServerErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerError> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServerError(body, context);
  const contents: InternalServerError = {
    name: "InternalServerError",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidGatewayRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidGatewayRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidGatewayRequestException(body, context);
  const contents: InvalidGatewayRequestException = {
    name: "InvalidGatewayRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ServiceUnavailableErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableError> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceUnavailableError(body, context);
  const contents: ServiceUnavailableError = {
    name: "ServiceUnavailableError",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1ActivateGatewayInput = (input: ActivateGatewayInput, context: __SerdeContext): any => {
  return {
    ...(input.ActivationKey !== undefined && input.ActivationKey !== null && { ActivationKey: input.ActivationKey }),
    ...(input.GatewayName !== undefined && input.GatewayName !== null && { GatewayName: input.GatewayName }),
    ...(input.GatewayRegion !== undefined && input.GatewayRegion !== null && { GatewayRegion: input.GatewayRegion }),
    ...(input.GatewayTimezone !== undefined &&
      input.GatewayTimezone !== null && { GatewayTimezone: input.GatewayTimezone }),
    ...(input.GatewayType !== undefined && input.GatewayType !== null && { GatewayType: input.GatewayType }),
    ...(input.MediumChangerType !== undefined &&
      input.MediumChangerType !== null && { MediumChangerType: input.MediumChangerType }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    ...(input.TapeDriveType !== undefined && input.TapeDriveType !== null && { TapeDriveType: input.TapeDriveType }),
  };
};

const serializeAws_json1_1AddCacheInput = (input: AddCacheInput, context: __SerdeContext): any => {
  return {
    ...(input.DiskIds !== undefined &&
      input.DiskIds !== null && { DiskIds: serializeAws_json1_1DiskIds(input.DiskIds, context) }),
    ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
  };
};

const serializeAws_json1_1AddTagsToResourceInput = (input: AddTagsToResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
  };
};

const serializeAws_json1_1AddUploadBufferInput = (input: AddUploadBufferInput, context: __SerdeContext): any => {
  return {
    ...(input.DiskIds !== undefined &&
      input.DiskIds !== null && { DiskIds: serializeAws_json1_1DiskIds(input.DiskIds, context) }),
    ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
  };
};

const serializeAws_json1_1AddWorkingStorageInput = (input: AddWorkingStorageInput, context: __SerdeContext): any => {
  return {
    ...(input.DiskIds !== undefined &&
      input.DiskIds !== null && { DiskIds: serializeAws_json1_1DiskIds(input.DiskIds, context) }),
    ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
  };
};

const serializeAws_json1_1AssignTapePoolInput = (input: AssignTapePoolInput, context: __SerdeContext): any => {
  return {
    ...(input.BypassGovernanceRetention !== undefined &&
      input.BypassGovernanceRetention !== null && { BypassGovernanceRetention: input.BypassGovernanceRetention }),
    ...(input.PoolId !== undefined && input.PoolId !== null && { PoolId: input.PoolId }),
    ...(input.TapeARN !== undefined && input.TapeARN !== null && { TapeARN: input.TapeARN }),
  };
};

const serializeAws_json1_1AssociateFileSystemInput = (
  input: AssociateFileSystemInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AuditDestinationARN !== undefined &&
      input.AuditDestinationARN !== null && { AuditDestinationARN: input.AuditDestinationARN }),
    ...(input.CacheAttributes !== undefined &&
      input.CacheAttributes !== null && {
        CacheAttributes: serializeAws_json1_1CacheAttributes(input.CacheAttributes, context),
      }),
    ...(input.ClientToken !== undefined && input.ClientToken !== null && { ClientToken: input.ClientToken }),
    ...(input.EndpointNetworkConfiguration !== undefined &&
      input.EndpointNetworkConfiguration !== null && {
        EndpointNetworkConfiguration: serializeAws_json1_1EndpointNetworkConfiguration(
          input.EndpointNetworkConfiguration,
          context
        ),
      }),
    ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
    ...(input.LocationARN !== undefined && input.LocationARN !== null && { LocationARN: input.LocationARN }),
    ...(input.Password !== undefined && input.Password !== null && { Password: input.Password }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    ...(input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }),
  };
};

const serializeAws_json1_1AttachVolumeInput = (input: AttachVolumeInput, context: __SerdeContext): any => {
  return {
    ...(input.DiskId !== undefined && input.DiskId !== null && { DiskId: input.DiskId }),
    ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
    ...(input.NetworkInterfaceId !== undefined &&
      input.NetworkInterfaceId !== null && { NetworkInterfaceId: input.NetworkInterfaceId }),
    ...(input.TargetName !== undefined && input.TargetName !== null && { TargetName: input.TargetName }),
    ...(input.VolumeARN !== undefined && input.VolumeARN !== null && { VolumeARN: input.VolumeARN }),
  };
};

const serializeAws_json1_1AutomaticTapeCreationRule = (
  input: AutomaticTapeCreationRule,
  context: __SerdeContext
): any => {
  return {
    ...(input.MinimumNumTapes !== undefined &&
      input.MinimumNumTapes !== null && { MinimumNumTapes: input.MinimumNumTapes }),
    ...(input.PoolId !== undefined && input.PoolId !== null && { PoolId: input.PoolId }),
    ...(input.TapeBarcodePrefix !== undefined &&
      input.TapeBarcodePrefix !== null && { TapeBarcodePrefix: input.TapeBarcodePrefix }),
    ...(input.TapeSizeInBytes !== undefined &&
      input.TapeSizeInBytes !== null && { TapeSizeInBytes: input.TapeSizeInBytes }),
    ...(input.Worm !== undefined && input.Worm !== null && { Worm: input.Worm }),
  };
};

const serializeAws_json1_1AutomaticTapeCreationRules = (
  input: AutomaticTapeCreationRule[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1AutomaticTapeCreationRule(entry, context);
    });
};

const serializeAws_json1_1BandwidthRateLimitInterval = (
  input: BandwidthRateLimitInterval,
  context: __SerdeContext
): any => {
  return {
    ...(input.AverageDownloadRateLimitInBitsPerSec !== undefined &&
      input.AverageDownloadRateLimitInBitsPerSec !== null && {
        AverageDownloadRateLimitInBitsPerSec: input.AverageDownloadRateLimitInBitsPerSec,
      }),
    ...(input.AverageUploadRateLimitInBitsPerSec !== undefined &&
      input.AverageUploadRateLimitInBitsPerSec !== null && {
        AverageUploadRateLimitInBitsPerSec: input.AverageUploadRateLimitInBitsPerSec,
      }),
    ...(input.DaysOfWeek !== undefined &&
      input.DaysOfWeek !== null && { DaysOfWeek: serializeAws_json1_1DaysOfWeek(input.DaysOfWeek, context) }),
    ...(input.EndHourOfDay !== undefined && input.EndHourOfDay !== null && { EndHourOfDay: input.EndHourOfDay }),
    ...(input.EndMinuteOfHour !== undefined &&
      input.EndMinuteOfHour !== null && { EndMinuteOfHour: input.EndMinuteOfHour }),
    ...(input.StartHourOfDay !== undefined &&
      input.StartHourOfDay !== null && { StartHourOfDay: input.StartHourOfDay }),
    ...(input.StartMinuteOfHour !== undefined &&
      input.StartMinuteOfHour !== null && { StartMinuteOfHour: input.StartMinuteOfHour }),
  };
};

const serializeAws_json1_1BandwidthRateLimitIntervals = (
  input: BandwidthRateLimitInterval[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1BandwidthRateLimitInterval(entry, context);
    });
};

const serializeAws_json1_1CacheAttributes = (input: CacheAttributes, context: __SerdeContext): any => {
  return {
    ...(input.CacheStaleTimeoutInSeconds !== undefined &&
      input.CacheStaleTimeoutInSeconds !== null && { CacheStaleTimeoutInSeconds: input.CacheStaleTimeoutInSeconds }),
  };
};

const serializeAws_json1_1CancelArchivalInput = (input: CancelArchivalInput, context: __SerdeContext): any => {
  return {
    ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
    ...(input.TapeARN !== undefined && input.TapeARN !== null && { TapeARN: input.TapeARN }),
  };
};

const serializeAws_json1_1CancelRetrievalInput = (input: CancelRetrievalInput, context: __SerdeContext): any => {
  return {
    ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
    ...(input.TapeARN !== undefined && input.TapeARN !== null && { TapeARN: input.TapeARN }),
  };
};

const serializeAws_json1_1CreateCachediSCSIVolumeInput = (
  input: CreateCachediSCSIVolumeInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClientToken !== undefined && input.ClientToken !== null && { ClientToken: input.ClientToken }),
    ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
    ...(input.KMSEncrypted !== undefined && input.KMSEncrypted !== null && { KMSEncrypted: input.KMSEncrypted }),
    ...(input.KMSKey !== undefined && input.KMSKey !== null && { KMSKey: input.KMSKey }),
    ...(input.NetworkInterfaceId !== undefined &&
      input.NetworkInterfaceId !== null && { NetworkInterfaceId: input.NetworkInterfaceId }),
    ...(input.SnapshotId !== undefined && input.SnapshotId !== null && { SnapshotId: input.SnapshotId }),
    ...(input.SourceVolumeARN !== undefined &&
      input.SourceVolumeARN !== null && { SourceVolumeARN: input.SourceVolumeARN }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    ...(input.TargetName !== undefined && input.TargetName !== null && { TargetName: input.TargetName }),
    ...(input.VolumeSizeInBytes !== undefined &&
      input.VolumeSizeInBytes !== null && { VolumeSizeInBytes: input.VolumeSizeInBytes }),
  };
};

const serializeAws_json1_1CreateNFSFileShareInput = (input: CreateNFSFileShareInput, context: __SerdeContext): any => {
  return {
    ...(input.BucketRegion !== undefined && input.BucketRegion !== null && { BucketRegion: input.BucketRegion }),
    ...(input.CacheAttributes !== undefined &&
      input.CacheAttributes !== null && {
        CacheAttributes: serializeAws_json1_1CacheAttributes(input.CacheAttributes, context),
      }),
    ...(input.ClientList !== undefined &&
      input.ClientList !== null && { ClientList: serializeAws_json1_1FileShareClientList(input.ClientList, context) }),
    ...(input.ClientToken !== undefined && input.ClientToken !== null && { ClientToken: input.ClientToken }),
    ...(input.DefaultStorageClass !== undefined &&
      input.DefaultStorageClass !== null && { DefaultStorageClass: input.DefaultStorageClass }),
    ...(input.FileShareName !== undefined && input.FileShareName !== null && { FileShareName: input.FileShareName }),
    ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
    ...(input.GuessMIMETypeEnabled !== undefined &&
      input.GuessMIMETypeEnabled !== null && { GuessMIMETypeEnabled: input.GuessMIMETypeEnabled }),
    ...(input.KMSEncrypted !== undefined && input.KMSEncrypted !== null && { KMSEncrypted: input.KMSEncrypted }),
    ...(input.KMSKey !== undefined && input.KMSKey !== null && { KMSKey: input.KMSKey }),
    ...(input.LocationARN !== undefined && input.LocationARN !== null && { LocationARN: input.LocationARN }),
    ...(input.NFSFileShareDefaults !== undefined &&
      input.NFSFileShareDefaults !== null && {
        NFSFileShareDefaults: serializeAws_json1_1NFSFileShareDefaults(input.NFSFileShareDefaults, context),
      }),
    ...(input.NotificationPolicy !== undefined &&
      input.NotificationPolicy !== null && { NotificationPolicy: input.NotificationPolicy }),
    ...(input.ObjectACL !== undefined && input.ObjectACL !== null && { ObjectACL: input.ObjectACL }),
    ...(input.ReadOnly !== undefined && input.ReadOnly !== null && { ReadOnly: input.ReadOnly }),
    ...(input.RequesterPays !== undefined && input.RequesterPays !== null && { RequesterPays: input.RequesterPays }),
    ...(input.Role !== undefined && input.Role !== null && { Role: input.Role }),
    ...(input.Squash !== undefined && input.Squash !== null && { Squash: input.Squash }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    ...(input.VPCEndpointDNSName !== undefined &&
      input.VPCEndpointDNSName !== null && { VPCEndpointDNSName: input.VPCEndpointDNSName }),
  };
};

const serializeAws_json1_1CreateSMBFileShareInput = (input: CreateSMBFileShareInput, context: __SerdeContext): any => {
  return {
    ...(input.AccessBasedEnumeration !== undefined &&
      input.AccessBasedEnumeration !== null && { AccessBasedEnumeration: input.AccessBasedEnumeration }),
    ...(input.AdminUserList !== undefined &&
      input.AdminUserList !== null && { AdminUserList: serializeAws_json1_1UserList(input.AdminUserList, context) }),
    ...(input.AuditDestinationARN !== undefined &&
      input.AuditDestinationARN !== null && { AuditDestinationARN: input.AuditDestinationARN }),
    ...(input.Authentication !== undefined &&
      input.Authentication !== null && { Authentication: input.Authentication }),
    ...(input.BucketRegion !== undefined && input.BucketRegion !== null && { BucketRegion: input.BucketRegion }),
    ...(input.CacheAttributes !== undefined &&
      input.CacheAttributes !== null && {
        CacheAttributes: serializeAws_json1_1CacheAttributes(input.CacheAttributes, context),
      }),
    ...(input.CaseSensitivity !== undefined &&
      input.CaseSensitivity !== null && { CaseSensitivity: input.CaseSensitivity }),
    ...(input.ClientToken !== undefined && input.ClientToken !== null && { ClientToken: input.ClientToken }),
    ...(input.DefaultStorageClass !== undefined &&
      input.DefaultStorageClass !== null && { DefaultStorageClass: input.DefaultStorageClass }),
    ...(input.FileShareName !== undefined && input.FileShareName !== null && { FileShareName: input.FileShareName }),
    ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
    ...(input.GuessMIMETypeEnabled !== undefined &&
      input.GuessMIMETypeEnabled !== null && { GuessMIMETypeEnabled: input.GuessMIMETypeEnabled }),
    ...(input.InvalidUserList !== undefined &&
      input.InvalidUserList !== null && {
        InvalidUserList: serializeAws_json1_1UserList(input.InvalidUserList, context),
      }),
    ...(input.KMSEncrypted !== undefined && input.KMSEncrypted !== null && { KMSEncrypted: input.KMSEncrypted }),
    ...(input.KMSKey !== undefined && input.KMSKey !== null && { KMSKey: input.KMSKey }),
    ...(input.LocationARN !== undefined && input.LocationARN !== null && { LocationARN: input.LocationARN }),
    ...(input.NotificationPolicy !== undefined &&
      input.NotificationPolicy !== null && { NotificationPolicy: input.NotificationPolicy }),
    ...(input.ObjectACL !== undefined && input.ObjectACL !== null && { ObjectACL: input.ObjectACL }),
    ...(input.OplocksEnabled !== undefined &&
      input.OplocksEnabled !== null && { OplocksEnabled: input.OplocksEnabled }),
    ...(input.ReadOnly !== undefined && input.ReadOnly !== null && { ReadOnly: input.ReadOnly }),
    ...(input.RequesterPays !== undefined && input.RequesterPays !== null && { RequesterPays: input.RequesterPays }),
    ...(input.Role !== undefined && input.Role !== null && { Role: input.Role }),
    ...(input.SMBACLEnabled !== undefined && input.SMBACLEnabled !== null && { SMBACLEnabled: input.SMBACLEnabled }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    ...(input.VPCEndpointDNSName !== undefined &&
      input.VPCEndpointDNSName !== null && { VPCEndpointDNSName: input.VPCEndpointDNSName }),
    ...(input.ValidUserList !== undefined &&
      input.ValidUserList !== null && { ValidUserList: serializeAws_json1_1UserList(input.ValidUserList, context) }),
  };
};

const serializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointInput = (
  input: CreateSnapshotFromVolumeRecoveryPointInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.SnapshotDescription !== undefined &&
      input.SnapshotDescription !== null && { SnapshotDescription: input.SnapshotDescription }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    ...(input.VolumeARN !== undefined && input.VolumeARN !== null && { VolumeARN: input.VolumeARN }),
  };
};

const serializeAws_json1_1CreateSnapshotInput = (input: CreateSnapshotInput, context: __SerdeContext): any => {
  return {
    ...(input.SnapshotDescription !== undefined &&
      input.SnapshotDescription !== null && { SnapshotDescription: input.SnapshotDescription }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    ...(input.VolumeARN !== undefined && input.VolumeARN !== null && { VolumeARN: input.VolumeARN }),
  };
};

const serializeAws_json1_1CreateStorediSCSIVolumeInput = (
  input: CreateStorediSCSIVolumeInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.DiskId !== undefined && input.DiskId !== null && { DiskId: input.DiskId }),
    ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
    ...(input.KMSEncrypted !== undefined && input.KMSEncrypted !== null && { KMSEncrypted: input.KMSEncrypted }),
    ...(input.KMSKey !== undefined && input.KMSKey !== null && { KMSKey: input.KMSKey }),
    ...(input.NetworkInterfaceId !== undefined &&
      input.NetworkInterfaceId !== null && { NetworkInterfaceId: input.NetworkInterfaceId }),
    ...(input.PreserveExistingData !== undefined &&
      input.PreserveExistingData !== null && { PreserveExistingData: input.PreserveExistingData }),
    ...(input.SnapshotId !== undefined && input.SnapshotId !== null && { SnapshotId: input.SnapshotId }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    ...(input.TargetName !== undefined && input.TargetName !== null && { TargetName: input.TargetName }),
  };
};

const serializeAws_json1_1CreateTapePoolInput = (input: CreateTapePoolInput, context: __SerdeContext): any => {
  return {
    ...(input.PoolName !== undefined && input.PoolName !== null && { PoolName: input.PoolName }),
    ...(input.RetentionLockTimeInDays !== undefined &&
      input.RetentionLockTimeInDays !== null && { RetentionLockTimeInDays: input.RetentionLockTimeInDays }),
    ...(input.RetentionLockType !== undefined &&
      input.RetentionLockType !== null && { RetentionLockType: input.RetentionLockType }),
    ...(input.StorageClass !== undefined && input.StorageClass !== null && { StorageClass: input.StorageClass }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateTapesInput = (input: CreateTapesInput, context: __SerdeContext): any => {
  return {
    ...(input.ClientToken !== undefined && input.ClientToken !== null && { ClientToken: input.ClientToken }),
    ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
    ...(input.KMSEncrypted !== undefined && input.KMSEncrypted !== null && { KMSEncrypted: input.KMSEncrypted }),
    ...(input.KMSKey !== undefined && input.KMSKey !== null && { KMSKey: input.KMSKey }),
    ...(input.NumTapesToCreate !== undefined &&
      input.NumTapesToCreate !== null && { NumTapesToCreate: input.NumTapesToCreate }),
    ...(input.PoolId !== undefined && input.PoolId !== null && { PoolId: input.PoolId }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    ...(input.TapeBarcodePrefix !== undefined &&
      input.TapeBarcodePrefix !== null && { TapeBarcodePrefix: input.TapeBarcodePrefix }),
    ...(input.TapeSizeInBytes !== undefined &&
      input.TapeSizeInBytes !== null && { TapeSizeInBytes: input.TapeSizeInBytes }),
    ...(input.Worm !== undefined && input.Worm !== null && { Worm: input.Worm }),
  };
};

const serializeAws_json1_1CreateTapeWithBarcodeInput = (
  input: CreateTapeWithBarcodeInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
    ...(input.KMSEncrypted !== undefined && input.KMSEncrypted !== null && { KMSEncrypted: input.KMSEncrypted }),
    ...(input.KMSKey !== undefined && input.KMSKey !== null && { KMSKey: input.KMSKey }),
    ...(input.PoolId !== undefined && input.PoolId !== null && { PoolId: input.PoolId }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    ...(input.TapeBarcode !== undefined && input.TapeBarcode !== null && { TapeBarcode: input.TapeBarcode }),
    ...(input.TapeSizeInBytes !== undefined &&
      input.TapeSizeInBytes !== null && { TapeSizeInBytes: input.TapeSizeInBytes }),
    ...(input.Worm !== undefined && input.Worm !== null && { Worm: input.Worm }),
  };
};

const serializeAws_json1_1DaysOfWeek = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1DeleteAutomaticTapeCreationPolicyInput = (
  input: DeleteAutomaticTapeCreationPolicyInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
  };
};

const serializeAws_json1_1DeleteBandwidthRateLimitInput = (
  input: DeleteBandwidthRateLimitInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.BandwidthType !== undefined && input.BandwidthType !== null && { BandwidthType: input.BandwidthType }),
    ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
  };
};

const serializeAws_json1_1DeleteChapCredentialsInput = (
  input: DeleteChapCredentialsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.InitiatorName !== undefined && input.InitiatorName !== null && { InitiatorName: input.InitiatorName }),
    ...(input.TargetARN !== undefined && input.TargetARN !== null && { TargetARN: input.TargetARN }),
  };
};

const serializeAws_json1_1DeleteFileShareInput = (input: DeleteFileShareInput, context: __SerdeContext): any => {
  return {
    ...(input.FileShareARN !== undefined && input.FileShareARN !== null && { FileShareARN: input.FileShareARN }),
    ...(input.ForceDelete !== undefined && input.ForceDelete !== null && { ForceDelete: input.ForceDelete }),
  };
};

const serializeAws_json1_1DeleteGatewayInput = (input: DeleteGatewayInput, context: __SerdeContext): any => {
  return {
    ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
  };
};

const serializeAws_json1_1DeleteSnapshotScheduleInput = (
  input: DeleteSnapshotScheduleInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.VolumeARN !== undefined && input.VolumeARN !== null && { VolumeARN: input.VolumeARN }),
  };
};

const serializeAws_json1_1DeleteTapeArchiveInput = (input: DeleteTapeArchiveInput, context: __SerdeContext): any => {
  return {
    ...(input.BypassGovernanceRetention !== undefined &&
      input.BypassGovernanceRetention !== null && { BypassGovernanceRetention: input.BypassGovernanceRetention }),
    ...(input.TapeARN !== undefined && input.TapeARN !== null && { TapeARN: input.TapeARN }),
  };
};

const serializeAws_json1_1DeleteTapeInput = (input: DeleteTapeInput, context: __SerdeContext): any => {
  return {
    ...(input.BypassGovernanceRetention !== undefined &&
      input.BypassGovernanceRetention !== null && { BypassGovernanceRetention: input.BypassGovernanceRetention }),
    ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
    ...(input.TapeARN !== undefined && input.TapeARN !== null && { TapeARN: input.TapeARN }),
  };
};

const serializeAws_json1_1DeleteTapePoolInput = (input: DeleteTapePoolInput, context: __SerdeContext): any => {
  return {
    ...(input.PoolARN !== undefined && input.PoolARN !== null && { PoolARN: input.PoolARN }),
  };
};

const serializeAws_json1_1DeleteVolumeInput = (input: DeleteVolumeInput, context: __SerdeContext): any => {
  return {
    ...(input.VolumeARN !== undefined && input.VolumeARN !== null && { VolumeARN: input.VolumeARN }),
  };
};

const serializeAws_json1_1DescribeAvailabilityMonitorTestInput = (
  input: DescribeAvailabilityMonitorTestInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
  };
};

const serializeAws_json1_1DescribeBandwidthRateLimitInput = (
  input: DescribeBandwidthRateLimitInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
  };
};

const serializeAws_json1_1DescribeBandwidthRateLimitScheduleInput = (
  input: DescribeBandwidthRateLimitScheduleInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
  };
};

const serializeAws_json1_1DescribeCachediSCSIVolumesInput = (
  input: DescribeCachediSCSIVolumesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.VolumeARNs !== undefined &&
      input.VolumeARNs !== null && { VolumeARNs: serializeAws_json1_1VolumeARNs(input.VolumeARNs, context) }),
  };
};

const serializeAws_json1_1DescribeCacheInput = (input: DescribeCacheInput, context: __SerdeContext): any => {
  return {
    ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
  };
};

const serializeAws_json1_1DescribeChapCredentialsInput = (
  input: DescribeChapCredentialsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.TargetARN !== undefined && input.TargetARN !== null && { TargetARN: input.TargetARN }),
  };
};

const serializeAws_json1_1DescribeFileSystemAssociationsInput = (
  input: DescribeFileSystemAssociationsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.FileSystemAssociationARNList !== undefined &&
      input.FileSystemAssociationARNList !== null && {
        FileSystemAssociationARNList: serializeAws_json1_1FileSystemAssociationARNList(
          input.FileSystemAssociationARNList,
          context
        ),
      }),
  };
};

const serializeAws_json1_1DescribeGatewayInformationInput = (
  input: DescribeGatewayInformationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
  };
};

const serializeAws_json1_1DescribeMaintenanceStartTimeInput = (
  input: DescribeMaintenanceStartTimeInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
  };
};

const serializeAws_json1_1DescribeNFSFileSharesInput = (
  input: DescribeNFSFileSharesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.FileShareARNList !== undefined &&
      input.FileShareARNList !== null && {
        FileShareARNList: serializeAws_json1_1FileShareARNList(input.FileShareARNList, context),
      }),
  };
};

const serializeAws_json1_1DescribeSMBFileSharesInput = (
  input: DescribeSMBFileSharesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.FileShareARNList !== undefined &&
      input.FileShareARNList !== null && {
        FileShareARNList: serializeAws_json1_1FileShareARNList(input.FileShareARNList, context),
      }),
  };
};

const serializeAws_json1_1DescribeSMBSettingsInput = (
  input: DescribeSMBSettingsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
  };
};

const serializeAws_json1_1DescribeSnapshotScheduleInput = (
  input: DescribeSnapshotScheduleInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.VolumeARN !== undefined && input.VolumeARN !== null && { VolumeARN: input.VolumeARN }),
  };
};

const serializeAws_json1_1DescribeStorediSCSIVolumesInput = (
  input: DescribeStorediSCSIVolumesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.VolumeARNs !== undefined &&
      input.VolumeARNs !== null && { VolumeARNs: serializeAws_json1_1VolumeARNs(input.VolumeARNs, context) }),
  };
};

const serializeAws_json1_1DescribeTapeArchivesInput = (
  input: DescribeTapeArchivesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
    ...(input.TapeARNs !== undefined &&
      input.TapeARNs !== null && { TapeARNs: serializeAws_json1_1TapeARNs(input.TapeARNs, context) }),
  };
};

const serializeAws_json1_1DescribeTapeRecoveryPointsInput = (
  input: DescribeTapeRecoveryPointsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
  };
};

const serializeAws_json1_1DescribeTapesInput = (input: DescribeTapesInput, context: __SerdeContext): any => {
  return {
    ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
    ...(input.TapeARNs !== undefined &&
      input.TapeARNs !== null && { TapeARNs: serializeAws_json1_1TapeARNs(input.TapeARNs, context) }),
  };
};

const serializeAws_json1_1DescribeUploadBufferInput = (
  input: DescribeUploadBufferInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
  };
};

const serializeAws_json1_1DescribeVTLDevicesInput = (input: DescribeVTLDevicesInput, context: __SerdeContext): any => {
  return {
    ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
    ...(input.VTLDeviceARNs !== undefined &&
      input.VTLDeviceARNs !== null && {
        VTLDeviceARNs: serializeAws_json1_1VTLDeviceARNs(input.VTLDeviceARNs, context),
      }),
  };
};

const serializeAws_json1_1DescribeWorkingStorageInput = (
  input: DescribeWorkingStorageInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
  };
};

const serializeAws_json1_1DetachVolumeInput = (input: DetachVolumeInput, context: __SerdeContext): any => {
  return {
    ...(input.ForceDetach !== undefined && input.ForceDetach !== null && { ForceDetach: input.ForceDetach }),
    ...(input.VolumeARN !== undefined && input.VolumeARN !== null && { VolumeARN: input.VolumeARN }),
  };
};

const serializeAws_json1_1DisableGatewayInput = (input: DisableGatewayInput, context: __SerdeContext): any => {
  return {
    ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
  };
};

const serializeAws_json1_1DisassociateFileSystemInput = (
  input: DisassociateFileSystemInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.FileSystemAssociationARN !== undefined &&
      input.FileSystemAssociationARN !== null && { FileSystemAssociationARN: input.FileSystemAssociationARN }),
    ...(input.ForceDelete !== undefined && input.ForceDelete !== null && { ForceDelete: input.ForceDelete }),
  };
};

const serializeAws_json1_1DiskIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1EndpointNetworkConfiguration = (
  input: EndpointNetworkConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.IpAddresses !== undefined &&
      input.IpAddresses !== null && { IpAddresses: serializeAws_json1_1IpAddressList(input.IpAddresses, context) }),
  };
};

const serializeAws_json1_1FileShareARNList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1FileShareClientList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1FileSystemAssociationARNList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1FolderList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1Hosts = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1IpAddressList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1JoinDomainInput = (input: JoinDomainInput, context: __SerdeContext): any => {
  return {
    ...(input.DomainControllers !== undefined &&
      input.DomainControllers !== null && {
        DomainControllers: serializeAws_json1_1Hosts(input.DomainControllers, context),
      }),
    ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
    ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
    ...(input.OrganizationalUnit !== undefined &&
      input.OrganizationalUnit !== null && { OrganizationalUnit: input.OrganizationalUnit }),
    ...(input.Password !== undefined && input.Password !== null && { Password: input.Password }),
    ...(input.TimeoutInSeconds !== undefined &&
      input.TimeoutInSeconds !== null && { TimeoutInSeconds: input.TimeoutInSeconds }),
    ...(input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }),
  };
};

const serializeAws_json1_1ListAutomaticTapeCreationPoliciesInput = (
  input: ListAutomaticTapeCreationPoliciesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
  };
};

const serializeAws_json1_1ListFileSharesInput = (input: ListFileSharesInput, context: __SerdeContext): any => {
  return {
    ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
  };
};

const serializeAws_json1_1ListFileSystemAssociationsInput = (
  input: ListFileSystemAssociationsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
  };
};

const serializeAws_json1_1ListGatewaysInput = (input: ListGatewaysInput, context: __SerdeContext): any => {
  return {
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
  };
};

const serializeAws_json1_1ListLocalDisksInput = (input: ListLocalDisksInput, context: __SerdeContext): any => {
  return {
    ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
  };
};

const serializeAws_json1_1ListTagsForResourceInput = (
  input: ListTagsForResourceInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
    ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
  };
};

const serializeAws_json1_1ListTapePoolsInput = (input: ListTapePoolsInput, context: __SerdeContext): any => {
  return {
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
    ...(input.PoolARNs !== undefined &&
      input.PoolARNs !== null && { PoolARNs: serializeAws_json1_1PoolARNs(input.PoolARNs, context) }),
  };
};

const serializeAws_json1_1ListTapesInput = (input: ListTapesInput, context: __SerdeContext): any => {
  return {
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
    ...(input.TapeARNs !== undefined &&
      input.TapeARNs !== null && { TapeARNs: serializeAws_json1_1TapeARNs(input.TapeARNs, context) }),
  };
};

const serializeAws_json1_1ListVolumeInitiatorsInput = (
  input: ListVolumeInitiatorsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.VolumeARN !== undefined && input.VolumeARN !== null && { VolumeARN: input.VolumeARN }),
  };
};

const serializeAws_json1_1ListVolumeRecoveryPointsInput = (
  input: ListVolumeRecoveryPointsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
  };
};

const serializeAws_json1_1ListVolumesInput = (input: ListVolumesInput, context: __SerdeContext): any => {
  return {
    ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
  };
};

const serializeAws_json1_1NFSFileShareDefaults = (input: NFSFileShareDefaults, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryMode !== undefined && input.DirectoryMode !== null && { DirectoryMode: input.DirectoryMode }),
    ...(input.FileMode !== undefined && input.FileMode !== null && { FileMode: input.FileMode }),
    ...(input.GroupId !== undefined && input.GroupId !== null && { GroupId: input.GroupId }),
    ...(input.OwnerId !== undefined && input.OwnerId !== null && { OwnerId: input.OwnerId }),
  };
};

const serializeAws_json1_1NotifyWhenUploadedInput = (input: NotifyWhenUploadedInput, context: __SerdeContext): any => {
  return {
    ...(input.FileShareARN !== undefined && input.FileShareARN !== null && { FileShareARN: input.FileShareARN }),
  };
};

const serializeAws_json1_1PoolARNs = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1RefreshCacheInput = (input: RefreshCacheInput, context: __SerdeContext): any => {
  return {
    ...(input.FileShareARN !== undefined && input.FileShareARN !== null && { FileShareARN: input.FileShareARN }),
    ...(input.FolderList !== undefined &&
      input.FolderList !== null && { FolderList: serializeAws_json1_1FolderList(input.FolderList, context) }),
    ...(input.Recursive !== undefined && input.Recursive !== null && { Recursive: input.Recursive }),
  };
};

const serializeAws_json1_1RemoveTagsFromResourceInput = (
  input: RemoveTagsFromResourceInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeys !== undefined &&
      input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeys(input.TagKeys, context) }),
  };
};

const serializeAws_json1_1ResetCacheInput = (input: ResetCacheInput, context: __SerdeContext): any => {
  return {
    ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
  };
};

const serializeAws_json1_1RetrieveTapeArchiveInput = (
  input: RetrieveTapeArchiveInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
    ...(input.TapeARN !== undefined && input.TapeARN !== null && { TapeARN: input.TapeARN }),
  };
};

const serializeAws_json1_1RetrieveTapeRecoveryPointInput = (
  input: RetrieveTapeRecoveryPointInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
    ...(input.TapeARN !== undefined && input.TapeARN !== null && { TapeARN: input.TapeARN }),
  };
};

const serializeAws_json1_1SetLocalConsolePasswordInput = (
  input: SetLocalConsolePasswordInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
    ...(input.LocalConsolePassword !== undefined &&
      input.LocalConsolePassword !== null && { LocalConsolePassword: input.LocalConsolePassword }),
  };
};

const serializeAws_json1_1SetSMBGuestPasswordInput = (
  input: SetSMBGuestPasswordInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
    ...(input.Password !== undefined && input.Password !== null && { Password: input.Password }),
  };
};

const serializeAws_json1_1ShutdownGatewayInput = (input: ShutdownGatewayInput, context: __SerdeContext): any => {
  return {
    ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
  };
};

const serializeAws_json1_1StartAvailabilityMonitorTestInput = (
  input: StartAvailabilityMonitorTestInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
  };
};

const serializeAws_json1_1StartGatewayInput = (input: StartGatewayInput, context: __SerdeContext): any => {
  return {
    ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
  };
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_json1_1TagKeys = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1Tags = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1TapeARNs = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1UpdateAutomaticTapeCreationPolicyInput = (
  input: UpdateAutomaticTapeCreationPolicyInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutomaticTapeCreationRules !== undefined &&
      input.AutomaticTapeCreationRules !== null && {
        AutomaticTapeCreationRules: serializeAws_json1_1AutomaticTapeCreationRules(
          input.AutomaticTapeCreationRules,
          context
        ),
      }),
    ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
  };
};

const serializeAws_json1_1UpdateBandwidthRateLimitInput = (
  input: UpdateBandwidthRateLimitInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AverageDownloadRateLimitInBitsPerSec !== undefined &&
      input.AverageDownloadRateLimitInBitsPerSec !== null && {
        AverageDownloadRateLimitInBitsPerSec: input.AverageDownloadRateLimitInBitsPerSec,
      }),
    ...(input.AverageUploadRateLimitInBitsPerSec !== undefined &&
      input.AverageUploadRateLimitInBitsPerSec !== null && {
        AverageUploadRateLimitInBitsPerSec: input.AverageUploadRateLimitInBitsPerSec,
      }),
    ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
  };
};

const serializeAws_json1_1UpdateBandwidthRateLimitScheduleInput = (
  input: UpdateBandwidthRateLimitScheduleInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.BandwidthRateLimitIntervals !== undefined &&
      input.BandwidthRateLimitIntervals !== null && {
        BandwidthRateLimitIntervals: serializeAws_json1_1BandwidthRateLimitIntervals(
          input.BandwidthRateLimitIntervals,
          context
        ),
      }),
    ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
  };
};

const serializeAws_json1_1UpdateChapCredentialsInput = (
  input: UpdateChapCredentialsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.InitiatorName !== undefined && input.InitiatorName !== null && { InitiatorName: input.InitiatorName }),
    ...(input.SecretToAuthenticateInitiator !== undefined &&
      input.SecretToAuthenticateInitiator !== null && {
        SecretToAuthenticateInitiator: input.SecretToAuthenticateInitiator,
      }),
    ...(input.SecretToAuthenticateTarget !== undefined &&
      input.SecretToAuthenticateTarget !== null && { SecretToAuthenticateTarget: input.SecretToAuthenticateTarget }),
    ...(input.TargetARN !== undefined && input.TargetARN !== null && { TargetARN: input.TargetARN }),
  };
};

const serializeAws_json1_1UpdateFileSystemAssociationInput = (
  input: UpdateFileSystemAssociationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AuditDestinationARN !== undefined &&
      input.AuditDestinationARN !== null && { AuditDestinationARN: input.AuditDestinationARN }),
    ...(input.CacheAttributes !== undefined &&
      input.CacheAttributes !== null && {
        CacheAttributes: serializeAws_json1_1CacheAttributes(input.CacheAttributes, context),
      }),
    ...(input.FileSystemAssociationARN !== undefined &&
      input.FileSystemAssociationARN !== null && { FileSystemAssociationARN: input.FileSystemAssociationARN }),
    ...(input.Password !== undefined && input.Password !== null && { Password: input.Password }),
    ...(input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }),
  };
};

const serializeAws_json1_1UpdateGatewayInformationInput = (
  input: UpdateGatewayInformationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.CloudWatchLogGroupARN !== undefined &&
      input.CloudWatchLogGroupARN !== null && { CloudWatchLogGroupARN: input.CloudWatchLogGroupARN }),
    ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
    ...(input.GatewayCapacity !== undefined &&
      input.GatewayCapacity !== null && { GatewayCapacity: input.GatewayCapacity }),
    ...(input.GatewayName !== undefined && input.GatewayName !== null && { GatewayName: input.GatewayName }),
    ...(input.GatewayTimezone !== undefined &&
      input.GatewayTimezone !== null && { GatewayTimezone: input.GatewayTimezone }),
  };
};

const serializeAws_json1_1UpdateGatewaySoftwareNowInput = (
  input: UpdateGatewaySoftwareNowInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
  };
};

const serializeAws_json1_1UpdateMaintenanceStartTimeInput = (
  input: UpdateMaintenanceStartTimeInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.DayOfMonth !== undefined && input.DayOfMonth !== null && { DayOfMonth: input.DayOfMonth }),
    ...(input.DayOfWeek !== undefined && input.DayOfWeek !== null && { DayOfWeek: input.DayOfWeek }),
    ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
    ...(input.HourOfDay !== undefined && input.HourOfDay !== null && { HourOfDay: input.HourOfDay }),
    ...(input.MinuteOfHour !== undefined && input.MinuteOfHour !== null && { MinuteOfHour: input.MinuteOfHour }),
  };
};

const serializeAws_json1_1UpdateNFSFileShareInput = (input: UpdateNFSFileShareInput, context: __SerdeContext): any => {
  return {
    ...(input.CacheAttributes !== undefined &&
      input.CacheAttributes !== null && {
        CacheAttributes: serializeAws_json1_1CacheAttributes(input.CacheAttributes, context),
      }),
    ...(input.ClientList !== undefined &&
      input.ClientList !== null && { ClientList: serializeAws_json1_1FileShareClientList(input.ClientList, context) }),
    ...(input.DefaultStorageClass !== undefined &&
      input.DefaultStorageClass !== null && { DefaultStorageClass: input.DefaultStorageClass }),
    ...(input.FileShareARN !== undefined && input.FileShareARN !== null && { FileShareARN: input.FileShareARN }),
    ...(input.FileShareName !== undefined && input.FileShareName !== null && { FileShareName: input.FileShareName }),
    ...(input.GuessMIMETypeEnabled !== undefined &&
      input.GuessMIMETypeEnabled !== null && { GuessMIMETypeEnabled: input.GuessMIMETypeEnabled }),
    ...(input.KMSEncrypted !== undefined && input.KMSEncrypted !== null && { KMSEncrypted: input.KMSEncrypted }),
    ...(input.KMSKey !== undefined && input.KMSKey !== null && { KMSKey: input.KMSKey }),
    ...(input.NFSFileShareDefaults !== undefined &&
      input.NFSFileShareDefaults !== null && {
        NFSFileShareDefaults: serializeAws_json1_1NFSFileShareDefaults(input.NFSFileShareDefaults, context),
      }),
    ...(input.NotificationPolicy !== undefined &&
      input.NotificationPolicy !== null && { NotificationPolicy: input.NotificationPolicy }),
    ...(input.ObjectACL !== undefined && input.ObjectACL !== null && { ObjectACL: input.ObjectACL }),
    ...(input.ReadOnly !== undefined && input.ReadOnly !== null && { ReadOnly: input.ReadOnly }),
    ...(input.RequesterPays !== undefined && input.RequesterPays !== null && { RequesterPays: input.RequesterPays }),
    ...(input.Squash !== undefined && input.Squash !== null && { Squash: input.Squash }),
  };
};

const serializeAws_json1_1UpdateSMBFileShareInput = (input: UpdateSMBFileShareInput, context: __SerdeContext): any => {
  return {
    ...(input.AccessBasedEnumeration !== undefined &&
      input.AccessBasedEnumeration !== null && { AccessBasedEnumeration: input.AccessBasedEnumeration }),
    ...(input.AdminUserList !== undefined &&
      input.AdminUserList !== null && { AdminUserList: serializeAws_json1_1UserList(input.AdminUserList, context) }),
    ...(input.AuditDestinationARN !== undefined &&
      input.AuditDestinationARN !== null && { AuditDestinationARN: input.AuditDestinationARN }),
    ...(input.CacheAttributes !== undefined &&
      input.CacheAttributes !== null && {
        CacheAttributes: serializeAws_json1_1CacheAttributes(input.CacheAttributes, context),
      }),
    ...(input.CaseSensitivity !== undefined &&
      input.CaseSensitivity !== null && { CaseSensitivity: input.CaseSensitivity }),
    ...(input.DefaultStorageClass !== undefined &&
      input.DefaultStorageClass !== null && { DefaultStorageClass: input.DefaultStorageClass }),
    ...(input.FileShareARN !== undefined && input.FileShareARN !== null && { FileShareARN: input.FileShareARN }),
    ...(input.FileShareName !== undefined && input.FileShareName !== null && { FileShareName: input.FileShareName }),
    ...(input.GuessMIMETypeEnabled !== undefined &&
      input.GuessMIMETypeEnabled !== null && { GuessMIMETypeEnabled: input.GuessMIMETypeEnabled }),
    ...(input.InvalidUserList !== undefined &&
      input.InvalidUserList !== null && {
        InvalidUserList: serializeAws_json1_1UserList(input.InvalidUserList, context),
      }),
    ...(input.KMSEncrypted !== undefined && input.KMSEncrypted !== null && { KMSEncrypted: input.KMSEncrypted }),
    ...(input.KMSKey !== undefined && input.KMSKey !== null && { KMSKey: input.KMSKey }),
    ...(input.NotificationPolicy !== undefined &&
      input.NotificationPolicy !== null && { NotificationPolicy: input.NotificationPolicy }),
    ...(input.ObjectACL !== undefined && input.ObjectACL !== null && { ObjectACL: input.ObjectACL }),
    ...(input.OplocksEnabled !== undefined &&
      input.OplocksEnabled !== null && { OplocksEnabled: input.OplocksEnabled }),
    ...(input.ReadOnly !== undefined && input.ReadOnly !== null && { ReadOnly: input.ReadOnly }),
    ...(input.RequesterPays !== undefined && input.RequesterPays !== null && { RequesterPays: input.RequesterPays }),
    ...(input.SMBACLEnabled !== undefined && input.SMBACLEnabled !== null && { SMBACLEnabled: input.SMBACLEnabled }),
    ...(input.ValidUserList !== undefined &&
      input.ValidUserList !== null && { ValidUserList: serializeAws_json1_1UserList(input.ValidUserList, context) }),
  };
};

const serializeAws_json1_1UpdateSMBFileShareVisibilityInput = (
  input: UpdateSMBFileShareVisibilityInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.FileSharesVisible !== undefined &&
      input.FileSharesVisible !== null && { FileSharesVisible: input.FileSharesVisible }),
    ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
  };
};

const serializeAws_json1_1UpdateSMBSecurityStrategyInput = (
  input: UpdateSMBSecurityStrategyInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayARN !== undefined && input.GatewayARN !== null && { GatewayARN: input.GatewayARN }),
    ...(input.SMBSecurityStrategy !== undefined &&
      input.SMBSecurityStrategy !== null && { SMBSecurityStrategy: input.SMBSecurityStrategy }),
  };
};

const serializeAws_json1_1UpdateSnapshotScheduleInput = (
  input: UpdateSnapshotScheduleInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.RecurrenceInHours !== undefined &&
      input.RecurrenceInHours !== null && { RecurrenceInHours: input.RecurrenceInHours }),
    ...(input.StartAt !== undefined && input.StartAt !== null && { StartAt: input.StartAt }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    ...(input.VolumeARN !== undefined && input.VolumeARN !== null && { VolumeARN: input.VolumeARN }),
  };
};

const serializeAws_json1_1UpdateVTLDeviceTypeInput = (
  input: UpdateVTLDeviceTypeInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeviceType !== undefined && input.DeviceType !== null && { DeviceType: input.DeviceType }),
    ...(input.VTLDeviceARN !== undefined && input.VTLDeviceARN !== null && { VTLDeviceARN: input.VTLDeviceARN }),
  };
};

const serializeAws_json1_1UserList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1VolumeARNs = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1VTLDeviceARNs = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_json1_1ActivateGatewayOutput = (output: any, context: __SerdeContext): ActivateGatewayOutput => {
  return {
    GatewayARN: __expectString(output.GatewayARN),
  } as any;
};

const deserializeAws_json1_1AddCacheOutput = (output: any, context: __SerdeContext): AddCacheOutput => {
  return {
    GatewayARN: __expectString(output.GatewayARN),
  } as any;
};

const deserializeAws_json1_1AddTagsToResourceOutput = (
  output: any,
  context: __SerdeContext
): AddTagsToResourceOutput => {
  return {
    ResourceARN: __expectString(output.ResourceARN),
  } as any;
};

const deserializeAws_json1_1AddUploadBufferOutput = (output: any, context: __SerdeContext): AddUploadBufferOutput => {
  return {
    GatewayARN: __expectString(output.GatewayARN),
  } as any;
};

const deserializeAws_json1_1AddWorkingStorageOutput = (
  output: any,
  context: __SerdeContext
): AddWorkingStorageOutput => {
  return {
    GatewayARN: __expectString(output.GatewayARN),
  } as any;
};

const deserializeAws_json1_1AssignTapePoolOutput = (output: any, context: __SerdeContext): AssignTapePoolOutput => {
  return {
    TapeARN: __expectString(output.TapeARN),
  } as any;
};

const deserializeAws_json1_1AssociateFileSystemOutput = (
  output: any,
  context: __SerdeContext
): AssociateFileSystemOutput => {
  return {
    FileSystemAssociationARN: __expectString(output.FileSystemAssociationARN),
  } as any;
};

const deserializeAws_json1_1AttachVolumeOutput = (output: any, context: __SerdeContext): AttachVolumeOutput => {
  return {
    TargetARN: __expectString(output.TargetARN),
    VolumeARN: __expectString(output.VolumeARN),
  } as any;
};

const deserializeAws_json1_1AutomaticTapeCreationPolicyInfo = (
  output: any,
  context: __SerdeContext
): AutomaticTapeCreationPolicyInfo => {
  return {
    AutomaticTapeCreationRules:
      output.AutomaticTapeCreationRules !== undefined && output.AutomaticTapeCreationRules !== null
        ? deserializeAws_json1_1AutomaticTapeCreationRules(output.AutomaticTapeCreationRules, context)
        : undefined,
    GatewayARN: __expectString(output.GatewayARN),
  } as any;
};

const deserializeAws_json1_1AutomaticTapeCreationPolicyInfos = (
  output: any,
  context: __SerdeContext
): AutomaticTapeCreationPolicyInfo[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AutomaticTapeCreationPolicyInfo(entry, context);
    });
};

const deserializeAws_json1_1AutomaticTapeCreationRule = (
  output: any,
  context: __SerdeContext
): AutomaticTapeCreationRule => {
  return {
    MinimumNumTapes: __expectInt32(output.MinimumNumTapes),
    PoolId: __expectString(output.PoolId),
    TapeBarcodePrefix: __expectString(output.TapeBarcodePrefix),
    TapeSizeInBytes: __expectLong(output.TapeSizeInBytes),
    Worm: __expectBoolean(output.Worm),
  } as any;
};

const deserializeAws_json1_1AutomaticTapeCreationRules = (
  output: any,
  context: __SerdeContext
): AutomaticTapeCreationRule[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AutomaticTapeCreationRule(entry, context);
    });
};

const deserializeAws_json1_1BandwidthRateLimitInterval = (
  output: any,
  context: __SerdeContext
): BandwidthRateLimitInterval => {
  return {
    AverageDownloadRateLimitInBitsPerSec: __expectLong(output.AverageDownloadRateLimitInBitsPerSec),
    AverageUploadRateLimitInBitsPerSec: __expectLong(output.AverageUploadRateLimitInBitsPerSec),
    DaysOfWeek:
      output.DaysOfWeek !== undefined && output.DaysOfWeek !== null
        ? deserializeAws_json1_1DaysOfWeek(output.DaysOfWeek, context)
        : undefined,
    EndHourOfDay: __expectInt32(output.EndHourOfDay),
    EndMinuteOfHour: __expectInt32(output.EndMinuteOfHour),
    StartHourOfDay: __expectInt32(output.StartHourOfDay),
    StartMinuteOfHour: __expectInt32(output.StartMinuteOfHour),
  } as any;
};

const deserializeAws_json1_1BandwidthRateLimitIntervals = (
  output: any,
  context: __SerdeContext
): BandwidthRateLimitInterval[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BandwidthRateLimitInterval(entry, context);
    });
};

const deserializeAws_json1_1CacheAttributes = (output: any, context: __SerdeContext): CacheAttributes => {
  return {
    CacheStaleTimeoutInSeconds: __expectInt32(output.CacheStaleTimeoutInSeconds),
  } as any;
};

const deserializeAws_json1_1CachediSCSIVolume = (output: any, context: __SerdeContext): CachediSCSIVolume => {
  return {
    CreatedDate:
      output.CreatedDate !== undefined && output.CreatedDate !== null
        ? new Date(Math.round(output.CreatedDate * 1000))
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
      output.VolumeiSCSIAttributes !== undefined && output.VolumeiSCSIAttributes !== null
        ? deserializeAws_json1_1VolumeiSCSIAttributes(output.VolumeiSCSIAttributes, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CachediSCSIVolumes = (output: any, context: __SerdeContext): CachediSCSIVolume[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CachediSCSIVolume(entry, context);
    });
};

const deserializeAws_json1_1CancelArchivalOutput = (output: any, context: __SerdeContext): CancelArchivalOutput => {
  return {
    TapeARN: __expectString(output.TapeARN),
  } as any;
};

const deserializeAws_json1_1CancelRetrievalOutput = (output: any, context: __SerdeContext): CancelRetrievalOutput => {
  return {
    TapeARN: __expectString(output.TapeARN),
  } as any;
};

const deserializeAws_json1_1ChapCredentials = (output: any, context: __SerdeContext): ChapInfo[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ChapInfo(entry, context);
    });
};

const deserializeAws_json1_1ChapInfo = (output: any, context: __SerdeContext): ChapInfo => {
  return {
    InitiatorName: __expectString(output.InitiatorName),
    SecretToAuthenticateInitiator: __expectString(output.SecretToAuthenticateInitiator),
    SecretToAuthenticateTarget: __expectString(output.SecretToAuthenticateTarget),
    TargetARN: __expectString(output.TargetARN),
  } as any;
};

const deserializeAws_json1_1CreateCachediSCSIVolumeOutput = (
  output: any,
  context: __SerdeContext
): CreateCachediSCSIVolumeOutput => {
  return {
    TargetARN: __expectString(output.TargetARN),
    VolumeARN: __expectString(output.VolumeARN),
  } as any;
};

const deserializeAws_json1_1CreateNFSFileShareOutput = (
  output: any,
  context: __SerdeContext
): CreateNFSFileShareOutput => {
  return {
    FileShareARN: __expectString(output.FileShareARN),
  } as any;
};

const deserializeAws_json1_1CreateSMBFileShareOutput = (
  output: any,
  context: __SerdeContext
): CreateSMBFileShareOutput => {
  return {
    FileShareARN: __expectString(output.FileShareARN),
  } as any;
};

const deserializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointOutput = (
  output: any,
  context: __SerdeContext
): CreateSnapshotFromVolumeRecoveryPointOutput => {
  return {
    SnapshotId: __expectString(output.SnapshotId),
    VolumeARN: __expectString(output.VolumeARN),
    VolumeRecoveryPointTime: __expectString(output.VolumeRecoveryPointTime),
  } as any;
};

const deserializeAws_json1_1CreateSnapshotOutput = (output: any, context: __SerdeContext): CreateSnapshotOutput => {
  return {
    SnapshotId: __expectString(output.SnapshotId),
    VolumeARN: __expectString(output.VolumeARN),
  } as any;
};

const deserializeAws_json1_1CreateStorediSCSIVolumeOutput = (
  output: any,
  context: __SerdeContext
): CreateStorediSCSIVolumeOutput => {
  return {
    TargetARN: __expectString(output.TargetARN),
    VolumeARN: __expectString(output.VolumeARN),
    VolumeSizeInBytes: __expectLong(output.VolumeSizeInBytes),
  } as any;
};

const deserializeAws_json1_1CreateTapePoolOutput = (output: any, context: __SerdeContext): CreateTapePoolOutput => {
  return {
    PoolARN: __expectString(output.PoolARN),
  } as any;
};

const deserializeAws_json1_1CreateTapesOutput = (output: any, context: __SerdeContext): CreateTapesOutput => {
  return {
    TapeARNs:
      output.TapeARNs !== undefined && output.TapeARNs !== null
        ? deserializeAws_json1_1TapeARNs(output.TapeARNs, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateTapeWithBarcodeOutput = (
  output: any,
  context: __SerdeContext
): CreateTapeWithBarcodeOutput => {
  return {
    TapeARN: __expectString(output.TapeARN),
  } as any;
};

const deserializeAws_json1_1DaysOfWeek = (output: any, context: __SerdeContext): number[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectInt32(entry) as any;
    });
};

const deserializeAws_json1_1DeleteAutomaticTapeCreationPolicyOutput = (
  output: any,
  context: __SerdeContext
): DeleteAutomaticTapeCreationPolicyOutput => {
  return {
    GatewayARN: __expectString(output.GatewayARN),
  } as any;
};

const deserializeAws_json1_1DeleteBandwidthRateLimitOutput = (
  output: any,
  context: __SerdeContext
): DeleteBandwidthRateLimitOutput => {
  return {
    GatewayARN: __expectString(output.GatewayARN),
  } as any;
};

const deserializeAws_json1_1DeleteChapCredentialsOutput = (
  output: any,
  context: __SerdeContext
): DeleteChapCredentialsOutput => {
  return {
    InitiatorName: __expectString(output.InitiatorName),
    TargetARN: __expectString(output.TargetARN),
  } as any;
};

const deserializeAws_json1_1DeleteFileShareOutput = (output: any, context: __SerdeContext): DeleteFileShareOutput => {
  return {
    FileShareARN: __expectString(output.FileShareARN),
  } as any;
};

const deserializeAws_json1_1DeleteGatewayOutput = (output: any, context: __SerdeContext): DeleteGatewayOutput => {
  return {
    GatewayARN: __expectString(output.GatewayARN),
  } as any;
};

const deserializeAws_json1_1DeleteSnapshotScheduleOutput = (
  output: any,
  context: __SerdeContext
): DeleteSnapshotScheduleOutput => {
  return {
    VolumeARN: __expectString(output.VolumeARN),
  } as any;
};

const deserializeAws_json1_1DeleteTapeArchiveOutput = (
  output: any,
  context: __SerdeContext
): DeleteTapeArchiveOutput => {
  return {
    TapeARN: __expectString(output.TapeARN),
  } as any;
};

const deserializeAws_json1_1DeleteTapeOutput = (output: any, context: __SerdeContext): DeleteTapeOutput => {
  return {
    TapeARN: __expectString(output.TapeARN),
  } as any;
};

const deserializeAws_json1_1DeleteTapePoolOutput = (output: any, context: __SerdeContext): DeleteTapePoolOutput => {
  return {
    PoolARN: __expectString(output.PoolARN),
  } as any;
};

const deserializeAws_json1_1DeleteVolumeOutput = (output: any, context: __SerdeContext): DeleteVolumeOutput => {
  return {
    VolumeARN: __expectString(output.VolumeARN),
  } as any;
};

const deserializeAws_json1_1DescribeAvailabilityMonitorTestOutput = (
  output: any,
  context: __SerdeContext
): DescribeAvailabilityMonitorTestOutput => {
  return {
    GatewayARN: __expectString(output.GatewayARN),
    StartTime:
      output.StartTime !== undefined && output.StartTime !== null
        ? new Date(Math.round(output.StartTime * 1000))
        : undefined,
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1DescribeBandwidthRateLimitOutput = (
  output: any,
  context: __SerdeContext
): DescribeBandwidthRateLimitOutput => {
  return {
    AverageDownloadRateLimitInBitsPerSec: __expectLong(output.AverageDownloadRateLimitInBitsPerSec),
    AverageUploadRateLimitInBitsPerSec: __expectLong(output.AverageUploadRateLimitInBitsPerSec),
    GatewayARN: __expectString(output.GatewayARN),
  } as any;
};

const deserializeAws_json1_1DescribeBandwidthRateLimitScheduleOutput = (
  output: any,
  context: __SerdeContext
): DescribeBandwidthRateLimitScheduleOutput => {
  return {
    BandwidthRateLimitIntervals:
      output.BandwidthRateLimitIntervals !== undefined && output.BandwidthRateLimitIntervals !== null
        ? deserializeAws_json1_1BandwidthRateLimitIntervals(output.BandwidthRateLimitIntervals, context)
        : undefined,
    GatewayARN: __expectString(output.GatewayARN),
  } as any;
};

const deserializeAws_json1_1DescribeCachediSCSIVolumesOutput = (
  output: any,
  context: __SerdeContext
): DescribeCachediSCSIVolumesOutput => {
  return {
    CachediSCSIVolumes:
      output.CachediSCSIVolumes !== undefined && output.CachediSCSIVolumes !== null
        ? deserializeAws_json1_1CachediSCSIVolumes(output.CachediSCSIVolumes, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeCacheOutput = (output: any, context: __SerdeContext): DescribeCacheOutput => {
  return {
    CacheAllocatedInBytes: __expectLong(output.CacheAllocatedInBytes),
    CacheDirtyPercentage: __limitedParseDouble(output.CacheDirtyPercentage),
    CacheHitPercentage: __limitedParseDouble(output.CacheHitPercentage),
    CacheMissPercentage: __limitedParseDouble(output.CacheMissPercentage),
    CacheUsedPercentage: __limitedParseDouble(output.CacheUsedPercentage),
    DiskIds:
      output.DiskIds !== undefined && output.DiskIds !== null
        ? deserializeAws_json1_1DiskIds(output.DiskIds, context)
        : undefined,
    GatewayARN: __expectString(output.GatewayARN),
  } as any;
};

const deserializeAws_json1_1DescribeChapCredentialsOutput = (
  output: any,
  context: __SerdeContext
): DescribeChapCredentialsOutput => {
  return {
    ChapCredentials:
      output.ChapCredentials !== undefined && output.ChapCredentials !== null
        ? deserializeAws_json1_1ChapCredentials(output.ChapCredentials, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeFileSystemAssociationsOutput = (
  output: any,
  context: __SerdeContext
): DescribeFileSystemAssociationsOutput => {
  return {
    FileSystemAssociationInfoList:
      output.FileSystemAssociationInfoList !== undefined && output.FileSystemAssociationInfoList !== null
        ? deserializeAws_json1_1FileSystemAssociationInfoList(output.FileSystemAssociationInfoList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeGatewayInformationOutput = (
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
      output.GatewayNetworkInterfaces !== undefined && output.GatewayNetworkInterfaces !== null
        ? deserializeAws_json1_1GatewayNetworkInterfaces(output.GatewayNetworkInterfaces, context)
        : undefined,
    GatewayState: __expectString(output.GatewayState),
    GatewayTimezone: __expectString(output.GatewayTimezone),
    GatewayType: __expectString(output.GatewayType),
    HostEnvironment: __expectString(output.HostEnvironment),
    LastSoftwareUpdate: __expectString(output.LastSoftwareUpdate),
    NextUpdateAvailabilityDate: __expectString(output.NextUpdateAvailabilityDate),
    SoftwareUpdatesEndDate: __expectString(output.SoftwareUpdatesEndDate),
    SupportedGatewayCapacities:
      output.SupportedGatewayCapacities !== undefined && output.SupportedGatewayCapacities !== null
        ? deserializeAws_json1_1SupportedGatewayCapacities(output.SupportedGatewayCapacities, context)
        : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
    VPCEndpoint: __expectString(output.VPCEndpoint),
  } as any;
};

const deserializeAws_json1_1DescribeMaintenanceStartTimeOutput = (
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

const deserializeAws_json1_1DescribeNFSFileSharesOutput = (
  output: any,
  context: __SerdeContext
): DescribeNFSFileSharesOutput => {
  return {
    NFSFileShareInfoList:
      output.NFSFileShareInfoList !== undefined && output.NFSFileShareInfoList !== null
        ? deserializeAws_json1_1NFSFileShareInfoList(output.NFSFileShareInfoList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeSMBFileSharesOutput = (
  output: any,
  context: __SerdeContext
): DescribeSMBFileSharesOutput => {
  return {
    SMBFileShareInfoList:
      output.SMBFileShareInfoList !== undefined && output.SMBFileShareInfoList !== null
        ? deserializeAws_json1_1SMBFileShareInfoList(output.SMBFileShareInfoList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeSMBSettingsOutput = (
  output: any,
  context: __SerdeContext
): DescribeSMBSettingsOutput => {
  return {
    ActiveDirectoryStatus: __expectString(output.ActiveDirectoryStatus),
    DomainName: __expectString(output.DomainName),
    FileSharesVisible: __expectBoolean(output.FileSharesVisible),
    GatewayARN: __expectString(output.GatewayARN),
    SMBGuestPasswordSet: __expectBoolean(output.SMBGuestPasswordSet),
    SMBSecurityStrategy: __expectString(output.SMBSecurityStrategy),
  } as any;
};

const deserializeAws_json1_1DescribeSnapshotScheduleOutput = (
  output: any,
  context: __SerdeContext
): DescribeSnapshotScheduleOutput => {
  return {
    Description: __expectString(output.Description),
    RecurrenceInHours: __expectInt32(output.RecurrenceInHours),
    StartAt: __expectInt32(output.StartAt),
    Tags:
      output.Tags !== undefined && output.Tags !== null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
    Timezone: __expectString(output.Timezone),
    VolumeARN: __expectString(output.VolumeARN),
  } as any;
};

const deserializeAws_json1_1DescribeStorediSCSIVolumesOutput = (
  output: any,
  context: __SerdeContext
): DescribeStorediSCSIVolumesOutput => {
  return {
    StorediSCSIVolumes:
      output.StorediSCSIVolumes !== undefined && output.StorediSCSIVolumes !== null
        ? deserializeAws_json1_1StorediSCSIVolumes(output.StorediSCSIVolumes, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeTapeArchivesOutput = (
  output: any,
  context: __SerdeContext
): DescribeTapeArchivesOutput => {
  return {
    Marker: __expectString(output.Marker),
    TapeArchives:
      output.TapeArchives !== undefined && output.TapeArchives !== null
        ? deserializeAws_json1_1TapeArchives(output.TapeArchives, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeTapeRecoveryPointsOutput = (
  output: any,
  context: __SerdeContext
): DescribeTapeRecoveryPointsOutput => {
  return {
    GatewayARN: __expectString(output.GatewayARN),
    Marker: __expectString(output.Marker),
    TapeRecoveryPointInfos:
      output.TapeRecoveryPointInfos !== undefined && output.TapeRecoveryPointInfos !== null
        ? deserializeAws_json1_1TapeRecoveryPointInfos(output.TapeRecoveryPointInfos, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeTapesOutput = (output: any, context: __SerdeContext): DescribeTapesOutput => {
  return {
    Marker: __expectString(output.Marker),
    Tapes:
      output.Tapes !== undefined && output.Tapes !== null
        ? deserializeAws_json1_1Tapes(output.Tapes, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeUploadBufferOutput = (
  output: any,
  context: __SerdeContext
): DescribeUploadBufferOutput => {
  return {
    DiskIds:
      output.DiskIds !== undefined && output.DiskIds !== null
        ? deserializeAws_json1_1DiskIds(output.DiskIds, context)
        : undefined,
    GatewayARN: __expectString(output.GatewayARN),
    UploadBufferAllocatedInBytes: __expectLong(output.UploadBufferAllocatedInBytes),
    UploadBufferUsedInBytes: __expectLong(output.UploadBufferUsedInBytes),
  } as any;
};

const deserializeAws_json1_1DescribeVTLDevicesOutput = (
  output: any,
  context: __SerdeContext
): DescribeVTLDevicesOutput => {
  return {
    GatewayARN: __expectString(output.GatewayARN),
    Marker: __expectString(output.Marker),
    VTLDevices:
      output.VTLDevices !== undefined && output.VTLDevices !== null
        ? deserializeAws_json1_1VTLDevices(output.VTLDevices, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeWorkingStorageOutput = (
  output: any,
  context: __SerdeContext
): DescribeWorkingStorageOutput => {
  return {
    DiskIds:
      output.DiskIds !== undefined && output.DiskIds !== null
        ? deserializeAws_json1_1DiskIds(output.DiskIds, context)
        : undefined,
    GatewayARN: __expectString(output.GatewayARN),
    WorkingStorageAllocatedInBytes: __expectLong(output.WorkingStorageAllocatedInBytes),
    WorkingStorageUsedInBytes: __expectLong(output.WorkingStorageUsedInBytes),
  } as any;
};

const deserializeAws_json1_1DetachVolumeOutput = (output: any, context: __SerdeContext): DetachVolumeOutput => {
  return {
    VolumeARN: __expectString(output.VolumeARN),
  } as any;
};

const deserializeAws_json1_1DeviceiSCSIAttributes = (output: any, context: __SerdeContext): DeviceiSCSIAttributes => {
  return {
    ChapEnabled: __expectBoolean(output.ChapEnabled),
    NetworkInterfaceId: __expectString(output.NetworkInterfaceId),
    NetworkInterfacePort: __expectInt32(output.NetworkInterfacePort),
    TargetARN: __expectString(output.TargetARN),
  } as any;
};

const deserializeAws_json1_1DisableGatewayOutput = (output: any, context: __SerdeContext): DisableGatewayOutput => {
  return {
    GatewayARN: __expectString(output.GatewayARN),
  } as any;
};

const deserializeAws_json1_1DisassociateFileSystemOutput = (
  output: any,
  context: __SerdeContext
): DisassociateFileSystemOutput => {
  return {
    FileSystemAssociationARN: __expectString(output.FileSystemAssociationARN),
  } as any;
};

const deserializeAws_json1_1Disk = (output: any, context: __SerdeContext): Disk => {
  return {
    DiskAllocationResource: __expectString(output.DiskAllocationResource),
    DiskAllocationType: __expectString(output.DiskAllocationType),
    DiskAttributeList:
      output.DiskAttributeList !== undefined && output.DiskAttributeList !== null
        ? deserializeAws_json1_1DiskAttributeList(output.DiskAttributeList, context)
        : undefined,
    DiskId: __expectString(output.DiskId),
    DiskNode: __expectString(output.DiskNode),
    DiskPath: __expectString(output.DiskPath),
    DiskSizeInBytes: __expectLong(output.DiskSizeInBytes),
    DiskStatus: __expectString(output.DiskStatus),
  } as any;
};

const deserializeAws_json1_1DiskAttributeList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1DiskIds = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1Disks = (output: any, context: __SerdeContext): Disk[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Disk(entry, context);
    });
};

const deserializeAws_json1_1EndpointNetworkConfiguration = (
  output: any,
  context: __SerdeContext
): EndpointNetworkConfiguration => {
  return {
    IpAddresses:
      output.IpAddresses !== undefined && output.IpAddresses !== null
        ? deserializeAws_json1_1IpAddressList(output.IpAddresses, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1errorDetails = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_json1_1FileShareClientList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1FileShareInfo = (output: any, context: __SerdeContext): FileShareInfo => {
  return {
    FileShareARN: __expectString(output.FileShareARN),
    FileShareId: __expectString(output.FileShareId),
    FileShareStatus: __expectString(output.FileShareStatus),
    FileShareType: __expectString(output.FileShareType),
    GatewayARN: __expectString(output.GatewayARN),
  } as any;
};

const deserializeAws_json1_1FileShareInfoList = (output: any, context: __SerdeContext): FileShareInfo[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FileShareInfo(entry, context);
    });
};

const deserializeAws_json1_1FileSystemAssociationInfo = (
  output: any,
  context: __SerdeContext
): FileSystemAssociationInfo => {
  return {
    AuditDestinationARN: __expectString(output.AuditDestinationARN),
    CacheAttributes:
      output.CacheAttributes !== undefined && output.CacheAttributes !== null
        ? deserializeAws_json1_1CacheAttributes(output.CacheAttributes, context)
        : undefined,
    EndpointNetworkConfiguration:
      output.EndpointNetworkConfiguration !== undefined && output.EndpointNetworkConfiguration !== null
        ? deserializeAws_json1_1EndpointNetworkConfiguration(output.EndpointNetworkConfiguration, context)
        : undefined,
    FileSystemAssociationARN: __expectString(output.FileSystemAssociationARN),
    FileSystemAssociationStatus: __expectString(output.FileSystemAssociationStatus),
    GatewayARN: __expectString(output.GatewayARN),
    LocationARN: __expectString(output.LocationARN),
    Tags:
      output.Tags !== undefined && output.Tags !== null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1FileSystemAssociationInfoList = (
  output: any,
  context: __SerdeContext
): FileSystemAssociationInfo[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FileSystemAssociationInfo(entry, context);
    });
};

const deserializeAws_json1_1FileSystemAssociationSummary = (
  output: any,
  context: __SerdeContext
): FileSystemAssociationSummary => {
  return {
    FileSystemAssociationARN: __expectString(output.FileSystemAssociationARN),
    FileSystemAssociationId: __expectString(output.FileSystemAssociationId),
    FileSystemAssociationStatus: __expectString(output.FileSystemAssociationStatus),
    GatewayARN: __expectString(output.GatewayARN),
  } as any;
};

const deserializeAws_json1_1FileSystemAssociationSummaryList = (
  output: any,
  context: __SerdeContext
): FileSystemAssociationSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FileSystemAssociationSummary(entry, context);
    });
};

const deserializeAws_json1_1GatewayInfo = (output: any, context: __SerdeContext): GatewayInfo => {
  return {
    Ec2InstanceId: __expectString(output.Ec2InstanceId),
    Ec2InstanceRegion: __expectString(output.Ec2InstanceRegion),
    GatewayARN: __expectString(output.GatewayARN),
    GatewayId: __expectString(output.GatewayId),
    GatewayName: __expectString(output.GatewayName),
    GatewayOperationalState: __expectString(output.GatewayOperationalState),
    GatewayType: __expectString(output.GatewayType),
  } as any;
};

const deserializeAws_json1_1GatewayNetworkInterfaces = (output: any, context: __SerdeContext): NetworkInterface[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1NetworkInterface(entry, context);
    });
};

const deserializeAws_json1_1Gateways = (output: any, context: __SerdeContext): GatewayInfo[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1GatewayInfo(entry, context);
    });
};

const deserializeAws_json1_1Initiators = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1InternalServerError = (output: any, context: __SerdeContext): InternalServerError => {
  return {
    error:
      output.error !== undefined && output.error !== null
        ? deserializeAws_json1_1StorageGatewayError(output.error, context)
        : undefined,
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidGatewayRequestException = (
  output: any,
  context: __SerdeContext
): InvalidGatewayRequestException => {
  return {
    error:
      output.error !== undefined && output.error !== null
        ? deserializeAws_json1_1StorageGatewayError(output.error, context)
        : undefined,
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1IpAddressList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1JoinDomainOutput = (output: any, context: __SerdeContext): JoinDomainOutput => {
  return {
    ActiveDirectoryStatus: __expectString(output.ActiveDirectoryStatus),
    GatewayARN: __expectString(output.GatewayARN),
  } as any;
};

const deserializeAws_json1_1ListAutomaticTapeCreationPoliciesOutput = (
  output: any,
  context: __SerdeContext
): ListAutomaticTapeCreationPoliciesOutput => {
  return {
    AutomaticTapeCreationPolicyInfos:
      output.AutomaticTapeCreationPolicyInfos !== undefined && output.AutomaticTapeCreationPolicyInfos !== null
        ? deserializeAws_json1_1AutomaticTapeCreationPolicyInfos(output.AutomaticTapeCreationPolicyInfos, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListFileSharesOutput = (output: any, context: __SerdeContext): ListFileSharesOutput => {
  return {
    FileShareInfoList:
      output.FileShareInfoList !== undefined && output.FileShareInfoList !== null
        ? deserializeAws_json1_1FileShareInfoList(output.FileShareInfoList, context)
        : undefined,
    Marker: __expectString(output.Marker),
    NextMarker: __expectString(output.NextMarker),
  } as any;
};

const deserializeAws_json1_1ListFileSystemAssociationsOutput = (
  output: any,
  context: __SerdeContext
): ListFileSystemAssociationsOutput => {
  return {
    FileSystemAssociationSummaryList:
      output.FileSystemAssociationSummaryList !== undefined && output.FileSystemAssociationSummaryList !== null
        ? deserializeAws_json1_1FileSystemAssociationSummaryList(output.FileSystemAssociationSummaryList, context)
        : undefined,
    Marker: __expectString(output.Marker),
    NextMarker: __expectString(output.NextMarker),
  } as any;
};

const deserializeAws_json1_1ListGatewaysOutput = (output: any, context: __SerdeContext): ListGatewaysOutput => {
  return {
    Gateways:
      output.Gateways !== undefined && output.Gateways !== null
        ? deserializeAws_json1_1Gateways(output.Gateways, context)
        : undefined,
    Marker: __expectString(output.Marker),
  } as any;
};

const deserializeAws_json1_1ListLocalDisksOutput = (output: any, context: __SerdeContext): ListLocalDisksOutput => {
  return {
    Disks:
      output.Disks !== undefined && output.Disks !== null
        ? deserializeAws_json1_1Disks(output.Disks, context)
        : undefined,
    GatewayARN: __expectString(output.GatewayARN),
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceOutput = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceOutput => {
  return {
    Marker: __expectString(output.Marker),
    ResourceARN: __expectString(output.ResourceARN),
    Tags:
      output.Tags !== undefined && output.Tags !== null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListTapePoolsOutput = (output: any, context: __SerdeContext): ListTapePoolsOutput => {
  return {
    Marker: __expectString(output.Marker),
    PoolInfos:
      output.PoolInfos !== undefined && output.PoolInfos !== null
        ? deserializeAws_json1_1PoolInfos(output.PoolInfos, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListTapesOutput = (output: any, context: __SerdeContext): ListTapesOutput => {
  return {
    Marker: __expectString(output.Marker),
    TapeInfos:
      output.TapeInfos !== undefined && output.TapeInfos !== null
        ? deserializeAws_json1_1TapeInfos(output.TapeInfos, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListVolumeInitiatorsOutput = (
  output: any,
  context: __SerdeContext
): ListVolumeInitiatorsOutput => {
  return {
    Initiators:
      output.Initiators !== undefined && output.Initiators !== null
        ? deserializeAws_json1_1Initiators(output.Initiators, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListVolumeRecoveryPointsOutput = (
  output: any,
  context: __SerdeContext
): ListVolumeRecoveryPointsOutput => {
  return {
    GatewayARN: __expectString(output.GatewayARN),
    VolumeRecoveryPointInfos:
      output.VolumeRecoveryPointInfos !== undefined && output.VolumeRecoveryPointInfos !== null
        ? deserializeAws_json1_1VolumeRecoveryPointInfos(output.VolumeRecoveryPointInfos, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListVolumesOutput = (output: any, context: __SerdeContext): ListVolumesOutput => {
  return {
    GatewayARN: __expectString(output.GatewayARN),
    Marker: __expectString(output.Marker),
    VolumeInfos:
      output.VolumeInfos !== undefined && output.VolumeInfos !== null
        ? deserializeAws_json1_1VolumeInfos(output.VolumeInfos, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1NetworkInterface = (output: any, context: __SerdeContext): NetworkInterface => {
  return {
    Ipv4Address: __expectString(output.Ipv4Address),
    Ipv6Address: __expectString(output.Ipv6Address),
    MacAddress: __expectString(output.MacAddress),
  } as any;
};

const deserializeAws_json1_1NFSFileShareDefaults = (output: any, context: __SerdeContext): NFSFileShareDefaults => {
  return {
    DirectoryMode: __expectString(output.DirectoryMode),
    FileMode: __expectString(output.FileMode),
    GroupId: __expectLong(output.GroupId),
    OwnerId: __expectLong(output.OwnerId),
  } as any;
};

const deserializeAws_json1_1NFSFileShareInfo = (output: any, context: __SerdeContext): NFSFileShareInfo => {
  return {
    BucketRegion: __expectString(output.BucketRegion),
    CacheAttributes:
      output.CacheAttributes !== undefined && output.CacheAttributes !== null
        ? deserializeAws_json1_1CacheAttributes(output.CacheAttributes, context)
        : undefined,
    ClientList:
      output.ClientList !== undefined && output.ClientList !== null
        ? deserializeAws_json1_1FileShareClientList(output.ClientList, context)
        : undefined,
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
      output.NFSFileShareDefaults !== undefined && output.NFSFileShareDefaults !== null
        ? deserializeAws_json1_1NFSFileShareDefaults(output.NFSFileShareDefaults, context)
        : undefined,
    NotificationPolicy: __expectString(output.NotificationPolicy),
    ObjectACL: __expectString(output.ObjectACL),
    Path: __expectString(output.Path),
    ReadOnly: __expectBoolean(output.ReadOnly),
    RequesterPays: __expectBoolean(output.RequesterPays),
    Role: __expectString(output.Role),
    Squash: __expectString(output.Squash),
    Tags:
      output.Tags !== undefined && output.Tags !== null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
    VPCEndpointDNSName: __expectString(output.VPCEndpointDNSName),
  } as any;
};

const deserializeAws_json1_1NFSFileShareInfoList = (output: any, context: __SerdeContext): NFSFileShareInfo[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1NFSFileShareInfo(entry, context);
    });
};

const deserializeAws_json1_1NotifyWhenUploadedOutput = (
  output: any,
  context: __SerdeContext
): NotifyWhenUploadedOutput => {
  return {
    FileShareARN: __expectString(output.FileShareARN),
    NotificationId: __expectString(output.NotificationId),
  } as any;
};

const deserializeAws_json1_1PoolInfo = (output: any, context: __SerdeContext): PoolInfo => {
  return {
    PoolARN: __expectString(output.PoolARN),
    PoolName: __expectString(output.PoolName),
    PoolStatus: __expectString(output.PoolStatus),
    RetentionLockTimeInDays: __expectInt32(output.RetentionLockTimeInDays),
    RetentionLockType: __expectString(output.RetentionLockType),
    StorageClass: __expectString(output.StorageClass),
  } as any;
};

const deserializeAws_json1_1PoolInfos = (output: any, context: __SerdeContext): PoolInfo[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PoolInfo(entry, context);
    });
};

const deserializeAws_json1_1RefreshCacheOutput = (output: any, context: __SerdeContext): RefreshCacheOutput => {
  return {
    FileShareARN: __expectString(output.FileShareARN),
    NotificationId: __expectString(output.NotificationId),
  } as any;
};

const deserializeAws_json1_1RemoveTagsFromResourceOutput = (
  output: any,
  context: __SerdeContext
): RemoveTagsFromResourceOutput => {
  return {
    ResourceARN: __expectString(output.ResourceARN),
  } as any;
};

const deserializeAws_json1_1ResetCacheOutput = (output: any, context: __SerdeContext): ResetCacheOutput => {
  return {
    GatewayARN: __expectString(output.GatewayARN),
  } as any;
};

const deserializeAws_json1_1RetrieveTapeArchiveOutput = (
  output: any,
  context: __SerdeContext
): RetrieveTapeArchiveOutput => {
  return {
    TapeARN: __expectString(output.TapeARN),
  } as any;
};

const deserializeAws_json1_1RetrieveTapeRecoveryPointOutput = (
  output: any,
  context: __SerdeContext
): RetrieveTapeRecoveryPointOutput => {
  return {
    TapeARN: __expectString(output.TapeARN),
  } as any;
};

const deserializeAws_json1_1ServiceUnavailableError = (
  output: any,
  context: __SerdeContext
): ServiceUnavailableError => {
  return {
    error:
      output.error !== undefined && output.error !== null
        ? deserializeAws_json1_1StorageGatewayError(output.error, context)
        : undefined,
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1SetLocalConsolePasswordOutput = (
  output: any,
  context: __SerdeContext
): SetLocalConsolePasswordOutput => {
  return {
    GatewayARN: __expectString(output.GatewayARN),
  } as any;
};

const deserializeAws_json1_1SetSMBGuestPasswordOutput = (
  output: any,
  context: __SerdeContext
): SetSMBGuestPasswordOutput => {
  return {
    GatewayARN: __expectString(output.GatewayARN),
  } as any;
};

const deserializeAws_json1_1ShutdownGatewayOutput = (output: any, context: __SerdeContext): ShutdownGatewayOutput => {
  return {
    GatewayARN: __expectString(output.GatewayARN),
  } as any;
};

const deserializeAws_json1_1SMBFileShareInfo = (output: any, context: __SerdeContext): SMBFileShareInfo => {
  return {
    AccessBasedEnumeration: __expectBoolean(output.AccessBasedEnumeration),
    AdminUserList:
      output.AdminUserList !== undefined && output.AdminUserList !== null
        ? deserializeAws_json1_1UserList(output.AdminUserList, context)
        : undefined,
    AuditDestinationARN: __expectString(output.AuditDestinationARN),
    Authentication: __expectString(output.Authentication),
    BucketRegion: __expectString(output.BucketRegion),
    CacheAttributes:
      output.CacheAttributes !== undefined && output.CacheAttributes !== null
        ? deserializeAws_json1_1CacheAttributes(output.CacheAttributes, context)
        : undefined,
    CaseSensitivity: __expectString(output.CaseSensitivity),
    DefaultStorageClass: __expectString(output.DefaultStorageClass),
    FileShareARN: __expectString(output.FileShareARN),
    FileShareId: __expectString(output.FileShareId),
    FileShareName: __expectString(output.FileShareName),
    FileShareStatus: __expectString(output.FileShareStatus),
    GatewayARN: __expectString(output.GatewayARN),
    GuessMIMETypeEnabled: __expectBoolean(output.GuessMIMETypeEnabled),
    InvalidUserList:
      output.InvalidUserList !== undefined && output.InvalidUserList !== null
        ? deserializeAws_json1_1UserList(output.InvalidUserList, context)
        : undefined,
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
    Tags:
      output.Tags !== undefined && output.Tags !== null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
    VPCEndpointDNSName: __expectString(output.VPCEndpointDNSName),
    ValidUserList:
      output.ValidUserList !== undefined && output.ValidUserList !== null
        ? deserializeAws_json1_1UserList(output.ValidUserList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1SMBFileShareInfoList = (output: any, context: __SerdeContext): SMBFileShareInfo[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SMBFileShareInfo(entry, context);
    });
};

const deserializeAws_json1_1StartAvailabilityMonitorTestOutput = (
  output: any,
  context: __SerdeContext
): StartAvailabilityMonitorTestOutput => {
  return {
    GatewayARN: __expectString(output.GatewayARN),
  } as any;
};

const deserializeAws_json1_1StartGatewayOutput = (output: any, context: __SerdeContext): StartGatewayOutput => {
  return {
    GatewayARN: __expectString(output.GatewayARN),
  } as any;
};

const deserializeAws_json1_1StorageGatewayError = (output: any, context: __SerdeContext): StorageGatewayError => {
  return {
    errorCode: __expectString(output.errorCode),
    errorDetails:
      output.errorDetails !== undefined && output.errorDetails !== null
        ? deserializeAws_json1_1errorDetails(output.errorDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1StorediSCSIVolume = (output: any, context: __SerdeContext): StorediSCSIVolume => {
  return {
    CreatedDate:
      output.CreatedDate !== undefined && output.CreatedDate !== null
        ? new Date(Math.round(output.CreatedDate * 1000))
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
      output.VolumeiSCSIAttributes !== undefined && output.VolumeiSCSIAttributes !== null
        ? deserializeAws_json1_1VolumeiSCSIAttributes(output.VolumeiSCSIAttributes, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1StorediSCSIVolumes = (output: any, context: __SerdeContext): StorediSCSIVolume[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1StorediSCSIVolume(entry, context);
    });
};

const deserializeAws_json1_1SupportedGatewayCapacities = (
  output: any,
  context: __SerdeContext
): (GatewayCapacity | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1Tags = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Tag(entry, context);
    });
};

const deserializeAws_json1_1Tape = (output: any, context: __SerdeContext): Tape => {
  return {
    KMSKey: __expectString(output.KMSKey),
    PoolEntryDate:
      output.PoolEntryDate !== undefined && output.PoolEntryDate !== null
        ? new Date(Math.round(output.PoolEntryDate * 1000))
        : undefined,
    PoolId: __expectString(output.PoolId),
    Progress: __limitedParseDouble(output.Progress),
    RetentionStartDate:
      output.RetentionStartDate !== undefined && output.RetentionStartDate !== null
        ? new Date(Math.round(output.RetentionStartDate * 1000))
        : undefined,
    TapeARN: __expectString(output.TapeARN),
    TapeBarcode: __expectString(output.TapeBarcode),
    TapeCreatedDate:
      output.TapeCreatedDate !== undefined && output.TapeCreatedDate !== null
        ? new Date(Math.round(output.TapeCreatedDate * 1000))
        : undefined,
    TapeSizeInBytes: __expectLong(output.TapeSizeInBytes),
    TapeStatus: __expectString(output.TapeStatus),
    TapeUsedInBytes: __expectLong(output.TapeUsedInBytes),
    VTLDevice: __expectString(output.VTLDevice),
    Worm: __expectBoolean(output.Worm),
  } as any;
};

const deserializeAws_json1_1TapeArchive = (output: any, context: __SerdeContext): TapeArchive => {
  return {
    CompletionTime:
      output.CompletionTime !== undefined && output.CompletionTime !== null
        ? new Date(Math.round(output.CompletionTime * 1000))
        : undefined,
    KMSKey: __expectString(output.KMSKey),
    PoolEntryDate:
      output.PoolEntryDate !== undefined && output.PoolEntryDate !== null
        ? new Date(Math.round(output.PoolEntryDate * 1000))
        : undefined,
    PoolId: __expectString(output.PoolId),
    RetentionStartDate:
      output.RetentionStartDate !== undefined && output.RetentionStartDate !== null
        ? new Date(Math.round(output.RetentionStartDate * 1000))
        : undefined,
    RetrievedTo: __expectString(output.RetrievedTo),
    TapeARN: __expectString(output.TapeARN),
    TapeBarcode: __expectString(output.TapeBarcode),
    TapeCreatedDate:
      output.TapeCreatedDate !== undefined && output.TapeCreatedDate !== null
        ? new Date(Math.round(output.TapeCreatedDate * 1000))
        : undefined,
    TapeSizeInBytes: __expectLong(output.TapeSizeInBytes),
    TapeStatus: __expectString(output.TapeStatus),
    TapeUsedInBytes: __expectLong(output.TapeUsedInBytes),
    Worm: __expectBoolean(output.Worm),
  } as any;
};

const deserializeAws_json1_1TapeArchives = (output: any, context: __SerdeContext): TapeArchive[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TapeArchive(entry, context);
    });
};

const deserializeAws_json1_1TapeARNs = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1TapeInfo = (output: any, context: __SerdeContext): TapeInfo => {
  return {
    GatewayARN: __expectString(output.GatewayARN),
    PoolEntryDate:
      output.PoolEntryDate !== undefined && output.PoolEntryDate !== null
        ? new Date(Math.round(output.PoolEntryDate * 1000))
        : undefined,
    PoolId: __expectString(output.PoolId),
    RetentionStartDate:
      output.RetentionStartDate !== undefined && output.RetentionStartDate !== null
        ? new Date(Math.round(output.RetentionStartDate * 1000))
        : undefined,
    TapeARN: __expectString(output.TapeARN),
    TapeBarcode: __expectString(output.TapeBarcode),
    TapeSizeInBytes: __expectLong(output.TapeSizeInBytes),
    TapeStatus: __expectString(output.TapeStatus),
  } as any;
};

const deserializeAws_json1_1TapeInfos = (output: any, context: __SerdeContext): TapeInfo[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TapeInfo(entry, context);
    });
};

const deserializeAws_json1_1TapeRecoveryPointInfo = (output: any, context: __SerdeContext): TapeRecoveryPointInfo => {
  return {
    TapeARN: __expectString(output.TapeARN),
    TapeRecoveryPointTime:
      output.TapeRecoveryPointTime !== undefined && output.TapeRecoveryPointTime !== null
        ? new Date(Math.round(output.TapeRecoveryPointTime * 1000))
        : undefined,
    TapeSizeInBytes: __expectLong(output.TapeSizeInBytes),
    TapeStatus: __expectString(output.TapeStatus),
  } as any;
};

const deserializeAws_json1_1TapeRecoveryPointInfos = (
  output: any,
  context: __SerdeContext
): TapeRecoveryPointInfo[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TapeRecoveryPointInfo(entry, context);
    });
};

const deserializeAws_json1_1Tapes = (output: any, context: __SerdeContext): Tape[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Tape(entry, context);
    });
};

const deserializeAws_json1_1UpdateAutomaticTapeCreationPolicyOutput = (
  output: any,
  context: __SerdeContext
): UpdateAutomaticTapeCreationPolicyOutput => {
  return {
    GatewayARN: __expectString(output.GatewayARN),
  } as any;
};

const deserializeAws_json1_1UpdateBandwidthRateLimitOutput = (
  output: any,
  context: __SerdeContext
): UpdateBandwidthRateLimitOutput => {
  return {
    GatewayARN: __expectString(output.GatewayARN),
  } as any;
};

const deserializeAws_json1_1UpdateBandwidthRateLimitScheduleOutput = (
  output: any,
  context: __SerdeContext
): UpdateBandwidthRateLimitScheduleOutput => {
  return {
    GatewayARN: __expectString(output.GatewayARN),
  } as any;
};

const deserializeAws_json1_1UpdateChapCredentialsOutput = (
  output: any,
  context: __SerdeContext
): UpdateChapCredentialsOutput => {
  return {
    InitiatorName: __expectString(output.InitiatorName),
    TargetARN: __expectString(output.TargetARN),
  } as any;
};

const deserializeAws_json1_1UpdateFileSystemAssociationOutput = (
  output: any,
  context: __SerdeContext
): UpdateFileSystemAssociationOutput => {
  return {
    FileSystemAssociationARN: __expectString(output.FileSystemAssociationARN),
  } as any;
};

const deserializeAws_json1_1UpdateGatewayInformationOutput = (
  output: any,
  context: __SerdeContext
): UpdateGatewayInformationOutput => {
  return {
    GatewayARN: __expectString(output.GatewayARN),
    GatewayName: __expectString(output.GatewayName),
  } as any;
};

const deserializeAws_json1_1UpdateGatewaySoftwareNowOutput = (
  output: any,
  context: __SerdeContext
): UpdateGatewaySoftwareNowOutput => {
  return {
    GatewayARN: __expectString(output.GatewayARN),
  } as any;
};

const deserializeAws_json1_1UpdateMaintenanceStartTimeOutput = (
  output: any,
  context: __SerdeContext
): UpdateMaintenanceStartTimeOutput => {
  return {
    GatewayARN: __expectString(output.GatewayARN),
  } as any;
};

const deserializeAws_json1_1UpdateNFSFileShareOutput = (
  output: any,
  context: __SerdeContext
): UpdateNFSFileShareOutput => {
  return {
    FileShareARN: __expectString(output.FileShareARN),
  } as any;
};

const deserializeAws_json1_1UpdateSMBFileShareOutput = (
  output: any,
  context: __SerdeContext
): UpdateSMBFileShareOutput => {
  return {
    FileShareARN: __expectString(output.FileShareARN),
  } as any;
};

const deserializeAws_json1_1UpdateSMBFileShareVisibilityOutput = (
  output: any,
  context: __SerdeContext
): UpdateSMBFileShareVisibilityOutput => {
  return {
    GatewayARN: __expectString(output.GatewayARN),
  } as any;
};

const deserializeAws_json1_1UpdateSMBSecurityStrategyOutput = (
  output: any,
  context: __SerdeContext
): UpdateSMBSecurityStrategyOutput => {
  return {
    GatewayARN: __expectString(output.GatewayARN),
  } as any;
};

const deserializeAws_json1_1UpdateSnapshotScheduleOutput = (
  output: any,
  context: __SerdeContext
): UpdateSnapshotScheduleOutput => {
  return {
    VolumeARN: __expectString(output.VolumeARN),
  } as any;
};

const deserializeAws_json1_1UpdateVTLDeviceTypeOutput = (
  output: any,
  context: __SerdeContext
): UpdateVTLDeviceTypeOutput => {
  return {
    VTLDeviceARN: __expectString(output.VTLDeviceARN),
  } as any;
};

const deserializeAws_json1_1UserList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1VolumeInfo = (output: any, context: __SerdeContext): VolumeInfo => {
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

const deserializeAws_json1_1VolumeInfos = (output: any, context: __SerdeContext): VolumeInfo[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1VolumeInfo(entry, context);
    });
};

const deserializeAws_json1_1VolumeiSCSIAttributes = (output: any, context: __SerdeContext): VolumeiSCSIAttributes => {
  return {
    ChapEnabled: __expectBoolean(output.ChapEnabled),
    LunNumber: __expectInt32(output.LunNumber),
    NetworkInterfaceId: __expectString(output.NetworkInterfaceId),
    NetworkInterfacePort: __expectInt32(output.NetworkInterfacePort),
    TargetARN: __expectString(output.TargetARN),
  } as any;
};

const deserializeAws_json1_1VolumeRecoveryPointInfo = (
  output: any,
  context: __SerdeContext
): VolumeRecoveryPointInfo => {
  return {
    VolumeARN: __expectString(output.VolumeARN),
    VolumeRecoveryPointTime: __expectString(output.VolumeRecoveryPointTime),
    VolumeSizeInBytes: __expectLong(output.VolumeSizeInBytes),
    VolumeUsageInBytes: __expectLong(output.VolumeUsageInBytes),
  } as any;
};

const deserializeAws_json1_1VolumeRecoveryPointInfos = (
  output: any,
  context: __SerdeContext
): VolumeRecoveryPointInfo[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1VolumeRecoveryPointInfo(entry, context);
    });
};

const deserializeAws_json1_1VTLDevice = (output: any, context: __SerdeContext): VTLDevice => {
  return {
    DeviceiSCSIAttributes:
      output.DeviceiSCSIAttributes !== undefined && output.DeviceiSCSIAttributes !== null
        ? deserializeAws_json1_1DeviceiSCSIAttributes(output.DeviceiSCSIAttributes, context)
        : undefined,
    VTLDeviceARN: __expectString(output.VTLDeviceARN),
    VTLDeviceProductIdentifier: __expectString(output.VTLDeviceProductIdentifier),
    VTLDeviceType: __expectString(output.VTLDeviceType),
    VTLDeviceVendor: __expectString(output.VTLDeviceVendor),
  } as any;
};

const deserializeAws_json1_1VTLDevices = (output: any, context: __SerdeContext): VTLDevice[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1VTLDevice(entry, context);
    });
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
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

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
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

  return "";
};
