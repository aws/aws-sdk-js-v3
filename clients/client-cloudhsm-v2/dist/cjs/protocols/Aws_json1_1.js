"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1CopyBackupToRegionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "BaldrApiService.CopyBackupToRegion";
    let body;
    body = JSON.stringify(serializeAws_json1_1CopyBackupToRegionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CopyBackupToRegionCommand = serializeAws_json1_1CopyBackupToRegionCommand;
async function serializeAws_json1_1CreateClusterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "BaldrApiService.CreateCluster";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateClusterRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateClusterCommand = serializeAws_json1_1CreateClusterCommand;
async function serializeAws_json1_1CreateHsmCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "BaldrApiService.CreateHsm";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateHsmRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateHsmCommand = serializeAws_json1_1CreateHsmCommand;
async function serializeAws_json1_1DeleteBackupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "BaldrApiService.DeleteBackup";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteBackupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteBackupCommand = serializeAws_json1_1DeleteBackupCommand;
async function serializeAws_json1_1DeleteClusterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "BaldrApiService.DeleteCluster";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteClusterRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteClusterCommand = serializeAws_json1_1DeleteClusterCommand;
async function serializeAws_json1_1DeleteHsmCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "BaldrApiService.DeleteHsm";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteHsmRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteHsmCommand = serializeAws_json1_1DeleteHsmCommand;
async function serializeAws_json1_1DescribeBackupsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "BaldrApiService.DescribeBackups";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeBackupsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeBackupsCommand = serializeAws_json1_1DescribeBackupsCommand;
async function serializeAws_json1_1DescribeClustersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "BaldrApiService.DescribeClusters";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeClustersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeClustersCommand = serializeAws_json1_1DescribeClustersCommand;
async function serializeAws_json1_1InitializeClusterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "BaldrApiService.InitializeCluster";
    let body;
    body = JSON.stringify(serializeAws_json1_1InitializeClusterRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1InitializeClusterCommand = serializeAws_json1_1InitializeClusterCommand;
async function serializeAws_json1_1ListTagsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "BaldrApiService.ListTags";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTagsCommand = serializeAws_json1_1ListTagsCommand;
async function serializeAws_json1_1RestoreBackupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "BaldrApiService.RestoreBackup";
    let body;
    body = JSON.stringify(serializeAws_json1_1RestoreBackupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RestoreBackupCommand = serializeAws_json1_1RestoreBackupCommand;
async function serializeAws_json1_1TagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "BaldrApiService.TagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
async function serializeAws_json1_1UntagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "BaldrApiService.UntagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
async function deserializeAws_json1_1CopyBackupToRegionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CopyBackupToRegionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CopyBackupToRegionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CopyBackupToRegionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CopyBackupToRegionCommand = deserializeAws_json1_1CopyBackupToRegionCommand;
async function deserializeAws_json1_1CopyBackupToRegionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CloudHsmAccessDeniedException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmInternalFailureException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmInternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmInternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmInvalidRequestException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmInvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmInvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmResourceNotFoundException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmServiceException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmTagException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmTagException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmTagExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateClusterCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateClusterResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateClusterResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateClusterCommand = deserializeAws_json1_1CreateClusterCommand;
async function deserializeAws_json1_1CreateClusterCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CloudHsmAccessDeniedException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmInternalFailureException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmInternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmInternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmInvalidRequestException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmInvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmInvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmResourceNotFoundException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmServiceException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmTagException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmTagException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmTagExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
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
        case "CloudHsmAccessDeniedException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmInternalFailureException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmInternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmInternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmInvalidRequestException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmInvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmInvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmResourceNotFoundException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmServiceException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmServiceException":
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
async function deserializeAws_json1_1DeleteBackupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteBackupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteBackupResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteBackupResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteBackupCommand = deserializeAws_json1_1DeleteBackupCommand;
async function deserializeAws_json1_1DeleteBackupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CloudHsmAccessDeniedException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmInternalFailureException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmInternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmInternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmInvalidRequestException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmInvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmInvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmResourceNotFoundException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmServiceException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmServiceException":
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
async function deserializeAws_json1_1DeleteClusterCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteClusterResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteClusterResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteClusterCommand = deserializeAws_json1_1DeleteClusterCommand;
async function deserializeAws_json1_1DeleteClusterCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CloudHsmAccessDeniedException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmInternalFailureException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmInternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmInternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmInvalidRequestException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmInvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmInvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmResourceNotFoundException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmServiceException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmTagException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmTagException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmTagExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
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
        case "CloudHsmAccessDeniedException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmInternalFailureException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmInternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmInternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmInvalidRequestException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmInvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmInvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmResourceNotFoundException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmServiceException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmServiceException":
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
async function deserializeAws_json1_1DescribeBackupsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeBackupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeBackupsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeBackupsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeBackupsCommand = deserializeAws_json1_1DescribeBackupsCommand;
async function deserializeAws_json1_1DescribeBackupsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CloudHsmAccessDeniedException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmInternalFailureException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmInternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmInternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmInvalidRequestException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmInvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmInvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmResourceNotFoundException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmServiceException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmTagException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmTagException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmTagExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeClustersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeClustersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeClustersResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeClustersResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeClustersCommand = deserializeAws_json1_1DescribeClustersCommand;
async function deserializeAws_json1_1DescribeClustersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CloudHsmAccessDeniedException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmInternalFailureException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmInternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmInternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmInvalidRequestException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmInvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmInvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmServiceException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmTagException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmTagException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmTagExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1InitializeClusterCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1InitializeClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1InitializeClusterResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "InitializeClusterResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1InitializeClusterCommand = deserializeAws_json1_1InitializeClusterCommand;
async function deserializeAws_json1_1InitializeClusterCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CloudHsmAccessDeniedException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmInternalFailureException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmInternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmInternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmInvalidRequestException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmInvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmInvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmResourceNotFoundException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmServiceException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmServiceException":
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
async function deserializeAws_json1_1ListTagsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTagsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListTagsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListTagsCommand = deserializeAws_json1_1ListTagsCommand;
async function deserializeAws_json1_1ListTagsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CloudHsmAccessDeniedException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmInternalFailureException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmInternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmInternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmInvalidRequestException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmInvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmInvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmResourceNotFoundException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmServiceException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmTagException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmTagException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmTagExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1RestoreBackupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RestoreBackupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RestoreBackupResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RestoreBackupResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RestoreBackupCommand = deserializeAws_json1_1RestoreBackupCommand;
async function deserializeAws_json1_1RestoreBackupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CloudHsmAccessDeniedException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmInternalFailureException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmInternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmInternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmInvalidRequestException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmInvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmInvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmResourceNotFoundException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmServiceException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmServiceException":
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
        case "CloudHsmAccessDeniedException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmInternalFailureException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmInternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmInternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmInvalidRequestException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmInvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmInvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmResourceNotFoundException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmServiceException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmTagException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmTagException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmTagExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
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
        case "CloudHsmAccessDeniedException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmInternalFailureException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmInternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmInternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmInvalidRequestException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmInvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmInvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmResourceNotFoundException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmServiceException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmTagException":
        case "com.amazonaws.cloudhsm.api.service#CloudHsmTagException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmTagExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
const deserializeAws_json1_1CloudHsmAccessDeniedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CloudHsmAccessDeniedException(body, context);
    const contents = Object.assign({ name: "CloudHsmAccessDeniedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1CloudHsmInternalFailureExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CloudHsmInternalFailureException(body, context);
    const contents = Object.assign({ name: "CloudHsmInternalFailureException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1CloudHsmInvalidRequestExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CloudHsmInvalidRequestException(body, context);
    const contents = Object.assign({ name: "CloudHsmInvalidRequestException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1CloudHsmResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CloudHsmResourceNotFoundException(body, context);
    const contents = Object.assign({ name: "CloudHsmResourceNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1CloudHsmServiceExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CloudHsmServiceException(body, context);
    const contents = Object.assign({ name: "CloudHsmServiceException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1CloudHsmTagExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CloudHsmTagException(body, context);
    const contents = Object.assign({ name: "CloudHsmTagException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1CopyBackupToRegionRequest = (input, context) => {
    const bodyParams = {};
    if (input.BackupId !== undefined) {
        bodyParams["BackupId"] = input.BackupId;
    }
    if (input.DestinationRegion !== undefined) {
        bodyParams["DestinationRegion"] = input.DestinationRegion;
    }
    if (input.TagList !== undefined) {
        bodyParams["TagList"] = serializeAws_json1_1TagList(input.TagList, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateClusterRequest = (input, context) => {
    const bodyParams = {};
    if (input.HsmType !== undefined) {
        bodyParams["HsmType"] = input.HsmType;
    }
    if (input.SourceBackupId !== undefined) {
        bodyParams["SourceBackupId"] = input.SourceBackupId;
    }
    if (input.SubnetIds !== undefined) {
        bodyParams["SubnetIds"] = serializeAws_json1_1SubnetIds(input.SubnetIds, context);
    }
    if (input.TagList !== undefined) {
        bodyParams["TagList"] = serializeAws_json1_1TagList(input.TagList, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateHsmRequest = (input, context) => {
    const bodyParams = {};
    if (input.AvailabilityZone !== undefined) {
        bodyParams["AvailabilityZone"] = input.AvailabilityZone;
    }
    if (input.ClusterId !== undefined) {
        bodyParams["ClusterId"] = input.ClusterId;
    }
    if (input.IpAddress !== undefined) {
        bodyParams["IpAddress"] = input.IpAddress;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteBackupRequest = (input, context) => {
    const bodyParams = {};
    if (input.BackupId !== undefined) {
        bodyParams["BackupId"] = input.BackupId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteClusterRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClusterId !== undefined) {
        bodyParams["ClusterId"] = input.ClusterId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteHsmRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClusterId !== undefined) {
        bodyParams["ClusterId"] = input.ClusterId;
    }
    if (input.EniId !== undefined) {
        bodyParams["EniId"] = input.EniId;
    }
    if (input.EniIp !== undefined) {
        bodyParams["EniIp"] = input.EniIp;
    }
    if (input.HsmId !== undefined) {
        bodyParams["HsmId"] = input.HsmId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeBackupsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1Filters(input.Filters, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.SortAscending !== undefined) {
        bodyParams["SortAscending"] = input.SortAscending;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeClustersRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1Filters(input.Filters, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1Filters = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = serializeAws_json1_1Strings(input[key], context);
    });
    return mapParams;
};
const serializeAws_json1_1InitializeClusterRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClusterId !== undefined) {
        bodyParams["ClusterId"] = input.ClusterId;
    }
    if (input.SignedCert !== undefined) {
        bodyParams["SignedCert"] = input.SignedCert;
    }
    if (input.TrustAnchor !== undefined) {
        bodyParams["TrustAnchor"] = input.TrustAnchor;
    }
    return bodyParams;
};
const serializeAws_json1_1ListTagsRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.ResourceId !== undefined) {
        bodyParams["ResourceId"] = input.ResourceId;
    }
    return bodyParams;
};
const serializeAws_json1_1RestoreBackupRequest = (input, context) => {
    const bodyParams = {};
    if (input.BackupId !== undefined) {
        bodyParams["BackupId"] = input.BackupId;
    }
    return bodyParams;
};
const serializeAws_json1_1Strings = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
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
const serializeAws_json1_1TagResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceId !== undefined) {
        bodyParams["ResourceId"] = input.ResourceId;
    }
    if (input.TagList !== undefined) {
        bodyParams["TagList"] = serializeAws_json1_1TagList(input.TagList, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceId !== undefined) {
        bodyParams["ResourceId"] = input.ResourceId;
    }
    if (input.TagKeyList !== undefined) {
        bodyParams["TagKeyList"] = serializeAws_json1_1TagKeyList(input.TagKeyList, context);
    }
    return bodyParams;
};
const deserializeAws_json1_1Backup = (output, context) => {
    let contents = {
        __type: "Backup",
        BackupId: undefined,
        BackupState: undefined,
        ClusterId: undefined,
        CopyTimestamp: undefined,
        CreateTimestamp: undefined,
        DeleteTimestamp: undefined,
        SourceBackup: undefined,
        SourceCluster: undefined,
        SourceRegion: undefined,
        TagList: undefined
    };
    if (output.BackupId !== undefined && output.BackupId !== null) {
        contents.BackupId = output.BackupId;
    }
    if (output.BackupState !== undefined && output.BackupState !== null) {
        contents.BackupState = output.BackupState;
    }
    if (output.ClusterId !== undefined && output.ClusterId !== null) {
        contents.ClusterId = output.ClusterId;
    }
    if (output.CopyTimestamp !== undefined && output.CopyTimestamp !== null) {
        contents.CopyTimestamp = new Date(Math.round(output.CopyTimestamp * 1000));
    }
    if (output.CreateTimestamp !== undefined && output.CreateTimestamp !== null) {
        contents.CreateTimestamp = new Date(Math.round(output.CreateTimestamp * 1000));
    }
    if (output.DeleteTimestamp !== undefined && output.DeleteTimestamp !== null) {
        contents.DeleteTimestamp = new Date(Math.round(output.DeleteTimestamp * 1000));
    }
    if (output.SourceBackup !== undefined && output.SourceBackup !== null) {
        contents.SourceBackup = output.SourceBackup;
    }
    if (output.SourceCluster !== undefined && output.SourceCluster !== null) {
        contents.SourceCluster = output.SourceCluster;
    }
    if (output.SourceRegion !== undefined && output.SourceRegion !== null) {
        contents.SourceRegion = output.SourceRegion;
    }
    if (output.TagList !== undefined && output.TagList !== null) {
        contents.TagList = deserializeAws_json1_1TagList(output.TagList, context);
    }
    return contents;
};
const deserializeAws_json1_1Backups = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Backup(entry, context));
};
const deserializeAws_json1_1Certificates = (output, context) => {
    let contents = {
        __type: "Certificates",
        AwsHardwareCertificate: undefined,
        ClusterCertificate: undefined,
        ClusterCsr: undefined,
        HsmCertificate: undefined,
        ManufacturerHardwareCertificate: undefined
    };
    if (output.AwsHardwareCertificate !== undefined &&
        output.AwsHardwareCertificate !== null) {
        contents.AwsHardwareCertificate = output.AwsHardwareCertificate;
    }
    if (output.ClusterCertificate !== undefined &&
        output.ClusterCertificate !== null) {
        contents.ClusterCertificate = output.ClusterCertificate;
    }
    if (output.ClusterCsr !== undefined && output.ClusterCsr !== null) {
        contents.ClusterCsr = output.ClusterCsr;
    }
    if (output.HsmCertificate !== undefined && output.HsmCertificate !== null) {
        contents.HsmCertificate = output.HsmCertificate;
    }
    if (output.ManufacturerHardwareCertificate !== undefined &&
        output.ManufacturerHardwareCertificate !== null) {
        contents.ManufacturerHardwareCertificate =
            output.ManufacturerHardwareCertificate;
    }
    return contents;
};
const deserializeAws_json1_1Cluster = (output, context) => {
    let contents = {
        __type: "Cluster",
        BackupPolicy: undefined,
        Certificates: undefined,
        ClusterId: undefined,
        CreateTimestamp: undefined,
        HsmType: undefined,
        Hsms: undefined,
        PreCoPassword: undefined,
        SecurityGroup: undefined,
        SourceBackupId: undefined,
        State: undefined,
        StateMessage: undefined,
        SubnetMapping: undefined,
        TagList: undefined,
        VpcId: undefined
    };
    if (output.BackupPolicy !== undefined && output.BackupPolicy !== null) {
        contents.BackupPolicy = output.BackupPolicy;
    }
    if (output.Certificates !== undefined && output.Certificates !== null) {
        contents.Certificates = deserializeAws_json1_1Certificates(output.Certificates, context);
    }
    if (output.ClusterId !== undefined && output.ClusterId !== null) {
        contents.ClusterId = output.ClusterId;
    }
    if (output.CreateTimestamp !== undefined && output.CreateTimestamp !== null) {
        contents.CreateTimestamp = new Date(Math.round(output.CreateTimestamp * 1000));
    }
    if (output.HsmType !== undefined && output.HsmType !== null) {
        contents.HsmType = output.HsmType;
    }
    if (output.Hsms !== undefined && output.Hsms !== null) {
        contents.Hsms = deserializeAws_json1_1Hsms(output.Hsms, context);
    }
    if (output.PreCoPassword !== undefined && output.PreCoPassword !== null) {
        contents.PreCoPassword = output.PreCoPassword;
    }
    if (output.SecurityGroup !== undefined && output.SecurityGroup !== null) {
        contents.SecurityGroup = output.SecurityGroup;
    }
    if (output.SourceBackupId !== undefined && output.SourceBackupId !== null) {
        contents.SourceBackupId = output.SourceBackupId;
    }
    if (output.State !== undefined && output.State !== null) {
        contents.State = output.State;
    }
    if (output.StateMessage !== undefined && output.StateMessage !== null) {
        contents.StateMessage = output.StateMessage;
    }
    if (output.SubnetMapping !== undefined && output.SubnetMapping !== null) {
        contents.SubnetMapping = deserializeAws_json1_1ExternalSubnetMapping(output.SubnetMapping, context);
    }
    if (output.TagList !== undefined && output.TagList !== null) {
        contents.TagList = deserializeAws_json1_1TagList(output.TagList, context);
    }
    if (output.VpcId !== undefined && output.VpcId !== null) {
        contents.VpcId = output.VpcId;
    }
    return contents;
};
const deserializeAws_json1_1Clusters = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Cluster(entry, context));
};
const deserializeAws_json1_1CopyBackupToRegionResponse = (output, context) => {
    let contents = {
        __type: "CopyBackupToRegionResponse",
        DestinationBackup: undefined
    };
    if (output.DestinationBackup !== undefined &&
        output.DestinationBackup !== null) {
        contents.DestinationBackup = deserializeAws_json1_1DestinationBackup(output.DestinationBackup, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateClusterResponse = (output, context) => {
    let contents = {
        __type: "CreateClusterResponse",
        Cluster: undefined
    };
    if (output.Cluster !== undefined && output.Cluster !== null) {
        contents.Cluster = deserializeAws_json1_1Cluster(output.Cluster, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateHsmResponse = (output, context) => {
    let contents = {
        __type: "CreateHsmResponse",
        Hsm: undefined
    };
    if (output.Hsm !== undefined && output.Hsm !== null) {
        contents.Hsm = deserializeAws_json1_1Hsm(output.Hsm, context);
    }
    return contents;
};
const deserializeAws_json1_1DeleteBackupResponse = (output, context) => {
    let contents = {
        __type: "DeleteBackupResponse",
        Backup: undefined
    };
    if (output.Backup !== undefined && output.Backup !== null) {
        contents.Backup = deserializeAws_json1_1Backup(output.Backup, context);
    }
    return contents;
};
const deserializeAws_json1_1DeleteClusterResponse = (output, context) => {
    let contents = {
        __type: "DeleteClusterResponse",
        Cluster: undefined
    };
    if (output.Cluster !== undefined && output.Cluster !== null) {
        contents.Cluster = deserializeAws_json1_1Cluster(output.Cluster, context);
    }
    return contents;
};
const deserializeAws_json1_1DeleteHsmResponse = (output, context) => {
    let contents = {
        __type: "DeleteHsmResponse",
        HsmId: undefined
    };
    if (output.HsmId !== undefined && output.HsmId !== null) {
        contents.HsmId = output.HsmId;
    }
    return contents;
};
const deserializeAws_json1_1DescribeBackupsResponse = (output, context) => {
    let contents = {
        __type: "DescribeBackupsResponse",
        Backups: undefined,
        NextToken: undefined
    };
    if (output.Backups !== undefined && output.Backups !== null) {
        contents.Backups = deserializeAws_json1_1Backups(output.Backups, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeClustersResponse = (output, context) => {
    let contents = {
        __type: "DescribeClustersResponse",
        Clusters: undefined,
        NextToken: undefined
    };
    if (output.Clusters !== undefined && output.Clusters !== null) {
        contents.Clusters = deserializeAws_json1_1Clusters(output.Clusters, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1DestinationBackup = (output, context) => {
    let contents = {
        __type: "DestinationBackup",
        CreateTimestamp: undefined,
        SourceBackup: undefined,
        SourceCluster: undefined,
        SourceRegion: undefined
    };
    if (output.CreateTimestamp !== undefined && output.CreateTimestamp !== null) {
        contents.CreateTimestamp = new Date(Math.round(output.CreateTimestamp * 1000));
    }
    if (output.SourceBackup !== undefined && output.SourceBackup !== null) {
        contents.SourceBackup = output.SourceBackup;
    }
    if (output.SourceCluster !== undefined && output.SourceCluster !== null) {
        contents.SourceCluster = output.SourceCluster;
    }
    if (output.SourceRegion !== undefined && output.SourceRegion !== null) {
        contents.SourceRegion = output.SourceRegion;
    }
    return contents;
};
const deserializeAws_json1_1ExternalSubnetMapping = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1Hsm = (output, context) => {
    let contents = {
        __type: "Hsm",
        AvailabilityZone: undefined,
        ClusterId: undefined,
        EniId: undefined,
        EniIp: undefined,
        HsmId: undefined,
        State: undefined,
        StateMessage: undefined,
        SubnetId: undefined
    };
    if (output.AvailabilityZone !== undefined &&
        output.AvailabilityZone !== null) {
        contents.AvailabilityZone = output.AvailabilityZone;
    }
    if (output.ClusterId !== undefined && output.ClusterId !== null) {
        contents.ClusterId = output.ClusterId;
    }
    if (output.EniId !== undefined && output.EniId !== null) {
        contents.EniId = output.EniId;
    }
    if (output.EniIp !== undefined && output.EniIp !== null) {
        contents.EniIp = output.EniIp;
    }
    if (output.HsmId !== undefined && output.HsmId !== null) {
        contents.HsmId = output.HsmId;
    }
    if (output.State !== undefined && output.State !== null) {
        contents.State = output.State;
    }
    if (output.StateMessage !== undefined && output.StateMessage !== null) {
        contents.StateMessage = output.StateMessage;
    }
    if (output.SubnetId !== undefined && output.SubnetId !== null) {
        contents.SubnetId = output.SubnetId;
    }
    return contents;
};
const deserializeAws_json1_1Hsms = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Hsm(entry, context));
};
const deserializeAws_json1_1InitializeClusterResponse = (output, context) => {
    let contents = {
        __type: "InitializeClusterResponse",
        State: undefined,
        StateMessage: undefined
    };
    if (output.State !== undefined && output.State !== null) {
        contents.State = output.State;
    }
    if (output.StateMessage !== undefined && output.StateMessage !== null) {
        contents.StateMessage = output.StateMessage;
    }
    return contents;
};
const deserializeAws_json1_1ListTagsResponse = (output, context) => {
    let contents = {
        __type: "ListTagsResponse",
        NextToken: undefined,
        TagList: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.TagList !== undefined && output.TagList !== null) {
        contents.TagList = deserializeAws_json1_1TagList(output.TagList, context);
    }
    return contents;
};
const deserializeAws_json1_1RestoreBackupResponse = (output, context) => {
    let contents = {
        __type: "RestoreBackupResponse",
        Backup: undefined
    };
    if (output.Backup !== undefined && output.Backup !== null) {
        contents.Backup = deserializeAws_json1_1Backup(output.Backup, context);
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
const deserializeAws_json1_1TagResourceResponse = (output, context) => {
    let contents = {
        __type: "TagResourceResponse"
    };
    return contents;
};
const deserializeAws_json1_1UntagResourceResponse = (output, context) => {
    let contents = {
        __type: "UntagResourceResponse"
    };
    return contents;
};
const deserializeAws_json1_1CloudHsmAccessDeniedException = (output, context) => {
    let contents = {
        __type: "CloudHsmAccessDeniedException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1CloudHsmInternalFailureException = (output, context) => {
    let contents = {
        __type: "CloudHsmInternalFailureException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1CloudHsmInvalidRequestException = (output, context) => {
    let contents = {
        __type: "CloudHsmInvalidRequestException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1CloudHsmResourceNotFoundException = (output, context) => {
    let contents = {
        __type: "CloudHsmResourceNotFoundException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1CloudHsmServiceException = (output, context) => {
    let contents = {
        __type: "CloudHsmServiceException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1CloudHsmTagException = (output, context) => {
    let contents = {
        __type: "CloudHsmTagException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
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