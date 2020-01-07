"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1AssociateTeamMemberCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeStar_20170419.AssociateTeamMember";
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateTeamMemberRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AssociateTeamMemberCommand = serializeAws_json1_1AssociateTeamMemberCommand;
async function serializeAws_json1_1CreateProjectCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeStar_20170419.CreateProject";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateProjectRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateProjectCommand = serializeAws_json1_1CreateProjectCommand;
async function serializeAws_json1_1CreateUserProfileCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeStar_20170419.CreateUserProfile";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateUserProfileRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateUserProfileCommand = serializeAws_json1_1CreateUserProfileCommand;
async function serializeAws_json1_1DeleteProjectCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeStar_20170419.DeleteProject";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteProjectRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteProjectCommand = serializeAws_json1_1DeleteProjectCommand;
async function serializeAws_json1_1DeleteUserProfileCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeStar_20170419.DeleteUserProfile";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteUserProfileRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteUserProfileCommand = serializeAws_json1_1DeleteUserProfileCommand;
async function serializeAws_json1_1DescribeProjectCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeStar_20170419.DescribeProject";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeProjectRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeProjectCommand = serializeAws_json1_1DescribeProjectCommand;
async function serializeAws_json1_1DescribeUserProfileCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeStar_20170419.DescribeUserProfile";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeUserProfileRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeUserProfileCommand = serializeAws_json1_1DescribeUserProfileCommand;
async function serializeAws_json1_1DisassociateTeamMemberCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeStar_20170419.DisassociateTeamMember";
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateTeamMemberRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DisassociateTeamMemberCommand = serializeAws_json1_1DisassociateTeamMemberCommand;
async function serializeAws_json1_1ListProjectsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeStar_20170419.ListProjects";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListProjectsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListProjectsCommand = serializeAws_json1_1ListProjectsCommand;
async function serializeAws_json1_1ListResourcesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeStar_20170419.ListResources";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListResourcesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListResourcesCommand = serializeAws_json1_1ListResourcesCommand;
async function serializeAws_json1_1ListTagsForProjectCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeStar_20170419.ListTagsForProject";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForProjectRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTagsForProjectCommand = serializeAws_json1_1ListTagsForProjectCommand;
async function serializeAws_json1_1ListTeamMembersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeStar_20170419.ListTeamMembers";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTeamMembersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTeamMembersCommand = serializeAws_json1_1ListTeamMembersCommand;
async function serializeAws_json1_1ListUserProfilesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeStar_20170419.ListUserProfiles";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListUserProfilesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListUserProfilesCommand = serializeAws_json1_1ListUserProfilesCommand;
async function serializeAws_json1_1TagProjectCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeStar_20170419.TagProject";
    let body;
    body = JSON.stringify(serializeAws_json1_1TagProjectRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1TagProjectCommand = serializeAws_json1_1TagProjectCommand;
async function serializeAws_json1_1UntagProjectCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeStar_20170419.UntagProject";
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagProjectRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UntagProjectCommand = serializeAws_json1_1UntagProjectCommand;
async function serializeAws_json1_1UpdateProjectCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeStar_20170419.UpdateProject";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateProjectRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateProjectCommand = serializeAws_json1_1UpdateProjectCommand;
async function serializeAws_json1_1UpdateTeamMemberCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeStar_20170419.UpdateTeamMember";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateTeamMemberRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateTeamMemberCommand = serializeAws_json1_1UpdateTeamMemberCommand;
async function serializeAws_json1_1UpdateUserProfileCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeStar_20170419.UpdateUserProfile";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateUserProfileRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateUserProfileCommand = serializeAws_json1_1UpdateUserProfileCommand;
async function deserializeAws_json1_1AssociateTeamMemberCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AssociateTeamMemberCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociateTeamMemberResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AssociateTeamMemberResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AssociateTeamMemberCommand = deserializeAws_json1_1AssociateTeamMemberCommand;
async function deserializeAws_json1_1AssociateTeamMemberCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.codestar#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidServiceRoleException":
        case "com.amazonaws.codestar#InvalidServiceRoleException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidServiceRoleExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.codestar#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProjectConfigurationException":
        case "com.amazonaws.codestar#ProjectConfigurationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProjectConfigurationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProjectNotFoundException":
        case "com.amazonaws.codestar#ProjectNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProjectNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TeamMemberAlreadyAssociatedException":
        case "com.amazonaws.codestar#TeamMemberAlreadyAssociatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TeamMemberAlreadyAssociatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.codestar#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
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
        case "ConcurrentModificationException":
        case "com.amazonaws.codestar#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidServiceRoleException":
        case "com.amazonaws.codestar#InvalidServiceRoleException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidServiceRoleExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.codestar#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProjectAlreadyExistsException":
        case "com.amazonaws.codestar#ProjectAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProjectAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProjectConfigurationException":
        case "com.amazonaws.codestar#ProjectConfigurationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProjectConfigurationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProjectCreationFailedException":
        case "com.amazonaws.codestar#ProjectCreationFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProjectCreationFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.codestar#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateUserProfileCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateUserProfileCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateUserProfileResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateUserProfileResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateUserProfileCommand = deserializeAws_json1_1CreateUserProfileCommand;
async function deserializeAws_json1_1CreateUserProfileCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "UserProfileAlreadyExistsException":
        case "com.amazonaws.codestar#UserProfileAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserProfileAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.codestar#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
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
        case "ConcurrentModificationException":
        case "com.amazonaws.codestar#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidServiceRoleException":
        case "com.amazonaws.codestar#InvalidServiceRoleException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidServiceRoleExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.codestar#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteUserProfileCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteUserProfileCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteUserProfileResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteUserProfileResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteUserProfileCommand = deserializeAws_json1_1DeleteUserProfileCommand;
async function deserializeAws_json1_1DeleteUserProfileCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ValidationException":
        case "com.amazonaws.codestar#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeProjectCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeProjectCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeProjectResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeProjectResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeProjectCommand = deserializeAws_json1_1DescribeProjectCommand;
async function deserializeAws_json1_1DescribeProjectCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.codestar#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidServiceRoleException":
        case "com.amazonaws.codestar#InvalidServiceRoleException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidServiceRoleExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProjectConfigurationException":
        case "com.amazonaws.codestar#ProjectConfigurationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProjectConfigurationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProjectNotFoundException":
        case "com.amazonaws.codestar#ProjectNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProjectNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.codestar#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeUserProfileCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeUserProfileCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeUserProfileResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeUserProfileResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeUserProfileCommand = deserializeAws_json1_1DescribeUserProfileCommand;
async function deserializeAws_json1_1DescribeUserProfileCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "UserProfileNotFoundException":
        case "com.amazonaws.codestar#UserProfileNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserProfileNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.codestar#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DisassociateTeamMemberCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DisassociateTeamMemberCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisassociateTeamMemberResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DisassociateTeamMemberResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DisassociateTeamMemberCommand = deserializeAws_json1_1DisassociateTeamMemberCommand;
async function deserializeAws_json1_1DisassociateTeamMemberCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.codestar#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidServiceRoleException":
        case "com.amazonaws.codestar#InvalidServiceRoleException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidServiceRoleExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProjectNotFoundException":
        case "com.amazonaws.codestar#ProjectNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProjectNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.codestar#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
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
        case "InvalidNextTokenException":
        case "com.amazonaws.codestar#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.codestar#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
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
    contents = deserializeAws_json1_1ListResourcesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListResourcesResult" }, contents);
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
        case "InvalidNextTokenException":
        case "com.amazonaws.codestar#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProjectNotFoundException":
        case "com.amazonaws.codestar#ProjectNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProjectNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.codestar#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListTagsForProjectCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListTagsForProjectCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTagsForProjectResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListTagsForProjectResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListTagsForProjectCommand = deserializeAws_json1_1ListTagsForProjectCommand;
async function deserializeAws_json1_1ListTagsForProjectCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.codestar#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProjectNotFoundException":
        case "com.amazonaws.codestar#ProjectNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProjectNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.codestar#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListTeamMembersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListTeamMembersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTeamMembersResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListTeamMembersResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListTeamMembersCommand = deserializeAws_json1_1ListTeamMembersCommand;
async function deserializeAws_json1_1ListTeamMembersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.codestar#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProjectNotFoundException":
        case "com.amazonaws.codestar#ProjectNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProjectNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.codestar#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListUserProfilesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListUserProfilesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListUserProfilesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListUserProfilesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListUserProfilesCommand = deserializeAws_json1_1ListUserProfilesCommand;
async function deserializeAws_json1_1ListUserProfilesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.codestar#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.codestar#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1TagProjectCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1TagProjectCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1TagProjectResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "TagProjectResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1TagProjectCommand = deserializeAws_json1_1TagProjectCommand;
async function deserializeAws_json1_1TagProjectCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.codestar#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.codestar#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProjectNotFoundException":
        case "com.amazonaws.codestar#ProjectNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProjectNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.codestar#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UntagProjectCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UntagProjectCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UntagProjectResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UntagProjectResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UntagProjectCommand = deserializeAws_json1_1UntagProjectCommand;
async function deserializeAws_json1_1UntagProjectCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.codestar#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.codestar#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProjectNotFoundException":
        case "com.amazonaws.codestar#ProjectNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProjectNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.codestar#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
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
        case "ProjectNotFoundException":
        case "com.amazonaws.codestar#ProjectNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProjectNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.codestar#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateTeamMemberCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateTeamMemberCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateTeamMemberResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateTeamMemberResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateTeamMemberCommand = deserializeAws_json1_1UpdateTeamMemberCommand;
async function deserializeAws_json1_1UpdateTeamMemberCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.codestar#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidServiceRoleException":
        case "com.amazonaws.codestar#InvalidServiceRoleException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidServiceRoleExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.codestar#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProjectConfigurationException":
        case "com.amazonaws.codestar#ProjectConfigurationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProjectConfigurationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProjectNotFoundException":
        case "com.amazonaws.codestar#ProjectNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProjectNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TeamMemberNotFoundException":
        case "com.amazonaws.codestar#TeamMemberNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TeamMemberNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.codestar#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateUserProfileCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateUserProfileCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateUserProfileResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateUserProfileResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateUserProfileCommand = deserializeAws_json1_1UpdateUserProfileCommand;
async function deserializeAws_json1_1UpdateUserProfileCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "UserProfileNotFoundException":
        case "com.amazonaws.codestar#UserProfileNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserProfileNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.codestar#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
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
    const contents = Object.assign({ name: "ConcurrentModificationException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidNextTokenException(body, context);
    const contents = Object.assign({ name: "InvalidNextTokenException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidServiceRoleExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidServiceRoleException(body, context);
    const contents = Object.assign({ name: "InvalidServiceRoleException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LimitExceededException(body, context);
    const contents = Object.assign({ name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ProjectAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ProjectAlreadyExistsException(body, context);
    const contents = Object.assign({ name: "ProjectAlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ProjectConfigurationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ProjectConfigurationException(body, context);
    const contents = Object.assign({ name: "ProjectConfigurationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ProjectCreationFailedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ProjectCreationFailedException(body, context);
    const contents = Object.assign({ name: "ProjectCreationFailedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ProjectNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ProjectNotFoundException(body, context);
    const contents = Object.assign({ name: "ProjectNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TeamMemberAlreadyAssociatedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TeamMemberAlreadyAssociatedException(body, context);
    const contents = Object.assign({ name: "TeamMemberAlreadyAssociatedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TeamMemberNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TeamMemberNotFoundException(body, context);
    const contents = Object.assign({ name: "TeamMemberNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1UserProfileAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UserProfileAlreadyExistsException(body, context);
    const contents = Object.assign({ name: "UserProfileAlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1UserProfileNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UserProfileNotFoundException(body, context);
    const contents = Object.assign({ name: "UserProfileNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ValidationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ValidationException(body, context);
    const contents = Object.assign({ name: "ValidationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1AssociateTeamMemberRequest = (input, context) => {
    const bodyParams = {};
    if (input.clientRequestToken !== undefined) {
        bodyParams["clientRequestToken"] = input.clientRequestToken;
    }
    if (input.projectId !== undefined) {
        bodyParams["projectId"] = input.projectId;
    }
    if (input.projectRole !== undefined) {
        bodyParams["projectRole"] = input.projectRole;
    }
    if (input.remoteAccessAllowed !== undefined) {
        bodyParams["remoteAccessAllowed"] = input.remoteAccessAllowed;
    }
    if (input.userArn !== undefined) {
        bodyParams["userArn"] = input.userArn;
    }
    return bodyParams;
};
const serializeAws_json1_1Code = (input, context) => {
    const bodyParams = {};
    if (input.destination !== undefined) {
        bodyParams["destination"] = serializeAws_json1_1CodeDestination(input.destination, context);
    }
    if (input.source !== undefined) {
        bodyParams["source"] = serializeAws_json1_1CodeSource(input.source, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CodeCommitCodeDestination = (input, context) => {
    const bodyParams = {};
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    return bodyParams;
};
const serializeAws_json1_1CodeDestination = (input, context) => {
    const bodyParams = {};
    if (input.codeCommit !== undefined) {
        bodyParams["codeCommit"] = serializeAws_json1_1CodeCommitCodeDestination(input.codeCommit, context);
    }
    if (input.gitHub !== undefined) {
        bodyParams["gitHub"] = serializeAws_json1_1GitHubCodeDestination(input.gitHub, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CodeSource = (input, context) => {
    const bodyParams = {};
    if (input.s3 !== undefined) {
        bodyParams["s3"] = serializeAws_json1_1S3Location(input.s3, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateProjectRequest = (input, context) => {
    const bodyParams = {};
    if (input.clientRequestToken !== undefined) {
        bodyParams["clientRequestToken"] = input.clientRequestToken;
    }
    if (input.description !== undefined) {
        bodyParams["description"] = input.description;
    }
    if (input.id !== undefined) {
        bodyParams["id"] = input.id;
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.sourceCode !== undefined) {
        bodyParams["sourceCode"] = serializeAws_json1_1SourceCode(input.sourceCode, context);
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1Tags(input.tags, context);
    }
    if (input.toolchain !== undefined) {
        bodyParams["toolchain"] = serializeAws_json1_1Toolchain(input.toolchain, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateUserProfileRequest = (input, context) => {
    const bodyParams = {};
    if (input.displayName !== undefined) {
        bodyParams["displayName"] = input.displayName;
    }
    if (input.emailAddress !== undefined) {
        bodyParams["emailAddress"] = input.emailAddress;
    }
    if (input.sshPublicKey !== undefined) {
        bodyParams["sshPublicKey"] = input.sshPublicKey;
    }
    if (input.userArn !== undefined) {
        bodyParams["userArn"] = input.userArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteProjectRequest = (input, context) => {
    const bodyParams = {};
    if (input.clientRequestToken !== undefined) {
        bodyParams["clientRequestToken"] = input.clientRequestToken;
    }
    if (input.deleteStack !== undefined) {
        bodyParams["deleteStack"] = input.deleteStack;
    }
    if (input.id !== undefined) {
        bodyParams["id"] = input.id;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteUserProfileRequest = (input, context) => {
    const bodyParams = {};
    if (input.userArn !== undefined) {
        bodyParams["userArn"] = input.userArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeProjectRequest = (input, context) => {
    const bodyParams = {};
    if (input.id !== undefined) {
        bodyParams["id"] = input.id;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeUserProfileRequest = (input, context) => {
    const bodyParams = {};
    if (input.userArn !== undefined) {
        bodyParams["userArn"] = input.userArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DisassociateTeamMemberRequest = (input, context) => {
    const bodyParams = {};
    if (input.projectId !== undefined) {
        bodyParams["projectId"] = input.projectId;
    }
    if (input.userArn !== undefined) {
        bodyParams["userArn"] = input.userArn;
    }
    return bodyParams;
};
const serializeAws_json1_1GitHubCodeDestination = (input, context) => {
    const bodyParams = {};
    if (input.description !== undefined) {
        bodyParams["description"] = input.description;
    }
    if (input.issuesEnabled !== undefined) {
        bodyParams["issuesEnabled"] = input.issuesEnabled;
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.owner !== undefined) {
        bodyParams["owner"] = input.owner;
    }
    if (input.privateRepository !== undefined) {
        bodyParams["privateRepository"] = input.privateRepository;
    }
    if (input.token !== undefined) {
        bodyParams["token"] = input.token;
    }
    if (input.type !== undefined) {
        bodyParams["type"] = input.type;
    }
    return bodyParams;
};
const serializeAws_json1_1ListProjectsRequest = (input, context) => {
    const bodyParams = {};
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListResourcesRequest = (input, context) => {
    const bodyParams = {};
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.projectId !== undefined) {
        bodyParams["projectId"] = input.projectId;
    }
    return bodyParams;
};
const serializeAws_json1_1ListTagsForProjectRequest = (input, context) => {
    const bodyParams = {};
    if (input.id !== undefined) {
        bodyParams["id"] = input.id;
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListTeamMembersRequest = (input, context) => {
    const bodyParams = {};
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.projectId !== undefined) {
        bodyParams["projectId"] = input.projectId;
    }
    return bodyParams;
};
const serializeAws_json1_1ListUserProfilesRequest = (input, context) => {
    const bodyParams = {};
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1S3Location = (input, context) => {
    const bodyParams = {};
    if (input.bucketKey !== undefined) {
        bodyParams["bucketKey"] = input.bucketKey;
    }
    if (input.bucketName !== undefined) {
        bodyParams["bucketName"] = input.bucketName;
    }
    return bodyParams;
};
const serializeAws_json1_1SourceCode = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Code(entry, context));
    }
    return contents;
};
const serializeAws_json1_1TagKeys = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1TagProjectRequest = (input, context) => {
    const bodyParams = {};
    if (input.id !== undefined) {
        bodyParams["id"] = input.id;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1Tags(input.tags, context);
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
const serializeAws_json1_1TemplateParameterMap = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1Toolchain = (input, context) => {
    const bodyParams = {};
    if (input.roleArn !== undefined) {
        bodyParams["roleArn"] = input.roleArn;
    }
    if (input.source !== undefined) {
        bodyParams["source"] = serializeAws_json1_1ToolchainSource(input.source, context);
    }
    if (input.stackParameters !== undefined) {
        bodyParams["stackParameters"] = serializeAws_json1_1TemplateParameterMap(input.stackParameters, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ToolchainSource = (input, context) => {
    const bodyParams = {};
    if (input.s3 !== undefined) {
        bodyParams["s3"] = serializeAws_json1_1S3Location(input.s3, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UntagProjectRequest = (input, context) => {
    const bodyParams = {};
    if (input.id !== undefined) {
        bodyParams["id"] = input.id;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1TagKeys(input.tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateProjectRequest = (input, context) => {
    const bodyParams = {};
    if (input.description !== undefined) {
        bodyParams["description"] = input.description;
    }
    if (input.id !== undefined) {
        bodyParams["id"] = input.id;
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateTeamMemberRequest = (input, context) => {
    const bodyParams = {};
    if (input.projectId !== undefined) {
        bodyParams["projectId"] = input.projectId;
    }
    if (input.projectRole !== undefined) {
        bodyParams["projectRole"] = input.projectRole;
    }
    if (input.remoteAccessAllowed !== undefined) {
        bodyParams["remoteAccessAllowed"] = input.remoteAccessAllowed;
    }
    if (input.userArn !== undefined) {
        bodyParams["userArn"] = input.userArn;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateUserProfileRequest = (input, context) => {
    const bodyParams = {};
    if (input.displayName !== undefined) {
        bodyParams["displayName"] = input.displayName;
    }
    if (input.emailAddress !== undefined) {
        bodyParams["emailAddress"] = input.emailAddress;
    }
    if (input.sshPublicKey !== undefined) {
        bodyParams["sshPublicKey"] = input.sshPublicKey;
    }
    if (input.userArn !== undefined) {
        bodyParams["userArn"] = input.userArn;
    }
    return bodyParams;
};
const deserializeAws_json1_1AssociateTeamMemberResult = (output, context) => {
    let contents = {
        __type: "AssociateTeamMemberResult",
        clientRequestToken: undefined
    };
    if (output.clientRequestToken !== undefined &&
        output.clientRequestToken !== null) {
        contents.clientRequestToken = output.clientRequestToken;
    }
    return contents;
};
const deserializeAws_json1_1ConcurrentModificationException = (output, context) => {
    let contents = {
        __type: "ConcurrentModificationException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1CreateProjectResult = (output, context) => {
    let contents = {
        __type: "CreateProjectResult",
        arn: undefined,
        clientRequestToken: undefined,
        id: undefined,
        projectTemplateId: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.clientRequestToken !== undefined &&
        output.clientRequestToken !== null) {
        contents.clientRequestToken = output.clientRequestToken;
    }
    if (output.id !== undefined && output.id !== null) {
        contents.id = output.id;
    }
    if (output.projectTemplateId !== undefined &&
        output.projectTemplateId !== null) {
        contents.projectTemplateId = output.projectTemplateId;
    }
    return contents;
};
const deserializeAws_json1_1CreateUserProfileResult = (output, context) => {
    let contents = {
        __type: "CreateUserProfileResult",
        createdTimestamp: undefined,
        displayName: undefined,
        emailAddress: undefined,
        lastModifiedTimestamp: undefined,
        sshPublicKey: undefined,
        userArn: undefined
    };
    if (output.createdTimestamp !== undefined &&
        output.createdTimestamp !== null) {
        contents.createdTimestamp = new Date(Math.round(output.createdTimestamp * 1000));
    }
    if (output.displayName !== undefined && output.displayName !== null) {
        contents.displayName = output.displayName;
    }
    if (output.emailAddress !== undefined && output.emailAddress !== null) {
        contents.emailAddress = output.emailAddress;
    }
    if (output.lastModifiedTimestamp !== undefined &&
        output.lastModifiedTimestamp !== null) {
        contents.lastModifiedTimestamp = new Date(Math.round(output.lastModifiedTimestamp * 1000));
    }
    if (output.sshPublicKey !== undefined && output.sshPublicKey !== null) {
        contents.sshPublicKey = output.sshPublicKey;
    }
    if (output.userArn !== undefined && output.userArn !== null) {
        contents.userArn = output.userArn;
    }
    return contents;
};
const deserializeAws_json1_1DeleteProjectResult = (output, context) => {
    let contents = {
        __type: "DeleteProjectResult",
        projectArn: undefined,
        stackId: undefined
    };
    if (output.projectArn !== undefined && output.projectArn !== null) {
        contents.projectArn = output.projectArn;
    }
    if (output.stackId !== undefined && output.stackId !== null) {
        contents.stackId = output.stackId;
    }
    return contents;
};
const deserializeAws_json1_1DeleteUserProfileResult = (output, context) => {
    let contents = {
        __type: "DeleteUserProfileResult",
        userArn: undefined
    };
    if (output.userArn !== undefined && output.userArn !== null) {
        contents.userArn = output.userArn;
    }
    return contents;
};
const deserializeAws_json1_1DescribeProjectResult = (output, context) => {
    let contents = {
        __type: "DescribeProjectResult",
        arn: undefined,
        clientRequestToken: undefined,
        createdTimeStamp: undefined,
        description: undefined,
        id: undefined,
        name: undefined,
        projectTemplateId: undefined,
        stackId: undefined,
        status: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.clientRequestToken !== undefined &&
        output.clientRequestToken !== null) {
        contents.clientRequestToken = output.clientRequestToken;
    }
    if (output.createdTimeStamp !== undefined &&
        output.createdTimeStamp !== null) {
        contents.createdTimeStamp = new Date(Math.round(output.createdTimeStamp * 1000));
    }
    if (output.description !== undefined && output.description !== null) {
        contents.description = output.description;
    }
    if (output.id !== undefined && output.id !== null) {
        contents.id = output.id;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.projectTemplateId !== undefined &&
        output.projectTemplateId !== null) {
        contents.projectTemplateId = output.projectTemplateId;
    }
    if (output.stackId !== undefined && output.stackId !== null) {
        contents.stackId = output.stackId;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = deserializeAws_json1_1ProjectStatus(output.status, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeUserProfileResult = (output, context) => {
    let contents = {
        __type: "DescribeUserProfileResult",
        createdTimestamp: undefined,
        displayName: undefined,
        emailAddress: undefined,
        lastModifiedTimestamp: undefined,
        sshPublicKey: undefined,
        userArn: undefined
    };
    if (output.createdTimestamp !== undefined &&
        output.createdTimestamp !== null) {
        contents.createdTimestamp = new Date(Math.round(output.createdTimestamp * 1000));
    }
    if (output.displayName !== undefined && output.displayName !== null) {
        contents.displayName = output.displayName;
    }
    if (output.emailAddress !== undefined && output.emailAddress !== null) {
        contents.emailAddress = output.emailAddress;
    }
    if (output.lastModifiedTimestamp !== undefined &&
        output.lastModifiedTimestamp !== null) {
        contents.lastModifiedTimestamp = new Date(Math.round(output.lastModifiedTimestamp * 1000));
    }
    if (output.sshPublicKey !== undefined && output.sshPublicKey !== null) {
        contents.sshPublicKey = output.sshPublicKey;
    }
    if (output.userArn !== undefined && output.userArn !== null) {
        contents.userArn = output.userArn;
    }
    return contents;
};
const deserializeAws_json1_1DisassociateTeamMemberResult = (output, context) => {
    let contents = {
        __type: "DisassociateTeamMemberResult"
    };
    return contents;
};
const deserializeAws_json1_1InvalidNextTokenException = (output, context) => {
    let contents = {
        __type: "InvalidNextTokenException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidServiceRoleException = (output, context) => {
    let contents = {
        __type: "InvalidServiceRoleException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
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
        contents.projects = deserializeAws_json1_1ProjectsList(output.projects, context);
    }
    return contents;
};
const deserializeAws_json1_1ListResourcesResult = (output, context) => {
    let contents = {
        __type: "ListResourcesResult",
        nextToken: undefined,
        resources: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.resources !== undefined && output.resources !== null) {
        contents.resources = deserializeAws_json1_1ResourcesResult(output.resources, context);
    }
    return contents;
};
const deserializeAws_json1_1ListTagsForProjectResult = (output, context) => {
    let contents = {
        __type: "ListTagsForProjectResult",
        nextToken: undefined,
        tags: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.tags !== undefined && output.tags !== null) {
        contents.tags = deserializeAws_json1_1Tags(output.tags, context);
    }
    return contents;
};
const deserializeAws_json1_1ListTeamMembersResult = (output, context) => {
    let contents = {
        __type: "ListTeamMembersResult",
        nextToken: undefined,
        teamMembers: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.teamMembers !== undefined && output.teamMembers !== null) {
        contents.teamMembers = deserializeAws_json1_1TeamMemberResult(output.teamMembers, context);
    }
    return contents;
};
const deserializeAws_json1_1ListUserProfilesResult = (output, context) => {
    let contents = {
        __type: "ListUserProfilesResult",
        nextToken: undefined,
        userProfiles: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.userProfiles !== undefined && output.userProfiles !== null) {
        contents.userProfiles = deserializeAws_json1_1UserProfilesList(output.userProfiles, context);
    }
    return contents;
};
const deserializeAws_json1_1ProjectAlreadyExistsException = (output, context) => {
    let contents = {
        __type: "ProjectAlreadyExistsException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ProjectConfigurationException = (output, context) => {
    let contents = {
        __type: "ProjectConfigurationException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ProjectCreationFailedException = (output, context) => {
    let contents = {
        __type: "ProjectCreationFailedException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ProjectNotFoundException = (output, context) => {
    let contents = {
        __type: "ProjectNotFoundException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ProjectStatus = (output, context) => {
    let contents = {
        __type: "ProjectStatus",
        reason: undefined,
        state: undefined
    };
    if (output.reason !== undefined && output.reason !== null) {
        contents.reason = output.reason;
    }
    if (output.state !== undefined && output.state !== null) {
        contents.state = output.state;
    }
    return contents;
};
const deserializeAws_json1_1ProjectSummary = (output, context) => {
    let contents = {
        __type: "ProjectSummary",
        projectArn: undefined,
        projectId: undefined
    };
    if (output.projectArn !== undefined && output.projectArn !== null) {
        contents.projectArn = output.projectArn;
    }
    if (output.projectId !== undefined && output.projectId !== null) {
        contents.projectId = output.projectId;
    }
    return contents;
};
const deserializeAws_json1_1ProjectsList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ProjectSummary(entry, context));
};
const deserializeAws_json1_1Resource = (output, context) => {
    let contents = {
        __type: "Resource",
        id: undefined
    };
    if (output.id !== undefined && output.id !== null) {
        contents.id = output.id;
    }
    return contents;
};
const deserializeAws_json1_1ResourcesResult = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Resource(entry, context));
};
const deserializeAws_json1_1TagProjectResult = (output, context) => {
    let contents = {
        __type: "TagProjectResult",
        tags: undefined
    };
    if (output.tags !== undefined && output.tags !== null) {
        contents.tags = deserializeAws_json1_1Tags(output.tags, context);
    }
    return contents;
};
const deserializeAws_json1_1Tags = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1TeamMember = (output, context) => {
    let contents = {
        __type: "TeamMember",
        projectRole: undefined,
        remoteAccessAllowed: undefined,
        userArn: undefined
    };
    if (output.projectRole !== undefined && output.projectRole !== null) {
        contents.projectRole = output.projectRole;
    }
    if (output.remoteAccessAllowed !== undefined &&
        output.remoteAccessAllowed !== null) {
        contents.remoteAccessAllowed = output.remoteAccessAllowed;
    }
    if (output.userArn !== undefined && output.userArn !== null) {
        contents.userArn = output.userArn;
    }
    return contents;
};
const deserializeAws_json1_1TeamMemberAlreadyAssociatedException = (output, context) => {
    let contents = {
        __type: "TeamMemberAlreadyAssociatedException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1TeamMemberNotFoundException = (output, context) => {
    let contents = {
        __type: "TeamMemberNotFoundException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1TeamMemberResult = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1TeamMember(entry, context));
};
const deserializeAws_json1_1UntagProjectResult = (output, context) => {
    let contents = {
        __type: "UntagProjectResult"
    };
    return contents;
};
const deserializeAws_json1_1UpdateProjectResult = (output, context) => {
    let contents = {
        __type: "UpdateProjectResult"
    };
    return contents;
};
const deserializeAws_json1_1UpdateTeamMemberResult = (output, context) => {
    let contents = {
        __type: "UpdateTeamMemberResult",
        projectRole: undefined,
        remoteAccessAllowed: undefined,
        userArn: undefined
    };
    if (output.projectRole !== undefined && output.projectRole !== null) {
        contents.projectRole = output.projectRole;
    }
    if (output.remoteAccessAllowed !== undefined &&
        output.remoteAccessAllowed !== null) {
        contents.remoteAccessAllowed = output.remoteAccessAllowed;
    }
    if (output.userArn !== undefined && output.userArn !== null) {
        contents.userArn = output.userArn;
    }
    return contents;
};
const deserializeAws_json1_1UpdateUserProfileResult = (output, context) => {
    let contents = {
        __type: "UpdateUserProfileResult",
        createdTimestamp: undefined,
        displayName: undefined,
        emailAddress: undefined,
        lastModifiedTimestamp: undefined,
        sshPublicKey: undefined,
        userArn: undefined
    };
    if (output.createdTimestamp !== undefined &&
        output.createdTimestamp !== null) {
        contents.createdTimestamp = new Date(Math.round(output.createdTimestamp * 1000));
    }
    if (output.displayName !== undefined && output.displayName !== null) {
        contents.displayName = output.displayName;
    }
    if (output.emailAddress !== undefined && output.emailAddress !== null) {
        contents.emailAddress = output.emailAddress;
    }
    if (output.lastModifiedTimestamp !== undefined &&
        output.lastModifiedTimestamp !== null) {
        contents.lastModifiedTimestamp = new Date(Math.round(output.lastModifiedTimestamp * 1000));
    }
    if (output.sshPublicKey !== undefined && output.sshPublicKey !== null) {
        contents.sshPublicKey = output.sshPublicKey;
    }
    if (output.userArn !== undefined && output.userArn !== null) {
        contents.userArn = output.userArn;
    }
    return contents;
};
const deserializeAws_json1_1UserProfileAlreadyExistsException = (output, context) => {
    let contents = {
        __type: "UserProfileAlreadyExistsException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1UserProfileNotFoundException = (output, context) => {
    let contents = {
        __type: "UserProfileNotFoundException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1UserProfileSummary = (output, context) => {
    let contents = {
        __type: "UserProfileSummary",
        displayName: undefined,
        emailAddress: undefined,
        sshPublicKey: undefined,
        userArn: undefined
    };
    if (output.displayName !== undefined && output.displayName !== null) {
        contents.displayName = output.displayName;
    }
    if (output.emailAddress !== undefined && output.emailAddress !== null) {
        contents.emailAddress = output.emailAddress;
    }
    if (output.sshPublicKey !== undefined && output.sshPublicKey !== null) {
        contents.sshPublicKey = output.sshPublicKey;
    }
    if (output.userArn !== undefined && output.userArn !== null) {
        contents.userArn = output.userArn;
    }
    return contents;
};
const deserializeAws_json1_1UserProfilesList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1UserProfileSummary(entry, context));
};
const deserializeAws_json1_1ValidationException = (output, context) => {
    let contents = {
        __type: "ValidationException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
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