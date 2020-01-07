"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1AssociateIpGroupsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkspacesService.AssociateIpGroups";
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateIpGroupsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AssociateIpGroupsCommand = serializeAws_json1_1AssociateIpGroupsCommand;
async function serializeAws_json1_1AuthorizeIpRulesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkspacesService.AuthorizeIpRules";
    let body;
    body = JSON.stringify(serializeAws_json1_1AuthorizeIpRulesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AuthorizeIpRulesCommand = serializeAws_json1_1AuthorizeIpRulesCommand;
async function serializeAws_json1_1CopyWorkspaceImageCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkspacesService.CopyWorkspaceImage";
    let body;
    body = JSON.stringify(serializeAws_json1_1CopyWorkspaceImageRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CopyWorkspaceImageCommand = serializeAws_json1_1CopyWorkspaceImageCommand;
async function serializeAws_json1_1CreateIpGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkspacesService.CreateIpGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateIpGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateIpGroupCommand = serializeAws_json1_1CreateIpGroupCommand;
async function serializeAws_json1_1CreateTagsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkspacesService.CreateTags";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateTagsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateTagsCommand = serializeAws_json1_1CreateTagsCommand;
async function serializeAws_json1_1CreateWorkspacesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkspacesService.CreateWorkspaces";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateWorkspacesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateWorkspacesCommand = serializeAws_json1_1CreateWorkspacesCommand;
async function serializeAws_json1_1DeleteIpGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkspacesService.DeleteIpGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteIpGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteIpGroupCommand = serializeAws_json1_1DeleteIpGroupCommand;
async function serializeAws_json1_1DeleteTagsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkspacesService.DeleteTags";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteTagsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteTagsCommand = serializeAws_json1_1DeleteTagsCommand;
async function serializeAws_json1_1DeleteWorkspaceImageCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkspacesService.DeleteWorkspaceImage";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteWorkspaceImageRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteWorkspaceImageCommand = serializeAws_json1_1DeleteWorkspaceImageCommand;
async function serializeAws_json1_1DeregisterWorkspaceDirectoryCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkspacesService.DeregisterWorkspaceDirectory";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeregisterWorkspaceDirectoryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeregisterWorkspaceDirectoryCommand = serializeAws_json1_1DeregisterWorkspaceDirectoryCommand;
async function serializeAws_json1_1DescribeAccountCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkspacesService.DescribeAccount";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAccountRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeAccountCommand = serializeAws_json1_1DescribeAccountCommand;
async function serializeAws_json1_1DescribeAccountModificationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkspacesService.DescribeAccountModifications";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAccountModificationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeAccountModificationsCommand = serializeAws_json1_1DescribeAccountModificationsCommand;
async function serializeAws_json1_1DescribeClientPropertiesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkspacesService.DescribeClientProperties";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeClientPropertiesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeClientPropertiesCommand = serializeAws_json1_1DescribeClientPropertiesCommand;
async function serializeAws_json1_1DescribeIpGroupsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkspacesService.DescribeIpGroups";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeIpGroupsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeIpGroupsCommand = serializeAws_json1_1DescribeIpGroupsCommand;
async function serializeAws_json1_1DescribeTagsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkspacesService.DescribeTags";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeTagsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeTagsCommand = serializeAws_json1_1DescribeTagsCommand;
async function serializeAws_json1_1DescribeWorkspaceBundlesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkspacesService.DescribeWorkspaceBundles";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeWorkspaceBundlesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeWorkspaceBundlesCommand = serializeAws_json1_1DescribeWorkspaceBundlesCommand;
async function serializeAws_json1_1DescribeWorkspaceDirectoriesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkspacesService.DescribeWorkspaceDirectories";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeWorkspaceDirectoriesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeWorkspaceDirectoriesCommand = serializeAws_json1_1DescribeWorkspaceDirectoriesCommand;
async function serializeAws_json1_1DescribeWorkspaceImagesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkspacesService.DescribeWorkspaceImages";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeWorkspaceImagesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeWorkspaceImagesCommand = serializeAws_json1_1DescribeWorkspaceImagesCommand;
async function serializeAws_json1_1DescribeWorkspaceSnapshotsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkspacesService.DescribeWorkspaceSnapshots";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeWorkspaceSnapshotsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeWorkspaceSnapshotsCommand = serializeAws_json1_1DescribeWorkspaceSnapshotsCommand;
async function serializeAws_json1_1DescribeWorkspacesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkspacesService.DescribeWorkspaces";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeWorkspacesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeWorkspacesCommand = serializeAws_json1_1DescribeWorkspacesCommand;
async function serializeAws_json1_1DescribeWorkspacesConnectionStatusCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "WorkspacesService.DescribeWorkspacesConnectionStatus";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeWorkspacesConnectionStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeWorkspacesConnectionStatusCommand = serializeAws_json1_1DescribeWorkspacesConnectionStatusCommand;
async function serializeAws_json1_1DisassociateIpGroupsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkspacesService.DisassociateIpGroups";
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateIpGroupsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DisassociateIpGroupsCommand = serializeAws_json1_1DisassociateIpGroupsCommand;
async function serializeAws_json1_1ImportWorkspaceImageCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkspacesService.ImportWorkspaceImage";
    let body;
    body = JSON.stringify(serializeAws_json1_1ImportWorkspaceImageRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ImportWorkspaceImageCommand = serializeAws_json1_1ImportWorkspaceImageCommand;
async function serializeAws_json1_1ListAvailableManagementCidrRangesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "WorkspacesService.ListAvailableManagementCidrRanges";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAvailableManagementCidrRangesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListAvailableManagementCidrRangesCommand = serializeAws_json1_1ListAvailableManagementCidrRangesCommand;
async function serializeAws_json1_1MigrateWorkspaceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkspacesService.MigrateWorkspace";
    let body;
    body = JSON.stringify(serializeAws_json1_1MigrateWorkspaceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1MigrateWorkspaceCommand = serializeAws_json1_1MigrateWorkspaceCommand;
async function serializeAws_json1_1ModifyAccountCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkspacesService.ModifyAccount";
    let body;
    body = JSON.stringify(serializeAws_json1_1ModifyAccountRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ModifyAccountCommand = serializeAws_json1_1ModifyAccountCommand;
async function serializeAws_json1_1ModifyClientPropertiesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkspacesService.ModifyClientProperties";
    let body;
    body = JSON.stringify(serializeAws_json1_1ModifyClientPropertiesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ModifyClientPropertiesCommand = serializeAws_json1_1ModifyClientPropertiesCommand;
async function serializeAws_json1_1ModifySelfservicePermissionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkspacesService.ModifySelfservicePermissions";
    let body;
    body = JSON.stringify(serializeAws_json1_1ModifySelfservicePermissionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ModifySelfservicePermissionsCommand = serializeAws_json1_1ModifySelfservicePermissionsCommand;
async function serializeAws_json1_1ModifyWorkspaceAccessPropertiesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkspacesService.ModifyWorkspaceAccessProperties";
    let body;
    body = JSON.stringify(serializeAws_json1_1ModifyWorkspaceAccessPropertiesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ModifyWorkspaceAccessPropertiesCommand = serializeAws_json1_1ModifyWorkspaceAccessPropertiesCommand;
async function serializeAws_json1_1ModifyWorkspaceCreationPropertiesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "WorkspacesService.ModifyWorkspaceCreationProperties";
    let body;
    body = JSON.stringify(serializeAws_json1_1ModifyWorkspaceCreationPropertiesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ModifyWorkspaceCreationPropertiesCommand = serializeAws_json1_1ModifyWorkspaceCreationPropertiesCommand;
async function serializeAws_json1_1ModifyWorkspacePropertiesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkspacesService.ModifyWorkspaceProperties";
    let body;
    body = JSON.stringify(serializeAws_json1_1ModifyWorkspacePropertiesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ModifyWorkspacePropertiesCommand = serializeAws_json1_1ModifyWorkspacePropertiesCommand;
async function serializeAws_json1_1ModifyWorkspaceStateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkspacesService.ModifyWorkspaceState";
    let body;
    body = JSON.stringify(serializeAws_json1_1ModifyWorkspaceStateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ModifyWorkspaceStateCommand = serializeAws_json1_1ModifyWorkspaceStateCommand;
async function serializeAws_json1_1RebootWorkspacesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkspacesService.RebootWorkspaces";
    let body;
    body = JSON.stringify(serializeAws_json1_1RebootWorkspacesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RebootWorkspacesCommand = serializeAws_json1_1RebootWorkspacesCommand;
async function serializeAws_json1_1RebuildWorkspacesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkspacesService.RebuildWorkspaces";
    let body;
    body = JSON.stringify(serializeAws_json1_1RebuildWorkspacesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RebuildWorkspacesCommand = serializeAws_json1_1RebuildWorkspacesCommand;
async function serializeAws_json1_1RegisterWorkspaceDirectoryCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkspacesService.RegisterWorkspaceDirectory";
    let body;
    body = JSON.stringify(serializeAws_json1_1RegisterWorkspaceDirectoryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RegisterWorkspaceDirectoryCommand = serializeAws_json1_1RegisterWorkspaceDirectoryCommand;
async function serializeAws_json1_1RestoreWorkspaceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkspacesService.RestoreWorkspace";
    let body;
    body = JSON.stringify(serializeAws_json1_1RestoreWorkspaceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RestoreWorkspaceCommand = serializeAws_json1_1RestoreWorkspaceCommand;
async function serializeAws_json1_1RevokeIpRulesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkspacesService.RevokeIpRules";
    let body;
    body = JSON.stringify(serializeAws_json1_1RevokeIpRulesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RevokeIpRulesCommand = serializeAws_json1_1RevokeIpRulesCommand;
async function serializeAws_json1_1StartWorkspacesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkspacesService.StartWorkspaces";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartWorkspacesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartWorkspacesCommand = serializeAws_json1_1StartWorkspacesCommand;
async function serializeAws_json1_1StopWorkspacesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkspacesService.StopWorkspaces";
    let body;
    body = JSON.stringify(serializeAws_json1_1StopWorkspacesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StopWorkspacesCommand = serializeAws_json1_1StopWorkspacesCommand;
async function serializeAws_json1_1TerminateWorkspacesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkspacesService.TerminateWorkspaces";
    let body;
    body = JSON.stringify(serializeAws_json1_1TerminateWorkspacesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1TerminateWorkspacesCommand = serializeAws_json1_1TerminateWorkspacesCommand;
async function serializeAws_json1_1UpdateRulesOfIpGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkspacesService.UpdateRulesOfIpGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateRulesOfIpGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateRulesOfIpGroupCommand = serializeAws_json1_1UpdateRulesOfIpGroupCommand;
async function deserializeAws_json1_1AssociateIpGroupsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AssociateIpGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociateIpGroupsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AssociateIpGroupsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AssociateIpGroupsCommand = deserializeAws_json1_1AssociateIpGroupsCommand;
async function deserializeAws_json1_1AssociateIpGroupsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidResourceStateException":
        case "com.amazonaws.workspaces#InvalidResourceStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotSupportedException":
        case "com.amazonaws.workspaces#OperationNotSupportedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceLimitExceededException":
        case "com.amazonaws.workspaces#ResourceLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.workspaces#ResourceNotFoundException":
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
async function deserializeAws_json1_1AuthorizeIpRulesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AuthorizeIpRulesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AuthorizeIpRulesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AuthorizeIpRulesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AuthorizeIpRulesCommand = deserializeAws_json1_1AuthorizeIpRulesCommand;
async function deserializeAws_json1_1AuthorizeIpRulesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidResourceStateException":
        case "com.amazonaws.workspaces#InvalidResourceStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceLimitExceededException":
        case "com.amazonaws.workspaces#ResourceLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.workspaces#ResourceNotFoundException":
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
async function deserializeAws_json1_1CopyWorkspaceImageCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CopyWorkspaceImageCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CopyWorkspaceImageResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CopyWorkspaceImageResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CopyWorkspaceImageCommand = deserializeAws_json1_1CopyWorkspaceImageCommand;
async function deserializeAws_json1_1CopyWorkspaceImageCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotSupportedException":
        case "com.amazonaws.workspaces#OperationNotSupportedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.workspaces#ResourceAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceLimitExceededException":
        case "com.amazonaws.workspaces#ResourceLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.workspaces#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceUnavailableException":
        case "com.amazonaws.workspaces#ResourceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateIpGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateIpGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateIpGroupResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateIpGroupResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateIpGroupCommand = deserializeAws_json1_1CreateIpGroupCommand;
async function deserializeAws_json1_1CreateIpGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.workspaces#ResourceAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceCreationFailedException":
        case "com.amazonaws.workspaces#ResourceCreationFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceCreationFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceLimitExceededException":
        case "com.amazonaws.workspaces#ResourceLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateTagsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateTagsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateTagsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateTagsCommand = deserializeAws_json1_1CreateTagsCommand;
async function deserializeAws_json1_1CreateTagsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceLimitExceededException":
        case "com.amazonaws.workspaces#ResourceLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.workspaces#ResourceNotFoundException":
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
async function deserializeAws_json1_1CreateWorkspacesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateWorkspacesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateWorkspacesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateWorkspacesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateWorkspacesCommand = deserializeAws_json1_1CreateWorkspacesCommand;
async function deserializeAws_json1_1CreateWorkspacesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceLimitExceededException":
        case "com.amazonaws.workspaces#ResourceLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteIpGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteIpGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteIpGroupResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteIpGroupResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteIpGroupCommand = deserializeAws_json1_1DeleteIpGroupCommand;
async function deserializeAws_json1_1DeleteIpGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceAssociatedException":
        case "com.amazonaws.workspaces#ResourceAssociatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceAssociatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.workspaces#ResourceNotFoundException":
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
async function deserializeAws_json1_1DeleteTagsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteTagsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteTagsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteTagsCommand = deserializeAws_json1_1DeleteTagsCommand;
async function deserializeAws_json1_1DeleteTagsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.workspaces#ResourceNotFoundException":
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
async function deserializeAws_json1_1DeleteWorkspaceImageCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteWorkspaceImageCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteWorkspaceImageResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteWorkspaceImageResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteWorkspaceImageCommand = deserializeAws_json1_1DeleteWorkspaceImageCommand;
async function deserializeAws_json1_1DeleteWorkspaceImageCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidResourceStateException":
        case "com.amazonaws.workspaces#InvalidResourceStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceAssociatedException":
        case "com.amazonaws.workspaces#ResourceAssociatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceAssociatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeregisterWorkspaceDirectoryCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeregisterWorkspaceDirectoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeregisterWorkspaceDirectoryResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeregisterWorkspaceDirectoryResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeregisterWorkspaceDirectoryCommand = deserializeAws_json1_1DeregisterWorkspaceDirectoryCommand;
async function deserializeAws_json1_1DeregisterWorkspaceDirectoryCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidResourceStateException":
        case "com.amazonaws.workspaces#InvalidResourceStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotSupportedException":
        case "com.amazonaws.workspaces#OperationNotSupportedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.workspaces#ResourceNotFoundException":
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
async function deserializeAws_json1_1DescribeAccountCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeAccountCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAccountResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeAccountResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeAccountCommand = deserializeAws_json1_1DescribeAccountCommand;
async function deserializeAws_json1_1DescribeAccountCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeAccountModificationsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeAccountModificationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAccountModificationsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeAccountModificationsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeAccountModificationsCommand = deserializeAws_json1_1DescribeAccountModificationsCommand;
async function deserializeAws_json1_1DescribeAccountModificationsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeClientPropertiesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeClientPropertiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeClientPropertiesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeClientPropertiesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeClientPropertiesCommand = deserializeAws_json1_1DescribeClientPropertiesCommand;
async function deserializeAws_json1_1DescribeClientPropertiesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.workspaces#ResourceNotFoundException":
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
async function deserializeAws_json1_1DescribeIpGroupsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeIpGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeIpGroupsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeIpGroupsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeIpGroupsCommand = deserializeAws_json1_1DescribeIpGroupsCommand;
async function deserializeAws_json1_1DescribeIpGroupsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeTagsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeTagsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeTagsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeTagsCommand = deserializeAws_json1_1DescribeTagsCommand;
async function deserializeAws_json1_1DescribeTagsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.workspaces#ResourceNotFoundException":
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
async function deserializeAws_json1_1DescribeWorkspaceBundlesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeWorkspaceBundlesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeWorkspaceBundlesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeWorkspaceBundlesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeWorkspaceBundlesCommand = deserializeAws_json1_1DescribeWorkspaceBundlesCommand;
async function deserializeAws_json1_1DescribeWorkspaceBundlesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeWorkspaceDirectoriesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeWorkspaceDirectoriesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeWorkspaceDirectoriesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeWorkspaceDirectoriesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeWorkspaceDirectoriesCommand = deserializeAws_json1_1DescribeWorkspaceDirectoriesCommand;
async function deserializeAws_json1_1DescribeWorkspaceDirectoriesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeWorkspaceImagesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeWorkspaceImagesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeWorkspaceImagesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeWorkspaceImagesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeWorkspaceImagesCommand = deserializeAws_json1_1DescribeWorkspaceImagesCommand;
async function deserializeAws_json1_1DescribeWorkspaceImagesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeWorkspaceSnapshotsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeWorkspaceSnapshotsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeWorkspaceSnapshotsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeWorkspaceSnapshotsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeWorkspaceSnapshotsCommand = deserializeAws_json1_1DescribeWorkspaceSnapshotsCommand;
async function deserializeAws_json1_1DescribeWorkspaceSnapshotsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.workspaces#ResourceNotFoundException":
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
async function deserializeAws_json1_1DescribeWorkspacesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeWorkspacesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeWorkspacesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeWorkspacesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeWorkspacesCommand = deserializeAws_json1_1DescribeWorkspacesCommand;
async function deserializeAws_json1_1DescribeWorkspacesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceUnavailableException":
        case "com.amazonaws.workspaces#ResourceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeWorkspacesConnectionStatusCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeWorkspacesConnectionStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeWorkspacesConnectionStatusResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeWorkspacesConnectionStatusResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeWorkspacesConnectionStatusCommand = deserializeAws_json1_1DescribeWorkspacesConnectionStatusCommand;
async function deserializeAws_json1_1DescribeWorkspacesConnectionStatusCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DisassociateIpGroupsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DisassociateIpGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisassociateIpGroupsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DisassociateIpGroupsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DisassociateIpGroupsCommand = deserializeAws_json1_1DisassociateIpGroupsCommand;
async function deserializeAws_json1_1DisassociateIpGroupsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidResourceStateException":
        case "com.amazonaws.workspaces#InvalidResourceStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.workspaces#ResourceNotFoundException":
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
async function deserializeAws_json1_1ImportWorkspaceImageCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ImportWorkspaceImageCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ImportWorkspaceImageResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ImportWorkspaceImageResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ImportWorkspaceImageCommand = deserializeAws_json1_1ImportWorkspaceImageCommand;
async function deserializeAws_json1_1ImportWorkspaceImageCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotSupportedException":
        case "com.amazonaws.workspaces#OperationNotSupportedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.workspaces#ResourceAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceLimitExceededException":
        case "com.amazonaws.workspaces#ResourceLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.workspaces#ResourceNotFoundException":
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
async function deserializeAws_json1_1ListAvailableManagementCidrRangesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListAvailableManagementCidrRangesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAvailableManagementCidrRangesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListAvailableManagementCidrRangesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListAvailableManagementCidrRangesCommand = deserializeAws_json1_1ListAvailableManagementCidrRangesCommand;
async function deserializeAws_json1_1ListAvailableManagementCidrRangesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1MigrateWorkspaceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1MigrateWorkspaceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1MigrateWorkspaceResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "MigrateWorkspaceResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1MigrateWorkspaceCommand = deserializeAws_json1_1MigrateWorkspaceCommand;
async function deserializeAws_json1_1MigrateWorkspaceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationInProgressException":
        case "com.amazonaws.workspaces#OperationInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotSupportedException":
        case "com.amazonaws.workspaces#OperationNotSupportedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.workspaces#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceUnavailableException":
        case "com.amazonaws.workspaces#ResourceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ModifyAccountCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ModifyAccountCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ModifyAccountResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ModifyAccountResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ModifyAccountCommand = deserializeAws_json1_1ModifyAccountCommand;
async function deserializeAws_json1_1ModifyAccountCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidResourceStateException":
        case "com.amazonaws.workspaces#InvalidResourceStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.workspaces#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceUnavailableException":
        case "com.amazonaws.workspaces#ResourceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ModifyClientPropertiesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ModifyClientPropertiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ModifyClientPropertiesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ModifyClientPropertiesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ModifyClientPropertiesCommand = deserializeAws_json1_1ModifyClientPropertiesCommand;
async function deserializeAws_json1_1ModifyClientPropertiesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.workspaces#ResourceNotFoundException":
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
async function deserializeAws_json1_1ModifySelfservicePermissionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ModifySelfservicePermissionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ModifySelfservicePermissionsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ModifySelfservicePermissionsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ModifySelfservicePermissionsCommand = deserializeAws_json1_1ModifySelfservicePermissionsCommand;
async function deserializeAws_json1_1ModifySelfservicePermissionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.workspaces#ResourceNotFoundException":
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
async function deserializeAws_json1_1ModifyWorkspaceAccessPropertiesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ModifyWorkspaceAccessPropertiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ModifyWorkspaceAccessPropertiesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ModifyWorkspaceAccessPropertiesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ModifyWorkspaceAccessPropertiesCommand = deserializeAws_json1_1ModifyWorkspaceAccessPropertiesCommand;
async function deserializeAws_json1_1ModifyWorkspaceAccessPropertiesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.workspaces#ResourceNotFoundException":
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
async function deserializeAws_json1_1ModifyWorkspaceCreationPropertiesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ModifyWorkspaceCreationPropertiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ModifyWorkspaceCreationPropertiesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ModifyWorkspaceCreationPropertiesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ModifyWorkspaceCreationPropertiesCommand = deserializeAws_json1_1ModifyWorkspaceCreationPropertiesCommand;
async function deserializeAws_json1_1ModifyWorkspaceCreationPropertiesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.workspaces#ResourceNotFoundException":
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
async function deserializeAws_json1_1ModifyWorkspacePropertiesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ModifyWorkspacePropertiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ModifyWorkspacePropertiesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ModifyWorkspacePropertiesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ModifyWorkspacePropertiesCommand = deserializeAws_json1_1ModifyWorkspacePropertiesCommand;
async function deserializeAws_json1_1ModifyWorkspacePropertiesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidResourceStateException":
        case "com.amazonaws.workspaces#InvalidResourceStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationInProgressException":
        case "com.amazonaws.workspaces#OperationInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.workspaces#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceUnavailableException":
        case "com.amazonaws.workspaces#ResourceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedWorkspaceConfigurationException":
        case "com.amazonaws.workspaces#UnsupportedWorkspaceConfigurationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedWorkspaceConfigurationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ModifyWorkspaceStateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ModifyWorkspaceStateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ModifyWorkspaceStateResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ModifyWorkspaceStateResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ModifyWorkspaceStateCommand = deserializeAws_json1_1ModifyWorkspaceStateCommand;
async function deserializeAws_json1_1ModifyWorkspaceStateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidResourceStateException":
        case "com.amazonaws.workspaces#InvalidResourceStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.workspaces#ResourceNotFoundException":
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
async function deserializeAws_json1_1RebootWorkspacesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RebootWorkspacesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RebootWorkspacesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RebootWorkspacesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RebootWorkspacesCommand = deserializeAws_json1_1RebootWorkspacesCommand;
async function deserializeAws_json1_1RebootWorkspacesCommandError(output, context) {
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
async function deserializeAws_json1_1RebuildWorkspacesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RebuildWorkspacesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RebuildWorkspacesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RebuildWorkspacesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RebuildWorkspacesCommand = deserializeAws_json1_1RebuildWorkspacesCommand;
async function deserializeAws_json1_1RebuildWorkspacesCommandError(output, context) {
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
async function deserializeAws_json1_1RegisterWorkspaceDirectoryCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RegisterWorkspaceDirectoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RegisterWorkspaceDirectoryResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RegisterWorkspaceDirectoryResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RegisterWorkspaceDirectoryCommand = deserializeAws_json1_1RegisterWorkspaceDirectoryCommand;
async function deserializeAws_json1_1RegisterWorkspaceDirectoryCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidResourceStateException":
        case "com.amazonaws.workspaces#InvalidResourceStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotSupportedException":
        case "com.amazonaws.workspaces#OperationNotSupportedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceLimitExceededException":
        case "com.amazonaws.workspaces#ResourceLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.workspaces#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedNetworkConfigurationException":
        case "com.amazonaws.workspaces#UnsupportedNetworkConfigurationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedNetworkConfigurationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WorkspacesDefaultRoleNotFoundException":
        case "com.amazonaws.workspaces#WorkspacesDefaultRoleNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WorkspacesDefaultRoleNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1RestoreWorkspaceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RestoreWorkspaceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RestoreWorkspaceResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RestoreWorkspaceResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RestoreWorkspaceCommand = deserializeAws_json1_1RestoreWorkspaceCommand;
async function deserializeAws_json1_1RestoreWorkspaceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.workspaces#ResourceNotFoundException":
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
async function deserializeAws_json1_1RevokeIpRulesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RevokeIpRulesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RevokeIpRulesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RevokeIpRulesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RevokeIpRulesCommand = deserializeAws_json1_1RevokeIpRulesCommand;
async function deserializeAws_json1_1RevokeIpRulesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidResourceStateException":
        case "com.amazonaws.workspaces#InvalidResourceStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.workspaces#ResourceNotFoundException":
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
async function deserializeAws_json1_1StartWorkspacesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartWorkspacesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartWorkspacesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartWorkspacesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartWorkspacesCommand = deserializeAws_json1_1StartWorkspacesCommand;
async function deserializeAws_json1_1StartWorkspacesCommandError(output, context) {
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
async function deserializeAws_json1_1StopWorkspacesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StopWorkspacesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopWorkspacesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StopWorkspacesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StopWorkspacesCommand = deserializeAws_json1_1StopWorkspacesCommand;
async function deserializeAws_json1_1StopWorkspacesCommandError(output, context) {
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
async function deserializeAws_json1_1TerminateWorkspacesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1TerminateWorkspacesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1TerminateWorkspacesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "TerminateWorkspacesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1TerminateWorkspacesCommand = deserializeAws_json1_1TerminateWorkspacesCommand;
async function deserializeAws_json1_1TerminateWorkspacesCommandError(output, context) {
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
async function deserializeAws_json1_1UpdateRulesOfIpGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateRulesOfIpGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateRulesOfIpGroupResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateRulesOfIpGroupResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateRulesOfIpGroupCommand = deserializeAws_json1_1UpdateRulesOfIpGroupCommand;
async function deserializeAws_json1_1UpdateRulesOfIpGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidResourceStateException":
        case "com.amazonaws.workspaces#InvalidResourceStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceLimitExceededException":
        case "com.amazonaws.workspaces#ResourceLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.workspaces#ResourceNotFoundException":
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
const deserializeAws_json1_1AccessDeniedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AccessDeniedException(body, context);
    const contents = Object.assign({ name: "AccessDeniedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidParameterValuesExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidParameterValuesException(body, context);
    const contents = Object.assign({ name: "InvalidParameterValuesException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidResourceStateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidResourceStateException(body, context);
    const contents = Object.assign({ name: "InvalidResourceStateException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1OperationInProgressExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OperationInProgressException(body, context);
    const contents = Object.assign({ name: "OperationInProgressException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1OperationNotSupportedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OperationNotSupportedException(body, context);
    const contents = Object.assign({ name: "OperationNotSupportedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceAlreadyExistsException(body, context);
    const contents = Object.assign({ name: "ResourceAlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceAssociatedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceAssociatedException(body, context);
    const contents = Object.assign({ name: "ResourceAssociatedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceCreationFailedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceCreationFailedException(body, context);
    const contents = Object.assign({ name: "ResourceCreationFailedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceLimitExceededException(body, context);
    const contents = Object.assign({ name: "ResourceLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceNotFoundException(body, context);
    const contents = Object.assign({ name: "ResourceNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceUnavailableExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceUnavailableException(body, context);
    const contents = Object.assign({ name: "ResourceUnavailableException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1UnsupportedNetworkConfigurationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnsupportedNetworkConfigurationException(body, context);
    const contents = Object.assign({ name: "UnsupportedNetworkConfigurationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1UnsupportedWorkspaceConfigurationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnsupportedWorkspaceConfigurationException(body, context);
    const contents = Object.assign({ name: "UnsupportedWorkspaceConfigurationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1WorkspacesDefaultRoleNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1WorkspacesDefaultRoleNotFoundException(body, context);
    const contents = Object.assign({ name: "WorkspacesDefaultRoleNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1AssociateIpGroupsRequest = (input, context) => {
    const bodyParams = {};
    if (input.DirectoryId !== undefined) {
        bodyParams["DirectoryId"] = input.DirectoryId;
    }
    if (input.GroupIds !== undefined) {
        bodyParams["GroupIds"] = serializeAws_json1_1IpGroupIdList(input.GroupIds, context);
    }
    return bodyParams;
};
const serializeAws_json1_1AuthorizeIpRulesRequest = (input, context) => {
    const bodyParams = {};
    if (input.GroupId !== undefined) {
        bodyParams["GroupId"] = input.GroupId;
    }
    if (input.UserRules !== undefined) {
        bodyParams["UserRules"] = serializeAws_json1_1IpRuleList(input.UserRules, context);
    }
    return bodyParams;
};
const serializeAws_json1_1BundleIdList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ClientProperties = (input, context) => {
    const bodyParams = {};
    if (input.ReconnectEnabled !== undefined) {
        bodyParams["ReconnectEnabled"] = input.ReconnectEnabled;
    }
    return bodyParams;
};
const serializeAws_json1_1CopyWorkspaceImageRequest = (input, context) => {
    const bodyParams = {};
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.SourceImageId !== undefined) {
        bodyParams["SourceImageId"] = input.SourceImageId;
    }
    if (input.SourceRegion !== undefined) {
        bodyParams["SourceRegion"] = input.SourceRegion;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateIpGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.GroupDesc !== undefined) {
        bodyParams["GroupDesc"] = input.GroupDesc;
    }
    if (input.GroupName !== undefined) {
        bodyParams["GroupName"] = input.GroupName;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    if (input.UserRules !== undefined) {
        bodyParams["UserRules"] = serializeAws_json1_1IpRuleList(input.UserRules, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateTagsRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceId !== undefined) {
        bodyParams["ResourceId"] = input.ResourceId;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateWorkspacesRequest = (input, context) => {
    const bodyParams = {};
    if (input.Workspaces !== undefined) {
        bodyParams["Workspaces"] = serializeAws_json1_1WorkspaceRequestList(input.Workspaces, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteIpGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.GroupId !== undefined) {
        bodyParams["GroupId"] = input.GroupId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteTagsRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceId !== undefined) {
        bodyParams["ResourceId"] = input.ResourceId;
    }
    if (input.TagKeys !== undefined) {
        bodyParams["TagKeys"] = serializeAws_json1_1TagKeyList(input.TagKeys, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteWorkspaceImageRequest = (input, context) => {
    const bodyParams = {};
    if (input.ImageId !== undefined) {
        bodyParams["ImageId"] = input.ImageId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeregisterWorkspaceDirectoryRequest = (input, context) => {
    const bodyParams = {};
    if (input.DirectoryId !== undefined) {
        bodyParams["DirectoryId"] = input.DirectoryId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeAccountModificationsRequest = (input, context) => {
    const bodyParams = {};
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeAccountRequest = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_1DescribeClientPropertiesRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceIds !== undefined) {
        bodyParams["ResourceIds"] = serializeAws_json1_1ResourceIdList(input.ResourceIds, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeIpGroupsRequest = (input, context) => {
    const bodyParams = {};
    if (input.GroupIds !== undefined) {
        bodyParams["GroupIds"] = serializeAws_json1_1IpGroupIdList(input.GroupIds, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeTagsRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceId !== undefined) {
        bodyParams["ResourceId"] = input.ResourceId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeWorkspaceBundlesRequest = (input, context) => {
    const bodyParams = {};
    if (input.BundleIds !== undefined) {
        bodyParams["BundleIds"] = serializeAws_json1_1BundleIdList(input.BundleIds, context);
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.Owner !== undefined) {
        bodyParams["Owner"] = input.Owner;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeWorkspaceDirectoriesRequest = (input, context) => {
    const bodyParams = {};
    if (input.DirectoryIds !== undefined) {
        bodyParams["DirectoryIds"] = serializeAws_json1_1DirectoryIdList(input.DirectoryIds, context);
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeWorkspaceImagesRequest = (input, context) => {
    const bodyParams = {};
    if (input.ImageIds !== undefined) {
        bodyParams["ImageIds"] = serializeAws_json1_1WorkspaceImageIdList(input.ImageIds, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeWorkspaceSnapshotsRequest = (input, context) => {
    const bodyParams = {};
    if (input.WorkspaceId !== undefined) {
        bodyParams["WorkspaceId"] = input.WorkspaceId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeWorkspacesConnectionStatusRequest = (input, context) => {
    const bodyParams = {};
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.WorkspaceIds !== undefined) {
        bodyParams["WorkspaceIds"] = serializeAws_json1_1WorkspaceIdList(input.WorkspaceIds, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeWorkspacesRequest = (input, context) => {
    const bodyParams = {};
    if (input.BundleId !== undefined) {
        bodyParams["BundleId"] = input.BundleId;
    }
    if (input.DirectoryId !== undefined) {
        bodyParams["DirectoryId"] = input.DirectoryId;
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.UserName !== undefined) {
        bodyParams["UserName"] = input.UserName;
    }
    if (input.WorkspaceIds !== undefined) {
        bodyParams["WorkspaceIds"] = serializeAws_json1_1WorkspaceIdList(input.WorkspaceIds, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DirectoryIdList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1DisassociateIpGroupsRequest = (input, context) => {
    const bodyParams = {};
    if (input.DirectoryId !== undefined) {
        bodyParams["DirectoryId"] = input.DirectoryId;
    }
    if (input.GroupIds !== undefined) {
        bodyParams["GroupIds"] = serializeAws_json1_1IpGroupIdList(input.GroupIds, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ImportWorkspaceImageRequest = (input, context) => {
    const bodyParams = {};
    if (input.Ec2ImageId !== undefined) {
        bodyParams["Ec2ImageId"] = input.Ec2ImageId;
    }
    if (input.ImageDescription !== undefined) {
        bodyParams["ImageDescription"] = input.ImageDescription;
    }
    if (input.ImageName !== undefined) {
        bodyParams["ImageName"] = input.ImageName;
    }
    if (input.IngestionProcess !== undefined) {
        bodyParams["IngestionProcess"] = input.IngestionProcess;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1IpGroupIdList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1IpRevokedRuleList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1IpRuleItem = (input, context) => {
    const bodyParams = {};
    if (input.ipRule !== undefined) {
        bodyParams["ipRule"] = input.ipRule;
    }
    if (input.ruleDesc !== undefined) {
        bodyParams["ruleDesc"] = input.ruleDesc;
    }
    return bodyParams;
};
const serializeAws_json1_1IpRuleList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1IpRuleItem(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ListAvailableManagementCidrRangesRequest = (input, context) => {
    const bodyParams = {};
    if (input.ManagementCidrRangeConstraint !== undefined) {
        bodyParams["ManagementCidrRangeConstraint"] =
            input.ManagementCidrRangeConstraint;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1MigrateWorkspaceRequest = (input, context) => {
    const bodyParams = {};
    if (input.BundleId !== undefined) {
        bodyParams["BundleId"] = input.BundleId;
    }
    if (input.SourceWorkspaceId !== undefined) {
        bodyParams["SourceWorkspaceId"] = input.SourceWorkspaceId;
    }
    return bodyParams;
};
const serializeAws_json1_1ModifyAccountRequest = (input, context) => {
    const bodyParams = {};
    if (input.DedicatedTenancyManagementCidrRange !== undefined) {
        bodyParams["DedicatedTenancyManagementCidrRange"] =
            input.DedicatedTenancyManagementCidrRange;
    }
    if (input.DedicatedTenancySupport !== undefined) {
        bodyParams["DedicatedTenancySupport"] = input.DedicatedTenancySupport;
    }
    return bodyParams;
};
const serializeAws_json1_1ModifyClientPropertiesRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClientProperties !== undefined) {
        bodyParams["ClientProperties"] = serializeAws_json1_1ClientProperties(input.ClientProperties, context);
    }
    if (input.ResourceId !== undefined) {
        bodyParams["ResourceId"] = input.ResourceId;
    }
    return bodyParams;
};
const serializeAws_json1_1ModifySelfservicePermissionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceId !== undefined) {
        bodyParams["ResourceId"] = input.ResourceId;
    }
    if (input.SelfservicePermissions !== undefined) {
        bodyParams["SelfservicePermissions"] = serializeAws_json1_1SelfservicePermissions(input.SelfservicePermissions, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ModifyWorkspaceAccessPropertiesRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceId !== undefined) {
        bodyParams["ResourceId"] = input.ResourceId;
    }
    if (input.WorkspaceAccessProperties !== undefined) {
        bodyParams["WorkspaceAccessProperties"] = serializeAws_json1_1WorkspaceAccessProperties(input.WorkspaceAccessProperties, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ModifyWorkspaceCreationPropertiesRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceId !== undefined) {
        bodyParams["ResourceId"] = input.ResourceId;
    }
    if (input.WorkspaceCreationProperties !== undefined) {
        bodyParams["WorkspaceCreationProperties"] = serializeAws_json1_1WorkspaceCreationProperties(input.WorkspaceCreationProperties, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ModifyWorkspacePropertiesRequest = (input, context) => {
    const bodyParams = {};
    if (input.WorkspaceId !== undefined) {
        bodyParams["WorkspaceId"] = input.WorkspaceId;
    }
    if (input.WorkspaceProperties !== undefined) {
        bodyParams["WorkspaceProperties"] = serializeAws_json1_1WorkspaceProperties(input.WorkspaceProperties, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ModifyWorkspaceStateRequest = (input, context) => {
    const bodyParams = {};
    if (input.WorkspaceId !== undefined) {
        bodyParams["WorkspaceId"] = input.WorkspaceId;
    }
    if (input.WorkspaceState !== undefined) {
        bodyParams["WorkspaceState"] = input.WorkspaceState;
    }
    return bodyParams;
};
const serializeAws_json1_1RebootRequest = (input, context) => {
    const bodyParams = {};
    if (input.WorkspaceId !== undefined) {
        bodyParams["WorkspaceId"] = input.WorkspaceId;
    }
    return bodyParams;
};
const serializeAws_json1_1RebootWorkspaceRequests = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1RebootRequest(entry, context));
    }
    return contents;
};
const serializeAws_json1_1RebootWorkspacesRequest = (input, context) => {
    const bodyParams = {};
    if (input.RebootWorkspaceRequests !== undefined) {
        bodyParams["RebootWorkspaceRequests"] = serializeAws_json1_1RebootWorkspaceRequests(input.RebootWorkspaceRequests, context);
    }
    return bodyParams;
};
const serializeAws_json1_1RebuildRequest = (input, context) => {
    const bodyParams = {};
    if (input.WorkspaceId !== undefined) {
        bodyParams["WorkspaceId"] = input.WorkspaceId;
    }
    return bodyParams;
};
const serializeAws_json1_1RebuildWorkspaceRequests = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1RebuildRequest(entry, context));
    }
    return contents;
};
const serializeAws_json1_1RebuildWorkspacesRequest = (input, context) => {
    const bodyParams = {};
    if (input.RebuildWorkspaceRequests !== undefined) {
        bodyParams["RebuildWorkspaceRequests"] = serializeAws_json1_1RebuildWorkspaceRequests(input.RebuildWorkspaceRequests, context);
    }
    return bodyParams;
};
const serializeAws_json1_1RegisterWorkspaceDirectoryRequest = (input, context) => {
    const bodyParams = {};
    if (input.DirectoryId !== undefined) {
        bodyParams["DirectoryId"] = input.DirectoryId;
    }
    if (input.EnableSelfService !== undefined) {
        bodyParams["EnableSelfService"] = input.EnableSelfService;
    }
    if (input.EnableWorkDocs !== undefined) {
        bodyParams["EnableWorkDocs"] = input.EnableWorkDocs;
    }
    if (input.SubnetIds !== undefined) {
        bodyParams["SubnetIds"] = serializeAws_json1_1SubnetIds(input.SubnetIds, context);
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    if (input.Tenancy !== undefined) {
        bodyParams["Tenancy"] = input.Tenancy;
    }
    return bodyParams;
};
const serializeAws_json1_1ResourceIdList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1RestoreWorkspaceRequest = (input, context) => {
    const bodyParams = {};
    if (input.WorkspaceId !== undefined) {
        bodyParams["WorkspaceId"] = input.WorkspaceId;
    }
    return bodyParams;
};
const serializeAws_json1_1RevokeIpRulesRequest = (input, context) => {
    const bodyParams = {};
    if (input.GroupId !== undefined) {
        bodyParams["GroupId"] = input.GroupId;
    }
    if (input.UserRules !== undefined) {
        bodyParams["UserRules"] = serializeAws_json1_1IpRevokedRuleList(input.UserRules, context);
    }
    return bodyParams;
};
const serializeAws_json1_1SelfservicePermissions = (input, context) => {
    const bodyParams = {};
    if (input.ChangeComputeType !== undefined) {
        bodyParams["ChangeComputeType"] = input.ChangeComputeType;
    }
    if (input.IncreaseVolumeSize !== undefined) {
        bodyParams["IncreaseVolumeSize"] = input.IncreaseVolumeSize;
    }
    if (input.RebuildWorkspace !== undefined) {
        bodyParams["RebuildWorkspace"] = input.RebuildWorkspace;
    }
    if (input.RestartWorkspace !== undefined) {
        bodyParams["RestartWorkspace"] = input.RestartWorkspace;
    }
    if (input.SwitchRunningMode !== undefined) {
        bodyParams["SwitchRunningMode"] = input.SwitchRunningMode;
    }
    return bodyParams;
};
const serializeAws_json1_1StartRequest = (input, context) => {
    const bodyParams = {};
    if (input.WorkspaceId !== undefined) {
        bodyParams["WorkspaceId"] = input.WorkspaceId;
    }
    return bodyParams;
};
const serializeAws_json1_1StartWorkspaceRequests = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1StartRequest(entry, context));
    }
    return contents;
};
const serializeAws_json1_1StartWorkspacesRequest = (input, context) => {
    const bodyParams = {};
    if (input.StartWorkspaceRequests !== undefined) {
        bodyParams["StartWorkspaceRequests"] = serializeAws_json1_1StartWorkspaceRequests(input.StartWorkspaceRequests, context);
    }
    return bodyParams;
};
const serializeAws_json1_1StopRequest = (input, context) => {
    const bodyParams = {};
    if (input.WorkspaceId !== undefined) {
        bodyParams["WorkspaceId"] = input.WorkspaceId;
    }
    return bodyParams;
};
const serializeAws_json1_1StopWorkspaceRequests = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1StopRequest(entry, context));
    }
    return contents;
};
const serializeAws_json1_1StopWorkspacesRequest = (input, context) => {
    const bodyParams = {};
    if (input.StopWorkspaceRequests !== undefined) {
        bodyParams["StopWorkspaceRequests"] = serializeAws_json1_1StopWorkspaceRequests(input.StopWorkspaceRequests, context);
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
const serializeAws_json1_1TerminateRequest = (input, context) => {
    const bodyParams = {};
    if (input.WorkspaceId !== undefined) {
        bodyParams["WorkspaceId"] = input.WorkspaceId;
    }
    return bodyParams;
};
const serializeAws_json1_1TerminateWorkspaceRequests = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1TerminateRequest(entry, context));
    }
    return contents;
};
const serializeAws_json1_1TerminateWorkspacesRequest = (input, context) => {
    const bodyParams = {};
    if (input.TerminateWorkspaceRequests !== undefined) {
        bodyParams["TerminateWorkspaceRequests"] = serializeAws_json1_1TerminateWorkspaceRequests(input.TerminateWorkspaceRequests, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateRulesOfIpGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.GroupId !== undefined) {
        bodyParams["GroupId"] = input.GroupId;
    }
    if (input.UserRules !== undefined) {
        bodyParams["UserRules"] = serializeAws_json1_1IpRuleList(input.UserRules, context);
    }
    return bodyParams;
};
const serializeAws_json1_1WorkspaceAccessProperties = (input, context) => {
    const bodyParams = {};
    if (input.DeviceTypeAndroid !== undefined) {
        bodyParams["DeviceTypeAndroid"] = input.DeviceTypeAndroid;
    }
    if (input.DeviceTypeChromeOs !== undefined) {
        bodyParams["DeviceTypeChromeOs"] = input.DeviceTypeChromeOs;
    }
    if (input.DeviceTypeIos !== undefined) {
        bodyParams["DeviceTypeIos"] = input.DeviceTypeIos;
    }
    if (input.DeviceTypeOsx !== undefined) {
        bodyParams["DeviceTypeOsx"] = input.DeviceTypeOsx;
    }
    if (input.DeviceTypeWeb !== undefined) {
        bodyParams["DeviceTypeWeb"] = input.DeviceTypeWeb;
    }
    if (input.DeviceTypeWindows !== undefined) {
        bodyParams["DeviceTypeWindows"] = input.DeviceTypeWindows;
    }
    if (input.DeviceTypeZeroClient !== undefined) {
        bodyParams["DeviceTypeZeroClient"] = input.DeviceTypeZeroClient;
    }
    return bodyParams;
};
const serializeAws_json1_1WorkspaceCreationProperties = (input, context) => {
    const bodyParams = {};
    if (input.CustomSecurityGroupId !== undefined) {
        bodyParams["CustomSecurityGroupId"] = input.CustomSecurityGroupId;
    }
    if (input.DefaultOu !== undefined) {
        bodyParams["DefaultOu"] = input.DefaultOu;
    }
    if (input.EnableInternetAccess !== undefined) {
        bodyParams["EnableInternetAccess"] = input.EnableInternetAccess;
    }
    if (input.EnableMaintenanceMode !== undefined) {
        bodyParams["EnableMaintenanceMode"] = input.EnableMaintenanceMode;
    }
    if (input.UserEnabledAsLocalAdministrator !== undefined) {
        bodyParams["UserEnabledAsLocalAdministrator"] =
            input.UserEnabledAsLocalAdministrator;
    }
    return bodyParams;
};
const serializeAws_json1_1WorkspaceIdList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1WorkspaceImageIdList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1WorkspaceProperties = (input, context) => {
    const bodyParams = {};
    if (input.ComputeTypeName !== undefined) {
        bodyParams["ComputeTypeName"] = input.ComputeTypeName;
    }
    if (input.RootVolumeSizeGib !== undefined) {
        bodyParams["RootVolumeSizeGib"] = input.RootVolumeSizeGib;
    }
    if (input.RunningMode !== undefined) {
        bodyParams["RunningMode"] = input.RunningMode;
    }
    if (input.RunningModeAutoStopTimeoutInMinutes !== undefined) {
        bodyParams["RunningModeAutoStopTimeoutInMinutes"] =
            input.RunningModeAutoStopTimeoutInMinutes;
    }
    if (input.UserVolumeSizeGib !== undefined) {
        bodyParams["UserVolumeSizeGib"] = input.UserVolumeSizeGib;
    }
    return bodyParams;
};
const serializeAws_json1_1WorkspaceRequest = (input, context) => {
    const bodyParams = {};
    if (input.BundleId !== undefined) {
        bodyParams["BundleId"] = input.BundleId;
    }
    if (input.DirectoryId !== undefined) {
        bodyParams["DirectoryId"] = input.DirectoryId;
    }
    if (input.RootVolumeEncryptionEnabled !== undefined) {
        bodyParams["RootVolumeEncryptionEnabled"] =
            input.RootVolumeEncryptionEnabled;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    if (input.UserName !== undefined) {
        bodyParams["UserName"] = input.UserName;
    }
    if (input.UserVolumeEncryptionEnabled !== undefined) {
        bodyParams["UserVolumeEncryptionEnabled"] =
            input.UserVolumeEncryptionEnabled;
    }
    if (input.VolumeEncryptionKey !== undefined) {
        bodyParams["VolumeEncryptionKey"] = input.VolumeEncryptionKey;
    }
    if (input.WorkspaceProperties !== undefined) {
        bodyParams["WorkspaceProperties"] = serializeAws_json1_1WorkspaceProperties(input.WorkspaceProperties, context);
    }
    return bodyParams;
};
const serializeAws_json1_1WorkspaceRequestList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1WorkspaceRequest(entry, context));
    }
    return contents;
};
const deserializeAws_json1_1AccessDeniedException = (output, context) => {
    let contents = {
        __type: "AccessDeniedException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1AccountModification = (output, context) => {
    let contents = {
        __type: "AccountModification",
        DedicatedTenancyManagementCidrRange: undefined,
        DedicatedTenancySupport: undefined,
        ErrorCode: undefined,
        ErrorMessage: undefined,
        ModificationState: undefined,
        StartTime: undefined
    };
    if (output.DedicatedTenancyManagementCidrRange !== undefined &&
        output.DedicatedTenancyManagementCidrRange !== null) {
        contents.DedicatedTenancyManagementCidrRange =
            output.DedicatedTenancyManagementCidrRange;
    }
    if (output.DedicatedTenancySupport !== undefined &&
        output.DedicatedTenancySupport !== null) {
        contents.DedicatedTenancySupport = output.DedicatedTenancySupport;
    }
    if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
        contents.ErrorCode = output.ErrorCode;
    }
    if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
        contents.ErrorMessage = output.ErrorMessage;
    }
    if (output.ModificationState !== undefined &&
        output.ModificationState !== null) {
        contents.ModificationState = output.ModificationState;
    }
    if (output.StartTime !== undefined && output.StartTime !== null) {
        contents.StartTime = new Date(Math.round(output.StartTime * 1000));
    }
    return contents;
};
const deserializeAws_json1_1AccountModificationList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1AccountModification(entry, context));
};
const deserializeAws_json1_1AssociateIpGroupsResult = (output, context) => {
    let contents = {
        __type: "AssociateIpGroupsResult"
    };
    return contents;
};
const deserializeAws_json1_1AuthorizeIpRulesResult = (output, context) => {
    let contents = {
        __type: "AuthorizeIpRulesResult"
    };
    return contents;
};
const deserializeAws_json1_1BundleList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1WorkspaceBundle(entry, context));
};
const deserializeAws_json1_1ClientProperties = (output, context) => {
    let contents = {
        __type: "ClientProperties",
        ReconnectEnabled: undefined
    };
    if (output.ReconnectEnabled !== undefined &&
        output.ReconnectEnabled !== null) {
        contents.ReconnectEnabled = output.ReconnectEnabled;
    }
    return contents;
};
const deserializeAws_json1_1ClientPropertiesList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ClientPropertiesResult(entry, context));
};
const deserializeAws_json1_1ClientPropertiesResult = (output, context) => {
    let contents = {
        __type: "ClientPropertiesResult",
        ClientProperties: undefined,
        ResourceId: undefined
    };
    if (output.ClientProperties !== undefined &&
        output.ClientProperties !== null) {
        contents.ClientProperties = deserializeAws_json1_1ClientProperties(output.ClientProperties, context);
    }
    if (output.ResourceId !== undefined && output.ResourceId !== null) {
        contents.ResourceId = output.ResourceId;
    }
    return contents;
};
const deserializeAws_json1_1ComputeType = (output, context) => {
    let contents = {
        __type: "ComputeType",
        Name: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1CopyWorkspaceImageResult = (output, context) => {
    let contents = {
        __type: "CopyWorkspaceImageResult",
        ImageId: undefined
    };
    if (output.ImageId !== undefined && output.ImageId !== null) {
        contents.ImageId = output.ImageId;
    }
    return contents;
};
const deserializeAws_json1_1CreateIpGroupResult = (output, context) => {
    let contents = {
        __type: "CreateIpGroupResult",
        GroupId: undefined
    };
    if (output.GroupId !== undefined && output.GroupId !== null) {
        contents.GroupId = output.GroupId;
    }
    return contents;
};
const deserializeAws_json1_1CreateTagsResult = (output, context) => {
    let contents = {
        __type: "CreateTagsResult"
    };
    return contents;
};
const deserializeAws_json1_1CreateWorkspacesResult = (output, context) => {
    let contents = {
        __type: "CreateWorkspacesResult",
        FailedRequests: undefined,
        PendingRequests: undefined
    };
    if (output.FailedRequests !== undefined && output.FailedRequests !== null) {
        contents.FailedRequests = deserializeAws_json1_1FailedCreateWorkspaceRequests(output.FailedRequests, context);
    }
    if (output.PendingRequests !== undefined && output.PendingRequests !== null) {
        contents.PendingRequests = deserializeAws_json1_1WorkspaceList(output.PendingRequests, context);
    }
    return contents;
};
const deserializeAws_json1_1DedicatedTenancyCidrRangeList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1DefaultWorkspaceCreationProperties = (output, context) => {
    let contents = {
        __type: "DefaultWorkspaceCreationProperties",
        CustomSecurityGroupId: undefined,
        DefaultOu: undefined,
        EnableInternetAccess: undefined,
        EnableMaintenanceMode: undefined,
        EnableWorkDocs: undefined,
        UserEnabledAsLocalAdministrator: undefined
    };
    if (output.CustomSecurityGroupId !== undefined &&
        output.CustomSecurityGroupId !== null) {
        contents.CustomSecurityGroupId = output.CustomSecurityGroupId;
    }
    if (output.DefaultOu !== undefined && output.DefaultOu !== null) {
        contents.DefaultOu = output.DefaultOu;
    }
    if (output.EnableInternetAccess !== undefined &&
        output.EnableInternetAccess !== null) {
        contents.EnableInternetAccess = output.EnableInternetAccess;
    }
    if (output.EnableMaintenanceMode !== undefined &&
        output.EnableMaintenanceMode !== null) {
        contents.EnableMaintenanceMode = output.EnableMaintenanceMode;
    }
    if (output.EnableWorkDocs !== undefined && output.EnableWorkDocs !== null) {
        contents.EnableWorkDocs = output.EnableWorkDocs;
    }
    if (output.UserEnabledAsLocalAdministrator !== undefined &&
        output.UserEnabledAsLocalAdministrator !== null) {
        contents.UserEnabledAsLocalAdministrator =
            output.UserEnabledAsLocalAdministrator;
    }
    return contents;
};
const deserializeAws_json1_1DeleteIpGroupResult = (output, context) => {
    let contents = {
        __type: "DeleteIpGroupResult"
    };
    return contents;
};
const deserializeAws_json1_1DeleteTagsResult = (output, context) => {
    let contents = {
        __type: "DeleteTagsResult"
    };
    return contents;
};
const deserializeAws_json1_1DeleteWorkspaceImageResult = (output, context) => {
    let contents = {
        __type: "DeleteWorkspaceImageResult"
    };
    return contents;
};
const deserializeAws_json1_1DeregisterWorkspaceDirectoryResult = (output, context) => {
    let contents = {
        __type: "DeregisterWorkspaceDirectoryResult"
    };
    return contents;
};
const deserializeAws_json1_1DescribeAccountModificationsResult = (output, context) => {
    let contents = {
        __type: "DescribeAccountModificationsResult",
        AccountModifications: undefined,
        NextToken: undefined
    };
    if (output.AccountModifications !== undefined &&
        output.AccountModifications !== null) {
        contents.AccountModifications = deserializeAws_json1_1AccountModificationList(output.AccountModifications, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeAccountResult = (output, context) => {
    let contents = {
        __type: "DescribeAccountResult",
        DedicatedTenancyManagementCidrRange: undefined,
        DedicatedTenancySupport: undefined
    };
    if (output.DedicatedTenancyManagementCidrRange !== undefined &&
        output.DedicatedTenancyManagementCidrRange !== null) {
        contents.DedicatedTenancyManagementCidrRange =
            output.DedicatedTenancyManagementCidrRange;
    }
    if (output.DedicatedTenancySupport !== undefined &&
        output.DedicatedTenancySupport !== null) {
        contents.DedicatedTenancySupport = output.DedicatedTenancySupport;
    }
    return contents;
};
const deserializeAws_json1_1DescribeClientPropertiesResult = (output, context) => {
    let contents = {
        __type: "DescribeClientPropertiesResult",
        ClientPropertiesList: undefined
    };
    if (output.ClientPropertiesList !== undefined &&
        output.ClientPropertiesList !== null) {
        contents.ClientPropertiesList = deserializeAws_json1_1ClientPropertiesList(output.ClientPropertiesList, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeIpGroupsResult = (output, context) => {
    let contents = {
        __type: "DescribeIpGroupsResult",
        NextToken: undefined,
        Result: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Result !== undefined && output.Result !== null) {
        contents.Result = deserializeAws_json1_1WorkspacesIpGroupsList(output.Result, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeTagsResult = (output, context) => {
    let contents = {
        __type: "DescribeTagsResult",
        TagList: undefined
    };
    if (output.TagList !== undefined && output.TagList !== null) {
        contents.TagList = deserializeAws_json1_1TagList(output.TagList, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeWorkspaceBundlesResult = (output, context) => {
    let contents = {
        __type: "DescribeWorkspaceBundlesResult",
        Bundles: undefined,
        NextToken: undefined
    };
    if (output.Bundles !== undefined && output.Bundles !== null) {
        contents.Bundles = deserializeAws_json1_1BundleList(output.Bundles, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeWorkspaceDirectoriesResult = (output, context) => {
    let contents = {
        __type: "DescribeWorkspaceDirectoriesResult",
        Directories: undefined,
        NextToken: undefined
    };
    if (output.Directories !== undefined && output.Directories !== null) {
        contents.Directories = deserializeAws_json1_1DirectoryList(output.Directories, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeWorkspaceImagesResult = (output, context) => {
    let contents = {
        __type: "DescribeWorkspaceImagesResult",
        Images: undefined,
        NextToken: undefined
    };
    if (output.Images !== undefined && output.Images !== null) {
        contents.Images = deserializeAws_json1_1WorkspaceImageList(output.Images, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeWorkspaceSnapshotsResult = (output, context) => {
    let contents = {
        __type: "DescribeWorkspaceSnapshotsResult",
        RebuildSnapshots: undefined,
        RestoreSnapshots: undefined
    };
    if (output.RebuildSnapshots !== undefined &&
        output.RebuildSnapshots !== null) {
        contents.RebuildSnapshots = deserializeAws_json1_1SnapshotList(output.RebuildSnapshots, context);
    }
    if (output.RestoreSnapshots !== undefined &&
        output.RestoreSnapshots !== null) {
        contents.RestoreSnapshots = deserializeAws_json1_1SnapshotList(output.RestoreSnapshots, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeWorkspacesConnectionStatusResult = (output, context) => {
    let contents = {
        __type: "DescribeWorkspacesConnectionStatusResult",
        NextToken: undefined,
        WorkspacesConnectionStatus: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.WorkspacesConnectionStatus !== undefined &&
        output.WorkspacesConnectionStatus !== null) {
        contents.WorkspacesConnectionStatus = deserializeAws_json1_1WorkspaceConnectionStatusList(output.WorkspacesConnectionStatus, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeWorkspacesResult = (output, context) => {
    let contents = {
        __type: "DescribeWorkspacesResult",
        NextToken: undefined,
        Workspaces: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Workspaces !== undefined && output.Workspaces !== null) {
        contents.Workspaces = deserializeAws_json1_1WorkspaceList(output.Workspaces, context);
    }
    return contents;
};
const deserializeAws_json1_1DirectoryList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1WorkspaceDirectory(entry, context));
};
const deserializeAws_json1_1DisassociateIpGroupsResult = (output, context) => {
    let contents = {
        __type: "DisassociateIpGroupsResult"
    };
    return contents;
};
const deserializeAws_json1_1DnsIpAddresses = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1FailedCreateWorkspaceRequest = (output, context) => {
    let contents = {
        __type: "FailedCreateWorkspaceRequest",
        ErrorCode: undefined,
        ErrorMessage: undefined,
        WorkspaceRequest: undefined
    };
    if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
        contents.ErrorCode = output.ErrorCode;
    }
    if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
        contents.ErrorMessage = output.ErrorMessage;
    }
    if (output.WorkspaceRequest !== undefined &&
        output.WorkspaceRequest !== null) {
        contents.WorkspaceRequest = deserializeAws_json1_1WorkspaceRequest(output.WorkspaceRequest, context);
    }
    return contents;
};
const deserializeAws_json1_1FailedCreateWorkspaceRequests = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1FailedCreateWorkspaceRequest(entry, context));
};
const deserializeAws_json1_1FailedRebootWorkspaceRequests = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1FailedWorkspaceChangeRequest(entry, context));
};
const deserializeAws_json1_1FailedRebuildWorkspaceRequests = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1FailedWorkspaceChangeRequest(entry, context));
};
const deserializeAws_json1_1FailedStartWorkspaceRequests = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1FailedWorkspaceChangeRequest(entry, context));
};
const deserializeAws_json1_1FailedStopWorkspaceRequests = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1FailedWorkspaceChangeRequest(entry, context));
};
const deserializeAws_json1_1FailedTerminateWorkspaceRequests = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1FailedWorkspaceChangeRequest(entry, context));
};
const deserializeAws_json1_1FailedWorkspaceChangeRequest = (output, context) => {
    let contents = {
        __type: "FailedWorkspaceChangeRequest",
        ErrorCode: undefined,
        ErrorMessage: undefined,
        WorkspaceId: undefined
    };
    if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
        contents.ErrorCode = output.ErrorCode;
    }
    if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
        contents.ErrorMessage = output.ErrorMessage;
    }
    if (output.WorkspaceId !== undefined && output.WorkspaceId !== null) {
        contents.WorkspaceId = output.WorkspaceId;
    }
    return contents;
};
const deserializeAws_json1_1ImportWorkspaceImageResult = (output, context) => {
    let contents = {
        __type: "ImportWorkspaceImageResult",
        ImageId: undefined
    };
    if (output.ImageId !== undefined && output.ImageId !== null) {
        contents.ImageId = output.ImageId;
    }
    return contents;
};
const deserializeAws_json1_1InvalidParameterValuesException = (output, context) => {
    let contents = {
        __type: "InvalidParameterValuesException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidResourceStateException = (output, context) => {
    let contents = {
        __type: "InvalidResourceStateException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1IpGroupIdList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1IpRuleItem = (output, context) => {
    let contents = {
        __type: "IpRuleItem",
        ipRule: undefined,
        ruleDesc: undefined
    };
    if (output.ipRule !== undefined && output.ipRule !== null) {
        contents.ipRule = output.ipRule;
    }
    if (output.ruleDesc !== undefined && output.ruleDesc !== null) {
        contents.ruleDesc = output.ruleDesc;
    }
    return contents;
};
const deserializeAws_json1_1IpRuleList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1IpRuleItem(entry, context));
};
const deserializeAws_json1_1ListAvailableManagementCidrRangesResult = (output, context) => {
    let contents = {
        __type: "ListAvailableManagementCidrRangesResult",
        ManagementCidrRanges: undefined,
        NextToken: undefined
    };
    if (output.ManagementCidrRanges !== undefined &&
        output.ManagementCidrRanges !== null) {
        contents.ManagementCidrRanges = deserializeAws_json1_1DedicatedTenancyCidrRangeList(output.ManagementCidrRanges, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1MigrateWorkspaceResult = (output, context) => {
    let contents = {
        __type: "MigrateWorkspaceResult",
        SourceWorkspaceId: undefined,
        TargetWorkspaceId: undefined
    };
    if (output.SourceWorkspaceId !== undefined &&
        output.SourceWorkspaceId !== null) {
        contents.SourceWorkspaceId = output.SourceWorkspaceId;
    }
    if (output.TargetWorkspaceId !== undefined &&
        output.TargetWorkspaceId !== null) {
        contents.TargetWorkspaceId = output.TargetWorkspaceId;
    }
    return contents;
};
const deserializeAws_json1_1ModificationState = (output, context) => {
    let contents = {
        __type: "ModificationState",
        Resource: undefined,
        State: undefined
    };
    if (output.Resource !== undefined && output.Resource !== null) {
        contents.Resource = output.Resource;
    }
    if (output.State !== undefined && output.State !== null) {
        contents.State = output.State;
    }
    return contents;
};
const deserializeAws_json1_1ModificationStateList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ModificationState(entry, context));
};
const deserializeAws_json1_1ModifyAccountResult = (output, context) => {
    let contents = {
        __type: "ModifyAccountResult"
    };
    return contents;
};
const deserializeAws_json1_1ModifyClientPropertiesResult = (output, context) => {
    let contents = {
        __type: "ModifyClientPropertiesResult"
    };
    return contents;
};
const deserializeAws_json1_1ModifySelfservicePermissionsResult = (output, context) => {
    let contents = {
        __type: "ModifySelfservicePermissionsResult"
    };
    return contents;
};
const deserializeAws_json1_1ModifyWorkspaceAccessPropertiesResult = (output, context) => {
    let contents = {
        __type: "ModifyWorkspaceAccessPropertiesResult"
    };
    return contents;
};
const deserializeAws_json1_1ModifyWorkspaceCreationPropertiesResult = (output, context) => {
    let contents = {
        __type: "ModifyWorkspaceCreationPropertiesResult"
    };
    return contents;
};
const deserializeAws_json1_1ModifyWorkspacePropertiesResult = (output, context) => {
    let contents = {
        __type: "ModifyWorkspacePropertiesResult"
    };
    return contents;
};
const deserializeAws_json1_1ModifyWorkspaceStateResult = (output, context) => {
    let contents = {
        __type: "ModifyWorkspaceStateResult"
    };
    return contents;
};
const deserializeAws_json1_1OperatingSystem = (output, context) => {
    let contents = {
        __type: "OperatingSystem",
        Type: undefined
    };
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1OperationInProgressException = (output, context) => {
    let contents = {
        __type: "OperationInProgressException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1OperationNotSupportedException = (output, context) => {
    let contents = {
        __type: "OperationNotSupportedException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1RebootWorkspacesResult = (output, context) => {
    let contents = {
        __type: "RebootWorkspacesResult",
        FailedRequests: undefined
    };
    if (output.FailedRequests !== undefined && output.FailedRequests !== null) {
        contents.FailedRequests = deserializeAws_json1_1FailedRebootWorkspaceRequests(output.FailedRequests, context);
    }
    return contents;
};
const deserializeAws_json1_1RebuildWorkspacesResult = (output, context) => {
    let contents = {
        __type: "RebuildWorkspacesResult",
        FailedRequests: undefined
    };
    if (output.FailedRequests !== undefined && output.FailedRequests !== null) {
        contents.FailedRequests = deserializeAws_json1_1FailedRebuildWorkspaceRequests(output.FailedRequests, context);
    }
    return contents;
};
const deserializeAws_json1_1RegisterWorkspaceDirectoryResult = (output, context) => {
    let contents = {
        __type: "RegisterWorkspaceDirectoryResult"
    };
    return contents;
};
const deserializeAws_json1_1ResourceAlreadyExistsException = (output, context) => {
    let contents = {
        __type: "ResourceAlreadyExistsException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ResourceAssociatedException = (output, context) => {
    let contents = {
        __type: "ResourceAssociatedException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ResourceCreationFailedException = (output, context) => {
    let contents = {
        __type: "ResourceCreationFailedException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ResourceLimitExceededException = (output, context) => {
    let contents = {
        __type: "ResourceLimitExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ResourceNotFoundException = (output, context) => {
    let contents = {
        __type: "ResourceNotFoundException",
        ResourceId: undefined,
        message: undefined
    };
    if (output.ResourceId !== undefined && output.ResourceId !== null) {
        contents.ResourceId = output.ResourceId;
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ResourceUnavailableException = (output, context) => {
    let contents = {
        __type: "ResourceUnavailableException",
        ResourceId: undefined,
        message: undefined
    };
    if (output.ResourceId !== undefined && output.ResourceId !== null) {
        contents.ResourceId = output.ResourceId;
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1RestoreWorkspaceResult = (output, context) => {
    let contents = {
        __type: "RestoreWorkspaceResult"
    };
    return contents;
};
const deserializeAws_json1_1RevokeIpRulesResult = (output, context) => {
    let contents = {
        __type: "RevokeIpRulesResult"
    };
    return contents;
};
const deserializeAws_json1_1RootStorage = (output, context) => {
    let contents = {
        __type: "RootStorage",
        Capacity: undefined
    };
    if (output.Capacity !== undefined && output.Capacity !== null) {
        contents.Capacity = output.Capacity;
    }
    return contents;
};
const deserializeAws_json1_1SelfservicePermissions = (output, context) => {
    let contents = {
        __type: "SelfservicePermissions",
        ChangeComputeType: undefined,
        IncreaseVolumeSize: undefined,
        RebuildWorkspace: undefined,
        RestartWorkspace: undefined,
        SwitchRunningMode: undefined
    };
    if (output.ChangeComputeType !== undefined &&
        output.ChangeComputeType !== null) {
        contents.ChangeComputeType = output.ChangeComputeType;
    }
    if (output.IncreaseVolumeSize !== undefined &&
        output.IncreaseVolumeSize !== null) {
        contents.IncreaseVolumeSize = output.IncreaseVolumeSize;
    }
    if (output.RebuildWorkspace !== undefined &&
        output.RebuildWorkspace !== null) {
        contents.RebuildWorkspace = output.RebuildWorkspace;
    }
    if (output.RestartWorkspace !== undefined &&
        output.RestartWorkspace !== null) {
        contents.RestartWorkspace = output.RestartWorkspace;
    }
    if (output.SwitchRunningMode !== undefined &&
        output.SwitchRunningMode !== null) {
        contents.SwitchRunningMode = output.SwitchRunningMode;
    }
    return contents;
};
const deserializeAws_json1_1Snapshot = (output, context) => {
    let contents = {
        __type: "Snapshot",
        SnapshotTime: undefined
    };
    if (output.SnapshotTime !== undefined && output.SnapshotTime !== null) {
        contents.SnapshotTime = new Date(Math.round(output.SnapshotTime * 1000));
    }
    return contents;
};
const deserializeAws_json1_1SnapshotList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Snapshot(entry, context));
};
const deserializeAws_json1_1StartWorkspacesResult = (output, context) => {
    let contents = {
        __type: "StartWorkspacesResult",
        FailedRequests: undefined
    };
    if (output.FailedRequests !== undefined && output.FailedRequests !== null) {
        contents.FailedRequests = deserializeAws_json1_1FailedStartWorkspaceRequests(output.FailedRequests, context);
    }
    return contents;
};
const deserializeAws_json1_1StopWorkspacesResult = (output, context) => {
    let contents = {
        __type: "StopWorkspacesResult",
        FailedRequests: undefined
    };
    if (output.FailedRequests !== undefined && output.FailedRequests !== null) {
        contents.FailedRequests = deserializeAws_json1_1FailedStopWorkspaceRequests(output.FailedRequests, context);
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
const deserializeAws_json1_1TagList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Tag(entry, context));
};
const deserializeAws_json1_1TerminateWorkspacesResult = (output, context) => {
    let contents = {
        __type: "TerminateWorkspacesResult",
        FailedRequests: undefined
    };
    if (output.FailedRequests !== undefined && output.FailedRequests !== null) {
        contents.FailedRequests = deserializeAws_json1_1FailedTerminateWorkspaceRequests(output.FailedRequests, context);
    }
    return contents;
};
const deserializeAws_json1_1UnsupportedNetworkConfigurationException = (output, context) => {
    let contents = {
        __type: "UnsupportedNetworkConfigurationException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1UnsupportedWorkspaceConfigurationException = (output, context) => {
    let contents = {
        __type: "UnsupportedWorkspaceConfigurationException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1UpdateRulesOfIpGroupResult = (output, context) => {
    let contents = {
        __type: "UpdateRulesOfIpGroupResult"
    };
    return contents;
};
const deserializeAws_json1_1UserStorage = (output, context) => {
    let contents = {
        __type: "UserStorage",
        Capacity: undefined
    };
    if (output.Capacity !== undefined && output.Capacity !== null) {
        contents.Capacity = output.Capacity;
    }
    return contents;
};
const deserializeAws_json1_1Workspace = (output, context) => {
    let contents = {
        __type: "Workspace",
        BundleId: undefined,
        ComputerName: undefined,
        DirectoryId: undefined,
        ErrorCode: undefined,
        ErrorMessage: undefined,
        IpAddress: undefined,
        ModificationStates: undefined,
        RootVolumeEncryptionEnabled: undefined,
        State: undefined,
        SubnetId: undefined,
        UserName: undefined,
        UserVolumeEncryptionEnabled: undefined,
        VolumeEncryptionKey: undefined,
        WorkspaceId: undefined,
        WorkspaceProperties: undefined
    };
    if (output.BundleId !== undefined && output.BundleId !== null) {
        contents.BundleId = output.BundleId;
    }
    if (output.ComputerName !== undefined && output.ComputerName !== null) {
        contents.ComputerName = output.ComputerName;
    }
    if (output.DirectoryId !== undefined && output.DirectoryId !== null) {
        contents.DirectoryId = output.DirectoryId;
    }
    if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
        contents.ErrorCode = output.ErrorCode;
    }
    if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
        contents.ErrorMessage = output.ErrorMessage;
    }
    if (output.IpAddress !== undefined && output.IpAddress !== null) {
        contents.IpAddress = output.IpAddress;
    }
    if (output.ModificationStates !== undefined &&
        output.ModificationStates !== null) {
        contents.ModificationStates = deserializeAws_json1_1ModificationStateList(output.ModificationStates, context);
    }
    if (output.RootVolumeEncryptionEnabled !== undefined &&
        output.RootVolumeEncryptionEnabled !== null) {
        contents.RootVolumeEncryptionEnabled = output.RootVolumeEncryptionEnabled;
    }
    if (output.State !== undefined && output.State !== null) {
        contents.State = output.State;
    }
    if (output.SubnetId !== undefined && output.SubnetId !== null) {
        contents.SubnetId = output.SubnetId;
    }
    if (output.UserName !== undefined && output.UserName !== null) {
        contents.UserName = output.UserName;
    }
    if (output.UserVolumeEncryptionEnabled !== undefined &&
        output.UserVolumeEncryptionEnabled !== null) {
        contents.UserVolumeEncryptionEnabled = output.UserVolumeEncryptionEnabled;
    }
    if (output.VolumeEncryptionKey !== undefined &&
        output.VolumeEncryptionKey !== null) {
        contents.VolumeEncryptionKey = output.VolumeEncryptionKey;
    }
    if (output.WorkspaceId !== undefined && output.WorkspaceId !== null) {
        contents.WorkspaceId = output.WorkspaceId;
    }
    if (output.WorkspaceProperties !== undefined &&
        output.WorkspaceProperties !== null) {
        contents.WorkspaceProperties = deserializeAws_json1_1WorkspaceProperties(output.WorkspaceProperties, context);
    }
    return contents;
};
const deserializeAws_json1_1WorkspaceAccessProperties = (output, context) => {
    let contents = {
        __type: "WorkspaceAccessProperties",
        DeviceTypeAndroid: undefined,
        DeviceTypeChromeOs: undefined,
        DeviceTypeIos: undefined,
        DeviceTypeOsx: undefined,
        DeviceTypeWeb: undefined,
        DeviceTypeWindows: undefined,
        DeviceTypeZeroClient: undefined
    };
    if (output.DeviceTypeAndroid !== undefined &&
        output.DeviceTypeAndroid !== null) {
        contents.DeviceTypeAndroid = output.DeviceTypeAndroid;
    }
    if (output.DeviceTypeChromeOs !== undefined &&
        output.DeviceTypeChromeOs !== null) {
        contents.DeviceTypeChromeOs = output.DeviceTypeChromeOs;
    }
    if (output.DeviceTypeIos !== undefined && output.DeviceTypeIos !== null) {
        contents.DeviceTypeIos = output.DeviceTypeIos;
    }
    if (output.DeviceTypeOsx !== undefined && output.DeviceTypeOsx !== null) {
        contents.DeviceTypeOsx = output.DeviceTypeOsx;
    }
    if (output.DeviceTypeWeb !== undefined && output.DeviceTypeWeb !== null) {
        contents.DeviceTypeWeb = output.DeviceTypeWeb;
    }
    if (output.DeviceTypeWindows !== undefined &&
        output.DeviceTypeWindows !== null) {
        contents.DeviceTypeWindows = output.DeviceTypeWindows;
    }
    if (output.DeviceTypeZeroClient !== undefined &&
        output.DeviceTypeZeroClient !== null) {
        contents.DeviceTypeZeroClient = output.DeviceTypeZeroClient;
    }
    return contents;
};
const deserializeAws_json1_1WorkspaceBundle = (output, context) => {
    let contents = {
        __type: "WorkspaceBundle",
        BundleId: undefined,
        ComputeType: undefined,
        Description: undefined,
        ImageId: undefined,
        LastUpdatedTime: undefined,
        Name: undefined,
        Owner: undefined,
        RootStorage: undefined,
        UserStorage: undefined
    };
    if (output.BundleId !== undefined && output.BundleId !== null) {
        contents.BundleId = output.BundleId;
    }
    if (output.ComputeType !== undefined && output.ComputeType !== null) {
        contents.ComputeType = deserializeAws_json1_1ComputeType(output.ComputeType, context);
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.ImageId !== undefined && output.ImageId !== null) {
        contents.ImageId = output.ImageId;
    }
    if (output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null) {
        contents.LastUpdatedTime = new Date(Math.round(output.LastUpdatedTime * 1000));
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Owner !== undefined && output.Owner !== null) {
        contents.Owner = output.Owner;
    }
    if (output.RootStorage !== undefined && output.RootStorage !== null) {
        contents.RootStorage = deserializeAws_json1_1RootStorage(output.RootStorage, context);
    }
    if (output.UserStorage !== undefined && output.UserStorage !== null) {
        contents.UserStorage = deserializeAws_json1_1UserStorage(output.UserStorage, context);
    }
    return contents;
};
const deserializeAws_json1_1WorkspaceConnectionStatus = (output, context) => {
    let contents = {
        __type: "WorkspaceConnectionStatus",
        ConnectionState: undefined,
        ConnectionStateCheckTimestamp: undefined,
        LastKnownUserConnectionTimestamp: undefined,
        WorkspaceId: undefined
    };
    if (output.ConnectionState !== undefined && output.ConnectionState !== null) {
        contents.ConnectionState = output.ConnectionState;
    }
    if (output.ConnectionStateCheckTimestamp !== undefined &&
        output.ConnectionStateCheckTimestamp !== null) {
        contents.ConnectionStateCheckTimestamp = new Date(Math.round(output.ConnectionStateCheckTimestamp * 1000));
    }
    if (output.LastKnownUserConnectionTimestamp !== undefined &&
        output.LastKnownUserConnectionTimestamp !== null) {
        contents.LastKnownUserConnectionTimestamp = new Date(Math.round(output.LastKnownUserConnectionTimestamp * 1000));
    }
    if (output.WorkspaceId !== undefined && output.WorkspaceId !== null) {
        contents.WorkspaceId = output.WorkspaceId;
    }
    return contents;
};
const deserializeAws_json1_1WorkspaceConnectionStatusList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1WorkspaceConnectionStatus(entry, context));
};
const deserializeAws_json1_1WorkspaceDirectory = (output, context) => {
    let contents = {
        __type: "WorkspaceDirectory",
        Alias: undefined,
        CustomerUserName: undefined,
        DirectoryId: undefined,
        DirectoryName: undefined,
        DirectoryType: undefined,
        DnsIpAddresses: undefined,
        IamRoleId: undefined,
        RegistrationCode: undefined,
        SelfservicePermissions: undefined,
        State: undefined,
        SubnetIds: undefined,
        Tenancy: undefined,
        WorkspaceAccessProperties: undefined,
        WorkspaceCreationProperties: undefined,
        WorkspaceSecurityGroupId: undefined,
        ipGroupIds: undefined
    };
    if (output.Alias !== undefined && output.Alias !== null) {
        contents.Alias = output.Alias;
    }
    if (output.CustomerUserName !== undefined &&
        output.CustomerUserName !== null) {
        contents.CustomerUserName = output.CustomerUserName;
    }
    if (output.DirectoryId !== undefined && output.DirectoryId !== null) {
        contents.DirectoryId = output.DirectoryId;
    }
    if (output.DirectoryName !== undefined && output.DirectoryName !== null) {
        contents.DirectoryName = output.DirectoryName;
    }
    if (output.DirectoryType !== undefined && output.DirectoryType !== null) {
        contents.DirectoryType = output.DirectoryType;
    }
    if (output.DnsIpAddresses !== undefined && output.DnsIpAddresses !== null) {
        contents.DnsIpAddresses = deserializeAws_json1_1DnsIpAddresses(output.DnsIpAddresses, context);
    }
    if (output.IamRoleId !== undefined && output.IamRoleId !== null) {
        contents.IamRoleId = output.IamRoleId;
    }
    if (output.RegistrationCode !== undefined &&
        output.RegistrationCode !== null) {
        contents.RegistrationCode = output.RegistrationCode;
    }
    if (output.SelfservicePermissions !== undefined &&
        output.SelfservicePermissions !== null) {
        contents.SelfservicePermissions = deserializeAws_json1_1SelfservicePermissions(output.SelfservicePermissions, context);
    }
    if (output.State !== undefined && output.State !== null) {
        contents.State = output.State;
    }
    if (output.SubnetIds !== undefined && output.SubnetIds !== null) {
        contents.SubnetIds = deserializeAws_json1_1SubnetIds(output.SubnetIds, context);
    }
    if (output.Tenancy !== undefined && output.Tenancy !== null) {
        contents.Tenancy = output.Tenancy;
    }
    if (output.WorkspaceAccessProperties !== undefined &&
        output.WorkspaceAccessProperties !== null) {
        contents.WorkspaceAccessProperties = deserializeAws_json1_1WorkspaceAccessProperties(output.WorkspaceAccessProperties, context);
    }
    if (output.WorkspaceCreationProperties !== undefined &&
        output.WorkspaceCreationProperties !== null) {
        contents.WorkspaceCreationProperties = deserializeAws_json1_1DefaultWorkspaceCreationProperties(output.WorkspaceCreationProperties, context);
    }
    if (output.WorkspaceSecurityGroupId !== undefined &&
        output.WorkspaceSecurityGroupId !== null) {
        contents.WorkspaceSecurityGroupId = output.WorkspaceSecurityGroupId;
    }
    if (output.ipGroupIds !== undefined && output.ipGroupIds !== null) {
        contents.ipGroupIds = deserializeAws_json1_1IpGroupIdList(output.ipGroupIds, context);
    }
    return contents;
};
const deserializeAws_json1_1WorkspaceImage = (output, context) => {
    let contents = {
        __type: "WorkspaceImage",
        Description: undefined,
        ErrorCode: undefined,
        ErrorMessage: undefined,
        ImageId: undefined,
        Name: undefined,
        OperatingSystem: undefined,
        RequiredTenancy: undefined,
        State: undefined
    };
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
        contents.ErrorCode = output.ErrorCode;
    }
    if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
        contents.ErrorMessage = output.ErrorMessage;
    }
    if (output.ImageId !== undefined && output.ImageId !== null) {
        contents.ImageId = output.ImageId;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.OperatingSystem !== undefined && output.OperatingSystem !== null) {
        contents.OperatingSystem = deserializeAws_json1_1OperatingSystem(output.OperatingSystem, context);
    }
    if (output.RequiredTenancy !== undefined && output.RequiredTenancy !== null) {
        contents.RequiredTenancy = output.RequiredTenancy;
    }
    if (output.State !== undefined && output.State !== null) {
        contents.State = output.State;
    }
    return contents;
};
const deserializeAws_json1_1WorkspaceImageList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1WorkspaceImage(entry, context));
};
const deserializeAws_json1_1WorkspaceList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Workspace(entry, context));
};
const deserializeAws_json1_1WorkspaceProperties = (output, context) => {
    let contents = {
        __type: "WorkspaceProperties",
        ComputeTypeName: undefined,
        RootVolumeSizeGib: undefined,
        RunningMode: undefined,
        RunningModeAutoStopTimeoutInMinutes: undefined,
        UserVolumeSizeGib: undefined
    };
    if (output.ComputeTypeName !== undefined && output.ComputeTypeName !== null) {
        contents.ComputeTypeName = output.ComputeTypeName;
    }
    if (output.RootVolumeSizeGib !== undefined &&
        output.RootVolumeSizeGib !== null) {
        contents.RootVolumeSizeGib = output.RootVolumeSizeGib;
    }
    if (output.RunningMode !== undefined && output.RunningMode !== null) {
        contents.RunningMode = output.RunningMode;
    }
    if (output.RunningModeAutoStopTimeoutInMinutes !== undefined &&
        output.RunningModeAutoStopTimeoutInMinutes !== null) {
        contents.RunningModeAutoStopTimeoutInMinutes =
            output.RunningModeAutoStopTimeoutInMinutes;
    }
    if (output.UserVolumeSizeGib !== undefined &&
        output.UserVolumeSizeGib !== null) {
        contents.UserVolumeSizeGib = output.UserVolumeSizeGib;
    }
    return contents;
};
const deserializeAws_json1_1WorkspaceRequest = (output, context) => {
    let contents = {
        __type: "WorkspaceRequest",
        BundleId: undefined,
        DirectoryId: undefined,
        RootVolumeEncryptionEnabled: undefined,
        Tags: undefined,
        UserName: undefined,
        UserVolumeEncryptionEnabled: undefined,
        VolumeEncryptionKey: undefined,
        WorkspaceProperties: undefined
    };
    if (output.BundleId !== undefined && output.BundleId !== null) {
        contents.BundleId = output.BundleId;
    }
    if (output.DirectoryId !== undefined && output.DirectoryId !== null) {
        contents.DirectoryId = output.DirectoryId;
    }
    if (output.RootVolumeEncryptionEnabled !== undefined &&
        output.RootVolumeEncryptionEnabled !== null) {
        contents.RootVolumeEncryptionEnabled = output.RootVolumeEncryptionEnabled;
    }
    if (output.Tags !== undefined && output.Tags !== null) {
        contents.Tags = deserializeAws_json1_1TagList(output.Tags, context);
    }
    if (output.UserName !== undefined && output.UserName !== null) {
        contents.UserName = output.UserName;
    }
    if (output.UserVolumeEncryptionEnabled !== undefined &&
        output.UserVolumeEncryptionEnabled !== null) {
        contents.UserVolumeEncryptionEnabled = output.UserVolumeEncryptionEnabled;
    }
    if (output.VolumeEncryptionKey !== undefined &&
        output.VolumeEncryptionKey !== null) {
        contents.VolumeEncryptionKey = output.VolumeEncryptionKey;
    }
    if (output.WorkspaceProperties !== undefined &&
        output.WorkspaceProperties !== null) {
        contents.WorkspaceProperties = deserializeAws_json1_1WorkspaceProperties(output.WorkspaceProperties, context);
    }
    return contents;
};
const deserializeAws_json1_1WorkspacesDefaultRoleNotFoundException = (output, context) => {
    let contents = {
        __type: "WorkspacesDefaultRoleNotFoundException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1WorkspacesIpGroup = (output, context) => {
    let contents = {
        __type: "WorkspacesIpGroup",
        groupDesc: undefined,
        groupId: undefined,
        groupName: undefined,
        userRules: undefined
    };
    if (output.groupDesc !== undefined && output.groupDesc !== null) {
        contents.groupDesc = output.groupDesc;
    }
    if (output.groupId !== undefined && output.groupId !== null) {
        contents.groupId = output.groupId;
    }
    if (output.groupName !== undefined && output.groupName !== null) {
        contents.groupName = output.groupName;
    }
    if (output.userRules !== undefined && output.userRules !== null) {
        contents.userRules = deserializeAws_json1_1IpRuleList(output.userRules, context);
    }
    return contents;
};
const deserializeAws_json1_1WorkspacesIpGroupsList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1WorkspacesIpGroup(entry, context));
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