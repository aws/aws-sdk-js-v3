import {
  ActivateGatewayCommandInput,
  ActivateGatewayCommandOutput
} from "../commands/ActivateGatewayCommand";
import {
  AddCacheCommandInput,
  AddCacheCommandOutput
} from "../commands/AddCacheCommand";
import {
  AddTagsToResourceCommandInput,
  AddTagsToResourceCommandOutput
} from "../commands/AddTagsToResourceCommand";
import {
  AddUploadBufferCommandInput,
  AddUploadBufferCommandOutput
} from "../commands/AddUploadBufferCommand";
import {
  AddWorkingStorageCommandInput,
  AddWorkingStorageCommandOutput
} from "../commands/AddWorkingStorageCommand";
import {
  AssignTapePoolCommandInput,
  AssignTapePoolCommandOutput
} from "../commands/AssignTapePoolCommand";
import {
  AttachVolumeCommandInput,
  AttachVolumeCommandOutput
} from "../commands/AttachVolumeCommand";
import {
  CancelArchivalCommandInput,
  CancelArchivalCommandOutput
} from "../commands/CancelArchivalCommand";
import {
  CancelRetrievalCommandInput,
  CancelRetrievalCommandOutput
} from "../commands/CancelRetrievalCommand";
import {
  CreateCachediSCSIVolumeCommandInput,
  CreateCachediSCSIVolumeCommandOutput
} from "../commands/CreateCachediSCSIVolumeCommand";
import {
  CreateNFSFileShareCommandInput,
  CreateNFSFileShareCommandOutput
} from "../commands/CreateNFSFileShareCommand";
import {
  CreateSMBFileShareCommandInput,
  CreateSMBFileShareCommandOutput
} from "../commands/CreateSMBFileShareCommand";
import {
  CreateSnapshotCommandInput,
  CreateSnapshotCommandOutput
} from "../commands/CreateSnapshotCommand";
import {
  CreateSnapshotFromVolumeRecoveryPointCommandInput,
  CreateSnapshotFromVolumeRecoveryPointCommandOutput
} from "../commands/CreateSnapshotFromVolumeRecoveryPointCommand";
import {
  CreateStorediSCSIVolumeCommandInput,
  CreateStorediSCSIVolumeCommandOutput
} from "../commands/CreateStorediSCSIVolumeCommand";
import {
  CreateTapeWithBarcodeCommandInput,
  CreateTapeWithBarcodeCommandOutput
} from "../commands/CreateTapeWithBarcodeCommand";
import {
  CreateTapesCommandInput,
  CreateTapesCommandOutput
} from "../commands/CreateTapesCommand";
import {
  DeleteBandwidthRateLimitCommandInput,
  DeleteBandwidthRateLimitCommandOutput
} from "../commands/DeleteBandwidthRateLimitCommand";
import {
  DeleteChapCredentialsCommandInput,
  DeleteChapCredentialsCommandOutput
} from "../commands/DeleteChapCredentialsCommand";
import {
  DeleteFileShareCommandInput,
  DeleteFileShareCommandOutput
} from "../commands/DeleteFileShareCommand";
import {
  DeleteGatewayCommandInput,
  DeleteGatewayCommandOutput
} from "../commands/DeleteGatewayCommand";
import {
  DeleteSnapshotScheduleCommandInput,
  DeleteSnapshotScheduleCommandOutput
} from "../commands/DeleteSnapshotScheduleCommand";
import {
  DeleteTapeArchiveCommandInput,
  DeleteTapeArchiveCommandOutput
} from "../commands/DeleteTapeArchiveCommand";
import {
  DeleteTapeCommandInput,
  DeleteTapeCommandOutput
} from "../commands/DeleteTapeCommand";
import {
  DeleteVolumeCommandInput,
  DeleteVolumeCommandOutput
} from "../commands/DeleteVolumeCommand";
import {
  DescribeAvailabilityMonitorTestCommandInput,
  DescribeAvailabilityMonitorTestCommandOutput
} from "../commands/DescribeAvailabilityMonitorTestCommand";
import {
  DescribeBandwidthRateLimitCommandInput,
  DescribeBandwidthRateLimitCommandOutput
} from "../commands/DescribeBandwidthRateLimitCommand";
import {
  DescribeCacheCommandInput,
  DescribeCacheCommandOutput
} from "../commands/DescribeCacheCommand";
import {
  DescribeCachediSCSIVolumesCommandInput,
  DescribeCachediSCSIVolumesCommandOutput
} from "../commands/DescribeCachediSCSIVolumesCommand";
import {
  DescribeChapCredentialsCommandInput,
  DescribeChapCredentialsCommandOutput
} from "../commands/DescribeChapCredentialsCommand";
import {
  DescribeGatewayInformationCommandInput,
  DescribeGatewayInformationCommandOutput
} from "../commands/DescribeGatewayInformationCommand";
import {
  DescribeMaintenanceStartTimeCommandInput,
  DescribeMaintenanceStartTimeCommandOutput
} from "../commands/DescribeMaintenanceStartTimeCommand";
import {
  DescribeNFSFileSharesCommandInput,
  DescribeNFSFileSharesCommandOutput
} from "../commands/DescribeNFSFileSharesCommand";
import {
  DescribeSMBFileSharesCommandInput,
  DescribeSMBFileSharesCommandOutput
} from "../commands/DescribeSMBFileSharesCommand";
import {
  DescribeSMBSettingsCommandInput,
  DescribeSMBSettingsCommandOutput
} from "../commands/DescribeSMBSettingsCommand";
import {
  DescribeSnapshotScheduleCommandInput,
  DescribeSnapshotScheduleCommandOutput
} from "../commands/DescribeSnapshotScheduleCommand";
import {
  DescribeStorediSCSIVolumesCommandInput,
  DescribeStorediSCSIVolumesCommandOutput
} from "../commands/DescribeStorediSCSIVolumesCommand";
import {
  DescribeTapeArchivesCommandInput,
  DescribeTapeArchivesCommandOutput
} from "../commands/DescribeTapeArchivesCommand";
import {
  DescribeTapeRecoveryPointsCommandInput,
  DescribeTapeRecoveryPointsCommandOutput
} from "../commands/DescribeTapeRecoveryPointsCommand";
import {
  DescribeTapesCommandInput,
  DescribeTapesCommandOutput
} from "../commands/DescribeTapesCommand";
import {
  DescribeUploadBufferCommandInput,
  DescribeUploadBufferCommandOutput
} from "../commands/DescribeUploadBufferCommand";
import {
  DescribeVTLDevicesCommandInput,
  DescribeVTLDevicesCommandOutput
} from "../commands/DescribeVTLDevicesCommand";
import {
  DescribeWorkingStorageCommandInput,
  DescribeWorkingStorageCommandOutput
} from "../commands/DescribeWorkingStorageCommand";
import {
  DetachVolumeCommandInput,
  DetachVolumeCommandOutput
} from "../commands/DetachVolumeCommand";
import {
  DisableGatewayCommandInput,
  DisableGatewayCommandOutput
} from "../commands/DisableGatewayCommand";
import {
  JoinDomainCommandInput,
  JoinDomainCommandOutput
} from "../commands/JoinDomainCommand";
import {
  ListFileSharesCommandInput,
  ListFileSharesCommandOutput
} from "../commands/ListFileSharesCommand";
import {
  ListGatewaysCommandInput,
  ListGatewaysCommandOutput
} from "../commands/ListGatewaysCommand";
import {
  ListLocalDisksCommandInput,
  ListLocalDisksCommandOutput
} from "../commands/ListLocalDisksCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  ListTapesCommandInput,
  ListTapesCommandOutput
} from "../commands/ListTapesCommand";
import {
  ListVolumeInitiatorsCommandInput,
  ListVolumeInitiatorsCommandOutput
} from "../commands/ListVolumeInitiatorsCommand";
import {
  ListVolumeRecoveryPointsCommandInput,
  ListVolumeRecoveryPointsCommandOutput
} from "../commands/ListVolumeRecoveryPointsCommand";
import {
  ListVolumesCommandInput,
  ListVolumesCommandOutput
} from "../commands/ListVolumesCommand";
import {
  NotifyWhenUploadedCommandInput,
  NotifyWhenUploadedCommandOutput
} from "../commands/NotifyWhenUploadedCommand";
import {
  RefreshCacheCommandInput,
  RefreshCacheCommandOutput
} from "../commands/RefreshCacheCommand";
import {
  RemoveTagsFromResourceCommandInput,
  RemoveTagsFromResourceCommandOutput
} from "../commands/RemoveTagsFromResourceCommand";
import {
  ResetCacheCommandInput,
  ResetCacheCommandOutput
} from "../commands/ResetCacheCommand";
import {
  RetrieveTapeArchiveCommandInput,
  RetrieveTapeArchiveCommandOutput
} from "../commands/RetrieveTapeArchiveCommand";
import {
  RetrieveTapeRecoveryPointCommandInput,
  RetrieveTapeRecoveryPointCommandOutput
} from "../commands/RetrieveTapeRecoveryPointCommand";
import {
  SetLocalConsolePasswordCommandInput,
  SetLocalConsolePasswordCommandOutput
} from "../commands/SetLocalConsolePasswordCommand";
import {
  SetSMBGuestPasswordCommandInput,
  SetSMBGuestPasswordCommandOutput
} from "../commands/SetSMBGuestPasswordCommand";
import {
  ShutdownGatewayCommandInput,
  ShutdownGatewayCommandOutput
} from "../commands/ShutdownGatewayCommand";
import {
  StartAvailabilityMonitorTestCommandInput,
  StartAvailabilityMonitorTestCommandOutput
} from "../commands/StartAvailabilityMonitorTestCommand";
import {
  StartGatewayCommandInput,
  StartGatewayCommandOutput
} from "../commands/StartGatewayCommand";
import {
  UpdateBandwidthRateLimitCommandInput,
  UpdateBandwidthRateLimitCommandOutput
} from "../commands/UpdateBandwidthRateLimitCommand";
import {
  UpdateChapCredentialsCommandInput,
  UpdateChapCredentialsCommandOutput
} from "../commands/UpdateChapCredentialsCommand";
import {
  UpdateGatewayInformationCommandInput,
  UpdateGatewayInformationCommandOutput
} from "../commands/UpdateGatewayInformationCommand";
import {
  UpdateGatewaySoftwareNowCommandInput,
  UpdateGatewaySoftwareNowCommandOutput
} from "../commands/UpdateGatewaySoftwareNowCommand";
import {
  UpdateMaintenanceStartTimeCommandInput,
  UpdateMaintenanceStartTimeCommandOutput
} from "../commands/UpdateMaintenanceStartTimeCommand";
import {
  UpdateNFSFileShareCommandInput,
  UpdateNFSFileShareCommandOutput
} from "../commands/UpdateNFSFileShareCommand";
import {
  UpdateSMBFileShareCommandInput,
  UpdateSMBFileShareCommandOutput
} from "../commands/UpdateSMBFileShareCommand";
import {
  UpdateSMBSecurityStrategyCommandInput,
  UpdateSMBSecurityStrategyCommandOutput
} from "../commands/UpdateSMBSecurityStrategyCommand";
import {
  UpdateSnapshotScheduleCommandInput,
  UpdateSnapshotScheduleCommandOutput
} from "../commands/UpdateSnapshotScheduleCommand";
import {
  UpdateVTLDeviceTypeCommandInput,
  UpdateVTLDeviceTypeCommandOutput
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
  AttachVolumeInput,
  AttachVolumeOutput,
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
  CreateTapeWithBarcodeInput,
  CreateTapeWithBarcodeOutput,
  CreateTapesInput,
  CreateTapesOutput,
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
  DeleteVolumeInput,
  DeleteVolumeOutput,
  DescribeAvailabilityMonitorTestInput,
  DescribeAvailabilityMonitorTestOutput,
  DescribeBandwidthRateLimitInput,
  DescribeBandwidthRateLimitOutput,
  DescribeCacheInput,
  DescribeCacheOutput,
  DescribeCachediSCSIVolumesInput,
  DescribeCachediSCSIVolumesOutput,
  DescribeChapCredentialsInput,
  DescribeChapCredentialsOutput,
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
  Disk,
  FileShareInfo,
  GatewayInfo,
  InternalServerError,
  InvalidGatewayRequestException,
  JoinDomainInput,
  JoinDomainOutput,
  ListFileSharesInput,
  ListFileSharesOutput,
  ListGatewaysInput,
  ListGatewaysOutput,
  ListLocalDisksInput,
  ListLocalDisksOutput,
  ListTagsForResourceInput,
  ListTagsForResourceOutput,
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
  UpdateBandwidthRateLimitInput,
  UpdateBandwidthRateLimitOutput,
  UpdateChapCredentialsInput,
  UpdateChapCredentialsOutput,
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
  UpdateSMBSecurityStrategyInput,
  UpdateSMBSecurityStrategyOutput,
  UpdateSnapshotScheduleInput,
  UpdateSnapshotScheduleOutput,
  UpdateVTLDeviceTypeInput,
  UpdateVTLDeviceTypeOutput,
  VTLDevice,
  VolumeInfo,
  VolumeRecoveryPointInfo,
  VolumeiSCSIAttributes
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export const serializeAws_json1_1ActivateGatewayCommand = async (
  input: ActivateGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.ActivateGateway"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ActivateGatewayInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AddCacheCommand = async (
  input: AddCacheCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.AddCache"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.AddTagsToResource"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AddTagsToResourceInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AddUploadBufferCommand = async (
  input: AddUploadBufferCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.AddUploadBuffer"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AddUploadBufferInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AddWorkingStorageCommand = async (
  input: AddWorkingStorageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.AddWorkingStorage"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AddWorkingStorageInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AssignTapePoolCommand = async (
  input: AssignTapePoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.AssignTapePool"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AssignTapePoolInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AttachVolumeCommand = async (
  input: AttachVolumeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.AttachVolume"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.CancelArchival"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CancelArchivalInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CancelRetrievalCommand = async (
  input: CancelRetrievalCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.CancelRetrieval"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CancelRetrievalInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateCachediSCSIVolumeCommand = async (
  input: CreateCachediSCSIVolumeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.CreateCachediSCSIVolume"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateCachediSCSIVolumeInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateNFSFileShareCommand = async (
  input: CreateNFSFileShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.CreateNFSFileShare"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateNFSFileShareInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateSMBFileShareCommand = async (
  input: CreateSMBFileShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.CreateSMBFileShare"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateSMBFileShareInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateSnapshotCommand = async (
  input: CreateSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.CreateSnapshot"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateSnapshotInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointCommand = async (
  input: CreateSnapshotFromVolumeRecoveryPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target":
      "StorageGateway_20130630.CreateSnapshotFromVolumeRecoveryPoint"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointInput(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateStorediSCSIVolumeCommand = async (
  input: CreateStorediSCSIVolumeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.CreateStorediSCSIVolume"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateStorediSCSIVolumeInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateTapesCommand = async (
  input: CreateTapesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.CreateTapes"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.CreateTapeWithBarcode"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateTapeWithBarcodeInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteBandwidthRateLimitCommand = async (
  input: DeleteBandwidthRateLimitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.DeleteBandwidthRateLimit"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteBandwidthRateLimitInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteChapCredentialsCommand = async (
  input: DeleteChapCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.DeleteChapCredentials"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteChapCredentialsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteFileShareCommand = async (
  input: DeleteFileShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.DeleteFileShare"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteFileShareInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteGatewayCommand = async (
  input: DeleteGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.DeleteGateway"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.DeleteSnapshotSchedule"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteSnapshotScheduleInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteTapeCommand = async (
  input: DeleteTapeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.DeleteTape"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.DeleteTapeArchive"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteTapeArchiveInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteVolumeCommand = async (
  input: DeleteVolumeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.DeleteVolume"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.DescribeAvailabilityMonitorTest"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeAvailabilityMonitorTestInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeBandwidthRateLimitCommand = async (
  input: DescribeBandwidthRateLimitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.DescribeBandwidthRateLimit"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeBandwidthRateLimitInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeCacheCommand = async (
  input: DescribeCacheCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.DescribeCache"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.DescribeCachediSCSIVolumes"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeCachediSCSIVolumesInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeChapCredentialsCommand = async (
  input: DescribeChapCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.DescribeChapCredentials"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeChapCredentialsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeGatewayInformationCommand = async (
  input: DescribeGatewayInformationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.DescribeGatewayInformation"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeGatewayInformationInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeMaintenanceStartTimeCommand = async (
  input: DescribeMaintenanceStartTimeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.DescribeMaintenanceStartTime"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeMaintenanceStartTimeInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeNFSFileSharesCommand = async (
  input: DescribeNFSFileSharesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.DescribeNFSFileShares"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeNFSFileSharesInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeSMBFileSharesCommand = async (
  input: DescribeSMBFileSharesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.DescribeSMBFileShares"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeSMBFileSharesInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeSMBSettingsCommand = async (
  input: DescribeSMBSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.DescribeSMBSettings"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeSMBSettingsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeSnapshotScheduleCommand = async (
  input: DescribeSnapshotScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.DescribeSnapshotSchedule"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeSnapshotScheduleInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeStorediSCSIVolumesCommand = async (
  input: DescribeStorediSCSIVolumesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.DescribeStorediSCSIVolumes"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeStorediSCSIVolumesInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeTapeArchivesCommand = async (
  input: DescribeTapeArchivesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.DescribeTapeArchives"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeTapeArchivesInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeTapeRecoveryPointsCommand = async (
  input: DescribeTapeRecoveryPointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.DescribeTapeRecoveryPoints"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeTapeRecoveryPointsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeTapesCommand = async (
  input: DescribeTapesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.DescribeTapes"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.DescribeUploadBuffer"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeUploadBufferInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeVTLDevicesCommand = async (
  input: DescribeVTLDevicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.DescribeVTLDevices"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeVTLDevicesInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeWorkingStorageCommand = async (
  input: DescribeWorkingStorageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.DescribeWorkingStorage"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeWorkingStorageInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DetachVolumeCommand = async (
  input: DetachVolumeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.DetachVolume"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.DisableGateway"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DisableGatewayInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1JoinDomainCommand = async (
  input: JoinDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.JoinDomain"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1JoinDomainInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListFileSharesCommand = async (
  input: ListFileSharesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.ListFileShares"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListFileSharesInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListGatewaysCommand = async (
  input: ListGatewaysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.ListGateways"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.ListLocalDisks"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListLocalDisksInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.ListTagsForResource"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListTagsForResourceInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTapesCommand = async (
  input: ListTapesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.ListTapes"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.ListVolumeInitiators"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListVolumeInitiatorsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListVolumeRecoveryPointsCommand = async (
  input: ListVolumeRecoveryPointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.ListVolumeRecoveryPoints"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListVolumeRecoveryPointsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListVolumesCommand = async (
  input: ListVolumesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.ListVolumes"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.NotifyWhenUploaded"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1NotifyWhenUploadedInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RefreshCacheCommand = async (
  input: RefreshCacheCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.RefreshCache"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.RemoveTagsFromResource"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RemoveTagsFromResourceInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ResetCacheCommand = async (
  input: ResetCacheCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.ResetCache"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.RetrieveTapeArchive"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RetrieveTapeArchiveInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RetrieveTapeRecoveryPointCommand = async (
  input: RetrieveTapeRecoveryPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.RetrieveTapeRecoveryPoint"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RetrieveTapeRecoveryPointInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SetLocalConsolePasswordCommand = async (
  input: SetLocalConsolePasswordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.SetLocalConsolePassword"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1SetLocalConsolePasswordInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SetSMBGuestPasswordCommand = async (
  input: SetSMBGuestPasswordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.SetSMBGuestPassword"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1SetSMBGuestPasswordInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ShutdownGatewayCommand = async (
  input: ShutdownGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.ShutdownGateway"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ShutdownGatewayInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartAvailabilityMonitorTestCommand = async (
  input: StartAvailabilityMonitorTestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.StartAvailabilityMonitorTest"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StartAvailabilityMonitorTestInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartGatewayCommand = async (
  input: StartGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.StartGateway"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartGatewayInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateBandwidthRateLimitCommand = async (
  input: UpdateBandwidthRateLimitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.UpdateBandwidthRateLimit"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateBandwidthRateLimitInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateChapCredentialsCommand = async (
  input: UpdateChapCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.UpdateChapCredentials"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateChapCredentialsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateGatewayInformationCommand = async (
  input: UpdateGatewayInformationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.UpdateGatewayInformation"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateGatewayInformationInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateGatewaySoftwareNowCommand = async (
  input: UpdateGatewaySoftwareNowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.UpdateGatewaySoftwareNow"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateGatewaySoftwareNowInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateMaintenanceStartTimeCommand = async (
  input: UpdateMaintenanceStartTimeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.UpdateMaintenanceStartTime"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateMaintenanceStartTimeInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateNFSFileShareCommand = async (
  input: UpdateNFSFileShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.UpdateNFSFileShare"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateNFSFileShareInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateSMBFileShareCommand = async (
  input: UpdateSMBFileShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.UpdateSMBFileShare"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateSMBFileShareInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateSMBSecurityStrategyCommand = async (
  input: UpdateSMBSecurityStrategyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.UpdateSMBSecurityStrategy"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateSMBSecurityStrategyInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateSnapshotScheduleCommand = async (
  input: UpdateSnapshotScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.UpdateSnapshotSchedule"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateSnapshotScheduleInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateVTLDeviceTypeCommand = async (
  input: UpdateVTLDeviceTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "StorageGateway_20130630.UpdateVTLDeviceType"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateVTLDeviceTypeInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1ActivateGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ActivateGatewayCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ActivateGatewayCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ActivateGatewayOutput(data, context);
  const response: ActivateGatewayCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ActivateGatewayOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ActivateGatewayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ActivateGatewayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AddCacheCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AddCacheOutput(data, context);
  const response: AddCacheCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AddCacheOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AddCacheCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddCacheCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AddTagsToResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AddTagsToResourceOutput(data, context);
  const response: AddTagsToResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AddTagsToResourceOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AddTagsToResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AddUploadBufferCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AddUploadBufferOutput(data, context);
  const response: AddUploadBufferCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AddUploadBufferOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AddUploadBufferCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddUploadBufferCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AddWorkingStorageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AddWorkingStorageOutput(data, context);
  const response: AddWorkingStorageCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AddWorkingStorageOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AddWorkingStorageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddWorkingStorageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AssignTapePoolCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AssignTapePoolOutput(data, context);
  const response: AssignTapePoolCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AssignTapePoolOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AssignTapePoolCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssignTapePoolCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AttachVolumeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AttachVolumeOutput(data, context);
  const response: AttachVolumeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AttachVolumeOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AttachVolumeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachVolumeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CancelArchivalCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CancelArchivalOutput(data, context);
  const response: CancelArchivalCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CancelArchivalOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CancelArchivalCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelArchivalCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CancelRetrievalCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CancelRetrievalOutput(data, context);
  const response: CancelRetrievalCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CancelRetrievalOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CancelRetrievalCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelRetrievalCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateCachediSCSIVolumeCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateCachediSCSIVolumeOutput(data, context);
  const response: CreateCachediSCSIVolumeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateCachediSCSIVolumeOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateCachediSCSIVolumeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCachediSCSIVolumeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateNFSFileShareCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateNFSFileShareOutput(data, context);
  const response: CreateNFSFileShareCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateNFSFileShareOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateNFSFileShareCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNFSFileShareCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateSMBFileShareCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateSMBFileShareOutput(data, context);
  const response: CreateSMBFileShareCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateSMBFileShareOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateSMBFileShareCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSMBFileShareCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateSnapshotOutput(data, context);
  const response: CreateSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateSnapshotOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableError":
    case "com.amazonaws.storagegateway#ServiceUnavailableError":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointOutput(
    data,
    context
  );
  const response: CreateSnapshotFromVolumeRecoveryPointCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateSnapshotFromVolumeRecoveryPointOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSnapshotFromVolumeRecoveryPointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableError":
    case "com.amazonaws.storagegateway#ServiceUnavailableError":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateStorediSCSIVolumeCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateStorediSCSIVolumeOutput(data, context);
  const response: CreateStorediSCSIVolumeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateStorediSCSIVolumeOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateStorediSCSIVolumeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStorediSCSIVolumeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateTapesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateTapesOutput(data, context);
  const response: CreateTapesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateTapesOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateTapesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTapesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateTapeWithBarcodeCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateTapeWithBarcodeOutput(data, context);
  const response: CreateTapeWithBarcodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateTapeWithBarcodeOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateTapeWithBarcodeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTapeWithBarcodeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteBandwidthRateLimitCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteBandwidthRateLimitOutput(
    data,
    context
  );
  const response: DeleteBandwidthRateLimitCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteBandwidthRateLimitOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteBandwidthRateLimitCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBandwidthRateLimitCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteChapCredentialsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteChapCredentialsOutput(data, context);
  const response: DeleteChapCredentialsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteChapCredentialsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteChapCredentialsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChapCredentialsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteFileShareCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteFileShareOutput(data, context);
  const response: DeleteFileShareCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteFileShareOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteFileShareCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFileShareCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteGatewayCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteGatewayOutput(data, context);
  const response: DeleteGatewayCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteGatewayOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteGatewayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGatewayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteSnapshotScheduleCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteSnapshotScheduleOutput(data, context);
  const response: DeleteSnapshotScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteSnapshotScheduleOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteSnapshotScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSnapshotScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteTapeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteTapeOutput(data, context);
  const response: DeleteTapeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteTapeOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteTapeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTapeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteTapeArchiveCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteTapeArchiveOutput(data, context);
  const response: DeleteTapeArchiveCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteTapeArchiveOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteTapeArchiveCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTapeArchiveCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteVolumeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteVolumeOutput(data, context);
  const response: DeleteVolumeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteVolumeOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteVolumeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVolumeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeAvailabilityMonitorTestCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAvailabilityMonitorTestOutput(
    data,
    context
  );
  const response: DescribeAvailabilityMonitorTestCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeAvailabilityMonitorTestOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeAvailabilityMonitorTestCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAvailabilityMonitorTestCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeBandwidthRateLimitCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeBandwidthRateLimitOutput(
    data,
    context
  );
  const response: DescribeBandwidthRateLimitCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeBandwidthRateLimitOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeBandwidthRateLimitCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBandwidthRateLimitCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeCacheCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeCacheOutput(data, context);
  const response: DescribeCacheCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeCacheOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeCacheCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCacheCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeCachediSCSIVolumesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeCachediSCSIVolumesOutput(
    data,
    context
  );
  const response: DescribeCachediSCSIVolumesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeCachediSCSIVolumesOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeCachediSCSIVolumesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCachediSCSIVolumesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeChapCredentialsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeChapCredentialsOutput(data, context);
  const response: DescribeChapCredentialsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeChapCredentialsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeChapCredentialsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChapCredentialsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeGatewayInformationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeGatewayInformationOutput(
    data,
    context
  );
  const response: DescribeGatewayInformationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeGatewayInformationOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeGatewayInformationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGatewayInformationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeMaintenanceStartTimeCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeMaintenanceStartTimeOutput(
    data,
    context
  );
  const response: DescribeMaintenanceStartTimeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeMaintenanceStartTimeOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeMaintenanceStartTimeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMaintenanceStartTimeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeNFSFileSharesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeNFSFileSharesOutput(data, context);
  const response: DescribeNFSFileSharesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeNFSFileSharesOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeNFSFileSharesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNFSFileSharesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeSMBFileSharesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeSMBFileSharesOutput(data, context);
  const response: DescribeSMBFileSharesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeSMBFileSharesOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeSMBFileSharesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSMBFileSharesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeSMBSettingsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeSMBSettingsOutput(data, context);
  const response: DescribeSMBSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeSMBSettingsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeSMBSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSMBSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeSnapshotScheduleCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeSnapshotScheduleOutput(
    data,
    context
  );
  const response: DescribeSnapshotScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeSnapshotScheduleOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeSnapshotScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSnapshotScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeStorediSCSIVolumesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeStorediSCSIVolumesOutput(
    data,
    context
  );
  const response: DescribeStorediSCSIVolumesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeStorediSCSIVolumesOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeStorediSCSIVolumesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStorediSCSIVolumesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeTapeArchivesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeTapeArchivesOutput(data, context);
  const response: DescribeTapeArchivesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeTapeArchivesOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeTapeArchivesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTapeArchivesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeTapeRecoveryPointsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeTapeRecoveryPointsOutput(
    data,
    context
  );
  const response: DescribeTapeRecoveryPointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeTapeRecoveryPointsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeTapeRecoveryPointsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTapeRecoveryPointsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeTapesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeTapesOutput(data, context);
  const response: DescribeTapesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeTapesOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeTapesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTapesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeUploadBufferCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeUploadBufferOutput(data, context);
  const response: DescribeUploadBufferCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeUploadBufferOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeUploadBufferCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUploadBufferCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeVTLDevicesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeVTLDevicesOutput(data, context);
  const response: DescribeVTLDevicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeVTLDevicesOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeVTLDevicesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVTLDevicesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeWorkingStorageCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeWorkingStorageOutput(data, context);
  const response: DescribeWorkingStorageCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeWorkingStorageOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeWorkingStorageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkingStorageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DetachVolumeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DetachVolumeOutput(data, context);
  const response: DetachVolumeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DetachVolumeOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DetachVolumeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachVolumeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DisableGatewayCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisableGatewayOutput(data, context);
  const response: DisableGatewayCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisableGatewayOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisableGatewayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableGatewayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1JoinDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1JoinDomainOutput(data, context);
  const response: JoinDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "JoinDomainOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1JoinDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JoinDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListFileSharesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListFileSharesOutput(data, context);
  const response: ListFileSharesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListFileSharesOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListFileSharesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFileSharesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListGatewaysCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListGatewaysOutput(data, context);
  const response: ListGatewaysCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListGatewaysOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListGatewaysCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGatewaysCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListLocalDisksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListLocalDisksOutput(data, context);
  const response: ListLocalDisksCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListLocalDisksOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListLocalDisksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLocalDisksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceOutput(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForResourceOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTapesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTapesOutput(data, context);
  const response: ListTapesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTapesOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTapesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTapesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListVolumeInitiatorsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListVolumeInitiatorsOutput(data, context);
  const response: ListVolumeInitiatorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListVolumeInitiatorsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListVolumeInitiatorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVolumeInitiatorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListVolumeRecoveryPointsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListVolumeRecoveryPointsOutput(
    data,
    context
  );
  const response: ListVolumeRecoveryPointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListVolumeRecoveryPointsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListVolumeRecoveryPointsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVolumeRecoveryPointsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListVolumesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListVolumesOutput(data, context);
  const response: ListVolumesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListVolumesOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListVolumesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVolumesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1NotifyWhenUploadedCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1NotifyWhenUploadedOutput(data, context);
  const response: NotifyWhenUploadedCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "NotifyWhenUploadedOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1NotifyWhenUploadedCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NotifyWhenUploadedCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RefreshCacheCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RefreshCacheOutput(data, context);
  const response: RefreshCacheCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RefreshCacheOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RefreshCacheCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RefreshCacheCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RemoveTagsFromResourceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RemoveTagsFromResourceOutput(data, context);
  const response: RemoveTagsFromResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RemoveTagsFromResourceOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RemoveTagsFromResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ResetCacheCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ResetCacheOutput(data, context);
  const response: ResetCacheCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ResetCacheOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ResetCacheCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetCacheCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RetrieveTapeArchiveCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RetrieveTapeArchiveOutput(data, context);
  const response: RetrieveTapeArchiveCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RetrieveTapeArchiveOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RetrieveTapeArchiveCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetrieveTapeArchiveCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RetrieveTapeRecoveryPointCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RetrieveTapeRecoveryPointOutput(
    data,
    context
  );
  const response: RetrieveTapeRecoveryPointCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RetrieveTapeRecoveryPointOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RetrieveTapeRecoveryPointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetrieveTapeRecoveryPointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1SetLocalConsolePasswordCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SetLocalConsolePasswordOutput(data, context);
  const response: SetLocalConsolePasswordCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SetLocalConsolePasswordOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SetLocalConsolePasswordCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetLocalConsolePasswordCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1SetSMBGuestPasswordCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SetSMBGuestPasswordOutput(data, context);
  const response: SetSMBGuestPasswordCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SetSMBGuestPasswordOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SetSMBGuestPasswordCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetSMBGuestPasswordCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ShutdownGatewayCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ShutdownGatewayOutput(data, context);
  const response: ShutdownGatewayCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ShutdownGatewayOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ShutdownGatewayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ShutdownGatewayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartAvailabilityMonitorTestCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartAvailabilityMonitorTestOutput(
    data,
    context
  );
  const response: StartAvailabilityMonitorTestCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartAvailabilityMonitorTestOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartAvailabilityMonitorTestCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartAvailabilityMonitorTestCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartGatewayCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartGatewayOutput(data, context);
  const response: StartGatewayCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartGatewayOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartGatewayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartGatewayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateBandwidthRateLimitCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateBandwidthRateLimitOutput(
    data,
    context
  );
  const response: UpdateBandwidthRateLimitCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateBandwidthRateLimitOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateBandwidthRateLimitCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBandwidthRateLimitCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateChapCredentialsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateChapCredentialsOutput(data, context);
  const response: UpdateChapCredentialsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateChapCredentialsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateChapCredentialsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChapCredentialsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateGatewayInformationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateGatewayInformationOutput(
    data,
    context
  );
  const response: UpdateGatewayInformationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateGatewayInformationOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateGatewayInformationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGatewayInformationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateGatewaySoftwareNowCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateGatewaySoftwareNowOutput(
    data,
    context
  );
  const response: UpdateGatewaySoftwareNowCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateGatewaySoftwareNowOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateGatewaySoftwareNowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGatewaySoftwareNowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateMaintenanceStartTimeCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateMaintenanceStartTimeOutput(
    data,
    context
  );
  const response: UpdateMaintenanceStartTimeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateMaintenanceStartTimeOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateMaintenanceStartTimeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMaintenanceStartTimeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateNFSFileShareCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateNFSFileShareOutput(data, context);
  const response: UpdateNFSFileShareCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateNFSFileShareOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateNFSFileShareCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNFSFileShareCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateSMBFileShareCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateSMBFileShareOutput(data, context);
  const response: UpdateSMBFileShareCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateSMBFileShareOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateSMBFileShareCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSMBFileShareCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateSMBSecurityStrategyCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateSMBSecurityStrategyOutput(
    data,
    context
  );
  const response: UpdateSMBSecurityStrategyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateSMBSecurityStrategyOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateSMBSecurityStrategyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSMBSecurityStrategyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateSnapshotScheduleCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateSnapshotScheduleOutput(data, context);
  const response: UpdateSnapshotScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateSnapshotScheduleOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateSnapshotScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSnapshotScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateVTLDeviceTypeCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateVTLDeviceTypeOutput(data, context);
  const response: UpdateVTLDeviceTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateVTLDeviceTypeOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateVTLDeviceTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVTLDeviceTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.storagegateway#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.storagegateway#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  const deserialized: any = deserializeAws_json1_1InternalServerError(
    body,
    context
  );
  const contents: InternalServerError = {
    name: "InternalServerError",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidGatewayRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidGatewayRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidGatewayRequestException(
    body,
    context
  );
  const contents: InvalidGatewayRequestException = {
    name: "InvalidGatewayRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ServiceUnavailableErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableError> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceUnavailableError(
    body,
    context
  );
  const contents: ServiceUnavailableError = {
    name: "ServiceUnavailableError",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1ActivateGatewayInput = (
  input: ActivateGatewayInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ActivationKey !== undefined && {
      ActivationKey: input.ActivationKey
    }),
    ...(input.GatewayName !== undefined && { GatewayName: input.GatewayName }),
    ...(input.GatewayRegion !== undefined && {
      GatewayRegion: input.GatewayRegion
    }),
    ...(input.GatewayTimezone !== undefined && {
      GatewayTimezone: input.GatewayTimezone
    }),
    ...(input.GatewayType !== undefined && { GatewayType: input.GatewayType }),
    ...(input.MediumChangerType !== undefined && {
      MediumChangerType: input.MediumChangerType
    }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_json1_1Tags(input.Tags, context)
    }),
    ...(input.TapeDriveType !== undefined && {
      TapeDriveType: input.TapeDriveType
    })
  };
};

const serializeAws_json1_1AddCacheInput = (
  input: AddCacheInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.DiskIds !== undefined && {
      DiskIds: serializeAws_json1_1DiskIds(input.DiskIds, context)
    }),
    ...(input.GatewayARN !== undefined && { GatewayARN: input.GatewayARN })
  };
};

const serializeAws_json1_1AddTagsToResourceInput = (
  input: AddTagsToResourceInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceARN !== undefined && { ResourceARN: input.ResourceARN }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_json1_1Tags(input.Tags, context)
    })
  };
};

const serializeAws_json1_1AddUploadBufferInput = (
  input: AddUploadBufferInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.DiskIds !== undefined && {
      DiskIds: serializeAws_json1_1DiskIds(input.DiskIds, context)
    }),
    ...(input.GatewayARN !== undefined && { GatewayARN: input.GatewayARN })
  };
};

const serializeAws_json1_1AddWorkingStorageInput = (
  input: AddWorkingStorageInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.DiskIds !== undefined && {
      DiskIds: serializeAws_json1_1DiskIds(input.DiskIds, context)
    }),
    ...(input.GatewayARN !== undefined && { GatewayARN: input.GatewayARN })
  };
};

const serializeAws_json1_1AssignTapePoolInput = (
  input: AssignTapePoolInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.PoolId !== undefined && { PoolId: input.PoolId }),
    ...(input.TapeARN !== undefined && { TapeARN: input.TapeARN })
  };
};

const serializeAws_json1_1AttachVolumeInput = (
  input: AttachVolumeInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.DiskId !== undefined && { DiskId: input.DiskId }),
    ...(input.GatewayARN !== undefined && { GatewayARN: input.GatewayARN }),
    ...(input.NetworkInterfaceId !== undefined && {
      NetworkInterfaceId: input.NetworkInterfaceId
    }),
    ...(input.TargetName !== undefined && { TargetName: input.TargetName }),
    ...(input.VolumeARN !== undefined && { VolumeARN: input.VolumeARN })
  };
};

const serializeAws_json1_1CancelArchivalInput = (
  input: CancelArchivalInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayARN !== undefined && { GatewayARN: input.GatewayARN }),
    ...(input.TapeARN !== undefined && { TapeARN: input.TapeARN })
  };
};

const serializeAws_json1_1CancelRetrievalInput = (
  input: CancelRetrievalInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayARN !== undefined && { GatewayARN: input.GatewayARN }),
    ...(input.TapeARN !== undefined && { TapeARN: input.TapeARN })
  };
};

const serializeAws_json1_1CreateCachediSCSIVolumeInput = (
  input: CreateCachediSCSIVolumeInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClientToken !== undefined && { ClientToken: input.ClientToken }),
    ...(input.GatewayARN !== undefined && { GatewayARN: input.GatewayARN }),
    ...(input.KMSEncrypted !== undefined && {
      KMSEncrypted: input.KMSEncrypted
    }),
    ...(input.KMSKey !== undefined && { KMSKey: input.KMSKey }),
    ...(input.NetworkInterfaceId !== undefined && {
      NetworkInterfaceId: input.NetworkInterfaceId
    }),
    ...(input.SnapshotId !== undefined && { SnapshotId: input.SnapshotId }),
    ...(input.SourceVolumeARN !== undefined && {
      SourceVolumeARN: input.SourceVolumeARN
    }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_json1_1Tags(input.Tags, context)
    }),
    ...(input.TargetName !== undefined && { TargetName: input.TargetName }),
    ...(input.VolumeSizeInBytes !== undefined && {
      VolumeSizeInBytes: input.VolumeSizeInBytes
    })
  };
};

const serializeAws_json1_1CreateNFSFileShareInput = (
  input: CreateNFSFileShareInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClientList !== undefined && {
      ClientList: serializeAws_json1_1FileShareClientList(
        input.ClientList,
        context
      )
    }),
    ...(input.ClientToken !== undefined && { ClientToken: input.ClientToken }),
    ...(input.DefaultStorageClass !== undefined && {
      DefaultStorageClass: input.DefaultStorageClass
    }),
    ...(input.GatewayARN !== undefined && { GatewayARN: input.GatewayARN }),
    ...(input.GuessMIMETypeEnabled !== undefined && {
      GuessMIMETypeEnabled: input.GuessMIMETypeEnabled
    }),
    ...(input.KMSEncrypted !== undefined && {
      KMSEncrypted: input.KMSEncrypted
    }),
    ...(input.KMSKey !== undefined && { KMSKey: input.KMSKey }),
    ...(input.LocationARN !== undefined && { LocationARN: input.LocationARN }),
    ...(input.NFSFileShareDefaults !== undefined && {
      NFSFileShareDefaults: serializeAws_json1_1NFSFileShareDefaults(
        input.NFSFileShareDefaults,
        context
      )
    }),
    ...(input.ObjectACL !== undefined && { ObjectACL: input.ObjectACL }),
    ...(input.ReadOnly !== undefined && { ReadOnly: input.ReadOnly }),
    ...(input.RequesterPays !== undefined && {
      RequesterPays: input.RequesterPays
    }),
    ...(input.Role !== undefined && { Role: input.Role }),
    ...(input.Squash !== undefined && { Squash: input.Squash }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_json1_1Tags(input.Tags, context)
    })
  };
};

const serializeAws_json1_1CreateSMBFileShareInput = (
  input: CreateSMBFileShareInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AdminUserList !== undefined && {
      AdminUserList: serializeAws_json1_1FileShareUserList(
        input.AdminUserList,
        context
      )
    }),
    ...(input.Authentication !== undefined && {
      Authentication: input.Authentication
    }),
    ...(input.ClientToken !== undefined && { ClientToken: input.ClientToken }),
    ...(input.DefaultStorageClass !== undefined && {
      DefaultStorageClass: input.DefaultStorageClass
    }),
    ...(input.GatewayARN !== undefined && { GatewayARN: input.GatewayARN }),
    ...(input.GuessMIMETypeEnabled !== undefined && {
      GuessMIMETypeEnabled: input.GuessMIMETypeEnabled
    }),
    ...(input.InvalidUserList !== undefined && {
      InvalidUserList: serializeAws_json1_1FileShareUserList(
        input.InvalidUserList,
        context
      )
    }),
    ...(input.KMSEncrypted !== undefined && {
      KMSEncrypted: input.KMSEncrypted
    }),
    ...(input.KMSKey !== undefined && { KMSKey: input.KMSKey }),
    ...(input.LocationARN !== undefined && { LocationARN: input.LocationARN }),
    ...(input.ObjectACL !== undefined && { ObjectACL: input.ObjectACL }),
    ...(input.ReadOnly !== undefined && { ReadOnly: input.ReadOnly }),
    ...(input.RequesterPays !== undefined && {
      RequesterPays: input.RequesterPays
    }),
    ...(input.Role !== undefined && { Role: input.Role }),
    ...(input.SMBACLEnabled !== undefined && {
      SMBACLEnabled: input.SMBACLEnabled
    }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_json1_1Tags(input.Tags, context)
    }),
    ...(input.ValidUserList !== undefined && {
      ValidUserList: serializeAws_json1_1FileShareUserList(
        input.ValidUserList,
        context
      )
    })
  };
};

const serializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointInput = (
  input: CreateSnapshotFromVolumeRecoveryPointInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.SnapshotDescription !== undefined && {
      SnapshotDescription: input.SnapshotDescription
    }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_json1_1Tags(input.Tags, context)
    }),
    ...(input.VolumeARN !== undefined && { VolumeARN: input.VolumeARN })
  };
};

const serializeAws_json1_1CreateSnapshotInput = (
  input: CreateSnapshotInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.SnapshotDescription !== undefined && {
      SnapshotDescription: input.SnapshotDescription
    }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_json1_1Tags(input.Tags, context)
    }),
    ...(input.VolumeARN !== undefined && { VolumeARN: input.VolumeARN })
  };
};

const serializeAws_json1_1CreateStorediSCSIVolumeInput = (
  input: CreateStorediSCSIVolumeInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.DiskId !== undefined && { DiskId: input.DiskId }),
    ...(input.GatewayARN !== undefined && { GatewayARN: input.GatewayARN }),
    ...(input.KMSEncrypted !== undefined && {
      KMSEncrypted: input.KMSEncrypted
    }),
    ...(input.KMSKey !== undefined && { KMSKey: input.KMSKey }),
    ...(input.NetworkInterfaceId !== undefined && {
      NetworkInterfaceId: input.NetworkInterfaceId
    }),
    ...(input.PreserveExistingData !== undefined && {
      PreserveExistingData: input.PreserveExistingData
    }),
    ...(input.SnapshotId !== undefined && { SnapshotId: input.SnapshotId }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_json1_1Tags(input.Tags, context)
    }),
    ...(input.TargetName !== undefined && { TargetName: input.TargetName })
  };
};

const serializeAws_json1_1CreateTapesInput = (
  input: CreateTapesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClientToken !== undefined && { ClientToken: input.ClientToken }),
    ...(input.GatewayARN !== undefined && { GatewayARN: input.GatewayARN }),
    ...(input.KMSEncrypted !== undefined && {
      KMSEncrypted: input.KMSEncrypted
    }),
    ...(input.KMSKey !== undefined && { KMSKey: input.KMSKey }),
    ...(input.NumTapesToCreate !== undefined && {
      NumTapesToCreate: input.NumTapesToCreate
    }),
    ...(input.PoolId !== undefined && { PoolId: input.PoolId }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_json1_1Tags(input.Tags, context)
    }),
    ...(input.TapeBarcodePrefix !== undefined && {
      TapeBarcodePrefix: input.TapeBarcodePrefix
    }),
    ...(input.TapeSizeInBytes !== undefined && {
      TapeSizeInBytes: input.TapeSizeInBytes
    })
  };
};

const serializeAws_json1_1CreateTapeWithBarcodeInput = (
  input: CreateTapeWithBarcodeInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayARN !== undefined && { GatewayARN: input.GatewayARN }),
    ...(input.KMSEncrypted !== undefined && {
      KMSEncrypted: input.KMSEncrypted
    }),
    ...(input.KMSKey !== undefined && { KMSKey: input.KMSKey }),
    ...(input.PoolId !== undefined && { PoolId: input.PoolId }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_json1_1Tags(input.Tags, context)
    }),
    ...(input.TapeBarcode !== undefined && { TapeBarcode: input.TapeBarcode }),
    ...(input.TapeSizeInBytes !== undefined && {
      TapeSizeInBytes: input.TapeSizeInBytes
    })
  };
};

const serializeAws_json1_1DeleteBandwidthRateLimitInput = (
  input: DeleteBandwidthRateLimitInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.BandwidthType !== undefined && {
      BandwidthType: input.BandwidthType
    }),
    ...(input.GatewayARN !== undefined && { GatewayARN: input.GatewayARN })
  };
};

const serializeAws_json1_1DeleteChapCredentialsInput = (
  input: DeleteChapCredentialsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.InitiatorName !== undefined && {
      InitiatorName: input.InitiatorName
    }),
    ...(input.TargetARN !== undefined && { TargetARN: input.TargetARN })
  };
};

const serializeAws_json1_1DeleteFileShareInput = (
  input: DeleteFileShareInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.FileShareARN !== undefined && {
      FileShareARN: input.FileShareARN
    }),
    ...(input.ForceDelete !== undefined && { ForceDelete: input.ForceDelete })
  };
};

const serializeAws_json1_1DeleteGatewayInput = (
  input: DeleteGatewayInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayARN !== undefined && { GatewayARN: input.GatewayARN })
  };
};

const serializeAws_json1_1DeleteSnapshotScheduleInput = (
  input: DeleteSnapshotScheduleInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.VolumeARN !== undefined && { VolumeARN: input.VolumeARN })
  };
};

const serializeAws_json1_1DeleteTapeArchiveInput = (
  input: DeleteTapeArchiveInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.TapeARN !== undefined && { TapeARN: input.TapeARN })
  };
};

const serializeAws_json1_1DeleteTapeInput = (
  input: DeleteTapeInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayARN !== undefined && { GatewayARN: input.GatewayARN }),
    ...(input.TapeARN !== undefined && { TapeARN: input.TapeARN })
  };
};

const serializeAws_json1_1DeleteVolumeInput = (
  input: DeleteVolumeInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.VolumeARN !== undefined && { VolumeARN: input.VolumeARN })
  };
};

const serializeAws_json1_1DescribeAvailabilityMonitorTestInput = (
  input: DescribeAvailabilityMonitorTestInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayARN !== undefined && { GatewayARN: input.GatewayARN })
  };
};

const serializeAws_json1_1DescribeBandwidthRateLimitInput = (
  input: DescribeBandwidthRateLimitInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayARN !== undefined && { GatewayARN: input.GatewayARN })
  };
};

const serializeAws_json1_1DescribeCachediSCSIVolumesInput = (
  input: DescribeCachediSCSIVolumesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.VolumeARNs !== undefined && {
      VolumeARNs: serializeAws_json1_1VolumeARNs(input.VolumeARNs, context)
    })
  };
};

const serializeAws_json1_1DescribeCacheInput = (
  input: DescribeCacheInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayARN !== undefined && { GatewayARN: input.GatewayARN })
  };
};

const serializeAws_json1_1DescribeChapCredentialsInput = (
  input: DescribeChapCredentialsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.TargetARN !== undefined && { TargetARN: input.TargetARN })
  };
};

const serializeAws_json1_1DescribeGatewayInformationInput = (
  input: DescribeGatewayInformationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayARN !== undefined && { GatewayARN: input.GatewayARN })
  };
};

const serializeAws_json1_1DescribeMaintenanceStartTimeInput = (
  input: DescribeMaintenanceStartTimeInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayARN !== undefined && { GatewayARN: input.GatewayARN })
  };
};

const serializeAws_json1_1DescribeNFSFileSharesInput = (
  input: DescribeNFSFileSharesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.FileShareARNList !== undefined && {
      FileShareARNList: serializeAws_json1_1FileShareARNList(
        input.FileShareARNList,
        context
      )
    })
  };
};

const serializeAws_json1_1DescribeSMBFileSharesInput = (
  input: DescribeSMBFileSharesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.FileShareARNList !== undefined && {
      FileShareARNList: serializeAws_json1_1FileShareARNList(
        input.FileShareARNList,
        context
      )
    })
  };
};

const serializeAws_json1_1DescribeSMBSettingsInput = (
  input: DescribeSMBSettingsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayARN !== undefined && { GatewayARN: input.GatewayARN })
  };
};

const serializeAws_json1_1DescribeSnapshotScheduleInput = (
  input: DescribeSnapshotScheduleInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.VolumeARN !== undefined && { VolumeARN: input.VolumeARN })
  };
};

const serializeAws_json1_1DescribeStorediSCSIVolumesInput = (
  input: DescribeStorediSCSIVolumesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.VolumeARNs !== undefined && {
      VolumeARNs: serializeAws_json1_1VolumeARNs(input.VolumeARNs, context)
    })
  };
};

const serializeAws_json1_1DescribeTapeArchivesInput = (
  input: DescribeTapeArchivesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit !== undefined && { Limit: input.Limit }),
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.TapeARNs !== undefined && {
      TapeARNs: serializeAws_json1_1TapeARNs(input.TapeARNs, context)
    })
  };
};

const serializeAws_json1_1DescribeTapeRecoveryPointsInput = (
  input: DescribeTapeRecoveryPointsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayARN !== undefined && { GatewayARN: input.GatewayARN }),
    ...(input.Limit !== undefined && { Limit: input.Limit }),
    ...(input.Marker !== undefined && { Marker: input.Marker })
  };
};

const serializeAws_json1_1DescribeTapesInput = (
  input: DescribeTapesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayARN !== undefined && { GatewayARN: input.GatewayARN }),
    ...(input.Limit !== undefined && { Limit: input.Limit }),
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.TapeARNs !== undefined && {
      TapeARNs: serializeAws_json1_1TapeARNs(input.TapeARNs, context)
    })
  };
};

const serializeAws_json1_1DescribeUploadBufferInput = (
  input: DescribeUploadBufferInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayARN !== undefined && { GatewayARN: input.GatewayARN })
  };
};

const serializeAws_json1_1DescribeVTLDevicesInput = (
  input: DescribeVTLDevicesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayARN !== undefined && { GatewayARN: input.GatewayARN }),
    ...(input.Limit !== undefined && { Limit: input.Limit }),
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.VTLDeviceARNs !== undefined && {
      VTLDeviceARNs: serializeAws_json1_1VTLDeviceARNs(
        input.VTLDeviceARNs,
        context
      )
    })
  };
};

const serializeAws_json1_1DescribeWorkingStorageInput = (
  input: DescribeWorkingStorageInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayARN !== undefined && { GatewayARN: input.GatewayARN })
  };
};

const serializeAws_json1_1DetachVolumeInput = (
  input: DetachVolumeInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ForceDetach !== undefined && { ForceDetach: input.ForceDetach }),
    ...(input.VolumeARN !== undefined && { VolumeARN: input.VolumeARN })
  };
};

const serializeAws_json1_1DisableGatewayInput = (
  input: DisableGatewayInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayARN !== undefined && { GatewayARN: input.GatewayARN })
  };
};

const serializeAws_json1_1DiskIds = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1FileShareARNList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1FileShareClientList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1FileShareUserList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1FolderList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1Hosts = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1JoinDomainInput = (
  input: JoinDomainInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainControllers !== undefined && {
      DomainControllers: serializeAws_json1_1Hosts(
        input.DomainControllers,
        context
      )
    }),
    ...(input.DomainName !== undefined && { DomainName: input.DomainName }),
    ...(input.GatewayARN !== undefined && { GatewayARN: input.GatewayARN }),
    ...(input.OrganizationalUnit !== undefined && {
      OrganizationalUnit: input.OrganizationalUnit
    }),
    ...(input.Password !== undefined && { Password: input.Password }),
    ...(input.TimeoutInSeconds !== undefined && {
      TimeoutInSeconds: input.TimeoutInSeconds
    }),
    ...(input.UserName !== undefined && { UserName: input.UserName })
  };
};

const serializeAws_json1_1ListFileSharesInput = (
  input: ListFileSharesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayARN !== undefined && { GatewayARN: input.GatewayARN }),
    ...(input.Limit !== undefined && { Limit: input.Limit }),
    ...(input.Marker !== undefined && { Marker: input.Marker })
  };
};

const serializeAws_json1_1ListGatewaysInput = (
  input: ListGatewaysInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit !== undefined && { Limit: input.Limit }),
    ...(input.Marker !== undefined && { Marker: input.Marker })
  };
};

const serializeAws_json1_1ListLocalDisksInput = (
  input: ListLocalDisksInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayARN !== undefined && { GatewayARN: input.GatewayARN })
  };
};

const serializeAws_json1_1ListTagsForResourceInput = (
  input: ListTagsForResourceInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit !== undefined && { Limit: input.Limit }),
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.ResourceARN !== undefined && { ResourceARN: input.ResourceARN })
  };
};

const serializeAws_json1_1ListTapesInput = (
  input: ListTapesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit !== undefined && { Limit: input.Limit }),
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.TapeARNs !== undefined && {
      TapeARNs: serializeAws_json1_1TapeARNs(input.TapeARNs, context)
    })
  };
};

const serializeAws_json1_1ListVolumeInitiatorsInput = (
  input: ListVolumeInitiatorsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.VolumeARN !== undefined && { VolumeARN: input.VolumeARN })
  };
};

const serializeAws_json1_1ListVolumeRecoveryPointsInput = (
  input: ListVolumeRecoveryPointsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayARN !== undefined && { GatewayARN: input.GatewayARN })
  };
};

const serializeAws_json1_1ListVolumesInput = (
  input: ListVolumesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayARN !== undefined && { GatewayARN: input.GatewayARN }),
    ...(input.Limit !== undefined && { Limit: input.Limit }),
    ...(input.Marker !== undefined && { Marker: input.Marker })
  };
};

const serializeAws_json1_1NFSFileShareDefaults = (
  input: NFSFileShareDefaults,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryMode !== undefined && {
      DirectoryMode: input.DirectoryMode
    }),
    ...(input.FileMode !== undefined && { FileMode: input.FileMode }),
    ...(input.GroupId !== undefined && { GroupId: input.GroupId }),
    ...(input.OwnerId !== undefined && { OwnerId: input.OwnerId })
  };
};

const serializeAws_json1_1NotifyWhenUploadedInput = (
  input: NotifyWhenUploadedInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.FileShareARN !== undefined && {
      FileShareARN: input.FileShareARN
    })
  };
};

const serializeAws_json1_1RefreshCacheInput = (
  input: RefreshCacheInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.FileShareARN !== undefined && {
      FileShareARN: input.FileShareARN
    }),
    ...(input.FolderList !== undefined && {
      FolderList: serializeAws_json1_1FolderList(input.FolderList, context)
    }),
    ...(input.Recursive !== undefined && { Recursive: input.Recursive })
  };
};

const serializeAws_json1_1RemoveTagsFromResourceInput = (
  input: RemoveTagsFromResourceInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceARN !== undefined && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeys !== undefined && {
      TagKeys: serializeAws_json1_1TagKeys(input.TagKeys, context)
    })
  };
};

const serializeAws_json1_1ResetCacheInput = (
  input: ResetCacheInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayARN !== undefined && { GatewayARN: input.GatewayARN })
  };
};

const serializeAws_json1_1RetrieveTapeArchiveInput = (
  input: RetrieveTapeArchiveInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayARN !== undefined && { GatewayARN: input.GatewayARN }),
    ...(input.TapeARN !== undefined && { TapeARN: input.TapeARN })
  };
};

const serializeAws_json1_1RetrieveTapeRecoveryPointInput = (
  input: RetrieveTapeRecoveryPointInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayARN !== undefined && { GatewayARN: input.GatewayARN }),
    ...(input.TapeARN !== undefined && { TapeARN: input.TapeARN })
  };
};

const serializeAws_json1_1SetLocalConsolePasswordInput = (
  input: SetLocalConsolePasswordInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayARN !== undefined && { GatewayARN: input.GatewayARN }),
    ...(input.LocalConsolePassword !== undefined && {
      LocalConsolePassword: input.LocalConsolePassword
    })
  };
};

const serializeAws_json1_1SetSMBGuestPasswordInput = (
  input: SetSMBGuestPasswordInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayARN !== undefined && { GatewayARN: input.GatewayARN }),
    ...(input.Password !== undefined && { Password: input.Password })
  };
};

const serializeAws_json1_1ShutdownGatewayInput = (
  input: ShutdownGatewayInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayARN !== undefined && { GatewayARN: input.GatewayARN })
  };
};

const serializeAws_json1_1StartAvailabilityMonitorTestInput = (
  input: StartAvailabilityMonitorTestInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayARN !== undefined && { GatewayARN: input.GatewayARN })
  };
};

const serializeAws_json1_1StartGatewayInput = (
  input: StartGatewayInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayARN !== undefined && { GatewayARN: input.GatewayARN })
  };
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && { Key: input.Key }),
    ...(input.Value !== undefined && { Value: input.Value })
  };
};

const serializeAws_json1_1TagKeys = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1Tags = (
  input: Tag[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1Tag(entry, context));
};

const serializeAws_json1_1TapeARNs = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1UpdateBandwidthRateLimitInput = (
  input: UpdateBandwidthRateLimitInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AverageDownloadRateLimitInBitsPerSec !== undefined && {
      AverageDownloadRateLimitInBitsPerSec:
        input.AverageDownloadRateLimitInBitsPerSec
    }),
    ...(input.AverageUploadRateLimitInBitsPerSec !== undefined && {
      AverageUploadRateLimitInBitsPerSec:
        input.AverageUploadRateLimitInBitsPerSec
    }),
    ...(input.GatewayARN !== undefined && { GatewayARN: input.GatewayARN })
  };
};

const serializeAws_json1_1UpdateChapCredentialsInput = (
  input: UpdateChapCredentialsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.InitiatorName !== undefined && {
      InitiatorName: input.InitiatorName
    }),
    ...(input.SecretToAuthenticateInitiator !== undefined && {
      SecretToAuthenticateInitiator: input.SecretToAuthenticateInitiator
    }),
    ...(input.SecretToAuthenticateTarget !== undefined && {
      SecretToAuthenticateTarget: input.SecretToAuthenticateTarget
    }),
    ...(input.TargetARN !== undefined && { TargetARN: input.TargetARN })
  };
};

const serializeAws_json1_1UpdateGatewayInformationInput = (
  input: UpdateGatewayInformationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.CloudWatchLogGroupARN !== undefined && {
      CloudWatchLogGroupARN: input.CloudWatchLogGroupARN
    }),
    ...(input.GatewayARN !== undefined && { GatewayARN: input.GatewayARN }),
    ...(input.GatewayName !== undefined && { GatewayName: input.GatewayName }),
    ...(input.GatewayTimezone !== undefined && {
      GatewayTimezone: input.GatewayTimezone
    })
  };
};

const serializeAws_json1_1UpdateGatewaySoftwareNowInput = (
  input: UpdateGatewaySoftwareNowInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayARN !== undefined && { GatewayARN: input.GatewayARN })
  };
};

const serializeAws_json1_1UpdateMaintenanceStartTimeInput = (
  input: UpdateMaintenanceStartTimeInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.DayOfMonth !== undefined && { DayOfMonth: input.DayOfMonth }),
    ...(input.DayOfWeek !== undefined && { DayOfWeek: input.DayOfWeek }),
    ...(input.GatewayARN !== undefined && { GatewayARN: input.GatewayARN }),
    ...(input.HourOfDay !== undefined && { HourOfDay: input.HourOfDay }),
    ...(input.MinuteOfHour !== undefined && {
      MinuteOfHour: input.MinuteOfHour
    })
  };
};

const serializeAws_json1_1UpdateNFSFileShareInput = (
  input: UpdateNFSFileShareInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClientList !== undefined && {
      ClientList: serializeAws_json1_1FileShareClientList(
        input.ClientList,
        context
      )
    }),
    ...(input.DefaultStorageClass !== undefined && {
      DefaultStorageClass: input.DefaultStorageClass
    }),
    ...(input.FileShareARN !== undefined && {
      FileShareARN: input.FileShareARN
    }),
    ...(input.GuessMIMETypeEnabled !== undefined && {
      GuessMIMETypeEnabled: input.GuessMIMETypeEnabled
    }),
    ...(input.KMSEncrypted !== undefined && {
      KMSEncrypted: input.KMSEncrypted
    }),
    ...(input.KMSKey !== undefined && { KMSKey: input.KMSKey }),
    ...(input.NFSFileShareDefaults !== undefined && {
      NFSFileShareDefaults: serializeAws_json1_1NFSFileShareDefaults(
        input.NFSFileShareDefaults,
        context
      )
    }),
    ...(input.ObjectACL !== undefined && { ObjectACL: input.ObjectACL }),
    ...(input.ReadOnly !== undefined && { ReadOnly: input.ReadOnly }),
    ...(input.RequesterPays !== undefined && {
      RequesterPays: input.RequesterPays
    }),
    ...(input.Squash !== undefined && { Squash: input.Squash })
  };
};

const serializeAws_json1_1UpdateSMBFileShareInput = (
  input: UpdateSMBFileShareInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AdminUserList !== undefined && {
      AdminUserList: serializeAws_json1_1FileShareUserList(
        input.AdminUserList,
        context
      )
    }),
    ...(input.DefaultStorageClass !== undefined && {
      DefaultStorageClass: input.DefaultStorageClass
    }),
    ...(input.FileShareARN !== undefined && {
      FileShareARN: input.FileShareARN
    }),
    ...(input.GuessMIMETypeEnabled !== undefined && {
      GuessMIMETypeEnabled: input.GuessMIMETypeEnabled
    }),
    ...(input.InvalidUserList !== undefined && {
      InvalidUserList: serializeAws_json1_1FileShareUserList(
        input.InvalidUserList,
        context
      )
    }),
    ...(input.KMSEncrypted !== undefined && {
      KMSEncrypted: input.KMSEncrypted
    }),
    ...(input.KMSKey !== undefined && { KMSKey: input.KMSKey }),
    ...(input.ObjectACL !== undefined && { ObjectACL: input.ObjectACL }),
    ...(input.ReadOnly !== undefined && { ReadOnly: input.ReadOnly }),
    ...(input.RequesterPays !== undefined && {
      RequesterPays: input.RequesterPays
    }),
    ...(input.SMBACLEnabled !== undefined && {
      SMBACLEnabled: input.SMBACLEnabled
    }),
    ...(input.ValidUserList !== undefined && {
      ValidUserList: serializeAws_json1_1FileShareUserList(
        input.ValidUserList,
        context
      )
    })
  };
};

const serializeAws_json1_1UpdateSMBSecurityStrategyInput = (
  input: UpdateSMBSecurityStrategyInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayARN !== undefined && { GatewayARN: input.GatewayARN }),
    ...(input.SMBSecurityStrategy !== undefined && {
      SMBSecurityStrategy: input.SMBSecurityStrategy
    })
  };
};

const serializeAws_json1_1UpdateSnapshotScheduleInput = (
  input: UpdateSnapshotScheduleInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.RecurrenceInHours !== undefined && {
      RecurrenceInHours: input.RecurrenceInHours
    }),
    ...(input.StartAt !== undefined && { StartAt: input.StartAt }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_json1_1Tags(input.Tags, context)
    }),
    ...(input.VolumeARN !== undefined && { VolumeARN: input.VolumeARN })
  };
};

const serializeAws_json1_1UpdateVTLDeviceTypeInput = (
  input: UpdateVTLDeviceTypeInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeviceType !== undefined && { DeviceType: input.DeviceType }),
    ...(input.VTLDeviceARN !== undefined && {
      VTLDeviceARN: input.VTLDeviceARN
    })
  };
};

const serializeAws_json1_1VolumeARNs = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1VTLDeviceARNs = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const deserializeAws_json1_1ActivateGatewayOutput = (
  output: any,
  context: __SerdeContext
): ActivateGatewayOutput => {
  return {
    __type: "ActivateGatewayOutput",
    GatewayARN:
      output.GatewayARN !== undefined && output.GatewayARN !== null
        ? output.GatewayARN
        : undefined
  } as any;
};

const deserializeAws_json1_1AddCacheOutput = (
  output: any,
  context: __SerdeContext
): AddCacheOutput => {
  return {
    __type: "AddCacheOutput",
    GatewayARN:
      output.GatewayARN !== undefined && output.GatewayARN !== null
        ? output.GatewayARN
        : undefined
  } as any;
};

const deserializeAws_json1_1AddTagsToResourceOutput = (
  output: any,
  context: __SerdeContext
): AddTagsToResourceOutput => {
  return {
    __type: "AddTagsToResourceOutput",
    ResourceARN:
      output.ResourceARN !== undefined && output.ResourceARN !== null
        ? output.ResourceARN
        : undefined
  } as any;
};

const deserializeAws_json1_1AddUploadBufferOutput = (
  output: any,
  context: __SerdeContext
): AddUploadBufferOutput => {
  return {
    __type: "AddUploadBufferOutput",
    GatewayARN:
      output.GatewayARN !== undefined && output.GatewayARN !== null
        ? output.GatewayARN
        : undefined
  } as any;
};

const deserializeAws_json1_1AddWorkingStorageOutput = (
  output: any,
  context: __SerdeContext
): AddWorkingStorageOutput => {
  return {
    __type: "AddWorkingStorageOutput",
    GatewayARN:
      output.GatewayARN !== undefined && output.GatewayARN !== null
        ? output.GatewayARN
        : undefined
  } as any;
};

const deserializeAws_json1_1AssignTapePoolOutput = (
  output: any,
  context: __SerdeContext
): AssignTapePoolOutput => {
  return {
    __type: "AssignTapePoolOutput",
    TapeARN:
      output.TapeARN !== undefined && output.TapeARN !== null
        ? output.TapeARN
        : undefined
  } as any;
};

const deserializeAws_json1_1AttachVolumeOutput = (
  output: any,
  context: __SerdeContext
): AttachVolumeOutput => {
  return {
    __type: "AttachVolumeOutput",
    TargetARN:
      output.TargetARN !== undefined && output.TargetARN !== null
        ? output.TargetARN
        : undefined,
    VolumeARN:
      output.VolumeARN !== undefined && output.VolumeARN !== null
        ? output.VolumeARN
        : undefined
  } as any;
};

const deserializeAws_json1_1CachediSCSIVolume = (
  output: any,
  context: __SerdeContext
): CachediSCSIVolume => {
  return {
    __type: "CachediSCSIVolume",
    CreatedDate:
      output.CreatedDate !== undefined && output.CreatedDate !== null
        ? new Date(Math.round(output.CreatedDate * 1000))
        : undefined,
    KMSKey:
      output.KMSKey !== undefined && output.KMSKey !== null
        ? output.KMSKey
        : undefined,
    SourceSnapshotId:
      output.SourceSnapshotId !== undefined && output.SourceSnapshotId !== null
        ? output.SourceSnapshotId
        : undefined,
    TargetName:
      output.TargetName !== undefined && output.TargetName !== null
        ? output.TargetName
        : undefined,
    VolumeARN:
      output.VolumeARN !== undefined && output.VolumeARN !== null
        ? output.VolumeARN
        : undefined,
    VolumeAttachmentStatus:
      output.VolumeAttachmentStatus !== undefined &&
      output.VolumeAttachmentStatus !== null
        ? output.VolumeAttachmentStatus
        : undefined,
    VolumeId:
      output.VolumeId !== undefined && output.VolumeId !== null
        ? output.VolumeId
        : undefined,
    VolumeProgress:
      output.VolumeProgress !== undefined && output.VolumeProgress !== null
        ? output.VolumeProgress
        : undefined,
    VolumeSizeInBytes:
      output.VolumeSizeInBytes !== undefined &&
      output.VolumeSizeInBytes !== null
        ? output.VolumeSizeInBytes
        : undefined,
    VolumeStatus:
      output.VolumeStatus !== undefined && output.VolumeStatus !== null
        ? output.VolumeStatus
        : undefined,
    VolumeType:
      output.VolumeType !== undefined && output.VolumeType !== null
        ? output.VolumeType
        : undefined,
    VolumeUsedInBytes:
      output.VolumeUsedInBytes !== undefined &&
      output.VolumeUsedInBytes !== null
        ? output.VolumeUsedInBytes
        : undefined,
    VolumeiSCSIAttributes:
      output.VolumeiSCSIAttributes !== undefined &&
      output.VolumeiSCSIAttributes !== null
        ? deserializeAws_json1_1VolumeiSCSIAttributes(
            output.VolumeiSCSIAttributes,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1CachediSCSIVolumes = (
  output: any,
  context: __SerdeContext
): CachediSCSIVolume[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1CachediSCSIVolume(entry, context)
  );
};

const deserializeAws_json1_1CancelArchivalOutput = (
  output: any,
  context: __SerdeContext
): CancelArchivalOutput => {
  return {
    __type: "CancelArchivalOutput",
    TapeARN:
      output.TapeARN !== undefined && output.TapeARN !== null
        ? output.TapeARN
        : undefined
  } as any;
};

const deserializeAws_json1_1CancelRetrievalOutput = (
  output: any,
  context: __SerdeContext
): CancelRetrievalOutput => {
  return {
    __type: "CancelRetrievalOutput",
    TapeARN:
      output.TapeARN !== undefined && output.TapeARN !== null
        ? output.TapeARN
        : undefined
  } as any;
};

const deserializeAws_json1_1ChapCredentials = (
  output: any,
  context: __SerdeContext
): ChapInfo[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ChapInfo(entry, context)
  );
};

const deserializeAws_json1_1ChapInfo = (
  output: any,
  context: __SerdeContext
): ChapInfo => {
  return {
    __type: "ChapInfo",
    InitiatorName:
      output.InitiatorName !== undefined && output.InitiatorName !== null
        ? output.InitiatorName
        : undefined,
    SecretToAuthenticateInitiator:
      output.SecretToAuthenticateInitiator !== undefined &&
      output.SecretToAuthenticateInitiator !== null
        ? output.SecretToAuthenticateInitiator
        : undefined,
    SecretToAuthenticateTarget:
      output.SecretToAuthenticateTarget !== undefined &&
      output.SecretToAuthenticateTarget !== null
        ? output.SecretToAuthenticateTarget
        : undefined,
    TargetARN:
      output.TargetARN !== undefined && output.TargetARN !== null
        ? output.TargetARN
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateCachediSCSIVolumeOutput = (
  output: any,
  context: __SerdeContext
): CreateCachediSCSIVolumeOutput => {
  return {
    __type: "CreateCachediSCSIVolumeOutput",
    TargetARN:
      output.TargetARN !== undefined && output.TargetARN !== null
        ? output.TargetARN
        : undefined,
    VolumeARN:
      output.VolumeARN !== undefined && output.VolumeARN !== null
        ? output.VolumeARN
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateNFSFileShareOutput = (
  output: any,
  context: __SerdeContext
): CreateNFSFileShareOutput => {
  return {
    __type: "CreateNFSFileShareOutput",
    FileShareARN:
      output.FileShareARN !== undefined && output.FileShareARN !== null
        ? output.FileShareARN
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateSMBFileShareOutput = (
  output: any,
  context: __SerdeContext
): CreateSMBFileShareOutput => {
  return {
    __type: "CreateSMBFileShareOutput",
    FileShareARN:
      output.FileShareARN !== undefined && output.FileShareARN !== null
        ? output.FileShareARN
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointOutput = (
  output: any,
  context: __SerdeContext
): CreateSnapshotFromVolumeRecoveryPointOutput => {
  return {
    __type: "CreateSnapshotFromVolumeRecoveryPointOutput",
    SnapshotId:
      output.SnapshotId !== undefined && output.SnapshotId !== null
        ? output.SnapshotId
        : undefined,
    VolumeARN:
      output.VolumeARN !== undefined && output.VolumeARN !== null
        ? output.VolumeARN
        : undefined,
    VolumeRecoveryPointTime:
      output.VolumeRecoveryPointTime !== undefined &&
      output.VolumeRecoveryPointTime !== null
        ? output.VolumeRecoveryPointTime
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateSnapshotOutput = (
  output: any,
  context: __SerdeContext
): CreateSnapshotOutput => {
  return {
    __type: "CreateSnapshotOutput",
    SnapshotId:
      output.SnapshotId !== undefined && output.SnapshotId !== null
        ? output.SnapshotId
        : undefined,
    VolumeARN:
      output.VolumeARN !== undefined && output.VolumeARN !== null
        ? output.VolumeARN
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateStorediSCSIVolumeOutput = (
  output: any,
  context: __SerdeContext
): CreateStorediSCSIVolumeOutput => {
  return {
    __type: "CreateStorediSCSIVolumeOutput",
    TargetARN:
      output.TargetARN !== undefined && output.TargetARN !== null
        ? output.TargetARN
        : undefined,
    VolumeARN:
      output.VolumeARN !== undefined && output.VolumeARN !== null
        ? output.VolumeARN
        : undefined,
    VolumeSizeInBytes:
      output.VolumeSizeInBytes !== undefined &&
      output.VolumeSizeInBytes !== null
        ? output.VolumeSizeInBytes
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateTapesOutput = (
  output: any,
  context: __SerdeContext
): CreateTapesOutput => {
  return {
    __type: "CreateTapesOutput",
    TapeARNs:
      output.TapeARNs !== undefined && output.TapeARNs !== null
        ? deserializeAws_json1_1TapeARNs(output.TapeARNs, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateTapeWithBarcodeOutput = (
  output: any,
  context: __SerdeContext
): CreateTapeWithBarcodeOutput => {
  return {
    __type: "CreateTapeWithBarcodeOutput",
    TapeARN:
      output.TapeARN !== undefined && output.TapeARN !== null
        ? output.TapeARN
        : undefined
  } as any;
};

const deserializeAws_json1_1DeleteBandwidthRateLimitOutput = (
  output: any,
  context: __SerdeContext
): DeleteBandwidthRateLimitOutput => {
  return {
    __type: "DeleteBandwidthRateLimitOutput",
    GatewayARN:
      output.GatewayARN !== undefined && output.GatewayARN !== null
        ? output.GatewayARN
        : undefined
  } as any;
};

const deserializeAws_json1_1DeleteChapCredentialsOutput = (
  output: any,
  context: __SerdeContext
): DeleteChapCredentialsOutput => {
  return {
    __type: "DeleteChapCredentialsOutput",
    InitiatorName:
      output.InitiatorName !== undefined && output.InitiatorName !== null
        ? output.InitiatorName
        : undefined,
    TargetARN:
      output.TargetARN !== undefined && output.TargetARN !== null
        ? output.TargetARN
        : undefined
  } as any;
};

const deserializeAws_json1_1DeleteFileShareOutput = (
  output: any,
  context: __SerdeContext
): DeleteFileShareOutput => {
  return {
    __type: "DeleteFileShareOutput",
    FileShareARN:
      output.FileShareARN !== undefined && output.FileShareARN !== null
        ? output.FileShareARN
        : undefined
  } as any;
};

const deserializeAws_json1_1DeleteGatewayOutput = (
  output: any,
  context: __SerdeContext
): DeleteGatewayOutput => {
  return {
    __type: "DeleteGatewayOutput",
    GatewayARN:
      output.GatewayARN !== undefined && output.GatewayARN !== null
        ? output.GatewayARN
        : undefined
  } as any;
};

const deserializeAws_json1_1DeleteSnapshotScheduleOutput = (
  output: any,
  context: __SerdeContext
): DeleteSnapshotScheduleOutput => {
  return {
    __type: "DeleteSnapshotScheduleOutput",
    VolumeARN:
      output.VolumeARN !== undefined && output.VolumeARN !== null
        ? output.VolumeARN
        : undefined
  } as any;
};

const deserializeAws_json1_1DeleteTapeArchiveOutput = (
  output: any,
  context: __SerdeContext
): DeleteTapeArchiveOutput => {
  return {
    __type: "DeleteTapeArchiveOutput",
    TapeARN:
      output.TapeARN !== undefined && output.TapeARN !== null
        ? output.TapeARN
        : undefined
  } as any;
};

const deserializeAws_json1_1DeleteTapeOutput = (
  output: any,
  context: __SerdeContext
): DeleteTapeOutput => {
  return {
    __type: "DeleteTapeOutput",
    TapeARN:
      output.TapeARN !== undefined && output.TapeARN !== null
        ? output.TapeARN
        : undefined
  } as any;
};

const deserializeAws_json1_1DeleteVolumeOutput = (
  output: any,
  context: __SerdeContext
): DeleteVolumeOutput => {
  return {
    __type: "DeleteVolumeOutput",
    VolumeARN:
      output.VolumeARN !== undefined && output.VolumeARN !== null
        ? output.VolumeARN
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeAvailabilityMonitorTestOutput = (
  output: any,
  context: __SerdeContext
): DescribeAvailabilityMonitorTestOutput => {
  return {
    __type: "DescribeAvailabilityMonitorTestOutput",
    GatewayARN:
      output.GatewayARN !== undefined && output.GatewayARN !== null
        ? output.GatewayARN
        : undefined,
    StartTime:
      output.StartTime !== undefined && output.StartTime !== null
        ? new Date(Math.round(output.StartTime * 1000))
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeBandwidthRateLimitOutput = (
  output: any,
  context: __SerdeContext
): DescribeBandwidthRateLimitOutput => {
  return {
    __type: "DescribeBandwidthRateLimitOutput",
    AverageDownloadRateLimitInBitsPerSec:
      output.AverageDownloadRateLimitInBitsPerSec !== undefined &&
      output.AverageDownloadRateLimitInBitsPerSec !== null
        ? output.AverageDownloadRateLimitInBitsPerSec
        : undefined,
    AverageUploadRateLimitInBitsPerSec:
      output.AverageUploadRateLimitInBitsPerSec !== undefined &&
      output.AverageUploadRateLimitInBitsPerSec !== null
        ? output.AverageUploadRateLimitInBitsPerSec
        : undefined,
    GatewayARN:
      output.GatewayARN !== undefined && output.GatewayARN !== null
        ? output.GatewayARN
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeCachediSCSIVolumesOutput = (
  output: any,
  context: __SerdeContext
): DescribeCachediSCSIVolumesOutput => {
  return {
    __type: "DescribeCachediSCSIVolumesOutput",
    CachediSCSIVolumes:
      output.CachediSCSIVolumes !== undefined &&
      output.CachediSCSIVolumes !== null
        ? deserializeAws_json1_1CachediSCSIVolumes(
            output.CachediSCSIVolumes,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeCacheOutput = (
  output: any,
  context: __SerdeContext
): DescribeCacheOutput => {
  return {
    __type: "DescribeCacheOutput",
    CacheAllocatedInBytes:
      output.CacheAllocatedInBytes !== undefined &&
      output.CacheAllocatedInBytes !== null
        ? output.CacheAllocatedInBytes
        : undefined,
    CacheDirtyPercentage:
      output.CacheDirtyPercentage !== undefined &&
      output.CacheDirtyPercentage !== null
        ? output.CacheDirtyPercentage
        : undefined,
    CacheHitPercentage:
      output.CacheHitPercentage !== undefined &&
      output.CacheHitPercentage !== null
        ? output.CacheHitPercentage
        : undefined,
    CacheMissPercentage:
      output.CacheMissPercentage !== undefined &&
      output.CacheMissPercentage !== null
        ? output.CacheMissPercentage
        : undefined,
    CacheUsedPercentage:
      output.CacheUsedPercentage !== undefined &&
      output.CacheUsedPercentage !== null
        ? output.CacheUsedPercentage
        : undefined,
    DiskIds:
      output.DiskIds !== undefined && output.DiskIds !== null
        ? deserializeAws_json1_1DiskIds(output.DiskIds, context)
        : undefined,
    GatewayARN:
      output.GatewayARN !== undefined && output.GatewayARN !== null
        ? output.GatewayARN
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeChapCredentialsOutput = (
  output: any,
  context: __SerdeContext
): DescribeChapCredentialsOutput => {
  return {
    __type: "DescribeChapCredentialsOutput",
    ChapCredentials:
      output.ChapCredentials !== undefined && output.ChapCredentials !== null
        ? deserializeAws_json1_1ChapCredentials(output.ChapCredentials, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeGatewayInformationOutput = (
  output: any,
  context: __SerdeContext
): DescribeGatewayInformationOutput => {
  return {
    __type: "DescribeGatewayInformationOutput",
    CloudWatchLogGroupARN:
      output.CloudWatchLogGroupARN !== undefined &&
      output.CloudWatchLogGroupARN !== null
        ? output.CloudWatchLogGroupARN
        : undefined,
    Ec2InstanceId:
      output.Ec2InstanceId !== undefined && output.Ec2InstanceId !== null
        ? output.Ec2InstanceId
        : undefined,
    Ec2InstanceRegion:
      output.Ec2InstanceRegion !== undefined &&
      output.Ec2InstanceRegion !== null
        ? output.Ec2InstanceRegion
        : undefined,
    GatewayARN:
      output.GatewayARN !== undefined && output.GatewayARN !== null
        ? output.GatewayARN
        : undefined,
    GatewayId:
      output.GatewayId !== undefined && output.GatewayId !== null
        ? output.GatewayId
        : undefined,
    GatewayName:
      output.GatewayName !== undefined && output.GatewayName !== null
        ? output.GatewayName
        : undefined,
    GatewayNetworkInterfaces:
      output.GatewayNetworkInterfaces !== undefined &&
      output.GatewayNetworkInterfaces !== null
        ? deserializeAws_json1_1GatewayNetworkInterfaces(
            output.GatewayNetworkInterfaces,
            context
          )
        : undefined,
    GatewayState:
      output.GatewayState !== undefined && output.GatewayState !== null
        ? output.GatewayState
        : undefined,
    GatewayTimezone:
      output.GatewayTimezone !== undefined && output.GatewayTimezone !== null
        ? output.GatewayTimezone
        : undefined,
    GatewayType:
      output.GatewayType !== undefined && output.GatewayType !== null
        ? output.GatewayType
        : undefined,
    HostEnvironment:
      output.HostEnvironment !== undefined && output.HostEnvironment !== null
        ? output.HostEnvironment
        : undefined,
    LastSoftwareUpdate:
      output.LastSoftwareUpdate !== undefined &&
      output.LastSoftwareUpdate !== null
        ? output.LastSoftwareUpdate
        : undefined,
    NextUpdateAvailabilityDate:
      output.NextUpdateAvailabilityDate !== undefined &&
      output.NextUpdateAvailabilityDate !== null
        ? output.NextUpdateAvailabilityDate
        : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1Tags(output.Tags, context)
        : undefined,
    VPCEndpoint:
      output.VPCEndpoint !== undefined && output.VPCEndpoint !== null
        ? output.VPCEndpoint
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeMaintenanceStartTimeOutput = (
  output: any,
  context: __SerdeContext
): DescribeMaintenanceStartTimeOutput => {
  return {
    __type: "DescribeMaintenanceStartTimeOutput",
    DayOfMonth:
      output.DayOfMonth !== undefined && output.DayOfMonth !== null
        ? output.DayOfMonth
        : undefined,
    DayOfWeek:
      output.DayOfWeek !== undefined && output.DayOfWeek !== null
        ? output.DayOfWeek
        : undefined,
    GatewayARN:
      output.GatewayARN !== undefined && output.GatewayARN !== null
        ? output.GatewayARN
        : undefined,
    HourOfDay:
      output.HourOfDay !== undefined && output.HourOfDay !== null
        ? output.HourOfDay
        : undefined,
    MinuteOfHour:
      output.MinuteOfHour !== undefined && output.MinuteOfHour !== null
        ? output.MinuteOfHour
        : undefined,
    Timezone:
      output.Timezone !== undefined && output.Timezone !== null
        ? output.Timezone
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeNFSFileSharesOutput = (
  output: any,
  context: __SerdeContext
): DescribeNFSFileSharesOutput => {
  return {
    __type: "DescribeNFSFileSharesOutput",
    NFSFileShareInfoList:
      output.NFSFileShareInfoList !== undefined &&
      output.NFSFileShareInfoList !== null
        ? deserializeAws_json1_1NFSFileShareInfoList(
            output.NFSFileShareInfoList,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeSMBFileSharesOutput = (
  output: any,
  context: __SerdeContext
): DescribeSMBFileSharesOutput => {
  return {
    __type: "DescribeSMBFileSharesOutput",
    SMBFileShareInfoList:
      output.SMBFileShareInfoList !== undefined &&
      output.SMBFileShareInfoList !== null
        ? deserializeAws_json1_1SMBFileShareInfoList(
            output.SMBFileShareInfoList,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeSMBSettingsOutput = (
  output: any,
  context: __SerdeContext
): DescribeSMBSettingsOutput => {
  return {
    __type: "DescribeSMBSettingsOutput",
    ActiveDirectoryStatus:
      output.ActiveDirectoryStatus !== undefined &&
      output.ActiveDirectoryStatus !== null
        ? output.ActiveDirectoryStatus
        : undefined,
    DomainName:
      output.DomainName !== undefined && output.DomainName !== null
        ? output.DomainName
        : undefined,
    GatewayARN:
      output.GatewayARN !== undefined && output.GatewayARN !== null
        ? output.GatewayARN
        : undefined,
    SMBGuestPasswordSet:
      output.SMBGuestPasswordSet !== undefined &&
      output.SMBGuestPasswordSet !== null
        ? output.SMBGuestPasswordSet
        : undefined,
    SMBSecurityStrategy:
      output.SMBSecurityStrategy !== undefined &&
      output.SMBSecurityStrategy !== null
        ? output.SMBSecurityStrategy
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeSnapshotScheduleOutput = (
  output: any,
  context: __SerdeContext
): DescribeSnapshotScheduleOutput => {
  return {
    __type: "DescribeSnapshotScheduleOutput",
    Description:
      output.Description !== undefined && output.Description !== null
        ? output.Description
        : undefined,
    RecurrenceInHours:
      output.RecurrenceInHours !== undefined &&
      output.RecurrenceInHours !== null
        ? output.RecurrenceInHours
        : undefined,
    StartAt:
      output.StartAt !== undefined && output.StartAt !== null
        ? output.StartAt
        : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1Tags(output.Tags, context)
        : undefined,
    Timezone:
      output.Timezone !== undefined && output.Timezone !== null
        ? output.Timezone
        : undefined,
    VolumeARN:
      output.VolumeARN !== undefined && output.VolumeARN !== null
        ? output.VolumeARN
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeStorediSCSIVolumesOutput = (
  output: any,
  context: __SerdeContext
): DescribeStorediSCSIVolumesOutput => {
  return {
    __type: "DescribeStorediSCSIVolumesOutput",
    StorediSCSIVolumes:
      output.StorediSCSIVolumes !== undefined &&
      output.StorediSCSIVolumes !== null
        ? deserializeAws_json1_1StorediSCSIVolumes(
            output.StorediSCSIVolumes,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeTapeArchivesOutput = (
  output: any,
  context: __SerdeContext
): DescribeTapeArchivesOutput => {
  return {
    __type: "DescribeTapeArchivesOutput",
    Marker:
      output.Marker !== undefined && output.Marker !== null
        ? output.Marker
        : undefined,
    TapeArchives:
      output.TapeArchives !== undefined && output.TapeArchives !== null
        ? deserializeAws_json1_1TapeArchives(output.TapeArchives, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeTapeRecoveryPointsOutput = (
  output: any,
  context: __SerdeContext
): DescribeTapeRecoveryPointsOutput => {
  return {
    __type: "DescribeTapeRecoveryPointsOutput",
    GatewayARN:
      output.GatewayARN !== undefined && output.GatewayARN !== null
        ? output.GatewayARN
        : undefined,
    Marker:
      output.Marker !== undefined && output.Marker !== null
        ? output.Marker
        : undefined,
    TapeRecoveryPointInfos:
      output.TapeRecoveryPointInfos !== undefined &&
      output.TapeRecoveryPointInfos !== null
        ? deserializeAws_json1_1TapeRecoveryPointInfos(
            output.TapeRecoveryPointInfos,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeTapesOutput = (
  output: any,
  context: __SerdeContext
): DescribeTapesOutput => {
  return {
    __type: "DescribeTapesOutput",
    Marker:
      output.Marker !== undefined && output.Marker !== null
        ? output.Marker
        : undefined,
    Tapes:
      output.Tapes !== undefined && output.Tapes !== null
        ? deserializeAws_json1_1Tapes(output.Tapes, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeUploadBufferOutput = (
  output: any,
  context: __SerdeContext
): DescribeUploadBufferOutput => {
  return {
    __type: "DescribeUploadBufferOutput",
    DiskIds:
      output.DiskIds !== undefined && output.DiskIds !== null
        ? deserializeAws_json1_1DiskIds(output.DiskIds, context)
        : undefined,
    GatewayARN:
      output.GatewayARN !== undefined && output.GatewayARN !== null
        ? output.GatewayARN
        : undefined,
    UploadBufferAllocatedInBytes:
      output.UploadBufferAllocatedInBytes !== undefined &&
      output.UploadBufferAllocatedInBytes !== null
        ? output.UploadBufferAllocatedInBytes
        : undefined,
    UploadBufferUsedInBytes:
      output.UploadBufferUsedInBytes !== undefined &&
      output.UploadBufferUsedInBytes !== null
        ? output.UploadBufferUsedInBytes
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeVTLDevicesOutput = (
  output: any,
  context: __SerdeContext
): DescribeVTLDevicesOutput => {
  return {
    __type: "DescribeVTLDevicesOutput",
    GatewayARN:
      output.GatewayARN !== undefined && output.GatewayARN !== null
        ? output.GatewayARN
        : undefined,
    Marker:
      output.Marker !== undefined && output.Marker !== null
        ? output.Marker
        : undefined,
    VTLDevices:
      output.VTLDevices !== undefined && output.VTLDevices !== null
        ? deserializeAws_json1_1VTLDevices(output.VTLDevices, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeWorkingStorageOutput = (
  output: any,
  context: __SerdeContext
): DescribeWorkingStorageOutput => {
  return {
    __type: "DescribeWorkingStorageOutput",
    DiskIds:
      output.DiskIds !== undefined && output.DiskIds !== null
        ? deserializeAws_json1_1DiskIds(output.DiskIds, context)
        : undefined,
    GatewayARN:
      output.GatewayARN !== undefined && output.GatewayARN !== null
        ? output.GatewayARN
        : undefined,
    WorkingStorageAllocatedInBytes:
      output.WorkingStorageAllocatedInBytes !== undefined &&
      output.WorkingStorageAllocatedInBytes !== null
        ? output.WorkingStorageAllocatedInBytes
        : undefined,
    WorkingStorageUsedInBytes:
      output.WorkingStorageUsedInBytes !== undefined &&
      output.WorkingStorageUsedInBytes !== null
        ? output.WorkingStorageUsedInBytes
        : undefined
  } as any;
};

const deserializeAws_json1_1DetachVolumeOutput = (
  output: any,
  context: __SerdeContext
): DetachVolumeOutput => {
  return {
    __type: "DetachVolumeOutput",
    VolumeARN:
      output.VolumeARN !== undefined && output.VolumeARN !== null
        ? output.VolumeARN
        : undefined
  } as any;
};

const deserializeAws_json1_1DeviceiSCSIAttributes = (
  output: any,
  context: __SerdeContext
): DeviceiSCSIAttributes => {
  return {
    __type: "DeviceiSCSIAttributes",
    ChapEnabled:
      output.ChapEnabled !== undefined && output.ChapEnabled !== null
        ? output.ChapEnabled
        : undefined,
    NetworkInterfaceId:
      output.NetworkInterfaceId !== undefined &&
      output.NetworkInterfaceId !== null
        ? output.NetworkInterfaceId
        : undefined,
    NetworkInterfacePort:
      output.NetworkInterfacePort !== undefined &&
      output.NetworkInterfacePort !== null
        ? output.NetworkInterfacePort
        : undefined,
    TargetARN:
      output.TargetARN !== undefined && output.TargetARN !== null
        ? output.TargetARN
        : undefined
  } as any;
};

const deserializeAws_json1_1DisableGatewayOutput = (
  output: any,
  context: __SerdeContext
): DisableGatewayOutput => {
  return {
    __type: "DisableGatewayOutput",
    GatewayARN:
      output.GatewayARN !== undefined && output.GatewayARN !== null
        ? output.GatewayARN
        : undefined
  } as any;
};

const deserializeAws_json1_1Disk = (
  output: any,
  context: __SerdeContext
): Disk => {
  return {
    __type: "Disk",
    DiskAllocationResource:
      output.DiskAllocationResource !== undefined &&
      output.DiskAllocationResource !== null
        ? output.DiskAllocationResource
        : undefined,
    DiskAllocationType:
      output.DiskAllocationType !== undefined &&
      output.DiskAllocationType !== null
        ? output.DiskAllocationType
        : undefined,
    DiskAttributeList:
      output.DiskAttributeList !== undefined &&
      output.DiskAttributeList !== null
        ? deserializeAws_json1_1DiskAttributeList(
            output.DiskAttributeList,
            context
          )
        : undefined,
    DiskId:
      output.DiskId !== undefined && output.DiskId !== null
        ? output.DiskId
        : undefined,
    DiskNode:
      output.DiskNode !== undefined && output.DiskNode !== null
        ? output.DiskNode
        : undefined,
    DiskPath:
      output.DiskPath !== undefined && output.DiskPath !== null
        ? output.DiskPath
        : undefined,
    DiskSizeInBytes:
      output.DiskSizeInBytes !== undefined && output.DiskSizeInBytes !== null
        ? output.DiskSizeInBytes
        : undefined,
    DiskStatus:
      output.DiskStatus !== undefined && output.DiskStatus !== null
        ? output.DiskStatus
        : undefined
  } as any;
};

const deserializeAws_json1_1DiskAttributeList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1DiskIds = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1Disks = (
  output: any,
  context: __SerdeContext
): Disk[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Disk(entry, context)
  );
};

const deserializeAws_json1_1errorDetails = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_json1_1FileShareClientList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1FileShareInfo = (
  output: any,
  context: __SerdeContext
): FileShareInfo => {
  return {
    __type: "FileShareInfo",
    FileShareARN:
      output.FileShareARN !== undefined && output.FileShareARN !== null
        ? output.FileShareARN
        : undefined,
    FileShareId:
      output.FileShareId !== undefined && output.FileShareId !== null
        ? output.FileShareId
        : undefined,
    FileShareStatus:
      output.FileShareStatus !== undefined && output.FileShareStatus !== null
        ? output.FileShareStatus
        : undefined,
    FileShareType:
      output.FileShareType !== undefined && output.FileShareType !== null
        ? output.FileShareType
        : undefined,
    GatewayARN:
      output.GatewayARN !== undefined && output.GatewayARN !== null
        ? output.GatewayARN
        : undefined
  } as any;
};

const deserializeAws_json1_1FileShareInfoList = (
  output: any,
  context: __SerdeContext
): FileShareInfo[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1FileShareInfo(entry, context)
  );
};

const deserializeAws_json1_1FileShareUserList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1GatewayInfo = (
  output: any,
  context: __SerdeContext
): GatewayInfo => {
  return {
    __type: "GatewayInfo",
    Ec2InstanceId:
      output.Ec2InstanceId !== undefined && output.Ec2InstanceId !== null
        ? output.Ec2InstanceId
        : undefined,
    Ec2InstanceRegion:
      output.Ec2InstanceRegion !== undefined &&
      output.Ec2InstanceRegion !== null
        ? output.Ec2InstanceRegion
        : undefined,
    GatewayARN:
      output.GatewayARN !== undefined && output.GatewayARN !== null
        ? output.GatewayARN
        : undefined,
    GatewayId:
      output.GatewayId !== undefined && output.GatewayId !== null
        ? output.GatewayId
        : undefined,
    GatewayName:
      output.GatewayName !== undefined && output.GatewayName !== null
        ? output.GatewayName
        : undefined,
    GatewayOperationalState:
      output.GatewayOperationalState !== undefined &&
      output.GatewayOperationalState !== null
        ? output.GatewayOperationalState
        : undefined,
    GatewayType:
      output.GatewayType !== undefined && output.GatewayType !== null
        ? output.GatewayType
        : undefined
  } as any;
};

const deserializeAws_json1_1GatewayNetworkInterfaces = (
  output: any,
  context: __SerdeContext
): NetworkInterface[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1NetworkInterface(entry, context)
  );
};

const deserializeAws_json1_1Gateways = (
  output: any,
  context: __SerdeContext
): GatewayInfo[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1GatewayInfo(entry, context)
  );
};

const deserializeAws_json1_1Initiators = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1InternalServerError = (
  output: any,
  context: __SerdeContext
): InternalServerError => {
  return {
    __type: "InternalServerError",
    error:
      output.error !== undefined && output.error !== null
        ? deserializeAws_json1_1StorageGatewayError(output.error, context)
        : undefined,
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidGatewayRequestException = (
  output: any,
  context: __SerdeContext
): InvalidGatewayRequestException => {
  return {
    __type: "InvalidGatewayRequestException",
    error:
      output.error !== undefined && output.error !== null
        ? deserializeAws_json1_1StorageGatewayError(output.error, context)
        : undefined,
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1JoinDomainOutput = (
  output: any,
  context: __SerdeContext
): JoinDomainOutput => {
  return {
    __type: "JoinDomainOutput",
    ActiveDirectoryStatus:
      output.ActiveDirectoryStatus !== undefined &&
      output.ActiveDirectoryStatus !== null
        ? output.ActiveDirectoryStatus
        : undefined,
    GatewayARN:
      output.GatewayARN !== undefined && output.GatewayARN !== null
        ? output.GatewayARN
        : undefined
  } as any;
};

const deserializeAws_json1_1ListFileSharesOutput = (
  output: any,
  context: __SerdeContext
): ListFileSharesOutput => {
  return {
    __type: "ListFileSharesOutput",
    FileShareInfoList:
      output.FileShareInfoList !== undefined &&
      output.FileShareInfoList !== null
        ? deserializeAws_json1_1FileShareInfoList(
            output.FileShareInfoList,
            context
          )
        : undefined,
    Marker:
      output.Marker !== undefined && output.Marker !== null
        ? output.Marker
        : undefined,
    NextMarker:
      output.NextMarker !== undefined && output.NextMarker !== null
        ? output.NextMarker
        : undefined
  } as any;
};

const deserializeAws_json1_1ListGatewaysOutput = (
  output: any,
  context: __SerdeContext
): ListGatewaysOutput => {
  return {
    __type: "ListGatewaysOutput",
    Gateways:
      output.Gateways !== undefined && output.Gateways !== null
        ? deserializeAws_json1_1Gateways(output.Gateways, context)
        : undefined,
    Marker:
      output.Marker !== undefined && output.Marker !== null
        ? output.Marker
        : undefined
  } as any;
};

const deserializeAws_json1_1ListLocalDisksOutput = (
  output: any,
  context: __SerdeContext
): ListLocalDisksOutput => {
  return {
    __type: "ListLocalDisksOutput",
    Disks:
      output.Disks !== undefined && output.Disks !== null
        ? deserializeAws_json1_1Disks(output.Disks, context)
        : undefined,
    GatewayARN:
      output.GatewayARN !== undefined && output.GatewayARN !== null
        ? output.GatewayARN
        : undefined
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceOutput = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceOutput => {
  return {
    __type: "ListTagsForResourceOutput",
    Marker:
      output.Marker !== undefined && output.Marker !== null
        ? output.Marker
        : undefined,
    ResourceARN:
      output.ResourceARN !== undefined && output.ResourceARN !== null
        ? output.ResourceARN
        : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1Tags(output.Tags, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ListTapesOutput = (
  output: any,
  context: __SerdeContext
): ListTapesOutput => {
  return {
    __type: "ListTapesOutput",
    Marker:
      output.Marker !== undefined && output.Marker !== null
        ? output.Marker
        : undefined,
    TapeInfos:
      output.TapeInfos !== undefined && output.TapeInfos !== null
        ? deserializeAws_json1_1TapeInfos(output.TapeInfos, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ListVolumeInitiatorsOutput = (
  output: any,
  context: __SerdeContext
): ListVolumeInitiatorsOutput => {
  return {
    __type: "ListVolumeInitiatorsOutput",
    Initiators:
      output.Initiators !== undefined && output.Initiators !== null
        ? deserializeAws_json1_1Initiators(output.Initiators, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ListVolumeRecoveryPointsOutput = (
  output: any,
  context: __SerdeContext
): ListVolumeRecoveryPointsOutput => {
  return {
    __type: "ListVolumeRecoveryPointsOutput",
    GatewayARN:
      output.GatewayARN !== undefined && output.GatewayARN !== null
        ? output.GatewayARN
        : undefined,
    VolumeRecoveryPointInfos:
      output.VolumeRecoveryPointInfos !== undefined &&
      output.VolumeRecoveryPointInfos !== null
        ? deserializeAws_json1_1VolumeRecoveryPointInfos(
            output.VolumeRecoveryPointInfos,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1ListVolumesOutput = (
  output: any,
  context: __SerdeContext
): ListVolumesOutput => {
  return {
    __type: "ListVolumesOutput",
    GatewayARN:
      output.GatewayARN !== undefined && output.GatewayARN !== null
        ? output.GatewayARN
        : undefined,
    Marker:
      output.Marker !== undefined && output.Marker !== null
        ? output.Marker
        : undefined,
    VolumeInfos:
      output.VolumeInfos !== undefined && output.VolumeInfos !== null
        ? deserializeAws_json1_1VolumeInfos(output.VolumeInfos, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1NetworkInterface = (
  output: any,
  context: __SerdeContext
): NetworkInterface => {
  return {
    __type: "NetworkInterface",
    Ipv4Address:
      output.Ipv4Address !== undefined && output.Ipv4Address !== null
        ? output.Ipv4Address
        : undefined,
    Ipv6Address:
      output.Ipv6Address !== undefined && output.Ipv6Address !== null
        ? output.Ipv6Address
        : undefined,
    MacAddress:
      output.MacAddress !== undefined && output.MacAddress !== null
        ? output.MacAddress
        : undefined
  } as any;
};

const deserializeAws_json1_1NFSFileShareDefaults = (
  output: any,
  context: __SerdeContext
): NFSFileShareDefaults => {
  return {
    __type: "NFSFileShareDefaults",
    DirectoryMode:
      output.DirectoryMode !== undefined && output.DirectoryMode !== null
        ? output.DirectoryMode
        : undefined,
    FileMode:
      output.FileMode !== undefined && output.FileMode !== null
        ? output.FileMode
        : undefined,
    GroupId:
      output.GroupId !== undefined && output.GroupId !== null
        ? output.GroupId
        : undefined,
    OwnerId:
      output.OwnerId !== undefined && output.OwnerId !== null
        ? output.OwnerId
        : undefined
  } as any;
};

const deserializeAws_json1_1NFSFileShareInfo = (
  output: any,
  context: __SerdeContext
): NFSFileShareInfo => {
  return {
    __type: "NFSFileShareInfo",
    ClientList:
      output.ClientList !== undefined && output.ClientList !== null
        ? deserializeAws_json1_1FileShareClientList(output.ClientList, context)
        : undefined,
    DefaultStorageClass:
      output.DefaultStorageClass !== undefined &&
      output.DefaultStorageClass !== null
        ? output.DefaultStorageClass
        : undefined,
    FileShareARN:
      output.FileShareARN !== undefined && output.FileShareARN !== null
        ? output.FileShareARN
        : undefined,
    FileShareId:
      output.FileShareId !== undefined && output.FileShareId !== null
        ? output.FileShareId
        : undefined,
    FileShareStatus:
      output.FileShareStatus !== undefined && output.FileShareStatus !== null
        ? output.FileShareStatus
        : undefined,
    GatewayARN:
      output.GatewayARN !== undefined && output.GatewayARN !== null
        ? output.GatewayARN
        : undefined,
    GuessMIMETypeEnabled:
      output.GuessMIMETypeEnabled !== undefined &&
      output.GuessMIMETypeEnabled !== null
        ? output.GuessMIMETypeEnabled
        : undefined,
    KMSEncrypted:
      output.KMSEncrypted !== undefined && output.KMSEncrypted !== null
        ? output.KMSEncrypted
        : undefined,
    KMSKey:
      output.KMSKey !== undefined && output.KMSKey !== null
        ? output.KMSKey
        : undefined,
    LocationARN:
      output.LocationARN !== undefined && output.LocationARN !== null
        ? output.LocationARN
        : undefined,
    NFSFileShareDefaults:
      output.NFSFileShareDefaults !== undefined &&
      output.NFSFileShareDefaults !== null
        ? deserializeAws_json1_1NFSFileShareDefaults(
            output.NFSFileShareDefaults,
            context
          )
        : undefined,
    ObjectACL:
      output.ObjectACL !== undefined && output.ObjectACL !== null
        ? output.ObjectACL
        : undefined,
    Path:
      output.Path !== undefined && output.Path !== null
        ? output.Path
        : undefined,
    ReadOnly:
      output.ReadOnly !== undefined && output.ReadOnly !== null
        ? output.ReadOnly
        : undefined,
    RequesterPays:
      output.RequesterPays !== undefined && output.RequesterPays !== null
        ? output.RequesterPays
        : undefined,
    Role:
      output.Role !== undefined && output.Role !== null
        ? output.Role
        : undefined,
    Squash:
      output.Squash !== undefined && output.Squash !== null
        ? output.Squash
        : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1Tags(output.Tags, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1NFSFileShareInfoList = (
  output: any,
  context: __SerdeContext
): NFSFileShareInfo[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1NFSFileShareInfo(entry, context)
  );
};

const deserializeAws_json1_1NotifyWhenUploadedOutput = (
  output: any,
  context: __SerdeContext
): NotifyWhenUploadedOutput => {
  return {
    __type: "NotifyWhenUploadedOutput",
    FileShareARN:
      output.FileShareARN !== undefined && output.FileShareARN !== null
        ? output.FileShareARN
        : undefined,
    NotificationId:
      output.NotificationId !== undefined && output.NotificationId !== null
        ? output.NotificationId
        : undefined
  } as any;
};

const deserializeAws_json1_1RefreshCacheOutput = (
  output: any,
  context: __SerdeContext
): RefreshCacheOutput => {
  return {
    __type: "RefreshCacheOutput",
    FileShareARN:
      output.FileShareARN !== undefined && output.FileShareARN !== null
        ? output.FileShareARN
        : undefined,
    NotificationId:
      output.NotificationId !== undefined && output.NotificationId !== null
        ? output.NotificationId
        : undefined
  } as any;
};

const deserializeAws_json1_1RemoveTagsFromResourceOutput = (
  output: any,
  context: __SerdeContext
): RemoveTagsFromResourceOutput => {
  return {
    __type: "RemoveTagsFromResourceOutput",
    ResourceARN:
      output.ResourceARN !== undefined && output.ResourceARN !== null
        ? output.ResourceARN
        : undefined
  } as any;
};

const deserializeAws_json1_1ResetCacheOutput = (
  output: any,
  context: __SerdeContext
): ResetCacheOutput => {
  return {
    __type: "ResetCacheOutput",
    GatewayARN:
      output.GatewayARN !== undefined && output.GatewayARN !== null
        ? output.GatewayARN
        : undefined
  } as any;
};

const deserializeAws_json1_1RetrieveTapeArchiveOutput = (
  output: any,
  context: __SerdeContext
): RetrieveTapeArchiveOutput => {
  return {
    __type: "RetrieveTapeArchiveOutput",
    TapeARN:
      output.TapeARN !== undefined && output.TapeARN !== null
        ? output.TapeARN
        : undefined
  } as any;
};

const deserializeAws_json1_1RetrieveTapeRecoveryPointOutput = (
  output: any,
  context: __SerdeContext
): RetrieveTapeRecoveryPointOutput => {
  return {
    __type: "RetrieveTapeRecoveryPointOutput",
    TapeARN:
      output.TapeARN !== undefined && output.TapeARN !== null
        ? output.TapeARN
        : undefined
  } as any;
};

const deserializeAws_json1_1ServiceUnavailableError = (
  output: any,
  context: __SerdeContext
): ServiceUnavailableError => {
  return {
    __type: "ServiceUnavailableError",
    error:
      output.error !== undefined && output.error !== null
        ? deserializeAws_json1_1StorageGatewayError(output.error, context)
        : undefined,
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1SetLocalConsolePasswordOutput = (
  output: any,
  context: __SerdeContext
): SetLocalConsolePasswordOutput => {
  return {
    __type: "SetLocalConsolePasswordOutput",
    GatewayARN:
      output.GatewayARN !== undefined && output.GatewayARN !== null
        ? output.GatewayARN
        : undefined
  } as any;
};

const deserializeAws_json1_1SetSMBGuestPasswordOutput = (
  output: any,
  context: __SerdeContext
): SetSMBGuestPasswordOutput => {
  return {
    __type: "SetSMBGuestPasswordOutput",
    GatewayARN:
      output.GatewayARN !== undefined && output.GatewayARN !== null
        ? output.GatewayARN
        : undefined
  } as any;
};

const deserializeAws_json1_1ShutdownGatewayOutput = (
  output: any,
  context: __SerdeContext
): ShutdownGatewayOutput => {
  return {
    __type: "ShutdownGatewayOutput",
    GatewayARN:
      output.GatewayARN !== undefined && output.GatewayARN !== null
        ? output.GatewayARN
        : undefined
  } as any;
};

const deserializeAws_json1_1SMBFileShareInfo = (
  output: any,
  context: __SerdeContext
): SMBFileShareInfo => {
  return {
    __type: "SMBFileShareInfo",
    AdminUserList:
      output.AdminUserList !== undefined && output.AdminUserList !== null
        ? deserializeAws_json1_1FileShareUserList(output.AdminUserList, context)
        : undefined,
    Authentication:
      output.Authentication !== undefined && output.Authentication !== null
        ? output.Authentication
        : undefined,
    DefaultStorageClass:
      output.DefaultStorageClass !== undefined &&
      output.DefaultStorageClass !== null
        ? output.DefaultStorageClass
        : undefined,
    FileShareARN:
      output.FileShareARN !== undefined && output.FileShareARN !== null
        ? output.FileShareARN
        : undefined,
    FileShareId:
      output.FileShareId !== undefined && output.FileShareId !== null
        ? output.FileShareId
        : undefined,
    FileShareStatus:
      output.FileShareStatus !== undefined && output.FileShareStatus !== null
        ? output.FileShareStatus
        : undefined,
    GatewayARN:
      output.GatewayARN !== undefined && output.GatewayARN !== null
        ? output.GatewayARN
        : undefined,
    GuessMIMETypeEnabled:
      output.GuessMIMETypeEnabled !== undefined &&
      output.GuessMIMETypeEnabled !== null
        ? output.GuessMIMETypeEnabled
        : undefined,
    InvalidUserList:
      output.InvalidUserList !== undefined && output.InvalidUserList !== null
        ? deserializeAws_json1_1FileShareUserList(
            output.InvalidUserList,
            context
          )
        : undefined,
    KMSEncrypted:
      output.KMSEncrypted !== undefined && output.KMSEncrypted !== null
        ? output.KMSEncrypted
        : undefined,
    KMSKey:
      output.KMSKey !== undefined && output.KMSKey !== null
        ? output.KMSKey
        : undefined,
    LocationARN:
      output.LocationARN !== undefined && output.LocationARN !== null
        ? output.LocationARN
        : undefined,
    ObjectACL:
      output.ObjectACL !== undefined && output.ObjectACL !== null
        ? output.ObjectACL
        : undefined,
    Path:
      output.Path !== undefined && output.Path !== null
        ? output.Path
        : undefined,
    ReadOnly:
      output.ReadOnly !== undefined && output.ReadOnly !== null
        ? output.ReadOnly
        : undefined,
    RequesterPays:
      output.RequesterPays !== undefined && output.RequesterPays !== null
        ? output.RequesterPays
        : undefined,
    Role:
      output.Role !== undefined && output.Role !== null
        ? output.Role
        : undefined,
    SMBACLEnabled:
      output.SMBACLEnabled !== undefined && output.SMBACLEnabled !== null
        ? output.SMBACLEnabled
        : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1Tags(output.Tags, context)
        : undefined,
    ValidUserList:
      output.ValidUserList !== undefined && output.ValidUserList !== null
        ? deserializeAws_json1_1FileShareUserList(output.ValidUserList, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1SMBFileShareInfoList = (
  output: any,
  context: __SerdeContext
): SMBFileShareInfo[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1SMBFileShareInfo(entry, context)
  );
};

const deserializeAws_json1_1StartAvailabilityMonitorTestOutput = (
  output: any,
  context: __SerdeContext
): StartAvailabilityMonitorTestOutput => {
  return {
    __type: "StartAvailabilityMonitorTestOutput",
    GatewayARN:
      output.GatewayARN !== undefined && output.GatewayARN !== null
        ? output.GatewayARN
        : undefined
  } as any;
};

const deserializeAws_json1_1StartGatewayOutput = (
  output: any,
  context: __SerdeContext
): StartGatewayOutput => {
  return {
    __type: "StartGatewayOutput",
    GatewayARN:
      output.GatewayARN !== undefined && output.GatewayARN !== null
        ? output.GatewayARN
        : undefined
  } as any;
};

const deserializeAws_json1_1StorageGatewayError = (
  output: any,
  context: __SerdeContext
): StorageGatewayError => {
  return {
    __type: "StorageGatewayError",
    errorCode:
      output.errorCode !== undefined && output.errorCode !== null
        ? output.errorCode
        : undefined,
    errorDetails:
      output.errorDetails !== undefined && output.errorDetails !== null
        ? deserializeAws_json1_1errorDetails(output.errorDetails, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1StorediSCSIVolume = (
  output: any,
  context: __SerdeContext
): StorediSCSIVolume => {
  return {
    __type: "StorediSCSIVolume",
    CreatedDate:
      output.CreatedDate !== undefined && output.CreatedDate !== null
        ? new Date(Math.round(output.CreatedDate * 1000))
        : undefined,
    KMSKey:
      output.KMSKey !== undefined && output.KMSKey !== null
        ? output.KMSKey
        : undefined,
    PreservedExistingData:
      output.PreservedExistingData !== undefined &&
      output.PreservedExistingData !== null
        ? output.PreservedExistingData
        : undefined,
    SourceSnapshotId:
      output.SourceSnapshotId !== undefined && output.SourceSnapshotId !== null
        ? output.SourceSnapshotId
        : undefined,
    TargetName:
      output.TargetName !== undefined && output.TargetName !== null
        ? output.TargetName
        : undefined,
    VolumeARN:
      output.VolumeARN !== undefined && output.VolumeARN !== null
        ? output.VolumeARN
        : undefined,
    VolumeAttachmentStatus:
      output.VolumeAttachmentStatus !== undefined &&
      output.VolumeAttachmentStatus !== null
        ? output.VolumeAttachmentStatus
        : undefined,
    VolumeDiskId:
      output.VolumeDiskId !== undefined && output.VolumeDiskId !== null
        ? output.VolumeDiskId
        : undefined,
    VolumeId:
      output.VolumeId !== undefined && output.VolumeId !== null
        ? output.VolumeId
        : undefined,
    VolumeProgress:
      output.VolumeProgress !== undefined && output.VolumeProgress !== null
        ? output.VolumeProgress
        : undefined,
    VolumeSizeInBytes:
      output.VolumeSizeInBytes !== undefined &&
      output.VolumeSizeInBytes !== null
        ? output.VolumeSizeInBytes
        : undefined,
    VolumeStatus:
      output.VolumeStatus !== undefined && output.VolumeStatus !== null
        ? output.VolumeStatus
        : undefined,
    VolumeType:
      output.VolumeType !== undefined && output.VolumeType !== null
        ? output.VolumeType
        : undefined,
    VolumeUsedInBytes:
      output.VolumeUsedInBytes !== undefined &&
      output.VolumeUsedInBytes !== null
        ? output.VolumeUsedInBytes
        : undefined,
    VolumeiSCSIAttributes:
      output.VolumeiSCSIAttributes !== undefined &&
      output.VolumeiSCSIAttributes !== null
        ? deserializeAws_json1_1VolumeiSCSIAttributes(
            output.VolumeiSCSIAttributes,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1StorediSCSIVolumes = (
  output: any,
  context: __SerdeContext
): StorediSCSIVolume[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1StorediSCSIVolume(entry, context)
  );
};

const deserializeAws_json1_1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  return {
    __type: "Tag",
    Key:
      output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Value:
      output.Value !== undefined && output.Value !== null
        ? output.Value
        : undefined
  } as any;
};

const deserializeAws_json1_1Tags = (
  output: any,
  context: __SerdeContext
): Tag[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Tag(entry, context)
  );
};

const deserializeAws_json1_1Tape = (
  output: any,
  context: __SerdeContext
): Tape => {
  return {
    __type: "Tape",
    KMSKey:
      output.KMSKey !== undefined && output.KMSKey !== null
        ? output.KMSKey
        : undefined,
    PoolId:
      output.PoolId !== undefined && output.PoolId !== null
        ? output.PoolId
        : undefined,
    Progress:
      output.Progress !== undefined && output.Progress !== null
        ? output.Progress
        : undefined,
    TapeARN:
      output.TapeARN !== undefined && output.TapeARN !== null
        ? output.TapeARN
        : undefined,
    TapeBarcode:
      output.TapeBarcode !== undefined && output.TapeBarcode !== null
        ? output.TapeBarcode
        : undefined,
    TapeCreatedDate:
      output.TapeCreatedDate !== undefined && output.TapeCreatedDate !== null
        ? new Date(Math.round(output.TapeCreatedDate * 1000))
        : undefined,
    TapeSizeInBytes:
      output.TapeSizeInBytes !== undefined && output.TapeSizeInBytes !== null
        ? output.TapeSizeInBytes
        : undefined,
    TapeStatus:
      output.TapeStatus !== undefined && output.TapeStatus !== null
        ? output.TapeStatus
        : undefined,
    TapeUsedInBytes:
      output.TapeUsedInBytes !== undefined && output.TapeUsedInBytes !== null
        ? output.TapeUsedInBytes
        : undefined,
    VTLDevice:
      output.VTLDevice !== undefined && output.VTLDevice !== null
        ? output.VTLDevice
        : undefined
  } as any;
};

const deserializeAws_json1_1TapeArchive = (
  output: any,
  context: __SerdeContext
): TapeArchive => {
  return {
    __type: "TapeArchive",
    CompletionTime:
      output.CompletionTime !== undefined && output.CompletionTime !== null
        ? new Date(Math.round(output.CompletionTime * 1000))
        : undefined,
    KMSKey:
      output.KMSKey !== undefined && output.KMSKey !== null
        ? output.KMSKey
        : undefined,
    PoolId:
      output.PoolId !== undefined && output.PoolId !== null
        ? output.PoolId
        : undefined,
    RetrievedTo:
      output.RetrievedTo !== undefined && output.RetrievedTo !== null
        ? output.RetrievedTo
        : undefined,
    TapeARN:
      output.TapeARN !== undefined && output.TapeARN !== null
        ? output.TapeARN
        : undefined,
    TapeBarcode:
      output.TapeBarcode !== undefined && output.TapeBarcode !== null
        ? output.TapeBarcode
        : undefined,
    TapeCreatedDate:
      output.TapeCreatedDate !== undefined && output.TapeCreatedDate !== null
        ? new Date(Math.round(output.TapeCreatedDate * 1000))
        : undefined,
    TapeSizeInBytes:
      output.TapeSizeInBytes !== undefined && output.TapeSizeInBytes !== null
        ? output.TapeSizeInBytes
        : undefined,
    TapeStatus:
      output.TapeStatus !== undefined && output.TapeStatus !== null
        ? output.TapeStatus
        : undefined,
    TapeUsedInBytes:
      output.TapeUsedInBytes !== undefined && output.TapeUsedInBytes !== null
        ? output.TapeUsedInBytes
        : undefined
  } as any;
};

const deserializeAws_json1_1TapeArchives = (
  output: any,
  context: __SerdeContext
): TapeArchive[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1TapeArchive(entry, context)
  );
};

const deserializeAws_json1_1TapeARNs = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1TapeInfo = (
  output: any,
  context: __SerdeContext
): TapeInfo => {
  return {
    __type: "TapeInfo",
    GatewayARN:
      output.GatewayARN !== undefined && output.GatewayARN !== null
        ? output.GatewayARN
        : undefined,
    PoolId:
      output.PoolId !== undefined && output.PoolId !== null
        ? output.PoolId
        : undefined,
    TapeARN:
      output.TapeARN !== undefined && output.TapeARN !== null
        ? output.TapeARN
        : undefined,
    TapeBarcode:
      output.TapeBarcode !== undefined && output.TapeBarcode !== null
        ? output.TapeBarcode
        : undefined,
    TapeSizeInBytes:
      output.TapeSizeInBytes !== undefined && output.TapeSizeInBytes !== null
        ? output.TapeSizeInBytes
        : undefined,
    TapeStatus:
      output.TapeStatus !== undefined && output.TapeStatus !== null
        ? output.TapeStatus
        : undefined
  } as any;
};

const deserializeAws_json1_1TapeInfos = (
  output: any,
  context: __SerdeContext
): TapeInfo[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1TapeInfo(entry, context)
  );
};

const deserializeAws_json1_1TapeRecoveryPointInfo = (
  output: any,
  context: __SerdeContext
): TapeRecoveryPointInfo => {
  return {
    __type: "TapeRecoveryPointInfo",
    TapeARN:
      output.TapeARN !== undefined && output.TapeARN !== null
        ? output.TapeARN
        : undefined,
    TapeRecoveryPointTime:
      output.TapeRecoveryPointTime !== undefined &&
      output.TapeRecoveryPointTime !== null
        ? new Date(Math.round(output.TapeRecoveryPointTime * 1000))
        : undefined,
    TapeSizeInBytes:
      output.TapeSizeInBytes !== undefined && output.TapeSizeInBytes !== null
        ? output.TapeSizeInBytes
        : undefined,
    TapeStatus:
      output.TapeStatus !== undefined && output.TapeStatus !== null
        ? output.TapeStatus
        : undefined
  } as any;
};

const deserializeAws_json1_1TapeRecoveryPointInfos = (
  output: any,
  context: __SerdeContext
): TapeRecoveryPointInfo[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1TapeRecoveryPointInfo(entry, context)
  );
};

const deserializeAws_json1_1Tapes = (
  output: any,
  context: __SerdeContext
): Tape[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Tape(entry, context)
  );
};

const deserializeAws_json1_1UpdateBandwidthRateLimitOutput = (
  output: any,
  context: __SerdeContext
): UpdateBandwidthRateLimitOutput => {
  return {
    __type: "UpdateBandwidthRateLimitOutput",
    GatewayARN:
      output.GatewayARN !== undefined && output.GatewayARN !== null
        ? output.GatewayARN
        : undefined
  } as any;
};

const deserializeAws_json1_1UpdateChapCredentialsOutput = (
  output: any,
  context: __SerdeContext
): UpdateChapCredentialsOutput => {
  return {
    __type: "UpdateChapCredentialsOutput",
    InitiatorName:
      output.InitiatorName !== undefined && output.InitiatorName !== null
        ? output.InitiatorName
        : undefined,
    TargetARN:
      output.TargetARN !== undefined && output.TargetARN !== null
        ? output.TargetARN
        : undefined
  } as any;
};

const deserializeAws_json1_1UpdateGatewayInformationOutput = (
  output: any,
  context: __SerdeContext
): UpdateGatewayInformationOutput => {
  return {
    __type: "UpdateGatewayInformationOutput",
    GatewayARN:
      output.GatewayARN !== undefined && output.GatewayARN !== null
        ? output.GatewayARN
        : undefined,
    GatewayName:
      output.GatewayName !== undefined && output.GatewayName !== null
        ? output.GatewayName
        : undefined
  } as any;
};

const deserializeAws_json1_1UpdateGatewaySoftwareNowOutput = (
  output: any,
  context: __SerdeContext
): UpdateGatewaySoftwareNowOutput => {
  return {
    __type: "UpdateGatewaySoftwareNowOutput",
    GatewayARN:
      output.GatewayARN !== undefined && output.GatewayARN !== null
        ? output.GatewayARN
        : undefined
  } as any;
};

const deserializeAws_json1_1UpdateMaintenanceStartTimeOutput = (
  output: any,
  context: __SerdeContext
): UpdateMaintenanceStartTimeOutput => {
  return {
    __type: "UpdateMaintenanceStartTimeOutput",
    GatewayARN:
      output.GatewayARN !== undefined && output.GatewayARN !== null
        ? output.GatewayARN
        : undefined
  } as any;
};

const deserializeAws_json1_1UpdateNFSFileShareOutput = (
  output: any,
  context: __SerdeContext
): UpdateNFSFileShareOutput => {
  return {
    __type: "UpdateNFSFileShareOutput",
    FileShareARN:
      output.FileShareARN !== undefined && output.FileShareARN !== null
        ? output.FileShareARN
        : undefined
  } as any;
};

const deserializeAws_json1_1UpdateSMBFileShareOutput = (
  output: any,
  context: __SerdeContext
): UpdateSMBFileShareOutput => {
  return {
    __type: "UpdateSMBFileShareOutput",
    FileShareARN:
      output.FileShareARN !== undefined && output.FileShareARN !== null
        ? output.FileShareARN
        : undefined
  } as any;
};

const deserializeAws_json1_1UpdateSMBSecurityStrategyOutput = (
  output: any,
  context: __SerdeContext
): UpdateSMBSecurityStrategyOutput => {
  return {
    __type: "UpdateSMBSecurityStrategyOutput",
    GatewayARN:
      output.GatewayARN !== undefined && output.GatewayARN !== null
        ? output.GatewayARN
        : undefined
  } as any;
};

const deserializeAws_json1_1UpdateSnapshotScheduleOutput = (
  output: any,
  context: __SerdeContext
): UpdateSnapshotScheduleOutput => {
  return {
    __type: "UpdateSnapshotScheduleOutput",
    VolumeARN:
      output.VolumeARN !== undefined && output.VolumeARN !== null
        ? output.VolumeARN
        : undefined
  } as any;
};

const deserializeAws_json1_1UpdateVTLDeviceTypeOutput = (
  output: any,
  context: __SerdeContext
): UpdateVTLDeviceTypeOutput => {
  return {
    __type: "UpdateVTLDeviceTypeOutput",
    VTLDeviceARN:
      output.VTLDeviceARN !== undefined && output.VTLDeviceARN !== null
        ? output.VTLDeviceARN
        : undefined
  } as any;
};

const deserializeAws_json1_1VolumeInfo = (
  output: any,
  context: __SerdeContext
): VolumeInfo => {
  return {
    __type: "VolumeInfo",
    GatewayARN:
      output.GatewayARN !== undefined && output.GatewayARN !== null
        ? output.GatewayARN
        : undefined,
    GatewayId:
      output.GatewayId !== undefined && output.GatewayId !== null
        ? output.GatewayId
        : undefined,
    VolumeARN:
      output.VolumeARN !== undefined && output.VolumeARN !== null
        ? output.VolumeARN
        : undefined,
    VolumeAttachmentStatus:
      output.VolumeAttachmentStatus !== undefined &&
      output.VolumeAttachmentStatus !== null
        ? output.VolumeAttachmentStatus
        : undefined,
    VolumeId:
      output.VolumeId !== undefined && output.VolumeId !== null
        ? output.VolumeId
        : undefined,
    VolumeSizeInBytes:
      output.VolumeSizeInBytes !== undefined &&
      output.VolumeSizeInBytes !== null
        ? output.VolumeSizeInBytes
        : undefined,
    VolumeType:
      output.VolumeType !== undefined && output.VolumeType !== null
        ? output.VolumeType
        : undefined
  } as any;
};

const deserializeAws_json1_1VolumeInfos = (
  output: any,
  context: __SerdeContext
): VolumeInfo[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1VolumeInfo(entry, context)
  );
};

const deserializeAws_json1_1VolumeiSCSIAttributes = (
  output: any,
  context: __SerdeContext
): VolumeiSCSIAttributes => {
  return {
    __type: "VolumeiSCSIAttributes",
    ChapEnabled:
      output.ChapEnabled !== undefined && output.ChapEnabled !== null
        ? output.ChapEnabled
        : undefined,
    LunNumber:
      output.LunNumber !== undefined && output.LunNumber !== null
        ? output.LunNumber
        : undefined,
    NetworkInterfaceId:
      output.NetworkInterfaceId !== undefined &&
      output.NetworkInterfaceId !== null
        ? output.NetworkInterfaceId
        : undefined,
    NetworkInterfacePort:
      output.NetworkInterfacePort !== undefined &&
      output.NetworkInterfacePort !== null
        ? output.NetworkInterfacePort
        : undefined,
    TargetARN:
      output.TargetARN !== undefined && output.TargetARN !== null
        ? output.TargetARN
        : undefined
  } as any;
};

const deserializeAws_json1_1VolumeRecoveryPointInfo = (
  output: any,
  context: __SerdeContext
): VolumeRecoveryPointInfo => {
  return {
    __type: "VolumeRecoveryPointInfo",
    VolumeARN:
      output.VolumeARN !== undefined && output.VolumeARN !== null
        ? output.VolumeARN
        : undefined,
    VolumeRecoveryPointTime:
      output.VolumeRecoveryPointTime !== undefined &&
      output.VolumeRecoveryPointTime !== null
        ? output.VolumeRecoveryPointTime
        : undefined,
    VolumeSizeInBytes:
      output.VolumeSizeInBytes !== undefined &&
      output.VolumeSizeInBytes !== null
        ? output.VolumeSizeInBytes
        : undefined,
    VolumeUsageInBytes:
      output.VolumeUsageInBytes !== undefined &&
      output.VolumeUsageInBytes !== null
        ? output.VolumeUsageInBytes
        : undefined
  } as any;
};

const deserializeAws_json1_1VolumeRecoveryPointInfos = (
  output: any,
  context: __SerdeContext
): VolumeRecoveryPointInfo[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1VolumeRecoveryPointInfo(entry, context)
  );
};

const deserializeAws_json1_1VTLDevice = (
  output: any,
  context: __SerdeContext
): VTLDevice => {
  return {
    __type: "VTLDevice",
    DeviceiSCSIAttributes:
      output.DeviceiSCSIAttributes !== undefined &&
      output.DeviceiSCSIAttributes !== null
        ? deserializeAws_json1_1DeviceiSCSIAttributes(
            output.DeviceiSCSIAttributes,
            context
          )
        : undefined,
    VTLDeviceARN:
      output.VTLDeviceARN !== undefined && output.VTLDeviceARN !== null
        ? output.VTLDeviceARN
        : undefined,
    VTLDeviceProductIdentifier:
      output.VTLDeviceProductIdentifier !== undefined &&
      output.VTLDeviceProductIdentifier !== null
        ? output.VTLDeviceProductIdentifier
        : undefined,
    VTLDeviceType:
      output.VTLDeviceType !== undefined && output.VTLDeviceType !== null
        ? output.VTLDeviceType
        : undefined,
    VTLDeviceVendor:
      output.VTLDeviceVendor !== undefined && output.VTLDeviceVendor !== null
        ? output.VTLDeviceVendor
        : undefined
  } as any;
};

const deserializeAws_json1_1VTLDevices = (
  output: any,
  context: __SerdeContext
): VTLDevice[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1VTLDevice(entry, context)
  );
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any = new Uint8Array(),
  context: __SerdeContext
): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return (
    context.streamCollector(streamBody) || Promise.resolve(new Uint8Array())
  );
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (
  streamBody: any,
  context: __SerdeContext
): Promise<string> =>
  collectBody(streamBody, context).then(body => context.utf8Encoder(body));

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path,
    headers
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
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
