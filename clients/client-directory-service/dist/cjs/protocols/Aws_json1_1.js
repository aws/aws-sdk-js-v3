"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1AcceptSharedDirectoryCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DirectoryService_20150416.AcceptSharedDirectory";
    let body;
    body = JSON.stringify(serializeAws_json1_1AcceptSharedDirectoryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AcceptSharedDirectoryCommand = serializeAws_json1_1AcceptSharedDirectoryCommand;
async function serializeAws_json1_1AddIpRoutesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DirectoryService_20150416.AddIpRoutes";
    let body;
    body = JSON.stringify(serializeAws_json1_1AddIpRoutesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AddIpRoutesCommand = serializeAws_json1_1AddIpRoutesCommand;
async function serializeAws_json1_1AddTagsToResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DirectoryService_20150416.AddTagsToResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1AddTagsToResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AddTagsToResourceCommand = serializeAws_json1_1AddTagsToResourceCommand;
async function serializeAws_json1_1CancelSchemaExtensionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DirectoryService_20150416.CancelSchemaExtension";
    let body;
    body = JSON.stringify(serializeAws_json1_1CancelSchemaExtensionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CancelSchemaExtensionCommand = serializeAws_json1_1CancelSchemaExtensionCommand;
async function serializeAws_json1_1ConnectDirectoryCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DirectoryService_20150416.ConnectDirectory";
    let body;
    body = JSON.stringify(serializeAws_json1_1ConnectDirectoryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ConnectDirectoryCommand = serializeAws_json1_1ConnectDirectoryCommand;
async function serializeAws_json1_1CreateAliasCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DirectoryService_20150416.CreateAlias";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateAliasRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateAliasCommand = serializeAws_json1_1CreateAliasCommand;
async function serializeAws_json1_1CreateComputerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DirectoryService_20150416.CreateComputer";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateComputerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateComputerCommand = serializeAws_json1_1CreateComputerCommand;
async function serializeAws_json1_1CreateConditionalForwarderCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "DirectoryService_20150416.CreateConditionalForwarder";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateConditionalForwarderRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateConditionalForwarderCommand = serializeAws_json1_1CreateConditionalForwarderCommand;
async function serializeAws_json1_1CreateDirectoryCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DirectoryService_20150416.CreateDirectory";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDirectoryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateDirectoryCommand = serializeAws_json1_1CreateDirectoryCommand;
async function serializeAws_json1_1CreateLogSubscriptionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DirectoryService_20150416.CreateLogSubscription";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateLogSubscriptionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateLogSubscriptionCommand = serializeAws_json1_1CreateLogSubscriptionCommand;
async function serializeAws_json1_1CreateMicrosoftADCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DirectoryService_20150416.CreateMicrosoftAD";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateMicrosoftADRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateMicrosoftADCommand = serializeAws_json1_1CreateMicrosoftADCommand;
async function serializeAws_json1_1CreateSnapshotCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DirectoryService_20150416.CreateSnapshot";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateSnapshotRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateSnapshotCommand = serializeAws_json1_1CreateSnapshotCommand;
async function serializeAws_json1_1CreateTrustCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DirectoryService_20150416.CreateTrust";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateTrustRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateTrustCommand = serializeAws_json1_1CreateTrustCommand;
async function serializeAws_json1_1DeleteConditionalForwarderCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "DirectoryService_20150416.DeleteConditionalForwarder";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteConditionalForwarderRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteConditionalForwarderCommand = serializeAws_json1_1DeleteConditionalForwarderCommand;
async function serializeAws_json1_1DeleteDirectoryCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DirectoryService_20150416.DeleteDirectory";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteDirectoryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteDirectoryCommand = serializeAws_json1_1DeleteDirectoryCommand;
async function serializeAws_json1_1DeleteLogSubscriptionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DirectoryService_20150416.DeleteLogSubscription";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteLogSubscriptionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteLogSubscriptionCommand = serializeAws_json1_1DeleteLogSubscriptionCommand;
async function serializeAws_json1_1DeleteSnapshotCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DirectoryService_20150416.DeleteSnapshot";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteSnapshotRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteSnapshotCommand = serializeAws_json1_1DeleteSnapshotCommand;
async function serializeAws_json1_1DeleteTrustCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DirectoryService_20150416.DeleteTrust";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteTrustRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteTrustCommand = serializeAws_json1_1DeleteTrustCommand;
async function serializeAws_json1_1DeregisterCertificateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DirectoryService_20150416.DeregisterCertificate";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeregisterCertificateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeregisterCertificateCommand = serializeAws_json1_1DeregisterCertificateCommand;
async function serializeAws_json1_1DeregisterEventTopicCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DirectoryService_20150416.DeregisterEventTopic";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeregisterEventTopicRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeregisterEventTopicCommand = serializeAws_json1_1DeregisterEventTopicCommand;
async function serializeAws_json1_1DescribeCertificateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DirectoryService_20150416.DescribeCertificate";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeCertificateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeCertificateCommand = serializeAws_json1_1DescribeCertificateCommand;
async function serializeAws_json1_1DescribeConditionalForwardersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "DirectoryService_20150416.DescribeConditionalForwarders";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeConditionalForwardersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeConditionalForwardersCommand = serializeAws_json1_1DescribeConditionalForwardersCommand;
async function serializeAws_json1_1DescribeDirectoriesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DirectoryService_20150416.DescribeDirectories";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeDirectoriesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeDirectoriesCommand = serializeAws_json1_1DescribeDirectoriesCommand;
async function serializeAws_json1_1DescribeDomainControllersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "DirectoryService_20150416.DescribeDomainControllers";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeDomainControllersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeDomainControllersCommand = serializeAws_json1_1DescribeDomainControllersCommand;
async function serializeAws_json1_1DescribeEventTopicsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DirectoryService_20150416.DescribeEventTopics";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEventTopicsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeEventTopicsCommand = serializeAws_json1_1DescribeEventTopicsCommand;
async function serializeAws_json1_1DescribeLDAPSSettingsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DirectoryService_20150416.DescribeLDAPSSettings";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeLDAPSSettingsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeLDAPSSettingsCommand = serializeAws_json1_1DescribeLDAPSSettingsCommand;
async function serializeAws_json1_1DescribeSharedDirectoriesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "DirectoryService_20150416.DescribeSharedDirectories";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeSharedDirectoriesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeSharedDirectoriesCommand = serializeAws_json1_1DescribeSharedDirectoriesCommand;
async function serializeAws_json1_1DescribeSnapshotsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DirectoryService_20150416.DescribeSnapshots";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeSnapshotsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeSnapshotsCommand = serializeAws_json1_1DescribeSnapshotsCommand;
async function serializeAws_json1_1DescribeTrustsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DirectoryService_20150416.DescribeTrusts";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeTrustsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeTrustsCommand = serializeAws_json1_1DescribeTrustsCommand;
async function serializeAws_json1_1DisableLDAPSCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DirectoryService_20150416.DisableLDAPS";
    let body;
    body = JSON.stringify(serializeAws_json1_1DisableLDAPSRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DisableLDAPSCommand = serializeAws_json1_1DisableLDAPSCommand;
async function serializeAws_json1_1DisableRadiusCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DirectoryService_20150416.DisableRadius";
    let body;
    body = JSON.stringify(serializeAws_json1_1DisableRadiusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DisableRadiusCommand = serializeAws_json1_1DisableRadiusCommand;
async function serializeAws_json1_1DisableSsoCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DirectoryService_20150416.DisableSso";
    let body;
    body = JSON.stringify(serializeAws_json1_1DisableSsoRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DisableSsoCommand = serializeAws_json1_1DisableSsoCommand;
async function serializeAws_json1_1EnableLDAPSCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DirectoryService_20150416.EnableLDAPS";
    let body;
    body = JSON.stringify(serializeAws_json1_1EnableLDAPSRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1EnableLDAPSCommand = serializeAws_json1_1EnableLDAPSCommand;
async function serializeAws_json1_1EnableRadiusCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DirectoryService_20150416.EnableRadius";
    let body;
    body = JSON.stringify(serializeAws_json1_1EnableRadiusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1EnableRadiusCommand = serializeAws_json1_1EnableRadiusCommand;
async function serializeAws_json1_1EnableSsoCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DirectoryService_20150416.EnableSso";
    let body;
    body = JSON.stringify(serializeAws_json1_1EnableSsoRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1EnableSsoCommand = serializeAws_json1_1EnableSsoCommand;
async function serializeAws_json1_1GetDirectoryLimitsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DirectoryService_20150416.GetDirectoryLimits";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDirectoryLimitsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetDirectoryLimitsCommand = serializeAws_json1_1GetDirectoryLimitsCommand;
async function serializeAws_json1_1GetSnapshotLimitsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DirectoryService_20150416.GetSnapshotLimits";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetSnapshotLimitsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetSnapshotLimitsCommand = serializeAws_json1_1GetSnapshotLimitsCommand;
async function serializeAws_json1_1ListCertificatesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DirectoryService_20150416.ListCertificates";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListCertificatesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListCertificatesCommand = serializeAws_json1_1ListCertificatesCommand;
async function serializeAws_json1_1ListIpRoutesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DirectoryService_20150416.ListIpRoutes";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListIpRoutesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListIpRoutesCommand = serializeAws_json1_1ListIpRoutesCommand;
async function serializeAws_json1_1ListLogSubscriptionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DirectoryService_20150416.ListLogSubscriptions";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListLogSubscriptionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListLogSubscriptionsCommand = serializeAws_json1_1ListLogSubscriptionsCommand;
async function serializeAws_json1_1ListSchemaExtensionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DirectoryService_20150416.ListSchemaExtensions";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListSchemaExtensionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListSchemaExtensionsCommand = serializeAws_json1_1ListSchemaExtensionsCommand;
async function serializeAws_json1_1ListTagsForResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DirectoryService_20150416.ListTagsForResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
async function serializeAws_json1_1RegisterCertificateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DirectoryService_20150416.RegisterCertificate";
    let body;
    body = JSON.stringify(serializeAws_json1_1RegisterCertificateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RegisterCertificateCommand = serializeAws_json1_1RegisterCertificateCommand;
async function serializeAws_json1_1RegisterEventTopicCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DirectoryService_20150416.RegisterEventTopic";
    let body;
    body = JSON.stringify(serializeAws_json1_1RegisterEventTopicRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RegisterEventTopicCommand = serializeAws_json1_1RegisterEventTopicCommand;
async function serializeAws_json1_1RejectSharedDirectoryCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DirectoryService_20150416.RejectSharedDirectory";
    let body;
    body = JSON.stringify(serializeAws_json1_1RejectSharedDirectoryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RejectSharedDirectoryCommand = serializeAws_json1_1RejectSharedDirectoryCommand;
async function serializeAws_json1_1RemoveIpRoutesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DirectoryService_20150416.RemoveIpRoutes";
    let body;
    body = JSON.stringify(serializeAws_json1_1RemoveIpRoutesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RemoveIpRoutesCommand = serializeAws_json1_1RemoveIpRoutesCommand;
async function serializeAws_json1_1RemoveTagsFromResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DirectoryService_20150416.RemoveTagsFromResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1RemoveTagsFromResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RemoveTagsFromResourceCommand = serializeAws_json1_1RemoveTagsFromResourceCommand;
async function serializeAws_json1_1ResetUserPasswordCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DirectoryService_20150416.ResetUserPassword";
    let body;
    body = JSON.stringify(serializeAws_json1_1ResetUserPasswordRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ResetUserPasswordCommand = serializeAws_json1_1ResetUserPasswordCommand;
async function serializeAws_json1_1RestoreFromSnapshotCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DirectoryService_20150416.RestoreFromSnapshot";
    let body;
    body = JSON.stringify(serializeAws_json1_1RestoreFromSnapshotRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RestoreFromSnapshotCommand = serializeAws_json1_1RestoreFromSnapshotCommand;
async function serializeAws_json1_1ShareDirectoryCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DirectoryService_20150416.ShareDirectory";
    let body;
    body = JSON.stringify(serializeAws_json1_1ShareDirectoryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ShareDirectoryCommand = serializeAws_json1_1ShareDirectoryCommand;
async function serializeAws_json1_1StartSchemaExtensionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DirectoryService_20150416.StartSchemaExtension";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartSchemaExtensionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartSchemaExtensionCommand = serializeAws_json1_1StartSchemaExtensionCommand;
async function serializeAws_json1_1UnshareDirectoryCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DirectoryService_20150416.UnshareDirectory";
    let body;
    body = JSON.stringify(serializeAws_json1_1UnshareDirectoryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UnshareDirectoryCommand = serializeAws_json1_1UnshareDirectoryCommand;
async function serializeAws_json1_1UpdateConditionalForwarderCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "DirectoryService_20150416.UpdateConditionalForwarder";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateConditionalForwarderRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateConditionalForwarderCommand = serializeAws_json1_1UpdateConditionalForwarderCommand;
async function serializeAws_json1_1UpdateNumberOfDomainControllersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "DirectoryService_20150416.UpdateNumberOfDomainControllers";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateNumberOfDomainControllersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateNumberOfDomainControllersCommand = serializeAws_json1_1UpdateNumberOfDomainControllersCommand;
async function serializeAws_json1_1UpdateRadiusCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DirectoryService_20150416.UpdateRadius";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateRadiusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateRadiusCommand = serializeAws_json1_1UpdateRadiusCommand;
async function serializeAws_json1_1UpdateTrustCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DirectoryService_20150416.UpdateTrust";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateTrustRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateTrustCommand = serializeAws_json1_1UpdateTrustCommand;
async function serializeAws_json1_1VerifyTrustCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DirectoryService_20150416.VerifyTrust";
    let body;
    body = JSON.stringify(serializeAws_json1_1VerifyTrustRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1VerifyTrustCommand = serializeAws_json1_1VerifyTrustCommand;
async function deserializeAws_json1_1AcceptSharedDirectoryCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AcceptSharedDirectoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AcceptSharedDirectoryResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AcceptSharedDirectoryResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AcceptSharedDirectoryCommand = deserializeAws_json1_1AcceptSharedDirectoryCommand;
async function deserializeAws_json1_1AcceptSharedDirectoryCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice.v20150416#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectoryAlreadySharedException":
        case "com.amazonaws.directoryservice.v20150416#DirectoryAlreadySharedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectoryAlreadySharedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice.v20150416#EntityDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice.v20150416#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice.v20150416#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1AddIpRoutesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AddIpRoutesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AddIpRoutesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AddIpRoutesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AddIpRoutesCommand = deserializeAws_json1_1AddIpRoutesCommand;
async function deserializeAws_json1_1AddIpRoutesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice.v20150416#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectoryUnavailableException":
        case "com.amazonaws.directoryservice.v20150416#DirectoryUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityAlreadyExistsException":
        case "com.amazonaws.directoryservice.v20150416#EntityAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice.v20150416#EntityDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice.v20150416#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IpRouteLimitExceededException":
        case "com.amazonaws.directoryservice.v20150416#IpRouteLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IpRouteLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice.v20150416#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
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
    contents = deserializeAws_json1_1AddTagsToResourceResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AddTagsToResourceResult" }, contents);
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
        case "ClientException":
        case "com.amazonaws.directoryservice.v20150416#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice.v20150416#EntityDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice.v20150416#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice.v20150416#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagLimitExceededException":
        case "com.amazonaws.directoryservice.v20150416#TagLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TagLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CancelSchemaExtensionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CancelSchemaExtensionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CancelSchemaExtensionResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CancelSchemaExtensionResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CancelSchemaExtensionCommand = deserializeAws_json1_1CancelSchemaExtensionCommand;
async function deserializeAws_json1_1CancelSchemaExtensionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice.v20150416#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice.v20150416#EntityDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice.v20150416#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ConnectDirectoryCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ConnectDirectoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ConnectDirectoryResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ConnectDirectoryResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ConnectDirectoryCommand = deserializeAws_json1_1ConnectDirectoryCommand;
async function deserializeAws_json1_1ConnectDirectoryCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice.v20150416#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectoryLimitExceededException":
        case "com.amazonaws.directoryservice.v20150416#DirectoryLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectoryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice.v20150416#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice.v20150416#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateAliasCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateAliasCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateAliasResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateAliasResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateAliasCommand = deserializeAws_json1_1CreateAliasCommand;
async function deserializeAws_json1_1CreateAliasCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice.v20150416#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityAlreadyExistsException":
        case "com.amazonaws.directoryservice.v20150416#EntityAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice.v20150416#EntityDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice.v20150416#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice.v20150416#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateComputerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateComputerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateComputerResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateComputerResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateComputerCommand = deserializeAws_json1_1CreateComputerCommand;
async function deserializeAws_json1_1CreateComputerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AuthenticationFailedException":
        case "com.amazonaws.directoryservice.v20150416#AuthenticationFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AuthenticationFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClientException":
        case "com.amazonaws.directoryservice.v20150416#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectoryUnavailableException":
        case "com.amazonaws.directoryservice.v20150416#DirectoryUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityAlreadyExistsException":
        case "com.amazonaws.directoryservice.v20150416#EntityAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice.v20150416#EntityDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice.v20150416#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice.v20150416#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.directoryservice.v20150416#UnsupportedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateConditionalForwarderCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateConditionalForwarderCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateConditionalForwarderResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateConditionalForwarderResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateConditionalForwarderCommand = deserializeAws_json1_1CreateConditionalForwarderCommand;
async function deserializeAws_json1_1CreateConditionalForwarderCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice.v20150416#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectoryUnavailableException":
        case "com.amazonaws.directoryservice.v20150416#DirectoryUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityAlreadyExistsException":
        case "com.amazonaws.directoryservice.v20150416#EntityAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice.v20150416#EntityDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice.v20150416#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice.v20150416#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.directoryservice.v20150416#UnsupportedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateDirectoryCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateDirectoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateDirectoryResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateDirectoryResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateDirectoryCommand = deserializeAws_json1_1CreateDirectoryCommand;
async function deserializeAws_json1_1CreateDirectoryCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice.v20150416#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectoryLimitExceededException":
        case "com.amazonaws.directoryservice.v20150416#DirectoryLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectoryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice.v20150416#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice.v20150416#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateLogSubscriptionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateLogSubscriptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateLogSubscriptionResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateLogSubscriptionResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateLogSubscriptionCommand = deserializeAws_json1_1CreateLogSubscriptionCommand;
async function deserializeAws_json1_1CreateLogSubscriptionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice.v20150416#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityAlreadyExistsException":
        case "com.amazonaws.directoryservice.v20150416#EntityAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice.v20150416#EntityDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InsufficientPermissionsException":
        case "com.amazonaws.directoryservice.v20150416#InsufficientPermissionsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InsufficientPermissionsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice.v20150416#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.directoryservice.v20150416#UnsupportedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateMicrosoftADCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateMicrosoftADCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateMicrosoftADResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateMicrosoftADResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateMicrosoftADCommand = deserializeAws_json1_1CreateMicrosoftADCommand;
async function deserializeAws_json1_1CreateMicrosoftADCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice.v20150416#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectoryLimitExceededException":
        case "com.amazonaws.directoryservice.v20150416#DirectoryLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectoryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice.v20150416#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice.v20150416#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.directoryservice.v20150416#UnsupportedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
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
    contents = deserializeAws_json1_1CreateSnapshotResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateSnapshotResult" }, contents);
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
        case "ClientException":
        case "com.amazonaws.directoryservice.v20150416#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice.v20150416#EntityDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice.v20150416#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice.v20150416#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SnapshotLimitExceededException":
        case "com.amazonaws.directoryservice.v20150416#SnapshotLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1SnapshotLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateTrustCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateTrustCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateTrustResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateTrustResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateTrustCommand = deserializeAws_json1_1CreateTrustCommand;
async function deserializeAws_json1_1CreateTrustCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice.v20150416#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityAlreadyExistsException":
        case "com.amazonaws.directoryservice.v20150416#EntityAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice.v20150416#EntityDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice.v20150416#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice.v20150416#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.directoryservice.v20150416#UnsupportedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteConditionalForwarderCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteConditionalForwarderCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteConditionalForwarderResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteConditionalForwarderResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteConditionalForwarderCommand = deserializeAws_json1_1DeleteConditionalForwarderCommand;
async function deserializeAws_json1_1DeleteConditionalForwarderCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice.v20150416#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectoryUnavailableException":
        case "com.amazonaws.directoryservice.v20150416#DirectoryUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice.v20150416#EntityDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice.v20150416#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice.v20150416#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.directoryservice.v20150416#UnsupportedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteDirectoryCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteDirectoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteDirectoryResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteDirectoryResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteDirectoryCommand = deserializeAws_json1_1DeleteDirectoryCommand;
async function deserializeAws_json1_1DeleteDirectoryCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice.v20150416#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice.v20150416#EntityDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice.v20150416#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteLogSubscriptionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteLogSubscriptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteLogSubscriptionResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteLogSubscriptionResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteLogSubscriptionCommand = deserializeAws_json1_1DeleteLogSubscriptionCommand;
async function deserializeAws_json1_1DeleteLogSubscriptionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice.v20150416#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice.v20150416#EntityDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice.v20150416#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.directoryservice.v20150416#UnsupportedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteSnapshotCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteSnapshotResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteSnapshotResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteSnapshotCommand = deserializeAws_json1_1DeleteSnapshotCommand;
async function deserializeAws_json1_1DeleteSnapshotCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice.v20150416#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice.v20150416#EntityDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice.v20150416#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice.v20150416#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteTrustCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteTrustCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteTrustResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteTrustResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteTrustCommand = deserializeAws_json1_1DeleteTrustCommand;
async function deserializeAws_json1_1DeleteTrustCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice.v20150416#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice.v20150416#EntityDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice.v20150416#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice.v20150416#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.directoryservice.v20150416#UnsupportedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeregisterCertificateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeregisterCertificateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeregisterCertificateResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeregisterCertificateResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeregisterCertificateCommand = deserializeAws_json1_1DeregisterCertificateCommand;
async function deserializeAws_json1_1DeregisterCertificateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CertificateDoesNotExistException":
        case "com.amazonaws.directoryservice.v20150416#CertificateDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CertificateDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CertificateInUseException":
        case "com.amazonaws.directoryservice.v20150416#CertificateInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CertificateInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClientException":
        case "com.amazonaws.directoryservice.v20150416#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectoryDoesNotExistException":
        case "com.amazonaws.directoryservice.v20150416#DirectoryDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectoryDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectoryUnavailableException":
        case "com.amazonaws.directoryservice.v20150416#DirectoryUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice.v20150416#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice.v20150416#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.directoryservice.v20150416#UnsupportedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeregisterEventTopicCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeregisterEventTopicCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeregisterEventTopicResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeregisterEventTopicResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeregisterEventTopicCommand = deserializeAws_json1_1DeregisterEventTopicCommand;
async function deserializeAws_json1_1DeregisterEventTopicCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice.v20150416#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice.v20150416#EntityDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice.v20150416#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice.v20150416#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeCertificateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeCertificateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeCertificateResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeCertificateResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeCertificateCommand = deserializeAws_json1_1DescribeCertificateCommand;
async function deserializeAws_json1_1DescribeCertificateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CertificateDoesNotExistException":
        case "com.amazonaws.directoryservice.v20150416#CertificateDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CertificateDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClientException":
        case "com.amazonaws.directoryservice.v20150416#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectoryDoesNotExistException":
        case "com.amazonaws.directoryservice.v20150416#DirectoryDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectoryDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice.v20150416#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice.v20150416#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.directoryservice.v20150416#UnsupportedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeConditionalForwardersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeConditionalForwardersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeConditionalForwardersResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeConditionalForwardersResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeConditionalForwardersCommand = deserializeAws_json1_1DescribeConditionalForwardersCommand;
async function deserializeAws_json1_1DescribeConditionalForwardersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice.v20150416#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectoryUnavailableException":
        case "com.amazonaws.directoryservice.v20150416#DirectoryUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice.v20150416#EntityDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice.v20150416#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice.v20150416#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.directoryservice.v20150416#UnsupportedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeDirectoriesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeDirectoriesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeDirectoriesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeDirectoriesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeDirectoriesCommand = deserializeAws_json1_1DescribeDirectoriesCommand;
async function deserializeAws_json1_1DescribeDirectoriesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice.v20150416#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice.v20150416#EntityDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.directoryservice.v20150416#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice.v20150416#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice.v20150416#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeDomainControllersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeDomainControllersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeDomainControllersResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeDomainControllersResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeDomainControllersCommand = deserializeAws_json1_1DescribeDomainControllersCommand;
async function deserializeAws_json1_1DescribeDomainControllersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice.v20150416#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice.v20150416#EntityDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.directoryservice.v20150416#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice.v20150416#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice.v20150416#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.directoryservice.v20150416#UnsupportedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeEventTopicsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeEventTopicsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEventTopicsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeEventTopicsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeEventTopicsCommand = deserializeAws_json1_1DescribeEventTopicsCommand;
async function deserializeAws_json1_1DescribeEventTopicsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice.v20150416#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice.v20150416#EntityDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice.v20150416#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice.v20150416#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeLDAPSSettingsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeLDAPSSettingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeLDAPSSettingsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeLDAPSSettingsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeLDAPSSettingsCommand = deserializeAws_json1_1DescribeLDAPSSettingsCommand;
async function deserializeAws_json1_1DescribeLDAPSSettingsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice.v20150416#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectoryDoesNotExistException":
        case "com.amazonaws.directoryservice.v20150416#DirectoryDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectoryDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.directoryservice.v20150416#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice.v20150416#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice.v20150416#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.directoryservice.v20150416#UnsupportedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeSharedDirectoriesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeSharedDirectoriesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeSharedDirectoriesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeSharedDirectoriesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeSharedDirectoriesCommand = deserializeAws_json1_1DescribeSharedDirectoriesCommand;
async function deserializeAws_json1_1DescribeSharedDirectoriesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice.v20150416#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice.v20150416#EntityDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.directoryservice.v20150416#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice.v20150416#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice.v20150416#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.directoryservice.v20150416#UnsupportedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeSnapshotsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeSnapshotsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeSnapshotsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeSnapshotsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeSnapshotsCommand = deserializeAws_json1_1DescribeSnapshotsCommand;
async function deserializeAws_json1_1DescribeSnapshotsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice.v20150416#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice.v20150416#EntityDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.directoryservice.v20150416#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice.v20150416#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice.v20150416#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeTrustsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeTrustsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeTrustsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeTrustsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeTrustsCommand = deserializeAws_json1_1DescribeTrustsCommand;
async function deserializeAws_json1_1DescribeTrustsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice.v20150416#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice.v20150416#EntityDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.directoryservice.v20150416#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice.v20150416#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice.v20150416#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.directoryservice.v20150416#UnsupportedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DisableLDAPSCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DisableLDAPSCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisableLDAPSResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DisableLDAPSResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DisableLDAPSCommand = deserializeAws_json1_1DisableLDAPSCommand;
async function deserializeAws_json1_1DisableLDAPSCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice.v20150416#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectoryDoesNotExistException":
        case "com.amazonaws.directoryservice.v20150416#DirectoryDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectoryDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectoryUnavailableException":
        case "com.amazonaws.directoryservice.v20150416#DirectoryUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidLDAPSStatusException":
        case "com.amazonaws.directoryservice.v20150416#InvalidLDAPSStatusException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidLDAPSStatusExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice.v20150416#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice.v20150416#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.directoryservice.v20150416#UnsupportedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DisableRadiusCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DisableRadiusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisableRadiusResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DisableRadiusResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DisableRadiusCommand = deserializeAws_json1_1DisableRadiusCommand;
async function deserializeAws_json1_1DisableRadiusCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice.v20150416#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice.v20150416#EntityDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice.v20150416#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DisableSsoCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DisableSsoCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisableSsoResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DisableSsoResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DisableSsoCommand = deserializeAws_json1_1DisableSsoCommand;
async function deserializeAws_json1_1DisableSsoCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AuthenticationFailedException":
        case "com.amazonaws.directoryservice.v20150416#AuthenticationFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AuthenticationFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClientException":
        case "com.amazonaws.directoryservice.v20150416#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice.v20150416#EntityDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InsufficientPermissionsException":
        case "com.amazonaws.directoryservice.v20150416#InsufficientPermissionsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InsufficientPermissionsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice.v20150416#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1EnableLDAPSCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1EnableLDAPSCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1EnableLDAPSResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "EnableLDAPSResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1EnableLDAPSCommand = deserializeAws_json1_1EnableLDAPSCommand;
async function deserializeAws_json1_1EnableLDAPSCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice.v20150416#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectoryDoesNotExistException":
        case "com.amazonaws.directoryservice.v20150416#DirectoryDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectoryDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectoryUnavailableException":
        case "com.amazonaws.directoryservice.v20150416#DirectoryUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidLDAPSStatusException":
        case "com.amazonaws.directoryservice.v20150416#InvalidLDAPSStatusException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidLDAPSStatusExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice.v20150416#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoAvailableCertificateException":
        case "com.amazonaws.directoryservice.v20150416#NoAvailableCertificateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoAvailableCertificateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice.v20150416#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.directoryservice.v20150416#UnsupportedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1EnableRadiusCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1EnableRadiusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1EnableRadiusResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "EnableRadiusResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1EnableRadiusCommand = deserializeAws_json1_1EnableRadiusCommand;
async function deserializeAws_json1_1EnableRadiusCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice.v20150416#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityAlreadyExistsException":
        case "com.amazonaws.directoryservice.v20150416#EntityAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice.v20150416#EntityDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice.v20150416#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice.v20150416#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1EnableSsoCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1EnableSsoCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1EnableSsoResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "EnableSsoResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1EnableSsoCommand = deserializeAws_json1_1EnableSsoCommand;
async function deserializeAws_json1_1EnableSsoCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AuthenticationFailedException":
        case "com.amazonaws.directoryservice.v20150416#AuthenticationFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AuthenticationFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClientException":
        case "com.amazonaws.directoryservice.v20150416#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice.v20150416#EntityDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InsufficientPermissionsException":
        case "com.amazonaws.directoryservice.v20150416#InsufficientPermissionsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InsufficientPermissionsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice.v20150416#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetDirectoryLimitsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetDirectoryLimitsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDirectoryLimitsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetDirectoryLimitsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetDirectoryLimitsCommand = deserializeAws_json1_1GetDirectoryLimitsCommand;
async function deserializeAws_json1_1GetDirectoryLimitsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice.v20150416#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice.v20150416#EntityDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice.v20150416#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetSnapshotLimitsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetSnapshotLimitsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetSnapshotLimitsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetSnapshotLimitsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetSnapshotLimitsCommand = deserializeAws_json1_1GetSnapshotLimitsCommand;
async function deserializeAws_json1_1GetSnapshotLimitsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice.v20150416#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice.v20150416#EntityDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice.v20150416#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListCertificatesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListCertificatesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListCertificatesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListCertificatesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListCertificatesCommand = deserializeAws_json1_1ListCertificatesCommand;
async function deserializeAws_json1_1ListCertificatesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice.v20150416#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectoryDoesNotExistException":
        case "com.amazonaws.directoryservice.v20150416#DirectoryDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectoryDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.directoryservice.v20150416#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice.v20150416#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice.v20150416#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.directoryservice.v20150416#UnsupportedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListIpRoutesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListIpRoutesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListIpRoutesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListIpRoutesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListIpRoutesCommand = deserializeAws_json1_1ListIpRoutesCommand;
async function deserializeAws_json1_1ListIpRoutesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice.v20150416#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice.v20150416#EntityDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.directoryservice.v20150416#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice.v20150416#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice.v20150416#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListLogSubscriptionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListLogSubscriptionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListLogSubscriptionsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListLogSubscriptionsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListLogSubscriptionsCommand = deserializeAws_json1_1ListLogSubscriptionsCommand;
async function deserializeAws_json1_1ListLogSubscriptionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice.v20150416#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice.v20150416#EntityDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.directoryservice.v20150416#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice.v20150416#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListSchemaExtensionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListSchemaExtensionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListSchemaExtensionsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListSchemaExtensionsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListSchemaExtensionsCommand = deserializeAws_json1_1ListSchemaExtensionsCommand;
async function deserializeAws_json1_1ListSchemaExtensionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice.v20150416#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice.v20150416#EntityDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.directoryservice.v20150416#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice.v20150416#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
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
    contents = deserializeAws_json1_1ListTagsForResourceResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListTagsForResourceResult" }, contents);
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
        case "ClientException":
        case "com.amazonaws.directoryservice.v20150416#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice.v20150416#EntityDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.directoryservice.v20150416#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice.v20150416#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice.v20150416#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1RegisterCertificateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RegisterCertificateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RegisterCertificateResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RegisterCertificateResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RegisterCertificateCommand = deserializeAws_json1_1RegisterCertificateCommand;
async function deserializeAws_json1_1RegisterCertificateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CertificateAlreadyExistsException":
        case "com.amazonaws.directoryservice.v20150416#CertificateAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CertificateAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CertificateLimitExceededException":
        case "com.amazonaws.directoryservice.v20150416#CertificateLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CertificateLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClientException":
        case "com.amazonaws.directoryservice.v20150416#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectoryDoesNotExistException":
        case "com.amazonaws.directoryservice.v20150416#DirectoryDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectoryDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectoryUnavailableException":
        case "com.amazonaws.directoryservice.v20150416#DirectoryUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCertificateException":
        case "com.amazonaws.directoryservice.v20150416#InvalidCertificateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidCertificateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice.v20150416#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice.v20150416#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.directoryservice.v20150416#UnsupportedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1RegisterEventTopicCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RegisterEventTopicCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RegisterEventTopicResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RegisterEventTopicResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RegisterEventTopicCommand = deserializeAws_json1_1RegisterEventTopicCommand;
async function deserializeAws_json1_1RegisterEventTopicCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice.v20150416#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice.v20150416#EntityDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice.v20150416#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice.v20150416#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1RejectSharedDirectoryCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RejectSharedDirectoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RejectSharedDirectoryResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RejectSharedDirectoryResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RejectSharedDirectoryCommand = deserializeAws_json1_1RejectSharedDirectoryCommand;
async function deserializeAws_json1_1RejectSharedDirectoryCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice.v20150416#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectoryAlreadySharedException":
        case "com.amazonaws.directoryservice.v20150416#DirectoryAlreadySharedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectoryAlreadySharedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice.v20150416#EntityDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice.v20150416#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice.v20150416#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1RemoveIpRoutesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RemoveIpRoutesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RemoveIpRoutesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RemoveIpRoutesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RemoveIpRoutesCommand = deserializeAws_json1_1RemoveIpRoutesCommand;
async function deserializeAws_json1_1RemoveIpRoutesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice.v20150416#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectoryUnavailableException":
        case "com.amazonaws.directoryservice.v20150416#DirectoryUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice.v20150416#EntityDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice.v20150416#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice.v20150416#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
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
    contents = deserializeAws_json1_1RemoveTagsFromResourceResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RemoveTagsFromResourceResult" }, contents);
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
        case "ClientException":
        case "com.amazonaws.directoryservice.v20150416#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice.v20150416#EntityDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice.v20150416#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice.v20150416#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ResetUserPasswordCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ResetUserPasswordCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ResetUserPasswordResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ResetUserPasswordResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ResetUserPasswordCommand = deserializeAws_json1_1ResetUserPasswordCommand;
async function deserializeAws_json1_1ResetUserPasswordCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice.v20150416#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectoryUnavailableException":
        case "com.amazonaws.directoryservice.v20150416#DirectoryUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice.v20150416#EntityDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPasswordException":
        case "com.amazonaws.directoryservice.v20150416#InvalidPasswordException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPasswordExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice.v20150416#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.directoryservice.v20150416#UnsupportedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserDoesNotExistException":
        case "com.amazonaws.directoryservice.v20150416#UserDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1RestoreFromSnapshotCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RestoreFromSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RestoreFromSnapshotResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RestoreFromSnapshotResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RestoreFromSnapshotCommand = deserializeAws_json1_1RestoreFromSnapshotCommand;
async function deserializeAws_json1_1RestoreFromSnapshotCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice.v20150416#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice.v20150416#EntityDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice.v20150416#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice.v20150416#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ShareDirectoryCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ShareDirectoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ShareDirectoryResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ShareDirectoryResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ShareDirectoryCommand = deserializeAws_json1_1ShareDirectoryCommand;
async function deserializeAws_json1_1ShareDirectoryCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.directoryservice.v20150416#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClientException":
        case "com.amazonaws.directoryservice.v20150416#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectoryAlreadySharedException":
        case "com.amazonaws.directoryservice.v20150416#DirectoryAlreadySharedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectoryAlreadySharedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice.v20150416#EntityDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice.v20150416#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTargetException":
        case "com.amazonaws.directoryservice.v20150416#InvalidTargetException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTargetExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationsException":
        case "com.amazonaws.directoryservice.v20150416#OrganizationsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice.v20150416#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ShareLimitExceededException":
        case "com.amazonaws.directoryservice.v20150416#ShareLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ShareLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.directoryservice.v20150416#UnsupportedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1StartSchemaExtensionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartSchemaExtensionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartSchemaExtensionResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartSchemaExtensionResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartSchemaExtensionCommand = deserializeAws_json1_1StartSchemaExtensionCommand;
async function deserializeAws_json1_1StartSchemaExtensionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice.v20150416#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectoryUnavailableException":
        case "com.amazonaws.directoryservice.v20150416#DirectoryUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice.v20150416#EntityDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice.v20150416#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice.v20150416#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SnapshotLimitExceededException":
        case "com.amazonaws.directoryservice.v20150416#SnapshotLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1SnapshotLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UnshareDirectoryCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UnshareDirectoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UnshareDirectoryResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UnshareDirectoryResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UnshareDirectoryCommand = deserializeAws_json1_1UnshareDirectoryCommand;
async function deserializeAws_json1_1UnshareDirectoryCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice.v20150416#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectoryNotSharedException":
        case "com.amazonaws.directoryservice.v20150416#DirectoryNotSharedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectoryNotSharedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice.v20150416#EntityDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTargetException":
        case "com.amazonaws.directoryservice.v20150416#InvalidTargetException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTargetExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice.v20150416#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateConditionalForwarderCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateConditionalForwarderCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateConditionalForwarderResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateConditionalForwarderResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateConditionalForwarderCommand = deserializeAws_json1_1UpdateConditionalForwarderCommand;
async function deserializeAws_json1_1UpdateConditionalForwarderCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice.v20150416#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectoryUnavailableException":
        case "com.amazonaws.directoryservice.v20150416#DirectoryUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice.v20150416#EntityDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice.v20150416#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice.v20150416#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.directoryservice.v20150416#UnsupportedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateNumberOfDomainControllersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateNumberOfDomainControllersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateNumberOfDomainControllersResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateNumberOfDomainControllersResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateNumberOfDomainControllersCommand = deserializeAws_json1_1UpdateNumberOfDomainControllersCommand;
async function deserializeAws_json1_1UpdateNumberOfDomainControllersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice.v20150416#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectoryUnavailableException":
        case "com.amazonaws.directoryservice.v20150416#DirectoryUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DomainControllerLimitExceededException":
        case "com.amazonaws.directoryservice.v20150416#DomainControllerLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DomainControllerLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice.v20150416#EntityDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice.v20150416#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice.v20150416#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.directoryservice.v20150416#UnsupportedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateRadiusCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateRadiusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateRadiusResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateRadiusResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateRadiusCommand = deserializeAws_json1_1UpdateRadiusCommand;
async function deserializeAws_json1_1UpdateRadiusCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice.v20150416#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice.v20150416#EntityDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice.v20150416#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice.v20150416#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateTrustCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateTrustCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateTrustResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateTrustResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateTrustCommand = deserializeAws_json1_1UpdateTrustCommand;
async function deserializeAws_json1_1UpdateTrustCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice.v20150416#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice.v20150416#EntityDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice.v20150416#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice.v20150416#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1VerifyTrustCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1VerifyTrustCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1VerifyTrustResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "VerifyTrustResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1VerifyTrustCommand = deserializeAws_json1_1VerifyTrustCommand;
async function deserializeAws_json1_1VerifyTrustCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice.v20150416#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice.v20150416#EntityDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice.v20150416#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice.v20150416#ServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.directoryservice.v20150416#UnsupportedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
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
const deserializeAws_json1_1AuthenticationFailedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AuthenticationFailedException(body, context);
    const contents = Object.assign({ name: "AuthenticationFailedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1CertificateAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CertificateAlreadyExistsException(body, context);
    const contents = Object.assign({ name: "CertificateAlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1CertificateDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CertificateDoesNotExistException(body, context);
    const contents = Object.assign({ name: "CertificateDoesNotExistException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1CertificateInUseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CertificateInUseException(body, context);
    const contents = Object.assign({ name: "CertificateInUseException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1CertificateLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CertificateLimitExceededException(body, context);
    const contents = Object.assign({ name: "CertificateLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ClientExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ClientException(body, context);
    const contents = Object.assign({ name: "ClientException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DirectoryAlreadySharedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DirectoryAlreadySharedException(body, context);
    const contents = Object.assign({ name: "DirectoryAlreadySharedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DirectoryDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DirectoryDoesNotExistException(body, context);
    const contents = Object.assign({ name: "DirectoryDoesNotExistException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DirectoryLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DirectoryLimitExceededException(body, context);
    const contents = Object.assign({ name: "DirectoryLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DirectoryNotSharedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DirectoryNotSharedException(body, context);
    const contents = Object.assign({ name: "DirectoryNotSharedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DirectoryUnavailableExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DirectoryUnavailableException(body, context);
    const contents = Object.assign({ name: "DirectoryUnavailableException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DomainControllerLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DomainControllerLimitExceededException(body, context);
    const contents = Object.assign({ name: "DomainControllerLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1EntityAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1EntityAlreadyExistsException(body, context);
    const contents = Object.assign({ name: "EntityAlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1EntityDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1EntityDoesNotExistException(body, context);
    const contents = Object.assign({ name: "EntityDoesNotExistException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InsufficientPermissionsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InsufficientPermissionsException(body, context);
    const contents = Object.assign({ name: "InsufficientPermissionsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidCertificateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidCertificateException(body, context);
    const contents = Object.assign({ name: "InvalidCertificateException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidLDAPSStatusExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidLDAPSStatusException(body, context);
    const contents = Object.assign({ name: "InvalidLDAPSStatusException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidNextTokenException(body, context);
    const contents = Object.assign({ name: "InvalidNextTokenException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidParameterExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidParameterException(body, context);
    const contents = Object.assign({ name: "InvalidParameterException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidPasswordExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidPasswordException(body, context);
    const contents = Object.assign({ name: "InvalidPasswordException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidTargetExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidTargetException(body, context);
    const contents = Object.assign({ name: "InvalidTargetException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1IpRouteLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1IpRouteLimitExceededException(body, context);
    const contents = Object.assign({ name: "IpRouteLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1NoAvailableCertificateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NoAvailableCertificateException(body, context);
    const contents = Object.assign({ name: "NoAvailableCertificateException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1OrganizationsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OrganizationsException(body, context);
    const contents = Object.assign({ name: "OrganizationsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ServiceExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ServiceException(body, context);
    const contents = Object.assign({ name: "ServiceException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ShareLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ShareLimitExceededException(body, context);
    const contents = Object.assign({ name: "ShareLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1SnapshotLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1SnapshotLimitExceededException(body, context);
    const contents = Object.assign({ name: "SnapshotLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TagLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TagLimitExceededException(body, context);
    const contents = Object.assign({ name: "TagLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1UnsupportedOperationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnsupportedOperationException(body, context);
    const contents = Object.assign({ name: "UnsupportedOperationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1UserDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UserDoesNotExistException(body, context);
    const contents = Object.assign({ name: "UserDoesNotExistException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1AcceptSharedDirectoryRequest = (input, context) => {
    const bodyParams = {};
    if (input.SharedDirectoryId !== undefined) {
        bodyParams["SharedDirectoryId"] = input.SharedDirectoryId;
    }
    return bodyParams;
};
const serializeAws_json1_1AddIpRoutesRequest = (input, context) => {
    const bodyParams = {};
    if (input.DirectoryId !== undefined) {
        bodyParams["DirectoryId"] = input.DirectoryId;
    }
    if (input.IpRoutes !== undefined) {
        bodyParams["IpRoutes"] = serializeAws_json1_1IpRoutes(input.IpRoutes, context);
    }
    if (input.UpdateSecurityGroupForDirectoryControllers !== undefined) {
        bodyParams["UpdateSecurityGroupForDirectoryControllers"] =
            input.UpdateSecurityGroupForDirectoryControllers;
    }
    return bodyParams;
};
const serializeAws_json1_1AddTagsToResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceId !== undefined) {
        bodyParams["ResourceId"] = input.ResourceId;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1Tags(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1Attribute = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Value !== undefined) {
        bodyParams["Value"] = input.Value;
    }
    return bodyParams;
};
const serializeAws_json1_1Attributes = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Attribute(entry, context));
    }
    return contents;
};
const serializeAws_json1_1CancelSchemaExtensionRequest = (input, context) => {
    const bodyParams = {};
    if (input.DirectoryId !== undefined) {
        bodyParams["DirectoryId"] = input.DirectoryId;
    }
    if (input.SchemaExtensionId !== undefined) {
        bodyParams["SchemaExtensionId"] = input.SchemaExtensionId;
    }
    return bodyParams;
};
const serializeAws_json1_1CidrIps = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ConnectDirectoryRequest = (input, context) => {
    const bodyParams = {};
    if (input.ConnectSettings !== undefined) {
        bodyParams["ConnectSettings"] = serializeAws_json1_1DirectoryConnectSettings(input.ConnectSettings, context);
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Password !== undefined) {
        bodyParams["Password"] = input.Password;
    }
    if (input.ShortName !== undefined) {
        bodyParams["ShortName"] = input.ShortName;
    }
    if (input.Size !== undefined) {
        bodyParams["Size"] = input.Size;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1Tags(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateAliasRequest = (input, context) => {
    const bodyParams = {};
    if (input.Alias !== undefined) {
        bodyParams["Alias"] = input.Alias;
    }
    if (input.DirectoryId !== undefined) {
        bodyParams["DirectoryId"] = input.DirectoryId;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateComputerRequest = (input, context) => {
    const bodyParams = {};
    if (input.ComputerAttributes !== undefined) {
        bodyParams["ComputerAttributes"] = serializeAws_json1_1Attributes(input.ComputerAttributes, context);
    }
    if (input.ComputerName !== undefined) {
        bodyParams["ComputerName"] = input.ComputerName;
    }
    if (input.DirectoryId !== undefined) {
        bodyParams["DirectoryId"] = input.DirectoryId;
    }
    if (input.OrganizationalUnitDistinguishedName !== undefined) {
        bodyParams["OrganizationalUnitDistinguishedName"] =
            input.OrganizationalUnitDistinguishedName;
    }
    if (input.Password !== undefined) {
        bodyParams["Password"] = input.Password;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateConditionalForwarderRequest = (input, context) => {
    const bodyParams = {};
    if (input.DirectoryId !== undefined) {
        bodyParams["DirectoryId"] = input.DirectoryId;
    }
    if (input.DnsIpAddrs !== undefined) {
        bodyParams["DnsIpAddrs"] = serializeAws_json1_1DnsIpAddrs(input.DnsIpAddrs, context);
    }
    if (input.RemoteDomainName !== undefined) {
        bodyParams["RemoteDomainName"] = input.RemoteDomainName;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateDirectoryRequest = (input, context) => {
    const bodyParams = {};
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Password !== undefined) {
        bodyParams["Password"] = input.Password;
    }
    if (input.ShortName !== undefined) {
        bodyParams["ShortName"] = input.ShortName;
    }
    if (input.Size !== undefined) {
        bodyParams["Size"] = input.Size;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1Tags(input.Tags, context);
    }
    if (input.VpcSettings !== undefined) {
        bodyParams["VpcSettings"] = serializeAws_json1_1DirectoryVpcSettings(input.VpcSettings, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateLogSubscriptionRequest = (input, context) => {
    const bodyParams = {};
    if (input.DirectoryId !== undefined) {
        bodyParams["DirectoryId"] = input.DirectoryId;
    }
    if (input.LogGroupName !== undefined) {
        bodyParams["LogGroupName"] = input.LogGroupName;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateMicrosoftADRequest = (input, context) => {
    const bodyParams = {};
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.Edition !== undefined) {
        bodyParams["Edition"] = input.Edition;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Password !== undefined) {
        bodyParams["Password"] = input.Password;
    }
    if (input.ShortName !== undefined) {
        bodyParams["ShortName"] = input.ShortName;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1Tags(input.Tags, context);
    }
    if (input.VpcSettings !== undefined) {
        bodyParams["VpcSettings"] = serializeAws_json1_1DirectoryVpcSettings(input.VpcSettings, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateSnapshotRequest = (input, context) => {
    const bodyParams = {};
    if (input.DirectoryId !== undefined) {
        bodyParams["DirectoryId"] = input.DirectoryId;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateTrustRequest = (input, context) => {
    const bodyParams = {};
    if (input.ConditionalForwarderIpAddrs !== undefined) {
        bodyParams["ConditionalForwarderIpAddrs"] = serializeAws_json1_1DnsIpAddrs(input.ConditionalForwarderIpAddrs, context);
    }
    if (input.DirectoryId !== undefined) {
        bodyParams["DirectoryId"] = input.DirectoryId;
    }
    if (input.RemoteDomainName !== undefined) {
        bodyParams["RemoteDomainName"] = input.RemoteDomainName;
    }
    if (input.SelectiveAuth !== undefined) {
        bodyParams["SelectiveAuth"] = input.SelectiveAuth;
    }
    if (input.TrustDirection !== undefined) {
        bodyParams["TrustDirection"] = input.TrustDirection;
    }
    if (input.TrustPassword !== undefined) {
        bodyParams["TrustPassword"] = input.TrustPassword;
    }
    if (input.TrustType !== undefined) {
        bodyParams["TrustType"] = input.TrustType;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteConditionalForwarderRequest = (input, context) => {
    const bodyParams = {};
    if (input.DirectoryId !== undefined) {
        bodyParams["DirectoryId"] = input.DirectoryId;
    }
    if (input.RemoteDomainName !== undefined) {
        bodyParams["RemoteDomainName"] = input.RemoteDomainName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteDirectoryRequest = (input, context) => {
    const bodyParams = {};
    if (input.DirectoryId !== undefined) {
        bodyParams["DirectoryId"] = input.DirectoryId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteLogSubscriptionRequest = (input, context) => {
    const bodyParams = {};
    if (input.DirectoryId !== undefined) {
        bodyParams["DirectoryId"] = input.DirectoryId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteSnapshotRequest = (input, context) => {
    const bodyParams = {};
    if (input.SnapshotId !== undefined) {
        bodyParams["SnapshotId"] = input.SnapshotId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteTrustRequest = (input, context) => {
    const bodyParams = {};
    if (input.DeleteAssociatedConditionalForwarder !== undefined) {
        bodyParams["DeleteAssociatedConditionalForwarder"] =
            input.DeleteAssociatedConditionalForwarder;
    }
    if (input.TrustId !== undefined) {
        bodyParams["TrustId"] = input.TrustId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeregisterCertificateRequest = (input, context) => {
    const bodyParams = {};
    if (input.CertificateId !== undefined) {
        bodyParams["CertificateId"] = input.CertificateId;
    }
    if (input.DirectoryId !== undefined) {
        bodyParams["DirectoryId"] = input.DirectoryId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeregisterEventTopicRequest = (input, context) => {
    const bodyParams = {};
    if (input.DirectoryId !== undefined) {
        bodyParams["DirectoryId"] = input.DirectoryId;
    }
    if (input.TopicName !== undefined) {
        bodyParams["TopicName"] = input.TopicName;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeCertificateRequest = (input, context) => {
    const bodyParams = {};
    if (input.CertificateId !== undefined) {
        bodyParams["CertificateId"] = input.CertificateId;
    }
    if (input.DirectoryId !== undefined) {
        bodyParams["DirectoryId"] = input.DirectoryId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeConditionalForwardersRequest = (input, context) => {
    const bodyParams = {};
    if (input.DirectoryId !== undefined) {
        bodyParams["DirectoryId"] = input.DirectoryId;
    }
    if (input.RemoteDomainNames !== undefined) {
        bodyParams["RemoteDomainNames"] = serializeAws_json1_1RemoteDomainNames(input.RemoteDomainNames, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeDirectoriesRequest = (input, context) => {
    const bodyParams = {};
    if (input.DirectoryIds !== undefined) {
        bodyParams["DirectoryIds"] = serializeAws_json1_1DirectoryIds(input.DirectoryIds, context);
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeDomainControllersRequest = (input, context) => {
    const bodyParams = {};
    if (input.DirectoryId !== undefined) {
        bodyParams["DirectoryId"] = input.DirectoryId;
    }
    if (input.DomainControllerIds !== undefined) {
        bodyParams["DomainControllerIds"] = serializeAws_json1_1DomainControllerIds(input.DomainControllerIds, context);
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeEventTopicsRequest = (input, context) => {
    const bodyParams = {};
    if (input.DirectoryId !== undefined) {
        bodyParams["DirectoryId"] = input.DirectoryId;
    }
    if (input.TopicNames !== undefined) {
        bodyParams["TopicNames"] = serializeAws_json1_1TopicNames(input.TopicNames, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeLDAPSSettingsRequest = (input, context) => {
    const bodyParams = {};
    if (input.DirectoryId !== undefined) {
        bodyParams["DirectoryId"] = input.DirectoryId;
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeSharedDirectoriesRequest = (input, context) => {
    const bodyParams = {};
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.OwnerDirectoryId !== undefined) {
        bodyParams["OwnerDirectoryId"] = input.OwnerDirectoryId;
    }
    if (input.SharedDirectoryIds !== undefined) {
        bodyParams["SharedDirectoryIds"] = serializeAws_json1_1DirectoryIds(input.SharedDirectoryIds, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeSnapshotsRequest = (input, context) => {
    const bodyParams = {};
    if (input.DirectoryId !== undefined) {
        bodyParams["DirectoryId"] = input.DirectoryId;
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.SnapshotIds !== undefined) {
        bodyParams["SnapshotIds"] = serializeAws_json1_1SnapshotIds(input.SnapshotIds, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeTrustsRequest = (input, context) => {
    const bodyParams = {};
    if (input.DirectoryId !== undefined) {
        bodyParams["DirectoryId"] = input.DirectoryId;
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.TrustIds !== undefined) {
        bodyParams["TrustIds"] = serializeAws_json1_1TrustIds(input.TrustIds, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DirectoryConnectSettings = (input, context) => {
    const bodyParams = {};
    if (input.CustomerDnsIps !== undefined) {
        bodyParams["CustomerDnsIps"] = serializeAws_json1_1DnsIpAddrs(input.CustomerDnsIps, context);
    }
    if (input.CustomerUserName !== undefined) {
        bodyParams["CustomerUserName"] = input.CustomerUserName;
    }
    if (input.SubnetIds !== undefined) {
        bodyParams["SubnetIds"] = serializeAws_json1_1SubnetIds(input.SubnetIds, context);
    }
    if (input.VpcId !== undefined) {
        bodyParams["VpcId"] = input.VpcId;
    }
    return bodyParams;
};
const serializeAws_json1_1DirectoryIds = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1DirectoryVpcSettings = (input, context) => {
    const bodyParams = {};
    if (input.SubnetIds !== undefined) {
        bodyParams["SubnetIds"] = serializeAws_json1_1SubnetIds(input.SubnetIds, context);
    }
    if (input.VpcId !== undefined) {
        bodyParams["VpcId"] = input.VpcId;
    }
    return bodyParams;
};
const serializeAws_json1_1DisableLDAPSRequest = (input, context) => {
    const bodyParams = {};
    if (input.DirectoryId !== undefined) {
        bodyParams["DirectoryId"] = input.DirectoryId;
    }
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
    }
    return bodyParams;
};
const serializeAws_json1_1DisableRadiusRequest = (input, context) => {
    const bodyParams = {};
    if (input.DirectoryId !== undefined) {
        bodyParams["DirectoryId"] = input.DirectoryId;
    }
    return bodyParams;
};
const serializeAws_json1_1DisableSsoRequest = (input, context) => {
    const bodyParams = {};
    if (input.DirectoryId !== undefined) {
        bodyParams["DirectoryId"] = input.DirectoryId;
    }
    if (input.Password !== undefined) {
        bodyParams["Password"] = input.Password;
    }
    if (input.UserName !== undefined) {
        bodyParams["UserName"] = input.UserName;
    }
    return bodyParams;
};
const serializeAws_json1_1DnsIpAddrs = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1DomainControllerIds = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1EnableLDAPSRequest = (input, context) => {
    const bodyParams = {};
    if (input.DirectoryId !== undefined) {
        bodyParams["DirectoryId"] = input.DirectoryId;
    }
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
    }
    return bodyParams;
};
const serializeAws_json1_1EnableRadiusRequest = (input, context) => {
    const bodyParams = {};
    if (input.DirectoryId !== undefined) {
        bodyParams["DirectoryId"] = input.DirectoryId;
    }
    if (input.RadiusSettings !== undefined) {
        bodyParams["RadiusSettings"] = serializeAws_json1_1RadiusSettings(input.RadiusSettings, context);
    }
    return bodyParams;
};
const serializeAws_json1_1EnableSsoRequest = (input, context) => {
    const bodyParams = {};
    if (input.DirectoryId !== undefined) {
        bodyParams["DirectoryId"] = input.DirectoryId;
    }
    if (input.Password !== undefined) {
        bodyParams["Password"] = input.Password;
    }
    if (input.UserName !== undefined) {
        bodyParams["UserName"] = input.UserName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetDirectoryLimitsRequest = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_1GetSnapshotLimitsRequest = (input, context) => {
    const bodyParams = {};
    if (input.DirectoryId !== undefined) {
        bodyParams["DirectoryId"] = input.DirectoryId;
    }
    return bodyParams;
};
const serializeAws_json1_1IpRoute = (input, context) => {
    const bodyParams = {};
    if (input.CidrIp !== undefined) {
        bodyParams["CidrIp"] = input.CidrIp;
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    return bodyParams;
};
const serializeAws_json1_1IpRoutes = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1IpRoute(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ListCertificatesRequest = (input, context) => {
    const bodyParams = {};
    if (input.DirectoryId !== undefined) {
        bodyParams["DirectoryId"] = input.DirectoryId;
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListIpRoutesRequest = (input, context) => {
    const bodyParams = {};
    if (input.DirectoryId !== undefined) {
        bodyParams["DirectoryId"] = input.DirectoryId;
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListLogSubscriptionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.DirectoryId !== undefined) {
        bodyParams["DirectoryId"] = input.DirectoryId;
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListSchemaExtensionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.DirectoryId !== undefined) {
        bodyParams["DirectoryId"] = input.DirectoryId;
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListTagsForResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.ResourceId !== undefined) {
        bodyParams["ResourceId"] = input.ResourceId;
    }
    return bodyParams;
};
const serializeAws_json1_1RadiusSettings = (input, context) => {
    const bodyParams = {};
    if (input.AuthenticationProtocol !== undefined) {
        bodyParams["AuthenticationProtocol"] = input.AuthenticationProtocol;
    }
    if (input.DisplayLabel !== undefined) {
        bodyParams["DisplayLabel"] = input.DisplayLabel;
    }
    if (input.RadiusPort !== undefined) {
        bodyParams["RadiusPort"] = input.RadiusPort;
    }
    if (input.RadiusRetries !== undefined) {
        bodyParams["RadiusRetries"] = input.RadiusRetries;
    }
    if (input.RadiusServers !== undefined) {
        bodyParams["RadiusServers"] = serializeAws_json1_1Servers(input.RadiusServers, context);
    }
    if (input.RadiusTimeout !== undefined) {
        bodyParams["RadiusTimeout"] = input.RadiusTimeout;
    }
    if (input.SharedSecret !== undefined) {
        bodyParams["SharedSecret"] = input.SharedSecret;
    }
    if (input.UseSameUsername !== undefined) {
        bodyParams["UseSameUsername"] = input.UseSameUsername;
    }
    return bodyParams;
};
const serializeAws_json1_1RegisterCertificateRequest = (input, context) => {
    const bodyParams = {};
    if (input.CertificateData !== undefined) {
        bodyParams["CertificateData"] = input.CertificateData;
    }
    if (input.DirectoryId !== undefined) {
        bodyParams["DirectoryId"] = input.DirectoryId;
    }
    return bodyParams;
};
const serializeAws_json1_1RegisterEventTopicRequest = (input, context) => {
    const bodyParams = {};
    if (input.DirectoryId !== undefined) {
        bodyParams["DirectoryId"] = input.DirectoryId;
    }
    if (input.TopicName !== undefined) {
        bodyParams["TopicName"] = input.TopicName;
    }
    return bodyParams;
};
const serializeAws_json1_1RejectSharedDirectoryRequest = (input, context) => {
    const bodyParams = {};
    if (input.SharedDirectoryId !== undefined) {
        bodyParams["SharedDirectoryId"] = input.SharedDirectoryId;
    }
    return bodyParams;
};
const serializeAws_json1_1RemoteDomainNames = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1RemoveIpRoutesRequest = (input, context) => {
    const bodyParams = {};
    if (input.CidrIps !== undefined) {
        bodyParams["CidrIps"] = serializeAws_json1_1CidrIps(input.CidrIps, context);
    }
    if (input.DirectoryId !== undefined) {
        bodyParams["DirectoryId"] = input.DirectoryId;
    }
    return bodyParams;
};
const serializeAws_json1_1RemoveTagsFromResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceId !== undefined) {
        bodyParams["ResourceId"] = input.ResourceId;
    }
    if (input.TagKeys !== undefined) {
        bodyParams["TagKeys"] = serializeAws_json1_1TagKeys(input.TagKeys, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ResetUserPasswordRequest = (input, context) => {
    const bodyParams = {};
    if (input.DirectoryId !== undefined) {
        bodyParams["DirectoryId"] = input.DirectoryId;
    }
    if (input.NewPassword !== undefined) {
        bodyParams["NewPassword"] = input.NewPassword;
    }
    if (input.UserName !== undefined) {
        bodyParams["UserName"] = input.UserName;
    }
    return bodyParams;
};
const serializeAws_json1_1RestoreFromSnapshotRequest = (input, context) => {
    const bodyParams = {};
    if (input.SnapshotId !== undefined) {
        bodyParams["SnapshotId"] = input.SnapshotId;
    }
    return bodyParams;
};
const serializeAws_json1_1Servers = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ShareDirectoryRequest = (input, context) => {
    const bodyParams = {};
    if (input.DirectoryId !== undefined) {
        bodyParams["DirectoryId"] = input.DirectoryId;
    }
    if (input.ShareMethod !== undefined) {
        bodyParams["ShareMethod"] = input.ShareMethod;
    }
    if (input.ShareNotes !== undefined) {
        bodyParams["ShareNotes"] = input.ShareNotes;
    }
    if (input.ShareTarget !== undefined) {
        bodyParams["ShareTarget"] = serializeAws_json1_1ShareTarget(input.ShareTarget, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ShareTarget = (input, context) => {
    const bodyParams = {};
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
    }
    return bodyParams;
};
const serializeAws_json1_1SnapshotIds = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1StartSchemaExtensionRequest = (input, context) => {
    const bodyParams = {};
    if (input.CreateSnapshotBeforeSchemaExtension !== undefined) {
        bodyParams["CreateSnapshotBeforeSchemaExtension"] =
            input.CreateSnapshotBeforeSchemaExtension;
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.DirectoryId !== undefined) {
        bodyParams["DirectoryId"] = input.DirectoryId;
    }
    if (input.LdifContent !== undefined) {
        bodyParams["LdifContent"] = input.LdifContent;
    }
    return bodyParams;
};
const serializeAws_json1_1SubnetIds = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
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
const serializeAws_json1_1TopicNames = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1TrustIds = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1UnshareDirectoryRequest = (input, context) => {
    const bodyParams = {};
    if (input.DirectoryId !== undefined) {
        bodyParams["DirectoryId"] = input.DirectoryId;
    }
    if (input.UnshareTarget !== undefined) {
        bodyParams["UnshareTarget"] = serializeAws_json1_1UnshareTarget(input.UnshareTarget, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UnshareTarget = (input, context) => {
    const bodyParams = {};
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateConditionalForwarderRequest = (input, context) => {
    const bodyParams = {};
    if (input.DirectoryId !== undefined) {
        bodyParams["DirectoryId"] = input.DirectoryId;
    }
    if (input.DnsIpAddrs !== undefined) {
        bodyParams["DnsIpAddrs"] = serializeAws_json1_1DnsIpAddrs(input.DnsIpAddrs, context);
    }
    if (input.RemoteDomainName !== undefined) {
        bodyParams["RemoteDomainName"] = input.RemoteDomainName;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateNumberOfDomainControllersRequest = (input, context) => {
    const bodyParams = {};
    if (input.DesiredNumber !== undefined) {
        bodyParams["DesiredNumber"] = input.DesiredNumber;
    }
    if (input.DirectoryId !== undefined) {
        bodyParams["DirectoryId"] = input.DirectoryId;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateRadiusRequest = (input, context) => {
    const bodyParams = {};
    if (input.DirectoryId !== undefined) {
        bodyParams["DirectoryId"] = input.DirectoryId;
    }
    if (input.RadiusSettings !== undefined) {
        bodyParams["RadiusSettings"] = serializeAws_json1_1RadiusSettings(input.RadiusSettings, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateTrustRequest = (input, context) => {
    const bodyParams = {};
    if (input.SelectiveAuth !== undefined) {
        bodyParams["SelectiveAuth"] = input.SelectiveAuth;
    }
    if (input.TrustId !== undefined) {
        bodyParams["TrustId"] = input.TrustId;
    }
    return bodyParams;
};
const serializeAws_json1_1VerifyTrustRequest = (input, context) => {
    const bodyParams = {};
    if (input.TrustId !== undefined) {
        bodyParams["TrustId"] = input.TrustId;
    }
    return bodyParams;
};
const deserializeAws_json1_1AcceptSharedDirectoryResult = (output, context) => {
    let contents = {
        __type: "AcceptSharedDirectoryResult",
        SharedDirectory: undefined
    };
    if (output.SharedDirectory !== undefined && output.SharedDirectory !== null) {
        contents.SharedDirectory = deserializeAws_json1_1SharedDirectory(output.SharedDirectory, context);
    }
    return contents;
};
const deserializeAws_json1_1AccessDeniedException = (output, context) => {
    let contents = {
        __type: "AccessDeniedException",
        Message: undefined,
        RequestId: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.RequestId !== undefined && output.RequestId !== null) {
        contents.RequestId = output.RequestId;
    }
    return contents;
};
const deserializeAws_json1_1AddIpRoutesResult = (output, context) => {
    let contents = {
        __type: "AddIpRoutesResult"
    };
    return contents;
};
const deserializeAws_json1_1AddTagsToResourceResult = (output, context) => {
    let contents = {
        __type: "AddTagsToResourceResult"
    };
    return contents;
};
const deserializeAws_json1_1Attribute = (output, context) => {
    let contents = {
        __type: "Attribute",
        Name: undefined,
        Value: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Value !== undefined && output.Value !== null) {
        contents.Value = output.Value;
    }
    return contents;
};
const deserializeAws_json1_1Attributes = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Attribute(entry, context));
};
const deserializeAws_json1_1AuthenticationFailedException = (output, context) => {
    let contents = {
        __type: "AuthenticationFailedException",
        Message: undefined,
        RequestId: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.RequestId !== undefined && output.RequestId !== null) {
        contents.RequestId = output.RequestId;
    }
    return contents;
};
const deserializeAws_json1_1AvailabilityZones = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1CancelSchemaExtensionResult = (output, context) => {
    let contents = {
        __type: "CancelSchemaExtensionResult"
    };
    return contents;
};
const deserializeAws_json1_1Certificate = (output, context) => {
    let contents = {
        __type: "Certificate",
        CertificateId: undefined,
        CommonName: undefined,
        ExpiryDateTime: undefined,
        RegisteredDateTime: undefined,
        State: undefined,
        StateReason: undefined
    };
    if (output.CertificateId !== undefined && output.CertificateId !== null) {
        contents.CertificateId = output.CertificateId;
    }
    if (output.CommonName !== undefined && output.CommonName !== null) {
        contents.CommonName = output.CommonName;
    }
    if (output.ExpiryDateTime !== undefined && output.ExpiryDateTime !== null) {
        contents.ExpiryDateTime = new Date(Math.round(output.ExpiryDateTime * 1000));
    }
    if (output.RegisteredDateTime !== undefined &&
        output.RegisteredDateTime !== null) {
        contents.RegisteredDateTime = new Date(Math.round(output.RegisteredDateTime * 1000));
    }
    if (output.State !== undefined && output.State !== null) {
        contents.State = output.State;
    }
    if (output.StateReason !== undefined && output.StateReason !== null) {
        contents.StateReason = output.StateReason;
    }
    return contents;
};
const deserializeAws_json1_1CertificateAlreadyExistsException = (output, context) => {
    let contents = {
        __type: "CertificateAlreadyExistsException",
        Message: undefined,
        RequestId: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.RequestId !== undefined && output.RequestId !== null) {
        contents.RequestId = output.RequestId;
    }
    return contents;
};
const deserializeAws_json1_1CertificateDoesNotExistException = (output, context) => {
    let contents = {
        __type: "CertificateDoesNotExistException",
        Message: undefined,
        RequestId: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.RequestId !== undefined && output.RequestId !== null) {
        contents.RequestId = output.RequestId;
    }
    return contents;
};
const deserializeAws_json1_1CertificateInUseException = (output, context) => {
    let contents = {
        __type: "CertificateInUseException",
        Message: undefined,
        RequestId: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.RequestId !== undefined && output.RequestId !== null) {
        contents.RequestId = output.RequestId;
    }
    return contents;
};
const deserializeAws_json1_1CertificateInfo = (output, context) => {
    let contents = {
        __type: "CertificateInfo",
        CertificateId: undefined,
        CommonName: undefined,
        State: undefined
    };
    if (output.CertificateId !== undefined && output.CertificateId !== null) {
        contents.CertificateId = output.CertificateId;
    }
    if (output.CommonName !== undefined && output.CommonName !== null) {
        contents.CommonName = output.CommonName;
    }
    if (output.State !== undefined && output.State !== null) {
        contents.State = output.State;
    }
    return contents;
};
const deserializeAws_json1_1CertificateLimitExceededException = (output, context) => {
    let contents = {
        __type: "CertificateLimitExceededException",
        Message: undefined,
        RequestId: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.RequestId !== undefined && output.RequestId !== null) {
        contents.RequestId = output.RequestId;
    }
    return contents;
};
const deserializeAws_json1_1CertificatesInfo = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1CertificateInfo(entry, context));
};
const deserializeAws_json1_1ClientException = (output, context) => {
    let contents = {
        __type: "ClientException",
        Message: undefined,
        RequestId: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.RequestId !== undefined && output.RequestId !== null) {
        contents.RequestId = output.RequestId;
    }
    return contents;
};
const deserializeAws_json1_1Computer = (output, context) => {
    let contents = {
        __type: "Computer",
        ComputerAttributes: undefined,
        ComputerId: undefined,
        ComputerName: undefined
    };
    if (output.ComputerAttributes !== undefined &&
        output.ComputerAttributes !== null) {
        contents.ComputerAttributes = deserializeAws_json1_1Attributes(output.ComputerAttributes, context);
    }
    if (output.ComputerId !== undefined && output.ComputerId !== null) {
        contents.ComputerId = output.ComputerId;
    }
    if (output.ComputerName !== undefined && output.ComputerName !== null) {
        contents.ComputerName = output.ComputerName;
    }
    return contents;
};
const deserializeAws_json1_1ConditionalForwarder = (output, context) => {
    let contents = {
        __type: "ConditionalForwarder",
        DnsIpAddrs: undefined,
        RemoteDomainName: undefined,
        ReplicationScope: undefined
    };
    if (output.DnsIpAddrs !== undefined && output.DnsIpAddrs !== null) {
        contents.DnsIpAddrs = deserializeAws_json1_1DnsIpAddrs(output.DnsIpAddrs, context);
    }
    if (output.RemoteDomainName !== undefined &&
        output.RemoteDomainName !== null) {
        contents.RemoteDomainName = output.RemoteDomainName;
    }
    if (output.ReplicationScope !== undefined &&
        output.ReplicationScope !== null) {
        contents.ReplicationScope = output.ReplicationScope;
    }
    return contents;
};
const deserializeAws_json1_1ConditionalForwarders = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ConditionalForwarder(entry, context));
};
const deserializeAws_json1_1ConnectDirectoryResult = (output, context) => {
    let contents = {
        __type: "ConnectDirectoryResult",
        DirectoryId: undefined
    };
    if (output.DirectoryId !== undefined && output.DirectoryId !== null) {
        contents.DirectoryId = output.DirectoryId;
    }
    return contents;
};
const deserializeAws_json1_1CreateAliasResult = (output, context) => {
    let contents = {
        __type: "CreateAliasResult",
        Alias: undefined,
        DirectoryId: undefined
    };
    if (output.Alias !== undefined && output.Alias !== null) {
        contents.Alias = output.Alias;
    }
    if (output.DirectoryId !== undefined && output.DirectoryId !== null) {
        contents.DirectoryId = output.DirectoryId;
    }
    return contents;
};
const deserializeAws_json1_1CreateComputerResult = (output, context) => {
    let contents = {
        __type: "CreateComputerResult",
        Computer: undefined
    };
    if (output.Computer !== undefined && output.Computer !== null) {
        contents.Computer = deserializeAws_json1_1Computer(output.Computer, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateConditionalForwarderResult = (output, context) => {
    let contents = {
        __type: "CreateConditionalForwarderResult"
    };
    return contents;
};
const deserializeAws_json1_1CreateDirectoryResult = (output, context) => {
    let contents = {
        __type: "CreateDirectoryResult",
        DirectoryId: undefined
    };
    if (output.DirectoryId !== undefined && output.DirectoryId !== null) {
        contents.DirectoryId = output.DirectoryId;
    }
    return contents;
};
const deserializeAws_json1_1CreateLogSubscriptionResult = (output, context) => {
    let contents = {
        __type: "CreateLogSubscriptionResult"
    };
    return contents;
};
const deserializeAws_json1_1CreateMicrosoftADResult = (output, context) => {
    let contents = {
        __type: "CreateMicrosoftADResult",
        DirectoryId: undefined
    };
    if (output.DirectoryId !== undefined && output.DirectoryId !== null) {
        contents.DirectoryId = output.DirectoryId;
    }
    return contents;
};
const deserializeAws_json1_1CreateSnapshotResult = (output, context) => {
    let contents = {
        __type: "CreateSnapshotResult",
        SnapshotId: undefined
    };
    if (output.SnapshotId !== undefined && output.SnapshotId !== null) {
        contents.SnapshotId = output.SnapshotId;
    }
    return contents;
};
const deserializeAws_json1_1CreateTrustResult = (output, context) => {
    let contents = {
        __type: "CreateTrustResult",
        TrustId: undefined
    };
    if (output.TrustId !== undefined && output.TrustId !== null) {
        contents.TrustId = output.TrustId;
    }
    return contents;
};
const deserializeAws_json1_1DeleteConditionalForwarderResult = (output, context) => {
    let contents = {
        __type: "DeleteConditionalForwarderResult"
    };
    return contents;
};
const deserializeAws_json1_1DeleteDirectoryResult = (output, context) => {
    let contents = {
        __type: "DeleteDirectoryResult",
        DirectoryId: undefined
    };
    if (output.DirectoryId !== undefined && output.DirectoryId !== null) {
        contents.DirectoryId = output.DirectoryId;
    }
    return contents;
};
const deserializeAws_json1_1DeleteLogSubscriptionResult = (output, context) => {
    let contents = {
        __type: "DeleteLogSubscriptionResult"
    };
    return contents;
};
const deserializeAws_json1_1DeleteSnapshotResult = (output, context) => {
    let contents = {
        __type: "DeleteSnapshotResult",
        SnapshotId: undefined
    };
    if (output.SnapshotId !== undefined && output.SnapshotId !== null) {
        contents.SnapshotId = output.SnapshotId;
    }
    return contents;
};
const deserializeAws_json1_1DeleteTrustResult = (output, context) => {
    let contents = {
        __type: "DeleteTrustResult",
        TrustId: undefined
    };
    if (output.TrustId !== undefined && output.TrustId !== null) {
        contents.TrustId = output.TrustId;
    }
    return contents;
};
const deserializeAws_json1_1DeregisterCertificateResult = (output, context) => {
    let contents = {
        __type: "DeregisterCertificateResult"
    };
    return contents;
};
const deserializeAws_json1_1DeregisterEventTopicResult = (output, context) => {
    let contents = {
        __type: "DeregisterEventTopicResult"
    };
    return contents;
};
const deserializeAws_json1_1DescribeCertificateResult = (output, context) => {
    let contents = {
        __type: "DescribeCertificateResult",
        Certificate: undefined
    };
    if (output.Certificate !== undefined && output.Certificate !== null) {
        contents.Certificate = deserializeAws_json1_1Certificate(output.Certificate, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeConditionalForwardersResult = (output, context) => {
    let contents = {
        __type: "DescribeConditionalForwardersResult",
        ConditionalForwarders: undefined
    };
    if (output.ConditionalForwarders !== undefined &&
        output.ConditionalForwarders !== null) {
        contents.ConditionalForwarders = deserializeAws_json1_1ConditionalForwarders(output.ConditionalForwarders, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeDirectoriesResult = (output, context) => {
    let contents = {
        __type: "DescribeDirectoriesResult",
        DirectoryDescriptions: undefined,
        NextToken: undefined
    };
    if (output.DirectoryDescriptions !== undefined &&
        output.DirectoryDescriptions !== null) {
        contents.DirectoryDescriptions = deserializeAws_json1_1DirectoryDescriptions(output.DirectoryDescriptions, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeDomainControllersResult = (output, context) => {
    let contents = {
        __type: "DescribeDomainControllersResult",
        DomainControllers: undefined,
        NextToken: undefined
    };
    if (output.DomainControllers !== undefined &&
        output.DomainControllers !== null) {
        contents.DomainControllers = deserializeAws_json1_1DomainControllers(output.DomainControllers, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeEventTopicsResult = (output, context) => {
    let contents = {
        __type: "DescribeEventTopicsResult",
        EventTopics: undefined
    };
    if (output.EventTopics !== undefined && output.EventTopics !== null) {
        contents.EventTopics = deserializeAws_json1_1EventTopics(output.EventTopics, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeLDAPSSettingsResult = (output, context) => {
    let contents = {
        __type: "DescribeLDAPSSettingsResult",
        LDAPSSettingsInfo: undefined,
        NextToken: undefined
    };
    if (output.LDAPSSettingsInfo !== undefined &&
        output.LDAPSSettingsInfo !== null) {
        contents.LDAPSSettingsInfo = deserializeAws_json1_1LDAPSSettingsInfo(output.LDAPSSettingsInfo, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeSharedDirectoriesResult = (output, context) => {
    let contents = {
        __type: "DescribeSharedDirectoriesResult",
        NextToken: undefined,
        SharedDirectories: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.SharedDirectories !== undefined &&
        output.SharedDirectories !== null) {
        contents.SharedDirectories = deserializeAws_json1_1SharedDirectories(output.SharedDirectories, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeSnapshotsResult = (output, context) => {
    let contents = {
        __type: "DescribeSnapshotsResult",
        NextToken: undefined,
        Snapshots: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Snapshots !== undefined && output.Snapshots !== null) {
        contents.Snapshots = deserializeAws_json1_1Snapshots(output.Snapshots, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeTrustsResult = (output, context) => {
    let contents = {
        __type: "DescribeTrustsResult",
        NextToken: undefined,
        Trusts: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Trusts !== undefined && output.Trusts !== null) {
        contents.Trusts = deserializeAws_json1_1Trusts(output.Trusts, context);
    }
    return contents;
};
const deserializeAws_json1_1DirectoryAlreadySharedException = (output, context) => {
    let contents = {
        __type: "DirectoryAlreadySharedException",
        Message: undefined,
        RequestId: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.RequestId !== undefined && output.RequestId !== null) {
        contents.RequestId = output.RequestId;
    }
    return contents;
};
const deserializeAws_json1_1DirectoryConnectSettingsDescription = (output, context) => {
    let contents = {
        __type: "DirectoryConnectSettingsDescription",
        AvailabilityZones: undefined,
        ConnectIps: undefined,
        CustomerUserName: undefined,
        SecurityGroupId: undefined,
        SubnetIds: undefined,
        VpcId: undefined
    };
    if (output.AvailabilityZones !== undefined &&
        output.AvailabilityZones !== null) {
        contents.AvailabilityZones = deserializeAws_json1_1AvailabilityZones(output.AvailabilityZones, context);
    }
    if (output.ConnectIps !== undefined && output.ConnectIps !== null) {
        contents.ConnectIps = deserializeAws_json1_1IpAddrs(output.ConnectIps, context);
    }
    if (output.CustomerUserName !== undefined &&
        output.CustomerUserName !== null) {
        contents.CustomerUserName = output.CustomerUserName;
    }
    if (output.SecurityGroupId !== undefined && output.SecurityGroupId !== null) {
        contents.SecurityGroupId = output.SecurityGroupId;
    }
    if (output.SubnetIds !== undefined && output.SubnetIds !== null) {
        contents.SubnetIds = deserializeAws_json1_1SubnetIds(output.SubnetIds, context);
    }
    if (output.VpcId !== undefined && output.VpcId !== null) {
        contents.VpcId = output.VpcId;
    }
    return contents;
};
const deserializeAws_json1_1DirectoryDescription = (output, context) => {
    let contents = {
        __type: "DirectoryDescription",
        AccessUrl: undefined,
        Alias: undefined,
        ConnectSettings: undefined,
        Description: undefined,
        DesiredNumberOfDomainControllers: undefined,
        DirectoryId: undefined,
        DnsIpAddrs: undefined,
        Edition: undefined,
        LaunchTime: undefined,
        Name: undefined,
        OwnerDirectoryDescription: undefined,
        RadiusSettings: undefined,
        RadiusStatus: undefined,
        ShareMethod: undefined,
        ShareNotes: undefined,
        ShareStatus: undefined,
        ShortName: undefined,
        Size: undefined,
        SsoEnabled: undefined,
        Stage: undefined,
        StageLastUpdatedDateTime: undefined,
        StageReason: undefined,
        Type: undefined,
        VpcSettings: undefined
    };
    if (output.AccessUrl !== undefined && output.AccessUrl !== null) {
        contents.AccessUrl = output.AccessUrl;
    }
    if (output.Alias !== undefined && output.Alias !== null) {
        contents.Alias = output.Alias;
    }
    if (output.ConnectSettings !== undefined && output.ConnectSettings !== null) {
        contents.ConnectSettings = deserializeAws_json1_1DirectoryConnectSettingsDescription(output.ConnectSettings, context);
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.DesiredNumberOfDomainControllers !== undefined &&
        output.DesiredNumberOfDomainControllers !== null) {
        contents.DesiredNumberOfDomainControllers =
            output.DesiredNumberOfDomainControllers;
    }
    if (output.DirectoryId !== undefined && output.DirectoryId !== null) {
        contents.DirectoryId = output.DirectoryId;
    }
    if (output.DnsIpAddrs !== undefined && output.DnsIpAddrs !== null) {
        contents.DnsIpAddrs = deserializeAws_json1_1DnsIpAddrs(output.DnsIpAddrs, context);
    }
    if (output.Edition !== undefined && output.Edition !== null) {
        contents.Edition = output.Edition;
    }
    if (output.LaunchTime !== undefined && output.LaunchTime !== null) {
        contents.LaunchTime = new Date(Math.round(output.LaunchTime * 1000));
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.OwnerDirectoryDescription !== undefined &&
        output.OwnerDirectoryDescription !== null) {
        contents.OwnerDirectoryDescription = deserializeAws_json1_1OwnerDirectoryDescription(output.OwnerDirectoryDescription, context);
    }
    if (output.RadiusSettings !== undefined && output.RadiusSettings !== null) {
        contents.RadiusSettings = deserializeAws_json1_1RadiusSettings(output.RadiusSettings, context);
    }
    if (output.RadiusStatus !== undefined && output.RadiusStatus !== null) {
        contents.RadiusStatus = output.RadiusStatus;
    }
    if (output.ShareMethod !== undefined && output.ShareMethod !== null) {
        contents.ShareMethod = output.ShareMethod;
    }
    if (output.ShareNotes !== undefined && output.ShareNotes !== null) {
        contents.ShareNotes = output.ShareNotes;
    }
    if (output.ShareStatus !== undefined && output.ShareStatus !== null) {
        contents.ShareStatus = output.ShareStatus;
    }
    if (output.ShortName !== undefined && output.ShortName !== null) {
        contents.ShortName = output.ShortName;
    }
    if (output.Size !== undefined && output.Size !== null) {
        contents.Size = output.Size;
    }
    if (output.SsoEnabled !== undefined && output.SsoEnabled !== null) {
        contents.SsoEnabled = output.SsoEnabled;
    }
    if (output.Stage !== undefined && output.Stage !== null) {
        contents.Stage = output.Stage;
    }
    if (output.StageLastUpdatedDateTime !== undefined &&
        output.StageLastUpdatedDateTime !== null) {
        contents.StageLastUpdatedDateTime = new Date(Math.round(output.StageLastUpdatedDateTime * 1000));
    }
    if (output.StageReason !== undefined && output.StageReason !== null) {
        contents.StageReason = output.StageReason;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    if (output.VpcSettings !== undefined && output.VpcSettings !== null) {
        contents.VpcSettings = deserializeAws_json1_1DirectoryVpcSettingsDescription(output.VpcSettings, context);
    }
    return contents;
};
const deserializeAws_json1_1DirectoryDescriptions = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DirectoryDescription(entry, context));
};
const deserializeAws_json1_1DirectoryDoesNotExistException = (output, context) => {
    let contents = {
        __type: "DirectoryDoesNotExistException",
        Message: undefined,
        RequestId: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.RequestId !== undefined && output.RequestId !== null) {
        contents.RequestId = output.RequestId;
    }
    return contents;
};
const deserializeAws_json1_1DirectoryLimitExceededException = (output, context) => {
    let contents = {
        __type: "DirectoryLimitExceededException",
        Message: undefined,
        RequestId: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.RequestId !== undefined && output.RequestId !== null) {
        contents.RequestId = output.RequestId;
    }
    return contents;
};
const deserializeAws_json1_1DirectoryLimits = (output, context) => {
    let contents = {
        __type: "DirectoryLimits",
        CloudOnlyDirectoriesCurrentCount: undefined,
        CloudOnlyDirectoriesLimit: undefined,
        CloudOnlyDirectoriesLimitReached: undefined,
        CloudOnlyMicrosoftADCurrentCount: undefined,
        CloudOnlyMicrosoftADLimit: undefined,
        CloudOnlyMicrosoftADLimitReached: undefined,
        ConnectedDirectoriesCurrentCount: undefined,
        ConnectedDirectoriesLimit: undefined,
        ConnectedDirectoriesLimitReached: undefined
    };
    if (output.CloudOnlyDirectoriesCurrentCount !== undefined &&
        output.CloudOnlyDirectoriesCurrentCount !== null) {
        contents.CloudOnlyDirectoriesCurrentCount =
            output.CloudOnlyDirectoriesCurrentCount;
    }
    if (output.CloudOnlyDirectoriesLimit !== undefined &&
        output.CloudOnlyDirectoriesLimit !== null) {
        contents.CloudOnlyDirectoriesLimit = output.CloudOnlyDirectoriesLimit;
    }
    if (output.CloudOnlyDirectoriesLimitReached !== undefined &&
        output.CloudOnlyDirectoriesLimitReached !== null) {
        contents.CloudOnlyDirectoriesLimitReached =
            output.CloudOnlyDirectoriesLimitReached;
    }
    if (output.CloudOnlyMicrosoftADCurrentCount !== undefined &&
        output.CloudOnlyMicrosoftADCurrentCount !== null) {
        contents.CloudOnlyMicrosoftADCurrentCount =
            output.CloudOnlyMicrosoftADCurrentCount;
    }
    if (output.CloudOnlyMicrosoftADLimit !== undefined &&
        output.CloudOnlyMicrosoftADLimit !== null) {
        contents.CloudOnlyMicrosoftADLimit = output.CloudOnlyMicrosoftADLimit;
    }
    if (output.CloudOnlyMicrosoftADLimitReached !== undefined &&
        output.CloudOnlyMicrosoftADLimitReached !== null) {
        contents.CloudOnlyMicrosoftADLimitReached =
            output.CloudOnlyMicrosoftADLimitReached;
    }
    if (output.ConnectedDirectoriesCurrentCount !== undefined &&
        output.ConnectedDirectoriesCurrentCount !== null) {
        contents.ConnectedDirectoriesCurrentCount =
            output.ConnectedDirectoriesCurrentCount;
    }
    if (output.ConnectedDirectoriesLimit !== undefined &&
        output.ConnectedDirectoriesLimit !== null) {
        contents.ConnectedDirectoriesLimit = output.ConnectedDirectoriesLimit;
    }
    if (output.ConnectedDirectoriesLimitReached !== undefined &&
        output.ConnectedDirectoriesLimitReached !== null) {
        contents.ConnectedDirectoriesLimitReached =
            output.ConnectedDirectoriesLimitReached;
    }
    return contents;
};
const deserializeAws_json1_1DirectoryNotSharedException = (output, context) => {
    let contents = {
        __type: "DirectoryNotSharedException",
        Message: undefined,
        RequestId: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.RequestId !== undefined && output.RequestId !== null) {
        contents.RequestId = output.RequestId;
    }
    return contents;
};
const deserializeAws_json1_1DirectoryUnavailableException = (output, context) => {
    let contents = {
        __type: "DirectoryUnavailableException",
        Message: undefined,
        RequestId: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.RequestId !== undefined && output.RequestId !== null) {
        contents.RequestId = output.RequestId;
    }
    return contents;
};
const deserializeAws_json1_1DirectoryVpcSettingsDescription = (output, context) => {
    let contents = {
        __type: "DirectoryVpcSettingsDescription",
        AvailabilityZones: undefined,
        SecurityGroupId: undefined,
        SubnetIds: undefined,
        VpcId: undefined
    };
    if (output.AvailabilityZones !== undefined &&
        output.AvailabilityZones !== null) {
        contents.AvailabilityZones = deserializeAws_json1_1AvailabilityZones(output.AvailabilityZones, context);
    }
    if (output.SecurityGroupId !== undefined && output.SecurityGroupId !== null) {
        contents.SecurityGroupId = output.SecurityGroupId;
    }
    if (output.SubnetIds !== undefined && output.SubnetIds !== null) {
        contents.SubnetIds = deserializeAws_json1_1SubnetIds(output.SubnetIds, context);
    }
    if (output.VpcId !== undefined && output.VpcId !== null) {
        contents.VpcId = output.VpcId;
    }
    return contents;
};
const deserializeAws_json1_1DisableLDAPSResult = (output, context) => {
    let contents = {
        __type: "DisableLDAPSResult"
    };
    return contents;
};
const deserializeAws_json1_1DisableRadiusResult = (output, context) => {
    let contents = {
        __type: "DisableRadiusResult"
    };
    return contents;
};
const deserializeAws_json1_1DisableSsoResult = (output, context) => {
    let contents = {
        __type: "DisableSsoResult"
    };
    return contents;
};
const deserializeAws_json1_1DnsIpAddrs = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1DomainController = (output, context) => {
    let contents = {
        __type: "DomainController",
        AvailabilityZone: undefined,
        DirectoryId: undefined,
        DnsIpAddr: undefined,
        DomainControllerId: undefined,
        LaunchTime: undefined,
        Status: undefined,
        StatusLastUpdatedDateTime: undefined,
        StatusReason: undefined,
        SubnetId: undefined,
        VpcId: undefined
    };
    if (output.AvailabilityZone !== undefined &&
        output.AvailabilityZone !== null) {
        contents.AvailabilityZone = output.AvailabilityZone;
    }
    if (output.DirectoryId !== undefined && output.DirectoryId !== null) {
        contents.DirectoryId = output.DirectoryId;
    }
    if (output.DnsIpAddr !== undefined && output.DnsIpAddr !== null) {
        contents.DnsIpAddr = output.DnsIpAddr;
    }
    if (output.DomainControllerId !== undefined &&
        output.DomainControllerId !== null) {
        contents.DomainControllerId = output.DomainControllerId;
    }
    if (output.LaunchTime !== undefined && output.LaunchTime !== null) {
        contents.LaunchTime = new Date(Math.round(output.LaunchTime * 1000));
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.StatusLastUpdatedDateTime !== undefined &&
        output.StatusLastUpdatedDateTime !== null) {
        contents.StatusLastUpdatedDateTime = new Date(Math.round(output.StatusLastUpdatedDateTime * 1000));
    }
    if (output.StatusReason !== undefined && output.StatusReason !== null) {
        contents.StatusReason = output.StatusReason;
    }
    if (output.SubnetId !== undefined && output.SubnetId !== null) {
        contents.SubnetId = output.SubnetId;
    }
    if (output.VpcId !== undefined && output.VpcId !== null) {
        contents.VpcId = output.VpcId;
    }
    return contents;
};
const deserializeAws_json1_1DomainControllerLimitExceededException = (output, context) => {
    let contents = {
        __type: "DomainControllerLimitExceededException",
        Message: undefined,
        RequestId: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.RequestId !== undefined && output.RequestId !== null) {
        contents.RequestId = output.RequestId;
    }
    return contents;
};
const deserializeAws_json1_1DomainControllers = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DomainController(entry, context));
};
const deserializeAws_json1_1EnableLDAPSResult = (output, context) => {
    let contents = {
        __type: "EnableLDAPSResult"
    };
    return contents;
};
const deserializeAws_json1_1EnableRadiusResult = (output, context) => {
    let contents = {
        __type: "EnableRadiusResult"
    };
    return contents;
};
const deserializeAws_json1_1EnableSsoResult = (output, context) => {
    let contents = {
        __type: "EnableSsoResult"
    };
    return contents;
};
const deserializeAws_json1_1EntityAlreadyExistsException = (output, context) => {
    let contents = {
        __type: "EntityAlreadyExistsException",
        Message: undefined,
        RequestId: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.RequestId !== undefined && output.RequestId !== null) {
        contents.RequestId = output.RequestId;
    }
    return contents;
};
const deserializeAws_json1_1EntityDoesNotExistException = (output, context) => {
    let contents = {
        __type: "EntityDoesNotExistException",
        Message: undefined,
        RequestId: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.RequestId !== undefined && output.RequestId !== null) {
        contents.RequestId = output.RequestId;
    }
    return contents;
};
const deserializeAws_json1_1EventTopic = (output, context) => {
    let contents = {
        __type: "EventTopic",
        CreatedDateTime: undefined,
        DirectoryId: undefined,
        Status: undefined,
        TopicArn: undefined,
        TopicName: undefined
    };
    if (output.CreatedDateTime !== undefined && output.CreatedDateTime !== null) {
        contents.CreatedDateTime = new Date(Math.round(output.CreatedDateTime * 1000));
    }
    if (output.DirectoryId !== undefined && output.DirectoryId !== null) {
        contents.DirectoryId = output.DirectoryId;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.TopicArn !== undefined && output.TopicArn !== null) {
        contents.TopicArn = output.TopicArn;
    }
    if (output.TopicName !== undefined && output.TopicName !== null) {
        contents.TopicName = output.TopicName;
    }
    return contents;
};
const deserializeAws_json1_1EventTopics = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1EventTopic(entry, context));
};
const deserializeAws_json1_1GetDirectoryLimitsResult = (output, context) => {
    let contents = {
        __type: "GetDirectoryLimitsResult",
        DirectoryLimits: undefined
    };
    if (output.DirectoryLimits !== undefined && output.DirectoryLimits !== null) {
        contents.DirectoryLimits = deserializeAws_json1_1DirectoryLimits(output.DirectoryLimits, context);
    }
    return contents;
};
const deserializeAws_json1_1GetSnapshotLimitsResult = (output, context) => {
    let contents = {
        __type: "GetSnapshotLimitsResult",
        SnapshotLimits: undefined
    };
    if (output.SnapshotLimits !== undefined && output.SnapshotLimits !== null) {
        contents.SnapshotLimits = deserializeAws_json1_1SnapshotLimits(output.SnapshotLimits, context);
    }
    return contents;
};
const deserializeAws_json1_1InsufficientPermissionsException = (output, context) => {
    let contents = {
        __type: "InsufficientPermissionsException",
        Message: undefined,
        RequestId: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.RequestId !== undefined && output.RequestId !== null) {
        contents.RequestId = output.RequestId;
    }
    return contents;
};
const deserializeAws_json1_1InvalidCertificateException = (output, context) => {
    let contents = {
        __type: "InvalidCertificateException",
        Message: undefined,
        RequestId: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.RequestId !== undefined && output.RequestId !== null) {
        contents.RequestId = output.RequestId;
    }
    return contents;
};
const deserializeAws_json1_1InvalidLDAPSStatusException = (output, context) => {
    let contents = {
        __type: "InvalidLDAPSStatusException",
        Message: undefined,
        RequestId: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.RequestId !== undefined && output.RequestId !== null) {
        contents.RequestId = output.RequestId;
    }
    return contents;
};
const deserializeAws_json1_1InvalidNextTokenException = (output, context) => {
    let contents = {
        __type: "InvalidNextTokenException",
        Message: undefined,
        RequestId: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.RequestId !== undefined && output.RequestId !== null) {
        contents.RequestId = output.RequestId;
    }
    return contents;
};
const deserializeAws_json1_1InvalidParameterException = (output, context) => {
    let contents = {
        __type: "InvalidParameterException",
        Message: undefined,
        RequestId: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.RequestId !== undefined && output.RequestId !== null) {
        contents.RequestId = output.RequestId;
    }
    return contents;
};
const deserializeAws_json1_1InvalidPasswordException = (output, context) => {
    let contents = {
        __type: "InvalidPasswordException",
        Message: undefined,
        RequestId: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.RequestId !== undefined && output.RequestId !== null) {
        contents.RequestId = output.RequestId;
    }
    return contents;
};
const deserializeAws_json1_1InvalidTargetException = (output, context) => {
    let contents = {
        __type: "InvalidTargetException",
        Message: undefined,
        RequestId: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.RequestId !== undefined && output.RequestId !== null) {
        contents.RequestId = output.RequestId;
    }
    return contents;
};
const deserializeAws_json1_1IpAddrs = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1IpRouteInfo = (output, context) => {
    let contents = {
        __type: "IpRouteInfo",
        AddedDateTime: undefined,
        CidrIp: undefined,
        Description: undefined,
        DirectoryId: undefined,
        IpRouteStatusMsg: undefined,
        IpRouteStatusReason: undefined
    };
    if (output.AddedDateTime !== undefined && output.AddedDateTime !== null) {
        contents.AddedDateTime = new Date(Math.round(output.AddedDateTime * 1000));
    }
    if (output.CidrIp !== undefined && output.CidrIp !== null) {
        contents.CidrIp = output.CidrIp;
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.DirectoryId !== undefined && output.DirectoryId !== null) {
        contents.DirectoryId = output.DirectoryId;
    }
    if (output.IpRouteStatusMsg !== undefined &&
        output.IpRouteStatusMsg !== null) {
        contents.IpRouteStatusMsg = output.IpRouteStatusMsg;
    }
    if (output.IpRouteStatusReason !== undefined &&
        output.IpRouteStatusReason !== null) {
        contents.IpRouteStatusReason = output.IpRouteStatusReason;
    }
    return contents;
};
const deserializeAws_json1_1IpRouteLimitExceededException = (output, context) => {
    let contents = {
        __type: "IpRouteLimitExceededException",
        Message: undefined,
        RequestId: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.RequestId !== undefined && output.RequestId !== null) {
        contents.RequestId = output.RequestId;
    }
    return contents;
};
const deserializeAws_json1_1IpRoutesInfo = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1IpRouteInfo(entry, context));
};
const deserializeAws_json1_1LDAPSSettingInfo = (output, context) => {
    let contents = {
        __type: "LDAPSSettingInfo",
        LDAPSStatus: undefined,
        LDAPSStatusReason: undefined,
        LastUpdatedDateTime: undefined
    };
    if (output.LDAPSStatus !== undefined && output.LDAPSStatus !== null) {
        contents.LDAPSStatus = output.LDAPSStatus;
    }
    if (output.LDAPSStatusReason !== undefined &&
        output.LDAPSStatusReason !== null) {
        contents.LDAPSStatusReason = output.LDAPSStatusReason;
    }
    if (output.LastUpdatedDateTime !== undefined &&
        output.LastUpdatedDateTime !== null) {
        contents.LastUpdatedDateTime = new Date(Math.round(output.LastUpdatedDateTime * 1000));
    }
    return contents;
};
const deserializeAws_json1_1LDAPSSettingsInfo = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1LDAPSSettingInfo(entry, context));
};
const deserializeAws_json1_1ListCertificatesResult = (output, context) => {
    let contents = {
        __type: "ListCertificatesResult",
        CertificatesInfo: undefined,
        NextToken: undefined
    };
    if (output.CertificatesInfo !== undefined &&
        output.CertificatesInfo !== null) {
        contents.CertificatesInfo = deserializeAws_json1_1CertificatesInfo(output.CertificatesInfo, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListIpRoutesResult = (output, context) => {
    let contents = {
        __type: "ListIpRoutesResult",
        IpRoutesInfo: undefined,
        NextToken: undefined
    };
    if (output.IpRoutesInfo !== undefined && output.IpRoutesInfo !== null) {
        contents.IpRoutesInfo = deserializeAws_json1_1IpRoutesInfo(output.IpRoutesInfo, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListLogSubscriptionsResult = (output, context) => {
    let contents = {
        __type: "ListLogSubscriptionsResult",
        LogSubscriptions: undefined,
        NextToken: undefined
    };
    if (output.LogSubscriptions !== undefined &&
        output.LogSubscriptions !== null) {
        contents.LogSubscriptions = deserializeAws_json1_1LogSubscriptions(output.LogSubscriptions, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListSchemaExtensionsResult = (output, context) => {
    let contents = {
        __type: "ListSchemaExtensionsResult",
        NextToken: undefined,
        SchemaExtensionsInfo: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.SchemaExtensionsInfo !== undefined &&
        output.SchemaExtensionsInfo !== null) {
        contents.SchemaExtensionsInfo = deserializeAws_json1_1SchemaExtensionsInfo(output.SchemaExtensionsInfo, context);
    }
    return contents;
};
const deserializeAws_json1_1ListTagsForResourceResult = (output, context) => {
    let contents = {
        __type: "ListTagsForResourceResult",
        NextToken: undefined,
        Tags: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Tags !== undefined && output.Tags !== null) {
        contents.Tags = deserializeAws_json1_1Tags(output.Tags, context);
    }
    return contents;
};
const deserializeAws_json1_1LogSubscription = (output, context) => {
    let contents = {
        __type: "LogSubscription",
        DirectoryId: undefined,
        LogGroupName: undefined,
        SubscriptionCreatedDateTime: undefined
    };
    if (output.DirectoryId !== undefined && output.DirectoryId !== null) {
        contents.DirectoryId = output.DirectoryId;
    }
    if (output.LogGroupName !== undefined && output.LogGroupName !== null) {
        contents.LogGroupName = output.LogGroupName;
    }
    if (output.SubscriptionCreatedDateTime !== undefined &&
        output.SubscriptionCreatedDateTime !== null) {
        contents.SubscriptionCreatedDateTime = new Date(Math.round(output.SubscriptionCreatedDateTime * 1000));
    }
    return contents;
};
const deserializeAws_json1_1LogSubscriptions = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1LogSubscription(entry, context));
};
const deserializeAws_json1_1NoAvailableCertificateException = (output, context) => {
    let contents = {
        __type: "NoAvailableCertificateException",
        Message: undefined,
        RequestId: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.RequestId !== undefined && output.RequestId !== null) {
        contents.RequestId = output.RequestId;
    }
    return contents;
};
const deserializeAws_json1_1OrganizationsException = (output, context) => {
    let contents = {
        __type: "OrganizationsException",
        Message: undefined,
        RequestId: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.RequestId !== undefined && output.RequestId !== null) {
        contents.RequestId = output.RequestId;
    }
    return contents;
};
const deserializeAws_json1_1OwnerDirectoryDescription = (output, context) => {
    let contents = {
        __type: "OwnerDirectoryDescription",
        AccountId: undefined,
        DirectoryId: undefined,
        DnsIpAddrs: undefined,
        RadiusSettings: undefined,
        RadiusStatus: undefined,
        VpcSettings: undefined
    };
    if (output.AccountId !== undefined && output.AccountId !== null) {
        contents.AccountId = output.AccountId;
    }
    if (output.DirectoryId !== undefined && output.DirectoryId !== null) {
        contents.DirectoryId = output.DirectoryId;
    }
    if (output.DnsIpAddrs !== undefined && output.DnsIpAddrs !== null) {
        contents.DnsIpAddrs = deserializeAws_json1_1DnsIpAddrs(output.DnsIpAddrs, context);
    }
    if (output.RadiusSettings !== undefined && output.RadiusSettings !== null) {
        contents.RadiusSettings = deserializeAws_json1_1RadiusSettings(output.RadiusSettings, context);
    }
    if (output.RadiusStatus !== undefined && output.RadiusStatus !== null) {
        contents.RadiusStatus = output.RadiusStatus;
    }
    if (output.VpcSettings !== undefined && output.VpcSettings !== null) {
        contents.VpcSettings = deserializeAws_json1_1DirectoryVpcSettingsDescription(output.VpcSettings, context);
    }
    return contents;
};
const deserializeAws_json1_1RadiusSettings = (output, context) => {
    let contents = {
        __type: "RadiusSettings",
        AuthenticationProtocol: undefined,
        DisplayLabel: undefined,
        RadiusPort: undefined,
        RadiusRetries: undefined,
        RadiusServers: undefined,
        RadiusTimeout: undefined,
        SharedSecret: undefined,
        UseSameUsername: undefined
    };
    if (output.AuthenticationProtocol !== undefined &&
        output.AuthenticationProtocol !== null) {
        contents.AuthenticationProtocol = output.AuthenticationProtocol;
    }
    if (output.DisplayLabel !== undefined && output.DisplayLabel !== null) {
        contents.DisplayLabel = output.DisplayLabel;
    }
    if (output.RadiusPort !== undefined && output.RadiusPort !== null) {
        contents.RadiusPort = output.RadiusPort;
    }
    if (output.RadiusRetries !== undefined && output.RadiusRetries !== null) {
        contents.RadiusRetries = output.RadiusRetries;
    }
    if (output.RadiusServers !== undefined && output.RadiusServers !== null) {
        contents.RadiusServers = deserializeAws_json1_1Servers(output.RadiusServers, context);
    }
    if (output.RadiusTimeout !== undefined && output.RadiusTimeout !== null) {
        contents.RadiusTimeout = output.RadiusTimeout;
    }
    if (output.SharedSecret !== undefined && output.SharedSecret !== null) {
        contents.SharedSecret = output.SharedSecret;
    }
    if (output.UseSameUsername !== undefined && output.UseSameUsername !== null) {
        contents.UseSameUsername = output.UseSameUsername;
    }
    return contents;
};
const deserializeAws_json1_1RegisterCertificateResult = (output, context) => {
    let contents = {
        __type: "RegisterCertificateResult",
        CertificateId: undefined
    };
    if (output.CertificateId !== undefined && output.CertificateId !== null) {
        contents.CertificateId = output.CertificateId;
    }
    return contents;
};
const deserializeAws_json1_1RegisterEventTopicResult = (output, context) => {
    let contents = {
        __type: "RegisterEventTopicResult"
    };
    return contents;
};
const deserializeAws_json1_1RejectSharedDirectoryResult = (output, context) => {
    let contents = {
        __type: "RejectSharedDirectoryResult",
        SharedDirectoryId: undefined
    };
    if (output.SharedDirectoryId !== undefined &&
        output.SharedDirectoryId !== null) {
        contents.SharedDirectoryId = output.SharedDirectoryId;
    }
    return contents;
};
const deserializeAws_json1_1RemoveIpRoutesResult = (output, context) => {
    let contents = {
        __type: "RemoveIpRoutesResult"
    };
    return contents;
};
const deserializeAws_json1_1RemoveTagsFromResourceResult = (output, context) => {
    let contents = {
        __type: "RemoveTagsFromResourceResult"
    };
    return contents;
};
const deserializeAws_json1_1ResetUserPasswordResult = (output, context) => {
    let contents = {
        __type: "ResetUserPasswordResult"
    };
    return contents;
};
const deserializeAws_json1_1RestoreFromSnapshotResult = (output, context) => {
    let contents = {
        __type: "RestoreFromSnapshotResult"
    };
    return contents;
};
const deserializeAws_json1_1SchemaExtensionInfo = (output, context) => {
    let contents = {
        __type: "SchemaExtensionInfo",
        Description: undefined,
        DirectoryId: undefined,
        EndDateTime: undefined,
        SchemaExtensionId: undefined,
        SchemaExtensionStatus: undefined,
        SchemaExtensionStatusReason: undefined,
        StartDateTime: undefined
    };
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.DirectoryId !== undefined && output.DirectoryId !== null) {
        contents.DirectoryId = output.DirectoryId;
    }
    if (output.EndDateTime !== undefined && output.EndDateTime !== null) {
        contents.EndDateTime = new Date(Math.round(output.EndDateTime * 1000));
    }
    if (output.SchemaExtensionId !== undefined &&
        output.SchemaExtensionId !== null) {
        contents.SchemaExtensionId = output.SchemaExtensionId;
    }
    if (output.SchemaExtensionStatus !== undefined &&
        output.SchemaExtensionStatus !== null) {
        contents.SchemaExtensionStatus = output.SchemaExtensionStatus;
    }
    if (output.SchemaExtensionStatusReason !== undefined &&
        output.SchemaExtensionStatusReason !== null) {
        contents.SchemaExtensionStatusReason = output.SchemaExtensionStatusReason;
    }
    if (output.StartDateTime !== undefined && output.StartDateTime !== null) {
        contents.StartDateTime = new Date(Math.round(output.StartDateTime * 1000));
    }
    return contents;
};
const deserializeAws_json1_1SchemaExtensionsInfo = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1SchemaExtensionInfo(entry, context));
};
const deserializeAws_json1_1Servers = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1ServiceException = (output, context) => {
    let contents = {
        __type: "ServiceException",
        Message: undefined,
        RequestId: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.RequestId !== undefined && output.RequestId !== null) {
        contents.RequestId = output.RequestId;
    }
    return contents;
};
const deserializeAws_json1_1ShareDirectoryResult = (output, context) => {
    let contents = {
        __type: "ShareDirectoryResult",
        SharedDirectoryId: undefined
    };
    if (output.SharedDirectoryId !== undefined &&
        output.SharedDirectoryId !== null) {
        contents.SharedDirectoryId = output.SharedDirectoryId;
    }
    return contents;
};
const deserializeAws_json1_1ShareLimitExceededException = (output, context) => {
    let contents = {
        __type: "ShareLimitExceededException",
        Message: undefined,
        RequestId: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.RequestId !== undefined && output.RequestId !== null) {
        contents.RequestId = output.RequestId;
    }
    return contents;
};
const deserializeAws_json1_1SharedDirectories = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1SharedDirectory(entry, context));
};
const deserializeAws_json1_1SharedDirectory = (output, context) => {
    let contents = {
        __type: "SharedDirectory",
        CreatedDateTime: undefined,
        LastUpdatedDateTime: undefined,
        OwnerAccountId: undefined,
        OwnerDirectoryId: undefined,
        ShareMethod: undefined,
        ShareNotes: undefined,
        ShareStatus: undefined,
        SharedAccountId: undefined,
        SharedDirectoryId: undefined
    };
    if (output.CreatedDateTime !== undefined && output.CreatedDateTime !== null) {
        contents.CreatedDateTime = new Date(Math.round(output.CreatedDateTime * 1000));
    }
    if (output.LastUpdatedDateTime !== undefined &&
        output.LastUpdatedDateTime !== null) {
        contents.LastUpdatedDateTime = new Date(Math.round(output.LastUpdatedDateTime * 1000));
    }
    if (output.OwnerAccountId !== undefined && output.OwnerAccountId !== null) {
        contents.OwnerAccountId = output.OwnerAccountId;
    }
    if (output.OwnerDirectoryId !== undefined &&
        output.OwnerDirectoryId !== null) {
        contents.OwnerDirectoryId = output.OwnerDirectoryId;
    }
    if (output.ShareMethod !== undefined && output.ShareMethod !== null) {
        contents.ShareMethod = output.ShareMethod;
    }
    if (output.ShareNotes !== undefined && output.ShareNotes !== null) {
        contents.ShareNotes = output.ShareNotes;
    }
    if (output.ShareStatus !== undefined && output.ShareStatus !== null) {
        contents.ShareStatus = output.ShareStatus;
    }
    if (output.SharedAccountId !== undefined && output.SharedAccountId !== null) {
        contents.SharedAccountId = output.SharedAccountId;
    }
    if (output.SharedDirectoryId !== undefined &&
        output.SharedDirectoryId !== null) {
        contents.SharedDirectoryId = output.SharedDirectoryId;
    }
    return contents;
};
const deserializeAws_json1_1Snapshot = (output, context) => {
    let contents = {
        __type: "Snapshot",
        DirectoryId: undefined,
        Name: undefined,
        SnapshotId: undefined,
        StartTime: undefined,
        Status: undefined,
        Type: undefined
    };
    if (output.DirectoryId !== undefined && output.DirectoryId !== null) {
        contents.DirectoryId = output.DirectoryId;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.SnapshotId !== undefined && output.SnapshotId !== null) {
        contents.SnapshotId = output.SnapshotId;
    }
    if (output.StartTime !== undefined && output.StartTime !== null) {
        contents.StartTime = new Date(Math.round(output.StartTime * 1000));
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1SnapshotLimitExceededException = (output, context) => {
    let contents = {
        __type: "SnapshotLimitExceededException",
        Message: undefined,
        RequestId: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.RequestId !== undefined && output.RequestId !== null) {
        contents.RequestId = output.RequestId;
    }
    return contents;
};
const deserializeAws_json1_1SnapshotLimits = (output, context) => {
    let contents = {
        __type: "SnapshotLimits",
        ManualSnapshotsCurrentCount: undefined,
        ManualSnapshotsLimit: undefined,
        ManualSnapshotsLimitReached: undefined
    };
    if (output.ManualSnapshotsCurrentCount !== undefined &&
        output.ManualSnapshotsCurrentCount !== null) {
        contents.ManualSnapshotsCurrentCount = output.ManualSnapshotsCurrentCount;
    }
    if (output.ManualSnapshotsLimit !== undefined &&
        output.ManualSnapshotsLimit !== null) {
        contents.ManualSnapshotsLimit = output.ManualSnapshotsLimit;
    }
    if (output.ManualSnapshotsLimitReached !== undefined &&
        output.ManualSnapshotsLimitReached !== null) {
        contents.ManualSnapshotsLimitReached = output.ManualSnapshotsLimitReached;
    }
    return contents;
};
const deserializeAws_json1_1Snapshots = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Snapshot(entry, context));
};
const deserializeAws_json1_1StartSchemaExtensionResult = (output, context) => {
    let contents = {
        __type: "StartSchemaExtensionResult",
        SchemaExtensionId: undefined
    };
    if (output.SchemaExtensionId !== undefined &&
        output.SchemaExtensionId !== null) {
        contents.SchemaExtensionId = output.SchemaExtensionId;
    }
    return contents;
};
const deserializeAws_json1_1SubnetIds = (output, context) => {
    return (output || []).map((entry) => entry);
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
const deserializeAws_json1_1TagLimitExceededException = (output, context) => {
    let contents = {
        __type: "TagLimitExceededException",
        Message: undefined,
        RequestId: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.RequestId !== undefined && output.RequestId !== null) {
        contents.RequestId = output.RequestId;
    }
    return contents;
};
const deserializeAws_json1_1Tags = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Tag(entry, context));
};
const deserializeAws_json1_1Trust = (output, context) => {
    let contents = {
        __type: "Trust",
        CreatedDateTime: undefined,
        DirectoryId: undefined,
        LastUpdatedDateTime: undefined,
        RemoteDomainName: undefined,
        SelectiveAuth: undefined,
        StateLastUpdatedDateTime: undefined,
        TrustDirection: undefined,
        TrustId: undefined,
        TrustState: undefined,
        TrustStateReason: undefined,
        TrustType: undefined
    };
    if (output.CreatedDateTime !== undefined && output.CreatedDateTime !== null) {
        contents.CreatedDateTime = new Date(Math.round(output.CreatedDateTime * 1000));
    }
    if (output.DirectoryId !== undefined && output.DirectoryId !== null) {
        contents.DirectoryId = output.DirectoryId;
    }
    if (output.LastUpdatedDateTime !== undefined &&
        output.LastUpdatedDateTime !== null) {
        contents.LastUpdatedDateTime = new Date(Math.round(output.LastUpdatedDateTime * 1000));
    }
    if (output.RemoteDomainName !== undefined &&
        output.RemoteDomainName !== null) {
        contents.RemoteDomainName = output.RemoteDomainName;
    }
    if (output.SelectiveAuth !== undefined && output.SelectiveAuth !== null) {
        contents.SelectiveAuth = output.SelectiveAuth;
    }
    if (output.StateLastUpdatedDateTime !== undefined &&
        output.StateLastUpdatedDateTime !== null) {
        contents.StateLastUpdatedDateTime = new Date(Math.round(output.StateLastUpdatedDateTime * 1000));
    }
    if (output.TrustDirection !== undefined && output.TrustDirection !== null) {
        contents.TrustDirection = output.TrustDirection;
    }
    if (output.TrustId !== undefined && output.TrustId !== null) {
        contents.TrustId = output.TrustId;
    }
    if (output.TrustState !== undefined && output.TrustState !== null) {
        contents.TrustState = output.TrustState;
    }
    if (output.TrustStateReason !== undefined &&
        output.TrustStateReason !== null) {
        contents.TrustStateReason = output.TrustStateReason;
    }
    if (output.TrustType !== undefined && output.TrustType !== null) {
        contents.TrustType = output.TrustType;
    }
    return contents;
};
const deserializeAws_json1_1Trusts = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Trust(entry, context));
};
const deserializeAws_json1_1UnshareDirectoryResult = (output, context) => {
    let contents = {
        __type: "UnshareDirectoryResult",
        SharedDirectoryId: undefined
    };
    if (output.SharedDirectoryId !== undefined &&
        output.SharedDirectoryId !== null) {
        contents.SharedDirectoryId = output.SharedDirectoryId;
    }
    return contents;
};
const deserializeAws_json1_1UnsupportedOperationException = (output, context) => {
    let contents = {
        __type: "UnsupportedOperationException",
        Message: undefined,
        RequestId: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.RequestId !== undefined && output.RequestId !== null) {
        contents.RequestId = output.RequestId;
    }
    return contents;
};
const deserializeAws_json1_1UpdateConditionalForwarderResult = (output, context) => {
    let contents = {
        __type: "UpdateConditionalForwarderResult"
    };
    return contents;
};
const deserializeAws_json1_1UpdateNumberOfDomainControllersResult = (output, context) => {
    let contents = {
        __type: "UpdateNumberOfDomainControllersResult"
    };
    return contents;
};
const deserializeAws_json1_1UpdateRadiusResult = (output, context) => {
    let contents = {
        __type: "UpdateRadiusResult"
    };
    return contents;
};
const deserializeAws_json1_1UpdateTrustResult = (output, context) => {
    let contents = {
        __type: "UpdateTrustResult",
        RequestId: undefined,
        TrustId: undefined
    };
    if (output.RequestId !== undefined && output.RequestId !== null) {
        contents.RequestId = output.RequestId;
    }
    if (output.TrustId !== undefined && output.TrustId !== null) {
        contents.TrustId = output.TrustId;
    }
    return contents;
};
const deserializeAws_json1_1UserDoesNotExistException = (output, context) => {
    let contents = {
        __type: "UserDoesNotExistException",
        Message: undefined,
        RequestId: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.RequestId !== undefined && output.RequestId !== null) {
        contents.RequestId = output.RequestId;
    }
    return contents;
};
const deserializeAws_json1_1VerifyTrustResult = (output, context) => {
    let contents = {
        __type: "VerifyTrustResult",
        TrustId: undefined
    };
    if (output.TrustId !== undefined && output.TrustId !== null) {
        contents.TrustId = output.TrustId;
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