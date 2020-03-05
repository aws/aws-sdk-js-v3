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

export async function serializeAws_json1_1ActivateGatewayCommand(
  input: ActivateGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.ActivateGateway";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ActivateGatewayInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1AddCacheCommand(
  input: AddCacheCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.AddCache";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AddCacheInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1AddTagsToResourceCommand(
  input: AddTagsToResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.AddTagsToResource";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AddTagsToResourceInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1AddUploadBufferCommand(
  input: AddUploadBufferCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.AddUploadBuffer";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AddUploadBufferInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1AddWorkingStorageCommand(
  input: AddWorkingStorageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.AddWorkingStorage";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AddWorkingStorageInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1AssignTapePoolCommand(
  input: AssignTapePoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.AssignTapePool";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AssignTapePoolInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1AttachVolumeCommand(
  input: AttachVolumeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.AttachVolume";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AttachVolumeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CancelArchivalCommand(
  input: CancelArchivalCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.CancelArchival";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CancelArchivalInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CancelRetrievalCommand(
  input: CancelRetrievalCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.CancelRetrieval";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CancelRetrievalInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateCachediSCSIVolumeCommand(
  input: CreateCachediSCSIVolumeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.CreateCachediSCSIVolume";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateCachediSCSIVolumeInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateNFSFileShareCommand(
  input: CreateNFSFileShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.CreateNFSFileShare";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateNFSFileShareInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateSMBFileShareCommand(
  input: CreateSMBFileShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.CreateSMBFileShare";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateSMBFileShareInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateSnapshotCommand(
  input: CreateSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.CreateSnapshot";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateSnapshotInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointCommand(
  input: CreateSnapshotFromVolumeRecoveryPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "StorageGateway_20130630.CreateSnapshotFromVolumeRecoveryPoint";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointInput(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateStorediSCSIVolumeCommand(
  input: CreateStorediSCSIVolumeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.CreateStorediSCSIVolume";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateStorediSCSIVolumeInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateTapeWithBarcodeCommand(
  input: CreateTapeWithBarcodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.CreateTapeWithBarcode";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateTapeWithBarcodeInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateTapesCommand(
  input: CreateTapesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.CreateTapes";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateTapesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteBandwidthRateLimitCommand(
  input: DeleteBandwidthRateLimitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.DeleteBandwidthRateLimit";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteBandwidthRateLimitInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteChapCredentialsCommand(
  input: DeleteChapCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.DeleteChapCredentials";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteChapCredentialsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteFileShareCommand(
  input: DeleteFileShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.DeleteFileShare";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteFileShareInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteGatewayCommand(
  input: DeleteGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.DeleteGateway";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteGatewayInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteSnapshotScheduleCommand(
  input: DeleteSnapshotScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.DeleteSnapshotSchedule";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteSnapshotScheduleInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteTapeCommand(
  input: DeleteTapeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.DeleteTape";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteTapeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteTapeArchiveCommand(
  input: DeleteTapeArchiveCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.DeleteTapeArchive";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteTapeArchiveInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteVolumeCommand(
  input: DeleteVolumeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.DeleteVolume";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteVolumeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeAvailabilityMonitorTestCommand(
  input: DescribeAvailabilityMonitorTestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "StorageGateway_20130630.DescribeAvailabilityMonitorTest";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeAvailabilityMonitorTestInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeBandwidthRateLimitCommand(
  input: DescribeBandwidthRateLimitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "StorageGateway_20130630.DescribeBandwidthRateLimit";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeBandwidthRateLimitInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeCacheCommand(
  input: DescribeCacheCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.DescribeCache";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeCacheInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeCachediSCSIVolumesCommand(
  input: DescribeCachediSCSIVolumesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "StorageGateway_20130630.DescribeCachediSCSIVolumes";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeCachediSCSIVolumesInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeChapCredentialsCommand(
  input: DescribeChapCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.DescribeChapCredentials";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeChapCredentialsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeGatewayInformationCommand(
  input: DescribeGatewayInformationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "StorageGateway_20130630.DescribeGatewayInformation";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeGatewayInformationInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeMaintenanceStartTimeCommand(
  input: DescribeMaintenanceStartTimeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "StorageGateway_20130630.DescribeMaintenanceStartTime";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeMaintenanceStartTimeInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeNFSFileSharesCommand(
  input: DescribeNFSFileSharesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.DescribeNFSFileShares";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeNFSFileSharesInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeSMBFileSharesCommand(
  input: DescribeSMBFileSharesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.DescribeSMBFileShares";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeSMBFileSharesInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeSMBSettingsCommand(
  input: DescribeSMBSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.DescribeSMBSettings";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeSMBSettingsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeSnapshotScheduleCommand(
  input: DescribeSnapshotScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.DescribeSnapshotSchedule";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeSnapshotScheduleInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeStorediSCSIVolumesCommand(
  input: DescribeStorediSCSIVolumesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "StorageGateway_20130630.DescribeStorediSCSIVolumes";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeStorediSCSIVolumesInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeTapeArchivesCommand(
  input: DescribeTapeArchivesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.DescribeTapeArchives";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeTapeArchivesInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeTapeRecoveryPointsCommand(
  input: DescribeTapeRecoveryPointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "StorageGateway_20130630.DescribeTapeRecoveryPoints";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeTapeRecoveryPointsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeTapesCommand(
  input: DescribeTapesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.DescribeTapes";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeTapesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeUploadBufferCommand(
  input: DescribeUploadBufferCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.DescribeUploadBuffer";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeUploadBufferInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeVTLDevicesCommand(
  input: DescribeVTLDevicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.DescribeVTLDevices";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeVTLDevicesInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeWorkingStorageCommand(
  input: DescribeWorkingStorageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.DescribeWorkingStorage";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeWorkingStorageInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DetachVolumeCommand(
  input: DetachVolumeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.DetachVolume";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DetachVolumeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DisableGatewayCommand(
  input: DisableGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.DisableGateway";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DisableGatewayInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1JoinDomainCommand(
  input: JoinDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.JoinDomain";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1JoinDomainInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListFileSharesCommand(
  input: ListFileSharesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.ListFileShares";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListFileSharesInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListGatewaysCommand(
  input: ListGatewaysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.ListGateways";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListGatewaysInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListLocalDisksCommand(
  input: ListLocalDisksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.ListLocalDisks";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListLocalDisksInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListTagsForResourceCommand(
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.ListTagsForResource";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListTagsForResourceInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListTapesCommand(
  input: ListTapesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.ListTapes";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTapesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListVolumeInitiatorsCommand(
  input: ListVolumeInitiatorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.ListVolumeInitiators";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListVolumeInitiatorsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListVolumeRecoveryPointsCommand(
  input: ListVolumeRecoveryPointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.ListVolumeRecoveryPoints";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListVolumeRecoveryPointsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListVolumesCommand(
  input: ListVolumesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.ListVolumes";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListVolumesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1NotifyWhenUploadedCommand(
  input: NotifyWhenUploadedCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.NotifyWhenUploaded";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1NotifyWhenUploadedInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1RefreshCacheCommand(
  input: RefreshCacheCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.RefreshCache";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RefreshCacheInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1RemoveTagsFromResourceCommand(
  input: RemoveTagsFromResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.RemoveTagsFromResource";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RemoveTagsFromResourceInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ResetCacheCommand(
  input: ResetCacheCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.ResetCache";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ResetCacheInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1RetrieveTapeArchiveCommand(
  input: RetrieveTapeArchiveCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.RetrieveTapeArchive";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RetrieveTapeArchiveInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1RetrieveTapeRecoveryPointCommand(
  input: RetrieveTapeRecoveryPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.RetrieveTapeRecoveryPoint";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RetrieveTapeRecoveryPointInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1SetLocalConsolePasswordCommand(
  input: SetLocalConsolePasswordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.SetLocalConsolePassword";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1SetLocalConsolePasswordInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1SetSMBGuestPasswordCommand(
  input: SetSMBGuestPasswordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.SetSMBGuestPassword";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1SetSMBGuestPasswordInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ShutdownGatewayCommand(
  input: ShutdownGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.ShutdownGateway";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ShutdownGatewayInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1StartAvailabilityMonitorTestCommand(
  input: StartAvailabilityMonitorTestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "StorageGateway_20130630.StartAvailabilityMonitorTest";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StartAvailabilityMonitorTestInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1StartGatewayCommand(
  input: StartGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.StartGateway";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartGatewayInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateBandwidthRateLimitCommand(
  input: UpdateBandwidthRateLimitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.UpdateBandwidthRateLimit";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateBandwidthRateLimitInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateChapCredentialsCommand(
  input: UpdateChapCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.UpdateChapCredentials";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateChapCredentialsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateGatewayInformationCommand(
  input: UpdateGatewayInformationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.UpdateGatewayInformation";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateGatewayInformationInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateGatewaySoftwareNowCommand(
  input: UpdateGatewaySoftwareNowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.UpdateGatewaySoftwareNow";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateGatewaySoftwareNowInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateMaintenanceStartTimeCommand(
  input: UpdateMaintenanceStartTimeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "StorageGateway_20130630.UpdateMaintenanceStartTime";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateMaintenanceStartTimeInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateNFSFileShareCommand(
  input: UpdateNFSFileShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.UpdateNFSFileShare";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateNFSFileShareInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateSMBFileShareCommand(
  input: UpdateSMBFileShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.UpdateSMBFileShare";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateSMBFileShareInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateSMBSecurityStrategyCommand(
  input: UpdateSMBSecurityStrategyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.UpdateSMBSecurityStrategy";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateSMBSecurityStrategyInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateSnapshotScheduleCommand(
  input: UpdateSnapshotScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.UpdateSnapshotSchedule";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateSnapshotScheduleInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateVTLDeviceTypeCommand(
  input: UpdateVTLDeviceTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "StorageGateway_20130630.UpdateVTLDeviceType";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateVTLDeviceTypeInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function deserializeAws_json1_1ActivateGatewayCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ActivateGatewayCommandOutput> {
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
}

async function deserializeAws_json1_1ActivateGatewayCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ActivateGatewayCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1AddCacheCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddCacheCommandOutput> {
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
}

async function deserializeAws_json1_1AddCacheCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddCacheCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1AddTagsToResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToResourceCommandOutput> {
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
}

async function deserializeAws_json1_1AddTagsToResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToResourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1AddUploadBufferCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddUploadBufferCommandOutput> {
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
}

async function deserializeAws_json1_1AddUploadBufferCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddUploadBufferCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1AddWorkingStorageCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddWorkingStorageCommandOutput> {
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
}

async function deserializeAws_json1_1AddWorkingStorageCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddWorkingStorageCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1AssignTapePoolCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssignTapePoolCommandOutput> {
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
}

async function deserializeAws_json1_1AssignTapePoolCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssignTapePoolCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1AttachVolumeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachVolumeCommandOutput> {
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
}

async function deserializeAws_json1_1AttachVolumeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachVolumeCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1CancelArchivalCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelArchivalCommandOutput> {
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
}

async function deserializeAws_json1_1CancelArchivalCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelArchivalCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1CancelRetrievalCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelRetrievalCommandOutput> {
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
}

async function deserializeAws_json1_1CancelRetrievalCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelRetrievalCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1CreateCachediSCSIVolumeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCachediSCSIVolumeCommandOutput> {
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
}

async function deserializeAws_json1_1CreateCachediSCSIVolumeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCachediSCSIVolumeCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1CreateNFSFileShareCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNFSFileShareCommandOutput> {
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
}

async function deserializeAws_json1_1CreateNFSFileShareCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNFSFileShareCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1CreateSMBFileShareCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSMBFileShareCommandOutput> {
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
}

async function deserializeAws_json1_1CreateSMBFileShareCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSMBFileShareCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1CreateSnapshotCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSnapshotCommandOutput> {
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
}

async function deserializeAws_json1_1CreateSnapshotCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSnapshotCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableError":
    case "com.amazonaws.awsappliancecontrolplaneapi#ServiceUnavailableError":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableErrorResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSnapshotFromVolumeRecoveryPointCommandOutput> {
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
}

async function deserializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSnapshotFromVolumeRecoveryPointCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableError":
    case "com.amazonaws.awsappliancecontrolplaneapi#ServiceUnavailableError":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableErrorResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1CreateStorediSCSIVolumeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStorediSCSIVolumeCommandOutput> {
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
}

async function deserializeAws_json1_1CreateStorediSCSIVolumeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStorediSCSIVolumeCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1CreateTapeWithBarcodeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTapeWithBarcodeCommandOutput> {
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
}

async function deserializeAws_json1_1CreateTapeWithBarcodeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTapeWithBarcodeCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1CreateTapesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTapesCommandOutput> {
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
}

async function deserializeAws_json1_1CreateTapesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTapesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteBandwidthRateLimitCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBandwidthRateLimitCommandOutput> {
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
}

async function deserializeAws_json1_1DeleteBandwidthRateLimitCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBandwidthRateLimitCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteChapCredentialsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChapCredentialsCommandOutput> {
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
}

async function deserializeAws_json1_1DeleteChapCredentialsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChapCredentialsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteFileShareCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFileShareCommandOutput> {
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
}

async function deserializeAws_json1_1DeleteFileShareCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFileShareCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteGatewayCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGatewayCommandOutput> {
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
}

async function deserializeAws_json1_1DeleteGatewayCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGatewayCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteSnapshotScheduleCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSnapshotScheduleCommandOutput> {
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
}

async function deserializeAws_json1_1DeleteSnapshotScheduleCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSnapshotScheduleCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteTapeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTapeCommandOutput> {
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
}

async function deserializeAws_json1_1DeleteTapeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTapeCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteTapeArchiveCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTapeArchiveCommandOutput> {
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
}

async function deserializeAws_json1_1DeleteTapeArchiveCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTapeArchiveCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteVolumeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVolumeCommandOutput> {
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
}

async function deserializeAws_json1_1DeleteVolumeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVolumeCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DescribeAvailabilityMonitorTestCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAvailabilityMonitorTestCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeAvailabilityMonitorTestCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAvailabilityMonitorTestCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DescribeBandwidthRateLimitCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBandwidthRateLimitCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeBandwidthRateLimitCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBandwidthRateLimitCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DescribeCacheCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCacheCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeCacheCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCacheCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DescribeCachediSCSIVolumesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCachediSCSIVolumesCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeCachediSCSIVolumesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCachediSCSIVolumesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DescribeChapCredentialsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChapCredentialsCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeChapCredentialsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChapCredentialsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DescribeGatewayInformationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGatewayInformationCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeGatewayInformationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGatewayInformationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DescribeMaintenanceStartTimeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMaintenanceStartTimeCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeMaintenanceStartTimeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMaintenanceStartTimeCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DescribeNFSFileSharesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNFSFileSharesCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeNFSFileSharesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNFSFileSharesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DescribeSMBFileSharesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSMBFileSharesCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeSMBFileSharesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSMBFileSharesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DescribeSMBSettingsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSMBSettingsCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeSMBSettingsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSMBSettingsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DescribeSnapshotScheduleCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSnapshotScheduleCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeSnapshotScheduleCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSnapshotScheduleCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DescribeStorediSCSIVolumesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStorediSCSIVolumesCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeStorediSCSIVolumesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStorediSCSIVolumesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DescribeTapeArchivesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTapeArchivesCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeTapeArchivesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTapeArchivesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DescribeTapeRecoveryPointsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTapeRecoveryPointsCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeTapeRecoveryPointsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTapeRecoveryPointsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DescribeTapesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTapesCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeTapesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTapesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DescribeUploadBufferCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUploadBufferCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeUploadBufferCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUploadBufferCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DescribeVTLDevicesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVTLDevicesCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeVTLDevicesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVTLDevicesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DescribeWorkingStorageCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkingStorageCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeWorkingStorageCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkingStorageCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DetachVolumeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachVolumeCommandOutput> {
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
}

async function deserializeAws_json1_1DetachVolumeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachVolumeCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DisableGatewayCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableGatewayCommandOutput> {
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
}

async function deserializeAws_json1_1DisableGatewayCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableGatewayCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1JoinDomainCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JoinDomainCommandOutput> {
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
}

async function deserializeAws_json1_1JoinDomainCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JoinDomainCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListFileSharesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFileSharesCommandOutput> {
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
}

async function deserializeAws_json1_1ListFileSharesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFileSharesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListGatewaysCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGatewaysCommandOutput> {
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
}

async function deserializeAws_json1_1ListGatewaysCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGatewaysCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListLocalDisksCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLocalDisksCommandOutput> {
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
}

async function deserializeAws_json1_1ListLocalDisksCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLocalDisksCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListTagsForResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
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
}

async function deserializeAws_json1_1ListTagsForResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListTapesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTapesCommandOutput> {
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
}

async function deserializeAws_json1_1ListTapesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTapesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListVolumeInitiatorsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVolumeInitiatorsCommandOutput> {
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
}

async function deserializeAws_json1_1ListVolumeInitiatorsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVolumeInitiatorsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListVolumeRecoveryPointsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVolumeRecoveryPointsCommandOutput> {
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
}

async function deserializeAws_json1_1ListVolumeRecoveryPointsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVolumeRecoveryPointsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListVolumesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVolumesCommandOutput> {
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
}

async function deserializeAws_json1_1ListVolumesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVolumesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1NotifyWhenUploadedCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NotifyWhenUploadedCommandOutput> {
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
}

async function deserializeAws_json1_1NotifyWhenUploadedCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NotifyWhenUploadedCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1RefreshCacheCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RefreshCacheCommandOutput> {
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
}

async function deserializeAws_json1_1RefreshCacheCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RefreshCacheCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1RemoveTagsFromResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromResourceCommandOutput> {
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
}

async function deserializeAws_json1_1RemoveTagsFromResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromResourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ResetCacheCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetCacheCommandOutput> {
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
}

async function deserializeAws_json1_1ResetCacheCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetCacheCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1RetrieveTapeArchiveCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetrieveTapeArchiveCommandOutput> {
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
}

async function deserializeAws_json1_1RetrieveTapeArchiveCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetrieveTapeArchiveCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1RetrieveTapeRecoveryPointCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetrieveTapeRecoveryPointCommandOutput> {
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
}

async function deserializeAws_json1_1RetrieveTapeRecoveryPointCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetrieveTapeRecoveryPointCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1SetLocalConsolePasswordCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetLocalConsolePasswordCommandOutput> {
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
}

async function deserializeAws_json1_1SetLocalConsolePasswordCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetLocalConsolePasswordCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1SetSMBGuestPasswordCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetSMBGuestPasswordCommandOutput> {
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
}

async function deserializeAws_json1_1SetSMBGuestPasswordCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetSMBGuestPasswordCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ShutdownGatewayCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ShutdownGatewayCommandOutput> {
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
}

async function deserializeAws_json1_1ShutdownGatewayCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ShutdownGatewayCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1StartAvailabilityMonitorTestCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartAvailabilityMonitorTestCommandOutput> {
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
}

async function deserializeAws_json1_1StartAvailabilityMonitorTestCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartAvailabilityMonitorTestCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1StartGatewayCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartGatewayCommandOutput> {
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
}

async function deserializeAws_json1_1StartGatewayCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartGatewayCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1UpdateBandwidthRateLimitCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBandwidthRateLimitCommandOutput> {
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
}

async function deserializeAws_json1_1UpdateBandwidthRateLimitCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBandwidthRateLimitCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1UpdateChapCredentialsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChapCredentialsCommandOutput> {
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
}

async function deserializeAws_json1_1UpdateChapCredentialsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChapCredentialsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1UpdateGatewayInformationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGatewayInformationCommandOutput> {
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
}

async function deserializeAws_json1_1UpdateGatewayInformationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGatewayInformationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1UpdateGatewaySoftwareNowCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGatewaySoftwareNowCommandOutput> {
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
}

async function deserializeAws_json1_1UpdateGatewaySoftwareNowCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGatewaySoftwareNowCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1UpdateMaintenanceStartTimeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMaintenanceStartTimeCommandOutput> {
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
}

async function deserializeAws_json1_1UpdateMaintenanceStartTimeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMaintenanceStartTimeCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1UpdateNFSFileShareCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNFSFileShareCommandOutput> {
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
}

async function deserializeAws_json1_1UpdateNFSFileShareCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNFSFileShareCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1UpdateSMBFileShareCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSMBFileShareCommandOutput> {
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
}

async function deserializeAws_json1_1UpdateSMBFileShareCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSMBFileShareCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1UpdateSMBSecurityStrategyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSMBSecurityStrategyCommandOutput> {
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
}

async function deserializeAws_json1_1UpdateSMBSecurityStrategyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSMBSecurityStrategyCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1UpdateSnapshotScheduleCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSnapshotScheduleCommandOutput> {
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
}

async function deserializeAws_json1_1UpdateSnapshotScheduleCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSnapshotScheduleCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1UpdateVTLDeviceTypeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVTLDeviceTypeCommandOutput> {
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
}

async function deserializeAws_json1_1UpdateVTLDeviceTypeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVTLDeviceTypeCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGatewayRequestException":
    case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

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

const serializeAws_json1_1AddWorkingStorageInput = (
  input: AddWorkingStorageInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DiskIds !== undefined) {
    bodyParams["DiskIds"] = serializeAws_json1_1DiskIds(input.DiskIds, context);
  }
  if (input.GatewayARN !== undefined) {
    bodyParams["GatewayARN"] = input.GatewayARN;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateSnapshotInput = (
  input: CreateSnapshotInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.SnapshotDescription !== undefined) {
    bodyParams["SnapshotDescription"] = input.SnapshotDescription;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1Tags(input.Tags, context);
  }
  if (input.VolumeARN !== undefined) {
    bodyParams["VolumeARN"] = input.VolumeARN;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateStorediSCSIVolumeInput = (
  input: CreateStorediSCSIVolumeInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DiskId !== undefined) {
    bodyParams["DiskId"] = input.DiskId;
  }
  if (input.GatewayARN !== undefined) {
    bodyParams["GatewayARN"] = input.GatewayARN;
  }
  if (input.KMSEncrypted !== undefined) {
    bodyParams["KMSEncrypted"] = input.KMSEncrypted;
  }
  if (input.KMSKey !== undefined) {
    bodyParams["KMSKey"] = input.KMSKey;
  }
  if (input.NetworkInterfaceId !== undefined) {
    bodyParams["NetworkInterfaceId"] = input.NetworkInterfaceId;
  }
  if (input.PreserveExistingData !== undefined) {
    bodyParams["PreserveExistingData"] = input.PreserveExistingData;
  }
  if (input.SnapshotId !== undefined) {
    bodyParams["SnapshotId"] = input.SnapshotId;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1Tags(input.Tags, context);
  }
  if (input.TargetName !== undefined) {
    bodyParams["TargetName"] = input.TargetName;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteChapCredentialsInput = (
  input: DeleteChapCredentialsInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.InitiatorName !== undefined) {
    bodyParams["InitiatorName"] = input.InitiatorName;
  }
  if (input.TargetARN !== undefined) {
    bodyParams["TargetARN"] = input.TargetARN;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteGatewayInput = (
  input: DeleteGatewayInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.GatewayARN !== undefined) {
    bodyParams["GatewayARN"] = input.GatewayARN;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteVolumeInput = (
  input: DeleteVolumeInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.VolumeARN !== undefined) {
    bodyParams["VolumeARN"] = input.VolumeARN;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeBandwidthRateLimitInput = (
  input: DescribeBandwidthRateLimitInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.GatewayARN !== undefined) {
    bodyParams["GatewayARN"] = input.GatewayARN;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeChapCredentialsInput = (
  input: DescribeChapCredentialsInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.TargetARN !== undefined) {
    bodyParams["TargetARN"] = input.TargetARN;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeGatewayInformationInput = (
  input: DescribeGatewayInformationInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.GatewayARN !== undefined) {
    bodyParams["GatewayARN"] = input.GatewayARN;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeMaintenanceStartTimeInput = (
  input: DescribeMaintenanceStartTimeInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.GatewayARN !== undefined) {
    bodyParams["GatewayARN"] = input.GatewayARN;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeSnapshotScheduleInput = (
  input: DescribeSnapshotScheduleInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.VolumeARN !== undefined) {
    bodyParams["VolumeARN"] = input.VolumeARN;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeStorediSCSIVolumesInput = (
  input: DescribeStorediSCSIVolumesInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.VolumeARNs !== undefined) {
    bodyParams["VolumeARNs"] = serializeAws_json1_1VolumeARNs(
      input.VolumeARNs,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeWorkingStorageInput = (
  input: DescribeWorkingStorageInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.GatewayARN !== undefined) {
    bodyParams["GatewayARN"] = input.GatewayARN;
  }
  return bodyParams;
};

const serializeAws_json1_1DiskIds = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1ListGatewaysInput = (
  input: ListGatewaysInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  if (input.Marker !== undefined) {
    bodyParams["Marker"] = input.Marker;
  }
  return bodyParams;
};

const serializeAws_json1_1ListLocalDisksInput = (
  input: ListLocalDisksInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.GatewayARN !== undefined) {
    bodyParams["GatewayARN"] = input.GatewayARN;
  }
  return bodyParams;
};

const serializeAws_json1_1ListVolumesInput = (
  input: ListVolumesInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.GatewayARN !== undefined) {
    bodyParams["GatewayARN"] = input.GatewayARN;
  }
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  if (input.Marker !== undefined) {
    bodyParams["Marker"] = input.Marker;
  }
  return bodyParams;
};

const serializeAws_json1_1ShutdownGatewayInput = (
  input: ShutdownGatewayInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.GatewayARN !== undefined) {
    bodyParams["GatewayARN"] = input.GatewayARN;
  }
  return bodyParams;
};

const serializeAws_json1_1StartGatewayInput = (
  input: StartGatewayInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.GatewayARN !== undefined) {
    bodyParams["GatewayARN"] = input.GatewayARN;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateBandwidthRateLimitInput = (
  input: UpdateBandwidthRateLimitInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AverageDownloadRateLimitInBitsPerSec !== undefined) {
    bodyParams["AverageDownloadRateLimitInBitsPerSec"] =
      input.AverageDownloadRateLimitInBitsPerSec;
  }
  if (input.AverageUploadRateLimitInBitsPerSec !== undefined) {
    bodyParams["AverageUploadRateLimitInBitsPerSec"] =
      input.AverageUploadRateLimitInBitsPerSec;
  }
  if (input.GatewayARN !== undefined) {
    bodyParams["GatewayARN"] = input.GatewayARN;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateChapCredentialsInput = (
  input: UpdateChapCredentialsInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.InitiatorName !== undefined) {
    bodyParams["InitiatorName"] = input.InitiatorName;
  }
  if (input.SecretToAuthenticateInitiator !== undefined) {
    bodyParams["SecretToAuthenticateInitiator"] =
      input.SecretToAuthenticateInitiator;
  }
  if (input.SecretToAuthenticateTarget !== undefined) {
    bodyParams["SecretToAuthenticateTarget"] = input.SecretToAuthenticateTarget;
  }
  if (input.TargetARN !== undefined) {
    bodyParams["TargetARN"] = input.TargetARN;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateGatewaySoftwareNowInput = (
  input: UpdateGatewaySoftwareNowInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.GatewayARN !== undefined) {
    bodyParams["GatewayARN"] = input.GatewayARN;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateMaintenanceStartTimeInput = (
  input: UpdateMaintenanceStartTimeInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DayOfMonth !== undefined) {
    bodyParams["DayOfMonth"] = input.DayOfMonth;
  }
  if (input.DayOfWeek !== undefined) {
    bodyParams["DayOfWeek"] = input.DayOfWeek;
  }
  if (input.GatewayARN !== undefined) {
    bodyParams["GatewayARN"] = input.GatewayARN;
  }
  if (input.HourOfDay !== undefined) {
    bodyParams["HourOfDay"] = input.HourOfDay;
  }
  if (input.MinuteOfHour !== undefined) {
    bodyParams["MinuteOfHour"] = input.MinuteOfHour;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateSnapshotScheduleInput = (
  input: UpdateSnapshotScheduleInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.RecurrenceInHours !== undefined) {
    bodyParams["RecurrenceInHours"] = input.RecurrenceInHours;
  }
  if (input.StartAt !== undefined) {
    bodyParams["StartAt"] = input.StartAt;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1Tags(input.Tags, context);
  }
  if (input.VolumeARN !== undefined) {
    bodyParams["VolumeARN"] = input.VolumeARN;
  }
  return bodyParams;
};

const serializeAws_json1_1VolumeARNs = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1AddCacheInput = (
  input: AddCacheInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DiskIds !== undefined) {
    bodyParams["DiskIds"] = serializeAws_json1_1DiskIds(input.DiskIds, context);
  }
  if (input.GatewayARN !== undefined) {
    bodyParams["GatewayARN"] = input.GatewayARN;
  }
  return bodyParams;
};

const serializeAws_json1_1AddUploadBufferInput = (
  input: AddUploadBufferInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DiskIds !== undefined) {
    bodyParams["DiskIds"] = serializeAws_json1_1DiskIds(input.DiskIds, context);
  }
  if (input.GatewayARN !== undefined) {
    bodyParams["GatewayARN"] = input.GatewayARN;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateCachediSCSIVolumeInput = (
  input: CreateCachediSCSIVolumeInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ClientToken !== undefined) {
    bodyParams["ClientToken"] = input.ClientToken;
  }
  if (input.GatewayARN !== undefined) {
    bodyParams["GatewayARN"] = input.GatewayARN;
  }
  if (input.KMSEncrypted !== undefined) {
    bodyParams["KMSEncrypted"] = input.KMSEncrypted;
  }
  if (input.KMSKey !== undefined) {
    bodyParams["KMSKey"] = input.KMSKey;
  }
  if (input.NetworkInterfaceId !== undefined) {
    bodyParams["NetworkInterfaceId"] = input.NetworkInterfaceId;
  }
  if (input.SnapshotId !== undefined) {
    bodyParams["SnapshotId"] = input.SnapshotId;
  }
  if (input.SourceVolumeARN !== undefined) {
    bodyParams["SourceVolumeARN"] = input.SourceVolumeARN;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1Tags(input.Tags, context);
  }
  if (input.TargetName !== undefined) {
    bodyParams["TargetName"] = input.TargetName;
  }
  if (input.VolumeSizeInBytes !== undefined) {
    bodyParams["VolumeSizeInBytes"] = input.VolumeSizeInBytes;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteSnapshotScheduleInput = (
  input: DeleteSnapshotScheduleInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.VolumeARN !== undefined) {
    bodyParams["VolumeARN"] = input.VolumeARN;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeCacheInput = (
  input: DescribeCacheInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.GatewayARN !== undefined) {
    bodyParams["GatewayARN"] = input.GatewayARN;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeCachediSCSIVolumesInput = (
  input: DescribeCachediSCSIVolumesInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.VolumeARNs !== undefined) {
    bodyParams["VolumeARNs"] = serializeAws_json1_1VolumeARNs(
      input.VolumeARNs,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeUploadBufferInput = (
  input: DescribeUploadBufferInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.GatewayARN !== undefined) {
    bodyParams["GatewayARN"] = input.GatewayARN;
  }
  return bodyParams;
};

const serializeAws_json1_1ListVolumeRecoveryPointsInput = (
  input: ListVolumeRecoveryPointsInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.GatewayARN !== undefined) {
    bodyParams["GatewayARN"] = input.GatewayARN;
  }
  return bodyParams;
};

const serializeAws_json1_1ActivateGatewayInput = (
  input: ActivateGatewayInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ActivationKey !== undefined) {
    bodyParams["ActivationKey"] = input.ActivationKey;
  }
  if (input.GatewayName !== undefined) {
    bodyParams["GatewayName"] = input.GatewayName;
  }
  if (input.GatewayRegion !== undefined) {
    bodyParams["GatewayRegion"] = input.GatewayRegion;
  }
  if (input.GatewayTimezone !== undefined) {
    bodyParams["GatewayTimezone"] = input.GatewayTimezone;
  }
  if (input.GatewayType !== undefined) {
    bodyParams["GatewayType"] = input.GatewayType;
  }
  if (input.MediumChangerType !== undefined) {
    bodyParams["MediumChangerType"] = input.MediumChangerType;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1Tags(input.Tags, context);
  }
  if (input.TapeDriveType !== undefined) {
    bodyParams["TapeDriveType"] = input.TapeDriveType;
  }
  return bodyParams;
};

const serializeAws_json1_1AddTagsToResourceInput = (
  input: AddTagsToResourceInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResourceARN !== undefined) {
    bodyParams["ResourceARN"] = input.ResourceARN;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1Tags(input.Tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1AssignTapePoolInput = (
  input: AssignTapePoolInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.PoolId !== undefined) {
    bodyParams["PoolId"] = input.PoolId;
  }
  if (input.TapeARN !== undefined) {
    bodyParams["TapeARN"] = input.TapeARN;
  }
  return bodyParams;
};

const serializeAws_json1_1AttachVolumeInput = (
  input: AttachVolumeInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DiskId !== undefined) {
    bodyParams["DiskId"] = input.DiskId;
  }
  if (input.GatewayARN !== undefined) {
    bodyParams["GatewayARN"] = input.GatewayARN;
  }
  if (input.NetworkInterfaceId !== undefined) {
    bodyParams["NetworkInterfaceId"] = input.NetworkInterfaceId;
  }
  if (input.TargetName !== undefined) {
    bodyParams["TargetName"] = input.TargetName;
  }
  if (input.VolumeARN !== undefined) {
    bodyParams["VolumeARN"] = input.VolumeARN;
  }
  return bodyParams;
};

const serializeAws_json1_1CancelArchivalInput = (
  input: CancelArchivalInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.GatewayARN !== undefined) {
    bodyParams["GatewayARN"] = input.GatewayARN;
  }
  if (input.TapeARN !== undefined) {
    bodyParams["TapeARN"] = input.TapeARN;
  }
  return bodyParams;
};

const serializeAws_json1_1CancelRetrievalInput = (
  input: CancelRetrievalInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.GatewayARN !== undefined) {
    bodyParams["GatewayARN"] = input.GatewayARN;
  }
  if (input.TapeARN !== undefined) {
    bodyParams["TapeARN"] = input.TapeARN;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateNFSFileShareInput = (
  input: CreateNFSFileShareInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ClientList !== undefined) {
    bodyParams["ClientList"] = serializeAws_json1_1FileShareClientList(
      input.ClientList,
      context
    );
  }
  if (input.ClientToken !== undefined) {
    bodyParams["ClientToken"] = input.ClientToken;
  }
  if (input.DefaultStorageClass !== undefined) {
    bodyParams["DefaultStorageClass"] = input.DefaultStorageClass;
  }
  if (input.GatewayARN !== undefined) {
    bodyParams["GatewayARN"] = input.GatewayARN;
  }
  if (input.GuessMIMETypeEnabled !== undefined) {
    bodyParams["GuessMIMETypeEnabled"] = input.GuessMIMETypeEnabled;
  }
  if (input.KMSEncrypted !== undefined) {
    bodyParams["KMSEncrypted"] = input.KMSEncrypted;
  }
  if (input.KMSKey !== undefined) {
    bodyParams["KMSKey"] = input.KMSKey;
  }
  if (input.LocationARN !== undefined) {
    bodyParams["LocationARN"] = input.LocationARN;
  }
  if (input.NFSFileShareDefaults !== undefined) {
    bodyParams[
      "NFSFileShareDefaults"
    ] = serializeAws_json1_1NFSFileShareDefaults(
      input.NFSFileShareDefaults,
      context
    );
  }
  if (input.ObjectACL !== undefined) {
    bodyParams["ObjectACL"] = input.ObjectACL;
  }
  if (input.ReadOnly !== undefined) {
    bodyParams["ReadOnly"] = input.ReadOnly;
  }
  if (input.RequesterPays !== undefined) {
    bodyParams["RequesterPays"] = input.RequesterPays;
  }
  if (input.Role !== undefined) {
    bodyParams["Role"] = input.Role;
  }
  if (input.Squash !== undefined) {
    bodyParams["Squash"] = input.Squash;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1Tags(input.Tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1CreateSMBFileShareInput = (
  input: CreateSMBFileShareInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AdminUserList !== undefined) {
    bodyParams["AdminUserList"] = serializeAws_json1_1FileShareUserList(
      input.AdminUserList,
      context
    );
  }
  if (input.Authentication !== undefined) {
    bodyParams["Authentication"] = input.Authentication;
  }
  if (input.ClientToken !== undefined) {
    bodyParams["ClientToken"] = input.ClientToken;
  }
  if (input.DefaultStorageClass !== undefined) {
    bodyParams["DefaultStorageClass"] = input.DefaultStorageClass;
  }
  if (input.GatewayARN !== undefined) {
    bodyParams["GatewayARN"] = input.GatewayARN;
  }
  if (input.GuessMIMETypeEnabled !== undefined) {
    bodyParams["GuessMIMETypeEnabled"] = input.GuessMIMETypeEnabled;
  }
  if (input.InvalidUserList !== undefined) {
    bodyParams["InvalidUserList"] = serializeAws_json1_1FileShareUserList(
      input.InvalidUserList,
      context
    );
  }
  if (input.KMSEncrypted !== undefined) {
    bodyParams["KMSEncrypted"] = input.KMSEncrypted;
  }
  if (input.KMSKey !== undefined) {
    bodyParams["KMSKey"] = input.KMSKey;
  }
  if (input.LocationARN !== undefined) {
    bodyParams["LocationARN"] = input.LocationARN;
  }
  if (input.ObjectACL !== undefined) {
    bodyParams["ObjectACL"] = input.ObjectACL;
  }
  if (input.ReadOnly !== undefined) {
    bodyParams["ReadOnly"] = input.ReadOnly;
  }
  if (input.RequesterPays !== undefined) {
    bodyParams["RequesterPays"] = input.RequesterPays;
  }
  if (input.Role !== undefined) {
    bodyParams["Role"] = input.Role;
  }
  if (input.SMBACLEnabled !== undefined) {
    bodyParams["SMBACLEnabled"] = input.SMBACLEnabled;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1Tags(input.Tags, context);
  }
  if (input.ValidUserList !== undefined) {
    bodyParams["ValidUserList"] = serializeAws_json1_1FileShareUserList(
      input.ValidUserList,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointInput = (
  input: CreateSnapshotFromVolumeRecoveryPointInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.SnapshotDescription !== undefined) {
    bodyParams["SnapshotDescription"] = input.SnapshotDescription;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1Tags(input.Tags, context);
  }
  if (input.VolumeARN !== undefined) {
    bodyParams["VolumeARN"] = input.VolumeARN;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateTapeWithBarcodeInput = (
  input: CreateTapeWithBarcodeInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.GatewayARN !== undefined) {
    bodyParams["GatewayARN"] = input.GatewayARN;
  }
  if (input.KMSEncrypted !== undefined) {
    bodyParams["KMSEncrypted"] = input.KMSEncrypted;
  }
  if (input.KMSKey !== undefined) {
    bodyParams["KMSKey"] = input.KMSKey;
  }
  if (input.PoolId !== undefined) {
    bodyParams["PoolId"] = input.PoolId;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1Tags(input.Tags, context);
  }
  if (input.TapeBarcode !== undefined) {
    bodyParams["TapeBarcode"] = input.TapeBarcode;
  }
  if (input.TapeSizeInBytes !== undefined) {
    bodyParams["TapeSizeInBytes"] = input.TapeSizeInBytes;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateTapesInput = (
  input: CreateTapesInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ClientToken !== undefined) {
    bodyParams["ClientToken"] = input.ClientToken;
  }
  if (input.GatewayARN !== undefined) {
    bodyParams["GatewayARN"] = input.GatewayARN;
  }
  if (input.KMSEncrypted !== undefined) {
    bodyParams["KMSEncrypted"] = input.KMSEncrypted;
  }
  if (input.KMSKey !== undefined) {
    bodyParams["KMSKey"] = input.KMSKey;
  }
  if (input.NumTapesToCreate !== undefined) {
    bodyParams["NumTapesToCreate"] = input.NumTapesToCreate;
  }
  if (input.PoolId !== undefined) {
    bodyParams["PoolId"] = input.PoolId;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1Tags(input.Tags, context);
  }
  if (input.TapeBarcodePrefix !== undefined) {
    bodyParams["TapeBarcodePrefix"] = input.TapeBarcodePrefix;
  }
  if (input.TapeSizeInBytes !== undefined) {
    bodyParams["TapeSizeInBytes"] = input.TapeSizeInBytes;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteBandwidthRateLimitInput = (
  input: DeleteBandwidthRateLimitInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.BandwidthType !== undefined) {
    bodyParams["BandwidthType"] = input.BandwidthType;
  }
  if (input.GatewayARN !== undefined) {
    bodyParams["GatewayARN"] = input.GatewayARN;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteFileShareInput = (
  input: DeleteFileShareInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.FileShareARN !== undefined) {
    bodyParams["FileShareARN"] = input.FileShareARN;
  }
  if (input.ForceDelete !== undefined) {
    bodyParams["ForceDelete"] = input.ForceDelete;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteTapeArchiveInput = (
  input: DeleteTapeArchiveInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.TapeARN !== undefined) {
    bodyParams["TapeARN"] = input.TapeARN;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteTapeInput = (
  input: DeleteTapeInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.GatewayARN !== undefined) {
    bodyParams["GatewayARN"] = input.GatewayARN;
  }
  if (input.TapeARN !== undefined) {
    bodyParams["TapeARN"] = input.TapeARN;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeAvailabilityMonitorTestInput = (
  input: DescribeAvailabilityMonitorTestInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.GatewayARN !== undefined) {
    bodyParams["GatewayARN"] = input.GatewayARN;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeNFSFileSharesInput = (
  input: DescribeNFSFileSharesInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.FileShareARNList !== undefined) {
    bodyParams["FileShareARNList"] = serializeAws_json1_1FileShareARNList(
      input.FileShareARNList,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeSMBFileSharesInput = (
  input: DescribeSMBFileSharesInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.FileShareARNList !== undefined) {
    bodyParams["FileShareARNList"] = serializeAws_json1_1FileShareARNList(
      input.FileShareARNList,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeSMBSettingsInput = (
  input: DescribeSMBSettingsInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.GatewayARN !== undefined) {
    bodyParams["GatewayARN"] = input.GatewayARN;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeTapeArchivesInput = (
  input: DescribeTapeArchivesInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  if (input.Marker !== undefined) {
    bodyParams["Marker"] = input.Marker;
  }
  if (input.TapeARNs !== undefined) {
    bodyParams["TapeARNs"] = serializeAws_json1_1TapeARNs(
      input.TapeARNs,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeTapeRecoveryPointsInput = (
  input: DescribeTapeRecoveryPointsInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.GatewayARN !== undefined) {
    bodyParams["GatewayARN"] = input.GatewayARN;
  }
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  if (input.Marker !== undefined) {
    bodyParams["Marker"] = input.Marker;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeTapesInput = (
  input: DescribeTapesInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.GatewayARN !== undefined) {
    bodyParams["GatewayARN"] = input.GatewayARN;
  }
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  if (input.Marker !== undefined) {
    bodyParams["Marker"] = input.Marker;
  }
  if (input.TapeARNs !== undefined) {
    bodyParams["TapeARNs"] = serializeAws_json1_1TapeARNs(
      input.TapeARNs,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeVTLDevicesInput = (
  input: DescribeVTLDevicesInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.GatewayARN !== undefined) {
    bodyParams["GatewayARN"] = input.GatewayARN;
  }
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  if (input.Marker !== undefined) {
    bodyParams["Marker"] = input.Marker;
  }
  if (input.VTLDeviceARNs !== undefined) {
    bodyParams["VTLDeviceARNs"] = serializeAws_json1_1VTLDeviceARNs(
      input.VTLDeviceARNs,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DetachVolumeInput = (
  input: DetachVolumeInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ForceDetach !== undefined) {
    bodyParams["ForceDetach"] = input.ForceDetach;
  }
  if (input.VolumeARN !== undefined) {
    bodyParams["VolumeARN"] = input.VolumeARN;
  }
  return bodyParams;
};

const serializeAws_json1_1DisableGatewayInput = (
  input: DisableGatewayInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.GatewayARN !== undefined) {
    bodyParams["GatewayARN"] = input.GatewayARN;
  }
  return bodyParams;
};

const serializeAws_json1_1FileShareARNList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1FileShareClientList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1FileShareUserList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1FolderList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1Hosts = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1JoinDomainInput = (
  input: JoinDomainInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DomainControllers !== undefined) {
    bodyParams["DomainControllers"] = serializeAws_json1_1Hosts(
      input.DomainControllers,
      context
    );
  }
  if (input.DomainName !== undefined) {
    bodyParams["DomainName"] = input.DomainName;
  }
  if (input.GatewayARN !== undefined) {
    bodyParams["GatewayARN"] = input.GatewayARN;
  }
  if (input.OrganizationalUnit !== undefined) {
    bodyParams["OrganizationalUnit"] = input.OrganizationalUnit;
  }
  if (input.Password !== undefined) {
    bodyParams["Password"] = input.Password;
  }
  if (input.TimeoutInSeconds !== undefined) {
    bodyParams["TimeoutInSeconds"] = input.TimeoutInSeconds;
  }
  if (input.UserName !== undefined) {
    bodyParams["UserName"] = input.UserName;
  }
  return bodyParams;
};

const serializeAws_json1_1ListFileSharesInput = (
  input: ListFileSharesInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.GatewayARN !== undefined) {
    bodyParams["GatewayARN"] = input.GatewayARN;
  }
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  if (input.Marker !== undefined) {
    bodyParams["Marker"] = input.Marker;
  }
  return bodyParams;
};

const serializeAws_json1_1ListTagsForResourceInput = (
  input: ListTagsForResourceInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  if (input.Marker !== undefined) {
    bodyParams["Marker"] = input.Marker;
  }
  if (input.ResourceARN !== undefined) {
    bodyParams["ResourceARN"] = input.ResourceARN;
  }
  return bodyParams;
};

const serializeAws_json1_1ListTapesInput = (
  input: ListTapesInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  if (input.Marker !== undefined) {
    bodyParams["Marker"] = input.Marker;
  }
  if (input.TapeARNs !== undefined) {
    bodyParams["TapeARNs"] = serializeAws_json1_1TapeARNs(
      input.TapeARNs,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ListVolumeInitiatorsInput = (
  input: ListVolumeInitiatorsInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.VolumeARN !== undefined) {
    bodyParams["VolumeARN"] = input.VolumeARN;
  }
  return bodyParams;
};

const serializeAws_json1_1NFSFileShareDefaults = (
  input: NFSFileShareDefaults,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DirectoryMode !== undefined) {
    bodyParams["DirectoryMode"] = input.DirectoryMode;
  }
  if (input.FileMode !== undefined) {
    bodyParams["FileMode"] = input.FileMode;
  }
  if (input.GroupId !== undefined) {
    bodyParams["GroupId"] = input.GroupId;
  }
  if (input.OwnerId !== undefined) {
    bodyParams["OwnerId"] = input.OwnerId;
  }
  return bodyParams;
};

const serializeAws_json1_1NotifyWhenUploadedInput = (
  input: NotifyWhenUploadedInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.FileShareARN !== undefined) {
    bodyParams["FileShareARN"] = input.FileShareARN;
  }
  return bodyParams;
};

const serializeAws_json1_1RefreshCacheInput = (
  input: RefreshCacheInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.FileShareARN !== undefined) {
    bodyParams["FileShareARN"] = input.FileShareARN;
  }
  if (input.FolderList !== undefined) {
    bodyParams["FolderList"] = serializeAws_json1_1FolderList(
      input.FolderList,
      context
    );
  }
  if (input.Recursive !== undefined) {
    bodyParams["Recursive"] = input.Recursive;
  }
  return bodyParams;
};

const serializeAws_json1_1RemoveTagsFromResourceInput = (
  input: RemoveTagsFromResourceInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResourceARN !== undefined) {
    bodyParams["ResourceARN"] = input.ResourceARN;
  }
  if (input.TagKeys !== undefined) {
    bodyParams["TagKeys"] = serializeAws_json1_1TagKeys(input.TagKeys, context);
  }
  return bodyParams;
};

const serializeAws_json1_1ResetCacheInput = (
  input: ResetCacheInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.GatewayARN !== undefined) {
    bodyParams["GatewayARN"] = input.GatewayARN;
  }
  return bodyParams;
};

const serializeAws_json1_1RetrieveTapeArchiveInput = (
  input: RetrieveTapeArchiveInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.GatewayARN !== undefined) {
    bodyParams["GatewayARN"] = input.GatewayARN;
  }
  if (input.TapeARN !== undefined) {
    bodyParams["TapeARN"] = input.TapeARN;
  }
  return bodyParams;
};

const serializeAws_json1_1RetrieveTapeRecoveryPointInput = (
  input: RetrieveTapeRecoveryPointInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.GatewayARN !== undefined) {
    bodyParams["GatewayARN"] = input.GatewayARN;
  }
  if (input.TapeARN !== undefined) {
    bodyParams["TapeARN"] = input.TapeARN;
  }
  return bodyParams;
};

const serializeAws_json1_1SetLocalConsolePasswordInput = (
  input: SetLocalConsolePasswordInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.GatewayARN !== undefined) {
    bodyParams["GatewayARN"] = input.GatewayARN;
  }
  if (input.LocalConsolePassword !== undefined) {
    bodyParams["LocalConsolePassword"] = input.LocalConsolePassword;
  }
  return bodyParams;
};

const serializeAws_json1_1SetSMBGuestPasswordInput = (
  input: SetSMBGuestPasswordInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.GatewayARN !== undefined) {
    bodyParams["GatewayARN"] = input.GatewayARN;
  }
  if (input.Password !== undefined) {
    bodyParams["Password"] = input.Password;
  }
  return bodyParams;
};

const serializeAws_json1_1StartAvailabilityMonitorTestInput = (
  input: StartAvailabilityMonitorTestInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.GatewayARN !== undefined) {
    bodyParams["GatewayARN"] = input.GatewayARN;
  }
  return bodyParams;
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  const bodyParams: any = {};
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_json1_1TagKeys = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1Tags = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1Tag(entry, context));
  }
  return contents;
};

const serializeAws_json1_1TapeARNs = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1UpdateGatewayInformationInput = (
  input: UpdateGatewayInformationInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CloudWatchLogGroupARN !== undefined) {
    bodyParams["CloudWatchLogGroupARN"] = input.CloudWatchLogGroupARN;
  }
  if (input.GatewayARN !== undefined) {
    bodyParams["GatewayARN"] = input.GatewayARN;
  }
  if (input.GatewayName !== undefined) {
    bodyParams["GatewayName"] = input.GatewayName;
  }
  if (input.GatewayTimezone !== undefined) {
    bodyParams["GatewayTimezone"] = input.GatewayTimezone;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateNFSFileShareInput = (
  input: UpdateNFSFileShareInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ClientList !== undefined) {
    bodyParams["ClientList"] = serializeAws_json1_1FileShareClientList(
      input.ClientList,
      context
    );
  }
  if (input.DefaultStorageClass !== undefined) {
    bodyParams["DefaultStorageClass"] = input.DefaultStorageClass;
  }
  if (input.FileShareARN !== undefined) {
    bodyParams["FileShareARN"] = input.FileShareARN;
  }
  if (input.GuessMIMETypeEnabled !== undefined) {
    bodyParams["GuessMIMETypeEnabled"] = input.GuessMIMETypeEnabled;
  }
  if (input.KMSEncrypted !== undefined) {
    bodyParams["KMSEncrypted"] = input.KMSEncrypted;
  }
  if (input.KMSKey !== undefined) {
    bodyParams["KMSKey"] = input.KMSKey;
  }
  if (input.NFSFileShareDefaults !== undefined) {
    bodyParams[
      "NFSFileShareDefaults"
    ] = serializeAws_json1_1NFSFileShareDefaults(
      input.NFSFileShareDefaults,
      context
    );
  }
  if (input.ObjectACL !== undefined) {
    bodyParams["ObjectACL"] = input.ObjectACL;
  }
  if (input.ReadOnly !== undefined) {
    bodyParams["ReadOnly"] = input.ReadOnly;
  }
  if (input.RequesterPays !== undefined) {
    bodyParams["RequesterPays"] = input.RequesterPays;
  }
  if (input.Squash !== undefined) {
    bodyParams["Squash"] = input.Squash;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateSMBFileShareInput = (
  input: UpdateSMBFileShareInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AdminUserList !== undefined) {
    bodyParams["AdminUserList"] = serializeAws_json1_1FileShareUserList(
      input.AdminUserList,
      context
    );
  }
  if (input.DefaultStorageClass !== undefined) {
    bodyParams["DefaultStorageClass"] = input.DefaultStorageClass;
  }
  if (input.FileShareARN !== undefined) {
    bodyParams["FileShareARN"] = input.FileShareARN;
  }
  if (input.GuessMIMETypeEnabled !== undefined) {
    bodyParams["GuessMIMETypeEnabled"] = input.GuessMIMETypeEnabled;
  }
  if (input.InvalidUserList !== undefined) {
    bodyParams["InvalidUserList"] = serializeAws_json1_1FileShareUserList(
      input.InvalidUserList,
      context
    );
  }
  if (input.KMSEncrypted !== undefined) {
    bodyParams["KMSEncrypted"] = input.KMSEncrypted;
  }
  if (input.KMSKey !== undefined) {
    bodyParams["KMSKey"] = input.KMSKey;
  }
  if (input.ObjectACL !== undefined) {
    bodyParams["ObjectACL"] = input.ObjectACL;
  }
  if (input.ReadOnly !== undefined) {
    bodyParams["ReadOnly"] = input.ReadOnly;
  }
  if (input.RequesterPays !== undefined) {
    bodyParams["RequesterPays"] = input.RequesterPays;
  }
  if (input.SMBACLEnabled !== undefined) {
    bodyParams["SMBACLEnabled"] = input.SMBACLEnabled;
  }
  if (input.ValidUserList !== undefined) {
    bodyParams["ValidUserList"] = serializeAws_json1_1FileShareUserList(
      input.ValidUserList,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateSMBSecurityStrategyInput = (
  input: UpdateSMBSecurityStrategyInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.GatewayARN !== undefined) {
    bodyParams["GatewayARN"] = input.GatewayARN;
  }
  if (input.SMBSecurityStrategy !== undefined) {
    bodyParams["SMBSecurityStrategy"] = input.SMBSecurityStrategy;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateVTLDeviceTypeInput = (
  input: UpdateVTLDeviceTypeInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DeviceType !== undefined) {
    bodyParams["DeviceType"] = input.DeviceType;
  }
  if (input.VTLDeviceARN !== undefined) {
    bodyParams["VTLDeviceARN"] = input.VTLDeviceARN;
  }
  return bodyParams;
};

const serializeAws_json1_1VTLDeviceARNs = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const deserializeAws_json1_1ActivateGatewayOutput = (
  output: any,
  context: __SerdeContext
): ActivateGatewayOutput => {
  let contents: any = {
    __type: "ActivateGatewayOutput",
    GatewayARN: undefined
  };
  if (output.GatewayARN !== undefined && output.GatewayARN !== null) {
    contents.GatewayARN = output.GatewayARN;
  }
  return contents;
};

const deserializeAws_json1_1AddWorkingStorageOutput = (
  output: any,
  context: __SerdeContext
): AddWorkingStorageOutput => {
  let contents: any = {
    __type: "AddWorkingStorageOutput",
    GatewayARN: undefined
  };
  if (output.GatewayARN !== undefined && output.GatewayARN !== null) {
    contents.GatewayARN = output.GatewayARN;
  }
  return contents;
};

const deserializeAws_json1_1ChapCredentials = (
  output: any,
  context: __SerdeContext
): Array<ChapInfo> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ChapInfo(entry, context)
  );
};

const deserializeAws_json1_1ChapInfo = (
  output: any,
  context: __SerdeContext
): ChapInfo => {
  let contents: any = {
    __type: "ChapInfo",
    InitiatorName: undefined,
    SecretToAuthenticateInitiator: undefined,
    SecretToAuthenticateTarget: undefined,
    TargetARN: undefined
  };
  if (output.InitiatorName !== undefined && output.InitiatorName !== null) {
    contents.InitiatorName = output.InitiatorName;
  }
  if (
    output.SecretToAuthenticateInitiator !== undefined &&
    output.SecretToAuthenticateInitiator !== null
  ) {
    contents.SecretToAuthenticateInitiator =
      output.SecretToAuthenticateInitiator;
  }
  if (
    output.SecretToAuthenticateTarget !== undefined &&
    output.SecretToAuthenticateTarget !== null
  ) {
    contents.SecretToAuthenticateTarget = output.SecretToAuthenticateTarget;
  }
  if (output.TargetARN !== undefined && output.TargetARN !== null) {
    contents.TargetARN = output.TargetARN;
  }
  return contents;
};

const deserializeAws_json1_1CreateSnapshotOutput = (
  output: any,
  context: __SerdeContext
): CreateSnapshotOutput => {
  let contents: any = {
    __type: "CreateSnapshotOutput",
    SnapshotId: undefined,
    VolumeARN: undefined
  };
  if (output.SnapshotId !== undefined && output.SnapshotId !== null) {
    contents.SnapshotId = output.SnapshotId;
  }
  if (output.VolumeARN !== undefined && output.VolumeARN !== null) {
    contents.VolumeARN = output.VolumeARN;
  }
  return contents;
};

const deserializeAws_json1_1CreateStorediSCSIVolumeOutput = (
  output: any,
  context: __SerdeContext
): CreateStorediSCSIVolumeOutput => {
  let contents: any = {
    __type: "CreateStorediSCSIVolumeOutput",
    TargetARN: undefined,
    VolumeARN: undefined,
    VolumeSizeInBytes: undefined
  };
  if (output.TargetARN !== undefined && output.TargetARN !== null) {
    contents.TargetARN = output.TargetARN;
  }
  if (output.VolumeARN !== undefined && output.VolumeARN !== null) {
    contents.VolumeARN = output.VolumeARN;
  }
  if (
    output.VolumeSizeInBytes !== undefined &&
    output.VolumeSizeInBytes !== null
  ) {
    contents.VolumeSizeInBytes = output.VolumeSizeInBytes;
  }
  return contents;
};

const deserializeAws_json1_1DeleteBandwidthRateLimitOutput = (
  output: any,
  context: __SerdeContext
): DeleteBandwidthRateLimitOutput => {
  let contents: any = {
    __type: "DeleteBandwidthRateLimitOutput",
    GatewayARN: undefined
  };
  if (output.GatewayARN !== undefined && output.GatewayARN !== null) {
    contents.GatewayARN = output.GatewayARN;
  }
  return contents;
};

const deserializeAws_json1_1DeleteChapCredentialsOutput = (
  output: any,
  context: __SerdeContext
): DeleteChapCredentialsOutput => {
  let contents: any = {
    __type: "DeleteChapCredentialsOutput",
    InitiatorName: undefined,
    TargetARN: undefined
  };
  if (output.InitiatorName !== undefined && output.InitiatorName !== null) {
    contents.InitiatorName = output.InitiatorName;
  }
  if (output.TargetARN !== undefined && output.TargetARN !== null) {
    contents.TargetARN = output.TargetARN;
  }
  return contents;
};

const deserializeAws_json1_1DeleteGatewayOutput = (
  output: any,
  context: __SerdeContext
): DeleteGatewayOutput => {
  let contents: any = {
    __type: "DeleteGatewayOutput",
    GatewayARN: undefined
  };
  if (output.GatewayARN !== undefined && output.GatewayARN !== null) {
    contents.GatewayARN = output.GatewayARN;
  }
  return contents;
};

const deserializeAws_json1_1DeleteVolumeOutput = (
  output: any,
  context: __SerdeContext
): DeleteVolumeOutput => {
  let contents: any = {
    __type: "DeleteVolumeOutput",
    VolumeARN: undefined
  };
  if (output.VolumeARN !== undefined && output.VolumeARN !== null) {
    contents.VolumeARN = output.VolumeARN;
  }
  return contents;
};

const deserializeAws_json1_1DescribeBandwidthRateLimitOutput = (
  output: any,
  context: __SerdeContext
): DescribeBandwidthRateLimitOutput => {
  let contents: any = {
    __type: "DescribeBandwidthRateLimitOutput",
    AverageDownloadRateLimitInBitsPerSec: undefined,
    AverageUploadRateLimitInBitsPerSec: undefined,
    GatewayARN: undefined
  };
  if (
    output.AverageDownloadRateLimitInBitsPerSec !== undefined &&
    output.AverageDownloadRateLimitInBitsPerSec !== null
  ) {
    contents.AverageDownloadRateLimitInBitsPerSec =
      output.AverageDownloadRateLimitInBitsPerSec;
  }
  if (
    output.AverageUploadRateLimitInBitsPerSec !== undefined &&
    output.AverageUploadRateLimitInBitsPerSec !== null
  ) {
    contents.AverageUploadRateLimitInBitsPerSec =
      output.AverageUploadRateLimitInBitsPerSec;
  }
  if (output.GatewayARN !== undefined && output.GatewayARN !== null) {
    contents.GatewayARN = output.GatewayARN;
  }
  return contents;
};

const deserializeAws_json1_1DescribeChapCredentialsOutput = (
  output: any,
  context: __SerdeContext
): DescribeChapCredentialsOutput => {
  let contents: any = {
    __type: "DescribeChapCredentialsOutput",
    ChapCredentials: undefined
  };
  if (output.ChapCredentials !== undefined && output.ChapCredentials !== null) {
    contents.ChapCredentials = deserializeAws_json1_1ChapCredentials(
      output.ChapCredentials,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeWorkingStorageOutput = (
  output: any,
  context: __SerdeContext
): DescribeWorkingStorageOutput => {
  let contents: any = {
    __type: "DescribeWorkingStorageOutput",
    DiskIds: undefined,
    GatewayARN: undefined,
    WorkingStorageAllocatedInBytes: undefined,
    WorkingStorageUsedInBytes: undefined
  };
  if (output.DiskIds !== undefined && output.DiskIds !== null) {
    contents.DiskIds = deserializeAws_json1_1DiskIds(output.DiskIds, context);
  }
  if (output.GatewayARN !== undefined && output.GatewayARN !== null) {
    contents.GatewayARN = output.GatewayARN;
  }
  if (
    output.WorkingStorageAllocatedInBytes !== undefined &&
    output.WorkingStorageAllocatedInBytes !== null
  ) {
    contents.WorkingStorageAllocatedInBytes =
      output.WorkingStorageAllocatedInBytes;
  }
  if (
    output.WorkingStorageUsedInBytes !== undefined &&
    output.WorkingStorageUsedInBytes !== null
  ) {
    contents.WorkingStorageUsedInBytes = output.WorkingStorageUsedInBytes;
  }
  return contents;
};

const deserializeAws_json1_1DiskIds = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1GatewayNetworkInterfaces = (
  output: any,
  context: __SerdeContext
): Array<NetworkInterface> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1NetworkInterface(entry, context)
  );
};

const deserializeAws_json1_1InternalServerError = (
  output: any,
  context: __SerdeContext
): InternalServerError => {
  let contents: any = {
    __type: "InternalServerError",
    error: undefined,
    message: undefined
  };
  if (output.error !== undefined && output.error !== null) {
    contents.error = deserializeAws_json1_1StorageGatewayError(
      output.error,
      context
    );
  }
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidGatewayRequestException = (
  output: any,
  context: __SerdeContext
): InvalidGatewayRequestException => {
  let contents: any = {
    __type: "InvalidGatewayRequestException",
    error: undefined,
    message: undefined
  };
  if (output.error !== undefined && output.error !== null) {
    contents.error = deserializeAws_json1_1StorageGatewayError(
      output.error,
      context
    );
  }
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1NetworkInterface = (
  output: any,
  context: __SerdeContext
): NetworkInterface => {
  let contents: any = {
    __type: "NetworkInterface",
    Ipv4Address: undefined,
    Ipv6Address: undefined,
    MacAddress: undefined
  };
  if (output.Ipv4Address !== undefined && output.Ipv4Address !== null) {
    contents.Ipv4Address = output.Ipv4Address;
  }
  if (output.Ipv6Address !== undefined && output.Ipv6Address !== null) {
    contents.Ipv6Address = output.Ipv6Address;
  }
  if (output.MacAddress !== undefined && output.MacAddress !== null) {
    contents.MacAddress = output.MacAddress;
  }
  return contents;
};

const deserializeAws_json1_1ServiceUnavailableError = (
  output: any,
  context: __SerdeContext
): ServiceUnavailableError => {
  let contents: any = {
    __type: "ServiceUnavailableError",
    error: undefined,
    message: undefined
  };
  if (output.error !== undefined && output.error !== null) {
    contents.error = deserializeAws_json1_1StorageGatewayError(
      output.error,
      context
    );
  }
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ShutdownGatewayOutput = (
  output: any,
  context: __SerdeContext
): ShutdownGatewayOutput => {
  let contents: any = {
    __type: "ShutdownGatewayOutput",
    GatewayARN: undefined
  };
  if (output.GatewayARN !== undefined && output.GatewayARN !== null) {
    contents.GatewayARN = output.GatewayARN;
  }
  return contents;
};

const deserializeAws_json1_1StartGatewayOutput = (
  output: any,
  context: __SerdeContext
): StartGatewayOutput => {
  let contents: any = {
    __type: "StartGatewayOutput",
    GatewayARN: undefined
  };
  if (output.GatewayARN !== undefined && output.GatewayARN !== null) {
    contents.GatewayARN = output.GatewayARN;
  }
  return contents;
};

const deserializeAws_json1_1StorageGatewayError = (
  output: any,
  context: __SerdeContext
): StorageGatewayError => {
  let contents: any = {
    __type: "StorageGatewayError",
    errorCode: undefined,
    errorDetails: undefined
  };
  if (output.errorCode !== undefined && output.errorCode !== null) {
    contents.errorCode = output.errorCode;
  }
  if (output.errorDetails !== undefined && output.errorDetails !== null) {
    contents.errorDetails = deserializeAws_json1_1errorDetails(
      output.errorDetails,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1UpdateBandwidthRateLimitOutput = (
  output: any,
  context: __SerdeContext
): UpdateBandwidthRateLimitOutput => {
  let contents: any = {
    __type: "UpdateBandwidthRateLimitOutput",
    GatewayARN: undefined
  };
  if (output.GatewayARN !== undefined && output.GatewayARN !== null) {
    contents.GatewayARN = output.GatewayARN;
  }
  return contents;
};

const deserializeAws_json1_1UpdateChapCredentialsOutput = (
  output: any,
  context: __SerdeContext
): UpdateChapCredentialsOutput => {
  let contents: any = {
    __type: "UpdateChapCredentialsOutput",
    InitiatorName: undefined,
    TargetARN: undefined
  };
  if (output.InitiatorName !== undefined && output.InitiatorName !== null) {
    contents.InitiatorName = output.InitiatorName;
  }
  if (output.TargetARN !== undefined && output.TargetARN !== null) {
    contents.TargetARN = output.TargetARN;
  }
  return contents;
};

const deserializeAws_json1_1UpdateGatewayInformationOutput = (
  output: any,
  context: __SerdeContext
): UpdateGatewayInformationOutput => {
  let contents: any = {
    __type: "UpdateGatewayInformationOutput",
    GatewayARN: undefined,
    GatewayName: undefined
  };
  if (output.GatewayARN !== undefined && output.GatewayARN !== null) {
    contents.GatewayARN = output.GatewayARN;
  }
  if (output.GatewayName !== undefined && output.GatewayName !== null) {
    contents.GatewayName = output.GatewayName;
  }
  return contents;
};

const deserializeAws_json1_1UpdateGatewaySoftwareNowOutput = (
  output: any,
  context: __SerdeContext
): UpdateGatewaySoftwareNowOutput => {
  let contents: any = {
    __type: "UpdateGatewaySoftwareNowOutput",
    GatewayARN: undefined
  };
  if (output.GatewayARN !== undefined && output.GatewayARN !== null) {
    contents.GatewayARN = output.GatewayARN;
  }
  return contents;
};

const deserializeAws_json1_1UpdateMaintenanceStartTimeOutput = (
  output: any,
  context: __SerdeContext
): UpdateMaintenanceStartTimeOutput => {
  let contents: any = {
    __type: "UpdateMaintenanceStartTimeOutput",
    GatewayARN: undefined
  };
  if (output.GatewayARN !== undefined && output.GatewayARN !== null) {
    contents.GatewayARN = output.GatewayARN;
  }
  return contents;
};

const deserializeAws_json1_1UpdateSnapshotScheduleOutput = (
  output: any,
  context: __SerdeContext
): UpdateSnapshotScheduleOutput => {
  let contents: any = {
    __type: "UpdateSnapshotScheduleOutput",
    VolumeARN: undefined
  };
  if (output.VolumeARN !== undefined && output.VolumeARN !== null) {
    contents.VolumeARN = output.VolumeARN;
  }
  return contents;
};

const deserializeAws_json1_1VolumeiSCSIAttributes = (
  output: any,
  context: __SerdeContext
): VolumeiSCSIAttributes => {
  let contents: any = {
    __type: "VolumeiSCSIAttributes",
    ChapEnabled: undefined,
    LunNumber: undefined,
    NetworkInterfaceId: undefined,
    NetworkInterfacePort: undefined,
    TargetARN: undefined
  };
  if (output.ChapEnabled !== undefined && output.ChapEnabled !== null) {
    contents.ChapEnabled = output.ChapEnabled;
  }
  if (output.LunNumber !== undefined && output.LunNumber !== null) {
    contents.LunNumber = output.LunNumber;
  }
  if (
    output.NetworkInterfaceId !== undefined &&
    output.NetworkInterfaceId !== null
  ) {
    contents.NetworkInterfaceId = output.NetworkInterfaceId;
  }
  if (
    output.NetworkInterfacePort !== undefined &&
    output.NetworkInterfacePort !== null
  ) {
    contents.NetworkInterfacePort = output.NetworkInterfacePort;
  }
  if (output.TargetARN !== undefined && output.TargetARN !== null) {
    contents.TargetARN = output.TargetARN;
  }
  return contents;
};

const deserializeAws_json1_1errorDetails = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_json1_1AddCacheOutput = (
  output: any,
  context: __SerdeContext
): AddCacheOutput => {
  let contents: any = {
    __type: "AddCacheOutput",
    GatewayARN: undefined
  };
  if (output.GatewayARN !== undefined && output.GatewayARN !== null) {
    contents.GatewayARN = output.GatewayARN;
  }
  return contents;
};

const deserializeAws_json1_1AddUploadBufferOutput = (
  output: any,
  context: __SerdeContext
): AddUploadBufferOutput => {
  let contents: any = {
    __type: "AddUploadBufferOutput",
    GatewayARN: undefined
  };
  if (output.GatewayARN !== undefined && output.GatewayARN !== null) {
    contents.GatewayARN = output.GatewayARN;
  }
  return contents;
};

const deserializeAws_json1_1CreateCachediSCSIVolumeOutput = (
  output: any,
  context: __SerdeContext
): CreateCachediSCSIVolumeOutput => {
  let contents: any = {
    __type: "CreateCachediSCSIVolumeOutput",
    TargetARN: undefined,
    VolumeARN: undefined
  };
  if (output.TargetARN !== undefined && output.TargetARN !== null) {
    contents.TargetARN = output.TargetARN;
  }
  if (output.VolumeARN !== undefined && output.VolumeARN !== null) {
    contents.VolumeARN = output.VolumeARN;
  }
  return contents;
};

const deserializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointOutput = (
  output: any,
  context: __SerdeContext
): CreateSnapshotFromVolumeRecoveryPointOutput => {
  let contents: any = {
    __type: "CreateSnapshotFromVolumeRecoveryPointOutput",
    SnapshotId: undefined,
    VolumeARN: undefined,
    VolumeRecoveryPointTime: undefined
  };
  if (output.SnapshotId !== undefined && output.SnapshotId !== null) {
    contents.SnapshotId = output.SnapshotId;
  }
  if (output.VolumeARN !== undefined && output.VolumeARN !== null) {
    contents.VolumeARN = output.VolumeARN;
  }
  if (
    output.VolumeRecoveryPointTime !== undefined &&
    output.VolumeRecoveryPointTime !== null
  ) {
    contents.VolumeRecoveryPointTime = output.VolumeRecoveryPointTime;
  }
  return contents;
};

const deserializeAws_json1_1DeleteSnapshotScheduleOutput = (
  output: any,
  context: __SerdeContext
): DeleteSnapshotScheduleOutput => {
  let contents: any = {
    __type: "DeleteSnapshotScheduleOutput",
    VolumeARN: undefined
  };
  if (output.VolumeARN !== undefined && output.VolumeARN !== null) {
    contents.VolumeARN = output.VolumeARN;
  }
  return contents;
};

const deserializeAws_json1_1DescribeCacheOutput = (
  output: any,
  context: __SerdeContext
): DescribeCacheOutput => {
  let contents: any = {
    __type: "DescribeCacheOutput",
    CacheAllocatedInBytes: undefined,
    CacheDirtyPercentage: undefined,
    CacheHitPercentage: undefined,
    CacheMissPercentage: undefined,
    CacheUsedPercentage: undefined,
    DiskIds: undefined,
    GatewayARN: undefined
  };
  if (
    output.CacheAllocatedInBytes !== undefined &&
    output.CacheAllocatedInBytes !== null
  ) {
    contents.CacheAllocatedInBytes = output.CacheAllocatedInBytes;
  }
  if (
    output.CacheDirtyPercentage !== undefined &&
    output.CacheDirtyPercentage !== null
  ) {
    contents.CacheDirtyPercentage = output.CacheDirtyPercentage;
  }
  if (
    output.CacheHitPercentage !== undefined &&
    output.CacheHitPercentage !== null
  ) {
    contents.CacheHitPercentage = output.CacheHitPercentage;
  }
  if (
    output.CacheMissPercentage !== undefined &&
    output.CacheMissPercentage !== null
  ) {
    contents.CacheMissPercentage = output.CacheMissPercentage;
  }
  if (
    output.CacheUsedPercentage !== undefined &&
    output.CacheUsedPercentage !== null
  ) {
    contents.CacheUsedPercentage = output.CacheUsedPercentage;
  }
  if (output.DiskIds !== undefined && output.DiskIds !== null) {
    contents.DiskIds = deserializeAws_json1_1DiskIds(output.DiskIds, context);
  }
  if (output.GatewayARN !== undefined && output.GatewayARN !== null) {
    contents.GatewayARN = output.GatewayARN;
  }
  return contents;
};

const deserializeAws_json1_1DescribeUploadBufferOutput = (
  output: any,
  context: __SerdeContext
): DescribeUploadBufferOutput => {
  let contents: any = {
    __type: "DescribeUploadBufferOutput",
    DiskIds: undefined,
    GatewayARN: undefined,
    UploadBufferAllocatedInBytes: undefined,
    UploadBufferUsedInBytes: undefined
  };
  if (output.DiskIds !== undefined && output.DiskIds !== null) {
    contents.DiskIds = deserializeAws_json1_1DiskIds(output.DiskIds, context);
  }
  if (output.GatewayARN !== undefined && output.GatewayARN !== null) {
    contents.GatewayARN = output.GatewayARN;
  }
  if (
    output.UploadBufferAllocatedInBytes !== undefined &&
    output.UploadBufferAllocatedInBytes !== null
  ) {
    contents.UploadBufferAllocatedInBytes = output.UploadBufferAllocatedInBytes;
  }
  if (
    output.UploadBufferUsedInBytes !== undefined &&
    output.UploadBufferUsedInBytes !== null
  ) {
    contents.UploadBufferUsedInBytes = output.UploadBufferUsedInBytes;
  }
  return contents;
};

const deserializeAws_json1_1ListVolumeRecoveryPointsOutput = (
  output: any,
  context: __SerdeContext
): ListVolumeRecoveryPointsOutput => {
  let contents: any = {
    __type: "ListVolumeRecoveryPointsOutput",
    GatewayARN: undefined,
    VolumeRecoveryPointInfos: undefined
  };
  if (output.GatewayARN !== undefined && output.GatewayARN !== null) {
    contents.GatewayARN = output.GatewayARN;
  }
  if (
    output.VolumeRecoveryPointInfos !== undefined &&
    output.VolumeRecoveryPointInfos !== null
  ) {
    contents.VolumeRecoveryPointInfos = deserializeAws_json1_1VolumeRecoveryPointInfos(
      output.VolumeRecoveryPointInfos,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1VolumeRecoveryPointInfo = (
  output: any,
  context: __SerdeContext
): VolumeRecoveryPointInfo => {
  let contents: any = {
    __type: "VolumeRecoveryPointInfo",
    VolumeARN: undefined,
    VolumeRecoveryPointTime: undefined,
    VolumeSizeInBytes: undefined,
    VolumeUsageInBytes: undefined
  };
  if (output.VolumeARN !== undefined && output.VolumeARN !== null) {
    contents.VolumeARN = output.VolumeARN;
  }
  if (
    output.VolumeRecoveryPointTime !== undefined &&
    output.VolumeRecoveryPointTime !== null
  ) {
    contents.VolumeRecoveryPointTime = output.VolumeRecoveryPointTime;
  }
  if (
    output.VolumeSizeInBytes !== undefined &&
    output.VolumeSizeInBytes !== null
  ) {
    contents.VolumeSizeInBytes = output.VolumeSizeInBytes;
  }
  if (
    output.VolumeUsageInBytes !== undefined &&
    output.VolumeUsageInBytes !== null
  ) {
    contents.VolumeUsageInBytes = output.VolumeUsageInBytes;
  }
  return contents;
};

const deserializeAws_json1_1VolumeRecoveryPointInfos = (
  output: any,
  context: __SerdeContext
): Array<VolumeRecoveryPointInfo> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1VolumeRecoveryPointInfo(entry, context)
  );
};

const deserializeAws_json1_1AddTagsToResourceOutput = (
  output: any,
  context: __SerdeContext
): AddTagsToResourceOutput => {
  let contents: any = {
    __type: "AddTagsToResourceOutput",
    ResourceARN: undefined
  };
  if (output.ResourceARN !== undefined && output.ResourceARN !== null) {
    contents.ResourceARN = output.ResourceARN;
  }
  return contents;
};

const deserializeAws_json1_1AssignTapePoolOutput = (
  output: any,
  context: __SerdeContext
): AssignTapePoolOutput => {
  let contents: any = {
    __type: "AssignTapePoolOutput",
    TapeARN: undefined
  };
  if (output.TapeARN !== undefined && output.TapeARN !== null) {
    contents.TapeARN = output.TapeARN;
  }
  return contents;
};

const deserializeAws_json1_1AttachVolumeOutput = (
  output: any,
  context: __SerdeContext
): AttachVolumeOutput => {
  let contents: any = {
    __type: "AttachVolumeOutput",
    TargetARN: undefined,
    VolumeARN: undefined
  };
  if (output.TargetARN !== undefined && output.TargetARN !== null) {
    contents.TargetARN = output.TargetARN;
  }
  if (output.VolumeARN !== undefined && output.VolumeARN !== null) {
    contents.VolumeARN = output.VolumeARN;
  }
  return contents;
};

const deserializeAws_json1_1CachediSCSIVolume = (
  output: any,
  context: __SerdeContext
): CachediSCSIVolume => {
  let contents: any = {
    __type: "CachediSCSIVolume",
    CreatedDate: undefined,
    KMSKey: undefined,
    SourceSnapshotId: undefined,
    TargetName: undefined,
    VolumeARN: undefined,
    VolumeAttachmentStatus: undefined,
    VolumeId: undefined,
    VolumeProgress: undefined,
    VolumeSizeInBytes: undefined,
    VolumeStatus: undefined,
    VolumeType: undefined,
    VolumeUsedInBytes: undefined,
    VolumeiSCSIAttributes: undefined
  };
  if (output.CreatedDate !== undefined && output.CreatedDate !== null) {
    contents.CreatedDate = new Date(Math.round(output.CreatedDate * 1000));
  }
  if (output.KMSKey !== undefined && output.KMSKey !== null) {
    contents.KMSKey = output.KMSKey;
  }
  if (
    output.SourceSnapshotId !== undefined &&
    output.SourceSnapshotId !== null
  ) {
    contents.SourceSnapshotId = output.SourceSnapshotId;
  }
  if (output.TargetName !== undefined && output.TargetName !== null) {
    contents.TargetName = output.TargetName;
  }
  if (output.VolumeARN !== undefined && output.VolumeARN !== null) {
    contents.VolumeARN = output.VolumeARN;
  }
  if (
    output.VolumeAttachmentStatus !== undefined &&
    output.VolumeAttachmentStatus !== null
  ) {
    contents.VolumeAttachmentStatus = output.VolumeAttachmentStatus;
  }
  if (output.VolumeId !== undefined && output.VolumeId !== null) {
    contents.VolumeId = output.VolumeId;
  }
  if (output.VolumeProgress !== undefined && output.VolumeProgress !== null) {
    contents.VolumeProgress = output.VolumeProgress;
  }
  if (
    output.VolumeSizeInBytes !== undefined &&
    output.VolumeSizeInBytes !== null
  ) {
    contents.VolumeSizeInBytes = output.VolumeSizeInBytes;
  }
  if (output.VolumeStatus !== undefined && output.VolumeStatus !== null) {
    contents.VolumeStatus = output.VolumeStatus;
  }
  if (output.VolumeType !== undefined && output.VolumeType !== null) {
    contents.VolumeType = output.VolumeType;
  }
  if (
    output.VolumeUsedInBytes !== undefined &&
    output.VolumeUsedInBytes !== null
  ) {
    contents.VolumeUsedInBytes = output.VolumeUsedInBytes;
  }
  if (
    output.VolumeiSCSIAttributes !== undefined &&
    output.VolumeiSCSIAttributes !== null
  ) {
    contents.VolumeiSCSIAttributes = deserializeAws_json1_1VolumeiSCSIAttributes(
      output.VolumeiSCSIAttributes,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1CachediSCSIVolumes = (
  output: any,
  context: __SerdeContext
): Array<CachediSCSIVolume> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1CachediSCSIVolume(entry, context)
  );
};

const deserializeAws_json1_1CancelArchivalOutput = (
  output: any,
  context: __SerdeContext
): CancelArchivalOutput => {
  let contents: any = {
    __type: "CancelArchivalOutput",
    TapeARN: undefined
  };
  if (output.TapeARN !== undefined && output.TapeARN !== null) {
    contents.TapeARN = output.TapeARN;
  }
  return contents;
};

const deserializeAws_json1_1CancelRetrievalOutput = (
  output: any,
  context: __SerdeContext
): CancelRetrievalOutput => {
  let contents: any = {
    __type: "CancelRetrievalOutput",
    TapeARN: undefined
  };
  if (output.TapeARN !== undefined && output.TapeARN !== null) {
    contents.TapeARN = output.TapeARN;
  }
  return contents;
};

const deserializeAws_json1_1CreateNFSFileShareOutput = (
  output: any,
  context: __SerdeContext
): CreateNFSFileShareOutput => {
  let contents: any = {
    __type: "CreateNFSFileShareOutput",
    FileShareARN: undefined
  };
  if (output.FileShareARN !== undefined && output.FileShareARN !== null) {
    contents.FileShareARN = output.FileShareARN;
  }
  return contents;
};

const deserializeAws_json1_1CreateSMBFileShareOutput = (
  output: any,
  context: __SerdeContext
): CreateSMBFileShareOutput => {
  let contents: any = {
    __type: "CreateSMBFileShareOutput",
    FileShareARN: undefined
  };
  if (output.FileShareARN !== undefined && output.FileShareARN !== null) {
    contents.FileShareARN = output.FileShareARN;
  }
  return contents;
};

const deserializeAws_json1_1CreateTapeWithBarcodeOutput = (
  output: any,
  context: __SerdeContext
): CreateTapeWithBarcodeOutput => {
  let contents: any = {
    __type: "CreateTapeWithBarcodeOutput",
    TapeARN: undefined
  };
  if (output.TapeARN !== undefined && output.TapeARN !== null) {
    contents.TapeARN = output.TapeARN;
  }
  return contents;
};

const deserializeAws_json1_1CreateTapesOutput = (
  output: any,
  context: __SerdeContext
): CreateTapesOutput => {
  let contents: any = {
    __type: "CreateTapesOutput",
    TapeARNs: undefined
  };
  if (output.TapeARNs !== undefined && output.TapeARNs !== null) {
    contents.TapeARNs = deserializeAws_json1_1TapeARNs(
      output.TapeARNs,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DeleteFileShareOutput = (
  output: any,
  context: __SerdeContext
): DeleteFileShareOutput => {
  let contents: any = {
    __type: "DeleteFileShareOutput",
    FileShareARN: undefined
  };
  if (output.FileShareARN !== undefined && output.FileShareARN !== null) {
    contents.FileShareARN = output.FileShareARN;
  }
  return contents;
};

const deserializeAws_json1_1DeleteTapeArchiveOutput = (
  output: any,
  context: __SerdeContext
): DeleteTapeArchiveOutput => {
  let contents: any = {
    __type: "DeleteTapeArchiveOutput",
    TapeARN: undefined
  };
  if (output.TapeARN !== undefined && output.TapeARN !== null) {
    contents.TapeARN = output.TapeARN;
  }
  return contents;
};

const deserializeAws_json1_1DeleteTapeOutput = (
  output: any,
  context: __SerdeContext
): DeleteTapeOutput => {
  let contents: any = {
    __type: "DeleteTapeOutput",
    TapeARN: undefined
  };
  if (output.TapeARN !== undefined && output.TapeARN !== null) {
    contents.TapeARN = output.TapeARN;
  }
  return contents;
};

const deserializeAws_json1_1DescribeAvailabilityMonitorTestOutput = (
  output: any,
  context: __SerdeContext
): DescribeAvailabilityMonitorTestOutput => {
  let contents: any = {
    __type: "DescribeAvailabilityMonitorTestOutput",
    GatewayARN: undefined,
    StartTime: undefined,
    Status: undefined
  };
  if (output.GatewayARN !== undefined && output.GatewayARN !== null) {
    contents.GatewayARN = output.GatewayARN;
  }
  if (output.StartTime !== undefined && output.StartTime !== null) {
    contents.StartTime = new Date(Math.round(output.StartTime * 1000));
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  return contents;
};

const deserializeAws_json1_1DescribeCachediSCSIVolumesOutput = (
  output: any,
  context: __SerdeContext
): DescribeCachediSCSIVolumesOutput => {
  let contents: any = {
    __type: "DescribeCachediSCSIVolumesOutput",
    CachediSCSIVolumes: undefined
  };
  if (
    output.CachediSCSIVolumes !== undefined &&
    output.CachediSCSIVolumes !== null
  ) {
    contents.CachediSCSIVolumes = deserializeAws_json1_1CachediSCSIVolumes(
      output.CachediSCSIVolumes,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeGatewayInformationOutput = (
  output: any,
  context: __SerdeContext
): DescribeGatewayInformationOutput => {
  let contents: any = {
    __type: "DescribeGatewayInformationOutput",
    CloudWatchLogGroupARN: undefined,
    Ec2InstanceId: undefined,
    Ec2InstanceRegion: undefined,
    GatewayARN: undefined,
    GatewayId: undefined,
    GatewayName: undefined,
    GatewayNetworkInterfaces: undefined,
    GatewayState: undefined,
    GatewayTimezone: undefined,
    GatewayType: undefined,
    HostEnvironment: undefined,
    LastSoftwareUpdate: undefined,
    NextUpdateAvailabilityDate: undefined,
    Tags: undefined,
    VPCEndpoint: undefined
  };
  if (
    output.CloudWatchLogGroupARN !== undefined &&
    output.CloudWatchLogGroupARN !== null
  ) {
    contents.CloudWatchLogGroupARN = output.CloudWatchLogGroupARN;
  }
  if (output.Ec2InstanceId !== undefined && output.Ec2InstanceId !== null) {
    contents.Ec2InstanceId = output.Ec2InstanceId;
  }
  if (
    output.Ec2InstanceRegion !== undefined &&
    output.Ec2InstanceRegion !== null
  ) {
    contents.Ec2InstanceRegion = output.Ec2InstanceRegion;
  }
  if (output.GatewayARN !== undefined && output.GatewayARN !== null) {
    contents.GatewayARN = output.GatewayARN;
  }
  if (output.GatewayId !== undefined && output.GatewayId !== null) {
    contents.GatewayId = output.GatewayId;
  }
  if (output.GatewayName !== undefined && output.GatewayName !== null) {
    contents.GatewayName = output.GatewayName;
  }
  if (
    output.GatewayNetworkInterfaces !== undefined &&
    output.GatewayNetworkInterfaces !== null
  ) {
    contents.GatewayNetworkInterfaces = deserializeAws_json1_1GatewayNetworkInterfaces(
      output.GatewayNetworkInterfaces,
      context
    );
  }
  if (output.GatewayState !== undefined && output.GatewayState !== null) {
    contents.GatewayState = output.GatewayState;
  }
  if (output.GatewayTimezone !== undefined && output.GatewayTimezone !== null) {
    contents.GatewayTimezone = output.GatewayTimezone;
  }
  if (output.GatewayType !== undefined && output.GatewayType !== null) {
    contents.GatewayType = output.GatewayType;
  }
  if (output.HostEnvironment !== undefined && output.HostEnvironment !== null) {
    contents.HostEnvironment = output.HostEnvironment;
  }
  if (
    output.LastSoftwareUpdate !== undefined &&
    output.LastSoftwareUpdate !== null
  ) {
    contents.LastSoftwareUpdate = output.LastSoftwareUpdate;
  }
  if (
    output.NextUpdateAvailabilityDate !== undefined &&
    output.NextUpdateAvailabilityDate !== null
  ) {
    contents.NextUpdateAvailabilityDate = output.NextUpdateAvailabilityDate;
  }
  if (output.Tags !== undefined && output.Tags !== null) {
    contents.Tags = deserializeAws_json1_1Tags(output.Tags, context);
  }
  if (output.VPCEndpoint !== undefined && output.VPCEndpoint !== null) {
    contents.VPCEndpoint = output.VPCEndpoint;
  }
  return contents;
};

const deserializeAws_json1_1DescribeMaintenanceStartTimeOutput = (
  output: any,
  context: __SerdeContext
): DescribeMaintenanceStartTimeOutput => {
  let contents: any = {
    __type: "DescribeMaintenanceStartTimeOutput",
    DayOfMonth: undefined,
    DayOfWeek: undefined,
    GatewayARN: undefined,
    HourOfDay: undefined,
    MinuteOfHour: undefined,
    Timezone: undefined
  };
  if (output.DayOfMonth !== undefined && output.DayOfMonth !== null) {
    contents.DayOfMonth = output.DayOfMonth;
  }
  if (output.DayOfWeek !== undefined && output.DayOfWeek !== null) {
    contents.DayOfWeek = output.DayOfWeek;
  }
  if (output.GatewayARN !== undefined && output.GatewayARN !== null) {
    contents.GatewayARN = output.GatewayARN;
  }
  if (output.HourOfDay !== undefined && output.HourOfDay !== null) {
    contents.HourOfDay = output.HourOfDay;
  }
  if (output.MinuteOfHour !== undefined && output.MinuteOfHour !== null) {
    contents.MinuteOfHour = output.MinuteOfHour;
  }
  if (output.Timezone !== undefined && output.Timezone !== null) {
    contents.Timezone = output.Timezone;
  }
  return contents;
};

const deserializeAws_json1_1DescribeNFSFileSharesOutput = (
  output: any,
  context: __SerdeContext
): DescribeNFSFileSharesOutput => {
  let contents: any = {
    __type: "DescribeNFSFileSharesOutput",
    NFSFileShareInfoList: undefined
  };
  if (
    output.NFSFileShareInfoList !== undefined &&
    output.NFSFileShareInfoList !== null
  ) {
    contents.NFSFileShareInfoList = deserializeAws_json1_1NFSFileShareInfoList(
      output.NFSFileShareInfoList,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeSMBFileSharesOutput = (
  output: any,
  context: __SerdeContext
): DescribeSMBFileSharesOutput => {
  let contents: any = {
    __type: "DescribeSMBFileSharesOutput",
    SMBFileShareInfoList: undefined
  };
  if (
    output.SMBFileShareInfoList !== undefined &&
    output.SMBFileShareInfoList !== null
  ) {
    contents.SMBFileShareInfoList = deserializeAws_json1_1SMBFileShareInfoList(
      output.SMBFileShareInfoList,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeSMBSettingsOutput = (
  output: any,
  context: __SerdeContext
): DescribeSMBSettingsOutput => {
  let contents: any = {
    __type: "DescribeSMBSettingsOutput",
    ActiveDirectoryStatus: undefined,
    DomainName: undefined,
    GatewayARN: undefined,
    SMBGuestPasswordSet: undefined,
    SMBSecurityStrategy: undefined
  };
  if (
    output.ActiveDirectoryStatus !== undefined &&
    output.ActiveDirectoryStatus !== null
  ) {
    contents.ActiveDirectoryStatus = output.ActiveDirectoryStatus;
  }
  if (output.DomainName !== undefined && output.DomainName !== null) {
    contents.DomainName = output.DomainName;
  }
  if (output.GatewayARN !== undefined && output.GatewayARN !== null) {
    contents.GatewayARN = output.GatewayARN;
  }
  if (
    output.SMBGuestPasswordSet !== undefined &&
    output.SMBGuestPasswordSet !== null
  ) {
    contents.SMBGuestPasswordSet = output.SMBGuestPasswordSet;
  }
  if (
    output.SMBSecurityStrategy !== undefined &&
    output.SMBSecurityStrategy !== null
  ) {
    contents.SMBSecurityStrategy = output.SMBSecurityStrategy;
  }
  return contents;
};

const deserializeAws_json1_1DescribeSnapshotScheduleOutput = (
  output: any,
  context: __SerdeContext
): DescribeSnapshotScheduleOutput => {
  let contents: any = {
    __type: "DescribeSnapshotScheduleOutput",
    Description: undefined,
    RecurrenceInHours: undefined,
    StartAt: undefined,
    Tags: undefined,
    Timezone: undefined,
    VolumeARN: undefined
  };
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (
    output.RecurrenceInHours !== undefined &&
    output.RecurrenceInHours !== null
  ) {
    contents.RecurrenceInHours = output.RecurrenceInHours;
  }
  if (output.StartAt !== undefined && output.StartAt !== null) {
    contents.StartAt = output.StartAt;
  }
  if (output.Tags !== undefined && output.Tags !== null) {
    contents.Tags = deserializeAws_json1_1Tags(output.Tags, context);
  }
  if (output.Timezone !== undefined && output.Timezone !== null) {
    contents.Timezone = output.Timezone;
  }
  if (output.VolumeARN !== undefined && output.VolumeARN !== null) {
    contents.VolumeARN = output.VolumeARN;
  }
  return contents;
};

const deserializeAws_json1_1DescribeStorediSCSIVolumesOutput = (
  output: any,
  context: __SerdeContext
): DescribeStorediSCSIVolumesOutput => {
  let contents: any = {
    __type: "DescribeStorediSCSIVolumesOutput",
    StorediSCSIVolumes: undefined
  };
  if (
    output.StorediSCSIVolumes !== undefined &&
    output.StorediSCSIVolumes !== null
  ) {
    contents.StorediSCSIVolumes = deserializeAws_json1_1StorediSCSIVolumes(
      output.StorediSCSIVolumes,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeTapeArchivesOutput = (
  output: any,
  context: __SerdeContext
): DescribeTapeArchivesOutput => {
  let contents: any = {
    __type: "DescribeTapeArchivesOutput",
    Marker: undefined,
    TapeArchives: undefined
  };
  if (output.Marker !== undefined && output.Marker !== null) {
    contents.Marker = output.Marker;
  }
  if (output.TapeArchives !== undefined && output.TapeArchives !== null) {
    contents.TapeArchives = deserializeAws_json1_1TapeArchives(
      output.TapeArchives,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeTapeRecoveryPointsOutput = (
  output: any,
  context: __SerdeContext
): DescribeTapeRecoveryPointsOutput => {
  let contents: any = {
    __type: "DescribeTapeRecoveryPointsOutput",
    GatewayARN: undefined,
    Marker: undefined,
    TapeRecoveryPointInfos: undefined
  };
  if (output.GatewayARN !== undefined && output.GatewayARN !== null) {
    contents.GatewayARN = output.GatewayARN;
  }
  if (output.Marker !== undefined && output.Marker !== null) {
    contents.Marker = output.Marker;
  }
  if (
    output.TapeRecoveryPointInfos !== undefined &&
    output.TapeRecoveryPointInfos !== null
  ) {
    contents.TapeRecoveryPointInfos = deserializeAws_json1_1TapeRecoveryPointInfos(
      output.TapeRecoveryPointInfos,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeTapesOutput = (
  output: any,
  context: __SerdeContext
): DescribeTapesOutput => {
  let contents: any = {
    __type: "DescribeTapesOutput",
    Marker: undefined,
    Tapes: undefined
  };
  if (output.Marker !== undefined && output.Marker !== null) {
    contents.Marker = output.Marker;
  }
  if (output.Tapes !== undefined && output.Tapes !== null) {
    contents.Tapes = deserializeAws_json1_1Tapes(output.Tapes, context);
  }
  return contents;
};

const deserializeAws_json1_1DescribeVTLDevicesOutput = (
  output: any,
  context: __SerdeContext
): DescribeVTLDevicesOutput => {
  let contents: any = {
    __type: "DescribeVTLDevicesOutput",
    GatewayARN: undefined,
    Marker: undefined,
    VTLDevices: undefined
  };
  if (output.GatewayARN !== undefined && output.GatewayARN !== null) {
    contents.GatewayARN = output.GatewayARN;
  }
  if (output.Marker !== undefined && output.Marker !== null) {
    contents.Marker = output.Marker;
  }
  if (output.VTLDevices !== undefined && output.VTLDevices !== null) {
    contents.VTLDevices = deserializeAws_json1_1VTLDevices(
      output.VTLDevices,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DetachVolumeOutput = (
  output: any,
  context: __SerdeContext
): DetachVolumeOutput => {
  let contents: any = {
    __type: "DetachVolumeOutput",
    VolumeARN: undefined
  };
  if (output.VolumeARN !== undefined && output.VolumeARN !== null) {
    contents.VolumeARN = output.VolumeARN;
  }
  return contents;
};

const deserializeAws_json1_1DeviceiSCSIAttributes = (
  output: any,
  context: __SerdeContext
): DeviceiSCSIAttributes => {
  let contents: any = {
    __type: "DeviceiSCSIAttributes",
    ChapEnabled: undefined,
    NetworkInterfaceId: undefined,
    NetworkInterfacePort: undefined,
    TargetARN: undefined
  };
  if (output.ChapEnabled !== undefined && output.ChapEnabled !== null) {
    contents.ChapEnabled = output.ChapEnabled;
  }
  if (
    output.NetworkInterfaceId !== undefined &&
    output.NetworkInterfaceId !== null
  ) {
    contents.NetworkInterfaceId = output.NetworkInterfaceId;
  }
  if (
    output.NetworkInterfacePort !== undefined &&
    output.NetworkInterfacePort !== null
  ) {
    contents.NetworkInterfacePort = output.NetworkInterfacePort;
  }
  if (output.TargetARN !== undefined && output.TargetARN !== null) {
    contents.TargetARN = output.TargetARN;
  }
  return contents;
};

const deserializeAws_json1_1DisableGatewayOutput = (
  output: any,
  context: __SerdeContext
): DisableGatewayOutput => {
  let contents: any = {
    __type: "DisableGatewayOutput",
    GatewayARN: undefined
  };
  if (output.GatewayARN !== undefined && output.GatewayARN !== null) {
    contents.GatewayARN = output.GatewayARN;
  }
  return contents;
};

const deserializeAws_json1_1Disk = (
  output: any,
  context: __SerdeContext
): Disk => {
  let contents: any = {
    __type: "Disk",
    DiskAllocationResource: undefined,
    DiskAllocationType: undefined,
    DiskAttributeList: undefined,
    DiskId: undefined,
    DiskNode: undefined,
    DiskPath: undefined,
    DiskSizeInBytes: undefined,
    DiskStatus: undefined
  };
  if (
    output.DiskAllocationResource !== undefined &&
    output.DiskAllocationResource !== null
  ) {
    contents.DiskAllocationResource = output.DiskAllocationResource;
  }
  if (
    output.DiskAllocationType !== undefined &&
    output.DiskAllocationType !== null
  ) {
    contents.DiskAllocationType = output.DiskAllocationType;
  }
  if (
    output.DiskAttributeList !== undefined &&
    output.DiskAttributeList !== null
  ) {
    contents.DiskAttributeList = deserializeAws_json1_1DiskAttributeList(
      output.DiskAttributeList,
      context
    );
  }
  if (output.DiskId !== undefined && output.DiskId !== null) {
    contents.DiskId = output.DiskId;
  }
  if (output.DiskNode !== undefined && output.DiskNode !== null) {
    contents.DiskNode = output.DiskNode;
  }
  if (output.DiskPath !== undefined && output.DiskPath !== null) {
    contents.DiskPath = output.DiskPath;
  }
  if (output.DiskSizeInBytes !== undefined && output.DiskSizeInBytes !== null) {
    contents.DiskSizeInBytes = output.DiskSizeInBytes;
  }
  if (output.DiskStatus !== undefined && output.DiskStatus !== null) {
    contents.DiskStatus = output.DiskStatus;
  }
  return contents;
};

const deserializeAws_json1_1DiskAttributeList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1Disks = (
  output: any,
  context: __SerdeContext
): Array<Disk> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Disk(entry, context)
  );
};

const deserializeAws_json1_1FileShareClientList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1FileShareInfo = (
  output: any,
  context: __SerdeContext
): FileShareInfo => {
  let contents: any = {
    __type: "FileShareInfo",
    FileShareARN: undefined,
    FileShareId: undefined,
    FileShareStatus: undefined,
    FileShareType: undefined,
    GatewayARN: undefined
  };
  if (output.FileShareARN !== undefined && output.FileShareARN !== null) {
    contents.FileShareARN = output.FileShareARN;
  }
  if (output.FileShareId !== undefined && output.FileShareId !== null) {
    contents.FileShareId = output.FileShareId;
  }
  if (output.FileShareStatus !== undefined && output.FileShareStatus !== null) {
    contents.FileShareStatus = output.FileShareStatus;
  }
  if (output.FileShareType !== undefined && output.FileShareType !== null) {
    contents.FileShareType = output.FileShareType;
  }
  if (output.GatewayARN !== undefined && output.GatewayARN !== null) {
    contents.GatewayARN = output.GatewayARN;
  }
  return contents;
};

const deserializeAws_json1_1FileShareInfoList = (
  output: any,
  context: __SerdeContext
): Array<FileShareInfo> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1FileShareInfo(entry, context)
  );
};

const deserializeAws_json1_1FileShareUserList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1GatewayInfo = (
  output: any,
  context: __SerdeContext
): GatewayInfo => {
  let contents: any = {
    __type: "GatewayInfo",
    Ec2InstanceId: undefined,
    Ec2InstanceRegion: undefined,
    GatewayARN: undefined,
    GatewayId: undefined,
    GatewayName: undefined,
    GatewayOperationalState: undefined,
    GatewayType: undefined
  };
  if (output.Ec2InstanceId !== undefined && output.Ec2InstanceId !== null) {
    contents.Ec2InstanceId = output.Ec2InstanceId;
  }
  if (
    output.Ec2InstanceRegion !== undefined &&
    output.Ec2InstanceRegion !== null
  ) {
    contents.Ec2InstanceRegion = output.Ec2InstanceRegion;
  }
  if (output.GatewayARN !== undefined && output.GatewayARN !== null) {
    contents.GatewayARN = output.GatewayARN;
  }
  if (output.GatewayId !== undefined && output.GatewayId !== null) {
    contents.GatewayId = output.GatewayId;
  }
  if (output.GatewayName !== undefined && output.GatewayName !== null) {
    contents.GatewayName = output.GatewayName;
  }
  if (
    output.GatewayOperationalState !== undefined &&
    output.GatewayOperationalState !== null
  ) {
    contents.GatewayOperationalState = output.GatewayOperationalState;
  }
  if (output.GatewayType !== undefined && output.GatewayType !== null) {
    contents.GatewayType = output.GatewayType;
  }
  return contents;
};

const deserializeAws_json1_1Gateways = (
  output: any,
  context: __SerdeContext
): Array<GatewayInfo> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1GatewayInfo(entry, context)
  );
};

const deserializeAws_json1_1Initiators = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1JoinDomainOutput = (
  output: any,
  context: __SerdeContext
): JoinDomainOutput => {
  let contents: any = {
    __type: "JoinDomainOutput",
    ActiveDirectoryStatus: undefined,
    GatewayARN: undefined
  };
  if (
    output.ActiveDirectoryStatus !== undefined &&
    output.ActiveDirectoryStatus !== null
  ) {
    contents.ActiveDirectoryStatus = output.ActiveDirectoryStatus;
  }
  if (output.GatewayARN !== undefined && output.GatewayARN !== null) {
    contents.GatewayARN = output.GatewayARN;
  }
  return contents;
};

const deserializeAws_json1_1ListFileSharesOutput = (
  output: any,
  context: __SerdeContext
): ListFileSharesOutput => {
  let contents: any = {
    __type: "ListFileSharesOutput",
    FileShareInfoList: undefined,
    Marker: undefined,
    NextMarker: undefined
  };
  if (
    output.FileShareInfoList !== undefined &&
    output.FileShareInfoList !== null
  ) {
    contents.FileShareInfoList = deserializeAws_json1_1FileShareInfoList(
      output.FileShareInfoList,
      context
    );
  }
  if (output.Marker !== undefined && output.Marker !== null) {
    contents.Marker = output.Marker;
  }
  if (output.NextMarker !== undefined && output.NextMarker !== null) {
    contents.NextMarker = output.NextMarker;
  }
  return contents;
};

const deserializeAws_json1_1ListGatewaysOutput = (
  output: any,
  context: __SerdeContext
): ListGatewaysOutput => {
  let contents: any = {
    __type: "ListGatewaysOutput",
    Gateways: undefined,
    Marker: undefined
  };
  if (output.Gateways !== undefined && output.Gateways !== null) {
    contents.Gateways = deserializeAws_json1_1Gateways(
      output.Gateways,
      context
    );
  }
  if (output.Marker !== undefined && output.Marker !== null) {
    contents.Marker = output.Marker;
  }
  return contents;
};

const deserializeAws_json1_1ListLocalDisksOutput = (
  output: any,
  context: __SerdeContext
): ListLocalDisksOutput => {
  let contents: any = {
    __type: "ListLocalDisksOutput",
    Disks: undefined,
    GatewayARN: undefined
  };
  if (output.Disks !== undefined && output.Disks !== null) {
    contents.Disks = deserializeAws_json1_1Disks(output.Disks, context);
  }
  if (output.GatewayARN !== undefined && output.GatewayARN !== null) {
    contents.GatewayARN = output.GatewayARN;
  }
  return contents;
};

const deserializeAws_json1_1ListTagsForResourceOutput = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceOutput => {
  let contents: any = {
    __type: "ListTagsForResourceOutput",
    Marker: undefined,
    ResourceARN: undefined,
    Tags: undefined
  };
  if (output.Marker !== undefined && output.Marker !== null) {
    contents.Marker = output.Marker;
  }
  if (output.ResourceARN !== undefined && output.ResourceARN !== null) {
    contents.ResourceARN = output.ResourceARN;
  }
  if (output.Tags !== undefined && output.Tags !== null) {
    contents.Tags = deserializeAws_json1_1Tags(output.Tags, context);
  }
  return contents;
};

const deserializeAws_json1_1ListTapesOutput = (
  output: any,
  context: __SerdeContext
): ListTapesOutput => {
  let contents: any = {
    __type: "ListTapesOutput",
    Marker: undefined,
    TapeInfos: undefined
  };
  if (output.Marker !== undefined && output.Marker !== null) {
    contents.Marker = output.Marker;
  }
  if (output.TapeInfos !== undefined && output.TapeInfos !== null) {
    contents.TapeInfos = deserializeAws_json1_1TapeInfos(
      output.TapeInfos,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListVolumeInitiatorsOutput = (
  output: any,
  context: __SerdeContext
): ListVolumeInitiatorsOutput => {
  let contents: any = {
    __type: "ListVolumeInitiatorsOutput",
    Initiators: undefined
  };
  if (output.Initiators !== undefined && output.Initiators !== null) {
    contents.Initiators = deserializeAws_json1_1Initiators(
      output.Initiators,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListVolumesOutput = (
  output: any,
  context: __SerdeContext
): ListVolumesOutput => {
  let contents: any = {
    __type: "ListVolumesOutput",
    GatewayARN: undefined,
    Marker: undefined,
    VolumeInfos: undefined
  };
  if (output.GatewayARN !== undefined && output.GatewayARN !== null) {
    contents.GatewayARN = output.GatewayARN;
  }
  if (output.Marker !== undefined && output.Marker !== null) {
    contents.Marker = output.Marker;
  }
  if (output.VolumeInfos !== undefined && output.VolumeInfos !== null) {
    contents.VolumeInfos = deserializeAws_json1_1VolumeInfos(
      output.VolumeInfos,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1NFSFileShareDefaults = (
  output: any,
  context: __SerdeContext
): NFSFileShareDefaults => {
  let contents: any = {
    __type: "NFSFileShareDefaults",
    DirectoryMode: undefined,
    FileMode: undefined,
    GroupId: undefined,
    OwnerId: undefined
  };
  if (output.DirectoryMode !== undefined && output.DirectoryMode !== null) {
    contents.DirectoryMode = output.DirectoryMode;
  }
  if (output.FileMode !== undefined && output.FileMode !== null) {
    contents.FileMode = output.FileMode;
  }
  if (output.GroupId !== undefined && output.GroupId !== null) {
    contents.GroupId = output.GroupId;
  }
  if (output.OwnerId !== undefined && output.OwnerId !== null) {
    contents.OwnerId = output.OwnerId;
  }
  return contents;
};

const deserializeAws_json1_1NFSFileShareInfo = (
  output: any,
  context: __SerdeContext
): NFSFileShareInfo => {
  let contents: any = {
    __type: "NFSFileShareInfo",
    ClientList: undefined,
    DefaultStorageClass: undefined,
    FileShareARN: undefined,
    FileShareId: undefined,
    FileShareStatus: undefined,
    GatewayARN: undefined,
    GuessMIMETypeEnabled: undefined,
    KMSEncrypted: undefined,
    KMSKey: undefined,
    LocationARN: undefined,
    NFSFileShareDefaults: undefined,
    ObjectACL: undefined,
    Path: undefined,
    ReadOnly: undefined,
    RequesterPays: undefined,
    Role: undefined,
    Squash: undefined,
    Tags: undefined
  };
  if (output.ClientList !== undefined && output.ClientList !== null) {
    contents.ClientList = deserializeAws_json1_1FileShareClientList(
      output.ClientList,
      context
    );
  }
  if (
    output.DefaultStorageClass !== undefined &&
    output.DefaultStorageClass !== null
  ) {
    contents.DefaultStorageClass = output.DefaultStorageClass;
  }
  if (output.FileShareARN !== undefined && output.FileShareARN !== null) {
    contents.FileShareARN = output.FileShareARN;
  }
  if (output.FileShareId !== undefined && output.FileShareId !== null) {
    contents.FileShareId = output.FileShareId;
  }
  if (output.FileShareStatus !== undefined && output.FileShareStatus !== null) {
    contents.FileShareStatus = output.FileShareStatus;
  }
  if (output.GatewayARN !== undefined && output.GatewayARN !== null) {
    contents.GatewayARN = output.GatewayARN;
  }
  if (
    output.GuessMIMETypeEnabled !== undefined &&
    output.GuessMIMETypeEnabled !== null
  ) {
    contents.GuessMIMETypeEnabled = output.GuessMIMETypeEnabled;
  }
  if (output.KMSEncrypted !== undefined && output.KMSEncrypted !== null) {
    contents.KMSEncrypted = output.KMSEncrypted;
  }
  if (output.KMSKey !== undefined && output.KMSKey !== null) {
    contents.KMSKey = output.KMSKey;
  }
  if (output.LocationARN !== undefined && output.LocationARN !== null) {
    contents.LocationARN = output.LocationARN;
  }
  if (
    output.NFSFileShareDefaults !== undefined &&
    output.NFSFileShareDefaults !== null
  ) {
    contents.NFSFileShareDefaults = deserializeAws_json1_1NFSFileShareDefaults(
      output.NFSFileShareDefaults,
      context
    );
  }
  if (output.ObjectACL !== undefined && output.ObjectACL !== null) {
    contents.ObjectACL = output.ObjectACL;
  }
  if (output.Path !== undefined && output.Path !== null) {
    contents.Path = output.Path;
  }
  if (output.ReadOnly !== undefined && output.ReadOnly !== null) {
    contents.ReadOnly = output.ReadOnly;
  }
  if (output.RequesterPays !== undefined && output.RequesterPays !== null) {
    contents.RequesterPays = output.RequesterPays;
  }
  if (output.Role !== undefined && output.Role !== null) {
    contents.Role = output.Role;
  }
  if (output.Squash !== undefined && output.Squash !== null) {
    contents.Squash = output.Squash;
  }
  if (output.Tags !== undefined && output.Tags !== null) {
    contents.Tags = deserializeAws_json1_1Tags(output.Tags, context);
  }
  return contents;
};

const deserializeAws_json1_1NFSFileShareInfoList = (
  output: any,
  context: __SerdeContext
): Array<NFSFileShareInfo> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1NFSFileShareInfo(entry, context)
  );
};

const deserializeAws_json1_1NotifyWhenUploadedOutput = (
  output: any,
  context: __SerdeContext
): NotifyWhenUploadedOutput => {
  let contents: any = {
    __type: "NotifyWhenUploadedOutput",
    FileShareARN: undefined,
    NotificationId: undefined
  };
  if (output.FileShareARN !== undefined && output.FileShareARN !== null) {
    contents.FileShareARN = output.FileShareARN;
  }
  if (output.NotificationId !== undefined && output.NotificationId !== null) {
    contents.NotificationId = output.NotificationId;
  }
  return contents;
};

const deserializeAws_json1_1RefreshCacheOutput = (
  output: any,
  context: __SerdeContext
): RefreshCacheOutput => {
  let contents: any = {
    __type: "RefreshCacheOutput",
    FileShareARN: undefined,
    NotificationId: undefined
  };
  if (output.FileShareARN !== undefined && output.FileShareARN !== null) {
    contents.FileShareARN = output.FileShareARN;
  }
  if (output.NotificationId !== undefined && output.NotificationId !== null) {
    contents.NotificationId = output.NotificationId;
  }
  return contents;
};

const deserializeAws_json1_1RemoveTagsFromResourceOutput = (
  output: any,
  context: __SerdeContext
): RemoveTagsFromResourceOutput => {
  let contents: any = {
    __type: "RemoveTagsFromResourceOutput",
    ResourceARN: undefined
  };
  if (output.ResourceARN !== undefined && output.ResourceARN !== null) {
    contents.ResourceARN = output.ResourceARN;
  }
  return contents;
};

const deserializeAws_json1_1ResetCacheOutput = (
  output: any,
  context: __SerdeContext
): ResetCacheOutput => {
  let contents: any = {
    __type: "ResetCacheOutput",
    GatewayARN: undefined
  };
  if (output.GatewayARN !== undefined && output.GatewayARN !== null) {
    contents.GatewayARN = output.GatewayARN;
  }
  return contents;
};

const deserializeAws_json1_1RetrieveTapeArchiveOutput = (
  output: any,
  context: __SerdeContext
): RetrieveTapeArchiveOutput => {
  let contents: any = {
    __type: "RetrieveTapeArchiveOutput",
    TapeARN: undefined
  };
  if (output.TapeARN !== undefined && output.TapeARN !== null) {
    contents.TapeARN = output.TapeARN;
  }
  return contents;
};

const deserializeAws_json1_1RetrieveTapeRecoveryPointOutput = (
  output: any,
  context: __SerdeContext
): RetrieveTapeRecoveryPointOutput => {
  let contents: any = {
    __type: "RetrieveTapeRecoveryPointOutput",
    TapeARN: undefined
  };
  if (output.TapeARN !== undefined && output.TapeARN !== null) {
    contents.TapeARN = output.TapeARN;
  }
  return contents;
};

const deserializeAws_json1_1SMBFileShareInfo = (
  output: any,
  context: __SerdeContext
): SMBFileShareInfo => {
  let contents: any = {
    __type: "SMBFileShareInfo",
    AdminUserList: undefined,
    Authentication: undefined,
    DefaultStorageClass: undefined,
    FileShareARN: undefined,
    FileShareId: undefined,
    FileShareStatus: undefined,
    GatewayARN: undefined,
    GuessMIMETypeEnabled: undefined,
    InvalidUserList: undefined,
    KMSEncrypted: undefined,
    KMSKey: undefined,
    LocationARN: undefined,
    ObjectACL: undefined,
    Path: undefined,
    ReadOnly: undefined,
    RequesterPays: undefined,
    Role: undefined,
    SMBACLEnabled: undefined,
    Tags: undefined,
    ValidUserList: undefined
  };
  if (output.AdminUserList !== undefined && output.AdminUserList !== null) {
    contents.AdminUserList = deserializeAws_json1_1FileShareUserList(
      output.AdminUserList,
      context
    );
  }
  if (output.Authentication !== undefined && output.Authentication !== null) {
    contents.Authentication = output.Authentication;
  }
  if (
    output.DefaultStorageClass !== undefined &&
    output.DefaultStorageClass !== null
  ) {
    contents.DefaultStorageClass = output.DefaultStorageClass;
  }
  if (output.FileShareARN !== undefined && output.FileShareARN !== null) {
    contents.FileShareARN = output.FileShareARN;
  }
  if (output.FileShareId !== undefined && output.FileShareId !== null) {
    contents.FileShareId = output.FileShareId;
  }
  if (output.FileShareStatus !== undefined && output.FileShareStatus !== null) {
    contents.FileShareStatus = output.FileShareStatus;
  }
  if (output.GatewayARN !== undefined && output.GatewayARN !== null) {
    contents.GatewayARN = output.GatewayARN;
  }
  if (
    output.GuessMIMETypeEnabled !== undefined &&
    output.GuessMIMETypeEnabled !== null
  ) {
    contents.GuessMIMETypeEnabled = output.GuessMIMETypeEnabled;
  }
  if (output.InvalidUserList !== undefined && output.InvalidUserList !== null) {
    contents.InvalidUserList = deserializeAws_json1_1FileShareUserList(
      output.InvalidUserList,
      context
    );
  }
  if (output.KMSEncrypted !== undefined && output.KMSEncrypted !== null) {
    contents.KMSEncrypted = output.KMSEncrypted;
  }
  if (output.KMSKey !== undefined && output.KMSKey !== null) {
    contents.KMSKey = output.KMSKey;
  }
  if (output.LocationARN !== undefined && output.LocationARN !== null) {
    contents.LocationARN = output.LocationARN;
  }
  if (output.ObjectACL !== undefined && output.ObjectACL !== null) {
    contents.ObjectACL = output.ObjectACL;
  }
  if (output.Path !== undefined && output.Path !== null) {
    contents.Path = output.Path;
  }
  if (output.ReadOnly !== undefined && output.ReadOnly !== null) {
    contents.ReadOnly = output.ReadOnly;
  }
  if (output.RequesterPays !== undefined && output.RequesterPays !== null) {
    contents.RequesterPays = output.RequesterPays;
  }
  if (output.Role !== undefined && output.Role !== null) {
    contents.Role = output.Role;
  }
  if (output.SMBACLEnabled !== undefined && output.SMBACLEnabled !== null) {
    contents.SMBACLEnabled = output.SMBACLEnabled;
  }
  if (output.Tags !== undefined && output.Tags !== null) {
    contents.Tags = deserializeAws_json1_1Tags(output.Tags, context);
  }
  if (output.ValidUserList !== undefined && output.ValidUserList !== null) {
    contents.ValidUserList = deserializeAws_json1_1FileShareUserList(
      output.ValidUserList,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1SMBFileShareInfoList = (
  output: any,
  context: __SerdeContext
): Array<SMBFileShareInfo> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1SMBFileShareInfo(entry, context)
  );
};

const deserializeAws_json1_1SetLocalConsolePasswordOutput = (
  output: any,
  context: __SerdeContext
): SetLocalConsolePasswordOutput => {
  let contents: any = {
    __type: "SetLocalConsolePasswordOutput",
    GatewayARN: undefined
  };
  if (output.GatewayARN !== undefined && output.GatewayARN !== null) {
    contents.GatewayARN = output.GatewayARN;
  }
  return contents;
};

const deserializeAws_json1_1SetSMBGuestPasswordOutput = (
  output: any,
  context: __SerdeContext
): SetSMBGuestPasswordOutput => {
  let contents: any = {
    __type: "SetSMBGuestPasswordOutput",
    GatewayARN: undefined
  };
  if (output.GatewayARN !== undefined && output.GatewayARN !== null) {
    contents.GatewayARN = output.GatewayARN;
  }
  return contents;
};

const deserializeAws_json1_1StartAvailabilityMonitorTestOutput = (
  output: any,
  context: __SerdeContext
): StartAvailabilityMonitorTestOutput => {
  let contents: any = {
    __type: "StartAvailabilityMonitorTestOutput",
    GatewayARN: undefined
  };
  if (output.GatewayARN !== undefined && output.GatewayARN !== null) {
    contents.GatewayARN = output.GatewayARN;
  }
  return contents;
};

const deserializeAws_json1_1StorediSCSIVolume = (
  output: any,
  context: __SerdeContext
): StorediSCSIVolume => {
  let contents: any = {
    __type: "StorediSCSIVolume",
    CreatedDate: undefined,
    KMSKey: undefined,
    PreservedExistingData: undefined,
    SourceSnapshotId: undefined,
    TargetName: undefined,
    VolumeARN: undefined,
    VolumeAttachmentStatus: undefined,
    VolumeDiskId: undefined,
    VolumeId: undefined,
    VolumeProgress: undefined,
    VolumeSizeInBytes: undefined,
    VolumeStatus: undefined,
    VolumeType: undefined,
    VolumeUsedInBytes: undefined,
    VolumeiSCSIAttributes: undefined
  };
  if (output.CreatedDate !== undefined && output.CreatedDate !== null) {
    contents.CreatedDate = new Date(Math.round(output.CreatedDate * 1000));
  }
  if (output.KMSKey !== undefined && output.KMSKey !== null) {
    contents.KMSKey = output.KMSKey;
  }
  if (
    output.PreservedExistingData !== undefined &&
    output.PreservedExistingData !== null
  ) {
    contents.PreservedExistingData = output.PreservedExistingData;
  }
  if (
    output.SourceSnapshotId !== undefined &&
    output.SourceSnapshotId !== null
  ) {
    contents.SourceSnapshotId = output.SourceSnapshotId;
  }
  if (output.TargetName !== undefined && output.TargetName !== null) {
    contents.TargetName = output.TargetName;
  }
  if (output.VolumeARN !== undefined && output.VolumeARN !== null) {
    contents.VolumeARN = output.VolumeARN;
  }
  if (
    output.VolumeAttachmentStatus !== undefined &&
    output.VolumeAttachmentStatus !== null
  ) {
    contents.VolumeAttachmentStatus = output.VolumeAttachmentStatus;
  }
  if (output.VolumeDiskId !== undefined && output.VolumeDiskId !== null) {
    contents.VolumeDiskId = output.VolumeDiskId;
  }
  if (output.VolumeId !== undefined && output.VolumeId !== null) {
    contents.VolumeId = output.VolumeId;
  }
  if (output.VolumeProgress !== undefined && output.VolumeProgress !== null) {
    contents.VolumeProgress = output.VolumeProgress;
  }
  if (
    output.VolumeSizeInBytes !== undefined &&
    output.VolumeSizeInBytes !== null
  ) {
    contents.VolumeSizeInBytes = output.VolumeSizeInBytes;
  }
  if (output.VolumeStatus !== undefined && output.VolumeStatus !== null) {
    contents.VolumeStatus = output.VolumeStatus;
  }
  if (output.VolumeType !== undefined && output.VolumeType !== null) {
    contents.VolumeType = output.VolumeType;
  }
  if (
    output.VolumeUsedInBytes !== undefined &&
    output.VolumeUsedInBytes !== null
  ) {
    contents.VolumeUsedInBytes = output.VolumeUsedInBytes;
  }
  if (
    output.VolumeiSCSIAttributes !== undefined &&
    output.VolumeiSCSIAttributes !== null
  ) {
    contents.VolumeiSCSIAttributes = deserializeAws_json1_1VolumeiSCSIAttributes(
      output.VolumeiSCSIAttributes,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1StorediSCSIVolumes = (
  output: any,
  context: __SerdeContext
): Array<StorediSCSIVolume> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1StorediSCSIVolume(entry, context)
  );
};

const deserializeAws_json1_1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  let contents: any = {
    __type: "Tag",
    Key: undefined,
    Value: undefined
  };
  if (output.Key !== undefined && output.Key !== null) {
    contents.Key = output.Key;
  }
  if (output.Value !== undefined && output.Value !== null) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_json1_1Tags = (
  output: any,
  context: __SerdeContext
): Array<Tag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Tag(entry, context)
  );
};

const deserializeAws_json1_1Tape = (
  output: any,
  context: __SerdeContext
): Tape => {
  let contents: any = {
    __type: "Tape",
    KMSKey: undefined,
    PoolId: undefined,
    Progress: undefined,
    TapeARN: undefined,
    TapeBarcode: undefined,
    TapeCreatedDate: undefined,
    TapeSizeInBytes: undefined,
    TapeStatus: undefined,
    TapeUsedInBytes: undefined,
    VTLDevice: undefined
  };
  if (output.KMSKey !== undefined && output.KMSKey !== null) {
    contents.KMSKey = output.KMSKey;
  }
  if (output.PoolId !== undefined && output.PoolId !== null) {
    contents.PoolId = output.PoolId;
  }
  if (output.Progress !== undefined && output.Progress !== null) {
    contents.Progress = output.Progress;
  }
  if (output.TapeARN !== undefined && output.TapeARN !== null) {
    contents.TapeARN = output.TapeARN;
  }
  if (output.TapeBarcode !== undefined && output.TapeBarcode !== null) {
    contents.TapeBarcode = output.TapeBarcode;
  }
  if (output.TapeCreatedDate !== undefined && output.TapeCreatedDate !== null) {
    contents.TapeCreatedDate = new Date(
      Math.round(output.TapeCreatedDate * 1000)
    );
  }
  if (output.TapeSizeInBytes !== undefined && output.TapeSizeInBytes !== null) {
    contents.TapeSizeInBytes = output.TapeSizeInBytes;
  }
  if (output.TapeStatus !== undefined && output.TapeStatus !== null) {
    contents.TapeStatus = output.TapeStatus;
  }
  if (output.TapeUsedInBytes !== undefined && output.TapeUsedInBytes !== null) {
    contents.TapeUsedInBytes = output.TapeUsedInBytes;
  }
  if (output.VTLDevice !== undefined && output.VTLDevice !== null) {
    contents.VTLDevice = output.VTLDevice;
  }
  return contents;
};

const deserializeAws_json1_1TapeARNs = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1TapeArchive = (
  output: any,
  context: __SerdeContext
): TapeArchive => {
  let contents: any = {
    __type: "TapeArchive",
    CompletionTime: undefined,
    KMSKey: undefined,
    PoolId: undefined,
    RetrievedTo: undefined,
    TapeARN: undefined,
    TapeBarcode: undefined,
    TapeCreatedDate: undefined,
    TapeSizeInBytes: undefined,
    TapeStatus: undefined,
    TapeUsedInBytes: undefined
  };
  if (output.CompletionTime !== undefined && output.CompletionTime !== null) {
    contents.CompletionTime = new Date(
      Math.round(output.CompletionTime * 1000)
    );
  }
  if (output.KMSKey !== undefined && output.KMSKey !== null) {
    contents.KMSKey = output.KMSKey;
  }
  if (output.PoolId !== undefined && output.PoolId !== null) {
    contents.PoolId = output.PoolId;
  }
  if (output.RetrievedTo !== undefined && output.RetrievedTo !== null) {
    contents.RetrievedTo = output.RetrievedTo;
  }
  if (output.TapeARN !== undefined && output.TapeARN !== null) {
    contents.TapeARN = output.TapeARN;
  }
  if (output.TapeBarcode !== undefined && output.TapeBarcode !== null) {
    contents.TapeBarcode = output.TapeBarcode;
  }
  if (output.TapeCreatedDate !== undefined && output.TapeCreatedDate !== null) {
    contents.TapeCreatedDate = new Date(
      Math.round(output.TapeCreatedDate * 1000)
    );
  }
  if (output.TapeSizeInBytes !== undefined && output.TapeSizeInBytes !== null) {
    contents.TapeSizeInBytes = output.TapeSizeInBytes;
  }
  if (output.TapeStatus !== undefined && output.TapeStatus !== null) {
    contents.TapeStatus = output.TapeStatus;
  }
  if (output.TapeUsedInBytes !== undefined && output.TapeUsedInBytes !== null) {
    contents.TapeUsedInBytes = output.TapeUsedInBytes;
  }
  return contents;
};

const deserializeAws_json1_1TapeArchives = (
  output: any,
  context: __SerdeContext
): Array<TapeArchive> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1TapeArchive(entry, context)
  );
};

const deserializeAws_json1_1TapeInfo = (
  output: any,
  context: __SerdeContext
): TapeInfo => {
  let contents: any = {
    __type: "TapeInfo",
    GatewayARN: undefined,
    PoolId: undefined,
    TapeARN: undefined,
    TapeBarcode: undefined,
    TapeSizeInBytes: undefined,
    TapeStatus: undefined
  };
  if (output.GatewayARN !== undefined && output.GatewayARN !== null) {
    contents.GatewayARN = output.GatewayARN;
  }
  if (output.PoolId !== undefined && output.PoolId !== null) {
    contents.PoolId = output.PoolId;
  }
  if (output.TapeARN !== undefined && output.TapeARN !== null) {
    contents.TapeARN = output.TapeARN;
  }
  if (output.TapeBarcode !== undefined && output.TapeBarcode !== null) {
    contents.TapeBarcode = output.TapeBarcode;
  }
  if (output.TapeSizeInBytes !== undefined && output.TapeSizeInBytes !== null) {
    contents.TapeSizeInBytes = output.TapeSizeInBytes;
  }
  if (output.TapeStatus !== undefined && output.TapeStatus !== null) {
    contents.TapeStatus = output.TapeStatus;
  }
  return contents;
};

const deserializeAws_json1_1TapeInfos = (
  output: any,
  context: __SerdeContext
): Array<TapeInfo> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1TapeInfo(entry, context)
  );
};

const deserializeAws_json1_1TapeRecoveryPointInfo = (
  output: any,
  context: __SerdeContext
): TapeRecoveryPointInfo => {
  let contents: any = {
    __type: "TapeRecoveryPointInfo",
    TapeARN: undefined,
    TapeRecoveryPointTime: undefined,
    TapeSizeInBytes: undefined,
    TapeStatus: undefined
  };
  if (output.TapeARN !== undefined && output.TapeARN !== null) {
    contents.TapeARN = output.TapeARN;
  }
  if (
    output.TapeRecoveryPointTime !== undefined &&
    output.TapeRecoveryPointTime !== null
  ) {
    contents.TapeRecoveryPointTime = new Date(
      Math.round(output.TapeRecoveryPointTime * 1000)
    );
  }
  if (output.TapeSizeInBytes !== undefined && output.TapeSizeInBytes !== null) {
    contents.TapeSizeInBytes = output.TapeSizeInBytes;
  }
  if (output.TapeStatus !== undefined && output.TapeStatus !== null) {
    contents.TapeStatus = output.TapeStatus;
  }
  return contents;
};

const deserializeAws_json1_1TapeRecoveryPointInfos = (
  output: any,
  context: __SerdeContext
): Array<TapeRecoveryPointInfo> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1TapeRecoveryPointInfo(entry, context)
  );
};

const deserializeAws_json1_1Tapes = (
  output: any,
  context: __SerdeContext
): Array<Tape> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Tape(entry, context)
  );
};

const deserializeAws_json1_1UpdateNFSFileShareOutput = (
  output: any,
  context: __SerdeContext
): UpdateNFSFileShareOutput => {
  let contents: any = {
    __type: "UpdateNFSFileShareOutput",
    FileShareARN: undefined
  };
  if (output.FileShareARN !== undefined && output.FileShareARN !== null) {
    contents.FileShareARN = output.FileShareARN;
  }
  return contents;
};

const deserializeAws_json1_1UpdateSMBFileShareOutput = (
  output: any,
  context: __SerdeContext
): UpdateSMBFileShareOutput => {
  let contents: any = {
    __type: "UpdateSMBFileShareOutput",
    FileShareARN: undefined
  };
  if (output.FileShareARN !== undefined && output.FileShareARN !== null) {
    contents.FileShareARN = output.FileShareARN;
  }
  return contents;
};

const deserializeAws_json1_1UpdateSMBSecurityStrategyOutput = (
  output: any,
  context: __SerdeContext
): UpdateSMBSecurityStrategyOutput => {
  let contents: any = {
    __type: "UpdateSMBSecurityStrategyOutput",
    GatewayARN: undefined
  };
  if (output.GatewayARN !== undefined && output.GatewayARN !== null) {
    contents.GatewayARN = output.GatewayARN;
  }
  return contents;
};

const deserializeAws_json1_1UpdateVTLDeviceTypeOutput = (
  output: any,
  context: __SerdeContext
): UpdateVTLDeviceTypeOutput => {
  let contents: any = {
    __type: "UpdateVTLDeviceTypeOutput",
    VTLDeviceARN: undefined
  };
  if (output.VTLDeviceARN !== undefined && output.VTLDeviceARN !== null) {
    contents.VTLDeviceARN = output.VTLDeviceARN;
  }
  return contents;
};

const deserializeAws_json1_1VTLDevice = (
  output: any,
  context: __SerdeContext
): VTLDevice => {
  let contents: any = {
    __type: "VTLDevice",
    DeviceiSCSIAttributes: undefined,
    VTLDeviceARN: undefined,
    VTLDeviceProductIdentifier: undefined,
    VTLDeviceType: undefined,
    VTLDeviceVendor: undefined
  };
  if (
    output.DeviceiSCSIAttributes !== undefined &&
    output.DeviceiSCSIAttributes !== null
  ) {
    contents.DeviceiSCSIAttributes = deserializeAws_json1_1DeviceiSCSIAttributes(
      output.DeviceiSCSIAttributes,
      context
    );
  }
  if (output.VTLDeviceARN !== undefined && output.VTLDeviceARN !== null) {
    contents.VTLDeviceARN = output.VTLDeviceARN;
  }
  if (
    output.VTLDeviceProductIdentifier !== undefined &&
    output.VTLDeviceProductIdentifier !== null
  ) {
    contents.VTLDeviceProductIdentifier = output.VTLDeviceProductIdentifier;
  }
  if (output.VTLDeviceType !== undefined && output.VTLDeviceType !== null) {
    contents.VTLDeviceType = output.VTLDeviceType;
  }
  if (output.VTLDeviceVendor !== undefined && output.VTLDeviceVendor !== null) {
    contents.VTLDeviceVendor = output.VTLDeviceVendor;
  }
  return contents;
};

const deserializeAws_json1_1VTLDevices = (
  output: any,
  context: __SerdeContext
): Array<VTLDevice> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1VTLDevice(entry, context)
  );
};

const deserializeAws_json1_1VolumeInfo = (
  output: any,
  context: __SerdeContext
): VolumeInfo => {
  let contents: any = {
    __type: "VolumeInfo",
    GatewayARN: undefined,
    GatewayId: undefined,
    VolumeARN: undefined,
    VolumeAttachmentStatus: undefined,
    VolumeId: undefined,
    VolumeSizeInBytes: undefined,
    VolumeType: undefined
  };
  if (output.GatewayARN !== undefined && output.GatewayARN !== null) {
    contents.GatewayARN = output.GatewayARN;
  }
  if (output.GatewayId !== undefined && output.GatewayId !== null) {
    contents.GatewayId = output.GatewayId;
  }
  if (output.VolumeARN !== undefined && output.VolumeARN !== null) {
    contents.VolumeARN = output.VolumeARN;
  }
  if (
    output.VolumeAttachmentStatus !== undefined &&
    output.VolumeAttachmentStatus !== null
  ) {
    contents.VolumeAttachmentStatus = output.VolumeAttachmentStatus;
  }
  if (output.VolumeId !== undefined && output.VolumeId !== null) {
    contents.VolumeId = output.VolumeId;
  }
  if (
    output.VolumeSizeInBytes !== undefined &&
    output.VolumeSizeInBytes !== null
  ) {
    contents.VolumeSizeInBytes = output.VolumeSizeInBytes;
  }
  if (output.VolumeType !== undefined && output.VolumeType !== null) {
    contents.VolumeType = output.VolumeType;
  }
  return contents;
};

const deserializeAws_json1_1VolumeInfos = (
  output: any,
  context: __SerdeContext
): Array<VolumeInfo> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1VolumeInfo(entry, context)
  );
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any,
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
): Promise<string> => {
  return collectBody(streamBody, context).then(body =>
    context.utf8Encoder(body)
  );
};

const buildHttpRpcRequest = (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): __HttpRequest => {
  const contents: any = {
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: path,
    headers: headers
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
