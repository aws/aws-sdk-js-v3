"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1AllocateStaticIpCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.AllocateStaticIp";
    let body;
    body = JSON.stringify(serializeAws_json1_1AllocateStaticIpRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AllocateStaticIpCommand = serializeAws_json1_1AllocateStaticIpCommand;
async function serializeAws_json1_1AttachDiskCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.AttachDisk";
    let body;
    body = JSON.stringify(serializeAws_json1_1AttachDiskRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AttachDiskCommand = serializeAws_json1_1AttachDiskCommand;
async function serializeAws_json1_1AttachInstancesToLoadBalancerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.AttachInstancesToLoadBalancer";
    let body;
    body = JSON.stringify(serializeAws_json1_1AttachInstancesToLoadBalancerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AttachInstancesToLoadBalancerCommand = serializeAws_json1_1AttachInstancesToLoadBalancerCommand;
async function serializeAws_json1_1AttachLoadBalancerTlsCertificateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "Lightsail_20161128.AttachLoadBalancerTlsCertificate";
    let body;
    body = JSON.stringify(serializeAws_json1_1AttachLoadBalancerTlsCertificateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AttachLoadBalancerTlsCertificateCommand = serializeAws_json1_1AttachLoadBalancerTlsCertificateCommand;
async function serializeAws_json1_1AttachStaticIpCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.AttachStaticIp";
    let body;
    body = JSON.stringify(serializeAws_json1_1AttachStaticIpRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AttachStaticIpCommand = serializeAws_json1_1AttachStaticIpCommand;
async function serializeAws_json1_1CloseInstancePublicPortsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.CloseInstancePublicPorts";
    let body;
    body = JSON.stringify(serializeAws_json1_1CloseInstancePublicPortsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CloseInstancePublicPortsCommand = serializeAws_json1_1CloseInstancePublicPortsCommand;
async function serializeAws_json1_1CopySnapshotCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.CopySnapshot";
    let body;
    body = JSON.stringify(serializeAws_json1_1CopySnapshotRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CopySnapshotCommand = serializeAws_json1_1CopySnapshotCommand;
async function serializeAws_json1_1CreateCloudFormationStackCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.CreateCloudFormationStack";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateCloudFormationStackRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateCloudFormationStackCommand = serializeAws_json1_1CreateCloudFormationStackCommand;
async function serializeAws_json1_1CreateDiskCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.CreateDisk";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDiskRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateDiskCommand = serializeAws_json1_1CreateDiskCommand;
async function serializeAws_json1_1CreateDiskFromSnapshotCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.CreateDiskFromSnapshot";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDiskFromSnapshotRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateDiskFromSnapshotCommand = serializeAws_json1_1CreateDiskFromSnapshotCommand;
async function serializeAws_json1_1CreateDiskSnapshotCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.CreateDiskSnapshot";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDiskSnapshotRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateDiskSnapshotCommand = serializeAws_json1_1CreateDiskSnapshotCommand;
async function serializeAws_json1_1CreateDomainCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.CreateDomain";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDomainRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateDomainCommand = serializeAws_json1_1CreateDomainCommand;
async function serializeAws_json1_1CreateDomainEntryCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.CreateDomainEntry";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDomainEntryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateDomainEntryCommand = serializeAws_json1_1CreateDomainEntryCommand;
async function serializeAws_json1_1CreateInstanceSnapshotCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.CreateInstanceSnapshot";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateInstanceSnapshotRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateInstanceSnapshotCommand = serializeAws_json1_1CreateInstanceSnapshotCommand;
async function serializeAws_json1_1CreateInstancesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.CreateInstances";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateInstancesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateInstancesCommand = serializeAws_json1_1CreateInstancesCommand;
async function serializeAws_json1_1CreateInstancesFromSnapshotCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.CreateInstancesFromSnapshot";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateInstancesFromSnapshotRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateInstancesFromSnapshotCommand = serializeAws_json1_1CreateInstancesFromSnapshotCommand;
async function serializeAws_json1_1CreateKeyPairCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.CreateKeyPair";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateKeyPairRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateKeyPairCommand = serializeAws_json1_1CreateKeyPairCommand;
async function serializeAws_json1_1CreateLoadBalancerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.CreateLoadBalancer";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateLoadBalancerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateLoadBalancerCommand = serializeAws_json1_1CreateLoadBalancerCommand;
async function serializeAws_json1_1CreateLoadBalancerTlsCertificateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "Lightsail_20161128.CreateLoadBalancerTlsCertificate";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateLoadBalancerTlsCertificateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateLoadBalancerTlsCertificateCommand = serializeAws_json1_1CreateLoadBalancerTlsCertificateCommand;
async function serializeAws_json1_1CreateRelationalDatabaseCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.CreateRelationalDatabase";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateRelationalDatabaseRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateRelationalDatabaseCommand = serializeAws_json1_1CreateRelationalDatabaseCommand;
async function serializeAws_json1_1CreateRelationalDatabaseFromSnapshotCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "Lightsail_20161128.CreateRelationalDatabaseFromSnapshot";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateRelationalDatabaseFromSnapshotRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateRelationalDatabaseFromSnapshotCommand = serializeAws_json1_1CreateRelationalDatabaseFromSnapshotCommand;
async function serializeAws_json1_1CreateRelationalDatabaseSnapshotCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "Lightsail_20161128.CreateRelationalDatabaseSnapshot";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateRelationalDatabaseSnapshotRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateRelationalDatabaseSnapshotCommand = serializeAws_json1_1CreateRelationalDatabaseSnapshotCommand;
async function serializeAws_json1_1DeleteAutoSnapshotCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.DeleteAutoSnapshot";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteAutoSnapshotRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteAutoSnapshotCommand = serializeAws_json1_1DeleteAutoSnapshotCommand;
async function serializeAws_json1_1DeleteDiskCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.DeleteDisk";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteDiskRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteDiskCommand = serializeAws_json1_1DeleteDiskCommand;
async function serializeAws_json1_1DeleteDiskSnapshotCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.DeleteDiskSnapshot";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteDiskSnapshotRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteDiskSnapshotCommand = serializeAws_json1_1DeleteDiskSnapshotCommand;
async function serializeAws_json1_1DeleteDomainCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.DeleteDomain";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteDomainRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteDomainCommand = serializeAws_json1_1DeleteDomainCommand;
async function serializeAws_json1_1DeleteDomainEntryCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.DeleteDomainEntry";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteDomainEntryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteDomainEntryCommand = serializeAws_json1_1DeleteDomainEntryCommand;
async function serializeAws_json1_1DeleteInstanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.DeleteInstance";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteInstanceCommand = serializeAws_json1_1DeleteInstanceCommand;
async function serializeAws_json1_1DeleteInstanceSnapshotCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.DeleteInstanceSnapshot";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteInstanceSnapshotRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteInstanceSnapshotCommand = serializeAws_json1_1DeleteInstanceSnapshotCommand;
async function serializeAws_json1_1DeleteKeyPairCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.DeleteKeyPair";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteKeyPairRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteKeyPairCommand = serializeAws_json1_1DeleteKeyPairCommand;
async function serializeAws_json1_1DeleteKnownHostKeysCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.DeleteKnownHostKeys";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteKnownHostKeysRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteKnownHostKeysCommand = serializeAws_json1_1DeleteKnownHostKeysCommand;
async function serializeAws_json1_1DeleteLoadBalancerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.DeleteLoadBalancer";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteLoadBalancerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteLoadBalancerCommand = serializeAws_json1_1DeleteLoadBalancerCommand;
async function serializeAws_json1_1DeleteLoadBalancerTlsCertificateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "Lightsail_20161128.DeleteLoadBalancerTlsCertificate";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteLoadBalancerTlsCertificateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteLoadBalancerTlsCertificateCommand = serializeAws_json1_1DeleteLoadBalancerTlsCertificateCommand;
async function serializeAws_json1_1DeleteRelationalDatabaseCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.DeleteRelationalDatabase";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteRelationalDatabaseRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteRelationalDatabaseCommand = serializeAws_json1_1DeleteRelationalDatabaseCommand;
async function serializeAws_json1_1DeleteRelationalDatabaseSnapshotCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "Lightsail_20161128.DeleteRelationalDatabaseSnapshot";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteRelationalDatabaseSnapshotRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteRelationalDatabaseSnapshotCommand = serializeAws_json1_1DeleteRelationalDatabaseSnapshotCommand;
async function serializeAws_json1_1DetachDiskCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.DetachDisk";
    let body;
    body = JSON.stringify(serializeAws_json1_1DetachDiskRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DetachDiskCommand = serializeAws_json1_1DetachDiskCommand;
async function serializeAws_json1_1DetachInstancesFromLoadBalancerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "Lightsail_20161128.DetachInstancesFromLoadBalancer";
    let body;
    body = JSON.stringify(serializeAws_json1_1DetachInstancesFromLoadBalancerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DetachInstancesFromLoadBalancerCommand = serializeAws_json1_1DetachInstancesFromLoadBalancerCommand;
async function serializeAws_json1_1DetachStaticIpCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.DetachStaticIp";
    let body;
    body = JSON.stringify(serializeAws_json1_1DetachStaticIpRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DetachStaticIpCommand = serializeAws_json1_1DetachStaticIpCommand;
async function serializeAws_json1_1DisableAddOnCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.DisableAddOn";
    let body;
    body = JSON.stringify(serializeAws_json1_1DisableAddOnRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DisableAddOnCommand = serializeAws_json1_1DisableAddOnCommand;
async function serializeAws_json1_1DownloadDefaultKeyPairCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.DownloadDefaultKeyPair";
    let body;
    body = JSON.stringify(serializeAws_json1_1DownloadDefaultKeyPairRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DownloadDefaultKeyPairCommand = serializeAws_json1_1DownloadDefaultKeyPairCommand;
async function serializeAws_json1_1EnableAddOnCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.EnableAddOn";
    let body;
    body = JSON.stringify(serializeAws_json1_1EnableAddOnRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1EnableAddOnCommand = serializeAws_json1_1EnableAddOnCommand;
async function serializeAws_json1_1ExportSnapshotCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.ExportSnapshot";
    let body;
    body = JSON.stringify(serializeAws_json1_1ExportSnapshotRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ExportSnapshotCommand = serializeAws_json1_1ExportSnapshotCommand;
async function serializeAws_json1_1GetActiveNamesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.GetActiveNames";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetActiveNamesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetActiveNamesCommand = serializeAws_json1_1GetActiveNamesCommand;
async function serializeAws_json1_1GetAutoSnapshotsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.GetAutoSnapshots";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetAutoSnapshotsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetAutoSnapshotsCommand = serializeAws_json1_1GetAutoSnapshotsCommand;
async function serializeAws_json1_1GetBlueprintsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.GetBlueprints";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetBlueprintsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetBlueprintsCommand = serializeAws_json1_1GetBlueprintsCommand;
async function serializeAws_json1_1GetBundlesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.GetBundles";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetBundlesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetBundlesCommand = serializeAws_json1_1GetBundlesCommand;
async function serializeAws_json1_1GetCloudFormationStackRecordsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.GetCloudFormationStackRecords";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetCloudFormationStackRecordsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetCloudFormationStackRecordsCommand = serializeAws_json1_1GetCloudFormationStackRecordsCommand;
async function serializeAws_json1_1GetDiskCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.GetDisk";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDiskRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetDiskCommand = serializeAws_json1_1GetDiskCommand;
async function serializeAws_json1_1GetDiskSnapshotCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.GetDiskSnapshot";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDiskSnapshotRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetDiskSnapshotCommand = serializeAws_json1_1GetDiskSnapshotCommand;
async function serializeAws_json1_1GetDiskSnapshotsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.GetDiskSnapshots";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDiskSnapshotsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetDiskSnapshotsCommand = serializeAws_json1_1GetDiskSnapshotsCommand;
async function serializeAws_json1_1GetDisksCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.GetDisks";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDisksRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetDisksCommand = serializeAws_json1_1GetDisksCommand;
async function serializeAws_json1_1GetDomainCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.GetDomain";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDomainRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetDomainCommand = serializeAws_json1_1GetDomainCommand;
async function serializeAws_json1_1GetDomainsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.GetDomains";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDomainsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetDomainsCommand = serializeAws_json1_1GetDomainsCommand;
async function serializeAws_json1_1GetExportSnapshotRecordsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.GetExportSnapshotRecords";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetExportSnapshotRecordsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetExportSnapshotRecordsCommand = serializeAws_json1_1GetExportSnapshotRecordsCommand;
async function serializeAws_json1_1GetInstanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.GetInstance";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetInstanceCommand = serializeAws_json1_1GetInstanceCommand;
async function serializeAws_json1_1GetInstanceAccessDetailsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.GetInstanceAccessDetails";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetInstanceAccessDetailsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetInstanceAccessDetailsCommand = serializeAws_json1_1GetInstanceAccessDetailsCommand;
async function serializeAws_json1_1GetInstanceMetricDataCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.GetInstanceMetricData";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetInstanceMetricDataRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetInstanceMetricDataCommand = serializeAws_json1_1GetInstanceMetricDataCommand;
async function serializeAws_json1_1GetInstancePortStatesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.GetInstancePortStates";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetInstancePortStatesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetInstancePortStatesCommand = serializeAws_json1_1GetInstancePortStatesCommand;
async function serializeAws_json1_1GetInstanceSnapshotCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.GetInstanceSnapshot";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetInstanceSnapshotRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetInstanceSnapshotCommand = serializeAws_json1_1GetInstanceSnapshotCommand;
async function serializeAws_json1_1GetInstanceSnapshotsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.GetInstanceSnapshots";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetInstanceSnapshotsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetInstanceSnapshotsCommand = serializeAws_json1_1GetInstanceSnapshotsCommand;
async function serializeAws_json1_1GetInstanceStateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.GetInstanceState";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetInstanceStateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetInstanceStateCommand = serializeAws_json1_1GetInstanceStateCommand;
async function serializeAws_json1_1GetInstancesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.GetInstances";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetInstancesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetInstancesCommand = serializeAws_json1_1GetInstancesCommand;
async function serializeAws_json1_1GetKeyPairCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.GetKeyPair";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetKeyPairRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetKeyPairCommand = serializeAws_json1_1GetKeyPairCommand;
async function serializeAws_json1_1GetKeyPairsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.GetKeyPairs";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetKeyPairsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetKeyPairsCommand = serializeAws_json1_1GetKeyPairsCommand;
async function serializeAws_json1_1GetLoadBalancerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.GetLoadBalancer";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetLoadBalancerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetLoadBalancerCommand = serializeAws_json1_1GetLoadBalancerCommand;
async function serializeAws_json1_1GetLoadBalancerMetricDataCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.GetLoadBalancerMetricData";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetLoadBalancerMetricDataRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetLoadBalancerMetricDataCommand = serializeAws_json1_1GetLoadBalancerMetricDataCommand;
async function serializeAws_json1_1GetLoadBalancerTlsCertificatesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.GetLoadBalancerTlsCertificates";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetLoadBalancerTlsCertificatesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetLoadBalancerTlsCertificatesCommand = serializeAws_json1_1GetLoadBalancerTlsCertificatesCommand;
async function serializeAws_json1_1GetLoadBalancersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.GetLoadBalancers";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetLoadBalancersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetLoadBalancersCommand = serializeAws_json1_1GetLoadBalancersCommand;
async function serializeAws_json1_1GetOperationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.GetOperation";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetOperationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetOperationCommand = serializeAws_json1_1GetOperationCommand;
async function serializeAws_json1_1GetOperationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.GetOperations";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetOperationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetOperationsCommand = serializeAws_json1_1GetOperationsCommand;
async function serializeAws_json1_1GetOperationsForResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.GetOperationsForResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetOperationsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetOperationsForResourceCommand = serializeAws_json1_1GetOperationsForResourceCommand;
async function serializeAws_json1_1GetRegionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.GetRegions";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRegionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetRegionsCommand = serializeAws_json1_1GetRegionsCommand;
async function serializeAws_json1_1GetRelationalDatabaseCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.GetRelationalDatabase";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRelationalDatabaseRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetRelationalDatabaseCommand = serializeAws_json1_1GetRelationalDatabaseCommand;
async function serializeAws_json1_1GetRelationalDatabaseBlueprintsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "Lightsail_20161128.GetRelationalDatabaseBlueprints";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRelationalDatabaseBlueprintsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetRelationalDatabaseBlueprintsCommand = serializeAws_json1_1GetRelationalDatabaseBlueprintsCommand;
async function serializeAws_json1_1GetRelationalDatabaseBundlesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.GetRelationalDatabaseBundles";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRelationalDatabaseBundlesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetRelationalDatabaseBundlesCommand = serializeAws_json1_1GetRelationalDatabaseBundlesCommand;
async function serializeAws_json1_1GetRelationalDatabaseEventsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.GetRelationalDatabaseEvents";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRelationalDatabaseEventsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetRelationalDatabaseEventsCommand = serializeAws_json1_1GetRelationalDatabaseEventsCommand;
async function serializeAws_json1_1GetRelationalDatabaseLogEventsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.GetRelationalDatabaseLogEvents";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRelationalDatabaseLogEventsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetRelationalDatabaseLogEventsCommand = serializeAws_json1_1GetRelationalDatabaseLogEventsCommand;
async function serializeAws_json1_1GetRelationalDatabaseLogStreamsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "Lightsail_20161128.GetRelationalDatabaseLogStreams";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRelationalDatabaseLogStreamsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetRelationalDatabaseLogStreamsCommand = serializeAws_json1_1GetRelationalDatabaseLogStreamsCommand;
async function serializeAws_json1_1GetRelationalDatabaseMasterUserPasswordCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "Lightsail_20161128.GetRelationalDatabaseMasterUserPassword";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRelationalDatabaseMasterUserPasswordRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetRelationalDatabaseMasterUserPasswordCommand = serializeAws_json1_1GetRelationalDatabaseMasterUserPasswordCommand;
async function serializeAws_json1_1GetRelationalDatabaseMetricDataCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "Lightsail_20161128.GetRelationalDatabaseMetricData";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRelationalDatabaseMetricDataRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetRelationalDatabaseMetricDataCommand = serializeAws_json1_1GetRelationalDatabaseMetricDataCommand;
async function serializeAws_json1_1GetRelationalDatabaseParametersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "Lightsail_20161128.GetRelationalDatabaseParameters";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRelationalDatabaseParametersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetRelationalDatabaseParametersCommand = serializeAws_json1_1GetRelationalDatabaseParametersCommand;
async function serializeAws_json1_1GetRelationalDatabaseSnapshotCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.GetRelationalDatabaseSnapshot";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRelationalDatabaseSnapshotRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetRelationalDatabaseSnapshotCommand = serializeAws_json1_1GetRelationalDatabaseSnapshotCommand;
async function serializeAws_json1_1GetRelationalDatabaseSnapshotsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.GetRelationalDatabaseSnapshots";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRelationalDatabaseSnapshotsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetRelationalDatabaseSnapshotsCommand = serializeAws_json1_1GetRelationalDatabaseSnapshotsCommand;
async function serializeAws_json1_1GetRelationalDatabasesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.GetRelationalDatabases";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRelationalDatabasesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetRelationalDatabasesCommand = serializeAws_json1_1GetRelationalDatabasesCommand;
async function serializeAws_json1_1GetStaticIpCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.GetStaticIp";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetStaticIpRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetStaticIpCommand = serializeAws_json1_1GetStaticIpCommand;
async function serializeAws_json1_1GetStaticIpsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.GetStaticIps";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetStaticIpsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetStaticIpsCommand = serializeAws_json1_1GetStaticIpsCommand;
async function serializeAws_json1_1ImportKeyPairCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.ImportKeyPair";
    let body;
    body = JSON.stringify(serializeAws_json1_1ImportKeyPairRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ImportKeyPairCommand = serializeAws_json1_1ImportKeyPairCommand;
async function serializeAws_json1_1IsVpcPeeredCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.IsVpcPeered";
    let body;
    body = JSON.stringify(serializeAws_json1_1IsVpcPeeredRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1IsVpcPeeredCommand = serializeAws_json1_1IsVpcPeeredCommand;
async function serializeAws_json1_1OpenInstancePublicPortsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.OpenInstancePublicPorts";
    let body;
    body = JSON.stringify(serializeAws_json1_1OpenInstancePublicPortsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1OpenInstancePublicPortsCommand = serializeAws_json1_1OpenInstancePublicPortsCommand;
async function serializeAws_json1_1PeerVpcCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.PeerVpc";
    let body;
    body = JSON.stringify(serializeAws_json1_1PeerVpcRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PeerVpcCommand = serializeAws_json1_1PeerVpcCommand;
async function serializeAws_json1_1PutInstancePublicPortsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.PutInstancePublicPorts";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutInstancePublicPortsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutInstancePublicPortsCommand = serializeAws_json1_1PutInstancePublicPortsCommand;
async function serializeAws_json1_1RebootInstanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.RebootInstance";
    let body;
    body = JSON.stringify(serializeAws_json1_1RebootInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RebootInstanceCommand = serializeAws_json1_1RebootInstanceCommand;
async function serializeAws_json1_1RebootRelationalDatabaseCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.RebootRelationalDatabase";
    let body;
    body = JSON.stringify(serializeAws_json1_1RebootRelationalDatabaseRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RebootRelationalDatabaseCommand = serializeAws_json1_1RebootRelationalDatabaseCommand;
async function serializeAws_json1_1ReleaseStaticIpCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.ReleaseStaticIp";
    let body;
    body = JSON.stringify(serializeAws_json1_1ReleaseStaticIpRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ReleaseStaticIpCommand = serializeAws_json1_1ReleaseStaticIpCommand;
async function serializeAws_json1_1StartInstanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.StartInstance";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartInstanceCommand = serializeAws_json1_1StartInstanceCommand;
async function serializeAws_json1_1StartRelationalDatabaseCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.StartRelationalDatabase";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartRelationalDatabaseRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartRelationalDatabaseCommand = serializeAws_json1_1StartRelationalDatabaseCommand;
async function serializeAws_json1_1StopInstanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.StopInstance";
    let body;
    body = JSON.stringify(serializeAws_json1_1StopInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StopInstanceCommand = serializeAws_json1_1StopInstanceCommand;
async function serializeAws_json1_1StopRelationalDatabaseCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.StopRelationalDatabase";
    let body;
    body = JSON.stringify(serializeAws_json1_1StopRelationalDatabaseRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StopRelationalDatabaseCommand = serializeAws_json1_1StopRelationalDatabaseCommand;
async function serializeAws_json1_1TagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.TagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
async function serializeAws_json1_1UnpeerVpcCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.UnpeerVpc";
    let body;
    body = JSON.stringify(serializeAws_json1_1UnpeerVpcRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UnpeerVpcCommand = serializeAws_json1_1UnpeerVpcCommand;
async function serializeAws_json1_1UntagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.UntagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
async function serializeAws_json1_1UpdateDomainEntryCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.UpdateDomainEntry";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateDomainEntryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateDomainEntryCommand = serializeAws_json1_1UpdateDomainEntryCommand;
async function serializeAws_json1_1UpdateLoadBalancerAttributeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.UpdateLoadBalancerAttribute";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateLoadBalancerAttributeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateLoadBalancerAttributeCommand = serializeAws_json1_1UpdateLoadBalancerAttributeCommand;
async function serializeAws_json1_1UpdateRelationalDatabaseCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Lightsail_20161128.UpdateRelationalDatabase";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateRelationalDatabaseRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateRelationalDatabaseCommand = serializeAws_json1_1UpdateRelationalDatabaseCommand;
async function serializeAws_json1_1UpdateRelationalDatabaseParametersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "Lightsail_20161128.UpdateRelationalDatabaseParameters";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateRelationalDatabaseParametersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateRelationalDatabaseParametersCommand = serializeAws_json1_1UpdateRelationalDatabaseParametersCommand;
async function deserializeAws_json1_1AllocateStaticIpCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AllocateStaticIpCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AllocateStaticIpResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AllocateStaticIpResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AllocateStaticIpCommand = deserializeAws_json1_1AllocateStaticIpCommand;
async function deserializeAws_json1_1AllocateStaticIpCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1AttachDiskCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AttachDiskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AttachDiskResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AttachDiskResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AttachDiskCommand = deserializeAws_json1_1AttachDiskCommand;
async function deserializeAws_json1_1AttachDiskCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1AttachInstancesToLoadBalancerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AttachInstancesToLoadBalancerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AttachInstancesToLoadBalancerResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AttachInstancesToLoadBalancerResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AttachInstancesToLoadBalancerCommand = deserializeAws_json1_1AttachInstancesToLoadBalancerCommand;
async function deserializeAws_json1_1AttachInstancesToLoadBalancerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1AttachLoadBalancerTlsCertificateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AttachLoadBalancerTlsCertificateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AttachLoadBalancerTlsCertificateResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AttachLoadBalancerTlsCertificateResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AttachLoadBalancerTlsCertificateCommand = deserializeAws_json1_1AttachLoadBalancerTlsCertificateCommand;
async function deserializeAws_json1_1AttachLoadBalancerTlsCertificateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1AttachStaticIpCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AttachStaticIpCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AttachStaticIpResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AttachStaticIpResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AttachStaticIpCommand = deserializeAws_json1_1AttachStaticIpCommand;
async function deserializeAws_json1_1AttachStaticIpCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CloseInstancePublicPortsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CloseInstancePublicPortsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CloseInstancePublicPortsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CloseInstancePublicPortsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CloseInstancePublicPortsCommand = deserializeAws_json1_1CloseInstancePublicPortsCommand;
async function deserializeAws_json1_1CloseInstancePublicPortsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CopySnapshotCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CopySnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CopySnapshotResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CopySnapshotResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CopySnapshotCommand = deserializeAws_json1_1CopySnapshotCommand;
async function deserializeAws_json1_1CopySnapshotCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateCloudFormationStackCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateCloudFormationStackCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateCloudFormationStackResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateCloudFormationStackResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateCloudFormationStackCommand = deserializeAws_json1_1CreateCloudFormationStackCommand;
async function deserializeAws_json1_1CreateCloudFormationStackCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateDiskCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateDiskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateDiskResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateDiskResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateDiskCommand = deserializeAws_json1_1CreateDiskCommand;
async function deserializeAws_json1_1CreateDiskCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateDiskFromSnapshotCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateDiskFromSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateDiskFromSnapshotResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateDiskFromSnapshotResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateDiskFromSnapshotCommand = deserializeAws_json1_1CreateDiskFromSnapshotCommand;
async function deserializeAws_json1_1CreateDiskFromSnapshotCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateDiskSnapshotCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateDiskSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateDiskSnapshotResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateDiskSnapshotResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateDiskSnapshotCommand = deserializeAws_json1_1CreateDiskSnapshotCommand;
async function deserializeAws_json1_1CreateDiskSnapshotCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateDomainCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateDomainCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateDomainResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateDomainResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateDomainCommand = deserializeAws_json1_1CreateDomainCommand;
async function deserializeAws_json1_1CreateDomainCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateDomainEntryCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateDomainEntryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateDomainEntryResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateDomainEntryResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateDomainEntryCommand = deserializeAws_json1_1CreateDomainEntryCommand;
async function deserializeAws_json1_1CreateDomainEntryCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateInstanceSnapshotCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateInstanceSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateInstanceSnapshotResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateInstanceSnapshotResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateInstanceSnapshotCommand = deserializeAws_json1_1CreateInstanceSnapshotCommand;
async function deserializeAws_json1_1CreateInstanceSnapshotCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateInstancesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateInstancesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateInstancesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateInstancesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateInstancesCommand = deserializeAws_json1_1CreateInstancesCommand;
async function deserializeAws_json1_1CreateInstancesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateInstancesFromSnapshotCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateInstancesFromSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateInstancesFromSnapshotResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateInstancesFromSnapshotResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateInstancesFromSnapshotCommand = deserializeAws_json1_1CreateInstancesFromSnapshotCommand;
async function deserializeAws_json1_1CreateInstancesFromSnapshotCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateKeyPairCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateKeyPairCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateKeyPairResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateKeyPairResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateKeyPairCommand = deserializeAws_json1_1CreateKeyPairCommand;
async function deserializeAws_json1_1CreateKeyPairCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateLoadBalancerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateLoadBalancerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateLoadBalancerResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateLoadBalancerResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateLoadBalancerCommand = deserializeAws_json1_1CreateLoadBalancerCommand;
async function deserializeAws_json1_1CreateLoadBalancerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateLoadBalancerTlsCertificateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateLoadBalancerTlsCertificateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateLoadBalancerTlsCertificateResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateLoadBalancerTlsCertificateResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateLoadBalancerTlsCertificateCommand = deserializeAws_json1_1CreateLoadBalancerTlsCertificateCommand;
async function deserializeAws_json1_1CreateLoadBalancerTlsCertificateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateRelationalDatabaseCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateRelationalDatabaseCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateRelationalDatabaseResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateRelationalDatabaseResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateRelationalDatabaseCommand = deserializeAws_json1_1CreateRelationalDatabaseCommand;
async function deserializeAws_json1_1CreateRelationalDatabaseCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateRelationalDatabaseFromSnapshotCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateRelationalDatabaseFromSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateRelationalDatabaseFromSnapshotResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateRelationalDatabaseFromSnapshotResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateRelationalDatabaseFromSnapshotCommand = deserializeAws_json1_1CreateRelationalDatabaseFromSnapshotCommand;
async function deserializeAws_json1_1CreateRelationalDatabaseFromSnapshotCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateRelationalDatabaseSnapshotCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateRelationalDatabaseSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateRelationalDatabaseSnapshotResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateRelationalDatabaseSnapshotResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateRelationalDatabaseSnapshotCommand = deserializeAws_json1_1CreateRelationalDatabaseSnapshotCommand;
async function deserializeAws_json1_1CreateRelationalDatabaseSnapshotCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteAutoSnapshotCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteAutoSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteAutoSnapshotResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteAutoSnapshotResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteAutoSnapshotCommand = deserializeAws_json1_1DeleteAutoSnapshotCommand;
async function deserializeAws_json1_1DeleteAutoSnapshotCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteDiskCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteDiskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteDiskResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteDiskResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteDiskCommand = deserializeAws_json1_1DeleteDiskCommand;
async function deserializeAws_json1_1DeleteDiskCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteDiskSnapshotCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteDiskSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteDiskSnapshotResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteDiskSnapshotResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteDiskSnapshotCommand = deserializeAws_json1_1DeleteDiskSnapshotCommand;
async function deserializeAws_json1_1DeleteDiskSnapshotCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteDomainCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteDomainCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteDomainResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteDomainResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteDomainCommand = deserializeAws_json1_1DeleteDomainCommand;
async function deserializeAws_json1_1DeleteDomainCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteDomainEntryCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteDomainEntryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteDomainEntryResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteDomainEntryResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteDomainEntryCommand = deserializeAws_json1_1DeleteDomainEntryCommand;
async function deserializeAws_json1_1DeleteDomainEntryCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteInstanceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteInstanceResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteInstanceResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteInstanceCommand = deserializeAws_json1_1DeleteInstanceCommand;
async function deserializeAws_json1_1DeleteInstanceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteInstanceSnapshotCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteInstanceSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteInstanceSnapshotResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteInstanceSnapshotResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteInstanceSnapshotCommand = deserializeAws_json1_1DeleteInstanceSnapshotCommand;
async function deserializeAws_json1_1DeleteInstanceSnapshotCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteKeyPairCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteKeyPairCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteKeyPairResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteKeyPairResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteKeyPairCommand = deserializeAws_json1_1DeleteKeyPairCommand;
async function deserializeAws_json1_1DeleteKeyPairCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteKnownHostKeysCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteKnownHostKeysCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteKnownHostKeysResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteKnownHostKeysResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteKnownHostKeysCommand = deserializeAws_json1_1DeleteKnownHostKeysCommand;
async function deserializeAws_json1_1DeleteKnownHostKeysCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteLoadBalancerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteLoadBalancerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteLoadBalancerResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteLoadBalancerResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteLoadBalancerCommand = deserializeAws_json1_1DeleteLoadBalancerCommand;
async function deserializeAws_json1_1DeleteLoadBalancerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteLoadBalancerTlsCertificateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteLoadBalancerTlsCertificateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteLoadBalancerTlsCertificateResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteLoadBalancerTlsCertificateResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteLoadBalancerTlsCertificateCommand = deserializeAws_json1_1DeleteLoadBalancerTlsCertificateCommand;
async function deserializeAws_json1_1DeleteLoadBalancerTlsCertificateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteRelationalDatabaseCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteRelationalDatabaseCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteRelationalDatabaseResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteRelationalDatabaseResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteRelationalDatabaseCommand = deserializeAws_json1_1DeleteRelationalDatabaseCommand;
async function deserializeAws_json1_1DeleteRelationalDatabaseCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteRelationalDatabaseSnapshotCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteRelationalDatabaseSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteRelationalDatabaseSnapshotResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteRelationalDatabaseSnapshotResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteRelationalDatabaseSnapshotCommand = deserializeAws_json1_1DeleteRelationalDatabaseSnapshotCommand;
async function deserializeAws_json1_1DeleteRelationalDatabaseSnapshotCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DetachDiskCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DetachDiskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DetachDiskResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DetachDiskResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DetachDiskCommand = deserializeAws_json1_1DetachDiskCommand;
async function deserializeAws_json1_1DetachDiskCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DetachInstancesFromLoadBalancerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DetachInstancesFromLoadBalancerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DetachInstancesFromLoadBalancerResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DetachInstancesFromLoadBalancerResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DetachInstancesFromLoadBalancerCommand = deserializeAws_json1_1DetachInstancesFromLoadBalancerCommand;
async function deserializeAws_json1_1DetachInstancesFromLoadBalancerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DetachStaticIpCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DetachStaticIpCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DetachStaticIpResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DetachStaticIpResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DetachStaticIpCommand = deserializeAws_json1_1DetachStaticIpCommand;
async function deserializeAws_json1_1DetachStaticIpCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DisableAddOnCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DisableAddOnCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisableAddOnResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DisableAddOnResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DisableAddOnCommand = deserializeAws_json1_1DisableAddOnCommand;
async function deserializeAws_json1_1DisableAddOnCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DownloadDefaultKeyPairCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DownloadDefaultKeyPairCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DownloadDefaultKeyPairResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DownloadDefaultKeyPairResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DownloadDefaultKeyPairCommand = deserializeAws_json1_1DownloadDefaultKeyPairCommand;
async function deserializeAws_json1_1DownloadDefaultKeyPairCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1EnableAddOnCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1EnableAddOnCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1EnableAddOnResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "EnableAddOnResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1EnableAddOnCommand = deserializeAws_json1_1EnableAddOnCommand;
async function deserializeAws_json1_1EnableAddOnCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ExportSnapshotCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ExportSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ExportSnapshotResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ExportSnapshotResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ExportSnapshotCommand = deserializeAws_json1_1ExportSnapshotCommand;
async function deserializeAws_json1_1ExportSnapshotCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetActiveNamesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetActiveNamesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetActiveNamesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetActiveNamesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetActiveNamesCommand = deserializeAws_json1_1GetActiveNamesCommand;
async function deserializeAws_json1_1GetActiveNamesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetAutoSnapshotsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetAutoSnapshotsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetAutoSnapshotsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetAutoSnapshotsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetAutoSnapshotsCommand = deserializeAws_json1_1GetAutoSnapshotsCommand;
async function deserializeAws_json1_1GetAutoSnapshotsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetBlueprintsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetBlueprintsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetBlueprintsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetBlueprintsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetBlueprintsCommand = deserializeAws_json1_1GetBlueprintsCommand;
async function deserializeAws_json1_1GetBlueprintsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetBundlesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetBundlesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetBundlesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetBundlesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetBundlesCommand = deserializeAws_json1_1GetBundlesCommand;
async function deserializeAws_json1_1GetBundlesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetCloudFormationStackRecordsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetCloudFormationStackRecordsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetCloudFormationStackRecordsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetCloudFormationStackRecordsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetCloudFormationStackRecordsCommand = deserializeAws_json1_1GetCloudFormationStackRecordsCommand;
async function deserializeAws_json1_1GetCloudFormationStackRecordsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetDiskCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetDiskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDiskResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetDiskResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetDiskCommand = deserializeAws_json1_1GetDiskCommand;
async function deserializeAws_json1_1GetDiskCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetDiskSnapshotCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetDiskSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDiskSnapshotResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetDiskSnapshotResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetDiskSnapshotCommand = deserializeAws_json1_1GetDiskSnapshotCommand;
async function deserializeAws_json1_1GetDiskSnapshotCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetDiskSnapshotsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetDiskSnapshotsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDiskSnapshotsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetDiskSnapshotsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetDiskSnapshotsCommand = deserializeAws_json1_1GetDiskSnapshotsCommand;
async function deserializeAws_json1_1GetDiskSnapshotsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetDisksCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetDisksCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDisksResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetDisksResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetDisksCommand = deserializeAws_json1_1GetDisksCommand;
async function deserializeAws_json1_1GetDisksCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetDomainCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetDomainCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDomainResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetDomainResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetDomainCommand = deserializeAws_json1_1GetDomainCommand;
async function deserializeAws_json1_1GetDomainCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetDomainsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetDomainsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDomainsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetDomainsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetDomainsCommand = deserializeAws_json1_1GetDomainsCommand;
async function deserializeAws_json1_1GetDomainsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetExportSnapshotRecordsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetExportSnapshotRecordsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetExportSnapshotRecordsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetExportSnapshotRecordsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetExportSnapshotRecordsCommand = deserializeAws_json1_1GetExportSnapshotRecordsCommand;
async function deserializeAws_json1_1GetExportSnapshotRecordsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetInstanceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetInstanceResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetInstanceResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetInstanceCommand = deserializeAws_json1_1GetInstanceCommand;
async function deserializeAws_json1_1GetInstanceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetInstanceAccessDetailsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetInstanceAccessDetailsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetInstanceAccessDetailsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetInstanceAccessDetailsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetInstanceAccessDetailsCommand = deserializeAws_json1_1GetInstanceAccessDetailsCommand;
async function deserializeAws_json1_1GetInstanceAccessDetailsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetInstanceMetricDataCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetInstanceMetricDataCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetInstanceMetricDataResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetInstanceMetricDataResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetInstanceMetricDataCommand = deserializeAws_json1_1GetInstanceMetricDataCommand;
async function deserializeAws_json1_1GetInstanceMetricDataCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetInstancePortStatesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetInstancePortStatesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetInstancePortStatesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetInstancePortStatesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetInstancePortStatesCommand = deserializeAws_json1_1GetInstancePortStatesCommand;
async function deserializeAws_json1_1GetInstancePortStatesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetInstanceSnapshotCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetInstanceSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetInstanceSnapshotResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetInstanceSnapshotResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetInstanceSnapshotCommand = deserializeAws_json1_1GetInstanceSnapshotCommand;
async function deserializeAws_json1_1GetInstanceSnapshotCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetInstanceSnapshotsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetInstanceSnapshotsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetInstanceSnapshotsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetInstanceSnapshotsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetInstanceSnapshotsCommand = deserializeAws_json1_1GetInstanceSnapshotsCommand;
async function deserializeAws_json1_1GetInstanceSnapshotsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetInstanceStateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetInstanceStateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetInstanceStateResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetInstanceStateResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetInstanceStateCommand = deserializeAws_json1_1GetInstanceStateCommand;
async function deserializeAws_json1_1GetInstanceStateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetInstancesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetInstancesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetInstancesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetInstancesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetInstancesCommand = deserializeAws_json1_1GetInstancesCommand;
async function deserializeAws_json1_1GetInstancesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetKeyPairCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetKeyPairCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetKeyPairResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetKeyPairResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetKeyPairCommand = deserializeAws_json1_1GetKeyPairCommand;
async function deserializeAws_json1_1GetKeyPairCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetKeyPairsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetKeyPairsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetKeyPairsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetKeyPairsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetKeyPairsCommand = deserializeAws_json1_1GetKeyPairsCommand;
async function deserializeAws_json1_1GetKeyPairsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetLoadBalancerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetLoadBalancerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetLoadBalancerResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetLoadBalancerResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetLoadBalancerCommand = deserializeAws_json1_1GetLoadBalancerCommand;
async function deserializeAws_json1_1GetLoadBalancerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetLoadBalancerMetricDataCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetLoadBalancerMetricDataCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetLoadBalancerMetricDataResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetLoadBalancerMetricDataResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetLoadBalancerMetricDataCommand = deserializeAws_json1_1GetLoadBalancerMetricDataCommand;
async function deserializeAws_json1_1GetLoadBalancerMetricDataCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetLoadBalancerTlsCertificatesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetLoadBalancerTlsCertificatesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetLoadBalancerTlsCertificatesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetLoadBalancerTlsCertificatesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetLoadBalancerTlsCertificatesCommand = deserializeAws_json1_1GetLoadBalancerTlsCertificatesCommand;
async function deserializeAws_json1_1GetLoadBalancerTlsCertificatesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetLoadBalancersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetLoadBalancersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetLoadBalancersResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetLoadBalancersResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetLoadBalancersCommand = deserializeAws_json1_1GetLoadBalancersCommand;
async function deserializeAws_json1_1GetLoadBalancersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetOperationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetOperationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetOperationResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetOperationResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetOperationCommand = deserializeAws_json1_1GetOperationCommand;
async function deserializeAws_json1_1GetOperationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetOperationsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetOperationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetOperationsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetOperationsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetOperationsCommand = deserializeAws_json1_1GetOperationsCommand;
async function deserializeAws_json1_1GetOperationsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetOperationsForResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetOperationsForResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetOperationsForResourceResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetOperationsForResourceResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetOperationsForResourceCommand = deserializeAws_json1_1GetOperationsForResourceCommand;
async function deserializeAws_json1_1GetOperationsForResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetRegionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetRegionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRegionsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetRegionsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetRegionsCommand = deserializeAws_json1_1GetRegionsCommand;
async function deserializeAws_json1_1GetRegionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetRelationalDatabaseCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetRelationalDatabaseCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRelationalDatabaseResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetRelationalDatabaseResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetRelationalDatabaseCommand = deserializeAws_json1_1GetRelationalDatabaseCommand;
async function deserializeAws_json1_1GetRelationalDatabaseCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetRelationalDatabaseBlueprintsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetRelationalDatabaseBlueprintsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRelationalDatabaseBlueprintsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetRelationalDatabaseBlueprintsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetRelationalDatabaseBlueprintsCommand = deserializeAws_json1_1GetRelationalDatabaseBlueprintsCommand;
async function deserializeAws_json1_1GetRelationalDatabaseBlueprintsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetRelationalDatabaseBundlesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetRelationalDatabaseBundlesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRelationalDatabaseBundlesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetRelationalDatabaseBundlesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetRelationalDatabaseBundlesCommand = deserializeAws_json1_1GetRelationalDatabaseBundlesCommand;
async function deserializeAws_json1_1GetRelationalDatabaseBundlesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetRelationalDatabaseEventsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetRelationalDatabaseEventsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRelationalDatabaseEventsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetRelationalDatabaseEventsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetRelationalDatabaseEventsCommand = deserializeAws_json1_1GetRelationalDatabaseEventsCommand;
async function deserializeAws_json1_1GetRelationalDatabaseEventsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetRelationalDatabaseLogEventsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetRelationalDatabaseLogEventsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRelationalDatabaseLogEventsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetRelationalDatabaseLogEventsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetRelationalDatabaseLogEventsCommand = deserializeAws_json1_1GetRelationalDatabaseLogEventsCommand;
async function deserializeAws_json1_1GetRelationalDatabaseLogEventsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetRelationalDatabaseLogStreamsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetRelationalDatabaseLogStreamsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRelationalDatabaseLogStreamsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetRelationalDatabaseLogStreamsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetRelationalDatabaseLogStreamsCommand = deserializeAws_json1_1GetRelationalDatabaseLogStreamsCommand;
async function deserializeAws_json1_1GetRelationalDatabaseLogStreamsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetRelationalDatabaseMasterUserPasswordCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetRelationalDatabaseMasterUserPasswordCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRelationalDatabaseMasterUserPasswordResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetRelationalDatabaseMasterUserPasswordResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetRelationalDatabaseMasterUserPasswordCommand = deserializeAws_json1_1GetRelationalDatabaseMasterUserPasswordCommand;
async function deserializeAws_json1_1GetRelationalDatabaseMasterUserPasswordCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetRelationalDatabaseMetricDataCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetRelationalDatabaseMetricDataCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRelationalDatabaseMetricDataResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetRelationalDatabaseMetricDataResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetRelationalDatabaseMetricDataCommand = deserializeAws_json1_1GetRelationalDatabaseMetricDataCommand;
async function deserializeAws_json1_1GetRelationalDatabaseMetricDataCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetRelationalDatabaseParametersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetRelationalDatabaseParametersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRelationalDatabaseParametersResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetRelationalDatabaseParametersResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetRelationalDatabaseParametersCommand = deserializeAws_json1_1GetRelationalDatabaseParametersCommand;
async function deserializeAws_json1_1GetRelationalDatabaseParametersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetRelationalDatabaseSnapshotCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetRelationalDatabaseSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRelationalDatabaseSnapshotResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetRelationalDatabaseSnapshotResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetRelationalDatabaseSnapshotCommand = deserializeAws_json1_1GetRelationalDatabaseSnapshotCommand;
async function deserializeAws_json1_1GetRelationalDatabaseSnapshotCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetRelationalDatabaseSnapshotsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetRelationalDatabaseSnapshotsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRelationalDatabaseSnapshotsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetRelationalDatabaseSnapshotsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetRelationalDatabaseSnapshotsCommand = deserializeAws_json1_1GetRelationalDatabaseSnapshotsCommand;
async function deserializeAws_json1_1GetRelationalDatabaseSnapshotsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetRelationalDatabasesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetRelationalDatabasesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRelationalDatabasesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetRelationalDatabasesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetRelationalDatabasesCommand = deserializeAws_json1_1GetRelationalDatabasesCommand;
async function deserializeAws_json1_1GetRelationalDatabasesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetStaticIpCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetStaticIpCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetStaticIpResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetStaticIpResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetStaticIpCommand = deserializeAws_json1_1GetStaticIpCommand;
async function deserializeAws_json1_1GetStaticIpCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetStaticIpsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetStaticIpsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetStaticIpsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetStaticIpsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetStaticIpsCommand = deserializeAws_json1_1GetStaticIpsCommand;
async function deserializeAws_json1_1GetStaticIpsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ImportKeyPairCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ImportKeyPairCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ImportKeyPairResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ImportKeyPairResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ImportKeyPairCommand = deserializeAws_json1_1ImportKeyPairCommand;
async function deserializeAws_json1_1ImportKeyPairCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1IsVpcPeeredCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1IsVpcPeeredCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1IsVpcPeeredResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "IsVpcPeeredResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1IsVpcPeeredCommand = deserializeAws_json1_1IsVpcPeeredCommand;
async function deserializeAws_json1_1IsVpcPeeredCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1OpenInstancePublicPortsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1OpenInstancePublicPortsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1OpenInstancePublicPortsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "OpenInstancePublicPortsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1OpenInstancePublicPortsCommand = deserializeAws_json1_1OpenInstancePublicPortsCommand;
async function deserializeAws_json1_1OpenInstancePublicPortsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1PeerVpcCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PeerVpcCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PeerVpcResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PeerVpcResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PeerVpcCommand = deserializeAws_json1_1PeerVpcCommand;
async function deserializeAws_json1_1PeerVpcCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1PutInstancePublicPortsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutInstancePublicPortsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutInstancePublicPortsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutInstancePublicPortsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutInstancePublicPortsCommand = deserializeAws_json1_1PutInstancePublicPortsCommand;
async function deserializeAws_json1_1PutInstancePublicPortsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1RebootInstanceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RebootInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RebootInstanceResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RebootInstanceResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RebootInstanceCommand = deserializeAws_json1_1RebootInstanceCommand;
async function deserializeAws_json1_1RebootInstanceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1RebootRelationalDatabaseCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RebootRelationalDatabaseCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RebootRelationalDatabaseResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RebootRelationalDatabaseResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RebootRelationalDatabaseCommand = deserializeAws_json1_1RebootRelationalDatabaseCommand;
async function deserializeAws_json1_1RebootRelationalDatabaseCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ReleaseStaticIpCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ReleaseStaticIpCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ReleaseStaticIpResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ReleaseStaticIpResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ReleaseStaticIpCommand = deserializeAws_json1_1ReleaseStaticIpCommand;
async function deserializeAws_json1_1ReleaseStaticIpCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StartInstanceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartInstanceResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartInstanceResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartInstanceCommand = deserializeAws_json1_1StartInstanceCommand;
async function deserializeAws_json1_1StartInstanceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StartRelationalDatabaseCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartRelationalDatabaseCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartRelationalDatabaseResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartRelationalDatabaseResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartRelationalDatabaseCommand = deserializeAws_json1_1StartRelationalDatabaseCommand;
async function deserializeAws_json1_1StartRelationalDatabaseCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StopInstanceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StopInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopInstanceResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StopInstanceResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StopInstanceCommand = deserializeAws_json1_1StopInstanceCommand;
async function deserializeAws_json1_1StopInstanceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StopRelationalDatabaseCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StopRelationalDatabaseCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopRelationalDatabaseResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StopRelationalDatabaseResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StopRelationalDatabaseCommand = deserializeAws_json1_1StopRelationalDatabaseCommand;
async function deserializeAws_json1_1StopRelationalDatabaseCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
    contents = deserializeAws_json1_1TagResourceResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "TagResourceResult" }, contents);
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
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UnpeerVpcCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UnpeerVpcCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UnpeerVpcResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UnpeerVpcResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UnpeerVpcCommand = deserializeAws_json1_1UnpeerVpcCommand;
async function deserializeAws_json1_1UnpeerVpcCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
    contents = deserializeAws_json1_1UntagResourceResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UntagResourceResult" }, contents);
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
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateDomainEntryCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateDomainEntryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateDomainEntryResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateDomainEntryResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateDomainEntryCommand = deserializeAws_json1_1UpdateDomainEntryCommand;
async function deserializeAws_json1_1UpdateDomainEntryCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateLoadBalancerAttributeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateLoadBalancerAttributeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateLoadBalancerAttributeResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateLoadBalancerAttributeResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateLoadBalancerAttributeCommand = deserializeAws_json1_1UpdateLoadBalancerAttributeCommand;
async function deserializeAws_json1_1UpdateLoadBalancerAttributeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateRelationalDatabaseCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateRelationalDatabaseCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateRelationalDatabaseResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateRelationalDatabaseResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateRelationalDatabaseCommand = deserializeAws_json1_1UpdateRelationalDatabaseCommand;
async function deserializeAws_json1_1UpdateRelationalDatabaseCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateRelationalDatabaseParametersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateRelationalDatabaseParametersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateRelationalDatabaseParametersResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateRelationalDatabaseParametersResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateRelationalDatabaseParametersCommand = deserializeAws_json1_1UpdateRelationalDatabaseParametersCommand;
async function deserializeAws_json1_1UpdateRelationalDatabaseParametersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
const deserializeAws_json1_1AccessDeniedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AccessDeniedException(body, context);
    const contents = Object.assign({ name: "AccessDeniedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1AccountSetupInProgressExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AccountSetupInProgressException(body, context);
    const contents = Object.assign({ name: "AccountSetupInProgressException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidInputExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidInputException(body, context);
    const contents = Object.assign({ name: "InvalidInputException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1NotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NotFoundException(body, context);
    const contents = Object.assign({ name: "NotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1OperationFailureExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OperationFailureException(body, context);
    const contents = Object.assign({ name: "OperationFailureException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ServiceExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ServiceException(body, context);
    const contents = Object.assign({ name: "ServiceException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1UnauthenticatedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnauthenticatedException(body, context);
    const contents = Object.assign({ name: "UnauthenticatedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1AddOnRequest = (input, context) => {
    const bodyParams = {};
    if (input.addOnType !== undefined) {
        bodyParams["addOnType"] = input.addOnType;
    }
    if (input.autoSnapshotAddOnRequest !== undefined) {
        bodyParams["autoSnapshotAddOnRequest"] = serializeAws_json1_1AutoSnapshotAddOnRequest(input.autoSnapshotAddOnRequest, context);
    }
    return bodyParams;
};
const serializeAws_json1_1AddOnRequestList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1AddOnRequest(entry, context));
    }
    return contents;
};
const serializeAws_json1_1AllocateStaticIpRequest = (input, context) => {
    const bodyParams = {};
    if (input.staticIpName !== undefined) {
        bodyParams["staticIpName"] = input.staticIpName;
    }
    return bodyParams;
};
const serializeAws_json1_1AttachDiskRequest = (input, context) => {
    const bodyParams = {};
    if (input.diskName !== undefined) {
        bodyParams["diskName"] = input.diskName;
    }
    if (input.diskPath !== undefined) {
        bodyParams["diskPath"] = input.diskPath;
    }
    if (input.instanceName !== undefined) {
        bodyParams["instanceName"] = input.instanceName;
    }
    return bodyParams;
};
const serializeAws_json1_1AttachInstancesToLoadBalancerRequest = (input, context) => {
    const bodyParams = {};
    if (input.instanceNames !== undefined) {
        bodyParams["instanceNames"] = serializeAws_json1_1ResourceNameList(input.instanceNames, context);
    }
    if (input.loadBalancerName !== undefined) {
        bodyParams["loadBalancerName"] = input.loadBalancerName;
    }
    return bodyParams;
};
const serializeAws_json1_1AttachLoadBalancerTlsCertificateRequest = (input, context) => {
    const bodyParams = {};
    if (input.certificateName !== undefined) {
        bodyParams["certificateName"] = input.certificateName;
    }
    if (input.loadBalancerName !== undefined) {
        bodyParams["loadBalancerName"] = input.loadBalancerName;
    }
    return bodyParams;
};
const serializeAws_json1_1AttachStaticIpRequest = (input, context) => {
    const bodyParams = {};
    if (input.instanceName !== undefined) {
        bodyParams["instanceName"] = input.instanceName;
    }
    if (input.staticIpName !== undefined) {
        bodyParams["staticIpName"] = input.staticIpName;
    }
    return bodyParams;
};
const serializeAws_json1_1AttachedDiskMap = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = serializeAws_json1_1DiskMapList(input[key], context);
    });
    return mapParams;
};
const serializeAws_json1_1AutoSnapshotAddOnRequest = (input, context) => {
    const bodyParams = {};
    if (input.snapshotTimeOfDay !== undefined) {
        bodyParams["snapshotTimeOfDay"] = input.snapshotTimeOfDay;
    }
    return bodyParams;
};
const serializeAws_json1_1CloseInstancePublicPortsRequest = (input, context) => {
    const bodyParams = {};
    if (input.instanceName !== undefined) {
        bodyParams["instanceName"] = input.instanceName;
    }
    if (input.portInfo !== undefined) {
        bodyParams["portInfo"] = serializeAws_json1_1PortInfo(input.portInfo, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CopySnapshotRequest = (input, context) => {
    const bodyParams = {};
    if (input.restoreDate !== undefined) {
        bodyParams["restoreDate"] = input.restoreDate;
    }
    if (input.sourceRegion !== undefined) {
        bodyParams["sourceRegion"] = input.sourceRegion;
    }
    if (input.sourceResourceName !== undefined) {
        bodyParams["sourceResourceName"] = input.sourceResourceName;
    }
    if (input.sourceSnapshotName !== undefined) {
        bodyParams["sourceSnapshotName"] = input.sourceSnapshotName;
    }
    if (input.targetSnapshotName !== undefined) {
        bodyParams["targetSnapshotName"] = input.targetSnapshotName;
    }
    if (input.useLatestRestorableAutoSnapshot !== undefined) {
        bodyParams["useLatestRestorableAutoSnapshot"] =
            input.useLatestRestorableAutoSnapshot;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateCloudFormationStackRequest = (input, context) => {
    const bodyParams = {};
    if (input.instances !== undefined) {
        bodyParams["instances"] = serializeAws_json1_1InstanceEntryList(input.instances, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateDiskFromSnapshotRequest = (input, context) => {
    const bodyParams = {};
    if (input.addOns !== undefined) {
        bodyParams["addOns"] = serializeAws_json1_1AddOnRequestList(input.addOns, context);
    }
    if (input.availabilityZone !== undefined) {
        bodyParams["availabilityZone"] = input.availabilityZone;
    }
    if (input.diskName !== undefined) {
        bodyParams["diskName"] = input.diskName;
    }
    if (input.diskSnapshotName !== undefined) {
        bodyParams["diskSnapshotName"] = input.diskSnapshotName;
    }
    if (input.restoreDate !== undefined) {
        bodyParams["restoreDate"] = input.restoreDate;
    }
    if (input.sizeInGb !== undefined) {
        bodyParams["sizeInGb"] = input.sizeInGb;
    }
    if (input.sourceDiskName !== undefined) {
        bodyParams["sourceDiskName"] = input.sourceDiskName;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
    }
    if (input.useLatestRestorableAutoSnapshot !== undefined) {
        bodyParams["useLatestRestorableAutoSnapshot"] =
            input.useLatestRestorableAutoSnapshot;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateDiskRequest = (input, context) => {
    const bodyParams = {};
    if (input.addOns !== undefined) {
        bodyParams["addOns"] = serializeAws_json1_1AddOnRequestList(input.addOns, context);
    }
    if (input.availabilityZone !== undefined) {
        bodyParams["availabilityZone"] = input.availabilityZone;
    }
    if (input.diskName !== undefined) {
        bodyParams["diskName"] = input.diskName;
    }
    if (input.sizeInGb !== undefined) {
        bodyParams["sizeInGb"] = input.sizeInGb;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateDiskSnapshotRequest = (input, context) => {
    const bodyParams = {};
    if (input.diskName !== undefined) {
        bodyParams["diskName"] = input.diskName;
    }
    if (input.diskSnapshotName !== undefined) {
        bodyParams["diskSnapshotName"] = input.diskSnapshotName;
    }
    if (input.instanceName !== undefined) {
        bodyParams["instanceName"] = input.instanceName;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateDomainEntryRequest = (input, context) => {
    const bodyParams = {};
    if (input.domainEntry !== undefined) {
        bodyParams["domainEntry"] = serializeAws_json1_1DomainEntry(input.domainEntry, context);
    }
    if (input.domainName !== undefined) {
        bodyParams["domainName"] = input.domainName;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateDomainRequest = (input, context) => {
    const bodyParams = {};
    if (input.domainName !== undefined) {
        bodyParams["domainName"] = input.domainName;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateInstanceSnapshotRequest = (input, context) => {
    const bodyParams = {};
    if (input.instanceName !== undefined) {
        bodyParams["instanceName"] = input.instanceName;
    }
    if (input.instanceSnapshotName !== undefined) {
        bodyParams["instanceSnapshotName"] = input.instanceSnapshotName;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateInstancesFromSnapshotRequest = (input, context) => {
    const bodyParams = {};
    if (input.addOns !== undefined) {
        bodyParams["addOns"] = serializeAws_json1_1AddOnRequestList(input.addOns, context);
    }
    if (input.attachedDiskMapping !== undefined) {
        bodyParams["attachedDiskMapping"] = serializeAws_json1_1AttachedDiskMap(input.attachedDiskMapping, context);
    }
    if (input.availabilityZone !== undefined) {
        bodyParams["availabilityZone"] = input.availabilityZone;
    }
    if (input.bundleId !== undefined) {
        bodyParams["bundleId"] = input.bundleId;
    }
    if (input.instanceNames !== undefined) {
        bodyParams["instanceNames"] = serializeAws_json1_1StringList(input.instanceNames, context);
    }
    if (input.instanceSnapshotName !== undefined) {
        bodyParams["instanceSnapshotName"] = input.instanceSnapshotName;
    }
    if (input.keyPairName !== undefined) {
        bodyParams["keyPairName"] = input.keyPairName;
    }
    if (input.restoreDate !== undefined) {
        bodyParams["restoreDate"] = input.restoreDate;
    }
    if (input.sourceInstanceName !== undefined) {
        bodyParams["sourceInstanceName"] = input.sourceInstanceName;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
    }
    if (input.useLatestRestorableAutoSnapshot !== undefined) {
        bodyParams["useLatestRestorableAutoSnapshot"] =
            input.useLatestRestorableAutoSnapshot;
    }
    if (input.userData !== undefined) {
        bodyParams["userData"] = input.userData;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateInstancesRequest = (input, context) => {
    const bodyParams = {};
    if (input.addOns !== undefined) {
        bodyParams["addOns"] = serializeAws_json1_1AddOnRequestList(input.addOns, context);
    }
    if (input.availabilityZone !== undefined) {
        bodyParams["availabilityZone"] = input.availabilityZone;
    }
    if (input.blueprintId !== undefined) {
        bodyParams["blueprintId"] = input.blueprintId;
    }
    if (input.bundleId !== undefined) {
        bodyParams["bundleId"] = input.bundleId;
    }
    if (input.customImageName !== undefined) {
        bodyParams["customImageName"] = input.customImageName;
    }
    if (input.instanceNames !== undefined) {
        bodyParams["instanceNames"] = serializeAws_json1_1StringList(input.instanceNames, context);
    }
    if (input.keyPairName !== undefined) {
        bodyParams["keyPairName"] = input.keyPairName;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
    }
    if (input.userData !== undefined) {
        bodyParams["userData"] = input.userData;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateKeyPairRequest = (input, context) => {
    const bodyParams = {};
    if (input.keyPairName !== undefined) {
        bodyParams["keyPairName"] = input.keyPairName;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateLoadBalancerRequest = (input, context) => {
    const bodyParams = {};
    if (input.certificateAlternativeNames !== undefined) {
        bodyParams["certificateAlternativeNames"] = serializeAws_json1_1DomainNameList(input.certificateAlternativeNames, context);
    }
    if (input.certificateDomainName !== undefined) {
        bodyParams["certificateDomainName"] = input.certificateDomainName;
    }
    if (input.certificateName !== undefined) {
        bodyParams["certificateName"] = input.certificateName;
    }
    if (input.healthCheckPath !== undefined) {
        bodyParams["healthCheckPath"] = input.healthCheckPath;
    }
    if (input.instancePort !== undefined) {
        bodyParams["instancePort"] = input.instancePort;
    }
    if (input.loadBalancerName !== undefined) {
        bodyParams["loadBalancerName"] = input.loadBalancerName;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateLoadBalancerTlsCertificateRequest = (input, context) => {
    const bodyParams = {};
    if (input.certificateAlternativeNames !== undefined) {
        bodyParams["certificateAlternativeNames"] = serializeAws_json1_1DomainNameList(input.certificateAlternativeNames, context);
    }
    if (input.certificateDomainName !== undefined) {
        bodyParams["certificateDomainName"] = input.certificateDomainName;
    }
    if (input.certificateName !== undefined) {
        bodyParams["certificateName"] = input.certificateName;
    }
    if (input.loadBalancerName !== undefined) {
        bodyParams["loadBalancerName"] = input.loadBalancerName;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateRelationalDatabaseFromSnapshotRequest = (input, context) => {
    const bodyParams = {};
    if (input.availabilityZone !== undefined) {
        bodyParams["availabilityZone"] = input.availabilityZone;
    }
    if (input.publiclyAccessible !== undefined) {
        bodyParams["publiclyAccessible"] = input.publiclyAccessible;
    }
    if (input.relationalDatabaseBundleId !== undefined) {
        bodyParams["relationalDatabaseBundleId"] = input.relationalDatabaseBundleId;
    }
    if (input.relationalDatabaseName !== undefined) {
        bodyParams["relationalDatabaseName"] = input.relationalDatabaseName;
    }
    if (input.relationalDatabaseSnapshotName !== undefined) {
        bodyParams["relationalDatabaseSnapshotName"] =
            input.relationalDatabaseSnapshotName;
    }
    if (input.restoreTime !== undefined) {
        bodyParams["restoreTime"] = Math.round(input.restoreTime.getTime() / 1000);
    }
    if (input.sourceRelationalDatabaseName !== undefined) {
        bodyParams["sourceRelationalDatabaseName"] =
            input.sourceRelationalDatabaseName;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
    }
    if (input.useLatestRestorableTime !== undefined) {
        bodyParams["useLatestRestorableTime"] = input.useLatestRestorableTime;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateRelationalDatabaseRequest = (input, context) => {
    const bodyParams = {};
    if (input.availabilityZone !== undefined) {
        bodyParams["availabilityZone"] = input.availabilityZone;
    }
    if (input.masterDatabaseName !== undefined) {
        bodyParams["masterDatabaseName"] = input.masterDatabaseName;
    }
    if (input.masterUserPassword !== undefined) {
        bodyParams["masterUserPassword"] = input.masterUserPassword;
    }
    if (input.masterUsername !== undefined) {
        bodyParams["masterUsername"] = input.masterUsername;
    }
    if (input.preferredBackupWindow !== undefined) {
        bodyParams["preferredBackupWindow"] = input.preferredBackupWindow;
    }
    if (input.preferredMaintenanceWindow !== undefined) {
        bodyParams["preferredMaintenanceWindow"] = input.preferredMaintenanceWindow;
    }
    if (input.publiclyAccessible !== undefined) {
        bodyParams["publiclyAccessible"] = input.publiclyAccessible;
    }
    if (input.relationalDatabaseBlueprintId !== undefined) {
        bodyParams["relationalDatabaseBlueprintId"] =
            input.relationalDatabaseBlueprintId;
    }
    if (input.relationalDatabaseBundleId !== undefined) {
        bodyParams["relationalDatabaseBundleId"] = input.relationalDatabaseBundleId;
    }
    if (input.relationalDatabaseName !== undefined) {
        bodyParams["relationalDatabaseName"] = input.relationalDatabaseName;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateRelationalDatabaseSnapshotRequest = (input, context) => {
    const bodyParams = {};
    if (input.relationalDatabaseName !== undefined) {
        bodyParams["relationalDatabaseName"] = input.relationalDatabaseName;
    }
    if (input.relationalDatabaseSnapshotName !== undefined) {
        bodyParams["relationalDatabaseSnapshotName"] =
            input.relationalDatabaseSnapshotName;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteAutoSnapshotRequest = (input, context) => {
    const bodyParams = {};
    if (input.date !== undefined) {
        bodyParams["date"] = input.date;
    }
    if (input.resourceName !== undefined) {
        bodyParams["resourceName"] = input.resourceName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteDiskRequest = (input, context) => {
    const bodyParams = {};
    if (input.diskName !== undefined) {
        bodyParams["diskName"] = input.diskName;
    }
    if (input.forceDeleteAddOns !== undefined) {
        bodyParams["forceDeleteAddOns"] = input.forceDeleteAddOns;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteDiskSnapshotRequest = (input, context) => {
    const bodyParams = {};
    if (input.diskSnapshotName !== undefined) {
        bodyParams["diskSnapshotName"] = input.diskSnapshotName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteDomainEntryRequest = (input, context) => {
    const bodyParams = {};
    if (input.domainEntry !== undefined) {
        bodyParams["domainEntry"] = serializeAws_json1_1DomainEntry(input.domainEntry, context);
    }
    if (input.domainName !== undefined) {
        bodyParams["domainName"] = input.domainName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteDomainRequest = (input, context) => {
    const bodyParams = {};
    if (input.domainName !== undefined) {
        bodyParams["domainName"] = input.domainName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteInstanceRequest = (input, context) => {
    const bodyParams = {};
    if (input.forceDeleteAddOns !== undefined) {
        bodyParams["forceDeleteAddOns"] = input.forceDeleteAddOns;
    }
    if (input.instanceName !== undefined) {
        bodyParams["instanceName"] = input.instanceName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteInstanceSnapshotRequest = (input, context) => {
    const bodyParams = {};
    if (input.instanceSnapshotName !== undefined) {
        bodyParams["instanceSnapshotName"] = input.instanceSnapshotName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteKeyPairRequest = (input, context) => {
    const bodyParams = {};
    if (input.keyPairName !== undefined) {
        bodyParams["keyPairName"] = input.keyPairName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteKnownHostKeysRequest = (input, context) => {
    const bodyParams = {};
    if (input.instanceName !== undefined) {
        bodyParams["instanceName"] = input.instanceName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteLoadBalancerRequest = (input, context) => {
    const bodyParams = {};
    if (input.loadBalancerName !== undefined) {
        bodyParams["loadBalancerName"] = input.loadBalancerName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteLoadBalancerTlsCertificateRequest = (input, context) => {
    const bodyParams = {};
    if (input.certificateName !== undefined) {
        bodyParams["certificateName"] = input.certificateName;
    }
    if (input.force !== undefined) {
        bodyParams["force"] = input.force;
    }
    if (input.loadBalancerName !== undefined) {
        bodyParams["loadBalancerName"] = input.loadBalancerName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteRelationalDatabaseRequest = (input, context) => {
    const bodyParams = {};
    if (input.finalRelationalDatabaseSnapshotName !== undefined) {
        bodyParams["finalRelationalDatabaseSnapshotName"] =
            input.finalRelationalDatabaseSnapshotName;
    }
    if (input.relationalDatabaseName !== undefined) {
        bodyParams["relationalDatabaseName"] = input.relationalDatabaseName;
    }
    if (input.skipFinalSnapshot !== undefined) {
        bodyParams["skipFinalSnapshot"] = input.skipFinalSnapshot;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteRelationalDatabaseSnapshotRequest = (input, context) => {
    const bodyParams = {};
    if (input.relationalDatabaseSnapshotName !== undefined) {
        bodyParams["relationalDatabaseSnapshotName"] =
            input.relationalDatabaseSnapshotName;
    }
    return bodyParams;
};
const serializeAws_json1_1DetachDiskRequest = (input, context) => {
    const bodyParams = {};
    if (input.diskName !== undefined) {
        bodyParams["diskName"] = input.diskName;
    }
    return bodyParams;
};
const serializeAws_json1_1DetachInstancesFromLoadBalancerRequest = (input, context) => {
    const bodyParams = {};
    if (input.instanceNames !== undefined) {
        bodyParams["instanceNames"] = serializeAws_json1_1ResourceNameList(input.instanceNames, context);
    }
    if (input.loadBalancerName !== undefined) {
        bodyParams["loadBalancerName"] = input.loadBalancerName;
    }
    return bodyParams;
};
const serializeAws_json1_1DetachStaticIpRequest = (input, context) => {
    const bodyParams = {};
    if (input.staticIpName !== undefined) {
        bodyParams["staticIpName"] = input.staticIpName;
    }
    return bodyParams;
};
const serializeAws_json1_1DisableAddOnRequest = (input, context) => {
    const bodyParams = {};
    if (input.addOnType !== undefined) {
        bodyParams["addOnType"] = input.addOnType;
    }
    if (input.resourceName !== undefined) {
        bodyParams["resourceName"] = input.resourceName;
    }
    return bodyParams;
};
const serializeAws_json1_1DiskMap = (input, context) => {
    const bodyParams = {};
    if (input.newDiskName !== undefined) {
        bodyParams["newDiskName"] = input.newDiskName;
    }
    if (input.originalDiskPath !== undefined) {
        bodyParams["originalDiskPath"] = input.originalDiskPath;
    }
    return bodyParams;
};
const serializeAws_json1_1DiskMapList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1DiskMap(entry, context));
    }
    return contents;
};
const serializeAws_json1_1DomainEntry = (input, context) => {
    const bodyParams = {};
    if (input.id !== undefined) {
        bodyParams["id"] = input.id;
    }
    if (input.isAlias !== undefined) {
        bodyParams["isAlias"] = input.isAlias;
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.options !== undefined) {
        bodyParams["options"] = serializeAws_json1_1DomainEntryOptions(input.options, context);
    }
    if (input.target !== undefined) {
        bodyParams["target"] = input.target;
    }
    if (input.type !== undefined) {
        bodyParams["type"] = input.type;
    }
    return bodyParams;
};
const serializeAws_json1_1DomainEntryOptions = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1DomainNameList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1DownloadDefaultKeyPairRequest = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_1EnableAddOnRequest = (input, context) => {
    const bodyParams = {};
    if (input.addOnRequest !== undefined) {
        bodyParams["addOnRequest"] = serializeAws_json1_1AddOnRequest(input.addOnRequest, context);
    }
    if (input.resourceName !== undefined) {
        bodyParams["resourceName"] = input.resourceName;
    }
    return bodyParams;
};
const serializeAws_json1_1ExportSnapshotRequest = (input, context) => {
    const bodyParams = {};
    if (input.sourceSnapshotName !== undefined) {
        bodyParams["sourceSnapshotName"] = input.sourceSnapshotName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetActiveNamesRequest = (input, context) => {
    const bodyParams = {};
    if (input.pageToken !== undefined) {
        bodyParams["pageToken"] = input.pageToken;
    }
    return bodyParams;
};
const serializeAws_json1_1GetAutoSnapshotsRequest = (input, context) => {
    const bodyParams = {};
    if (input.resourceName !== undefined) {
        bodyParams["resourceName"] = input.resourceName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetBlueprintsRequest = (input, context) => {
    const bodyParams = {};
    if (input.includeInactive !== undefined) {
        bodyParams["includeInactive"] = input.includeInactive;
    }
    if (input.pageToken !== undefined) {
        bodyParams["pageToken"] = input.pageToken;
    }
    return bodyParams;
};
const serializeAws_json1_1GetBundlesRequest = (input, context) => {
    const bodyParams = {};
    if (input.includeInactive !== undefined) {
        bodyParams["includeInactive"] = input.includeInactive;
    }
    if (input.pageToken !== undefined) {
        bodyParams["pageToken"] = input.pageToken;
    }
    return bodyParams;
};
const serializeAws_json1_1GetCloudFormationStackRecordsRequest = (input, context) => {
    const bodyParams = {};
    if (input.pageToken !== undefined) {
        bodyParams["pageToken"] = input.pageToken;
    }
    return bodyParams;
};
const serializeAws_json1_1GetDiskRequest = (input, context) => {
    const bodyParams = {};
    if (input.diskName !== undefined) {
        bodyParams["diskName"] = input.diskName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetDiskSnapshotRequest = (input, context) => {
    const bodyParams = {};
    if (input.diskSnapshotName !== undefined) {
        bodyParams["diskSnapshotName"] = input.diskSnapshotName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetDiskSnapshotsRequest = (input, context) => {
    const bodyParams = {};
    if (input.pageToken !== undefined) {
        bodyParams["pageToken"] = input.pageToken;
    }
    return bodyParams;
};
const serializeAws_json1_1GetDisksRequest = (input, context) => {
    const bodyParams = {};
    if (input.pageToken !== undefined) {
        bodyParams["pageToken"] = input.pageToken;
    }
    return bodyParams;
};
const serializeAws_json1_1GetDomainRequest = (input, context) => {
    const bodyParams = {};
    if (input.domainName !== undefined) {
        bodyParams["domainName"] = input.domainName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetDomainsRequest = (input, context) => {
    const bodyParams = {};
    if (input.pageToken !== undefined) {
        bodyParams["pageToken"] = input.pageToken;
    }
    return bodyParams;
};
const serializeAws_json1_1GetExportSnapshotRecordsRequest = (input, context) => {
    const bodyParams = {};
    if (input.pageToken !== undefined) {
        bodyParams["pageToken"] = input.pageToken;
    }
    return bodyParams;
};
const serializeAws_json1_1GetInstanceAccessDetailsRequest = (input, context) => {
    const bodyParams = {};
    if (input.instanceName !== undefined) {
        bodyParams["instanceName"] = input.instanceName;
    }
    if (input.protocol !== undefined) {
        bodyParams["protocol"] = input.protocol;
    }
    return bodyParams;
};
const serializeAws_json1_1GetInstanceMetricDataRequest = (input, context) => {
    const bodyParams = {};
    if (input.endTime !== undefined) {
        bodyParams["endTime"] = Math.round(input.endTime.getTime() / 1000);
    }
    if (input.instanceName !== undefined) {
        bodyParams["instanceName"] = input.instanceName;
    }
    if (input.metricName !== undefined) {
        bodyParams["metricName"] = input.metricName;
    }
    if (input.period !== undefined) {
        bodyParams["period"] = input.period;
    }
    if (input.startTime !== undefined) {
        bodyParams["startTime"] = Math.round(input.startTime.getTime() / 1000);
    }
    if (input.statistics !== undefined) {
        bodyParams["statistics"] = serializeAws_json1_1MetricStatisticList(input.statistics, context);
    }
    if (input.unit !== undefined) {
        bodyParams["unit"] = input.unit;
    }
    return bodyParams;
};
const serializeAws_json1_1GetInstancePortStatesRequest = (input, context) => {
    const bodyParams = {};
    if (input.instanceName !== undefined) {
        bodyParams["instanceName"] = input.instanceName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetInstanceRequest = (input, context) => {
    const bodyParams = {};
    if (input.instanceName !== undefined) {
        bodyParams["instanceName"] = input.instanceName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetInstanceSnapshotRequest = (input, context) => {
    const bodyParams = {};
    if (input.instanceSnapshotName !== undefined) {
        bodyParams["instanceSnapshotName"] = input.instanceSnapshotName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetInstanceSnapshotsRequest = (input, context) => {
    const bodyParams = {};
    if (input.pageToken !== undefined) {
        bodyParams["pageToken"] = input.pageToken;
    }
    return bodyParams;
};
const serializeAws_json1_1GetInstanceStateRequest = (input, context) => {
    const bodyParams = {};
    if (input.instanceName !== undefined) {
        bodyParams["instanceName"] = input.instanceName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetInstancesRequest = (input, context) => {
    const bodyParams = {};
    if (input.pageToken !== undefined) {
        bodyParams["pageToken"] = input.pageToken;
    }
    return bodyParams;
};
const serializeAws_json1_1GetKeyPairRequest = (input, context) => {
    const bodyParams = {};
    if (input.keyPairName !== undefined) {
        bodyParams["keyPairName"] = input.keyPairName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetKeyPairsRequest = (input, context) => {
    const bodyParams = {};
    if (input.pageToken !== undefined) {
        bodyParams["pageToken"] = input.pageToken;
    }
    return bodyParams;
};
const serializeAws_json1_1GetLoadBalancerMetricDataRequest = (input, context) => {
    const bodyParams = {};
    if (input.endTime !== undefined) {
        bodyParams["endTime"] = Math.round(input.endTime.getTime() / 1000);
    }
    if (input.loadBalancerName !== undefined) {
        bodyParams["loadBalancerName"] = input.loadBalancerName;
    }
    if (input.metricName !== undefined) {
        bodyParams["metricName"] = input.metricName;
    }
    if (input.period !== undefined) {
        bodyParams["period"] = input.period;
    }
    if (input.startTime !== undefined) {
        bodyParams["startTime"] = Math.round(input.startTime.getTime() / 1000);
    }
    if (input.statistics !== undefined) {
        bodyParams["statistics"] = serializeAws_json1_1MetricStatisticList(input.statistics, context);
    }
    if (input.unit !== undefined) {
        bodyParams["unit"] = input.unit;
    }
    return bodyParams;
};
const serializeAws_json1_1GetLoadBalancerRequest = (input, context) => {
    const bodyParams = {};
    if (input.loadBalancerName !== undefined) {
        bodyParams["loadBalancerName"] = input.loadBalancerName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetLoadBalancerTlsCertificatesRequest = (input, context) => {
    const bodyParams = {};
    if (input.loadBalancerName !== undefined) {
        bodyParams["loadBalancerName"] = input.loadBalancerName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetLoadBalancersRequest = (input, context) => {
    const bodyParams = {};
    if (input.pageToken !== undefined) {
        bodyParams["pageToken"] = input.pageToken;
    }
    return bodyParams;
};
const serializeAws_json1_1GetOperationRequest = (input, context) => {
    const bodyParams = {};
    if (input.operationId !== undefined) {
        bodyParams["operationId"] = input.operationId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetOperationsForResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.pageToken !== undefined) {
        bodyParams["pageToken"] = input.pageToken;
    }
    if (input.resourceName !== undefined) {
        bodyParams["resourceName"] = input.resourceName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetOperationsRequest = (input, context) => {
    const bodyParams = {};
    if (input.pageToken !== undefined) {
        bodyParams["pageToken"] = input.pageToken;
    }
    return bodyParams;
};
const serializeAws_json1_1GetRegionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.includeAvailabilityZones !== undefined) {
        bodyParams["includeAvailabilityZones"] = input.includeAvailabilityZones;
    }
    if (input.includeRelationalDatabaseAvailabilityZones !== undefined) {
        bodyParams["includeRelationalDatabaseAvailabilityZones"] =
            input.includeRelationalDatabaseAvailabilityZones;
    }
    return bodyParams;
};
const serializeAws_json1_1GetRelationalDatabaseBlueprintsRequest = (input, context) => {
    const bodyParams = {};
    if (input.pageToken !== undefined) {
        bodyParams["pageToken"] = input.pageToken;
    }
    return bodyParams;
};
const serializeAws_json1_1GetRelationalDatabaseBundlesRequest = (input, context) => {
    const bodyParams = {};
    if (input.pageToken !== undefined) {
        bodyParams["pageToken"] = input.pageToken;
    }
    return bodyParams;
};
const serializeAws_json1_1GetRelationalDatabaseEventsRequest = (input, context) => {
    const bodyParams = {};
    if (input.durationInMinutes !== undefined) {
        bodyParams["durationInMinutes"] = input.durationInMinutes;
    }
    if (input.pageToken !== undefined) {
        bodyParams["pageToken"] = input.pageToken;
    }
    if (input.relationalDatabaseName !== undefined) {
        bodyParams["relationalDatabaseName"] = input.relationalDatabaseName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetRelationalDatabaseLogEventsRequest = (input, context) => {
    const bodyParams = {};
    if (input.endTime !== undefined) {
        bodyParams["endTime"] = Math.round(input.endTime.getTime() / 1000);
    }
    if (input.logStreamName !== undefined) {
        bodyParams["logStreamName"] = input.logStreamName;
    }
    if (input.pageToken !== undefined) {
        bodyParams["pageToken"] = input.pageToken;
    }
    if (input.relationalDatabaseName !== undefined) {
        bodyParams["relationalDatabaseName"] = input.relationalDatabaseName;
    }
    if (input.startFromHead !== undefined) {
        bodyParams["startFromHead"] = input.startFromHead;
    }
    if (input.startTime !== undefined) {
        bodyParams["startTime"] = Math.round(input.startTime.getTime() / 1000);
    }
    return bodyParams;
};
const serializeAws_json1_1GetRelationalDatabaseLogStreamsRequest = (input, context) => {
    const bodyParams = {};
    if (input.relationalDatabaseName !== undefined) {
        bodyParams["relationalDatabaseName"] = input.relationalDatabaseName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetRelationalDatabaseMasterUserPasswordRequest = (input, context) => {
    const bodyParams = {};
    if (input.passwordVersion !== undefined) {
        bodyParams["passwordVersion"] = input.passwordVersion;
    }
    if (input.relationalDatabaseName !== undefined) {
        bodyParams["relationalDatabaseName"] = input.relationalDatabaseName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetRelationalDatabaseMetricDataRequest = (input, context) => {
    const bodyParams = {};
    if (input.endTime !== undefined) {
        bodyParams["endTime"] = Math.round(input.endTime.getTime() / 1000);
    }
    if (input.metricName !== undefined) {
        bodyParams["metricName"] = input.metricName;
    }
    if (input.period !== undefined) {
        bodyParams["period"] = input.period;
    }
    if (input.relationalDatabaseName !== undefined) {
        bodyParams["relationalDatabaseName"] = input.relationalDatabaseName;
    }
    if (input.startTime !== undefined) {
        bodyParams["startTime"] = Math.round(input.startTime.getTime() / 1000);
    }
    if (input.statistics !== undefined) {
        bodyParams["statistics"] = serializeAws_json1_1MetricStatisticList(input.statistics, context);
    }
    if (input.unit !== undefined) {
        bodyParams["unit"] = input.unit;
    }
    return bodyParams;
};
const serializeAws_json1_1GetRelationalDatabaseParametersRequest = (input, context) => {
    const bodyParams = {};
    if (input.pageToken !== undefined) {
        bodyParams["pageToken"] = input.pageToken;
    }
    if (input.relationalDatabaseName !== undefined) {
        bodyParams["relationalDatabaseName"] = input.relationalDatabaseName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetRelationalDatabaseRequest = (input, context) => {
    const bodyParams = {};
    if (input.relationalDatabaseName !== undefined) {
        bodyParams["relationalDatabaseName"] = input.relationalDatabaseName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetRelationalDatabaseSnapshotRequest = (input, context) => {
    const bodyParams = {};
    if (input.relationalDatabaseSnapshotName !== undefined) {
        bodyParams["relationalDatabaseSnapshotName"] =
            input.relationalDatabaseSnapshotName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetRelationalDatabaseSnapshotsRequest = (input, context) => {
    const bodyParams = {};
    if (input.pageToken !== undefined) {
        bodyParams["pageToken"] = input.pageToken;
    }
    return bodyParams;
};
const serializeAws_json1_1GetRelationalDatabasesRequest = (input, context) => {
    const bodyParams = {};
    if (input.pageToken !== undefined) {
        bodyParams["pageToken"] = input.pageToken;
    }
    return bodyParams;
};
const serializeAws_json1_1GetStaticIpRequest = (input, context) => {
    const bodyParams = {};
    if (input.staticIpName !== undefined) {
        bodyParams["staticIpName"] = input.staticIpName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetStaticIpsRequest = (input, context) => {
    const bodyParams = {};
    if (input.pageToken !== undefined) {
        bodyParams["pageToken"] = input.pageToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ImportKeyPairRequest = (input, context) => {
    const bodyParams = {};
    if (input.keyPairName !== undefined) {
        bodyParams["keyPairName"] = input.keyPairName;
    }
    if (input.publicKeyBase64 !== undefined) {
        bodyParams["publicKeyBase64"] = input.publicKeyBase64;
    }
    return bodyParams;
};
const serializeAws_json1_1InstanceEntry = (input, context) => {
    const bodyParams = {};
    if (input.availabilityZone !== undefined) {
        bodyParams["availabilityZone"] = input.availabilityZone;
    }
    if (input.instanceType !== undefined) {
        bodyParams["instanceType"] = input.instanceType;
    }
    if (input.portInfoSource !== undefined) {
        bodyParams["portInfoSource"] = input.portInfoSource;
    }
    if (input.sourceName !== undefined) {
        bodyParams["sourceName"] = input.sourceName;
    }
    if (input.userData !== undefined) {
        bodyParams["userData"] = input.userData;
    }
    return bodyParams;
};
const serializeAws_json1_1InstanceEntryList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1InstanceEntry(entry, context));
    }
    return contents;
};
const serializeAws_json1_1IsVpcPeeredRequest = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_1MetricStatisticList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1OpenInstancePublicPortsRequest = (input, context) => {
    const bodyParams = {};
    if (input.instanceName !== undefined) {
        bodyParams["instanceName"] = input.instanceName;
    }
    if (input.portInfo !== undefined) {
        bodyParams["portInfo"] = serializeAws_json1_1PortInfo(input.portInfo, context);
    }
    return bodyParams;
};
const serializeAws_json1_1PeerVpcRequest = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_1PortInfo = (input, context) => {
    const bodyParams = {};
    if (input.fromPort !== undefined) {
        bodyParams["fromPort"] = input.fromPort;
    }
    if (input.protocol !== undefined) {
        bodyParams["protocol"] = input.protocol;
    }
    if (input.toPort !== undefined) {
        bodyParams["toPort"] = input.toPort;
    }
    return bodyParams;
};
const serializeAws_json1_1PortInfoList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1PortInfo(entry, context));
    }
    return contents;
};
const serializeAws_json1_1PutInstancePublicPortsRequest = (input, context) => {
    const bodyParams = {};
    if (input.instanceName !== undefined) {
        bodyParams["instanceName"] = input.instanceName;
    }
    if (input.portInfos !== undefined) {
        bodyParams["portInfos"] = serializeAws_json1_1PortInfoList(input.portInfos, context);
    }
    return bodyParams;
};
const serializeAws_json1_1RebootInstanceRequest = (input, context) => {
    const bodyParams = {};
    if (input.instanceName !== undefined) {
        bodyParams["instanceName"] = input.instanceName;
    }
    return bodyParams;
};
const serializeAws_json1_1RebootRelationalDatabaseRequest = (input, context) => {
    const bodyParams = {};
    if (input.relationalDatabaseName !== undefined) {
        bodyParams["relationalDatabaseName"] = input.relationalDatabaseName;
    }
    return bodyParams;
};
const serializeAws_json1_1RelationalDatabaseParameter = (input, context) => {
    const bodyParams = {};
    if (input.allowedValues !== undefined) {
        bodyParams["allowedValues"] = input.allowedValues;
    }
    if (input.applyMethod !== undefined) {
        bodyParams["applyMethod"] = input.applyMethod;
    }
    if (input.applyType !== undefined) {
        bodyParams["applyType"] = input.applyType;
    }
    if (input.dataType !== undefined) {
        bodyParams["dataType"] = input.dataType;
    }
    if (input.description !== undefined) {
        bodyParams["description"] = input.description;
    }
    if (input.isModifiable !== undefined) {
        bodyParams["isModifiable"] = input.isModifiable;
    }
    if (input.parameterName !== undefined) {
        bodyParams["parameterName"] = input.parameterName;
    }
    if (input.parameterValue !== undefined) {
        bodyParams["parameterValue"] = input.parameterValue;
    }
    return bodyParams;
};
const serializeAws_json1_1RelationalDatabaseParameterList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1RelationalDatabaseParameter(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ReleaseStaticIpRequest = (input, context) => {
    const bodyParams = {};
    if (input.staticIpName !== undefined) {
        bodyParams["staticIpName"] = input.staticIpName;
    }
    return bodyParams;
};
const serializeAws_json1_1ResourceNameList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1StartInstanceRequest = (input, context) => {
    const bodyParams = {};
    if (input.instanceName !== undefined) {
        bodyParams["instanceName"] = input.instanceName;
    }
    return bodyParams;
};
const serializeAws_json1_1StartRelationalDatabaseRequest = (input, context) => {
    const bodyParams = {};
    if (input.relationalDatabaseName !== undefined) {
        bodyParams["relationalDatabaseName"] = input.relationalDatabaseName;
    }
    return bodyParams;
};
const serializeAws_json1_1StopInstanceRequest = (input, context) => {
    const bodyParams = {};
    if (input.force !== undefined) {
        bodyParams["force"] = input.force;
    }
    if (input.instanceName !== undefined) {
        bodyParams["instanceName"] = input.instanceName;
    }
    return bodyParams;
};
const serializeAws_json1_1StopRelationalDatabaseRequest = (input, context) => {
    const bodyParams = {};
    if (input.relationalDatabaseName !== undefined) {
        bodyParams["relationalDatabaseName"] = input.relationalDatabaseName;
    }
    if (input.relationalDatabaseSnapshotName !== undefined) {
        bodyParams["relationalDatabaseSnapshotName"] =
            input.relationalDatabaseSnapshotName;
    }
    return bodyParams;
};
const serializeAws_json1_1StringList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1Tag = (input, context) => {
    const bodyParams = {};
    if (input.key !== undefined) {
        bodyParams["key"] = input.key;
    }
    if (input.value !== undefined) {
        bodyParams["value"] = input.value;
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
    if (input.resourceArn !== undefined) {
        bodyParams["resourceArn"] = input.resourceArn;
    }
    if (input.resourceName !== undefined) {
        bodyParams["resourceName"] = input.resourceName;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UnpeerVpcRequest = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.resourceArn !== undefined) {
        bodyParams["resourceArn"] = input.resourceArn;
    }
    if (input.resourceName !== undefined) {
        bodyParams["resourceName"] = input.resourceName;
    }
    if (input.tagKeys !== undefined) {
        bodyParams["tagKeys"] = serializeAws_json1_1TagKeyList(input.tagKeys, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateDomainEntryRequest = (input, context) => {
    const bodyParams = {};
    if (input.domainEntry !== undefined) {
        bodyParams["domainEntry"] = serializeAws_json1_1DomainEntry(input.domainEntry, context);
    }
    if (input.domainName !== undefined) {
        bodyParams["domainName"] = input.domainName;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateLoadBalancerAttributeRequest = (input, context) => {
    const bodyParams = {};
    if (input.attributeName !== undefined) {
        bodyParams["attributeName"] = input.attributeName;
    }
    if (input.attributeValue !== undefined) {
        bodyParams["attributeValue"] = input.attributeValue;
    }
    if (input.loadBalancerName !== undefined) {
        bodyParams["loadBalancerName"] = input.loadBalancerName;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateRelationalDatabaseParametersRequest = (input, context) => {
    const bodyParams = {};
    if (input.parameters !== undefined) {
        bodyParams["parameters"] = serializeAws_json1_1RelationalDatabaseParameterList(input.parameters, context);
    }
    if (input.relationalDatabaseName !== undefined) {
        bodyParams["relationalDatabaseName"] = input.relationalDatabaseName;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateRelationalDatabaseRequest = (input, context) => {
    const bodyParams = {};
    if (input.applyImmediately !== undefined) {
        bodyParams["applyImmediately"] = input.applyImmediately;
    }
    if (input.caCertificateIdentifier !== undefined) {
        bodyParams["caCertificateIdentifier"] = input.caCertificateIdentifier;
    }
    if (input.disableBackupRetention !== undefined) {
        bodyParams["disableBackupRetention"] = input.disableBackupRetention;
    }
    if (input.enableBackupRetention !== undefined) {
        bodyParams["enableBackupRetention"] = input.enableBackupRetention;
    }
    if (input.masterUserPassword !== undefined) {
        bodyParams["masterUserPassword"] = input.masterUserPassword;
    }
    if (input.preferredBackupWindow !== undefined) {
        bodyParams["preferredBackupWindow"] = input.preferredBackupWindow;
    }
    if (input.preferredMaintenanceWindow !== undefined) {
        bodyParams["preferredMaintenanceWindow"] = input.preferredMaintenanceWindow;
    }
    if (input.publiclyAccessible !== undefined) {
        bodyParams["publiclyAccessible"] = input.publiclyAccessible;
    }
    if (input.relationalDatabaseName !== undefined) {
        bodyParams["relationalDatabaseName"] = input.relationalDatabaseName;
    }
    if (input.rotateMasterUserPassword !== undefined) {
        bodyParams["rotateMasterUserPassword"] = input.rotateMasterUserPassword;
    }
    return bodyParams;
};
const deserializeAws_json1_1AccessDeniedException = (output, context) => {
    let contents = {
        __type: "AccessDeniedException",
        code: undefined,
        docs: undefined,
        message: undefined,
        tip: undefined
    };
    if (output.code !== undefined && output.code !== null) {
        contents.code = output.code;
    }
    if (output.docs !== undefined && output.docs !== null) {
        contents.docs = output.docs;
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    if (output.tip !== undefined && output.tip !== null) {
        contents.tip = output.tip;
    }
    return contents;
};
const deserializeAws_json1_1AccountSetupInProgressException = (output, context) => {
    let contents = {
        __type: "AccountSetupInProgressException",
        code: undefined,
        docs: undefined,
        message: undefined,
        tip: undefined
    };
    if (output.code !== undefined && output.code !== null) {
        contents.code = output.code;
    }
    if (output.docs !== undefined && output.docs !== null) {
        contents.docs = output.docs;
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    if (output.tip !== undefined && output.tip !== null) {
        contents.tip = output.tip;
    }
    return contents;
};
const deserializeAws_json1_1AddOn = (output, context) => {
    let contents = {
        __type: "AddOn",
        name: undefined,
        nextSnapshotTimeOfDay: undefined,
        snapshotTimeOfDay: undefined,
        status: undefined
    };
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.nextSnapshotTimeOfDay !== undefined &&
        output.nextSnapshotTimeOfDay !== null) {
        contents.nextSnapshotTimeOfDay = output.nextSnapshotTimeOfDay;
    }
    if (output.snapshotTimeOfDay !== undefined &&
        output.snapshotTimeOfDay !== null) {
        contents.snapshotTimeOfDay = output.snapshotTimeOfDay;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    return contents;
};
const deserializeAws_json1_1AddOnList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1AddOn(entry, context));
};
const deserializeAws_json1_1AllocateStaticIpResult = (output, context) => {
    let contents = {
        __type: "AllocateStaticIpResult",
        operations: undefined
    };
    if (output.operations !== undefined && output.operations !== null) {
        contents.operations = deserializeAws_json1_1OperationList(output.operations, context);
    }
    return contents;
};
const deserializeAws_json1_1AttachDiskResult = (output, context) => {
    let contents = {
        __type: "AttachDiskResult",
        operations: undefined
    };
    if (output.operations !== undefined && output.operations !== null) {
        contents.operations = deserializeAws_json1_1OperationList(output.operations, context);
    }
    return contents;
};
const deserializeAws_json1_1AttachInstancesToLoadBalancerResult = (output, context) => {
    let contents = {
        __type: "AttachInstancesToLoadBalancerResult",
        operations: undefined
    };
    if (output.operations !== undefined && output.operations !== null) {
        contents.operations = deserializeAws_json1_1OperationList(output.operations, context);
    }
    return contents;
};
const deserializeAws_json1_1AttachLoadBalancerTlsCertificateResult = (output, context) => {
    let contents = {
        __type: "AttachLoadBalancerTlsCertificateResult",
        operations: undefined
    };
    if (output.operations !== undefined && output.operations !== null) {
        contents.operations = deserializeAws_json1_1OperationList(output.operations, context);
    }
    return contents;
};
const deserializeAws_json1_1AttachStaticIpResult = (output, context) => {
    let contents = {
        __type: "AttachStaticIpResult",
        operations: undefined
    };
    if (output.operations !== undefined && output.operations !== null) {
        contents.operations = deserializeAws_json1_1OperationList(output.operations, context);
    }
    return contents;
};
const deserializeAws_json1_1AttachedDisk = (output, context) => {
    let contents = {
        __type: "AttachedDisk",
        path: undefined,
        sizeInGb: undefined
    };
    if (output.path !== undefined && output.path !== null) {
        contents.path = output.path;
    }
    if (output.sizeInGb !== undefined && output.sizeInGb !== null) {
        contents.sizeInGb = output.sizeInGb;
    }
    return contents;
};
const deserializeAws_json1_1AttachedDiskList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1AttachedDisk(entry, context));
};
const deserializeAws_json1_1AutoSnapshotDetails = (output, context) => {
    let contents = {
        __type: "AutoSnapshotDetails",
        createdAt: undefined,
        date: undefined,
        fromAttachedDisks: undefined,
        status: undefined
    };
    if (output.createdAt !== undefined && output.createdAt !== null) {
        contents.createdAt = new Date(Math.round(output.createdAt * 1000));
    }
    if (output.date !== undefined && output.date !== null) {
        contents.date = output.date;
    }
    if (output.fromAttachedDisks !== undefined &&
        output.fromAttachedDisks !== null) {
        contents.fromAttachedDisks = deserializeAws_json1_1AttachedDiskList(output.fromAttachedDisks, context);
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    return contents;
};
const deserializeAws_json1_1AutoSnapshotDetailsList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1AutoSnapshotDetails(entry, context));
};
const deserializeAws_json1_1AvailabilityZone = (output, context) => {
    let contents = {
        __type: "AvailabilityZone",
        state: undefined,
        zoneName: undefined
    };
    if (output.state !== undefined && output.state !== null) {
        contents.state = output.state;
    }
    if (output.zoneName !== undefined && output.zoneName !== null) {
        contents.zoneName = output.zoneName;
    }
    return contents;
};
const deserializeAws_json1_1AvailabilityZoneList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1AvailabilityZone(entry, context));
};
const deserializeAws_json1_1Blueprint = (output, context) => {
    let contents = {
        __type: "Blueprint",
        blueprintId: undefined,
        description: undefined,
        group: undefined,
        isActive: undefined,
        licenseUrl: undefined,
        minPower: undefined,
        name: undefined,
        platform: undefined,
        productUrl: undefined,
        type: undefined,
        version: undefined,
        versionCode: undefined
    };
    if (output.blueprintId !== undefined && output.blueprintId !== null) {
        contents.blueprintId = output.blueprintId;
    }
    if (output.description !== undefined && output.description !== null) {
        contents.description = output.description;
    }
    if (output.group !== undefined && output.group !== null) {
        contents.group = output.group;
    }
    if (output.isActive !== undefined && output.isActive !== null) {
        contents.isActive = output.isActive;
    }
    if (output.licenseUrl !== undefined && output.licenseUrl !== null) {
        contents.licenseUrl = output.licenseUrl;
    }
    if (output.minPower !== undefined && output.minPower !== null) {
        contents.minPower = output.minPower;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.platform !== undefined && output.platform !== null) {
        contents.platform = output.platform;
    }
    if (output.productUrl !== undefined && output.productUrl !== null) {
        contents.productUrl = output.productUrl;
    }
    if (output.type !== undefined && output.type !== null) {
        contents.type = output.type;
    }
    if (output.version !== undefined && output.version !== null) {
        contents.version = output.version;
    }
    if (output.versionCode !== undefined && output.versionCode !== null) {
        contents.versionCode = output.versionCode;
    }
    return contents;
};
const deserializeAws_json1_1BlueprintList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Blueprint(entry, context));
};
const deserializeAws_json1_1Bundle = (output, context) => {
    let contents = {
        __type: "Bundle",
        bundleId: undefined,
        cpuCount: undefined,
        diskSizeInGb: undefined,
        instanceType: undefined,
        isActive: undefined,
        name: undefined,
        power: undefined,
        price: undefined,
        ramSizeInGb: undefined,
        supportedPlatforms: undefined,
        transferPerMonthInGb: undefined
    };
    if (output.bundleId !== undefined && output.bundleId !== null) {
        contents.bundleId = output.bundleId;
    }
    if (output.cpuCount !== undefined && output.cpuCount !== null) {
        contents.cpuCount = output.cpuCount;
    }
    if (output.diskSizeInGb !== undefined && output.diskSizeInGb !== null) {
        contents.diskSizeInGb = output.diskSizeInGb;
    }
    if (output.instanceType !== undefined && output.instanceType !== null) {
        contents.instanceType = output.instanceType;
    }
    if (output.isActive !== undefined && output.isActive !== null) {
        contents.isActive = output.isActive;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.power !== undefined && output.power !== null) {
        contents.power = output.power;
    }
    if (output.price !== undefined && output.price !== null) {
        contents.price = output.price;
    }
    if (output.ramSizeInGb !== undefined && output.ramSizeInGb !== null) {
        contents.ramSizeInGb = output.ramSizeInGb;
    }
    if (output.supportedPlatforms !== undefined &&
        output.supportedPlatforms !== null) {
        contents.supportedPlatforms = deserializeAws_json1_1InstancePlatformList(output.supportedPlatforms, context);
    }
    if (output.transferPerMonthInGb !== undefined &&
        output.transferPerMonthInGb !== null) {
        contents.transferPerMonthInGb = output.transferPerMonthInGb;
    }
    return contents;
};
const deserializeAws_json1_1BundleList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Bundle(entry, context));
};
const deserializeAws_json1_1CloseInstancePublicPortsResult = (output, context) => {
    let contents = {
        __type: "CloseInstancePublicPortsResult",
        operation: undefined
    };
    if (output.operation !== undefined && output.operation !== null) {
        contents.operation = deserializeAws_json1_1Operation(output.operation, context);
    }
    return contents;
};
const deserializeAws_json1_1CloudFormationStackRecord = (output, context) => {
    let contents = {
        __type: "CloudFormationStackRecord",
        arn: undefined,
        createdAt: undefined,
        destinationInfo: undefined,
        location: undefined,
        name: undefined,
        resourceType: undefined,
        sourceInfo: undefined,
        state: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.createdAt !== undefined && output.createdAt !== null) {
        contents.createdAt = new Date(Math.round(output.createdAt * 1000));
    }
    if (output.destinationInfo !== undefined && output.destinationInfo !== null) {
        contents.destinationInfo = deserializeAws_json1_1DestinationInfo(output.destinationInfo, context);
    }
    if (output.location !== undefined && output.location !== null) {
        contents.location = deserializeAws_json1_1ResourceLocation(output.location, context);
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.resourceType !== undefined && output.resourceType !== null) {
        contents.resourceType = output.resourceType;
    }
    if (output.sourceInfo !== undefined && output.sourceInfo !== null) {
        contents.sourceInfo = deserializeAws_json1_1CloudFormationStackRecordSourceInfoList(output.sourceInfo, context);
    }
    if (output.state !== undefined && output.state !== null) {
        contents.state = output.state;
    }
    return contents;
};
const deserializeAws_json1_1CloudFormationStackRecordList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1CloudFormationStackRecord(entry, context));
};
const deserializeAws_json1_1CloudFormationStackRecordSourceInfo = (output, context) => {
    let contents = {
        __type: "CloudFormationStackRecordSourceInfo",
        arn: undefined,
        name: undefined,
        resourceType: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.resourceType !== undefined && output.resourceType !== null) {
        contents.resourceType = output.resourceType;
    }
    return contents;
};
const deserializeAws_json1_1CloudFormationStackRecordSourceInfoList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1CloudFormationStackRecordSourceInfo(entry, context));
};
const deserializeAws_json1_1CopySnapshotResult = (output, context) => {
    let contents = {
        __type: "CopySnapshotResult",
        operations: undefined
    };
    if (output.operations !== undefined && output.operations !== null) {
        contents.operations = deserializeAws_json1_1OperationList(output.operations, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateCloudFormationStackResult = (output, context) => {
    let contents = {
        __type: "CreateCloudFormationStackResult",
        operations: undefined
    };
    if (output.operations !== undefined && output.operations !== null) {
        contents.operations = deserializeAws_json1_1OperationList(output.operations, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateDiskFromSnapshotResult = (output, context) => {
    let contents = {
        __type: "CreateDiskFromSnapshotResult",
        operations: undefined
    };
    if (output.operations !== undefined && output.operations !== null) {
        contents.operations = deserializeAws_json1_1OperationList(output.operations, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateDiskResult = (output, context) => {
    let contents = {
        __type: "CreateDiskResult",
        operations: undefined
    };
    if (output.operations !== undefined && output.operations !== null) {
        contents.operations = deserializeAws_json1_1OperationList(output.operations, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateDiskSnapshotResult = (output, context) => {
    let contents = {
        __type: "CreateDiskSnapshotResult",
        operations: undefined
    };
    if (output.operations !== undefined && output.operations !== null) {
        contents.operations = deserializeAws_json1_1OperationList(output.operations, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateDomainEntryResult = (output, context) => {
    let contents = {
        __type: "CreateDomainEntryResult",
        operation: undefined
    };
    if (output.operation !== undefined && output.operation !== null) {
        contents.operation = deserializeAws_json1_1Operation(output.operation, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateDomainResult = (output, context) => {
    let contents = {
        __type: "CreateDomainResult",
        operation: undefined
    };
    if (output.operation !== undefined && output.operation !== null) {
        contents.operation = deserializeAws_json1_1Operation(output.operation, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateInstanceSnapshotResult = (output, context) => {
    let contents = {
        __type: "CreateInstanceSnapshotResult",
        operations: undefined
    };
    if (output.operations !== undefined && output.operations !== null) {
        contents.operations = deserializeAws_json1_1OperationList(output.operations, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateInstancesFromSnapshotResult = (output, context) => {
    let contents = {
        __type: "CreateInstancesFromSnapshotResult",
        operations: undefined
    };
    if (output.operations !== undefined && output.operations !== null) {
        contents.operations = deserializeAws_json1_1OperationList(output.operations, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateInstancesResult = (output, context) => {
    let contents = {
        __type: "CreateInstancesResult",
        operations: undefined
    };
    if (output.operations !== undefined && output.operations !== null) {
        contents.operations = deserializeAws_json1_1OperationList(output.operations, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateKeyPairResult = (output, context) => {
    let contents = {
        __type: "CreateKeyPairResult",
        keyPair: undefined,
        operation: undefined,
        privateKeyBase64: undefined,
        publicKeyBase64: undefined
    };
    if (output.keyPair !== undefined && output.keyPair !== null) {
        contents.keyPair = deserializeAws_json1_1KeyPair(output.keyPair, context);
    }
    if (output.operation !== undefined && output.operation !== null) {
        contents.operation = deserializeAws_json1_1Operation(output.operation, context);
    }
    if (output.privateKeyBase64 !== undefined &&
        output.privateKeyBase64 !== null) {
        contents.privateKeyBase64 = output.privateKeyBase64;
    }
    if (output.publicKeyBase64 !== undefined && output.publicKeyBase64 !== null) {
        contents.publicKeyBase64 = output.publicKeyBase64;
    }
    return contents;
};
const deserializeAws_json1_1CreateLoadBalancerResult = (output, context) => {
    let contents = {
        __type: "CreateLoadBalancerResult",
        operations: undefined
    };
    if (output.operations !== undefined && output.operations !== null) {
        contents.operations = deserializeAws_json1_1OperationList(output.operations, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateLoadBalancerTlsCertificateResult = (output, context) => {
    let contents = {
        __type: "CreateLoadBalancerTlsCertificateResult",
        operations: undefined
    };
    if (output.operations !== undefined && output.operations !== null) {
        contents.operations = deserializeAws_json1_1OperationList(output.operations, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateRelationalDatabaseFromSnapshotResult = (output, context) => {
    let contents = {
        __type: "CreateRelationalDatabaseFromSnapshotResult",
        operations: undefined
    };
    if (output.operations !== undefined && output.operations !== null) {
        contents.operations = deserializeAws_json1_1OperationList(output.operations, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateRelationalDatabaseResult = (output, context) => {
    let contents = {
        __type: "CreateRelationalDatabaseResult",
        operations: undefined
    };
    if (output.operations !== undefined && output.operations !== null) {
        contents.operations = deserializeAws_json1_1OperationList(output.operations, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateRelationalDatabaseSnapshotResult = (output, context) => {
    let contents = {
        __type: "CreateRelationalDatabaseSnapshotResult",
        operations: undefined
    };
    if (output.operations !== undefined && output.operations !== null) {
        contents.operations = deserializeAws_json1_1OperationList(output.operations, context);
    }
    return contents;
};
const deserializeAws_json1_1DeleteAutoSnapshotResult = (output, context) => {
    let contents = {
        __type: "DeleteAutoSnapshotResult",
        operations: undefined
    };
    if (output.operations !== undefined && output.operations !== null) {
        contents.operations = deserializeAws_json1_1OperationList(output.operations, context);
    }
    return contents;
};
const deserializeAws_json1_1DeleteDiskResult = (output, context) => {
    let contents = {
        __type: "DeleteDiskResult",
        operations: undefined
    };
    if (output.operations !== undefined && output.operations !== null) {
        contents.operations = deserializeAws_json1_1OperationList(output.operations, context);
    }
    return contents;
};
const deserializeAws_json1_1DeleteDiskSnapshotResult = (output, context) => {
    let contents = {
        __type: "DeleteDiskSnapshotResult",
        operations: undefined
    };
    if (output.operations !== undefined && output.operations !== null) {
        contents.operations = deserializeAws_json1_1OperationList(output.operations, context);
    }
    return contents;
};
const deserializeAws_json1_1DeleteDomainEntryResult = (output, context) => {
    let contents = {
        __type: "DeleteDomainEntryResult",
        operation: undefined
    };
    if (output.operation !== undefined && output.operation !== null) {
        contents.operation = deserializeAws_json1_1Operation(output.operation, context);
    }
    return contents;
};
const deserializeAws_json1_1DeleteDomainResult = (output, context) => {
    let contents = {
        __type: "DeleteDomainResult",
        operation: undefined
    };
    if (output.operation !== undefined && output.operation !== null) {
        contents.operation = deserializeAws_json1_1Operation(output.operation, context);
    }
    return contents;
};
const deserializeAws_json1_1DeleteInstanceResult = (output, context) => {
    let contents = {
        __type: "DeleteInstanceResult",
        operations: undefined
    };
    if (output.operations !== undefined && output.operations !== null) {
        contents.operations = deserializeAws_json1_1OperationList(output.operations, context);
    }
    return contents;
};
const deserializeAws_json1_1DeleteInstanceSnapshotResult = (output, context) => {
    let contents = {
        __type: "DeleteInstanceSnapshotResult",
        operations: undefined
    };
    if (output.operations !== undefined && output.operations !== null) {
        contents.operations = deserializeAws_json1_1OperationList(output.operations, context);
    }
    return contents;
};
const deserializeAws_json1_1DeleteKeyPairResult = (output, context) => {
    let contents = {
        __type: "DeleteKeyPairResult",
        operation: undefined
    };
    if (output.operation !== undefined && output.operation !== null) {
        contents.operation = deserializeAws_json1_1Operation(output.operation, context);
    }
    return contents;
};
const deserializeAws_json1_1DeleteKnownHostKeysResult = (output, context) => {
    let contents = {
        __type: "DeleteKnownHostKeysResult",
        operations: undefined
    };
    if (output.operations !== undefined && output.operations !== null) {
        contents.operations = deserializeAws_json1_1OperationList(output.operations, context);
    }
    return contents;
};
const deserializeAws_json1_1DeleteLoadBalancerResult = (output, context) => {
    let contents = {
        __type: "DeleteLoadBalancerResult",
        operations: undefined
    };
    if (output.operations !== undefined && output.operations !== null) {
        contents.operations = deserializeAws_json1_1OperationList(output.operations, context);
    }
    return contents;
};
const deserializeAws_json1_1DeleteLoadBalancerTlsCertificateResult = (output, context) => {
    let contents = {
        __type: "DeleteLoadBalancerTlsCertificateResult",
        operations: undefined
    };
    if (output.operations !== undefined && output.operations !== null) {
        contents.operations = deserializeAws_json1_1OperationList(output.operations, context);
    }
    return contents;
};
const deserializeAws_json1_1DeleteRelationalDatabaseResult = (output, context) => {
    let contents = {
        __type: "DeleteRelationalDatabaseResult",
        operations: undefined
    };
    if (output.operations !== undefined && output.operations !== null) {
        contents.operations = deserializeAws_json1_1OperationList(output.operations, context);
    }
    return contents;
};
const deserializeAws_json1_1DeleteRelationalDatabaseSnapshotResult = (output, context) => {
    let contents = {
        __type: "DeleteRelationalDatabaseSnapshotResult",
        operations: undefined
    };
    if (output.operations !== undefined && output.operations !== null) {
        contents.operations = deserializeAws_json1_1OperationList(output.operations, context);
    }
    return contents;
};
const deserializeAws_json1_1DestinationInfo = (output, context) => {
    let contents = {
        __type: "DestinationInfo",
        id: undefined,
        service: undefined
    };
    if (output.id !== undefined && output.id !== null) {
        contents.id = output.id;
    }
    if (output.service !== undefined && output.service !== null) {
        contents.service = output.service;
    }
    return contents;
};
const deserializeAws_json1_1DetachDiskResult = (output, context) => {
    let contents = {
        __type: "DetachDiskResult",
        operations: undefined
    };
    if (output.operations !== undefined && output.operations !== null) {
        contents.operations = deserializeAws_json1_1OperationList(output.operations, context);
    }
    return contents;
};
const deserializeAws_json1_1DetachInstancesFromLoadBalancerResult = (output, context) => {
    let contents = {
        __type: "DetachInstancesFromLoadBalancerResult",
        operations: undefined
    };
    if (output.operations !== undefined && output.operations !== null) {
        contents.operations = deserializeAws_json1_1OperationList(output.operations, context);
    }
    return contents;
};
const deserializeAws_json1_1DetachStaticIpResult = (output, context) => {
    let contents = {
        __type: "DetachStaticIpResult",
        operations: undefined
    };
    if (output.operations !== undefined && output.operations !== null) {
        contents.operations = deserializeAws_json1_1OperationList(output.operations, context);
    }
    return contents;
};
const deserializeAws_json1_1DisableAddOnResult = (output, context) => {
    let contents = {
        __type: "DisableAddOnResult",
        operations: undefined
    };
    if (output.operations !== undefined && output.operations !== null) {
        contents.operations = deserializeAws_json1_1OperationList(output.operations, context);
    }
    return contents;
};
const deserializeAws_json1_1Disk = (output, context) => {
    let contents = {
        __type: "Disk",
        addOns: undefined,
        arn: undefined,
        attachedTo: undefined,
        attachmentState: undefined,
        createdAt: undefined,
        gbInUse: undefined,
        iops: undefined,
        isAttached: undefined,
        isSystemDisk: undefined,
        location: undefined,
        name: undefined,
        path: undefined,
        resourceType: undefined,
        sizeInGb: undefined,
        state: undefined,
        supportCode: undefined,
        tags: undefined
    };
    if (output.addOns !== undefined && output.addOns !== null) {
        contents.addOns = deserializeAws_json1_1AddOnList(output.addOns, context);
    }
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.attachedTo !== undefined && output.attachedTo !== null) {
        contents.attachedTo = output.attachedTo;
    }
    if (output.attachmentState !== undefined && output.attachmentState !== null) {
        contents.attachmentState = output.attachmentState;
    }
    if (output.createdAt !== undefined && output.createdAt !== null) {
        contents.createdAt = new Date(Math.round(output.createdAt * 1000));
    }
    if (output.gbInUse !== undefined && output.gbInUse !== null) {
        contents.gbInUse = output.gbInUse;
    }
    if (output.iops !== undefined && output.iops !== null) {
        contents.iops = output.iops;
    }
    if (output.isAttached !== undefined && output.isAttached !== null) {
        contents.isAttached = output.isAttached;
    }
    if (output.isSystemDisk !== undefined && output.isSystemDisk !== null) {
        contents.isSystemDisk = output.isSystemDisk;
    }
    if (output.location !== undefined && output.location !== null) {
        contents.location = deserializeAws_json1_1ResourceLocation(output.location, context);
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.path !== undefined && output.path !== null) {
        contents.path = output.path;
    }
    if (output.resourceType !== undefined && output.resourceType !== null) {
        contents.resourceType = output.resourceType;
    }
    if (output.sizeInGb !== undefined && output.sizeInGb !== null) {
        contents.sizeInGb = output.sizeInGb;
    }
    if (output.state !== undefined && output.state !== null) {
        contents.state = output.state;
    }
    if (output.supportCode !== undefined && output.supportCode !== null) {
        contents.supportCode = output.supportCode;
    }
    if (output.tags !== undefined && output.tags !== null) {
        contents.tags = deserializeAws_json1_1TagList(output.tags, context);
    }
    return contents;
};
const deserializeAws_json1_1DiskInfo = (output, context) => {
    let contents = {
        __type: "DiskInfo",
        isSystemDisk: undefined,
        name: undefined,
        path: undefined,
        sizeInGb: undefined
    };
    if (output.isSystemDisk !== undefined && output.isSystemDisk !== null) {
        contents.isSystemDisk = output.isSystemDisk;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.path !== undefined && output.path !== null) {
        contents.path = output.path;
    }
    if (output.sizeInGb !== undefined && output.sizeInGb !== null) {
        contents.sizeInGb = output.sizeInGb;
    }
    return contents;
};
const deserializeAws_json1_1DiskInfoList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DiskInfo(entry, context));
};
const deserializeAws_json1_1DiskList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Disk(entry, context));
};
const deserializeAws_json1_1DiskSnapshot = (output, context) => {
    let contents = {
        __type: "DiskSnapshot",
        arn: undefined,
        createdAt: undefined,
        fromDiskArn: undefined,
        fromDiskName: undefined,
        fromInstanceArn: undefined,
        fromInstanceName: undefined,
        isFromAutoSnapshot: undefined,
        location: undefined,
        name: undefined,
        progress: undefined,
        resourceType: undefined,
        sizeInGb: undefined,
        state: undefined,
        supportCode: undefined,
        tags: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.createdAt !== undefined && output.createdAt !== null) {
        contents.createdAt = new Date(Math.round(output.createdAt * 1000));
    }
    if (output.fromDiskArn !== undefined && output.fromDiskArn !== null) {
        contents.fromDiskArn = output.fromDiskArn;
    }
    if (output.fromDiskName !== undefined && output.fromDiskName !== null) {
        contents.fromDiskName = output.fromDiskName;
    }
    if (output.fromInstanceArn !== undefined && output.fromInstanceArn !== null) {
        contents.fromInstanceArn = output.fromInstanceArn;
    }
    if (output.fromInstanceName !== undefined &&
        output.fromInstanceName !== null) {
        contents.fromInstanceName = output.fromInstanceName;
    }
    if (output.isFromAutoSnapshot !== undefined &&
        output.isFromAutoSnapshot !== null) {
        contents.isFromAutoSnapshot = output.isFromAutoSnapshot;
    }
    if (output.location !== undefined && output.location !== null) {
        contents.location = deserializeAws_json1_1ResourceLocation(output.location, context);
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.progress !== undefined && output.progress !== null) {
        contents.progress = output.progress;
    }
    if (output.resourceType !== undefined && output.resourceType !== null) {
        contents.resourceType = output.resourceType;
    }
    if (output.sizeInGb !== undefined && output.sizeInGb !== null) {
        contents.sizeInGb = output.sizeInGb;
    }
    if (output.state !== undefined && output.state !== null) {
        contents.state = output.state;
    }
    if (output.supportCode !== undefined && output.supportCode !== null) {
        contents.supportCode = output.supportCode;
    }
    if (output.tags !== undefined && output.tags !== null) {
        contents.tags = deserializeAws_json1_1TagList(output.tags, context);
    }
    return contents;
};
const deserializeAws_json1_1DiskSnapshotInfo = (output, context) => {
    let contents = {
        __type: "DiskSnapshotInfo",
        sizeInGb: undefined
    };
    if (output.sizeInGb !== undefined && output.sizeInGb !== null) {
        contents.sizeInGb = output.sizeInGb;
    }
    return contents;
};
const deserializeAws_json1_1DiskSnapshotList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DiskSnapshot(entry, context));
};
const deserializeAws_json1_1Domain = (output, context) => {
    let contents = {
        __type: "Domain",
        arn: undefined,
        createdAt: undefined,
        domainEntries: undefined,
        location: undefined,
        name: undefined,
        resourceType: undefined,
        supportCode: undefined,
        tags: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.createdAt !== undefined && output.createdAt !== null) {
        contents.createdAt = new Date(Math.round(output.createdAt * 1000));
    }
    if (output.domainEntries !== undefined && output.domainEntries !== null) {
        contents.domainEntries = deserializeAws_json1_1DomainEntryList(output.domainEntries, context);
    }
    if (output.location !== undefined && output.location !== null) {
        contents.location = deserializeAws_json1_1ResourceLocation(output.location, context);
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.resourceType !== undefined && output.resourceType !== null) {
        contents.resourceType = output.resourceType;
    }
    if (output.supportCode !== undefined && output.supportCode !== null) {
        contents.supportCode = output.supportCode;
    }
    if (output.tags !== undefined && output.tags !== null) {
        contents.tags = deserializeAws_json1_1TagList(output.tags, context);
    }
    return contents;
};
const deserializeAws_json1_1DomainEntry = (output, context) => {
    let contents = {
        __type: "DomainEntry",
        id: undefined,
        isAlias: undefined,
        name: undefined,
        options: undefined,
        target: undefined,
        type: undefined
    };
    if (output.id !== undefined && output.id !== null) {
        contents.id = output.id;
    }
    if (output.isAlias !== undefined && output.isAlias !== null) {
        contents.isAlias = output.isAlias;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.options !== undefined && output.options !== null) {
        contents.options = deserializeAws_json1_1DomainEntryOptions(output.options, context);
    }
    if (output.target !== undefined && output.target !== null) {
        contents.target = output.target;
    }
    if (output.type !== undefined && output.type !== null) {
        contents.type = output.type;
    }
    return contents;
};
const deserializeAws_json1_1DomainEntryList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DomainEntry(entry, context));
};
const deserializeAws_json1_1DomainEntryOptions = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1DomainList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Domain(entry, context));
};
const deserializeAws_json1_1DownloadDefaultKeyPairResult = (output, context) => {
    let contents = {
        __type: "DownloadDefaultKeyPairResult",
        privateKeyBase64: undefined,
        publicKeyBase64: undefined
    };
    if (output.privateKeyBase64 !== undefined &&
        output.privateKeyBase64 !== null) {
        contents.privateKeyBase64 = output.privateKeyBase64;
    }
    if (output.publicKeyBase64 !== undefined && output.publicKeyBase64 !== null) {
        contents.publicKeyBase64 = output.publicKeyBase64;
    }
    return contents;
};
const deserializeAws_json1_1EnableAddOnResult = (output, context) => {
    let contents = {
        __type: "EnableAddOnResult",
        operations: undefined
    };
    if (output.operations !== undefined && output.operations !== null) {
        contents.operations = deserializeAws_json1_1OperationList(output.operations, context);
    }
    return contents;
};
const deserializeAws_json1_1ExportSnapshotRecord = (output, context) => {
    let contents = {
        __type: "ExportSnapshotRecord",
        arn: undefined,
        createdAt: undefined,
        destinationInfo: undefined,
        location: undefined,
        name: undefined,
        resourceType: undefined,
        sourceInfo: undefined,
        state: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.createdAt !== undefined && output.createdAt !== null) {
        contents.createdAt = new Date(Math.round(output.createdAt * 1000));
    }
    if (output.destinationInfo !== undefined && output.destinationInfo !== null) {
        contents.destinationInfo = deserializeAws_json1_1DestinationInfo(output.destinationInfo, context);
    }
    if (output.location !== undefined && output.location !== null) {
        contents.location = deserializeAws_json1_1ResourceLocation(output.location, context);
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.resourceType !== undefined && output.resourceType !== null) {
        contents.resourceType = output.resourceType;
    }
    if (output.sourceInfo !== undefined && output.sourceInfo !== null) {
        contents.sourceInfo = deserializeAws_json1_1ExportSnapshotRecordSourceInfo(output.sourceInfo, context);
    }
    if (output.state !== undefined && output.state !== null) {
        contents.state = output.state;
    }
    return contents;
};
const deserializeAws_json1_1ExportSnapshotRecordList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ExportSnapshotRecord(entry, context));
};
const deserializeAws_json1_1ExportSnapshotRecordSourceInfo = (output, context) => {
    let contents = {
        __type: "ExportSnapshotRecordSourceInfo",
        arn: undefined,
        createdAt: undefined,
        diskSnapshotInfo: undefined,
        fromResourceArn: undefined,
        fromResourceName: undefined,
        instanceSnapshotInfo: undefined,
        name: undefined,
        resourceType: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.createdAt !== undefined && output.createdAt !== null) {
        contents.createdAt = new Date(Math.round(output.createdAt * 1000));
    }
    if (output.diskSnapshotInfo !== undefined &&
        output.diskSnapshotInfo !== null) {
        contents.diskSnapshotInfo = deserializeAws_json1_1DiskSnapshotInfo(output.diskSnapshotInfo, context);
    }
    if (output.fromResourceArn !== undefined && output.fromResourceArn !== null) {
        contents.fromResourceArn = output.fromResourceArn;
    }
    if (output.fromResourceName !== undefined &&
        output.fromResourceName !== null) {
        contents.fromResourceName = output.fromResourceName;
    }
    if (output.instanceSnapshotInfo !== undefined &&
        output.instanceSnapshotInfo !== null) {
        contents.instanceSnapshotInfo = deserializeAws_json1_1InstanceSnapshotInfo(output.instanceSnapshotInfo, context);
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.resourceType !== undefined && output.resourceType !== null) {
        contents.resourceType = output.resourceType;
    }
    return contents;
};
const deserializeAws_json1_1ExportSnapshotResult = (output, context) => {
    let contents = {
        __type: "ExportSnapshotResult",
        operations: undefined
    };
    if (output.operations !== undefined && output.operations !== null) {
        contents.operations = deserializeAws_json1_1OperationList(output.operations, context);
    }
    return contents;
};
const deserializeAws_json1_1GetActiveNamesResult = (output, context) => {
    let contents = {
        __type: "GetActiveNamesResult",
        activeNames: undefined,
        nextPageToken: undefined
    };
    if (output.activeNames !== undefined && output.activeNames !== null) {
        contents.activeNames = deserializeAws_json1_1StringList(output.activeNames, context);
    }
    if (output.nextPageToken !== undefined && output.nextPageToken !== null) {
        contents.nextPageToken = output.nextPageToken;
    }
    return contents;
};
const deserializeAws_json1_1GetAutoSnapshotsResult = (output, context) => {
    let contents = {
        __type: "GetAutoSnapshotsResult",
        autoSnapshots: undefined,
        resourceName: undefined,
        resourceType: undefined
    };
    if (output.autoSnapshots !== undefined && output.autoSnapshots !== null) {
        contents.autoSnapshots = deserializeAws_json1_1AutoSnapshotDetailsList(output.autoSnapshots, context);
    }
    if (output.resourceName !== undefined && output.resourceName !== null) {
        contents.resourceName = output.resourceName;
    }
    if (output.resourceType !== undefined && output.resourceType !== null) {
        contents.resourceType = output.resourceType;
    }
    return contents;
};
const deserializeAws_json1_1GetBlueprintsResult = (output, context) => {
    let contents = {
        __type: "GetBlueprintsResult",
        blueprints: undefined,
        nextPageToken: undefined
    };
    if (output.blueprints !== undefined && output.blueprints !== null) {
        contents.blueprints = deserializeAws_json1_1BlueprintList(output.blueprints, context);
    }
    if (output.nextPageToken !== undefined && output.nextPageToken !== null) {
        contents.nextPageToken = output.nextPageToken;
    }
    return contents;
};
const deserializeAws_json1_1GetBundlesResult = (output, context) => {
    let contents = {
        __type: "GetBundlesResult",
        bundles: undefined,
        nextPageToken: undefined
    };
    if (output.bundles !== undefined && output.bundles !== null) {
        contents.bundles = deserializeAws_json1_1BundleList(output.bundles, context);
    }
    if (output.nextPageToken !== undefined && output.nextPageToken !== null) {
        contents.nextPageToken = output.nextPageToken;
    }
    return contents;
};
const deserializeAws_json1_1GetCloudFormationStackRecordsResult = (output, context) => {
    let contents = {
        __type: "GetCloudFormationStackRecordsResult",
        cloudFormationStackRecords: undefined,
        nextPageToken: undefined
    };
    if (output.cloudFormationStackRecords !== undefined &&
        output.cloudFormationStackRecords !== null) {
        contents.cloudFormationStackRecords = deserializeAws_json1_1CloudFormationStackRecordList(output.cloudFormationStackRecords, context);
    }
    if (output.nextPageToken !== undefined && output.nextPageToken !== null) {
        contents.nextPageToken = output.nextPageToken;
    }
    return contents;
};
const deserializeAws_json1_1GetDiskResult = (output, context) => {
    let contents = {
        __type: "GetDiskResult",
        disk: undefined
    };
    if (output.disk !== undefined && output.disk !== null) {
        contents.disk = deserializeAws_json1_1Disk(output.disk, context);
    }
    return contents;
};
const deserializeAws_json1_1GetDiskSnapshotResult = (output, context) => {
    let contents = {
        __type: "GetDiskSnapshotResult",
        diskSnapshot: undefined
    };
    if (output.diskSnapshot !== undefined && output.diskSnapshot !== null) {
        contents.diskSnapshot = deserializeAws_json1_1DiskSnapshot(output.diskSnapshot, context);
    }
    return contents;
};
const deserializeAws_json1_1GetDiskSnapshotsResult = (output, context) => {
    let contents = {
        __type: "GetDiskSnapshotsResult",
        diskSnapshots: undefined,
        nextPageToken: undefined
    };
    if (output.diskSnapshots !== undefined && output.diskSnapshots !== null) {
        contents.diskSnapshots = deserializeAws_json1_1DiskSnapshotList(output.diskSnapshots, context);
    }
    if (output.nextPageToken !== undefined && output.nextPageToken !== null) {
        contents.nextPageToken = output.nextPageToken;
    }
    return contents;
};
const deserializeAws_json1_1GetDisksResult = (output, context) => {
    let contents = {
        __type: "GetDisksResult",
        disks: undefined,
        nextPageToken: undefined
    };
    if (output.disks !== undefined && output.disks !== null) {
        contents.disks = deserializeAws_json1_1DiskList(output.disks, context);
    }
    if (output.nextPageToken !== undefined && output.nextPageToken !== null) {
        contents.nextPageToken = output.nextPageToken;
    }
    return contents;
};
const deserializeAws_json1_1GetDomainResult = (output, context) => {
    let contents = {
        __type: "GetDomainResult",
        domain: undefined
    };
    if (output.domain !== undefined && output.domain !== null) {
        contents.domain = deserializeAws_json1_1Domain(output.domain, context);
    }
    return contents;
};
const deserializeAws_json1_1GetDomainsResult = (output, context) => {
    let contents = {
        __type: "GetDomainsResult",
        domains: undefined,
        nextPageToken: undefined
    };
    if (output.domains !== undefined && output.domains !== null) {
        contents.domains = deserializeAws_json1_1DomainList(output.domains, context);
    }
    if (output.nextPageToken !== undefined && output.nextPageToken !== null) {
        contents.nextPageToken = output.nextPageToken;
    }
    return contents;
};
const deserializeAws_json1_1GetExportSnapshotRecordsResult = (output, context) => {
    let contents = {
        __type: "GetExportSnapshotRecordsResult",
        exportSnapshotRecords: undefined,
        nextPageToken: undefined
    };
    if (output.exportSnapshotRecords !== undefined &&
        output.exportSnapshotRecords !== null) {
        contents.exportSnapshotRecords = deserializeAws_json1_1ExportSnapshotRecordList(output.exportSnapshotRecords, context);
    }
    if (output.nextPageToken !== undefined && output.nextPageToken !== null) {
        contents.nextPageToken = output.nextPageToken;
    }
    return contents;
};
const deserializeAws_json1_1GetInstanceAccessDetailsResult = (output, context) => {
    let contents = {
        __type: "GetInstanceAccessDetailsResult",
        accessDetails: undefined
    };
    if (output.accessDetails !== undefined && output.accessDetails !== null) {
        contents.accessDetails = deserializeAws_json1_1InstanceAccessDetails(output.accessDetails, context);
    }
    return contents;
};
const deserializeAws_json1_1GetInstanceMetricDataResult = (output, context) => {
    let contents = {
        __type: "GetInstanceMetricDataResult",
        metricData: undefined,
        metricName: undefined
    };
    if (output.metricData !== undefined && output.metricData !== null) {
        contents.metricData = deserializeAws_json1_1MetricDatapointList(output.metricData, context);
    }
    if (output.metricName !== undefined && output.metricName !== null) {
        contents.metricName = output.metricName;
    }
    return contents;
};
const deserializeAws_json1_1GetInstancePortStatesResult = (output, context) => {
    let contents = {
        __type: "GetInstancePortStatesResult",
        portStates: undefined
    };
    if (output.portStates !== undefined && output.portStates !== null) {
        contents.portStates = deserializeAws_json1_1InstancePortStateList(output.portStates, context);
    }
    return contents;
};
const deserializeAws_json1_1GetInstanceResult = (output, context) => {
    let contents = {
        __type: "GetInstanceResult",
        instance: undefined
    };
    if (output.instance !== undefined && output.instance !== null) {
        contents.instance = deserializeAws_json1_1Instance(output.instance, context);
    }
    return contents;
};
const deserializeAws_json1_1GetInstanceSnapshotResult = (output, context) => {
    let contents = {
        __type: "GetInstanceSnapshotResult",
        instanceSnapshot: undefined
    };
    if (output.instanceSnapshot !== undefined &&
        output.instanceSnapshot !== null) {
        contents.instanceSnapshot = deserializeAws_json1_1InstanceSnapshot(output.instanceSnapshot, context);
    }
    return contents;
};
const deserializeAws_json1_1GetInstanceSnapshotsResult = (output, context) => {
    let contents = {
        __type: "GetInstanceSnapshotsResult",
        instanceSnapshots: undefined,
        nextPageToken: undefined
    };
    if (output.instanceSnapshots !== undefined &&
        output.instanceSnapshots !== null) {
        contents.instanceSnapshots = deserializeAws_json1_1InstanceSnapshotList(output.instanceSnapshots, context);
    }
    if (output.nextPageToken !== undefined && output.nextPageToken !== null) {
        contents.nextPageToken = output.nextPageToken;
    }
    return contents;
};
const deserializeAws_json1_1GetInstanceStateResult = (output, context) => {
    let contents = {
        __type: "GetInstanceStateResult",
        state: undefined
    };
    if (output.state !== undefined && output.state !== null) {
        contents.state = deserializeAws_json1_1InstanceState(output.state, context);
    }
    return contents;
};
const deserializeAws_json1_1GetInstancesResult = (output, context) => {
    let contents = {
        __type: "GetInstancesResult",
        instances: undefined,
        nextPageToken: undefined
    };
    if (output.instances !== undefined && output.instances !== null) {
        contents.instances = deserializeAws_json1_1InstanceList(output.instances, context);
    }
    if (output.nextPageToken !== undefined && output.nextPageToken !== null) {
        contents.nextPageToken = output.nextPageToken;
    }
    return contents;
};
const deserializeAws_json1_1GetKeyPairResult = (output, context) => {
    let contents = {
        __type: "GetKeyPairResult",
        keyPair: undefined
    };
    if (output.keyPair !== undefined && output.keyPair !== null) {
        contents.keyPair = deserializeAws_json1_1KeyPair(output.keyPair, context);
    }
    return contents;
};
const deserializeAws_json1_1GetKeyPairsResult = (output, context) => {
    let contents = {
        __type: "GetKeyPairsResult",
        keyPairs: undefined,
        nextPageToken: undefined
    };
    if (output.keyPairs !== undefined && output.keyPairs !== null) {
        contents.keyPairs = deserializeAws_json1_1KeyPairList(output.keyPairs, context);
    }
    if (output.nextPageToken !== undefined && output.nextPageToken !== null) {
        contents.nextPageToken = output.nextPageToken;
    }
    return contents;
};
const deserializeAws_json1_1GetLoadBalancerMetricDataResult = (output, context) => {
    let contents = {
        __type: "GetLoadBalancerMetricDataResult",
        metricData: undefined,
        metricName: undefined
    };
    if (output.metricData !== undefined && output.metricData !== null) {
        contents.metricData = deserializeAws_json1_1MetricDatapointList(output.metricData, context);
    }
    if (output.metricName !== undefined && output.metricName !== null) {
        contents.metricName = output.metricName;
    }
    return contents;
};
const deserializeAws_json1_1GetLoadBalancerResult = (output, context) => {
    let contents = {
        __type: "GetLoadBalancerResult",
        loadBalancer: undefined
    };
    if (output.loadBalancer !== undefined && output.loadBalancer !== null) {
        contents.loadBalancer = deserializeAws_json1_1LoadBalancer(output.loadBalancer, context);
    }
    return contents;
};
const deserializeAws_json1_1GetLoadBalancerTlsCertificatesResult = (output, context) => {
    let contents = {
        __type: "GetLoadBalancerTlsCertificatesResult",
        tlsCertificates: undefined
    };
    if (output.tlsCertificates !== undefined && output.tlsCertificates !== null) {
        contents.tlsCertificates = deserializeAws_json1_1LoadBalancerTlsCertificateList(output.tlsCertificates, context);
    }
    return contents;
};
const deserializeAws_json1_1GetLoadBalancersResult = (output, context) => {
    let contents = {
        __type: "GetLoadBalancersResult",
        loadBalancers: undefined,
        nextPageToken: undefined
    };
    if (output.loadBalancers !== undefined && output.loadBalancers !== null) {
        contents.loadBalancers = deserializeAws_json1_1LoadBalancerList(output.loadBalancers, context);
    }
    if (output.nextPageToken !== undefined && output.nextPageToken !== null) {
        contents.nextPageToken = output.nextPageToken;
    }
    return contents;
};
const deserializeAws_json1_1GetOperationResult = (output, context) => {
    let contents = {
        __type: "GetOperationResult",
        operation: undefined
    };
    if (output.operation !== undefined && output.operation !== null) {
        contents.operation = deserializeAws_json1_1Operation(output.operation, context);
    }
    return contents;
};
const deserializeAws_json1_1GetOperationsForResourceResult = (output, context) => {
    let contents = {
        __type: "GetOperationsForResourceResult",
        nextPageCount: undefined,
        nextPageToken: undefined,
        operations: undefined
    };
    if (output.nextPageCount !== undefined && output.nextPageCount !== null) {
        contents.nextPageCount = output.nextPageCount;
    }
    if (output.nextPageToken !== undefined && output.nextPageToken !== null) {
        contents.nextPageToken = output.nextPageToken;
    }
    if (output.operations !== undefined && output.operations !== null) {
        contents.operations = deserializeAws_json1_1OperationList(output.operations, context);
    }
    return contents;
};
const deserializeAws_json1_1GetOperationsResult = (output, context) => {
    let contents = {
        __type: "GetOperationsResult",
        nextPageToken: undefined,
        operations: undefined
    };
    if (output.nextPageToken !== undefined && output.nextPageToken !== null) {
        contents.nextPageToken = output.nextPageToken;
    }
    if (output.operations !== undefined && output.operations !== null) {
        contents.operations = deserializeAws_json1_1OperationList(output.operations, context);
    }
    return contents;
};
const deserializeAws_json1_1GetRegionsResult = (output, context) => {
    let contents = {
        __type: "GetRegionsResult",
        regions: undefined
    };
    if (output.regions !== undefined && output.regions !== null) {
        contents.regions = deserializeAws_json1_1RegionList(output.regions, context);
    }
    return contents;
};
const deserializeAws_json1_1GetRelationalDatabaseBlueprintsResult = (output, context) => {
    let contents = {
        __type: "GetRelationalDatabaseBlueprintsResult",
        blueprints: undefined,
        nextPageToken: undefined
    };
    if (output.blueprints !== undefined && output.blueprints !== null) {
        contents.blueprints = deserializeAws_json1_1RelationalDatabaseBlueprintList(output.blueprints, context);
    }
    if (output.nextPageToken !== undefined && output.nextPageToken !== null) {
        contents.nextPageToken = output.nextPageToken;
    }
    return contents;
};
const deserializeAws_json1_1GetRelationalDatabaseBundlesResult = (output, context) => {
    let contents = {
        __type: "GetRelationalDatabaseBundlesResult",
        bundles: undefined,
        nextPageToken: undefined
    };
    if (output.bundles !== undefined && output.bundles !== null) {
        contents.bundles = deserializeAws_json1_1RelationalDatabaseBundleList(output.bundles, context);
    }
    if (output.nextPageToken !== undefined && output.nextPageToken !== null) {
        contents.nextPageToken = output.nextPageToken;
    }
    return contents;
};
const deserializeAws_json1_1GetRelationalDatabaseEventsResult = (output, context) => {
    let contents = {
        __type: "GetRelationalDatabaseEventsResult",
        nextPageToken: undefined,
        relationalDatabaseEvents: undefined
    };
    if (output.nextPageToken !== undefined && output.nextPageToken !== null) {
        contents.nextPageToken = output.nextPageToken;
    }
    if (output.relationalDatabaseEvents !== undefined &&
        output.relationalDatabaseEvents !== null) {
        contents.relationalDatabaseEvents = deserializeAws_json1_1RelationalDatabaseEventList(output.relationalDatabaseEvents, context);
    }
    return contents;
};
const deserializeAws_json1_1GetRelationalDatabaseLogEventsResult = (output, context) => {
    let contents = {
        __type: "GetRelationalDatabaseLogEventsResult",
        nextBackwardToken: undefined,
        nextForwardToken: undefined,
        resourceLogEvents: undefined
    };
    if (output.nextBackwardToken !== undefined &&
        output.nextBackwardToken !== null) {
        contents.nextBackwardToken = output.nextBackwardToken;
    }
    if (output.nextForwardToken !== undefined &&
        output.nextForwardToken !== null) {
        contents.nextForwardToken = output.nextForwardToken;
    }
    if (output.resourceLogEvents !== undefined &&
        output.resourceLogEvents !== null) {
        contents.resourceLogEvents = deserializeAws_json1_1LogEventList(output.resourceLogEvents, context);
    }
    return contents;
};
const deserializeAws_json1_1GetRelationalDatabaseLogStreamsResult = (output, context) => {
    let contents = {
        __type: "GetRelationalDatabaseLogStreamsResult",
        logStreams: undefined
    };
    if (output.logStreams !== undefined && output.logStreams !== null) {
        contents.logStreams = deserializeAws_json1_1StringList(output.logStreams, context);
    }
    return contents;
};
const deserializeAws_json1_1GetRelationalDatabaseMasterUserPasswordResult = (output, context) => {
    let contents = {
        __type: "GetRelationalDatabaseMasterUserPasswordResult",
        createdAt: undefined,
        masterUserPassword: undefined
    };
    if (output.createdAt !== undefined && output.createdAt !== null) {
        contents.createdAt = new Date(Math.round(output.createdAt * 1000));
    }
    if (output.masterUserPassword !== undefined &&
        output.masterUserPassword !== null) {
        contents.masterUserPassword = output.masterUserPassword;
    }
    return contents;
};
const deserializeAws_json1_1GetRelationalDatabaseMetricDataResult = (output, context) => {
    let contents = {
        __type: "GetRelationalDatabaseMetricDataResult",
        metricData: undefined,
        metricName: undefined
    };
    if (output.metricData !== undefined && output.metricData !== null) {
        contents.metricData = deserializeAws_json1_1MetricDatapointList(output.metricData, context);
    }
    if (output.metricName !== undefined && output.metricName !== null) {
        contents.metricName = output.metricName;
    }
    return contents;
};
const deserializeAws_json1_1GetRelationalDatabaseParametersResult = (output, context) => {
    let contents = {
        __type: "GetRelationalDatabaseParametersResult",
        nextPageToken: undefined,
        parameters: undefined
    };
    if (output.nextPageToken !== undefined && output.nextPageToken !== null) {
        contents.nextPageToken = output.nextPageToken;
    }
    if (output.parameters !== undefined && output.parameters !== null) {
        contents.parameters = deserializeAws_json1_1RelationalDatabaseParameterList(output.parameters, context);
    }
    return contents;
};
const deserializeAws_json1_1GetRelationalDatabaseResult = (output, context) => {
    let contents = {
        __type: "GetRelationalDatabaseResult",
        relationalDatabase: undefined
    };
    if (output.relationalDatabase !== undefined &&
        output.relationalDatabase !== null) {
        contents.relationalDatabase = deserializeAws_json1_1RelationalDatabase(output.relationalDatabase, context);
    }
    return contents;
};
const deserializeAws_json1_1GetRelationalDatabaseSnapshotResult = (output, context) => {
    let contents = {
        __type: "GetRelationalDatabaseSnapshotResult",
        relationalDatabaseSnapshot: undefined
    };
    if (output.relationalDatabaseSnapshot !== undefined &&
        output.relationalDatabaseSnapshot !== null) {
        contents.relationalDatabaseSnapshot = deserializeAws_json1_1RelationalDatabaseSnapshot(output.relationalDatabaseSnapshot, context);
    }
    return contents;
};
const deserializeAws_json1_1GetRelationalDatabaseSnapshotsResult = (output, context) => {
    let contents = {
        __type: "GetRelationalDatabaseSnapshotsResult",
        nextPageToken: undefined,
        relationalDatabaseSnapshots: undefined
    };
    if (output.nextPageToken !== undefined && output.nextPageToken !== null) {
        contents.nextPageToken = output.nextPageToken;
    }
    if (output.relationalDatabaseSnapshots !== undefined &&
        output.relationalDatabaseSnapshots !== null) {
        contents.relationalDatabaseSnapshots = deserializeAws_json1_1RelationalDatabaseSnapshotList(output.relationalDatabaseSnapshots, context);
    }
    return contents;
};
const deserializeAws_json1_1GetRelationalDatabasesResult = (output, context) => {
    let contents = {
        __type: "GetRelationalDatabasesResult",
        nextPageToken: undefined,
        relationalDatabases: undefined
    };
    if (output.nextPageToken !== undefined && output.nextPageToken !== null) {
        contents.nextPageToken = output.nextPageToken;
    }
    if (output.relationalDatabases !== undefined &&
        output.relationalDatabases !== null) {
        contents.relationalDatabases = deserializeAws_json1_1RelationalDatabaseList(output.relationalDatabases, context);
    }
    return contents;
};
const deserializeAws_json1_1GetStaticIpResult = (output, context) => {
    let contents = {
        __type: "GetStaticIpResult",
        staticIp: undefined
    };
    if (output.staticIp !== undefined && output.staticIp !== null) {
        contents.staticIp = deserializeAws_json1_1StaticIp(output.staticIp, context);
    }
    return contents;
};
const deserializeAws_json1_1GetStaticIpsResult = (output, context) => {
    let contents = {
        __type: "GetStaticIpsResult",
        nextPageToken: undefined,
        staticIps: undefined
    };
    if (output.nextPageToken !== undefined && output.nextPageToken !== null) {
        contents.nextPageToken = output.nextPageToken;
    }
    if (output.staticIps !== undefined && output.staticIps !== null) {
        contents.staticIps = deserializeAws_json1_1StaticIpList(output.staticIps, context);
    }
    return contents;
};
const deserializeAws_json1_1HostKeyAttributes = (output, context) => {
    let contents = {
        __type: "HostKeyAttributes",
        algorithm: undefined,
        fingerprintSHA1: undefined,
        fingerprintSHA256: undefined,
        notValidAfter: undefined,
        notValidBefore: undefined,
        publicKey: undefined,
        witnessedAt: undefined
    };
    if (output.algorithm !== undefined && output.algorithm !== null) {
        contents.algorithm = output.algorithm;
    }
    if (output.fingerprintSHA1 !== undefined && output.fingerprintSHA1 !== null) {
        contents.fingerprintSHA1 = output.fingerprintSHA1;
    }
    if (output.fingerprintSHA256 !== undefined &&
        output.fingerprintSHA256 !== null) {
        contents.fingerprintSHA256 = output.fingerprintSHA256;
    }
    if (output.notValidAfter !== undefined && output.notValidAfter !== null) {
        contents.notValidAfter = new Date(Math.round(output.notValidAfter * 1000));
    }
    if (output.notValidBefore !== undefined && output.notValidBefore !== null) {
        contents.notValidBefore = new Date(Math.round(output.notValidBefore * 1000));
    }
    if (output.publicKey !== undefined && output.publicKey !== null) {
        contents.publicKey = output.publicKey;
    }
    if (output.witnessedAt !== undefined && output.witnessedAt !== null) {
        contents.witnessedAt = new Date(Math.round(output.witnessedAt * 1000));
    }
    return contents;
};
const deserializeAws_json1_1HostKeysList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1HostKeyAttributes(entry, context));
};
const deserializeAws_json1_1ImportKeyPairResult = (output, context) => {
    let contents = {
        __type: "ImportKeyPairResult",
        operation: undefined
    };
    if (output.operation !== undefined && output.operation !== null) {
        contents.operation = deserializeAws_json1_1Operation(output.operation, context);
    }
    return contents;
};
const deserializeAws_json1_1Instance = (output, context) => {
    let contents = {
        __type: "Instance",
        addOns: undefined,
        arn: undefined,
        blueprintId: undefined,
        blueprintName: undefined,
        bundleId: undefined,
        createdAt: undefined,
        hardware: undefined,
        ipv6Address: undefined,
        isStaticIp: undefined,
        location: undefined,
        name: undefined,
        networking: undefined,
        privateIpAddress: undefined,
        publicIpAddress: undefined,
        resourceType: undefined,
        sshKeyName: undefined,
        state: undefined,
        supportCode: undefined,
        tags: undefined,
        username: undefined
    };
    if (output.addOns !== undefined && output.addOns !== null) {
        contents.addOns = deserializeAws_json1_1AddOnList(output.addOns, context);
    }
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.blueprintId !== undefined && output.blueprintId !== null) {
        contents.blueprintId = output.blueprintId;
    }
    if (output.blueprintName !== undefined && output.blueprintName !== null) {
        contents.blueprintName = output.blueprintName;
    }
    if (output.bundleId !== undefined && output.bundleId !== null) {
        contents.bundleId = output.bundleId;
    }
    if (output.createdAt !== undefined && output.createdAt !== null) {
        contents.createdAt = new Date(Math.round(output.createdAt * 1000));
    }
    if (output.hardware !== undefined && output.hardware !== null) {
        contents.hardware = deserializeAws_json1_1InstanceHardware(output.hardware, context);
    }
    if (output.ipv6Address !== undefined && output.ipv6Address !== null) {
        contents.ipv6Address = output.ipv6Address;
    }
    if (output.isStaticIp !== undefined && output.isStaticIp !== null) {
        contents.isStaticIp = output.isStaticIp;
    }
    if (output.location !== undefined && output.location !== null) {
        contents.location = deserializeAws_json1_1ResourceLocation(output.location, context);
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.networking !== undefined && output.networking !== null) {
        contents.networking = deserializeAws_json1_1InstanceNetworking(output.networking, context);
    }
    if (output.privateIpAddress !== undefined &&
        output.privateIpAddress !== null) {
        contents.privateIpAddress = output.privateIpAddress;
    }
    if (output.publicIpAddress !== undefined && output.publicIpAddress !== null) {
        contents.publicIpAddress = output.publicIpAddress;
    }
    if (output.resourceType !== undefined && output.resourceType !== null) {
        contents.resourceType = output.resourceType;
    }
    if (output.sshKeyName !== undefined && output.sshKeyName !== null) {
        contents.sshKeyName = output.sshKeyName;
    }
    if (output.state !== undefined && output.state !== null) {
        contents.state = deserializeAws_json1_1InstanceState(output.state, context);
    }
    if (output.supportCode !== undefined && output.supportCode !== null) {
        contents.supportCode = output.supportCode;
    }
    if (output.tags !== undefined && output.tags !== null) {
        contents.tags = deserializeAws_json1_1TagList(output.tags, context);
    }
    if (output.username !== undefined && output.username !== null) {
        contents.username = output.username;
    }
    return contents;
};
const deserializeAws_json1_1InstanceAccessDetails = (output, context) => {
    let contents = {
        __type: "InstanceAccessDetails",
        certKey: undefined,
        expiresAt: undefined,
        hostKeys: undefined,
        instanceName: undefined,
        ipAddress: undefined,
        password: undefined,
        passwordData: undefined,
        privateKey: undefined,
        protocol: undefined,
        username: undefined
    };
    if (output.certKey !== undefined && output.certKey !== null) {
        contents.certKey = output.certKey;
    }
    if (output.expiresAt !== undefined && output.expiresAt !== null) {
        contents.expiresAt = new Date(Math.round(output.expiresAt * 1000));
    }
    if (output.hostKeys !== undefined && output.hostKeys !== null) {
        contents.hostKeys = deserializeAws_json1_1HostKeysList(output.hostKeys, context);
    }
    if (output.instanceName !== undefined && output.instanceName !== null) {
        contents.instanceName = output.instanceName;
    }
    if (output.ipAddress !== undefined && output.ipAddress !== null) {
        contents.ipAddress = output.ipAddress;
    }
    if (output.password !== undefined && output.password !== null) {
        contents.password = output.password;
    }
    if (output.passwordData !== undefined && output.passwordData !== null) {
        contents.passwordData = deserializeAws_json1_1PasswordData(output.passwordData, context);
    }
    if (output.privateKey !== undefined && output.privateKey !== null) {
        contents.privateKey = output.privateKey;
    }
    if (output.protocol !== undefined && output.protocol !== null) {
        contents.protocol = output.protocol;
    }
    if (output.username !== undefined && output.username !== null) {
        contents.username = output.username;
    }
    return contents;
};
const deserializeAws_json1_1InstanceHardware = (output, context) => {
    let contents = {
        __type: "InstanceHardware",
        cpuCount: undefined,
        disks: undefined,
        ramSizeInGb: undefined
    };
    if (output.cpuCount !== undefined && output.cpuCount !== null) {
        contents.cpuCount = output.cpuCount;
    }
    if (output.disks !== undefined && output.disks !== null) {
        contents.disks = deserializeAws_json1_1DiskList(output.disks, context);
    }
    if (output.ramSizeInGb !== undefined && output.ramSizeInGb !== null) {
        contents.ramSizeInGb = output.ramSizeInGb;
    }
    return contents;
};
const deserializeAws_json1_1InstanceHealthSummary = (output, context) => {
    let contents = {
        __type: "InstanceHealthSummary",
        instanceHealth: undefined,
        instanceHealthReason: undefined,
        instanceName: undefined
    };
    if (output.instanceHealth !== undefined && output.instanceHealth !== null) {
        contents.instanceHealth = output.instanceHealth;
    }
    if (output.instanceHealthReason !== undefined &&
        output.instanceHealthReason !== null) {
        contents.instanceHealthReason = output.instanceHealthReason;
    }
    if (output.instanceName !== undefined && output.instanceName !== null) {
        contents.instanceName = output.instanceName;
    }
    return contents;
};
const deserializeAws_json1_1InstanceHealthSummaryList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1InstanceHealthSummary(entry, context));
};
const deserializeAws_json1_1InstanceList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Instance(entry, context));
};
const deserializeAws_json1_1InstanceNetworking = (output, context) => {
    let contents = {
        __type: "InstanceNetworking",
        monthlyTransfer: undefined,
        ports: undefined
    };
    if (output.monthlyTransfer !== undefined && output.monthlyTransfer !== null) {
        contents.monthlyTransfer = deserializeAws_json1_1MonthlyTransfer(output.monthlyTransfer, context);
    }
    if (output.ports !== undefined && output.ports !== null) {
        contents.ports = deserializeAws_json1_1InstancePortInfoList(output.ports, context);
    }
    return contents;
};
const deserializeAws_json1_1InstancePlatformList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1InstancePortInfo = (output, context) => {
    let contents = {
        __type: "InstancePortInfo",
        accessDirection: undefined,
        accessFrom: undefined,
        accessType: undefined,
        commonName: undefined,
        fromPort: undefined,
        protocol: undefined,
        toPort: undefined
    };
    if (output.accessDirection !== undefined && output.accessDirection !== null) {
        contents.accessDirection = output.accessDirection;
    }
    if (output.accessFrom !== undefined && output.accessFrom !== null) {
        contents.accessFrom = output.accessFrom;
    }
    if (output.accessType !== undefined && output.accessType !== null) {
        contents.accessType = output.accessType;
    }
    if (output.commonName !== undefined && output.commonName !== null) {
        contents.commonName = output.commonName;
    }
    if (output.fromPort !== undefined && output.fromPort !== null) {
        contents.fromPort = output.fromPort;
    }
    if (output.protocol !== undefined && output.protocol !== null) {
        contents.protocol = output.protocol;
    }
    if (output.toPort !== undefined && output.toPort !== null) {
        contents.toPort = output.toPort;
    }
    return contents;
};
const deserializeAws_json1_1InstancePortInfoList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1InstancePortInfo(entry, context));
};
const deserializeAws_json1_1InstancePortState = (output, context) => {
    let contents = {
        __type: "InstancePortState",
        fromPort: undefined,
        protocol: undefined,
        state: undefined,
        toPort: undefined
    };
    if (output.fromPort !== undefined && output.fromPort !== null) {
        contents.fromPort = output.fromPort;
    }
    if (output.protocol !== undefined && output.protocol !== null) {
        contents.protocol = output.protocol;
    }
    if (output.state !== undefined && output.state !== null) {
        contents.state = output.state;
    }
    if (output.toPort !== undefined && output.toPort !== null) {
        contents.toPort = output.toPort;
    }
    return contents;
};
const deserializeAws_json1_1InstancePortStateList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1InstancePortState(entry, context));
};
const deserializeAws_json1_1InstanceSnapshot = (output, context) => {
    let contents = {
        __type: "InstanceSnapshot",
        arn: undefined,
        createdAt: undefined,
        fromAttachedDisks: undefined,
        fromBlueprintId: undefined,
        fromBundleId: undefined,
        fromInstanceArn: undefined,
        fromInstanceName: undefined,
        isFromAutoSnapshot: undefined,
        location: undefined,
        name: undefined,
        progress: undefined,
        resourceType: undefined,
        sizeInGb: undefined,
        state: undefined,
        supportCode: undefined,
        tags: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.createdAt !== undefined && output.createdAt !== null) {
        contents.createdAt = new Date(Math.round(output.createdAt * 1000));
    }
    if (output.fromAttachedDisks !== undefined &&
        output.fromAttachedDisks !== null) {
        contents.fromAttachedDisks = deserializeAws_json1_1DiskList(output.fromAttachedDisks, context);
    }
    if (output.fromBlueprintId !== undefined && output.fromBlueprintId !== null) {
        contents.fromBlueprintId = output.fromBlueprintId;
    }
    if (output.fromBundleId !== undefined && output.fromBundleId !== null) {
        contents.fromBundleId = output.fromBundleId;
    }
    if (output.fromInstanceArn !== undefined && output.fromInstanceArn !== null) {
        contents.fromInstanceArn = output.fromInstanceArn;
    }
    if (output.fromInstanceName !== undefined &&
        output.fromInstanceName !== null) {
        contents.fromInstanceName = output.fromInstanceName;
    }
    if (output.isFromAutoSnapshot !== undefined &&
        output.isFromAutoSnapshot !== null) {
        contents.isFromAutoSnapshot = output.isFromAutoSnapshot;
    }
    if (output.location !== undefined && output.location !== null) {
        contents.location = deserializeAws_json1_1ResourceLocation(output.location, context);
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.progress !== undefined && output.progress !== null) {
        contents.progress = output.progress;
    }
    if (output.resourceType !== undefined && output.resourceType !== null) {
        contents.resourceType = output.resourceType;
    }
    if (output.sizeInGb !== undefined && output.sizeInGb !== null) {
        contents.sizeInGb = output.sizeInGb;
    }
    if (output.state !== undefined && output.state !== null) {
        contents.state = output.state;
    }
    if (output.supportCode !== undefined && output.supportCode !== null) {
        contents.supportCode = output.supportCode;
    }
    if (output.tags !== undefined && output.tags !== null) {
        contents.tags = deserializeAws_json1_1TagList(output.tags, context);
    }
    return contents;
};
const deserializeAws_json1_1InstanceSnapshotInfo = (output, context) => {
    let contents = {
        __type: "InstanceSnapshotInfo",
        fromBlueprintId: undefined,
        fromBundleId: undefined,
        fromDiskInfo: undefined
    };
    if (output.fromBlueprintId !== undefined && output.fromBlueprintId !== null) {
        contents.fromBlueprintId = output.fromBlueprintId;
    }
    if (output.fromBundleId !== undefined && output.fromBundleId !== null) {
        contents.fromBundleId = output.fromBundleId;
    }
    if (output.fromDiskInfo !== undefined && output.fromDiskInfo !== null) {
        contents.fromDiskInfo = deserializeAws_json1_1DiskInfoList(output.fromDiskInfo, context);
    }
    return contents;
};
const deserializeAws_json1_1InstanceSnapshotList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1InstanceSnapshot(entry, context));
};
const deserializeAws_json1_1InstanceState = (output, context) => {
    let contents = {
        __type: "InstanceState",
        code: undefined,
        name: undefined
    };
    if (output.code !== undefined && output.code !== null) {
        contents.code = output.code;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    return contents;
};
const deserializeAws_json1_1InvalidInputException = (output, context) => {
    let contents = {
        __type: "InvalidInputException",
        code: undefined,
        docs: undefined,
        message: undefined,
        tip: undefined
    };
    if (output.code !== undefined && output.code !== null) {
        contents.code = output.code;
    }
    if (output.docs !== undefined && output.docs !== null) {
        contents.docs = output.docs;
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    if (output.tip !== undefined && output.tip !== null) {
        contents.tip = output.tip;
    }
    return contents;
};
const deserializeAws_json1_1IsVpcPeeredResult = (output, context) => {
    let contents = {
        __type: "IsVpcPeeredResult",
        isPeered: undefined
    };
    if (output.isPeered !== undefined && output.isPeered !== null) {
        contents.isPeered = output.isPeered;
    }
    return contents;
};
const deserializeAws_json1_1KeyPair = (output, context) => {
    let contents = {
        __type: "KeyPair",
        arn: undefined,
        createdAt: undefined,
        fingerprint: undefined,
        location: undefined,
        name: undefined,
        resourceType: undefined,
        supportCode: undefined,
        tags: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.createdAt !== undefined && output.createdAt !== null) {
        contents.createdAt = new Date(Math.round(output.createdAt * 1000));
    }
    if (output.fingerprint !== undefined && output.fingerprint !== null) {
        contents.fingerprint = output.fingerprint;
    }
    if (output.location !== undefined && output.location !== null) {
        contents.location = deserializeAws_json1_1ResourceLocation(output.location, context);
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.resourceType !== undefined && output.resourceType !== null) {
        contents.resourceType = output.resourceType;
    }
    if (output.supportCode !== undefined && output.supportCode !== null) {
        contents.supportCode = output.supportCode;
    }
    if (output.tags !== undefined && output.tags !== null) {
        contents.tags = deserializeAws_json1_1TagList(output.tags, context);
    }
    return contents;
};
const deserializeAws_json1_1KeyPairList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1KeyPair(entry, context));
};
const deserializeAws_json1_1LoadBalancer = (output, context) => {
    let contents = {
        __type: "LoadBalancer",
        arn: undefined,
        configurationOptions: undefined,
        createdAt: undefined,
        dnsName: undefined,
        healthCheckPath: undefined,
        instanceHealthSummary: undefined,
        instancePort: undefined,
        location: undefined,
        name: undefined,
        protocol: undefined,
        publicPorts: undefined,
        resourceType: undefined,
        state: undefined,
        supportCode: undefined,
        tags: undefined,
        tlsCertificateSummaries: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.configurationOptions !== undefined &&
        output.configurationOptions !== null) {
        contents.configurationOptions = deserializeAws_json1_1LoadBalancerConfigurationOptions(output.configurationOptions, context);
    }
    if (output.createdAt !== undefined && output.createdAt !== null) {
        contents.createdAt = new Date(Math.round(output.createdAt * 1000));
    }
    if (output.dnsName !== undefined && output.dnsName !== null) {
        contents.dnsName = output.dnsName;
    }
    if (output.healthCheckPath !== undefined && output.healthCheckPath !== null) {
        contents.healthCheckPath = output.healthCheckPath;
    }
    if (output.instanceHealthSummary !== undefined &&
        output.instanceHealthSummary !== null) {
        contents.instanceHealthSummary = deserializeAws_json1_1InstanceHealthSummaryList(output.instanceHealthSummary, context);
    }
    if (output.instancePort !== undefined && output.instancePort !== null) {
        contents.instancePort = output.instancePort;
    }
    if (output.location !== undefined && output.location !== null) {
        contents.location = deserializeAws_json1_1ResourceLocation(output.location, context);
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.protocol !== undefined && output.protocol !== null) {
        contents.protocol = output.protocol;
    }
    if (output.publicPorts !== undefined && output.publicPorts !== null) {
        contents.publicPorts = deserializeAws_json1_1PortList(output.publicPorts, context);
    }
    if (output.resourceType !== undefined && output.resourceType !== null) {
        contents.resourceType = output.resourceType;
    }
    if (output.state !== undefined && output.state !== null) {
        contents.state = output.state;
    }
    if (output.supportCode !== undefined && output.supportCode !== null) {
        contents.supportCode = output.supportCode;
    }
    if (output.tags !== undefined && output.tags !== null) {
        contents.tags = deserializeAws_json1_1TagList(output.tags, context);
    }
    if (output.tlsCertificateSummaries !== undefined &&
        output.tlsCertificateSummaries !== null) {
        contents.tlsCertificateSummaries = deserializeAws_json1_1LoadBalancerTlsCertificateSummaryList(output.tlsCertificateSummaries, context);
    }
    return contents;
};
const deserializeAws_json1_1LoadBalancerConfigurationOptions = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1LoadBalancerList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1LoadBalancer(entry, context));
};
const deserializeAws_json1_1LoadBalancerTlsCertificate = (output, context) => {
    let contents = {
        __type: "LoadBalancerTlsCertificate",
        arn: undefined,
        createdAt: undefined,
        domainName: undefined,
        domainValidationRecords: undefined,
        failureReason: undefined,
        isAttached: undefined,
        issuedAt: undefined,
        issuer: undefined,
        keyAlgorithm: undefined,
        loadBalancerName: undefined,
        location: undefined,
        name: undefined,
        notAfter: undefined,
        notBefore: undefined,
        renewalSummary: undefined,
        resourceType: undefined,
        revocationReason: undefined,
        revokedAt: undefined,
        serial: undefined,
        signatureAlgorithm: undefined,
        status: undefined,
        subject: undefined,
        subjectAlternativeNames: undefined,
        supportCode: undefined,
        tags: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.createdAt !== undefined && output.createdAt !== null) {
        contents.createdAt = new Date(Math.round(output.createdAt * 1000));
    }
    if (output.domainName !== undefined && output.domainName !== null) {
        contents.domainName = output.domainName;
    }
    if (output.domainValidationRecords !== undefined &&
        output.domainValidationRecords !== null) {
        contents.domainValidationRecords = deserializeAws_json1_1LoadBalancerTlsCertificateDomainValidationRecordList(output.domainValidationRecords, context);
    }
    if (output.failureReason !== undefined && output.failureReason !== null) {
        contents.failureReason = output.failureReason;
    }
    if (output.isAttached !== undefined && output.isAttached !== null) {
        contents.isAttached = output.isAttached;
    }
    if (output.issuedAt !== undefined && output.issuedAt !== null) {
        contents.issuedAt = new Date(Math.round(output.issuedAt * 1000));
    }
    if (output.issuer !== undefined && output.issuer !== null) {
        contents.issuer = output.issuer;
    }
    if (output.keyAlgorithm !== undefined && output.keyAlgorithm !== null) {
        contents.keyAlgorithm = output.keyAlgorithm;
    }
    if (output.loadBalancerName !== undefined &&
        output.loadBalancerName !== null) {
        contents.loadBalancerName = output.loadBalancerName;
    }
    if (output.location !== undefined && output.location !== null) {
        contents.location = deserializeAws_json1_1ResourceLocation(output.location, context);
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.notAfter !== undefined && output.notAfter !== null) {
        contents.notAfter = new Date(Math.round(output.notAfter * 1000));
    }
    if (output.notBefore !== undefined && output.notBefore !== null) {
        contents.notBefore = new Date(Math.round(output.notBefore * 1000));
    }
    if (output.renewalSummary !== undefined && output.renewalSummary !== null) {
        contents.renewalSummary = deserializeAws_json1_1LoadBalancerTlsCertificateRenewalSummary(output.renewalSummary, context);
    }
    if (output.resourceType !== undefined && output.resourceType !== null) {
        contents.resourceType = output.resourceType;
    }
    if (output.revocationReason !== undefined &&
        output.revocationReason !== null) {
        contents.revocationReason = output.revocationReason;
    }
    if (output.revokedAt !== undefined && output.revokedAt !== null) {
        contents.revokedAt = new Date(Math.round(output.revokedAt * 1000));
    }
    if (output.serial !== undefined && output.serial !== null) {
        contents.serial = output.serial;
    }
    if (output.signatureAlgorithm !== undefined &&
        output.signatureAlgorithm !== null) {
        contents.signatureAlgorithm = output.signatureAlgorithm;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    if (output.subject !== undefined && output.subject !== null) {
        contents.subject = output.subject;
    }
    if (output.subjectAlternativeNames !== undefined &&
        output.subjectAlternativeNames !== null) {
        contents.subjectAlternativeNames = deserializeAws_json1_1StringList(output.subjectAlternativeNames, context);
    }
    if (output.supportCode !== undefined && output.supportCode !== null) {
        contents.supportCode = output.supportCode;
    }
    if (output.tags !== undefined && output.tags !== null) {
        contents.tags = deserializeAws_json1_1TagList(output.tags, context);
    }
    return contents;
};
const deserializeAws_json1_1LoadBalancerTlsCertificateDomainValidationOption = (output, context) => {
    let contents = {
        __type: "LoadBalancerTlsCertificateDomainValidationOption",
        domainName: undefined,
        validationStatus: undefined
    };
    if (output.domainName !== undefined && output.domainName !== null) {
        contents.domainName = output.domainName;
    }
    if (output.validationStatus !== undefined &&
        output.validationStatus !== null) {
        contents.validationStatus = output.validationStatus;
    }
    return contents;
};
const deserializeAws_json1_1LoadBalancerTlsCertificateDomainValidationOptionList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1LoadBalancerTlsCertificateDomainValidationOption(entry, context));
};
const deserializeAws_json1_1LoadBalancerTlsCertificateDomainValidationRecord = (output, context) => {
    let contents = {
        __type: "LoadBalancerTlsCertificateDomainValidationRecord",
        domainName: undefined,
        name: undefined,
        type: undefined,
        validationStatus: undefined,
        value: undefined
    };
    if (output.domainName !== undefined && output.domainName !== null) {
        contents.domainName = output.domainName;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.type !== undefined && output.type !== null) {
        contents.type = output.type;
    }
    if (output.validationStatus !== undefined &&
        output.validationStatus !== null) {
        contents.validationStatus = output.validationStatus;
    }
    if (output.value !== undefined && output.value !== null) {
        contents.value = output.value;
    }
    return contents;
};
const deserializeAws_json1_1LoadBalancerTlsCertificateDomainValidationRecordList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1LoadBalancerTlsCertificateDomainValidationRecord(entry, context));
};
const deserializeAws_json1_1LoadBalancerTlsCertificateList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1LoadBalancerTlsCertificate(entry, context));
};
const deserializeAws_json1_1LoadBalancerTlsCertificateRenewalSummary = (output, context) => {
    let contents = {
        __type: "LoadBalancerTlsCertificateRenewalSummary",
        domainValidationOptions: undefined,
        renewalStatus: undefined
    };
    if (output.domainValidationOptions !== undefined &&
        output.domainValidationOptions !== null) {
        contents.domainValidationOptions = deserializeAws_json1_1LoadBalancerTlsCertificateDomainValidationOptionList(output.domainValidationOptions, context);
    }
    if (output.renewalStatus !== undefined && output.renewalStatus !== null) {
        contents.renewalStatus = output.renewalStatus;
    }
    return contents;
};
const deserializeAws_json1_1LoadBalancerTlsCertificateSummary = (output, context) => {
    let contents = {
        __type: "LoadBalancerTlsCertificateSummary",
        isAttached: undefined,
        name: undefined
    };
    if (output.isAttached !== undefined && output.isAttached !== null) {
        contents.isAttached = output.isAttached;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    return contents;
};
const deserializeAws_json1_1LoadBalancerTlsCertificateSummaryList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1LoadBalancerTlsCertificateSummary(entry, context));
};
const deserializeAws_json1_1LogEvent = (output, context) => {
    let contents = {
        __type: "LogEvent",
        createdAt: undefined,
        message: undefined
    };
    if (output.createdAt !== undefined && output.createdAt !== null) {
        contents.createdAt = new Date(Math.round(output.createdAt * 1000));
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1LogEventList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1LogEvent(entry, context));
};
const deserializeAws_json1_1MetricDatapoint = (output, context) => {
    let contents = {
        __type: "MetricDatapoint",
        average: undefined,
        maximum: undefined,
        minimum: undefined,
        sampleCount: undefined,
        sum: undefined,
        timestamp: undefined,
        unit: undefined
    };
    if (output.average !== undefined && output.average !== null) {
        contents.average = output.average;
    }
    if (output.maximum !== undefined && output.maximum !== null) {
        contents.maximum = output.maximum;
    }
    if (output.minimum !== undefined && output.minimum !== null) {
        contents.minimum = output.minimum;
    }
    if (output.sampleCount !== undefined && output.sampleCount !== null) {
        contents.sampleCount = output.sampleCount;
    }
    if (output.sum !== undefined && output.sum !== null) {
        contents.sum = output.sum;
    }
    if (output.timestamp !== undefined && output.timestamp !== null) {
        contents.timestamp = new Date(Math.round(output.timestamp * 1000));
    }
    if (output.unit !== undefined && output.unit !== null) {
        contents.unit = output.unit;
    }
    return contents;
};
const deserializeAws_json1_1MetricDatapointList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1MetricDatapoint(entry, context));
};
const deserializeAws_json1_1MonthlyTransfer = (output, context) => {
    let contents = {
        __type: "MonthlyTransfer",
        gbPerMonthAllocated: undefined
    };
    if (output.gbPerMonthAllocated !== undefined &&
        output.gbPerMonthAllocated !== null) {
        contents.gbPerMonthAllocated = output.gbPerMonthAllocated;
    }
    return contents;
};
const deserializeAws_json1_1NotFoundException = (output, context) => {
    let contents = {
        __type: "NotFoundException",
        code: undefined,
        docs: undefined,
        message: undefined,
        tip: undefined
    };
    if (output.code !== undefined && output.code !== null) {
        contents.code = output.code;
    }
    if (output.docs !== undefined && output.docs !== null) {
        contents.docs = output.docs;
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    if (output.tip !== undefined && output.tip !== null) {
        contents.tip = output.tip;
    }
    return contents;
};
const deserializeAws_json1_1OpenInstancePublicPortsResult = (output, context) => {
    let contents = {
        __type: "OpenInstancePublicPortsResult",
        operation: undefined
    };
    if (output.operation !== undefined && output.operation !== null) {
        contents.operation = deserializeAws_json1_1Operation(output.operation, context);
    }
    return contents;
};
const deserializeAws_json1_1Operation = (output, context) => {
    let contents = {
        __type: "Operation",
        createdAt: undefined,
        errorCode: undefined,
        errorDetails: undefined,
        id: undefined,
        isTerminal: undefined,
        location: undefined,
        operationDetails: undefined,
        operationType: undefined,
        resourceName: undefined,
        resourceType: undefined,
        status: undefined,
        statusChangedAt: undefined
    };
    if (output.createdAt !== undefined && output.createdAt !== null) {
        contents.createdAt = new Date(Math.round(output.createdAt * 1000));
    }
    if (output.errorCode !== undefined && output.errorCode !== null) {
        contents.errorCode = output.errorCode;
    }
    if (output.errorDetails !== undefined && output.errorDetails !== null) {
        contents.errorDetails = output.errorDetails;
    }
    if (output.id !== undefined && output.id !== null) {
        contents.id = output.id;
    }
    if (output.isTerminal !== undefined && output.isTerminal !== null) {
        contents.isTerminal = output.isTerminal;
    }
    if (output.location !== undefined && output.location !== null) {
        contents.location = deserializeAws_json1_1ResourceLocation(output.location, context);
    }
    if (output.operationDetails !== undefined &&
        output.operationDetails !== null) {
        contents.operationDetails = output.operationDetails;
    }
    if (output.operationType !== undefined && output.operationType !== null) {
        contents.operationType = output.operationType;
    }
    if (output.resourceName !== undefined && output.resourceName !== null) {
        contents.resourceName = output.resourceName;
    }
    if (output.resourceType !== undefined && output.resourceType !== null) {
        contents.resourceType = output.resourceType;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    if (output.statusChangedAt !== undefined && output.statusChangedAt !== null) {
        contents.statusChangedAt = new Date(Math.round(output.statusChangedAt * 1000));
    }
    return contents;
};
const deserializeAws_json1_1OperationFailureException = (output, context) => {
    let contents = {
        __type: "OperationFailureException",
        code: undefined,
        docs: undefined,
        message: undefined,
        tip: undefined
    };
    if (output.code !== undefined && output.code !== null) {
        contents.code = output.code;
    }
    if (output.docs !== undefined && output.docs !== null) {
        contents.docs = output.docs;
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    if (output.tip !== undefined && output.tip !== null) {
        contents.tip = output.tip;
    }
    return contents;
};
const deserializeAws_json1_1OperationList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Operation(entry, context));
};
const deserializeAws_json1_1PasswordData = (output, context) => {
    let contents = {
        __type: "PasswordData",
        ciphertext: undefined,
        keyPairName: undefined
    };
    if (output.ciphertext !== undefined && output.ciphertext !== null) {
        contents.ciphertext = output.ciphertext;
    }
    if (output.keyPairName !== undefined && output.keyPairName !== null) {
        contents.keyPairName = output.keyPairName;
    }
    return contents;
};
const deserializeAws_json1_1PeerVpcResult = (output, context) => {
    let contents = {
        __type: "PeerVpcResult",
        operation: undefined
    };
    if (output.operation !== undefined && output.operation !== null) {
        contents.operation = deserializeAws_json1_1Operation(output.operation, context);
    }
    return contents;
};
const deserializeAws_json1_1PendingMaintenanceAction = (output, context) => {
    let contents = {
        __type: "PendingMaintenanceAction",
        action: undefined,
        currentApplyDate: undefined,
        description: undefined
    };
    if (output.action !== undefined && output.action !== null) {
        contents.action = output.action;
    }
    if (output.currentApplyDate !== undefined &&
        output.currentApplyDate !== null) {
        contents.currentApplyDate = new Date(Math.round(output.currentApplyDate * 1000));
    }
    if (output.description !== undefined && output.description !== null) {
        contents.description = output.description;
    }
    return contents;
};
const deserializeAws_json1_1PendingMaintenanceActionList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1PendingMaintenanceAction(entry, context));
};
const deserializeAws_json1_1PendingModifiedRelationalDatabaseValues = (output, context) => {
    let contents = {
        __type: "PendingModifiedRelationalDatabaseValues",
        backupRetentionEnabled: undefined,
        engineVersion: undefined,
        masterUserPassword: undefined
    };
    if (output.backupRetentionEnabled !== undefined &&
        output.backupRetentionEnabled !== null) {
        contents.backupRetentionEnabled = output.backupRetentionEnabled;
    }
    if (output.engineVersion !== undefined && output.engineVersion !== null) {
        contents.engineVersion = output.engineVersion;
    }
    if (output.masterUserPassword !== undefined &&
        output.masterUserPassword !== null) {
        contents.masterUserPassword = output.masterUserPassword;
    }
    return contents;
};
const deserializeAws_json1_1PortList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1PutInstancePublicPortsResult = (output, context) => {
    let contents = {
        __type: "PutInstancePublicPortsResult",
        operation: undefined
    };
    if (output.operation !== undefined && output.operation !== null) {
        contents.operation = deserializeAws_json1_1Operation(output.operation, context);
    }
    return contents;
};
const deserializeAws_json1_1RebootInstanceResult = (output, context) => {
    let contents = {
        __type: "RebootInstanceResult",
        operations: undefined
    };
    if (output.operations !== undefined && output.operations !== null) {
        contents.operations = deserializeAws_json1_1OperationList(output.operations, context);
    }
    return contents;
};
const deserializeAws_json1_1RebootRelationalDatabaseResult = (output, context) => {
    let contents = {
        __type: "RebootRelationalDatabaseResult",
        operations: undefined
    };
    if (output.operations !== undefined && output.operations !== null) {
        contents.operations = deserializeAws_json1_1OperationList(output.operations, context);
    }
    return contents;
};
const deserializeAws_json1_1Region = (output, context) => {
    let contents = {
        __type: "Region",
        availabilityZones: undefined,
        continentCode: undefined,
        description: undefined,
        displayName: undefined,
        name: undefined,
        relationalDatabaseAvailabilityZones: undefined
    };
    if (output.availabilityZones !== undefined &&
        output.availabilityZones !== null) {
        contents.availabilityZones = deserializeAws_json1_1AvailabilityZoneList(output.availabilityZones, context);
    }
    if (output.continentCode !== undefined && output.continentCode !== null) {
        contents.continentCode = output.continentCode;
    }
    if (output.description !== undefined && output.description !== null) {
        contents.description = output.description;
    }
    if (output.displayName !== undefined && output.displayName !== null) {
        contents.displayName = output.displayName;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.relationalDatabaseAvailabilityZones !== undefined &&
        output.relationalDatabaseAvailabilityZones !== null) {
        contents.relationalDatabaseAvailabilityZones = deserializeAws_json1_1AvailabilityZoneList(output.relationalDatabaseAvailabilityZones, context);
    }
    return contents;
};
const deserializeAws_json1_1RegionList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Region(entry, context));
};
const deserializeAws_json1_1RelationalDatabase = (output, context) => {
    let contents = {
        __type: "RelationalDatabase",
        arn: undefined,
        backupRetentionEnabled: undefined,
        caCertificateIdentifier: undefined,
        createdAt: undefined,
        engine: undefined,
        engineVersion: undefined,
        hardware: undefined,
        latestRestorableTime: undefined,
        location: undefined,
        masterDatabaseName: undefined,
        masterEndpoint: undefined,
        masterUsername: undefined,
        name: undefined,
        parameterApplyStatus: undefined,
        pendingMaintenanceActions: undefined,
        pendingModifiedValues: undefined,
        preferredBackupWindow: undefined,
        preferredMaintenanceWindow: undefined,
        publiclyAccessible: undefined,
        relationalDatabaseBlueprintId: undefined,
        relationalDatabaseBundleId: undefined,
        resourceType: undefined,
        secondaryAvailabilityZone: undefined,
        state: undefined,
        supportCode: undefined,
        tags: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.backupRetentionEnabled !== undefined &&
        output.backupRetentionEnabled !== null) {
        contents.backupRetentionEnabled = output.backupRetentionEnabled;
    }
    if (output.caCertificateIdentifier !== undefined &&
        output.caCertificateIdentifier !== null) {
        contents.caCertificateIdentifier = output.caCertificateIdentifier;
    }
    if (output.createdAt !== undefined && output.createdAt !== null) {
        contents.createdAt = new Date(Math.round(output.createdAt * 1000));
    }
    if (output.engine !== undefined && output.engine !== null) {
        contents.engine = output.engine;
    }
    if (output.engineVersion !== undefined && output.engineVersion !== null) {
        contents.engineVersion = output.engineVersion;
    }
    if (output.hardware !== undefined && output.hardware !== null) {
        contents.hardware = deserializeAws_json1_1RelationalDatabaseHardware(output.hardware, context);
    }
    if (output.latestRestorableTime !== undefined &&
        output.latestRestorableTime !== null) {
        contents.latestRestorableTime = new Date(Math.round(output.latestRestorableTime * 1000));
    }
    if (output.location !== undefined && output.location !== null) {
        contents.location = deserializeAws_json1_1ResourceLocation(output.location, context);
    }
    if (output.masterDatabaseName !== undefined &&
        output.masterDatabaseName !== null) {
        contents.masterDatabaseName = output.masterDatabaseName;
    }
    if (output.masterEndpoint !== undefined && output.masterEndpoint !== null) {
        contents.masterEndpoint = deserializeAws_json1_1RelationalDatabaseEndpoint(output.masterEndpoint, context);
    }
    if (output.masterUsername !== undefined && output.masterUsername !== null) {
        contents.masterUsername = output.masterUsername;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.parameterApplyStatus !== undefined &&
        output.parameterApplyStatus !== null) {
        contents.parameterApplyStatus = output.parameterApplyStatus;
    }
    if (output.pendingMaintenanceActions !== undefined &&
        output.pendingMaintenanceActions !== null) {
        contents.pendingMaintenanceActions = deserializeAws_json1_1PendingMaintenanceActionList(output.pendingMaintenanceActions, context);
    }
    if (output.pendingModifiedValues !== undefined &&
        output.pendingModifiedValues !== null) {
        contents.pendingModifiedValues = deserializeAws_json1_1PendingModifiedRelationalDatabaseValues(output.pendingModifiedValues, context);
    }
    if (output.preferredBackupWindow !== undefined &&
        output.preferredBackupWindow !== null) {
        contents.preferredBackupWindow = output.preferredBackupWindow;
    }
    if (output.preferredMaintenanceWindow !== undefined &&
        output.preferredMaintenanceWindow !== null) {
        contents.preferredMaintenanceWindow = output.preferredMaintenanceWindow;
    }
    if (output.publiclyAccessible !== undefined &&
        output.publiclyAccessible !== null) {
        contents.publiclyAccessible = output.publiclyAccessible;
    }
    if (output.relationalDatabaseBlueprintId !== undefined &&
        output.relationalDatabaseBlueprintId !== null) {
        contents.relationalDatabaseBlueprintId =
            output.relationalDatabaseBlueprintId;
    }
    if (output.relationalDatabaseBundleId !== undefined &&
        output.relationalDatabaseBundleId !== null) {
        contents.relationalDatabaseBundleId = output.relationalDatabaseBundleId;
    }
    if (output.resourceType !== undefined && output.resourceType !== null) {
        contents.resourceType = output.resourceType;
    }
    if (output.secondaryAvailabilityZone !== undefined &&
        output.secondaryAvailabilityZone !== null) {
        contents.secondaryAvailabilityZone = output.secondaryAvailabilityZone;
    }
    if (output.state !== undefined && output.state !== null) {
        contents.state = output.state;
    }
    if (output.supportCode !== undefined && output.supportCode !== null) {
        contents.supportCode = output.supportCode;
    }
    if (output.tags !== undefined && output.tags !== null) {
        contents.tags = deserializeAws_json1_1TagList(output.tags, context);
    }
    return contents;
};
const deserializeAws_json1_1RelationalDatabaseBlueprint = (output, context) => {
    let contents = {
        __type: "RelationalDatabaseBlueprint",
        blueprintId: undefined,
        engine: undefined,
        engineDescription: undefined,
        engineVersion: undefined,
        engineVersionDescription: undefined,
        isEngineDefault: undefined
    };
    if (output.blueprintId !== undefined && output.blueprintId !== null) {
        contents.blueprintId = output.blueprintId;
    }
    if (output.engine !== undefined && output.engine !== null) {
        contents.engine = output.engine;
    }
    if (output.engineDescription !== undefined &&
        output.engineDescription !== null) {
        contents.engineDescription = output.engineDescription;
    }
    if (output.engineVersion !== undefined && output.engineVersion !== null) {
        contents.engineVersion = output.engineVersion;
    }
    if (output.engineVersionDescription !== undefined &&
        output.engineVersionDescription !== null) {
        contents.engineVersionDescription = output.engineVersionDescription;
    }
    if (output.isEngineDefault !== undefined && output.isEngineDefault !== null) {
        contents.isEngineDefault = output.isEngineDefault;
    }
    return contents;
};
const deserializeAws_json1_1RelationalDatabaseBlueprintList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1RelationalDatabaseBlueprint(entry, context));
};
const deserializeAws_json1_1RelationalDatabaseBundle = (output, context) => {
    let contents = {
        __type: "RelationalDatabaseBundle",
        bundleId: undefined,
        cpuCount: undefined,
        diskSizeInGb: undefined,
        isActive: undefined,
        isEncrypted: undefined,
        name: undefined,
        price: undefined,
        ramSizeInGb: undefined,
        transferPerMonthInGb: undefined
    };
    if (output.bundleId !== undefined && output.bundleId !== null) {
        contents.bundleId = output.bundleId;
    }
    if (output.cpuCount !== undefined && output.cpuCount !== null) {
        contents.cpuCount = output.cpuCount;
    }
    if (output.diskSizeInGb !== undefined && output.diskSizeInGb !== null) {
        contents.diskSizeInGb = output.diskSizeInGb;
    }
    if (output.isActive !== undefined && output.isActive !== null) {
        contents.isActive = output.isActive;
    }
    if (output.isEncrypted !== undefined && output.isEncrypted !== null) {
        contents.isEncrypted = output.isEncrypted;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.price !== undefined && output.price !== null) {
        contents.price = output.price;
    }
    if (output.ramSizeInGb !== undefined && output.ramSizeInGb !== null) {
        contents.ramSizeInGb = output.ramSizeInGb;
    }
    if (output.transferPerMonthInGb !== undefined &&
        output.transferPerMonthInGb !== null) {
        contents.transferPerMonthInGb = output.transferPerMonthInGb;
    }
    return contents;
};
const deserializeAws_json1_1RelationalDatabaseBundleList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1RelationalDatabaseBundle(entry, context));
};
const deserializeAws_json1_1RelationalDatabaseEndpoint = (output, context) => {
    let contents = {
        __type: "RelationalDatabaseEndpoint",
        address: undefined,
        port: undefined
    };
    if (output.address !== undefined && output.address !== null) {
        contents.address = output.address;
    }
    if (output.port !== undefined && output.port !== null) {
        contents.port = output.port;
    }
    return contents;
};
const deserializeAws_json1_1RelationalDatabaseEvent = (output, context) => {
    let contents = {
        __type: "RelationalDatabaseEvent",
        createdAt: undefined,
        eventCategories: undefined,
        message: undefined,
        resource: undefined
    };
    if (output.createdAt !== undefined && output.createdAt !== null) {
        contents.createdAt = new Date(Math.round(output.createdAt * 1000));
    }
    if (output.eventCategories !== undefined && output.eventCategories !== null) {
        contents.eventCategories = deserializeAws_json1_1StringList(output.eventCategories, context);
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    if (output.resource !== undefined && output.resource !== null) {
        contents.resource = output.resource;
    }
    return contents;
};
const deserializeAws_json1_1RelationalDatabaseEventList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1RelationalDatabaseEvent(entry, context));
};
const deserializeAws_json1_1RelationalDatabaseHardware = (output, context) => {
    let contents = {
        __type: "RelationalDatabaseHardware",
        cpuCount: undefined,
        diskSizeInGb: undefined,
        ramSizeInGb: undefined
    };
    if (output.cpuCount !== undefined && output.cpuCount !== null) {
        contents.cpuCount = output.cpuCount;
    }
    if (output.diskSizeInGb !== undefined && output.diskSizeInGb !== null) {
        contents.diskSizeInGb = output.diskSizeInGb;
    }
    if (output.ramSizeInGb !== undefined && output.ramSizeInGb !== null) {
        contents.ramSizeInGb = output.ramSizeInGb;
    }
    return contents;
};
const deserializeAws_json1_1RelationalDatabaseList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1RelationalDatabase(entry, context));
};
const deserializeAws_json1_1RelationalDatabaseParameter = (output, context) => {
    let contents = {
        __type: "RelationalDatabaseParameter",
        allowedValues: undefined,
        applyMethod: undefined,
        applyType: undefined,
        dataType: undefined,
        description: undefined,
        isModifiable: undefined,
        parameterName: undefined,
        parameterValue: undefined
    };
    if (output.allowedValues !== undefined && output.allowedValues !== null) {
        contents.allowedValues = output.allowedValues;
    }
    if (output.applyMethod !== undefined && output.applyMethod !== null) {
        contents.applyMethod = output.applyMethod;
    }
    if (output.applyType !== undefined && output.applyType !== null) {
        contents.applyType = output.applyType;
    }
    if (output.dataType !== undefined && output.dataType !== null) {
        contents.dataType = output.dataType;
    }
    if (output.description !== undefined && output.description !== null) {
        contents.description = output.description;
    }
    if (output.isModifiable !== undefined && output.isModifiable !== null) {
        contents.isModifiable = output.isModifiable;
    }
    if (output.parameterName !== undefined && output.parameterName !== null) {
        contents.parameterName = output.parameterName;
    }
    if (output.parameterValue !== undefined && output.parameterValue !== null) {
        contents.parameterValue = output.parameterValue;
    }
    return contents;
};
const deserializeAws_json1_1RelationalDatabaseParameterList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1RelationalDatabaseParameter(entry, context));
};
const deserializeAws_json1_1RelationalDatabaseSnapshot = (output, context) => {
    let contents = {
        __type: "RelationalDatabaseSnapshot",
        arn: undefined,
        createdAt: undefined,
        engine: undefined,
        engineVersion: undefined,
        fromRelationalDatabaseArn: undefined,
        fromRelationalDatabaseBlueprintId: undefined,
        fromRelationalDatabaseBundleId: undefined,
        fromRelationalDatabaseName: undefined,
        location: undefined,
        name: undefined,
        resourceType: undefined,
        sizeInGb: undefined,
        state: undefined,
        supportCode: undefined,
        tags: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.createdAt !== undefined && output.createdAt !== null) {
        contents.createdAt = new Date(Math.round(output.createdAt * 1000));
    }
    if (output.engine !== undefined && output.engine !== null) {
        contents.engine = output.engine;
    }
    if (output.engineVersion !== undefined && output.engineVersion !== null) {
        contents.engineVersion = output.engineVersion;
    }
    if (output.fromRelationalDatabaseArn !== undefined &&
        output.fromRelationalDatabaseArn !== null) {
        contents.fromRelationalDatabaseArn = output.fromRelationalDatabaseArn;
    }
    if (output.fromRelationalDatabaseBlueprintId !== undefined &&
        output.fromRelationalDatabaseBlueprintId !== null) {
        contents.fromRelationalDatabaseBlueprintId =
            output.fromRelationalDatabaseBlueprintId;
    }
    if (output.fromRelationalDatabaseBundleId !== undefined &&
        output.fromRelationalDatabaseBundleId !== null) {
        contents.fromRelationalDatabaseBundleId =
            output.fromRelationalDatabaseBundleId;
    }
    if (output.fromRelationalDatabaseName !== undefined &&
        output.fromRelationalDatabaseName !== null) {
        contents.fromRelationalDatabaseName = output.fromRelationalDatabaseName;
    }
    if (output.location !== undefined && output.location !== null) {
        contents.location = deserializeAws_json1_1ResourceLocation(output.location, context);
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.resourceType !== undefined && output.resourceType !== null) {
        contents.resourceType = output.resourceType;
    }
    if (output.sizeInGb !== undefined && output.sizeInGb !== null) {
        contents.sizeInGb = output.sizeInGb;
    }
    if (output.state !== undefined && output.state !== null) {
        contents.state = output.state;
    }
    if (output.supportCode !== undefined && output.supportCode !== null) {
        contents.supportCode = output.supportCode;
    }
    if (output.tags !== undefined && output.tags !== null) {
        contents.tags = deserializeAws_json1_1TagList(output.tags, context);
    }
    return contents;
};
const deserializeAws_json1_1RelationalDatabaseSnapshotList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1RelationalDatabaseSnapshot(entry, context));
};
const deserializeAws_json1_1ReleaseStaticIpResult = (output, context) => {
    let contents = {
        __type: "ReleaseStaticIpResult",
        operations: undefined
    };
    if (output.operations !== undefined && output.operations !== null) {
        contents.operations = deserializeAws_json1_1OperationList(output.operations, context);
    }
    return contents;
};
const deserializeAws_json1_1ResourceLocation = (output, context) => {
    let contents = {
        __type: "ResourceLocation",
        availabilityZone: undefined,
        regionName: undefined
    };
    if (output.availabilityZone !== undefined &&
        output.availabilityZone !== null) {
        contents.availabilityZone = output.availabilityZone;
    }
    if (output.regionName !== undefined && output.regionName !== null) {
        contents.regionName = output.regionName;
    }
    return contents;
};
const deserializeAws_json1_1ServiceException = (output, context) => {
    let contents = {
        __type: "ServiceException",
        code: undefined,
        docs: undefined,
        message: undefined,
        tip: undefined
    };
    if (output.code !== undefined && output.code !== null) {
        contents.code = output.code;
    }
    if (output.docs !== undefined && output.docs !== null) {
        contents.docs = output.docs;
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    if (output.tip !== undefined && output.tip !== null) {
        contents.tip = output.tip;
    }
    return contents;
};
const deserializeAws_json1_1StartInstanceResult = (output, context) => {
    let contents = {
        __type: "StartInstanceResult",
        operations: undefined
    };
    if (output.operations !== undefined && output.operations !== null) {
        contents.operations = deserializeAws_json1_1OperationList(output.operations, context);
    }
    return contents;
};
const deserializeAws_json1_1StartRelationalDatabaseResult = (output, context) => {
    let contents = {
        __type: "StartRelationalDatabaseResult",
        operations: undefined
    };
    if (output.operations !== undefined && output.operations !== null) {
        contents.operations = deserializeAws_json1_1OperationList(output.operations, context);
    }
    return contents;
};
const deserializeAws_json1_1StaticIp = (output, context) => {
    let contents = {
        __type: "StaticIp",
        arn: undefined,
        attachedTo: undefined,
        createdAt: undefined,
        ipAddress: undefined,
        isAttached: undefined,
        location: undefined,
        name: undefined,
        resourceType: undefined,
        supportCode: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.attachedTo !== undefined && output.attachedTo !== null) {
        contents.attachedTo = output.attachedTo;
    }
    if (output.createdAt !== undefined && output.createdAt !== null) {
        contents.createdAt = new Date(Math.round(output.createdAt * 1000));
    }
    if (output.ipAddress !== undefined && output.ipAddress !== null) {
        contents.ipAddress = output.ipAddress;
    }
    if (output.isAttached !== undefined && output.isAttached !== null) {
        contents.isAttached = output.isAttached;
    }
    if (output.location !== undefined && output.location !== null) {
        contents.location = deserializeAws_json1_1ResourceLocation(output.location, context);
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.resourceType !== undefined && output.resourceType !== null) {
        contents.resourceType = output.resourceType;
    }
    if (output.supportCode !== undefined && output.supportCode !== null) {
        contents.supportCode = output.supportCode;
    }
    return contents;
};
const deserializeAws_json1_1StaticIpList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1StaticIp(entry, context));
};
const deserializeAws_json1_1StopInstanceResult = (output, context) => {
    let contents = {
        __type: "StopInstanceResult",
        operations: undefined
    };
    if (output.operations !== undefined && output.operations !== null) {
        contents.operations = deserializeAws_json1_1OperationList(output.operations, context);
    }
    return contents;
};
const deserializeAws_json1_1StopRelationalDatabaseResult = (output, context) => {
    let contents = {
        __type: "StopRelationalDatabaseResult",
        operations: undefined
    };
    if (output.operations !== undefined && output.operations !== null) {
        contents.operations = deserializeAws_json1_1OperationList(output.operations, context);
    }
    return contents;
};
const deserializeAws_json1_1StringList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1Tag = (output, context) => {
    let contents = {
        __type: "Tag",
        key: undefined,
        value: undefined
    };
    if (output.key !== undefined && output.key !== null) {
        contents.key = output.key;
    }
    if (output.value !== undefined && output.value !== null) {
        contents.value = output.value;
    }
    return contents;
};
const deserializeAws_json1_1TagList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Tag(entry, context));
};
const deserializeAws_json1_1TagResourceResult = (output, context) => {
    let contents = {
        __type: "TagResourceResult",
        operations: undefined
    };
    if (output.operations !== undefined && output.operations !== null) {
        contents.operations = deserializeAws_json1_1OperationList(output.operations, context);
    }
    return contents;
};
const deserializeAws_json1_1UnauthenticatedException = (output, context) => {
    let contents = {
        __type: "UnauthenticatedException",
        code: undefined,
        docs: undefined,
        message: undefined,
        tip: undefined
    };
    if (output.code !== undefined && output.code !== null) {
        contents.code = output.code;
    }
    if (output.docs !== undefined && output.docs !== null) {
        contents.docs = output.docs;
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    if (output.tip !== undefined && output.tip !== null) {
        contents.tip = output.tip;
    }
    return contents;
};
const deserializeAws_json1_1UnpeerVpcResult = (output, context) => {
    let contents = {
        __type: "UnpeerVpcResult",
        operation: undefined
    };
    if (output.operation !== undefined && output.operation !== null) {
        contents.operation = deserializeAws_json1_1Operation(output.operation, context);
    }
    return contents;
};
const deserializeAws_json1_1UntagResourceResult = (output, context) => {
    let contents = {
        __type: "UntagResourceResult",
        operations: undefined
    };
    if (output.operations !== undefined && output.operations !== null) {
        contents.operations = deserializeAws_json1_1OperationList(output.operations, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdateDomainEntryResult = (output, context) => {
    let contents = {
        __type: "UpdateDomainEntryResult",
        operations: undefined
    };
    if (output.operations !== undefined && output.operations !== null) {
        contents.operations = deserializeAws_json1_1OperationList(output.operations, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdateLoadBalancerAttributeResult = (output, context) => {
    let contents = {
        __type: "UpdateLoadBalancerAttributeResult",
        operations: undefined
    };
    if (output.operations !== undefined && output.operations !== null) {
        contents.operations = deserializeAws_json1_1OperationList(output.operations, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdateRelationalDatabaseParametersResult = (output, context) => {
    let contents = {
        __type: "UpdateRelationalDatabaseParametersResult",
        operations: undefined
    };
    if (output.operations !== undefined && output.operations !== null) {
        contents.operations = deserializeAws_json1_1OperationList(output.operations, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdateRelationalDatabaseResult = (output, context) => {
    let contents = {
        __type: "UpdateRelationalDatabaseResult",
        operations: undefined
    };
    if (output.operations !== undefined && output.operations !== null) {
        contents.operations = deserializeAws_json1_1OperationList(output.operations, context);
    }
    return contents;
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