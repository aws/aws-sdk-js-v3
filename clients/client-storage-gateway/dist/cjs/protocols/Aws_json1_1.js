"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1ActivateGatewayCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.ActivateGateway";
    let body;
    body = JSON.stringify(serializeAws_json1_1ActivateGatewayInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ActivateGatewayCommand = serializeAws_json1_1ActivateGatewayCommand;
async function serializeAws_json1_1AddCacheCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.AddCache";
    let body;
    body = JSON.stringify(serializeAws_json1_1AddCacheInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AddCacheCommand = serializeAws_json1_1AddCacheCommand;
async function serializeAws_json1_1AddTagsToResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.AddTagsToResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1AddTagsToResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AddTagsToResourceCommand = serializeAws_json1_1AddTagsToResourceCommand;
async function serializeAws_json1_1AddUploadBufferCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.AddUploadBuffer";
    let body;
    body = JSON.stringify(serializeAws_json1_1AddUploadBufferInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AddUploadBufferCommand = serializeAws_json1_1AddUploadBufferCommand;
async function serializeAws_json1_1AddWorkingStorageCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.AddWorkingStorage";
    let body;
    body = JSON.stringify(serializeAws_json1_1AddWorkingStorageInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AddWorkingStorageCommand = serializeAws_json1_1AddWorkingStorageCommand;
async function serializeAws_json1_1AssignTapePoolCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.AssignTapePool";
    let body;
    body = JSON.stringify(serializeAws_json1_1AssignTapePoolInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AssignTapePoolCommand = serializeAws_json1_1AssignTapePoolCommand;
async function serializeAws_json1_1AttachVolumeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.AttachVolume";
    let body;
    body = JSON.stringify(serializeAws_json1_1AttachVolumeInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AttachVolumeCommand = serializeAws_json1_1AttachVolumeCommand;
async function serializeAws_json1_1CancelArchivalCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.CancelArchival";
    let body;
    body = JSON.stringify(serializeAws_json1_1CancelArchivalInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CancelArchivalCommand = serializeAws_json1_1CancelArchivalCommand;
async function serializeAws_json1_1CancelRetrievalCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.CancelRetrieval";
    let body;
    body = JSON.stringify(serializeAws_json1_1CancelRetrievalInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CancelRetrievalCommand = serializeAws_json1_1CancelRetrievalCommand;
async function serializeAws_json1_1CreateCachediSCSIVolumeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.CreateCachediSCSIVolume";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateCachediSCSIVolumeInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateCachediSCSIVolumeCommand = serializeAws_json1_1CreateCachediSCSIVolumeCommand;
async function serializeAws_json1_1CreateNFSFileShareCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.CreateNFSFileShare";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateNFSFileShareInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateNFSFileShareCommand = serializeAws_json1_1CreateNFSFileShareCommand;
async function serializeAws_json1_1CreateSMBFileShareCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.CreateSMBFileShare";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateSMBFileShareInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateSMBFileShareCommand = serializeAws_json1_1CreateSMBFileShareCommand;
async function serializeAws_json1_1CreateSnapshotCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.CreateSnapshot";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateSnapshotInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateSnapshotCommand = serializeAws_json1_1CreateSnapshotCommand;
async function serializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "StorageGateway_20130630.CreateSnapshotFromVolumeRecoveryPoint";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointCommand = serializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointCommand;
async function serializeAws_json1_1CreateStorediSCSIVolumeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.CreateStorediSCSIVolume";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateStorediSCSIVolumeInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateStorediSCSIVolumeCommand = serializeAws_json1_1CreateStorediSCSIVolumeCommand;
async function serializeAws_json1_1CreateTapeWithBarcodeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.CreateTapeWithBarcode";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateTapeWithBarcodeInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateTapeWithBarcodeCommand = serializeAws_json1_1CreateTapeWithBarcodeCommand;
async function serializeAws_json1_1CreateTapesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.CreateTapes";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateTapesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateTapesCommand = serializeAws_json1_1CreateTapesCommand;
async function serializeAws_json1_1DeleteBandwidthRateLimitCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.DeleteBandwidthRateLimit";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteBandwidthRateLimitInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteBandwidthRateLimitCommand = serializeAws_json1_1DeleteBandwidthRateLimitCommand;
async function serializeAws_json1_1DeleteChapCredentialsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.DeleteChapCredentials";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteChapCredentialsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteChapCredentialsCommand = serializeAws_json1_1DeleteChapCredentialsCommand;
async function serializeAws_json1_1DeleteFileShareCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.DeleteFileShare";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteFileShareInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteFileShareCommand = serializeAws_json1_1DeleteFileShareCommand;
async function serializeAws_json1_1DeleteGatewayCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.DeleteGateway";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteGatewayInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteGatewayCommand = serializeAws_json1_1DeleteGatewayCommand;
async function serializeAws_json1_1DeleteSnapshotScheduleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.DeleteSnapshotSchedule";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteSnapshotScheduleInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteSnapshotScheduleCommand = serializeAws_json1_1DeleteSnapshotScheduleCommand;
async function serializeAws_json1_1DeleteTapeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.DeleteTape";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteTapeInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteTapeCommand = serializeAws_json1_1DeleteTapeCommand;
async function serializeAws_json1_1DeleteTapeArchiveCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.DeleteTapeArchive";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteTapeArchiveInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteTapeArchiveCommand = serializeAws_json1_1DeleteTapeArchiveCommand;
async function serializeAws_json1_1DeleteVolumeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.DeleteVolume";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteVolumeInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteVolumeCommand = serializeAws_json1_1DeleteVolumeCommand;
async function serializeAws_json1_1DescribeAvailabilityMonitorTestCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "StorageGateway_20130630.DescribeAvailabilityMonitorTest";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAvailabilityMonitorTestInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeAvailabilityMonitorTestCommand = serializeAws_json1_1DescribeAvailabilityMonitorTestCommand;
async function serializeAws_json1_1DescribeBandwidthRateLimitCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "StorageGateway_20130630.DescribeBandwidthRateLimit";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeBandwidthRateLimitInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeBandwidthRateLimitCommand = serializeAws_json1_1DescribeBandwidthRateLimitCommand;
async function serializeAws_json1_1DescribeCacheCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.DescribeCache";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeCacheInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeCacheCommand = serializeAws_json1_1DescribeCacheCommand;
async function serializeAws_json1_1DescribeCachediSCSIVolumesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "StorageGateway_20130630.DescribeCachediSCSIVolumes";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeCachediSCSIVolumesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeCachediSCSIVolumesCommand = serializeAws_json1_1DescribeCachediSCSIVolumesCommand;
async function serializeAws_json1_1DescribeChapCredentialsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.DescribeChapCredentials";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeChapCredentialsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeChapCredentialsCommand = serializeAws_json1_1DescribeChapCredentialsCommand;
async function serializeAws_json1_1DescribeGatewayInformationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "StorageGateway_20130630.DescribeGatewayInformation";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeGatewayInformationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeGatewayInformationCommand = serializeAws_json1_1DescribeGatewayInformationCommand;
async function serializeAws_json1_1DescribeMaintenanceStartTimeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "StorageGateway_20130630.DescribeMaintenanceStartTime";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeMaintenanceStartTimeInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeMaintenanceStartTimeCommand = serializeAws_json1_1DescribeMaintenanceStartTimeCommand;
async function serializeAws_json1_1DescribeNFSFileSharesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.DescribeNFSFileShares";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeNFSFileSharesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeNFSFileSharesCommand = serializeAws_json1_1DescribeNFSFileSharesCommand;
async function serializeAws_json1_1DescribeSMBFileSharesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.DescribeSMBFileShares";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeSMBFileSharesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeSMBFileSharesCommand = serializeAws_json1_1DescribeSMBFileSharesCommand;
async function serializeAws_json1_1DescribeSMBSettingsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.DescribeSMBSettings";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeSMBSettingsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeSMBSettingsCommand = serializeAws_json1_1DescribeSMBSettingsCommand;
async function serializeAws_json1_1DescribeSnapshotScheduleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.DescribeSnapshotSchedule";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeSnapshotScheduleInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeSnapshotScheduleCommand = serializeAws_json1_1DescribeSnapshotScheduleCommand;
async function serializeAws_json1_1DescribeStorediSCSIVolumesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "StorageGateway_20130630.DescribeStorediSCSIVolumes";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeStorediSCSIVolumesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeStorediSCSIVolumesCommand = serializeAws_json1_1DescribeStorediSCSIVolumesCommand;
async function serializeAws_json1_1DescribeTapeArchivesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.DescribeTapeArchives";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeTapeArchivesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeTapeArchivesCommand = serializeAws_json1_1DescribeTapeArchivesCommand;
async function serializeAws_json1_1DescribeTapeRecoveryPointsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "StorageGateway_20130630.DescribeTapeRecoveryPoints";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeTapeRecoveryPointsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeTapeRecoveryPointsCommand = serializeAws_json1_1DescribeTapeRecoveryPointsCommand;
async function serializeAws_json1_1DescribeTapesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.DescribeTapes";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeTapesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeTapesCommand = serializeAws_json1_1DescribeTapesCommand;
async function serializeAws_json1_1DescribeUploadBufferCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.DescribeUploadBuffer";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeUploadBufferInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeUploadBufferCommand = serializeAws_json1_1DescribeUploadBufferCommand;
async function serializeAws_json1_1DescribeVTLDevicesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.DescribeVTLDevices";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeVTLDevicesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeVTLDevicesCommand = serializeAws_json1_1DescribeVTLDevicesCommand;
async function serializeAws_json1_1DescribeWorkingStorageCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.DescribeWorkingStorage";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeWorkingStorageInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeWorkingStorageCommand = serializeAws_json1_1DescribeWorkingStorageCommand;
async function serializeAws_json1_1DetachVolumeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.DetachVolume";
    let body;
    body = JSON.stringify(serializeAws_json1_1DetachVolumeInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DetachVolumeCommand = serializeAws_json1_1DetachVolumeCommand;
async function serializeAws_json1_1DisableGatewayCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.DisableGateway";
    let body;
    body = JSON.stringify(serializeAws_json1_1DisableGatewayInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DisableGatewayCommand = serializeAws_json1_1DisableGatewayCommand;
async function serializeAws_json1_1JoinDomainCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.JoinDomain";
    let body;
    body = JSON.stringify(serializeAws_json1_1JoinDomainInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1JoinDomainCommand = serializeAws_json1_1JoinDomainCommand;
async function serializeAws_json1_1ListFileSharesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.ListFileShares";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListFileSharesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListFileSharesCommand = serializeAws_json1_1ListFileSharesCommand;
async function serializeAws_json1_1ListGatewaysCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.ListGateways";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListGatewaysInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListGatewaysCommand = serializeAws_json1_1ListGatewaysCommand;
async function serializeAws_json1_1ListLocalDisksCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.ListLocalDisks";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListLocalDisksInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListLocalDisksCommand = serializeAws_json1_1ListLocalDisksCommand;
async function serializeAws_json1_1ListTagsForResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.ListTagsForResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
async function serializeAws_json1_1ListTapesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.ListTapes";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTapesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTapesCommand = serializeAws_json1_1ListTapesCommand;
async function serializeAws_json1_1ListVolumeInitiatorsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.ListVolumeInitiators";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListVolumeInitiatorsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListVolumeInitiatorsCommand = serializeAws_json1_1ListVolumeInitiatorsCommand;
async function serializeAws_json1_1ListVolumeRecoveryPointsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.ListVolumeRecoveryPoints";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListVolumeRecoveryPointsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListVolumeRecoveryPointsCommand = serializeAws_json1_1ListVolumeRecoveryPointsCommand;
async function serializeAws_json1_1ListVolumesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.ListVolumes";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListVolumesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListVolumesCommand = serializeAws_json1_1ListVolumesCommand;
async function serializeAws_json1_1NotifyWhenUploadedCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.NotifyWhenUploaded";
    let body;
    body = JSON.stringify(serializeAws_json1_1NotifyWhenUploadedInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1NotifyWhenUploadedCommand = serializeAws_json1_1NotifyWhenUploadedCommand;
async function serializeAws_json1_1RefreshCacheCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.RefreshCache";
    let body;
    body = JSON.stringify(serializeAws_json1_1RefreshCacheInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RefreshCacheCommand = serializeAws_json1_1RefreshCacheCommand;
async function serializeAws_json1_1RemoveTagsFromResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.RemoveTagsFromResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1RemoveTagsFromResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RemoveTagsFromResourceCommand = serializeAws_json1_1RemoveTagsFromResourceCommand;
async function serializeAws_json1_1ResetCacheCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.ResetCache";
    let body;
    body = JSON.stringify(serializeAws_json1_1ResetCacheInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ResetCacheCommand = serializeAws_json1_1ResetCacheCommand;
async function serializeAws_json1_1RetrieveTapeArchiveCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.RetrieveTapeArchive";
    let body;
    body = JSON.stringify(serializeAws_json1_1RetrieveTapeArchiveInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RetrieveTapeArchiveCommand = serializeAws_json1_1RetrieveTapeArchiveCommand;
async function serializeAws_json1_1RetrieveTapeRecoveryPointCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.RetrieveTapeRecoveryPoint";
    let body;
    body = JSON.stringify(serializeAws_json1_1RetrieveTapeRecoveryPointInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RetrieveTapeRecoveryPointCommand = serializeAws_json1_1RetrieveTapeRecoveryPointCommand;
async function serializeAws_json1_1SetLocalConsolePasswordCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.SetLocalConsolePassword";
    let body;
    body = JSON.stringify(serializeAws_json1_1SetLocalConsolePasswordInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1SetLocalConsolePasswordCommand = serializeAws_json1_1SetLocalConsolePasswordCommand;
async function serializeAws_json1_1SetSMBGuestPasswordCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.SetSMBGuestPassword";
    let body;
    body = JSON.stringify(serializeAws_json1_1SetSMBGuestPasswordInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1SetSMBGuestPasswordCommand = serializeAws_json1_1SetSMBGuestPasswordCommand;
async function serializeAws_json1_1ShutdownGatewayCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.ShutdownGateway";
    let body;
    body = JSON.stringify(serializeAws_json1_1ShutdownGatewayInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ShutdownGatewayCommand = serializeAws_json1_1ShutdownGatewayCommand;
async function serializeAws_json1_1StartAvailabilityMonitorTestCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "StorageGateway_20130630.StartAvailabilityMonitorTest";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartAvailabilityMonitorTestInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartAvailabilityMonitorTestCommand = serializeAws_json1_1StartAvailabilityMonitorTestCommand;
async function serializeAws_json1_1StartGatewayCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.StartGateway";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartGatewayInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartGatewayCommand = serializeAws_json1_1StartGatewayCommand;
async function serializeAws_json1_1UpdateBandwidthRateLimitCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.UpdateBandwidthRateLimit";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateBandwidthRateLimitInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateBandwidthRateLimitCommand = serializeAws_json1_1UpdateBandwidthRateLimitCommand;
async function serializeAws_json1_1UpdateChapCredentialsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.UpdateChapCredentials";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateChapCredentialsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateChapCredentialsCommand = serializeAws_json1_1UpdateChapCredentialsCommand;
async function serializeAws_json1_1UpdateGatewayInformationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.UpdateGatewayInformation";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateGatewayInformationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateGatewayInformationCommand = serializeAws_json1_1UpdateGatewayInformationCommand;
async function serializeAws_json1_1UpdateGatewaySoftwareNowCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.UpdateGatewaySoftwareNow";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateGatewaySoftwareNowInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateGatewaySoftwareNowCommand = serializeAws_json1_1UpdateGatewaySoftwareNowCommand;
async function serializeAws_json1_1UpdateMaintenanceStartTimeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "StorageGateway_20130630.UpdateMaintenanceStartTime";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateMaintenanceStartTimeInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateMaintenanceStartTimeCommand = serializeAws_json1_1UpdateMaintenanceStartTimeCommand;
async function serializeAws_json1_1UpdateNFSFileShareCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.UpdateNFSFileShare";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateNFSFileShareInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateNFSFileShareCommand = serializeAws_json1_1UpdateNFSFileShareCommand;
async function serializeAws_json1_1UpdateSMBFileShareCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.UpdateSMBFileShare";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateSMBFileShareInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateSMBFileShareCommand = serializeAws_json1_1UpdateSMBFileShareCommand;
async function serializeAws_json1_1UpdateSMBSecurityStrategyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.UpdateSMBSecurityStrategy";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateSMBSecurityStrategyInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateSMBSecurityStrategyCommand = serializeAws_json1_1UpdateSMBSecurityStrategyCommand;
async function serializeAws_json1_1UpdateSnapshotScheduleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.UpdateSnapshotSchedule";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateSnapshotScheduleInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateSnapshotScheduleCommand = serializeAws_json1_1UpdateSnapshotScheduleCommand;
async function serializeAws_json1_1UpdateVTLDeviceTypeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "StorageGateway_20130630.UpdateVTLDeviceType";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateVTLDeviceTypeInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateVTLDeviceTypeCommand = serializeAws_json1_1UpdateVTLDeviceTypeCommand;
async function deserializeAws_json1_1ActivateGatewayCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ActivateGatewayCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ActivateGatewayOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ActivateGatewayOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ActivateGatewayCommand = deserializeAws_json1_1ActivateGatewayCommand;
async function deserializeAws_json1_1ActivateGatewayCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1AddCacheCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AddCacheCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AddCacheOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AddCacheOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AddCacheCommand = deserializeAws_json1_1AddCacheCommand;
async function deserializeAws_json1_1AddCacheCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1AddTagsToResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AddTagsToResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AddTagsToResourceOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AddTagsToResourceOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AddTagsToResourceCommand = deserializeAws_json1_1AddTagsToResourceCommand;
async function deserializeAws_json1_1AddTagsToResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1AddUploadBufferCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AddUploadBufferCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AddUploadBufferOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AddUploadBufferOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AddUploadBufferCommand = deserializeAws_json1_1AddUploadBufferCommand;
async function deserializeAws_json1_1AddUploadBufferCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1AddWorkingStorageCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AddWorkingStorageCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AddWorkingStorageOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AddWorkingStorageOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AddWorkingStorageCommand = deserializeAws_json1_1AddWorkingStorageCommand;
async function deserializeAws_json1_1AddWorkingStorageCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1AssignTapePoolCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AssignTapePoolCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssignTapePoolOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AssignTapePoolOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AssignTapePoolCommand = deserializeAws_json1_1AssignTapePoolCommand;
async function deserializeAws_json1_1AssignTapePoolCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1AttachVolumeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AttachVolumeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AttachVolumeOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AttachVolumeOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AttachVolumeCommand = deserializeAws_json1_1AttachVolumeCommand;
async function deserializeAws_json1_1AttachVolumeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CancelArchivalCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CancelArchivalCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CancelArchivalOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CancelArchivalOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CancelArchivalCommand = deserializeAws_json1_1CancelArchivalCommand;
async function deserializeAws_json1_1CancelArchivalCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CancelRetrievalCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CancelRetrievalCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CancelRetrievalOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CancelRetrievalOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CancelRetrievalCommand = deserializeAws_json1_1CancelRetrievalCommand;
async function deserializeAws_json1_1CancelRetrievalCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateCachediSCSIVolumeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateCachediSCSIVolumeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateCachediSCSIVolumeOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateCachediSCSIVolumeOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateCachediSCSIVolumeCommand = deserializeAws_json1_1CreateCachediSCSIVolumeCommand;
async function deserializeAws_json1_1CreateCachediSCSIVolumeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateNFSFileShareCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateNFSFileShareCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateNFSFileShareOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateNFSFileShareOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateNFSFileShareCommand = deserializeAws_json1_1CreateNFSFileShareCommand;
async function deserializeAws_json1_1CreateNFSFileShareCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateSMBFileShareCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateSMBFileShareCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateSMBFileShareOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateSMBFileShareOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateSMBFileShareCommand = deserializeAws_json1_1CreateSMBFileShareCommand;
async function deserializeAws_json1_1CreateSMBFileShareCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateSnapshotCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateSnapshotOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateSnapshotOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateSnapshotCommand = deserializeAws_json1_1CreateSnapshotCommand;
async function deserializeAws_json1_1CreateSnapshotCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableError":
        case "com.amazonaws.awsappliancecontrolplaneapi#ServiceUnavailableError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateSnapshotFromVolumeRecoveryPointOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointCommand = deserializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointCommand;
async function deserializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableError":
        case "com.amazonaws.awsappliancecontrolplaneapi#ServiceUnavailableError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateStorediSCSIVolumeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateStorediSCSIVolumeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateStorediSCSIVolumeOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateStorediSCSIVolumeOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateStorediSCSIVolumeCommand = deserializeAws_json1_1CreateStorediSCSIVolumeCommand;
async function deserializeAws_json1_1CreateStorediSCSIVolumeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateTapeWithBarcodeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateTapeWithBarcodeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateTapeWithBarcodeOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateTapeWithBarcodeOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateTapeWithBarcodeCommand = deserializeAws_json1_1CreateTapeWithBarcodeCommand;
async function deserializeAws_json1_1CreateTapeWithBarcodeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateTapesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateTapesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateTapesOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateTapesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateTapesCommand = deserializeAws_json1_1CreateTapesCommand;
async function deserializeAws_json1_1CreateTapesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteBandwidthRateLimitCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteBandwidthRateLimitCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteBandwidthRateLimitOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteBandwidthRateLimitOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteBandwidthRateLimitCommand = deserializeAws_json1_1DeleteBandwidthRateLimitCommand;
async function deserializeAws_json1_1DeleteBandwidthRateLimitCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteChapCredentialsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteChapCredentialsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteChapCredentialsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteChapCredentialsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteChapCredentialsCommand = deserializeAws_json1_1DeleteChapCredentialsCommand;
async function deserializeAws_json1_1DeleteChapCredentialsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteFileShareCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteFileShareCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteFileShareOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteFileShareOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteFileShareCommand = deserializeAws_json1_1DeleteFileShareCommand;
async function deserializeAws_json1_1DeleteFileShareCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteGatewayCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteGatewayCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteGatewayOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteGatewayOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteGatewayCommand = deserializeAws_json1_1DeleteGatewayCommand;
async function deserializeAws_json1_1DeleteGatewayCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteSnapshotScheduleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteSnapshotScheduleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteSnapshotScheduleOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteSnapshotScheduleOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteSnapshotScheduleCommand = deserializeAws_json1_1DeleteSnapshotScheduleCommand;
async function deserializeAws_json1_1DeleteSnapshotScheduleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteTapeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteTapeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteTapeOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteTapeOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteTapeCommand = deserializeAws_json1_1DeleteTapeCommand;
async function deserializeAws_json1_1DeleteTapeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteTapeArchiveCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteTapeArchiveCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteTapeArchiveOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteTapeArchiveOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteTapeArchiveCommand = deserializeAws_json1_1DeleteTapeArchiveCommand;
async function deserializeAws_json1_1DeleteTapeArchiveCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteVolumeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteVolumeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteVolumeOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteVolumeOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteVolumeCommand = deserializeAws_json1_1DeleteVolumeCommand;
async function deserializeAws_json1_1DeleteVolumeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeAvailabilityMonitorTestCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeAvailabilityMonitorTestCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAvailabilityMonitorTestOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeAvailabilityMonitorTestOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeAvailabilityMonitorTestCommand = deserializeAws_json1_1DescribeAvailabilityMonitorTestCommand;
async function deserializeAws_json1_1DescribeAvailabilityMonitorTestCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeBandwidthRateLimitCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeBandwidthRateLimitCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeBandwidthRateLimitOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeBandwidthRateLimitOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeBandwidthRateLimitCommand = deserializeAws_json1_1DescribeBandwidthRateLimitCommand;
async function deserializeAws_json1_1DescribeBandwidthRateLimitCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeCacheCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeCacheCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeCacheOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeCacheOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeCacheCommand = deserializeAws_json1_1DescribeCacheCommand;
async function deserializeAws_json1_1DescribeCacheCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeCachediSCSIVolumesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeCachediSCSIVolumesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeCachediSCSIVolumesOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeCachediSCSIVolumesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeCachediSCSIVolumesCommand = deserializeAws_json1_1DescribeCachediSCSIVolumesCommand;
async function deserializeAws_json1_1DescribeCachediSCSIVolumesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeChapCredentialsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeChapCredentialsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeChapCredentialsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeChapCredentialsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeChapCredentialsCommand = deserializeAws_json1_1DescribeChapCredentialsCommand;
async function deserializeAws_json1_1DescribeChapCredentialsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeGatewayInformationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeGatewayInformationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeGatewayInformationOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeGatewayInformationOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeGatewayInformationCommand = deserializeAws_json1_1DescribeGatewayInformationCommand;
async function deserializeAws_json1_1DescribeGatewayInformationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeMaintenanceStartTimeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeMaintenanceStartTimeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeMaintenanceStartTimeOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeMaintenanceStartTimeOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeMaintenanceStartTimeCommand = deserializeAws_json1_1DescribeMaintenanceStartTimeCommand;
async function deserializeAws_json1_1DescribeMaintenanceStartTimeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeNFSFileSharesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeNFSFileSharesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeNFSFileSharesOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeNFSFileSharesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeNFSFileSharesCommand = deserializeAws_json1_1DescribeNFSFileSharesCommand;
async function deserializeAws_json1_1DescribeNFSFileSharesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeSMBFileSharesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeSMBFileSharesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeSMBFileSharesOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeSMBFileSharesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeSMBFileSharesCommand = deserializeAws_json1_1DescribeSMBFileSharesCommand;
async function deserializeAws_json1_1DescribeSMBFileSharesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeSMBSettingsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeSMBSettingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeSMBSettingsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeSMBSettingsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeSMBSettingsCommand = deserializeAws_json1_1DescribeSMBSettingsCommand;
async function deserializeAws_json1_1DescribeSMBSettingsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeSnapshotScheduleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeSnapshotScheduleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeSnapshotScheduleOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeSnapshotScheduleOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeSnapshotScheduleCommand = deserializeAws_json1_1DescribeSnapshotScheduleCommand;
async function deserializeAws_json1_1DescribeSnapshotScheduleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeStorediSCSIVolumesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeStorediSCSIVolumesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeStorediSCSIVolumesOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeStorediSCSIVolumesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeStorediSCSIVolumesCommand = deserializeAws_json1_1DescribeStorediSCSIVolumesCommand;
async function deserializeAws_json1_1DescribeStorediSCSIVolumesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeTapeArchivesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeTapeArchivesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeTapeArchivesOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeTapeArchivesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeTapeArchivesCommand = deserializeAws_json1_1DescribeTapeArchivesCommand;
async function deserializeAws_json1_1DescribeTapeArchivesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeTapeRecoveryPointsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeTapeRecoveryPointsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeTapeRecoveryPointsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeTapeRecoveryPointsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeTapeRecoveryPointsCommand = deserializeAws_json1_1DescribeTapeRecoveryPointsCommand;
async function deserializeAws_json1_1DescribeTapeRecoveryPointsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeTapesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeTapesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeTapesOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeTapesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeTapesCommand = deserializeAws_json1_1DescribeTapesCommand;
async function deserializeAws_json1_1DescribeTapesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeUploadBufferCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeUploadBufferCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeUploadBufferOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeUploadBufferOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeUploadBufferCommand = deserializeAws_json1_1DescribeUploadBufferCommand;
async function deserializeAws_json1_1DescribeUploadBufferCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeVTLDevicesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeVTLDevicesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeVTLDevicesOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeVTLDevicesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeVTLDevicesCommand = deserializeAws_json1_1DescribeVTLDevicesCommand;
async function deserializeAws_json1_1DescribeVTLDevicesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeWorkingStorageCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeWorkingStorageCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeWorkingStorageOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeWorkingStorageOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeWorkingStorageCommand = deserializeAws_json1_1DescribeWorkingStorageCommand;
async function deserializeAws_json1_1DescribeWorkingStorageCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DetachVolumeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DetachVolumeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DetachVolumeOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DetachVolumeOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DetachVolumeCommand = deserializeAws_json1_1DetachVolumeCommand;
async function deserializeAws_json1_1DetachVolumeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DisableGatewayCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DisableGatewayCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisableGatewayOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DisableGatewayOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DisableGatewayCommand = deserializeAws_json1_1DisableGatewayCommand;
async function deserializeAws_json1_1DisableGatewayCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1JoinDomainCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1JoinDomainCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1JoinDomainOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "JoinDomainOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1JoinDomainCommand = deserializeAws_json1_1JoinDomainCommand;
async function deserializeAws_json1_1JoinDomainCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListFileSharesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListFileSharesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListFileSharesOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListFileSharesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListFileSharesCommand = deserializeAws_json1_1ListFileSharesCommand;
async function deserializeAws_json1_1ListFileSharesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListGatewaysCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListGatewaysCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListGatewaysOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListGatewaysOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListGatewaysCommand = deserializeAws_json1_1ListGatewaysCommand;
async function deserializeAws_json1_1ListGatewaysCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListLocalDisksCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListLocalDisksCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListLocalDisksOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListLocalDisksOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListLocalDisksCommand = deserializeAws_json1_1ListLocalDisksCommand;
async function deserializeAws_json1_1ListLocalDisksCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListTagsForResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTagsForResourceOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListTagsForResourceOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListTagsForResourceCommand = deserializeAws_json1_1ListTagsForResourceCommand;
async function deserializeAws_json1_1ListTagsForResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListTapesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListTapesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTapesOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListTapesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListTapesCommand = deserializeAws_json1_1ListTapesCommand;
async function deserializeAws_json1_1ListTapesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListVolumeInitiatorsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListVolumeInitiatorsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListVolumeInitiatorsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListVolumeInitiatorsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListVolumeInitiatorsCommand = deserializeAws_json1_1ListVolumeInitiatorsCommand;
async function deserializeAws_json1_1ListVolumeInitiatorsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListVolumeRecoveryPointsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListVolumeRecoveryPointsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListVolumeRecoveryPointsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListVolumeRecoveryPointsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListVolumeRecoveryPointsCommand = deserializeAws_json1_1ListVolumeRecoveryPointsCommand;
async function deserializeAws_json1_1ListVolumeRecoveryPointsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListVolumesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListVolumesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListVolumesOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListVolumesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListVolumesCommand = deserializeAws_json1_1ListVolumesCommand;
async function deserializeAws_json1_1ListVolumesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1NotifyWhenUploadedCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1NotifyWhenUploadedCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1NotifyWhenUploadedOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "NotifyWhenUploadedOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1NotifyWhenUploadedCommand = deserializeAws_json1_1NotifyWhenUploadedCommand;
async function deserializeAws_json1_1NotifyWhenUploadedCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1RefreshCacheCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RefreshCacheCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RefreshCacheOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RefreshCacheOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RefreshCacheCommand = deserializeAws_json1_1RefreshCacheCommand;
async function deserializeAws_json1_1RefreshCacheCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1RemoveTagsFromResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RemoveTagsFromResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RemoveTagsFromResourceOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RemoveTagsFromResourceOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RemoveTagsFromResourceCommand = deserializeAws_json1_1RemoveTagsFromResourceCommand;
async function deserializeAws_json1_1RemoveTagsFromResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ResetCacheCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ResetCacheCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ResetCacheOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ResetCacheOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ResetCacheCommand = deserializeAws_json1_1ResetCacheCommand;
async function deserializeAws_json1_1ResetCacheCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1RetrieveTapeArchiveCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RetrieveTapeArchiveCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RetrieveTapeArchiveOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RetrieveTapeArchiveOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RetrieveTapeArchiveCommand = deserializeAws_json1_1RetrieveTapeArchiveCommand;
async function deserializeAws_json1_1RetrieveTapeArchiveCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1RetrieveTapeRecoveryPointCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RetrieveTapeRecoveryPointCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RetrieveTapeRecoveryPointOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RetrieveTapeRecoveryPointOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RetrieveTapeRecoveryPointCommand = deserializeAws_json1_1RetrieveTapeRecoveryPointCommand;
async function deserializeAws_json1_1RetrieveTapeRecoveryPointCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1SetLocalConsolePasswordCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1SetLocalConsolePasswordCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SetLocalConsolePasswordOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SetLocalConsolePasswordOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1SetLocalConsolePasswordCommand = deserializeAws_json1_1SetLocalConsolePasswordCommand;
async function deserializeAws_json1_1SetLocalConsolePasswordCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1SetSMBGuestPasswordCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1SetSMBGuestPasswordCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SetSMBGuestPasswordOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SetSMBGuestPasswordOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1SetSMBGuestPasswordCommand = deserializeAws_json1_1SetSMBGuestPasswordCommand;
async function deserializeAws_json1_1SetSMBGuestPasswordCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ShutdownGatewayCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ShutdownGatewayCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ShutdownGatewayOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ShutdownGatewayOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ShutdownGatewayCommand = deserializeAws_json1_1ShutdownGatewayCommand;
async function deserializeAws_json1_1ShutdownGatewayCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1StartAvailabilityMonitorTestCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartAvailabilityMonitorTestCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartAvailabilityMonitorTestOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartAvailabilityMonitorTestOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartAvailabilityMonitorTestCommand = deserializeAws_json1_1StartAvailabilityMonitorTestCommand;
async function deserializeAws_json1_1StartAvailabilityMonitorTestCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1StartGatewayCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartGatewayCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartGatewayOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartGatewayOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartGatewayCommand = deserializeAws_json1_1StartGatewayCommand;
async function deserializeAws_json1_1StartGatewayCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateBandwidthRateLimitCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateBandwidthRateLimitCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateBandwidthRateLimitOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateBandwidthRateLimitOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateBandwidthRateLimitCommand = deserializeAws_json1_1UpdateBandwidthRateLimitCommand;
async function deserializeAws_json1_1UpdateBandwidthRateLimitCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateChapCredentialsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateChapCredentialsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateChapCredentialsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateChapCredentialsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateChapCredentialsCommand = deserializeAws_json1_1UpdateChapCredentialsCommand;
async function deserializeAws_json1_1UpdateChapCredentialsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateGatewayInformationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateGatewayInformationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateGatewayInformationOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateGatewayInformationOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateGatewayInformationCommand = deserializeAws_json1_1UpdateGatewayInformationCommand;
async function deserializeAws_json1_1UpdateGatewayInformationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateGatewaySoftwareNowCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateGatewaySoftwareNowCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateGatewaySoftwareNowOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateGatewaySoftwareNowOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateGatewaySoftwareNowCommand = deserializeAws_json1_1UpdateGatewaySoftwareNowCommand;
async function deserializeAws_json1_1UpdateGatewaySoftwareNowCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateMaintenanceStartTimeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateMaintenanceStartTimeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateMaintenanceStartTimeOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateMaintenanceStartTimeOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateMaintenanceStartTimeCommand = deserializeAws_json1_1UpdateMaintenanceStartTimeCommand;
async function deserializeAws_json1_1UpdateMaintenanceStartTimeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateNFSFileShareCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateNFSFileShareCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateNFSFileShareOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateNFSFileShareOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateNFSFileShareCommand = deserializeAws_json1_1UpdateNFSFileShareCommand;
async function deserializeAws_json1_1UpdateNFSFileShareCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateSMBFileShareCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateSMBFileShareCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateSMBFileShareOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateSMBFileShareOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateSMBFileShareCommand = deserializeAws_json1_1UpdateSMBFileShareCommand;
async function deserializeAws_json1_1UpdateSMBFileShareCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateSMBSecurityStrategyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateSMBSecurityStrategyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateSMBSecurityStrategyOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateSMBSecurityStrategyOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateSMBSecurityStrategyCommand = deserializeAws_json1_1UpdateSMBSecurityStrategyCommand;
async function deserializeAws_json1_1UpdateSMBSecurityStrategyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateSnapshotScheduleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateSnapshotScheduleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateSnapshotScheduleOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateSnapshotScheduleOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateSnapshotScheduleCommand = deserializeAws_json1_1UpdateSnapshotScheduleCommand;
async function deserializeAws_json1_1UpdateSnapshotScheduleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateVTLDeviceTypeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateVTLDeviceTypeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateVTLDeviceTypeOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateVTLDeviceTypeOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateVTLDeviceTypeCommand = deserializeAws_json1_1UpdateVTLDeviceTypeCommand;
async function deserializeAws_json1_1UpdateVTLDeviceTypeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.awsappliancecontrolplaneapi#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGatewayRequestException":
        case "com.amazonaws.awsappliancecontrolplaneapi#InvalidGatewayRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGatewayRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
const deserializeAws_json1_1InternalServerErrorResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalServerError(body, context);
    const contents = Object.assign({ name: "InternalServerError", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidGatewayRequestExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidGatewayRequestException(body, context);
    const contents = Object.assign({ name: "InvalidGatewayRequestException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ServiceUnavailableErrorResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ServiceUnavailableError(body, context);
    const contents = Object.assign({ name: "ServiceUnavailableError", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1AddWorkingStorageInput = (input, context) => {
    const bodyParams = {};
    if (input.DiskIds !== undefined) {
        bodyParams["DiskIds"] = serializeAws_json1_1DiskIds(input.DiskIds, context);
    }
    if (input.GatewayARN !== undefined) {
        bodyParams["GatewayARN"] = input.GatewayARN;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateSnapshotInput = (input, context) => {
    const bodyParams = {};
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
const serializeAws_json1_1CreateStorediSCSIVolumeInput = (input, context) => {
    const bodyParams = {};
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
const serializeAws_json1_1DeleteChapCredentialsInput = (input, context) => {
    const bodyParams = {};
    if (input.InitiatorName !== undefined) {
        bodyParams["InitiatorName"] = input.InitiatorName;
    }
    if (input.TargetARN !== undefined) {
        bodyParams["TargetARN"] = input.TargetARN;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteGatewayInput = (input, context) => {
    const bodyParams = {};
    if (input.GatewayARN !== undefined) {
        bodyParams["GatewayARN"] = input.GatewayARN;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteVolumeInput = (input, context) => {
    const bodyParams = {};
    if (input.VolumeARN !== undefined) {
        bodyParams["VolumeARN"] = input.VolumeARN;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeBandwidthRateLimitInput = (input, context) => {
    const bodyParams = {};
    if (input.GatewayARN !== undefined) {
        bodyParams["GatewayARN"] = input.GatewayARN;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeChapCredentialsInput = (input, context) => {
    const bodyParams = {};
    if (input.TargetARN !== undefined) {
        bodyParams["TargetARN"] = input.TargetARN;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeGatewayInformationInput = (input, context) => {
    const bodyParams = {};
    if (input.GatewayARN !== undefined) {
        bodyParams["GatewayARN"] = input.GatewayARN;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeMaintenanceStartTimeInput = (input, context) => {
    const bodyParams = {};
    if (input.GatewayARN !== undefined) {
        bodyParams["GatewayARN"] = input.GatewayARN;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeSnapshotScheduleInput = (input, context) => {
    const bodyParams = {};
    if (input.VolumeARN !== undefined) {
        bodyParams["VolumeARN"] = input.VolumeARN;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeStorediSCSIVolumesInput = (input, context) => {
    const bodyParams = {};
    if (input.VolumeARNs !== undefined) {
        bodyParams["VolumeARNs"] = serializeAws_json1_1VolumeARNs(input.VolumeARNs, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeWorkingStorageInput = (input, context) => {
    const bodyParams = {};
    if (input.GatewayARN !== undefined) {
        bodyParams["GatewayARN"] = input.GatewayARN;
    }
    return bodyParams;
};
const serializeAws_json1_1DiskIds = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ListGatewaysInput = (input, context) => {
    const bodyParams = {};
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.Marker !== undefined) {
        bodyParams["Marker"] = input.Marker;
    }
    return bodyParams;
};
const serializeAws_json1_1ListLocalDisksInput = (input, context) => {
    const bodyParams = {};
    if (input.GatewayARN !== undefined) {
        bodyParams["GatewayARN"] = input.GatewayARN;
    }
    return bodyParams;
};
const serializeAws_json1_1ListVolumesInput = (input, context) => {
    const bodyParams = {};
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
const serializeAws_json1_1ShutdownGatewayInput = (input, context) => {
    const bodyParams = {};
    if (input.GatewayARN !== undefined) {
        bodyParams["GatewayARN"] = input.GatewayARN;
    }
    return bodyParams;
};
const serializeAws_json1_1StartGatewayInput = (input, context) => {
    const bodyParams = {};
    if (input.GatewayARN !== undefined) {
        bodyParams["GatewayARN"] = input.GatewayARN;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateBandwidthRateLimitInput = (input, context) => {
    const bodyParams = {};
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
const serializeAws_json1_1UpdateChapCredentialsInput = (input, context) => {
    const bodyParams = {};
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
const serializeAws_json1_1UpdateGatewaySoftwareNowInput = (input, context) => {
    const bodyParams = {};
    if (input.GatewayARN !== undefined) {
        bodyParams["GatewayARN"] = input.GatewayARN;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateMaintenanceStartTimeInput = (input, context) => {
    const bodyParams = {};
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
const serializeAws_json1_1UpdateSnapshotScheduleInput = (input, context) => {
    const bodyParams = {};
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
const serializeAws_json1_1VolumeARNs = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1AddCacheInput = (input, context) => {
    const bodyParams = {};
    if (input.DiskIds !== undefined) {
        bodyParams["DiskIds"] = serializeAws_json1_1DiskIds(input.DiskIds, context);
    }
    if (input.GatewayARN !== undefined) {
        bodyParams["GatewayARN"] = input.GatewayARN;
    }
    return bodyParams;
};
const serializeAws_json1_1AddUploadBufferInput = (input, context) => {
    const bodyParams = {};
    if (input.DiskIds !== undefined) {
        bodyParams["DiskIds"] = serializeAws_json1_1DiskIds(input.DiskIds, context);
    }
    if (input.GatewayARN !== undefined) {
        bodyParams["GatewayARN"] = input.GatewayARN;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateCachediSCSIVolumeInput = (input, context) => {
    const bodyParams = {};
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
const serializeAws_json1_1DeleteSnapshotScheduleInput = (input, context) => {
    const bodyParams = {};
    if (input.VolumeARN !== undefined) {
        bodyParams["VolumeARN"] = input.VolumeARN;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeCacheInput = (input, context) => {
    const bodyParams = {};
    if (input.GatewayARN !== undefined) {
        bodyParams["GatewayARN"] = input.GatewayARN;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeCachediSCSIVolumesInput = (input, context) => {
    const bodyParams = {};
    if (input.VolumeARNs !== undefined) {
        bodyParams["VolumeARNs"] = serializeAws_json1_1VolumeARNs(input.VolumeARNs, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeUploadBufferInput = (input, context) => {
    const bodyParams = {};
    if (input.GatewayARN !== undefined) {
        bodyParams["GatewayARN"] = input.GatewayARN;
    }
    return bodyParams;
};
const serializeAws_json1_1ListVolumeRecoveryPointsInput = (input, context) => {
    const bodyParams = {};
    if (input.GatewayARN !== undefined) {
        bodyParams["GatewayARN"] = input.GatewayARN;
    }
    return bodyParams;
};
const serializeAws_json1_1ActivateGatewayInput = (input, context) => {
    const bodyParams = {};
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
const serializeAws_json1_1AddTagsToResourceInput = (input, context) => {
    const bodyParams = {};
    if (input.ResourceARN !== undefined) {
        bodyParams["ResourceARN"] = input.ResourceARN;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1Tags(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1AssignTapePoolInput = (input, context) => {
    const bodyParams = {};
    if (input.PoolId !== undefined) {
        bodyParams["PoolId"] = input.PoolId;
    }
    if (input.TapeARN !== undefined) {
        bodyParams["TapeARN"] = input.TapeARN;
    }
    return bodyParams;
};
const serializeAws_json1_1AttachVolumeInput = (input, context) => {
    const bodyParams = {};
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
const serializeAws_json1_1CancelArchivalInput = (input, context) => {
    const bodyParams = {};
    if (input.GatewayARN !== undefined) {
        bodyParams["GatewayARN"] = input.GatewayARN;
    }
    if (input.TapeARN !== undefined) {
        bodyParams["TapeARN"] = input.TapeARN;
    }
    return bodyParams;
};
const serializeAws_json1_1CancelRetrievalInput = (input, context) => {
    const bodyParams = {};
    if (input.GatewayARN !== undefined) {
        bodyParams["GatewayARN"] = input.GatewayARN;
    }
    if (input.TapeARN !== undefined) {
        bodyParams["TapeARN"] = input.TapeARN;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateNFSFileShareInput = (input, context) => {
    const bodyParams = {};
    if (input.ClientList !== undefined) {
        bodyParams["ClientList"] = serializeAws_json1_1FileShareClientList(input.ClientList, context);
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
        bodyParams["NFSFileShareDefaults"] = serializeAws_json1_1NFSFileShareDefaults(input.NFSFileShareDefaults, context);
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
const serializeAws_json1_1CreateSMBFileShareInput = (input, context) => {
    const bodyParams = {};
    if (input.AdminUserList !== undefined) {
        bodyParams["AdminUserList"] = serializeAws_json1_1FileShareUserList(input.AdminUserList, context);
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
        bodyParams["InvalidUserList"] = serializeAws_json1_1FileShareUserList(input.InvalidUserList, context);
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
        bodyParams["ValidUserList"] = serializeAws_json1_1FileShareUserList(input.ValidUserList, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointInput = (input, context) => {
    const bodyParams = {};
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
const serializeAws_json1_1CreateTapeWithBarcodeInput = (input, context) => {
    const bodyParams = {};
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
const serializeAws_json1_1CreateTapesInput = (input, context) => {
    const bodyParams = {};
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
const serializeAws_json1_1DeleteBandwidthRateLimitInput = (input, context) => {
    const bodyParams = {};
    if (input.BandwidthType !== undefined) {
        bodyParams["BandwidthType"] = input.BandwidthType;
    }
    if (input.GatewayARN !== undefined) {
        bodyParams["GatewayARN"] = input.GatewayARN;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteFileShareInput = (input, context) => {
    const bodyParams = {};
    if (input.FileShareARN !== undefined) {
        bodyParams["FileShareARN"] = input.FileShareARN;
    }
    if (input.ForceDelete !== undefined) {
        bodyParams["ForceDelete"] = input.ForceDelete;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteTapeArchiveInput = (input, context) => {
    const bodyParams = {};
    if (input.TapeARN !== undefined) {
        bodyParams["TapeARN"] = input.TapeARN;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteTapeInput = (input, context) => {
    const bodyParams = {};
    if (input.GatewayARN !== undefined) {
        bodyParams["GatewayARN"] = input.GatewayARN;
    }
    if (input.TapeARN !== undefined) {
        bodyParams["TapeARN"] = input.TapeARN;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeAvailabilityMonitorTestInput = (input, context) => {
    const bodyParams = {};
    if (input.GatewayARN !== undefined) {
        bodyParams["GatewayARN"] = input.GatewayARN;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeNFSFileSharesInput = (input, context) => {
    const bodyParams = {};
    if (input.FileShareARNList !== undefined) {
        bodyParams["FileShareARNList"] = serializeAws_json1_1FileShareARNList(input.FileShareARNList, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeSMBFileSharesInput = (input, context) => {
    const bodyParams = {};
    if (input.FileShareARNList !== undefined) {
        bodyParams["FileShareARNList"] = serializeAws_json1_1FileShareARNList(input.FileShareARNList, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeSMBSettingsInput = (input, context) => {
    const bodyParams = {};
    if (input.GatewayARN !== undefined) {
        bodyParams["GatewayARN"] = input.GatewayARN;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeTapeArchivesInput = (input, context) => {
    const bodyParams = {};
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.Marker !== undefined) {
        bodyParams["Marker"] = input.Marker;
    }
    if (input.TapeARNs !== undefined) {
        bodyParams["TapeARNs"] = serializeAws_json1_1TapeARNs(input.TapeARNs, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeTapeRecoveryPointsInput = (input, context) => {
    const bodyParams = {};
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
const serializeAws_json1_1DescribeTapesInput = (input, context) => {
    const bodyParams = {};
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
        bodyParams["TapeARNs"] = serializeAws_json1_1TapeARNs(input.TapeARNs, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeVTLDevicesInput = (input, context) => {
    const bodyParams = {};
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
        bodyParams["VTLDeviceARNs"] = serializeAws_json1_1VTLDeviceARNs(input.VTLDeviceARNs, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DetachVolumeInput = (input, context) => {
    const bodyParams = {};
    if (input.ForceDetach !== undefined) {
        bodyParams["ForceDetach"] = input.ForceDetach;
    }
    if (input.VolumeARN !== undefined) {
        bodyParams["VolumeARN"] = input.VolumeARN;
    }
    return bodyParams;
};
const serializeAws_json1_1DisableGatewayInput = (input, context) => {
    const bodyParams = {};
    if (input.GatewayARN !== undefined) {
        bodyParams["GatewayARN"] = input.GatewayARN;
    }
    return bodyParams;
};
const serializeAws_json1_1FileShareARNList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1FileShareClientList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1FileShareUserList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1FolderList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1Hosts = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1JoinDomainInput = (input, context) => {
    const bodyParams = {};
    if (input.DomainControllers !== undefined) {
        bodyParams["DomainControllers"] = serializeAws_json1_1Hosts(input.DomainControllers, context);
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
const serializeAws_json1_1ListFileSharesInput = (input, context) => {
    const bodyParams = {};
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
const serializeAws_json1_1ListTagsForResourceInput = (input, context) => {
    const bodyParams = {};
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
const serializeAws_json1_1ListTapesInput = (input, context) => {
    const bodyParams = {};
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.Marker !== undefined) {
        bodyParams["Marker"] = input.Marker;
    }
    if (input.TapeARNs !== undefined) {
        bodyParams["TapeARNs"] = serializeAws_json1_1TapeARNs(input.TapeARNs, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ListVolumeInitiatorsInput = (input, context) => {
    const bodyParams = {};
    if (input.VolumeARN !== undefined) {
        bodyParams["VolumeARN"] = input.VolumeARN;
    }
    return bodyParams;
};
const serializeAws_json1_1NFSFileShareDefaults = (input, context) => {
    const bodyParams = {};
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
const serializeAws_json1_1NotifyWhenUploadedInput = (input, context) => {
    const bodyParams = {};
    if (input.FileShareARN !== undefined) {
        bodyParams["FileShareARN"] = input.FileShareARN;
    }
    return bodyParams;
};
const serializeAws_json1_1RefreshCacheInput = (input, context) => {
    const bodyParams = {};
    if (input.FileShareARN !== undefined) {
        bodyParams["FileShareARN"] = input.FileShareARN;
    }
    if (input.FolderList !== undefined) {
        bodyParams["FolderList"] = serializeAws_json1_1FolderList(input.FolderList, context);
    }
    if (input.Recursive !== undefined) {
        bodyParams["Recursive"] = input.Recursive;
    }
    return bodyParams;
};
const serializeAws_json1_1RemoveTagsFromResourceInput = (input, context) => {
    const bodyParams = {};
    if (input.ResourceARN !== undefined) {
        bodyParams["ResourceARN"] = input.ResourceARN;
    }
    if (input.TagKeys !== undefined) {
        bodyParams["TagKeys"] = serializeAws_json1_1TagKeys(input.TagKeys, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ResetCacheInput = (input, context) => {
    const bodyParams = {};
    if (input.GatewayARN !== undefined) {
        bodyParams["GatewayARN"] = input.GatewayARN;
    }
    return bodyParams;
};
const serializeAws_json1_1RetrieveTapeArchiveInput = (input, context) => {
    const bodyParams = {};
    if (input.GatewayARN !== undefined) {
        bodyParams["GatewayARN"] = input.GatewayARN;
    }
    if (input.TapeARN !== undefined) {
        bodyParams["TapeARN"] = input.TapeARN;
    }
    return bodyParams;
};
const serializeAws_json1_1RetrieveTapeRecoveryPointInput = (input, context) => {
    const bodyParams = {};
    if (input.GatewayARN !== undefined) {
        bodyParams["GatewayARN"] = input.GatewayARN;
    }
    if (input.TapeARN !== undefined) {
        bodyParams["TapeARN"] = input.TapeARN;
    }
    return bodyParams;
};
const serializeAws_json1_1SetLocalConsolePasswordInput = (input, context) => {
    const bodyParams = {};
    if (input.GatewayARN !== undefined) {
        bodyParams["GatewayARN"] = input.GatewayARN;
    }
    if (input.LocalConsolePassword !== undefined) {
        bodyParams["LocalConsolePassword"] = input.LocalConsolePassword;
    }
    return bodyParams;
};
const serializeAws_json1_1SetSMBGuestPasswordInput = (input, context) => {
    const bodyParams = {};
    if (input.GatewayARN !== undefined) {
        bodyParams["GatewayARN"] = input.GatewayARN;
    }
    if (input.Password !== undefined) {
        bodyParams["Password"] = input.Password;
    }
    return bodyParams;
};
const serializeAws_json1_1StartAvailabilityMonitorTestInput = (input, context) => {
    const bodyParams = {};
    if (input.GatewayARN !== undefined) {
        bodyParams["GatewayARN"] = input.GatewayARN;
    }
    return bodyParams;
};
const serializeAws_json1_1Tag = (input, context) => {
    const bodyParams = {};
    if (input.Key !== undefined) {
        bodyParams["Key"] = input.Key;
    }
    if (input.Value !== undefined) {
        bodyParams["Value"] = input.Value;
    }
    return bodyParams;
};
const serializeAws_json1_1TagKeys = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1Tags = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Tag(entry, context));
    }
    return contents;
};
const serializeAws_json1_1TapeARNs = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1UpdateGatewayInformationInput = (input, context) => {
    const bodyParams = {};
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
const serializeAws_json1_1UpdateNFSFileShareInput = (input, context) => {
    const bodyParams = {};
    if (input.ClientList !== undefined) {
        bodyParams["ClientList"] = serializeAws_json1_1FileShareClientList(input.ClientList, context);
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
        bodyParams["NFSFileShareDefaults"] = serializeAws_json1_1NFSFileShareDefaults(input.NFSFileShareDefaults, context);
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
const serializeAws_json1_1UpdateSMBFileShareInput = (input, context) => {
    const bodyParams = {};
    if (input.AdminUserList !== undefined) {
        bodyParams["AdminUserList"] = serializeAws_json1_1FileShareUserList(input.AdminUserList, context);
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
        bodyParams["InvalidUserList"] = serializeAws_json1_1FileShareUserList(input.InvalidUserList, context);
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
        bodyParams["ValidUserList"] = serializeAws_json1_1FileShareUserList(input.ValidUserList, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateSMBSecurityStrategyInput = (input, context) => {
    const bodyParams = {};
    if (input.GatewayARN !== undefined) {
        bodyParams["GatewayARN"] = input.GatewayARN;
    }
    if (input.SMBSecurityStrategy !== undefined) {
        bodyParams["SMBSecurityStrategy"] = input.SMBSecurityStrategy;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateVTLDeviceTypeInput = (input, context) => {
    const bodyParams = {};
    if (input.DeviceType !== undefined) {
        bodyParams["DeviceType"] = input.DeviceType;
    }
    if (input.VTLDeviceARN !== undefined) {
        bodyParams["VTLDeviceARN"] = input.VTLDeviceARN;
    }
    return bodyParams;
};
const serializeAws_json1_1VTLDeviceARNs = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const deserializeAws_json1_1ActivateGatewayOutput = (output, context) => {
    let contents = {
        __type: "ActivateGatewayOutput",
        GatewayARN: undefined
    };
    if (output.GatewayARN !== undefined && output.GatewayARN !== null) {
        contents.GatewayARN = output.GatewayARN;
    }
    return contents;
};
const deserializeAws_json1_1AddWorkingStorageOutput = (output, context) => {
    let contents = {
        __type: "AddWorkingStorageOutput",
        GatewayARN: undefined
    };
    if (output.GatewayARN !== undefined && output.GatewayARN !== null) {
        contents.GatewayARN = output.GatewayARN;
    }
    return contents;
};
const deserializeAws_json1_1ChapCredentials = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ChapInfo(entry, context));
};
const deserializeAws_json1_1ChapInfo = (output, context) => {
    let contents = {
        __type: "ChapInfo",
        InitiatorName: undefined,
        SecretToAuthenticateInitiator: undefined,
        SecretToAuthenticateTarget: undefined,
        TargetARN: undefined
    };
    if (output.InitiatorName !== undefined && output.InitiatorName !== null) {
        contents.InitiatorName = output.InitiatorName;
    }
    if (output.SecretToAuthenticateInitiator !== undefined &&
        output.SecretToAuthenticateInitiator !== null) {
        contents.SecretToAuthenticateInitiator =
            output.SecretToAuthenticateInitiator;
    }
    if (output.SecretToAuthenticateTarget !== undefined &&
        output.SecretToAuthenticateTarget !== null) {
        contents.SecretToAuthenticateTarget = output.SecretToAuthenticateTarget;
    }
    if (output.TargetARN !== undefined && output.TargetARN !== null) {
        contents.TargetARN = output.TargetARN;
    }
    return contents;
};
const deserializeAws_json1_1CreateSnapshotOutput = (output, context) => {
    let contents = {
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
const deserializeAws_json1_1CreateStorediSCSIVolumeOutput = (output, context) => {
    let contents = {
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
    if (output.VolumeSizeInBytes !== undefined &&
        output.VolumeSizeInBytes !== null) {
        contents.VolumeSizeInBytes = output.VolumeSizeInBytes;
    }
    return contents;
};
const deserializeAws_json1_1DeleteBandwidthRateLimitOutput = (output, context) => {
    let contents = {
        __type: "DeleteBandwidthRateLimitOutput",
        GatewayARN: undefined
    };
    if (output.GatewayARN !== undefined && output.GatewayARN !== null) {
        contents.GatewayARN = output.GatewayARN;
    }
    return contents;
};
const deserializeAws_json1_1DeleteChapCredentialsOutput = (output, context) => {
    let contents = {
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
const deserializeAws_json1_1DeleteGatewayOutput = (output, context) => {
    let contents = {
        __type: "DeleteGatewayOutput",
        GatewayARN: undefined
    };
    if (output.GatewayARN !== undefined && output.GatewayARN !== null) {
        contents.GatewayARN = output.GatewayARN;
    }
    return contents;
};
const deserializeAws_json1_1DeleteVolumeOutput = (output, context) => {
    let contents = {
        __type: "DeleteVolumeOutput",
        VolumeARN: undefined
    };
    if (output.VolumeARN !== undefined && output.VolumeARN !== null) {
        contents.VolumeARN = output.VolumeARN;
    }
    return contents;
};
const deserializeAws_json1_1DescribeBandwidthRateLimitOutput = (output, context) => {
    let contents = {
        __type: "DescribeBandwidthRateLimitOutput",
        AverageDownloadRateLimitInBitsPerSec: undefined,
        AverageUploadRateLimitInBitsPerSec: undefined,
        GatewayARN: undefined
    };
    if (output.AverageDownloadRateLimitInBitsPerSec !== undefined &&
        output.AverageDownloadRateLimitInBitsPerSec !== null) {
        contents.AverageDownloadRateLimitInBitsPerSec =
            output.AverageDownloadRateLimitInBitsPerSec;
    }
    if (output.AverageUploadRateLimitInBitsPerSec !== undefined &&
        output.AverageUploadRateLimitInBitsPerSec !== null) {
        contents.AverageUploadRateLimitInBitsPerSec =
            output.AverageUploadRateLimitInBitsPerSec;
    }
    if (output.GatewayARN !== undefined && output.GatewayARN !== null) {
        contents.GatewayARN = output.GatewayARN;
    }
    return contents;
};
const deserializeAws_json1_1DescribeChapCredentialsOutput = (output, context) => {
    let contents = {
        __type: "DescribeChapCredentialsOutput",
        ChapCredentials: undefined
    };
    if (output.ChapCredentials !== undefined && output.ChapCredentials !== null) {
        contents.ChapCredentials = deserializeAws_json1_1ChapCredentials(output.ChapCredentials, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeWorkingStorageOutput = (output, context) => {
    let contents = {
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
    if (output.WorkingStorageAllocatedInBytes !== undefined &&
        output.WorkingStorageAllocatedInBytes !== null) {
        contents.WorkingStorageAllocatedInBytes =
            output.WorkingStorageAllocatedInBytes;
    }
    if (output.WorkingStorageUsedInBytes !== undefined &&
        output.WorkingStorageUsedInBytes !== null) {
        contents.WorkingStorageUsedInBytes = output.WorkingStorageUsedInBytes;
    }
    return contents;
};
const deserializeAws_json1_1DiskIds = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1GatewayNetworkInterfaces = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1NetworkInterface(entry, context));
};
const deserializeAws_json1_1InternalServerError = (output, context) => {
    let contents = {
        __type: "InternalServerError",
        error: undefined,
        message: undefined
    };
    if (output.error !== undefined && output.error !== null) {
        contents.error = deserializeAws_json1_1StorageGatewayError(output.error, context);
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidGatewayRequestException = (output, context) => {
    let contents = {
        __type: "InvalidGatewayRequestException",
        error: undefined,
        message: undefined
    };
    if (output.error !== undefined && output.error !== null) {
        contents.error = deserializeAws_json1_1StorageGatewayError(output.error, context);
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1NetworkInterface = (output, context) => {
    let contents = {
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
const deserializeAws_json1_1ServiceUnavailableError = (output, context) => {
    let contents = {
        __type: "ServiceUnavailableError",
        error: undefined,
        message: undefined
    };
    if (output.error !== undefined && output.error !== null) {
        contents.error = deserializeAws_json1_1StorageGatewayError(output.error, context);
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ShutdownGatewayOutput = (output, context) => {
    let contents = {
        __type: "ShutdownGatewayOutput",
        GatewayARN: undefined
    };
    if (output.GatewayARN !== undefined && output.GatewayARN !== null) {
        contents.GatewayARN = output.GatewayARN;
    }
    return contents;
};
const deserializeAws_json1_1StartGatewayOutput = (output, context) => {
    let contents = {
        __type: "StartGatewayOutput",
        GatewayARN: undefined
    };
    if (output.GatewayARN !== undefined && output.GatewayARN !== null) {
        contents.GatewayARN = output.GatewayARN;
    }
    return contents;
};
const deserializeAws_json1_1StorageGatewayError = (output, context) => {
    let contents = {
        __type: "StorageGatewayError",
        errorCode: undefined,
        errorDetails: undefined
    };
    if (output.errorCode !== undefined && output.errorCode !== null) {
        contents.errorCode = output.errorCode;
    }
    if (output.errorDetails !== undefined && output.errorDetails !== null) {
        contents.errorDetails = deserializeAws_json1_1errorDetails(output.errorDetails, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdateBandwidthRateLimitOutput = (output, context) => {
    let contents = {
        __type: "UpdateBandwidthRateLimitOutput",
        GatewayARN: undefined
    };
    if (output.GatewayARN !== undefined && output.GatewayARN !== null) {
        contents.GatewayARN = output.GatewayARN;
    }
    return contents;
};
const deserializeAws_json1_1UpdateChapCredentialsOutput = (output, context) => {
    let contents = {
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
const deserializeAws_json1_1UpdateGatewayInformationOutput = (output, context) => {
    let contents = {
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
const deserializeAws_json1_1UpdateGatewaySoftwareNowOutput = (output, context) => {
    let contents = {
        __type: "UpdateGatewaySoftwareNowOutput",
        GatewayARN: undefined
    };
    if (output.GatewayARN !== undefined && output.GatewayARN !== null) {
        contents.GatewayARN = output.GatewayARN;
    }
    return contents;
};
const deserializeAws_json1_1UpdateMaintenanceStartTimeOutput = (output, context) => {
    let contents = {
        __type: "UpdateMaintenanceStartTimeOutput",
        GatewayARN: undefined
    };
    if (output.GatewayARN !== undefined && output.GatewayARN !== null) {
        contents.GatewayARN = output.GatewayARN;
    }
    return contents;
};
const deserializeAws_json1_1UpdateSnapshotScheduleOutput = (output, context) => {
    let contents = {
        __type: "UpdateSnapshotScheduleOutput",
        VolumeARN: undefined
    };
    if (output.VolumeARN !== undefined && output.VolumeARN !== null) {
        contents.VolumeARN = output.VolumeARN;
    }
    return contents;
};
const deserializeAws_json1_1VolumeiSCSIAttributes = (output, context) => {
    let contents = {
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
    if (output.NetworkInterfaceId !== undefined &&
        output.NetworkInterfaceId !== null) {
        contents.NetworkInterfaceId = output.NetworkInterfaceId;
    }
    if (output.NetworkInterfacePort !== undefined &&
        output.NetworkInterfacePort !== null) {
        contents.NetworkInterfacePort = output.NetworkInterfacePort;
    }
    if (output.TargetARN !== undefined && output.TargetARN !== null) {
        contents.TargetARN = output.TargetARN;
    }
    return contents;
};
const deserializeAws_json1_1errorDetails = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1AddCacheOutput = (output, context) => {
    let contents = {
        __type: "AddCacheOutput",
        GatewayARN: undefined
    };
    if (output.GatewayARN !== undefined && output.GatewayARN !== null) {
        contents.GatewayARN = output.GatewayARN;
    }
    return contents;
};
const deserializeAws_json1_1AddUploadBufferOutput = (output, context) => {
    let contents = {
        __type: "AddUploadBufferOutput",
        GatewayARN: undefined
    };
    if (output.GatewayARN !== undefined && output.GatewayARN !== null) {
        contents.GatewayARN = output.GatewayARN;
    }
    return contents;
};
const deserializeAws_json1_1CreateCachediSCSIVolumeOutput = (output, context) => {
    let contents = {
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
const deserializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointOutput = (output, context) => {
    let contents = {
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
    if (output.VolumeRecoveryPointTime !== undefined &&
        output.VolumeRecoveryPointTime !== null) {
        contents.VolumeRecoveryPointTime = output.VolumeRecoveryPointTime;
    }
    return contents;
};
const deserializeAws_json1_1DeleteSnapshotScheduleOutput = (output, context) => {
    let contents = {
        __type: "DeleteSnapshotScheduleOutput",
        VolumeARN: undefined
    };
    if (output.VolumeARN !== undefined && output.VolumeARN !== null) {
        contents.VolumeARN = output.VolumeARN;
    }
    return contents;
};
const deserializeAws_json1_1DescribeCacheOutput = (output, context) => {
    let contents = {
        __type: "DescribeCacheOutput",
        CacheAllocatedInBytes: undefined,
        CacheDirtyPercentage: undefined,
        CacheHitPercentage: undefined,
        CacheMissPercentage: undefined,
        CacheUsedPercentage: undefined,
        DiskIds: undefined,
        GatewayARN: undefined
    };
    if (output.CacheAllocatedInBytes !== undefined &&
        output.CacheAllocatedInBytes !== null) {
        contents.CacheAllocatedInBytes = output.CacheAllocatedInBytes;
    }
    if (output.CacheDirtyPercentage !== undefined &&
        output.CacheDirtyPercentage !== null) {
        contents.CacheDirtyPercentage = output.CacheDirtyPercentage;
    }
    if (output.CacheHitPercentage !== undefined &&
        output.CacheHitPercentage !== null) {
        contents.CacheHitPercentage = output.CacheHitPercentage;
    }
    if (output.CacheMissPercentage !== undefined &&
        output.CacheMissPercentage !== null) {
        contents.CacheMissPercentage = output.CacheMissPercentage;
    }
    if (output.CacheUsedPercentage !== undefined &&
        output.CacheUsedPercentage !== null) {
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
const deserializeAws_json1_1DescribeUploadBufferOutput = (output, context) => {
    let contents = {
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
    if (output.UploadBufferAllocatedInBytes !== undefined &&
        output.UploadBufferAllocatedInBytes !== null) {
        contents.UploadBufferAllocatedInBytes = output.UploadBufferAllocatedInBytes;
    }
    if (output.UploadBufferUsedInBytes !== undefined &&
        output.UploadBufferUsedInBytes !== null) {
        contents.UploadBufferUsedInBytes = output.UploadBufferUsedInBytes;
    }
    return contents;
};
const deserializeAws_json1_1ListVolumeRecoveryPointsOutput = (output, context) => {
    let contents = {
        __type: "ListVolumeRecoveryPointsOutput",
        GatewayARN: undefined,
        VolumeRecoveryPointInfos: undefined
    };
    if (output.GatewayARN !== undefined && output.GatewayARN !== null) {
        contents.GatewayARN = output.GatewayARN;
    }
    if (output.VolumeRecoveryPointInfos !== undefined &&
        output.VolumeRecoveryPointInfos !== null) {
        contents.VolumeRecoveryPointInfos = deserializeAws_json1_1VolumeRecoveryPointInfos(output.VolumeRecoveryPointInfos, context);
    }
    return contents;
};
const deserializeAws_json1_1VolumeRecoveryPointInfo = (output, context) => {
    let contents = {
        __type: "VolumeRecoveryPointInfo",
        VolumeARN: undefined,
        VolumeRecoveryPointTime: undefined,
        VolumeSizeInBytes: undefined,
        VolumeUsageInBytes: undefined
    };
    if (output.VolumeARN !== undefined && output.VolumeARN !== null) {
        contents.VolumeARN = output.VolumeARN;
    }
    if (output.VolumeRecoveryPointTime !== undefined &&
        output.VolumeRecoveryPointTime !== null) {
        contents.VolumeRecoveryPointTime = output.VolumeRecoveryPointTime;
    }
    if (output.VolumeSizeInBytes !== undefined &&
        output.VolumeSizeInBytes !== null) {
        contents.VolumeSizeInBytes = output.VolumeSizeInBytes;
    }
    if (output.VolumeUsageInBytes !== undefined &&
        output.VolumeUsageInBytes !== null) {
        contents.VolumeUsageInBytes = output.VolumeUsageInBytes;
    }
    return contents;
};
const deserializeAws_json1_1VolumeRecoveryPointInfos = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1VolumeRecoveryPointInfo(entry, context));
};
const deserializeAws_json1_1AddTagsToResourceOutput = (output, context) => {
    let contents = {
        __type: "AddTagsToResourceOutput",
        ResourceARN: undefined
    };
    if (output.ResourceARN !== undefined && output.ResourceARN !== null) {
        contents.ResourceARN = output.ResourceARN;
    }
    return contents;
};
const deserializeAws_json1_1AssignTapePoolOutput = (output, context) => {
    let contents = {
        __type: "AssignTapePoolOutput",
        TapeARN: undefined
    };
    if (output.TapeARN !== undefined && output.TapeARN !== null) {
        contents.TapeARN = output.TapeARN;
    }
    return contents;
};
const deserializeAws_json1_1AttachVolumeOutput = (output, context) => {
    let contents = {
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
const deserializeAws_json1_1CachediSCSIVolume = (output, context) => {
    let contents = {
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
    if (output.SourceSnapshotId !== undefined &&
        output.SourceSnapshotId !== null) {
        contents.SourceSnapshotId = output.SourceSnapshotId;
    }
    if (output.TargetName !== undefined && output.TargetName !== null) {
        contents.TargetName = output.TargetName;
    }
    if (output.VolumeARN !== undefined && output.VolumeARN !== null) {
        contents.VolumeARN = output.VolumeARN;
    }
    if (output.VolumeAttachmentStatus !== undefined &&
        output.VolumeAttachmentStatus !== null) {
        contents.VolumeAttachmentStatus = output.VolumeAttachmentStatus;
    }
    if (output.VolumeId !== undefined && output.VolumeId !== null) {
        contents.VolumeId = output.VolumeId;
    }
    if (output.VolumeProgress !== undefined && output.VolumeProgress !== null) {
        contents.VolumeProgress = output.VolumeProgress;
    }
    if (output.VolumeSizeInBytes !== undefined &&
        output.VolumeSizeInBytes !== null) {
        contents.VolumeSizeInBytes = output.VolumeSizeInBytes;
    }
    if (output.VolumeStatus !== undefined && output.VolumeStatus !== null) {
        contents.VolumeStatus = output.VolumeStatus;
    }
    if (output.VolumeType !== undefined && output.VolumeType !== null) {
        contents.VolumeType = output.VolumeType;
    }
    if (output.VolumeUsedInBytes !== undefined &&
        output.VolumeUsedInBytes !== null) {
        contents.VolumeUsedInBytes = output.VolumeUsedInBytes;
    }
    if (output.VolumeiSCSIAttributes !== undefined &&
        output.VolumeiSCSIAttributes !== null) {
        contents.VolumeiSCSIAttributes = deserializeAws_json1_1VolumeiSCSIAttributes(output.VolumeiSCSIAttributes, context);
    }
    return contents;
};
const deserializeAws_json1_1CachediSCSIVolumes = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1CachediSCSIVolume(entry, context));
};
const deserializeAws_json1_1CancelArchivalOutput = (output, context) => {
    let contents = {
        __type: "CancelArchivalOutput",
        TapeARN: undefined
    };
    if (output.TapeARN !== undefined && output.TapeARN !== null) {
        contents.TapeARN = output.TapeARN;
    }
    return contents;
};
const deserializeAws_json1_1CancelRetrievalOutput = (output, context) => {
    let contents = {
        __type: "CancelRetrievalOutput",
        TapeARN: undefined
    };
    if (output.TapeARN !== undefined && output.TapeARN !== null) {
        contents.TapeARN = output.TapeARN;
    }
    return contents;
};
const deserializeAws_json1_1CreateNFSFileShareOutput = (output, context) => {
    let contents = {
        __type: "CreateNFSFileShareOutput",
        FileShareARN: undefined
    };
    if (output.FileShareARN !== undefined && output.FileShareARN !== null) {
        contents.FileShareARN = output.FileShareARN;
    }
    return contents;
};
const deserializeAws_json1_1CreateSMBFileShareOutput = (output, context) => {
    let contents = {
        __type: "CreateSMBFileShareOutput",
        FileShareARN: undefined
    };
    if (output.FileShareARN !== undefined && output.FileShareARN !== null) {
        contents.FileShareARN = output.FileShareARN;
    }
    return contents;
};
const deserializeAws_json1_1CreateTapeWithBarcodeOutput = (output, context) => {
    let contents = {
        __type: "CreateTapeWithBarcodeOutput",
        TapeARN: undefined
    };
    if (output.TapeARN !== undefined && output.TapeARN !== null) {
        contents.TapeARN = output.TapeARN;
    }
    return contents;
};
const deserializeAws_json1_1CreateTapesOutput = (output, context) => {
    let contents = {
        __type: "CreateTapesOutput",
        TapeARNs: undefined
    };
    if (output.TapeARNs !== undefined && output.TapeARNs !== null) {
        contents.TapeARNs = deserializeAws_json1_1TapeARNs(output.TapeARNs, context);
    }
    return contents;
};
const deserializeAws_json1_1DeleteFileShareOutput = (output, context) => {
    let contents = {
        __type: "DeleteFileShareOutput",
        FileShareARN: undefined
    };
    if (output.FileShareARN !== undefined && output.FileShareARN !== null) {
        contents.FileShareARN = output.FileShareARN;
    }
    return contents;
};
const deserializeAws_json1_1DeleteTapeArchiveOutput = (output, context) => {
    let contents = {
        __type: "DeleteTapeArchiveOutput",
        TapeARN: undefined
    };
    if (output.TapeARN !== undefined && output.TapeARN !== null) {
        contents.TapeARN = output.TapeARN;
    }
    return contents;
};
const deserializeAws_json1_1DeleteTapeOutput = (output, context) => {
    let contents = {
        __type: "DeleteTapeOutput",
        TapeARN: undefined
    };
    if (output.TapeARN !== undefined && output.TapeARN !== null) {
        contents.TapeARN = output.TapeARN;
    }
    return contents;
};
const deserializeAws_json1_1DescribeAvailabilityMonitorTestOutput = (output, context) => {
    let contents = {
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
const deserializeAws_json1_1DescribeCachediSCSIVolumesOutput = (output, context) => {
    let contents = {
        __type: "DescribeCachediSCSIVolumesOutput",
        CachediSCSIVolumes: undefined
    };
    if (output.CachediSCSIVolumes !== undefined &&
        output.CachediSCSIVolumes !== null) {
        contents.CachediSCSIVolumes = deserializeAws_json1_1CachediSCSIVolumes(output.CachediSCSIVolumes, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeGatewayInformationOutput = (output, context) => {
    let contents = {
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
    if (output.CloudWatchLogGroupARN !== undefined &&
        output.CloudWatchLogGroupARN !== null) {
        contents.CloudWatchLogGroupARN = output.CloudWatchLogGroupARN;
    }
    if (output.Ec2InstanceId !== undefined && output.Ec2InstanceId !== null) {
        contents.Ec2InstanceId = output.Ec2InstanceId;
    }
    if (output.Ec2InstanceRegion !== undefined &&
        output.Ec2InstanceRegion !== null) {
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
    if (output.GatewayNetworkInterfaces !== undefined &&
        output.GatewayNetworkInterfaces !== null) {
        contents.GatewayNetworkInterfaces = deserializeAws_json1_1GatewayNetworkInterfaces(output.GatewayNetworkInterfaces, context);
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
    if (output.LastSoftwareUpdate !== undefined &&
        output.LastSoftwareUpdate !== null) {
        contents.LastSoftwareUpdate = output.LastSoftwareUpdate;
    }
    if (output.NextUpdateAvailabilityDate !== undefined &&
        output.NextUpdateAvailabilityDate !== null) {
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
const deserializeAws_json1_1DescribeMaintenanceStartTimeOutput = (output, context) => {
    let contents = {
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
const deserializeAws_json1_1DescribeNFSFileSharesOutput = (output, context) => {
    let contents = {
        __type: "DescribeNFSFileSharesOutput",
        NFSFileShareInfoList: undefined
    };
    if (output.NFSFileShareInfoList !== undefined &&
        output.NFSFileShareInfoList !== null) {
        contents.NFSFileShareInfoList = deserializeAws_json1_1NFSFileShareInfoList(output.NFSFileShareInfoList, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeSMBFileSharesOutput = (output, context) => {
    let contents = {
        __type: "DescribeSMBFileSharesOutput",
        SMBFileShareInfoList: undefined
    };
    if (output.SMBFileShareInfoList !== undefined &&
        output.SMBFileShareInfoList !== null) {
        contents.SMBFileShareInfoList = deserializeAws_json1_1SMBFileShareInfoList(output.SMBFileShareInfoList, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeSMBSettingsOutput = (output, context) => {
    let contents = {
        __type: "DescribeSMBSettingsOutput",
        ActiveDirectoryStatus: undefined,
        DomainName: undefined,
        GatewayARN: undefined,
        SMBGuestPasswordSet: undefined,
        SMBSecurityStrategy: undefined
    };
    if (output.ActiveDirectoryStatus !== undefined &&
        output.ActiveDirectoryStatus !== null) {
        contents.ActiveDirectoryStatus = output.ActiveDirectoryStatus;
    }
    if (output.DomainName !== undefined && output.DomainName !== null) {
        contents.DomainName = output.DomainName;
    }
    if (output.GatewayARN !== undefined && output.GatewayARN !== null) {
        contents.GatewayARN = output.GatewayARN;
    }
    if (output.SMBGuestPasswordSet !== undefined &&
        output.SMBGuestPasswordSet !== null) {
        contents.SMBGuestPasswordSet = output.SMBGuestPasswordSet;
    }
    if (output.SMBSecurityStrategy !== undefined &&
        output.SMBSecurityStrategy !== null) {
        contents.SMBSecurityStrategy = output.SMBSecurityStrategy;
    }
    return contents;
};
const deserializeAws_json1_1DescribeSnapshotScheduleOutput = (output, context) => {
    let contents = {
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
    if (output.RecurrenceInHours !== undefined &&
        output.RecurrenceInHours !== null) {
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
const deserializeAws_json1_1DescribeStorediSCSIVolumesOutput = (output, context) => {
    let contents = {
        __type: "DescribeStorediSCSIVolumesOutput",
        StorediSCSIVolumes: undefined
    };
    if (output.StorediSCSIVolumes !== undefined &&
        output.StorediSCSIVolumes !== null) {
        contents.StorediSCSIVolumes = deserializeAws_json1_1StorediSCSIVolumes(output.StorediSCSIVolumes, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeTapeArchivesOutput = (output, context) => {
    let contents = {
        __type: "DescribeTapeArchivesOutput",
        Marker: undefined,
        TapeArchives: undefined
    };
    if (output.Marker !== undefined && output.Marker !== null) {
        contents.Marker = output.Marker;
    }
    if (output.TapeArchives !== undefined && output.TapeArchives !== null) {
        contents.TapeArchives = deserializeAws_json1_1TapeArchives(output.TapeArchives, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeTapeRecoveryPointsOutput = (output, context) => {
    let contents = {
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
    if (output.TapeRecoveryPointInfos !== undefined &&
        output.TapeRecoveryPointInfos !== null) {
        contents.TapeRecoveryPointInfos = deserializeAws_json1_1TapeRecoveryPointInfos(output.TapeRecoveryPointInfos, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeTapesOutput = (output, context) => {
    let contents = {
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
const deserializeAws_json1_1DescribeVTLDevicesOutput = (output, context) => {
    let contents = {
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
        contents.VTLDevices = deserializeAws_json1_1VTLDevices(output.VTLDevices, context);
    }
    return contents;
};
const deserializeAws_json1_1DetachVolumeOutput = (output, context) => {
    let contents = {
        __type: "DetachVolumeOutput",
        VolumeARN: undefined
    };
    if (output.VolumeARN !== undefined && output.VolumeARN !== null) {
        contents.VolumeARN = output.VolumeARN;
    }
    return contents;
};
const deserializeAws_json1_1DeviceiSCSIAttributes = (output, context) => {
    let contents = {
        __type: "DeviceiSCSIAttributes",
        ChapEnabled: undefined,
        NetworkInterfaceId: undefined,
        NetworkInterfacePort: undefined,
        TargetARN: undefined
    };
    if (output.ChapEnabled !== undefined && output.ChapEnabled !== null) {
        contents.ChapEnabled = output.ChapEnabled;
    }
    if (output.NetworkInterfaceId !== undefined &&
        output.NetworkInterfaceId !== null) {
        contents.NetworkInterfaceId = output.NetworkInterfaceId;
    }
    if (output.NetworkInterfacePort !== undefined &&
        output.NetworkInterfacePort !== null) {
        contents.NetworkInterfacePort = output.NetworkInterfacePort;
    }
    if (output.TargetARN !== undefined && output.TargetARN !== null) {
        contents.TargetARN = output.TargetARN;
    }
    return contents;
};
const deserializeAws_json1_1DisableGatewayOutput = (output, context) => {
    let contents = {
        __type: "DisableGatewayOutput",
        GatewayARN: undefined
    };
    if (output.GatewayARN !== undefined && output.GatewayARN !== null) {
        contents.GatewayARN = output.GatewayARN;
    }
    return contents;
};
const deserializeAws_json1_1Disk = (output, context) => {
    let contents = {
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
    if (output.DiskAllocationResource !== undefined &&
        output.DiskAllocationResource !== null) {
        contents.DiskAllocationResource = output.DiskAllocationResource;
    }
    if (output.DiskAllocationType !== undefined &&
        output.DiskAllocationType !== null) {
        contents.DiskAllocationType = output.DiskAllocationType;
    }
    if (output.DiskAttributeList !== undefined &&
        output.DiskAttributeList !== null) {
        contents.DiskAttributeList = deserializeAws_json1_1DiskAttributeList(output.DiskAttributeList, context);
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
const deserializeAws_json1_1DiskAttributeList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1Disks = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Disk(entry, context));
};
const deserializeAws_json1_1FileShareClientList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1FileShareInfo = (output, context) => {
    let contents = {
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
const deserializeAws_json1_1FileShareInfoList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1FileShareInfo(entry, context));
};
const deserializeAws_json1_1FileShareUserList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1GatewayInfo = (output, context) => {
    let contents = {
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
    if (output.Ec2InstanceRegion !== undefined &&
        output.Ec2InstanceRegion !== null) {
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
    if (output.GatewayOperationalState !== undefined &&
        output.GatewayOperationalState !== null) {
        contents.GatewayOperationalState = output.GatewayOperationalState;
    }
    if (output.GatewayType !== undefined && output.GatewayType !== null) {
        contents.GatewayType = output.GatewayType;
    }
    return contents;
};
const deserializeAws_json1_1Gateways = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1GatewayInfo(entry, context));
};
const deserializeAws_json1_1Initiators = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1JoinDomainOutput = (output, context) => {
    let contents = {
        __type: "JoinDomainOutput",
        ActiveDirectoryStatus: undefined,
        GatewayARN: undefined
    };
    if (output.ActiveDirectoryStatus !== undefined &&
        output.ActiveDirectoryStatus !== null) {
        contents.ActiveDirectoryStatus = output.ActiveDirectoryStatus;
    }
    if (output.GatewayARN !== undefined && output.GatewayARN !== null) {
        contents.GatewayARN = output.GatewayARN;
    }
    return contents;
};
const deserializeAws_json1_1ListFileSharesOutput = (output, context) => {
    let contents = {
        __type: "ListFileSharesOutput",
        FileShareInfoList: undefined,
        Marker: undefined,
        NextMarker: undefined
    };
    if (output.FileShareInfoList !== undefined &&
        output.FileShareInfoList !== null) {
        contents.FileShareInfoList = deserializeAws_json1_1FileShareInfoList(output.FileShareInfoList, context);
    }
    if (output.Marker !== undefined && output.Marker !== null) {
        contents.Marker = output.Marker;
    }
    if (output.NextMarker !== undefined && output.NextMarker !== null) {
        contents.NextMarker = output.NextMarker;
    }
    return contents;
};
const deserializeAws_json1_1ListGatewaysOutput = (output, context) => {
    let contents = {
        __type: "ListGatewaysOutput",
        Gateways: undefined,
        Marker: undefined
    };
    if (output.Gateways !== undefined && output.Gateways !== null) {
        contents.Gateways = deserializeAws_json1_1Gateways(output.Gateways, context);
    }
    if (output.Marker !== undefined && output.Marker !== null) {
        contents.Marker = output.Marker;
    }
    return contents;
};
const deserializeAws_json1_1ListLocalDisksOutput = (output, context) => {
    let contents = {
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
const deserializeAws_json1_1ListTagsForResourceOutput = (output, context) => {
    let contents = {
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
const deserializeAws_json1_1ListTapesOutput = (output, context) => {
    let contents = {
        __type: "ListTapesOutput",
        Marker: undefined,
        TapeInfos: undefined
    };
    if (output.Marker !== undefined && output.Marker !== null) {
        contents.Marker = output.Marker;
    }
    if (output.TapeInfos !== undefined && output.TapeInfos !== null) {
        contents.TapeInfos = deserializeAws_json1_1TapeInfos(output.TapeInfos, context);
    }
    return contents;
};
const deserializeAws_json1_1ListVolumeInitiatorsOutput = (output, context) => {
    let contents = {
        __type: "ListVolumeInitiatorsOutput",
        Initiators: undefined
    };
    if (output.Initiators !== undefined && output.Initiators !== null) {
        contents.Initiators = deserializeAws_json1_1Initiators(output.Initiators, context);
    }
    return contents;
};
const deserializeAws_json1_1ListVolumesOutput = (output, context) => {
    let contents = {
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
        contents.VolumeInfos = deserializeAws_json1_1VolumeInfos(output.VolumeInfos, context);
    }
    return contents;
};
const deserializeAws_json1_1NFSFileShareDefaults = (output, context) => {
    let contents = {
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
const deserializeAws_json1_1NFSFileShareInfo = (output, context) => {
    let contents = {
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
        contents.ClientList = deserializeAws_json1_1FileShareClientList(output.ClientList, context);
    }
    if (output.DefaultStorageClass !== undefined &&
        output.DefaultStorageClass !== null) {
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
    if (output.GuessMIMETypeEnabled !== undefined &&
        output.GuessMIMETypeEnabled !== null) {
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
    if (output.NFSFileShareDefaults !== undefined &&
        output.NFSFileShareDefaults !== null) {
        contents.NFSFileShareDefaults = deserializeAws_json1_1NFSFileShareDefaults(output.NFSFileShareDefaults, context);
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
const deserializeAws_json1_1NFSFileShareInfoList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1NFSFileShareInfo(entry, context));
};
const deserializeAws_json1_1NotifyWhenUploadedOutput = (output, context) => {
    let contents = {
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
const deserializeAws_json1_1RefreshCacheOutput = (output, context) => {
    let contents = {
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
const deserializeAws_json1_1RemoveTagsFromResourceOutput = (output, context) => {
    let contents = {
        __type: "RemoveTagsFromResourceOutput",
        ResourceARN: undefined
    };
    if (output.ResourceARN !== undefined && output.ResourceARN !== null) {
        contents.ResourceARN = output.ResourceARN;
    }
    return contents;
};
const deserializeAws_json1_1ResetCacheOutput = (output, context) => {
    let contents = {
        __type: "ResetCacheOutput",
        GatewayARN: undefined
    };
    if (output.GatewayARN !== undefined && output.GatewayARN !== null) {
        contents.GatewayARN = output.GatewayARN;
    }
    return contents;
};
const deserializeAws_json1_1RetrieveTapeArchiveOutput = (output, context) => {
    let contents = {
        __type: "RetrieveTapeArchiveOutput",
        TapeARN: undefined
    };
    if (output.TapeARN !== undefined && output.TapeARN !== null) {
        contents.TapeARN = output.TapeARN;
    }
    return contents;
};
const deserializeAws_json1_1RetrieveTapeRecoveryPointOutput = (output, context) => {
    let contents = {
        __type: "RetrieveTapeRecoveryPointOutput",
        TapeARN: undefined
    };
    if (output.TapeARN !== undefined && output.TapeARN !== null) {
        contents.TapeARN = output.TapeARN;
    }
    return contents;
};
const deserializeAws_json1_1SMBFileShareInfo = (output, context) => {
    let contents = {
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
        contents.AdminUserList = deserializeAws_json1_1FileShareUserList(output.AdminUserList, context);
    }
    if (output.Authentication !== undefined && output.Authentication !== null) {
        contents.Authentication = output.Authentication;
    }
    if (output.DefaultStorageClass !== undefined &&
        output.DefaultStorageClass !== null) {
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
    if (output.GuessMIMETypeEnabled !== undefined &&
        output.GuessMIMETypeEnabled !== null) {
        contents.GuessMIMETypeEnabled = output.GuessMIMETypeEnabled;
    }
    if (output.InvalidUserList !== undefined && output.InvalidUserList !== null) {
        contents.InvalidUserList = deserializeAws_json1_1FileShareUserList(output.InvalidUserList, context);
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
        contents.ValidUserList = deserializeAws_json1_1FileShareUserList(output.ValidUserList, context);
    }
    return contents;
};
const deserializeAws_json1_1SMBFileShareInfoList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1SMBFileShareInfo(entry, context));
};
const deserializeAws_json1_1SetLocalConsolePasswordOutput = (output, context) => {
    let contents = {
        __type: "SetLocalConsolePasswordOutput",
        GatewayARN: undefined
    };
    if (output.GatewayARN !== undefined && output.GatewayARN !== null) {
        contents.GatewayARN = output.GatewayARN;
    }
    return contents;
};
const deserializeAws_json1_1SetSMBGuestPasswordOutput = (output, context) => {
    let contents = {
        __type: "SetSMBGuestPasswordOutput",
        GatewayARN: undefined
    };
    if (output.GatewayARN !== undefined && output.GatewayARN !== null) {
        contents.GatewayARN = output.GatewayARN;
    }
    return contents;
};
const deserializeAws_json1_1StartAvailabilityMonitorTestOutput = (output, context) => {
    let contents = {
        __type: "StartAvailabilityMonitorTestOutput",
        GatewayARN: undefined
    };
    if (output.GatewayARN !== undefined && output.GatewayARN !== null) {
        contents.GatewayARN = output.GatewayARN;
    }
    return contents;
};
const deserializeAws_json1_1StorediSCSIVolume = (output, context) => {
    let contents = {
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
    if (output.PreservedExistingData !== undefined &&
        output.PreservedExistingData !== null) {
        contents.PreservedExistingData = output.PreservedExistingData;
    }
    if (output.SourceSnapshotId !== undefined &&
        output.SourceSnapshotId !== null) {
        contents.SourceSnapshotId = output.SourceSnapshotId;
    }
    if (output.TargetName !== undefined && output.TargetName !== null) {
        contents.TargetName = output.TargetName;
    }
    if (output.VolumeARN !== undefined && output.VolumeARN !== null) {
        contents.VolumeARN = output.VolumeARN;
    }
    if (output.VolumeAttachmentStatus !== undefined &&
        output.VolumeAttachmentStatus !== null) {
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
    if (output.VolumeSizeInBytes !== undefined &&
        output.VolumeSizeInBytes !== null) {
        contents.VolumeSizeInBytes = output.VolumeSizeInBytes;
    }
    if (output.VolumeStatus !== undefined && output.VolumeStatus !== null) {
        contents.VolumeStatus = output.VolumeStatus;
    }
    if (output.VolumeType !== undefined && output.VolumeType !== null) {
        contents.VolumeType = output.VolumeType;
    }
    if (output.VolumeUsedInBytes !== undefined &&
        output.VolumeUsedInBytes !== null) {
        contents.VolumeUsedInBytes = output.VolumeUsedInBytes;
    }
    if (output.VolumeiSCSIAttributes !== undefined &&
        output.VolumeiSCSIAttributes !== null) {
        contents.VolumeiSCSIAttributes = deserializeAws_json1_1VolumeiSCSIAttributes(output.VolumeiSCSIAttributes, context);
    }
    return contents;
};
const deserializeAws_json1_1StorediSCSIVolumes = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1StorediSCSIVolume(entry, context));
};
const deserializeAws_json1_1Tag = (output, context) => {
    let contents = {
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
const deserializeAws_json1_1Tags = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Tag(entry, context));
};
const deserializeAws_json1_1Tape = (output, context) => {
    let contents = {
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
        contents.TapeCreatedDate = new Date(Math.round(output.TapeCreatedDate * 1000));
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
const deserializeAws_json1_1TapeARNs = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1TapeArchive = (output, context) => {
    let contents = {
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
        contents.CompletionTime = new Date(Math.round(output.CompletionTime * 1000));
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
        contents.TapeCreatedDate = new Date(Math.round(output.TapeCreatedDate * 1000));
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
const deserializeAws_json1_1TapeArchives = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1TapeArchive(entry, context));
};
const deserializeAws_json1_1TapeInfo = (output, context) => {
    let contents = {
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
const deserializeAws_json1_1TapeInfos = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1TapeInfo(entry, context));
};
const deserializeAws_json1_1TapeRecoveryPointInfo = (output, context) => {
    let contents = {
        __type: "TapeRecoveryPointInfo",
        TapeARN: undefined,
        TapeRecoveryPointTime: undefined,
        TapeSizeInBytes: undefined,
        TapeStatus: undefined
    };
    if (output.TapeARN !== undefined && output.TapeARN !== null) {
        contents.TapeARN = output.TapeARN;
    }
    if (output.TapeRecoveryPointTime !== undefined &&
        output.TapeRecoveryPointTime !== null) {
        contents.TapeRecoveryPointTime = new Date(Math.round(output.TapeRecoveryPointTime * 1000));
    }
    if (output.TapeSizeInBytes !== undefined && output.TapeSizeInBytes !== null) {
        contents.TapeSizeInBytes = output.TapeSizeInBytes;
    }
    if (output.TapeStatus !== undefined && output.TapeStatus !== null) {
        contents.TapeStatus = output.TapeStatus;
    }
    return contents;
};
const deserializeAws_json1_1TapeRecoveryPointInfos = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1TapeRecoveryPointInfo(entry, context));
};
const deserializeAws_json1_1Tapes = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Tape(entry, context));
};
const deserializeAws_json1_1UpdateNFSFileShareOutput = (output, context) => {
    let contents = {
        __type: "UpdateNFSFileShareOutput",
        FileShareARN: undefined
    };
    if (output.FileShareARN !== undefined && output.FileShareARN !== null) {
        contents.FileShareARN = output.FileShareARN;
    }
    return contents;
};
const deserializeAws_json1_1UpdateSMBFileShareOutput = (output, context) => {
    let contents = {
        __type: "UpdateSMBFileShareOutput",
        FileShareARN: undefined
    };
    if (output.FileShareARN !== undefined && output.FileShareARN !== null) {
        contents.FileShareARN = output.FileShareARN;
    }
    return contents;
};
const deserializeAws_json1_1UpdateSMBSecurityStrategyOutput = (output, context) => {
    let contents = {
        __type: "UpdateSMBSecurityStrategyOutput",
        GatewayARN: undefined
    };
    if (output.GatewayARN !== undefined && output.GatewayARN !== null) {
        contents.GatewayARN = output.GatewayARN;
    }
    return contents;
};
const deserializeAws_json1_1UpdateVTLDeviceTypeOutput = (output, context) => {
    let contents = {
        __type: "UpdateVTLDeviceTypeOutput",
        VTLDeviceARN: undefined
    };
    if (output.VTLDeviceARN !== undefined && output.VTLDeviceARN !== null) {
        contents.VTLDeviceARN = output.VTLDeviceARN;
    }
    return contents;
};
const deserializeAws_json1_1VTLDevice = (output, context) => {
    let contents = {
        __type: "VTLDevice",
        DeviceiSCSIAttributes: undefined,
        VTLDeviceARN: undefined,
        VTLDeviceProductIdentifier: undefined,
        VTLDeviceType: undefined,
        VTLDeviceVendor: undefined
    };
    if (output.DeviceiSCSIAttributes !== undefined &&
        output.DeviceiSCSIAttributes !== null) {
        contents.DeviceiSCSIAttributes = deserializeAws_json1_1DeviceiSCSIAttributes(output.DeviceiSCSIAttributes, context);
    }
    if (output.VTLDeviceARN !== undefined && output.VTLDeviceARN !== null) {
        contents.VTLDeviceARN = output.VTLDeviceARN;
    }
    if (output.VTLDeviceProductIdentifier !== undefined &&
        output.VTLDeviceProductIdentifier !== null) {
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
const deserializeAws_json1_1VTLDevices = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1VTLDevice(entry, context));
};
const deserializeAws_json1_1VolumeInfo = (output, context) => {
    let contents = {
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
    if (output.VolumeAttachmentStatus !== undefined &&
        output.VolumeAttachmentStatus !== null) {
        contents.VolumeAttachmentStatus = output.VolumeAttachmentStatus;
    }
    if (output.VolumeId !== undefined && output.VolumeId !== null) {
        contents.VolumeId = output.VolumeId;
    }
    if (output.VolumeSizeInBytes !== undefined &&
        output.VolumeSizeInBytes !== null) {
        contents.VolumeSizeInBytes = output.VolumeSizeInBytes;
    }
    if (output.VolumeType !== undefined && output.VolumeType !== null) {
        contents.VolumeType = output.VolumeType;
    }
    return contents;
};
const deserializeAws_json1_1VolumeInfos = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1VolumeInfo(entry, context));
};
const deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    httpHeaders: output.headers,
    requestId: output.headers["x-amzn-requestid"]
});
// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody, context) => {
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return (context.streamCollector(streamBody) || Promise.resolve(new Uint8Array()));
};
// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody, context) => {
    return collectBody(streamBody, context).then(body => context.utf8Encoder(body));
};
const buildHttpRpcRequest = (context, headers, path, resolvedHostname, body) => {
    const contents = Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", path: path, headers: headers });
    if (resolvedHostname !== undefined) {
        contents.hostname = resolvedHostname;
    }
    if (body !== undefined) {
        contents.body = body;
    }
    return new protocol_http_1.HttpRequest(contents);
};
const parseBody = (streamBody, context) => {
    return collectBodyString(streamBody, context).then(encoded => {
        if (encoded.length) {
            return JSON.parse(encoded);
        }
        return {};
    });
};
//# sourceMappingURL=Aws_json1_1.js.map