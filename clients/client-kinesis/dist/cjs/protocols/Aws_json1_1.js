"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1AddTagsToStreamCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Kinesis_20131202.AddTagsToStream";
    let body;
    body = JSON.stringify(serializeAws_json1_1AddTagsToStreamInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AddTagsToStreamCommand = serializeAws_json1_1AddTagsToStreamCommand;
async function serializeAws_json1_1CreateStreamCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Kinesis_20131202.CreateStream";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateStreamInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateStreamCommand = serializeAws_json1_1CreateStreamCommand;
async function serializeAws_json1_1DecreaseStreamRetentionPeriodCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Kinesis_20131202.DecreaseStreamRetentionPeriod";
    let body;
    body = JSON.stringify(serializeAws_json1_1DecreaseStreamRetentionPeriodInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DecreaseStreamRetentionPeriodCommand = serializeAws_json1_1DecreaseStreamRetentionPeriodCommand;
async function serializeAws_json1_1DeleteStreamCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Kinesis_20131202.DeleteStream";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteStreamInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteStreamCommand = serializeAws_json1_1DeleteStreamCommand;
async function serializeAws_json1_1DeregisterStreamConsumerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Kinesis_20131202.DeregisterStreamConsumer";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeregisterStreamConsumerInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeregisterStreamConsumerCommand = serializeAws_json1_1DeregisterStreamConsumerCommand;
async function serializeAws_json1_1DescribeLimitsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Kinesis_20131202.DescribeLimits";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeLimitsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeLimitsCommand = serializeAws_json1_1DescribeLimitsCommand;
async function serializeAws_json1_1DescribeStreamCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Kinesis_20131202.DescribeStream";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeStreamInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeStreamCommand = serializeAws_json1_1DescribeStreamCommand;
async function serializeAws_json1_1DescribeStreamConsumerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Kinesis_20131202.DescribeStreamConsumer";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeStreamConsumerInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeStreamConsumerCommand = serializeAws_json1_1DescribeStreamConsumerCommand;
async function serializeAws_json1_1DescribeStreamSummaryCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Kinesis_20131202.DescribeStreamSummary";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeStreamSummaryInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeStreamSummaryCommand = serializeAws_json1_1DescribeStreamSummaryCommand;
async function serializeAws_json1_1DisableEnhancedMonitoringCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Kinesis_20131202.DisableEnhancedMonitoring";
    let body;
    body = JSON.stringify(serializeAws_json1_1DisableEnhancedMonitoringInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DisableEnhancedMonitoringCommand = serializeAws_json1_1DisableEnhancedMonitoringCommand;
async function serializeAws_json1_1EnableEnhancedMonitoringCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Kinesis_20131202.EnableEnhancedMonitoring";
    let body;
    body = JSON.stringify(serializeAws_json1_1EnableEnhancedMonitoringInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1EnableEnhancedMonitoringCommand = serializeAws_json1_1EnableEnhancedMonitoringCommand;
async function serializeAws_json1_1GetRecordsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Kinesis_20131202.GetRecords";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRecordsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetRecordsCommand = serializeAws_json1_1GetRecordsCommand;
async function serializeAws_json1_1GetShardIteratorCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Kinesis_20131202.GetShardIterator";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetShardIteratorInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetShardIteratorCommand = serializeAws_json1_1GetShardIteratorCommand;
async function serializeAws_json1_1IncreaseStreamRetentionPeriodCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Kinesis_20131202.IncreaseStreamRetentionPeriod";
    let body;
    body = JSON.stringify(serializeAws_json1_1IncreaseStreamRetentionPeriodInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1IncreaseStreamRetentionPeriodCommand = serializeAws_json1_1IncreaseStreamRetentionPeriodCommand;
async function serializeAws_json1_1ListShardsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Kinesis_20131202.ListShards";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListShardsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListShardsCommand = serializeAws_json1_1ListShardsCommand;
async function serializeAws_json1_1ListStreamConsumersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Kinesis_20131202.ListStreamConsumers";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListStreamConsumersInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListStreamConsumersCommand = serializeAws_json1_1ListStreamConsumersCommand;
async function serializeAws_json1_1ListStreamsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Kinesis_20131202.ListStreams";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListStreamsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListStreamsCommand = serializeAws_json1_1ListStreamsCommand;
async function serializeAws_json1_1ListTagsForStreamCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Kinesis_20131202.ListTagsForStream";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForStreamInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTagsForStreamCommand = serializeAws_json1_1ListTagsForStreamCommand;
async function serializeAws_json1_1MergeShardsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Kinesis_20131202.MergeShards";
    let body;
    body = JSON.stringify(serializeAws_json1_1MergeShardsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1MergeShardsCommand = serializeAws_json1_1MergeShardsCommand;
async function serializeAws_json1_1PutRecordCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Kinesis_20131202.PutRecord";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutRecordInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutRecordCommand = serializeAws_json1_1PutRecordCommand;
async function serializeAws_json1_1PutRecordsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Kinesis_20131202.PutRecords";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutRecordsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutRecordsCommand = serializeAws_json1_1PutRecordsCommand;
async function serializeAws_json1_1RegisterStreamConsumerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Kinesis_20131202.RegisterStreamConsumer";
    let body;
    body = JSON.stringify(serializeAws_json1_1RegisterStreamConsumerInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RegisterStreamConsumerCommand = serializeAws_json1_1RegisterStreamConsumerCommand;
async function serializeAws_json1_1RemoveTagsFromStreamCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Kinesis_20131202.RemoveTagsFromStream";
    let body;
    body = JSON.stringify(serializeAws_json1_1RemoveTagsFromStreamInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RemoveTagsFromStreamCommand = serializeAws_json1_1RemoveTagsFromStreamCommand;
async function serializeAws_json1_1SplitShardCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Kinesis_20131202.SplitShard";
    let body;
    body = JSON.stringify(serializeAws_json1_1SplitShardInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1SplitShardCommand = serializeAws_json1_1SplitShardCommand;
async function serializeAws_json1_1StartStreamEncryptionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Kinesis_20131202.StartStreamEncryption";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartStreamEncryptionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartStreamEncryptionCommand = serializeAws_json1_1StartStreamEncryptionCommand;
async function serializeAws_json1_1StopStreamEncryptionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Kinesis_20131202.StopStreamEncryption";
    let body;
    body = JSON.stringify(serializeAws_json1_1StopStreamEncryptionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StopStreamEncryptionCommand = serializeAws_json1_1StopStreamEncryptionCommand;
async function serializeAws_json1_1SubscribeToShardCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Kinesis_20131202.SubscribeToShard";
    let body;
    body = JSON.stringify(serializeAws_json1_1SubscribeToShardInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1SubscribeToShardCommand = serializeAws_json1_1SubscribeToShardCommand;
async function serializeAws_json1_1UpdateShardCountCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Kinesis_20131202.UpdateShardCount";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateShardCountInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateShardCountCommand = serializeAws_json1_1UpdateShardCountCommand;
async function deserializeAws_json1_1AddTagsToStreamCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AddTagsToStreamCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AddTagsToStreamCommand = deserializeAws_json1_1AddTagsToStreamCommand;
async function deserializeAws_json1_1AddTagsToStreamCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.v20131202#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.kinesis.v20131202#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesis.v20131202#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.v20131202#ResourceNotFoundException":
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
async function deserializeAws_json1_1CreateStreamCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateStreamCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateStreamCommand = deserializeAws_json1_1CreateStreamCommand;
async function deserializeAws_json1_1CreateStreamCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.v20131202#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.kinesis.v20131202#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesis.v20131202#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DecreaseStreamRetentionPeriodCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DecreaseStreamRetentionPeriodCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DecreaseStreamRetentionPeriodCommand = deserializeAws_json1_1DecreaseStreamRetentionPeriodCommand;
async function deserializeAws_json1_1DecreaseStreamRetentionPeriodCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.v20131202#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.kinesis.v20131202#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesis.v20131202#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.v20131202#ResourceNotFoundException":
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
async function deserializeAws_json1_1DeleteStreamCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteStreamCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteStreamCommand = deserializeAws_json1_1DeleteStreamCommand;
async function deserializeAws_json1_1DeleteStreamCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazonaws.kinesis.v20131202#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesis.v20131202#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.v20131202#ResourceNotFoundException":
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
async function deserializeAws_json1_1DeregisterStreamConsumerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeregisterStreamConsumerCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeregisterStreamConsumerCommand = deserializeAws_json1_1DeregisterStreamConsumerCommand;
async function deserializeAws_json1_1DeregisterStreamConsumerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.v20131202#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.kinesis.v20131202#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.v20131202#ResourceNotFoundException":
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
async function deserializeAws_json1_1DescribeLimitsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeLimitsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeLimitsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeLimitsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeLimitsCommand = deserializeAws_json1_1DescribeLimitsCommand;
async function deserializeAws_json1_1DescribeLimitsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazonaws.kinesis.v20131202#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeStreamCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeStreamCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeStreamOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeStreamOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeStreamCommand = deserializeAws_json1_1DescribeStreamCommand;
async function deserializeAws_json1_1DescribeStreamCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazonaws.kinesis.v20131202#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.v20131202#ResourceNotFoundException":
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
async function deserializeAws_json1_1DescribeStreamConsumerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeStreamConsumerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeStreamConsumerOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeStreamConsumerOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeStreamConsumerCommand = deserializeAws_json1_1DescribeStreamConsumerCommand;
async function deserializeAws_json1_1DescribeStreamConsumerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.v20131202#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.kinesis.v20131202#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.v20131202#ResourceNotFoundException":
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
async function deserializeAws_json1_1DescribeStreamSummaryCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeStreamSummaryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeStreamSummaryOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeStreamSummaryOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeStreamSummaryCommand = deserializeAws_json1_1DescribeStreamSummaryCommand;
async function deserializeAws_json1_1DescribeStreamSummaryCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazonaws.kinesis.v20131202#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.v20131202#ResourceNotFoundException":
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
async function deserializeAws_json1_1DisableEnhancedMonitoringCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DisableEnhancedMonitoringCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1EnhancedMonitoringOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "EnhancedMonitoringOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DisableEnhancedMonitoringCommand = deserializeAws_json1_1DisableEnhancedMonitoringCommand;
async function deserializeAws_json1_1DisableEnhancedMonitoringCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.v20131202#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.kinesis.v20131202#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesis.v20131202#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.v20131202#ResourceNotFoundException":
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
async function deserializeAws_json1_1EnableEnhancedMonitoringCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1EnableEnhancedMonitoringCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1EnhancedMonitoringOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "EnhancedMonitoringOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1EnableEnhancedMonitoringCommand = deserializeAws_json1_1EnableEnhancedMonitoringCommand;
async function deserializeAws_json1_1EnableEnhancedMonitoringCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.v20131202#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.kinesis.v20131202#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesis.v20131202#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.v20131202#ResourceNotFoundException":
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
async function deserializeAws_json1_1GetRecordsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetRecordsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRecordsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetRecordsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetRecordsCommand = deserializeAws_json1_1GetRecordsCommand;
async function deserializeAws_json1_1GetRecordsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ExpiredIteratorException":
        case "com.amazonaws.kinesis.v20131202#ExpiredIteratorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ExpiredIteratorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.v20131202#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSAccessDeniedException":
        case "com.amazonaws.kinesis.v20131202#KMSAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSDisabledException":
        case "com.amazonaws.kinesis.v20131202#KMSDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInvalidStateException":
        case "com.amazonaws.kinesis.v20131202#KMSInvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSNotFoundException":
        case "com.amazonaws.kinesis.v20131202#KMSNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSOptInRequired":
        case "com.amazonaws.kinesis.v20131202#KMSOptInRequired":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSOptInRequiredResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSThrottlingException":
        case "com.amazonaws.kinesis.v20131202#KMSThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.kinesis.v20131202#ProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.v20131202#ResourceNotFoundException":
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
async function deserializeAws_json1_1GetShardIteratorCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetShardIteratorCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetShardIteratorOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetShardIteratorOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetShardIteratorCommand = deserializeAws_json1_1GetShardIteratorCommand;
async function deserializeAws_json1_1GetShardIteratorCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.v20131202#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.kinesis.v20131202#ProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.v20131202#ResourceNotFoundException":
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
async function deserializeAws_json1_1IncreaseStreamRetentionPeriodCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1IncreaseStreamRetentionPeriodCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1IncreaseStreamRetentionPeriodCommand = deserializeAws_json1_1IncreaseStreamRetentionPeriodCommand;
async function deserializeAws_json1_1IncreaseStreamRetentionPeriodCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.v20131202#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.kinesis.v20131202#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesis.v20131202#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.v20131202#ResourceNotFoundException":
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
async function deserializeAws_json1_1ListShardsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListShardsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListShardsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListShardsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListShardsCommand = deserializeAws_json1_1ListShardsCommand;
async function deserializeAws_json1_1ListShardsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ExpiredNextTokenException":
        case "com.amazonaws.kinesis.v20131202#ExpiredNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ExpiredNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.v20131202#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.kinesis.v20131202#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesis.v20131202#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.v20131202#ResourceNotFoundException":
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
async function deserializeAws_json1_1ListStreamConsumersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListStreamConsumersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListStreamConsumersOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListStreamConsumersOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListStreamConsumersCommand = deserializeAws_json1_1ListStreamConsumersCommand;
async function deserializeAws_json1_1ListStreamConsumersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ExpiredNextTokenException":
        case "com.amazonaws.kinesis.v20131202#ExpiredNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ExpiredNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.v20131202#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.kinesis.v20131202#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesis.v20131202#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.v20131202#ResourceNotFoundException":
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
async function deserializeAws_json1_1ListStreamsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListStreamsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListStreamsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListStreamsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListStreamsCommand = deserializeAws_json1_1ListStreamsCommand;
async function deserializeAws_json1_1ListStreamsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazonaws.kinesis.v20131202#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListTagsForStreamCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListTagsForStreamCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTagsForStreamOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListTagsForStreamOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListTagsForStreamCommand = deserializeAws_json1_1ListTagsForStreamCommand;
async function deserializeAws_json1_1ListTagsForStreamCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.v20131202#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.kinesis.v20131202#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.v20131202#ResourceNotFoundException":
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
async function deserializeAws_json1_1MergeShardsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1MergeShardsCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1MergeShardsCommand = deserializeAws_json1_1MergeShardsCommand;
async function deserializeAws_json1_1MergeShardsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.v20131202#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.kinesis.v20131202#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesis.v20131202#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.v20131202#ResourceNotFoundException":
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
async function deserializeAws_json1_1PutRecordCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutRecordCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutRecordOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutRecordOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutRecordCommand = deserializeAws_json1_1PutRecordCommand;
async function deserializeAws_json1_1PutRecordCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.v20131202#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSAccessDeniedException":
        case "com.amazonaws.kinesis.v20131202#KMSAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSDisabledException":
        case "com.amazonaws.kinesis.v20131202#KMSDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInvalidStateException":
        case "com.amazonaws.kinesis.v20131202#KMSInvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSNotFoundException":
        case "com.amazonaws.kinesis.v20131202#KMSNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSOptInRequired":
        case "com.amazonaws.kinesis.v20131202#KMSOptInRequired":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSOptInRequiredResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSThrottlingException":
        case "com.amazonaws.kinesis.v20131202#KMSThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.kinesis.v20131202#ProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.v20131202#ResourceNotFoundException":
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
async function deserializeAws_json1_1PutRecordsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutRecordsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutRecordsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutRecordsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutRecordsCommand = deserializeAws_json1_1PutRecordsCommand;
async function deserializeAws_json1_1PutRecordsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.v20131202#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSAccessDeniedException":
        case "com.amazonaws.kinesis.v20131202#KMSAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSDisabledException":
        case "com.amazonaws.kinesis.v20131202#KMSDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInvalidStateException":
        case "com.amazonaws.kinesis.v20131202#KMSInvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSNotFoundException":
        case "com.amazonaws.kinesis.v20131202#KMSNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSOptInRequired":
        case "com.amazonaws.kinesis.v20131202#KMSOptInRequired":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSOptInRequiredResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSThrottlingException":
        case "com.amazonaws.kinesis.v20131202#KMSThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.kinesis.v20131202#ProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.v20131202#ResourceNotFoundException":
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
async function deserializeAws_json1_1RegisterStreamConsumerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RegisterStreamConsumerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RegisterStreamConsumerOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RegisterStreamConsumerOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RegisterStreamConsumerCommand = deserializeAws_json1_1RegisterStreamConsumerCommand;
async function deserializeAws_json1_1RegisterStreamConsumerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.v20131202#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.kinesis.v20131202#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesis.v20131202#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.v20131202#ResourceNotFoundException":
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
async function deserializeAws_json1_1RemoveTagsFromStreamCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RemoveTagsFromStreamCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RemoveTagsFromStreamCommand = deserializeAws_json1_1RemoveTagsFromStreamCommand;
async function deserializeAws_json1_1RemoveTagsFromStreamCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.v20131202#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.kinesis.v20131202#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesis.v20131202#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.v20131202#ResourceNotFoundException":
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
async function deserializeAws_json1_1SplitShardCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1SplitShardCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1SplitShardCommand = deserializeAws_json1_1SplitShardCommand;
async function deserializeAws_json1_1SplitShardCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.v20131202#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.kinesis.v20131202#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesis.v20131202#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.v20131202#ResourceNotFoundException":
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
async function deserializeAws_json1_1StartStreamEncryptionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartStreamEncryptionCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartStreamEncryptionCommand = deserializeAws_json1_1StartStreamEncryptionCommand;
async function deserializeAws_json1_1StartStreamEncryptionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.v20131202#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSAccessDeniedException":
        case "com.amazonaws.kinesis.v20131202#KMSAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSDisabledException":
        case "com.amazonaws.kinesis.v20131202#KMSDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInvalidStateException":
        case "com.amazonaws.kinesis.v20131202#KMSInvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSNotFoundException":
        case "com.amazonaws.kinesis.v20131202#KMSNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSOptInRequired":
        case "com.amazonaws.kinesis.v20131202#KMSOptInRequired":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSOptInRequiredResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSThrottlingException":
        case "com.amazonaws.kinesis.v20131202#KMSThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.kinesis.v20131202#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesis.v20131202#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.v20131202#ResourceNotFoundException":
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
async function deserializeAws_json1_1StopStreamEncryptionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StopStreamEncryptionCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StopStreamEncryptionCommand = deserializeAws_json1_1StopStreamEncryptionCommand;
async function deserializeAws_json1_1StopStreamEncryptionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.v20131202#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.kinesis.v20131202#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesis.v20131202#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.v20131202#ResourceNotFoundException":
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
async function deserializeAws_json1_1SubscribeToShardCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1SubscribeToShardCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SubscribeToShardOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SubscribeToShardOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1SubscribeToShardCommand = deserializeAws_json1_1SubscribeToShardCommand;
async function deserializeAws_json1_1SubscribeToShardCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.v20131202#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.kinesis.v20131202#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesis.v20131202#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.v20131202#ResourceNotFoundException":
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
async function deserializeAws_json1_1UpdateShardCountCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateShardCountCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateShardCountOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateShardCountOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateShardCountCommand = deserializeAws_json1_1UpdateShardCountCommand;
async function deserializeAws_json1_1UpdateShardCountCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis.v20131202#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.kinesis.v20131202#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kinesis.v20131202#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis.v20131202#ResourceNotFoundException":
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
const deserializeAws_json1_1ExpiredIteratorExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ExpiredIteratorException(body, context);
    const contents = Object.assign({ name: "ExpiredIteratorException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ExpiredNextTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ExpiredNextTokenException(body, context);
    const contents = Object.assign({ name: "ExpiredNextTokenException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidArgumentExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidArgumentException(body, context);
    const contents = Object.assign({ name: "InvalidArgumentException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1KMSAccessDeniedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1KMSAccessDeniedException(body, context);
    const contents = Object.assign({ name: "KMSAccessDeniedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1KMSDisabledExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1KMSDisabledException(body, context);
    const contents = Object.assign({ name: "KMSDisabledException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1KMSInvalidStateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1KMSInvalidStateException(body, context);
    const contents = Object.assign({ name: "KMSInvalidStateException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1KMSNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1KMSNotFoundException(body, context);
    const contents = Object.assign({ name: "KMSNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1KMSOptInRequiredResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1KMSOptInRequired(body, context);
    const contents = Object.assign({ name: "KMSOptInRequired", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1KMSThrottlingExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1KMSThrottlingException(body, context);
    const contents = Object.assign({ name: "KMSThrottlingException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LimitExceededException(body, context);
    const contents = Object.assign({ name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ProvisionedThroughputExceededException(body, context);
    const contents = Object.assign({ name: "ProvisionedThroughputExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
const serializeAws_json1_1AddTagsToStreamInput = (input, context) => {
    const bodyParams = {};
    if (input.StreamName !== undefined) {
        bodyParams["StreamName"] = input.StreamName;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagMap(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateStreamInput = (input, context) => {
    const bodyParams = {};
    if (input.ShardCount !== undefined) {
        bodyParams["ShardCount"] = input.ShardCount;
    }
    if (input.StreamName !== undefined) {
        bodyParams["StreamName"] = input.StreamName;
    }
    return bodyParams;
};
const serializeAws_json1_1DecreaseStreamRetentionPeriodInput = (input, context) => {
    const bodyParams = {};
    if (input.RetentionPeriodHours !== undefined) {
        bodyParams["RetentionPeriodHours"] = input.RetentionPeriodHours;
    }
    if (input.StreamName !== undefined) {
        bodyParams["StreamName"] = input.StreamName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteStreamInput = (input, context) => {
    const bodyParams = {};
    if (input.EnforceConsumerDeletion !== undefined) {
        bodyParams["EnforceConsumerDeletion"] = input.EnforceConsumerDeletion;
    }
    if (input.StreamName !== undefined) {
        bodyParams["StreamName"] = input.StreamName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeregisterStreamConsumerInput = (input, context) => {
    const bodyParams = {};
    if (input.ConsumerARN !== undefined) {
        bodyParams["ConsumerARN"] = input.ConsumerARN;
    }
    if (input.ConsumerName !== undefined) {
        bodyParams["ConsumerName"] = input.ConsumerName;
    }
    if (input.StreamARN !== undefined) {
        bodyParams["StreamARN"] = input.StreamARN;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeLimitsInput = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_1DescribeStreamConsumerInput = (input, context) => {
    const bodyParams = {};
    if (input.ConsumerARN !== undefined) {
        bodyParams["ConsumerARN"] = input.ConsumerARN;
    }
    if (input.ConsumerName !== undefined) {
        bodyParams["ConsumerName"] = input.ConsumerName;
    }
    if (input.StreamARN !== undefined) {
        bodyParams["StreamARN"] = input.StreamARN;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeStreamInput = (input, context) => {
    const bodyParams = {};
    if (input.ExclusiveStartShardId !== undefined) {
        bodyParams["ExclusiveStartShardId"] = input.ExclusiveStartShardId;
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.StreamName !== undefined) {
        bodyParams["StreamName"] = input.StreamName;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeStreamSummaryInput = (input, context) => {
    const bodyParams = {};
    if (input.StreamName !== undefined) {
        bodyParams["StreamName"] = input.StreamName;
    }
    return bodyParams;
};
const serializeAws_json1_1DisableEnhancedMonitoringInput = (input, context) => {
    const bodyParams = {};
    if (input.ShardLevelMetrics !== undefined) {
        bodyParams["ShardLevelMetrics"] = serializeAws_json1_1MetricsNameList(input.ShardLevelMetrics, context);
    }
    if (input.StreamName !== undefined) {
        bodyParams["StreamName"] = input.StreamName;
    }
    return bodyParams;
};
const serializeAws_json1_1EnableEnhancedMonitoringInput = (input, context) => {
    const bodyParams = {};
    if (input.ShardLevelMetrics !== undefined) {
        bodyParams["ShardLevelMetrics"] = serializeAws_json1_1MetricsNameList(input.ShardLevelMetrics, context);
    }
    if (input.StreamName !== undefined) {
        bodyParams["StreamName"] = input.StreamName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetRecordsInput = (input, context) => {
    const bodyParams = {};
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.ShardIterator !== undefined) {
        bodyParams["ShardIterator"] = input.ShardIterator;
    }
    return bodyParams;
};
const serializeAws_json1_1GetShardIteratorInput = (input, context) => {
    const bodyParams = {};
    if (input.ShardId !== undefined) {
        bodyParams["ShardId"] = input.ShardId;
    }
    if (input.ShardIteratorType !== undefined) {
        bodyParams["ShardIteratorType"] = input.ShardIteratorType;
    }
    if (input.StartingSequenceNumber !== undefined) {
        bodyParams["StartingSequenceNumber"] = input.StartingSequenceNumber;
    }
    if (input.StreamName !== undefined) {
        bodyParams["StreamName"] = input.StreamName;
    }
    if (input.Timestamp !== undefined) {
        bodyParams["Timestamp"] = Math.round(input.Timestamp.getTime() / 1000);
    }
    return bodyParams;
};
const serializeAws_json1_1IncreaseStreamRetentionPeriodInput = (input, context) => {
    const bodyParams = {};
    if (input.RetentionPeriodHours !== undefined) {
        bodyParams["RetentionPeriodHours"] = input.RetentionPeriodHours;
    }
    if (input.StreamName !== undefined) {
        bodyParams["StreamName"] = input.StreamName;
    }
    return bodyParams;
};
const serializeAws_json1_1ListShardsInput = (input, context) => {
    const bodyParams = {};
    if (input.ExclusiveStartShardId !== undefined) {
        bodyParams["ExclusiveStartShardId"] = input.ExclusiveStartShardId;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.StreamCreationTimestamp !== undefined) {
        bodyParams["StreamCreationTimestamp"] = Math.round(input.StreamCreationTimestamp.getTime() / 1000);
    }
    if (input.StreamName !== undefined) {
        bodyParams["StreamName"] = input.StreamName;
    }
    return bodyParams;
};
const serializeAws_json1_1ListStreamConsumersInput = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.StreamARN !== undefined) {
        bodyParams["StreamARN"] = input.StreamARN;
    }
    if (input.StreamCreationTimestamp !== undefined) {
        bodyParams["StreamCreationTimestamp"] = Math.round(input.StreamCreationTimestamp.getTime() / 1000);
    }
    return bodyParams;
};
const serializeAws_json1_1ListStreamsInput = (input, context) => {
    const bodyParams = {};
    if (input.ExclusiveStartStreamName !== undefined) {
        bodyParams["ExclusiveStartStreamName"] = input.ExclusiveStartStreamName;
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    return bodyParams;
};
const serializeAws_json1_1ListTagsForStreamInput = (input, context) => {
    const bodyParams = {};
    if (input.ExclusiveStartTagKey !== undefined) {
        bodyParams["ExclusiveStartTagKey"] = input.ExclusiveStartTagKey;
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.StreamName !== undefined) {
        bodyParams["StreamName"] = input.StreamName;
    }
    return bodyParams;
};
const serializeAws_json1_1MergeShardsInput = (input, context) => {
    const bodyParams = {};
    if (input.AdjacentShardToMerge !== undefined) {
        bodyParams["AdjacentShardToMerge"] = input.AdjacentShardToMerge;
    }
    if (input.ShardToMerge !== undefined) {
        bodyParams["ShardToMerge"] = input.ShardToMerge;
    }
    if (input.StreamName !== undefined) {
        bodyParams["StreamName"] = input.StreamName;
    }
    return bodyParams;
};
const serializeAws_json1_1MetricsNameList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1PutRecordInput = (input, context) => {
    const bodyParams = {};
    if (input.Data !== undefined) {
        bodyParams["Data"] = Buffer.from(input.Data).toString("utf-8");
    }
    if (input.ExplicitHashKey !== undefined) {
        bodyParams["ExplicitHashKey"] = input.ExplicitHashKey;
    }
    if (input.PartitionKey !== undefined) {
        bodyParams["PartitionKey"] = input.PartitionKey;
    }
    if (input.SequenceNumberForOrdering !== undefined) {
        bodyParams["SequenceNumberForOrdering"] = input.SequenceNumberForOrdering;
    }
    if (input.StreamName !== undefined) {
        bodyParams["StreamName"] = input.StreamName;
    }
    return bodyParams;
};
const serializeAws_json1_1PutRecordsInput = (input, context) => {
    const bodyParams = {};
    if (input.Records !== undefined) {
        bodyParams["Records"] = serializeAws_json1_1PutRecordsRequestEntryList(input.Records, context);
    }
    if (input.StreamName !== undefined) {
        bodyParams["StreamName"] = input.StreamName;
    }
    return bodyParams;
};
const serializeAws_json1_1PutRecordsRequestEntry = (input, context) => {
    const bodyParams = {};
    if (input.Data !== undefined) {
        bodyParams["Data"] = Buffer.from(input.Data).toString("utf-8");
    }
    if (input.ExplicitHashKey !== undefined) {
        bodyParams["ExplicitHashKey"] = input.ExplicitHashKey;
    }
    if (input.PartitionKey !== undefined) {
        bodyParams["PartitionKey"] = input.PartitionKey;
    }
    return bodyParams;
};
const serializeAws_json1_1PutRecordsRequestEntryList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1PutRecordsRequestEntry(entry, context));
    }
    return contents;
};
const serializeAws_json1_1RegisterStreamConsumerInput = (input, context) => {
    const bodyParams = {};
    if (input.ConsumerName !== undefined) {
        bodyParams["ConsumerName"] = input.ConsumerName;
    }
    if (input.StreamARN !== undefined) {
        bodyParams["StreamARN"] = input.StreamARN;
    }
    return bodyParams;
};
const serializeAws_json1_1RemoveTagsFromStreamInput = (input, context) => {
    const bodyParams = {};
    if (input.StreamName !== undefined) {
        bodyParams["StreamName"] = input.StreamName;
    }
    if (input.TagKeys !== undefined) {
        bodyParams["TagKeys"] = serializeAws_json1_1TagKeyList(input.TagKeys, context);
    }
    return bodyParams;
};
const serializeAws_json1_1SplitShardInput = (input, context) => {
    const bodyParams = {};
    if (input.NewStartingHashKey !== undefined) {
        bodyParams["NewStartingHashKey"] = input.NewStartingHashKey;
    }
    if (input.ShardToSplit !== undefined) {
        bodyParams["ShardToSplit"] = input.ShardToSplit;
    }
    if (input.StreamName !== undefined) {
        bodyParams["StreamName"] = input.StreamName;
    }
    return bodyParams;
};
const serializeAws_json1_1StartStreamEncryptionInput = (input, context) => {
    const bodyParams = {};
    if (input.EncryptionType !== undefined) {
        bodyParams["EncryptionType"] = input.EncryptionType;
    }
    if (input.KeyId !== undefined) {
        bodyParams["KeyId"] = input.KeyId;
    }
    if (input.StreamName !== undefined) {
        bodyParams["StreamName"] = input.StreamName;
    }
    return bodyParams;
};
const serializeAws_json1_1StartingPosition = (input, context) => {
    const bodyParams = {};
    if (input.SequenceNumber !== undefined) {
        bodyParams["SequenceNumber"] = input.SequenceNumber;
    }
    if (input.Timestamp !== undefined) {
        bodyParams["Timestamp"] = Math.round(input.Timestamp.getTime() / 1000);
    }
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
    }
    return bodyParams;
};
const serializeAws_json1_1StopStreamEncryptionInput = (input, context) => {
    const bodyParams = {};
    if (input.EncryptionType !== undefined) {
        bodyParams["EncryptionType"] = input.EncryptionType;
    }
    if (input.KeyId !== undefined) {
        bodyParams["KeyId"] = input.KeyId;
    }
    if (input.StreamName !== undefined) {
        bodyParams["StreamName"] = input.StreamName;
    }
    return bodyParams;
};
const serializeAws_json1_1SubscribeToShardInput = (input, context) => {
    const bodyParams = {};
    if (input.ConsumerARN !== undefined) {
        bodyParams["ConsumerARN"] = input.ConsumerARN;
    }
    if (input.ShardId !== undefined) {
        bodyParams["ShardId"] = input.ShardId;
    }
    if (input.StartingPosition !== undefined) {
        bodyParams["StartingPosition"] = serializeAws_json1_1StartingPosition(input.StartingPosition, context);
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
const serializeAws_json1_1TagMap = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1UpdateShardCountInput = (input, context) => {
    const bodyParams = {};
    if (input.ScalingType !== undefined) {
        bodyParams["ScalingType"] = input.ScalingType;
    }
    if (input.StreamName !== undefined) {
        bodyParams["StreamName"] = input.StreamName;
    }
    if (input.TargetShardCount !== undefined) {
        bodyParams["TargetShardCount"] = input.TargetShardCount;
    }
    return bodyParams;
};
const deserializeAws_json1_1Consumer = (output, context) => {
    let contents = {
        __type: "Consumer",
        ConsumerARN: undefined,
        ConsumerCreationTimestamp: undefined,
        ConsumerName: undefined,
        ConsumerStatus: undefined
    };
    if (output.ConsumerARN !== undefined && output.ConsumerARN !== null) {
        contents.ConsumerARN = output.ConsumerARN;
    }
    if (output.ConsumerCreationTimestamp !== undefined &&
        output.ConsumerCreationTimestamp !== null) {
        contents.ConsumerCreationTimestamp = new Date(Math.round(output.ConsumerCreationTimestamp * 1000));
    }
    if (output.ConsumerName !== undefined && output.ConsumerName !== null) {
        contents.ConsumerName = output.ConsumerName;
    }
    if (output.ConsumerStatus !== undefined && output.ConsumerStatus !== null) {
        contents.ConsumerStatus = output.ConsumerStatus;
    }
    return contents;
};
const deserializeAws_json1_1ConsumerDescription = (output, context) => {
    let contents = {
        __type: "ConsumerDescription",
        ConsumerARN: undefined,
        ConsumerCreationTimestamp: undefined,
        ConsumerName: undefined,
        ConsumerStatus: undefined,
        StreamARN: undefined
    };
    if (output.ConsumerARN !== undefined && output.ConsumerARN !== null) {
        contents.ConsumerARN = output.ConsumerARN;
    }
    if (output.ConsumerCreationTimestamp !== undefined &&
        output.ConsumerCreationTimestamp !== null) {
        contents.ConsumerCreationTimestamp = new Date(Math.round(output.ConsumerCreationTimestamp * 1000));
    }
    if (output.ConsumerName !== undefined && output.ConsumerName !== null) {
        contents.ConsumerName = output.ConsumerName;
    }
    if (output.ConsumerStatus !== undefined && output.ConsumerStatus !== null) {
        contents.ConsumerStatus = output.ConsumerStatus;
    }
    if (output.StreamARN !== undefined && output.StreamARN !== null) {
        contents.StreamARN = output.StreamARN;
    }
    return contents;
};
const deserializeAws_json1_1ConsumerList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Consumer(entry, context));
};
const deserializeAws_json1_1DescribeLimitsOutput = (output, context) => {
    let contents = {
        __type: "DescribeLimitsOutput",
        OpenShardCount: undefined,
        ShardLimit: undefined
    };
    if (output.OpenShardCount !== undefined && output.OpenShardCount !== null) {
        contents.OpenShardCount = output.OpenShardCount;
    }
    if (output.ShardLimit !== undefined && output.ShardLimit !== null) {
        contents.ShardLimit = output.ShardLimit;
    }
    return contents;
};
const deserializeAws_json1_1DescribeStreamConsumerOutput = (output, context) => {
    let contents = {
        __type: "DescribeStreamConsumerOutput",
        ConsumerDescription: undefined
    };
    if (output.ConsumerDescription !== undefined &&
        output.ConsumerDescription !== null) {
        contents.ConsumerDescription = deserializeAws_json1_1ConsumerDescription(output.ConsumerDescription, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeStreamOutput = (output, context) => {
    let contents = {
        __type: "DescribeStreamOutput",
        StreamDescription: undefined
    };
    if (output.StreamDescription !== undefined &&
        output.StreamDescription !== null) {
        contents.StreamDescription = deserializeAws_json1_1StreamDescription(output.StreamDescription, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeStreamSummaryOutput = (output, context) => {
    let contents = {
        __type: "DescribeStreamSummaryOutput",
        StreamDescriptionSummary: undefined
    };
    if (output.StreamDescriptionSummary !== undefined &&
        output.StreamDescriptionSummary !== null) {
        contents.StreamDescriptionSummary = deserializeAws_json1_1StreamDescriptionSummary(output.StreamDescriptionSummary, context);
    }
    return contents;
};
const deserializeAws_json1_1EnhancedMetrics = (output, context) => {
    let contents = {
        __type: "EnhancedMetrics",
        ShardLevelMetrics: undefined
    };
    if (output.ShardLevelMetrics !== undefined &&
        output.ShardLevelMetrics !== null) {
        contents.ShardLevelMetrics = deserializeAws_json1_1MetricsNameList(output.ShardLevelMetrics, context);
    }
    return contents;
};
const deserializeAws_json1_1EnhancedMonitoringList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1EnhancedMetrics(entry, context));
};
const deserializeAws_json1_1EnhancedMonitoringOutput = (output, context) => {
    let contents = {
        __type: "EnhancedMonitoringOutput",
        CurrentShardLevelMetrics: undefined,
        DesiredShardLevelMetrics: undefined,
        StreamName: undefined
    };
    if (output.CurrentShardLevelMetrics !== undefined &&
        output.CurrentShardLevelMetrics !== null) {
        contents.CurrentShardLevelMetrics = deserializeAws_json1_1MetricsNameList(output.CurrentShardLevelMetrics, context);
    }
    if (output.DesiredShardLevelMetrics !== undefined &&
        output.DesiredShardLevelMetrics !== null) {
        contents.DesiredShardLevelMetrics = deserializeAws_json1_1MetricsNameList(output.DesiredShardLevelMetrics, context);
    }
    if (output.StreamName !== undefined && output.StreamName !== null) {
        contents.StreamName = output.StreamName;
    }
    return contents;
};
const deserializeAws_json1_1ExpiredIteratorException = (output, context) => {
    let contents = {
        __type: "ExpiredIteratorException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ExpiredNextTokenException = (output, context) => {
    let contents = {
        __type: "ExpiredNextTokenException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1GetRecordsOutput = (output, context) => {
    let contents = {
        __type: "GetRecordsOutput",
        MillisBehindLatest: undefined,
        NextShardIterator: undefined,
        Records: undefined
    };
    if (output.MillisBehindLatest !== undefined &&
        output.MillisBehindLatest !== null) {
        contents.MillisBehindLatest = output.MillisBehindLatest;
    }
    if (output.NextShardIterator !== undefined &&
        output.NextShardIterator !== null) {
        contents.NextShardIterator = output.NextShardIterator;
    }
    if (output.Records !== undefined && output.Records !== null) {
        contents.Records = deserializeAws_json1_1RecordList(output.Records, context);
    }
    return contents;
};
const deserializeAws_json1_1GetShardIteratorOutput = (output, context) => {
    let contents = {
        __type: "GetShardIteratorOutput",
        ShardIterator: undefined
    };
    if (output.ShardIterator !== undefined && output.ShardIterator !== null) {
        contents.ShardIterator = output.ShardIterator;
    }
    return contents;
};
const deserializeAws_json1_1HashKeyRange = (output, context) => {
    let contents = {
        __type: "HashKeyRange",
        EndingHashKey: undefined,
        StartingHashKey: undefined
    };
    if (output.EndingHashKey !== undefined && output.EndingHashKey !== null) {
        contents.EndingHashKey = output.EndingHashKey;
    }
    if (output.StartingHashKey !== undefined && output.StartingHashKey !== null) {
        contents.StartingHashKey = output.StartingHashKey;
    }
    return contents;
};
const deserializeAws_json1_1InternalFailureException = (output, context) => {
    let contents = {
        __type: "InternalFailureException",
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
const deserializeAws_json1_1KMSAccessDeniedException = (output, context) => {
    let contents = {
        __type: "KMSAccessDeniedException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1KMSDisabledException = (output, context) => {
    let contents = {
        __type: "KMSDisabledException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1KMSInvalidStateException = (output, context) => {
    let contents = {
        __type: "KMSInvalidStateException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1KMSNotFoundException = (output, context) => {
    let contents = {
        __type: "KMSNotFoundException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1KMSOptInRequired = (output, context) => {
    let contents = {
        __type: "KMSOptInRequired",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1KMSThrottlingException = (output, context) => {
    let contents = {
        __type: "KMSThrottlingException",
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
const deserializeAws_json1_1ListShardsOutput = (output, context) => {
    let contents = {
        __type: "ListShardsOutput",
        NextToken: undefined,
        Shards: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Shards !== undefined && output.Shards !== null) {
        contents.Shards = deserializeAws_json1_1ShardList(output.Shards, context);
    }
    return contents;
};
const deserializeAws_json1_1ListStreamConsumersOutput = (output, context) => {
    let contents = {
        __type: "ListStreamConsumersOutput",
        Consumers: undefined,
        NextToken: undefined
    };
    if (output.Consumers !== undefined && output.Consumers !== null) {
        contents.Consumers = deserializeAws_json1_1ConsumerList(output.Consumers, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListStreamsOutput = (output, context) => {
    let contents = {
        __type: "ListStreamsOutput",
        HasMoreStreams: undefined,
        StreamNames: undefined
    };
    if (output.HasMoreStreams !== undefined && output.HasMoreStreams !== null) {
        contents.HasMoreStreams = output.HasMoreStreams;
    }
    if (output.StreamNames !== undefined && output.StreamNames !== null) {
        contents.StreamNames = deserializeAws_json1_1StreamNameList(output.StreamNames, context);
    }
    return contents;
};
const deserializeAws_json1_1ListTagsForStreamOutput = (output, context) => {
    let contents = {
        __type: "ListTagsForStreamOutput",
        HasMoreTags: undefined,
        Tags: undefined
    };
    if (output.HasMoreTags !== undefined && output.HasMoreTags !== null) {
        contents.HasMoreTags = output.HasMoreTags;
    }
    if (output.Tags !== undefined && output.Tags !== null) {
        contents.Tags = deserializeAws_json1_1TagList(output.Tags, context);
    }
    return contents;
};
const deserializeAws_json1_1MetricsNameList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1ProvisionedThroughputExceededException = (output, context) => {
    let contents = {
        __type: "ProvisionedThroughputExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1PutRecordOutput = (output, context) => {
    let contents = {
        __type: "PutRecordOutput",
        EncryptionType: undefined,
        SequenceNumber: undefined,
        ShardId: undefined
    };
    if (output.EncryptionType !== undefined && output.EncryptionType !== null) {
        contents.EncryptionType = output.EncryptionType;
    }
    if (output.SequenceNumber !== undefined && output.SequenceNumber !== null) {
        contents.SequenceNumber = output.SequenceNumber;
    }
    if (output.ShardId !== undefined && output.ShardId !== null) {
        contents.ShardId = output.ShardId;
    }
    return contents;
};
const deserializeAws_json1_1PutRecordsOutput = (output, context) => {
    let contents = {
        __type: "PutRecordsOutput",
        EncryptionType: undefined,
        FailedRecordCount: undefined,
        Records: undefined
    };
    if (output.EncryptionType !== undefined && output.EncryptionType !== null) {
        contents.EncryptionType = output.EncryptionType;
    }
    if (output.FailedRecordCount !== undefined &&
        output.FailedRecordCount !== null) {
        contents.FailedRecordCount = output.FailedRecordCount;
    }
    if (output.Records !== undefined && output.Records !== null) {
        contents.Records = deserializeAws_json1_1PutRecordsResultEntryList(output.Records, context);
    }
    return contents;
};
const deserializeAws_json1_1PutRecordsResultEntry = (output, context) => {
    let contents = {
        __type: "PutRecordsResultEntry",
        ErrorCode: undefined,
        ErrorMessage: undefined,
        SequenceNumber: undefined,
        ShardId: undefined
    };
    if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
        contents.ErrorCode = output.ErrorCode;
    }
    if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
        contents.ErrorMessage = output.ErrorMessage;
    }
    if (output.SequenceNumber !== undefined && output.SequenceNumber !== null) {
        contents.SequenceNumber = output.SequenceNumber;
    }
    if (output.ShardId !== undefined && output.ShardId !== null) {
        contents.ShardId = output.ShardId;
    }
    return contents;
};
const deserializeAws_json1_1PutRecordsResultEntryList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1PutRecordsResultEntry(entry, context));
};
const deserializeAws_json1_1_Record = (output, context) => {
    let contents = {
        __type: "Record",
        ApproximateArrivalTimestamp: undefined,
        Data: undefined,
        EncryptionType: undefined,
        PartitionKey: undefined,
        SequenceNumber: undefined
    };
    if (output.ApproximateArrivalTimestamp !== undefined &&
        output.ApproximateArrivalTimestamp !== null) {
        contents.ApproximateArrivalTimestamp = new Date(Math.round(output.ApproximateArrivalTimestamp * 1000));
    }
    if (output.Data !== undefined && output.Data !== null) {
        contents.Data = Uint8Array.from(output.Data);
    }
    if (output.EncryptionType !== undefined && output.EncryptionType !== null) {
        contents.EncryptionType = output.EncryptionType;
    }
    if (output.PartitionKey !== undefined && output.PartitionKey !== null) {
        contents.PartitionKey = output.PartitionKey;
    }
    if (output.SequenceNumber !== undefined && output.SequenceNumber !== null) {
        contents.SequenceNumber = output.SequenceNumber;
    }
    return contents;
};
const deserializeAws_json1_1RecordList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1_Record(entry, context));
};
const deserializeAws_json1_1RegisterStreamConsumerOutput = (output, context) => {
    let contents = {
        __type: "RegisterStreamConsumerOutput",
        Consumer: undefined
    };
    if (output.Consumer !== undefined && output.Consumer !== null) {
        contents.Consumer = deserializeAws_json1_1Consumer(output.Consumer, context);
    }
    return contents;
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
const deserializeAws_json1_1SequenceNumberRange = (output, context) => {
    let contents = {
        __type: "SequenceNumberRange",
        EndingSequenceNumber: undefined,
        StartingSequenceNumber: undefined
    };
    if (output.EndingSequenceNumber !== undefined &&
        output.EndingSequenceNumber !== null) {
        contents.EndingSequenceNumber = output.EndingSequenceNumber;
    }
    if (output.StartingSequenceNumber !== undefined &&
        output.StartingSequenceNumber !== null) {
        contents.StartingSequenceNumber = output.StartingSequenceNumber;
    }
    return contents;
};
const deserializeAws_json1_1Shard = (output, context) => {
    let contents = {
        __type: "Shard",
        AdjacentParentShardId: undefined,
        HashKeyRange: undefined,
        ParentShardId: undefined,
        SequenceNumberRange: undefined,
        ShardId: undefined
    };
    if (output.AdjacentParentShardId !== undefined &&
        output.AdjacentParentShardId !== null) {
        contents.AdjacentParentShardId = output.AdjacentParentShardId;
    }
    if (output.HashKeyRange !== undefined && output.HashKeyRange !== null) {
        contents.HashKeyRange = deserializeAws_json1_1HashKeyRange(output.HashKeyRange, context);
    }
    if (output.ParentShardId !== undefined && output.ParentShardId !== null) {
        contents.ParentShardId = output.ParentShardId;
    }
    if (output.SequenceNumberRange !== undefined &&
        output.SequenceNumberRange !== null) {
        contents.SequenceNumberRange = deserializeAws_json1_1SequenceNumberRange(output.SequenceNumberRange, context);
    }
    if (output.ShardId !== undefined && output.ShardId !== null) {
        contents.ShardId = output.ShardId;
    }
    return contents;
};
const deserializeAws_json1_1ShardList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Shard(entry, context));
};
const deserializeAws_json1_1StreamDescription = (output, context) => {
    let contents = {
        __type: "StreamDescription",
        EncryptionType: undefined,
        EnhancedMonitoring: undefined,
        HasMoreShards: undefined,
        KeyId: undefined,
        RetentionPeriodHours: undefined,
        Shards: undefined,
        StreamARN: undefined,
        StreamCreationTimestamp: undefined,
        StreamName: undefined,
        StreamStatus: undefined
    };
    if (output.EncryptionType !== undefined && output.EncryptionType !== null) {
        contents.EncryptionType = output.EncryptionType;
    }
    if (output.EnhancedMonitoring !== undefined &&
        output.EnhancedMonitoring !== null) {
        contents.EnhancedMonitoring = deserializeAws_json1_1EnhancedMonitoringList(output.EnhancedMonitoring, context);
    }
    if (output.HasMoreShards !== undefined && output.HasMoreShards !== null) {
        contents.HasMoreShards = output.HasMoreShards;
    }
    if (output.KeyId !== undefined && output.KeyId !== null) {
        contents.KeyId = output.KeyId;
    }
    if (output.RetentionPeriodHours !== undefined &&
        output.RetentionPeriodHours !== null) {
        contents.RetentionPeriodHours = output.RetentionPeriodHours;
    }
    if (output.Shards !== undefined && output.Shards !== null) {
        contents.Shards = deserializeAws_json1_1ShardList(output.Shards, context);
    }
    if (output.StreamARN !== undefined && output.StreamARN !== null) {
        contents.StreamARN = output.StreamARN;
    }
    if (output.StreamCreationTimestamp !== undefined &&
        output.StreamCreationTimestamp !== null) {
        contents.StreamCreationTimestamp = new Date(Math.round(output.StreamCreationTimestamp * 1000));
    }
    if (output.StreamName !== undefined && output.StreamName !== null) {
        contents.StreamName = output.StreamName;
    }
    if (output.StreamStatus !== undefined && output.StreamStatus !== null) {
        contents.StreamStatus = output.StreamStatus;
    }
    return contents;
};
const deserializeAws_json1_1StreamDescriptionSummary = (output, context) => {
    let contents = {
        __type: "StreamDescriptionSummary",
        ConsumerCount: undefined,
        EncryptionType: undefined,
        EnhancedMonitoring: undefined,
        KeyId: undefined,
        OpenShardCount: undefined,
        RetentionPeriodHours: undefined,
        StreamARN: undefined,
        StreamCreationTimestamp: undefined,
        StreamName: undefined,
        StreamStatus: undefined
    };
    if (output.ConsumerCount !== undefined && output.ConsumerCount !== null) {
        contents.ConsumerCount = output.ConsumerCount;
    }
    if (output.EncryptionType !== undefined && output.EncryptionType !== null) {
        contents.EncryptionType = output.EncryptionType;
    }
    if (output.EnhancedMonitoring !== undefined &&
        output.EnhancedMonitoring !== null) {
        contents.EnhancedMonitoring = deserializeAws_json1_1EnhancedMonitoringList(output.EnhancedMonitoring, context);
    }
    if (output.KeyId !== undefined && output.KeyId !== null) {
        contents.KeyId = output.KeyId;
    }
    if (output.OpenShardCount !== undefined && output.OpenShardCount !== null) {
        contents.OpenShardCount = output.OpenShardCount;
    }
    if (output.RetentionPeriodHours !== undefined &&
        output.RetentionPeriodHours !== null) {
        contents.RetentionPeriodHours = output.RetentionPeriodHours;
    }
    if (output.StreamARN !== undefined && output.StreamARN !== null) {
        contents.StreamARN = output.StreamARN;
    }
    if (output.StreamCreationTimestamp !== undefined &&
        output.StreamCreationTimestamp !== null) {
        contents.StreamCreationTimestamp = new Date(Math.round(output.StreamCreationTimestamp * 1000));
    }
    if (output.StreamName !== undefined && output.StreamName !== null) {
        contents.StreamName = output.StreamName;
    }
    if (output.StreamStatus !== undefined && output.StreamStatus !== null) {
        contents.StreamStatus = output.StreamStatus;
    }
    return contents;
};
const deserializeAws_json1_1StreamNameList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1SubscribeToShardEvent = (output, context) => {
    let contents = {
        __type: "SubscribeToShardEvent",
        ContinuationSequenceNumber: undefined,
        MillisBehindLatest: undefined,
        Records: undefined
    };
    if (output.ContinuationSequenceNumber !== undefined &&
        output.ContinuationSequenceNumber !== null) {
        contents.ContinuationSequenceNumber = output.ContinuationSequenceNumber;
    }
    if (output.MillisBehindLatest !== undefined &&
        output.MillisBehindLatest !== null) {
        contents.MillisBehindLatest = output.MillisBehindLatest;
    }
    if (output.Records !== undefined && output.Records !== null) {
        contents.Records = deserializeAws_json1_1RecordList(output.Records, context);
    }
    return contents;
};
const deserializeAws_json1_1SubscribeToShardEventStream = (output, context) => {
    if (output.InternalFailureException !== undefined &&
        output.InternalFailureException !== null) {
        return {
            InternalFailureException: deserializeAws_json1_1InternalFailureException(output.InternalFailureException, context)
        };
    }
    if (output.KMSAccessDeniedException !== undefined &&
        output.KMSAccessDeniedException !== null) {
        return {
            KMSAccessDeniedException: deserializeAws_json1_1KMSAccessDeniedException(output.KMSAccessDeniedException, context)
        };
    }
    if (output.KMSDisabledException !== undefined &&
        output.KMSDisabledException !== null) {
        return {
            KMSDisabledException: deserializeAws_json1_1KMSDisabledException(output.KMSDisabledException, context)
        };
    }
    if (output.KMSInvalidStateException !== undefined &&
        output.KMSInvalidStateException !== null) {
        return {
            KMSInvalidStateException: deserializeAws_json1_1KMSInvalidStateException(output.KMSInvalidStateException, context)
        };
    }
    if (output.KMSNotFoundException !== undefined &&
        output.KMSNotFoundException !== null) {
        return {
            KMSNotFoundException: deserializeAws_json1_1KMSNotFoundException(output.KMSNotFoundException, context)
        };
    }
    if (output.KMSOptInRequired !== undefined &&
        output.KMSOptInRequired !== null) {
        return {
            KMSOptInRequired: deserializeAws_json1_1KMSOptInRequired(output.KMSOptInRequired, context)
        };
    }
    if (output.KMSThrottlingException !== undefined &&
        output.KMSThrottlingException !== null) {
        return {
            KMSThrottlingException: deserializeAws_json1_1KMSThrottlingException(output.KMSThrottlingException, context)
        };
    }
    if (output.ResourceInUseException !== undefined &&
        output.ResourceInUseException !== null) {
        return {
            ResourceInUseException: deserializeAws_json1_1ResourceInUseException(output.ResourceInUseException, context)
        };
    }
    if (output.ResourceNotFoundException !== undefined &&
        output.ResourceNotFoundException !== null) {
        return {
            ResourceNotFoundException: deserializeAws_json1_1ResourceNotFoundException(output.ResourceNotFoundException, context)
        };
    }
    if (output.SubscribeToShardEvent !== undefined &&
        output.SubscribeToShardEvent !== null) {
        return {
            SubscribeToShardEvent: deserializeAws_json1_1SubscribeToShardEvent(output.SubscribeToShardEvent, context)
        };
    }
    const key = Object.keys(output)[0];
    return { $unknown: [key, output[key]] };
};
const deserializeAws_json1_1SubscribeToShardOutput = (output, context) => {
    let contents = {
        __type: "SubscribeToShardOutput",
        EventStream: undefined
    };
    if (output.EventStream !== undefined && output.EventStream !== null) {
        contents.EventStream = deserializeAws_json1_1SubscribeToShardEventStream(output.EventStream, context);
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
const deserializeAws_json1_1UpdateShardCountOutput = (output, context) => {
    let contents = {
        __type: "UpdateShardCountOutput",
        CurrentShardCount: undefined,
        StreamName: undefined,
        TargetShardCount: undefined
    };
    if (output.CurrentShardCount !== undefined &&
        output.CurrentShardCount !== null) {
        contents.CurrentShardCount = output.CurrentShardCount;
    }
    if (output.StreamName !== undefined && output.StreamName !== null) {
        contents.StreamName = output.StreamName;
    }
    if (output.TargetShardCount !== undefined &&
        output.TargetShardCount !== null) {
        contents.TargetShardCount = output.TargetShardCount;
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