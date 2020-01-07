"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1AssociateDelegateToResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkMailService.AssociateDelegateToResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateDelegateToResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AssociateDelegateToResourceCommand = serializeAws_json1_1AssociateDelegateToResourceCommand;
async function serializeAws_json1_1AssociateMemberToGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkMailService.AssociateMemberToGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateMemberToGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AssociateMemberToGroupCommand = serializeAws_json1_1AssociateMemberToGroupCommand;
async function serializeAws_json1_1CreateAliasCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkMailService.CreateAlias";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateAliasRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateAliasCommand = serializeAws_json1_1CreateAliasCommand;
async function serializeAws_json1_1CreateGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkMailService.CreateGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateGroupCommand = serializeAws_json1_1CreateGroupCommand;
async function serializeAws_json1_1CreateResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkMailService.CreateResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateResourceCommand = serializeAws_json1_1CreateResourceCommand;
async function serializeAws_json1_1CreateUserCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkMailService.CreateUser";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateUserRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateUserCommand = serializeAws_json1_1CreateUserCommand;
async function serializeAws_json1_1DeleteAliasCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkMailService.DeleteAlias";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteAliasRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteAliasCommand = serializeAws_json1_1DeleteAliasCommand;
async function serializeAws_json1_1DeleteGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkMailService.DeleteGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteGroupCommand = serializeAws_json1_1DeleteGroupCommand;
async function serializeAws_json1_1DeleteMailboxPermissionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkMailService.DeleteMailboxPermissions";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteMailboxPermissionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteMailboxPermissionsCommand = serializeAws_json1_1DeleteMailboxPermissionsCommand;
async function serializeAws_json1_1DeleteResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkMailService.DeleteResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteResourceCommand = serializeAws_json1_1DeleteResourceCommand;
async function serializeAws_json1_1DeleteUserCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkMailService.DeleteUser";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteUserRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteUserCommand = serializeAws_json1_1DeleteUserCommand;
async function serializeAws_json1_1DeregisterFromWorkMailCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkMailService.DeregisterFromWorkMail";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeregisterFromWorkMailRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeregisterFromWorkMailCommand = serializeAws_json1_1DeregisterFromWorkMailCommand;
async function serializeAws_json1_1DescribeGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkMailService.DescribeGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeGroupCommand = serializeAws_json1_1DescribeGroupCommand;
async function serializeAws_json1_1DescribeOrganizationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkMailService.DescribeOrganization";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeOrganizationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeOrganizationCommand = serializeAws_json1_1DescribeOrganizationCommand;
async function serializeAws_json1_1DescribeResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkMailService.DescribeResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeResourceCommand = serializeAws_json1_1DescribeResourceCommand;
async function serializeAws_json1_1DescribeUserCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkMailService.DescribeUser";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeUserRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeUserCommand = serializeAws_json1_1DescribeUserCommand;
async function serializeAws_json1_1DisassociateDelegateFromResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkMailService.DisassociateDelegateFromResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateDelegateFromResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DisassociateDelegateFromResourceCommand = serializeAws_json1_1DisassociateDelegateFromResourceCommand;
async function serializeAws_json1_1DisassociateMemberFromGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkMailService.DisassociateMemberFromGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateMemberFromGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DisassociateMemberFromGroupCommand = serializeAws_json1_1DisassociateMemberFromGroupCommand;
async function serializeAws_json1_1GetMailboxDetailsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkMailService.GetMailboxDetails";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetMailboxDetailsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetMailboxDetailsCommand = serializeAws_json1_1GetMailboxDetailsCommand;
async function serializeAws_json1_1ListAliasesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkMailService.ListAliases";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAliasesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListAliasesCommand = serializeAws_json1_1ListAliasesCommand;
async function serializeAws_json1_1ListGroupMembersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkMailService.ListGroupMembers";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListGroupMembersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListGroupMembersCommand = serializeAws_json1_1ListGroupMembersCommand;
async function serializeAws_json1_1ListGroupsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkMailService.ListGroups";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListGroupsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListGroupsCommand = serializeAws_json1_1ListGroupsCommand;
async function serializeAws_json1_1ListMailboxPermissionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkMailService.ListMailboxPermissions";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListMailboxPermissionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListMailboxPermissionsCommand = serializeAws_json1_1ListMailboxPermissionsCommand;
async function serializeAws_json1_1ListOrganizationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkMailService.ListOrganizations";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListOrganizationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListOrganizationsCommand = serializeAws_json1_1ListOrganizationsCommand;
async function serializeAws_json1_1ListResourceDelegatesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkMailService.ListResourceDelegates";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListResourceDelegatesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListResourceDelegatesCommand = serializeAws_json1_1ListResourceDelegatesCommand;
async function serializeAws_json1_1ListResourcesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkMailService.ListResources";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListResourcesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListResourcesCommand = serializeAws_json1_1ListResourcesCommand;
async function serializeAws_json1_1ListUsersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkMailService.ListUsers";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListUsersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListUsersCommand = serializeAws_json1_1ListUsersCommand;
async function serializeAws_json1_1PutMailboxPermissionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkMailService.PutMailboxPermissions";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutMailboxPermissionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutMailboxPermissionsCommand = serializeAws_json1_1PutMailboxPermissionsCommand;
async function serializeAws_json1_1RegisterToWorkMailCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkMailService.RegisterToWorkMail";
    let body;
    body = JSON.stringify(serializeAws_json1_1RegisterToWorkMailRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RegisterToWorkMailCommand = serializeAws_json1_1RegisterToWorkMailCommand;
async function serializeAws_json1_1ResetPasswordCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkMailService.ResetPassword";
    let body;
    body = JSON.stringify(serializeAws_json1_1ResetPasswordRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ResetPasswordCommand = serializeAws_json1_1ResetPasswordCommand;
async function serializeAws_json1_1UpdateMailboxQuotaCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkMailService.UpdateMailboxQuota";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateMailboxQuotaRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateMailboxQuotaCommand = serializeAws_json1_1UpdateMailboxQuotaCommand;
async function serializeAws_json1_1UpdatePrimaryEmailAddressCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkMailService.UpdatePrimaryEmailAddress";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdatePrimaryEmailAddressRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdatePrimaryEmailAddressCommand = serializeAws_json1_1UpdatePrimaryEmailAddressCommand;
async function serializeAws_json1_1UpdateResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "WorkMailService.UpdateResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateResourceCommand = serializeAws_json1_1UpdateResourceCommand;
async function deserializeAws_json1_1AssociateDelegateToResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AssociateDelegateToResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociateDelegateToResourceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AssociateDelegateToResourceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AssociateDelegateToResourceCommand = deserializeAws_json1_1AssociateDelegateToResourceCommand;
async function deserializeAws_json1_1AssociateDelegateToResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.workmail.service#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityStateException":
        case "com.amazonaws.workmail.service#EntityStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail.service#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail.service#OrganizationNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail.service#OrganizationStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1AssociateMemberToGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AssociateMemberToGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociateMemberToGroupResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AssociateMemberToGroupResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AssociateMemberToGroupCommand = deserializeAws_json1_1AssociateMemberToGroupCommand;
async function deserializeAws_json1_1AssociateMemberToGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DirectoryServiceAuthenticationFailedException":
        case "com.amazonaws.workmail.service#DirectoryServiceAuthenticationFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectoryServiceAuthenticationFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectoryUnavailableException":
        case "com.amazonaws.workmail.service#DirectoryUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.workmail.service#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityStateException":
        case "com.amazonaws.workmail.service#EntityStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail.service#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail.service#OrganizationNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail.service#OrganizationStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.workmail.service#UnsupportedOperationException":
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
async function deserializeAws_json1_1CreateAliasCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateAliasCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateAliasResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateAliasResponse" }, contents);
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
        case "EmailAddressInUseException":
        case "com.amazonaws.workmail.service#EmailAddressInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EmailAddressInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.workmail.service#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityStateException":
        case "com.amazonaws.workmail.service#EntityStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail.service#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MailDomainNotFoundException":
        case "com.amazonaws.workmail.service#MailDomainNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MailDomainNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MailDomainStateException":
        case "com.amazonaws.workmail.service#MailDomainStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MailDomainStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail.service#OrganizationNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail.service#OrganizationStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateGroupResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateGroupResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateGroupCommand = deserializeAws_json1_1CreateGroupCommand;
async function deserializeAws_json1_1CreateGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DirectoryServiceAuthenticationFailedException":
        case "com.amazonaws.workmail.service#DirectoryServiceAuthenticationFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectoryServiceAuthenticationFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectoryUnavailableException":
        case "com.amazonaws.workmail.service#DirectoryUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail.service#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NameAvailabilityException":
        case "com.amazonaws.workmail.service#NameAvailabilityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NameAvailabilityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail.service#OrganizationNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail.service#OrganizationStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ReservedNameException":
        case "com.amazonaws.workmail.service#ReservedNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ReservedNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.workmail.service#UnsupportedOperationException":
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
async function deserializeAws_json1_1CreateResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateResourceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateResourceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateResourceCommand = deserializeAws_json1_1CreateResourceCommand;
async function deserializeAws_json1_1CreateResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DirectoryServiceAuthenticationFailedException":
        case "com.amazonaws.workmail.service#DirectoryServiceAuthenticationFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectoryServiceAuthenticationFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectoryUnavailableException":
        case "com.amazonaws.workmail.service#DirectoryUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail.service#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NameAvailabilityException":
        case "com.amazonaws.workmail.service#NameAvailabilityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NameAvailabilityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail.service#OrganizationNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail.service#OrganizationStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ReservedNameException":
        case "com.amazonaws.workmail.service#ReservedNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ReservedNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
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
    contents = deserializeAws_json1_1CreateUserResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateUserResponse" }, contents);
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
        case "DirectoryServiceAuthenticationFailedException":
        case "com.amazonaws.workmail.service#DirectoryServiceAuthenticationFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectoryServiceAuthenticationFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectoryUnavailableException":
        case "com.amazonaws.workmail.service#DirectoryUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail.service#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPasswordException":
        case "com.amazonaws.workmail.service#InvalidPasswordException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPasswordExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NameAvailabilityException":
        case "com.amazonaws.workmail.service#NameAvailabilityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NameAvailabilityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail.service#OrganizationNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail.service#OrganizationStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ReservedNameException":
        case "com.amazonaws.workmail.service#ReservedNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ReservedNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.workmail.service#UnsupportedOperationException":
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
async function deserializeAws_json1_1DeleteAliasCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteAliasCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteAliasResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteAliasResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteAliasCommand = deserializeAws_json1_1DeleteAliasCommand;
async function deserializeAws_json1_1DeleteAliasCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.workmail.service#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityStateException":
        case "com.amazonaws.workmail.service#EntityStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail.service#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail.service#OrganizationNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail.service#OrganizationStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteGroupResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteGroupResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteGroupCommand = deserializeAws_json1_1DeleteGroupCommand;
async function deserializeAws_json1_1DeleteGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DirectoryServiceAuthenticationFailedException":
        case "com.amazonaws.workmail.service#DirectoryServiceAuthenticationFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectoryServiceAuthenticationFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectoryUnavailableException":
        case "com.amazonaws.workmail.service#DirectoryUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityStateException":
        case "com.amazonaws.workmail.service#EntityStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail.service#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail.service#OrganizationNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail.service#OrganizationStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.workmail.service#UnsupportedOperationException":
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
async function deserializeAws_json1_1DeleteMailboxPermissionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteMailboxPermissionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteMailboxPermissionsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteMailboxPermissionsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteMailboxPermissionsCommand = deserializeAws_json1_1DeleteMailboxPermissionsCommand;
async function deserializeAws_json1_1DeleteMailboxPermissionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.workmail.service#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityStateException":
        case "com.amazonaws.workmail.service#EntityStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail.service#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail.service#OrganizationNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail.service#OrganizationStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteResourceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteResourceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteResourceCommand = deserializeAws_json1_1DeleteResourceCommand;
async function deserializeAws_json1_1DeleteResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityStateException":
        case "com.amazonaws.workmail.service#EntityStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail.service#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail.service#OrganizationNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail.service#OrganizationStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
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
    contents = deserializeAws_json1_1DeleteUserResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteUserResponse" }, contents);
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
        case "DirectoryServiceAuthenticationFailedException":
        case "com.amazonaws.workmail.service#DirectoryServiceAuthenticationFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectoryServiceAuthenticationFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectoryUnavailableException":
        case "com.amazonaws.workmail.service#DirectoryUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityStateException":
        case "com.amazonaws.workmail.service#EntityStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail.service#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail.service#OrganizationNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail.service#OrganizationStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.workmail.service#UnsupportedOperationException":
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
async function deserializeAws_json1_1DeregisterFromWorkMailCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeregisterFromWorkMailCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeregisterFromWorkMailResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeregisterFromWorkMailResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeregisterFromWorkMailCommand = deserializeAws_json1_1DeregisterFromWorkMailCommand;
async function deserializeAws_json1_1DeregisterFromWorkMailCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.workmail.service#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityStateException":
        case "com.amazonaws.workmail.service#EntityStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail.service#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail.service#OrganizationNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail.service#OrganizationStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeGroupResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeGroupResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeGroupCommand = deserializeAws_json1_1DescribeGroupCommand;
async function deserializeAws_json1_1DescribeGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.workmail.service#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail.service#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail.service#OrganizationNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail.service#OrganizationStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeOrganizationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeOrganizationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeOrganizationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeOrganizationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeOrganizationCommand = deserializeAws_json1_1DescribeOrganizationCommand;
async function deserializeAws_json1_1DescribeOrganizationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.workmail.service#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail.service#OrganizationNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeResourceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeResourceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeResourceCommand = deserializeAws_json1_1DescribeResourceCommand;
async function deserializeAws_json1_1DescribeResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.workmail.service#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail.service#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail.service#OrganizationNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail.service#OrganizationStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeUserCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeUserCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeUserResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeUserResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeUserCommand = deserializeAws_json1_1DescribeUserCommand;
async function deserializeAws_json1_1DescribeUserCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.workmail.service#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail.service#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail.service#OrganizationNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail.service#OrganizationStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DisassociateDelegateFromResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DisassociateDelegateFromResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisassociateDelegateFromResourceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DisassociateDelegateFromResourceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DisassociateDelegateFromResourceCommand = deserializeAws_json1_1DisassociateDelegateFromResourceCommand;
async function deserializeAws_json1_1DisassociateDelegateFromResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.workmail.service#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityStateException":
        case "com.amazonaws.workmail.service#EntityStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail.service#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail.service#OrganizationNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail.service#OrganizationStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DisassociateMemberFromGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DisassociateMemberFromGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisassociateMemberFromGroupResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DisassociateMemberFromGroupResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DisassociateMemberFromGroupCommand = deserializeAws_json1_1DisassociateMemberFromGroupCommand;
async function deserializeAws_json1_1DisassociateMemberFromGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DirectoryServiceAuthenticationFailedException":
        case "com.amazonaws.workmail.service#DirectoryServiceAuthenticationFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectoryServiceAuthenticationFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectoryUnavailableException":
        case "com.amazonaws.workmail.service#DirectoryUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.workmail.service#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityStateException":
        case "com.amazonaws.workmail.service#EntityStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail.service#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail.service#OrganizationNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail.service#OrganizationStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.workmail.service#UnsupportedOperationException":
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
async function deserializeAws_json1_1GetMailboxDetailsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetMailboxDetailsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetMailboxDetailsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetMailboxDetailsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetMailboxDetailsCommand = deserializeAws_json1_1GetMailboxDetailsCommand;
async function deserializeAws_json1_1GetMailboxDetailsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.workmail.service#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail.service#OrganizationNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail.service#OrganizationStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListAliasesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListAliasesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAliasesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListAliasesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListAliasesCommand = deserializeAws_json1_1ListAliasesCommand;
async function deserializeAws_json1_1ListAliasesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.workmail.service#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityStateException":
        case "com.amazonaws.workmail.service#EntityStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail.service#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail.service#OrganizationNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail.service#OrganizationStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListGroupMembersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListGroupMembersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListGroupMembersResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListGroupMembersResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListGroupMembersCommand = deserializeAws_json1_1ListGroupMembersCommand;
async function deserializeAws_json1_1ListGroupMembersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.workmail.service#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityStateException":
        case "com.amazonaws.workmail.service#EntityStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail.service#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail.service#OrganizationNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail.service#OrganizationStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListGroupsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListGroupsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListGroupsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListGroupsCommand = deserializeAws_json1_1ListGroupsCommand;
async function deserializeAws_json1_1ListGroupsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.workmail.service#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail.service#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail.service#OrganizationNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail.service#OrganizationStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListMailboxPermissionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListMailboxPermissionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListMailboxPermissionsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListMailboxPermissionsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListMailboxPermissionsCommand = deserializeAws_json1_1ListMailboxPermissionsCommand;
async function deserializeAws_json1_1ListMailboxPermissionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.workmail.service#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail.service#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail.service#OrganizationNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail.service#OrganizationStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListOrganizationsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListOrganizationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListOrganizationsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListOrganizationsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListOrganizationsCommand = deserializeAws_json1_1ListOrganizationsCommand;
async function deserializeAws_json1_1ListOrganizationsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.workmail.service#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListResourceDelegatesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListResourceDelegatesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListResourceDelegatesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListResourceDelegatesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListResourceDelegatesCommand = deserializeAws_json1_1ListResourceDelegatesCommand;
async function deserializeAws_json1_1ListResourceDelegatesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.workmail.service#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityStateException":
        case "com.amazonaws.workmail.service#EntityStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail.service#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail.service#OrganizationNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail.service#OrganizationStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListResourcesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListResourcesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListResourcesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListResourcesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListResourcesCommand = deserializeAws_json1_1ListResourcesCommand;
async function deserializeAws_json1_1ListResourcesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.workmail.service#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail.service#OrganizationNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail.service#OrganizationStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListUsersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListUsersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListUsersResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListUsersResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListUsersCommand = deserializeAws_json1_1ListUsersCommand;
async function deserializeAws_json1_1ListUsersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.workmail.service#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail.service#OrganizationNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail.service#OrganizationStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1PutMailboxPermissionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutMailboxPermissionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutMailboxPermissionsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutMailboxPermissionsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutMailboxPermissionsCommand = deserializeAws_json1_1PutMailboxPermissionsCommand;
async function deserializeAws_json1_1PutMailboxPermissionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.workmail.service#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityStateException":
        case "com.amazonaws.workmail.service#EntityStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail.service#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail.service#OrganizationNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail.service#OrganizationStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1RegisterToWorkMailCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RegisterToWorkMailCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RegisterToWorkMailResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RegisterToWorkMailResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RegisterToWorkMailCommand = deserializeAws_json1_1RegisterToWorkMailCommand;
async function deserializeAws_json1_1RegisterToWorkMailCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DirectoryServiceAuthenticationFailedException":
        case "com.amazonaws.workmail.service#DirectoryServiceAuthenticationFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectoryServiceAuthenticationFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectoryUnavailableException":
        case "com.amazonaws.workmail.service#DirectoryUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EmailAddressInUseException":
        case "com.amazonaws.workmail.service#EmailAddressInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EmailAddressInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityAlreadyRegisteredException":
        case "com.amazonaws.workmail.service#EntityAlreadyRegisteredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityAlreadyRegisteredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.workmail.service#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityStateException":
        case "com.amazonaws.workmail.service#EntityStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail.service#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MailDomainNotFoundException":
        case "com.amazonaws.workmail.service#MailDomainNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MailDomainNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MailDomainStateException":
        case "com.amazonaws.workmail.service#MailDomainStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MailDomainStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail.service#OrganizationNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail.service#OrganizationStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ResetPasswordCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ResetPasswordCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ResetPasswordResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ResetPasswordResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ResetPasswordCommand = deserializeAws_json1_1ResetPasswordCommand;
async function deserializeAws_json1_1ResetPasswordCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DirectoryServiceAuthenticationFailedException":
        case "com.amazonaws.workmail.service#DirectoryServiceAuthenticationFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectoryServiceAuthenticationFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectoryUnavailableException":
        case "com.amazonaws.workmail.service#DirectoryUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.workmail.service#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityStateException":
        case "com.amazonaws.workmail.service#EntityStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail.service#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPasswordException":
        case "com.amazonaws.workmail.service#InvalidPasswordException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPasswordExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail.service#OrganizationNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail.service#OrganizationStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.workmail.service#UnsupportedOperationException":
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
async function deserializeAws_json1_1UpdateMailboxQuotaCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateMailboxQuotaCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateMailboxQuotaResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateMailboxQuotaResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateMailboxQuotaCommand = deserializeAws_json1_1UpdateMailboxQuotaCommand;
async function deserializeAws_json1_1UpdateMailboxQuotaCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.workmail.service#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityStateException":
        case "com.amazonaws.workmail.service#EntityStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail.service#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail.service#OrganizationNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail.service#OrganizationStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdatePrimaryEmailAddressCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdatePrimaryEmailAddressCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdatePrimaryEmailAddressResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdatePrimaryEmailAddressResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdatePrimaryEmailAddressCommand = deserializeAws_json1_1UpdatePrimaryEmailAddressCommand;
async function deserializeAws_json1_1UpdatePrimaryEmailAddressCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DirectoryServiceAuthenticationFailedException":
        case "com.amazonaws.workmail.service#DirectoryServiceAuthenticationFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectoryServiceAuthenticationFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectoryUnavailableException":
        case "com.amazonaws.workmail.service#DirectoryUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EmailAddressInUseException":
        case "com.amazonaws.workmail.service#EmailAddressInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EmailAddressInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.workmail.service#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityStateException":
        case "com.amazonaws.workmail.service#EntityStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail.service#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MailDomainNotFoundException":
        case "com.amazonaws.workmail.service#MailDomainNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MailDomainNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MailDomainStateException":
        case "com.amazonaws.workmail.service#MailDomainStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MailDomainStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail.service#OrganizationNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail.service#OrganizationStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.workmail.service#UnsupportedOperationException":
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
async function deserializeAws_json1_1UpdateResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateResourceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateResourceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateResourceCommand = deserializeAws_json1_1UpdateResourceCommand;
async function deserializeAws_json1_1UpdateResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DirectoryUnavailableException":
        case "com.amazonaws.workmail.service#DirectoryUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EmailAddressInUseException":
        case "com.amazonaws.workmail.service#EmailAddressInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EmailAddressInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.workmail.service#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityStateException":
        case "com.amazonaws.workmail.service#EntityStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidConfigurationException":
        case "com.amazonaws.workmail.service#InvalidConfigurationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidConfigurationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MailDomainNotFoundException":
        case "com.amazonaws.workmail.service#MailDomainNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MailDomainNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MailDomainStateException":
        case "com.amazonaws.workmail.service#MailDomainStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MailDomainStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NameAvailabilityException":
        case "com.amazonaws.workmail.service#NameAvailabilityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NameAvailabilityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail.service#OrganizationNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail.service#OrganizationStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
const deserializeAws_json1_1DirectoryServiceAuthenticationFailedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DirectoryServiceAuthenticationFailedException(body, context);
    const contents = Object.assign({ name: "DirectoryServiceAuthenticationFailedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DirectoryUnavailableExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DirectoryUnavailableException(body, context);
    const contents = Object.assign({ name: "DirectoryUnavailableException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1EmailAddressInUseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1EmailAddressInUseException(body, context);
    const contents = Object.assign({ name: "EmailAddressInUseException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1EntityAlreadyRegisteredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1EntityAlreadyRegisteredException(body, context);
    const contents = Object.assign({ name: "EntityAlreadyRegisteredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1EntityNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1EntityNotFoundException(body, context);
    const contents = Object.assign({ name: "EntityNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1EntityStateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1EntityStateException(body, context);
    const contents = Object.assign({ name: "EntityStateException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidConfigurationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidConfigurationException(body, context);
    const contents = Object.assign({ name: "InvalidConfigurationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
const deserializeAws_json1_1MailDomainNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MailDomainNotFoundException(body, context);
    const contents = Object.assign({ name: "MailDomainNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1MailDomainStateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MailDomainStateException(body, context);
    const contents = Object.assign({ name: "MailDomainStateException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1NameAvailabilityExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NameAvailabilityException(body, context);
    const contents = Object.assign({ name: "NameAvailabilityException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1OrganizationNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OrganizationNotFoundException(body, context);
    const contents = Object.assign({ name: "OrganizationNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1OrganizationStateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OrganizationStateException(body, context);
    const contents = Object.assign({ name: "OrganizationStateException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ReservedNameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ReservedNameException(body, context);
    const contents = Object.assign({ name: "ReservedNameException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1UnsupportedOperationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnsupportedOperationException(body, context);
    const contents = Object.assign({ name: "UnsupportedOperationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1AssociateDelegateToResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.EntityId !== undefined) {
        bodyParams["EntityId"] = input.EntityId;
    }
    if (input.OrganizationId !== undefined) {
        bodyParams["OrganizationId"] = input.OrganizationId;
    }
    if (input.ResourceId !== undefined) {
        bodyParams["ResourceId"] = input.ResourceId;
    }
    return bodyParams;
};
const serializeAws_json1_1AssociateMemberToGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.GroupId !== undefined) {
        bodyParams["GroupId"] = input.GroupId;
    }
    if (input.MemberId !== undefined) {
        bodyParams["MemberId"] = input.MemberId;
    }
    if (input.OrganizationId !== undefined) {
        bodyParams["OrganizationId"] = input.OrganizationId;
    }
    return bodyParams;
};
const serializeAws_json1_1BookingOptions = (input, context) => {
    const bodyParams = {};
    if (input.AutoAcceptRequests !== undefined) {
        bodyParams["AutoAcceptRequests"] = input.AutoAcceptRequests;
    }
    if (input.AutoDeclineConflictingRequests !== undefined) {
        bodyParams["AutoDeclineConflictingRequests"] =
            input.AutoDeclineConflictingRequests;
    }
    if (input.AutoDeclineRecurringRequests !== undefined) {
        bodyParams["AutoDeclineRecurringRequests"] =
            input.AutoDeclineRecurringRequests;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateAliasRequest = (input, context) => {
    const bodyParams = {};
    if (input.Alias !== undefined) {
        bodyParams["Alias"] = input.Alias;
    }
    if (input.EntityId !== undefined) {
        bodyParams["EntityId"] = input.EntityId;
    }
    if (input.OrganizationId !== undefined) {
        bodyParams["OrganizationId"] = input.OrganizationId;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.OrganizationId !== undefined) {
        bodyParams["OrganizationId"] = input.OrganizationId;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.OrganizationId !== undefined) {
        bodyParams["OrganizationId"] = input.OrganizationId;
    }
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateUserRequest = (input, context) => {
    const bodyParams = {};
    if (input.DisplayName !== undefined) {
        bodyParams["DisplayName"] = input.DisplayName;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.OrganizationId !== undefined) {
        bodyParams["OrganizationId"] = input.OrganizationId;
    }
    if (input.Password !== undefined) {
        bodyParams["Password"] = input.Password;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteAliasRequest = (input, context) => {
    const bodyParams = {};
    if (input.Alias !== undefined) {
        bodyParams["Alias"] = input.Alias;
    }
    if (input.EntityId !== undefined) {
        bodyParams["EntityId"] = input.EntityId;
    }
    if (input.OrganizationId !== undefined) {
        bodyParams["OrganizationId"] = input.OrganizationId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.GroupId !== undefined) {
        bodyParams["GroupId"] = input.GroupId;
    }
    if (input.OrganizationId !== undefined) {
        bodyParams["OrganizationId"] = input.OrganizationId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteMailboxPermissionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.EntityId !== undefined) {
        bodyParams["EntityId"] = input.EntityId;
    }
    if (input.GranteeId !== undefined) {
        bodyParams["GranteeId"] = input.GranteeId;
    }
    if (input.OrganizationId !== undefined) {
        bodyParams["OrganizationId"] = input.OrganizationId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.OrganizationId !== undefined) {
        bodyParams["OrganizationId"] = input.OrganizationId;
    }
    if (input.ResourceId !== undefined) {
        bodyParams["ResourceId"] = input.ResourceId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteUserRequest = (input, context) => {
    const bodyParams = {};
    if (input.OrganizationId !== undefined) {
        bodyParams["OrganizationId"] = input.OrganizationId;
    }
    if (input.UserId !== undefined) {
        bodyParams["UserId"] = input.UserId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeregisterFromWorkMailRequest = (input, context) => {
    const bodyParams = {};
    if (input.EntityId !== undefined) {
        bodyParams["EntityId"] = input.EntityId;
    }
    if (input.OrganizationId !== undefined) {
        bodyParams["OrganizationId"] = input.OrganizationId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.GroupId !== undefined) {
        bodyParams["GroupId"] = input.GroupId;
    }
    if (input.OrganizationId !== undefined) {
        bodyParams["OrganizationId"] = input.OrganizationId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeOrganizationRequest = (input, context) => {
    const bodyParams = {};
    if (input.OrganizationId !== undefined) {
        bodyParams["OrganizationId"] = input.OrganizationId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.OrganizationId !== undefined) {
        bodyParams["OrganizationId"] = input.OrganizationId;
    }
    if (input.ResourceId !== undefined) {
        bodyParams["ResourceId"] = input.ResourceId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeUserRequest = (input, context) => {
    const bodyParams = {};
    if (input.OrganizationId !== undefined) {
        bodyParams["OrganizationId"] = input.OrganizationId;
    }
    if (input.UserId !== undefined) {
        bodyParams["UserId"] = input.UserId;
    }
    return bodyParams;
};
const serializeAws_json1_1DisassociateDelegateFromResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.EntityId !== undefined) {
        bodyParams["EntityId"] = input.EntityId;
    }
    if (input.OrganizationId !== undefined) {
        bodyParams["OrganizationId"] = input.OrganizationId;
    }
    if (input.ResourceId !== undefined) {
        bodyParams["ResourceId"] = input.ResourceId;
    }
    return bodyParams;
};
const serializeAws_json1_1DisassociateMemberFromGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.GroupId !== undefined) {
        bodyParams["GroupId"] = input.GroupId;
    }
    if (input.MemberId !== undefined) {
        bodyParams["MemberId"] = input.MemberId;
    }
    if (input.OrganizationId !== undefined) {
        bodyParams["OrganizationId"] = input.OrganizationId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetMailboxDetailsRequest = (input, context) => {
    const bodyParams = {};
    if (input.OrganizationId !== undefined) {
        bodyParams["OrganizationId"] = input.OrganizationId;
    }
    if (input.UserId !== undefined) {
        bodyParams["UserId"] = input.UserId;
    }
    return bodyParams;
};
const serializeAws_json1_1ListAliasesRequest = (input, context) => {
    const bodyParams = {};
    if (input.EntityId !== undefined) {
        bodyParams["EntityId"] = input.EntityId;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.OrganizationId !== undefined) {
        bodyParams["OrganizationId"] = input.OrganizationId;
    }
    return bodyParams;
};
const serializeAws_json1_1ListGroupMembersRequest = (input, context) => {
    const bodyParams = {};
    if (input.GroupId !== undefined) {
        bodyParams["GroupId"] = input.GroupId;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.OrganizationId !== undefined) {
        bodyParams["OrganizationId"] = input.OrganizationId;
    }
    return bodyParams;
};
const serializeAws_json1_1ListGroupsRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.OrganizationId !== undefined) {
        bodyParams["OrganizationId"] = input.OrganizationId;
    }
    return bodyParams;
};
const serializeAws_json1_1ListMailboxPermissionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.EntityId !== undefined) {
        bodyParams["EntityId"] = input.EntityId;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.OrganizationId !== undefined) {
        bodyParams["OrganizationId"] = input.OrganizationId;
    }
    return bodyParams;
};
const serializeAws_json1_1ListOrganizationsRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListResourceDelegatesRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.OrganizationId !== undefined) {
        bodyParams["OrganizationId"] = input.OrganizationId;
    }
    if (input.ResourceId !== undefined) {
        bodyParams["ResourceId"] = input.ResourceId;
    }
    return bodyParams;
};
const serializeAws_json1_1ListResourcesRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.OrganizationId !== undefined) {
        bodyParams["OrganizationId"] = input.OrganizationId;
    }
    return bodyParams;
};
const serializeAws_json1_1ListUsersRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.OrganizationId !== undefined) {
        bodyParams["OrganizationId"] = input.OrganizationId;
    }
    return bodyParams;
};
const serializeAws_json1_1PermissionValues = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1PutMailboxPermissionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.EntityId !== undefined) {
        bodyParams["EntityId"] = input.EntityId;
    }
    if (input.GranteeId !== undefined) {
        bodyParams["GranteeId"] = input.GranteeId;
    }
    if (input.OrganizationId !== undefined) {
        bodyParams["OrganizationId"] = input.OrganizationId;
    }
    if (input.PermissionValues !== undefined) {
        bodyParams["PermissionValues"] = serializeAws_json1_1PermissionValues(input.PermissionValues, context);
    }
    return bodyParams;
};
const serializeAws_json1_1RegisterToWorkMailRequest = (input, context) => {
    const bodyParams = {};
    if (input.Email !== undefined) {
        bodyParams["Email"] = input.Email;
    }
    if (input.EntityId !== undefined) {
        bodyParams["EntityId"] = input.EntityId;
    }
    if (input.OrganizationId !== undefined) {
        bodyParams["OrganizationId"] = input.OrganizationId;
    }
    return bodyParams;
};
const serializeAws_json1_1ResetPasswordRequest = (input, context) => {
    const bodyParams = {};
    if (input.OrganizationId !== undefined) {
        bodyParams["OrganizationId"] = input.OrganizationId;
    }
    if (input.Password !== undefined) {
        bodyParams["Password"] = input.Password;
    }
    if (input.UserId !== undefined) {
        bodyParams["UserId"] = input.UserId;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateMailboxQuotaRequest = (input, context) => {
    const bodyParams = {};
    if (input.MailboxQuota !== undefined) {
        bodyParams["MailboxQuota"] = input.MailboxQuota;
    }
    if (input.OrganizationId !== undefined) {
        bodyParams["OrganizationId"] = input.OrganizationId;
    }
    if (input.UserId !== undefined) {
        bodyParams["UserId"] = input.UserId;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdatePrimaryEmailAddressRequest = (input, context) => {
    const bodyParams = {};
    if (input.Email !== undefined) {
        bodyParams["Email"] = input.Email;
    }
    if (input.EntityId !== undefined) {
        bodyParams["EntityId"] = input.EntityId;
    }
    if (input.OrganizationId !== undefined) {
        bodyParams["OrganizationId"] = input.OrganizationId;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.BookingOptions !== undefined) {
        bodyParams["BookingOptions"] = serializeAws_json1_1BookingOptions(input.BookingOptions, context);
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.OrganizationId !== undefined) {
        bodyParams["OrganizationId"] = input.OrganizationId;
    }
    if (input.ResourceId !== undefined) {
        bodyParams["ResourceId"] = input.ResourceId;
    }
    return bodyParams;
};
const deserializeAws_json1_1Aliases = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1AssociateDelegateToResourceResponse = (output, context) => {
    let contents = {
        __type: "AssociateDelegateToResourceResponse"
    };
    return contents;
};
const deserializeAws_json1_1AssociateMemberToGroupResponse = (output, context) => {
    let contents = {
        __type: "AssociateMemberToGroupResponse"
    };
    return contents;
};
const deserializeAws_json1_1BookingOptions = (output, context) => {
    let contents = {
        __type: "BookingOptions",
        AutoAcceptRequests: undefined,
        AutoDeclineConflictingRequests: undefined,
        AutoDeclineRecurringRequests: undefined
    };
    if (output.AutoAcceptRequests !== undefined &&
        output.AutoAcceptRequests !== null) {
        contents.AutoAcceptRequests = output.AutoAcceptRequests;
    }
    if (output.AutoDeclineConflictingRequests !== undefined &&
        output.AutoDeclineConflictingRequests !== null) {
        contents.AutoDeclineConflictingRequests =
            output.AutoDeclineConflictingRequests;
    }
    if (output.AutoDeclineRecurringRequests !== undefined &&
        output.AutoDeclineRecurringRequests !== null) {
        contents.AutoDeclineRecurringRequests = output.AutoDeclineRecurringRequests;
    }
    return contents;
};
const deserializeAws_json1_1CreateAliasResponse = (output, context) => {
    let contents = {
        __type: "CreateAliasResponse"
    };
    return contents;
};
const deserializeAws_json1_1CreateGroupResponse = (output, context) => {
    let contents = {
        __type: "CreateGroupResponse",
        GroupId: undefined
    };
    if (output.GroupId !== undefined && output.GroupId !== null) {
        contents.GroupId = output.GroupId;
    }
    return contents;
};
const deserializeAws_json1_1CreateResourceResponse = (output, context) => {
    let contents = {
        __type: "CreateResourceResponse",
        ResourceId: undefined
    };
    if (output.ResourceId !== undefined && output.ResourceId !== null) {
        contents.ResourceId = output.ResourceId;
    }
    return contents;
};
const deserializeAws_json1_1CreateUserResponse = (output, context) => {
    let contents = {
        __type: "CreateUserResponse",
        UserId: undefined
    };
    if (output.UserId !== undefined && output.UserId !== null) {
        contents.UserId = output.UserId;
    }
    return contents;
};
const deserializeAws_json1_1Delegate = (output, context) => {
    let contents = {
        __type: "Delegate",
        Id: undefined,
        Type: undefined
    };
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1DeleteAliasResponse = (output, context) => {
    let contents = {
        __type: "DeleteAliasResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteGroupResponse = (output, context) => {
    let contents = {
        __type: "DeleteGroupResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteMailboxPermissionsResponse = (output, context) => {
    let contents = {
        __type: "DeleteMailboxPermissionsResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteResourceResponse = (output, context) => {
    let contents = {
        __type: "DeleteResourceResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteUserResponse = (output, context) => {
    let contents = {
        __type: "DeleteUserResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeregisterFromWorkMailResponse = (output, context) => {
    let contents = {
        __type: "DeregisterFromWorkMailResponse"
    };
    return contents;
};
const deserializeAws_json1_1DescribeGroupResponse = (output, context) => {
    let contents = {
        __type: "DescribeGroupResponse",
        DisabledDate: undefined,
        Email: undefined,
        EnabledDate: undefined,
        GroupId: undefined,
        Name: undefined,
        State: undefined
    };
    if (output.DisabledDate !== undefined && output.DisabledDate !== null) {
        contents.DisabledDate = new Date(Math.round(output.DisabledDate * 1000));
    }
    if (output.Email !== undefined && output.Email !== null) {
        contents.Email = output.Email;
    }
    if (output.EnabledDate !== undefined && output.EnabledDate !== null) {
        contents.EnabledDate = new Date(Math.round(output.EnabledDate * 1000));
    }
    if (output.GroupId !== undefined && output.GroupId !== null) {
        contents.GroupId = output.GroupId;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.State !== undefined && output.State !== null) {
        contents.State = output.State;
    }
    return contents;
};
const deserializeAws_json1_1DescribeOrganizationResponse = (output, context) => {
    let contents = {
        __type: "DescribeOrganizationResponse",
        Alias: undefined,
        CompletedDate: undefined,
        DefaultMailDomain: undefined,
        DirectoryId: undefined,
        DirectoryType: undefined,
        ErrorMessage: undefined,
        OrganizationId: undefined,
        State: undefined
    };
    if (output.Alias !== undefined && output.Alias !== null) {
        contents.Alias = output.Alias;
    }
    if (output.CompletedDate !== undefined && output.CompletedDate !== null) {
        contents.CompletedDate = new Date(Math.round(output.CompletedDate * 1000));
    }
    if (output.DefaultMailDomain !== undefined &&
        output.DefaultMailDomain !== null) {
        contents.DefaultMailDomain = output.DefaultMailDomain;
    }
    if (output.DirectoryId !== undefined && output.DirectoryId !== null) {
        contents.DirectoryId = output.DirectoryId;
    }
    if (output.DirectoryType !== undefined && output.DirectoryType !== null) {
        contents.DirectoryType = output.DirectoryType;
    }
    if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
        contents.ErrorMessage = output.ErrorMessage;
    }
    if (output.OrganizationId !== undefined && output.OrganizationId !== null) {
        contents.OrganizationId = output.OrganizationId;
    }
    if (output.State !== undefined && output.State !== null) {
        contents.State = output.State;
    }
    return contents;
};
const deserializeAws_json1_1DescribeResourceResponse = (output, context) => {
    let contents = {
        __type: "DescribeResourceResponse",
        BookingOptions: undefined,
        DisabledDate: undefined,
        Email: undefined,
        EnabledDate: undefined,
        Name: undefined,
        ResourceId: undefined,
        State: undefined,
        Type: undefined
    };
    if (output.BookingOptions !== undefined && output.BookingOptions !== null) {
        contents.BookingOptions = deserializeAws_json1_1BookingOptions(output.BookingOptions, context);
    }
    if (output.DisabledDate !== undefined && output.DisabledDate !== null) {
        contents.DisabledDate = new Date(Math.round(output.DisabledDate * 1000));
    }
    if (output.Email !== undefined && output.Email !== null) {
        contents.Email = output.Email;
    }
    if (output.EnabledDate !== undefined && output.EnabledDate !== null) {
        contents.EnabledDate = new Date(Math.round(output.EnabledDate * 1000));
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.ResourceId !== undefined && output.ResourceId !== null) {
        contents.ResourceId = output.ResourceId;
    }
    if (output.State !== undefined && output.State !== null) {
        contents.State = output.State;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1DescribeUserResponse = (output, context) => {
    let contents = {
        __type: "DescribeUserResponse",
        DisabledDate: undefined,
        DisplayName: undefined,
        Email: undefined,
        EnabledDate: undefined,
        Name: undefined,
        State: undefined,
        UserId: undefined,
        UserRole: undefined
    };
    if (output.DisabledDate !== undefined && output.DisabledDate !== null) {
        contents.DisabledDate = new Date(Math.round(output.DisabledDate * 1000));
    }
    if (output.DisplayName !== undefined && output.DisplayName !== null) {
        contents.DisplayName = output.DisplayName;
    }
    if (output.Email !== undefined && output.Email !== null) {
        contents.Email = output.Email;
    }
    if (output.EnabledDate !== undefined && output.EnabledDate !== null) {
        contents.EnabledDate = new Date(Math.round(output.EnabledDate * 1000));
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.State !== undefined && output.State !== null) {
        contents.State = output.State;
    }
    if (output.UserId !== undefined && output.UserId !== null) {
        contents.UserId = output.UserId;
    }
    if (output.UserRole !== undefined && output.UserRole !== null) {
        contents.UserRole = output.UserRole;
    }
    return contents;
};
const deserializeAws_json1_1DirectoryServiceAuthenticationFailedException = (output, context) => {
    let contents = {
        __type: "DirectoryServiceAuthenticationFailedException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1DirectoryUnavailableException = (output, context) => {
    let contents = {
        __type: "DirectoryUnavailableException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1DisassociateDelegateFromResourceResponse = (output, context) => {
    let contents = {
        __type: "DisassociateDelegateFromResourceResponse"
    };
    return contents;
};
const deserializeAws_json1_1DisassociateMemberFromGroupResponse = (output, context) => {
    let contents = {
        __type: "DisassociateMemberFromGroupResponse"
    };
    return contents;
};
const deserializeAws_json1_1EmailAddressInUseException = (output, context) => {
    let contents = {
        __type: "EmailAddressInUseException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1EntityAlreadyRegisteredException = (output, context) => {
    let contents = {
        __type: "EntityAlreadyRegisteredException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1EntityNotFoundException = (output, context) => {
    let contents = {
        __type: "EntityNotFoundException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1EntityStateException = (output, context) => {
    let contents = {
        __type: "EntityStateException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1GetMailboxDetailsResponse = (output, context) => {
    let contents = {
        __type: "GetMailboxDetailsResponse",
        MailboxQuota: undefined,
        MailboxSize: undefined
    };
    if (output.MailboxQuota !== undefined && output.MailboxQuota !== null) {
        contents.MailboxQuota = output.MailboxQuota;
    }
    if (output.MailboxSize !== undefined && output.MailboxSize !== null) {
        contents.MailboxSize = output.MailboxSize;
    }
    return contents;
};
const deserializeAws_json1_1Group = (output, context) => {
    let contents = {
        __type: "Group",
        DisabledDate: undefined,
        Email: undefined,
        EnabledDate: undefined,
        Id: undefined,
        Name: undefined,
        State: undefined
    };
    if (output.DisabledDate !== undefined && output.DisabledDate !== null) {
        contents.DisabledDate = new Date(Math.round(output.DisabledDate * 1000));
    }
    if (output.Email !== undefined && output.Email !== null) {
        contents.Email = output.Email;
    }
    if (output.EnabledDate !== undefined && output.EnabledDate !== null) {
        contents.EnabledDate = new Date(Math.round(output.EnabledDate * 1000));
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.State !== undefined && output.State !== null) {
        contents.State = output.State;
    }
    return contents;
};
const deserializeAws_json1_1Groups = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Group(entry, context));
};
const deserializeAws_json1_1InvalidConfigurationException = (output, context) => {
    let contents = {
        __type: "InvalidConfigurationException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidParameterException = (output, context) => {
    let contents = {
        __type: "InvalidParameterException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidPasswordException = (output, context) => {
    let contents = {
        __type: "InvalidPasswordException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ListAliasesResponse = (output, context) => {
    let contents = {
        __type: "ListAliasesResponse",
        Aliases: undefined,
        NextToken: undefined
    };
    if (output.Aliases !== undefined && output.Aliases !== null) {
        contents.Aliases = deserializeAws_json1_1Aliases(output.Aliases, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListGroupMembersResponse = (output, context) => {
    let contents = {
        __type: "ListGroupMembersResponse",
        Members: undefined,
        NextToken: undefined
    };
    if (output.Members !== undefined && output.Members !== null) {
        contents.Members = deserializeAws_json1_1Members(output.Members, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListGroupsResponse = (output, context) => {
    let contents = {
        __type: "ListGroupsResponse",
        Groups: undefined,
        NextToken: undefined
    };
    if (output.Groups !== undefined && output.Groups !== null) {
        contents.Groups = deserializeAws_json1_1Groups(output.Groups, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListMailboxPermissionsResponse = (output, context) => {
    let contents = {
        __type: "ListMailboxPermissionsResponse",
        NextToken: undefined,
        Permissions: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Permissions !== undefined && output.Permissions !== null) {
        contents.Permissions = deserializeAws_json1_1Permissions(output.Permissions, context);
    }
    return contents;
};
const deserializeAws_json1_1ListOrganizationsResponse = (output, context) => {
    let contents = {
        __type: "ListOrganizationsResponse",
        NextToken: undefined,
        OrganizationSummaries: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.OrganizationSummaries !== undefined &&
        output.OrganizationSummaries !== null) {
        contents.OrganizationSummaries = deserializeAws_json1_1OrganizationSummaries(output.OrganizationSummaries, context);
    }
    return contents;
};
const deserializeAws_json1_1ListResourceDelegatesResponse = (output, context) => {
    let contents = {
        __type: "ListResourceDelegatesResponse",
        Delegates: undefined,
        NextToken: undefined
    };
    if (output.Delegates !== undefined && output.Delegates !== null) {
        contents.Delegates = deserializeAws_json1_1ResourceDelegates(output.Delegates, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListResourcesResponse = (output, context) => {
    let contents = {
        __type: "ListResourcesResponse",
        NextToken: undefined,
        Resources: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Resources !== undefined && output.Resources !== null) {
        contents.Resources = deserializeAws_json1_1Resources(output.Resources, context);
    }
    return contents;
};
const deserializeAws_json1_1ListUsersResponse = (output, context) => {
    let contents = {
        __type: "ListUsersResponse",
        NextToken: undefined,
        Users: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Users !== undefined && output.Users !== null) {
        contents.Users = deserializeAws_json1_1Users(output.Users, context);
    }
    return contents;
};
const deserializeAws_json1_1MailDomainNotFoundException = (output, context) => {
    let contents = {
        __type: "MailDomainNotFoundException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1MailDomainStateException = (output, context) => {
    let contents = {
        __type: "MailDomainStateException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1Member = (output, context) => {
    let contents = {
        __type: "Member",
        DisabledDate: undefined,
        EnabledDate: undefined,
        Id: undefined,
        Name: undefined,
        State: undefined,
        Type: undefined
    };
    if (output.DisabledDate !== undefined && output.DisabledDate !== null) {
        contents.DisabledDate = new Date(Math.round(output.DisabledDate * 1000));
    }
    if (output.EnabledDate !== undefined && output.EnabledDate !== null) {
        contents.EnabledDate = new Date(Math.round(output.EnabledDate * 1000));
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.State !== undefined && output.State !== null) {
        contents.State = output.State;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1Members = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Member(entry, context));
};
const deserializeAws_json1_1NameAvailabilityException = (output, context) => {
    let contents = {
        __type: "NameAvailabilityException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1OrganizationNotFoundException = (output, context) => {
    let contents = {
        __type: "OrganizationNotFoundException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1OrganizationStateException = (output, context) => {
    let contents = {
        __type: "OrganizationStateException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1OrganizationSummaries = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1OrganizationSummary(entry, context));
};
const deserializeAws_json1_1OrganizationSummary = (output, context) => {
    let contents = {
        __type: "OrganizationSummary",
        Alias: undefined,
        ErrorMessage: undefined,
        OrganizationId: undefined,
        State: undefined
    };
    if (output.Alias !== undefined && output.Alias !== null) {
        contents.Alias = output.Alias;
    }
    if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
        contents.ErrorMessage = output.ErrorMessage;
    }
    if (output.OrganizationId !== undefined && output.OrganizationId !== null) {
        contents.OrganizationId = output.OrganizationId;
    }
    if (output.State !== undefined && output.State !== null) {
        contents.State = output.State;
    }
    return contents;
};
const deserializeAws_json1_1Permission = (output, context) => {
    let contents = {
        __type: "Permission",
        GranteeId: undefined,
        GranteeType: undefined,
        PermissionValues: undefined
    };
    if (output.GranteeId !== undefined && output.GranteeId !== null) {
        contents.GranteeId = output.GranteeId;
    }
    if (output.GranteeType !== undefined && output.GranteeType !== null) {
        contents.GranteeType = output.GranteeType;
    }
    if (output.PermissionValues !== undefined &&
        output.PermissionValues !== null) {
        contents.PermissionValues = deserializeAws_json1_1PermissionValues(output.PermissionValues, context);
    }
    return contents;
};
const deserializeAws_json1_1PermissionValues = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1Permissions = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Permission(entry, context));
};
const deserializeAws_json1_1PutMailboxPermissionsResponse = (output, context) => {
    let contents = {
        __type: "PutMailboxPermissionsResponse"
    };
    return contents;
};
const deserializeAws_json1_1RegisterToWorkMailResponse = (output, context) => {
    let contents = {
        __type: "RegisterToWorkMailResponse"
    };
    return contents;
};
const deserializeAws_json1_1ReservedNameException = (output, context) => {
    let contents = {
        __type: "ReservedNameException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ResetPasswordResponse = (output, context) => {
    let contents = {
        __type: "ResetPasswordResponse"
    };
    return contents;
};
const deserializeAws_json1_1Resource = (output, context) => {
    let contents = {
        __type: "Resource",
        DisabledDate: undefined,
        Email: undefined,
        EnabledDate: undefined,
        Id: undefined,
        Name: undefined,
        State: undefined,
        Type: undefined
    };
    if (output.DisabledDate !== undefined && output.DisabledDate !== null) {
        contents.DisabledDate = new Date(Math.round(output.DisabledDate * 1000));
    }
    if (output.Email !== undefined && output.Email !== null) {
        contents.Email = output.Email;
    }
    if (output.EnabledDate !== undefined && output.EnabledDate !== null) {
        contents.EnabledDate = new Date(Math.round(output.EnabledDate * 1000));
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.State !== undefined && output.State !== null) {
        contents.State = output.State;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1ResourceDelegates = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Delegate(entry, context));
};
const deserializeAws_json1_1Resources = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Resource(entry, context));
};
const deserializeAws_json1_1UnsupportedOperationException = (output, context) => {
    let contents = {
        __type: "UnsupportedOperationException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1UpdateMailboxQuotaResponse = (output, context) => {
    let contents = {
        __type: "UpdateMailboxQuotaResponse"
    };
    return contents;
};
const deserializeAws_json1_1UpdatePrimaryEmailAddressResponse = (output, context) => {
    let contents = {
        __type: "UpdatePrimaryEmailAddressResponse"
    };
    return contents;
};
const deserializeAws_json1_1UpdateResourceResponse = (output, context) => {
    let contents = {
        __type: "UpdateResourceResponse"
    };
    return contents;
};
const deserializeAws_json1_1User = (output, context) => {
    let contents = {
        __type: "User",
        DisabledDate: undefined,
        DisplayName: undefined,
        Email: undefined,
        EnabledDate: undefined,
        Id: undefined,
        Name: undefined,
        State: undefined,
        UserRole: undefined
    };
    if (output.DisabledDate !== undefined && output.DisabledDate !== null) {
        contents.DisabledDate = new Date(Math.round(output.DisabledDate * 1000));
    }
    if (output.DisplayName !== undefined && output.DisplayName !== null) {
        contents.DisplayName = output.DisplayName;
    }
    if (output.Email !== undefined && output.Email !== null) {
        contents.Email = output.Email;
    }
    if (output.EnabledDate !== undefined && output.EnabledDate !== null) {
        contents.EnabledDate = new Date(Math.round(output.EnabledDate * 1000));
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.State !== undefined && output.State !== null) {
        contents.State = output.State;
    }
    if (output.UserRole !== undefined && output.UserRole !== null) {
        contents.UserRole = output.UserRole;
    }
    return contents;
};
const deserializeAws_json1_1Users = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1User(entry, context));
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