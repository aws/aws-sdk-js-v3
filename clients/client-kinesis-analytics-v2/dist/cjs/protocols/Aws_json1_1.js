"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1AddApplicationCloudWatchLoggingOptionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "KinesisAnalytics_20180523.AddApplicationCloudWatchLoggingOption";
    let body;
    body = JSON.stringify(serializeAws_json1_1AddApplicationCloudWatchLoggingOptionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AddApplicationCloudWatchLoggingOptionCommand = serializeAws_json1_1AddApplicationCloudWatchLoggingOptionCommand;
async function serializeAws_json1_1AddApplicationInputCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "KinesisAnalytics_20180523.AddApplicationInput";
    let body;
    body = JSON.stringify(serializeAws_json1_1AddApplicationInputRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AddApplicationInputCommand = serializeAws_json1_1AddApplicationInputCommand;
async function serializeAws_json1_1AddApplicationInputProcessingConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "KinesisAnalytics_20180523.AddApplicationInputProcessingConfiguration";
    let body;
    body = JSON.stringify(serializeAws_json1_1AddApplicationInputProcessingConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AddApplicationInputProcessingConfigurationCommand = serializeAws_json1_1AddApplicationInputProcessingConfigurationCommand;
async function serializeAws_json1_1AddApplicationOutputCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "KinesisAnalytics_20180523.AddApplicationOutput";
    let body;
    body = JSON.stringify(serializeAws_json1_1AddApplicationOutputRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AddApplicationOutputCommand = serializeAws_json1_1AddApplicationOutputCommand;
async function serializeAws_json1_1AddApplicationReferenceDataSourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "KinesisAnalytics_20180523.AddApplicationReferenceDataSource";
    let body;
    body = JSON.stringify(serializeAws_json1_1AddApplicationReferenceDataSourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AddApplicationReferenceDataSourceCommand = serializeAws_json1_1AddApplicationReferenceDataSourceCommand;
async function serializeAws_json1_1AddApplicationVpcConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "KinesisAnalytics_20180523.AddApplicationVpcConfiguration";
    let body;
    body = JSON.stringify(serializeAws_json1_1AddApplicationVpcConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AddApplicationVpcConfigurationCommand = serializeAws_json1_1AddApplicationVpcConfigurationCommand;
async function serializeAws_json1_1CreateApplicationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "KinesisAnalytics_20180523.CreateApplication";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateApplicationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateApplicationCommand = serializeAws_json1_1CreateApplicationCommand;
async function serializeAws_json1_1CreateApplicationSnapshotCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "KinesisAnalytics_20180523.CreateApplicationSnapshot";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateApplicationSnapshotRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateApplicationSnapshotCommand = serializeAws_json1_1CreateApplicationSnapshotCommand;
async function serializeAws_json1_1DeleteApplicationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "KinesisAnalytics_20180523.DeleteApplication";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteApplicationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteApplicationCommand = serializeAws_json1_1DeleteApplicationCommand;
async function serializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "KinesisAnalytics_20180523.DeleteApplicationCloudWatchLoggingOption";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionCommand = serializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionCommand;
async function serializeAws_json1_1DeleteApplicationInputProcessingConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "KinesisAnalytics_20180523.DeleteApplicationInputProcessingConfiguration";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteApplicationInputProcessingConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteApplicationInputProcessingConfigurationCommand = serializeAws_json1_1DeleteApplicationInputProcessingConfigurationCommand;
async function serializeAws_json1_1DeleteApplicationOutputCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "KinesisAnalytics_20180523.DeleteApplicationOutput";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteApplicationOutputRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteApplicationOutputCommand = serializeAws_json1_1DeleteApplicationOutputCommand;
async function serializeAws_json1_1DeleteApplicationReferenceDataSourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "KinesisAnalytics_20180523.DeleteApplicationReferenceDataSource";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteApplicationReferenceDataSourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteApplicationReferenceDataSourceCommand = serializeAws_json1_1DeleteApplicationReferenceDataSourceCommand;
async function serializeAws_json1_1DeleteApplicationSnapshotCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "KinesisAnalytics_20180523.DeleteApplicationSnapshot";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteApplicationSnapshotRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteApplicationSnapshotCommand = serializeAws_json1_1DeleteApplicationSnapshotCommand;
async function serializeAws_json1_1DeleteApplicationVpcConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "KinesisAnalytics_20180523.DeleteApplicationVpcConfiguration";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteApplicationVpcConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteApplicationVpcConfigurationCommand = serializeAws_json1_1DeleteApplicationVpcConfigurationCommand;
async function serializeAws_json1_1DescribeApplicationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "KinesisAnalytics_20180523.DescribeApplication";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeApplicationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeApplicationCommand = serializeAws_json1_1DescribeApplicationCommand;
async function serializeAws_json1_1DescribeApplicationSnapshotCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "KinesisAnalytics_20180523.DescribeApplicationSnapshot";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeApplicationSnapshotRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeApplicationSnapshotCommand = serializeAws_json1_1DescribeApplicationSnapshotCommand;
async function serializeAws_json1_1DiscoverInputSchemaCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "KinesisAnalytics_20180523.DiscoverInputSchema";
    let body;
    body = JSON.stringify(serializeAws_json1_1DiscoverInputSchemaRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DiscoverInputSchemaCommand = serializeAws_json1_1DiscoverInputSchemaCommand;
async function serializeAws_json1_1ListApplicationSnapshotsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "KinesisAnalytics_20180523.ListApplicationSnapshots";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListApplicationSnapshotsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListApplicationSnapshotsCommand = serializeAws_json1_1ListApplicationSnapshotsCommand;
async function serializeAws_json1_1ListApplicationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "KinesisAnalytics_20180523.ListApplications";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListApplicationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListApplicationsCommand = serializeAws_json1_1ListApplicationsCommand;
async function serializeAws_json1_1ListTagsForResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "KinesisAnalytics_20180523.ListTagsForResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
async function serializeAws_json1_1StartApplicationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "KinesisAnalytics_20180523.StartApplication";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartApplicationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartApplicationCommand = serializeAws_json1_1StartApplicationCommand;
async function serializeAws_json1_1StopApplicationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "KinesisAnalytics_20180523.StopApplication";
    let body;
    body = JSON.stringify(serializeAws_json1_1StopApplicationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StopApplicationCommand = serializeAws_json1_1StopApplicationCommand;
async function serializeAws_json1_1TagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "KinesisAnalytics_20180523.TagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
async function serializeAws_json1_1UntagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "KinesisAnalytics_20180523.UntagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
async function serializeAws_json1_1UpdateApplicationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "KinesisAnalytics_20180523.UpdateApplication";
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
        case "com.amazonaws.kinesis.analytics.v20180523#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidApplicationConfigurationException":
        case "com.amazonaws.kinesis.analytics.v20180523#InvalidApplicationConfigurationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidApplicationConfigurationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.analytics.v20180523#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.kinesis.analytics.v20180523#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesis.analytics.v20180523#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.analytics.v20180523#ResourceNotFoundException":
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
        case "com.amazonaws.kinesis.analytics.v20180523#CodeValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CodeValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.kinesis.analytics.v20180523#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.analytics.v20180523#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.kinesis.analytics.v20180523#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesis.analytics.v20180523#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.analytics.v20180523#ResourceNotFoundException":
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
        case "com.amazonaws.kinesis.analytics.v20180523#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.analytics.v20180523#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.kinesis.analytics.v20180523#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesis.analytics.v20180523#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.analytics.v20180523#ResourceNotFoundException":
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
        case "com.amazonaws.kinesis.analytics.v20180523#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.analytics.v20180523#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.kinesis.analytics.v20180523#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesis.analytics.v20180523#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.analytics.v20180523#ResourceNotFoundException":
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
        case "com.amazonaws.kinesis.analytics.v20180523#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.analytics.v20180523#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.kinesis.analytics.v20180523#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesis.analytics.v20180523#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.analytics.v20180523#ResourceNotFoundException":
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
async function deserializeAws_json1_1AddApplicationVpcConfigurationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AddApplicationVpcConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AddApplicationVpcConfigurationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AddApplicationVpcConfigurationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AddApplicationVpcConfigurationCommand = deserializeAws_json1_1AddApplicationVpcConfigurationCommand;
async function deserializeAws_json1_1AddApplicationVpcConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.kinesis.analytics.v20180523#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.analytics.v20180523#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesis.analytics.v20180523#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.analytics.v20180523#ResourceNotFoundException":
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
        case "com.amazonaws.kinesis.analytics.v20180523#CodeValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CodeValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.kinesis.analytics.v20180523#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.analytics.v20180523#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.kinesis.analytics.v20180523#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.kinesis.analytics.v20180523#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesis.analytics.v20180523#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTagsException":
        case "com.amazonaws.kinesis.analytics.v20180523#TooManyTagsException":
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
async function deserializeAws_json1_1CreateApplicationSnapshotCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateApplicationSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateApplicationSnapshotResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateApplicationSnapshotResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateApplicationSnapshotCommand = deserializeAws_json1_1CreateApplicationSnapshotCommand;
async function deserializeAws_json1_1CreateApplicationSnapshotCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.analytics.v20180523#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.kinesis.analytics.v20180523#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.kinesis.analytics.v20180523#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesis.analytics.v20180523#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.analytics.v20180523#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.kinesis.analytics.v20180523#UnsupportedOperationException":
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
        case "com.amazonaws.kinesis.analytics.v20180523#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidApplicationConfigurationException":
        case "com.amazonaws.kinesis.analytics.v20180523#InvalidApplicationConfigurationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidApplicationConfigurationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.analytics.v20180523#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.kinesis.analytics.v20180523#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesis.analytics.v20180523#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.analytics.v20180523#ResourceNotFoundException":
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
        case "com.amazonaws.kinesis.analytics.v20180523#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidApplicationConfigurationException":
        case "com.amazonaws.kinesis.analytics.v20180523#InvalidApplicationConfigurationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidApplicationConfigurationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.analytics.v20180523#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.kinesis.analytics.v20180523#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesis.analytics.v20180523#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.analytics.v20180523#ResourceNotFoundException":
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
        case "com.amazonaws.kinesis.analytics.v20180523#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.analytics.v20180523#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.kinesis.analytics.v20180523#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesis.analytics.v20180523#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.analytics.v20180523#ResourceNotFoundException":
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
        case "com.amazonaws.kinesis.analytics.v20180523#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.analytics.v20180523#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.kinesis.analytics.v20180523#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesis.analytics.v20180523#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.analytics.v20180523#ResourceNotFoundException":
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
        case "com.amazonaws.kinesis.analytics.v20180523#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.analytics.v20180523#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.kinesis.analytics.v20180523#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesis.analytics.v20180523#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.analytics.v20180523#ResourceNotFoundException":
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
async function deserializeAws_json1_1DeleteApplicationSnapshotCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteApplicationSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteApplicationSnapshotResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteApplicationSnapshotResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteApplicationSnapshotCommand = deserializeAws_json1_1DeleteApplicationSnapshotCommand;
async function deserializeAws_json1_1DeleteApplicationSnapshotCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.analytics.v20180523#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.kinesis.analytics.v20180523#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesis.analytics.v20180523#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.analytics.v20180523#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.kinesis.analytics.v20180523#UnsupportedOperationException":
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
async function deserializeAws_json1_1DeleteApplicationVpcConfigurationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteApplicationVpcConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteApplicationVpcConfigurationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteApplicationVpcConfigurationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteApplicationVpcConfigurationCommand = deserializeAws_json1_1DeleteApplicationVpcConfigurationCommand;
async function deserializeAws_json1_1DeleteApplicationVpcConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.kinesis.analytics.v20180523#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.analytics.v20180523#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesis.analytics.v20180523#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.analytics.v20180523#ResourceNotFoundException":
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
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.analytics.v20180523#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.kinesis.analytics.v20180523#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.analytics.v20180523#ResourceNotFoundException":
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
async function deserializeAws_json1_1DescribeApplicationSnapshotCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeApplicationSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeApplicationSnapshotResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeApplicationSnapshotResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeApplicationSnapshotCommand = deserializeAws_json1_1DescribeApplicationSnapshotCommand;
async function deserializeAws_json1_1DescribeApplicationSnapshotCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.analytics.v20180523#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.analytics.v20180523#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.kinesis.analytics.v20180523#UnsupportedOperationException":
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
        case "com.amazonaws.kinesis.analytics.v20180523#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.kinesis.analytics.v20180523#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceProvisionedThroughputExceededException":
        case "com.amazonaws.kinesis.analytics.v20180523#ResourceProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.kinesis.analytics.v20180523#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnableToDetectSchemaException":
        case "com.amazonaws.kinesis.analytics.v20180523#UnableToDetectSchemaException":
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
async function deserializeAws_json1_1ListApplicationSnapshotsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListApplicationSnapshotsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListApplicationSnapshotsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListApplicationSnapshotsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListApplicationSnapshotsCommand = deserializeAws_json1_1ListApplicationSnapshotsCommand;
async function deserializeAws_json1_1ListApplicationSnapshotsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.analytics.v20180523#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.kinesis.analytics.v20180523#UnsupportedOperationException":
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
        case "InvalidRequestException":
        case "com.amazonaws.kinesis.analytics.v20180523#InvalidRequestException":
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
        case "ConcurrentModificationException":
        case "com.amazonaws.kinesis.analytics.v20180523#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.analytics.v20180523#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.analytics.v20180523#ResourceNotFoundException":
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
        case "com.amazonaws.kinesis.analytics.v20180523#InvalidApplicationConfigurationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidApplicationConfigurationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.analytics.v20180523#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.kinesis.analytics.v20180523#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesis.analytics.v20180523#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.analytics.v20180523#ResourceNotFoundException":
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
        case "InvalidApplicationConfigurationException":
        case "com.amazonaws.kinesis.analytics.v20180523#InvalidApplicationConfigurationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidApplicationConfigurationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.analytics.v20180523#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.kinesis.analytics.v20180523#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesis.analytics.v20180523#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.analytics.v20180523#ResourceNotFoundException":
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
        case "com.amazonaws.kinesis.analytics.v20180523#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.analytics.v20180523#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesis.analytics.v20180523#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.analytics.v20180523#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTagsException":
        case "com.amazonaws.kinesis.analytics.v20180523#TooManyTagsException":
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
        case "com.amazonaws.kinesis.analytics.v20180523#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.analytics.v20180523#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesis.analytics.v20180523#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.analytics.v20180523#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTagsException":
        case "com.amazonaws.kinesis.analytics.v20180523#TooManyTagsException":
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
        case "com.amazonaws.kinesis.analytics.v20180523#CodeValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CodeValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.kinesis.analytics.v20180523#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidApplicationConfigurationException":
        case "com.amazonaws.kinesis.analytics.v20180523#InvalidApplicationConfigurationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidApplicationConfigurationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.analytics.v20180523#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.kinesis.analytics.v20180523#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesis.analytics.v20180523#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.analytics.v20180523#ResourceNotFoundException":
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
const deserializeAws_json1_1InvalidRequestExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidRequestException(body, context);
    const contents = Object.assign({ name: "InvalidRequestException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
const serializeAws_json1_1AddApplicationVpcConfigurationRequest = (input, context) => {
    const bodyParams = {};
    if (input.ApplicationName !== undefined) {
        bodyParams["ApplicationName"] = input.ApplicationName;
    }
    if (input.CurrentApplicationVersionId !== undefined) {
        bodyParams["CurrentApplicationVersionId"] =
            input.CurrentApplicationVersionId;
    }
    if (input.VpcConfiguration !== undefined) {
        bodyParams["VpcConfiguration"] = serializeAws_json1_1VpcConfiguration(input.VpcConfiguration, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ApplicationCodeConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.CodeContent !== undefined) {
        bodyParams["CodeContent"] = serializeAws_json1_1CodeContent(input.CodeContent, context);
    }
    if (input.CodeContentType !== undefined) {
        bodyParams["CodeContentType"] = input.CodeContentType;
    }
    return bodyParams;
};
const serializeAws_json1_1ApplicationCodeConfigurationUpdate = (input, context) => {
    const bodyParams = {};
    if (input.CodeContentTypeUpdate !== undefined) {
        bodyParams["CodeContentTypeUpdate"] = input.CodeContentTypeUpdate;
    }
    if (input.CodeContentUpdate !== undefined) {
        bodyParams["CodeContentUpdate"] = serializeAws_json1_1CodeContentUpdate(input.CodeContentUpdate, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ApplicationConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.ApplicationCodeConfiguration !== undefined) {
        bodyParams["ApplicationCodeConfiguration"] = serializeAws_json1_1ApplicationCodeConfiguration(input.ApplicationCodeConfiguration, context);
    }
    if (input.ApplicationSnapshotConfiguration !== undefined) {
        bodyParams["ApplicationSnapshotConfiguration"] = serializeAws_json1_1ApplicationSnapshotConfiguration(input.ApplicationSnapshotConfiguration, context);
    }
    if (input.EnvironmentProperties !== undefined) {
        bodyParams["EnvironmentProperties"] = serializeAws_json1_1EnvironmentProperties(input.EnvironmentProperties, context);
    }
    if (input.FlinkApplicationConfiguration !== undefined) {
        bodyParams["FlinkApplicationConfiguration"] = serializeAws_json1_1FlinkApplicationConfiguration(input.FlinkApplicationConfiguration, context);
    }
    if (input.SqlApplicationConfiguration !== undefined) {
        bodyParams["SqlApplicationConfiguration"] = serializeAws_json1_1SqlApplicationConfiguration(input.SqlApplicationConfiguration, context);
    }
    if (input.VpcConfigurations !== undefined) {
        bodyParams["VpcConfigurations"] = serializeAws_json1_1VpcConfigurations(input.VpcConfigurations, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ApplicationConfigurationUpdate = (input, context) => {
    const bodyParams = {};
    if (input.ApplicationCodeConfigurationUpdate !== undefined) {
        bodyParams["ApplicationCodeConfigurationUpdate"] = serializeAws_json1_1ApplicationCodeConfigurationUpdate(input.ApplicationCodeConfigurationUpdate, context);
    }
    if (input.ApplicationSnapshotConfigurationUpdate !== undefined) {
        bodyParams["ApplicationSnapshotConfigurationUpdate"] = serializeAws_json1_1ApplicationSnapshotConfigurationUpdate(input.ApplicationSnapshotConfigurationUpdate, context);
    }
    if (input.EnvironmentPropertyUpdates !== undefined) {
        bodyParams["EnvironmentPropertyUpdates"] = serializeAws_json1_1EnvironmentPropertyUpdates(input.EnvironmentPropertyUpdates, context);
    }
    if (input.FlinkApplicationConfigurationUpdate !== undefined) {
        bodyParams["FlinkApplicationConfigurationUpdate"] = serializeAws_json1_1FlinkApplicationConfigurationUpdate(input.FlinkApplicationConfigurationUpdate, context);
    }
    if (input.SqlApplicationConfigurationUpdate !== undefined) {
        bodyParams["SqlApplicationConfigurationUpdate"] = serializeAws_json1_1SqlApplicationConfigurationUpdate(input.SqlApplicationConfigurationUpdate, context);
    }
    if (input.VpcConfigurationUpdates !== undefined) {
        bodyParams["VpcConfigurationUpdates"] = serializeAws_json1_1VpcConfigurationUpdates(input.VpcConfigurationUpdates, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ApplicationRestoreConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.ApplicationRestoreType !== undefined) {
        bodyParams["ApplicationRestoreType"] = input.ApplicationRestoreType;
    }
    if (input.SnapshotName !== undefined) {
        bodyParams["SnapshotName"] = input.SnapshotName;
    }
    return bodyParams;
};
const serializeAws_json1_1ApplicationSnapshotConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.SnapshotsEnabled !== undefined) {
        bodyParams["SnapshotsEnabled"] = input.SnapshotsEnabled;
    }
    return bodyParams;
};
const serializeAws_json1_1ApplicationSnapshotConfigurationUpdate = (input, context) => {
    const bodyParams = {};
    if (input.SnapshotsEnabledUpdate !== undefined) {
        bodyParams["SnapshotsEnabledUpdate"] = input.SnapshotsEnabledUpdate;
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
const serializeAws_json1_1CheckpointConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.CheckpointInterval !== undefined) {
        bodyParams["CheckpointInterval"] = input.CheckpointInterval;
    }
    if (input.CheckpointingEnabled !== undefined) {
        bodyParams["CheckpointingEnabled"] = input.CheckpointingEnabled;
    }
    if (input.ConfigurationType !== undefined) {
        bodyParams["ConfigurationType"] = input.ConfigurationType;
    }
    if (input.MinPauseBetweenCheckpoints !== undefined) {
        bodyParams["MinPauseBetweenCheckpoints"] = input.MinPauseBetweenCheckpoints;
    }
    return bodyParams;
};
const serializeAws_json1_1CheckpointConfigurationUpdate = (input, context) => {
    const bodyParams = {};
    if (input.CheckpointIntervalUpdate !== undefined) {
        bodyParams["CheckpointIntervalUpdate"] = input.CheckpointIntervalUpdate;
    }
    if (input.CheckpointingEnabledUpdate !== undefined) {
        bodyParams["CheckpointingEnabledUpdate"] = input.CheckpointingEnabledUpdate;
    }
    if (input.ConfigurationTypeUpdate !== undefined) {
        bodyParams["ConfigurationTypeUpdate"] = input.ConfigurationTypeUpdate;
    }
    if (input.MinPauseBetweenCheckpointsUpdate !== undefined) {
        bodyParams["MinPauseBetweenCheckpointsUpdate"] =
            input.MinPauseBetweenCheckpointsUpdate;
    }
    return bodyParams;
};
const serializeAws_json1_1CloudWatchLoggingOption = (input, context) => {
    const bodyParams = {};
    if (input.LogStreamARN !== undefined) {
        bodyParams["LogStreamARN"] = input.LogStreamARN;
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
const serializeAws_json1_1CodeContent = (input, context) => {
    const bodyParams = {};
    if (input.S3ContentLocation !== undefined) {
        bodyParams["S3ContentLocation"] = serializeAws_json1_1S3ContentLocation(input.S3ContentLocation, context);
    }
    if (input.TextContent !== undefined) {
        bodyParams["TextContent"] = input.TextContent;
    }
    if (input.ZipFileContent !== undefined) {
        bodyParams["ZipFileContent"] = Buffer.from(input.ZipFileContent).toString("utf-8");
    }
    return bodyParams;
};
const serializeAws_json1_1CodeContentUpdate = (input, context) => {
    const bodyParams = {};
    if (input.S3ContentLocationUpdate !== undefined) {
        bodyParams["S3ContentLocationUpdate"] = serializeAws_json1_1S3ContentLocationUpdate(input.S3ContentLocationUpdate, context);
    }
    if (input.TextContentUpdate !== undefined) {
        bodyParams["TextContentUpdate"] = input.TextContentUpdate;
    }
    if (input.ZipFileContentUpdate !== undefined) {
        bodyParams["ZipFileContentUpdate"] = Buffer.from(input.ZipFileContentUpdate).toString("utf-8");
    }
    return bodyParams;
};
const serializeAws_json1_1CreateApplicationRequest = (input, context) => {
    const bodyParams = {};
    if (input.ApplicationConfiguration !== undefined) {
        bodyParams["ApplicationConfiguration"] = serializeAws_json1_1ApplicationConfiguration(input.ApplicationConfiguration, context);
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
    if (input.RuntimeEnvironment !== undefined) {
        bodyParams["RuntimeEnvironment"] = input.RuntimeEnvironment;
    }
    if (input.ServiceExecutionRole !== undefined) {
        bodyParams["ServiceExecutionRole"] = input.ServiceExecutionRole;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1Tags(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateApplicationSnapshotRequest = (input, context) => {
    const bodyParams = {};
    if (input.ApplicationName !== undefined) {
        bodyParams["ApplicationName"] = input.ApplicationName;
    }
    if (input.SnapshotName !== undefined) {
        bodyParams["SnapshotName"] = input.SnapshotName;
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
const serializeAws_json1_1DeleteApplicationSnapshotRequest = (input, context) => {
    const bodyParams = {};
    if (input.ApplicationName !== undefined) {
        bodyParams["ApplicationName"] = input.ApplicationName;
    }
    if (input.SnapshotCreationTimestamp !== undefined) {
        bodyParams["SnapshotCreationTimestamp"] = Math.round(input.SnapshotCreationTimestamp.getTime() / 1000);
    }
    if (input.SnapshotName !== undefined) {
        bodyParams["SnapshotName"] = input.SnapshotName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteApplicationVpcConfigurationRequest = (input, context) => {
    const bodyParams = {};
    if (input.ApplicationName !== undefined) {
        bodyParams["ApplicationName"] = input.ApplicationName;
    }
    if (input.CurrentApplicationVersionId !== undefined) {
        bodyParams["CurrentApplicationVersionId"] =
            input.CurrentApplicationVersionId;
    }
    if (input.VpcConfigurationId !== undefined) {
        bodyParams["VpcConfigurationId"] = input.VpcConfigurationId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeApplicationRequest = (input, context) => {
    const bodyParams = {};
    if (input.ApplicationName !== undefined) {
        bodyParams["ApplicationName"] = input.ApplicationName;
    }
    if (input.IncludeAdditionalDetails !== undefined) {
        bodyParams["IncludeAdditionalDetails"] = input.IncludeAdditionalDetails;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeApplicationSnapshotRequest = (input, context) => {
    const bodyParams = {};
    if (input.ApplicationName !== undefined) {
        bodyParams["ApplicationName"] = input.ApplicationName;
    }
    if (input.SnapshotName !== undefined) {
        bodyParams["SnapshotName"] = input.SnapshotName;
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
    if (input.S3Configuration !== undefined) {
        bodyParams["S3Configuration"] = serializeAws_json1_1S3Configuration(input.S3Configuration, context);
    }
    if (input.ServiceExecutionRole !== undefined) {
        bodyParams["ServiceExecutionRole"] = input.ServiceExecutionRole;
    }
    return bodyParams;
};
const serializeAws_json1_1EnvironmentProperties = (input, context) => {
    const bodyParams = {};
    if (input.PropertyGroups !== undefined) {
        bodyParams["PropertyGroups"] = serializeAws_json1_1PropertyGroups(input.PropertyGroups, context);
    }
    return bodyParams;
};
const serializeAws_json1_1EnvironmentPropertyUpdates = (input, context) => {
    const bodyParams = {};
    if (input.PropertyGroups !== undefined) {
        bodyParams["PropertyGroups"] = serializeAws_json1_1PropertyGroups(input.PropertyGroups, context);
    }
    return bodyParams;
};
const serializeAws_json1_1FlinkApplicationConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.CheckpointConfiguration !== undefined) {
        bodyParams["CheckpointConfiguration"] = serializeAws_json1_1CheckpointConfiguration(input.CheckpointConfiguration, context);
    }
    if (input.MonitoringConfiguration !== undefined) {
        bodyParams["MonitoringConfiguration"] = serializeAws_json1_1MonitoringConfiguration(input.MonitoringConfiguration, context);
    }
    if (input.ParallelismConfiguration !== undefined) {
        bodyParams["ParallelismConfiguration"] = serializeAws_json1_1ParallelismConfiguration(input.ParallelismConfiguration, context);
    }
    return bodyParams;
};
const serializeAws_json1_1FlinkApplicationConfigurationUpdate = (input, context) => {
    const bodyParams = {};
    if (input.CheckpointConfigurationUpdate !== undefined) {
        bodyParams["CheckpointConfigurationUpdate"] = serializeAws_json1_1CheckpointConfigurationUpdate(input.CheckpointConfigurationUpdate, context);
    }
    if (input.MonitoringConfigurationUpdate !== undefined) {
        bodyParams["MonitoringConfigurationUpdate"] = serializeAws_json1_1MonitoringConfigurationUpdate(input.MonitoringConfigurationUpdate, context);
    }
    if (input.ParallelismConfigurationUpdate !== undefined) {
        bodyParams["ParallelismConfigurationUpdate"] = serializeAws_json1_1ParallelismConfigurationUpdate(input.ParallelismConfigurationUpdate, context);
    }
    return bodyParams;
};
const serializeAws_json1_1FlinkRunConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.AllowNonRestoredState !== undefined) {
        bodyParams["AllowNonRestoredState"] = input.AllowNonRestoredState;
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
const serializeAws_json1_1InputLambdaProcessor = (input, context) => {
    const bodyParams = {};
    if (input.ResourceARN !== undefined) {
        bodyParams["ResourceARN"] = input.ResourceARN;
    }
    return bodyParams;
};
const serializeAws_json1_1InputLambdaProcessorUpdate = (input, context) => {
    const bodyParams = {};
    if (input.ResourceARNUpdate !== undefined) {
        bodyParams["ResourceARNUpdate"] = input.ResourceARNUpdate;
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
    return bodyParams;
};
const serializeAws_json1_1KinesisFirehoseInputUpdate = (input, context) => {
    const bodyParams = {};
    if (input.ResourceARNUpdate !== undefined) {
        bodyParams["ResourceARNUpdate"] = input.ResourceARNUpdate;
    }
    return bodyParams;
};
const serializeAws_json1_1KinesisFirehoseOutput = (input, context) => {
    const bodyParams = {};
    if (input.ResourceARN !== undefined) {
        bodyParams["ResourceARN"] = input.ResourceARN;
    }
    return bodyParams;
};
const serializeAws_json1_1KinesisFirehoseOutputUpdate = (input, context) => {
    const bodyParams = {};
    if (input.ResourceARNUpdate !== undefined) {
        bodyParams["ResourceARNUpdate"] = input.ResourceARNUpdate;
    }
    return bodyParams;
};
const serializeAws_json1_1KinesisStreamsInput = (input, context) => {
    const bodyParams = {};
    if (input.ResourceARN !== undefined) {
        bodyParams["ResourceARN"] = input.ResourceARN;
    }
    return bodyParams;
};
const serializeAws_json1_1KinesisStreamsInputUpdate = (input, context) => {
    const bodyParams = {};
    if (input.ResourceARNUpdate !== undefined) {
        bodyParams["ResourceARNUpdate"] = input.ResourceARNUpdate;
    }
    return bodyParams;
};
const serializeAws_json1_1KinesisStreamsOutput = (input, context) => {
    const bodyParams = {};
    if (input.ResourceARN !== undefined) {
        bodyParams["ResourceARN"] = input.ResourceARN;
    }
    return bodyParams;
};
const serializeAws_json1_1KinesisStreamsOutputUpdate = (input, context) => {
    const bodyParams = {};
    if (input.ResourceARNUpdate !== undefined) {
        bodyParams["ResourceARNUpdate"] = input.ResourceARNUpdate;
    }
    return bodyParams;
};
const serializeAws_json1_1LambdaOutput = (input, context) => {
    const bodyParams = {};
    if (input.ResourceARN !== undefined) {
        bodyParams["ResourceARN"] = input.ResourceARN;
    }
    return bodyParams;
};
const serializeAws_json1_1LambdaOutputUpdate = (input, context) => {
    const bodyParams = {};
    if (input.ResourceARNUpdate !== undefined) {
        bodyParams["ResourceARNUpdate"] = input.ResourceARNUpdate;
    }
    return bodyParams;
};
const serializeAws_json1_1ListApplicationSnapshotsRequest = (input, context) => {
    const bodyParams = {};
    if (input.ApplicationName !== undefined) {
        bodyParams["ApplicationName"] = input.ApplicationName;
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListApplicationsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
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
const serializeAws_json1_1MonitoringConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.ConfigurationType !== undefined) {
        bodyParams["ConfigurationType"] = input.ConfigurationType;
    }
    if (input.LogLevel !== undefined) {
        bodyParams["LogLevel"] = input.LogLevel;
    }
    if (input.MetricsLevel !== undefined) {
        bodyParams["MetricsLevel"] = input.MetricsLevel;
    }
    return bodyParams;
};
const serializeAws_json1_1MonitoringConfigurationUpdate = (input, context) => {
    const bodyParams = {};
    if (input.ConfigurationTypeUpdate !== undefined) {
        bodyParams["ConfigurationTypeUpdate"] = input.ConfigurationTypeUpdate;
    }
    if (input.LogLevelUpdate !== undefined) {
        bodyParams["LogLevelUpdate"] = input.LogLevelUpdate;
    }
    if (input.MetricsLevelUpdate !== undefined) {
        bodyParams["MetricsLevelUpdate"] = input.MetricsLevelUpdate;
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
const serializeAws_json1_1ParallelismConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.AutoScalingEnabled !== undefined) {
        bodyParams["AutoScalingEnabled"] = input.AutoScalingEnabled;
    }
    if (input.ConfigurationType !== undefined) {
        bodyParams["ConfigurationType"] = input.ConfigurationType;
    }
    if (input.Parallelism !== undefined) {
        bodyParams["Parallelism"] = input.Parallelism;
    }
    if (input.ParallelismPerKPU !== undefined) {
        bodyParams["ParallelismPerKPU"] = input.ParallelismPerKPU;
    }
    return bodyParams;
};
const serializeAws_json1_1ParallelismConfigurationUpdate = (input, context) => {
    const bodyParams = {};
    if (input.AutoScalingEnabledUpdate !== undefined) {
        bodyParams["AutoScalingEnabledUpdate"] = input.AutoScalingEnabledUpdate;
    }
    if (input.ConfigurationTypeUpdate !== undefined) {
        bodyParams["ConfigurationTypeUpdate"] = input.ConfigurationTypeUpdate;
    }
    if (input.ParallelismPerKPUUpdate !== undefined) {
        bodyParams["ParallelismPerKPUUpdate"] = input.ParallelismPerKPUUpdate;
    }
    if (input.ParallelismUpdate !== undefined) {
        bodyParams["ParallelismUpdate"] = input.ParallelismUpdate;
    }
    return bodyParams;
};
const serializeAws_json1_1PropertyGroup = (input, context) => {
    const bodyParams = {};
    if (input.PropertyGroupId !== undefined) {
        bodyParams["PropertyGroupId"] = input.PropertyGroupId;
    }
    if (input.PropertyMap !== undefined) {
        bodyParams["PropertyMap"] = serializeAws_json1_1PropertyMap(input.PropertyMap, context);
    }
    return bodyParams;
};
const serializeAws_json1_1PropertyGroups = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1PropertyGroup(entry, context));
    }
    return contents;
};
const serializeAws_json1_1PropertyMap = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
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
const serializeAws_json1_1ReferenceDataSources = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ReferenceDataSource(entry, context));
    }
    return contents;
};
const serializeAws_json1_1RunConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.ApplicationRestoreConfiguration !== undefined) {
        bodyParams["ApplicationRestoreConfiguration"] = serializeAws_json1_1ApplicationRestoreConfiguration(input.ApplicationRestoreConfiguration, context);
    }
    if (input.FlinkRunConfiguration !== undefined) {
        bodyParams["FlinkRunConfiguration"] = serializeAws_json1_1FlinkRunConfiguration(input.FlinkRunConfiguration, context);
    }
    if (input.SqlRunConfigurations !== undefined) {
        bodyParams["SqlRunConfigurations"] = serializeAws_json1_1SqlRunConfigurations(input.SqlRunConfigurations, context);
    }
    return bodyParams;
};
const serializeAws_json1_1RunConfigurationUpdate = (input, context) => {
    const bodyParams = {};
    if (input.ApplicationRestoreConfiguration !== undefined) {
        bodyParams["ApplicationRestoreConfiguration"] = serializeAws_json1_1ApplicationRestoreConfiguration(input.ApplicationRestoreConfiguration, context);
    }
    if (input.FlinkRunConfiguration !== undefined) {
        bodyParams["FlinkRunConfiguration"] = serializeAws_json1_1FlinkRunConfiguration(input.FlinkRunConfiguration, context);
    }
    return bodyParams;
};
const serializeAws_json1_1S3Configuration = (input, context) => {
    const bodyParams = {};
    if (input.BucketARN !== undefined) {
        bodyParams["BucketARN"] = input.BucketARN;
    }
    if (input.FileKey !== undefined) {
        bodyParams["FileKey"] = input.FileKey;
    }
    return bodyParams;
};
const serializeAws_json1_1S3ContentLocation = (input, context) => {
    const bodyParams = {};
    if (input.BucketARN !== undefined) {
        bodyParams["BucketARN"] = input.BucketARN;
    }
    if (input.FileKey !== undefined) {
        bodyParams["FileKey"] = input.FileKey;
    }
    if (input.ObjectVersion !== undefined) {
        bodyParams["ObjectVersion"] = input.ObjectVersion;
    }
    return bodyParams;
};
const serializeAws_json1_1S3ContentLocationUpdate = (input, context) => {
    const bodyParams = {};
    if (input.BucketARNUpdate !== undefined) {
        bodyParams["BucketARNUpdate"] = input.BucketARNUpdate;
    }
    if (input.FileKeyUpdate !== undefined) {
        bodyParams["FileKeyUpdate"] = input.FileKeyUpdate;
    }
    if (input.ObjectVersionUpdate !== undefined) {
        bodyParams["ObjectVersionUpdate"] = input.ObjectVersionUpdate;
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
    return bodyParams;
};
const serializeAws_json1_1SecurityGroupIds = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
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
const serializeAws_json1_1SqlApplicationConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.Inputs !== undefined) {
        bodyParams["Inputs"] = serializeAws_json1_1Inputs(input.Inputs, context);
    }
    if (input.Outputs !== undefined) {
        bodyParams["Outputs"] = serializeAws_json1_1Outputs(input.Outputs, context);
    }
    if (input.ReferenceDataSources !== undefined) {
        bodyParams["ReferenceDataSources"] = serializeAws_json1_1ReferenceDataSources(input.ReferenceDataSources, context);
    }
    return bodyParams;
};
const serializeAws_json1_1SqlApplicationConfigurationUpdate = (input, context) => {
    const bodyParams = {};
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
const serializeAws_json1_1SqlRunConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.InputId !== undefined) {
        bodyParams["InputId"] = input.InputId;
    }
    if (input.InputStartingPositionConfiguration !== undefined) {
        bodyParams["InputStartingPositionConfiguration"] = serializeAws_json1_1InputStartingPositionConfiguration(input.InputStartingPositionConfiguration, context);
    }
    return bodyParams;
};
const serializeAws_json1_1SqlRunConfigurations = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1SqlRunConfiguration(entry, context));
    }
    return contents;
};
const serializeAws_json1_1StartApplicationRequest = (input, context) => {
    const bodyParams = {};
    if (input.ApplicationName !== undefined) {
        bodyParams["ApplicationName"] = input.ApplicationName;
    }
    if (input.RunConfiguration !== undefined) {
        bodyParams["RunConfiguration"] = serializeAws_json1_1RunConfiguration(input.RunConfiguration, context);
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
    if (input.ApplicationConfigurationUpdate !== undefined) {
        bodyParams["ApplicationConfigurationUpdate"] = serializeAws_json1_1ApplicationConfigurationUpdate(input.ApplicationConfigurationUpdate, context);
    }
    if (input.ApplicationName !== undefined) {
        bodyParams["ApplicationName"] = input.ApplicationName;
    }
    if (input.CloudWatchLoggingOptionUpdates !== undefined) {
        bodyParams["CloudWatchLoggingOptionUpdates"] = serializeAws_json1_1CloudWatchLoggingOptionUpdates(input.CloudWatchLoggingOptionUpdates, context);
    }
    if (input.CurrentApplicationVersionId !== undefined) {
        bodyParams["CurrentApplicationVersionId"] =
            input.CurrentApplicationVersionId;
    }
    if (input.RunConfigurationUpdate !== undefined) {
        bodyParams["RunConfigurationUpdate"] = serializeAws_json1_1RunConfigurationUpdate(input.RunConfigurationUpdate, context);
    }
    if (input.ServiceExecutionRoleUpdate !== undefined) {
        bodyParams["ServiceExecutionRoleUpdate"] = input.ServiceExecutionRoleUpdate;
    }
    return bodyParams;
};
const serializeAws_json1_1VpcConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.SecurityGroupIds !== undefined) {
        bodyParams["SecurityGroupIds"] = serializeAws_json1_1SecurityGroupIds(input.SecurityGroupIds, context);
    }
    if (input.SubnetIds !== undefined) {
        bodyParams["SubnetIds"] = serializeAws_json1_1SubnetIds(input.SubnetIds, context);
    }
    return bodyParams;
};
const serializeAws_json1_1VpcConfigurationUpdate = (input, context) => {
    const bodyParams = {};
    if (input.SecurityGroupIdUpdates !== undefined) {
        bodyParams["SecurityGroupIdUpdates"] = serializeAws_json1_1SecurityGroupIds(input.SecurityGroupIdUpdates, context);
    }
    if (input.SubnetIdUpdates !== undefined) {
        bodyParams["SubnetIdUpdates"] = serializeAws_json1_1SubnetIds(input.SubnetIdUpdates, context);
    }
    if (input.VpcConfigurationId !== undefined) {
        bodyParams["VpcConfigurationId"] = input.VpcConfigurationId;
    }
    return bodyParams;
};
const serializeAws_json1_1VpcConfigurationUpdates = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1VpcConfigurationUpdate(entry, context));
    }
    return contents;
};
const serializeAws_json1_1VpcConfigurations = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1VpcConfiguration(entry, context));
    }
    return contents;
};
const deserializeAws_json1_1AddApplicationCloudWatchLoggingOptionResponse = (output, context) => {
    let contents = {
        __type: "AddApplicationCloudWatchLoggingOptionResponse",
        ApplicationARN: undefined,
        ApplicationVersionId: undefined,
        CloudWatchLoggingOptionDescriptions: undefined
    };
    if (output.ApplicationARN !== undefined && output.ApplicationARN !== null) {
        contents.ApplicationARN = output.ApplicationARN;
    }
    if (output.ApplicationVersionId !== undefined &&
        output.ApplicationVersionId !== null) {
        contents.ApplicationVersionId = output.ApplicationVersionId;
    }
    if (output.CloudWatchLoggingOptionDescriptions !== undefined &&
        output.CloudWatchLoggingOptionDescriptions !== null) {
        contents.CloudWatchLoggingOptionDescriptions = deserializeAws_json1_1CloudWatchLoggingOptionDescriptions(output.CloudWatchLoggingOptionDescriptions, context);
    }
    return contents;
};
const deserializeAws_json1_1AddApplicationInputProcessingConfigurationResponse = (output, context) => {
    let contents = {
        __type: "AddApplicationInputProcessingConfigurationResponse",
        ApplicationARN: undefined,
        ApplicationVersionId: undefined,
        InputId: undefined,
        InputProcessingConfigurationDescription: undefined
    };
    if (output.ApplicationARN !== undefined && output.ApplicationARN !== null) {
        contents.ApplicationARN = output.ApplicationARN;
    }
    if (output.ApplicationVersionId !== undefined &&
        output.ApplicationVersionId !== null) {
        contents.ApplicationVersionId = output.ApplicationVersionId;
    }
    if (output.InputId !== undefined && output.InputId !== null) {
        contents.InputId = output.InputId;
    }
    if (output.InputProcessingConfigurationDescription !== undefined &&
        output.InputProcessingConfigurationDescription !== null) {
        contents.InputProcessingConfigurationDescription = deserializeAws_json1_1InputProcessingConfigurationDescription(output.InputProcessingConfigurationDescription, context);
    }
    return contents;
};
const deserializeAws_json1_1AddApplicationInputResponse = (output, context) => {
    let contents = {
        __type: "AddApplicationInputResponse",
        ApplicationARN: undefined,
        ApplicationVersionId: undefined,
        InputDescriptions: undefined
    };
    if (output.ApplicationARN !== undefined && output.ApplicationARN !== null) {
        contents.ApplicationARN = output.ApplicationARN;
    }
    if (output.ApplicationVersionId !== undefined &&
        output.ApplicationVersionId !== null) {
        contents.ApplicationVersionId = output.ApplicationVersionId;
    }
    if (output.InputDescriptions !== undefined &&
        output.InputDescriptions !== null) {
        contents.InputDescriptions = deserializeAws_json1_1InputDescriptions(output.InputDescriptions, context);
    }
    return contents;
};
const deserializeAws_json1_1AddApplicationOutputResponse = (output, context) => {
    let contents = {
        __type: "AddApplicationOutputResponse",
        ApplicationARN: undefined,
        ApplicationVersionId: undefined,
        OutputDescriptions: undefined
    };
    if (output.ApplicationARN !== undefined && output.ApplicationARN !== null) {
        contents.ApplicationARN = output.ApplicationARN;
    }
    if (output.ApplicationVersionId !== undefined &&
        output.ApplicationVersionId !== null) {
        contents.ApplicationVersionId = output.ApplicationVersionId;
    }
    if (output.OutputDescriptions !== undefined &&
        output.OutputDescriptions !== null) {
        contents.OutputDescriptions = deserializeAws_json1_1OutputDescriptions(output.OutputDescriptions, context);
    }
    return contents;
};
const deserializeAws_json1_1AddApplicationReferenceDataSourceResponse = (output, context) => {
    let contents = {
        __type: "AddApplicationReferenceDataSourceResponse",
        ApplicationARN: undefined,
        ApplicationVersionId: undefined,
        ReferenceDataSourceDescriptions: undefined
    };
    if (output.ApplicationARN !== undefined && output.ApplicationARN !== null) {
        contents.ApplicationARN = output.ApplicationARN;
    }
    if (output.ApplicationVersionId !== undefined &&
        output.ApplicationVersionId !== null) {
        contents.ApplicationVersionId = output.ApplicationVersionId;
    }
    if (output.ReferenceDataSourceDescriptions !== undefined &&
        output.ReferenceDataSourceDescriptions !== null) {
        contents.ReferenceDataSourceDescriptions = deserializeAws_json1_1ReferenceDataSourceDescriptions(output.ReferenceDataSourceDescriptions, context);
    }
    return contents;
};
const deserializeAws_json1_1AddApplicationVpcConfigurationResponse = (output, context) => {
    let contents = {
        __type: "AddApplicationVpcConfigurationResponse",
        ApplicationARN: undefined,
        ApplicationVersionId: undefined,
        VpcConfigurationDescription: undefined
    };
    if (output.ApplicationARN !== undefined && output.ApplicationARN !== null) {
        contents.ApplicationARN = output.ApplicationARN;
    }
    if (output.ApplicationVersionId !== undefined &&
        output.ApplicationVersionId !== null) {
        contents.ApplicationVersionId = output.ApplicationVersionId;
    }
    if (output.VpcConfigurationDescription !== undefined &&
        output.VpcConfigurationDescription !== null) {
        contents.VpcConfigurationDescription = deserializeAws_json1_1VpcConfigurationDescription(output.VpcConfigurationDescription, context);
    }
    return contents;
};
const deserializeAws_json1_1ApplicationCodeConfigurationDescription = (output, context) => {
    let contents = {
        __type: "ApplicationCodeConfigurationDescription",
        CodeContentDescription: undefined,
        CodeContentType: undefined
    };
    if (output.CodeContentDescription !== undefined &&
        output.CodeContentDescription !== null) {
        contents.CodeContentDescription = deserializeAws_json1_1CodeContentDescription(output.CodeContentDescription, context);
    }
    if (output.CodeContentType !== undefined && output.CodeContentType !== null) {
        contents.CodeContentType = output.CodeContentType;
    }
    return contents;
};
const deserializeAws_json1_1ApplicationConfigurationDescription = (output, context) => {
    let contents = {
        __type: "ApplicationConfigurationDescription",
        ApplicationCodeConfigurationDescription: undefined,
        ApplicationSnapshotConfigurationDescription: undefined,
        EnvironmentPropertyDescriptions: undefined,
        FlinkApplicationConfigurationDescription: undefined,
        RunConfigurationDescription: undefined,
        SqlApplicationConfigurationDescription: undefined,
        VpcConfigurationDescriptions: undefined
    };
    if (output.ApplicationCodeConfigurationDescription !== undefined &&
        output.ApplicationCodeConfigurationDescription !== null) {
        contents.ApplicationCodeConfigurationDescription = deserializeAws_json1_1ApplicationCodeConfigurationDescription(output.ApplicationCodeConfigurationDescription, context);
    }
    if (output.ApplicationSnapshotConfigurationDescription !== undefined &&
        output.ApplicationSnapshotConfigurationDescription !== null) {
        contents.ApplicationSnapshotConfigurationDescription = deserializeAws_json1_1ApplicationSnapshotConfigurationDescription(output.ApplicationSnapshotConfigurationDescription, context);
    }
    if (output.EnvironmentPropertyDescriptions !== undefined &&
        output.EnvironmentPropertyDescriptions !== null) {
        contents.EnvironmentPropertyDescriptions = deserializeAws_json1_1EnvironmentPropertyDescriptions(output.EnvironmentPropertyDescriptions, context);
    }
    if (output.FlinkApplicationConfigurationDescription !== undefined &&
        output.FlinkApplicationConfigurationDescription !== null) {
        contents.FlinkApplicationConfigurationDescription = deserializeAws_json1_1FlinkApplicationConfigurationDescription(output.FlinkApplicationConfigurationDescription, context);
    }
    if (output.RunConfigurationDescription !== undefined &&
        output.RunConfigurationDescription !== null) {
        contents.RunConfigurationDescription = deserializeAws_json1_1RunConfigurationDescription(output.RunConfigurationDescription, context);
    }
    if (output.SqlApplicationConfigurationDescription !== undefined &&
        output.SqlApplicationConfigurationDescription !== null) {
        contents.SqlApplicationConfigurationDescription = deserializeAws_json1_1SqlApplicationConfigurationDescription(output.SqlApplicationConfigurationDescription, context);
    }
    if (output.VpcConfigurationDescriptions !== undefined &&
        output.VpcConfigurationDescriptions !== null) {
        contents.VpcConfigurationDescriptions = deserializeAws_json1_1VpcConfigurationDescriptions(output.VpcConfigurationDescriptions, context);
    }
    return contents;
};
const deserializeAws_json1_1ApplicationDetail = (output, context) => {
    let contents = {
        __type: "ApplicationDetail",
        ApplicationARN: undefined,
        ApplicationConfigurationDescription: undefined,
        ApplicationDescription: undefined,
        ApplicationName: undefined,
        ApplicationStatus: undefined,
        ApplicationVersionId: undefined,
        CloudWatchLoggingOptionDescriptions: undefined,
        CreateTimestamp: undefined,
        LastUpdateTimestamp: undefined,
        RuntimeEnvironment: undefined,
        ServiceExecutionRole: undefined
    };
    if (output.ApplicationARN !== undefined && output.ApplicationARN !== null) {
        contents.ApplicationARN = output.ApplicationARN;
    }
    if (output.ApplicationConfigurationDescription !== undefined &&
        output.ApplicationConfigurationDescription !== null) {
        contents.ApplicationConfigurationDescription = deserializeAws_json1_1ApplicationConfigurationDescription(output.ApplicationConfigurationDescription, context);
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
    if (output.LastUpdateTimestamp !== undefined &&
        output.LastUpdateTimestamp !== null) {
        contents.LastUpdateTimestamp = new Date(Math.round(output.LastUpdateTimestamp * 1000));
    }
    if (output.RuntimeEnvironment !== undefined &&
        output.RuntimeEnvironment !== null) {
        contents.RuntimeEnvironment = output.RuntimeEnvironment;
    }
    if (output.ServiceExecutionRole !== undefined &&
        output.ServiceExecutionRole !== null) {
        contents.ServiceExecutionRole = output.ServiceExecutionRole;
    }
    return contents;
};
const deserializeAws_json1_1ApplicationRestoreConfiguration = (output, context) => {
    let contents = {
        __type: "ApplicationRestoreConfiguration",
        ApplicationRestoreType: undefined,
        SnapshotName: undefined
    };
    if (output.ApplicationRestoreType !== undefined &&
        output.ApplicationRestoreType !== null) {
        contents.ApplicationRestoreType = output.ApplicationRestoreType;
    }
    if (output.SnapshotName !== undefined && output.SnapshotName !== null) {
        contents.SnapshotName = output.SnapshotName;
    }
    return contents;
};
const deserializeAws_json1_1ApplicationSnapshotConfigurationDescription = (output, context) => {
    let contents = {
        __type: "ApplicationSnapshotConfigurationDescription",
        SnapshotsEnabled: undefined
    };
    if (output.SnapshotsEnabled !== undefined &&
        output.SnapshotsEnabled !== null) {
        contents.SnapshotsEnabled = output.SnapshotsEnabled;
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
        ApplicationStatus: undefined,
        ApplicationVersionId: undefined,
        RuntimeEnvironment: undefined
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
    if (output.ApplicationVersionId !== undefined &&
        output.ApplicationVersionId !== null) {
        contents.ApplicationVersionId = output.ApplicationVersionId;
    }
    if (output.RuntimeEnvironment !== undefined &&
        output.RuntimeEnvironment !== null) {
        contents.RuntimeEnvironment = output.RuntimeEnvironment;
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
const deserializeAws_json1_1CheckpointConfigurationDescription = (output, context) => {
    let contents = {
        __type: "CheckpointConfigurationDescription",
        CheckpointInterval: undefined,
        CheckpointingEnabled: undefined,
        ConfigurationType: undefined,
        MinPauseBetweenCheckpoints: undefined
    };
    if (output.CheckpointInterval !== undefined &&
        output.CheckpointInterval !== null) {
        contents.CheckpointInterval = output.CheckpointInterval;
    }
    if (output.CheckpointingEnabled !== undefined &&
        output.CheckpointingEnabled !== null) {
        contents.CheckpointingEnabled = output.CheckpointingEnabled;
    }
    if (output.ConfigurationType !== undefined &&
        output.ConfigurationType !== null) {
        contents.ConfigurationType = output.ConfigurationType;
    }
    if (output.MinPauseBetweenCheckpoints !== undefined &&
        output.MinPauseBetweenCheckpoints !== null) {
        contents.MinPauseBetweenCheckpoints = output.MinPauseBetweenCheckpoints;
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
const deserializeAws_json1_1CodeContentDescription = (output, context) => {
    let contents = {
        __type: "CodeContentDescription",
        CodeMD5: undefined,
        CodeSize: undefined,
        S3ApplicationCodeLocationDescription: undefined,
        TextContent: undefined
    };
    if (output.CodeMD5 !== undefined && output.CodeMD5 !== null) {
        contents.CodeMD5 = output.CodeMD5;
    }
    if (output.CodeSize !== undefined && output.CodeSize !== null) {
        contents.CodeSize = output.CodeSize;
    }
    if (output.S3ApplicationCodeLocationDescription !== undefined &&
        output.S3ApplicationCodeLocationDescription !== null) {
        contents.S3ApplicationCodeLocationDescription = deserializeAws_json1_1S3ApplicationCodeLocationDescription(output.S3ApplicationCodeLocationDescription, context);
    }
    if (output.TextContent !== undefined && output.TextContent !== null) {
        contents.TextContent = output.TextContent;
    }
    return contents;
};
const deserializeAws_json1_1CodeValidationException = (output, context) => {
    let contents = {
        __type: "CodeValidationException",
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
const deserializeAws_json1_1CreateApplicationResponse = (output, context) => {
    let contents = {
        __type: "CreateApplicationResponse",
        ApplicationDetail: undefined
    };
    if (output.ApplicationDetail !== undefined &&
        output.ApplicationDetail !== null) {
        contents.ApplicationDetail = deserializeAws_json1_1ApplicationDetail(output.ApplicationDetail, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateApplicationSnapshotResponse = (output, context) => {
    let contents = {
        __type: "CreateApplicationSnapshotResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionResponse = (output, context) => {
    let contents = {
        __type: "DeleteApplicationCloudWatchLoggingOptionResponse",
        ApplicationARN: undefined,
        ApplicationVersionId: undefined,
        CloudWatchLoggingOptionDescriptions: undefined
    };
    if (output.ApplicationARN !== undefined && output.ApplicationARN !== null) {
        contents.ApplicationARN = output.ApplicationARN;
    }
    if (output.ApplicationVersionId !== undefined &&
        output.ApplicationVersionId !== null) {
        contents.ApplicationVersionId = output.ApplicationVersionId;
    }
    if (output.CloudWatchLoggingOptionDescriptions !== undefined &&
        output.CloudWatchLoggingOptionDescriptions !== null) {
        contents.CloudWatchLoggingOptionDescriptions = deserializeAws_json1_1CloudWatchLoggingOptionDescriptions(output.CloudWatchLoggingOptionDescriptions, context);
    }
    return contents;
};
const deserializeAws_json1_1DeleteApplicationInputProcessingConfigurationResponse = (output, context) => {
    let contents = {
        __type: "DeleteApplicationInputProcessingConfigurationResponse",
        ApplicationARN: undefined,
        ApplicationVersionId: undefined
    };
    if (output.ApplicationARN !== undefined && output.ApplicationARN !== null) {
        contents.ApplicationARN = output.ApplicationARN;
    }
    if (output.ApplicationVersionId !== undefined &&
        output.ApplicationVersionId !== null) {
        contents.ApplicationVersionId = output.ApplicationVersionId;
    }
    return contents;
};
const deserializeAws_json1_1DeleteApplicationOutputResponse = (output, context) => {
    let contents = {
        __type: "DeleteApplicationOutputResponse",
        ApplicationARN: undefined,
        ApplicationVersionId: undefined
    };
    if (output.ApplicationARN !== undefined && output.ApplicationARN !== null) {
        contents.ApplicationARN = output.ApplicationARN;
    }
    if (output.ApplicationVersionId !== undefined &&
        output.ApplicationVersionId !== null) {
        contents.ApplicationVersionId = output.ApplicationVersionId;
    }
    return contents;
};
const deserializeAws_json1_1DeleteApplicationReferenceDataSourceResponse = (output, context) => {
    let contents = {
        __type: "DeleteApplicationReferenceDataSourceResponse",
        ApplicationARN: undefined,
        ApplicationVersionId: undefined
    };
    if (output.ApplicationARN !== undefined && output.ApplicationARN !== null) {
        contents.ApplicationARN = output.ApplicationARN;
    }
    if (output.ApplicationVersionId !== undefined &&
        output.ApplicationVersionId !== null) {
        contents.ApplicationVersionId = output.ApplicationVersionId;
    }
    return contents;
};
const deserializeAws_json1_1DeleteApplicationResponse = (output, context) => {
    let contents = {
        __type: "DeleteApplicationResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteApplicationSnapshotResponse = (output, context) => {
    let contents = {
        __type: "DeleteApplicationSnapshotResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteApplicationVpcConfigurationResponse = (output, context) => {
    let contents = {
        __type: "DeleteApplicationVpcConfigurationResponse",
        ApplicationARN: undefined,
        ApplicationVersionId: undefined
    };
    if (output.ApplicationARN !== undefined && output.ApplicationARN !== null) {
        contents.ApplicationARN = output.ApplicationARN;
    }
    if (output.ApplicationVersionId !== undefined &&
        output.ApplicationVersionId !== null) {
        contents.ApplicationVersionId = output.ApplicationVersionId;
    }
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
const deserializeAws_json1_1DescribeApplicationSnapshotResponse = (output, context) => {
    let contents = {
        __type: "DescribeApplicationSnapshotResponse",
        SnapshotDetails: undefined
    };
    if (output.SnapshotDetails !== undefined && output.SnapshotDetails !== null) {
        contents.SnapshotDetails = deserializeAws_json1_1SnapshotDetails(output.SnapshotDetails, context);
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
const deserializeAws_json1_1EnvironmentPropertyDescriptions = (output, context) => {
    let contents = {
        __type: "EnvironmentPropertyDescriptions",
        PropertyGroupDescriptions: undefined
    };
    if (output.PropertyGroupDescriptions !== undefined &&
        output.PropertyGroupDescriptions !== null) {
        contents.PropertyGroupDescriptions = deserializeAws_json1_1PropertyGroups(output.PropertyGroupDescriptions, context);
    }
    return contents;
};
const deserializeAws_json1_1FlinkApplicationConfigurationDescription = (output, context) => {
    let contents = {
        __type: "FlinkApplicationConfigurationDescription",
        CheckpointConfigurationDescription: undefined,
        JobPlanDescription: undefined,
        MonitoringConfigurationDescription: undefined,
        ParallelismConfigurationDescription: undefined
    };
    if (output.CheckpointConfigurationDescription !== undefined &&
        output.CheckpointConfigurationDescription !== null) {
        contents.CheckpointConfigurationDescription = deserializeAws_json1_1CheckpointConfigurationDescription(output.CheckpointConfigurationDescription, context);
    }
    if (output.JobPlanDescription !== undefined &&
        output.JobPlanDescription !== null) {
        contents.JobPlanDescription = output.JobPlanDescription;
    }
    if (output.MonitoringConfigurationDescription !== undefined &&
        output.MonitoringConfigurationDescription !== null) {
        contents.MonitoringConfigurationDescription = deserializeAws_json1_1MonitoringConfigurationDescription(output.MonitoringConfigurationDescription, context);
    }
    if (output.ParallelismConfigurationDescription !== undefined &&
        output.ParallelismConfigurationDescription !== null) {
        contents.ParallelismConfigurationDescription = deserializeAws_json1_1ParallelismConfigurationDescription(output.ParallelismConfigurationDescription, context);
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
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidArgumentException = (output, context) => {
    let contents = {
        __type: "InvalidArgumentException",
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
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ListApplicationSnapshotsResponse = (output, context) => {
    let contents = {
        __type: "ListApplicationSnapshotsResponse",
        NextToken: undefined,
        SnapshotSummaries: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.SnapshotSummaries !== undefined &&
        output.SnapshotSummaries !== null) {
        contents.SnapshotSummaries = deserializeAws_json1_1SnapshotSummaries(output.SnapshotSummaries, context);
    }
    return contents;
};
const deserializeAws_json1_1ListApplicationsResponse = (output, context) => {
    let contents = {
        __type: "ListApplicationsResponse",
        ApplicationSummaries: undefined,
        NextToken: undefined
    };
    if (output.ApplicationSummaries !== undefined &&
        output.ApplicationSummaries !== null) {
        contents.ApplicationSummaries = deserializeAws_json1_1ApplicationSummaries(output.ApplicationSummaries, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
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
const deserializeAws_json1_1MonitoringConfigurationDescription = (output, context) => {
    let contents = {
        __type: "MonitoringConfigurationDescription",
        ConfigurationType: undefined,
        LogLevel: undefined,
        MetricsLevel: undefined
    };
    if (output.ConfigurationType !== undefined &&
        output.ConfigurationType !== null) {
        contents.ConfigurationType = output.ConfigurationType;
    }
    if (output.LogLevel !== undefined && output.LogLevel !== null) {
        contents.LogLevel = output.LogLevel;
    }
    if (output.MetricsLevel !== undefined && output.MetricsLevel !== null) {
        contents.MetricsLevel = output.MetricsLevel;
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
const deserializeAws_json1_1ParallelismConfigurationDescription = (output, context) => {
    let contents = {
        __type: "ParallelismConfigurationDescription",
        AutoScalingEnabled: undefined,
        ConfigurationType: undefined,
        CurrentParallelism: undefined,
        Parallelism: undefined,
        ParallelismPerKPU: undefined
    };
    if (output.AutoScalingEnabled !== undefined &&
        output.AutoScalingEnabled !== null) {
        contents.AutoScalingEnabled = output.AutoScalingEnabled;
    }
    if (output.ConfigurationType !== undefined &&
        output.ConfigurationType !== null) {
        contents.ConfigurationType = output.ConfigurationType;
    }
    if (output.CurrentParallelism !== undefined &&
        output.CurrentParallelism !== null) {
        contents.CurrentParallelism = output.CurrentParallelism;
    }
    if (output.Parallelism !== undefined && output.Parallelism !== null) {
        contents.Parallelism = output.Parallelism;
    }
    if (output.ParallelismPerKPU !== undefined &&
        output.ParallelismPerKPU !== null) {
        contents.ParallelismPerKPU = output.ParallelismPerKPU;
    }
    return contents;
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
const deserializeAws_json1_1PropertyGroup = (output, context) => {
    let contents = {
        __type: "PropertyGroup",
        PropertyGroupId: undefined,
        PropertyMap: undefined
    };
    if (output.PropertyGroupId !== undefined && output.PropertyGroupId !== null) {
        contents.PropertyGroupId = output.PropertyGroupId;
    }
    if (output.PropertyMap !== undefined && output.PropertyMap !== null) {
        contents.PropertyMap = deserializeAws_json1_1PropertyMap(output.PropertyMap, context);
    }
    return contents;
};
const deserializeAws_json1_1PropertyGroups = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1PropertyGroup(entry, context));
};
const deserializeAws_json1_1PropertyMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
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
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ResourceNotFoundException = (output, context) => {
    let contents = {
        __type: "ResourceNotFoundException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ResourceProvisionedThroughputExceededException = (output, context) => {
    let contents = {
        __type: "ResourceProvisionedThroughputExceededException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1RunConfigurationDescription = (output, context) => {
    let contents = {
        __type: "RunConfigurationDescription",
        ApplicationRestoreConfigurationDescription: undefined
    };
    if (output.ApplicationRestoreConfigurationDescription !== undefined &&
        output.ApplicationRestoreConfigurationDescription !== null) {
        contents.ApplicationRestoreConfigurationDescription = deserializeAws_json1_1ApplicationRestoreConfiguration(output.ApplicationRestoreConfigurationDescription, context);
    }
    return contents;
};
const deserializeAws_json1_1S3ApplicationCodeLocationDescription = (output, context) => {
    let contents = {
        __type: "S3ApplicationCodeLocationDescription",
        BucketARN: undefined,
        FileKey: undefined,
        ObjectVersion: undefined
    };
    if (output.BucketARN !== undefined && output.BucketARN !== null) {
        contents.BucketARN = output.BucketARN;
    }
    if (output.FileKey !== undefined && output.FileKey !== null) {
        contents.FileKey = output.FileKey;
    }
    if (output.ObjectVersion !== undefined && output.ObjectVersion !== null) {
        contents.ObjectVersion = output.ObjectVersion;
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
const deserializeAws_json1_1SecurityGroupIds = (output, context) => {
    return (output || []).map((entry) => entry);
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
const deserializeAws_json1_1SnapshotDetails = (output, context) => {
    let contents = {
        __type: "SnapshotDetails",
        ApplicationVersionId: undefined,
        SnapshotCreationTimestamp: undefined,
        SnapshotName: undefined,
        SnapshotStatus: undefined
    };
    if (output.ApplicationVersionId !== undefined &&
        output.ApplicationVersionId !== null) {
        contents.ApplicationVersionId = output.ApplicationVersionId;
    }
    if (output.SnapshotCreationTimestamp !== undefined &&
        output.SnapshotCreationTimestamp !== null) {
        contents.SnapshotCreationTimestamp = new Date(Math.round(output.SnapshotCreationTimestamp * 1000));
    }
    if (output.SnapshotName !== undefined && output.SnapshotName !== null) {
        contents.SnapshotName = output.SnapshotName;
    }
    if (output.SnapshotStatus !== undefined && output.SnapshotStatus !== null) {
        contents.SnapshotStatus = output.SnapshotStatus;
    }
    return contents;
};
const deserializeAws_json1_1SnapshotSummaries = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1SnapshotDetails(entry, context));
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
const deserializeAws_json1_1SqlApplicationConfigurationDescription = (output, context) => {
    let contents = {
        __type: "SqlApplicationConfigurationDescription",
        InputDescriptions: undefined,
        OutputDescriptions: undefined,
        ReferenceDataSourceDescriptions: undefined
    };
    if (output.InputDescriptions !== undefined &&
        output.InputDescriptions !== null) {
        contents.InputDescriptions = deserializeAws_json1_1InputDescriptions(output.InputDescriptions, context);
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
        Message: undefined,
        ProcessedInputRecords: undefined,
        RawInputRecords: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
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
const deserializeAws_json1_1UntagResourceResponse = (output, context) => {
    let contents = {
        __type: "UntagResourceResponse"
    };
    return contents;
};
const deserializeAws_json1_1UpdateApplicationResponse = (output, context) => {
    let contents = {
        __type: "UpdateApplicationResponse",
        ApplicationDetail: undefined
    };
    if (output.ApplicationDetail !== undefined &&
        output.ApplicationDetail !== null) {
        contents.ApplicationDetail = deserializeAws_json1_1ApplicationDetail(output.ApplicationDetail, context);
    }
    return contents;
};
const deserializeAws_json1_1VpcConfigurationDescription = (output, context) => {
    let contents = {
        __type: "VpcConfigurationDescription",
        SecurityGroupIds: undefined,
        SubnetIds: undefined,
        VpcConfigurationId: undefined,
        VpcId: undefined
    };
    if (output.SecurityGroupIds !== undefined &&
        output.SecurityGroupIds !== null) {
        contents.SecurityGroupIds = deserializeAws_json1_1SecurityGroupIds(output.SecurityGroupIds, context);
    }
    if (output.SubnetIds !== undefined && output.SubnetIds !== null) {
        contents.SubnetIds = deserializeAws_json1_1SubnetIds(output.SubnetIds, context);
    }
    if (output.VpcConfigurationId !== undefined &&
        output.VpcConfigurationId !== null) {
        contents.VpcConfigurationId = output.VpcConfigurationId;
    }
    if (output.VpcId !== undefined && output.VpcId !== null) {
        contents.VpcId = output.VpcId;
    }
    return contents;
};
const deserializeAws_json1_1VpcConfigurationDescriptions = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1VpcConfigurationDescription(entry, context));
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