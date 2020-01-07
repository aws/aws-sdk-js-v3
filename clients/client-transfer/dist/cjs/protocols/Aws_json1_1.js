"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1CreateServerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TransferService.CreateServer";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateServerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateServerCommand = serializeAws_json1_1CreateServerCommand;
async function serializeAws_json1_1CreateUserCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TransferService.CreateUser";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateUserRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateUserCommand = serializeAws_json1_1CreateUserCommand;
async function serializeAws_json1_1DeleteServerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TransferService.DeleteServer";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteServerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteServerCommand = serializeAws_json1_1DeleteServerCommand;
async function serializeAws_json1_1DeleteSshPublicKeyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TransferService.DeleteSshPublicKey";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteSshPublicKeyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteSshPublicKeyCommand = serializeAws_json1_1DeleteSshPublicKeyCommand;
async function serializeAws_json1_1DeleteUserCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TransferService.DeleteUser";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteUserRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteUserCommand = serializeAws_json1_1DeleteUserCommand;
async function serializeAws_json1_1DescribeServerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TransferService.DescribeServer";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeServerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeServerCommand = serializeAws_json1_1DescribeServerCommand;
async function serializeAws_json1_1DescribeUserCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TransferService.DescribeUser";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeUserRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeUserCommand = serializeAws_json1_1DescribeUserCommand;
async function serializeAws_json1_1ImportSshPublicKeyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TransferService.ImportSshPublicKey";
    let body;
    body = JSON.stringify(serializeAws_json1_1ImportSshPublicKeyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ImportSshPublicKeyCommand = serializeAws_json1_1ImportSshPublicKeyCommand;
async function serializeAws_json1_1ListServersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TransferService.ListServers";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListServersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListServersCommand = serializeAws_json1_1ListServersCommand;
async function serializeAws_json1_1ListTagsForResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TransferService.ListTagsForResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
async function serializeAws_json1_1ListUsersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TransferService.ListUsers";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListUsersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListUsersCommand = serializeAws_json1_1ListUsersCommand;
async function serializeAws_json1_1StartServerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TransferService.StartServer";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartServerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartServerCommand = serializeAws_json1_1StartServerCommand;
async function serializeAws_json1_1StopServerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TransferService.StopServer";
    let body;
    body = JSON.stringify(serializeAws_json1_1StopServerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StopServerCommand = serializeAws_json1_1StopServerCommand;
async function serializeAws_json1_1TagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TransferService.TagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
async function serializeAws_json1_1TestIdentityProviderCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TransferService.TestIdentityProvider";
    let body;
    body = JSON.stringify(serializeAws_json1_1TestIdentityProviderRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1TestIdentityProviderCommand = serializeAws_json1_1TestIdentityProviderCommand;
async function serializeAws_json1_1UntagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TransferService.UntagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
async function serializeAws_json1_1UpdateServerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TransferService.UpdateServer";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateServerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateServerCommand = serializeAws_json1_1UpdateServerCommand;
async function serializeAws_json1_1UpdateUserCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TransferService.UpdateUser";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateUserRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateUserCommand = serializeAws_json1_1UpdateUserCommand;
async function deserializeAws_json1_1CreateServerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateServerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateServerResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateServerResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateServerCommand = deserializeAws_json1_1CreateServerCommand;
async function deserializeAws_json1_1CreateServerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ServiceUnavailableException":
        case "com.amazon.coral.service#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceError":
        case "com.amazonaws.necco.coral#InternalServiceError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.necco.coral#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceExistsException":
        case "com.amazonaws.necco.coral#ResourceExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
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
        case "ServiceUnavailableException":
        case "com.amazon.coral.service#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceError":
        case "com.amazonaws.necco.coral#InternalServiceError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.necco.coral#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceExistsException":
        case "com.amazonaws.necco.coral#ResourceExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.necco.coral#ResourceNotFoundException":
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
async function deserializeAws_json1_1DeleteServerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteServerCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteServerCommand = deserializeAws_json1_1DeleteServerCommand;
async function deserializeAws_json1_1DeleteServerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ServiceUnavailableException":
        case "com.amazon.coral.service#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceError":
        case "com.amazonaws.necco.coral#InternalServiceError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.necco.coral#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.necco.coral#ResourceNotFoundException":
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
async function deserializeAws_json1_1DeleteSshPublicKeyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteSshPublicKeyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteSshPublicKeyCommand = deserializeAws_json1_1DeleteSshPublicKeyCommand;
async function deserializeAws_json1_1DeleteSshPublicKeyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ServiceUnavailableException":
        case "com.amazon.coral.service#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceError":
        case "com.amazonaws.necco.coral#InternalServiceError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.necco.coral#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.necco.coral#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.necco.coral#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
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
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
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
        case "ServiceUnavailableException":
        case "com.amazon.coral.service#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceError":
        case "com.amazonaws.necco.coral#InternalServiceError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.necco.coral#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.necco.coral#ResourceNotFoundException":
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
async function deserializeAws_json1_1DescribeServerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeServerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeServerResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeServerResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeServerCommand = deserializeAws_json1_1DescribeServerCommand;
async function deserializeAws_json1_1DescribeServerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ServiceUnavailableException":
        case "com.amazon.coral.service#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceError":
        case "com.amazonaws.necco.coral#InternalServiceError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.necco.coral#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.necco.coral#ResourceNotFoundException":
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
        case "ServiceUnavailableException":
        case "com.amazon.coral.service#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceError":
        case "com.amazonaws.necco.coral#InternalServiceError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.necco.coral#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.necco.coral#ResourceNotFoundException":
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
async function deserializeAws_json1_1ImportSshPublicKeyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ImportSshPublicKeyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ImportSshPublicKeyResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ImportSshPublicKeyResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ImportSshPublicKeyCommand = deserializeAws_json1_1ImportSshPublicKeyCommand;
async function deserializeAws_json1_1ImportSshPublicKeyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ServiceUnavailableException":
        case "com.amazon.coral.service#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceError":
        case "com.amazonaws.necco.coral#InternalServiceError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.necco.coral#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceExistsException":
        case "com.amazonaws.necco.coral#ResourceExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.necco.coral#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.necco.coral#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListServersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListServersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListServersResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListServersResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListServersCommand = deserializeAws_json1_1ListServersCommand;
async function deserializeAws_json1_1ListServersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ServiceUnavailableException":
        case "com.amazon.coral.service#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceError":
        case "com.amazonaws.necco.coral#InternalServiceError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.necco.coral#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.necco.coral#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
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
        case "ServiceUnavailableException":
        case "com.amazon.coral.service#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceError":
        case "com.amazonaws.necco.coral#InternalServiceError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.necco.coral#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.necco.coral#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
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
        case "ServiceUnavailableException":
        case "com.amazon.coral.service#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceError":
        case "com.amazonaws.necco.coral#InternalServiceError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.necco.coral#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.necco.coral#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.necco.coral#ResourceNotFoundException":
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
async function deserializeAws_json1_1StartServerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartServerCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartServerCommand = deserializeAws_json1_1StartServerCommand;
async function deserializeAws_json1_1StartServerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ServiceUnavailableException":
        case "com.amazon.coral.service#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceError":
        case "com.amazonaws.necco.coral#InternalServiceError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.necco.coral#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.necco.coral#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.necco.coral#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1StopServerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StopServerCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StopServerCommand = deserializeAws_json1_1StopServerCommand;
async function deserializeAws_json1_1StopServerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ServiceUnavailableException":
        case "com.amazon.coral.service#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceError":
        case "com.amazonaws.necco.coral#InternalServiceError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.necco.coral#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.necco.coral#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.necco.coral#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
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
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
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
        case "ServiceUnavailableException":
        case "com.amazon.coral.service#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceError":
        case "com.amazonaws.necco.coral#InternalServiceError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.necco.coral#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.necco.coral#ResourceNotFoundException":
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
async function deserializeAws_json1_1TestIdentityProviderCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1TestIdentityProviderCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1TestIdentityProviderResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "TestIdentityProviderResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1TestIdentityProviderCommand = deserializeAws_json1_1TestIdentityProviderCommand;
async function deserializeAws_json1_1TestIdentityProviderCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ServiceUnavailableException":
        case "com.amazon.coral.service#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceError":
        case "com.amazonaws.necco.coral#InternalServiceError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.necco.coral#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.necco.coral#ResourceNotFoundException":
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
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
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
        case "ServiceUnavailableException":
        case "com.amazon.coral.service#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceError":
        case "com.amazonaws.necco.coral#InternalServiceError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.necco.coral#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.necco.coral#ResourceNotFoundException":
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
async function deserializeAws_json1_1UpdateServerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateServerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateServerResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateServerResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateServerCommand = deserializeAws_json1_1UpdateServerCommand;
async function deserializeAws_json1_1UpdateServerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ServiceUnavailableException":
        case "com.amazon.coral.service#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConflictException":
        case "com.amazonaws.necco.coral#ConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceError":
        case "com.amazonaws.necco.coral#InternalServiceError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.necco.coral#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceExistsException":
        case "com.amazonaws.necco.coral#ResourceExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.necco.coral#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.necco.coral#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateUserCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateUserCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateUserResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateUserResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateUserCommand = deserializeAws_json1_1UpdateUserCommand;
async function deserializeAws_json1_1UpdateUserCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ServiceUnavailableException":
        case "com.amazon.coral.service#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceError":
        case "com.amazonaws.necco.coral#InternalServiceError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.necco.coral#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.necco.coral#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.necco.coral#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
const deserializeAws_json1_1ServiceUnavailableExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ServiceUnavailableException(body, context);
    const contents = Object.assign({ name: "ServiceUnavailableException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ConflictExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ConflictException(body, context);
    const contents = Object.assign({ name: "ConflictException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InternalServiceErrorResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalServiceError(body, context);
    const contents = Object.assign({ name: "InternalServiceError", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidNextTokenException(body, context);
    const contents = Object.assign({ name: "InvalidNextTokenException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidRequestExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidRequestException(body, context);
    const contents = Object.assign({ name: "InvalidRequestException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceExistsException(body, context);
    const contents = Object.assign({ name: "ResourceExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceNotFoundException(body, context);
    const contents = Object.assign({ name: "ResourceNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ThrottlingExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ThrottlingException(body, context);
    const contents = Object.assign({ name: "ThrottlingException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1AddressAllocationIds = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1CreateServerRequest = (input, context) => {
    const bodyParams = {};
    if (input.EndpointDetails !== undefined) {
        bodyParams["EndpointDetails"] = serializeAws_json1_1EndpointDetails(input.EndpointDetails, context);
    }
    if (input.EndpointType !== undefined) {
        bodyParams["EndpointType"] = input.EndpointType;
    }
    if (input.HostKey !== undefined) {
        bodyParams["HostKey"] = input.HostKey;
    }
    if (input.IdentityProviderDetails !== undefined) {
        bodyParams["IdentityProviderDetails"] = serializeAws_json1_1IdentityProviderDetails(input.IdentityProviderDetails, context);
    }
    if (input.IdentityProviderType !== undefined) {
        bodyParams["IdentityProviderType"] = input.IdentityProviderType;
    }
    if (input.LoggingRole !== undefined) {
        bodyParams["LoggingRole"] = input.LoggingRole;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1Tags(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateUserRequest = (input, context) => {
    const bodyParams = {};
    if (input.HomeDirectory !== undefined) {
        bodyParams["HomeDirectory"] = input.HomeDirectory;
    }
    if (input.HomeDirectoryMappings !== undefined) {
        bodyParams["HomeDirectoryMappings"] = serializeAws_json1_1HomeDirectoryMappings(input.HomeDirectoryMappings, context);
    }
    if (input.HomeDirectoryType !== undefined) {
        bodyParams["HomeDirectoryType"] = input.HomeDirectoryType;
    }
    if (input.Policy !== undefined) {
        bodyParams["Policy"] = input.Policy;
    }
    if (input.Role !== undefined) {
        bodyParams["Role"] = input.Role;
    }
    if (input.ServerId !== undefined) {
        bodyParams["ServerId"] = input.ServerId;
    }
    if (input.SshPublicKeyBody !== undefined) {
        bodyParams["SshPublicKeyBody"] = input.SshPublicKeyBody;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1Tags(input.Tags, context);
    }
    if (input.UserName !== undefined) {
        bodyParams["UserName"] = input.UserName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteServerRequest = (input, context) => {
    const bodyParams = {};
    if (input.ServerId !== undefined) {
        bodyParams["ServerId"] = input.ServerId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteSshPublicKeyRequest = (input, context) => {
    const bodyParams = {};
    if (input.ServerId !== undefined) {
        bodyParams["ServerId"] = input.ServerId;
    }
    if (input.SshPublicKeyId !== undefined) {
        bodyParams["SshPublicKeyId"] = input.SshPublicKeyId;
    }
    if (input.UserName !== undefined) {
        bodyParams["UserName"] = input.UserName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteUserRequest = (input, context) => {
    const bodyParams = {};
    if (input.ServerId !== undefined) {
        bodyParams["ServerId"] = input.ServerId;
    }
    if (input.UserName !== undefined) {
        bodyParams["UserName"] = input.UserName;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeServerRequest = (input, context) => {
    const bodyParams = {};
    if (input.ServerId !== undefined) {
        bodyParams["ServerId"] = input.ServerId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeUserRequest = (input, context) => {
    const bodyParams = {};
    if (input.ServerId !== undefined) {
        bodyParams["ServerId"] = input.ServerId;
    }
    if (input.UserName !== undefined) {
        bodyParams["UserName"] = input.UserName;
    }
    return bodyParams;
};
const serializeAws_json1_1EndpointDetails = (input, context) => {
    const bodyParams = {};
    if (input.AddressAllocationIds !== undefined) {
        bodyParams["AddressAllocationIds"] = serializeAws_json1_1AddressAllocationIds(input.AddressAllocationIds, context);
    }
    if (input.SubnetIds !== undefined) {
        bodyParams["SubnetIds"] = serializeAws_json1_1SubnetIds(input.SubnetIds, context);
    }
    if (input.VpcEndpointId !== undefined) {
        bodyParams["VpcEndpointId"] = input.VpcEndpointId;
    }
    if (input.VpcId !== undefined) {
        bodyParams["VpcId"] = input.VpcId;
    }
    return bodyParams;
};
const serializeAws_json1_1HomeDirectoryMapEntry = (input, context) => {
    const bodyParams = {};
    if (input.Entry !== undefined) {
        bodyParams["Entry"] = input.Entry;
    }
    if (input.Target !== undefined) {
        bodyParams["Target"] = input.Target;
    }
    return bodyParams;
};
const serializeAws_json1_1HomeDirectoryMappings = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1HomeDirectoryMapEntry(entry, context));
    }
    return contents;
};
const serializeAws_json1_1IdentityProviderDetails = (input, context) => {
    const bodyParams = {};
    if (input.InvocationRole !== undefined) {
        bodyParams["InvocationRole"] = input.InvocationRole;
    }
    if (input.Url !== undefined) {
        bodyParams["Url"] = input.Url;
    }
    return bodyParams;
};
const serializeAws_json1_1ImportSshPublicKeyRequest = (input, context) => {
    const bodyParams = {};
    if (input.ServerId !== undefined) {
        bodyParams["ServerId"] = input.ServerId;
    }
    if (input.SshPublicKeyBody !== undefined) {
        bodyParams["SshPublicKeyBody"] = input.SshPublicKeyBody;
    }
    if (input.UserName !== undefined) {
        bodyParams["UserName"] = input.UserName;
    }
    return bodyParams;
};
const serializeAws_json1_1ListServersRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListTagsForResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.Arn !== undefined) {
        bodyParams["Arn"] = input.Arn;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
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
    if (input.ServerId !== undefined) {
        bodyParams["ServerId"] = input.ServerId;
    }
    return bodyParams;
};
const serializeAws_json1_1StartServerRequest = (input, context) => {
    const bodyParams = {};
    if (input.ServerId !== undefined) {
        bodyParams["ServerId"] = input.ServerId;
    }
    return bodyParams;
};
const serializeAws_json1_1StopServerRequest = (input, context) => {
    const bodyParams = {};
    if (input.ServerId !== undefined) {
        bodyParams["ServerId"] = input.ServerId;
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
const serializeAws_json1_1TagResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.Arn !== undefined) {
        bodyParams["Arn"] = input.Arn;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1Tags(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1Tags = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Tag(entry, context));
    }
    return contents;
};
const serializeAws_json1_1TestIdentityProviderRequest = (input, context) => {
    const bodyParams = {};
    if (input.ServerId !== undefined) {
        bodyParams["ServerId"] = input.ServerId;
    }
    if (input.UserName !== undefined) {
        bodyParams["UserName"] = input.UserName;
    }
    if (input.UserPassword !== undefined) {
        bodyParams["UserPassword"] = input.UserPassword;
    }
    return bodyParams;
};
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.Arn !== undefined) {
        bodyParams["Arn"] = input.Arn;
    }
    if (input.TagKeys !== undefined) {
        bodyParams["TagKeys"] = serializeAws_json1_1TagKeys(input.TagKeys, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateServerRequest = (input, context) => {
    const bodyParams = {};
    if (input.EndpointDetails !== undefined) {
        bodyParams["EndpointDetails"] = serializeAws_json1_1EndpointDetails(input.EndpointDetails, context);
    }
    if (input.EndpointType !== undefined) {
        bodyParams["EndpointType"] = input.EndpointType;
    }
    if (input.HostKey !== undefined) {
        bodyParams["HostKey"] = input.HostKey;
    }
    if (input.IdentityProviderDetails !== undefined) {
        bodyParams["IdentityProviderDetails"] = serializeAws_json1_1IdentityProviderDetails(input.IdentityProviderDetails, context);
    }
    if (input.LoggingRole !== undefined) {
        bodyParams["LoggingRole"] = input.LoggingRole;
    }
    if (input.ServerId !== undefined) {
        bodyParams["ServerId"] = input.ServerId;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateUserRequest = (input, context) => {
    const bodyParams = {};
    if (input.HomeDirectory !== undefined) {
        bodyParams["HomeDirectory"] = input.HomeDirectory;
    }
    if (input.HomeDirectoryMappings !== undefined) {
        bodyParams["HomeDirectoryMappings"] = serializeAws_json1_1HomeDirectoryMappings(input.HomeDirectoryMappings, context);
    }
    if (input.HomeDirectoryType !== undefined) {
        bodyParams["HomeDirectoryType"] = input.HomeDirectoryType;
    }
    if (input.Policy !== undefined) {
        bodyParams["Policy"] = input.Policy;
    }
    if (input.Role !== undefined) {
        bodyParams["Role"] = input.Role;
    }
    if (input.ServerId !== undefined) {
        bodyParams["ServerId"] = input.ServerId;
    }
    if (input.UserName !== undefined) {
        bodyParams["UserName"] = input.UserName;
    }
    return bodyParams;
};
const deserializeAws_json1_1ServiceUnavailableException = (output, context) => {
    let contents = {
        __type: "ServiceUnavailableException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1AddressAllocationIds = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1ConflictException = (output, context) => {
    let contents = {
        __type: "ConflictException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1CreateServerResponse = (output, context) => {
    let contents = {
        __type: "CreateServerResponse",
        ServerId: undefined
    };
    if (output.ServerId !== undefined && output.ServerId !== null) {
        contents.ServerId = output.ServerId;
    }
    return contents;
};
const deserializeAws_json1_1CreateUserResponse = (output, context) => {
    let contents = {
        __type: "CreateUserResponse",
        ServerId: undefined,
        UserName: undefined
    };
    if (output.ServerId !== undefined && output.ServerId !== null) {
        contents.ServerId = output.ServerId;
    }
    if (output.UserName !== undefined && output.UserName !== null) {
        contents.UserName = output.UserName;
    }
    return contents;
};
const deserializeAws_json1_1DescribeServerResponse = (output, context) => {
    let contents = {
        __type: "DescribeServerResponse",
        Server: undefined
    };
    if (output.Server !== undefined && output.Server !== null) {
        contents.Server = deserializeAws_json1_1DescribedServer(output.Server, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeUserResponse = (output, context) => {
    let contents = {
        __type: "DescribeUserResponse",
        ServerId: undefined,
        User: undefined
    };
    if (output.ServerId !== undefined && output.ServerId !== null) {
        contents.ServerId = output.ServerId;
    }
    if (output.User !== undefined && output.User !== null) {
        contents.User = deserializeAws_json1_1DescribedUser(output.User, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribedServer = (output, context) => {
    let contents = {
        __type: "DescribedServer",
        Arn: undefined,
        EndpointDetails: undefined,
        EndpointType: undefined,
        HostKeyFingerprint: undefined,
        IdentityProviderDetails: undefined,
        IdentityProviderType: undefined,
        LoggingRole: undefined,
        ServerId: undefined,
        State: undefined,
        Tags: undefined,
        UserCount: undefined
    };
    if (output.Arn !== undefined && output.Arn !== null) {
        contents.Arn = output.Arn;
    }
    if (output.EndpointDetails !== undefined && output.EndpointDetails !== null) {
        contents.EndpointDetails = deserializeAws_json1_1EndpointDetails(output.EndpointDetails, context);
    }
    if (output.EndpointType !== undefined && output.EndpointType !== null) {
        contents.EndpointType = output.EndpointType;
    }
    if (output.HostKeyFingerprint !== undefined &&
        output.HostKeyFingerprint !== null) {
        contents.HostKeyFingerprint = output.HostKeyFingerprint;
    }
    if (output.IdentityProviderDetails !== undefined &&
        output.IdentityProviderDetails !== null) {
        contents.IdentityProviderDetails = deserializeAws_json1_1IdentityProviderDetails(output.IdentityProviderDetails, context);
    }
    if (output.IdentityProviderType !== undefined &&
        output.IdentityProviderType !== null) {
        contents.IdentityProviderType = output.IdentityProviderType;
    }
    if (output.LoggingRole !== undefined && output.LoggingRole !== null) {
        contents.LoggingRole = output.LoggingRole;
    }
    if (output.ServerId !== undefined && output.ServerId !== null) {
        contents.ServerId = output.ServerId;
    }
    if (output.State !== undefined && output.State !== null) {
        contents.State = output.State;
    }
    if (output.Tags !== undefined && output.Tags !== null) {
        contents.Tags = deserializeAws_json1_1Tags(output.Tags, context);
    }
    if (output.UserCount !== undefined && output.UserCount !== null) {
        contents.UserCount = output.UserCount;
    }
    return contents;
};
const deserializeAws_json1_1DescribedUser = (output, context) => {
    let contents = {
        __type: "DescribedUser",
        Arn: undefined,
        HomeDirectory: undefined,
        HomeDirectoryMappings: undefined,
        HomeDirectoryType: undefined,
        Policy: undefined,
        Role: undefined,
        SshPublicKeys: undefined,
        Tags: undefined,
        UserName: undefined
    };
    if (output.Arn !== undefined && output.Arn !== null) {
        contents.Arn = output.Arn;
    }
    if (output.HomeDirectory !== undefined && output.HomeDirectory !== null) {
        contents.HomeDirectory = output.HomeDirectory;
    }
    if (output.HomeDirectoryMappings !== undefined &&
        output.HomeDirectoryMappings !== null) {
        contents.HomeDirectoryMappings = deserializeAws_json1_1HomeDirectoryMappings(output.HomeDirectoryMappings, context);
    }
    if (output.HomeDirectoryType !== undefined &&
        output.HomeDirectoryType !== null) {
        contents.HomeDirectoryType = output.HomeDirectoryType;
    }
    if (output.Policy !== undefined && output.Policy !== null) {
        contents.Policy = output.Policy;
    }
    if (output.Role !== undefined && output.Role !== null) {
        contents.Role = output.Role;
    }
    if (output.SshPublicKeys !== undefined && output.SshPublicKeys !== null) {
        contents.SshPublicKeys = deserializeAws_json1_1SshPublicKeys(output.SshPublicKeys, context);
    }
    if (output.Tags !== undefined && output.Tags !== null) {
        contents.Tags = deserializeAws_json1_1Tags(output.Tags, context);
    }
    if (output.UserName !== undefined && output.UserName !== null) {
        contents.UserName = output.UserName;
    }
    return contents;
};
const deserializeAws_json1_1EndpointDetails = (output, context) => {
    let contents = {
        __type: "EndpointDetails",
        AddressAllocationIds: undefined,
        SubnetIds: undefined,
        VpcEndpointId: undefined,
        VpcId: undefined
    };
    if (output.AddressAllocationIds !== undefined &&
        output.AddressAllocationIds !== null) {
        contents.AddressAllocationIds = deserializeAws_json1_1AddressAllocationIds(output.AddressAllocationIds, context);
    }
    if (output.SubnetIds !== undefined && output.SubnetIds !== null) {
        contents.SubnetIds = deserializeAws_json1_1SubnetIds(output.SubnetIds, context);
    }
    if (output.VpcEndpointId !== undefined && output.VpcEndpointId !== null) {
        contents.VpcEndpointId = output.VpcEndpointId;
    }
    if (output.VpcId !== undefined && output.VpcId !== null) {
        contents.VpcId = output.VpcId;
    }
    return contents;
};
const deserializeAws_json1_1HomeDirectoryMapEntry = (output, context) => {
    let contents = {
        __type: "HomeDirectoryMapEntry",
        Entry: undefined,
        Target: undefined
    };
    if (output.Entry !== undefined && output.Entry !== null) {
        contents.Entry = output.Entry;
    }
    if (output.Target !== undefined && output.Target !== null) {
        contents.Target = output.Target;
    }
    return contents;
};
const deserializeAws_json1_1HomeDirectoryMappings = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1HomeDirectoryMapEntry(entry, context));
};
const deserializeAws_json1_1IdentityProviderDetails = (output, context) => {
    let contents = {
        __type: "IdentityProviderDetails",
        InvocationRole: undefined,
        Url: undefined
    };
    if (output.InvocationRole !== undefined && output.InvocationRole !== null) {
        contents.InvocationRole = output.InvocationRole;
    }
    if (output.Url !== undefined && output.Url !== null) {
        contents.Url = output.Url;
    }
    return contents;
};
const deserializeAws_json1_1ImportSshPublicKeyResponse = (output, context) => {
    let contents = {
        __type: "ImportSshPublicKeyResponse",
        ServerId: undefined,
        SshPublicKeyId: undefined,
        UserName: undefined
    };
    if (output.ServerId !== undefined && output.ServerId !== null) {
        contents.ServerId = output.ServerId;
    }
    if (output.SshPublicKeyId !== undefined && output.SshPublicKeyId !== null) {
        contents.SshPublicKeyId = output.SshPublicKeyId;
    }
    if (output.UserName !== undefined && output.UserName !== null) {
        contents.UserName = output.UserName;
    }
    return contents;
};
const deserializeAws_json1_1InternalServiceError = (output, context) => {
    let contents = {
        __type: "InternalServiceError",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidNextTokenException = (output, context) => {
    let contents = {
        __type: "InvalidNextTokenException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidRequestException = (output, context) => {
    let contents = {
        __type: "InvalidRequestException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ListServersResponse = (output, context) => {
    let contents = {
        __type: "ListServersResponse",
        NextToken: undefined,
        Servers: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Servers !== undefined && output.Servers !== null) {
        contents.Servers = deserializeAws_json1_1ListedServers(output.Servers, context);
    }
    return contents;
};
const deserializeAws_json1_1ListTagsForResourceResponse = (output, context) => {
    let contents = {
        __type: "ListTagsForResourceResponse",
        Arn: undefined,
        NextToken: undefined,
        Tags: undefined
    };
    if (output.Arn !== undefined && output.Arn !== null) {
        contents.Arn = output.Arn;
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Tags !== undefined && output.Tags !== null) {
        contents.Tags = deserializeAws_json1_1Tags(output.Tags, context);
    }
    return contents;
};
const deserializeAws_json1_1ListUsersResponse = (output, context) => {
    let contents = {
        __type: "ListUsersResponse",
        NextToken: undefined,
        ServerId: undefined,
        Users: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.ServerId !== undefined && output.ServerId !== null) {
        contents.ServerId = output.ServerId;
    }
    if (output.Users !== undefined && output.Users !== null) {
        contents.Users = deserializeAws_json1_1ListedUsers(output.Users, context);
    }
    return contents;
};
const deserializeAws_json1_1ListedServer = (output, context) => {
    let contents = {
        __type: "ListedServer",
        Arn: undefined,
        EndpointType: undefined,
        IdentityProviderType: undefined,
        LoggingRole: undefined,
        ServerId: undefined,
        State: undefined,
        UserCount: undefined
    };
    if (output.Arn !== undefined && output.Arn !== null) {
        contents.Arn = output.Arn;
    }
    if (output.EndpointType !== undefined && output.EndpointType !== null) {
        contents.EndpointType = output.EndpointType;
    }
    if (output.IdentityProviderType !== undefined &&
        output.IdentityProviderType !== null) {
        contents.IdentityProviderType = output.IdentityProviderType;
    }
    if (output.LoggingRole !== undefined && output.LoggingRole !== null) {
        contents.LoggingRole = output.LoggingRole;
    }
    if (output.ServerId !== undefined && output.ServerId !== null) {
        contents.ServerId = output.ServerId;
    }
    if (output.State !== undefined && output.State !== null) {
        contents.State = output.State;
    }
    if (output.UserCount !== undefined && output.UserCount !== null) {
        contents.UserCount = output.UserCount;
    }
    return contents;
};
const deserializeAws_json1_1ListedServers = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ListedServer(entry, context));
};
const deserializeAws_json1_1ListedUser = (output, context) => {
    let contents = {
        __type: "ListedUser",
        Arn: undefined,
        HomeDirectory: undefined,
        HomeDirectoryType: undefined,
        Role: undefined,
        SshPublicKeyCount: undefined,
        UserName: undefined
    };
    if (output.Arn !== undefined && output.Arn !== null) {
        contents.Arn = output.Arn;
    }
    if (output.HomeDirectory !== undefined && output.HomeDirectory !== null) {
        contents.HomeDirectory = output.HomeDirectory;
    }
    if (output.HomeDirectoryType !== undefined &&
        output.HomeDirectoryType !== null) {
        contents.HomeDirectoryType = output.HomeDirectoryType;
    }
    if (output.Role !== undefined && output.Role !== null) {
        contents.Role = output.Role;
    }
    if (output.SshPublicKeyCount !== undefined &&
        output.SshPublicKeyCount !== null) {
        contents.SshPublicKeyCount = output.SshPublicKeyCount;
    }
    if (output.UserName !== undefined && output.UserName !== null) {
        contents.UserName = output.UserName;
    }
    return contents;
};
const deserializeAws_json1_1ListedUsers = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ListedUser(entry, context));
};
const deserializeAws_json1_1ResourceExistsException = (output, context) => {
    let contents = {
        __type: "ResourceExistsException",
        Message: undefined,
        Resource: undefined,
        ResourceType: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.Resource !== undefined && output.Resource !== null) {
        contents.Resource = output.Resource;
    }
    if (output.ResourceType !== undefined && output.ResourceType !== null) {
        contents.ResourceType = output.ResourceType;
    }
    return contents;
};
const deserializeAws_json1_1ResourceNotFoundException = (output, context) => {
    let contents = {
        __type: "ResourceNotFoundException",
        Message: undefined,
        Resource: undefined,
        ResourceType: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.Resource !== undefined && output.Resource !== null) {
        contents.Resource = output.Resource;
    }
    if (output.ResourceType !== undefined && output.ResourceType !== null) {
        contents.ResourceType = output.ResourceType;
    }
    return contents;
};
const deserializeAws_json1_1SshPublicKey = (output, context) => {
    let contents = {
        __type: "SshPublicKey",
        DateImported: undefined,
        SshPublicKeyBody: undefined,
        SshPublicKeyId: undefined
    };
    if (output.DateImported !== undefined && output.DateImported !== null) {
        contents.DateImported = new Date(Math.round(output.DateImported * 1000));
    }
    if (output.SshPublicKeyBody !== undefined &&
        output.SshPublicKeyBody !== null) {
        contents.SshPublicKeyBody = output.SshPublicKeyBody;
    }
    if (output.SshPublicKeyId !== undefined && output.SshPublicKeyId !== null) {
        contents.SshPublicKeyId = output.SshPublicKeyId;
    }
    return contents;
};
const deserializeAws_json1_1SshPublicKeys = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1SshPublicKey(entry, context));
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
const deserializeAws_json1_1Tags = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Tag(entry, context));
};
const deserializeAws_json1_1TestIdentityProviderResponse = (output, context) => {
    let contents = {
        __type: "TestIdentityProviderResponse",
        Message: undefined,
        Response: undefined,
        StatusCode: undefined,
        Url: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.Response !== undefined && output.Response !== null) {
        contents.Response = output.Response;
    }
    if (output.StatusCode !== undefined && output.StatusCode !== null) {
        contents.StatusCode = output.StatusCode;
    }
    if (output.Url !== undefined && output.Url !== null) {
        contents.Url = output.Url;
    }
    return contents;
};
const deserializeAws_json1_1ThrottlingException = (output, context) => {
    let contents = {
        __type: "ThrottlingException",
        RetryAfterSeconds: undefined
    };
    if (output.RetryAfterSeconds !== undefined &&
        output.RetryAfterSeconds !== null) {
        contents.RetryAfterSeconds = output.RetryAfterSeconds;
    }
    return contents;
};
const deserializeAws_json1_1UpdateServerResponse = (output, context) => {
    let contents = {
        __type: "UpdateServerResponse",
        ServerId: undefined
    };
    if (output.ServerId !== undefined && output.ServerId !== null) {
        contents.ServerId = output.ServerId;
    }
    return contents;
};
const deserializeAws_json1_1UpdateUserResponse = (output, context) => {
    let contents = {
        __type: "UpdateUserResponse",
        ServerId: undefined,
        UserName: undefined
    };
    if (output.ServerId !== undefined && output.ServerId !== null) {
        contents.ServerId = output.ServerId;
    }
    if (output.UserName !== undefined && output.UserName !== null) {
        contents.UserName = output.UserName;
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