"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1AssociateFleetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "PhotonAdminProxyService.AssociateFleet";
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateFleetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AssociateFleetCommand = serializeAws_json1_1AssociateFleetCommand;
async function serializeAws_json1_1BatchAssociateUserStackCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "PhotonAdminProxyService.BatchAssociateUserStack";
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchAssociateUserStackRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1BatchAssociateUserStackCommand = serializeAws_json1_1BatchAssociateUserStackCommand;
async function serializeAws_json1_1BatchDisassociateUserStackCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "PhotonAdminProxyService.BatchDisassociateUserStack";
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchDisassociateUserStackRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1BatchDisassociateUserStackCommand = serializeAws_json1_1BatchDisassociateUserStackCommand;
async function serializeAws_json1_1CopyImageCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "PhotonAdminProxyService.CopyImage";
    let body;
    body = JSON.stringify(serializeAws_json1_1CopyImageRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CopyImageCommand = serializeAws_json1_1CopyImageCommand;
async function serializeAws_json1_1CreateDirectoryConfigCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "PhotonAdminProxyService.CreateDirectoryConfig";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDirectoryConfigRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateDirectoryConfigCommand = serializeAws_json1_1CreateDirectoryConfigCommand;
async function serializeAws_json1_1CreateFleetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "PhotonAdminProxyService.CreateFleet";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateFleetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateFleetCommand = serializeAws_json1_1CreateFleetCommand;
async function serializeAws_json1_1CreateImageBuilderCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "PhotonAdminProxyService.CreateImageBuilder";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateImageBuilderRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateImageBuilderCommand = serializeAws_json1_1CreateImageBuilderCommand;
async function serializeAws_json1_1CreateImageBuilderStreamingURLCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "PhotonAdminProxyService.CreateImageBuilderStreamingURL";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateImageBuilderStreamingURLRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateImageBuilderStreamingURLCommand = serializeAws_json1_1CreateImageBuilderStreamingURLCommand;
async function serializeAws_json1_1CreateStackCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "PhotonAdminProxyService.CreateStack";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateStackRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateStackCommand = serializeAws_json1_1CreateStackCommand;
async function serializeAws_json1_1CreateStreamingURLCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "PhotonAdminProxyService.CreateStreamingURL";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateStreamingURLRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateStreamingURLCommand = serializeAws_json1_1CreateStreamingURLCommand;
async function serializeAws_json1_1CreateUsageReportSubscriptionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "PhotonAdminProxyService.CreateUsageReportSubscription";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateUsageReportSubscriptionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateUsageReportSubscriptionCommand = serializeAws_json1_1CreateUsageReportSubscriptionCommand;
async function serializeAws_json1_1CreateUserCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "PhotonAdminProxyService.CreateUser";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateUserRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateUserCommand = serializeAws_json1_1CreateUserCommand;
async function serializeAws_json1_1DeleteDirectoryConfigCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "PhotonAdminProxyService.DeleteDirectoryConfig";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteDirectoryConfigRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteDirectoryConfigCommand = serializeAws_json1_1DeleteDirectoryConfigCommand;
async function serializeAws_json1_1DeleteFleetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "PhotonAdminProxyService.DeleteFleet";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteFleetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteFleetCommand = serializeAws_json1_1DeleteFleetCommand;
async function serializeAws_json1_1DeleteImageCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "PhotonAdminProxyService.DeleteImage";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteImageRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteImageCommand = serializeAws_json1_1DeleteImageCommand;
async function serializeAws_json1_1DeleteImageBuilderCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "PhotonAdminProxyService.DeleteImageBuilder";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteImageBuilderRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteImageBuilderCommand = serializeAws_json1_1DeleteImageBuilderCommand;
async function serializeAws_json1_1DeleteImagePermissionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "PhotonAdminProxyService.DeleteImagePermissions";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteImagePermissionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteImagePermissionsCommand = serializeAws_json1_1DeleteImagePermissionsCommand;
async function serializeAws_json1_1DeleteStackCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "PhotonAdminProxyService.DeleteStack";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteStackRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteStackCommand = serializeAws_json1_1DeleteStackCommand;
async function serializeAws_json1_1DeleteUsageReportSubscriptionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "PhotonAdminProxyService.DeleteUsageReportSubscription";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteUsageReportSubscriptionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteUsageReportSubscriptionCommand = serializeAws_json1_1DeleteUsageReportSubscriptionCommand;
async function serializeAws_json1_1DeleteUserCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "PhotonAdminProxyService.DeleteUser";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteUserRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteUserCommand = serializeAws_json1_1DeleteUserCommand;
async function serializeAws_json1_1DescribeDirectoryConfigsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "PhotonAdminProxyService.DescribeDirectoryConfigs";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeDirectoryConfigsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeDirectoryConfigsCommand = serializeAws_json1_1DescribeDirectoryConfigsCommand;
async function serializeAws_json1_1DescribeFleetsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "PhotonAdminProxyService.DescribeFleets";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeFleetsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeFleetsCommand = serializeAws_json1_1DescribeFleetsCommand;
async function serializeAws_json1_1DescribeImageBuildersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "PhotonAdminProxyService.DescribeImageBuilders";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeImageBuildersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeImageBuildersCommand = serializeAws_json1_1DescribeImageBuildersCommand;
async function serializeAws_json1_1DescribeImagePermissionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "PhotonAdminProxyService.DescribeImagePermissions";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeImagePermissionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeImagePermissionsCommand = serializeAws_json1_1DescribeImagePermissionsCommand;
async function serializeAws_json1_1DescribeImagesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "PhotonAdminProxyService.DescribeImages";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeImagesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeImagesCommand = serializeAws_json1_1DescribeImagesCommand;
async function serializeAws_json1_1DescribeSessionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "PhotonAdminProxyService.DescribeSessions";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeSessionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeSessionsCommand = serializeAws_json1_1DescribeSessionsCommand;
async function serializeAws_json1_1DescribeStacksCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "PhotonAdminProxyService.DescribeStacks";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeStacksRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeStacksCommand = serializeAws_json1_1DescribeStacksCommand;
async function serializeAws_json1_1DescribeUsageReportSubscriptionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "PhotonAdminProxyService.DescribeUsageReportSubscriptions";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeUsageReportSubscriptionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeUsageReportSubscriptionsCommand = serializeAws_json1_1DescribeUsageReportSubscriptionsCommand;
async function serializeAws_json1_1DescribeUserStackAssociationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "PhotonAdminProxyService.DescribeUserStackAssociations";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeUserStackAssociationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeUserStackAssociationsCommand = serializeAws_json1_1DescribeUserStackAssociationsCommand;
async function serializeAws_json1_1DescribeUsersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "PhotonAdminProxyService.DescribeUsers";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeUsersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeUsersCommand = serializeAws_json1_1DescribeUsersCommand;
async function serializeAws_json1_1DisableUserCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "PhotonAdminProxyService.DisableUser";
    let body;
    body = JSON.stringify(serializeAws_json1_1DisableUserRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DisableUserCommand = serializeAws_json1_1DisableUserCommand;
async function serializeAws_json1_1DisassociateFleetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "PhotonAdminProxyService.DisassociateFleet";
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateFleetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DisassociateFleetCommand = serializeAws_json1_1DisassociateFleetCommand;
async function serializeAws_json1_1EnableUserCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "PhotonAdminProxyService.EnableUser";
    let body;
    body = JSON.stringify(serializeAws_json1_1EnableUserRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1EnableUserCommand = serializeAws_json1_1EnableUserCommand;
async function serializeAws_json1_1ExpireSessionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "PhotonAdminProxyService.ExpireSession";
    let body;
    body = JSON.stringify(serializeAws_json1_1ExpireSessionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ExpireSessionCommand = serializeAws_json1_1ExpireSessionCommand;
async function serializeAws_json1_1ListAssociatedFleetsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "PhotonAdminProxyService.ListAssociatedFleets";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAssociatedFleetsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListAssociatedFleetsCommand = serializeAws_json1_1ListAssociatedFleetsCommand;
async function serializeAws_json1_1ListAssociatedStacksCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "PhotonAdminProxyService.ListAssociatedStacks";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAssociatedStacksRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListAssociatedStacksCommand = serializeAws_json1_1ListAssociatedStacksCommand;
async function serializeAws_json1_1ListTagsForResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "PhotonAdminProxyService.ListTagsForResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
async function serializeAws_json1_1StartFleetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "PhotonAdminProxyService.StartFleet";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartFleetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartFleetCommand = serializeAws_json1_1StartFleetCommand;
async function serializeAws_json1_1StartImageBuilderCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "PhotonAdminProxyService.StartImageBuilder";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartImageBuilderRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartImageBuilderCommand = serializeAws_json1_1StartImageBuilderCommand;
async function serializeAws_json1_1StopFleetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "PhotonAdminProxyService.StopFleet";
    let body;
    body = JSON.stringify(serializeAws_json1_1StopFleetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StopFleetCommand = serializeAws_json1_1StopFleetCommand;
async function serializeAws_json1_1StopImageBuilderCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "PhotonAdminProxyService.StopImageBuilder";
    let body;
    body = JSON.stringify(serializeAws_json1_1StopImageBuilderRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StopImageBuilderCommand = serializeAws_json1_1StopImageBuilderCommand;
async function serializeAws_json1_1TagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "PhotonAdminProxyService.TagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
async function serializeAws_json1_1UntagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "PhotonAdminProxyService.UntagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
async function serializeAws_json1_1UpdateDirectoryConfigCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "PhotonAdminProxyService.UpdateDirectoryConfig";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateDirectoryConfigRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateDirectoryConfigCommand = serializeAws_json1_1UpdateDirectoryConfigCommand;
async function serializeAws_json1_1UpdateFleetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "PhotonAdminProxyService.UpdateFleet";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateFleetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateFleetCommand = serializeAws_json1_1UpdateFleetCommand;
async function serializeAws_json1_1UpdateImagePermissionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "PhotonAdminProxyService.UpdateImagePermissions";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateImagePermissionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateImagePermissionsCommand = serializeAws_json1_1UpdateImagePermissionsCommand;
async function serializeAws_json1_1UpdateStackCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "PhotonAdminProxyService.UpdateStack";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateStackRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateStackCommand = serializeAws_json1_1UpdateStackCommand;
async function deserializeAws_json1_1AssociateFleetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AssociateFleetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociateFleetResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AssociateFleetResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AssociateFleetCommand = deserializeAws_json1_1AssociateFleetCommand;
async function deserializeAws_json1_1AssociateFleetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.photon#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IncompatibleImageException":
        case "com.amazonaws.photon#IncompatibleImageException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IncompatibleImageExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidAccountStatusException":
        case "com.amazonaws.photon#InvalidAccountStatusException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.photon#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.photon#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.photon#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1BatchAssociateUserStackCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1BatchAssociateUserStackCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchAssociateUserStackResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "BatchAssociateUserStackResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1BatchAssociateUserStackCommand = deserializeAws_json1_1BatchAssociateUserStackCommand;
async function deserializeAws_json1_1BatchAssociateUserStackCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "OperationNotPermittedException":
        case "com.amazonaws.photon#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1BatchDisassociateUserStackCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1BatchDisassociateUserStackCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchDisassociateUserStackResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "BatchDisassociateUserStackResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1BatchDisassociateUserStackCommand = deserializeAws_json1_1BatchDisassociateUserStackCommand;
async function deserializeAws_json1_1BatchDisassociateUserStackCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CopyImageCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CopyImageCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CopyImageResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CopyImageResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CopyImageCommand = deserializeAws_json1_1CopyImageCommand;
async function deserializeAws_json1_1CopyImageCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "IncompatibleImageException":
        case "com.amazonaws.photon#IncompatibleImageException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IncompatibleImageExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidAccountStatusException":
        case "com.amazonaws.photon#InvalidAccountStatusException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.photon#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.photon#ResourceAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotAvailableException":
        case "com.amazonaws.photon#ResourceNotAvailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotAvailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.photon#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateDirectoryConfigCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateDirectoryConfigCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateDirectoryConfigResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateDirectoryConfigResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateDirectoryConfigCommand = deserializeAws_json1_1CreateDirectoryConfigCommand;
async function deserializeAws_json1_1CreateDirectoryConfigCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidAccountStatusException":
        case "com.amazonaws.photon#InvalidAccountStatusException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.photon#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.photon#ResourceAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateFleetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateFleetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateFleetResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateFleetResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateFleetCommand = deserializeAws_json1_1CreateFleetCommand;
async function deserializeAws_json1_1CreateFleetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.photon#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IncompatibleImageException":
        case "com.amazonaws.photon#IncompatibleImageException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IncompatibleImageExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidAccountStatusException":
        case "com.amazonaws.photon#InvalidAccountStatusException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterCombinationException":
        case "com.amazonaws.photon#InvalidParameterCombinationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRoleException":
        case "com.amazonaws.photon#InvalidRoleException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.photon#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.photon#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.photon#ResourceAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotAvailableException":
        case "com.amazonaws.photon#ResourceNotAvailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotAvailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.photon#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateImageBuilderCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateImageBuilderCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateImageBuilderResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateImageBuilderResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateImageBuilderCommand = deserializeAws_json1_1CreateImageBuilderCommand;
async function deserializeAws_json1_1CreateImageBuilderCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.photon#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IncompatibleImageException":
        case "com.amazonaws.photon#IncompatibleImageException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IncompatibleImageExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidAccountStatusException":
        case "com.amazonaws.photon#InvalidAccountStatusException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterCombinationException":
        case "com.amazonaws.photon#InvalidParameterCombinationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRoleException":
        case "com.amazonaws.photon#InvalidRoleException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.photon#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.photon#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.photon#ResourceAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotAvailableException":
        case "com.amazonaws.photon#ResourceNotAvailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotAvailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.photon#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateImageBuilderStreamingURLCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateImageBuilderStreamingURLCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateImageBuilderStreamingURLResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateImageBuilderStreamingURLResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateImageBuilderStreamingURLCommand = deserializeAws_json1_1CreateImageBuilderStreamingURLCommand;
async function deserializeAws_json1_1CreateImageBuilderStreamingURLCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "OperationNotPermittedException":
        case "com.amazonaws.photon#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.photon#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateStackCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateStackCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateStackResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateStackResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateStackCommand = deserializeAws_json1_1CreateStackCommand;
async function deserializeAws_json1_1CreateStackCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.photon#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidAccountStatusException":
        case "com.amazonaws.photon#InvalidAccountStatusException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterCombinationException":
        case "com.amazonaws.photon#InvalidParameterCombinationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRoleException":
        case "com.amazonaws.photon#InvalidRoleException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.photon#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.photon#ResourceAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.photon#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateStreamingURLCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateStreamingURLCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateStreamingURLResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateStreamingURLResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateStreamingURLCommand = deserializeAws_json1_1CreateStreamingURLCommand;
async function deserializeAws_json1_1CreateStreamingURLCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterCombinationException":
        case "com.amazonaws.photon#InvalidParameterCombinationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.photon#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotAvailableException":
        case "com.amazonaws.photon#ResourceNotAvailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotAvailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.photon#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateUsageReportSubscriptionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateUsageReportSubscriptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateUsageReportSubscriptionResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateUsageReportSubscriptionResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateUsageReportSubscriptionCommand = deserializeAws_json1_1CreateUsageReportSubscriptionCommand;
async function deserializeAws_json1_1CreateUsageReportSubscriptionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidAccountStatusException":
        case "com.amazonaws.photon#InvalidAccountStatusException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRoleException":
        case "com.amazonaws.photon#InvalidRoleException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.photon#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateUserCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateUserCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateUserResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateUserResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateUserCommand = deserializeAws_json1_1CreateUserCommand;
async function deserializeAws_json1_1CreateUserCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidAccountStatusException":
        case "com.amazonaws.photon#InvalidAccountStatusException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterCombinationException":
        case "com.amazonaws.photon#InvalidParameterCombinationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.photon#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.photon#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.photon#ResourceAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteDirectoryConfigCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteDirectoryConfigCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteDirectoryConfigResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteDirectoryConfigResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteDirectoryConfigCommand = deserializeAws_json1_1DeleteDirectoryConfigCommand;
async function deserializeAws_json1_1DeleteDirectoryConfigCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceInUseException":
        case "com.amazonaws.photon#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.photon#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteFleetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteFleetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteFleetResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteFleetResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteFleetCommand = deserializeAws_json1_1DeleteFleetCommand;
async function deserializeAws_json1_1DeleteFleetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.photon#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.photon#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.photon#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteImageCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteImageCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteImageResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteImageResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteImageCommand = deserializeAws_json1_1DeleteImageCommand;
async function deserializeAws_json1_1DeleteImageCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.photon#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.photon#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.photon#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.photon#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteImageBuilderCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteImageBuilderCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteImageBuilderResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteImageBuilderResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteImageBuilderCommand = deserializeAws_json1_1DeleteImageBuilderCommand;
async function deserializeAws_json1_1DeleteImageBuilderCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.photon#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.photon#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.photon#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteImagePermissionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteImagePermissionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteImagePermissionsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteImagePermissionsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteImagePermissionsCommand = deserializeAws_json1_1DeleteImagePermissionsCommand;
async function deserializeAws_json1_1DeleteImagePermissionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotAvailableException":
        case "com.amazonaws.photon#ResourceNotAvailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotAvailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.photon#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteStackCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteStackCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteStackResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteStackResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteStackCommand = deserializeAws_json1_1DeleteStackCommand;
async function deserializeAws_json1_1DeleteStackCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.photon#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.photon#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.photon#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteUsageReportSubscriptionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteUsageReportSubscriptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteUsageReportSubscriptionResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteUsageReportSubscriptionResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteUsageReportSubscriptionCommand = deserializeAws_json1_1DeleteUsageReportSubscriptionCommand;
async function deserializeAws_json1_1DeleteUsageReportSubscriptionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidAccountStatusException":
        case "com.amazonaws.photon#InvalidAccountStatusException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.photon#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteUserCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteUserCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteUserResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteUserResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteUserCommand = deserializeAws_json1_1DeleteUserCommand;
async function deserializeAws_json1_1DeleteUserCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.photon#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeDirectoryConfigsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeDirectoryConfigsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeDirectoryConfigsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeDirectoryConfigsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeDirectoryConfigsCommand = deserializeAws_json1_1DescribeDirectoryConfigsCommand;
async function deserializeAws_json1_1DescribeDirectoryConfigsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.photon#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeFleetsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeFleetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeFleetsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeFleetsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeFleetsCommand = deserializeAws_json1_1DescribeFleetsCommand;
async function deserializeAws_json1_1DescribeFleetsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.photon#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeImageBuildersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeImageBuildersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeImageBuildersResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeImageBuildersResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeImageBuildersCommand = deserializeAws_json1_1DescribeImageBuildersCommand;
async function deserializeAws_json1_1DescribeImageBuildersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.photon#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeImagePermissionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeImagePermissionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeImagePermissionsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeImagePermissionsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeImagePermissionsCommand = deserializeAws_json1_1DescribeImagePermissionsCommand;
async function deserializeAws_json1_1DescribeImagePermissionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.photon#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeImagesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeImagesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeImagesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeImagesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeImagesCommand = deserializeAws_json1_1DescribeImagesCommand;
async function deserializeAws_json1_1DescribeImagesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterCombinationException":
        case "com.amazonaws.photon#InvalidParameterCombinationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.photon#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeSessionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeSessionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeSessionsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeSessionsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeSessionsCommand = deserializeAws_json1_1DescribeSessionsCommand;
async function deserializeAws_json1_1DescribeSessionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterCombinationException":
        case "com.amazonaws.photon#InvalidParameterCombinationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeStacksCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeStacksCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeStacksResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeStacksResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeStacksCommand = deserializeAws_json1_1DescribeStacksCommand;
async function deserializeAws_json1_1DescribeStacksCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.photon#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeUsageReportSubscriptionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeUsageReportSubscriptionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeUsageReportSubscriptionsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeUsageReportSubscriptionsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeUsageReportSubscriptionsCommand = deserializeAws_json1_1DescribeUsageReportSubscriptionsCommand;
async function deserializeAws_json1_1DescribeUsageReportSubscriptionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidAccountStatusException":
        case "com.amazonaws.photon#InvalidAccountStatusException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.photon#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeUserStackAssociationsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeUserStackAssociationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeUserStackAssociationsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeUserStackAssociationsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeUserStackAssociationsCommand = deserializeAws_json1_1DescribeUserStackAssociationsCommand;
async function deserializeAws_json1_1DescribeUserStackAssociationsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterCombinationException":
        case "com.amazonaws.photon#InvalidParameterCombinationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeUsersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeUsersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeUsersResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeUsersResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeUsersCommand = deserializeAws_json1_1DescribeUsersCommand;
async function deserializeAws_json1_1DescribeUsersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterCombinationException":
        case "com.amazonaws.photon#InvalidParameterCombinationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.photon#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DisableUserCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DisableUserCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisableUserResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DisableUserResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DisableUserCommand = deserializeAws_json1_1DisableUserCommand;
async function deserializeAws_json1_1DisableUserCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.photon#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DisassociateFleetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DisassociateFleetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisassociateFleetResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DisassociateFleetResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DisassociateFleetCommand = deserializeAws_json1_1DisassociateFleetCommand;
async function deserializeAws_json1_1DisassociateFleetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.photon#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.photon#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.photon#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1EnableUserCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1EnableUserCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1EnableUserResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "EnableUserResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1EnableUserCommand = deserializeAws_json1_1EnableUserCommand;
async function deserializeAws_json1_1EnableUserCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidAccountStatusException":
        case "com.amazonaws.photon#InvalidAccountStatusException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.photon#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ExpireSessionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ExpireSessionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ExpireSessionResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ExpireSessionResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ExpireSessionCommand = deserializeAws_json1_1ExpireSessionCommand;
async function deserializeAws_json1_1ExpireSessionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListAssociatedFleetsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListAssociatedFleetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAssociatedFleetsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListAssociatedFleetsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListAssociatedFleetsCommand = deserializeAws_json1_1ListAssociatedFleetsCommand;
async function deserializeAws_json1_1ListAssociatedFleetsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListAssociatedStacksCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListAssociatedStacksCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAssociatedStacksResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListAssociatedStacksResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListAssociatedStacksCommand = deserializeAws_json1_1ListAssociatedStacksCommand;
async function deserializeAws_json1_1ListAssociatedStacksCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
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
        case "ResourceNotFoundException":
        case "com.amazonaws.photon#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1StartFleetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartFleetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartFleetResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartFleetResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartFleetCommand = deserializeAws_json1_1StartFleetCommand;
async function deserializeAws_json1_1StartFleetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.photon#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidAccountStatusException":
        case "com.amazonaws.photon#InvalidAccountStatusException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRoleException":
        case "com.amazonaws.photon#InvalidRoleException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.photon#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.photon#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotAvailableException":
        case "com.amazonaws.photon#ResourceNotAvailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotAvailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.photon#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1StartImageBuilderCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartImageBuilderCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartImageBuilderResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartImageBuilderResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartImageBuilderCommand = deserializeAws_json1_1StartImageBuilderCommand;
async function deserializeAws_json1_1StartImageBuilderCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.photon#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IncompatibleImageException":
        case "com.amazonaws.photon#IncompatibleImageException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IncompatibleImageExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidAccountStatusException":
        case "com.amazonaws.photon#InvalidAccountStatusException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotAvailableException":
        case "com.amazonaws.photon#ResourceNotAvailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotAvailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.photon#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1StopFleetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StopFleetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopFleetResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StopFleetResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StopFleetCommand = deserializeAws_json1_1StopFleetCommand;
async function deserializeAws_json1_1StopFleetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.photon#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.photon#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1StopImageBuilderCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StopImageBuilderCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopImageBuilderResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StopImageBuilderResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StopImageBuilderCommand = deserializeAws_json1_1StopImageBuilderCommand;
async function deserializeAws_json1_1StopImageBuilderCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.photon#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.photon#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.photon#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
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
        case "InvalidAccountStatusException":
        case "com.amazonaws.photon#InvalidAccountStatusException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.photon#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.photon#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
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
        case "ResourceNotFoundException":
        case "com.amazonaws.photon#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateDirectoryConfigCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateDirectoryConfigCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateDirectoryConfigResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateDirectoryConfigResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateDirectoryConfigCommand = deserializeAws_json1_1UpdateDirectoryConfigCommand;
async function deserializeAws_json1_1UpdateDirectoryConfigCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.photon#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.photon#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.photon#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateFleetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateFleetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateFleetResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateFleetResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateFleetCommand = deserializeAws_json1_1UpdateFleetCommand;
async function deserializeAws_json1_1UpdateFleetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.photon#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IncompatibleImageException":
        case "com.amazonaws.photon#IncompatibleImageException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IncompatibleImageExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidAccountStatusException":
        case "com.amazonaws.photon#InvalidAccountStatusException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterCombinationException":
        case "com.amazonaws.photon#InvalidParameterCombinationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRoleException":
        case "com.amazonaws.photon#InvalidRoleException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.photon#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.photon#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.photon#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotAvailableException":
        case "com.amazonaws.photon#ResourceNotAvailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotAvailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.photon#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateImagePermissionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateImagePermissionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateImagePermissionsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateImagePermissionsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateImagePermissionsCommand = deserializeAws_json1_1UpdateImagePermissionsCommand;
async function deserializeAws_json1_1UpdateImagePermissionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazonaws.photon#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotAvailableException":
        case "com.amazonaws.photon#ResourceNotAvailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotAvailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.photon#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateStackCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateStackCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateStackResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateStackResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateStackCommand = deserializeAws_json1_1UpdateStackCommand;
async function deserializeAws_json1_1UpdateStackCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.photon#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IncompatibleImageException":
        case "com.amazonaws.photon#IncompatibleImageException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IncompatibleImageExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidAccountStatusException":
        case "com.amazonaws.photon#InvalidAccountStatusException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterCombinationException":
        case "com.amazonaws.photon#InvalidParameterCombinationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRoleException":
        case "com.amazonaws.photon#InvalidRoleException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.photon#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.photon#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.photon#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.photon#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
const deserializeAws_json1_1ConcurrentModificationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ConcurrentModificationException(body, context);
    const contents = Object.assign({ name: "ConcurrentModificationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1IncompatibleImageExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1IncompatibleImageException(body, context);
    const contents = Object.assign({ name: "IncompatibleImageException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidAccountStatusExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidAccountStatusException(body, context);
    const contents = Object.assign({ name: "InvalidAccountStatusException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidParameterCombinationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidParameterCombinationException(body, context);
    const contents = Object.assign({ name: "InvalidParameterCombinationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidRoleExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidRoleException(body, context);
    const contents = Object.assign({ name: "InvalidRoleException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LimitExceededException(body, context);
    const contents = Object.assign({ name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1OperationNotPermittedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OperationNotPermittedException(body, context);
    const contents = Object.assign({ name: "OperationNotPermittedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceAlreadyExistsException(body, context);
    const contents = Object.assign({ name: "ResourceAlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceInUseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceInUseException(body, context);
    const contents = Object.assign({ name: "ResourceInUseException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceNotAvailableExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceNotAvailableException(body, context);
    const contents = Object.assign({ name: "ResourceNotAvailableException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceNotFoundException(body, context);
    const contents = Object.assign({ name: "ResourceNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1AccessEndpoint = (input, context) => {
    const bodyParams = {};
    if (input.EndpointType !== undefined) {
        bodyParams["EndpointType"] = input.EndpointType;
    }
    if (input.VpceId !== undefined) {
        bodyParams["VpceId"] = input.VpceId;
    }
    return bodyParams;
};
const serializeAws_json1_1AccessEndpointList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1AccessEndpoint(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ApplicationSettings = (input, context) => {
    const bodyParams = {};
    if (input.Enabled !== undefined) {
        bodyParams["Enabled"] = input.Enabled;
    }
    if (input.SettingsGroup !== undefined) {
        bodyParams["SettingsGroup"] = input.SettingsGroup;
    }
    return bodyParams;
};
const serializeAws_json1_1ArnList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1AssociateFleetRequest = (input, context) => {
    const bodyParams = {};
    if (input.FleetName !== undefined) {
        bodyParams["FleetName"] = input.FleetName;
    }
    if (input.StackName !== undefined) {
        bodyParams["StackName"] = input.StackName;
    }
    return bodyParams;
};
const serializeAws_json1_1AwsAccountIdList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1BatchAssociateUserStackRequest = (input, context) => {
    const bodyParams = {};
    if (input.UserStackAssociations !== undefined) {
        bodyParams["UserStackAssociations"] = serializeAws_json1_1UserStackAssociationList(input.UserStackAssociations, context);
    }
    return bodyParams;
};
const serializeAws_json1_1BatchDisassociateUserStackRequest = (input, context) => {
    const bodyParams = {};
    if (input.UserStackAssociations !== undefined) {
        bodyParams["UserStackAssociations"] = serializeAws_json1_1UserStackAssociationList(input.UserStackAssociations, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ComputeCapacity = (input, context) => {
    const bodyParams = {};
    if (input.DesiredInstances !== undefined) {
        bodyParams["DesiredInstances"] = input.DesiredInstances;
    }
    return bodyParams;
};
const serializeAws_json1_1CopyImageRequest = (input, context) => {
    const bodyParams = {};
    if (input.DestinationImageDescription !== undefined) {
        bodyParams["DestinationImageDescription"] =
            input.DestinationImageDescription;
    }
    if (input.DestinationImageName !== undefined) {
        bodyParams["DestinationImageName"] = input.DestinationImageName;
    }
    if (input.DestinationRegion !== undefined) {
        bodyParams["DestinationRegion"] = input.DestinationRegion;
    }
    if (input.SourceImageName !== undefined) {
        bodyParams["SourceImageName"] = input.SourceImageName;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateDirectoryConfigRequest = (input, context) => {
    const bodyParams = {};
    if (input.DirectoryName !== undefined) {
        bodyParams["DirectoryName"] = input.DirectoryName;
    }
    if (input.OrganizationalUnitDistinguishedNames !== undefined) {
        bodyParams["OrganizationalUnitDistinguishedNames"] = serializeAws_json1_1OrganizationalUnitDistinguishedNamesList(input.OrganizationalUnitDistinguishedNames, context);
    }
    if (input.ServiceAccountCredentials !== undefined) {
        bodyParams["ServiceAccountCredentials"] = serializeAws_json1_1ServiceAccountCredentials(input.ServiceAccountCredentials, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateFleetRequest = (input, context) => {
    const bodyParams = {};
    if (input.ComputeCapacity !== undefined) {
        bodyParams["ComputeCapacity"] = serializeAws_json1_1ComputeCapacity(input.ComputeCapacity, context);
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.DisconnectTimeoutInSeconds !== undefined) {
        bodyParams["DisconnectTimeoutInSeconds"] = input.DisconnectTimeoutInSeconds;
    }
    if (input.DisplayName !== undefined) {
        bodyParams["DisplayName"] = input.DisplayName;
    }
    if (input.DomainJoinInfo !== undefined) {
        bodyParams["DomainJoinInfo"] = serializeAws_json1_1DomainJoinInfo(input.DomainJoinInfo, context);
    }
    if (input.EnableDefaultInternetAccess !== undefined) {
        bodyParams["EnableDefaultInternetAccess"] =
            input.EnableDefaultInternetAccess;
    }
    if (input.FleetType !== undefined) {
        bodyParams["FleetType"] = input.FleetType;
    }
    if (input.IamRoleArn !== undefined) {
        bodyParams["IamRoleArn"] = input.IamRoleArn;
    }
    if (input.IdleDisconnectTimeoutInSeconds !== undefined) {
        bodyParams["IdleDisconnectTimeoutInSeconds"] =
            input.IdleDisconnectTimeoutInSeconds;
    }
    if (input.ImageArn !== undefined) {
        bodyParams["ImageArn"] = input.ImageArn;
    }
    if (input.ImageName !== undefined) {
        bodyParams["ImageName"] = input.ImageName;
    }
    if (input.InstanceType !== undefined) {
        bodyParams["InstanceType"] = input.InstanceType;
    }
    if (input.MaxUserDurationInSeconds !== undefined) {
        bodyParams["MaxUserDurationInSeconds"] = input.MaxUserDurationInSeconds;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1Tags(input.Tags, context);
    }
    if (input.VpcConfig !== undefined) {
        bodyParams["VpcConfig"] = serializeAws_json1_1VpcConfig(input.VpcConfig, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateImageBuilderRequest = (input, context) => {
    const bodyParams = {};
    if (input.AccessEndpoints !== undefined) {
        bodyParams["AccessEndpoints"] = serializeAws_json1_1AccessEndpointList(input.AccessEndpoints, context);
    }
    if (input.AppstreamAgentVersion !== undefined) {
        bodyParams["AppstreamAgentVersion"] = input.AppstreamAgentVersion;
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.DisplayName !== undefined) {
        bodyParams["DisplayName"] = input.DisplayName;
    }
    if (input.DomainJoinInfo !== undefined) {
        bodyParams["DomainJoinInfo"] = serializeAws_json1_1DomainJoinInfo(input.DomainJoinInfo, context);
    }
    if (input.EnableDefaultInternetAccess !== undefined) {
        bodyParams["EnableDefaultInternetAccess"] =
            input.EnableDefaultInternetAccess;
    }
    if (input.IamRoleArn !== undefined) {
        bodyParams["IamRoleArn"] = input.IamRoleArn;
    }
    if (input.ImageArn !== undefined) {
        bodyParams["ImageArn"] = input.ImageArn;
    }
    if (input.ImageName !== undefined) {
        bodyParams["ImageName"] = input.ImageName;
    }
    if (input.InstanceType !== undefined) {
        bodyParams["InstanceType"] = input.InstanceType;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1Tags(input.Tags, context);
    }
    if (input.VpcConfig !== undefined) {
        bodyParams["VpcConfig"] = serializeAws_json1_1VpcConfig(input.VpcConfig, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateImageBuilderStreamingURLRequest = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Validity !== undefined) {
        bodyParams["Validity"] = input.Validity;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateStackRequest = (input, context) => {
    const bodyParams = {};
    if (input.AccessEndpoints !== undefined) {
        bodyParams["AccessEndpoints"] = serializeAws_json1_1AccessEndpointList(input.AccessEndpoints, context);
    }
    if (input.ApplicationSettings !== undefined) {
        bodyParams["ApplicationSettings"] = serializeAws_json1_1ApplicationSettings(input.ApplicationSettings, context);
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.DisplayName !== undefined) {
        bodyParams["DisplayName"] = input.DisplayName;
    }
    if (input.EmbedHostDomains !== undefined) {
        bodyParams["EmbedHostDomains"] = serializeAws_json1_1EmbedHostDomains(input.EmbedHostDomains, context);
    }
    if (input.FeedbackURL !== undefined) {
        bodyParams["FeedbackURL"] = input.FeedbackURL;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.RedirectURL !== undefined) {
        bodyParams["RedirectURL"] = input.RedirectURL;
    }
    if (input.StorageConnectors !== undefined) {
        bodyParams["StorageConnectors"] = serializeAws_json1_1StorageConnectorList(input.StorageConnectors, context);
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1Tags(input.Tags, context);
    }
    if (input.UserSettings !== undefined) {
        bodyParams["UserSettings"] = serializeAws_json1_1UserSettingList(input.UserSettings, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateStreamingURLRequest = (input, context) => {
    const bodyParams = {};
    if (input.ApplicationId !== undefined) {
        bodyParams["ApplicationId"] = input.ApplicationId;
    }
    if (input.FleetName !== undefined) {
        bodyParams["FleetName"] = input.FleetName;
    }
    if (input.SessionContext !== undefined) {
        bodyParams["SessionContext"] = input.SessionContext;
    }
    if (input.StackName !== undefined) {
        bodyParams["StackName"] = input.StackName;
    }
    if (input.UserId !== undefined) {
        bodyParams["UserId"] = input.UserId;
    }
    if (input.Validity !== undefined) {
        bodyParams["Validity"] = input.Validity;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateUsageReportSubscriptionRequest = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_1CreateUserRequest = (input, context) => {
    const bodyParams = {};
    if (input.AuthenticationType !== undefined) {
        bodyParams["AuthenticationType"] = input.AuthenticationType;
    }
    if (input.FirstName !== undefined) {
        bodyParams["FirstName"] = input.FirstName;
    }
    if (input.LastName !== undefined) {
        bodyParams["LastName"] = input.LastName;
    }
    if (input.MessageAction !== undefined) {
        bodyParams["MessageAction"] = input.MessageAction;
    }
    if (input.UserName !== undefined) {
        bodyParams["UserName"] = input.UserName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteDirectoryConfigRequest = (input, context) => {
    const bodyParams = {};
    if (input.DirectoryName !== undefined) {
        bodyParams["DirectoryName"] = input.DirectoryName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteFleetRequest = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteImageBuilderRequest = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteImagePermissionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.SharedAccountId !== undefined) {
        bodyParams["SharedAccountId"] = input.SharedAccountId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteImageRequest = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteStackRequest = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteUsageReportSubscriptionRequest = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_1DeleteUserRequest = (input, context) => {
    const bodyParams = {};
    if (input.AuthenticationType !== undefined) {
        bodyParams["AuthenticationType"] = input.AuthenticationType;
    }
    if (input.UserName !== undefined) {
        bodyParams["UserName"] = input.UserName;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeDirectoryConfigsRequest = (input, context) => {
    const bodyParams = {};
    if (input.DirectoryNames !== undefined) {
        bodyParams["DirectoryNames"] = serializeAws_json1_1DirectoryNameList(input.DirectoryNames, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeFleetsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Names !== undefined) {
        bodyParams["Names"] = serializeAws_json1_1StringList(input.Names, context);
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeImageBuildersRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.Names !== undefined) {
        bodyParams["Names"] = serializeAws_json1_1StringList(input.Names, context);
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeImagePermissionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.SharedAwsAccountIds !== undefined) {
        bodyParams["SharedAwsAccountIds"] = serializeAws_json1_1AwsAccountIdList(input.SharedAwsAccountIds, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeImagesRequest = (input, context) => {
    const bodyParams = {};
    if (input.Arns !== undefined) {
        bodyParams["Arns"] = serializeAws_json1_1ArnList(input.Arns, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.Names !== undefined) {
        bodyParams["Names"] = serializeAws_json1_1StringList(input.Names, context);
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeSessionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.AuthenticationType !== undefined) {
        bodyParams["AuthenticationType"] = input.AuthenticationType;
    }
    if (input.FleetName !== undefined) {
        bodyParams["FleetName"] = input.FleetName;
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.StackName !== undefined) {
        bodyParams["StackName"] = input.StackName;
    }
    if (input.UserId !== undefined) {
        bodyParams["UserId"] = input.UserId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeStacksRequest = (input, context) => {
    const bodyParams = {};
    if (input.Names !== undefined) {
        bodyParams["Names"] = serializeAws_json1_1StringList(input.Names, context);
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeUsageReportSubscriptionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeUserStackAssociationsRequest = (input, context) => {
    const bodyParams = {};
    if (input.AuthenticationType !== undefined) {
        bodyParams["AuthenticationType"] = input.AuthenticationType;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.StackName !== undefined) {
        bodyParams["StackName"] = input.StackName;
    }
    if (input.UserName !== undefined) {
        bodyParams["UserName"] = input.UserName;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeUsersRequest = (input, context) => {
    const bodyParams = {};
    if (input.AuthenticationType !== undefined) {
        bodyParams["AuthenticationType"] = input.AuthenticationType;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DirectoryNameList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1DisableUserRequest = (input, context) => {
    const bodyParams = {};
    if (input.AuthenticationType !== undefined) {
        bodyParams["AuthenticationType"] = input.AuthenticationType;
    }
    if (input.UserName !== undefined) {
        bodyParams["UserName"] = input.UserName;
    }
    return bodyParams;
};
const serializeAws_json1_1DisassociateFleetRequest = (input, context) => {
    const bodyParams = {};
    if (input.FleetName !== undefined) {
        bodyParams["FleetName"] = input.FleetName;
    }
    if (input.StackName !== undefined) {
        bodyParams["StackName"] = input.StackName;
    }
    return bodyParams;
};
const serializeAws_json1_1DomainJoinInfo = (input, context) => {
    const bodyParams = {};
    if (input.DirectoryName !== undefined) {
        bodyParams["DirectoryName"] = input.DirectoryName;
    }
    if (input.OrganizationalUnitDistinguishedName !== undefined) {
        bodyParams["OrganizationalUnitDistinguishedName"] =
            input.OrganizationalUnitDistinguishedName;
    }
    return bodyParams;
};
const serializeAws_json1_1DomainList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1EmbedHostDomains = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1EnableUserRequest = (input, context) => {
    const bodyParams = {};
    if (input.AuthenticationType !== undefined) {
        bodyParams["AuthenticationType"] = input.AuthenticationType;
    }
    if (input.UserName !== undefined) {
        bodyParams["UserName"] = input.UserName;
    }
    return bodyParams;
};
const serializeAws_json1_1ExpireSessionRequest = (input, context) => {
    const bodyParams = {};
    if (input.SessionId !== undefined) {
        bodyParams["SessionId"] = input.SessionId;
    }
    return bodyParams;
};
const serializeAws_json1_1FleetAttributes = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ImagePermissions = (input, context) => {
    const bodyParams = {};
    if (input.allowFleet !== undefined) {
        bodyParams["allowFleet"] = input.allowFleet;
    }
    if (input.allowImageBuilder !== undefined) {
        bodyParams["allowImageBuilder"] = input.allowImageBuilder;
    }
    return bodyParams;
};
const serializeAws_json1_1ListAssociatedFleetsRequest = (input, context) => {
    const bodyParams = {};
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.StackName !== undefined) {
        bodyParams["StackName"] = input.StackName;
    }
    return bodyParams;
};
const serializeAws_json1_1ListAssociatedStacksRequest = (input, context) => {
    const bodyParams = {};
    if (input.FleetName !== undefined) {
        bodyParams["FleetName"] = input.FleetName;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListTagsForResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    return bodyParams;
};
const serializeAws_json1_1OrganizationalUnitDistinguishedNamesList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1SecurityGroupIdList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ServiceAccountCredentials = (input, context) => {
    const bodyParams = {};
    if (input.AccountName !== undefined) {
        bodyParams["AccountName"] = input.AccountName;
    }
    if (input.AccountPassword !== undefined) {
        bodyParams["AccountPassword"] = input.AccountPassword;
    }
    return bodyParams;
};
const serializeAws_json1_1StackAttributes = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1StartFleetRequest = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1StartImageBuilderRequest = (input, context) => {
    const bodyParams = {};
    if (input.AppstreamAgentVersion !== undefined) {
        bodyParams["AppstreamAgentVersion"] = input.AppstreamAgentVersion;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1StopFleetRequest = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1StopImageBuilderRequest = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1StorageConnector = (input, context) => {
    const bodyParams = {};
    if (input.ConnectorType !== undefined) {
        bodyParams["ConnectorType"] = input.ConnectorType;
    }
    if (input.Domains !== undefined) {
        bodyParams["Domains"] = serializeAws_json1_1DomainList(input.Domains, context);
    }
    if (input.ResourceIdentifier !== undefined) {
        bodyParams["ResourceIdentifier"] = input.ResourceIdentifier;
    }
    return bodyParams;
};
const serializeAws_json1_1StorageConnectorList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1StorageConnector(entry, context));
    }
    return contents;
};
const serializeAws_json1_1StringList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1SubnetIdList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1TagKeyList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1TagResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1Tags(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1Tags = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    if (input.TagKeys !== undefined) {
        bodyParams["TagKeys"] = serializeAws_json1_1TagKeyList(input.TagKeys, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateDirectoryConfigRequest = (input, context) => {
    const bodyParams = {};
    if (input.DirectoryName !== undefined) {
        bodyParams["DirectoryName"] = input.DirectoryName;
    }
    if (input.OrganizationalUnitDistinguishedNames !== undefined) {
        bodyParams["OrganizationalUnitDistinguishedNames"] = serializeAws_json1_1OrganizationalUnitDistinguishedNamesList(input.OrganizationalUnitDistinguishedNames, context);
    }
    if (input.ServiceAccountCredentials !== undefined) {
        bodyParams["ServiceAccountCredentials"] = serializeAws_json1_1ServiceAccountCredentials(input.ServiceAccountCredentials, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateFleetRequest = (input, context) => {
    const bodyParams = {};
    if (input.AttributesToDelete !== undefined) {
        bodyParams["AttributesToDelete"] = serializeAws_json1_1FleetAttributes(input.AttributesToDelete, context);
    }
    if (input.ComputeCapacity !== undefined) {
        bodyParams["ComputeCapacity"] = serializeAws_json1_1ComputeCapacity(input.ComputeCapacity, context);
    }
    if (input.DeleteVpcConfig !== undefined) {
        bodyParams["DeleteVpcConfig"] = input.DeleteVpcConfig;
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.DisconnectTimeoutInSeconds !== undefined) {
        bodyParams["DisconnectTimeoutInSeconds"] = input.DisconnectTimeoutInSeconds;
    }
    if (input.DisplayName !== undefined) {
        bodyParams["DisplayName"] = input.DisplayName;
    }
    if (input.DomainJoinInfo !== undefined) {
        bodyParams["DomainJoinInfo"] = serializeAws_json1_1DomainJoinInfo(input.DomainJoinInfo, context);
    }
    if (input.EnableDefaultInternetAccess !== undefined) {
        bodyParams["EnableDefaultInternetAccess"] =
            input.EnableDefaultInternetAccess;
    }
    if (input.IamRoleArn !== undefined) {
        bodyParams["IamRoleArn"] = input.IamRoleArn;
    }
    if (input.IdleDisconnectTimeoutInSeconds !== undefined) {
        bodyParams["IdleDisconnectTimeoutInSeconds"] =
            input.IdleDisconnectTimeoutInSeconds;
    }
    if (input.ImageArn !== undefined) {
        bodyParams["ImageArn"] = input.ImageArn;
    }
    if (input.ImageName !== undefined) {
        bodyParams["ImageName"] = input.ImageName;
    }
    if (input.InstanceType !== undefined) {
        bodyParams["InstanceType"] = input.InstanceType;
    }
    if (input.MaxUserDurationInSeconds !== undefined) {
        bodyParams["MaxUserDurationInSeconds"] = input.MaxUserDurationInSeconds;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.VpcConfig !== undefined) {
        bodyParams["VpcConfig"] = serializeAws_json1_1VpcConfig(input.VpcConfig, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateImagePermissionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.ImagePermissions !== undefined) {
        bodyParams["ImagePermissions"] = serializeAws_json1_1ImagePermissions(input.ImagePermissions, context);
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.SharedAccountId !== undefined) {
        bodyParams["SharedAccountId"] = input.SharedAccountId;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateStackRequest = (input, context) => {
    const bodyParams = {};
    if (input.AccessEndpoints !== undefined) {
        bodyParams["AccessEndpoints"] = serializeAws_json1_1AccessEndpointList(input.AccessEndpoints, context);
    }
    if (input.ApplicationSettings !== undefined) {
        bodyParams["ApplicationSettings"] = serializeAws_json1_1ApplicationSettings(input.ApplicationSettings, context);
    }
    if (input.AttributesToDelete !== undefined) {
        bodyParams["AttributesToDelete"] = serializeAws_json1_1StackAttributes(input.AttributesToDelete, context);
    }
    if (input.DeleteStorageConnectors !== undefined) {
        bodyParams["DeleteStorageConnectors"] = input.DeleteStorageConnectors;
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.DisplayName !== undefined) {
        bodyParams["DisplayName"] = input.DisplayName;
    }
    if (input.EmbedHostDomains !== undefined) {
        bodyParams["EmbedHostDomains"] = serializeAws_json1_1EmbedHostDomains(input.EmbedHostDomains, context);
    }
    if (input.FeedbackURL !== undefined) {
        bodyParams["FeedbackURL"] = input.FeedbackURL;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.RedirectURL !== undefined) {
        bodyParams["RedirectURL"] = input.RedirectURL;
    }
    if (input.StorageConnectors !== undefined) {
        bodyParams["StorageConnectors"] = serializeAws_json1_1StorageConnectorList(input.StorageConnectors, context);
    }
    if (input.UserSettings !== undefined) {
        bodyParams["UserSettings"] = serializeAws_json1_1UserSettingList(input.UserSettings, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UserSetting = (input, context) => {
    const bodyParams = {};
    if (input.Action !== undefined) {
        bodyParams["Action"] = input.Action;
    }
    if (input.Permission !== undefined) {
        bodyParams["Permission"] = input.Permission;
    }
    return bodyParams;
};
const serializeAws_json1_1UserSettingList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1UserSetting(entry, context));
    }
    return contents;
};
const serializeAws_json1_1UserStackAssociation = (input, context) => {
    const bodyParams = {};
    if (input.AuthenticationType !== undefined) {
        bodyParams["AuthenticationType"] = input.AuthenticationType;
    }
    if (input.SendEmailNotification !== undefined) {
        bodyParams["SendEmailNotification"] = input.SendEmailNotification;
    }
    if (input.StackName !== undefined) {
        bodyParams["StackName"] = input.StackName;
    }
    if (input.UserName !== undefined) {
        bodyParams["UserName"] = input.UserName;
    }
    return bodyParams;
};
const serializeAws_json1_1UserStackAssociationList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1UserStackAssociation(entry, context));
    }
    return contents;
};
const serializeAws_json1_1VpcConfig = (input, context) => {
    const bodyParams = {};
    if (input.SecurityGroupIds !== undefined) {
        bodyParams["SecurityGroupIds"] = serializeAws_json1_1SecurityGroupIdList(input.SecurityGroupIds, context);
    }
    if (input.SubnetIds !== undefined) {
        bodyParams["SubnetIds"] = serializeAws_json1_1SubnetIdList(input.SubnetIds, context);
    }
    return bodyParams;
};
const deserializeAws_json1_1AccessEndpoint = (output, context) => {
    let contents = {
        __type: "AccessEndpoint",
        EndpointType: undefined,
        VpceId: undefined
    };
    if (output.EndpointType !== undefined && output.EndpointType !== null) {
        contents.EndpointType = output.EndpointType;
    }
    if (output.VpceId !== undefined && output.VpceId !== null) {
        contents.VpceId = output.VpceId;
    }
    return contents;
};
const deserializeAws_json1_1AccessEndpointList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1AccessEndpoint(entry, context));
};
const deserializeAws_json1_1Application = (output, context) => {
    let contents = {
        __type: "Application",
        DisplayName: undefined,
        Enabled: undefined,
        IconURL: undefined,
        LaunchParameters: undefined,
        LaunchPath: undefined,
        Metadata: undefined,
        Name: undefined
    };
    if (output.DisplayName !== undefined && output.DisplayName !== null) {
        contents.DisplayName = output.DisplayName;
    }
    if (output.Enabled !== undefined && output.Enabled !== null) {
        contents.Enabled = output.Enabled;
    }
    if (output.IconURL !== undefined && output.IconURL !== null) {
        contents.IconURL = output.IconURL;
    }
    if (output.LaunchParameters !== undefined &&
        output.LaunchParameters !== null) {
        contents.LaunchParameters = output.LaunchParameters;
    }
    if (output.LaunchPath !== undefined && output.LaunchPath !== null) {
        contents.LaunchPath = output.LaunchPath;
    }
    if (output.Metadata !== undefined && output.Metadata !== null) {
        contents.Metadata = deserializeAws_json1_1Metadata(output.Metadata, context);
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1ApplicationSettingsResponse = (output, context) => {
    let contents = {
        __type: "ApplicationSettingsResponse",
        Enabled: undefined,
        S3BucketName: undefined,
        SettingsGroup: undefined
    };
    if (output.Enabled !== undefined && output.Enabled !== null) {
        contents.Enabled = output.Enabled;
    }
    if (output.S3BucketName !== undefined && output.S3BucketName !== null) {
        contents.S3BucketName = output.S3BucketName;
    }
    if (output.SettingsGroup !== undefined && output.SettingsGroup !== null) {
        contents.SettingsGroup = output.SettingsGroup;
    }
    return contents;
};
const deserializeAws_json1_1Applications = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Application(entry, context));
};
const deserializeAws_json1_1AssociateFleetResult = (output, context) => {
    let contents = {
        __type: "AssociateFleetResult"
    };
    return contents;
};
const deserializeAws_json1_1BatchAssociateUserStackResult = (output, context) => {
    let contents = {
        __type: "BatchAssociateUserStackResult",
        errors: undefined
    };
    if (output.errors !== undefined && output.errors !== null) {
        contents.errors = deserializeAws_json1_1UserStackAssociationErrorList(output.errors, context);
    }
    return contents;
};
const deserializeAws_json1_1BatchDisassociateUserStackResult = (output, context) => {
    let contents = {
        __type: "BatchDisassociateUserStackResult",
        errors: undefined
    };
    if (output.errors !== undefined && output.errors !== null) {
        contents.errors = deserializeAws_json1_1UserStackAssociationErrorList(output.errors, context);
    }
    return contents;
};
const deserializeAws_json1_1ComputeCapacityStatus = (output, context) => {
    let contents = {
        __type: "ComputeCapacityStatus",
        Available: undefined,
        Desired: undefined,
        InUse: undefined,
        Running: undefined
    };
    if (output.Available !== undefined && output.Available !== null) {
        contents.Available = output.Available;
    }
    if (output.Desired !== undefined && output.Desired !== null) {
        contents.Desired = output.Desired;
    }
    if (output.InUse !== undefined && output.InUse !== null) {
        contents.InUse = output.InUse;
    }
    if (output.Running !== undefined && output.Running !== null) {
        contents.Running = output.Running;
    }
    return contents;
};
const deserializeAws_json1_1ConcurrentModificationException = (output, context) => {
    let contents = {
        __type: "ConcurrentModificationException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1CopyImageResponse = (output, context) => {
    let contents = {
        __type: "CopyImageResponse",
        DestinationImageName: undefined
    };
    if (output.DestinationImageName !== undefined &&
        output.DestinationImageName !== null) {
        contents.DestinationImageName = output.DestinationImageName;
    }
    return contents;
};
const deserializeAws_json1_1CreateDirectoryConfigResult = (output, context) => {
    let contents = {
        __type: "CreateDirectoryConfigResult",
        DirectoryConfig: undefined
    };
    if (output.DirectoryConfig !== undefined && output.DirectoryConfig !== null) {
        contents.DirectoryConfig = deserializeAws_json1_1DirectoryConfig(output.DirectoryConfig, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateFleetResult = (output, context) => {
    let contents = {
        __type: "CreateFleetResult",
        Fleet: undefined
    };
    if (output.Fleet !== undefined && output.Fleet !== null) {
        contents.Fleet = deserializeAws_json1_1Fleet(output.Fleet, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateImageBuilderResult = (output, context) => {
    let contents = {
        __type: "CreateImageBuilderResult",
        ImageBuilder: undefined
    };
    if (output.ImageBuilder !== undefined && output.ImageBuilder !== null) {
        contents.ImageBuilder = deserializeAws_json1_1ImageBuilder(output.ImageBuilder, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateImageBuilderStreamingURLResult = (output, context) => {
    let contents = {
        __type: "CreateImageBuilderStreamingURLResult",
        Expires: undefined,
        StreamingURL: undefined
    };
    if (output.Expires !== undefined && output.Expires !== null) {
        contents.Expires = new Date(Math.round(output.Expires * 1000));
    }
    if (output.StreamingURL !== undefined && output.StreamingURL !== null) {
        contents.StreamingURL = output.StreamingURL;
    }
    return contents;
};
const deserializeAws_json1_1CreateStackResult = (output, context) => {
    let contents = {
        __type: "CreateStackResult",
        Stack: undefined
    };
    if (output.Stack !== undefined && output.Stack !== null) {
        contents.Stack = deserializeAws_json1_1Stack(output.Stack, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateStreamingURLResult = (output, context) => {
    let contents = {
        __type: "CreateStreamingURLResult",
        Expires: undefined,
        StreamingURL: undefined
    };
    if (output.Expires !== undefined && output.Expires !== null) {
        contents.Expires = new Date(Math.round(output.Expires * 1000));
    }
    if (output.StreamingURL !== undefined && output.StreamingURL !== null) {
        contents.StreamingURL = output.StreamingURL;
    }
    return contents;
};
const deserializeAws_json1_1CreateUsageReportSubscriptionResult = (output, context) => {
    let contents = {
        __type: "CreateUsageReportSubscriptionResult",
        S3BucketName: undefined,
        Schedule: undefined
    };
    if (output.S3BucketName !== undefined && output.S3BucketName !== null) {
        contents.S3BucketName = output.S3BucketName;
    }
    if (output.Schedule !== undefined && output.Schedule !== null) {
        contents.Schedule = output.Schedule;
    }
    return contents;
};
const deserializeAws_json1_1CreateUserResult = (output, context) => {
    let contents = {
        __type: "CreateUserResult"
    };
    return contents;
};
const deserializeAws_json1_1DeleteDirectoryConfigResult = (output, context) => {
    let contents = {
        __type: "DeleteDirectoryConfigResult"
    };
    return contents;
};
const deserializeAws_json1_1DeleteFleetResult = (output, context) => {
    let contents = {
        __type: "DeleteFleetResult"
    };
    return contents;
};
const deserializeAws_json1_1DeleteImageBuilderResult = (output, context) => {
    let contents = {
        __type: "DeleteImageBuilderResult",
        ImageBuilder: undefined
    };
    if (output.ImageBuilder !== undefined && output.ImageBuilder !== null) {
        contents.ImageBuilder = deserializeAws_json1_1ImageBuilder(output.ImageBuilder, context);
    }
    return contents;
};
const deserializeAws_json1_1DeleteImagePermissionsResult = (output, context) => {
    let contents = {
        __type: "DeleteImagePermissionsResult"
    };
    return contents;
};
const deserializeAws_json1_1DeleteImageResult = (output, context) => {
    let contents = {
        __type: "DeleteImageResult",
        Image: undefined
    };
    if (output.Image !== undefined && output.Image !== null) {
        contents.Image = deserializeAws_json1_1Image(output.Image, context);
    }
    return contents;
};
const deserializeAws_json1_1DeleteStackResult = (output, context) => {
    let contents = {
        __type: "DeleteStackResult"
    };
    return contents;
};
const deserializeAws_json1_1DeleteUsageReportSubscriptionResult = (output, context) => {
    let contents = {
        __type: "DeleteUsageReportSubscriptionResult"
    };
    return contents;
};
const deserializeAws_json1_1DeleteUserResult = (output, context) => {
    let contents = {
        __type: "DeleteUserResult"
    };
    return contents;
};
const deserializeAws_json1_1DescribeDirectoryConfigsResult = (output, context) => {
    let contents = {
        __type: "DescribeDirectoryConfigsResult",
        DirectoryConfigs: undefined,
        NextToken: undefined
    };
    if (output.DirectoryConfigs !== undefined &&
        output.DirectoryConfigs !== null) {
        contents.DirectoryConfigs = deserializeAws_json1_1DirectoryConfigList(output.DirectoryConfigs, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeFleetsResult = (output, context) => {
    let contents = {
        __type: "DescribeFleetsResult",
        Fleets: undefined,
        NextToken: undefined
    };
    if (output.Fleets !== undefined && output.Fleets !== null) {
        contents.Fleets = deserializeAws_json1_1FleetList(output.Fleets, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeImageBuildersResult = (output, context) => {
    let contents = {
        __type: "DescribeImageBuildersResult",
        ImageBuilders: undefined,
        NextToken: undefined
    };
    if (output.ImageBuilders !== undefined && output.ImageBuilders !== null) {
        contents.ImageBuilders = deserializeAws_json1_1ImageBuilderList(output.ImageBuilders, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeImagePermissionsResult = (output, context) => {
    let contents = {
        __type: "DescribeImagePermissionsResult",
        Name: undefined,
        NextToken: undefined,
        SharedImagePermissionsList: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.SharedImagePermissionsList !== undefined &&
        output.SharedImagePermissionsList !== null) {
        contents.SharedImagePermissionsList = deserializeAws_json1_1SharedImagePermissionsList(output.SharedImagePermissionsList, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeImagesResult = (output, context) => {
    let contents = {
        __type: "DescribeImagesResult",
        Images: undefined,
        NextToken: undefined
    };
    if (output.Images !== undefined && output.Images !== null) {
        contents.Images = deserializeAws_json1_1ImageList(output.Images, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeSessionsResult = (output, context) => {
    let contents = {
        __type: "DescribeSessionsResult",
        NextToken: undefined,
        Sessions: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Sessions !== undefined && output.Sessions !== null) {
        contents.Sessions = deserializeAws_json1_1SessionList(output.Sessions, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeStacksResult = (output, context) => {
    let contents = {
        __type: "DescribeStacksResult",
        NextToken: undefined,
        Stacks: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Stacks !== undefined && output.Stacks !== null) {
        contents.Stacks = deserializeAws_json1_1StackList(output.Stacks, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeUsageReportSubscriptionsResult = (output, context) => {
    let contents = {
        __type: "DescribeUsageReportSubscriptionsResult",
        NextToken: undefined,
        UsageReportSubscriptions: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.UsageReportSubscriptions !== undefined &&
        output.UsageReportSubscriptions !== null) {
        contents.UsageReportSubscriptions = deserializeAws_json1_1UsageReportSubscriptionList(output.UsageReportSubscriptions, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeUserStackAssociationsResult = (output, context) => {
    let contents = {
        __type: "DescribeUserStackAssociationsResult",
        NextToken: undefined,
        UserStackAssociations: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.UserStackAssociations !== undefined &&
        output.UserStackAssociations !== null) {
        contents.UserStackAssociations = deserializeAws_json1_1UserStackAssociationList(output.UserStackAssociations, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeUsersResult = (output, context) => {
    let contents = {
        __type: "DescribeUsersResult",
        NextToken: undefined,
        Users: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Users !== undefined && output.Users !== null) {
        contents.Users = deserializeAws_json1_1UserList(output.Users, context);
    }
    return contents;
};
const deserializeAws_json1_1DirectoryConfig = (output, context) => {
    let contents = {
        __type: "DirectoryConfig",
        CreatedTime: undefined,
        DirectoryName: undefined,
        OrganizationalUnitDistinguishedNames: undefined,
        ServiceAccountCredentials: undefined
    };
    if (output.CreatedTime !== undefined && output.CreatedTime !== null) {
        contents.CreatedTime = new Date(Math.round(output.CreatedTime * 1000));
    }
    if (output.DirectoryName !== undefined && output.DirectoryName !== null) {
        contents.DirectoryName = output.DirectoryName;
    }
    if (output.OrganizationalUnitDistinguishedNames !== undefined &&
        output.OrganizationalUnitDistinguishedNames !== null) {
        contents.OrganizationalUnitDistinguishedNames = deserializeAws_json1_1OrganizationalUnitDistinguishedNamesList(output.OrganizationalUnitDistinguishedNames, context);
    }
    if (output.ServiceAccountCredentials !== undefined &&
        output.ServiceAccountCredentials !== null) {
        contents.ServiceAccountCredentials = deserializeAws_json1_1ServiceAccountCredentials(output.ServiceAccountCredentials, context);
    }
    return contents;
};
const deserializeAws_json1_1DirectoryConfigList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DirectoryConfig(entry, context));
};
const deserializeAws_json1_1DisableUserResult = (output, context) => {
    let contents = {
        __type: "DisableUserResult"
    };
    return contents;
};
const deserializeAws_json1_1DisassociateFleetResult = (output, context) => {
    let contents = {
        __type: "DisassociateFleetResult"
    };
    return contents;
};
const deserializeAws_json1_1DomainJoinInfo = (output, context) => {
    let contents = {
        __type: "DomainJoinInfo",
        DirectoryName: undefined,
        OrganizationalUnitDistinguishedName: undefined
    };
    if (output.DirectoryName !== undefined && output.DirectoryName !== null) {
        contents.DirectoryName = output.DirectoryName;
    }
    if (output.OrganizationalUnitDistinguishedName !== undefined &&
        output.OrganizationalUnitDistinguishedName !== null) {
        contents.OrganizationalUnitDistinguishedName =
            output.OrganizationalUnitDistinguishedName;
    }
    return contents;
};
const deserializeAws_json1_1DomainList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1EmbedHostDomains = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1EnableUserResult = (output, context) => {
    let contents = {
        __type: "EnableUserResult"
    };
    return contents;
};
const deserializeAws_json1_1ExpireSessionResult = (output, context) => {
    let contents = {
        __type: "ExpireSessionResult"
    };
    return contents;
};
const deserializeAws_json1_1Fleet = (output, context) => {
    let contents = {
        __type: "Fleet",
        Arn: undefined,
        ComputeCapacityStatus: undefined,
        CreatedTime: undefined,
        Description: undefined,
        DisconnectTimeoutInSeconds: undefined,
        DisplayName: undefined,
        DomainJoinInfo: undefined,
        EnableDefaultInternetAccess: undefined,
        FleetErrors: undefined,
        FleetType: undefined,
        IamRoleArn: undefined,
        IdleDisconnectTimeoutInSeconds: undefined,
        ImageArn: undefined,
        ImageName: undefined,
        InstanceType: undefined,
        MaxUserDurationInSeconds: undefined,
        Name: undefined,
        State: undefined,
        VpcConfig: undefined
    };
    if (output.Arn !== undefined && output.Arn !== null) {
        contents.Arn = output.Arn;
    }
    if (output.ComputeCapacityStatus !== undefined &&
        output.ComputeCapacityStatus !== null) {
        contents.ComputeCapacityStatus = deserializeAws_json1_1ComputeCapacityStatus(output.ComputeCapacityStatus, context);
    }
    if (output.CreatedTime !== undefined && output.CreatedTime !== null) {
        contents.CreatedTime = new Date(Math.round(output.CreatedTime * 1000));
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.DisconnectTimeoutInSeconds !== undefined &&
        output.DisconnectTimeoutInSeconds !== null) {
        contents.DisconnectTimeoutInSeconds = output.DisconnectTimeoutInSeconds;
    }
    if (output.DisplayName !== undefined && output.DisplayName !== null) {
        contents.DisplayName = output.DisplayName;
    }
    if (output.DomainJoinInfo !== undefined && output.DomainJoinInfo !== null) {
        contents.DomainJoinInfo = deserializeAws_json1_1DomainJoinInfo(output.DomainJoinInfo, context);
    }
    if (output.EnableDefaultInternetAccess !== undefined &&
        output.EnableDefaultInternetAccess !== null) {
        contents.EnableDefaultInternetAccess = output.EnableDefaultInternetAccess;
    }
    if (output.FleetErrors !== undefined && output.FleetErrors !== null) {
        contents.FleetErrors = deserializeAws_json1_1FleetErrors(output.FleetErrors, context);
    }
    if (output.FleetType !== undefined && output.FleetType !== null) {
        contents.FleetType = output.FleetType;
    }
    if (output.IamRoleArn !== undefined && output.IamRoleArn !== null) {
        contents.IamRoleArn = output.IamRoleArn;
    }
    if (output.IdleDisconnectTimeoutInSeconds !== undefined &&
        output.IdleDisconnectTimeoutInSeconds !== null) {
        contents.IdleDisconnectTimeoutInSeconds =
            output.IdleDisconnectTimeoutInSeconds;
    }
    if (output.ImageArn !== undefined && output.ImageArn !== null) {
        contents.ImageArn = output.ImageArn;
    }
    if (output.ImageName !== undefined && output.ImageName !== null) {
        contents.ImageName = output.ImageName;
    }
    if (output.InstanceType !== undefined && output.InstanceType !== null) {
        contents.InstanceType = output.InstanceType;
    }
    if (output.MaxUserDurationInSeconds !== undefined &&
        output.MaxUserDurationInSeconds !== null) {
        contents.MaxUserDurationInSeconds = output.MaxUserDurationInSeconds;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.State !== undefined && output.State !== null) {
        contents.State = output.State;
    }
    if (output.VpcConfig !== undefined && output.VpcConfig !== null) {
        contents.VpcConfig = deserializeAws_json1_1VpcConfig(output.VpcConfig, context);
    }
    return contents;
};
const deserializeAws_json1_1FleetError = (output, context) => {
    let contents = {
        __type: "FleetError",
        ErrorCode: undefined,
        ErrorMessage: undefined
    };
    if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
        contents.ErrorCode = output.ErrorCode;
    }
    if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
        contents.ErrorMessage = output.ErrorMessage;
    }
    return contents;
};
const deserializeAws_json1_1FleetErrors = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1FleetError(entry, context));
};
const deserializeAws_json1_1FleetList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Fleet(entry, context));
};
const deserializeAws_json1_1Image = (output, context) => {
    let contents = {
        __type: "Image",
        Applications: undefined,
        AppstreamAgentVersion: undefined,
        Arn: undefined,
        BaseImageArn: undefined,
        CreatedTime: undefined,
        Description: undefined,
        DisplayName: undefined,
        ImageBuilderName: undefined,
        ImageBuilderSupported: undefined,
        ImagePermissions: undefined,
        Name: undefined,
        Platform: undefined,
        PublicBaseImageReleasedDate: undefined,
        State: undefined,
        StateChangeReason: undefined,
        Visibility: undefined
    };
    if (output.Applications !== undefined && output.Applications !== null) {
        contents.Applications = deserializeAws_json1_1Applications(output.Applications, context);
    }
    if (output.AppstreamAgentVersion !== undefined &&
        output.AppstreamAgentVersion !== null) {
        contents.AppstreamAgentVersion = output.AppstreamAgentVersion;
    }
    if (output.Arn !== undefined && output.Arn !== null) {
        contents.Arn = output.Arn;
    }
    if (output.BaseImageArn !== undefined && output.BaseImageArn !== null) {
        contents.BaseImageArn = output.BaseImageArn;
    }
    if (output.CreatedTime !== undefined && output.CreatedTime !== null) {
        contents.CreatedTime = new Date(Math.round(output.CreatedTime * 1000));
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.DisplayName !== undefined && output.DisplayName !== null) {
        contents.DisplayName = output.DisplayName;
    }
    if (output.ImageBuilderName !== undefined &&
        output.ImageBuilderName !== null) {
        contents.ImageBuilderName = output.ImageBuilderName;
    }
    if (output.ImageBuilderSupported !== undefined &&
        output.ImageBuilderSupported !== null) {
        contents.ImageBuilderSupported = output.ImageBuilderSupported;
    }
    if (output.ImagePermissions !== undefined &&
        output.ImagePermissions !== null) {
        contents.ImagePermissions = deserializeAws_json1_1ImagePermissions(output.ImagePermissions, context);
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Platform !== undefined && output.Platform !== null) {
        contents.Platform = output.Platform;
    }
    if (output.PublicBaseImageReleasedDate !== undefined &&
        output.PublicBaseImageReleasedDate !== null) {
        contents.PublicBaseImageReleasedDate = new Date(Math.round(output.PublicBaseImageReleasedDate * 1000));
    }
    if (output.State !== undefined && output.State !== null) {
        contents.State = output.State;
    }
    if (output.StateChangeReason !== undefined &&
        output.StateChangeReason !== null) {
        contents.StateChangeReason = deserializeAws_json1_1ImageStateChangeReason(output.StateChangeReason, context);
    }
    if (output.Visibility !== undefined && output.Visibility !== null) {
        contents.Visibility = output.Visibility;
    }
    return contents;
};
const deserializeAws_json1_1ImageBuilder = (output, context) => {
    let contents = {
        __type: "ImageBuilder",
        AccessEndpoints: undefined,
        AppstreamAgentVersion: undefined,
        Arn: undefined,
        CreatedTime: undefined,
        Description: undefined,
        DisplayName: undefined,
        DomainJoinInfo: undefined,
        EnableDefaultInternetAccess: undefined,
        IamRoleArn: undefined,
        ImageArn: undefined,
        ImageBuilderErrors: undefined,
        InstanceType: undefined,
        Name: undefined,
        NetworkAccessConfiguration: undefined,
        Platform: undefined,
        State: undefined,
        StateChangeReason: undefined,
        VpcConfig: undefined
    };
    if (output.AccessEndpoints !== undefined && output.AccessEndpoints !== null) {
        contents.AccessEndpoints = deserializeAws_json1_1AccessEndpointList(output.AccessEndpoints, context);
    }
    if (output.AppstreamAgentVersion !== undefined &&
        output.AppstreamAgentVersion !== null) {
        contents.AppstreamAgentVersion = output.AppstreamAgentVersion;
    }
    if (output.Arn !== undefined && output.Arn !== null) {
        contents.Arn = output.Arn;
    }
    if (output.CreatedTime !== undefined && output.CreatedTime !== null) {
        contents.CreatedTime = new Date(Math.round(output.CreatedTime * 1000));
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.DisplayName !== undefined && output.DisplayName !== null) {
        contents.DisplayName = output.DisplayName;
    }
    if (output.DomainJoinInfo !== undefined && output.DomainJoinInfo !== null) {
        contents.DomainJoinInfo = deserializeAws_json1_1DomainJoinInfo(output.DomainJoinInfo, context);
    }
    if (output.EnableDefaultInternetAccess !== undefined &&
        output.EnableDefaultInternetAccess !== null) {
        contents.EnableDefaultInternetAccess = output.EnableDefaultInternetAccess;
    }
    if (output.IamRoleArn !== undefined && output.IamRoleArn !== null) {
        contents.IamRoleArn = output.IamRoleArn;
    }
    if (output.ImageArn !== undefined && output.ImageArn !== null) {
        contents.ImageArn = output.ImageArn;
    }
    if (output.ImageBuilderErrors !== undefined &&
        output.ImageBuilderErrors !== null) {
        contents.ImageBuilderErrors = deserializeAws_json1_1ResourceErrors(output.ImageBuilderErrors, context);
    }
    if (output.InstanceType !== undefined && output.InstanceType !== null) {
        contents.InstanceType = output.InstanceType;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.NetworkAccessConfiguration !== undefined &&
        output.NetworkAccessConfiguration !== null) {
        contents.NetworkAccessConfiguration = deserializeAws_json1_1NetworkAccessConfiguration(output.NetworkAccessConfiguration, context);
    }
    if (output.Platform !== undefined && output.Platform !== null) {
        contents.Platform = output.Platform;
    }
    if (output.State !== undefined && output.State !== null) {
        contents.State = output.State;
    }
    if (output.StateChangeReason !== undefined &&
        output.StateChangeReason !== null) {
        contents.StateChangeReason = deserializeAws_json1_1ImageBuilderStateChangeReason(output.StateChangeReason, context);
    }
    if (output.VpcConfig !== undefined && output.VpcConfig !== null) {
        contents.VpcConfig = deserializeAws_json1_1VpcConfig(output.VpcConfig, context);
    }
    return contents;
};
const deserializeAws_json1_1ImageBuilderList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ImageBuilder(entry, context));
};
const deserializeAws_json1_1ImageBuilderStateChangeReason = (output, context) => {
    let contents = {
        __type: "ImageBuilderStateChangeReason",
        Code: undefined,
        Message: undefined
    };
    if (output.Code !== undefined && output.Code !== null) {
        contents.Code = output.Code;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ImageList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Image(entry, context));
};
const deserializeAws_json1_1ImagePermissions = (output, context) => {
    let contents = {
        __type: "ImagePermissions",
        allowFleet: undefined,
        allowImageBuilder: undefined
    };
    if (output.allowFleet !== undefined && output.allowFleet !== null) {
        contents.allowFleet = output.allowFleet;
    }
    if (output.allowImageBuilder !== undefined &&
        output.allowImageBuilder !== null) {
        contents.allowImageBuilder = output.allowImageBuilder;
    }
    return contents;
};
const deserializeAws_json1_1ImageStateChangeReason = (output, context) => {
    let contents = {
        __type: "ImageStateChangeReason",
        Code: undefined,
        Message: undefined
    };
    if (output.Code !== undefined && output.Code !== null) {
        contents.Code = output.Code;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1IncompatibleImageException = (output, context) => {
    let contents = {
        __type: "IncompatibleImageException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidAccountStatusException = (output, context) => {
    let contents = {
        __type: "InvalidAccountStatusException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidParameterCombinationException = (output, context) => {
    let contents = {
        __type: "InvalidParameterCombinationException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidRoleException = (output, context) => {
    let contents = {
        __type: "InvalidRoleException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1LastReportGenerationExecutionError = (output, context) => {
    let contents = {
        __type: "LastReportGenerationExecutionError",
        ErrorCode: undefined,
        ErrorMessage: undefined
    };
    if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
        contents.ErrorCode = output.ErrorCode;
    }
    if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
        contents.ErrorMessage = output.ErrorMessage;
    }
    return contents;
};
const deserializeAws_json1_1LastReportGenerationExecutionErrors = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1LastReportGenerationExecutionError(entry, context));
};
const deserializeAws_json1_1LimitExceededException = (output, context) => {
    let contents = {
        __type: "LimitExceededException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ListAssociatedFleetsResult = (output, context) => {
    let contents = {
        __type: "ListAssociatedFleetsResult",
        Names: undefined,
        NextToken: undefined
    };
    if (output.Names !== undefined && output.Names !== null) {
        contents.Names = deserializeAws_json1_1StringList(output.Names, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListAssociatedStacksResult = (output, context) => {
    let contents = {
        __type: "ListAssociatedStacksResult",
        Names: undefined,
        NextToken: undefined
    };
    if (output.Names !== undefined && output.Names !== null) {
        contents.Names = deserializeAws_json1_1StringList(output.Names, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListTagsForResourceResponse = (output, context) => {
    let contents = {
        __type: "ListTagsForResourceResponse",
        Tags: undefined
    };
    if (output.Tags !== undefined && output.Tags !== null) {
        contents.Tags = deserializeAws_json1_1Tags(output.Tags, context);
    }
    return contents;
};
const deserializeAws_json1_1Metadata = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1NetworkAccessConfiguration = (output, context) => {
    let contents = {
        __type: "NetworkAccessConfiguration",
        EniId: undefined,
        EniPrivateIpAddress: undefined
    };
    if (output.EniId !== undefined && output.EniId !== null) {
        contents.EniId = output.EniId;
    }
    if (output.EniPrivateIpAddress !== undefined &&
        output.EniPrivateIpAddress !== null) {
        contents.EniPrivateIpAddress = output.EniPrivateIpAddress;
    }
    return contents;
};
const deserializeAws_json1_1OperationNotPermittedException = (output, context) => {
    let contents = {
        __type: "OperationNotPermittedException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1OrganizationalUnitDistinguishedNamesList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1ResourceAlreadyExistsException = (output, context) => {
    let contents = {
        __type: "ResourceAlreadyExistsException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ResourceError = (output, context) => {
    let contents = {
        __type: "ResourceError",
        ErrorCode: undefined,
        ErrorMessage: undefined,
        ErrorTimestamp: undefined
    };
    if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
        contents.ErrorCode = output.ErrorCode;
    }
    if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
        contents.ErrorMessage = output.ErrorMessage;
    }
    if (output.ErrorTimestamp !== undefined && output.ErrorTimestamp !== null) {
        contents.ErrorTimestamp = new Date(Math.round(output.ErrorTimestamp * 1000));
    }
    return contents;
};
const deserializeAws_json1_1ResourceErrors = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ResourceError(entry, context));
};
const deserializeAws_json1_1ResourceInUseException = (output, context) => {
    let contents = {
        __type: "ResourceInUseException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ResourceNotAvailableException = (output, context) => {
    let contents = {
        __type: "ResourceNotAvailableException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ResourceNotFoundException = (output, context) => {
    let contents = {
        __type: "ResourceNotFoundException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1SecurityGroupIdList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1ServiceAccountCredentials = (output, context) => {
    let contents = {
        __type: "ServiceAccountCredentials",
        AccountName: undefined,
        AccountPassword: undefined
    };
    if (output.AccountName !== undefined && output.AccountName !== null) {
        contents.AccountName = output.AccountName;
    }
    if (output.AccountPassword !== undefined && output.AccountPassword !== null) {
        contents.AccountPassword = output.AccountPassword;
    }
    return contents;
};
const deserializeAws_json1_1Session = (output, context) => {
    let contents = {
        __type: "Session",
        AuthenticationType: undefined,
        ConnectionState: undefined,
        FleetName: undefined,
        Id: undefined,
        MaxExpirationTime: undefined,
        NetworkAccessConfiguration: undefined,
        StackName: undefined,
        StartTime: undefined,
        State: undefined,
        UserId: undefined
    };
    if (output.AuthenticationType !== undefined &&
        output.AuthenticationType !== null) {
        contents.AuthenticationType = output.AuthenticationType;
    }
    if (output.ConnectionState !== undefined && output.ConnectionState !== null) {
        contents.ConnectionState = output.ConnectionState;
    }
    if (output.FleetName !== undefined && output.FleetName !== null) {
        contents.FleetName = output.FleetName;
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.MaxExpirationTime !== undefined &&
        output.MaxExpirationTime !== null) {
        contents.MaxExpirationTime = new Date(Math.round(output.MaxExpirationTime * 1000));
    }
    if (output.NetworkAccessConfiguration !== undefined &&
        output.NetworkAccessConfiguration !== null) {
        contents.NetworkAccessConfiguration = deserializeAws_json1_1NetworkAccessConfiguration(output.NetworkAccessConfiguration, context);
    }
    if (output.StackName !== undefined && output.StackName !== null) {
        contents.StackName = output.StackName;
    }
    if (output.StartTime !== undefined && output.StartTime !== null) {
        contents.StartTime = new Date(Math.round(output.StartTime * 1000));
    }
    if (output.State !== undefined && output.State !== null) {
        contents.State = output.State;
    }
    if (output.UserId !== undefined && output.UserId !== null) {
        contents.UserId = output.UserId;
    }
    return contents;
};
const deserializeAws_json1_1SessionList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Session(entry, context));
};
const deserializeAws_json1_1SharedImagePermissions = (output, context) => {
    let contents = {
        __type: "SharedImagePermissions",
        imagePermissions: undefined,
        sharedAccountId: undefined
    };
    if (output.imagePermissions !== undefined &&
        output.imagePermissions !== null) {
        contents.imagePermissions = deserializeAws_json1_1ImagePermissions(output.imagePermissions, context);
    }
    if (output.sharedAccountId !== undefined && output.sharedAccountId !== null) {
        contents.sharedAccountId = output.sharedAccountId;
    }
    return contents;
};
const deserializeAws_json1_1SharedImagePermissionsList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1SharedImagePermissions(entry, context));
};
const deserializeAws_json1_1Stack = (output, context) => {
    let contents = {
        __type: "Stack",
        AccessEndpoints: undefined,
        ApplicationSettings: undefined,
        Arn: undefined,
        CreatedTime: undefined,
        Description: undefined,
        DisplayName: undefined,
        EmbedHostDomains: undefined,
        FeedbackURL: undefined,
        Name: undefined,
        RedirectURL: undefined,
        StackErrors: undefined,
        StorageConnectors: undefined,
        UserSettings: undefined
    };
    if (output.AccessEndpoints !== undefined && output.AccessEndpoints !== null) {
        contents.AccessEndpoints = deserializeAws_json1_1AccessEndpointList(output.AccessEndpoints, context);
    }
    if (output.ApplicationSettings !== undefined &&
        output.ApplicationSettings !== null) {
        contents.ApplicationSettings = deserializeAws_json1_1ApplicationSettingsResponse(output.ApplicationSettings, context);
    }
    if (output.Arn !== undefined && output.Arn !== null) {
        contents.Arn = output.Arn;
    }
    if (output.CreatedTime !== undefined && output.CreatedTime !== null) {
        contents.CreatedTime = new Date(Math.round(output.CreatedTime * 1000));
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.DisplayName !== undefined && output.DisplayName !== null) {
        contents.DisplayName = output.DisplayName;
    }
    if (output.EmbedHostDomains !== undefined &&
        output.EmbedHostDomains !== null) {
        contents.EmbedHostDomains = deserializeAws_json1_1EmbedHostDomains(output.EmbedHostDomains, context);
    }
    if (output.FeedbackURL !== undefined && output.FeedbackURL !== null) {
        contents.FeedbackURL = output.FeedbackURL;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.RedirectURL !== undefined && output.RedirectURL !== null) {
        contents.RedirectURL = output.RedirectURL;
    }
    if (output.StackErrors !== undefined && output.StackErrors !== null) {
        contents.StackErrors = deserializeAws_json1_1StackErrors(output.StackErrors, context);
    }
    if (output.StorageConnectors !== undefined &&
        output.StorageConnectors !== null) {
        contents.StorageConnectors = deserializeAws_json1_1StorageConnectorList(output.StorageConnectors, context);
    }
    if (output.UserSettings !== undefined && output.UserSettings !== null) {
        contents.UserSettings = deserializeAws_json1_1UserSettingList(output.UserSettings, context);
    }
    return contents;
};
const deserializeAws_json1_1StackError = (output, context) => {
    let contents = {
        __type: "StackError",
        ErrorCode: undefined,
        ErrorMessage: undefined
    };
    if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
        contents.ErrorCode = output.ErrorCode;
    }
    if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
        contents.ErrorMessage = output.ErrorMessage;
    }
    return contents;
};
const deserializeAws_json1_1StackErrors = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1StackError(entry, context));
};
const deserializeAws_json1_1StackList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Stack(entry, context));
};
const deserializeAws_json1_1StartFleetResult = (output, context) => {
    let contents = {
        __type: "StartFleetResult"
    };
    return contents;
};
const deserializeAws_json1_1StartImageBuilderResult = (output, context) => {
    let contents = {
        __type: "StartImageBuilderResult",
        ImageBuilder: undefined
    };
    if (output.ImageBuilder !== undefined && output.ImageBuilder !== null) {
        contents.ImageBuilder = deserializeAws_json1_1ImageBuilder(output.ImageBuilder, context);
    }
    return contents;
};
const deserializeAws_json1_1StopFleetResult = (output, context) => {
    let contents = {
        __type: "StopFleetResult"
    };
    return contents;
};
const deserializeAws_json1_1StopImageBuilderResult = (output, context) => {
    let contents = {
        __type: "StopImageBuilderResult",
        ImageBuilder: undefined
    };
    if (output.ImageBuilder !== undefined && output.ImageBuilder !== null) {
        contents.ImageBuilder = deserializeAws_json1_1ImageBuilder(output.ImageBuilder, context);
    }
    return contents;
};
const deserializeAws_json1_1StorageConnector = (output, context) => {
    let contents = {
        __type: "StorageConnector",
        ConnectorType: undefined,
        Domains: undefined,
        ResourceIdentifier: undefined
    };
    if (output.ConnectorType !== undefined && output.ConnectorType !== null) {
        contents.ConnectorType = output.ConnectorType;
    }
    if (output.Domains !== undefined && output.Domains !== null) {
        contents.Domains = deserializeAws_json1_1DomainList(output.Domains, context);
    }
    if (output.ResourceIdentifier !== undefined &&
        output.ResourceIdentifier !== null) {
        contents.ResourceIdentifier = output.ResourceIdentifier;
    }
    return contents;
};
const deserializeAws_json1_1StorageConnectorList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1StorageConnector(entry, context));
};
const deserializeAws_json1_1StringList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1SubnetIdList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1TagResourceResponse = (output, context) => {
    let contents = {
        __type: "TagResourceResponse"
    };
    return contents;
};
const deserializeAws_json1_1Tags = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1UntagResourceResponse = (output, context) => {
    let contents = {
        __type: "UntagResourceResponse"
    };
    return contents;
};
const deserializeAws_json1_1UpdateDirectoryConfigResult = (output, context) => {
    let contents = {
        __type: "UpdateDirectoryConfigResult",
        DirectoryConfig: undefined
    };
    if (output.DirectoryConfig !== undefined && output.DirectoryConfig !== null) {
        contents.DirectoryConfig = deserializeAws_json1_1DirectoryConfig(output.DirectoryConfig, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdateFleetResult = (output, context) => {
    let contents = {
        __type: "UpdateFleetResult",
        Fleet: undefined
    };
    if (output.Fleet !== undefined && output.Fleet !== null) {
        contents.Fleet = deserializeAws_json1_1Fleet(output.Fleet, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdateImagePermissionsResult = (output, context) => {
    let contents = {
        __type: "UpdateImagePermissionsResult"
    };
    return contents;
};
const deserializeAws_json1_1UpdateStackResult = (output, context) => {
    let contents = {
        __type: "UpdateStackResult",
        Stack: undefined
    };
    if (output.Stack !== undefined && output.Stack !== null) {
        contents.Stack = deserializeAws_json1_1Stack(output.Stack, context);
    }
    return contents;
};
const deserializeAws_json1_1UsageReportSubscription = (output, context) => {
    let contents = {
        __type: "UsageReportSubscription",
        LastGeneratedReportDate: undefined,
        S3BucketName: undefined,
        Schedule: undefined,
        SubscriptionErrors: undefined
    };
    if (output.LastGeneratedReportDate !== undefined &&
        output.LastGeneratedReportDate !== null) {
        contents.LastGeneratedReportDate = new Date(Math.round(output.LastGeneratedReportDate * 1000));
    }
    if (output.S3BucketName !== undefined && output.S3BucketName !== null) {
        contents.S3BucketName = output.S3BucketName;
    }
    if (output.Schedule !== undefined && output.Schedule !== null) {
        contents.Schedule = output.Schedule;
    }
    if (output.SubscriptionErrors !== undefined &&
        output.SubscriptionErrors !== null) {
        contents.SubscriptionErrors = deserializeAws_json1_1LastReportGenerationExecutionErrors(output.SubscriptionErrors, context);
    }
    return contents;
};
const deserializeAws_json1_1UsageReportSubscriptionList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1UsageReportSubscription(entry, context));
};
const deserializeAws_json1_1User = (output, context) => {
    let contents = {
        __type: "User",
        Arn: undefined,
        AuthenticationType: undefined,
        CreatedTime: undefined,
        Enabled: undefined,
        FirstName: undefined,
        LastName: undefined,
        Status: undefined,
        UserName: undefined
    };
    if (output.Arn !== undefined && output.Arn !== null) {
        contents.Arn = output.Arn;
    }
    if (output.AuthenticationType !== undefined &&
        output.AuthenticationType !== null) {
        contents.AuthenticationType = output.AuthenticationType;
    }
    if (output.CreatedTime !== undefined && output.CreatedTime !== null) {
        contents.CreatedTime = new Date(Math.round(output.CreatedTime * 1000));
    }
    if (output.Enabled !== undefined && output.Enabled !== null) {
        contents.Enabled = output.Enabled;
    }
    if (output.FirstName !== undefined && output.FirstName !== null) {
        contents.FirstName = output.FirstName;
    }
    if (output.LastName !== undefined && output.LastName !== null) {
        contents.LastName = output.LastName;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.UserName !== undefined && output.UserName !== null) {
        contents.UserName = output.UserName;
    }
    return contents;
};
const deserializeAws_json1_1UserList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1User(entry, context));
};
const deserializeAws_json1_1UserSetting = (output, context) => {
    let contents = {
        __type: "UserSetting",
        Action: undefined,
        Permission: undefined
    };
    if (output.Action !== undefined && output.Action !== null) {
        contents.Action = output.Action;
    }
    if (output.Permission !== undefined && output.Permission !== null) {
        contents.Permission = output.Permission;
    }
    return contents;
};
const deserializeAws_json1_1UserSettingList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1UserSetting(entry, context));
};
const deserializeAws_json1_1UserStackAssociation = (output, context) => {
    let contents = {
        __type: "UserStackAssociation",
        AuthenticationType: undefined,
        SendEmailNotification: undefined,
        StackName: undefined,
        UserName: undefined
    };
    if (output.AuthenticationType !== undefined &&
        output.AuthenticationType !== null) {
        contents.AuthenticationType = output.AuthenticationType;
    }
    if (output.SendEmailNotification !== undefined &&
        output.SendEmailNotification !== null) {
        contents.SendEmailNotification = output.SendEmailNotification;
    }
    if (output.StackName !== undefined && output.StackName !== null) {
        contents.StackName = output.StackName;
    }
    if (output.UserName !== undefined && output.UserName !== null) {
        contents.UserName = output.UserName;
    }
    return contents;
};
const deserializeAws_json1_1UserStackAssociationError = (output, context) => {
    let contents = {
        __type: "UserStackAssociationError",
        ErrorCode: undefined,
        ErrorMessage: undefined,
        UserStackAssociation: undefined
    };
    if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
        contents.ErrorCode = output.ErrorCode;
    }
    if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
        contents.ErrorMessage = output.ErrorMessage;
    }
    if (output.UserStackAssociation !== undefined &&
        output.UserStackAssociation !== null) {
        contents.UserStackAssociation = deserializeAws_json1_1UserStackAssociation(output.UserStackAssociation, context);
    }
    return contents;
};
const deserializeAws_json1_1UserStackAssociationErrorList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1UserStackAssociationError(entry, context));
};
const deserializeAws_json1_1UserStackAssociationList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1UserStackAssociation(entry, context));
};
const deserializeAws_json1_1VpcConfig = (output, context) => {
    let contents = {
        __type: "VpcConfig",
        SecurityGroupIds: undefined,
        SubnetIds: undefined
    };
    if (output.SecurityGroupIds !== undefined &&
        output.SecurityGroupIds !== null) {
        contents.SecurityGroupIds = deserializeAws_json1_1SecurityGroupIdList(output.SecurityGroupIds, context);
    }
    if (output.SubnetIds !== undefined && output.SubnetIds !== null) {
        contents.SubnetIds = deserializeAws_json1_1SubnetIdList(output.SubnetIds, context);
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