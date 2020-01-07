"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1DescribeReportCreationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "ResourceGroupsTaggingAPI_20170126.DescribeReportCreation";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeReportCreationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeReportCreationCommand = serializeAws_json1_1DescribeReportCreationCommand;
async function serializeAws_json1_1GetComplianceSummaryCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "ResourceGroupsTaggingAPI_20170126.GetComplianceSummary";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetComplianceSummaryInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetComplianceSummaryCommand = serializeAws_json1_1GetComplianceSummaryCommand;
async function serializeAws_json1_1GetResourcesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ResourceGroupsTaggingAPI_20170126.GetResources";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetResourcesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetResourcesCommand = serializeAws_json1_1GetResourcesCommand;
async function serializeAws_json1_1GetTagKeysCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ResourceGroupsTaggingAPI_20170126.GetTagKeys";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetTagKeysInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetTagKeysCommand = serializeAws_json1_1GetTagKeysCommand;
async function serializeAws_json1_1GetTagValuesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ResourceGroupsTaggingAPI_20170126.GetTagValues";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetTagValuesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetTagValuesCommand = serializeAws_json1_1GetTagValuesCommand;
async function serializeAws_json1_1StartReportCreationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "ResourceGroupsTaggingAPI_20170126.StartReportCreation";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartReportCreationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartReportCreationCommand = serializeAws_json1_1StartReportCreationCommand;
async function serializeAws_json1_1TagResourcesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ResourceGroupsTaggingAPI_20170126.TagResources";
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourcesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1TagResourcesCommand = serializeAws_json1_1TagResourcesCommand;
async function serializeAws_json1_1UntagResourcesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ResourceGroupsTaggingAPI_20170126.UntagResources";
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourcesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UntagResourcesCommand = serializeAws_json1_1UntagResourcesCommand;
async function deserializeAws_json1_1DescribeReportCreationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeReportCreationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeReportCreationOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeReportCreationOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeReportCreationCommand = deserializeAws_json1_1DescribeReportCreationCommand;
async function deserializeAws_json1_1DescribeReportCreationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConstraintViolationException":
        case "com.amazonaws.tagging.router.service.model.v20170126#ConstraintViolationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.tagging.router.service.model.v20170126#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.tagging.router.service.model.v20170126#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottledException":
        case "com.amazonaws.tagging.router.service.model.v20170126#ThrottledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetComplianceSummaryCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetComplianceSummaryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetComplianceSummaryOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetComplianceSummaryOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetComplianceSummaryCommand = deserializeAws_json1_1GetComplianceSummaryCommand;
async function deserializeAws_json1_1GetComplianceSummaryCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConstraintViolationException":
        case "com.amazonaws.tagging.router.service.model.v20170126#ConstraintViolationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.tagging.router.service.model.v20170126#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.tagging.router.service.model.v20170126#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottledException":
        case "com.amazonaws.tagging.router.service.model.v20170126#ThrottledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetResourcesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetResourcesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetResourcesOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetResourcesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetResourcesCommand = deserializeAws_json1_1GetResourcesCommand;
async function deserializeAws_json1_1GetResourcesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.tagging.router.service.model.v20170126#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.tagging.router.service.model.v20170126#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PaginationTokenExpiredException":
        case "com.amazonaws.tagging.router.service.model.v20170126#PaginationTokenExpiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PaginationTokenExpiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottledException":
        case "com.amazonaws.tagging.router.service.model.v20170126#ThrottledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetTagKeysCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetTagKeysCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetTagKeysOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetTagKeysOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetTagKeysCommand = deserializeAws_json1_1GetTagKeysCommand;
async function deserializeAws_json1_1GetTagKeysCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.tagging.router.service.model.v20170126#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.tagging.router.service.model.v20170126#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PaginationTokenExpiredException":
        case "com.amazonaws.tagging.router.service.model.v20170126#PaginationTokenExpiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PaginationTokenExpiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottledException":
        case "com.amazonaws.tagging.router.service.model.v20170126#ThrottledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetTagValuesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetTagValuesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetTagValuesOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetTagValuesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetTagValuesCommand = deserializeAws_json1_1GetTagValuesCommand;
async function deserializeAws_json1_1GetTagValuesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.tagging.router.service.model.v20170126#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.tagging.router.service.model.v20170126#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PaginationTokenExpiredException":
        case "com.amazonaws.tagging.router.service.model.v20170126#PaginationTokenExpiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PaginationTokenExpiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottledException":
        case "com.amazonaws.tagging.router.service.model.v20170126#ThrottledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1StartReportCreationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartReportCreationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartReportCreationOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartReportCreationOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartReportCreationCommand = deserializeAws_json1_1StartReportCreationCommand;
async function deserializeAws_json1_1StartReportCreationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.tagging.router.service.model.v20170126#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConstraintViolationException":
        case "com.amazonaws.tagging.router.service.model.v20170126#ConstraintViolationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.tagging.router.service.model.v20170126#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.tagging.router.service.model.v20170126#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottledException":
        case "com.amazonaws.tagging.router.service.model.v20170126#ThrottledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1TagResourcesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1TagResourcesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1TagResourcesOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "TagResourcesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1TagResourcesCommand = deserializeAws_json1_1TagResourcesCommand;
async function deserializeAws_json1_1TagResourcesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.tagging.router.service.model.v20170126#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.tagging.router.service.model.v20170126#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottledException":
        case "com.amazonaws.tagging.router.service.model.v20170126#ThrottledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UntagResourcesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UntagResourcesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UntagResourcesOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UntagResourcesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UntagResourcesCommand = deserializeAws_json1_1UntagResourcesCommand;
async function deserializeAws_json1_1UntagResourcesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.tagging.router.service.model.v20170126#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.tagging.router.service.model.v20170126#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottledException":
        case "com.amazonaws.tagging.router.service.model.v20170126#ThrottledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
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
const deserializeAws_json1_1ConstraintViolationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ConstraintViolationException(body, context);
    const contents = Object.assign({ name: "ConstraintViolationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InternalServiceExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalServiceException(body, context);
    const contents = Object.assign({ name: "InternalServiceException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidParameterExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidParameterException(body, context);
    const contents = Object.assign({ name: "InvalidParameterException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1PaginationTokenExpiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PaginationTokenExpiredException(body, context);
    const contents = Object.assign({ name: "PaginationTokenExpiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ThrottledExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ThrottledException(body, context);
    const contents = Object.assign({ name: "ThrottledException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1DescribeReportCreationInput = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_1GetComplianceSummaryInput = (input, context) => {
    const bodyParams = {};
    if (input.GroupBy !== undefined) {
        bodyParams["GroupBy"] = serializeAws_json1_1GroupBy(input.GroupBy, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.PaginationToken !== undefined) {
        bodyParams["PaginationToken"] = input.PaginationToken;
    }
    if (input.RegionFilters !== undefined) {
        bodyParams["RegionFilters"] = serializeAws_json1_1RegionFilterList(input.RegionFilters, context);
    }
    if (input.ResourceTypeFilters !== undefined) {
        bodyParams["ResourceTypeFilters"] = serializeAws_json1_1ResourceTypeFilterList(input.ResourceTypeFilters, context);
    }
    if (input.TagKeyFilters !== undefined) {
        bodyParams["TagKeyFilters"] = serializeAws_json1_1TagKeyFilterList(input.TagKeyFilters, context);
    }
    if (input.TargetIdFilters !== undefined) {
        bodyParams["TargetIdFilters"] = serializeAws_json1_1TargetIdFilterList(input.TargetIdFilters, context);
    }
    return bodyParams;
};
const serializeAws_json1_1GetResourcesInput = (input, context) => {
    const bodyParams = {};
    if (input.ExcludeCompliantResources !== undefined) {
        bodyParams["ExcludeCompliantResources"] = input.ExcludeCompliantResources;
    }
    if (input.IncludeComplianceDetails !== undefined) {
        bodyParams["IncludeComplianceDetails"] = input.IncludeComplianceDetails;
    }
    if (input.PaginationToken !== undefined) {
        bodyParams["PaginationToken"] = input.PaginationToken;
    }
    if (input.ResourceTypeFilters !== undefined) {
        bodyParams["ResourceTypeFilters"] = serializeAws_json1_1ResourceTypeFilterList(input.ResourceTypeFilters, context);
    }
    if (input.ResourcesPerPage !== undefined) {
        bodyParams["ResourcesPerPage"] = input.ResourcesPerPage;
    }
    if (input.TagFilters !== undefined) {
        bodyParams["TagFilters"] = serializeAws_json1_1TagFilterList(input.TagFilters, context);
    }
    if (input.TagsPerPage !== undefined) {
        bodyParams["TagsPerPage"] = input.TagsPerPage;
    }
    return bodyParams;
};
const serializeAws_json1_1GetTagKeysInput = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.PaginationToken !== undefined) {
        bodyParams["PaginationToken"] = input.PaginationToken;
    }
    return bodyParams;
};
const serializeAws_json1_1GetTagValuesInput = (input, context) => {
    const bodyParams = {};
    if (input.Key !== undefined) {
        bodyParams["Key"] = input.Key;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.PaginationToken !== undefined) {
        bodyParams["PaginationToken"] = input.PaginationToken;
    }
    return bodyParams;
};
const serializeAws_json1_1GroupBy = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1RegionFilterList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ResourceARNList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ResourceTypeFilterList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1StartReportCreationInput = (input, context) => {
    const bodyParams = {};
    if (input.S3Bucket !== undefined) {
        bodyParams["S3Bucket"] = input.S3Bucket;
    }
    return bodyParams;
};
const serializeAws_json1_1TagFilter = (input, context) => {
    const bodyParams = {};
    if (input.Key !== undefined) {
        bodyParams["Key"] = input.Key;
    }
    if (input.Values !== undefined) {
        bodyParams["Values"] = serializeAws_json1_1TagValueList(input.Values, context);
    }
    return bodyParams;
};
const serializeAws_json1_1TagFilterList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1TagFilter(entry, context));
    }
    return contents;
};
const serializeAws_json1_1TagKeyFilterList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1TagKeyListForUntag = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1TagMap = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1TagResourcesInput = (input, context) => {
    const bodyParams = {};
    if (input.ResourceARNList !== undefined) {
        bodyParams["ResourceARNList"] = serializeAws_json1_1ResourceARNList(input.ResourceARNList, context);
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagMap(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1TagValueList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1TargetIdFilterList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1UntagResourcesInput = (input, context) => {
    const bodyParams = {};
    if (input.ResourceARNList !== undefined) {
        bodyParams["ResourceARNList"] = serializeAws_json1_1ResourceARNList(input.ResourceARNList, context);
    }
    if (input.TagKeys !== undefined) {
        bodyParams["TagKeys"] = serializeAws_json1_1TagKeyListForUntag(input.TagKeys, context);
    }
    return bodyParams;
};
const deserializeAws_json1_1ComplianceDetails = (output, context) => {
    let contents = {
        __type: "ComplianceDetails",
        ComplianceStatus: undefined,
        KeysWithNoncompliantValues: undefined,
        NoncompliantKeys: undefined
    };
    if (output.ComplianceStatus !== undefined &&
        output.ComplianceStatus !== null) {
        contents.ComplianceStatus = output.ComplianceStatus;
    }
    if (output.KeysWithNoncompliantValues !== undefined &&
        output.KeysWithNoncompliantValues !== null) {
        contents.KeysWithNoncompliantValues = deserializeAws_json1_1TagKeyList(output.KeysWithNoncompliantValues, context);
    }
    if (output.NoncompliantKeys !== undefined &&
        output.NoncompliantKeys !== null) {
        contents.NoncompliantKeys = deserializeAws_json1_1TagKeyList(output.NoncompliantKeys, context);
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
const deserializeAws_json1_1ConstraintViolationException = (output, context) => {
    let contents = {
        __type: "ConstraintViolationException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1DescribeReportCreationOutput = (output, context) => {
    let contents = {
        __type: "DescribeReportCreationOutput",
        ErrorMessage: undefined,
        S3Location: undefined,
        StartDate: undefined,
        Status: undefined
    };
    if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
        contents.ErrorMessage = output.ErrorMessage;
    }
    if (output.S3Location !== undefined && output.S3Location !== null) {
        contents.S3Location = output.S3Location;
    }
    if (output.StartDate !== undefined && output.StartDate !== null) {
        contents.StartDate = output.StartDate;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
};
const deserializeAws_json1_1FailedResourcesMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = deserializeAws_json1_1FailureInfo(output[key], context);
    });
    return mapParams;
};
const deserializeAws_json1_1FailureInfo = (output, context) => {
    let contents = {
        __type: "FailureInfo",
        ErrorCode: undefined,
        ErrorMessage: undefined,
        StatusCode: undefined
    };
    if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
        contents.ErrorCode = output.ErrorCode;
    }
    if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
        contents.ErrorMessage = output.ErrorMessage;
    }
    if (output.StatusCode !== undefined && output.StatusCode !== null) {
        contents.StatusCode = output.StatusCode;
    }
    return contents;
};
const deserializeAws_json1_1GetComplianceSummaryOutput = (output, context) => {
    let contents = {
        __type: "GetComplianceSummaryOutput",
        PaginationToken: undefined,
        SummaryList: undefined
    };
    if (output.PaginationToken !== undefined && output.PaginationToken !== null) {
        contents.PaginationToken = output.PaginationToken;
    }
    if (output.SummaryList !== undefined && output.SummaryList !== null) {
        contents.SummaryList = deserializeAws_json1_1SummaryList(output.SummaryList, context);
    }
    return contents;
};
const deserializeAws_json1_1GetResourcesOutput = (output, context) => {
    let contents = {
        __type: "GetResourcesOutput",
        PaginationToken: undefined,
        ResourceTagMappingList: undefined
    };
    if (output.PaginationToken !== undefined && output.PaginationToken !== null) {
        contents.PaginationToken = output.PaginationToken;
    }
    if (output.ResourceTagMappingList !== undefined &&
        output.ResourceTagMappingList !== null) {
        contents.ResourceTagMappingList = deserializeAws_json1_1ResourceTagMappingList(output.ResourceTagMappingList, context);
    }
    return contents;
};
const deserializeAws_json1_1GetTagKeysOutput = (output, context) => {
    let contents = {
        __type: "GetTagKeysOutput",
        PaginationToken: undefined,
        TagKeys: undefined
    };
    if (output.PaginationToken !== undefined && output.PaginationToken !== null) {
        contents.PaginationToken = output.PaginationToken;
    }
    if (output.TagKeys !== undefined && output.TagKeys !== null) {
        contents.TagKeys = deserializeAws_json1_1TagKeyList(output.TagKeys, context);
    }
    return contents;
};
const deserializeAws_json1_1GetTagValuesOutput = (output, context) => {
    let contents = {
        __type: "GetTagValuesOutput",
        PaginationToken: undefined,
        TagValues: undefined
    };
    if (output.PaginationToken !== undefined && output.PaginationToken !== null) {
        contents.PaginationToken = output.PaginationToken;
    }
    if (output.TagValues !== undefined && output.TagValues !== null) {
        contents.TagValues = deserializeAws_json1_1TagValuesOutputList(output.TagValues, context);
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
const deserializeAws_json1_1PaginationTokenExpiredException = (output, context) => {
    let contents = {
        __type: "PaginationTokenExpiredException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ResourceTagMapping = (output, context) => {
    let contents = {
        __type: "ResourceTagMapping",
        ComplianceDetails: undefined,
        ResourceARN: undefined,
        Tags: undefined
    };
    if (output.ComplianceDetails !== undefined &&
        output.ComplianceDetails !== null) {
        contents.ComplianceDetails = deserializeAws_json1_1ComplianceDetails(output.ComplianceDetails, context);
    }
    if (output.ResourceARN !== undefined && output.ResourceARN !== null) {
        contents.ResourceARN = output.ResourceARN;
    }
    if (output.Tags !== undefined && output.Tags !== null) {
        contents.Tags = deserializeAws_json1_1TagList(output.Tags, context);
    }
    return contents;
};
const deserializeAws_json1_1ResourceTagMappingList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ResourceTagMapping(entry, context));
};
const deserializeAws_json1_1StartReportCreationOutput = (output, context) => {
    let contents = {
        __type: "StartReportCreationOutput"
    };
    return contents;
};
const deserializeAws_json1_1Summary = (output, context) => {
    let contents = {
        __type: "Summary",
        LastUpdated: undefined,
        NonCompliantResources: undefined,
        Region: undefined,
        ResourceType: undefined,
        TargetId: undefined,
        TargetIdType: undefined
    };
    if (output.LastUpdated !== undefined && output.LastUpdated !== null) {
        contents.LastUpdated = output.LastUpdated;
    }
    if (output.NonCompliantResources !== undefined &&
        output.NonCompliantResources !== null) {
        contents.NonCompliantResources = output.NonCompliantResources;
    }
    if (output.Region !== undefined && output.Region !== null) {
        contents.Region = output.Region;
    }
    if (output.ResourceType !== undefined && output.ResourceType !== null) {
        contents.ResourceType = output.ResourceType;
    }
    if (output.TargetId !== undefined && output.TargetId !== null) {
        contents.TargetId = output.TargetId;
    }
    if (output.TargetIdType !== undefined && output.TargetIdType !== null) {
        contents.TargetIdType = output.TargetIdType;
    }
    return contents;
};
const deserializeAws_json1_1SummaryList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Summary(entry, context));
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
const deserializeAws_json1_1TagKeyList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1TagList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Tag(entry, context));
};
const deserializeAws_json1_1TagResourcesOutput = (output, context) => {
    let contents = {
        __type: "TagResourcesOutput",
        FailedResourcesMap: undefined
    };
    if (output.FailedResourcesMap !== undefined &&
        output.FailedResourcesMap !== null) {
        contents.FailedResourcesMap = deserializeAws_json1_1FailedResourcesMap(output.FailedResourcesMap, context);
    }
    return contents;
};
const deserializeAws_json1_1TagValuesOutputList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1ThrottledException = (output, context) => {
    let contents = {
        __type: "ThrottledException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1UntagResourcesOutput = (output, context) => {
    let contents = {
        __type: "UntagResourcesOutput",
        FailedResourcesMap: undefined
    };
    if (output.FailedResourcesMap !== undefined &&
        output.FailedResourcesMap !== null) {
        contents.FailedResourcesMap = deserializeAws_json1_1FailedResourcesMap(output.FailedResourcesMap, context);
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