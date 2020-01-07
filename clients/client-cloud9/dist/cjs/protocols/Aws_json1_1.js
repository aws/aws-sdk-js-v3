"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1CreateEnvironmentEC2Command(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCloud9WorkspaceManagementService.CreateEnvironmentEC2";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateEnvironmentEC2Request(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateEnvironmentEC2Command = serializeAws_json1_1CreateEnvironmentEC2Command;
async function serializeAws_json1_1CreateEnvironmentMembershipCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCloud9WorkspaceManagementService.CreateEnvironmentMembership";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateEnvironmentMembershipRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateEnvironmentMembershipCommand = serializeAws_json1_1CreateEnvironmentMembershipCommand;
async function serializeAws_json1_1DeleteEnvironmentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCloud9WorkspaceManagementService.DeleteEnvironment";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteEnvironmentRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteEnvironmentCommand = serializeAws_json1_1DeleteEnvironmentCommand;
async function serializeAws_json1_1DeleteEnvironmentMembershipCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCloud9WorkspaceManagementService.DeleteEnvironmentMembership";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteEnvironmentMembershipRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteEnvironmentMembershipCommand = serializeAws_json1_1DeleteEnvironmentMembershipCommand;
async function serializeAws_json1_1DescribeEnvironmentMembershipsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCloud9WorkspaceManagementService.DescribeEnvironmentMemberships";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEnvironmentMembershipsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeEnvironmentMembershipsCommand = serializeAws_json1_1DescribeEnvironmentMembershipsCommand;
async function serializeAws_json1_1DescribeEnvironmentStatusCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCloud9WorkspaceManagementService.DescribeEnvironmentStatus";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEnvironmentStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeEnvironmentStatusCommand = serializeAws_json1_1DescribeEnvironmentStatusCommand;
async function serializeAws_json1_1DescribeEnvironmentsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCloud9WorkspaceManagementService.DescribeEnvironments";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEnvironmentsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeEnvironmentsCommand = serializeAws_json1_1DescribeEnvironmentsCommand;
async function serializeAws_json1_1ListEnvironmentsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCloud9WorkspaceManagementService.ListEnvironments";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListEnvironmentsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListEnvironmentsCommand = serializeAws_json1_1ListEnvironmentsCommand;
async function serializeAws_json1_1UpdateEnvironmentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCloud9WorkspaceManagementService.UpdateEnvironment";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateEnvironmentRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateEnvironmentCommand = serializeAws_json1_1UpdateEnvironmentCommand;
async function serializeAws_json1_1UpdateEnvironmentMembershipCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCloud9WorkspaceManagementService.UpdateEnvironmentMembership";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateEnvironmentMembershipRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateEnvironmentMembershipCommand = serializeAws_json1_1UpdateEnvironmentMembershipCommand;
async function deserializeAws_json1_1CreateEnvironmentEC2Command(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateEnvironmentEC2CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateEnvironmentEC2Result(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateEnvironmentEC2Result" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateEnvironmentEC2Command = deserializeAws_json1_1CreateEnvironmentEC2Command;
async function deserializeAws_json1_1CreateEnvironmentEC2CommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazon.AWSCloud9WorkspaceManagement#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConflictException":
        case "com.amazon.AWSCloud9WorkspaceManagement#ConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ForbiddenException":
        case "com.amazon.AWSCloud9WorkspaceManagement#ForbiddenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ForbiddenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazon.AWSCloud9WorkspaceManagement#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.AWSCloud9WorkspaceManagement#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.AWSCloud9WorkspaceManagement#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazon.AWSCloud9WorkspaceManagement#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateEnvironmentMembershipCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateEnvironmentMembershipCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateEnvironmentMembershipResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateEnvironmentMembershipResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateEnvironmentMembershipCommand = deserializeAws_json1_1CreateEnvironmentMembershipCommand;
async function deserializeAws_json1_1CreateEnvironmentMembershipCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazon.AWSCloud9WorkspaceManagement#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConflictException":
        case "com.amazon.AWSCloud9WorkspaceManagement#ConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ForbiddenException":
        case "com.amazon.AWSCloud9WorkspaceManagement#ForbiddenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ForbiddenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazon.AWSCloud9WorkspaceManagement#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.AWSCloud9WorkspaceManagement#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.AWSCloud9WorkspaceManagement#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazon.AWSCloud9WorkspaceManagement#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteEnvironmentCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteEnvironmentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteEnvironmentResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteEnvironmentResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteEnvironmentCommand = deserializeAws_json1_1DeleteEnvironmentCommand;
async function deserializeAws_json1_1DeleteEnvironmentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazon.AWSCloud9WorkspaceManagement#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConflictException":
        case "com.amazon.AWSCloud9WorkspaceManagement#ConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ForbiddenException":
        case "com.amazon.AWSCloud9WorkspaceManagement#ForbiddenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ForbiddenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazon.AWSCloud9WorkspaceManagement#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.AWSCloud9WorkspaceManagement#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.AWSCloud9WorkspaceManagement#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazon.AWSCloud9WorkspaceManagement#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteEnvironmentMembershipCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteEnvironmentMembershipCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteEnvironmentMembershipResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteEnvironmentMembershipResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteEnvironmentMembershipCommand = deserializeAws_json1_1DeleteEnvironmentMembershipCommand;
async function deserializeAws_json1_1DeleteEnvironmentMembershipCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazon.AWSCloud9WorkspaceManagement#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConflictException":
        case "com.amazon.AWSCloud9WorkspaceManagement#ConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ForbiddenException":
        case "com.amazon.AWSCloud9WorkspaceManagement#ForbiddenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ForbiddenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazon.AWSCloud9WorkspaceManagement#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.AWSCloud9WorkspaceManagement#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.AWSCloud9WorkspaceManagement#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazon.AWSCloud9WorkspaceManagement#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeEnvironmentMembershipsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeEnvironmentMembershipsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEnvironmentMembershipsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeEnvironmentMembershipsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeEnvironmentMembershipsCommand = deserializeAws_json1_1DescribeEnvironmentMembershipsCommand;
async function deserializeAws_json1_1DescribeEnvironmentMembershipsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazon.AWSCloud9WorkspaceManagement#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConflictException":
        case "com.amazon.AWSCloud9WorkspaceManagement#ConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ForbiddenException":
        case "com.amazon.AWSCloud9WorkspaceManagement#ForbiddenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ForbiddenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazon.AWSCloud9WorkspaceManagement#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.AWSCloud9WorkspaceManagement#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.AWSCloud9WorkspaceManagement#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazon.AWSCloud9WorkspaceManagement#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeEnvironmentStatusCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeEnvironmentStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEnvironmentStatusResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeEnvironmentStatusResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeEnvironmentStatusCommand = deserializeAws_json1_1DescribeEnvironmentStatusCommand;
async function deserializeAws_json1_1DescribeEnvironmentStatusCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazon.AWSCloud9WorkspaceManagement#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConflictException":
        case "com.amazon.AWSCloud9WorkspaceManagement#ConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ForbiddenException":
        case "com.amazon.AWSCloud9WorkspaceManagement#ForbiddenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ForbiddenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazon.AWSCloud9WorkspaceManagement#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.AWSCloud9WorkspaceManagement#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.AWSCloud9WorkspaceManagement#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazon.AWSCloud9WorkspaceManagement#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeEnvironmentsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeEnvironmentsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEnvironmentsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeEnvironmentsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeEnvironmentsCommand = deserializeAws_json1_1DescribeEnvironmentsCommand;
async function deserializeAws_json1_1DescribeEnvironmentsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazon.AWSCloud9WorkspaceManagement#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConflictException":
        case "com.amazon.AWSCloud9WorkspaceManagement#ConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ForbiddenException":
        case "com.amazon.AWSCloud9WorkspaceManagement#ForbiddenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ForbiddenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazon.AWSCloud9WorkspaceManagement#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.AWSCloud9WorkspaceManagement#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.AWSCloud9WorkspaceManagement#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazon.AWSCloud9WorkspaceManagement#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListEnvironmentsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListEnvironmentsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListEnvironmentsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListEnvironmentsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListEnvironmentsCommand = deserializeAws_json1_1ListEnvironmentsCommand;
async function deserializeAws_json1_1ListEnvironmentsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazon.AWSCloud9WorkspaceManagement#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConflictException":
        case "com.amazon.AWSCloud9WorkspaceManagement#ConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ForbiddenException":
        case "com.amazon.AWSCloud9WorkspaceManagement#ForbiddenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ForbiddenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazon.AWSCloud9WorkspaceManagement#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.AWSCloud9WorkspaceManagement#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.AWSCloud9WorkspaceManagement#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazon.AWSCloud9WorkspaceManagement#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateEnvironmentCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateEnvironmentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateEnvironmentResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateEnvironmentResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateEnvironmentCommand = deserializeAws_json1_1UpdateEnvironmentCommand;
async function deserializeAws_json1_1UpdateEnvironmentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazon.AWSCloud9WorkspaceManagement#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConflictException":
        case "com.amazon.AWSCloud9WorkspaceManagement#ConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ForbiddenException":
        case "com.amazon.AWSCloud9WorkspaceManagement#ForbiddenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ForbiddenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazon.AWSCloud9WorkspaceManagement#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.AWSCloud9WorkspaceManagement#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.AWSCloud9WorkspaceManagement#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazon.AWSCloud9WorkspaceManagement#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateEnvironmentMembershipCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateEnvironmentMembershipCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateEnvironmentMembershipResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateEnvironmentMembershipResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateEnvironmentMembershipCommand = deserializeAws_json1_1UpdateEnvironmentMembershipCommand;
async function deserializeAws_json1_1UpdateEnvironmentMembershipCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazon.AWSCloud9WorkspaceManagement#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConflictException":
        case "com.amazon.AWSCloud9WorkspaceManagement#ConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ForbiddenException":
        case "com.amazon.AWSCloud9WorkspaceManagement#ForbiddenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ForbiddenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerErrorException":
        case "com.amazon.AWSCloud9WorkspaceManagement#InternalServerErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.AWSCloud9WorkspaceManagement#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.AWSCloud9WorkspaceManagement#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazon.AWSCloud9WorkspaceManagement#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
const deserializeAws_json1_1BadRequestExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1BadRequestException(body, context);
    const contents = Object.assign({ name: "BadRequestException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ConflictExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ConflictException(body, context);
    const contents = Object.assign({ name: "ConflictException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ForbiddenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ForbiddenException(body, context);
    const contents = Object.assign({ name: "ForbiddenException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InternalServerErrorExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalServerErrorException(body, context);
    const contents = Object.assign({ name: "InternalServerErrorException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LimitExceededException(body, context);
    const contents = Object.assign({ name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1NotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NotFoundException(body, context);
    const contents = Object.assign({ name: "NotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TooManyRequestsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TooManyRequestsException(body, context);
    const contents = Object.assign({ name: "TooManyRequestsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1BoundedEnvironmentIdList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1CreateEnvironmentEC2Request = (input, context) => {
    const bodyParams = {};
    if (input.automaticStopTimeMinutes !== undefined) {
        bodyParams["automaticStopTimeMinutes"] = input.automaticStopTimeMinutes;
    }
    if (input.clientRequestToken !== undefined) {
        bodyParams["clientRequestToken"] = input.clientRequestToken;
    }
    if (input.description !== undefined) {
        bodyParams["description"] = input.description;
    }
    if (input.instanceType !== undefined) {
        bodyParams["instanceType"] = input.instanceType;
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.ownerArn !== undefined) {
        bodyParams["ownerArn"] = input.ownerArn;
    }
    if (input.subnetId !== undefined) {
        bodyParams["subnetId"] = input.subnetId;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateEnvironmentMembershipRequest = (input, context) => {
    const bodyParams = {};
    if (input.environmentId !== undefined) {
        bodyParams["environmentId"] = input.environmentId;
    }
    if (input.permissions !== undefined) {
        bodyParams["permissions"] = input.permissions;
    }
    if (input.userArn !== undefined) {
        bodyParams["userArn"] = input.userArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteEnvironmentMembershipRequest = (input, context) => {
    const bodyParams = {};
    if (input.environmentId !== undefined) {
        bodyParams["environmentId"] = input.environmentId;
    }
    if (input.userArn !== undefined) {
        bodyParams["userArn"] = input.userArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteEnvironmentRequest = (input, context) => {
    const bodyParams = {};
    if (input.environmentId !== undefined) {
        bodyParams["environmentId"] = input.environmentId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeEnvironmentMembershipsRequest = (input, context) => {
    const bodyParams = {};
    if (input.environmentId !== undefined) {
        bodyParams["environmentId"] = input.environmentId;
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.permissions !== undefined) {
        bodyParams["permissions"] = serializeAws_json1_1PermissionsList(input.permissions, context);
    }
    if (input.userArn !== undefined) {
        bodyParams["userArn"] = input.userArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeEnvironmentStatusRequest = (input, context) => {
    const bodyParams = {};
    if (input.environmentId !== undefined) {
        bodyParams["environmentId"] = input.environmentId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeEnvironmentsRequest = (input, context) => {
    const bodyParams = {};
    if (input.environmentIds !== undefined) {
        bodyParams["environmentIds"] = serializeAws_json1_1BoundedEnvironmentIdList(input.environmentIds, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ListEnvironmentsRequest = (input, context) => {
    const bodyParams = {};
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1PermissionsList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1UpdateEnvironmentMembershipRequest = (input, context) => {
    const bodyParams = {};
    if (input.environmentId !== undefined) {
        bodyParams["environmentId"] = input.environmentId;
    }
    if (input.permissions !== undefined) {
        bodyParams["permissions"] = input.permissions;
    }
    if (input.userArn !== undefined) {
        bodyParams["userArn"] = input.userArn;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateEnvironmentRequest = (input, context) => {
    const bodyParams = {};
    if (input.description !== undefined) {
        bodyParams["description"] = input.description;
    }
    if (input.environmentId !== undefined) {
        bodyParams["environmentId"] = input.environmentId;
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    return bodyParams;
};
const deserializeAws_json1_1BadRequestException = (output, context) => {
    let contents = {
        __type: "BadRequestException",
        className: undefined,
        code: undefined,
        message: undefined
    };
    if (output.className !== undefined && output.className !== null) {
        contents.className = output.className;
    }
    if (output.code !== undefined && output.code !== null) {
        contents.code = output.code;
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ConflictException = (output, context) => {
    let contents = {
        __type: "ConflictException",
        className: undefined,
        code: undefined,
        message: undefined
    };
    if (output.className !== undefined && output.className !== null) {
        contents.className = output.className;
    }
    if (output.code !== undefined && output.code !== null) {
        contents.code = output.code;
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1CreateEnvironmentEC2Result = (output, context) => {
    let contents = {
        __type: "CreateEnvironmentEC2Result",
        environmentId: undefined
    };
    if (output.environmentId !== undefined && output.environmentId !== null) {
        contents.environmentId = output.environmentId;
    }
    return contents;
};
const deserializeAws_json1_1CreateEnvironmentMembershipResult = (output, context) => {
    let contents = {
        __type: "CreateEnvironmentMembershipResult",
        membership: undefined
    };
    if (output.membership !== undefined && output.membership !== null) {
        contents.membership = deserializeAws_json1_1EnvironmentMember(output.membership, context);
    }
    return contents;
};
const deserializeAws_json1_1DeleteEnvironmentMembershipResult = (output, context) => {
    let contents = {
        __type: "DeleteEnvironmentMembershipResult"
    };
    return contents;
};
const deserializeAws_json1_1DeleteEnvironmentResult = (output, context) => {
    let contents = {
        __type: "DeleteEnvironmentResult"
    };
    return contents;
};
const deserializeAws_json1_1DescribeEnvironmentMembershipsResult = (output, context) => {
    let contents = {
        __type: "DescribeEnvironmentMembershipsResult",
        memberships: undefined,
        nextToken: undefined
    };
    if (output.memberships !== undefined && output.memberships !== null) {
        contents.memberships = deserializeAws_json1_1EnvironmentMembersList(output.memberships, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeEnvironmentStatusResult = (output, context) => {
    let contents = {
        __type: "DescribeEnvironmentStatusResult",
        message: undefined,
        status: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    return contents;
};
const deserializeAws_json1_1DescribeEnvironmentsResult = (output, context) => {
    let contents = {
        __type: "DescribeEnvironmentsResult",
        environments: undefined
    };
    if (output.environments !== undefined && output.environments !== null) {
        contents.environments = deserializeAws_json1_1EnvironmentList(output.environments, context);
    }
    return contents;
};
const deserializeAws_json1_1Environment = (output, context) => {
    let contents = {
        __type: "Environment",
        arn: undefined,
        description: undefined,
        id: undefined,
        lifecycle: undefined,
        name: undefined,
        ownerArn: undefined,
        type: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.description !== undefined && output.description !== null) {
        contents.description = output.description;
    }
    if (output.id !== undefined && output.id !== null) {
        contents.id = output.id;
    }
    if (output.lifecycle !== undefined && output.lifecycle !== null) {
        contents.lifecycle = deserializeAws_json1_1EnvironmentLifecycle(output.lifecycle, context);
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.ownerArn !== undefined && output.ownerArn !== null) {
        contents.ownerArn = output.ownerArn;
    }
    if (output.type !== undefined && output.type !== null) {
        contents.type = output.type;
    }
    return contents;
};
const deserializeAws_json1_1EnvironmentIdList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1EnvironmentLifecycle = (output, context) => {
    let contents = {
        __type: "EnvironmentLifecycle",
        failureResource: undefined,
        reason: undefined,
        status: undefined
    };
    if (output.failureResource !== undefined && output.failureResource !== null) {
        contents.failureResource = output.failureResource;
    }
    if (output.reason !== undefined && output.reason !== null) {
        contents.reason = output.reason;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    return contents;
};
const deserializeAws_json1_1EnvironmentList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Environment(entry, context));
};
const deserializeAws_json1_1EnvironmentMember = (output, context) => {
    let contents = {
        __type: "EnvironmentMember",
        environmentId: undefined,
        lastAccess: undefined,
        permissions: undefined,
        userArn: undefined,
        userId: undefined
    };
    if (output.environmentId !== undefined && output.environmentId !== null) {
        contents.environmentId = output.environmentId;
    }
    if (output.lastAccess !== undefined && output.lastAccess !== null) {
        contents.lastAccess = new Date(Math.round(output.lastAccess * 1000));
    }
    if (output.permissions !== undefined && output.permissions !== null) {
        contents.permissions = output.permissions;
    }
    if (output.userArn !== undefined && output.userArn !== null) {
        contents.userArn = output.userArn;
    }
    if (output.userId !== undefined && output.userId !== null) {
        contents.userId = output.userId;
    }
    return contents;
};
const deserializeAws_json1_1EnvironmentMembersList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1EnvironmentMember(entry, context));
};
const deserializeAws_json1_1ForbiddenException = (output, context) => {
    let contents = {
        __type: "ForbiddenException",
        className: undefined,
        code: undefined,
        message: undefined
    };
    if (output.className !== undefined && output.className !== null) {
        contents.className = output.className;
    }
    if (output.code !== undefined && output.code !== null) {
        contents.code = output.code;
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InternalServerErrorException = (output, context) => {
    let contents = {
        __type: "InternalServerErrorException",
        className: undefined,
        code: undefined,
        message: undefined
    };
    if (output.className !== undefined && output.className !== null) {
        contents.className = output.className;
    }
    if (output.code !== undefined && output.code !== null) {
        contents.code = output.code;
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1LimitExceededException = (output, context) => {
    let contents = {
        __type: "LimitExceededException",
        className: undefined,
        code: undefined,
        message: undefined
    };
    if (output.className !== undefined && output.className !== null) {
        contents.className = output.className;
    }
    if (output.code !== undefined && output.code !== null) {
        contents.code = output.code;
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ListEnvironmentsResult = (output, context) => {
    let contents = {
        __type: "ListEnvironmentsResult",
        environmentIds: undefined,
        nextToken: undefined
    };
    if (output.environmentIds !== undefined && output.environmentIds !== null) {
        contents.environmentIds = deserializeAws_json1_1EnvironmentIdList(output.environmentIds, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1NotFoundException = (output, context) => {
    let contents = {
        __type: "NotFoundException",
        className: undefined,
        code: undefined,
        message: undefined
    };
    if (output.className !== undefined && output.className !== null) {
        contents.className = output.className;
    }
    if (output.code !== undefined && output.code !== null) {
        contents.code = output.code;
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1TooManyRequestsException = (output, context) => {
    let contents = {
        __type: "TooManyRequestsException",
        className: undefined,
        code: undefined,
        message: undefined
    };
    if (output.className !== undefined && output.className !== null) {
        contents.className = output.className;
    }
    if (output.code !== undefined && output.code !== null) {
        contents.code = output.code;
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1UpdateEnvironmentMembershipResult = (output, context) => {
    let contents = {
        __type: "UpdateEnvironmentMembershipResult",
        membership: undefined
    };
    if (output.membership !== undefined && output.membership !== null) {
        contents.membership = deserializeAws_json1_1EnvironmentMember(output.membership, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdateEnvironmentResult = (output, context) => {
    let contents = {
        __type: "UpdateEnvironmentResult"
    };
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