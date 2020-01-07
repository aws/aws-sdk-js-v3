"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1AddApplicationCloudWatchLoggingOptionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "KinesisAnalytics_20150814.AddApplicationCloudWatchLoggingOption";
    let body;
    body = JSON.stringify(serializeAws_json1_1AddApplicationCloudWatchLoggingOptionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AddApplicationCloudWatchLoggingOptionCommand = serializeAws_json1_1AddApplicationCloudWatchLoggingOptionCommand;
async function serializeAws_json1_1AddApplicationInputCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "KinesisAnalytics_20150814.AddApplicationInput";
    let body;
    body = JSON.stringify(serializeAws_json1_1AddApplicationInputRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AddApplicationInputCommand = serializeAws_json1_1AddApplicationInputCommand;
async function serializeAws_json1_1AddApplicationInputProcessingConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "KinesisAnalytics_20150814.AddApplicationInputProcessingConfiguration";
    let body;
    body = JSON.stringify(serializeAws_json1_1AddApplicationInputProcessingConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AddApplicationInputProcessingConfigurationCommand = serializeAws_json1_1AddApplicationInputProcessingConfigurationCommand;
async function serializeAws_json1_1AddApplicationOutputCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "KinesisAnalytics_20150814.AddApplicationOutput";
    let body;
    body = JSON.stringify(serializeAws_json1_1AddApplicationOutputRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AddApplicationOutputCommand = serializeAws_json1_1AddApplicationOutputCommand;
async function serializeAws_json1_1AddApplicationReferenceDataSourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "KinesisAnalytics_20150814.AddApplicationReferenceDataSource";
    let body;
    body = JSON.stringify(serializeAws_json1_1AddApplicationReferenceDataSourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AddApplicationReferenceDataSourceCommand = serializeAws_json1_1AddApplicationReferenceDataSourceCommand;
async function serializeAws_json1_1CreateApplicationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "KinesisAnalytics_20150814.CreateApplication";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateApplicationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateApplicationCommand = serializeAws_json1_1CreateApplicationCommand;
async function serializeAws_json1_1DeleteApplicationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "KinesisAnalytics_20150814.DeleteApplication";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteApplicationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteApplicationCommand = serializeAws_json1_1DeleteApplicationCommand;
async function serializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "KinesisAnalytics_20150814.DeleteApplicationCloudWatchLoggingOption";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionCommand = serializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionCommand;
async function serializeAws_json1_1DeleteApplicationInputProcessingConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "KinesisAnalytics_20150814.DeleteApplicationInputProcessingConfiguration";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteApplicationInputProcessingConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteApplicationInputProcessingConfigurationCommand = serializeAws_json1_1DeleteApplicationInputProcessingConfigurationCommand;
async function serializeAws_json1_1DeleteApplicationOutputCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "KinesisAnalytics_20150814.DeleteApplicationOutput";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteApplicationOutputRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteApplicationOutputCommand = serializeAws_json1_1DeleteApplicationOutputCommand;
async function serializeAws_json1_1DeleteApplicationReferenceDataSourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "KinesisAnalytics_20150814.DeleteApplicationReferenceDataSource";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteApplicationReferenceDataSourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteApplicationReferenceDataSourceCommand = serializeAws_json1_1DeleteApplicationReferenceDataSourceCommand;
async function serializeAws_json1_1DescribeApplicationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "KinesisAnalytics_20150814.DescribeApplication";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeApplicationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeApplicationCommand = serializeAws_json1_1DescribeApplicationCommand;
async function serializeAws_json1_1DiscoverInputSchemaCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "KinesisAnalytics_20150814.DiscoverInputSchema";
    let body;
    body = JSON.stringify(serializeAws_json1_1DiscoverInputSchemaRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DiscoverInputSchemaCommand = serializeAws_json1_1DiscoverInputSchemaCommand;
async function serializeAws_json1_1ListApplicationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "KinesisAnalytics_20150814.ListApplications";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListApplicationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListApplicationsCommand = serializeAws_json1_1ListApplicationsCommand;
async function serializeAws_json1_1ListTagsForResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "KinesisAnalytics_20150814.ListTagsForResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
async function serializeAws_json1_1StartApplicationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "KinesisAnalytics_20150814.StartApplication";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartApplicationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartApplicationCommand = serializeAws_json1_1StartApplicationCommand;
async function serializeAws_json1_1StopApplicationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "KinesisAnalytics_20150814.StopApplication";
    let body;
    body = JSON.stringify(serializeAws_json1_1StopApplicationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StopApplicationCommand = serializeAws_json1_1StopApplicationCommand;
async function serializeAws_json1_1TagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "KinesisAnalytics_20150814.TagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
async function serializeAws_json1_1UntagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "KinesisAnalytics_20150814.UntagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
async function serializeAws_json1_1UpdateApplicationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "KinesisAnalytics_20150814.UpdateApplication";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateApplicationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateApplicationCommand = serializeAws_json1_1UpdateApplicationCommand;
async function deserializeAws_json1_1AddApplicationCloudWatchLoggingOptionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AddApplicationCloudWatchLoggingOptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AddApplicationCloudWatchLoggingOptionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AddApplicationCloudWatchLoggingOptionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AddApplicationCloudWatchLoggingOptionCommand = deserializeAws_json1_1AddApplicationCloudWatchLoggingOptionCommand;
async function deserializeAws_json1_1AddApplicationCloudWatchLoggingOptionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.kinesis.analytics.v20150814#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.analytics.v20150814#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesis.analytics.v20150814#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.analytics.v20150814#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.kinesis.analytics.v20150814#UnsupportedOperationException":
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
async function deserializeAws_json1_1AddApplicationInputCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AddApplicationInputCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AddApplicationInputResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AddApplicationInputResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AddApplicationInputCommand = deserializeAws_json1_1AddApplicationInputCommand;
async function deserializeAws_json1_1AddApplicationInputCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CodeValidationException":
        case "com.amazonaws.kinesis.analytics.v20150814#CodeValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CodeValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.kinesis.analytics.v20150814#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.analytics.v20150814#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesis.analytics.v20150814#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.analytics.v20150814#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.kinesis.analytics.v20150814#UnsupportedOperationException":
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
async function deserializeAws_json1_1AddApplicationInputProcessingConfigurationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AddApplicationInputProcessingConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AddApplicationInputProcessingConfigurationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AddApplicationInputProcessingConfigurationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AddApplicationInputProcessingConfigurationCommand = deserializeAws_json1_1AddApplicationInputProcessingConfigurationCommand;
async function deserializeAws_json1_1AddApplicationInputProcessingConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.kinesis.analytics.v20150814#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.analytics.v20150814#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesis.analytics.v20150814#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.analytics.v20150814#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.kinesis.analytics.v20150814#UnsupportedOperationException":
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
async function deserializeAws_json1_1AddApplicationOutputCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AddApplicationOutputCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AddApplicationOutputResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AddApplicationOutputResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AddApplicationOutputCommand = deserializeAws_json1_1AddApplicationOutputCommand;
async function deserializeAws_json1_1AddApplicationOutputCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.kinesis.analytics.v20150814#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.analytics.v20150814#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesis.analytics.v20150814#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.analytics.v20150814#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.kinesis.analytics.v20150814#UnsupportedOperationException":
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
async function deserializeAws_json1_1AddApplicationReferenceDataSourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AddApplicationReferenceDataSourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AddApplicationReferenceDataSourceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AddApplicationReferenceDataSourceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AddApplicationReferenceDataSourceCommand = deserializeAws_json1_1AddApplicationReferenceDataSourceCommand;
async function deserializeAws_json1_1AddApplicationReferenceDataSourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.kinesis.analytics.v20150814#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.analytics.v20150814#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesis.analytics.v20150814#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.analytics.v20150814#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.kinesis.analytics.v20150814#UnsupportedOperationException":
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
async function deserializeAws_json1_1CreateApplicationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateApplicationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateApplicationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateApplicationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateApplicationCommand = deserializeAws_json1_1CreateApplicationCommand;
async function deserializeAws_json1_1CreateApplicationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CodeValidationException":
        case "com.amazonaws.kinesis.analytics.v20150814#CodeValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CodeValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.kinesis.analytics.v20150814#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.analytics.v20150814#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.kinesis.analytics.v20150814#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesis.analytics.v20150814#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTagsException":
        case "com.amazonaws.kinesis.analytics.v20150814#TooManyTagsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteApplicationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteApplicationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteApplicationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteApplicationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteApplicationCommand = deserializeAws_json1_1DeleteApplicationCommand;
async function deserializeAws_json1_1DeleteApplicationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.kinesis.analytics.v20150814#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesis.analytics.v20150814#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.analytics.v20150814#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.kinesis.analytics.v20150814#UnsupportedOperationException":
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
async function deserializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteApplicationCloudWatchLoggingOptionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionCommand = deserializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionCommand;
async function deserializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.kinesis.analytics.v20150814#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.analytics.v20150814#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesis.analytics.v20150814#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.analytics.v20150814#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.kinesis.analytics.v20150814#UnsupportedOperationException":
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
async function deserializeAws_json1_1DeleteApplicationInputProcessingConfigurationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteApplicationInputProcessingConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteApplicationInputProcessingConfigurationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteApplicationInputProcessingConfigurationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteApplicationInputProcessingConfigurationCommand = deserializeAws_json1_1DeleteApplicationInputProcessingConfigurationCommand;
async function deserializeAws_json1_1DeleteApplicationInputProcessingConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.kinesis.analytics.v20150814#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.analytics.v20150814#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesis.analytics.v20150814#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.analytics.v20150814#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.kinesis.analytics.v20150814#UnsupportedOperationException":
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
async function deserializeAws_json1_1DeleteApplicationOutputCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteApplicationOutputCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteApplicationOutputResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteApplicationOutputResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteApplicationOutputCommand = deserializeAws_json1_1DeleteApplicationOutputCommand;
async function deserializeAws_json1_1DeleteApplicationOutputCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.kinesis.analytics.v20150814#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.analytics.v20150814#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesis.analytics.v20150814#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.analytics.v20150814#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.kinesis.analytics.v20150814#UnsupportedOperationException":
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
async function deserializeAws_json1_1DeleteApplicationReferenceDataSourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteApplicationReferenceDataSourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteApplicationReferenceDataSourceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteApplicationReferenceDataSourceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteApplicationReferenceDataSourceCommand = deserializeAws_json1_1DeleteApplicationReferenceDataSourceCommand;
async function deserializeAws_json1_1DeleteApplicationReferenceDataSourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.kinesis.analytics.v20150814#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.analytics.v20150814#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesis.analytics.v20150814#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.analytics.v20150814#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.kinesis.analytics.v20150814#UnsupportedOperationException":
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
async function deserializeAws_json1_1DescribeApplicationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeApplicationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeApplicationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeApplicationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeApplicationCommand = deserializeAws_json1_1DescribeApplicationCommand;
async function deserializeAws_json1_1DescribeApplicationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.analytics.v20150814#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.kinesis.analytics.v20150814#UnsupportedOperationException":
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
async function deserializeAws_json1_1DiscoverInputSchemaCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DiscoverInputSchemaCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DiscoverInputSchemaResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DiscoverInputSchemaResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DiscoverInputSchemaCommand = deserializeAws_json1_1DiscoverInputSchemaCommand;
async function deserializeAws_json1_1DiscoverInputSchemaCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.analytics.v20150814#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceProvisionedThroughputExceededException":
        case "com.amazonaws.kinesis.analytics.v20150814#ResourceProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.kinesis.analytics.v20150814#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnableToDetectSchemaException":
        case "com.amazonaws.kinesis.analytics.v20150814#UnableToDetectSchemaException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnableToDetectSchemaExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListApplicationsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListApplicationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListApplicationsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListApplicationsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListApplicationsCommand = deserializeAws_json1_1ListApplicationsCommand;
async function deserializeAws_json1_1ListApplicationsCommandError(output, context) {
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
        case "ConcurrentModificationException":
        case "com.amazonaws.kinesis.analytics.v20150814#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.analytics.v20150814#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.analytics.v20150814#ResourceNotFoundException":
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
async function deserializeAws_json1_1StartApplicationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartApplicationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartApplicationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartApplicationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartApplicationCommand = deserializeAws_json1_1StartApplicationCommand;
async function deserializeAws_json1_1StartApplicationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidApplicationConfigurationException":
        case "com.amazonaws.kinesis.analytics.v20150814#InvalidApplicationConfigurationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidApplicationConfigurationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.analytics.v20150814#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesis.analytics.v20150814#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.analytics.v20150814#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.kinesis.analytics.v20150814#UnsupportedOperationException":
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
async function deserializeAws_json1_1StopApplicationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StopApplicationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopApplicationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StopApplicationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StopApplicationCommand = deserializeAws_json1_1StopApplicationCommand;
async function deserializeAws_json1_1StopApplicationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceInUseException":
        case "com.amazonaws.kinesis.analytics.v20150814#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.analytics.v20150814#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.kinesis.analytics.v20150814#UnsupportedOperationException":
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
        case "ConcurrentModificationException":
        case "com.amazonaws.kinesis.analytics.v20150814#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.analytics.v20150814#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesis.analytics.v20150814#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.analytics.v20150814#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTagsException":
        case "com.amazonaws.kinesis.analytics.v20150814#TooManyTagsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "ConcurrentModificationException":
        case "com.amazonaws.kinesis.analytics.v20150814#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.analytics.v20150814#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesis.analytics.v20150814#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.analytics.v20150814#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTagsException":
        case "com.amazonaws.kinesis.analytics.v20150814#TooManyTagsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateApplicationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateApplicationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateApplicationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateApplicationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateApplicationCommand = deserializeAws_json1_1UpdateApplicationCommand;
async function deserializeAws_json1_1UpdateApplicationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CodeValidationException":
        case "com.amazonaws.kinesis.analytics.v20150814#CodeValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CodeValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.kinesis.analytics.v20150814#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.analytics.v20150814#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesis.analytics.v20150814#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.analytics.v20150814#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.kinesis.analytics.v20150814#UnsupportedOperationException":
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
const deserializeAws_json1_1CodeValidationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CodeValidationException(body, context);
    const contents = Object.assign({ name: "CodeValidationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ConcurrentModificationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ConcurrentModificationException(body, context);
    const contents = Object.assign({ name: "ConcurrentModificationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidApplicationConfigurationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidApplicationConfigurationException(body, context);
    const contents = Object.assign({ name: "InvalidApplicationConfigurationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidArgumentExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidArgumentException(body, context);
    const contents = Object.assign({ name: "InvalidArgumentException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LimitExceededException(body, context);
    const contents = Object.assign({ name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceInUseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceInUseException(body, context);
    const contents = Object.assign({ name: "ResourceInUseException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceNotFoundException(body, context);
    const contents = Object.assign({ name: "ResourceNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceProvisionedThroughputExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceProvisionedThroughputExceededException(body, context);
    const contents = Object.assign({ name: "ResourceProvisionedThroughputExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ServiceUnavailableExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ServiceUnavailableException(body, context);
    const contents = Object.assign({ name: "ServiceUnavailableException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TooManyTagsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TooManyTagsException(body, context);
    const contents = Object.assign({ name: "TooManyTagsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1UnableToDetectSchemaExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnableToDetectSchemaException(body, context);
    const contents = Object.assign({ name: "UnableToDetectSchemaException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1UnsupportedOperationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnsupportedOperationException(body, context);
    const contents = Object.assign({ name: "UnsupportedOperationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1AddApplicationCloudWatchLoggingOptionRequest = (input, context) => {
    const bodyParams = {};
    if (input.ApplicationName !== undefined) {
        bodyParams["ApplicationName"] = input.ApplicationName;
    }
    if (input.CloudWatchLoggingOption !== undefined) {
        bodyParams["CloudWatchLoggingOption"] = serializeAws_json1_1CloudWatchLoggingOption(input.CloudWatchLoggingOption, context);
    }
    if (input.CurrentApplicationVersionId !== undefined) {
        bodyParams["CurrentApplicationVersionId"] =
            input.CurrentApplicationVersionId;
    }
    return bodyParams;
};
const serializeAws_json1_1AddApplicationInputProcessingConfigurationRequest = (input, context) => {
    const bodyParams = {};
    if (input.ApplicationName !== undefined) {
        bodyParams["ApplicationName"] = input.ApplicationName;
    }
    if (input.CurrentApplicationVersionId !== undefined) {
        bodyParams["CurrentApplicationVersionId"] =
            input.CurrentApplicationVersionId;
    }
    if (input.InputId !== undefined) {
        bodyParams["InputId"] = input.InputId;
    }
    if (input.InputProcessingConfiguration !== undefined) {
        bodyParams["InputProcessingConfiguration"] = serializeAws_json1_1InputProcessingConfiguration(input.InputProcessingConfiguration, context);
    }
    return bodyParams;
};
const serializeAws_json1_1AddApplicationInputRequest = (input, context) => {
    const bodyParams = {};
    if (input.ApplicationName !== undefined) {
        bodyParams["ApplicationName"] = input.ApplicationName;
    }
    if (input.CurrentApplicationVersionId !== undefined) {
        bodyParams["CurrentApplicationVersionId"] =
            input.CurrentApplicationVersionId;
    }
    if (input.Input !== undefined) {
        bodyParams["Input"] = serializeAws_json1_1Input(input.Input, context);
    }
    return bodyParams;
};
const serializeAws_json1_1AddApplicationOutputRequest = (input, context) => {
    const bodyParams = {};
    if (input.ApplicationName !== undefined) {
        bodyParams["ApplicationName"] = input.ApplicationName;
    }
    if (input.CurrentApplicationVersionId !== undefined) {
        bodyParams["CurrentApplicationVersionId"] =
            input.CurrentApplicationVersionId;
    }
    if (input.Output !== undefined) {
        bodyParams["Output"] = serializeAws_json1_1Output(input.Output, context);
    }
    return bodyParams;
};
const serializeAws_json1_1AddApplicationReferenceDataSourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.ApplicationName !== undefined) {
        bodyParams["ApplicationName"] = input.ApplicationName;
    }
    if (input.CurrentApplicationVersionId !== undefined) {
        bodyParams["CurrentApplicationVersionId"] =
            input.CurrentApplicationVersionId;
    }
    if (input.ReferenceDataSource !== undefined) {
        bodyParams["ReferenceDataSource"] = serializeAws_json1_1ReferenceDataSource(input.ReferenceDataSource, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ApplicationUpdate = (input, context) => {
    const bodyParams = {};
    if (input.ApplicationCodeUpdate !== undefined) {
        bodyParams["ApplicationCodeUpdate"] = input.ApplicationCodeUpdate;
    }
    if (input.CloudWatchLoggingOptionUpdates !== undefined) {
        bodyParams["CloudWatchLoggingOptionUpdates"] = serializeAws_json1_1CloudWatchLoggingOptionUpdates(input.CloudWatchLoggingOptionUpdates, context);
    }
    if (input.InputUpdates !== undefined) {
        bodyParams["InputUpdates"] = serializeAws_json1_1InputUpdates(input.InputUpdates, context);
    }
    if (input.OutputUpdates !== undefined) {
        bodyParams["OutputUpdates"] = serializeAws_json1_1OutputUpdates(input.OutputUpdates, context);
    }
    if (input.ReferenceDataSourceUpdates !== undefined) {
        bodyParams["ReferenceDataSourceUpdates"] = serializeAws_json1_1ReferenceDataSourceUpdates(input.ReferenceDataSourceUpdates, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CSVMappingParameters = (input, context) => {
    const bodyParams = {};
    if (input.RecordColumnDelimiter !== undefined) {
        bodyParams["RecordColumnDelimiter"] = input.RecordColumnDelimiter;
    }
    if (input.RecordRowDelimiter !== undefined) {
        bodyParams["RecordRowDelimiter"] = input.RecordRowDelimiter;
    }
    return bodyParams;
};
const serializeAws_json1_1CloudWatchLoggingOption = (input, context) => {
    const bodyParams = {};
    if (input.LogStreamARN !== undefined) {
        bodyParams["LogStreamARN"] = input.LogStreamARN;
    }
    if (input.RoleARN !== undefined) {
        bodyParams["RoleARN"] = input.RoleARN;
    }
    return bodyParams;
};
const serializeAws_json1_1CloudWatchLoggingOptionUpdate = (input, context) => {
    const bodyParams = {};
    if (input.CloudWatchLoggingOptionId !== undefined) {
        bodyParams["CloudWatchLoggingOptionId"] = input.CloudWatchLoggingOptionId;
    }
    if (input.LogStreamARNUpdate !== undefined) {
        bodyParams["LogStreamARNUpdate"] = input.LogStreamARNUpdate;
    }
    if (input.RoleARNUpdate !== undefined) {
        bodyParams["RoleARNUpdate"] = input.RoleARNUpdate;
    }
    return bodyParams;
};
const serializeAws_json1_1CloudWatchLoggingOptionUpdates = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1CloudWatchLoggingOptionUpdate(entry, context));
    }
    return contents;
};
const serializeAws_json1_1CloudWatchLoggingOptions = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1CloudWatchLoggingOption(entry, context));
    }
    return contents;
};
const serializeAws_json1_1CreateApplicationRequest = (input, context) => {
    const bodyParams = {};
    if (input.ApplicationCode !== undefined) {
        bodyParams["ApplicationCode"] = input.ApplicationCode;
    }
    if (input.ApplicationDescription !== undefined) {
        bodyParams["ApplicationDescription"] = input.ApplicationDescription;
    }
    if (input.ApplicationName !== undefined) {
        bodyParams["ApplicationName"] = input.ApplicationName;
    }
    if (input.CloudWatchLoggingOptions !== undefined) {
        bodyParams["CloudWatchLoggingOptions"] = serializeAws_json1_1CloudWatchLoggingOptions(input.CloudWatchLoggingOptions, context);
    }
    if (input.Inputs !== undefined) {
        bodyParams["Inputs"] = serializeAws_json1_1Inputs(input.Inputs, context);
    }
    if (input.Outputs !== undefined) {
        bodyParams["Outputs"] = serializeAws_json1_1Outputs(input.Outputs, context);
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1Tags(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionRequest = (input, context) => {
    const bodyParams = {};
    if (input.ApplicationName !== undefined) {
        bodyParams["ApplicationName"] = input.ApplicationName;
    }
    if (input.CloudWatchLoggingOptionId !== undefined) {
        bodyParams["CloudWatchLoggingOptionId"] = input.CloudWatchLoggingOptionId;
    }
    if (input.CurrentApplicationVersionId !== undefined) {
        bodyParams["CurrentApplicationVersionId"] =
            input.CurrentApplicationVersionId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteApplicationInputProcessingConfigurationRequest = (input, context) => {
    const bodyParams = {};
    if (input.ApplicationName !== undefined) {
        bodyParams["ApplicationName"] = input.ApplicationName;
    }
    if (input.CurrentApplicationVersionId !== undefined) {
        bodyParams["CurrentApplicationVersionId"] =
            input.CurrentApplicationVersionId;
    }
    if (input.InputId !== undefined) {
        bodyParams["InputId"] = input.InputId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteApplicationOutputRequest = (input, context) => {
    const bodyParams = {};
    if (input.ApplicationName !== undefined) {
        bodyParams["ApplicationName"] = input.ApplicationName;
    }
    if (input.CurrentApplicationVersionId !== undefined) {
        bodyParams["CurrentApplicationVersionId"] =
            input.CurrentApplicationVersionId;
    }
    if (input.OutputId !== undefined) {
        bodyParams["OutputId"] = input.OutputId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteApplicationReferenceDataSourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.ApplicationName !== undefined) {
        bodyParams["ApplicationName"] = input.ApplicationName;
    }
    if (input.CurrentApplicationVersionId !== undefined) {
        bodyParams["CurrentApplicationVersionId"] =
            input.CurrentApplicationVersionId;
    }
    if (input.ReferenceId !== undefined) {
        bodyParams["ReferenceId"] = input.ReferenceId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteApplicationRequest = (input, context) => {
    const bodyParams = {};
    if (input.ApplicationName !== undefined) {
        bodyParams["ApplicationName"] = input.ApplicationName;
    }
    if (input.CreateTimestamp !== undefined) {
        bodyParams["CreateTimestamp"] = Math.round(input.CreateTimestamp.getTime() / 1000);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeApplicationRequest = (input, context) => {
    const bodyParams = {};
    if (input.ApplicationName !== undefined) {
        bodyParams["ApplicationName"] = input.ApplicationName;
    }
    return bodyParams;
};
const serializeAws_json1_1DestinationSchema = (input, context) => {
    const bodyParams = {};
    if (input.RecordFormatType !== undefined) {
        bodyParams["RecordFormatType"] = input.RecordFormatType;
    }
    return bodyParams;
};
const serializeAws_json1_1DiscoverInputSchemaRequest = (input, context) => {
    const bodyParams = {};
    if (input.InputProcessingConfiguration !== undefined) {
        bodyParams["InputProcessingConfiguration"] = serializeAws_json1_1InputProcessingConfiguration(input.InputProcessingConfiguration, context);
    }
    if (input.InputStartingPositionConfiguration !== undefined) {
        bodyParams["InputStartingPositionConfiguration"] = serializeAws_json1_1InputStartingPositionConfiguration(input.InputStartingPositionConfiguration, context);
    }
    if (input.ResourceARN !== undefined) {
        bodyParams["ResourceARN"] = input.ResourceARN;
    }
    if (input.RoleARN !== undefined) {
        bodyParams["RoleARN"] = input.RoleARN;
    }
    if (input.S3Configuration !== undefined) {
        bodyParams["S3Configuration"] = serializeAws_json1_1S3Configuration(input.S3Configuration, context);
    }
    return bodyParams;
};
const serializeAws_json1_1Input = (input, context) => {
    const bodyParams = {};
    if (input.InputParallelism !== undefined) {
        bodyParams["InputParallelism"] = serializeAws_json1_1InputParallelism(input.InputParallelism, context);
    }
    if (input.InputProcessingConfiguration !== undefined) {
        bodyParams["InputProcessingConfiguration"] = serializeAws_json1_1InputProcessingConfiguration(input.InputProcessingConfiguration, context);
    }
    if (input.InputSchema !== undefined) {
        bodyParams["InputSchema"] = serializeAws_json1_1SourceSchema(input.InputSchema, context);
    }
    if (input.KinesisFirehoseInput !== undefined) {
        bodyParams["KinesisFirehoseInput"] = serializeAws_json1_1KinesisFirehoseInput(input.KinesisFirehoseInput, context);
    }
    if (input.KinesisStreamsInput !== undefined) {
        bodyParams["KinesisStreamsInput"] = serializeAws_json1_1KinesisStreamsInput(input.KinesisStreamsInput, context);
    }
    if (input.NamePrefix !== undefined) {
        bodyParams["NamePrefix"] = input.NamePrefix;
    }
    return bodyParams;
};
const serializeAws_json1_1InputConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    if (input.InputStartingPositionConfiguration !== undefined) {
        bodyParams["InputStartingPositionConfiguration"] = serializeAws_json1_1InputStartingPositionConfiguration(input.InputStartingPositionConfiguration, context);
    }
    return bodyParams;
};
const serializeAws_json1_1InputConfigurations = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1InputConfiguration(entry, context));
    }
    return contents;
};
const serializeAws_json1_1InputLambdaProcessor = (input, context) => {
    const bodyParams = {};
    if (input.ResourceARN !== undefined) {
        bodyParams["ResourceARN"] = input.ResourceARN;
    }
    if (input.RoleARN !== undefined) {
        bodyParams["RoleARN"] = input.RoleARN;
    }
    return bodyParams;
};
const serializeAws_json1_1InputLambdaProcessorUpdate = (input, context) => {
    const bodyParams = {};
    if (input.ResourceARNUpdate !== undefined) {
        bodyParams["ResourceARNUpdate"] = input.ResourceARNUpdate;
    }
    if (input.RoleARNUpdate !== undefined) {
        bodyParams["RoleARNUpdate"] = input.RoleARNUpdate;
    }
    return bodyParams;
};
const serializeAws_json1_1InputParallelism = (input, context) => {
    const bodyParams = {};
    if (input.Count !== undefined) {
        bodyParams["Count"] = input.Count;
    }
    return bodyParams;
};
const serializeAws_json1_1InputParallelismUpdate = (input, context) => {
    const bodyParams = {};
    if (input.CountUpdate !== undefined) {
        bodyParams["CountUpdate"] = input.CountUpdate;
    }
    return bodyParams;
};
const serializeAws_json1_1InputProcessingConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.InputLambdaProcessor !== undefined) {
        bodyParams["InputLambdaProcessor"] = serializeAws_json1_1InputLambdaProcessor(input.InputLambdaProcessor, context);
    }
    return bodyParams;
};
const serializeAws_json1_1InputProcessingConfigurationUpdate = (input, context) => {
    const bodyParams = {};
    if (input.InputLambdaProcessorUpdate !== undefined) {
        bodyParams["InputLambdaProcessorUpdate"] = serializeAws_json1_1InputLambdaProcessorUpdate(input.InputLambdaProcessorUpdate, context);
    }
    return bodyParams;
};
const serializeAws_json1_1InputSchemaUpdate = (input, context) => {
    const bodyParams = {};
    if (input.RecordColumnUpdates !== undefined) {
        bodyParams["RecordColumnUpdates"] = serializeAws_json1_1RecordColumns(input.RecordColumnUpdates, context);
    }
    if (input.RecordEncodingUpdate !== undefined) {
        bodyParams["RecordEncodingUpdate"] = input.RecordEncodingUpdate;
    }
    if (input.RecordFormatUpdate !== undefined) {
        bodyParams["RecordFormatUpdate"] = serializeAws_json1_1RecordFormat(input.RecordFormatUpdate, context);
    }
    return bodyParams;
};
const serializeAws_json1_1InputStartingPositionConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.InputStartingPosition !== undefined) {
        bodyParams["InputStartingPosition"] = input.InputStartingPosition;
    }
    return bodyParams;
};
const serializeAws_json1_1InputUpdate = (input, context) => {
    const bodyParams = {};
    if (input.InputId !== undefined) {
        bodyParams["InputId"] = input.InputId;
    }
    if (input.InputParallelismUpdate !== undefined) {
        bodyParams["InputParallelismUpdate"] = serializeAws_json1_1InputParallelismUpdate(input.InputParallelismUpdate, context);
    }
    if (input.InputProcessingConfigurationUpdate !== undefined) {
        bodyParams["InputProcessingConfigurationUpdate"] = serializeAws_json1_1InputProcessingConfigurationUpdate(input.InputProcessingConfigurationUpdate, context);
    }
    if (input.InputSchemaUpdate !== undefined) {
        bodyParams["InputSchemaUpdate"] = serializeAws_json1_1InputSchemaUpdate(input.InputSchemaUpdate, context);
    }
    if (input.KinesisFirehoseInputUpdate !== undefined) {
        bodyParams["KinesisFirehoseInputUpdate"] = serializeAws_json1_1KinesisFirehoseInputUpdate(input.KinesisFirehoseInputUpdate, context);
    }
    if (input.KinesisStreamsInputUpdate !== undefined) {
        bodyParams["KinesisStreamsInputUpdate"] = serializeAws_json1_1KinesisStreamsInputUpdate(input.KinesisStreamsInputUpdate, context);
    }
    if (input.NamePrefixUpdate !== undefined) {
        bodyParams["NamePrefixUpdate"] = input.NamePrefixUpdate;
    }
    return bodyParams;
};
const serializeAws_json1_1InputUpdates = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1InputUpdate(entry, context));
    }
    return contents;
};
const serializeAws_json1_1Inputs = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Input(entry, context));
    }
    return contents;
};
const serializeAws_json1_1JSONMappingParameters = (input, context) => {
    const bodyParams = {};
    if (input.RecordRowPath !== undefined) {
        bodyParams["RecordRowPath"] = input.RecordRowPath;
    }
    return bodyParams;
};
const serializeAws_json1_1KinesisFirehoseInput = (input, context) => {
    const bodyParams = {};
    if (input.ResourceARN !== undefined) {
        bodyParams["ResourceARN"] = input.ResourceARN;
    }
    if (input.RoleARN !== undefined) {
        bodyParams["RoleARN"] = input.RoleARN;
    }
    return bodyParams;
};
const serializeAws_json1_1KinesisFirehoseInputUpdate = (input, context) => {
    const bodyParams = {};
    if (input.ResourceARNUpdate !== undefined) {
        bodyParams["ResourceARNUpdate"] = input.ResourceARNUpdate;
    }
    if (input.RoleARNUpdate !== undefined) {
        bodyParams["RoleARNUpdate"] = input.RoleARNUpdate;
    }
    return bodyParams;
};
const serializeAws_json1_1KinesisFirehoseOutput = (input, context) => {
    const bodyParams = {};
    if (input.ResourceARN !== undefined) {
        bodyParams["ResourceARN"] = input.ResourceARN;
    }
    if (input.RoleARN !== undefined) {
        bodyParams["RoleARN"] = input.RoleARN;
    }
    return bodyParams;
};
const serializeAws_json1_1KinesisFirehoseOutputUpdate = (input, context) => {
    const bodyParams = {};
    if (input.ResourceARNUpdate !== undefined) {
        bodyParams["ResourceARNUpdate"] = input.ResourceARNUpdate;
    }
    if (input.RoleARNUpdate !== undefined) {
        bodyParams["RoleARNUpdate"] = input.RoleARNUpdate;
    }
    return bodyParams;
};
const serializeAws_json1_1KinesisStreamsInput = (input, context) => {
    const bodyParams = {};
    if (input.ResourceARN !== undefined) {
        bodyParams["ResourceARN"] = input.ResourceARN;
    }
    if (input.RoleARN !== undefined) {
        bodyParams["RoleARN"] = input.RoleARN;
    }
    return bodyParams;
};
const serializeAws_json1_1KinesisStreamsInputUpdate = (input, context) => {
    const bodyParams = {};
    if (input.ResourceARNUpdate !== undefined) {
        bodyParams["ResourceARNUpdate"] = input.ResourceARNUpdate;
    }
    if (input.RoleARNUpdate !== undefined) {
        bodyParams["RoleARNUpdate"] = input.RoleARNUpdate;
    }
    return bodyParams;
};
const serializeAws_json1_1KinesisStreamsOutput = (input, context) => {
    const bodyParams = {};
    if (input.ResourceARN !== undefined) {
        bodyParams["ResourceARN"] = input.ResourceARN;
    }
    if (input.RoleARN !== undefined) {
        bodyParams["RoleARN"] = input.RoleARN;
    }
    return bodyParams;
};
const serializeAws_json1_1KinesisStreamsOutputUpdate = (input, context) => {
    const bodyParams = {};
    if (input.ResourceARNUpdate !== undefined) {
        bodyParams["ResourceARNUpdate"] = input.ResourceARNUpdate;
    }
    if (input.RoleARNUpdate !== undefined) {
        bodyParams["RoleARNUpdate"] = input.RoleARNUpdate;
    }
    return bodyParams;
};
const serializeAws_json1_1LambdaOutput = (input, context) => {
    const bodyParams = {};
    if (input.ResourceARN !== undefined) {
        bodyParams["ResourceARN"] = input.ResourceARN;
    }
    if (input.RoleARN !== undefined) {
        bodyParams["RoleARN"] = input.RoleARN;
    }
    return bodyParams;
};
const serializeAws_json1_1LambdaOutputUpdate = (input, context) => {
    const bodyParams = {};
    if (input.ResourceARNUpdate !== undefined) {
        bodyParams["ResourceARNUpdate"] = input.ResourceARNUpdate;
    }
    if (input.RoleARNUpdate !== undefined) {
        bodyParams["RoleARNUpdate"] = input.RoleARNUpdate;
    }
    return bodyParams;
};
const serializeAws_json1_1ListApplicationsRequest = (input, context) => {
    const bodyParams = {};
    if (input.ExclusiveStartApplicationName !== undefined) {
        bodyParams["ExclusiveStartApplicationName"] =
            input.ExclusiveStartApplicationName;
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    return bodyParams;
};
const serializeAws_json1_1ListTagsForResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceARN !== undefined) {
        bodyParams["ResourceARN"] = input.ResourceARN;
    }
    return bodyParams;
};
const serializeAws_json1_1MappingParameters = (input, context) => {
    const bodyParams = {};
    if (input.CSVMappingParameters !== undefined) {
        bodyParams["CSVMappingParameters"] = serializeAws_json1_1CSVMappingParameters(input.CSVMappingParameters, context);
    }
    if (input.JSONMappingParameters !== undefined) {
        bodyParams["JSONMappingParameters"] = serializeAws_json1_1JSONMappingParameters(input.JSONMappingParameters, context);
    }
    return bodyParams;
};
const serializeAws_json1_1Output = (input, context) => {
    const bodyParams = {};
    if (input.DestinationSchema !== undefined) {
        bodyParams["DestinationSchema"] = serializeAws_json1_1DestinationSchema(input.DestinationSchema, context);
    }
    if (input.KinesisFirehoseOutput !== undefined) {
        bodyParams["KinesisFirehoseOutput"] = serializeAws_json1_1KinesisFirehoseOutput(input.KinesisFirehoseOutput, context);
    }
    if (input.KinesisStreamsOutput !== undefined) {
        bodyParams["KinesisStreamsOutput"] = serializeAws_json1_1KinesisStreamsOutput(input.KinesisStreamsOutput, context);
    }
    if (input.LambdaOutput !== undefined) {
        bodyParams["LambdaOutput"] = serializeAws_json1_1LambdaOutput(input.LambdaOutput, context);
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1OutputUpdate = (input, context) => {
    const bodyParams = {};
    if (input.DestinationSchemaUpdate !== undefined) {
        bodyParams["DestinationSchemaUpdate"] = serializeAws_json1_1DestinationSchema(input.DestinationSchemaUpdate, context);
    }
    if (input.KinesisFirehoseOutputUpdate !== undefined) {
        bodyParams["KinesisFirehoseOutputUpdate"] = serializeAws_json1_1KinesisFirehoseOutputUpdate(input.KinesisFirehoseOutputUpdate, context);
    }
    if (input.KinesisStreamsOutputUpdate !== undefined) {
        bodyParams["KinesisStreamsOutputUpdate"] = serializeAws_json1_1KinesisStreamsOutputUpdate(input.KinesisStreamsOutputUpdate, context);
    }
    if (input.LambdaOutputUpdate !== undefined) {
        bodyParams["LambdaOutputUpdate"] = serializeAws_json1_1LambdaOutputUpdate(input.LambdaOutputUpdate, context);
    }
    if (input.NameUpdate !== undefined) {
        bodyParams["NameUpdate"] = input.NameUpdate;
    }
    if (input.OutputId !== undefined) {
        bodyParams["OutputId"] = input.OutputId;
    }
    return bodyParams;
};
const serializeAws_json1_1OutputUpdates = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1OutputUpdate(entry, context));
    }
    return contents;
};
const serializeAws_json1_1Outputs = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Output(entry, context));
    }
    return contents;
};
const serializeAws_json1_1RecordColumn = (input, context) => {
    const bodyParams = {};
    if (input.Mapping !== undefined) {
        bodyParams["Mapping"] = input.Mapping;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.SqlType !== undefined) {
        bodyParams["SqlType"] = input.SqlType;
    }
    return bodyParams;
};
const serializeAws_json1_1RecordColumns = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1RecordColumn(entry, context));
    }
    return contents;
};
const serializeAws_json1_1RecordFormat = (input, context) => {
    const bodyParams = {};
    if (input.MappingParameters !== undefined) {
        bodyParams["MappingParameters"] = serializeAws_json1_1MappingParameters(input.MappingParameters, context);
    }
    if (input.RecordFormatType !== undefined) {
        bodyParams["RecordFormatType"] = input.RecordFormatType;
    }
    return bodyParams;
};
const serializeAws_json1_1ReferenceDataSource = (input, context) => {
    const bodyParams = {};
    if (input.ReferenceSchema !== undefined) {
        bodyParams["ReferenceSchema"] = serializeAws_json1_1SourceSchema(input.ReferenceSchema, context);
    }
    if (input.S3ReferenceDataSource !== undefined) {
        bodyParams["S3ReferenceDataSource"] = serializeAws_json1_1S3ReferenceDataSource(input.S3ReferenceDataSource, context);
    }
    if (input.TableName !== undefined) {
        bodyParams["TableName"] = input.TableName;
    }
    return bodyParams;
};
const serializeAws_json1_1ReferenceDataSourceUpdate = (input, context) => {
    const bodyParams = {};
    if (input.ReferenceId !== undefined) {
        bodyParams["ReferenceId"] = input.ReferenceId;
    }
    if (input.ReferenceSchemaUpdate !== undefined) {
        bodyParams["ReferenceSchemaUpdate"] = serializeAws_json1_1SourceSchema(input.ReferenceSchemaUpdate, context);
    }
    if (input.S3ReferenceDataSourceUpdate !== undefined) {
        bodyParams["S3ReferenceDataSourceUpdate"] = serializeAws_json1_1S3ReferenceDataSourceUpdate(input.S3ReferenceDataSourceUpdate, context);
    }
    if (input.TableNameUpdate !== undefined) {
        bodyParams["TableNameUpdate"] = input.TableNameUpdate;
    }
    return bodyParams;
};
const serializeAws_json1_1ReferenceDataSourceUpdates = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ReferenceDataSourceUpdate(entry, context));
    }
    return contents;
};
const serializeAws_json1_1S3Configuration = (input, context) => {
    const bodyParams = {};
    if (input.BucketARN !== undefined) {
        bodyParams["BucketARN"] = input.BucketARN;
    }
    if (input.FileKey !== undefined) {
        bodyParams["FileKey"] = input.FileKey;
    }
    if (input.RoleARN !== undefined) {
        bodyParams["RoleARN"] = input.RoleARN;
    }
    return bodyParams;
};
const serializeAws_json1_1S3ReferenceDataSource = (input, context) => {
    const bodyParams = {};
    if (input.BucketARN !== undefined) {
        bodyParams["BucketARN"] = input.BucketARN;
    }
    if (input.FileKey !== undefined) {
        bodyParams["FileKey"] = input.FileKey;
    }
    if (input.ReferenceRoleARN !== undefined) {
        bodyParams["ReferenceRoleARN"] = input.ReferenceRoleARN;
    }
    return bodyParams;
};
const serializeAws_json1_1S3ReferenceDataSourceUpdate = (input, context) => {
    const bodyParams = {};
    if (input.BucketARNUpdate !== undefined) {
        bodyParams["BucketARNUpdate"] = input.BucketARNUpdate;
    }
    if (input.FileKeyUpdate !== undefined) {
        bodyParams["FileKeyUpdate"] = input.FileKeyUpdate;
    }
    if (input.ReferenceRoleARNUpdate !== undefined) {
        bodyParams["ReferenceRoleARNUpdate"] = input.ReferenceRoleARNUpdate;
    }
    return bodyParams;
};
const serializeAws_json1_1SourceSchema = (input, context) => {
    const bodyParams = {};
    if (input.RecordColumns !== undefined) {
        bodyParams["RecordColumns"] = serializeAws_json1_1RecordColumns(input.RecordColumns, context);
    }
    if (input.RecordEncoding !== undefined) {
        bodyParams["RecordEncoding"] = input.RecordEncoding;
    }
    if (input.RecordFormat !== undefined) {
        bodyParams["RecordFormat"] = serializeAws_json1_1RecordFormat(input.RecordFormat, context);
    }
    return bodyParams;
};
const serializeAws_json1_1StartApplicationRequest = (input, context) => {
    const bodyParams = {};
    if (input.ApplicationName !== undefined) {
        bodyParams["ApplicationName"] = input.ApplicationName;
    }
    if (input.InputConfigurations !== undefined) {
        bodyParams["InputConfigurations"] = serializeAws_json1_1InputConfigurations(input.InputConfigurations, context);
    }
    return bodyParams;
};
const serializeAws_json1_1StopApplicationRequest = (input, context) => {
    const bodyParams = {};
    if (input.ApplicationName !== undefined) {
        bodyParams["ApplicationName"] = input.ApplicationName;
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
const serializeAws_json1_1TagKeys = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1TagResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceARN !== undefined) {
        bodyParams["ResourceARN"] = input.ResourceARN;
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
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceARN !== undefined) {
        bodyParams["ResourceARN"] = input.ResourceARN;
    }
    if (input.TagKeys !== undefined) {
        bodyParams["TagKeys"] = serializeAws_json1_1TagKeys(input.TagKeys, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateApplicationRequest = (input, context) => {
    const bodyParams = {};
    if (input.ApplicationName !== undefined) {
        bodyParams["ApplicationName"] = input.ApplicationName;
    }
    if (input.ApplicationUpdate !== undefined) {
        bodyParams["ApplicationUpdate"] = serializeAws_json1_1ApplicationUpdate(input.ApplicationUpdate, context);
    }
    if (input.CurrentApplicationVersionId !== undefined) {
        bodyParams["CurrentApplicationVersionId"] =
            input.CurrentApplicationVersionId;
    }
    return bodyParams;
};
const deserializeAws_json1_1AddApplicationCloudWatchLoggingOptionResponse = (output, context) => {
    let contents = {
        __type: "AddApplicationCloudWatchLoggingOptionResponse"
    };
    return contents;
};
const deserializeAws_json1_1AddApplicationInputProcessingConfigurationResponse = (output, context) => {
    let contents = {
        __type: "AddApplicationInputProcessingConfigurationResponse"
    };
    return contents;
};
const deserializeAws_json1_1AddApplicationInputResponse = (output, context) => {
    let contents = {
        __type: "AddApplicationInputResponse"
    };
    return contents;
};
const deserializeAws_json1_1AddApplicationOutputResponse = (output, context) => {
    let contents = {
        __type: "AddApplicationOutputResponse"
    };
    return contents;
};
const deserializeAws_json1_1AddApplicationReferenceDataSourceResponse = (output, context) => {
    let contents = {
        __type: "AddApplicationReferenceDataSourceResponse"
    };
    return contents;
};
const deserializeAws_json1_1ApplicationDetail = (output, context) => {
    let contents = {
        __type: "ApplicationDetail",
        ApplicationARN: undefined,
        ApplicationCode: undefined,
        ApplicationDescription: undefined,
        ApplicationName: undefined,
        ApplicationStatus: undefined,
        ApplicationVersionId: undefined,
        CloudWatchLoggingOptionDescriptions: undefined,
        CreateTimestamp: undefined,
        InputDescriptions: undefined,
        LastUpdateTimestamp: undefined,
        OutputDescriptions: undefined,
        ReferenceDataSourceDescriptions: undefined
    };
    if (output.ApplicationARN !== undefined && output.ApplicationARN !== null) {
        contents.ApplicationARN = output.ApplicationARN;
    }
    if (output.ApplicationCode !== undefined && output.ApplicationCode !== null) {
        contents.ApplicationCode = output.ApplicationCode;
    }
    if (output.ApplicationDescription !== undefined &&
        output.ApplicationDescription !== null) {
        contents.ApplicationDescription = output.ApplicationDescription;
    }
    if (output.ApplicationName !== undefined && output.ApplicationName !== null) {
        contents.ApplicationName = output.ApplicationName;
    }
    if (output.ApplicationStatus !== undefined &&
        output.ApplicationStatus !== null) {
        contents.ApplicationStatus = output.ApplicationStatus;
    }
    if (output.ApplicationVersionId !== undefined &&
        output.ApplicationVersionId !== null) {
        contents.ApplicationVersionId = output.ApplicationVersionId;
    }
    if (output.CloudWatchLoggingOptionDescriptions !== undefined &&
        output.CloudWatchLoggingOptionDescriptions !== null) {
        contents.CloudWatchLoggingOptionDescriptions = deserializeAws_json1_1CloudWatchLoggingOptionDescriptions(output.CloudWatchLoggingOptionDescriptions, context);
    }
    if (output.CreateTimestamp !== undefined && output.CreateTimestamp !== null) {
        contents.CreateTimestamp = new Date(Math.round(output.CreateTimestamp * 1000));
    }
    if (output.InputDescriptions !== undefined &&
        output.InputDescriptions !== null) {
        contents.InputDescriptions = deserializeAws_json1_1InputDescriptions(output.InputDescriptions, context);
    }
    if (output.LastUpdateTimestamp !== undefined &&
        output.LastUpdateTimestamp !== null) {
        contents.LastUpdateTimestamp = new Date(Math.round(output.LastUpdateTimestamp * 1000));
    }
    if (output.OutputDescriptions !== undefined &&
        output.OutputDescriptions !== null) {
        contents.OutputDescriptions = deserializeAws_json1_1OutputDescriptions(output.OutputDescriptions, context);
    }
    if (output.ReferenceDataSourceDescriptions !== undefined &&
        output.ReferenceDataSourceDescriptions !== null) {
        contents.ReferenceDataSourceDescriptions = deserializeAws_json1_1ReferenceDataSourceDescriptions(output.ReferenceDataSourceDescriptions, context);
    }
    return contents;
};
const deserializeAws_json1_1ApplicationSummaries = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ApplicationSummary(entry, context));
};
const deserializeAws_json1_1ApplicationSummary = (output, context) => {
    let contents = {
        __type: "ApplicationSummary",
        ApplicationARN: undefined,
        ApplicationName: undefined,
        ApplicationStatus: undefined
    };
    if (output.ApplicationARN !== undefined && output.ApplicationARN !== null) {
        contents.ApplicationARN = output.ApplicationARN;
    }
    if (output.ApplicationName !== undefined && output.ApplicationName !== null) {
        contents.ApplicationName = output.ApplicationName;
    }
    if (output.ApplicationStatus !== undefined &&
        output.ApplicationStatus !== null) {
        contents.ApplicationStatus = output.ApplicationStatus;
    }
    return contents;
};
const deserializeAws_json1_1CSVMappingParameters = (output, context) => {
    let contents = {
        __type: "CSVMappingParameters",
        RecordColumnDelimiter: undefined,
        RecordRowDelimiter: undefined
    };
    if (output.RecordColumnDelimiter !== undefined &&
        output.RecordColumnDelimiter !== null) {
        contents.RecordColumnDelimiter = output.RecordColumnDelimiter;
    }
    if (output.RecordRowDelimiter !== undefined &&
        output.RecordRowDelimiter !== null) {
        contents.RecordRowDelimiter = output.RecordRowDelimiter;
    }
    return contents;
};
const deserializeAws_json1_1CloudWatchLoggingOptionDescription = (output, context) => {
    let contents = {
        __type: "CloudWatchLoggingOptionDescription",
        CloudWatchLoggingOptionId: undefined,
        LogStreamARN: undefined,
        RoleARN: undefined
    };
    if (output.CloudWatchLoggingOptionId !== undefined &&
        output.CloudWatchLoggingOptionId !== null) {
        contents.CloudWatchLoggingOptionId = output.CloudWatchLoggingOptionId;
    }
    if (output.LogStreamARN !== undefined && output.LogStreamARN !== null) {
        contents.LogStreamARN = output.LogStreamARN;
    }
    if (output.RoleARN !== undefined && output.RoleARN !== null) {
        contents.RoleARN = output.RoleARN;
    }
    return contents;
};
const deserializeAws_json1_1CloudWatchLoggingOptionDescriptions = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1CloudWatchLoggingOptionDescription(entry, context));
};
const deserializeAws_json1_1CodeValidationException = (output, context) => {
    let contents = {
        __type: "CodeValidationException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
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
const deserializeAws_json1_1CreateApplicationResponse = (output, context) => {
    let contents = {
        __type: "CreateApplicationResponse",
        ApplicationSummary: undefined
    };
    if (output.ApplicationSummary !== undefined &&
        output.ApplicationSummary !== null) {
        contents.ApplicationSummary = deserializeAws_json1_1ApplicationSummary(output.ApplicationSummary, context);
    }
    return contents;
};
const deserializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionResponse = (output, context) => {
    let contents = {
        __type: "DeleteApplicationCloudWatchLoggingOptionResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteApplicationInputProcessingConfigurationResponse = (output, context) => {
    let contents = {
        __type: "DeleteApplicationInputProcessingConfigurationResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteApplicationOutputResponse = (output, context) => {
    let contents = {
        __type: "DeleteApplicationOutputResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteApplicationReferenceDataSourceResponse = (output, context) => {
    let contents = {
        __type: "DeleteApplicationReferenceDataSourceResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteApplicationResponse = (output, context) => {
    let contents = {
        __type: "DeleteApplicationResponse"
    };
    return contents;
};
const deserializeAws_json1_1DescribeApplicationResponse = (output, context) => {
    let contents = {
        __type: "DescribeApplicationResponse",
        ApplicationDetail: undefined
    };
    if (output.ApplicationDetail !== undefined &&
        output.ApplicationDetail !== null) {
        contents.ApplicationDetail = deserializeAws_json1_1ApplicationDetail(output.ApplicationDetail, context);
    }
    return contents;
};
const deserializeAws_json1_1DestinationSchema = (output, context) => {
    let contents = {
        __type: "DestinationSchema",
        RecordFormatType: undefined
    };
    if (output.RecordFormatType !== undefined &&
        output.RecordFormatType !== null) {
        contents.RecordFormatType = output.RecordFormatType;
    }
    return contents;
};
const deserializeAws_json1_1DiscoverInputSchemaResponse = (output, context) => {
    let contents = {
        __type: "DiscoverInputSchemaResponse",
        InputSchema: undefined,
        ParsedInputRecords: undefined,
        ProcessedInputRecords: undefined,
        RawInputRecords: undefined
    };
    if (output.InputSchema !== undefined && output.InputSchema !== null) {
        contents.InputSchema = deserializeAws_json1_1SourceSchema(output.InputSchema, context);
    }
    if (output.ParsedInputRecords !== undefined &&
        output.ParsedInputRecords !== null) {
        contents.ParsedInputRecords = deserializeAws_json1_1ParsedInputRecords(output.ParsedInputRecords, context);
    }
    if (output.ProcessedInputRecords !== undefined &&
        output.ProcessedInputRecords !== null) {
        contents.ProcessedInputRecords = deserializeAws_json1_1ProcessedInputRecords(output.ProcessedInputRecords, context);
    }
    if (output.RawInputRecords !== undefined && output.RawInputRecords !== null) {
        contents.RawInputRecords = deserializeAws_json1_1RawInputRecords(output.RawInputRecords, context);
    }
    return contents;
};
const deserializeAws_json1_1InAppStreamNames = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1InputDescription = (output, context) => {
    let contents = {
        __type: "InputDescription",
        InAppStreamNames: undefined,
        InputId: undefined,
        InputParallelism: undefined,
        InputProcessingConfigurationDescription: undefined,
        InputSchema: undefined,
        InputStartingPositionConfiguration: undefined,
        KinesisFirehoseInputDescription: undefined,
        KinesisStreamsInputDescription: undefined,
        NamePrefix: undefined
    };
    if (output.InAppStreamNames !== undefined &&
        output.InAppStreamNames !== null) {
        contents.InAppStreamNames = deserializeAws_json1_1InAppStreamNames(output.InAppStreamNames, context);
    }
    if (output.InputId !== undefined && output.InputId !== null) {
        contents.InputId = output.InputId;
    }
    if (output.InputParallelism !== undefined &&
        output.InputParallelism !== null) {
        contents.InputParallelism = deserializeAws_json1_1InputParallelism(output.InputParallelism, context);
    }
    if (output.InputProcessingConfigurationDescription !== undefined &&
        output.InputProcessingConfigurationDescription !== null) {
        contents.InputProcessingConfigurationDescription = deserializeAws_json1_1InputProcessingConfigurationDescription(output.InputProcessingConfigurationDescription, context);
    }
    if (output.InputSchema !== undefined && output.InputSchema !== null) {
        contents.InputSchema = deserializeAws_json1_1SourceSchema(output.InputSchema, context);
    }
    if (output.InputStartingPositionConfiguration !== undefined &&
        output.InputStartingPositionConfiguration !== null) {
        contents.InputStartingPositionConfiguration = deserializeAws_json1_1InputStartingPositionConfiguration(output.InputStartingPositionConfiguration, context);
    }
    if (output.KinesisFirehoseInputDescription !== undefined &&
        output.KinesisFirehoseInputDescription !== null) {
        contents.KinesisFirehoseInputDescription = deserializeAws_json1_1KinesisFirehoseInputDescription(output.KinesisFirehoseInputDescription, context);
    }
    if (output.KinesisStreamsInputDescription !== undefined &&
        output.KinesisStreamsInputDescription !== null) {
        contents.KinesisStreamsInputDescription = deserializeAws_json1_1KinesisStreamsInputDescription(output.KinesisStreamsInputDescription, context);
    }
    if (output.NamePrefix !== undefined && output.NamePrefix !== null) {
        contents.NamePrefix = output.NamePrefix;
    }
    return contents;
};
const deserializeAws_json1_1InputDescriptions = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1InputDescription(entry, context));
};
const deserializeAws_json1_1InputLambdaProcessorDescription = (output, context) => {
    let contents = {
        __type: "InputLambdaProcessorDescription",
        ResourceARN: undefined,
        RoleARN: undefined
    };
    if (output.ResourceARN !== undefined && output.ResourceARN !== null) {
        contents.ResourceARN = output.ResourceARN;
    }
    if (output.RoleARN !== undefined && output.RoleARN !== null) {
        contents.RoleARN = output.RoleARN;
    }
    return contents;
};
const deserializeAws_json1_1InputParallelism = (output, context) => {
    let contents = {
        __type: "InputParallelism",
        Count: undefined
    };
    if (output.Count !== undefined && output.Count !== null) {
        contents.Count = output.Count;
    }
    return contents;
};
const deserializeAws_json1_1InputProcessingConfigurationDescription = (output, context) => {
    let contents = {
        __type: "InputProcessingConfigurationDescription",
        InputLambdaProcessorDescription: undefined
    };
    if (output.InputLambdaProcessorDescription !== undefined &&
        output.InputLambdaProcessorDescription !== null) {
        contents.InputLambdaProcessorDescription = deserializeAws_json1_1InputLambdaProcessorDescription(output.InputLambdaProcessorDescription, context);
    }
    return contents;
};
const deserializeAws_json1_1InputStartingPositionConfiguration = (output, context) => {
    let contents = {
        __type: "InputStartingPositionConfiguration",
        InputStartingPosition: undefined
    };
    if (output.InputStartingPosition !== undefined &&
        output.InputStartingPosition !== null) {
        contents.InputStartingPosition = output.InputStartingPosition;
    }
    return contents;
};
const deserializeAws_json1_1InvalidApplicationConfigurationException = (output, context) => {
    let contents = {
        __type: "InvalidApplicationConfigurationException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidArgumentException = (output, context) => {
    let contents = {
        __type: "InvalidArgumentException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1JSONMappingParameters = (output, context) => {
    let contents = {
        __type: "JSONMappingParameters",
        RecordRowPath: undefined
    };
    if (output.RecordRowPath !== undefined && output.RecordRowPath !== null) {
        contents.RecordRowPath = output.RecordRowPath;
    }
    return contents;
};
const deserializeAws_json1_1KinesisFirehoseInputDescription = (output, context) => {
    let contents = {
        __type: "KinesisFirehoseInputDescription",
        ResourceARN: undefined,
        RoleARN: undefined
    };
    if (output.ResourceARN !== undefined && output.ResourceARN !== null) {
        contents.ResourceARN = output.ResourceARN;
    }
    if (output.RoleARN !== undefined && output.RoleARN !== null) {
        contents.RoleARN = output.RoleARN;
    }
    return contents;
};
const deserializeAws_json1_1KinesisFirehoseOutputDescription = (output, context) => {
    let contents = {
        __type: "KinesisFirehoseOutputDescription",
        ResourceARN: undefined,
        RoleARN: undefined
    };
    if (output.ResourceARN !== undefined && output.ResourceARN !== null) {
        contents.ResourceARN = output.ResourceARN;
    }
    if (output.RoleARN !== undefined && output.RoleARN !== null) {
        contents.RoleARN = output.RoleARN;
    }
    return contents;
};
const deserializeAws_json1_1KinesisStreamsInputDescription = (output, context) => {
    let contents = {
        __type: "KinesisStreamsInputDescription",
        ResourceARN: undefined,
        RoleARN: undefined
    };
    if (output.ResourceARN !== undefined && output.ResourceARN !== null) {
        contents.ResourceARN = output.ResourceARN;
    }
    if (output.RoleARN !== undefined && output.RoleARN !== null) {
        contents.RoleARN = output.RoleARN;
    }
    return contents;
};
const deserializeAws_json1_1KinesisStreamsOutputDescription = (output, context) => {
    let contents = {
        __type: "KinesisStreamsOutputDescription",
        ResourceARN: undefined,
        RoleARN: undefined
    };
    if (output.ResourceARN !== undefined && output.ResourceARN !== null) {
        contents.ResourceARN = output.ResourceARN;
    }
    if (output.RoleARN !== undefined && output.RoleARN !== null) {
        contents.RoleARN = output.RoleARN;
    }
    return contents;
};
const deserializeAws_json1_1LambdaOutputDescription = (output, context) => {
    let contents = {
        __type: "LambdaOutputDescription",
        ResourceARN: undefined,
        RoleARN: undefined
    };
    if (output.ResourceARN !== undefined && output.ResourceARN !== null) {
        contents.ResourceARN = output.ResourceARN;
    }
    if (output.RoleARN !== undefined && output.RoleARN !== null) {
        contents.RoleARN = output.RoleARN;
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
const deserializeAws_json1_1ListApplicationsResponse = (output, context) => {
    let contents = {
        __type: "ListApplicationsResponse",
        ApplicationSummaries: undefined,
        HasMoreApplications: undefined
    };
    if (output.ApplicationSummaries !== undefined &&
        output.ApplicationSummaries !== null) {
        contents.ApplicationSummaries = deserializeAws_json1_1ApplicationSummaries(output.ApplicationSummaries, context);
    }
    if (output.HasMoreApplications !== undefined &&
        output.HasMoreApplications !== null) {
        contents.HasMoreApplications = output.HasMoreApplications;
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
const deserializeAws_json1_1MappingParameters = (output, context) => {
    let contents = {
        __type: "MappingParameters",
        CSVMappingParameters: undefined,
        JSONMappingParameters: undefined
    };
    if (output.CSVMappingParameters !== undefined &&
        output.CSVMappingParameters !== null) {
        contents.CSVMappingParameters = deserializeAws_json1_1CSVMappingParameters(output.CSVMappingParameters, context);
    }
    if (output.JSONMappingParameters !== undefined &&
        output.JSONMappingParameters !== null) {
        contents.JSONMappingParameters = deserializeAws_json1_1JSONMappingParameters(output.JSONMappingParameters, context);
    }
    return contents;
};
const deserializeAws_json1_1OutputDescription = (output, context) => {
    let contents = {
        __type: "OutputDescription",
        DestinationSchema: undefined,
        KinesisFirehoseOutputDescription: undefined,
        KinesisStreamsOutputDescription: undefined,
        LambdaOutputDescription: undefined,
        Name: undefined,
        OutputId: undefined
    };
    if (output.DestinationSchema !== undefined &&
        output.DestinationSchema !== null) {
        contents.DestinationSchema = deserializeAws_json1_1DestinationSchema(output.DestinationSchema, context);
    }
    if (output.KinesisFirehoseOutputDescription !== undefined &&
        output.KinesisFirehoseOutputDescription !== null) {
        contents.KinesisFirehoseOutputDescription = deserializeAws_json1_1KinesisFirehoseOutputDescription(output.KinesisFirehoseOutputDescription, context);
    }
    if (output.KinesisStreamsOutputDescription !== undefined &&
        output.KinesisStreamsOutputDescription !== null) {
        contents.KinesisStreamsOutputDescription = deserializeAws_json1_1KinesisStreamsOutputDescription(output.KinesisStreamsOutputDescription, context);
    }
    if (output.LambdaOutputDescription !== undefined &&
        output.LambdaOutputDescription !== null) {
        contents.LambdaOutputDescription = deserializeAws_json1_1LambdaOutputDescription(output.LambdaOutputDescription, context);
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.OutputId !== undefined && output.OutputId !== null) {
        contents.OutputId = output.OutputId;
    }
    return contents;
};
const deserializeAws_json1_1OutputDescriptions = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1OutputDescription(entry, context));
};
const deserializeAws_json1_1ParsedInputRecord = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1ParsedInputRecords = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ParsedInputRecord(entry, context));
};
const deserializeAws_json1_1ProcessedInputRecords = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1RawInputRecords = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1RecordColumn = (output, context) => {
    let contents = {
        __type: "RecordColumn",
        Mapping: undefined,
        Name: undefined,
        SqlType: undefined
    };
    if (output.Mapping !== undefined && output.Mapping !== null) {
        contents.Mapping = output.Mapping;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.SqlType !== undefined && output.SqlType !== null) {
        contents.SqlType = output.SqlType;
    }
    return contents;
};
const deserializeAws_json1_1RecordColumns = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1RecordColumn(entry, context));
};
const deserializeAws_json1_1RecordFormat = (output, context) => {
    let contents = {
        __type: "RecordFormat",
        MappingParameters: undefined,
        RecordFormatType: undefined
    };
    if (output.MappingParameters !== undefined &&
        output.MappingParameters !== null) {
        contents.MappingParameters = deserializeAws_json1_1MappingParameters(output.MappingParameters, context);
    }
    if (output.RecordFormatType !== undefined &&
        output.RecordFormatType !== null) {
        contents.RecordFormatType = output.RecordFormatType;
    }
    return contents;
};
const deserializeAws_json1_1ReferenceDataSourceDescription = (output, context) => {
    let contents = {
        __type: "ReferenceDataSourceDescription",
        ReferenceId: undefined,
        ReferenceSchema: undefined,
        S3ReferenceDataSourceDescription: undefined,
        TableName: undefined
    };
    if (output.ReferenceId !== undefined && output.ReferenceId !== null) {
        contents.ReferenceId = output.ReferenceId;
    }
    if (output.ReferenceSchema !== undefined && output.ReferenceSchema !== null) {
        contents.ReferenceSchema = deserializeAws_json1_1SourceSchema(output.ReferenceSchema, context);
    }
    if (output.S3ReferenceDataSourceDescription !== undefined &&
        output.S3ReferenceDataSourceDescription !== null) {
        contents.S3ReferenceDataSourceDescription = deserializeAws_json1_1S3ReferenceDataSourceDescription(output.S3ReferenceDataSourceDescription, context);
    }
    if (output.TableName !== undefined && output.TableName !== null) {
        contents.TableName = output.TableName;
    }
    return contents;
};
const deserializeAws_json1_1ReferenceDataSourceDescriptions = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ReferenceDataSourceDescription(entry, context));
};
const deserializeAws_json1_1ResourceInUseException = (output, context) => {
    let contents = {
        __type: "ResourceInUseException",
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
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ResourceProvisionedThroughputExceededException = (output, context) => {
    let contents = {
        __type: "ResourceProvisionedThroughputExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1S3ReferenceDataSourceDescription = (output, context) => {
    let contents = {
        __type: "S3ReferenceDataSourceDescription",
        BucketARN: undefined,
        FileKey: undefined,
        ReferenceRoleARN: undefined
    };
    if (output.BucketARN !== undefined && output.BucketARN !== null) {
        contents.BucketARN = output.BucketARN;
    }
    if (output.FileKey !== undefined && output.FileKey !== null) {
        contents.FileKey = output.FileKey;
    }
    if (output.ReferenceRoleARN !== undefined &&
        output.ReferenceRoleARN !== null) {
        contents.ReferenceRoleARN = output.ReferenceRoleARN;
    }
    return contents;
};
const deserializeAws_json1_1ServiceUnavailableException = (output, context) => {
    let contents = {
        __type: "ServiceUnavailableException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1SourceSchema = (output, context) => {
    let contents = {
        __type: "SourceSchema",
        RecordColumns: undefined,
        RecordEncoding: undefined,
        RecordFormat: undefined
    };
    if (output.RecordColumns !== undefined && output.RecordColumns !== null) {
        contents.RecordColumns = deserializeAws_json1_1RecordColumns(output.RecordColumns, context);
    }
    if (output.RecordEncoding !== undefined && output.RecordEncoding !== null) {
        contents.RecordEncoding = output.RecordEncoding;
    }
    if (output.RecordFormat !== undefined && output.RecordFormat !== null) {
        contents.RecordFormat = deserializeAws_json1_1RecordFormat(output.RecordFormat, context);
    }
    return contents;
};
const deserializeAws_json1_1StartApplicationResponse = (output, context) => {
    let contents = {
        __type: "StartApplicationResponse"
    };
    return contents;
};
const deserializeAws_json1_1StopApplicationResponse = (output, context) => {
    let contents = {
        __type: "StopApplicationResponse"
    };
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
const deserializeAws_json1_1TagResourceResponse = (output, context) => {
    let contents = {
        __type: "TagResourceResponse"
    };
    return contents;
};
const deserializeAws_json1_1Tags = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Tag(entry, context));
};
const deserializeAws_json1_1TooManyTagsException = (output, context) => {
    let contents = {
        __type: "TooManyTagsException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1UnableToDetectSchemaException = (output, context) => {
    let contents = {
        __type: "UnableToDetectSchemaException",
        ProcessedInputRecords: undefined,
        RawInputRecords: undefined,
        message: undefined
    };
    if (output.ProcessedInputRecords !== undefined &&
        output.ProcessedInputRecords !== null) {
        contents.ProcessedInputRecords = deserializeAws_json1_1ProcessedInputRecords(output.ProcessedInputRecords, context);
    }
    if (output.RawInputRecords !== undefined && output.RawInputRecords !== null) {
        contents.RawInputRecords = deserializeAws_json1_1RawInputRecords(output.RawInputRecords, context);
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1UnsupportedOperationException = (output, context) => {
    let contents = {
        __type: "UnsupportedOperationException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1UntagResourceResponse = (output, context) => {
    let contents = {
        __type: "UntagResourceResponse"
    };
    return contents;
};
const deserializeAws_json1_1UpdateApplicationResponse = (output, context) => {
    let contents = {
        __type: "UpdateApplicationResponse"
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