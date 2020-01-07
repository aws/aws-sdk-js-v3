"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1AddTagsToResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CloudHsmFrontendService.AddTagsToResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1AddTagsToResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AddTagsToResourceCommand = serializeAws_json1_1AddTagsToResourceCommand;
async function serializeAws_json1_1CreateHapgCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CloudHsmFrontendService.CreateHapg";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateHapgRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateHapgCommand = serializeAws_json1_1CreateHapgCommand;
async function serializeAws_json1_1CreateHsmCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CloudHsmFrontendService.CreateHsm";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateHsmRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateHsmCommand = serializeAws_json1_1CreateHsmCommand;
async function serializeAws_json1_1CreateLunaClientCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CloudHsmFrontendService.CreateLunaClient";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateLunaClientRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateLunaClientCommand = serializeAws_json1_1CreateLunaClientCommand;
async function serializeAws_json1_1DeleteHapgCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CloudHsmFrontendService.DeleteHapg";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteHapgRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteHapgCommand = serializeAws_json1_1DeleteHapgCommand;
async function serializeAws_json1_1DeleteHsmCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CloudHsmFrontendService.DeleteHsm";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteHsmRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteHsmCommand = serializeAws_json1_1DeleteHsmCommand;
async function serializeAws_json1_1DeleteLunaClientCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CloudHsmFrontendService.DeleteLunaClient";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteLunaClientRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteLunaClientCommand = serializeAws_json1_1DeleteLunaClientCommand;
async function serializeAws_json1_1DescribeHapgCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CloudHsmFrontendService.DescribeHapg";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeHapgRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeHapgCommand = serializeAws_json1_1DescribeHapgCommand;
async function serializeAws_json1_1DescribeHsmCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CloudHsmFrontendService.DescribeHsm";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeHsmRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeHsmCommand = serializeAws_json1_1DescribeHsmCommand;
async function serializeAws_json1_1DescribeLunaClientCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CloudHsmFrontendService.DescribeLunaClient";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeLunaClientRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeLunaClientCommand = serializeAws_json1_1DescribeLunaClientCommand;
async function serializeAws_json1_1GetConfigCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CloudHsmFrontendService.GetConfig";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetConfigRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetConfigCommand = serializeAws_json1_1GetConfigCommand;
async function serializeAws_json1_1ListAvailableZonesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CloudHsmFrontendService.ListAvailableZones";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAvailableZonesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListAvailableZonesCommand = serializeAws_json1_1ListAvailableZonesCommand;
async function serializeAws_json1_1ListHapgsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CloudHsmFrontendService.ListHapgs";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListHapgsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListHapgsCommand = serializeAws_json1_1ListHapgsCommand;
async function serializeAws_json1_1ListHsmsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CloudHsmFrontendService.ListHsms";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListHsmsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListHsmsCommand = serializeAws_json1_1ListHsmsCommand;
async function serializeAws_json1_1ListLunaClientsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CloudHsmFrontendService.ListLunaClients";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListLunaClientsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListLunaClientsCommand = serializeAws_json1_1ListLunaClientsCommand;
async function serializeAws_json1_1ListTagsForResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CloudHsmFrontendService.ListTagsForResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
async function serializeAws_json1_1ModifyHapgCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CloudHsmFrontendService.ModifyHapg";
    let body;
    body = JSON.stringify(serializeAws_json1_1ModifyHapgRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ModifyHapgCommand = serializeAws_json1_1ModifyHapgCommand;
async function serializeAws_json1_1ModifyHsmCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CloudHsmFrontendService.ModifyHsm";
    let body;
    body = JSON.stringify(serializeAws_json1_1ModifyHsmRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ModifyHsmCommand = serializeAws_json1_1ModifyHsmCommand;
async function serializeAws_json1_1ModifyLunaClientCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CloudHsmFrontendService.ModifyLunaClient";
    let body;
    body = JSON.stringify(serializeAws_json1_1ModifyLunaClientRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ModifyLunaClientCommand = serializeAws_json1_1ModifyLunaClientCommand;
async function serializeAws_json1_1RemoveTagsFromResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CloudHsmFrontendService.RemoveTagsFromResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1RemoveTagsFromResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RemoveTagsFromResourceCommand = serializeAws_json1_1RemoveTagsFromResourceCommand;
async function deserializeAws_json1_1AddTagsToResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AddTagsToResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AddTagsToResourceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AddTagsToResourceResponse" }, contents);
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
        case "CloudHsmInternalException":
        case "com.amazonaws.cloudhsm#CloudHsmInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmServiceException":
        case "com.amazonaws.cloudhsm#CloudHsmServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.cloudhsm#InvalidRequestException":
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
async function deserializeAws_json1_1CreateHapgCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateHapgCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateHapgResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateHapgResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateHapgCommand = deserializeAws_json1_1CreateHapgCommand;
async function deserializeAws_json1_1CreateHapgCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CloudHsmInternalException":
        case "com.amazonaws.cloudhsm#CloudHsmInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmServiceException":
        case "com.amazonaws.cloudhsm#CloudHsmServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.cloudhsm#InvalidRequestException":
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
async function deserializeAws_json1_1CreateHsmCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateHsmCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateHsmResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateHsmResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateHsmCommand = deserializeAws_json1_1CreateHsmCommand;
async function deserializeAws_json1_1CreateHsmCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CloudHsmInternalException":
        case "com.amazonaws.cloudhsm#CloudHsmInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmServiceException":
        case "com.amazonaws.cloudhsm#CloudHsmServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.cloudhsm#InvalidRequestException":
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
async function deserializeAws_json1_1CreateLunaClientCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateLunaClientCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateLunaClientResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateLunaClientResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateLunaClientCommand = deserializeAws_json1_1CreateLunaClientCommand;
async function deserializeAws_json1_1CreateLunaClientCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CloudHsmInternalException":
        case "com.amazonaws.cloudhsm#CloudHsmInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmServiceException":
        case "com.amazonaws.cloudhsm#CloudHsmServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.cloudhsm#InvalidRequestException":
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
async function deserializeAws_json1_1DeleteHapgCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteHapgCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteHapgResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteHapgResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteHapgCommand = deserializeAws_json1_1DeleteHapgCommand;
async function deserializeAws_json1_1DeleteHapgCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CloudHsmInternalException":
        case "com.amazonaws.cloudhsm#CloudHsmInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmServiceException":
        case "com.amazonaws.cloudhsm#CloudHsmServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.cloudhsm#InvalidRequestException":
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
async function deserializeAws_json1_1DeleteHsmCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteHsmCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteHsmResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteHsmResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteHsmCommand = deserializeAws_json1_1DeleteHsmCommand;
async function deserializeAws_json1_1DeleteHsmCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CloudHsmInternalException":
        case "com.amazonaws.cloudhsm#CloudHsmInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmServiceException":
        case "com.amazonaws.cloudhsm#CloudHsmServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.cloudhsm#InvalidRequestException":
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
async function deserializeAws_json1_1DeleteLunaClientCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteLunaClientCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteLunaClientResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteLunaClientResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteLunaClientCommand = deserializeAws_json1_1DeleteLunaClientCommand;
async function deserializeAws_json1_1DeleteLunaClientCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CloudHsmInternalException":
        case "com.amazonaws.cloudhsm#CloudHsmInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmServiceException":
        case "com.amazonaws.cloudhsm#CloudHsmServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.cloudhsm#InvalidRequestException":
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
async function deserializeAws_json1_1DescribeHapgCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeHapgCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeHapgResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeHapgResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeHapgCommand = deserializeAws_json1_1DescribeHapgCommand;
async function deserializeAws_json1_1DescribeHapgCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CloudHsmInternalException":
        case "com.amazonaws.cloudhsm#CloudHsmInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmServiceException":
        case "com.amazonaws.cloudhsm#CloudHsmServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.cloudhsm#InvalidRequestException":
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
async function deserializeAws_json1_1DescribeHsmCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeHsmCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeHsmResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeHsmResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeHsmCommand = deserializeAws_json1_1DescribeHsmCommand;
async function deserializeAws_json1_1DescribeHsmCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CloudHsmInternalException":
        case "com.amazonaws.cloudhsm#CloudHsmInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmServiceException":
        case "com.amazonaws.cloudhsm#CloudHsmServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.cloudhsm#InvalidRequestException":
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
async function deserializeAws_json1_1DescribeLunaClientCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeLunaClientCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeLunaClientResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeLunaClientResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeLunaClientCommand = deserializeAws_json1_1DescribeLunaClientCommand;
async function deserializeAws_json1_1DescribeLunaClientCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CloudHsmInternalException":
        case "com.amazonaws.cloudhsm#CloudHsmInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmServiceException":
        case "com.amazonaws.cloudhsm#CloudHsmServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.cloudhsm#InvalidRequestException":
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
async function deserializeAws_json1_1GetConfigCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetConfigCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetConfigResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetConfigResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetConfigCommand = deserializeAws_json1_1GetConfigCommand;
async function deserializeAws_json1_1GetConfigCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CloudHsmInternalException":
        case "com.amazonaws.cloudhsm#CloudHsmInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmServiceException":
        case "com.amazonaws.cloudhsm#CloudHsmServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.cloudhsm#InvalidRequestException":
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
async function deserializeAws_json1_1ListAvailableZonesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListAvailableZonesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAvailableZonesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListAvailableZonesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListAvailableZonesCommand = deserializeAws_json1_1ListAvailableZonesCommand;
async function deserializeAws_json1_1ListAvailableZonesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CloudHsmInternalException":
        case "com.amazonaws.cloudhsm#CloudHsmInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmServiceException":
        case "com.amazonaws.cloudhsm#CloudHsmServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.cloudhsm#InvalidRequestException":
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
async function deserializeAws_json1_1ListHapgsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListHapgsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListHapgsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListHapgsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListHapgsCommand = deserializeAws_json1_1ListHapgsCommand;
async function deserializeAws_json1_1ListHapgsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CloudHsmInternalException":
        case "com.amazonaws.cloudhsm#CloudHsmInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmServiceException":
        case "com.amazonaws.cloudhsm#CloudHsmServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.cloudhsm#InvalidRequestException":
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
async function deserializeAws_json1_1ListHsmsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListHsmsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListHsmsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListHsmsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListHsmsCommand = deserializeAws_json1_1ListHsmsCommand;
async function deserializeAws_json1_1ListHsmsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CloudHsmInternalException":
        case "com.amazonaws.cloudhsm#CloudHsmInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmServiceException":
        case "com.amazonaws.cloudhsm#CloudHsmServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.cloudhsm#InvalidRequestException":
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
async function deserializeAws_json1_1ListLunaClientsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListLunaClientsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListLunaClientsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListLunaClientsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListLunaClientsCommand = deserializeAws_json1_1ListLunaClientsCommand;
async function deserializeAws_json1_1ListLunaClientsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CloudHsmInternalException":
        case "com.amazonaws.cloudhsm#CloudHsmInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmServiceException":
        case "com.amazonaws.cloudhsm#CloudHsmServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.cloudhsm#InvalidRequestException":
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
        case "CloudHsmInternalException":
        case "com.amazonaws.cloudhsm#CloudHsmInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmServiceException":
        case "com.amazonaws.cloudhsm#CloudHsmServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.cloudhsm#InvalidRequestException":
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
async function deserializeAws_json1_1ModifyHapgCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ModifyHapgCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ModifyHapgResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ModifyHapgResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ModifyHapgCommand = deserializeAws_json1_1ModifyHapgCommand;
async function deserializeAws_json1_1ModifyHapgCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CloudHsmInternalException":
        case "com.amazonaws.cloudhsm#CloudHsmInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmServiceException":
        case "com.amazonaws.cloudhsm#CloudHsmServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.cloudhsm#InvalidRequestException":
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
async function deserializeAws_json1_1ModifyHsmCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ModifyHsmCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ModifyHsmResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ModifyHsmResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ModifyHsmCommand = deserializeAws_json1_1ModifyHsmCommand;
async function deserializeAws_json1_1ModifyHsmCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CloudHsmInternalException":
        case "com.amazonaws.cloudhsm#CloudHsmInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmServiceException":
        case "com.amazonaws.cloudhsm#CloudHsmServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.cloudhsm#InvalidRequestException":
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
async function deserializeAws_json1_1ModifyLunaClientCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ModifyLunaClientCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ModifyLunaClientResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ModifyLunaClientResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ModifyLunaClientCommand = deserializeAws_json1_1ModifyLunaClientCommand;
async function deserializeAws_json1_1ModifyLunaClientCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CloudHsmServiceException":
        case "com.amazonaws.cloudhsm#CloudHsmServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
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
    contents = deserializeAws_json1_1RemoveTagsFromResourceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RemoveTagsFromResourceResponse" }, contents);
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
        case "CloudHsmInternalException":
        case "com.amazonaws.cloudhsm#CloudHsmInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmServiceException":
        case "com.amazonaws.cloudhsm#CloudHsmServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.cloudhsm#InvalidRequestException":
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
const deserializeAws_json1_1CloudHsmInternalExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CloudHsmInternalException(body, context);
    const contents = Object.assign({ name: "CloudHsmInternalException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1CloudHsmServiceExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CloudHsmServiceException(body, context);
    const contents = Object.assign({ name: "CloudHsmServiceException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidRequestExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidRequestException(body, context);
    const contents = Object.assign({ name: "InvalidRequestException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1AddTagsToResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    if (input.TagList !== undefined) {
        bodyParams["TagList"] = serializeAws_json1_1TagList(input.TagList, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateHapgRequest = (input, context) => {
    const bodyParams = {};
    if (input.Label !== undefined) {
        bodyParams["Label"] = input.Label;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateHsmRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClientToken !== undefined) {
        bodyParams["ClientToken"] = input.ClientToken;
    }
    if (input.EniIp !== undefined) {
        bodyParams["EniIp"] = input.EniIp;
    }
    if (input.ExternalId !== undefined) {
        bodyParams["ExternalId"] = input.ExternalId;
    }
    if (input.IamRoleArn !== undefined) {
        bodyParams["IamRoleArn"] = input.IamRoleArn;
    }
    if (input.SshKey !== undefined) {
        bodyParams["SshKey"] = input.SshKey;
    }
    if (input.SubnetId !== undefined) {
        bodyParams["SubnetId"] = input.SubnetId;
    }
    if (input.SubscriptionType !== undefined) {
        bodyParams["SubscriptionType"] = input.SubscriptionType;
    }
    if (input.SyslogIp !== undefined) {
        bodyParams["SyslogIp"] = input.SyslogIp;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateLunaClientRequest = (input, context) => {
    const bodyParams = {};
    if (input.Certificate !== undefined) {
        bodyParams["Certificate"] = input.Certificate;
    }
    if (input.Label !== undefined) {
        bodyParams["Label"] = input.Label;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteHapgRequest = (input, context) => {
    const bodyParams = {};
    if (input.HapgArn !== undefined) {
        bodyParams["HapgArn"] = input.HapgArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteHsmRequest = (input, context) => {
    const bodyParams = {};
    if (input.HsmArn !== undefined) {
        bodyParams["HsmArn"] = input.HsmArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteLunaClientRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClientArn !== undefined) {
        bodyParams["ClientArn"] = input.ClientArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeHapgRequest = (input, context) => {
    const bodyParams = {};
    if (input.HapgArn !== undefined) {
        bodyParams["HapgArn"] = input.HapgArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeHsmRequest = (input, context) => {
    const bodyParams = {};
    if (input.HsmArn !== undefined) {
        bodyParams["HsmArn"] = input.HsmArn;
    }
    if (input.HsmSerialNumber !== undefined) {
        bodyParams["HsmSerialNumber"] = input.HsmSerialNumber;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeLunaClientRequest = (input, context) => {
    const bodyParams = {};
    if (input.CertificateFingerprint !== undefined) {
        bodyParams["CertificateFingerprint"] = input.CertificateFingerprint;
    }
    if (input.ClientArn !== undefined) {
        bodyParams["ClientArn"] = input.ClientArn;
    }
    return bodyParams;
};
const serializeAws_json1_1GetConfigRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClientArn !== undefined) {
        bodyParams["ClientArn"] = input.ClientArn;
    }
    if (input.ClientVersion !== undefined) {
        bodyParams["ClientVersion"] = input.ClientVersion;
    }
    if (input.HapgList !== undefined) {
        bodyParams["HapgList"] = serializeAws_json1_1HapgList(input.HapgList, context);
    }
    return bodyParams;
};
const serializeAws_json1_1HapgList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ListAvailableZonesRequest = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_1ListHapgsRequest = (input, context) => {
    const bodyParams = {};
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListHsmsRequest = (input, context) => {
    const bodyParams = {};
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListLunaClientsRequest = (input, context) => {
    const bodyParams = {};
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
const serializeAws_json1_1ModifyHapgRequest = (input, context) => {
    const bodyParams = {};
    if (input.HapgArn !== undefined) {
        bodyParams["HapgArn"] = input.HapgArn;
    }
    if (input.Label !== undefined) {
        bodyParams["Label"] = input.Label;
    }
    if (input.PartitionSerialList !== undefined) {
        bodyParams["PartitionSerialList"] = serializeAws_json1_1PartitionSerialList(input.PartitionSerialList, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ModifyHsmRequest = (input, context) => {
    const bodyParams = {};
    if (input.EniIp !== undefined) {
        bodyParams["EniIp"] = input.EniIp;
    }
    if (input.ExternalId !== undefined) {
        bodyParams["ExternalId"] = input.ExternalId;
    }
    if (input.HsmArn !== undefined) {
        bodyParams["HsmArn"] = input.HsmArn;
    }
    if (input.IamRoleArn !== undefined) {
        bodyParams["IamRoleArn"] = input.IamRoleArn;
    }
    if (input.SubnetId !== undefined) {
        bodyParams["SubnetId"] = input.SubnetId;
    }
    if (input.SyslogIp !== undefined) {
        bodyParams["SyslogIp"] = input.SyslogIp;
    }
    return bodyParams;
};
const serializeAws_json1_1ModifyLunaClientRequest = (input, context) => {
    const bodyParams = {};
    if (input.Certificate !== undefined) {
        bodyParams["Certificate"] = input.Certificate;
    }
    if (input.ClientArn !== undefined) {
        bodyParams["ClientArn"] = input.ClientArn;
    }
    return bodyParams;
};
const serializeAws_json1_1PartitionSerialList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1RemoveTagsFromResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    if (input.TagKeyList !== undefined) {
        bodyParams["TagKeyList"] = serializeAws_json1_1TagKeyList(input.TagKeyList, context);
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
const deserializeAws_json1_1AZList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1AddTagsToResourceResponse = (output, context) => {
    let contents = {
        __type: "AddTagsToResourceResponse",
        Status: undefined
    };
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
};
const deserializeAws_json1_1ClientList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1CloudHsmInternalException = (output, context) => {
    let contents = {
        __type: "CloudHsmInternalException",
        message: undefined,
        retryable: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    if (output.retryable !== undefined && output.retryable !== null) {
        contents.retryable = output.retryable;
    }
    return contents;
};
const deserializeAws_json1_1CloudHsmServiceException = (output, context) => {
    let contents = {
        __type: "CloudHsmServiceException",
        message: undefined,
        retryable: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    if (output.retryable !== undefined && output.retryable !== null) {
        contents.retryable = output.retryable;
    }
    return contents;
};
const deserializeAws_json1_1CreateHapgResponse = (output, context) => {
    let contents = {
        __type: "CreateHapgResponse",
        HapgArn: undefined
    };
    if (output.HapgArn !== undefined && output.HapgArn !== null) {
        contents.HapgArn = output.HapgArn;
    }
    return contents;
};
const deserializeAws_json1_1CreateHsmResponse = (output, context) => {
    let contents = {
        __type: "CreateHsmResponse",
        HsmArn: undefined
    };
    if (output.HsmArn !== undefined && output.HsmArn !== null) {
        contents.HsmArn = output.HsmArn;
    }
    return contents;
};
const deserializeAws_json1_1CreateLunaClientResponse = (output, context) => {
    let contents = {
        __type: "CreateLunaClientResponse",
        ClientArn: undefined
    };
    if (output.ClientArn !== undefined && output.ClientArn !== null) {
        contents.ClientArn = output.ClientArn;
    }
    return contents;
};
const deserializeAws_json1_1DeleteHapgResponse = (output, context) => {
    let contents = {
        __type: "DeleteHapgResponse",
        Status: undefined
    };
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
};
const deserializeAws_json1_1DeleteHsmResponse = (output, context) => {
    let contents = {
        __type: "DeleteHsmResponse",
        Status: undefined
    };
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
};
const deserializeAws_json1_1DeleteLunaClientResponse = (output, context) => {
    let contents = {
        __type: "DeleteLunaClientResponse",
        Status: undefined
    };
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
};
const deserializeAws_json1_1DescribeHapgResponse = (output, context) => {
    let contents = {
        __type: "DescribeHapgResponse",
        HapgArn: undefined,
        HapgSerial: undefined,
        HsmsLastActionFailed: undefined,
        HsmsPendingDeletion: undefined,
        HsmsPendingRegistration: undefined,
        Label: undefined,
        LastModifiedTimestamp: undefined,
        PartitionSerialList: undefined,
        State: undefined
    };
    if (output.HapgArn !== undefined && output.HapgArn !== null) {
        contents.HapgArn = output.HapgArn;
    }
    if (output.HapgSerial !== undefined && output.HapgSerial !== null) {
        contents.HapgSerial = output.HapgSerial;
    }
    if (output.HsmsLastActionFailed !== undefined &&
        output.HsmsLastActionFailed !== null) {
        contents.HsmsLastActionFailed = deserializeAws_json1_1HsmList(output.HsmsLastActionFailed, context);
    }
    if (output.HsmsPendingDeletion !== undefined &&
        output.HsmsPendingDeletion !== null) {
        contents.HsmsPendingDeletion = deserializeAws_json1_1HsmList(output.HsmsPendingDeletion, context);
    }
    if (output.HsmsPendingRegistration !== undefined &&
        output.HsmsPendingRegistration !== null) {
        contents.HsmsPendingRegistration = deserializeAws_json1_1HsmList(output.HsmsPendingRegistration, context);
    }
    if (output.Label !== undefined && output.Label !== null) {
        contents.Label = output.Label;
    }
    if (output.LastModifiedTimestamp !== undefined &&
        output.LastModifiedTimestamp !== null) {
        contents.LastModifiedTimestamp = output.LastModifiedTimestamp;
    }
    if (output.PartitionSerialList !== undefined &&
        output.PartitionSerialList !== null) {
        contents.PartitionSerialList = deserializeAws_json1_1PartitionSerialList(output.PartitionSerialList, context);
    }
    if (output.State !== undefined && output.State !== null) {
        contents.State = output.State;
    }
    return contents;
};
const deserializeAws_json1_1DescribeHsmResponse = (output, context) => {
    let contents = {
        __type: "DescribeHsmResponse",
        AvailabilityZone: undefined,
        EniId: undefined,
        EniIp: undefined,
        HsmArn: undefined,
        HsmType: undefined,
        IamRoleArn: undefined,
        Partitions: undefined,
        SerialNumber: undefined,
        ServerCertLastUpdated: undefined,
        ServerCertUri: undefined,
        SoftwareVersion: undefined,
        SshKeyLastUpdated: undefined,
        SshPublicKey: undefined,
        Status: undefined,
        StatusDetails: undefined,
        SubnetId: undefined,
        SubscriptionEndDate: undefined,
        SubscriptionStartDate: undefined,
        SubscriptionType: undefined,
        VendorName: undefined,
        VpcId: undefined
    };
    if (output.AvailabilityZone !== undefined &&
        output.AvailabilityZone !== null) {
        contents.AvailabilityZone = output.AvailabilityZone;
    }
    if (output.EniId !== undefined && output.EniId !== null) {
        contents.EniId = output.EniId;
    }
    if (output.EniIp !== undefined && output.EniIp !== null) {
        contents.EniIp = output.EniIp;
    }
    if (output.HsmArn !== undefined && output.HsmArn !== null) {
        contents.HsmArn = output.HsmArn;
    }
    if (output.HsmType !== undefined && output.HsmType !== null) {
        contents.HsmType = output.HsmType;
    }
    if (output.IamRoleArn !== undefined && output.IamRoleArn !== null) {
        contents.IamRoleArn = output.IamRoleArn;
    }
    if (output.Partitions !== undefined && output.Partitions !== null) {
        contents.Partitions = deserializeAws_json1_1PartitionList(output.Partitions, context);
    }
    if (output.SerialNumber !== undefined && output.SerialNumber !== null) {
        contents.SerialNumber = output.SerialNumber;
    }
    if (output.ServerCertLastUpdated !== undefined &&
        output.ServerCertLastUpdated !== null) {
        contents.ServerCertLastUpdated = output.ServerCertLastUpdated;
    }
    if (output.ServerCertUri !== undefined && output.ServerCertUri !== null) {
        contents.ServerCertUri = output.ServerCertUri;
    }
    if (output.SoftwareVersion !== undefined && output.SoftwareVersion !== null) {
        contents.SoftwareVersion = output.SoftwareVersion;
    }
    if (output.SshKeyLastUpdated !== undefined &&
        output.SshKeyLastUpdated !== null) {
        contents.SshKeyLastUpdated = output.SshKeyLastUpdated;
    }
    if (output.SshPublicKey !== undefined && output.SshPublicKey !== null) {
        contents.SshPublicKey = output.SshPublicKey;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.StatusDetails !== undefined && output.StatusDetails !== null) {
        contents.StatusDetails = output.StatusDetails;
    }
    if (output.SubnetId !== undefined && output.SubnetId !== null) {
        contents.SubnetId = output.SubnetId;
    }
    if (output.SubscriptionEndDate !== undefined &&
        output.SubscriptionEndDate !== null) {
        contents.SubscriptionEndDate = output.SubscriptionEndDate;
    }
    if (output.SubscriptionStartDate !== undefined &&
        output.SubscriptionStartDate !== null) {
        contents.SubscriptionStartDate = output.SubscriptionStartDate;
    }
    if (output.SubscriptionType !== undefined &&
        output.SubscriptionType !== null) {
        contents.SubscriptionType = output.SubscriptionType;
    }
    if (output.VendorName !== undefined && output.VendorName !== null) {
        contents.VendorName = output.VendorName;
    }
    if (output.VpcId !== undefined && output.VpcId !== null) {
        contents.VpcId = output.VpcId;
    }
    return contents;
};
const deserializeAws_json1_1DescribeLunaClientResponse = (output, context) => {
    let contents = {
        __type: "DescribeLunaClientResponse",
        Certificate: undefined,
        CertificateFingerprint: undefined,
        ClientArn: undefined,
        Label: undefined,
        LastModifiedTimestamp: undefined
    };
    if (output.Certificate !== undefined && output.Certificate !== null) {
        contents.Certificate = output.Certificate;
    }
    if (output.CertificateFingerprint !== undefined &&
        output.CertificateFingerprint !== null) {
        contents.CertificateFingerprint = output.CertificateFingerprint;
    }
    if (output.ClientArn !== undefined && output.ClientArn !== null) {
        contents.ClientArn = output.ClientArn;
    }
    if (output.Label !== undefined && output.Label !== null) {
        contents.Label = output.Label;
    }
    if (output.LastModifiedTimestamp !== undefined &&
        output.LastModifiedTimestamp !== null) {
        contents.LastModifiedTimestamp = output.LastModifiedTimestamp;
    }
    return contents;
};
const deserializeAws_json1_1GetConfigResponse = (output, context) => {
    let contents = {
        __type: "GetConfigResponse",
        ConfigCred: undefined,
        ConfigFile: undefined,
        ConfigType: undefined
    };
    if (output.ConfigCred !== undefined && output.ConfigCred !== null) {
        contents.ConfigCred = output.ConfigCred;
    }
    if (output.ConfigFile !== undefined && output.ConfigFile !== null) {
        contents.ConfigFile = output.ConfigFile;
    }
    if (output.ConfigType !== undefined && output.ConfigType !== null) {
        contents.ConfigType = output.ConfigType;
    }
    return contents;
};
const deserializeAws_json1_1HapgList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1HsmList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1InvalidRequestException = (output, context) => {
    let contents = {
        __type: "InvalidRequestException",
        message: undefined,
        retryable: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    if (output.retryable !== undefined && output.retryable !== null) {
        contents.retryable = output.retryable;
    }
    return contents;
};
const deserializeAws_json1_1ListAvailableZonesResponse = (output, context) => {
    let contents = {
        __type: "ListAvailableZonesResponse",
        AZList: undefined
    };
    if (output.AZList !== undefined && output.AZList !== null) {
        contents.AZList = deserializeAws_json1_1AZList(output.AZList, context);
    }
    return contents;
};
const deserializeAws_json1_1ListHapgsResponse = (output, context) => {
    let contents = {
        __type: "ListHapgsResponse",
        HapgList: undefined,
        NextToken: undefined
    };
    if (output.HapgList !== undefined && output.HapgList !== null) {
        contents.HapgList = deserializeAws_json1_1HapgList(output.HapgList, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListHsmsResponse = (output, context) => {
    let contents = {
        __type: "ListHsmsResponse",
        HsmList: undefined,
        NextToken: undefined
    };
    if (output.HsmList !== undefined && output.HsmList !== null) {
        contents.HsmList = deserializeAws_json1_1HsmList(output.HsmList, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListLunaClientsResponse = (output, context) => {
    let contents = {
        __type: "ListLunaClientsResponse",
        ClientList: undefined,
        NextToken: undefined
    };
    if (output.ClientList !== undefined && output.ClientList !== null) {
        contents.ClientList = deserializeAws_json1_1ClientList(output.ClientList, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListTagsForResourceResponse = (output, context) => {
    let contents = {
        __type: "ListTagsForResourceResponse",
        TagList: undefined
    };
    if (output.TagList !== undefined && output.TagList !== null) {
        contents.TagList = deserializeAws_json1_1TagList(output.TagList, context);
    }
    return contents;
};
const deserializeAws_json1_1ModifyHapgResponse = (output, context) => {
    let contents = {
        __type: "ModifyHapgResponse",
        HapgArn: undefined
    };
    if (output.HapgArn !== undefined && output.HapgArn !== null) {
        contents.HapgArn = output.HapgArn;
    }
    return contents;
};
const deserializeAws_json1_1ModifyHsmResponse = (output, context) => {
    let contents = {
        __type: "ModifyHsmResponse",
        HsmArn: undefined
    };
    if (output.HsmArn !== undefined && output.HsmArn !== null) {
        contents.HsmArn = output.HsmArn;
    }
    return contents;
};
const deserializeAws_json1_1ModifyLunaClientResponse = (output, context) => {
    let contents = {
        __type: "ModifyLunaClientResponse",
        ClientArn: undefined
    };
    if (output.ClientArn !== undefined && output.ClientArn !== null) {
        contents.ClientArn = output.ClientArn;
    }
    return contents;
};
const deserializeAws_json1_1PartitionList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1PartitionSerialList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1RemoveTagsFromResourceResponse = (output, context) => {
    let contents = {
        __type: "RemoveTagsFromResourceResponse",
        Status: undefined
    };
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
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