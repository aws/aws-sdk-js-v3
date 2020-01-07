"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1BatchGrantPermissionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSLakeFormation.BatchGrantPermissions";
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchGrantPermissionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1BatchGrantPermissionsCommand = serializeAws_json1_1BatchGrantPermissionsCommand;
async function serializeAws_json1_1BatchRevokePermissionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSLakeFormation.BatchRevokePermissions";
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchRevokePermissionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1BatchRevokePermissionsCommand = serializeAws_json1_1BatchRevokePermissionsCommand;
async function serializeAws_json1_1DeregisterResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSLakeFormation.DeregisterResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeregisterResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeregisterResourceCommand = serializeAws_json1_1DeregisterResourceCommand;
async function serializeAws_json1_1DescribeResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSLakeFormation.DescribeResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeResourceCommand = serializeAws_json1_1DescribeResourceCommand;
async function serializeAws_json1_1GetDataLakeSettingsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSLakeFormation.GetDataLakeSettings";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDataLakeSettingsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetDataLakeSettingsCommand = serializeAws_json1_1GetDataLakeSettingsCommand;
async function serializeAws_json1_1GetEffectivePermissionsForPathCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSLakeFormation.GetEffectivePermissionsForPath";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetEffectivePermissionsForPathRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetEffectivePermissionsForPathCommand = serializeAws_json1_1GetEffectivePermissionsForPathCommand;
async function serializeAws_json1_1GrantPermissionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSLakeFormation.GrantPermissions";
    let body;
    body = JSON.stringify(serializeAws_json1_1GrantPermissionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GrantPermissionsCommand = serializeAws_json1_1GrantPermissionsCommand;
async function serializeAws_json1_1ListPermissionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSLakeFormation.ListPermissions";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListPermissionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListPermissionsCommand = serializeAws_json1_1ListPermissionsCommand;
async function serializeAws_json1_1ListResourcesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSLakeFormation.ListResources";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListResourcesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListResourcesCommand = serializeAws_json1_1ListResourcesCommand;
async function serializeAws_json1_1PutDataLakeSettingsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSLakeFormation.PutDataLakeSettings";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutDataLakeSettingsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutDataLakeSettingsCommand = serializeAws_json1_1PutDataLakeSettingsCommand;
async function serializeAws_json1_1RegisterResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSLakeFormation.RegisterResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1RegisterResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RegisterResourceCommand = serializeAws_json1_1RegisterResourceCommand;
async function serializeAws_json1_1RevokePermissionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSLakeFormation.RevokePermissions";
    let body;
    body = JSON.stringify(serializeAws_json1_1RevokePermissionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RevokePermissionsCommand = serializeAws_json1_1RevokePermissionsCommand;
async function serializeAws_json1_1UpdateResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSLakeFormation.UpdateResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateResourceCommand = serializeAws_json1_1UpdateResourceCommand;
async function deserializeAws_json1_1BatchGrantPermissionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1BatchGrantPermissionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchGrantPermissionsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "BatchGrantPermissionsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1BatchGrantPermissionsCommand = deserializeAws_json1_1BatchGrantPermissionsCommand;
async function deserializeAws_json1_1BatchGrantPermissionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.michigan.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.michigan.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1BatchRevokePermissionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1BatchRevokePermissionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchRevokePermissionsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "BatchRevokePermissionsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1BatchRevokePermissionsCommand = deserializeAws_json1_1BatchRevokePermissionsCommand;
async function deserializeAws_json1_1BatchRevokePermissionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.michigan.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.michigan.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeregisterResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeregisterResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeregisterResourceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeregisterResourceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeregisterResourceCommand = deserializeAws_json1_1DeregisterResourceCommand;
async function deserializeAws_json1_1DeregisterResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.michigan.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.michigan.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.michigan.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.michigan.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
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
        case "com.amazonaws.michigan.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.michigan.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.michigan.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.michigan.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetDataLakeSettingsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetDataLakeSettingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDataLakeSettingsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetDataLakeSettingsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetDataLakeSettingsCommand = deserializeAws_json1_1GetDataLakeSettingsCommand;
async function deserializeAws_json1_1GetDataLakeSettingsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.michigan.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.michigan.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.michigan.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetEffectivePermissionsForPathCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetEffectivePermissionsForPathCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetEffectivePermissionsForPathResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetEffectivePermissionsForPathResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetEffectivePermissionsForPathCommand = deserializeAws_json1_1GetEffectivePermissionsForPathCommand;
async function deserializeAws_json1_1GetEffectivePermissionsForPathCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.michigan.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.michigan.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.michigan.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.michigan.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GrantPermissionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GrantPermissionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GrantPermissionsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GrantPermissionsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GrantPermissionsCommand = deserializeAws_json1_1GrantPermissionsCommand;
async function deserializeAws_json1_1GrantPermissionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.michigan.common.exceptions#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.michigan.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.michigan.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListPermissionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListPermissionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListPermissionsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListPermissionsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListPermissionsCommand = deserializeAws_json1_1ListPermissionsCommand;
async function deserializeAws_json1_1ListPermissionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.michigan.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.michigan.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.michigan.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
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
        case "InternalServiceException":
        case "com.amazonaws.michigan.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.michigan.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.michigan.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1PutDataLakeSettingsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutDataLakeSettingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutDataLakeSettingsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutDataLakeSettingsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutDataLakeSettingsCommand = deserializeAws_json1_1PutDataLakeSettingsCommand;
async function deserializeAws_json1_1PutDataLakeSettingsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.michigan.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.michigan.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1RegisterResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RegisterResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RegisterResourceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RegisterResourceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RegisterResourceCommand = deserializeAws_json1_1RegisterResourceCommand;
async function deserializeAws_json1_1RegisterResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazonaws.michigan.common.exceptions#AlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.michigan.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.michigan.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.michigan.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1RevokePermissionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RevokePermissionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RevokePermissionsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RevokePermissionsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RevokePermissionsCommand = deserializeAws_json1_1RevokePermissionsCommand;
async function deserializeAws_json1_1RevokePermissionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.michigan.common.exceptions#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.michigan.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.michigan.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
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
        case "EntityNotFoundException":
        case "com.amazonaws.michigan.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.michigan.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.michigan.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.michigan.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
const deserializeAws_json1_1AlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AlreadyExistsException(body, context);
    const contents = Object.assign({ name: "AlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ConcurrentModificationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ConcurrentModificationException(body, context);
    const contents = Object.assign({ name: "ConcurrentModificationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1EntityNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1EntityNotFoundException(body, context);
    const contents = Object.assign({ name: "EntityNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InternalServiceExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalServiceException(body, context);
    const contents = Object.assign({ name: "InternalServiceException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidInputExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidInputException(body, context);
    const contents = Object.assign({ name: "InvalidInputException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1OperationTimeoutExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OperationTimeoutException(body, context);
    const contents = Object.assign({ name: "OperationTimeoutException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1BatchGrantPermissionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.CatalogId !== undefined) {
        bodyParams["CatalogId"] = input.CatalogId;
    }
    if (input.Entries !== undefined) {
        bodyParams["Entries"] = serializeAws_json1_1BatchPermissionsRequestEntryList(input.Entries, context);
    }
    return bodyParams;
};
const serializeAws_json1_1BatchPermissionsRequestEntry = (input, context) => {
    const bodyParams = {};
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    if (input.Permissions !== undefined) {
        bodyParams["Permissions"] = serializeAws_json1_1PermissionList(input.Permissions, context);
    }
    if (input.PermissionsWithGrantOption !== undefined) {
        bodyParams["PermissionsWithGrantOption"] = serializeAws_json1_1PermissionList(input.PermissionsWithGrantOption, context);
    }
    if (input.Principal !== undefined) {
        bodyParams["Principal"] = serializeAws_json1_1DataLakePrincipal(input.Principal, context);
    }
    if (input.Resource !== undefined) {
        bodyParams["Resource"] = serializeAws_json1_1Resource(input.Resource, context);
    }
    return bodyParams;
};
const serializeAws_json1_1BatchPermissionsRequestEntryList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1BatchPermissionsRequestEntry(entry, context));
    }
    return contents;
};
const serializeAws_json1_1BatchRevokePermissionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.CatalogId !== undefined) {
        bodyParams["CatalogId"] = input.CatalogId;
    }
    if (input.Entries !== undefined) {
        bodyParams["Entries"] = serializeAws_json1_1BatchPermissionsRequestEntryList(input.Entries, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CatalogResource = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_1ColumnNames = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ColumnWildcard = (input, context) => {
    const bodyParams = {};
    if (input.ExcludedColumnNames !== undefined) {
        bodyParams["ExcludedColumnNames"] = serializeAws_json1_1ColumnNames(input.ExcludedColumnNames, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DataLakePrincipal = (input, context) => {
    const bodyParams = {};
    if (input.DataLakePrincipalIdentifier !== undefined) {
        bodyParams["DataLakePrincipalIdentifier"] =
            input.DataLakePrincipalIdentifier;
    }
    return bodyParams;
};
const serializeAws_json1_1DataLakePrincipalList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1DataLakePrincipal(entry, context));
    }
    return contents;
};
const serializeAws_json1_1DataLakeSettings = (input, context) => {
    const bodyParams = {};
    if (input.CreateDatabaseDefaultPermissions !== undefined) {
        bodyParams["CreateDatabaseDefaultPermissions"] = serializeAws_json1_1PrincipalPermissionsList(input.CreateDatabaseDefaultPermissions, context);
    }
    if (input.CreateTableDefaultPermissions !== undefined) {
        bodyParams["CreateTableDefaultPermissions"] = serializeAws_json1_1PrincipalPermissionsList(input.CreateTableDefaultPermissions, context);
    }
    if (input.DataLakeAdmins !== undefined) {
        bodyParams["DataLakeAdmins"] = serializeAws_json1_1DataLakePrincipalList(input.DataLakeAdmins, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DataLocationResource = (input, context) => {
    const bodyParams = {};
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DatabaseResource = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1DeregisterResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    return bodyParams;
};
const serializeAws_json1_1GetDataLakeSettingsRequest = (input, context) => {
    const bodyParams = {};
    if (input.CatalogId !== undefined) {
        bodyParams["CatalogId"] = input.CatalogId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetEffectivePermissionsForPathRequest = (input, context) => {
    const bodyParams = {};
    if (input.CatalogId !== undefined) {
        bodyParams["CatalogId"] = input.CatalogId;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    return bodyParams;
};
const serializeAws_json1_1GrantPermissionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.CatalogId !== undefined) {
        bodyParams["CatalogId"] = input.CatalogId;
    }
    if (input.Permissions !== undefined) {
        bodyParams["Permissions"] = serializeAws_json1_1PermissionList(input.Permissions, context);
    }
    if (input.PermissionsWithGrantOption !== undefined) {
        bodyParams["PermissionsWithGrantOption"] = serializeAws_json1_1PermissionList(input.PermissionsWithGrantOption, context);
    }
    if (input.Principal !== undefined) {
        bodyParams["Principal"] = serializeAws_json1_1DataLakePrincipal(input.Principal, context);
    }
    if (input.Resource !== undefined) {
        bodyParams["Resource"] = serializeAws_json1_1Resource(input.Resource, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ListPermissionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.CatalogId !== undefined) {
        bodyParams["CatalogId"] = input.CatalogId;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.Principal !== undefined) {
        bodyParams["Principal"] = serializeAws_json1_1DataLakePrincipal(input.Principal, context);
    }
    if (input.Resource !== undefined) {
        bodyParams["Resource"] = serializeAws_json1_1Resource(input.Resource, context);
    }
    if (input.ResourceType !== undefined) {
        bodyParams["ResourceType"] = input.ResourceType;
    }
    return bodyParams;
};
const serializeAws_json1_1ListResourcesRequest = (input, context) => {
    const bodyParams = {};
    if (input.FilterConditionList !== undefined) {
        bodyParams["FilterConditionList"] = serializeAws_json1_1FilterConditionList(input.FilterConditionList, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1PermissionList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1PrincipalPermissions = (input, context) => {
    const bodyParams = {};
    if (input.Permissions !== undefined) {
        bodyParams["Permissions"] = serializeAws_json1_1PermissionList(input.Permissions, context);
    }
    if (input.Principal !== undefined) {
        bodyParams["Principal"] = serializeAws_json1_1DataLakePrincipal(input.Principal, context);
    }
    return bodyParams;
};
const serializeAws_json1_1PrincipalPermissionsList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1PrincipalPermissions(entry, context));
    }
    return contents;
};
const serializeAws_json1_1PutDataLakeSettingsRequest = (input, context) => {
    const bodyParams = {};
    if (input.CatalogId !== undefined) {
        bodyParams["CatalogId"] = input.CatalogId;
    }
    if (input.DataLakeSettings !== undefined) {
        bodyParams["DataLakeSettings"] = serializeAws_json1_1DataLakeSettings(input.DataLakeSettings, context);
    }
    return bodyParams;
};
const serializeAws_json1_1RegisterResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    if (input.RoleArn !== undefined) {
        bodyParams["RoleArn"] = input.RoleArn;
    }
    if (input.UseServiceLinkedRole !== undefined) {
        bodyParams["UseServiceLinkedRole"] = input.UseServiceLinkedRole;
    }
    return bodyParams;
};
const serializeAws_json1_1Resource = (input, context) => {
    const bodyParams = {};
    if (input.Catalog !== undefined) {
        bodyParams["Catalog"] = serializeAws_json1_1CatalogResource(input.Catalog, context);
    }
    if (input.DataLocation !== undefined) {
        bodyParams["DataLocation"] = serializeAws_json1_1DataLocationResource(input.DataLocation, context);
    }
    if (input.Database !== undefined) {
        bodyParams["Database"] = serializeAws_json1_1DatabaseResource(input.Database, context);
    }
    if (input.Table !== undefined) {
        bodyParams["Table"] = serializeAws_json1_1TableResource(input.Table, context);
    }
    if (input.TableWithColumns !== undefined) {
        bodyParams["TableWithColumns"] = serializeAws_json1_1TableWithColumnsResource(input.TableWithColumns, context);
    }
    return bodyParams;
};
const serializeAws_json1_1RevokePermissionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.CatalogId !== undefined) {
        bodyParams["CatalogId"] = input.CatalogId;
    }
    if (input.Permissions !== undefined) {
        bodyParams["Permissions"] = serializeAws_json1_1PermissionList(input.Permissions, context);
    }
    if (input.PermissionsWithGrantOption !== undefined) {
        bodyParams["PermissionsWithGrantOption"] = serializeAws_json1_1PermissionList(input.PermissionsWithGrantOption, context);
    }
    if (input.Principal !== undefined) {
        bodyParams["Principal"] = serializeAws_json1_1DataLakePrincipal(input.Principal, context);
    }
    if (input.Resource !== undefined) {
        bodyParams["Resource"] = serializeAws_json1_1Resource(input.Resource, context);
    }
    return bodyParams;
};
const serializeAws_json1_1TableResource = (input, context) => {
    const bodyParams = {};
    if (input.DatabaseName !== undefined) {
        bodyParams["DatabaseName"] = input.DatabaseName;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1TableWithColumnsResource = (input, context) => {
    const bodyParams = {};
    if (input.ColumnNames !== undefined) {
        bodyParams["ColumnNames"] = serializeAws_json1_1ColumnNames(input.ColumnNames, context);
    }
    if (input.ColumnWildcard !== undefined) {
        bodyParams["ColumnWildcard"] = serializeAws_json1_1ColumnWildcard(input.ColumnWildcard, context);
    }
    if (input.DatabaseName !== undefined) {
        bodyParams["DatabaseName"] = input.DatabaseName;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    if (input.RoleArn !== undefined) {
        bodyParams["RoleArn"] = input.RoleArn;
    }
    return bodyParams;
};
const serializeAws_json1_1FilterCondition = (input, context) => {
    const bodyParams = {};
    if (input.ComparisonOperator !== undefined) {
        bodyParams["ComparisonOperator"] = input.ComparisonOperator;
    }
    if (input.Field !== undefined) {
        bodyParams["Field"] = input.Field;
    }
    if (input.StringValueList !== undefined) {
        bodyParams["StringValueList"] = serializeAws_json1_1StringValueList(input.StringValueList, context);
    }
    return bodyParams;
};
const serializeAws_json1_1FilterConditionList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1FilterCondition(entry, context));
    }
    return contents;
};
const serializeAws_json1_1StringValueList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const deserializeAws_json1_1BatchGrantPermissionsResponse = (output, context) => {
    let contents = {
        __type: "BatchGrantPermissionsResponse",
        Failures: undefined
    };
    if (output.Failures !== undefined && output.Failures !== null) {
        contents.Failures = deserializeAws_json1_1BatchPermissionsFailureList(output.Failures, context);
    }
    return contents;
};
const deserializeAws_json1_1BatchPermissionsFailureEntry = (output, context) => {
    let contents = {
        __type: "BatchPermissionsFailureEntry",
        Error: undefined,
        RequestEntry: undefined
    };
    if (output.Error !== undefined && output.Error !== null) {
        contents.Error = deserializeAws_json1_1ErrorDetail(output.Error, context);
    }
    if (output.RequestEntry !== undefined && output.RequestEntry !== null) {
        contents.RequestEntry = deserializeAws_json1_1BatchPermissionsRequestEntry(output.RequestEntry, context);
    }
    return contents;
};
const deserializeAws_json1_1BatchPermissionsFailureList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1BatchPermissionsFailureEntry(entry, context));
};
const deserializeAws_json1_1BatchPermissionsRequestEntry = (output, context) => {
    let contents = {
        __type: "BatchPermissionsRequestEntry",
        Id: undefined,
        Permissions: undefined,
        PermissionsWithGrantOption: undefined,
        Principal: undefined,
        Resource: undefined
    };
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.Permissions !== undefined && output.Permissions !== null) {
        contents.Permissions = deserializeAws_json1_1PermissionList(output.Permissions, context);
    }
    if (output.PermissionsWithGrantOption !== undefined &&
        output.PermissionsWithGrantOption !== null) {
        contents.PermissionsWithGrantOption = deserializeAws_json1_1PermissionList(output.PermissionsWithGrantOption, context);
    }
    if (output.Principal !== undefined && output.Principal !== null) {
        contents.Principal = deserializeAws_json1_1DataLakePrincipal(output.Principal, context);
    }
    if (output.Resource !== undefined && output.Resource !== null) {
        contents.Resource = deserializeAws_json1_1Resource(output.Resource, context);
    }
    return contents;
};
const deserializeAws_json1_1BatchRevokePermissionsResponse = (output, context) => {
    let contents = {
        __type: "BatchRevokePermissionsResponse",
        Failures: undefined
    };
    if (output.Failures !== undefined && output.Failures !== null) {
        contents.Failures = deserializeAws_json1_1BatchPermissionsFailureList(output.Failures, context);
    }
    return contents;
};
const deserializeAws_json1_1CatalogResource = (output, context) => {
    let contents = {
        __type: "CatalogResource"
    };
    return contents;
};
const deserializeAws_json1_1ColumnNames = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1ColumnWildcard = (output, context) => {
    let contents = {
        __type: "ColumnWildcard",
        ExcludedColumnNames: undefined
    };
    if (output.ExcludedColumnNames !== undefined &&
        output.ExcludedColumnNames !== null) {
        contents.ExcludedColumnNames = deserializeAws_json1_1ColumnNames(output.ExcludedColumnNames, context);
    }
    return contents;
};
const deserializeAws_json1_1DataLakePrincipal = (output, context) => {
    let contents = {
        __type: "DataLakePrincipal",
        DataLakePrincipalIdentifier: undefined
    };
    if (output.DataLakePrincipalIdentifier !== undefined &&
        output.DataLakePrincipalIdentifier !== null) {
        contents.DataLakePrincipalIdentifier = output.DataLakePrincipalIdentifier;
    }
    return contents;
};
const deserializeAws_json1_1DataLakePrincipalList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DataLakePrincipal(entry, context));
};
const deserializeAws_json1_1DataLakeSettings = (output, context) => {
    let contents = {
        __type: "DataLakeSettings",
        CreateDatabaseDefaultPermissions: undefined,
        CreateTableDefaultPermissions: undefined,
        DataLakeAdmins: undefined
    };
    if (output.CreateDatabaseDefaultPermissions !== undefined &&
        output.CreateDatabaseDefaultPermissions !== null) {
        contents.CreateDatabaseDefaultPermissions = deserializeAws_json1_1PrincipalPermissionsList(output.CreateDatabaseDefaultPermissions, context);
    }
    if (output.CreateTableDefaultPermissions !== undefined &&
        output.CreateTableDefaultPermissions !== null) {
        contents.CreateTableDefaultPermissions = deserializeAws_json1_1PrincipalPermissionsList(output.CreateTableDefaultPermissions, context);
    }
    if (output.DataLakeAdmins !== undefined && output.DataLakeAdmins !== null) {
        contents.DataLakeAdmins = deserializeAws_json1_1DataLakePrincipalList(output.DataLakeAdmins, context);
    }
    return contents;
};
const deserializeAws_json1_1DataLocationResource = (output, context) => {
    let contents = {
        __type: "DataLocationResource",
        ResourceArn: undefined
    };
    if (output.ResourceArn !== undefined && output.ResourceArn !== null) {
        contents.ResourceArn = output.ResourceArn;
    }
    return contents;
};
const deserializeAws_json1_1DatabaseResource = (output, context) => {
    let contents = {
        __type: "DatabaseResource",
        Name: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1DeregisterResourceResponse = (output, context) => {
    let contents = {
        __type: "DeregisterResourceResponse"
    };
    return contents;
};
const deserializeAws_json1_1DescribeResourceResponse = (output, context) => {
    let contents = {
        __type: "DescribeResourceResponse",
        ResourceInfo: undefined
    };
    if (output.ResourceInfo !== undefined && output.ResourceInfo !== null) {
        contents.ResourceInfo = deserializeAws_json1_1ResourceInfo(output.ResourceInfo, context);
    }
    return contents;
};
const deserializeAws_json1_1GetDataLakeSettingsResponse = (output, context) => {
    let contents = {
        __type: "GetDataLakeSettingsResponse",
        DataLakeSettings: undefined
    };
    if (output.DataLakeSettings !== undefined &&
        output.DataLakeSettings !== null) {
        contents.DataLakeSettings = deserializeAws_json1_1DataLakeSettings(output.DataLakeSettings, context);
    }
    return contents;
};
const deserializeAws_json1_1GetEffectivePermissionsForPathResponse = (output, context) => {
    let contents = {
        __type: "GetEffectivePermissionsForPathResponse",
        NextToken: undefined,
        Permissions: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Permissions !== undefined && output.Permissions !== null) {
        contents.Permissions = deserializeAws_json1_1PrincipalResourcePermissionsList(output.Permissions, context);
    }
    return contents;
};
const deserializeAws_json1_1GrantPermissionsResponse = (output, context) => {
    let contents = {
        __type: "GrantPermissionsResponse"
    };
    return contents;
};
const deserializeAws_json1_1ListPermissionsResponse = (output, context) => {
    let contents = {
        __type: "ListPermissionsResponse",
        NextToken: undefined,
        PrincipalResourcePermissions: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.PrincipalResourcePermissions !== undefined &&
        output.PrincipalResourcePermissions !== null) {
        contents.PrincipalResourcePermissions = deserializeAws_json1_1PrincipalResourcePermissionsList(output.PrincipalResourcePermissions, context);
    }
    return contents;
};
const deserializeAws_json1_1ListResourcesResponse = (output, context) => {
    let contents = {
        __type: "ListResourcesResponse",
        NextToken: undefined,
        ResourceInfoList: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.ResourceInfoList !== undefined &&
        output.ResourceInfoList !== null) {
        contents.ResourceInfoList = deserializeAws_json1_1ResourceInfoList(output.ResourceInfoList, context);
    }
    return contents;
};
const deserializeAws_json1_1PermissionList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1PrincipalPermissions = (output, context) => {
    let contents = {
        __type: "PrincipalPermissions",
        Permissions: undefined,
        Principal: undefined
    };
    if (output.Permissions !== undefined && output.Permissions !== null) {
        contents.Permissions = deserializeAws_json1_1PermissionList(output.Permissions, context);
    }
    if (output.Principal !== undefined && output.Principal !== null) {
        contents.Principal = deserializeAws_json1_1DataLakePrincipal(output.Principal, context);
    }
    return contents;
};
const deserializeAws_json1_1PrincipalPermissionsList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1PrincipalPermissions(entry, context));
};
const deserializeAws_json1_1PrincipalResourcePermissions = (output, context) => {
    let contents = {
        __type: "PrincipalResourcePermissions",
        Permissions: undefined,
        PermissionsWithGrantOption: undefined,
        Principal: undefined,
        Resource: undefined
    };
    if (output.Permissions !== undefined && output.Permissions !== null) {
        contents.Permissions = deserializeAws_json1_1PermissionList(output.Permissions, context);
    }
    if (output.PermissionsWithGrantOption !== undefined &&
        output.PermissionsWithGrantOption !== null) {
        contents.PermissionsWithGrantOption = deserializeAws_json1_1PermissionList(output.PermissionsWithGrantOption, context);
    }
    if (output.Principal !== undefined && output.Principal !== null) {
        contents.Principal = deserializeAws_json1_1DataLakePrincipal(output.Principal, context);
    }
    if (output.Resource !== undefined && output.Resource !== null) {
        contents.Resource = deserializeAws_json1_1Resource(output.Resource, context);
    }
    return contents;
};
const deserializeAws_json1_1PrincipalResourcePermissionsList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1PrincipalResourcePermissions(entry, context));
};
const deserializeAws_json1_1PutDataLakeSettingsResponse = (output, context) => {
    let contents = {
        __type: "PutDataLakeSettingsResponse"
    };
    return contents;
};
const deserializeAws_json1_1RegisterResourceResponse = (output, context) => {
    let contents = {
        __type: "RegisterResourceResponse"
    };
    return contents;
};
const deserializeAws_json1_1Resource = (output, context) => {
    let contents = {
        __type: "Resource",
        Catalog: undefined,
        DataLocation: undefined,
        Database: undefined,
        Table: undefined,
        TableWithColumns: undefined
    };
    if (output.Catalog !== undefined && output.Catalog !== null) {
        contents.Catalog = deserializeAws_json1_1CatalogResource(output.Catalog, context);
    }
    if (output.DataLocation !== undefined && output.DataLocation !== null) {
        contents.DataLocation = deserializeAws_json1_1DataLocationResource(output.DataLocation, context);
    }
    if (output.Database !== undefined && output.Database !== null) {
        contents.Database = deserializeAws_json1_1DatabaseResource(output.Database, context);
    }
    if (output.Table !== undefined && output.Table !== null) {
        contents.Table = deserializeAws_json1_1TableResource(output.Table, context);
    }
    if (output.TableWithColumns !== undefined &&
        output.TableWithColumns !== null) {
        contents.TableWithColumns = deserializeAws_json1_1TableWithColumnsResource(output.TableWithColumns, context);
    }
    return contents;
};
const deserializeAws_json1_1RevokePermissionsResponse = (output, context) => {
    let contents = {
        __type: "RevokePermissionsResponse"
    };
    return contents;
};
const deserializeAws_json1_1TableResource = (output, context) => {
    let contents = {
        __type: "TableResource",
        DatabaseName: undefined,
        Name: undefined
    };
    if (output.DatabaseName !== undefined && output.DatabaseName !== null) {
        contents.DatabaseName = output.DatabaseName;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1TableWithColumnsResource = (output, context) => {
    let contents = {
        __type: "TableWithColumnsResource",
        ColumnNames: undefined,
        ColumnWildcard: undefined,
        DatabaseName: undefined,
        Name: undefined
    };
    if (output.ColumnNames !== undefined && output.ColumnNames !== null) {
        contents.ColumnNames = deserializeAws_json1_1ColumnNames(output.ColumnNames, context);
    }
    if (output.ColumnWildcard !== undefined && output.ColumnWildcard !== null) {
        contents.ColumnWildcard = deserializeAws_json1_1ColumnWildcard(output.ColumnWildcard, context);
    }
    if (output.DatabaseName !== undefined && output.DatabaseName !== null) {
        contents.DatabaseName = output.DatabaseName;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1UpdateResourceResponse = (output, context) => {
    let contents = {
        __type: "UpdateResourceResponse"
    };
    return contents;
};
const deserializeAws_json1_1AlreadyExistsException = (output, context) => {
    let contents = {
        __type: "AlreadyExistsException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
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
const deserializeAws_json1_1ErrorDetail = (output, context) => {
    let contents = {
        __type: "ErrorDetail",
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
const deserializeAws_json1_1InternalServiceException = (output, context) => {
    let contents = {
        __type: "InternalServiceException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidInputException = (output, context) => {
    let contents = {
        __type: "InvalidInputException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1OperationTimeoutException = (output, context) => {
    let contents = {
        __type: "OperationTimeoutException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ResourceInfo = (output, context) => {
    let contents = {
        __type: "ResourceInfo",
        LastModified: undefined,
        ResourceArn: undefined,
        RoleArn: undefined
    };
    if (output.LastModified !== undefined && output.LastModified !== null) {
        contents.LastModified = new Date(Math.round(output.LastModified * 1000));
    }
    if (output.ResourceArn !== undefined && output.ResourceArn !== null) {
        contents.ResourceArn = output.ResourceArn;
    }
    if (output.RoleArn !== undefined && output.RoleArn !== null) {
        contents.RoleArn = output.RoleArn;
    }
    return contents;
};
const deserializeAws_json1_1ResourceInfoList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ResourceInfo(entry, context));
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