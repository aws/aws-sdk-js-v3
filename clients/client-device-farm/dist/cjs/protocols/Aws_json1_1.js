"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1CreateDevicePoolCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.CreateDevicePool";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDevicePoolRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateDevicePoolCommand = serializeAws_json1_1CreateDevicePoolCommand;
async function serializeAws_json1_1CreateInstanceProfileCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.CreateInstanceProfile";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateInstanceProfileRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateInstanceProfileCommand = serializeAws_json1_1CreateInstanceProfileCommand;
async function serializeAws_json1_1CreateNetworkProfileCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.CreateNetworkProfile";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateNetworkProfileRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateNetworkProfileCommand = serializeAws_json1_1CreateNetworkProfileCommand;
async function serializeAws_json1_1CreateProjectCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.CreateProject";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateProjectRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateProjectCommand = serializeAws_json1_1CreateProjectCommand;
async function serializeAws_json1_1CreateRemoteAccessSessionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.CreateRemoteAccessSession";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateRemoteAccessSessionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateRemoteAccessSessionCommand = serializeAws_json1_1CreateRemoteAccessSessionCommand;
async function serializeAws_json1_1CreateTestGridProjectCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.CreateTestGridProject";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateTestGridProjectRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateTestGridProjectCommand = serializeAws_json1_1CreateTestGridProjectCommand;
async function serializeAws_json1_1CreateTestGridUrlCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.CreateTestGridUrl";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateTestGridUrlRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateTestGridUrlCommand = serializeAws_json1_1CreateTestGridUrlCommand;
async function serializeAws_json1_1CreateUploadCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.CreateUpload";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateUploadRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateUploadCommand = serializeAws_json1_1CreateUploadCommand;
async function serializeAws_json1_1CreateVPCEConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.CreateVPCEConfiguration";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateVPCEConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateVPCEConfigurationCommand = serializeAws_json1_1CreateVPCEConfigurationCommand;
async function serializeAws_json1_1DeleteDevicePoolCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.DeleteDevicePool";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteDevicePoolRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteDevicePoolCommand = serializeAws_json1_1DeleteDevicePoolCommand;
async function serializeAws_json1_1DeleteInstanceProfileCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.DeleteInstanceProfile";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteInstanceProfileRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteInstanceProfileCommand = serializeAws_json1_1DeleteInstanceProfileCommand;
async function serializeAws_json1_1DeleteNetworkProfileCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.DeleteNetworkProfile";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteNetworkProfileRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteNetworkProfileCommand = serializeAws_json1_1DeleteNetworkProfileCommand;
async function serializeAws_json1_1DeleteProjectCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.DeleteProject";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteProjectRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteProjectCommand = serializeAws_json1_1DeleteProjectCommand;
async function serializeAws_json1_1DeleteRemoteAccessSessionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.DeleteRemoteAccessSession";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteRemoteAccessSessionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteRemoteAccessSessionCommand = serializeAws_json1_1DeleteRemoteAccessSessionCommand;
async function serializeAws_json1_1DeleteRunCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.DeleteRun";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteRunRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteRunCommand = serializeAws_json1_1DeleteRunCommand;
async function serializeAws_json1_1DeleteTestGridProjectCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.DeleteTestGridProject";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteTestGridProjectRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteTestGridProjectCommand = serializeAws_json1_1DeleteTestGridProjectCommand;
async function serializeAws_json1_1DeleteUploadCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.DeleteUpload";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteUploadRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteUploadCommand = serializeAws_json1_1DeleteUploadCommand;
async function serializeAws_json1_1DeleteVPCEConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.DeleteVPCEConfiguration";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteVPCEConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteVPCEConfigurationCommand = serializeAws_json1_1DeleteVPCEConfigurationCommand;
async function serializeAws_json1_1GetAccountSettingsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.GetAccountSettings";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetAccountSettingsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetAccountSettingsCommand = serializeAws_json1_1GetAccountSettingsCommand;
async function serializeAws_json1_1GetDeviceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.GetDevice";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDeviceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetDeviceCommand = serializeAws_json1_1GetDeviceCommand;
async function serializeAws_json1_1GetDeviceInstanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.GetDeviceInstance";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDeviceInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetDeviceInstanceCommand = serializeAws_json1_1GetDeviceInstanceCommand;
async function serializeAws_json1_1GetDevicePoolCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.GetDevicePool";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDevicePoolRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetDevicePoolCommand = serializeAws_json1_1GetDevicePoolCommand;
async function serializeAws_json1_1GetDevicePoolCompatibilityCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.GetDevicePoolCompatibility";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDevicePoolCompatibilityRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetDevicePoolCompatibilityCommand = serializeAws_json1_1GetDevicePoolCompatibilityCommand;
async function serializeAws_json1_1GetInstanceProfileCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.GetInstanceProfile";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetInstanceProfileRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetInstanceProfileCommand = serializeAws_json1_1GetInstanceProfileCommand;
async function serializeAws_json1_1GetJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.GetJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetJobCommand = serializeAws_json1_1GetJobCommand;
async function serializeAws_json1_1GetNetworkProfileCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.GetNetworkProfile";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetNetworkProfileRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetNetworkProfileCommand = serializeAws_json1_1GetNetworkProfileCommand;
async function serializeAws_json1_1GetOfferingStatusCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.GetOfferingStatus";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetOfferingStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetOfferingStatusCommand = serializeAws_json1_1GetOfferingStatusCommand;
async function serializeAws_json1_1GetProjectCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.GetProject";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetProjectRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetProjectCommand = serializeAws_json1_1GetProjectCommand;
async function serializeAws_json1_1GetRemoteAccessSessionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.GetRemoteAccessSession";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRemoteAccessSessionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetRemoteAccessSessionCommand = serializeAws_json1_1GetRemoteAccessSessionCommand;
async function serializeAws_json1_1GetRunCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.GetRun";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRunRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetRunCommand = serializeAws_json1_1GetRunCommand;
async function serializeAws_json1_1GetSuiteCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.GetSuite";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetSuiteRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetSuiteCommand = serializeAws_json1_1GetSuiteCommand;
async function serializeAws_json1_1GetTestCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.GetTest";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetTestRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetTestCommand = serializeAws_json1_1GetTestCommand;
async function serializeAws_json1_1GetTestGridProjectCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.GetTestGridProject";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetTestGridProjectRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetTestGridProjectCommand = serializeAws_json1_1GetTestGridProjectCommand;
async function serializeAws_json1_1GetTestGridSessionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.GetTestGridSession";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetTestGridSessionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetTestGridSessionCommand = serializeAws_json1_1GetTestGridSessionCommand;
async function serializeAws_json1_1GetUploadCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.GetUpload";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetUploadRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetUploadCommand = serializeAws_json1_1GetUploadCommand;
async function serializeAws_json1_1GetVPCEConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.GetVPCEConfiguration";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetVPCEConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetVPCEConfigurationCommand = serializeAws_json1_1GetVPCEConfigurationCommand;
async function serializeAws_json1_1InstallToRemoteAccessSessionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.InstallToRemoteAccessSession";
    let body;
    body = JSON.stringify(serializeAws_json1_1InstallToRemoteAccessSessionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1InstallToRemoteAccessSessionCommand = serializeAws_json1_1InstallToRemoteAccessSessionCommand;
async function serializeAws_json1_1ListArtifactsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.ListArtifacts";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListArtifactsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListArtifactsCommand = serializeAws_json1_1ListArtifactsCommand;
async function serializeAws_json1_1ListDeviceInstancesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.ListDeviceInstances";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListDeviceInstancesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListDeviceInstancesCommand = serializeAws_json1_1ListDeviceInstancesCommand;
async function serializeAws_json1_1ListDevicePoolsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.ListDevicePools";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListDevicePoolsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListDevicePoolsCommand = serializeAws_json1_1ListDevicePoolsCommand;
async function serializeAws_json1_1ListDevicesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.ListDevices";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListDevicesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListDevicesCommand = serializeAws_json1_1ListDevicesCommand;
async function serializeAws_json1_1ListInstanceProfilesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.ListInstanceProfiles";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListInstanceProfilesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListInstanceProfilesCommand = serializeAws_json1_1ListInstanceProfilesCommand;
async function serializeAws_json1_1ListJobsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.ListJobs";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListJobsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListJobsCommand = serializeAws_json1_1ListJobsCommand;
async function serializeAws_json1_1ListNetworkProfilesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.ListNetworkProfiles";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListNetworkProfilesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListNetworkProfilesCommand = serializeAws_json1_1ListNetworkProfilesCommand;
async function serializeAws_json1_1ListOfferingPromotionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.ListOfferingPromotions";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListOfferingPromotionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListOfferingPromotionsCommand = serializeAws_json1_1ListOfferingPromotionsCommand;
async function serializeAws_json1_1ListOfferingTransactionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.ListOfferingTransactions";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListOfferingTransactionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListOfferingTransactionsCommand = serializeAws_json1_1ListOfferingTransactionsCommand;
async function serializeAws_json1_1ListOfferingsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.ListOfferings";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListOfferingsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListOfferingsCommand = serializeAws_json1_1ListOfferingsCommand;
async function serializeAws_json1_1ListProjectsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.ListProjects";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListProjectsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListProjectsCommand = serializeAws_json1_1ListProjectsCommand;
async function serializeAws_json1_1ListRemoteAccessSessionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.ListRemoteAccessSessions";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListRemoteAccessSessionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListRemoteAccessSessionsCommand = serializeAws_json1_1ListRemoteAccessSessionsCommand;
async function serializeAws_json1_1ListRunsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.ListRuns";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListRunsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListRunsCommand = serializeAws_json1_1ListRunsCommand;
async function serializeAws_json1_1ListSamplesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.ListSamples";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListSamplesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListSamplesCommand = serializeAws_json1_1ListSamplesCommand;
async function serializeAws_json1_1ListSuitesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.ListSuites";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListSuitesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListSuitesCommand = serializeAws_json1_1ListSuitesCommand;
async function serializeAws_json1_1ListTagsForResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.ListTagsForResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
async function serializeAws_json1_1ListTestGridProjectsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.ListTestGridProjects";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTestGridProjectsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTestGridProjectsCommand = serializeAws_json1_1ListTestGridProjectsCommand;
async function serializeAws_json1_1ListTestGridSessionActionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.ListTestGridSessionActions";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTestGridSessionActionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTestGridSessionActionsCommand = serializeAws_json1_1ListTestGridSessionActionsCommand;
async function serializeAws_json1_1ListTestGridSessionArtifactsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.ListTestGridSessionArtifacts";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTestGridSessionArtifactsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTestGridSessionArtifactsCommand = serializeAws_json1_1ListTestGridSessionArtifactsCommand;
async function serializeAws_json1_1ListTestGridSessionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.ListTestGridSessions";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTestGridSessionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTestGridSessionsCommand = serializeAws_json1_1ListTestGridSessionsCommand;
async function serializeAws_json1_1ListTestsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.ListTests";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTestsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTestsCommand = serializeAws_json1_1ListTestsCommand;
async function serializeAws_json1_1ListUniqueProblemsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.ListUniqueProblems";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListUniqueProblemsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListUniqueProblemsCommand = serializeAws_json1_1ListUniqueProblemsCommand;
async function serializeAws_json1_1ListUploadsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.ListUploads";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListUploadsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListUploadsCommand = serializeAws_json1_1ListUploadsCommand;
async function serializeAws_json1_1ListVPCEConfigurationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.ListVPCEConfigurations";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListVPCEConfigurationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListVPCEConfigurationsCommand = serializeAws_json1_1ListVPCEConfigurationsCommand;
async function serializeAws_json1_1PurchaseOfferingCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.PurchaseOffering";
    let body;
    body = JSON.stringify(serializeAws_json1_1PurchaseOfferingRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PurchaseOfferingCommand = serializeAws_json1_1PurchaseOfferingCommand;
async function serializeAws_json1_1RenewOfferingCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.RenewOffering";
    let body;
    body = JSON.stringify(serializeAws_json1_1RenewOfferingRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RenewOfferingCommand = serializeAws_json1_1RenewOfferingCommand;
async function serializeAws_json1_1ScheduleRunCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.ScheduleRun";
    let body;
    body = JSON.stringify(serializeAws_json1_1ScheduleRunRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ScheduleRunCommand = serializeAws_json1_1ScheduleRunCommand;
async function serializeAws_json1_1StopJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.StopJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1StopJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StopJobCommand = serializeAws_json1_1StopJobCommand;
async function serializeAws_json1_1StopRemoteAccessSessionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.StopRemoteAccessSession";
    let body;
    body = JSON.stringify(serializeAws_json1_1StopRemoteAccessSessionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StopRemoteAccessSessionCommand = serializeAws_json1_1StopRemoteAccessSessionCommand;
async function serializeAws_json1_1StopRunCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.StopRun";
    let body;
    body = JSON.stringify(serializeAws_json1_1StopRunRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StopRunCommand = serializeAws_json1_1StopRunCommand;
async function serializeAws_json1_1TagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.TagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
async function serializeAws_json1_1UntagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.UntagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
async function serializeAws_json1_1UpdateDeviceInstanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.UpdateDeviceInstance";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateDeviceInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateDeviceInstanceCommand = serializeAws_json1_1UpdateDeviceInstanceCommand;
async function serializeAws_json1_1UpdateDevicePoolCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.UpdateDevicePool";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateDevicePoolRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateDevicePoolCommand = serializeAws_json1_1UpdateDevicePoolCommand;
async function serializeAws_json1_1UpdateInstanceProfileCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.UpdateInstanceProfile";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateInstanceProfileRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateInstanceProfileCommand = serializeAws_json1_1UpdateInstanceProfileCommand;
async function serializeAws_json1_1UpdateNetworkProfileCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.UpdateNetworkProfile";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateNetworkProfileRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateNetworkProfileCommand = serializeAws_json1_1UpdateNetworkProfileCommand;
async function serializeAws_json1_1UpdateProjectCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.UpdateProject";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateProjectRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateProjectCommand = serializeAws_json1_1UpdateProjectCommand;
async function serializeAws_json1_1UpdateTestGridProjectCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.UpdateTestGridProject";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateTestGridProjectRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateTestGridProjectCommand = serializeAws_json1_1UpdateTestGridProjectCommand;
async function serializeAws_json1_1UpdateUploadCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.UpdateUpload";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateUploadRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateUploadCommand = serializeAws_json1_1UpdateUploadCommand;
async function serializeAws_json1_1UpdateVPCEConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DeviceFarm_20150623.UpdateVPCEConfiguration";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateVPCEConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateVPCEConfigurationCommand = serializeAws_json1_1UpdateVPCEConfigurationCommand;
async function deserializeAws_json1_1CreateDevicePoolCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateDevicePoolCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateDevicePoolResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateDevicePoolResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateDevicePoolCommand = deserializeAws_json1_1CreateDevicePoolCommand;
async function deserializeAws_json1_1CreateDevicePoolCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.devicefarm.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateInstanceProfileCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateInstanceProfileCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateInstanceProfileResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateInstanceProfileResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateInstanceProfileCommand = deserializeAws_json1_1CreateInstanceProfileCommand;
async function deserializeAws_json1_1CreateInstanceProfileCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.devicefarm.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateNetworkProfileCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateNetworkProfileCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateNetworkProfileResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateNetworkProfileResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateNetworkProfileCommand = deserializeAws_json1_1CreateNetworkProfileCommand;
async function deserializeAws_json1_1CreateNetworkProfileCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.devicefarm.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateProjectCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateProjectCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateProjectResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateProjectResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateProjectCommand = deserializeAws_json1_1CreateProjectCommand;
async function deserializeAws_json1_1CreateProjectCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.devicefarm.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagOperationException":
        case "com.amazon.devicefarm.model#TagOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TagOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateRemoteAccessSessionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateRemoteAccessSessionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateRemoteAccessSessionResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateRemoteAccessSessionResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateRemoteAccessSessionCommand = deserializeAws_json1_1CreateRemoteAccessSessionCommand;
async function deserializeAws_json1_1CreateRemoteAccessSessionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.devicefarm.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateTestGridProjectCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateTestGridProjectCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateTestGridProjectResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateTestGridProjectResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateTestGridProjectCommand = deserializeAws_json1_1CreateTestGridProjectCommand;
async function deserializeAws_json1_1CreateTestGridProjectCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazon.devicefarm.model#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateTestGridUrlCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateTestGridUrlCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateTestGridUrlResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateTestGridUrlResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateTestGridUrlCommand = deserializeAws_json1_1CreateTestGridUrlCommand;
async function deserializeAws_json1_1CreateTestGridUrlCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazon.devicefarm.model#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateUploadCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateUploadCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateUploadResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateUploadResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateUploadCommand = deserializeAws_json1_1CreateUploadCommand;
async function deserializeAws_json1_1CreateUploadCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.devicefarm.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateVPCEConfigurationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateVPCEConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateVPCEConfigurationResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateVPCEConfigurationResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateVPCEConfigurationCommand = deserializeAws_json1_1CreateVPCEConfigurationCommand;
async function deserializeAws_json1_1CreateVPCEConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.devicefarm.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteDevicePoolCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteDevicePoolCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteDevicePoolResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteDevicePoolResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteDevicePoolCommand = deserializeAws_json1_1DeleteDevicePoolCommand;
async function deserializeAws_json1_1DeleteDevicePoolCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.devicefarm.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteInstanceProfileCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteInstanceProfileCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteInstanceProfileResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteInstanceProfileResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteInstanceProfileCommand = deserializeAws_json1_1DeleteInstanceProfileCommand;
async function deserializeAws_json1_1DeleteInstanceProfileCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.devicefarm.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteNetworkProfileCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteNetworkProfileCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteNetworkProfileResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteNetworkProfileResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteNetworkProfileCommand = deserializeAws_json1_1DeleteNetworkProfileCommand;
async function deserializeAws_json1_1DeleteNetworkProfileCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.devicefarm.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteProjectCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteProjectCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteProjectResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteProjectResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteProjectCommand = deserializeAws_json1_1DeleteProjectCommand;
async function deserializeAws_json1_1DeleteProjectCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.devicefarm.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteRemoteAccessSessionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteRemoteAccessSessionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteRemoteAccessSessionResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteRemoteAccessSessionResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteRemoteAccessSessionCommand = deserializeAws_json1_1DeleteRemoteAccessSessionCommand;
async function deserializeAws_json1_1DeleteRemoteAccessSessionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.devicefarm.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteRunCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteRunCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteRunResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteRunResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteRunCommand = deserializeAws_json1_1DeleteRunCommand;
async function deserializeAws_json1_1DeleteRunCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.devicefarm.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteTestGridProjectCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteTestGridProjectCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteTestGridProjectResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteTestGridProjectResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteTestGridProjectCommand = deserializeAws_json1_1DeleteTestGridProjectCommand;
async function deserializeAws_json1_1DeleteTestGridProjectCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CannotDeleteException":
        case "com.amazon.devicefarm.model#CannotDeleteException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CannotDeleteExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazon.devicefarm.model#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteUploadCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteUploadCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteUploadResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteUploadResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteUploadCommand = deserializeAws_json1_1DeleteUploadCommand;
async function deserializeAws_json1_1DeleteUploadCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.devicefarm.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteVPCEConfigurationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteVPCEConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteVPCEConfigurationResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteVPCEConfigurationResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteVPCEConfigurationCommand = deserializeAws_json1_1DeleteVPCEConfigurationCommand;
async function deserializeAws_json1_1DeleteVPCEConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidOperationException":
        case "com.amazon.devicefarm.model#InvalidOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetAccountSettingsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetAccountSettingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetAccountSettingsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetAccountSettingsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetAccountSettingsCommand = deserializeAws_json1_1GetAccountSettingsCommand;
async function deserializeAws_json1_1GetAccountSettingsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.devicefarm.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetDeviceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetDeviceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDeviceResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetDeviceResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetDeviceCommand = deserializeAws_json1_1GetDeviceCommand;
async function deserializeAws_json1_1GetDeviceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.devicefarm.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetDeviceInstanceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetDeviceInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDeviceInstanceResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetDeviceInstanceResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetDeviceInstanceCommand = deserializeAws_json1_1GetDeviceInstanceCommand;
async function deserializeAws_json1_1GetDeviceInstanceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.devicefarm.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetDevicePoolCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetDevicePoolCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDevicePoolResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetDevicePoolResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetDevicePoolCommand = deserializeAws_json1_1GetDevicePoolCommand;
async function deserializeAws_json1_1GetDevicePoolCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.devicefarm.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetDevicePoolCompatibilityCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetDevicePoolCompatibilityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDevicePoolCompatibilityResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetDevicePoolCompatibilityResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetDevicePoolCompatibilityCommand = deserializeAws_json1_1GetDevicePoolCompatibilityCommand;
async function deserializeAws_json1_1GetDevicePoolCompatibilityCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.devicefarm.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetInstanceProfileCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetInstanceProfileCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetInstanceProfileResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetInstanceProfileResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetInstanceProfileCommand = deserializeAws_json1_1GetInstanceProfileCommand;
async function deserializeAws_json1_1GetInstanceProfileCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.devicefarm.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetJobResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetJobResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetJobCommand = deserializeAws_json1_1GetJobCommand;
async function deserializeAws_json1_1GetJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.devicefarm.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetNetworkProfileCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetNetworkProfileCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetNetworkProfileResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetNetworkProfileResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetNetworkProfileCommand = deserializeAws_json1_1GetNetworkProfileCommand;
async function deserializeAws_json1_1GetNetworkProfileCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.devicefarm.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetOfferingStatusCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetOfferingStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetOfferingStatusResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetOfferingStatusResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetOfferingStatusCommand = deserializeAws_json1_1GetOfferingStatusCommand;
async function deserializeAws_json1_1GetOfferingStatusCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.devicefarm.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotEligibleException":
        case "com.amazon.devicefarm.model#NotEligibleException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotEligibleExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetProjectCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetProjectCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetProjectResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetProjectResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetProjectCommand = deserializeAws_json1_1GetProjectCommand;
async function deserializeAws_json1_1GetProjectCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.devicefarm.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetRemoteAccessSessionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetRemoteAccessSessionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRemoteAccessSessionResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetRemoteAccessSessionResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetRemoteAccessSessionCommand = deserializeAws_json1_1GetRemoteAccessSessionCommand;
async function deserializeAws_json1_1GetRemoteAccessSessionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.devicefarm.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetRunCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetRunCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRunResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetRunResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetRunCommand = deserializeAws_json1_1GetRunCommand;
async function deserializeAws_json1_1GetRunCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.devicefarm.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetSuiteCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetSuiteCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetSuiteResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetSuiteResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetSuiteCommand = deserializeAws_json1_1GetSuiteCommand;
async function deserializeAws_json1_1GetSuiteCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.devicefarm.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetTestCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetTestCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetTestResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetTestResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetTestCommand = deserializeAws_json1_1GetTestCommand;
async function deserializeAws_json1_1GetTestCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.devicefarm.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetTestGridProjectCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetTestGridProjectCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetTestGridProjectResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetTestGridProjectResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetTestGridProjectCommand = deserializeAws_json1_1GetTestGridProjectCommand;
async function deserializeAws_json1_1GetTestGridProjectCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazon.devicefarm.model#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetTestGridSessionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetTestGridSessionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetTestGridSessionResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetTestGridSessionResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetTestGridSessionCommand = deserializeAws_json1_1GetTestGridSessionCommand;
async function deserializeAws_json1_1GetTestGridSessionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazon.devicefarm.model#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetUploadCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetUploadCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetUploadResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetUploadResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetUploadCommand = deserializeAws_json1_1GetUploadCommand;
async function deserializeAws_json1_1GetUploadCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.devicefarm.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetVPCEConfigurationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetVPCEConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetVPCEConfigurationResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetVPCEConfigurationResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetVPCEConfigurationCommand = deserializeAws_json1_1GetVPCEConfigurationCommand;
async function deserializeAws_json1_1GetVPCEConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1InstallToRemoteAccessSessionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1InstallToRemoteAccessSessionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1InstallToRemoteAccessSessionResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "InstallToRemoteAccessSessionResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1InstallToRemoteAccessSessionCommand = deserializeAws_json1_1InstallToRemoteAccessSessionCommand;
async function deserializeAws_json1_1InstallToRemoteAccessSessionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.devicefarm.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListArtifactsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListArtifactsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListArtifactsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListArtifactsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListArtifactsCommand = deserializeAws_json1_1ListArtifactsCommand;
async function deserializeAws_json1_1ListArtifactsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.devicefarm.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListDeviceInstancesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListDeviceInstancesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListDeviceInstancesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListDeviceInstancesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListDeviceInstancesCommand = deserializeAws_json1_1ListDeviceInstancesCommand;
async function deserializeAws_json1_1ListDeviceInstancesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.devicefarm.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListDevicePoolsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListDevicePoolsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListDevicePoolsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListDevicePoolsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListDevicePoolsCommand = deserializeAws_json1_1ListDevicePoolsCommand;
async function deserializeAws_json1_1ListDevicePoolsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.devicefarm.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListDevicesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListDevicesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListDevicesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListDevicesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListDevicesCommand = deserializeAws_json1_1ListDevicesCommand;
async function deserializeAws_json1_1ListDevicesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.devicefarm.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListInstanceProfilesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListInstanceProfilesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListInstanceProfilesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListInstanceProfilesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListInstanceProfilesCommand = deserializeAws_json1_1ListInstanceProfilesCommand;
async function deserializeAws_json1_1ListInstanceProfilesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.devicefarm.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListJobsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListJobsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListJobsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListJobsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListJobsCommand = deserializeAws_json1_1ListJobsCommand;
async function deserializeAws_json1_1ListJobsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.devicefarm.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListNetworkProfilesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListNetworkProfilesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListNetworkProfilesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListNetworkProfilesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListNetworkProfilesCommand = deserializeAws_json1_1ListNetworkProfilesCommand;
async function deserializeAws_json1_1ListNetworkProfilesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.devicefarm.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListOfferingPromotionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListOfferingPromotionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListOfferingPromotionsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListOfferingPromotionsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListOfferingPromotionsCommand = deserializeAws_json1_1ListOfferingPromotionsCommand;
async function deserializeAws_json1_1ListOfferingPromotionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.devicefarm.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotEligibleException":
        case "com.amazon.devicefarm.model#NotEligibleException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotEligibleExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListOfferingTransactionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListOfferingTransactionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListOfferingTransactionsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListOfferingTransactionsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListOfferingTransactionsCommand = deserializeAws_json1_1ListOfferingTransactionsCommand;
async function deserializeAws_json1_1ListOfferingTransactionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.devicefarm.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotEligibleException":
        case "com.amazon.devicefarm.model#NotEligibleException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotEligibleExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListOfferingsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListOfferingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListOfferingsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListOfferingsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListOfferingsCommand = deserializeAws_json1_1ListOfferingsCommand;
async function deserializeAws_json1_1ListOfferingsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.devicefarm.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotEligibleException":
        case "com.amazon.devicefarm.model#NotEligibleException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotEligibleExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListProjectsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListProjectsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListProjectsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListProjectsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListProjectsCommand = deserializeAws_json1_1ListProjectsCommand;
async function deserializeAws_json1_1ListProjectsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.devicefarm.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListRemoteAccessSessionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListRemoteAccessSessionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListRemoteAccessSessionsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListRemoteAccessSessionsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListRemoteAccessSessionsCommand = deserializeAws_json1_1ListRemoteAccessSessionsCommand;
async function deserializeAws_json1_1ListRemoteAccessSessionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.devicefarm.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListRunsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListRunsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListRunsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListRunsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListRunsCommand = deserializeAws_json1_1ListRunsCommand;
async function deserializeAws_json1_1ListRunsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.devicefarm.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListSamplesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListSamplesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListSamplesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListSamplesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListSamplesCommand = deserializeAws_json1_1ListSamplesCommand;
async function deserializeAws_json1_1ListSamplesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.devicefarm.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListSuitesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListSuitesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListSuitesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListSuitesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListSuitesCommand = deserializeAws_json1_1ListSuitesCommand;
async function deserializeAws_json1_1ListSuitesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.devicefarm.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
    contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListTagsForResourceResponse" }, contents);
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
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagOperationException":
        case "com.amazon.devicefarm.model#TagOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TagOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListTestGridProjectsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListTestGridProjectsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTestGridProjectsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListTestGridProjectsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListTestGridProjectsCommand = deserializeAws_json1_1ListTestGridProjectsCommand;
async function deserializeAws_json1_1ListTestGridProjectsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazon.devicefarm.model#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListTestGridSessionActionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListTestGridSessionActionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTestGridSessionActionsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListTestGridSessionActionsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListTestGridSessionActionsCommand = deserializeAws_json1_1ListTestGridSessionActionsCommand;
async function deserializeAws_json1_1ListTestGridSessionActionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazon.devicefarm.model#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListTestGridSessionArtifactsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListTestGridSessionArtifactsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTestGridSessionArtifactsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListTestGridSessionArtifactsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListTestGridSessionArtifactsCommand = deserializeAws_json1_1ListTestGridSessionArtifactsCommand;
async function deserializeAws_json1_1ListTestGridSessionArtifactsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazon.devicefarm.model#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListTestGridSessionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListTestGridSessionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTestGridSessionsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListTestGridSessionsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListTestGridSessionsCommand = deserializeAws_json1_1ListTestGridSessionsCommand;
async function deserializeAws_json1_1ListTestGridSessionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazon.devicefarm.model#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListTestsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListTestsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTestsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListTestsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListTestsCommand = deserializeAws_json1_1ListTestsCommand;
async function deserializeAws_json1_1ListTestsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.devicefarm.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListUniqueProblemsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListUniqueProblemsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListUniqueProblemsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListUniqueProblemsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListUniqueProblemsCommand = deserializeAws_json1_1ListUniqueProblemsCommand;
async function deserializeAws_json1_1ListUniqueProblemsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.devicefarm.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListUploadsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListUploadsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListUploadsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListUploadsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListUploadsCommand = deserializeAws_json1_1ListUploadsCommand;
async function deserializeAws_json1_1ListUploadsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.devicefarm.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListVPCEConfigurationsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListVPCEConfigurationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListVPCEConfigurationsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListVPCEConfigurationsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListVPCEConfigurationsCommand = deserializeAws_json1_1ListVPCEConfigurationsCommand;
async function deserializeAws_json1_1ListVPCEConfigurationsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1PurchaseOfferingCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PurchaseOfferingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PurchaseOfferingResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PurchaseOfferingResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PurchaseOfferingCommand = deserializeAws_json1_1PurchaseOfferingCommand;
async function deserializeAws_json1_1PurchaseOfferingCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.devicefarm.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotEligibleException":
        case "com.amazon.devicefarm.model#NotEligibleException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotEligibleExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1RenewOfferingCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RenewOfferingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RenewOfferingResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RenewOfferingResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RenewOfferingCommand = deserializeAws_json1_1RenewOfferingCommand;
async function deserializeAws_json1_1RenewOfferingCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.devicefarm.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotEligibleException":
        case "com.amazon.devicefarm.model#NotEligibleException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotEligibleExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ScheduleRunCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ScheduleRunCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ScheduleRunResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ScheduleRunResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ScheduleRunCommand = deserializeAws_json1_1ScheduleRunCommand;
async function deserializeAws_json1_1ScheduleRunCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IdempotencyException":
        case "com.amazon.devicefarm.model#IdempotencyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IdempotencyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.devicefarm.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StopJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StopJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopJobResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StopJobResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StopJobCommand = deserializeAws_json1_1StopJobCommand;
async function deserializeAws_json1_1StopJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.devicefarm.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StopRemoteAccessSessionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StopRemoteAccessSessionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopRemoteAccessSessionResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StopRemoteAccessSessionResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StopRemoteAccessSessionCommand = deserializeAws_json1_1StopRemoteAccessSessionCommand;
async function deserializeAws_json1_1StopRemoteAccessSessionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.devicefarm.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StopRunCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StopRunCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopRunResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StopRunResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StopRunCommand = deserializeAws_json1_1StopRunCommand;
async function deserializeAws_json1_1StopRunCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.devicefarm.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1TagResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1TagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1TagResourceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "TagResourceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1TagResourceCommand = deserializeAws_json1_1TagResourceCommand;
async function deserializeAws_json1_1TagResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagOperationException":
        case "com.amazon.devicefarm.model#TagOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TagOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagPolicyException":
        case "com.amazon.devicefarm.model#TagPolicyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TagPolicyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTagsException":
        case "com.amazon.devicefarm.model#TooManyTagsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UntagResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UntagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UntagResourceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UntagResourceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UntagResourceCommand = deserializeAws_json1_1UntagResourceCommand;
async function deserializeAws_json1_1UntagResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagOperationException":
        case "com.amazon.devicefarm.model#TagOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TagOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateDeviceInstanceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateDeviceInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateDeviceInstanceResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateDeviceInstanceResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateDeviceInstanceCommand = deserializeAws_json1_1UpdateDeviceInstanceCommand;
async function deserializeAws_json1_1UpdateDeviceInstanceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.devicefarm.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateDevicePoolCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateDevicePoolCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateDevicePoolResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateDevicePoolResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateDevicePoolCommand = deserializeAws_json1_1UpdateDevicePoolCommand;
async function deserializeAws_json1_1UpdateDevicePoolCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.devicefarm.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateInstanceProfileCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateInstanceProfileCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateInstanceProfileResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateInstanceProfileResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateInstanceProfileCommand = deserializeAws_json1_1UpdateInstanceProfileCommand;
async function deserializeAws_json1_1UpdateInstanceProfileCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.devicefarm.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateNetworkProfileCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateNetworkProfileCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateNetworkProfileResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateNetworkProfileResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateNetworkProfileCommand = deserializeAws_json1_1UpdateNetworkProfileCommand;
async function deserializeAws_json1_1UpdateNetworkProfileCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.devicefarm.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateProjectCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateProjectCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateProjectResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateProjectResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateProjectCommand = deserializeAws_json1_1UpdateProjectCommand;
async function deserializeAws_json1_1UpdateProjectCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.devicefarm.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateTestGridProjectCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateTestGridProjectCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateTestGridProjectResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateTestGridProjectResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateTestGridProjectCommand = deserializeAws_json1_1UpdateTestGridProjectCommand;
async function deserializeAws_json1_1UpdateTestGridProjectCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazon.devicefarm.model#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateUploadCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateUploadCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateUploadResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateUploadResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateUploadCommand = deserializeAws_json1_1UpdateUploadCommand;
async function deserializeAws_json1_1UpdateUploadCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.devicefarm.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateVPCEConfigurationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateVPCEConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateVPCEConfigurationResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateVPCEConfigurationResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateVPCEConfigurationCommand = deserializeAws_json1_1UpdateVPCEConfigurationCommand;
async function deserializeAws_json1_1UpdateVPCEConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazon.devicefarm.model#ArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidOperationException":
        case "com.amazon.devicefarm.model#InvalidOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.devicefarm.model#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceAccountException":
        case "com.amazon.devicefarm.model#ServiceAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
const deserializeAws_json1_1ArgumentExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ArgumentException(body, context);
    const contents = Object.assign({ name: "ArgumentException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1CannotDeleteExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CannotDeleteException(body, context);
    const contents = Object.assign({ name: "CannotDeleteException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1IdempotencyExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1IdempotencyException(body, context);
    const contents = Object.assign({ name: "IdempotencyException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InternalServiceExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalServiceException(body, context);
    const contents = Object.assign({ name: "InternalServiceException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidOperationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidOperationException(body, context);
    const contents = Object.assign({ name: "InvalidOperationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LimitExceededException(body, context);
    const contents = Object.assign({ name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1NotEligibleExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NotEligibleException(body, context);
    const contents = Object.assign({ name: "NotEligibleException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1NotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NotFoundException(body, context);
    const contents = Object.assign({ name: "NotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ServiceAccountExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ServiceAccountException(body, context);
    const contents = Object.assign({ name: "ServiceAccountException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TagOperationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TagOperationException(body, context);
    const contents = Object.assign({ name: "TagOperationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TagPolicyExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TagPolicyException(body, context);
    const contents = Object.assign({ name: "TagPolicyException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TooManyTagsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TooManyTagsException(body, context);
    const contents = Object.assign({ name: "TooManyTagsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1AmazonResourceNames = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1AndroidPaths = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1CreateDevicePoolRequest = (input, context) => {
    const bodyParams = {};
    if (input.description !== undefined) {
        bodyParams["description"] = input.description;
    }
    if (input.maxDevices !== undefined) {
        bodyParams["maxDevices"] = input.maxDevices;
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.projectArn !== undefined) {
        bodyParams["projectArn"] = input.projectArn;
    }
    if (input.rules !== undefined) {
        bodyParams["rules"] = serializeAws_json1_1Rules(input.rules, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateInstanceProfileRequest = (input, context) => {
    const bodyParams = {};
    if (input.description !== undefined) {
        bodyParams["description"] = input.description;
    }
    if (input.excludeAppPackagesFromCleanup !== undefined) {
        bodyParams["excludeAppPackagesFromCleanup"] = serializeAws_json1_1PackageIds(input.excludeAppPackagesFromCleanup, context);
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.packageCleanup !== undefined) {
        bodyParams["packageCleanup"] = input.packageCleanup;
    }
    if (input.rebootAfterUse !== undefined) {
        bodyParams["rebootAfterUse"] = input.rebootAfterUse;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateNetworkProfileRequest = (input, context) => {
    const bodyParams = {};
    if (input.description !== undefined) {
        bodyParams["description"] = input.description;
    }
    if (input.downlinkBandwidthBits !== undefined) {
        bodyParams["downlinkBandwidthBits"] = input.downlinkBandwidthBits;
    }
    if (input.downlinkDelayMs !== undefined) {
        bodyParams["downlinkDelayMs"] = input.downlinkDelayMs;
    }
    if (input.downlinkJitterMs !== undefined) {
        bodyParams["downlinkJitterMs"] = input.downlinkJitterMs;
    }
    if (input.downlinkLossPercent !== undefined) {
        bodyParams["downlinkLossPercent"] = input.downlinkLossPercent;
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.projectArn !== undefined) {
        bodyParams["projectArn"] = input.projectArn;
    }
    if (input.type !== undefined) {
        bodyParams["type"] = input.type;
    }
    if (input.uplinkBandwidthBits !== undefined) {
        bodyParams["uplinkBandwidthBits"] = input.uplinkBandwidthBits;
    }
    if (input.uplinkDelayMs !== undefined) {
        bodyParams["uplinkDelayMs"] = input.uplinkDelayMs;
    }
    if (input.uplinkJitterMs !== undefined) {
        bodyParams["uplinkJitterMs"] = input.uplinkJitterMs;
    }
    if (input.uplinkLossPercent !== undefined) {
        bodyParams["uplinkLossPercent"] = input.uplinkLossPercent;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateProjectRequest = (input, context) => {
    const bodyParams = {};
    if (input.defaultJobTimeoutMinutes !== undefined) {
        bodyParams["defaultJobTimeoutMinutes"] = input.defaultJobTimeoutMinutes;
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateRemoteAccessSessionConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.billingMethod !== undefined) {
        bodyParams["billingMethod"] = input.billingMethod;
    }
    if (input.vpceConfigurationArns !== undefined) {
        bodyParams["vpceConfigurationArns"] = serializeAws_json1_1AmazonResourceNames(input.vpceConfigurationArns, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateRemoteAccessSessionRequest = (input, context) => {
    const bodyParams = {};
    if (input.clientId !== undefined) {
        bodyParams["clientId"] = input.clientId;
    }
    if (input.configuration !== undefined) {
        bodyParams["configuration"] = serializeAws_json1_1CreateRemoteAccessSessionConfiguration(input.configuration, context);
    }
    if (input.deviceArn !== undefined) {
        bodyParams["deviceArn"] = input.deviceArn;
    }
    if (input.instanceArn !== undefined) {
        bodyParams["instanceArn"] = input.instanceArn;
    }
    if (input.interactionMode !== undefined) {
        bodyParams["interactionMode"] = input.interactionMode;
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.projectArn !== undefined) {
        bodyParams["projectArn"] = input.projectArn;
    }
    if (input.remoteDebugEnabled !== undefined) {
        bodyParams["remoteDebugEnabled"] = input.remoteDebugEnabled;
    }
    if (input.remoteRecordAppArn !== undefined) {
        bodyParams["remoteRecordAppArn"] = input.remoteRecordAppArn;
    }
    if (input.remoteRecordEnabled !== undefined) {
        bodyParams["remoteRecordEnabled"] = input.remoteRecordEnabled;
    }
    if (input.skipAppResign !== undefined) {
        bodyParams["skipAppResign"] = input.skipAppResign;
    }
    if (input.sshPublicKey !== undefined) {
        bodyParams["sshPublicKey"] = input.sshPublicKey;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateTestGridProjectRequest = (input, context) => {
    const bodyParams = {};
    if (input.description !== undefined) {
        bodyParams["description"] = input.description;
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateTestGridUrlRequest = (input, context) => {
    const bodyParams = {};
    if (input.expiresInSeconds !== undefined) {
        bodyParams["expiresInSeconds"] = input.expiresInSeconds;
    }
    if (input.projectArn !== undefined) {
        bodyParams["projectArn"] = input.projectArn;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateUploadRequest = (input, context) => {
    const bodyParams = {};
    if (input.contentType !== undefined) {
        bodyParams["contentType"] = input.contentType;
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.projectArn !== undefined) {
        bodyParams["projectArn"] = input.projectArn;
    }
    if (input.type !== undefined) {
        bodyParams["type"] = input.type;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateVPCEConfigurationRequest = (input, context) => {
    const bodyParams = {};
    if (input.serviceDnsName !== undefined) {
        bodyParams["serviceDnsName"] = input.serviceDnsName;
    }
    if (input.vpceConfigurationDescription !== undefined) {
        bodyParams["vpceConfigurationDescription"] =
            input.vpceConfigurationDescription;
    }
    if (input.vpceConfigurationName !== undefined) {
        bodyParams["vpceConfigurationName"] = input.vpceConfigurationName;
    }
    if (input.vpceServiceName !== undefined) {
        bodyParams["vpceServiceName"] = input.vpceServiceName;
    }
    return bodyParams;
};
const serializeAws_json1_1CustomerArtifactPaths = (input, context) => {
    const bodyParams = {};
    if (input.androidPaths !== undefined) {
        bodyParams["androidPaths"] = serializeAws_json1_1AndroidPaths(input.androidPaths, context);
    }
    if (input.deviceHostPaths !== undefined) {
        bodyParams["deviceHostPaths"] = serializeAws_json1_1DeviceHostPaths(input.deviceHostPaths, context);
    }
    if (input.iosPaths !== undefined) {
        bodyParams["iosPaths"] = serializeAws_json1_1IosPaths(input.iosPaths, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteDevicePoolRequest = (input, context) => {
    const bodyParams = {};
    if (input.arn !== undefined) {
        bodyParams["arn"] = input.arn;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteInstanceProfileRequest = (input, context) => {
    const bodyParams = {};
    if (input.arn !== undefined) {
        bodyParams["arn"] = input.arn;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteNetworkProfileRequest = (input, context) => {
    const bodyParams = {};
    if (input.arn !== undefined) {
        bodyParams["arn"] = input.arn;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteProjectRequest = (input, context) => {
    const bodyParams = {};
    if (input.arn !== undefined) {
        bodyParams["arn"] = input.arn;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteRemoteAccessSessionRequest = (input, context) => {
    const bodyParams = {};
    if (input.arn !== undefined) {
        bodyParams["arn"] = input.arn;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteRunRequest = (input, context) => {
    const bodyParams = {};
    if (input.arn !== undefined) {
        bodyParams["arn"] = input.arn;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteTestGridProjectRequest = (input, context) => {
    const bodyParams = {};
    if (input.projectArn !== undefined) {
        bodyParams["projectArn"] = input.projectArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteUploadRequest = (input, context) => {
    const bodyParams = {};
    if (input.arn !== undefined) {
        bodyParams["arn"] = input.arn;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteVPCEConfigurationRequest = (input, context) => {
    const bodyParams = {};
    if (input.arn !== undefined) {
        bodyParams["arn"] = input.arn;
    }
    return bodyParams;
};
const serializeAws_json1_1DeviceFilter = (input, context) => {
    const bodyParams = {};
    if (input.attribute !== undefined) {
        bodyParams["attribute"] = input.attribute;
    }
    if (input.operator !== undefined) {
        bodyParams["operator"] = input.operator;
    }
    if (input.values !== undefined) {
        bodyParams["values"] = serializeAws_json1_1DeviceFilterValues(input.values, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DeviceFilterValues = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1DeviceFilters = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1DeviceFilter(entry, context));
    }
    return contents;
};
const serializeAws_json1_1DeviceHostPaths = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1DeviceSelectionConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.filters !== undefined) {
        bodyParams["filters"] = serializeAws_json1_1DeviceFilters(input.filters, context);
    }
    if (input.maxDevices !== undefined) {
        bodyParams["maxDevices"] = input.maxDevices;
    }
    return bodyParams;
};
const serializeAws_json1_1ExecutionConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.accountsCleanup !== undefined) {
        bodyParams["accountsCleanup"] = input.accountsCleanup;
    }
    if (input.appPackagesCleanup !== undefined) {
        bodyParams["appPackagesCleanup"] = input.appPackagesCleanup;
    }
    if (input.jobTimeoutMinutes !== undefined) {
        bodyParams["jobTimeoutMinutes"] = input.jobTimeoutMinutes;
    }
    if (input.skipAppResign !== undefined) {
        bodyParams["skipAppResign"] = input.skipAppResign;
    }
    if (input.videoCapture !== undefined) {
        bodyParams["videoCapture"] = input.videoCapture;
    }
    return bodyParams;
};
const serializeAws_json1_1GetAccountSettingsRequest = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_1GetDeviceInstanceRequest = (input, context) => {
    const bodyParams = {};
    if (input.arn !== undefined) {
        bodyParams["arn"] = input.arn;
    }
    return bodyParams;
};
const serializeAws_json1_1GetDevicePoolCompatibilityRequest = (input, context) => {
    const bodyParams = {};
    if (input.appArn !== undefined) {
        bodyParams["appArn"] = input.appArn;
    }
    if (input.configuration !== undefined) {
        bodyParams["configuration"] = serializeAws_json1_1ScheduleRunConfiguration(input.configuration, context);
    }
    if (input.devicePoolArn !== undefined) {
        bodyParams["devicePoolArn"] = input.devicePoolArn;
    }
    if (input.test !== undefined) {
        bodyParams["test"] = serializeAws_json1_1ScheduleRunTest(input.test, context);
    }
    if (input.testType !== undefined) {
        bodyParams["testType"] = input.testType;
    }
    return bodyParams;
};
const serializeAws_json1_1GetDevicePoolRequest = (input, context) => {
    const bodyParams = {};
    if (input.arn !== undefined) {
        bodyParams["arn"] = input.arn;
    }
    return bodyParams;
};
const serializeAws_json1_1GetDeviceRequest = (input, context) => {
    const bodyParams = {};
    if (input.arn !== undefined) {
        bodyParams["arn"] = input.arn;
    }
    return bodyParams;
};
const serializeAws_json1_1GetInstanceProfileRequest = (input, context) => {
    const bodyParams = {};
    if (input.arn !== undefined) {
        bodyParams["arn"] = input.arn;
    }
    return bodyParams;
};
const serializeAws_json1_1GetJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.arn !== undefined) {
        bodyParams["arn"] = input.arn;
    }
    return bodyParams;
};
const serializeAws_json1_1GetNetworkProfileRequest = (input, context) => {
    const bodyParams = {};
    if (input.arn !== undefined) {
        bodyParams["arn"] = input.arn;
    }
    return bodyParams;
};
const serializeAws_json1_1GetOfferingStatusRequest = (input, context) => {
    const bodyParams = {};
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1GetProjectRequest = (input, context) => {
    const bodyParams = {};
    if (input.arn !== undefined) {
        bodyParams["arn"] = input.arn;
    }
    return bodyParams;
};
const serializeAws_json1_1GetRemoteAccessSessionRequest = (input, context) => {
    const bodyParams = {};
    if (input.arn !== undefined) {
        bodyParams["arn"] = input.arn;
    }
    return bodyParams;
};
const serializeAws_json1_1GetRunRequest = (input, context) => {
    const bodyParams = {};
    if (input.arn !== undefined) {
        bodyParams["arn"] = input.arn;
    }
    return bodyParams;
};
const serializeAws_json1_1GetSuiteRequest = (input, context) => {
    const bodyParams = {};
    if (input.arn !== undefined) {
        bodyParams["arn"] = input.arn;
    }
    return bodyParams;
};
const serializeAws_json1_1GetTestGridProjectRequest = (input, context) => {
    const bodyParams = {};
    if (input.projectArn !== undefined) {
        bodyParams["projectArn"] = input.projectArn;
    }
    return bodyParams;
};
const serializeAws_json1_1GetTestGridSessionRequest = (input, context) => {
    const bodyParams = {};
    if (input.projectArn !== undefined) {
        bodyParams["projectArn"] = input.projectArn;
    }
    if (input.sessionArn !== undefined) {
        bodyParams["sessionArn"] = input.sessionArn;
    }
    if (input.sessionId !== undefined) {
        bodyParams["sessionId"] = input.sessionId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetTestRequest = (input, context) => {
    const bodyParams = {};
    if (input.arn !== undefined) {
        bodyParams["arn"] = input.arn;
    }
    return bodyParams;
};
const serializeAws_json1_1GetUploadRequest = (input, context) => {
    const bodyParams = {};
    if (input.arn !== undefined) {
        bodyParams["arn"] = input.arn;
    }
    return bodyParams;
};
const serializeAws_json1_1GetVPCEConfigurationRequest = (input, context) => {
    const bodyParams = {};
    if (input.arn !== undefined) {
        bodyParams["arn"] = input.arn;
    }
    return bodyParams;
};
const serializeAws_json1_1InstallToRemoteAccessSessionRequest = (input, context) => {
    const bodyParams = {};
    if (input.appArn !== undefined) {
        bodyParams["appArn"] = input.appArn;
    }
    if (input.remoteAccessSessionArn !== undefined) {
        bodyParams["remoteAccessSessionArn"] = input.remoteAccessSessionArn;
    }
    return bodyParams;
};
const serializeAws_json1_1InstanceLabels = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1IosPaths = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ListArtifactsRequest = (input, context) => {
    const bodyParams = {};
    if (input.arn !== undefined) {
        bodyParams["arn"] = input.arn;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.type !== undefined) {
        bodyParams["type"] = input.type;
    }
    return bodyParams;
};
const serializeAws_json1_1ListDeviceInstancesRequest = (input, context) => {
    const bodyParams = {};
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListDevicePoolsRequest = (input, context) => {
    const bodyParams = {};
    if (input.arn !== undefined) {
        bodyParams["arn"] = input.arn;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.type !== undefined) {
        bodyParams["type"] = input.type;
    }
    return bodyParams;
};
const serializeAws_json1_1ListDevicesRequest = (input, context) => {
    const bodyParams = {};
    if (input.arn !== undefined) {
        bodyParams["arn"] = input.arn;
    }
    if (input.filters !== undefined) {
        bodyParams["filters"] = serializeAws_json1_1DeviceFilters(input.filters, context);
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListInstanceProfilesRequest = (input, context) => {
    const bodyParams = {};
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListJobsRequest = (input, context) => {
    const bodyParams = {};
    if (input.arn !== undefined) {
        bodyParams["arn"] = input.arn;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListNetworkProfilesRequest = (input, context) => {
    const bodyParams = {};
    if (input.arn !== undefined) {
        bodyParams["arn"] = input.arn;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.type !== undefined) {
        bodyParams["type"] = input.type;
    }
    return bodyParams;
};
const serializeAws_json1_1ListOfferingPromotionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListOfferingTransactionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListOfferingsRequest = (input, context) => {
    const bodyParams = {};
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListProjectsRequest = (input, context) => {
    const bodyParams = {};
    if (input.arn !== undefined) {
        bodyParams["arn"] = input.arn;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListRemoteAccessSessionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.arn !== undefined) {
        bodyParams["arn"] = input.arn;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListRunsRequest = (input, context) => {
    const bodyParams = {};
    if (input.arn !== undefined) {
        bodyParams["arn"] = input.arn;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListSamplesRequest = (input, context) => {
    const bodyParams = {};
    if (input.arn !== undefined) {
        bodyParams["arn"] = input.arn;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListSuitesRequest = (input, context) => {
    const bodyParams = {};
    if (input.arn !== undefined) {
        bodyParams["arn"] = input.arn;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListTagsForResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceARN !== undefined) {
        bodyParams["ResourceARN"] = input.ResourceARN;
    }
    return bodyParams;
};
const serializeAws_json1_1ListTestGridProjectsRequest = (input, context) => {
    const bodyParams = {};
    if (input.maxResult !== undefined) {
        bodyParams["maxResult"] = input.maxResult;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListTestGridSessionActionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.maxResult !== undefined) {
        bodyParams["maxResult"] = input.maxResult;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.sessionArn !== undefined) {
        bodyParams["sessionArn"] = input.sessionArn;
    }
    return bodyParams;
};
const serializeAws_json1_1ListTestGridSessionArtifactsRequest = (input, context) => {
    const bodyParams = {};
    if (input.maxResult !== undefined) {
        bodyParams["maxResult"] = input.maxResult;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.sessionArn !== undefined) {
        bodyParams["sessionArn"] = input.sessionArn;
    }
    if (input.type !== undefined) {
        bodyParams["type"] = input.type;
    }
    return bodyParams;
};
const serializeAws_json1_1ListTestGridSessionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.creationTimeAfter !== undefined) {
        bodyParams["creationTimeAfter"] = Math.round(input.creationTimeAfter.getTime() / 1000);
    }
    if (input.creationTimeBefore !== undefined) {
        bodyParams["creationTimeBefore"] = Math.round(input.creationTimeBefore.getTime() / 1000);
    }
    if (input.endTimeAfter !== undefined) {
        bodyParams["endTimeAfter"] = Math.round(input.endTimeAfter.getTime() / 1000);
    }
    if (input.endTimeBefore !== undefined) {
        bodyParams["endTimeBefore"] = Math.round(input.endTimeBefore.getTime() / 1000);
    }
    if (input.maxResult !== undefined) {
        bodyParams["maxResult"] = input.maxResult;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.projectArn !== undefined) {
        bodyParams["projectArn"] = input.projectArn;
    }
    if (input.status !== undefined) {
        bodyParams["status"] = input.status;
    }
    return bodyParams;
};
const serializeAws_json1_1ListTestsRequest = (input, context) => {
    const bodyParams = {};
    if (input.arn !== undefined) {
        bodyParams["arn"] = input.arn;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListUniqueProblemsRequest = (input, context) => {
    const bodyParams = {};
    if (input.arn !== undefined) {
        bodyParams["arn"] = input.arn;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListUploadsRequest = (input, context) => {
    const bodyParams = {};
    if (input.arn !== undefined) {
        bodyParams["arn"] = input.arn;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.type !== undefined) {
        bodyParams["type"] = input.type;
    }
    return bodyParams;
};
const serializeAws_json1_1ListVPCEConfigurationsRequest = (input, context) => {
    const bodyParams = {};
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1Location = (input, context) => {
    const bodyParams = {};
    if (input.latitude !== undefined) {
        bodyParams["latitude"] = input.latitude;
    }
    if (input.longitude !== undefined) {
        bodyParams["longitude"] = input.longitude;
    }
    return bodyParams;
};
const serializeAws_json1_1PackageIds = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1PurchaseOfferingRequest = (input, context) => {
    const bodyParams = {};
    if (input.offeringId !== undefined) {
        bodyParams["offeringId"] = input.offeringId;
    }
    if (input.offeringPromotionId !== undefined) {
        bodyParams["offeringPromotionId"] = input.offeringPromotionId;
    }
    if (input.quantity !== undefined) {
        bodyParams["quantity"] = input.quantity;
    }
    return bodyParams;
};
const serializeAws_json1_1Radios = (input, context) => {
    const bodyParams = {};
    if (input.bluetooth !== undefined) {
        bodyParams["bluetooth"] = input.bluetooth;
    }
    if (input.gps !== undefined) {
        bodyParams["gps"] = input.gps;
    }
    if (input.nfc !== undefined) {
        bodyParams["nfc"] = input.nfc;
    }
    if (input.wifi !== undefined) {
        bodyParams["wifi"] = input.wifi;
    }
    return bodyParams;
};
const serializeAws_json1_1RenewOfferingRequest = (input, context) => {
    const bodyParams = {};
    if (input.offeringId !== undefined) {
        bodyParams["offeringId"] = input.offeringId;
    }
    if (input.quantity !== undefined) {
        bodyParams["quantity"] = input.quantity;
    }
    return bodyParams;
};
const serializeAws_json1_1Rule = (input, context) => {
    const bodyParams = {};
    if (input.attribute !== undefined) {
        bodyParams["attribute"] = input.attribute;
    }
    if (input.operator !== undefined) {
        bodyParams["operator"] = input.operator;
    }
    if (input.value !== undefined) {
        bodyParams["value"] = input.value;
    }
    return bodyParams;
};
const serializeAws_json1_1Rules = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Rule(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ScheduleRunConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.auxiliaryApps !== undefined) {
        bodyParams["auxiliaryApps"] = serializeAws_json1_1AmazonResourceNames(input.auxiliaryApps, context);
    }
    if (input.billingMethod !== undefined) {
        bodyParams["billingMethod"] = input.billingMethod;
    }
    if (input.customerArtifactPaths !== undefined) {
        bodyParams["customerArtifactPaths"] = serializeAws_json1_1CustomerArtifactPaths(input.customerArtifactPaths, context);
    }
    if (input.extraDataPackageArn !== undefined) {
        bodyParams["extraDataPackageArn"] = input.extraDataPackageArn;
    }
    if (input.locale !== undefined) {
        bodyParams["locale"] = input.locale;
    }
    if (input.location !== undefined) {
        bodyParams["location"] = serializeAws_json1_1Location(input.location, context);
    }
    if (input.networkProfileArn !== undefined) {
        bodyParams["networkProfileArn"] = input.networkProfileArn;
    }
    if (input.radios !== undefined) {
        bodyParams["radios"] = serializeAws_json1_1Radios(input.radios, context);
    }
    if (input.vpceConfigurationArns !== undefined) {
        bodyParams["vpceConfigurationArns"] = serializeAws_json1_1AmazonResourceNames(input.vpceConfigurationArns, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ScheduleRunRequest = (input, context) => {
    const bodyParams = {};
    if (input.appArn !== undefined) {
        bodyParams["appArn"] = input.appArn;
    }
    if (input.configuration !== undefined) {
        bodyParams["configuration"] = serializeAws_json1_1ScheduleRunConfiguration(input.configuration, context);
    }
    if (input.devicePoolArn !== undefined) {
        bodyParams["devicePoolArn"] = input.devicePoolArn;
    }
    if (input.deviceSelectionConfiguration !== undefined) {
        bodyParams["deviceSelectionConfiguration"] = serializeAws_json1_1DeviceSelectionConfiguration(input.deviceSelectionConfiguration, context);
    }
    if (input.executionConfiguration !== undefined) {
        bodyParams["executionConfiguration"] = serializeAws_json1_1ExecutionConfiguration(input.executionConfiguration, context);
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.projectArn !== undefined) {
        bodyParams["projectArn"] = input.projectArn;
    }
    if (input.test !== undefined) {
        bodyParams["test"] = serializeAws_json1_1ScheduleRunTest(input.test, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ScheduleRunTest = (input, context) => {
    const bodyParams = {};
    if (input.filter !== undefined) {
        bodyParams["filter"] = input.filter;
    }
    if (input.parameters !== undefined) {
        bodyParams["parameters"] = serializeAws_json1_1TestParameters(input.parameters, context);
    }
    if (input.testPackageArn !== undefined) {
        bodyParams["testPackageArn"] = input.testPackageArn;
    }
    if (input.testSpecArn !== undefined) {
        bodyParams["testSpecArn"] = input.testSpecArn;
    }
    if (input.type !== undefined) {
        bodyParams["type"] = input.type;
    }
    return bodyParams;
};
const serializeAws_json1_1StopJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.arn !== undefined) {
        bodyParams["arn"] = input.arn;
    }
    return bodyParams;
};
const serializeAws_json1_1StopRemoteAccessSessionRequest = (input, context) => {
    const bodyParams = {};
    if (input.arn !== undefined) {
        bodyParams["arn"] = input.arn;
    }
    return bodyParams;
};
const serializeAws_json1_1StopRunRequest = (input, context) => {
    const bodyParams = {};
    if (input.arn !== undefined) {
        bodyParams["arn"] = input.arn;
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
const serializeAws_json1_1TagKeyList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1TagList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Tag(entry, context));
    }
    return contents;
};
const serializeAws_json1_1TagResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceARN !== undefined) {
        bodyParams["ResourceARN"] = input.ResourceARN;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1TestParameters = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceARN !== undefined) {
        bodyParams["ResourceARN"] = input.ResourceARN;
    }
    if (input.TagKeys !== undefined) {
        bodyParams["TagKeys"] = serializeAws_json1_1TagKeyList(input.TagKeys, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateDeviceInstanceRequest = (input, context) => {
    const bodyParams = {};
    if (input.arn !== undefined) {
        bodyParams["arn"] = input.arn;
    }
    if (input.labels !== undefined) {
        bodyParams["labels"] = serializeAws_json1_1InstanceLabels(input.labels, context);
    }
    if (input.profileArn !== undefined) {
        bodyParams["profileArn"] = input.profileArn;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateDevicePoolRequest = (input, context) => {
    const bodyParams = {};
    if (input.arn !== undefined) {
        bodyParams["arn"] = input.arn;
    }
    if (input.clearMaxDevices !== undefined) {
        bodyParams["clearMaxDevices"] = input.clearMaxDevices;
    }
    if (input.description !== undefined) {
        bodyParams["description"] = input.description;
    }
    if (input.maxDevices !== undefined) {
        bodyParams["maxDevices"] = input.maxDevices;
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.rules !== undefined) {
        bodyParams["rules"] = serializeAws_json1_1Rules(input.rules, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateInstanceProfileRequest = (input, context) => {
    const bodyParams = {};
    if (input.arn !== undefined) {
        bodyParams["arn"] = input.arn;
    }
    if (input.description !== undefined) {
        bodyParams["description"] = input.description;
    }
    if (input.excludeAppPackagesFromCleanup !== undefined) {
        bodyParams["excludeAppPackagesFromCleanup"] = serializeAws_json1_1PackageIds(input.excludeAppPackagesFromCleanup, context);
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.packageCleanup !== undefined) {
        bodyParams["packageCleanup"] = input.packageCleanup;
    }
    if (input.rebootAfterUse !== undefined) {
        bodyParams["rebootAfterUse"] = input.rebootAfterUse;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateNetworkProfileRequest = (input, context) => {
    const bodyParams = {};
    if (input.arn !== undefined) {
        bodyParams["arn"] = input.arn;
    }
    if (input.description !== undefined) {
        bodyParams["description"] = input.description;
    }
    if (input.downlinkBandwidthBits !== undefined) {
        bodyParams["downlinkBandwidthBits"] = input.downlinkBandwidthBits;
    }
    if (input.downlinkDelayMs !== undefined) {
        bodyParams["downlinkDelayMs"] = input.downlinkDelayMs;
    }
    if (input.downlinkJitterMs !== undefined) {
        bodyParams["downlinkJitterMs"] = input.downlinkJitterMs;
    }
    if (input.downlinkLossPercent !== undefined) {
        bodyParams["downlinkLossPercent"] = input.downlinkLossPercent;
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.type !== undefined) {
        bodyParams["type"] = input.type;
    }
    if (input.uplinkBandwidthBits !== undefined) {
        bodyParams["uplinkBandwidthBits"] = input.uplinkBandwidthBits;
    }
    if (input.uplinkDelayMs !== undefined) {
        bodyParams["uplinkDelayMs"] = input.uplinkDelayMs;
    }
    if (input.uplinkJitterMs !== undefined) {
        bodyParams["uplinkJitterMs"] = input.uplinkJitterMs;
    }
    if (input.uplinkLossPercent !== undefined) {
        bodyParams["uplinkLossPercent"] = input.uplinkLossPercent;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateProjectRequest = (input, context) => {
    const bodyParams = {};
    if (input.arn !== undefined) {
        bodyParams["arn"] = input.arn;
    }
    if (input.defaultJobTimeoutMinutes !== undefined) {
        bodyParams["defaultJobTimeoutMinutes"] = input.defaultJobTimeoutMinutes;
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateTestGridProjectRequest = (input, context) => {
    const bodyParams = {};
    if (input.description !== undefined) {
        bodyParams["description"] = input.description;
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.projectArn !== undefined) {
        bodyParams["projectArn"] = input.projectArn;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateUploadRequest = (input, context) => {
    const bodyParams = {};
    if (input.arn !== undefined) {
        bodyParams["arn"] = input.arn;
    }
    if (input.contentType !== undefined) {
        bodyParams["contentType"] = input.contentType;
    }
    if (input.editContent !== undefined) {
        bodyParams["editContent"] = input.editContent;
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateVPCEConfigurationRequest = (input, context) => {
    const bodyParams = {};
    if (input.arn !== undefined) {
        bodyParams["arn"] = input.arn;
    }
    if (input.serviceDnsName !== undefined) {
        bodyParams["serviceDnsName"] = input.serviceDnsName;
    }
    if (input.vpceConfigurationDescription !== undefined) {
        bodyParams["vpceConfigurationDescription"] =
            input.vpceConfigurationDescription;
    }
    if (input.vpceConfigurationName !== undefined) {
        bodyParams["vpceConfigurationName"] = input.vpceConfigurationName;
    }
    if (input.vpceServiceName !== undefined) {
        bodyParams["vpceServiceName"] = input.vpceServiceName;
    }
    return bodyParams;
};
const deserializeAws_json1_1AccountSettings = (output, context) => {
    let contents = {
        __type: "AccountSettings",
        awsAccountNumber: undefined,
        defaultJobTimeoutMinutes: undefined,
        maxJobTimeoutMinutes: undefined,
        maxSlots: undefined,
        skipAppResign: undefined,
        trialMinutes: undefined,
        unmeteredDevices: undefined,
        unmeteredRemoteAccessDevices: undefined
    };
    if (output.awsAccountNumber !== undefined &&
        output.awsAccountNumber !== null) {
        contents.awsAccountNumber = output.awsAccountNumber;
    }
    if (output.defaultJobTimeoutMinutes !== undefined &&
        output.defaultJobTimeoutMinutes !== null) {
        contents.defaultJobTimeoutMinutes = output.defaultJobTimeoutMinutes;
    }
    if (output.maxJobTimeoutMinutes !== undefined &&
        output.maxJobTimeoutMinutes !== null) {
        contents.maxJobTimeoutMinutes = output.maxJobTimeoutMinutes;
    }
    if (output.maxSlots !== undefined && output.maxSlots !== null) {
        contents.maxSlots = deserializeAws_json1_1MaxSlotMap(output.maxSlots, context);
    }
    if (output.skipAppResign !== undefined && output.skipAppResign !== null) {
        contents.skipAppResign = output.skipAppResign;
    }
    if (output.trialMinutes !== undefined && output.trialMinutes !== null) {
        contents.trialMinutes = deserializeAws_json1_1TrialMinutes(output.trialMinutes, context);
    }
    if (output.unmeteredDevices !== undefined &&
        output.unmeteredDevices !== null) {
        contents.unmeteredDevices = deserializeAws_json1_1PurchasedDevicesMap(output.unmeteredDevices, context);
    }
    if (output.unmeteredRemoteAccessDevices !== undefined &&
        output.unmeteredRemoteAccessDevices !== null) {
        contents.unmeteredRemoteAccessDevices = deserializeAws_json1_1PurchasedDevicesMap(output.unmeteredRemoteAccessDevices, context);
    }
    return contents;
};
const deserializeAws_json1_1AndroidPaths = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1ArgumentException = (output, context) => {
    let contents = {
        __type: "ArgumentException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1Artifact = (output, context) => {
    let contents = {
        __type: "Artifact",
        arn: undefined,
        extension: undefined,
        name: undefined,
        type: undefined,
        url: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.extension !== undefined && output.extension !== null) {
        contents.extension = output.extension;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.type !== undefined && output.type !== null) {
        contents.type = output.type;
    }
    if (output.url !== undefined && output.url !== null) {
        contents.url = output.url;
    }
    return contents;
};
const deserializeAws_json1_1Artifacts = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Artifact(entry, context));
};
const deserializeAws_json1_1CPU = (output, context) => {
    let contents = {
        __type: "CPU",
        architecture: undefined,
        clock: undefined,
        frequency: undefined
    };
    if (output.architecture !== undefined && output.architecture !== null) {
        contents.architecture = output.architecture;
    }
    if (output.clock !== undefined && output.clock !== null) {
        contents.clock = output.clock;
    }
    if (output.frequency !== undefined && output.frequency !== null) {
        contents.frequency = output.frequency;
    }
    return contents;
};
const deserializeAws_json1_1CannotDeleteException = (output, context) => {
    let contents = {
        __type: "CannotDeleteException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1Counters = (output, context) => {
    let contents = {
        __type: "Counters",
        errored: undefined,
        failed: undefined,
        passed: undefined,
        skipped: undefined,
        stopped: undefined,
        total: undefined,
        warned: undefined
    };
    if (output.errored !== undefined && output.errored !== null) {
        contents.errored = output.errored;
    }
    if (output.failed !== undefined && output.failed !== null) {
        contents.failed = output.failed;
    }
    if (output.passed !== undefined && output.passed !== null) {
        contents.passed = output.passed;
    }
    if (output.skipped !== undefined && output.skipped !== null) {
        contents.skipped = output.skipped;
    }
    if (output.stopped !== undefined && output.stopped !== null) {
        contents.stopped = output.stopped;
    }
    if (output.total !== undefined && output.total !== null) {
        contents.total = output.total;
    }
    if (output.warned !== undefined && output.warned !== null) {
        contents.warned = output.warned;
    }
    return contents;
};
const deserializeAws_json1_1CreateDevicePoolResult = (output, context) => {
    let contents = {
        __type: "CreateDevicePoolResult",
        devicePool: undefined
    };
    if (output.devicePool !== undefined && output.devicePool !== null) {
        contents.devicePool = deserializeAws_json1_1DevicePool(output.devicePool, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateInstanceProfileResult = (output, context) => {
    let contents = {
        __type: "CreateInstanceProfileResult",
        instanceProfile: undefined
    };
    if (output.instanceProfile !== undefined && output.instanceProfile !== null) {
        contents.instanceProfile = deserializeAws_json1_1InstanceProfile(output.instanceProfile, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateNetworkProfileResult = (output, context) => {
    let contents = {
        __type: "CreateNetworkProfileResult",
        networkProfile: undefined
    };
    if (output.networkProfile !== undefined && output.networkProfile !== null) {
        contents.networkProfile = deserializeAws_json1_1NetworkProfile(output.networkProfile, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateProjectResult = (output, context) => {
    let contents = {
        __type: "CreateProjectResult",
        project: undefined
    };
    if (output.project !== undefined && output.project !== null) {
        contents.project = deserializeAws_json1_1Project(output.project, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateRemoteAccessSessionResult = (output, context) => {
    let contents = {
        __type: "CreateRemoteAccessSessionResult",
        remoteAccessSession: undefined
    };
    if (output.remoteAccessSession !== undefined &&
        output.remoteAccessSession !== null) {
        contents.remoteAccessSession = deserializeAws_json1_1RemoteAccessSession(output.remoteAccessSession, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateTestGridProjectResult = (output, context) => {
    let contents = {
        __type: "CreateTestGridProjectResult",
        testGridProject: undefined
    };
    if (output.testGridProject !== undefined && output.testGridProject !== null) {
        contents.testGridProject = deserializeAws_json1_1TestGridProject(output.testGridProject, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateTestGridUrlResult = (output, context) => {
    let contents = {
        __type: "CreateTestGridUrlResult",
        expires: undefined,
        url: undefined
    };
    if (output.expires !== undefined && output.expires !== null) {
        contents.expires = new Date(Math.round(output.expires * 1000));
    }
    if (output.url !== undefined && output.url !== null) {
        contents.url = output.url;
    }
    return contents;
};
const deserializeAws_json1_1CreateUploadResult = (output, context) => {
    let contents = {
        __type: "CreateUploadResult",
        upload: undefined
    };
    if (output.upload !== undefined && output.upload !== null) {
        contents.upload = deserializeAws_json1_1Upload(output.upload, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateVPCEConfigurationResult = (output, context) => {
    let contents = {
        __type: "CreateVPCEConfigurationResult",
        vpceConfiguration: undefined
    };
    if (output.vpceConfiguration !== undefined &&
        output.vpceConfiguration !== null) {
        contents.vpceConfiguration = deserializeAws_json1_1VPCEConfiguration(output.vpceConfiguration, context);
    }
    return contents;
};
const deserializeAws_json1_1CustomerArtifactPaths = (output, context) => {
    let contents = {
        __type: "CustomerArtifactPaths",
        androidPaths: undefined,
        deviceHostPaths: undefined,
        iosPaths: undefined
    };
    if (output.androidPaths !== undefined && output.androidPaths !== null) {
        contents.androidPaths = deserializeAws_json1_1AndroidPaths(output.androidPaths, context);
    }
    if (output.deviceHostPaths !== undefined && output.deviceHostPaths !== null) {
        contents.deviceHostPaths = deserializeAws_json1_1DeviceHostPaths(output.deviceHostPaths, context);
    }
    if (output.iosPaths !== undefined && output.iosPaths !== null) {
        contents.iosPaths = deserializeAws_json1_1IosPaths(output.iosPaths, context);
    }
    return contents;
};
const deserializeAws_json1_1DeleteDevicePoolResult = (output, context) => {
    let contents = {
        __type: "DeleteDevicePoolResult"
    };
    return contents;
};
const deserializeAws_json1_1DeleteInstanceProfileResult = (output, context) => {
    let contents = {
        __type: "DeleteInstanceProfileResult"
    };
    return contents;
};
const deserializeAws_json1_1DeleteNetworkProfileResult = (output, context) => {
    let contents = {
        __type: "DeleteNetworkProfileResult"
    };
    return contents;
};
const deserializeAws_json1_1DeleteProjectResult = (output, context) => {
    let contents = {
        __type: "DeleteProjectResult"
    };
    return contents;
};
const deserializeAws_json1_1DeleteRemoteAccessSessionResult = (output, context) => {
    let contents = {
        __type: "DeleteRemoteAccessSessionResult"
    };
    return contents;
};
const deserializeAws_json1_1DeleteRunResult = (output, context) => {
    let contents = {
        __type: "DeleteRunResult"
    };
    return contents;
};
const deserializeAws_json1_1DeleteTestGridProjectResult = (output, context) => {
    let contents = {
        __type: "DeleteTestGridProjectResult"
    };
    return contents;
};
const deserializeAws_json1_1DeleteUploadResult = (output, context) => {
    let contents = {
        __type: "DeleteUploadResult"
    };
    return contents;
};
const deserializeAws_json1_1DeleteVPCEConfigurationResult = (output, context) => {
    let contents = {
        __type: "DeleteVPCEConfigurationResult"
    };
    return contents;
};
const deserializeAws_json1_1Device = (output, context) => {
    let contents = {
        __type: "Device",
        arn: undefined,
        availability: undefined,
        carrier: undefined,
        cpu: undefined,
        fleetName: undefined,
        fleetType: undefined,
        formFactor: undefined,
        heapSize: undefined,
        image: undefined,
        instances: undefined,
        manufacturer: undefined,
        memory: undefined,
        model: undefined,
        modelId: undefined,
        name: undefined,
        os: undefined,
        platform: undefined,
        radio: undefined,
        remoteAccessEnabled: undefined,
        remoteDebugEnabled: undefined,
        resolution: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.availability !== undefined && output.availability !== null) {
        contents.availability = output.availability;
    }
    if (output.carrier !== undefined && output.carrier !== null) {
        contents.carrier = output.carrier;
    }
    if (output.cpu !== undefined && output.cpu !== null) {
        contents.cpu = deserializeAws_json1_1CPU(output.cpu, context);
    }
    if (output.fleetName !== undefined && output.fleetName !== null) {
        contents.fleetName = output.fleetName;
    }
    if (output.fleetType !== undefined && output.fleetType !== null) {
        contents.fleetType = output.fleetType;
    }
    if (output.formFactor !== undefined && output.formFactor !== null) {
        contents.formFactor = output.formFactor;
    }
    if (output.heapSize !== undefined && output.heapSize !== null) {
        contents.heapSize = output.heapSize;
    }
    if (output.image !== undefined && output.image !== null) {
        contents.image = output.image;
    }
    if (output.instances !== undefined && output.instances !== null) {
        contents.instances = deserializeAws_json1_1DeviceInstances(output.instances, context);
    }
    if (output.manufacturer !== undefined && output.manufacturer !== null) {
        contents.manufacturer = output.manufacturer;
    }
    if (output.memory !== undefined && output.memory !== null) {
        contents.memory = output.memory;
    }
    if (output.model !== undefined && output.model !== null) {
        contents.model = output.model;
    }
    if (output.modelId !== undefined && output.modelId !== null) {
        contents.modelId = output.modelId;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.os !== undefined && output.os !== null) {
        contents.os = output.os;
    }
    if (output.platform !== undefined && output.platform !== null) {
        contents.platform = output.platform;
    }
    if (output.radio !== undefined && output.radio !== null) {
        contents.radio = output.radio;
    }
    if (output.remoteAccessEnabled !== undefined &&
        output.remoteAccessEnabled !== null) {
        contents.remoteAccessEnabled = output.remoteAccessEnabled;
    }
    if (output.remoteDebugEnabled !== undefined &&
        output.remoteDebugEnabled !== null) {
        contents.remoteDebugEnabled = output.remoteDebugEnabled;
    }
    if (output.resolution !== undefined && output.resolution !== null) {
        contents.resolution = deserializeAws_json1_1Resolution(output.resolution, context);
    }
    return contents;
};
const deserializeAws_json1_1DeviceFilter = (output, context) => {
    let contents = {
        __type: "DeviceFilter",
        attribute: undefined,
        operator: undefined,
        values: undefined
    };
    if (output.attribute !== undefined && output.attribute !== null) {
        contents.attribute = output.attribute;
    }
    if (output.operator !== undefined && output.operator !== null) {
        contents.operator = output.operator;
    }
    if (output.values !== undefined && output.values !== null) {
        contents.values = deserializeAws_json1_1DeviceFilterValues(output.values, context);
    }
    return contents;
};
const deserializeAws_json1_1DeviceFilterValues = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1DeviceFilters = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DeviceFilter(entry, context));
};
const deserializeAws_json1_1DeviceHostPaths = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1DeviceInstance = (output, context) => {
    let contents = {
        __type: "DeviceInstance",
        arn: undefined,
        deviceArn: undefined,
        instanceProfile: undefined,
        labels: undefined,
        status: undefined,
        udid: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.deviceArn !== undefined && output.deviceArn !== null) {
        contents.deviceArn = output.deviceArn;
    }
    if (output.instanceProfile !== undefined && output.instanceProfile !== null) {
        contents.instanceProfile = deserializeAws_json1_1InstanceProfile(output.instanceProfile, context);
    }
    if (output.labels !== undefined && output.labels !== null) {
        contents.labels = deserializeAws_json1_1InstanceLabels(output.labels, context);
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    if (output.udid !== undefined && output.udid !== null) {
        contents.udid = output.udid;
    }
    return contents;
};
const deserializeAws_json1_1DeviceInstances = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DeviceInstance(entry, context));
};
const deserializeAws_json1_1DeviceMinutes = (output, context) => {
    let contents = {
        __type: "DeviceMinutes",
        metered: undefined,
        total: undefined,
        unmetered: undefined
    };
    if (output.metered !== undefined && output.metered !== null) {
        contents.metered = output.metered;
    }
    if (output.total !== undefined && output.total !== null) {
        contents.total = output.total;
    }
    if (output.unmetered !== undefined && output.unmetered !== null) {
        contents.unmetered = output.unmetered;
    }
    return contents;
};
const deserializeAws_json1_1DevicePool = (output, context) => {
    let contents = {
        __type: "DevicePool",
        arn: undefined,
        description: undefined,
        maxDevices: undefined,
        name: undefined,
        rules: undefined,
        type: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.description !== undefined && output.description !== null) {
        contents.description = output.description;
    }
    if (output.maxDevices !== undefined && output.maxDevices !== null) {
        contents.maxDevices = output.maxDevices;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.rules !== undefined && output.rules !== null) {
        contents.rules = deserializeAws_json1_1Rules(output.rules, context);
    }
    if (output.type !== undefined && output.type !== null) {
        contents.type = output.type;
    }
    return contents;
};
const deserializeAws_json1_1DevicePoolCompatibilityResult = (output, context) => {
    let contents = {
        __type: "DevicePoolCompatibilityResult",
        compatible: undefined,
        device: undefined,
        incompatibilityMessages: undefined
    };
    if (output.compatible !== undefined && output.compatible !== null) {
        contents.compatible = output.compatible;
    }
    if (output.device !== undefined && output.device !== null) {
        contents.device = deserializeAws_json1_1Device(output.device, context);
    }
    if (output.incompatibilityMessages !== undefined &&
        output.incompatibilityMessages !== null) {
        contents.incompatibilityMessages = deserializeAws_json1_1IncompatibilityMessages(output.incompatibilityMessages, context);
    }
    return contents;
};
const deserializeAws_json1_1DevicePoolCompatibilityResults = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DevicePoolCompatibilityResult(entry, context));
};
const deserializeAws_json1_1DevicePools = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DevicePool(entry, context));
};
const deserializeAws_json1_1DeviceSelectionResult = (output, context) => {
    let contents = {
        __type: "DeviceSelectionResult",
        filters: undefined,
        matchedDevicesCount: undefined,
        maxDevices: undefined
    };
    if (output.filters !== undefined && output.filters !== null) {
        contents.filters = deserializeAws_json1_1DeviceFilters(output.filters, context);
    }
    if (output.matchedDevicesCount !== undefined &&
        output.matchedDevicesCount !== null) {
        contents.matchedDevicesCount = output.matchedDevicesCount;
    }
    if (output.maxDevices !== undefined && output.maxDevices !== null) {
        contents.maxDevices = output.maxDevices;
    }
    return contents;
};
const deserializeAws_json1_1Devices = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Device(entry, context));
};
const deserializeAws_json1_1GetAccountSettingsResult = (output, context) => {
    let contents = {
        __type: "GetAccountSettingsResult",
        accountSettings: undefined
    };
    if (output.accountSettings !== undefined && output.accountSettings !== null) {
        contents.accountSettings = deserializeAws_json1_1AccountSettings(output.accountSettings, context);
    }
    return contents;
};
const deserializeAws_json1_1GetDeviceInstanceResult = (output, context) => {
    let contents = {
        __type: "GetDeviceInstanceResult",
        deviceInstance: undefined
    };
    if (output.deviceInstance !== undefined && output.deviceInstance !== null) {
        contents.deviceInstance = deserializeAws_json1_1DeviceInstance(output.deviceInstance, context);
    }
    return contents;
};
const deserializeAws_json1_1GetDevicePoolCompatibilityResult = (output, context) => {
    let contents = {
        __type: "GetDevicePoolCompatibilityResult",
        compatibleDevices: undefined,
        incompatibleDevices: undefined
    };
    if (output.compatibleDevices !== undefined &&
        output.compatibleDevices !== null) {
        contents.compatibleDevices = deserializeAws_json1_1DevicePoolCompatibilityResults(output.compatibleDevices, context);
    }
    if (output.incompatibleDevices !== undefined &&
        output.incompatibleDevices !== null) {
        contents.incompatibleDevices = deserializeAws_json1_1DevicePoolCompatibilityResults(output.incompatibleDevices, context);
    }
    return contents;
};
const deserializeAws_json1_1GetDevicePoolResult = (output, context) => {
    let contents = {
        __type: "GetDevicePoolResult",
        devicePool: undefined
    };
    if (output.devicePool !== undefined && output.devicePool !== null) {
        contents.devicePool = deserializeAws_json1_1DevicePool(output.devicePool, context);
    }
    return contents;
};
const deserializeAws_json1_1GetDeviceResult = (output, context) => {
    let contents = {
        __type: "GetDeviceResult",
        device: undefined
    };
    if (output.device !== undefined && output.device !== null) {
        contents.device = deserializeAws_json1_1Device(output.device, context);
    }
    return contents;
};
const deserializeAws_json1_1GetInstanceProfileResult = (output, context) => {
    let contents = {
        __type: "GetInstanceProfileResult",
        instanceProfile: undefined
    };
    if (output.instanceProfile !== undefined && output.instanceProfile !== null) {
        contents.instanceProfile = deserializeAws_json1_1InstanceProfile(output.instanceProfile, context);
    }
    return contents;
};
const deserializeAws_json1_1GetJobResult = (output, context) => {
    let contents = {
        __type: "GetJobResult",
        job: undefined
    };
    if (output.job !== undefined && output.job !== null) {
        contents.job = deserializeAws_json1_1Job(output.job, context);
    }
    return contents;
};
const deserializeAws_json1_1GetNetworkProfileResult = (output, context) => {
    let contents = {
        __type: "GetNetworkProfileResult",
        networkProfile: undefined
    };
    if (output.networkProfile !== undefined && output.networkProfile !== null) {
        contents.networkProfile = deserializeAws_json1_1NetworkProfile(output.networkProfile, context);
    }
    return contents;
};
const deserializeAws_json1_1GetOfferingStatusResult = (output, context) => {
    let contents = {
        __type: "GetOfferingStatusResult",
        current: undefined,
        nextPeriod: undefined,
        nextToken: undefined
    };
    if (output.current !== undefined && output.current !== null) {
        contents.current = deserializeAws_json1_1OfferingStatusMap(output.current, context);
    }
    if (output.nextPeriod !== undefined && output.nextPeriod !== null) {
        contents.nextPeriod = deserializeAws_json1_1OfferingStatusMap(output.nextPeriod, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1GetProjectResult = (output, context) => {
    let contents = {
        __type: "GetProjectResult",
        project: undefined
    };
    if (output.project !== undefined && output.project !== null) {
        contents.project = deserializeAws_json1_1Project(output.project, context);
    }
    return contents;
};
const deserializeAws_json1_1GetRemoteAccessSessionResult = (output, context) => {
    let contents = {
        __type: "GetRemoteAccessSessionResult",
        remoteAccessSession: undefined
    };
    if (output.remoteAccessSession !== undefined &&
        output.remoteAccessSession !== null) {
        contents.remoteAccessSession = deserializeAws_json1_1RemoteAccessSession(output.remoteAccessSession, context);
    }
    return contents;
};
const deserializeAws_json1_1GetRunResult = (output, context) => {
    let contents = {
        __type: "GetRunResult",
        run: undefined
    };
    if (output.run !== undefined && output.run !== null) {
        contents.run = deserializeAws_json1_1Run(output.run, context);
    }
    return contents;
};
const deserializeAws_json1_1GetSuiteResult = (output, context) => {
    let contents = {
        __type: "GetSuiteResult",
        suite: undefined
    };
    if (output.suite !== undefined && output.suite !== null) {
        contents.suite = deserializeAws_json1_1Suite(output.suite, context);
    }
    return contents;
};
const deserializeAws_json1_1GetTestGridProjectResult = (output, context) => {
    let contents = {
        __type: "GetTestGridProjectResult",
        testGridProject: undefined
    };
    if (output.testGridProject !== undefined && output.testGridProject !== null) {
        contents.testGridProject = deserializeAws_json1_1TestGridProject(output.testGridProject, context);
    }
    return contents;
};
const deserializeAws_json1_1GetTestGridSessionResult = (output, context) => {
    let contents = {
        __type: "GetTestGridSessionResult",
        testGridSession: undefined
    };
    if (output.testGridSession !== undefined && output.testGridSession !== null) {
        contents.testGridSession = deserializeAws_json1_1TestGridSession(output.testGridSession, context);
    }
    return contents;
};
const deserializeAws_json1_1GetTestResult = (output, context) => {
    let contents = {
        __type: "GetTestResult",
        test: undefined
    };
    if (output.test !== undefined && output.test !== null) {
        contents.test = deserializeAws_json1_1Test(output.test, context);
    }
    return contents;
};
const deserializeAws_json1_1GetUploadResult = (output, context) => {
    let contents = {
        __type: "GetUploadResult",
        upload: undefined
    };
    if (output.upload !== undefined && output.upload !== null) {
        contents.upload = deserializeAws_json1_1Upload(output.upload, context);
    }
    return contents;
};
const deserializeAws_json1_1GetVPCEConfigurationResult = (output, context) => {
    let contents = {
        __type: "GetVPCEConfigurationResult",
        vpceConfiguration: undefined
    };
    if (output.vpceConfiguration !== undefined &&
        output.vpceConfiguration !== null) {
        contents.vpceConfiguration = deserializeAws_json1_1VPCEConfiguration(output.vpceConfiguration, context);
    }
    return contents;
};
const deserializeAws_json1_1IdempotencyException = (output, context) => {
    let contents = {
        __type: "IdempotencyException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1IncompatibilityMessage = (output, context) => {
    let contents = {
        __type: "IncompatibilityMessage",
        message: undefined,
        type: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    if (output.type !== undefined && output.type !== null) {
        contents.type = output.type;
    }
    return contents;
};
const deserializeAws_json1_1IncompatibilityMessages = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1IncompatibilityMessage(entry, context));
};
const deserializeAws_json1_1InstallToRemoteAccessSessionResult = (output, context) => {
    let contents = {
        __type: "InstallToRemoteAccessSessionResult",
        appUpload: undefined
    };
    if (output.appUpload !== undefined && output.appUpload !== null) {
        contents.appUpload = deserializeAws_json1_1Upload(output.appUpload, context);
    }
    return contents;
};
const deserializeAws_json1_1InstanceLabels = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1InstanceProfile = (output, context) => {
    let contents = {
        __type: "InstanceProfile",
        arn: undefined,
        description: undefined,
        excludeAppPackagesFromCleanup: undefined,
        name: undefined,
        packageCleanup: undefined,
        rebootAfterUse: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.description !== undefined && output.description !== null) {
        contents.description = output.description;
    }
    if (output.excludeAppPackagesFromCleanup !== undefined &&
        output.excludeAppPackagesFromCleanup !== null) {
        contents.excludeAppPackagesFromCleanup = deserializeAws_json1_1PackageIds(output.excludeAppPackagesFromCleanup, context);
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.packageCleanup !== undefined && output.packageCleanup !== null) {
        contents.packageCleanup = output.packageCleanup;
    }
    if (output.rebootAfterUse !== undefined && output.rebootAfterUse !== null) {
        contents.rebootAfterUse = output.rebootAfterUse;
    }
    return contents;
};
const deserializeAws_json1_1InstanceProfiles = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1InstanceProfile(entry, context));
};
const deserializeAws_json1_1InternalServiceException = (output, context) => {
    let contents = {
        __type: "InternalServiceException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidOperationException = (output, context) => {
    let contents = {
        __type: "InvalidOperationException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1IosPaths = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1Job = (output, context) => {
    let contents = {
        __type: "Job",
        arn: undefined,
        counters: undefined,
        created: undefined,
        device: undefined,
        deviceMinutes: undefined,
        instanceArn: undefined,
        message: undefined,
        name: undefined,
        result: undefined,
        started: undefined,
        status: undefined,
        stopped: undefined,
        type: undefined,
        videoCapture: undefined,
        videoEndpoint: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.counters !== undefined && output.counters !== null) {
        contents.counters = deserializeAws_json1_1Counters(output.counters, context);
    }
    if (output.created !== undefined && output.created !== null) {
        contents.created = new Date(Math.round(output.created * 1000));
    }
    if (output.device !== undefined && output.device !== null) {
        contents.device = deserializeAws_json1_1Device(output.device, context);
    }
    if (output.deviceMinutes !== undefined && output.deviceMinutes !== null) {
        contents.deviceMinutes = deserializeAws_json1_1DeviceMinutes(output.deviceMinutes, context);
    }
    if (output.instanceArn !== undefined && output.instanceArn !== null) {
        contents.instanceArn = output.instanceArn;
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.result !== undefined && output.result !== null) {
        contents.result = output.result;
    }
    if (output.started !== undefined && output.started !== null) {
        contents.started = new Date(Math.round(output.started * 1000));
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    if (output.stopped !== undefined && output.stopped !== null) {
        contents.stopped = new Date(Math.round(output.stopped * 1000));
    }
    if (output.type !== undefined && output.type !== null) {
        contents.type = output.type;
    }
    if (output.videoCapture !== undefined && output.videoCapture !== null) {
        contents.videoCapture = output.videoCapture;
    }
    if (output.videoEndpoint !== undefined && output.videoEndpoint !== null) {
        contents.videoEndpoint = output.videoEndpoint;
    }
    return contents;
};
const deserializeAws_json1_1Jobs = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Job(entry, context));
};
const deserializeAws_json1_1LimitExceededException = (output, context) => {
    let contents = {
        __type: "LimitExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ListArtifactsResult = (output, context) => {
    let contents = {
        __type: "ListArtifactsResult",
        artifacts: undefined,
        nextToken: undefined
    };
    if (output.artifacts !== undefined && output.artifacts !== null) {
        contents.artifacts = deserializeAws_json1_1Artifacts(output.artifacts, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListDeviceInstancesResult = (output, context) => {
    let contents = {
        __type: "ListDeviceInstancesResult",
        deviceInstances: undefined,
        nextToken: undefined
    };
    if (output.deviceInstances !== undefined && output.deviceInstances !== null) {
        contents.deviceInstances = deserializeAws_json1_1DeviceInstances(output.deviceInstances, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListDevicePoolsResult = (output, context) => {
    let contents = {
        __type: "ListDevicePoolsResult",
        devicePools: undefined,
        nextToken: undefined
    };
    if (output.devicePools !== undefined && output.devicePools !== null) {
        contents.devicePools = deserializeAws_json1_1DevicePools(output.devicePools, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListDevicesResult = (output, context) => {
    let contents = {
        __type: "ListDevicesResult",
        devices: undefined,
        nextToken: undefined
    };
    if (output.devices !== undefined && output.devices !== null) {
        contents.devices = deserializeAws_json1_1Devices(output.devices, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListInstanceProfilesResult = (output, context) => {
    let contents = {
        __type: "ListInstanceProfilesResult",
        instanceProfiles: undefined,
        nextToken: undefined
    };
    if (output.instanceProfiles !== undefined &&
        output.instanceProfiles !== null) {
        contents.instanceProfiles = deserializeAws_json1_1InstanceProfiles(output.instanceProfiles, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListJobsResult = (output, context) => {
    let contents = {
        __type: "ListJobsResult",
        jobs: undefined,
        nextToken: undefined
    };
    if (output.jobs !== undefined && output.jobs !== null) {
        contents.jobs = deserializeAws_json1_1Jobs(output.jobs, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListNetworkProfilesResult = (output, context) => {
    let contents = {
        __type: "ListNetworkProfilesResult",
        networkProfiles: undefined,
        nextToken: undefined
    };
    if (output.networkProfiles !== undefined && output.networkProfiles !== null) {
        contents.networkProfiles = deserializeAws_json1_1NetworkProfiles(output.networkProfiles, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListOfferingPromotionsResult = (output, context) => {
    let contents = {
        __type: "ListOfferingPromotionsResult",
        nextToken: undefined,
        offeringPromotions: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.offeringPromotions !== undefined &&
        output.offeringPromotions !== null) {
        contents.offeringPromotions = deserializeAws_json1_1OfferingPromotions(output.offeringPromotions, context);
    }
    return contents;
};
const deserializeAws_json1_1ListOfferingTransactionsResult = (output, context) => {
    let contents = {
        __type: "ListOfferingTransactionsResult",
        nextToken: undefined,
        offeringTransactions: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.offeringTransactions !== undefined &&
        output.offeringTransactions !== null) {
        contents.offeringTransactions = deserializeAws_json1_1OfferingTransactions(output.offeringTransactions, context);
    }
    return contents;
};
const deserializeAws_json1_1ListOfferingsResult = (output, context) => {
    let contents = {
        __type: "ListOfferingsResult",
        nextToken: undefined,
        offerings: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.offerings !== undefined && output.offerings !== null) {
        contents.offerings = deserializeAws_json1_1Offerings(output.offerings, context);
    }
    return contents;
};
const deserializeAws_json1_1ListProjectsResult = (output, context) => {
    let contents = {
        __type: "ListProjectsResult",
        nextToken: undefined,
        projects: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.projects !== undefined && output.projects !== null) {
        contents.projects = deserializeAws_json1_1Projects(output.projects, context);
    }
    return contents;
};
const deserializeAws_json1_1ListRemoteAccessSessionsResult = (output, context) => {
    let contents = {
        __type: "ListRemoteAccessSessionsResult",
        nextToken: undefined,
        remoteAccessSessions: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.remoteAccessSessions !== undefined &&
        output.remoteAccessSessions !== null) {
        contents.remoteAccessSessions = deserializeAws_json1_1RemoteAccessSessions(output.remoteAccessSessions, context);
    }
    return contents;
};
const deserializeAws_json1_1ListRunsResult = (output, context) => {
    let contents = {
        __type: "ListRunsResult",
        nextToken: undefined,
        runs: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.runs !== undefined && output.runs !== null) {
        contents.runs = deserializeAws_json1_1Runs(output.runs, context);
    }
    return contents;
};
const deserializeAws_json1_1ListSamplesResult = (output, context) => {
    let contents = {
        __type: "ListSamplesResult",
        nextToken: undefined,
        samples: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.samples !== undefined && output.samples !== null) {
        contents.samples = deserializeAws_json1_1Samples(output.samples, context);
    }
    return contents;
};
const deserializeAws_json1_1ListSuitesResult = (output, context) => {
    let contents = {
        __type: "ListSuitesResult",
        nextToken: undefined,
        suites: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.suites !== undefined && output.suites !== null) {
        contents.suites = deserializeAws_json1_1Suites(output.suites, context);
    }
    return contents;
};
const deserializeAws_json1_1ListTagsForResourceResponse = (output, context) => {
    let contents = {
        __type: "ListTagsForResourceResponse",
        Tags: undefined
    };
    if (output.Tags !== undefined && output.Tags !== null) {
        contents.Tags = deserializeAws_json1_1TagList(output.Tags, context);
    }
    return contents;
};
const deserializeAws_json1_1ListTestGridProjectsResult = (output, context) => {
    let contents = {
        __type: "ListTestGridProjectsResult",
        nextToken: undefined,
        testGridProjects: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.testGridProjects !== undefined &&
        output.testGridProjects !== null) {
        contents.testGridProjects = deserializeAws_json1_1TestGridProjects(output.testGridProjects, context);
    }
    return contents;
};
const deserializeAws_json1_1ListTestGridSessionActionsResult = (output, context) => {
    let contents = {
        __type: "ListTestGridSessionActionsResult",
        actions: undefined,
        nextToken: undefined
    };
    if (output.actions !== undefined && output.actions !== null) {
        contents.actions = deserializeAws_json1_1TestGridSessionActions(output.actions, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListTestGridSessionArtifactsResult = (output, context) => {
    let contents = {
        __type: "ListTestGridSessionArtifactsResult",
        artifacts: undefined,
        nextToken: undefined
    };
    if (output.artifacts !== undefined && output.artifacts !== null) {
        contents.artifacts = deserializeAws_json1_1TestGridSessionArtifacts(output.artifacts, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListTestGridSessionsResult = (output, context) => {
    let contents = {
        __type: "ListTestGridSessionsResult",
        nextToken: undefined,
        testGridSessions: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.testGridSessions !== undefined &&
        output.testGridSessions !== null) {
        contents.testGridSessions = deserializeAws_json1_1TestGridSessions(output.testGridSessions, context);
    }
    return contents;
};
const deserializeAws_json1_1ListTestsResult = (output, context) => {
    let contents = {
        __type: "ListTestsResult",
        nextToken: undefined,
        tests: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.tests !== undefined && output.tests !== null) {
        contents.tests = deserializeAws_json1_1Tests(output.tests, context);
    }
    return contents;
};
const deserializeAws_json1_1ListUniqueProblemsResult = (output, context) => {
    let contents = {
        __type: "ListUniqueProblemsResult",
        nextToken: undefined,
        uniqueProblems: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.uniqueProblems !== undefined && output.uniqueProblems !== null) {
        contents.uniqueProblems = deserializeAws_json1_1UniqueProblemsByExecutionResultMap(output.uniqueProblems, context);
    }
    return contents;
};
const deserializeAws_json1_1ListUploadsResult = (output, context) => {
    let contents = {
        __type: "ListUploadsResult",
        nextToken: undefined,
        uploads: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.uploads !== undefined && output.uploads !== null) {
        contents.uploads = deserializeAws_json1_1Uploads(output.uploads, context);
    }
    return contents;
};
const deserializeAws_json1_1ListVPCEConfigurationsResult = (output, context) => {
    let contents = {
        __type: "ListVPCEConfigurationsResult",
        nextToken: undefined,
        vpceConfigurations: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.vpceConfigurations !== undefined &&
        output.vpceConfigurations !== null) {
        contents.vpceConfigurations = deserializeAws_json1_1VPCEConfigurations(output.vpceConfigurations, context);
    }
    return contents;
};
const deserializeAws_json1_1Location = (output, context) => {
    let contents = {
        __type: "Location",
        latitude: undefined,
        longitude: undefined
    };
    if (output.latitude !== undefined && output.latitude !== null) {
        contents.latitude = output.latitude;
    }
    if (output.longitude !== undefined && output.longitude !== null) {
        contents.longitude = output.longitude;
    }
    return contents;
};
const deserializeAws_json1_1MaxSlotMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1MonetaryAmount = (output, context) => {
    let contents = {
        __type: "MonetaryAmount",
        amount: undefined,
        currencyCode: undefined
    };
    if (output.amount !== undefined && output.amount !== null) {
        contents.amount = output.amount;
    }
    if (output.currencyCode !== undefined && output.currencyCode !== null) {
        contents.currencyCode = output.currencyCode;
    }
    return contents;
};
const deserializeAws_json1_1NetworkProfile = (output, context) => {
    let contents = {
        __type: "NetworkProfile",
        arn: undefined,
        description: undefined,
        downlinkBandwidthBits: undefined,
        downlinkDelayMs: undefined,
        downlinkJitterMs: undefined,
        downlinkLossPercent: undefined,
        name: undefined,
        type: undefined,
        uplinkBandwidthBits: undefined,
        uplinkDelayMs: undefined,
        uplinkJitterMs: undefined,
        uplinkLossPercent: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.description !== undefined && output.description !== null) {
        contents.description = output.description;
    }
    if (output.downlinkBandwidthBits !== undefined &&
        output.downlinkBandwidthBits !== null) {
        contents.downlinkBandwidthBits = output.downlinkBandwidthBits;
    }
    if (output.downlinkDelayMs !== undefined && output.downlinkDelayMs !== null) {
        contents.downlinkDelayMs = output.downlinkDelayMs;
    }
    if (output.downlinkJitterMs !== undefined &&
        output.downlinkJitterMs !== null) {
        contents.downlinkJitterMs = output.downlinkJitterMs;
    }
    if (output.downlinkLossPercent !== undefined &&
        output.downlinkLossPercent !== null) {
        contents.downlinkLossPercent = output.downlinkLossPercent;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.type !== undefined && output.type !== null) {
        contents.type = output.type;
    }
    if (output.uplinkBandwidthBits !== undefined &&
        output.uplinkBandwidthBits !== null) {
        contents.uplinkBandwidthBits = output.uplinkBandwidthBits;
    }
    if (output.uplinkDelayMs !== undefined && output.uplinkDelayMs !== null) {
        contents.uplinkDelayMs = output.uplinkDelayMs;
    }
    if (output.uplinkJitterMs !== undefined && output.uplinkJitterMs !== null) {
        contents.uplinkJitterMs = output.uplinkJitterMs;
    }
    if (output.uplinkLossPercent !== undefined &&
        output.uplinkLossPercent !== null) {
        contents.uplinkLossPercent = output.uplinkLossPercent;
    }
    return contents;
};
const deserializeAws_json1_1NetworkProfiles = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1NetworkProfile(entry, context));
};
const deserializeAws_json1_1NotEligibleException = (output, context) => {
    let contents = {
        __type: "NotEligibleException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1NotFoundException = (output, context) => {
    let contents = {
        __type: "NotFoundException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1Offering = (output, context) => {
    let contents = {
        __type: "Offering",
        description: undefined,
        id: undefined,
        platform: undefined,
        recurringCharges: undefined,
        type: undefined
    };
    if (output.description !== undefined && output.description !== null) {
        contents.description = output.description;
    }
    if (output.id !== undefined && output.id !== null) {
        contents.id = output.id;
    }
    if (output.platform !== undefined && output.platform !== null) {
        contents.platform = output.platform;
    }
    if (output.recurringCharges !== undefined &&
        output.recurringCharges !== null) {
        contents.recurringCharges = deserializeAws_json1_1RecurringCharges(output.recurringCharges, context);
    }
    if (output.type !== undefined && output.type !== null) {
        contents.type = output.type;
    }
    return contents;
};
const deserializeAws_json1_1OfferingPromotion = (output, context) => {
    let contents = {
        __type: "OfferingPromotion",
        description: undefined,
        id: undefined
    };
    if (output.description !== undefined && output.description !== null) {
        contents.description = output.description;
    }
    if (output.id !== undefined && output.id !== null) {
        contents.id = output.id;
    }
    return contents;
};
const deserializeAws_json1_1OfferingPromotions = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1OfferingPromotion(entry, context));
};
const deserializeAws_json1_1OfferingStatus = (output, context) => {
    let contents = {
        __type: "OfferingStatus",
        effectiveOn: undefined,
        offering: undefined,
        quantity: undefined,
        type: undefined
    };
    if (output.effectiveOn !== undefined && output.effectiveOn !== null) {
        contents.effectiveOn = new Date(Math.round(output.effectiveOn * 1000));
    }
    if (output.offering !== undefined && output.offering !== null) {
        contents.offering = deserializeAws_json1_1Offering(output.offering, context);
    }
    if (output.quantity !== undefined && output.quantity !== null) {
        contents.quantity = output.quantity;
    }
    if (output.type !== undefined && output.type !== null) {
        contents.type = output.type;
    }
    return contents;
};
const deserializeAws_json1_1OfferingStatusMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = deserializeAws_json1_1OfferingStatus(output[key], context);
    });
    return mapParams;
};
const deserializeAws_json1_1OfferingTransaction = (output, context) => {
    let contents = {
        __type: "OfferingTransaction",
        cost: undefined,
        createdOn: undefined,
        offeringPromotionId: undefined,
        offeringStatus: undefined,
        transactionId: undefined
    };
    if (output.cost !== undefined && output.cost !== null) {
        contents.cost = deserializeAws_json1_1MonetaryAmount(output.cost, context);
    }
    if (output.createdOn !== undefined && output.createdOn !== null) {
        contents.createdOn = new Date(Math.round(output.createdOn * 1000));
    }
    if (output.offeringPromotionId !== undefined &&
        output.offeringPromotionId !== null) {
        contents.offeringPromotionId = output.offeringPromotionId;
    }
    if (output.offeringStatus !== undefined && output.offeringStatus !== null) {
        contents.offeringStatus = deserializeAws_json1_1OfferingStatus(output.offeringStatus, context);
    }
    if (output.transactionId !== undefined && output.transactionId !== null) {
        contents.transactionId = output.transactionId;
    }
    return contents;
};
const deserializeAws_json1_1OfferingTransactions = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1OfferingTransaction(entry, context));
};
const deserializeAws_json1_1Offerings = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Offering(entry, context));
};
const deserializeAws_json1_1PackageIds = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1Problem = (output, context) => {
    let contents = {
        __type: "Problem",
        device: undefined,
        job: undefined,
        message: undefined,
        result: undefined,
        run: undefined,
        suite: undefined,
        test: undefined
    };
    if (output.device !== undefined && output.device !== null) {
        contents.device = deserializeAws_json1_1Device(output.device, context);
    }
    if (output.job !== undefined && output.job !== null) {
        contents.job = deserializeAws_json1_1ProblemDetail(output.job, context);
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    if (output.result !== undefined && output.result !== null) {
        contents.result = output.result;
    }
    if (output.run !== undefined && output.run !== null) {
        contents.run = deserializeAws_json1_1ProblemDetail(output.run, context);
    }
    if (output.suite !== undefined && output.suite !== null) {
        contents.suite = deserializeAws_json1_1ProblemDetail(output.suite, context);
    }
    if (output.test !== undefined && output.test !== null) {
        contents.test = deserializeAws_json1_1ProblemDetail(output.test, context);
    }
    return contents;
};
const deserializeAws_json1_1ProblemDetail = (output, context) => {
    let contents = {
        __type: "ProblemDetail",
        arn: undefined,
        name: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    return contents;
};
const deserializeAws_json1_1Problems = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Problem(entry, context));
};
const deserializeAws_json1_1Project = (output, context) => {
    let contents = {
        __type: "Project",
        arn: undefined,
        created: undefined,
        defaultJobTimeoutMinutes: undefined,
        name: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.created !== undefined && output.created !== null) {
        contents.created = new Date(Math.round(output.created * 1000));
    }
    if (output.defaultJobTimeoutMinutes !== undefined &&
        output.defaultJobTimeoutMinutes !== null) {
        contents.defaultJobTimeoutMinutes = output.defaultJobTimeoutMinutes;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    return contents;
};
const deserializeAws_json1_1Projects = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Project(entry, context));
};
const deserializeAws_json1_1PurchaseOfferingResult = (output, context) => {
    let contents = {
        __type: "PurchaseOfferingResult",
        offeringTransaction: undefined
    };
    if (output.offeringTransaction !== undefined &&
        output.offeringTransaction !== null) {
        contents.offeringTransaction = deserializeAws_json1_1OfferingTransaction(output.offeringTransaction, context);
    }
    return contents;
};
const deserializeAws_json1_1PurchasedDevicesMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1Radios = (output, context) => {
    let contents = {
        __type: "Radios",
        bluetooth: undefined,
        gps: undefined,
        nfc: undefined,
        wifi: undefined
    };
    if (output.bluetooth !== undefined && output.bluetooth !== null) {
        contents.bluetooth = output.bluetooth;
    }
    if (output.gps !== undefined && output.gps !== null) {
        contents.gps = output.gps;
    }
    if (output.nfc !== undefined && output.nfc !== null) {
        contents.nfc = output.nfc;
    }
    if (output.wifi !== undefined && output.wifi !== null) {
        contents.wifi = output.wifi;
    }
    return contents;
};
const deserializeAws_json1_1RecurringCharge = (output, context) => {
    let contents = {
        __type: "RecurringCharge",
        cost: undefined,
        frequency: undefined
    };
    if (output.cost !== undefined && output.cost !== null) {
        contents.cost = deserializeAws_json1_1MonetaryAmount(output.cost, context);
    }
    if (output.frequency !== undefined && output.frequency !== null) {
        contents.frequency = output.frequency;
    }
    return contents;
};
const deserializeAws_json1_1RecurringCharges = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1RecurringCharge(entry, context));
};
const deserializeAws_json1_1RemoteAccessSession = (output, context) => {
    let contents = {
        __type: "RemoteAccessSession",
        arn: undefined,
        billingMethod: undefined,
        clientId: undefined,
        created: undefined,
        device: undefined,
        deviceMinutes: undefined,
        deviceUdid: undefined,
        endpoint: undefined,
        hostAddress: undefined,
        instanceArn: undefined,
        interactionMode: undefined,
        message: undefined,
        name: undefined,
        remoteDebugEnabled: undefined,
        remoteRecordAppArn: undefined,
        remoteRecordEnabled: undefined,
        result: undefined,
        skipAppResign: undefined,
        started: undefined,
        status: undefined,
        stopped: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.billingMethod !== undefined && output.billingMethod !== null) {
        contents.billingMethod = output.billingMethod;
    }
    if (output.clientId !== undefined && output.clientId !== null) {
        contents.clientId = output.clientId;
    }
    if (output.created !== undefined && output.created !== null) {
        contents.created = new Date(Math.round(output.created * 1000));
    }
    if (output.device !== undefined && output.device !== null) {
        contents.device = deserializeAws_json1_1Device(output.device, context);
    }
    if (output.deviceMinutes !== undefined && output.deviceMinutes !== null) {
        contents.deviceMinutes = deserializeAws_json1_1DeviceMinutes(output.deviceMinutes, context);
    }
    if (output.deviceUdid !== undefined && output.deviceUdid !== null) {
        contents.deviceUdid = output.deviceUdid;
    }
    if (output.endpoint !== undefined && output.endpoint !== null) {
        contents.endpoint = output.endpoint;
    }
    if (output.hostAddress !== undefined && output.hostAddress !== null) {
        contents.hostAddress = output.hostAddress;
    }
    if (output.instanceArn !== undefined && output.instanceArn !== null) {
        contents.instanceArn = output.instanceArn;
    }
    if (output.interactionMode !== undefined && output.interactionMode !== null) {
        contents.interactionMode = output.interactionMode;
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.remoteDebugEnabled !== undefined &&
        output.remoteDebugEnabled !== null) {
        contents.remoteDebugEnabled = output.remoteDebugEnabled;
    }
    if (output.remoteRecordAppArn !== undefined &&
        output.remoteRecordAppArn !== null) {
        contents.remoteRecordAppArn = output.remoteRecordAppArn;
    }
    if (output.remoteRecordEnabled !== undefined &&
        output.remoteRecordEnabled !== null) {
        contents.remoteRecordEnabled = output.remoteRecordEnabled;
    }
    if (output.result !== undefined && output.result !== null) {
        contents.result = output.result;
    }
    if (output.skipAppResign !== undefined && output.skipAppResign !== null) {
        contents.skipAppResign = output.skipAppResign;
    }
    if (output.started !== undefined && output.started !== null) {
        contents.started = new Date(Math.round(output.started * 1000));
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    if (output.stopped !== undefined && output.stopped !== null) {
        contents.stopped = new Date(Math.round(output.stopped * 1000));
    }
    return contents;
};
const deserializeAws_json1_1RemoteAccessSessions = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1RemoteAccessSession(entry, context));
};
const deserializeAws_json1_1RenewOfferingResult = (output, context) => {
    let contents = {
        __type: "RenewOfferingResult",
        offeringTransaction: undefined
    };
    if (output.offeringTransaction !== undefined &&
        output.offeringTransaction !== null) {
        contents.offeringTransaction = deserializeAws_json1_1OfferingTransaction(output.offeringTransaction, context);
    }
    return contents;
};
const deserializeAws_json1_1Resolution = (output, context) => {
    let contents = {
        __type: "Resolution",
        height: undefined,
        width: undefined
    };
    if (output.height !== undefined && output.height !== null) {
        contents.height = output.height;
    }
    if (output.width !== undefined && output.width !== null) {
        contents.width = output.width;
    }
    return contents;
};
const deserializeAws_json1_1Rule = (output, context) => {
    let contents = {
        __type: "Rule",
        attribute: undefined,
        operator: undefined,
        value: undefined
    };
    if (output.attribute !== undefined && output.attribute !== null) {
        contents.attribute = output.attribute;
    }
    if (output.operator !== undefined && output.operator !== null) {
        contents.operator = output.operator;
    }
    if (output.value !== undefined && output.value !== null) {
        contents.value = output.value;
    }
    return contents;
};
const deserializeAws_json1_1Rules = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Rule(entry, context));
};
const deserializeAws_json1_1Run = (output, context) => {
    let contents = {
        __type: "Run",
        appUpload: undefined,
        arn: undefined,
        billingMethod: undefined,
        completedJobs: undefined,
        counters: undefined,
        created: undefined,
        customerArtifactPaths: undefined,
        deviceMinutes: undefined,
        devicePoolArn: undefined,
        deviceSelectionResult: undefined,
        eventCount: undefined,
        jobTimeoutMinutes: undefined,
        locale: undefined,
        location: undefined,
        message: undefined,
        name: undefined,
        networkProfile: undefined,
        parsingResultUrl: undefined,
        platform: undefined,
        radios: undefined,
        result: undefined,
        resultCode: undefined,
        seed: undefined,
        skipAppResign: undefined,
        started: undefined,
        status: undefined,
        stopped: undefined,
        testSpecArn: undefined,
        totalJobs: undefined,
        type: undefined,
        webUrl: undefined
    };
    if (output.appUpload !== undefined && output.appUpload !== null) {
        contents.appUpload = output.appUpload;
    }
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.billingMethod !== undefined && output.billingMethod !== null) {
        contents.billingMethod = output.billingMethod;
    }
    if (output.completedJobs !== undefined && output.completedJobs !== null) {
        contents.completedJobs = output.completedJobs;
    }
    if (output.counters !== undefined && output.counters !== null) {
        contents.counters = deserializeAws_json1_1Counters(output.counters, context);
    }
    if (output.created !== undefined && output.created !== null) {
        contents.created = new Date(Math.round(output.created * 1000));
    }
    if (output.customerArtifactPaths !== undefined &&
        output.customerArtifactPaths !== null) {
        contents.customerArtifactPaths = deserializeAws_json1_1CustomerArtifactPaths(output.customerArtifactPaths, context);
    }
    if (output.deviceMinutes !== undefined && output.deviceMinutes !== null) {
        contents.deviceMinutes = deserializeAws_json1_1DeviceMinutes(output.deviceMinutes, context);
    }
    if (output.devicePoolArn !== undefined && output.devicePoolArn !== null) {
        contents.devicePoolArn = output.devicePoolArn;
    }
    if (output.deviceSelectionResult !== undefined &&
        output.deviceSelectionResult !== null) {
        contents.deviceSelectionResult = deserializeAws_json1_1DeviceSelectionResult(output.deviceSelectionResult, context);
    }
    if (output.eventCount !== undefined && output.eventCount !== null) {
        contents.eventCount = output.eventCount;
    }
    if (output.jobTimeoutMinutes !== undefined &&
        output.jobTimeoutMinutes !== null) {
        contents.jobTimeoutMinutes = output.jobTimeoutMinutes;
    }
    if (output.locale !== undefined && output.locale !== null) {
        contents.locale = output.locale;
    }
    if (output.location !== undefined && output.location !== null) {
        contents.location = deserializeAws_json1_1Location(output.location, context);
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.networkProfile !== undefined && output.networkProfile !== null) {
        contents.networkProfile = deserializeAws_json1_1NetworkProfile(output.networkProfile, context);
    }
    if (output.parsingResultUrl !== undefined &&
        output.parsingResultUrl !== null) {
        contents.parsingResultUrl = output.parsingResultUrl;
    }
    if (output.platform !== undefined && output.platform !== null) {
        contents.platform = output.platform;
    }
    if (output.radios !== undefined && output.radios !== null) {
        contents.radios = deserializeAws_json1_1Radios(output.radios, context);
    }
    if (output.result !== undefined && output.result !== null) {
        contents.result = output.result;
    }
    if (output.resultCode !== undefined && output.resultCode !== null) {
        contents.resultCode = output.resultCode;
    }
    if (output.seed !== undefined && output.seed !== null) {
        contents.seed = output.seed;
    }
    if (output.skipAppResign !== undefined && output.skipAppResign !== null) {
        contents.skipAppResign = output.skipAppResign;
    }
    if (output.started !== undefined && output.started !== null) {
        contents.started = new Date(Math.round(output.started * 1000));
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    if (output.stopped !== undefined && output.stopped !== null) {
        contents.stopped = new Date(Math.round(output.stopped * 1000));
    }
    if (output.testSpecArn !== undefined && output.testSpecArn !== null) {
        contents.testSpecArn = output.testSpecArn;
    }
    if (output.totalJobs !== undefined && output.totalJobs !== null) {
        contents.totalJobs = output.totalJobs;
    }
    if (output.type !== undefined && output.type !== null) {
        contents.type = output.type;
    }
    if (output.webUrl !== undefined && output.webUrl !== null) {
        contents.webUrl = output.webUrl;
    }
    return contents;
};
const deserializeAws_json1_1Runs = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Run(entry, context));
};
const deserializeAws_json1_1Sample = (output, context) => {
    let contents = {
        __type: "Sample",
        arn: undefined,
        type: undefined,
        url: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.type !== undefined && output.type !== null) {
        contents.type = output.type;
    }
    if (output.url !== undefined && output.url !== null) {
        contents.url = output.url;
    }
    return contents;
};
const deserializeAws_json1_1Samples = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Sample(entry, context));
};
const deserializeAws_json1_1ScheduleRunResult = (output, context) => {
    let contents = {
        __type: "ScheduleRunResult",
        run: undefined
    };
    if (output.run !== undefined && output.run !== null) {
        contents.run = deserializeAws_json1_1Run(output.run, context);
    }
    return contents;
};
const deserializeAws_json1_1ServiceAccountException = (output, context) => {
    let contents = {
        __type: "ServiceAccountException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1StopJobResult = (output, context) => {
    let contents = {
        __type: "StopJobResult",
        job: undefined
    };
    if (output.job !== undefined && output.job !== null) {
        contents.job = deserializeAws_json1_1Job(output.job, context);
    }
    return contents;
};
const deserializeAws_json1_1StopRemoteAccessSessionResult = (output, context) => {
    let contents = {
        __type: "StopRemoteAccessSessionResult",
        remoteAccessSession: undefined
    };
    if (output.remoteAccessSession !== undefined &&
        output.remoteAccessSession !== null) {
        contents.remoteAccessSession = deserializeAws_json1_1RemoteAccessSession(output.remoteAccessSession, context);
    }
    return contents;
};
const deserializeAws_json1_1StopRunResult = (output, context) => {
    let contents = {
        __type: "StopRunResult",
        run: undefined
    };
    if (output.run !== undefined && output.run !== null) {
        contents.run = deserializeAws_json1_1Run(output.run, context);
    }
    return contents;
};
const deserializeAws_json1_1Suite = (output, context) => {
    let contents = {
        __type: "Suite",
        arn: undefined,
        counters: undefined,
        created: undefined,
        deviceMinutes: undefined,
        message: undefined,
        name: undefined,
        result: undefined,
        started: undefined,
        status: undefined,
        stopped: undefined,
        type: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.counters !== undefined && output.counters !== null) {
        contents.counters = deserializeAws_json1_1Counters(output.counters, context);
    }
    if (output.created !== undefined && output.created !== null) {
        contents.created = new Date(Math.round(output.created * 1000));
    }
    if (output.deviceMinutes !== undefined && output.deviceMinutes !== null) {
        contents.deviceMinutes = deserializeAws_json1_1DeviceMinutes(output.deviceMinutes, context);
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.result !== undefined && output.result !== null) {
        contents.result = output.result;
    }
    if (output.started !== undefined && output.started !== null) {
        contents.started = new Date(Math.round(output.started * 1000));
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    if (output.stopped !== undefined && output.stopped !== null) {
        contents.stopped = new Date(Math.round(output.stopped * 1000));
    }
    if (output.type !== undefined && output.type !== null) {
        contents.type = output.type;
    }
    return contents;
};
const deserializeAws_json1_1Suites = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Suite(entry, context));
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
const deserializeAws_json1_1TagList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Tag(entry, context));
};
const deserializeAws_json1_1TagOperationException = (output, context) => {
    let contents = {
        __type: "TagOperationException",
        message: undefined,
        resourceName: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    if (output.resourceName !== undefined && output.resourceName !== null) {
        contents.resourceName = output.resourceName;
    }
    return contents;
};
const deserializeAws_json1_1TagPolicyException = (output, context) => {
    let contents = {
        __type: "TagPolicyException",
        message: undefined,
        resourceName: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    if (output.resourceName !== undefined && output.resourceName !== null) {
        contents.resourceName = output.resourceName;
    }
    return contents;
};
const deserializeAws_json1_1TagResourceResponse = (output, context) => {
    let contents = {
        __type: "TagResourceResponse"
    };
    return contents;
};
const deserializeAws_json1_1Test = (output, context) => {
    let contents = {
        __type: "Test",
        arn: undefined,
        counters: undefined,
        created: undefined,
        deviceMinutes: undefined,
        message: undefined,
        name: undefined,
        result: undefined,
        started: undefined,
        status: undefined,
        stopped: undefined,
        type: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.counters !== undefined && output.counters !== null) {
        contents.counters = deserializeAws_json1_1Counters(output.counters, context);
    }
    if (output.created !== undefined && output.created !== null) {
        contents.created = new Date(Math.round(output.created * 1000));
    }
    if (output.deviceMinutes !== undefined && output.deviceMinutes !== null) {
        contents.deviceMinutes = deserializeAws_json1_1DeviceMinutes(output.deviceMinutes, context);
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.result !== undefined && output.result !== null) {
        contents.result = output.result;
    }
    if (output.started !== undefined && output.started !== null) {
        contents.started = new Date(Math.round(output.started * 1000));
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    if (output.stopped !== undefined && output.stopped !== null) {
        contents.stopped = new Date(Math.round(output.stopped * 1000));
    }
    if (output.type !== undefined && output.type !== null) {
        contents.type = output.type;
    }
    return contents;
};
const deserializeAws_json1_1TestGridProject = (output, context) => {
    let contents = {
        __type: "TestGridProject",
        arn: undefined,
        created: undefined,
        description: undefined,
        name: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.created !== undefined && output.created !== null) {
        contents.created = new Date(Math.round(output.created * 1000));
    }
    if (output.description !== undefined && output.description !== null) {
        contents.description = output.description;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    return contents;
};
const deserializeAws_json1_1TestGridProjects = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1TestGridProject(entry, context));
};
const deserializeAws_json1_1TestGridSession = (output, context) => {
    let contents = {
        __type: "TestGridSession",
        arn: undefined,
        billingMinutes: undefined,
        created: undefined,
        ended: undefined,
        seleniumProperties: undefined,
        status: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.billingMinutes !== undefined && output.billingMinutes !== null) {
        contents.billingMinutes = output.billingMinutes;
    }
    if (output.created !== undefined && output.created !== null) {
        contents.created = new Date(Math.round(output.created * 1000));
    }
    if (output.ended !== undefined && output.ended !== null) {
        contents.ended = new Date(Math.round(output.ended * 1000));
    }
    if (output.seleniumProperties !== undefined &&
        output.seleniumProperties !== null) {
        contents.seleniumProperties = output.seleniumProperties;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    return contents;
};
const deserializeAws_json1_1TestGridSessionAction = (output, context) => {
    let contents = {
        __type: "TestGridSessionAction",
        action: undefined,
        duration: undefined,
        requestMethod: undefined,
        started: undefined,
        statusCode: undefined
    };
    if (output.action !== undefined && output.action !== null) {
        contents.action = output.action;
    }
    if (output.duration !== undefined && output.duration !== null) {
        contents.duration = output.duration;
    }
    if (output.requestMethod !== undefined && output.requestMethod !== null) {
        contents.requestMethod = output.requestMethod;
    }
    if (output.started !== undefined && output.started !== null) {
        contents.started = new Date(Math.round(output.started * 1000));
    }
    if (output.statusCode !== undefined && output.statusCode !== null) {
        contents.statusCode = output.statusCode;
    }
    return contents;
};
const deserializeAws_json1_1TestGridSessionActions = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1TestGridSessionAction(entry, context));
};
const deserializeAws_json1_1TestGridSessionArtifact = (output, context) => {
    let contents = {
        __type: "TestGridSessionArtifact",
        filename: undefined,
        type: undefined,
        url: undefined
    };
    if (output.filename !== undefined && output.filename !== null) {
        contents.filename = output.filename;
    }
    if (output.type !== undefined && output.type !== null) {
        contents.type = output.type;
    }
    if (output.url !== undefined && output.url !== null) {
        contents.url = output.url;
    }
    return contents;
};
const deserializeAws_json1_1TestGridSessionArtifacts = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1TestGridSessionArtifact(entry, context));
};
const deserializeAws_json1_1TestGridSessions = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1TestGridSession(entry, context));
};
const deserializeAws_json1_1Tests = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Test(entry, context));
};
const deserializeAws_json1_1TooManyTagsException = (output, context) => {
    let contents = {
        __type: "TooManyTagsException",
        message: undefined,
        resourceName: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    if (output.resourceName !== undefined && output.resourceName !== null) {
        contents.resourceName = output.resourceName;
    }
    return contents;
};
const deserializeAws_json1_1TrialMinutes = (output, context) => {
    let contents = {
        __type: "TrialMinutes",
        remaining: undefined,
        total: undefined
    };
    if (output.remaining !== undefined && output.remaining !== null) {
        contents.remaining = output.remaining;
    }
    if (output.total !== undefined && output.total !== null) {
        contents.total = output.total;
    }
    return contents;
};
const deserializeAws_json1_1UniqueProblem = (output, context) => {
    let contents = {
        __type: "UniqueProblem",
        message: undefined,
        problems: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    if (output.problems !== undefined && output.problems !== null) {
        contents.problems = deserializeAws_json1_1Problems(output.problems, context);
    }
    return contents;
};
const deserializeAws_json1_1UniqueProblems = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1UniqueProblem(entry, context));
};
const deserializeAws_json1_1UniqueProblemsByExecutionResultMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = deserializeAws_json1_1UniqueProblems(output[key], context);
    });
    return mapParams;
};
const deserializeAws_json1_1UntagResourceResponse = (output, context) => {
    let contents = {
        __type: "UntagResourceResponse"
    };
    return contents;
};
const deserializeAws_json1_1UpdateDeviceInstanceResult = (output, context) => {
    let contents = {
        __type: "UpdateDeviceInstanceResult",
        deviceInstance: undefined
    };
    if (output.deviceInstance !== undefined && output.deviceInstance !== null) {
        contents.deviceInstance = deserializeAws_json1_1DeviceInstance(output.deviceInstance, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdateDevicePoolResult = (output, context) => {
    let contents = {
        __type: "UpdateDevicePoolResult",
        devicePool: undefined
    };
    if (output.devicePool !== undefined && output.devicePool !== null) {
        contents.devicePool = deserializeAws_json1_1DevicePool(output.devicePool, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdateInstanceProfileResult = (output, context) => {
    let contents = {
        __type: "UpdateInstanceProfileResult",
        instanceProfile: undefined
    };
    if (output.instanceProfile !== undefined && output.instanceProfile !== null) {
        contents.instanceProfile = deserializeAws_json1_1InstanceProfile(output.instanceProfile, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdateNetworkProfileResult = (output, context) => {
    let contents = {
        __type: "UpdateNetworkProfileResult",
        networkProfile: undefined
    };
    if (output.networkProfile !== undefined && output.networkProfile !== null) {
        contents.networkProfile = deserializeAws_json1_1NetworkProfile(output.networkProfile, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdateProjectResult = (output, context) => {
    let contents = {
        __type: "UpdateProjectResult",
        project: undefined
    };
    if (output.project !== undefined && output.project !== null) {
        contents.project = deserializeAws_json1_1Project(output.project, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdateTestGridProjectResult = (output, context) => {
    let contents = {
        __type: "UpdateTestGridProjectResult",
        testGridProject: undefined
    };
    if (output.testGridProject !== undefined && output.testGridProject !== null) {
        contents.testGridProject = deserializeAws_json1_1TestGridProject(output.testGridProject, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdateUploadResult = (output, context) => {
    let contents = {
        __type: "UpdateUploadResult",
        upload: undefined
    };
    if (output.upload !== undefined && output.upload !== null) {
        contents.upload = deserializeAws_json1_1Upload(output.upload, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdateVPCEConfigurationResult = (output, context) => {
    let contents = {
        __type: "UpdateVPCEConfigurationResult",
        vpceConfiguration: undefined
    };
    if (output.vpceConfiguration !== undefined &&
        output.vpceConfiguration !== null) {
        contents.vpceConfiguration = deserializeAws_json1_1VPCEConfiguration(output.vpceConfiguration, context);
    }
    return contents;
};
const deserializeAws_json1_1Upload = (output, context) => {
    let contents = {
        __type: "Upload",
        arn: undefined,
        category: undefined,
        contentType: undefined,
        created: undefined,
        message: undefined,
        metadata: undefined,
        name: undefined,
        status: undefined,
        type: undefined,
        url: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.category !== undefined && output.category !== null) {
        contents.category = output.category;
    }
    if (output.contentType !== undefined && output.contentType !== null) {
        contents.contentType = output.contentType;
    }
    if (output.created !== undefined && output.created !== null) {
        contents.created = new Date(Math.round(output.created * 1000));
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    if (output.metadata !== undefined && output.metadata !== null) {
        contents.metadata = output.metadata;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    if (output.type !== undefined && output.type !== null) {
        contents.type = output.type;
    }
    if (output.url !== undefined && output.url !== null) {
        contents.url = output.url;
    }
    return contents;
};
const deserializeAws_json1_1Uploads = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Upload(entry, context));
};
const deserializeAws_json1_1VPCEConfiguration = (output, context) => {
    let contents = {
        __type: "VPCEConfiguration",
        arn: undefined,
        serviceDnsName: undefined,
        vpceConfigurationDescription: undefined,
        vpceConfigurationName: undefined,
        vpceServiceName: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.serviceDnsName !== undefined && output.serviceDnsName !== null) {
        contents.serviceDnsName = output.serviceDnsName;
    }
    if (output.vpceConfigurationDescription !== undefined &&
        output.vpceConfigurationDescription !== null) {
        contents.vpceConfigurationDescription = output.vpceConfigurationDescription;
    }
    if (output.vpceConfigurationName !== undefined &&
        output.vpceConfigurationName !== null) {
        contents.vpceConfigurationName = output.vpceConfigurationName;
    }
    if (output.vpceServiceName !== undefined && output.vpceServiceName !== null) {
        contents.vpceServiceName = output.vpceServiceName;
    }
    return contents;
};
const deserializeAws_json1_1VPCEConfigurations = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1VPCEConfiguration(entry, context));
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