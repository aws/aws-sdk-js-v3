"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1CreateDeliveryStreamCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Firehose_20150804.CreateDeliveryStream";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDeliveryStreamInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateDeliveryStreamCommand = serializeAws_json1_1CreateDeliveryStreamCommand;
async function serializeAws_json1_1DeleteDeliveryStreamCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Firehose_20150804.DeleteDeliveryStream";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteDeliveryStreamInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteDeliveryStreamCommand = serializeAws_json1_1DeleteDeliveryStreamCommand;
async function serializeAws_json1_1DescribeDeliveryStreamCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Firehose_20150804.DescribeDeliveryStream";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeDeliveryStreamInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeDeliveryStreamCommand = serializeAws_json1_1DescribeDeliveryStreamCommand;
async function serializeAws_json1_1ListDeliveryStreamsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Firehose_20150804.ListDeliveryStreams";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListDeliveryStreamsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListDeliveryStreamsCommand = serializeAws_json1_1ListDeliveryStreamsCommand;
async function serializeAws_json1_1ListTagsForDeliveryStreamCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Firehose_20150804.ListTagsForDeliveryStream";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForDeliveryStreamInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTagsForDeliveryStreamCommand = serializeAws_json1_1ListTagsForDeliveryStreamCommand;
async function serializeAws_json1_1PutRecordCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Firehose_20150804.PutRecord";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutRecordInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutRecordCommand = serializeAws_json1_1PutRecordCommand;
async function serializeAws_json1_1PutRecordBatchCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Firehose_20150804.PutRecordBatch";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutRecordBatchInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutRecordBatchCommand = serializeAws_json1_1PutRecordBatchCommand;
async function serializeAws_json1_1StartDeliveryStreamEncryptionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Firehose_20150804.StartDeliveryStreamEncryption";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartDeliveryStreamEncryptionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartDeliveryStreamEncryptionCommand = serializeAws_json1_1StartDeliveryStreamEncryptionCommand;
async function serializeAws_json1_1StopDeliveryStreamEncryptionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Firehose_20150804.StopDeliveryStreamEncryption";
    let body;
    body = JSON.stringify(serializeAws_json1_1StopDeliveryStreamEncryptionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StopDeliveryStreamEncryptionCommand = serializeAws_json1_1StopDeliveryStreamEncryptionCommand;
async function serializeAws_json1_1TagDeliveryStreamCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Firehose_20150804.TagDeliveryStream";
    let body;
    body = JSON.stringify(serializeAws_json1_1TagDeliveryStreamInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1TagDeliveryStreamCommand = serializeAws_json1_1TagDeliveryStreamCommand;
async function serializeAws_json1_1UntagDeliveryStreamCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Firehose_20150804.UntagDeliveryStream";
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagDeliveryStreamInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UntagDeliveryStreamCommand = serializeAws_json1_1UntagDeliveryStreamCommand;
async function serializeAws_json1_1UpdateDestinationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Firehose_20150804.UpdateDestination";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateDestinationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateDestinationCommand = serializeAws_json1_1UpdateDestinationCommand;
async function deserializeAws_json1_1CreateDeliveryStreamCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateDeliveryStreamCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateDeliveryStreamOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateDeliveryStreamOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateDeliveryStreamCommand = deserializeAws_json1_1CreateDeliveryStreamCommand;
async function deserializeAws_json1_1CreateDeliveryStreamCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.firehose.v20150804#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidKMSResourceException":
        case "com.amazonaws.firehose.v20150804#InvalidKMSResourceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidKMSResourceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.firehose.v20150804#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.firehose.v20150804#ResourceInUseException":
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
async function deserializeAws_json1_1DeleteDeliveryStreamCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteDeliveryStreamCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteDeliveryStreamOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteDeliveryStreamOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteDeliveryStreamCommand = deserializeAws_json1_1DeleteDeliveryStreamCommand;
async function deserializeAws_json1_1DeleteDeliveryStreamCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceInUseException":
        case "com.amazonaws.firehose.v20150804#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.firehose.v20150804#ResourceNotFoundException":
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
async function deserializeAws_json1_1DescribeDeliveryStreamCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeDeliveryStreamCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeDeliveryStreamOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeDeliveryStreamOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeDeliveryStreamCommand = deserializeAws_json1_1DescribeDeliveryStreamCommand;
async function deserializeAws_json1_1DescribeDeliveryStreamCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.firehose.v20150804#ResourceNotFoundException":
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
async function deserializeAws_json1_1ListDeliveryStreamsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListDeliveryStreamsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListDeliveryStreamsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListDeliveryStreamsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListDeliveryStreamsCommand = deserializeAws_json1_1ListDeliveryStreamsCommand;
async function deserializeAws_json1_1ListDeliveryStreamsCommandError(output, context) {
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
async function deserializeAws_json1_1ListTagsForDeliveryStreamCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListTagsForDeliveryStreamCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTagsForDeliveryStreamOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListTagsForDeliveryStreamOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListTagsForDeliveryStreamCommand = deserializeAws_json1_1ListTagsForDeliveryStreamCommand;
async function deserializeAws_json1_1ListTagsForDeliveryStreamCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.firehose.v20150804#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.firehose.v20150804#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.firehose.v20150804#ResourceNotFoundException":
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
        case "com.amazonaws.firehose.v20150804#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidKMSResourceException":
        case "com.amazonaws.firehose.v20150804#InvalidKMSResourceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidKMSResourceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.firehose.v20150804#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.firehose.v20150804#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1PutRecordBatchCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutRecordBatchCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutRecordBatchOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutRecordBatchOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutRecordBatchCommand = deserializeAws_json1_1PutRecordBatchCommand;
async function deserializeAws_json1_1PutRecordBatchCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.firehose.v20150804#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidKMSResourceException":
        case "com.amazonaws.firehose.v20150804#InvalidKMSResourceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidKMSResourceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.firehose.v20150804#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.firehose.v20150804#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StartDeliveryStreamEncryptionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartDeliveryStreamEncryptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartDeliveryStreamEncryptionOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartDeliveryStreamEncryptionOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartDeliveryStreamEncryptionCommand = deserializeAws_json1_1StartDeliveryStreamEncryptionCommand;
async function deserializeAws_json1_1StartDeliveryStreamEncryptionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.firehose.v20150804#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidKMSResourceException":
        case "com.amazonaws.firehose.v20150804#InvalidKMSResourceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidKMSResourceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.firehose.v20150804#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.firehose.v20150804#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.firehose.v20150804#ResourceNotFoundException":
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
async function deserializeAws_json1_1StopDeliveryStreamEncryptionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StopDeliveryStreamEncryptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopDeliveryStreamEncryptionOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StopDeliveryStreamEncryptionOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StopDeliveryStreamEncryptionCommand = deserializeAws_json1_1StopDeliveryStreamEncryptionCommand;
async function deserializeAws_json1_1StopDeliveryStreamEncryptionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.firehose.v20150804#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.firehose.v20150804#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.firehose.v20150804#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.firehose.v20150804#ResourceNotFoundException":
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
async function deserializeAws_json1_1TagDeliveryStreamCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1TagDeliveryStreamCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1TagDeliveryStreamOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "TagDeliveryStreamOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1TagDeliveryStreamCommand = deserializeAws_json1_1TagDeliveryStreamCommand;
async function deserializeAws_json1_1TagDeliveryStreamCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.firehose.v20150804#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.firehose.v20150804#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.firehose.v20150804#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.firehose.v20150804#ResourceNotFoundException":
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
async function deserializeAws_json1_1UntagDeliveryStreamCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UntagDeliveryStreamCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UntagDeliveryStreamOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UntagDeliveryStreamOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UntagDeliveryStreamCommand = deserializeAws_json1_1UntagDeliveryStreamCommand;
async function deserializeAws_json1_1UntagDeliveryStreamCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.firehose.v20150804#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.firehose.v20150804#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.firehose.v20150804#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.firehose.v20150804#ResourceNotFoundException":
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
async function deserializeAws_json1_1UpdateDestinationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateDestinationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateDestinationOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateDestinationOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateDestinationCommand = deserializeAws_json1_1UpdateDestinationCommand;
async function deserializeAws_json1_1UpdateDestinationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.firehose.v20150804#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.firehose.v20150804#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.firehose.v20150804#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.firehose.v20150804#ResourceNotFoundException":
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
const deserializeAws_json1_1ConcurrentModificationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ConcurrentModificationException(body, context);
    const contents = Object.assign({ name: "ConcurrentModificationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidArgumentExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidArgumentException(body, context);
    const contents = Object.assign({ name: "InvalidArgumentException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidKMSResourceExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidKMSResourceException(body, context);
    const contents = Object.assign({ name: "InvalidKMSResourceException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
const deserializeAws_json1_1ServiceUnavailableExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ServiceUnavailableException(body, context);
    const contents = Object.assign({ name: "ServiceUnavailableException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1BufferingHints = (input, context) => {
    const bodyParams = {};
    if (input.IntervalInSeconds !== undefined) {
        bodyParams["IntervalInSeconds"] = input.IntervalInSeconds;
    }
    if (input.SizeInMBs !== undefined) {
        bodyParams["SizeInMBs"] = input.SizeInMBs;
    }
    return bodyParams;
};
const serializeAws_json1_1CloudWatchLoggingOptions = (input, context) => {
    const bodyParams = {};
    if (input.Enabled !== undefined) {
        bodyParams["Enabled"] = input.Enabled;
    }
    if (input.LogGroupName !== undefined) {
        bodyParams["LogGroupName"] = input.LogGroupName;
    }
    if (input.LogStreamName !== undefined) {
        bodyParams["LogStreamName"] = input.LogStreamName;
    }
    return bodyParams;
};
const serializeAws_json1_1ColumnToJsonKeyMappings = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1CopyCommand = (input, context) => {
    const bodyParams = {};
    if (input.CopyOptions !== undefined) {
        bodyParams["CopyOptions"] = input.CopyOptions;
    }
    if (input.DataTableColumns !== undefined) {
        bodyParams["DataTableColumns"] = input.DataTableColumns;
    }
    if (input.DataTableName !== undefined) {
        bodyParams["DataTableName"] = input.DataTableName;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateDeliveryStreamInput = (input, context) => {
    const bodyParams = {};
    if (input.DeliveryStreamEncryptionConfigurationInput !== undefined) {
        bodyParams["DeliveryStreamEncryptionConfigurationInput"] = serializeAws_json1_1DeliveryStreamEncryptionConfigurationInput(input.DeliveryStreamEncryptionConfigurationInput, context);
    }
    if (input.DeliveryStreamName !== undefined) {
        bodyParams["DeliveryStreamName"] = input.DeliveryStreamName;
    }
    if (input.DeliveryStreamType !== undefined) {
        bodyParams["DeliveryStreamType"] = input.DeliveryStreamType;
    }
    if (input.ElasticsearchDestinationConfiguration !== undefined) {
        bodyParams["ElasticsearchDestinationConfiguration"] = serializeAws_json1_1ElasticsearchDestinationConfiguration(input.ElasticsearchDestinationConfiguration, context);
    }
    if (input.ExtendedS3DestinationConfiguration !== undefined) {
        bodyParams["ExtendedS3DestinationConfiguration"] = serializeAws_json1_1ExtendedS3DestinationConfiguration(input.ExtendedS3DestinationConfiguration, context);
    }
    if (input.KinesisStreamSourceConfiguration !== undefined) {
        bodyParams["KinesisStreamSourceConfiguration"] = serializeAws_json1_1KinesisStreamSourceConfiguration(input.KinesisStreamSourceConfiguration, context);
    }
    if (input.RedshiftDestinationConfiguration !== undefined) {
        bodyParams["RedshiftDestinationConfiguration"] = serializeAws_json1_1RedshiftDestinationConfiguration(input.RedshiftDestinationConfiguration, context);
    }
    if (input.S3DestinationConfiguration !== undefined) {
        bodyParams["S3DestinationConfiguration"] = serializeAws_json1_1S3DestinationConfiguration(input.S3DestinationConfiguration, context);
    }
    if (input.SplunkDestinationConfiguration !== undefined) {
        bodyParams["SplunkDestinationConfiguration"] = serializeAws_json1_1SplunkDestinationConfiguration(input.SplunkDestinationConfiguration, context);
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagDeliveryStreamInputTagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DataFormatConversionConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.Enabled !== undefined) {
        bodyParams["Enabled"] = input.Enabled;
    }
    if (input.InputFormatConfiguration !== undefined) {
        bodyParams["InputFormatConfiguration"] = serializeAws_json1_1InputFormatConfiguration(input.InputFormatConfiguration, context);
    }
    if (input.OutputFormatConfiguration !== undefined) {
        bodyParams["OutputFormatConfiguration"] = serializeAws_json1_1OutputFormatConfiguration(input.OutputFormatConfiguration, context);
    }
    if (input.SchemaConfiguration !== undefined) {
        bodyParams["SchemaConfiguration"] = serializeAws_json1_1SchemaConfiguration(input.SchemaConfiguration, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteDeliveryStreamInput = (input, context) => {
    const bodyParams = {};
    if (input.AllowForceDelete !== undefined) {
        bodyParams["AllowForceDelete"] = input.AllowForceDelete;
    }
    if (input.DeliveryStreamName !== undefined) {
        bodyParams["DeliveryStreamName"] = input.DeliveryStreamName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeliveryStreamEncryptionConfigurationInput = (input, context) => {
    const bodyParams = {};
    if (input.KeyARN !== undefined) {
        bodyParams["KeyARN"] = input.KeyARN;
    }
    if (input.KeyType !== undefined) {
        bodyParams["KeyType"] = input.KeyType;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeDeliveryStreamInput = (input, context) => {
    const bodyParams = {};
    if (input.DeliveryStreamName !== undefined) {
        bodyParams["DeliveryStreamName"] = input.DeliveryStreamName;
    }
    if (input.ExclusiveStartDestinationId !== undefined) {
        bodyParams["ExclusiveStartDestinationId"] =
            input.ExclusiveStartDestinationId;
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    return bodyParams;
};
const serializeAws_json1_1Deserializer = (input, context) => {
    const bodyParams = {};
    if (input.HiveJsonSerDe !== undefined) {
        bodyParams["HiveJsonSerDe"] = serializeAws_json1_1HiveJsonSerDe(input.HiveJsonSerDe, context);
    }
    if (input.OpenXJsonSerDe !== undefined) {
        bodyParams["OpenXJsonSerDe"] = serializeAws_json1_1OpenXJsonSerDe(input.OpenXJsonSerDe, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ElasticsearchBufferingHints = (input, context) => {
    const bodyParams = {};
    if (input.IntervalInSeconds !== undefined) {
        bodyParams["IntervalInSeconds"] = input.IntervalInSeconds;
    }
    if (input.SizeInMBs !== undefined) {
        bodyParams["SizeInMBs"] = input.SizeInMBs;
    }
    return bodyParams;
};
const serializeAws_json1_1ElasticsearchDestinationConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.BufferingHints !== undefined) {
        bodyParams["BufferingHints"] = serializeAws_json1_1ElasticsearchBufferingHints(input.BufferingHints, context);
    }
    if (input.CloudWatchLoggingOptions !== undefined) {
        bodyParams["CloudWatchLoggingOptions"] = serializeAws_json1_1CloudWatchLoggingOptions(input.CloudWatchLoggingOptions, context);
    }
    if (input.ClusterEndpoint !== undefined) {
        bodyParams["ClusterEndpoint"] = input.ClusterEndpoint;
    }
    if (input.DomainARN !== undefined) {
        bodyParams["DomainARN"] = input.DomainARN;
    }
    if (input.IndexName !== undefined) {
        bodyParams["IndexName"] = input.IndexName;
    }
    if (input.IndexRotationPeriod !== undefined) {
        bodyParams["IndexRotationPeriod"] = input.IndexRotationPeriod;
    }
    if (input.ProcessingConfiguration !== undefined) {
        bodyParams["ProcessingConfiguration"] = serializeAws_json1_1ProcessingConfiguration(input.ProcessingConfiguration, context);
    }
    if (input.RetryOptions !== undefined) {
        bodyParams["RetryOptions"] = serializeAws_json1_1ElasticsearchRetryOptions(input.RetryOptions, context);
    }
    if (input.RoleARN !== undefined) {
        bodyParams["RoleARN"] = input.RoleARN;
    }
    if (input.S3BackupMode !== undefined) {
        bodyParams["S3BackupMode"] = input.S3BackupMode;
    }
    if (input.S3Configuration !== undefined) {
        bodyParams["S3Configuration"] = serializeAws_json1_1S3DestinationConfiguration(input.S3Configuration, context);
    }
    if (input.TypeName !== undefined) {
        bodyParams["TypeName"] = input.TypeName;
    }
    return bodyParams;
};
const serializeAws_json1_1ElasticsearchDestinationUpdate = (input, context) => {
    const bodyParams = {};
    if (input.BufferingHints !== undefined) {
        bodyParams["BufferingHints"] = serializeAws_json1_1ElasticsearchBufferingHints(input.BufferingHints, context);
    }
    if (input.CloudWatchLoggingOptions !== undefined) {
        bodyParams["CloudWatchLoggingOptions"] = serializeAws_json1_1CloudWatchLoggingOptions(input.CloudWatchLoggingOptions, context);
    }
    if (input.ClusterEndpoint !== undefined) {
        bodyParams["ClusterEndpoint"] = input.ClusterEndpoint;
    }
    if (input.DomainARN !== undefined) {
        bodyParams["DomainARN"] = input.DomainARN;
    }
    if (input.IndexName !== undefined) {
        bodyParams["IndexName"] = input.IndexName;
    }
    if (input.IndexRotationPeriod !== undefined) {
        bodyParams["IndexRotationPeriod"] = input.IndexRotationPeriod;
    }
    if (input.ProcessingConfiguration !== undefined) {
        bodyParams["ProcessingConfiguration"] = serializeAws_json1_1ProcessingConfiguration(input.ProcessingConfiguration, context);
    }
    if (input.RetryOptions !== undefined) {
        bodyParams["RetryOptions"] = serializeAws_json1_1ElasticsearchRetryOptions(input.RetryOptions, context);
    }
    if (input.RoleARN !== undefined) {
        bodyParams["RoleARN"] = input.RoleARN;
    }
    if (input.S3Update !== undefined) {
        bodyParams["S3Update"] = serializeAws_json1_1S3DestinationUpdate(input.S3Update, context);
    }
    if (input.TypeName !== undefined) {
        bodyParams["TypeName"] = input.TypeName;
    }
    return bodyParams;
};
const serializeAws_json1_1ElasticsearchRetryOptions = (input, context) => {
    const bodyParams = {};
    if (input.DurationInSeconds !== undefined) {
        bodyParams["DurationInSeconds"] = input.DurationInSeconds;
    }
    return bodyParams;
};
const serializeAws_json1_1EncryptionConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.KMSEncryptionConfig !== undefined) {
        bodyParams["KMSEncryptionConfig"] = serializeAws_json1_1KMSEncryptionConfig(input.KMSEncryptionConfig, context);
    }
    if (input.NoEncryptionConfig !== undefined) {
        bodyParams["NoEncryptionConfig"] = input.NoEncryptionConfig;
    }
    return bodyParams;
};
const serializeAws_json1_1ExtendedS3DestinationConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.BucketARN !== undefined) {
        bodyParams["BucketARN"] = input.BucketARN;
    }
    if (input.BufferingHints !== undefined) {
        bodyParams["BufferingHints"] = serializeAws_json1_1BufferingHints(input.BufferingHints, context);
    }
    if (input.CloudWatchLoggingOptions !== undefined) {
        bodyParams["CloudWatchLoggingOptions"] = serializeAws_json1_1CloudWatchLoggingOptions(input.CloudWatchLoggingOptions, context);
    }
    if (input.CompressionFormat !== undefined) {
        bodyParams["CompressionFormat"] = input.CompressionFormat;
    }
    if (input.DataFormatConversionConfiguration !== undefined) {
        bodyParams["DataFormatConversionConfiguration"] = serializeAws_json1_1DataFormatConversionConfiguration(input.DataFormatConversionConfiguration, context);
    }
    if (input.EncryptionConfiguration !== undefined) {
        bodyParams["EncryptionConfiguration"] = serializeAws_json1_1EncryptionConfiguration(input.EncryptionConfiguration, context);
    }
    if (input.ErrorOutputPrefix !== undefined) {
        bodyParams["ErrorOutputPrefix"] = input.ErrorOutputPrefix;
    }
    if (input.Prefix !== undefined) {
        bodyParams["Prefix"] = input.Prefix;
    }
    if (input.ProcessingConfiguration !== undefined) {
        bodyParams["ProcessingConfiguration"] = serializeAws_json1_1ProcessingConfiguration(input.ProcessingConfiguration, context);
    }
    if (input.RoleARN !== undefined) {
        bodyParams["RoleARN"] = input.RoleARN;
    }
    if (input.S3BackupConfiguration !== undefined) {
        bodyParams["S3BackupConfiguration"] = serializeAws_json1_1S3DestinationConfiguration(input.S3BackupConfiguration, context);
    }
    if (input.S3BackupMode !== undefined) {
        bodyParams["S3BackupMode"] = input.S3BackupMode;
    }
    return bodyParams;
};
const serializeAws_json1_1ExtendedS3DestinationUpdate = (input, context) => {
    const bodyParams = {};
    if (input.BucketARN !== undefined) {
        bodyParams["BucketARN"] = input.BucketARN;
    }
    if (input.BufferingHints !== undefined) {
        bodyParams["BufferingHints"] = serializeAws_json1_1BufferingHints(input.BufferingHints, context);
    }
    if (input.CloudWatchLoggingOptions !== undefined) {
        bodyParams["CloudWatchLoggingOptions"] = serializeAws_json1_1CloudWatchLoggingOptions(input.CloudWatchLoggingOptions, context);
    }
    if (input.CompressionFormat !== undefined) {
        bodyParams["CompressionFormat"] = input.CompressionFormat;
    }
    if (input.DataFormatConversionConfiguration !== undefined) {
        bodyParams["DataFormatConversionConfiguration"] = serializeAws_json1_1DataFormatConversionConfiguration(input.DataFormatConversionConfiguration, context);
    }
    if (input.EncryptionConfiguration !== undefined) {
        bodyParams["EncryptionConfiguration"] = serializeAws_json1_1EncryptionConfiguration(input.EncryptionConfiguration, context);
    }
    if (input.ErrorOutputPrefix !== undefined) {
        bodyParams["ErrorOutputPrefix"] = input.ErrorOutputPrefix;
    }
    if (input.Prefix !== undefined) {
        bodyParams["Prefix"] = input.Prefix;
    }
    if (input.ProcessingConfiguration !== undefined) {
        bodyParams["ProcessingConfiguration"] = serializeAws_json1_1ProcessingConfiguration(input.ProcessingConfiguration, context);
    }
    if (input.RoleARN !== undefined) {
        bodyParams["RoleARN"] = input.RoleARN;
    }
    if (input.S3BackupMode !== undefined) {
        bodyParams["S3BackupMode"] = input.S3BackupMode;
    }
    if (input.S3BackupUpdate !== undefined) {
        bodyParams["S3BackupUpdate"] = serializeAws_json1_1S3DestinationUpdate(input.S3BackupUpdate, context);
    }
    return bodyParams;
};
const serializeAws_json1_1HiveJsonSerDe = (input, context) => {
    const bodyParams = {};
    if (input.TimestampFormats !== undefined) {
        bodyParams["TimestampFormats"] = serializeAws_json1_1ListOfNonEmptyStrings(input.TimestampFormats, context);
    }
    return bodyParams;
};
const serializeAws_json1_1InputFormatConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.Deserializer !== undefined) {
        bodyParams["Deserializer"] = serializeAws_json1_1Deserializer(input.Deserializer, context);
    }
    return bodyParams;
};
const serializeAws_json1_1KMSEncryptionConfig = (input, context) => {
    const bodyParams = {};
    if (input.AWSKMSKeyARN !== undefined) {
        bodyParams["AWSKMSKeyARN"] = input.AWSKMSKeyARN;
    }
    return bodyParams;
};
const serializeAws_json1_1KinesisStreamSourceConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.KinesisStreamARN !== undefined) {
        bodyParams["KinesisStreamARN"] = input.KinesisStreamARN;
    }
    if (input.RoleARN !== undefined) {
        bodyParams["RoleARN"] = input.RoleARN;
    }
    return bodyParams;
};
const serializeAws_json1_1ListDeliveryStreamsInput = (input, context) => {
    const bodyParams = {};
    if (input.DeliveryStreamType !== undefined) {
        bodyParams["DeliveryStreamType"] = input.DeliveryStreamType;
    }
    if (input.ExclusiveStartDeliveryStreamName !== undefined) {
        bodyParams["ExclusiveStartDeliveryStreamName"] =
            input.ExclusiveStartDeliveryStreamName;
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    return bodyParams;
};
const serializeAws_json1_1ListOfNonEmptyStrings = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ListOfNonEmptyStringsWithoutWhitespace = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ListTagsForDeliveryStreamInput = (input, context) => {
    const bodyParams = {};
    if (input.DeliveryStreamName !== undefined) {
        bodyParams["DeliveryStreamName"] = input.DeliveryStreamName;
    }
    if (input.ExclusiveStartTagKey !== undefined) {
        bodyParams["ExclusiveStartTagKey"] = input.ExclusiveStartTagKey;
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    return bodyParams;
};
const serializeAws_json1_1OpenXJsonSerDe = (input, context) => {
    const bodyParams = {};
    if (input.CaseInsensitive !== undefined) {
        bodyParams["CaseInsensitive"] = input.CaseInsensitive;
    }
    if (input.ColumnToJsonKeyMappings !== undefined) {
        bodyParams["ColumnToJsonKeyMappings"] = serializeAws_json1_1ColumnToJsonKeyMappings(input.ColumnToJsonKeyMappings, context);
    }
    if (input.ConvertDotsInJsonKeysToUnderscores !== undefined) {
        bodyParams["ConvertDotsInJsonKeysToUnderscores"] =
            input.ConvertDotsInJsonKeysToUnderscores;
    }
    return bodyParams;
};
const serializeAws_json1_1OrcSerDe = (input, context) => {
    const bodyParams = {};
    if (input.BlockSizeBytes !== undefined) {
        bodyParams["BlockSizeBytes"] = input.BlockSizeBytes;
    }
    if (input.BloomFilterColumns !== undefined) {
        bodyParams["BloomFilterColumns"] = serializeAws_json1_1ListOfNonEmptyStringsWithoutWhitespace(input.BloomFilterColumns, context);
    }
    if (input.BloomFilterFalsePositiveProbability !== undefined) {
        bodyParams["BloomFilterFalsePositiveProbability"] =
            input.BloomFilterFalsePositiveProbability;
    }
    if (input.Compression !== undefined) {
        bodyParams["Compression"] = input.Compression;
    }
    if (input.DictionaryKeyThreshold !== undefined) {
        bodyParams["DictionaryKeyThreshold"] = input.DictionaryKeyThreshold;
    }
    if (input.EnablePadding !== undefined) {
        bodyParams["EnablePadding"] = input.EnablePadding;
    }
    if (input.FormatVersion !== undefined) {
        bodyParams["FormatVersion"] = input.FormatVersion;
    }
    if (input.PaddingTolerance !== undefined) {
        bodyParams["PaddingTolerance"] = input.PaddingTolerance;
    }
    if (input.RowIndexStride !== undefined) {
        bodyParams["RowIndexStride"] = input.RowIndexStride;
    }
    if (input.StripeSizeBytes !== undefined) {
        bodyParams["StripeSizeBytes"] = input.StripeSizeBytes;
    }
    return bodyParams;
};
const serializeAws_json1_1OutputFormatConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.Serializer !== undefined) {
        bodyParams["Serializer"] = serializeAws_json1_1Serializer(input.Serializer, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ParquetSerDe = (input, context) => {
    const bodyParams = {};
    if (input.BlockSizeBytes !== undefined) {
        bodyParams["BlockSizeBytes"] = input.BlockSizeBytes;
    }
    if (input.Compression !== undefined) {
        bodyParams["Compression"] = input.Compression;
    }
    if (input.EnableDictionaryCompression !== undefined) {
        bodyParams["EnableDictionaryCompression"] =
            input.EnableDictionaryCompression;
    }
    if (input.MaxPaddingBytes !== undefined) {
        bodyParams["MaxPaddingBytes"] = input.MaxPaddingBytes;
    }
    if (input.PageSizeBytes !== undefined) {
        bodyParams["PageSizeBytes"] = input.PageSizeBytes;
    }
    if (input.WriterVersion !== undefined) {
        bodyParams["WriterVersion"] = input.WriterVersion;
    }
    return bodyParams;
};
const serializeAws_json1_1ProcessingConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.Enabled !== undefined) {
        bodyParams["Enabled"] = input.Enabled;
    }
    if (input.Processors !== undefined) {
        bodyParams["Processors"] = serializeAws_json1_1ProcessorList(input.Processors, context);
    }
    return bodyParams;
};
const serializeAws_json1_1Processor = (input, context) => {
    const bodyParams = {};
    if (input.Parameters !== undefined) {
        bodyParams["Parameters"] = serializeAws_json1_1ProcessorParameterList(input.Parameters, context);
    }
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
    }
    return bodyParams;
};
const serializeAws_json1_1ProcessorList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Processor(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ProcessorParameter = (input, context) => {
    const bodyParams = {};
    if (input.ParameterName !== undefined) {
        bodyParams["ParameterName"] = input.ParameterName;
    }
    if (input.ParameterValue !== undefined) {
        bodyParams["ParameterValue"] = input.ParameterValue;
    }
    return bodyParams;
};
const serializeAws_json1_1ProcessorParameterList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ProcessorParameter(entry, context));
    }
    return contents;
};
const serializeAws_json1_1PutRecordBatchInput = (input, context) => {
    const bodyParams = {};
    if (input.DeliveryStreamName !== undefined) {
        bodyParams["DeliveryStreamName"] = input.DeliveryStreamName;
    }
    if (input.Records !== undefined) {
        bodyParams["Records"] = serializeAws_json1_1PutRecordBatchRequestEntryList(input.Records, context);
    }
    return bodyParams;
};
const serializeAws_json1_1PutRecordBatchRequestEntryList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1_Record(entry, context));
    }
    return contents;
};
const serializeAws_json1_1PutRecordInput = (input, context) => {
    const bodyParams = {};
    if (input.DeliveryStreamName !== undefined) {
        bodyParams["DeliveryStreamName"] = input.DeliveryStreamName;
    }
    if (input.Record !== undefined) {
        bodyParams["Record"] = serializeAws_json1_1_Record(input.Record, context);
    }
    return bodyParams;
};
const serializeAws_json1_1_Record = (input, context) => {
    const bodyParams = {};
    if (input.Data !== undefined) {
        bodyParams["Data"] = Buffer.from(input.Data).toString("utf-8");
    }
    return bodyParams;
};
const serializeAws_json1_1RedshiftDestinationConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.CloudWatchLoggingOptions !== undefined) {
        bodyParams["CloudWatchLoggingOptions"] = serializeAws_json1_1CloudWatchLoggingOptions(input.CloudWatchLoggingOptions, context);
    }
    if (input.ClusterJDBCURL !== undefined) {
        bodyParams["ClusterJDBCURL"] = input.ClusterJDBCURL;
    }
    if (input.CopyCommand !== undefined) {
        bodyParams["CopyCommand"] = serializeAws_json1_1CopyCommand(input.CopyCommand, context);
    }
    if (input.Password !== undefined) {
        bodyParams["Password"] = input.Password;
    }
    if (input.ProcessingConfiguration !== undefined) {
        bodyParams["ProcessingConfiguration"] = serializeAws_json1_1ProcessingConfiguration(input.ProcessingConfiguration, context);
    }
    if (input.RetryOptions !== undefined) {
        bodyParams["RetryOptions"] = serializeAws_json1_1RedshiftRetryOptions(input.RetryOptions, context);
    }
    if (input.RoleARN !== undefined) {
        bodyParams["RoleARN"] = input.RoleARN;
    }
    if (input.S3BackupConfiguration !== undefined) {
        bodyParams["S3BackupConfiguration"] = serializeAws_json1_1S3DestinationConfiguration(input.S3BackupConfiguration, context);
    }
    if (input.S3BackupMode !== undefined) {
        bodyParams["S3BackupMode"] = input.S3BackupMode;
    }
    if (input.S3Configuration !== undefined) {
        bodyParams["S3Configuration"] = serializeAws_json1_1S3DestinationConfiguration(input.S3Configuration, context);
    }
    if (input.Username !== undefined) {
        bodyParams["Username"] = input.Username;
    }
    return bodyParams;
};
const serializeAws_json1_1RedshiftDestinationUpdate = (input, context) => {
    const bodyParams = {};
    if (input.CloudWatchLoggingOptions !== undefined) {
        bodyParams["CloudWatchLoggingOptions"] = serializeAws_json1_1CloudWatchLoggingOptions(input.CloudWatchLoggingOptions, context);
    }
    if (input.ClusterJDBCURL !== undefined) {
        bodyParams["ClusterJDBCURL"] = input.ClusterJDBCURL;
    }
    if (input.CopyCommand !== undefined) {
        bodyParams["CopyCommand"] = serializeAws_json1_1CopyCommand(input.CopyCommand, context);
    }
    if (input.Password !== undefined) {
        bodyParams["Password"] = input.Password;
    }
    if (input.ProcessingConfiguration !== undefined) {
        bodyParams["ProcessingConfiguration"] = serializeAws_json1_1ProcessingConfiguration(input.ProcessingConfiguration, context);
    }
    if (input.RetryOptions !== undefined) {
        bodyParams["RetryOptions"] = serializeAws_json1_1RedshiftRetryOptions(input.RetryOptions, context);
    }
    if (input.RoleARN !== undefined) {
        bodyParams["RoleARN"] = input.RoleARN;
    }
    if (input.S3BackupMode !== undefined) {
        bodyParams["S3BackupMode"] = input.S3BackupMode;
    }
    if (input.S3BackupUpdate !== undefined) {
        bodyParams["S3BackupUpdate"] = serializeAws_json1_1S3DestinationUpdate(input.S3BackupUpdate, context);
    }
    if (input.S3Update !== undefined) {
        bodyParams["S3Update"] = serializeAws_json1_1S3DestinationUpdate(input.S3Update, context);
    }
    if (input.Username !== undefined) {
        bodyParams["Username"] = input.Username;
    }
    return bodyParams;
};
const serializeAws_json1_1RedshiftRetryOptions = (input, context) => {
    const bodyParams = {};
    if (input.DurationInSeconds !== undefined) {
        bodyParams["DurationInSeconds"] = input.DurationInSeconds;
    }
    return bodyParams;
};
const serializeAws_json1_1S3DestinationConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.BucketARN !== undefined) {
        bodyParams["BucketARN"] = input.BucketARN;
    }
    if (input.BufferingHints !== undefined) {
        bodyParams["BufferingHints"] = serializeAws_json1_1BufferingHints(input.BufferingHints, context);
    }
    if (input.CloudWatchLoggingOptions !== undefined) {
        bodyParams["CloudWatchLoggingOptions"] = serializeAws_json1_1CloudWatchLoggingOptions(input.CloudWatchLoggingOptions, context);
    }
    if (input.CompressionFormat !== undefined) {
        bodyParams["CompressionFormat"] = input.CompressionFormat;
    }
    if (input.EncryptionConfiguration !== undefined) {
        bodyParams["EncryptionConfiguration"] = serializeAws_json1_1EncryptionConfiguration(input.EncryptionConfiguration, context);
    }
    if (input.ErrorOutputPrefix !== undefined) {
        bodyParams["ErrorOutputPrefix"] = input.ErrorOutputPrefix;
    }
    if (input.Prefix !== undefined) {
        bodyParams["Prefix"] = input.Prefix;
    }
    if (input.RoleARN !== undefined) {
        bodyParams["RoleARN"] = input.RoleARN;
    }
    return bodyParams;
};
const serializeAws_json1_1S3DestinationUpdate = (input, context) => {
    const bodyParams = {};
    if (input.BucketARN !== undefined) {
        bodyParams["BucketARN"] = input.BucketARN;
    }
    if (input.BufferingHints !== undefined) {
        bodyParams["BufferingHints"] = serializeAws_json1_1BufferingHints(input.BufferingHints, context);
    }
    if (input.CloudWatchLoggingOptions !== undefined) {
        bodyParams["CloudWatchLoggingOptions"] = serializeAws_json1_1CloudWatchLoggingOptions(input.CloudWatchLoggingOptions, context);
    }
    if (input.CompressionFormat !== undefined) {
        bodyParams["CompressionFormat"] = input.CompressionFormat;
    }
    if (input.EncryptionConfiguration !== undefined) {
        bodyParams["EncryptionConfiguration"] = serializeAws_json1_1EncryptionConfiguration(input.EncryptionConfiguration, context);
    }
    if (input.ErrorOutputPrefix !== undefined) {
        bodyParams["ErrorOutputPrefix"] = input.ErrorOutputPrefix;
    }
    if (input.Prefix !== undefined) {
        bodyParams["Prefix"] = input.Prefix;
    }
    if (input.RoleARN !== undefined) {
        bodyParams["RoleARN"] = input.RoleARN;
    }
    return bodyParams;
};
const serializeAws_json1_1SchemaConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.CatalogId !== undefined) {
        bodyParams["CatalogId"] = input.CatalogId;
    }
    if (input.DatabaseName !== undefined) {
        bodyParams["DatabaseName"] = input.DatabaseName;
    }
    if (input.Region !== undefined) {
        bodyParams["Region"] = input.Region;
    }
    if (input.RoleARN !== undefined) {
        bodyParams["RoleARN"] = input.RoleARN;
    }
    if (input.TableName !== undefined) {
        bodyParams["TableName"] = input.TableName;
    }
    if (input.VersionId !== undefined) {
        bodyParams["VersionId"] = input.VersionId;
    }
    return bodyParams;
};
const serializeAws_json1_1Serializer = (input, context) => {
    const bodyParams = {};
    if (input.OrcSerDe !== undefined) {
        bodyParams["OrcSerDe"] = serializeAws_json1_1OrcSerDe(input.OrcSerDe, context);
    }
    if (input.ParquetSerDe !== undefined) {
        bodyParams["ParquetSerDe"] = serializeAws_json1_1ParquetSerDe(input.ParquetSerDe, context);
    }
    return bodyParams;
};
const serializeAws_json1_1SplunkDestinationConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.CloudWatchLoggingOptions !== undefined) {
        bodyParams["CloudWatchLoggingOptions"] = serializeAws_json1_1CloudWatchLoggingOptions(input.CloudWatchLoggingOptions, context);
    }
    if (input.HECAcknowledgmentTimeoutInSeconds !== undefined) {
        bodyParams["HECAcknowledgmentTimeoutInSeconds"] =
            input.HECAcknowledgmentTimeoutInSeconds;
    }
    if (input.HECEndpoint !== undefined) {
        bodyParams["HECEndpoint"] = input.HECEndpoint;
    }
    if (input.HECEndpointType !== undefined) {
        bodyParams["HECEndpointType"] = input.HECEndpointType;
    }
    if (input.HECToken !== undefined) {
        bodyParams["HECToken"] = input.HECToken;
    }
    if (input.ProcessingConfiguration !== undefined) {
        bodyParams["ProcessingConfiguration"] = serializeAws_json1_1ProcessingConfiguration(input.ProcessingConfiguration, context);
    }
    if (input.RetryOptions !== undefined) {
        bodyParams["RetryOptions"] = serializeAws_json1_1SplunkRetryOptions(input.RetryOptions, context);
    }
    if (input.S3BackupMode !== undefined) {
        bodyParams["S3BackupMode"] = input.S3BackupMode;
    }
    if (input.S3Configuration !== undefined) {
        bodyParams["S3Configuration"] = serializeAws_json1_1S3DestinationConfiguration(input.S3Configuration, context);
    }
    return bodyParams;
};
const serializeAws_json1_1SplunkDestinationUpdate = (input, context) => {
    const bodyParams = {};
    if (input.CloudWatchLoggingOptions !== undefined) {
        bodyParams["CloudWatchLoggingOptions"] = serializeAws_json1_1CloudWatchLoggingOptions(input.CloudWatchLoggingOptions, context);
    }
    if (input.HECAcknowledgmentTimeoutInSeconds !== undefined) {
        bodyParams["HECAcknowledgmentTimeoutInSeconds"] =
            input.HECAcknowledgmentTimeoutInSeconds;
    }
    if (input.HECEndpoint !== undefined) {
        bodyParams["HECEndpoint"] = input.HECEndpoint;
    }
    if (input.HECEndpointType !== undefined) {
        bodyParams["HECEndpointType"] = input.HECEndpointType;
    }
    if (input.HECToken !== undefined) {
        bodyParams["HECToken"] = input.HECToken;
    }
    if (input.ProcessingConfiguration !== undefined) {
        bodyParams["ProcessingConfiguration"] = serializeAws_json1_1ProcessingConfiguration(input.ProcessingConfiguration, context);
    }
    if (input.RetryOptions !== undefined) {
        bodyParams["RetryOptions"] = serializeAws_json1_1SplunkRetryOptions(input.RetryOptions, context);
    }
    if (input.S3BackupMode !== undefined) {
        bodyParams["S3BackupMode"] = input.S3BackupMode;
    }
    if (input.S3Update !== undefined) {
        bodyParams["S3Update"] = serializeAws_json1_1S3DestinationUpdate(input.S3Update, context);
    }
    return bodyParams;
};
const serializeAws_json1_1SplunkRetryOptions = (input, context) => {
    const bodyParams = {};
    if (input.DurationInSeconds !== undefined) {
        bodyParams["DurationInSeconds"] = input.DurationInSeconds;
    }
    return bodyParams;
};
const serializeAws_json1_1StartDeliveryStreamEncryptionInput = (input, context) => {
    const bodyParams = {};
    if (input.DeliveryStreamEncryptionConfigurationInput !== undefined) {
        bodyParams["DeliveryStreamEncryptionConfigurationInput"] = serializeAws_json1_1DeliveryStreamEncryptionConfigurationInput(input.DeliveryStreamEncryptionConfigurationInput, context);
    }
    if (input.DeliveryStreamName !== undefined) {
        bodyParams["DeliveryStreamName"] = input.DeliveryStreamName;
    }
    return bodyParams;
};
const serializeAws_json1_1StopDeliveryStreamEncryptionInput = (input, context) => {
    const bodyParams = {};
    if (input.DeliveryStreamName !== undefined) {
        bodyParams["DeliveryStreamName"] = input.DeliveryStreamName;
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
const serializeAws_json1_1TagDeliveryStreamInput = (input, context) => {
    const bodyParams = {};
    if (input.DeliveryStreamName !== undefined) {
        bodyParams["DeliveryStreamName"] = input.DeliveryStreamName;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagDeliveryStreamInputTagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1TagDeliveryStreamInputTagList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Tag(entry, context));
    }
    return contents;
};
const serializeAws_json1_1TagKeyList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1UntagDeliveryStreamInput = (input, context) => {
    const bodyParams = {};
    if (input.DeliveryStreamName !== undefined) {
        bodyParams["DeliveryStreamName"] = input.DeliveryStreamName;
    }
    if (input.TagKeys !== undefined) {
        bodyParams["TagKeys"] = serializeAws_json1_1TagKeyList(input.TagKeys, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateDestinationInput = (input, context) => {
    const bodyParams = {};
    if (input.CurrentDeliveryStreamVersionId !== undefined) {
        bodyParams["CurrentDeliveryStreamVersionId"] =
            input.CurrentDeliveryStreamVersionId;
    }
    if (input.DeliveryStreamName !== undefined) {
        bodyParams["DeliveryStreamName"] = input.DeliveryStreamName;
    }
    if (input.DestinationId !== undefined) {
        bodyParams["DestinationId"] = input.DestinationId;
    }
    if (input.ElasticsearchDestinationUpdate !== undefined) {
        bodyParams["ElasticsearchDestinationUpdate"] = serializeAws_json1_1ElasticsearchDestinationUpdate(input.ElasticsearchDestinationUpdate, context);
    }
    if (input.ExtendedS3DestinationUpdate !== undefined) {
        bodyParams["ExtendedS3DestinationUpdate"] = serializeAws_json1_1ExtendedS3DestinationUpdate(input.ExtendedS3DestinationUpdate, context);
    }
    if (input.RedshiftDestinationUpdate !== undefined) {
        bodyParams["RedshiftDestinationUpdate"] = serializeAws_json1_1RedshiftDestinationUpdate(input.RedshiftDestinationUpdate, context);
    }
    if (input.S3DestinationUpdate !== undefined) {
        bodyParams["S3DestinationUpdate"] = serializeAws_json1_1S3DestinationUpdate(input.S3DestinationUpdate, context);
    }
    if (input.SplunkDestinationUpdate !== undefined) {
        bodyParams["SplunkDestinationUpdate"] = serializeAws_json1_1SplunkDestinationUpdate(input.SplunkDestinationUpdate, context);
    }
    return bodyParams;
};
const deserializeAws_json1_1BufferingHints = (output, context) => {
    let contents = {
        __type: "BufferingHints",
        IntervalInSeconds: undefined,
        SizeInMBs: undefined
    };
    if (output.IntervalInSeconds !== undefined &&
        output.IntervalInSeconds !== null) {
        contents.IntervalInSeconds = output.IntervalInSeconds;
    }
    if (output.SizeInMBs !== undefined && output.SizeInMBs !== null) {
        contents.SizeInMBs = output.SizeInMBs;
    }
    return contents;
};
const deserializeAws_json1_1CloudWatchLoggingOptions = (output, context) => {
    let contents = {
        __type: "CloudWatchLoggingOptions",
        Enabled: undefined,
        LogGroupName: undefined,
        LogStreamName: undefined
    };
    if (output.Enabled !== undefined && output.Enabled !== null) {
        contents.Enabled = output.Enabled;
    }
    if (output.LogGroupName !== undefined && output.LogGroupName !== null) {
        contents.LogGroupName = output.LogGroupName;
    }
    if (output.LogStreamName !== undefined && output.LogStreamName !== null) {
        contents.LogStreamName = output.LogStreamName;
    }
    return contents;
};
const deserializeAws_json1_1ColumnToJsonKeyMappings = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
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
const deserializeAws_json1_1CopyCommand = (output, context) => {
    let contents = {
        __type: "CopyCommand",
        CopyOptions: undefined,
        DataTableColumns: undefined,
        DataTableName: undefined
    };
    if (output.CopyOptions !== undefined && output.CopyOptions !== null) {
        contents.CopyOptions = output.CopyOptions;
    }
    if (output.DataTableColumns !== undefined &&
        output.DataTableColumns !== null) {
        contents.DataTableColumns = output.DataTableColumns;
    }
    if (output.DataTableName !== undefined && output.DataTableName !== null) {
        contents.DataTableName = output.DataTableName;
    }
    return contents;
};
const deserializeAws_json1_1CreateDeliveryStreamOutput = (output, context) => {
    let contents = {
        __type: "CreateDeliveryStreamOutput",
        DeliveryStreamARN: undefined
    };
    if (output.DeliveryStreamARN !== undefined &&
        output.DeliveryStreamARN !== null) {
        contents.DeliveryStreamARN = output.DeliveryStreamARN;
    }
    return contents;
};
const deserializeAws_json1_1DataFormatConversionConfiguration = (output, context) => {
    let contents = {
        __type: "DataFormatConversionConfiguration",
        Enabled: undefined,
        InputFormatConfiguration: undefined,
        OutputFormatConfiguration: undefined,
        SchemaConfiguration: undefined
    };
    if (output.Enabled !== undefined && output.Enabled !== null) {
        contents.Enabled = output.Enabled;
    }
    if (output.InputFormatConfiguration !== undefined &&
        output.InputFormatConfiguration !== null) {
        contents.InputFormatConfiguration = deserializeAws_json1_1InputFormatConfiguration(output.InputFormatConfiguration, context);
    }
    if (output.OutputFormatConfiguration !== undefined &&
        output.OutputFormatConfiguration !== null) {
        contents.OutputFormatConfiguration = deserializeAws_json1_1OutputFormatConfiguration(output.OutputFormatConfiguration, context);
    }
    if (output.SchemaConfiguration !== undefined &&
        output.SchemaConfiguration !== null) {
        contents.SchemaConfiguration = deserializeAws_json1_1SchemaConfiguration(output.SchemaConfiguration, context);
    }
    return contents;
};
const deserializeAws_json1_1DeleteDeliveryStreamOutput = (output, context) => {
    let contents = {
        __type: "DeleteDeliveryStreamOutput"
    };
    return contents;
};
const deserializeAws_json1_1DeliveryStreamDescription = (output, context) => {
    let contents = {
        __type: "DeliveryStreamDescription",
        CreateTimestamp: undefined,
        DeliveryStreamARN: undefined,
        DeliveryStreamEncryptionConfiguration: undefined,
        DeliveryStreamName: undefined,
        DeliveryStreamStatus: undefined,
        DeliveryStreamType: undefined,
        Destinations: undefined,
        FailureDescription: undefined,
        HasMoreDestinations: undefined,
        LastUpdateTimestamp: undefined,
        Source: undefined,
        VersionId: undefined
    };
    if (output.CreateTimestamp !== undefined && output.CreateTimestamp !== null) {
        contents.CreateTimestamp = new Date(Math.round(output.CreateTimestamp * 1000));
    }
    if (output.DeliveryStreamARN !== undefined &&
        output.DeliveryStreamARN !== null) {
        contents.DeliveryStreamARN = output.DeliveryStreamARN;
    }
    if (output.DeliveryStreamEncryptionConfiguration !== undefined &&
        output.DeliveryStreamEncryptionConfiguration !== null) {
        contents.DeliveryStreamEncryptionConfiguration = deserializeAws_json1_1DeliveryStreamEncryptionConfiguration(output.DeliveryStreamEncryptionConfiguration, context);
    }
    if (output.DeliveryStreamName !== undefined &&
        output.DeliveryStreamName !== null) {
        contents.DeliveryStreamName = output.DeliveryStreamName;
    }
    if (output.DeliveryStreamStatus !== undefined &&
        output.DeliveryStreamStatus !== null) {
        contents.DeliveryStreamStatus = output.DeliveryStreamStatus;
    }
    if (output.DeliveryStreamType !== undefined &&
        output.DeliveryStreamType !== null) {
        contents.DeliveryStreamType = output.DeliveryStreamType;
    }
    if (output.Destinations !== undefined && output.Destinations !== null) {
        contents.Destinations = deserializeAws_json1_1DestinationDescriptionList(output.Destinations, context);
    }
    if (output.FailureDescription !== undefined &&
        output.FailureDescription !== null) {
        contents.FailureDescription = deserializeAws_json1_1FailureDescription(output.FailureDescription, context);
    }
    if (output.HasMoreDestinations !== undefined &&
        output.HasMoreDestinations !== null) {
        contents.HasMoreDestinations = output.HasMoreDestinations;
    }
    if (output.LastUpdateTimestamp !== undefined &&
        output.LastUpdateTimestamp !== null) {
        contents.LastUpdateTimestamp = new Date(Math.round(output.LastUpdateTimestamp * 1000));
    }
    if (output.Source !== undefined && output.Source !== null) {
        contents.Source = deserializeAws_json1_1SourceDescription(output.Source, context);
    }
    if (output.VersionId !== undefined && output.VersionId !== null) {
        contents.VersionId = output.VersionId;
    }
    return contents;
};
const deserializeAws_json1_1DeliveryStreamEncryptionConfiguration = (output, context) => {
    let contents = {
        __type: "DeliveryStreamEncryptionConfiguration",
        FailureDescription: undefined,
        KeyARN: undefined,
        KeyType: undefined,
        Status: undefined
    };
    if (output.FailureDescription !== undefined &&
        output.FailureDescription !== null) {
        contents.FailureDescription = deserializeAws_json1_1FailureDescription(output.FailureDescription, context);
    }
    if (output.KeyARN !== undefined && output.KeyARN !== null) {
        contents.KeyARN = output.KeyARN;
    }
    if (output.KeyType !== undefined && output.KeyType !== null) {
        contents.KeyType = output.KeyType;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
};
const deserializeAws_json1_1DeliveryStreamNameList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1DescribeDeliveryStreamOutput = (output, context) => {
    let contents = {
        __type: "DescribeDeliveryStreamOutput",
        DeliveryStreamDescription: undefined
    };
    if (output.DeliveryStreamDescription !== undefined &&
        output.DeliveryStreamDescription !== null) {
        contents.DeliveryStreamDescription = deserializeAws_json1_1DeliveryStreamDescription(output.DeliveryStreamDescription, context);
    }
    return contents;
};
const deserializeAws_json1_1Deserializer = (output, context) => {
    let contents = {
        __type: "Deserializer",
        HiveJsonSerDe: undefined,
        OpenXJsonSerDe: undefined
    };
    if (output.HiveJsonSerDe !== undefined && output.HiveJsonSerDe !== null) {
        contents.HiveJsonSerDe = deserializeAws_json1_1HiveJsonSerDe(output.HiveJsonSerDe, context);
    }
    if (output.OpenXJsonSerDe !== undefined && output.OpenXJsonSerDe !== null) {
        contents.OpenXJsonSerDe = deserializeAws_json1_1OpenXJsonSerDe(output.OpenXJsonSerDe, context);
    }
    return contents;
};
const deserializeAws_json1_1DestinationDescription = (output, context) => {
    let contents = {
        __type: "DestinationDescription",
        DestinationId: undefined,
        ElasticsearchDestinationDescription: undefined,
        ExtendedS3DestinationDescription: undefined,
        RedshiftDestinationDescription: undefined,
        S3DestinationDescription: undefined,
        SplunkDestinationDescription: undefined
    };
    if (output.DestinationId !== undefined && output.DestinationId !== null) {
        contents.DestinationId = output.DestinationId;
    }
    if (output.ElasticsearchDestinationDescription !== undefined &&
        output.ElasticsearchDestinationDescription !== null) {
        contents.ElasticsearchDestinationDescription = deserializeAws_json1_1ElasticsearchDestinationDescription(output.ElasticsearchDestinationDescription, context);
    }
    if (output.ExtendedS3DestinationDescription !== undefined &&
        output.ExtendedS3DestinationDescription !== null) {
        contents.ExtendedS3DestinationDescription = deserializeAws_json1_1ExtendedS3DestinationDescription(output.ExtendedS3DestinationDescription, context);
    }
    if (output.RedshiftDestinationDescription !== undefined &&
        output.RedshiftDestinationDescription !== null) {
        contents.RedshiftDestinationDescription = deserializeAws_json1_1RedshiftDestinationDescription(output.RedshiftDestinationDescription, context);
    }
    if (output.S3DestinationDescription !== undefined &&
        output.S3DestinationDescription !== null) {
        contents.S3DestinationDescription = deserializeAws_json1_1S3DestinationDescription(output.S3DestinationDescription, context);
    }
    if (output.SplunkDestinationDescription !== undefined &&
        output.SplunkDestinationDescription !== null) {
        contents.SplunkDestinationDescription = deserializeAws_json1_1SplunkDestinationDescription(output.SplunkDestinationDescription, context);
    }
    return contents;
};
const deserializeAws_json1_1DestinationDescriptionList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DestinationDescription(entry, context));
};
const deserializeAws_json1_1ElasticsearchBufferingHints = (output, context) => {
    let contents = {
        __type: "ElasticsearchBufferingHints",
        IntervalInSeconds: undefined,
        SizeInMBs: undefined
    };
    if (output.IntervalInSeconds !== undefined &&
        output.IntervalInSeconds !== null) {
        contents.IntervalInSeconds = output.IntervalInSeconds;
    }
    if (output.SizeInMBs !== undefined && output.SizeInMBs !== null) {
        contents.SizeInMBs = output.SizeInMBs;
    }
    return contents;
};
const deserializeAws_json1_1ElasticsearchDestinationDescription = (output, context) => {
    let contents = {
        __type: "ElasticsearchDestinationDescription",
        BufferingHints: undefined,
        CloudWatchLoggingOptions: undefined,
        ClusterEndpoint: undefined,
        DomainARN: undefined,
        IndexName: undefined,
        IndexRotationPeriod: undefined,
        ProcessingConfiguration: undefined,
        RetryOptions: undefined,
        RoleARN: undefined,
        S3BackupMode: undefined,
        S3DestinationDescription: undefined,
        TypeName: undefined
    };
    if (output.BufferingHints !== undefined && output.BufferingHints !== null) {
        contents.BufferingHints = deserializeAws_json1_1ElasticsearchBufferingHints(output.BufferingHints, context);
    }
    if (output.CloudWatchLoggingOptions !== undefined &&
        output.CloudWatchLoggingOptions !== null) {
        contents.CloudWatchLoggingOptions = deserializeAws_json1_1CloudWatchLoggingOptions(output.CloudWatchLoggingOptions, context);
    }
    if (output.ClusterEndpoint !== undefined && output.ClusterEndpoint !== null) {
        contents.ClusterEndpoint = output.ClusterEndpoint;
    }
    if (output.DomainARN !== undefined && output.DomainARN !== null) {
        contents.DomainARN = output.DomainARN;
    }
    if (output.IndexName !== undefined && output.IndexName !== null) {
        contents.IndexName = output.IndexName;
    }
    if (output.IndexRotationPeriod !== undefined &&
        output.IndexRotationPeriod !== null) {
        contents.IndexRotationPeriod = output.IndexRotationPeriod;
    }
    if (output.ProcessingConfiguration !== undefined &&
        output.ProcessingConfiguration !== null) {
        contents.ProcessingConfiguration = deserializeAws_json1_1ProcessingConfiguration(output.ProcessingConfiguration, context);
    }
    if (output.RetryOptions !== undefined && output.RetryOptions !== null) {
        contents.RetryOptions = deserializeAws_json1_1ElasticsearchRetryOptions(output.RetryOptions, context);
    }
    if (output.RoleARN !== undefined && output.RoleARN !== null) {
        contents.RoleARN = output.RoleARN;
    }
    if (output.S3BackupMode !== undefined && output.S3BackupMode !== null) {
        contents.S3BackupMode = output.S3BackupMode;
    }
    if (output.S3DestinationDescription !== undefined &&
        output.S3DestinationDescription !== null) {
        contents.S3DestinationDescription = deserializeAws_json1_1S3DestinationDescription(output.S3DestinationDescription, context);
    }
    if (output.TypeName !== undefined && output.TypeName !== null) {
        contents.TypeName = output.TypeName;
    }
    return contents;
};
const deserializeAws_json1_1ElasticsearchRetryOptions = (output, context) => {
    let contents = {
        __type: "ElasticsearchRetryOptions",
        DurationInSeconds: undefined
    };
    if (output.DurationInSeconds !== undefined &&
        output.DurationInSeconds !== null) {
        contents.DurationInSeconds = output.DurationInSeconds;
    }
    return contents;
};
const deserializeAws_json1_1EncryptionConfiguration = (output, context) => {
    let contents = {
        __type: "EncryptionConfiguration",
        KMSEncryptionConfig: undefined,
        NoEncryptionConfig: undefined
    };
    if (output.KMSEncryptionConfig !== undefined &&
        output.KMSEncryptionConfig !== null) {
        contents.KMSEncryptionConfig = deserializeAws_json1_1KMSEncryptionConfig(output.KMSEncryptionConfig, context);
    }
    if (output.NoEncryptionConfig !== undefined &&
        output.NoEncryptionConfig !== null) {
        contents.NoEncryptionConfig = output.NoEncryptionConfig;
    }
    return contents;
};
const deserializeAws_json1_1ExtendedS3DestinationDescription = (output, context) => {
    let contents = {
        __type: "ExtendedS3DestinationDescription",
        BucketARN: undefined,
        BufferingHints: undefined,
        CloudWatchLoggingOptions: undefined,
        CompressionFormat: undefined,
        DataFormatConversionConfiguration: undefined,
        EncryptionConfiguration: undefined,
        ErrorOutputPrefix: undefined,
        Prefix: undefined,
        ProcessingConfiguration: undefined,
        RoleARN: undefined,
        S3BackupDescription: undefined,
        S3BackupMode: undefined
    };
    if (output.BucketARN !== undefined && output.BucketARN !== null) {
        contents.BucketARN = output.BucketARN;
    }
    if (output.BufferingHints !== undefined && output.BufferingHints !== null) {
        contents.BufferingHints = deserializeAws_json1_1BufferingHints(output.BufferingHints, context);
    }
    if (output.CloudWatchLoggingOptions !== undefined &&
        output.CloudWatchLoggingOptions !== null) {
        contents.CloudWatchLoggingOptions = deserializeAws_json1_1CloudWatchLoggingOptions(output.CloudWatchLoggingOptions, context);
    }
    if (output.CompressionFormat !== undefined &&
        output.CompressionFormat !== null) {
        contents.CompressionFormat = output.CompressionFormat;
    }
    if (output.DataFormatConversionConfiguration !== undefined &&
        output.DataFormatConversionConfiguration !== null) {
        contents.DataFormatConversionConfiguration = deserializeAws_json1_1DataFormatConversionConfiguration(output.DataFormatConversionConfiguration, context);
    }
    if (output.EncryptionConfiguration !== undefined &&
        output.EncryptionConfiguration !== null) {
        contents.EncryptionConfiguration = deserializeAws_json1_1EncryptionConfiguration(output.EncryptionConfiguration, context);
    }
    if (output.ErrorOutputPrefix !== undefined &&
        output.ErrorOutputPrefix !== null) {
        contents.ErrorOutputPrefix = output.ErrorOutputPrefix;
    }
    if (output.Prefix !== undefined && output.Prefix !== null) {
        contents.Prefix = output.Prefix;
    }
    if (output.ProcessingConfiguration !== undefined &&
        output.ProcessingConfiguration !== null) {
        contents.ProcessingConfiguration = deserializeAws_json1_1ProcessingConfiguration(output.ProcessingConfiguration, context);
    }
    if (output.RoleARN !== undefined && output.RoleARN !== null) {
        contents.RoleARN = output.RoleARN;
    }
    if (output.S3BackupDescription !== undefined &&
        output.S3BackupDescription !== null) {
        contents.S3BackupDescription = deserializeAws_json1_1S3DestinationDescription(output.S3BackupDescription, context);
    }
    if (output.S3BackupMode !== undefined && output.S3BackupMode !== null) {
        contents.S3BackupMode = output.S3BackupMode;
    }
    return contents;
};
const deserializeAws_json1_1FailureDescription = (output, context) => {
    let contents = {
        __type: "FailureDescription",
        Details: undefined,
        Type: undefined
    };
    if (output.Details !== undefined && output.Details !== null) {
        contents.Details = output.Details;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1HiveJsonSerDe = (output, context) => {
    let contents = {
        __type: "HiveJsonSerDe",
        TimestampFormats: undefined
    };
    if (output.TimestampFormats !== undefined &&
        output.TimestampFormats !== null) {
        contents.TimestampFormats = deserializeAws_json1_1ListOfNonEmptyStrings(output.TimestampFormats, context);
    }
    return contents;
};
const deserializeAws_json1_1InputFormatConfiguration = (output, context) => {
    let contents = {
        __type: "InputFormatConfiguration",
        Deserializer: undefined
    };
    if (output.Deserializer !== undefined && output.Deserializer !== null) {
        contents.Deserializer = deserializeAws_json1_1Deserializer(output.Deserializer, context);
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
const deserializeAws_json1_1InvalidKMSResourceException = (output, context) => {
    let contents = {
        __type: "InvalidKMSResourceException",
        code: undefined,
        message: undefined
    };
    if (output.code !== undefined && output.code !== null) {
        contents.code = output.code;
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1KMSEncryptionConfig = (output, context) => {
    let contents = {
        __type: "KMSEncryptionConfig",
        AWSKMSKeyARN: undefined
    };
    if (output.AWSKMSKeyARN !== undefined && output.AWSKMSKeyARN !== null) {
        contents.AWSKMSKeyARN = output.AWSKMSKeyARN;
    }
    return contents;
};
const deserializeAws_json1_1KinesisStreamSourceDescription = (output, context) => {
    let contents = {
        __type: "KinesisStreamSourceDescription",
        DeliveryStartTimestamp: undefined,
        KinesisStreamARN: undefined,
        RoleARN: undefined
    };
    if (output.DeliveryStartTimestamp !== undefined &&
        output.DeliveryStartTimestamp !== null) {
        contents.DeliveryStartTimestamp = new Date(Math.round(output.DeliveryStartTimestamp * 1000));
    }
    if (output.KinesisStreamARN !== undefined &&
        output.KinesisStreamARN !== null) {
        contents.KinesisStreamARN = output.KinesisStreamARN;
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
const deserializeAws_json1_1ListDeliveryStreamsOutput = (output, context) => {
    let contents = {
        __type: "ListDeliveryStreamsOutput",
        DeliveryStreamNames: undefined,
        HasMoreDeliveryStreams: undefined
    };
    if (output.DeliveryStreamNames !== undefined &&
        output.DeliveryStreamNames !== null) {
        contents.DeliveryStreamNames = deserializeAws_json1_1DeliveryStreamNameList(output.DeliveryStreamNames, context);
    }
    if (output.HasMoreDeliveryStreams !== undefined &&
        output.HasMoreDeliveryStreams !== null) {
        contents.HasMoreDeliveryStreams = output.HasMoreDeliveryStreams;
    }
    return contents;
};
const deserializeAws_json1_1ListOfNonEmptyStrings = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1ListOfNonEmptyStringsWithoutWhitespace = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1ListTagsForDeliveryStreamOutput = (output, context) => {
    let contents = {
        __type: "ListTagsForDeliveryStreamOutput",
        HasMoreTags: undefined,
        Tags: undefined
    };
    if (output.HasMoreTags !== undefined && output.HasMoreTags !== null) {
        contents.HasMoreTags = output.HasMoreTags;
    }
    if (output.Tags !== undefined && output.Tags !== null) {
        contents.Tags = deserializeAws_json1_1ListTagsForDeliveryStreamOutputTagList(output.Tags, context);
    }
    return contents;
};
const deserializeAws_json1_1ListTagsForDeliveryStreamOutputTagList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Tag(entry, context));
};
const deserializeAws_json1_1OpenXJsonSerDe = (output, context) => {
    let contents = {
        __type: "OpenXJsonSerDe",
        CaseInsensitive: undefined,
        ColumnToJsonKeyMappings: undefined,
        ConvertDotsInJsonKeysToUnderscores: undefined
    };
    if (output.CaseInsensitive !== undefined && output.CaseInsensitive !== null) {
        contents.CaseInsensitive = output.CaseInsensitive;
    }
    if (output.ColumnToJsonKeyMappings !== undefined &&
        output.ColumnToJsonKeyMappings !== null) {
        contents.ColumnToJsonKeyMappings = deserializeAws_json1_1ColumnToJsonKeyMappings(output.ColumnToJsonKeyMappings, context);
    }
    if (output.ConvertDotsInJsonKeysToUnderscores !== undefined &&
        output.ConvertDotsInJsonKeysToUnderscores !== null) {
        contents.ConvertDotsInJsonKeysToUnderscores =
            output.ConvertDotsInJsonKeysToUnderscores;
    }
    return contents;
};
const deserializeAws_json1_1OrcSerDe = (output, context) => {
    let contents = {
        __type: "OrcSerDe",
        BlockSizeBytes: undefined,
        BloomFilterColumns: undefined,
        BloomFilterFalsePositiveProbability: undefined,
        Compression: undefined,
        DictionaryKeyThreshold: undefined,
        EnablePadding: undefined,
        FormatVersion: undefined,
        PaddingTolerance: undefined,
        RowIndexStride: undefined,
        StripeSizeBytes: undefined
    };
    if (output.BlockSizeBytes !== undefined && output.BlockSizeBytes !== null) {
        contents.BlockSizeBytes = output.BlockSizeBytes;
    }
    if (output.BloomFilterColumns !== undefined &&
        output.BloomFilterColumns !== null) {
        contents.BloomFilterColumns = deserializeAws_json1_1ListOfNonEmptyStringsWithoutWhitespace(output.BloomFilterColumns, context);
    }
    if (output.BloomFilterFalsePositiveProbability !== undefined &&
        output.BloomFilterFalsePositiveProbability !== null) {
        contents.BloomFilterFalsePositiveProbability =
            output.BloomFilterFalsePositiveProbability;
    }
    if (output.Compression !== undefined && output.Compression !== null) {
        contents.Compression = output.Compression;
    }
    if (output.DictionaryKeyThreshold !== undefined &&
        output.DictionaryKeyThreshold !== null) {
        contents.DictionaryKeyThreshold = output.DictionaryKeyThreshold;
    }
    if (output.EnablePadding !== undefined && output.EnablePadding !== null) {
        contents.EnablePadding = output.EnablePadding;
    }
    if (output.FormatVersion !== undefined && output.FormatVersion !== null) {
        contents.FormatVersion = output.FormatVersion;
    }
    if (output.PaddingTolerance !== undefined &&
        output.PaddingTolerance !== null) {
        contents.PaddingTolerance = output.PaddingTolerance;
    }
    if (output.RowIndexStride !== undefined && output.RowIndexStride !== null) {
        contents.RowIndexStride = output.RowIndexStride;
    }
    if (output.StripeSizeBytes !== undefined && output.StripeSizeBytes !== null) {
        contents.StripeSizeBytes = output.StripeSizeBytes;
    }
    return contents;
};
const deserializeAws_json1_1OutputFormatConfiguration = (output, context) => {
    let contents = {
        __type: "OutputFormatConfiguration",
        Serializer: undefined
    };
    if (output.Serializer !== undefined && output.Serializer !== null) {
        contents.Serializer = deserializeAws_json1_1Serializer(output.Serializer, context);
    }
    return contents;
};
const deserializeAws_json1_1ParquetSerDe = (output, context) => {
    let contents = {
        __type: "ParquetSerDe",
        BlockSizeBytes: undefined,
        Compression: undefined,
        EnableDictionaryCompression: undefined,
        MaxPaddingBytes: undefined,
        PageSizeBytes: undefined,
        WriterVersion: undefined
    };
    if (output.BlockSizeBytes !== undefined && output.BlockSizeBytes !== null) {
        contents.BlockSizeBytes = output.BlockSizeBytes;
    }
    if (output.Compression !== undefined && output.Compression !== null) {
        contents.Compression = output.Compression;
    }
    if (output.EnableDictionaryCompression !== undefined &&
        output.EnableDictionaryCompression !== null) {
        contents.EnableDictionaryCompression = output.EnableDictionaryCompression;
    }
    if (output.MaxPaddingBytes !== undefined && output.MaxPaddingBytes !== null) {
        contents.MaxPaddingBytes = output.MaxPaddingBytes;
    }
    if (output.PageSizeBytes !== undefined && output.PageSizeBytes !== null) {
        contents.PageSizeBytes = output.PageSizeBytes;
    }
    if (output.WriterVersion !== undefined && output.WriterVersion !== null) {
        contents.WriterVersion = output.WriterVersion;
    }
    return contents;
};
const deserializeAws_json1_1ProcessingConfiguration = (output, context) => {
    let contents = {
        __type: "ProcessingConfiguration",
        Enabled: undefined,
        Processors: undefined
    };
    if (output.Enabled !== undefined && output.Enabled !== null) {
        contents.Enabled = output.Enabled;
    }
    if (output.Processors !== undefined && output.Processors !== null) {
        contents.Processors = deserializeAws_json1_1ProcessorList(output.Processors, context);
    }
    return contents;
};
const deserializeAws_json1_1Processor = (output, context) => {
    let contents = {
        __type: "Processor",
        Parameters: undefined,
        Type: undefined
    };
    if (output.Parameters !== undefined && output.Parameters !== null) {
        contents.Parameters = deserializeAws_json1_1ProcessorParameterList(output.Parameters, context);
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1ProcessorList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Processor(entry, context));
};
const deserializeAws_json1_1ProcessorParameter = (output, context) => {
    let contents = {
        __type: "ProcessorParameter",
        ParameterName: undefined,
        ParameterValue: undefined
    };
    if (output.ParameterName !== undefined && output.ParameterName !== null) {
        contents.ParameterName = output.ParameterName;
    }
    if (output.ParameterValue !== undefined && output.ParameterValue !== null) {
        contents.ParameterValue = output.ParameterValue;
    }
    return contents;
};
const deserializeAws_json1_1ProcessorParameterList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ProcessorParameter(entry, context));
};
const deserializeAws_json1_1PutRecordBatchOutput = (output, context) => {
    let contents = {
        __type: "PutRecordBatchOutput",
        Encrypted: undefined,
        FailedPutCount: undefined,
        RequestResponses: undefined
    };
    if (output.Encrypted !== undefined && output.Encrypted !== null) {
        contents.Encrypted = output.Encrypted;
    }
    if (output.FailedPutCount !== undefined && output.FailedPutCount !== null) {
        contents.FailedPutCount = output.FailedPutCount;
    }
    if (output.RequestResponses !== undefined &&
        output.RequestResponses !== null) {
        contents.RequestResponses = deserializeAws_json1_1PutRecordBatchResponseEntryList(output.RequestResponses, context);
    }
    return contents;
};
const deserializeAws_json1_1PutRecordBatchResponseEntry = (output, context) => {
    let contents = {
        __type: "PutRecordBatchResponseEntry",
        ErrorCode: undefined,
        ErrorMessage: undefined,
        RecordId: undefined
    };
    if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
        contents.ErrorCode = output.ErrorCode;
    }
    if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
        contents.ErrorMessage = output.ErrorMessage;
    }
    if (output.RecordId !== undefined && output.RecordId !== null) {
        contents.RecordId = output.RecordId;
    }
    return contents;
};
const deserializeAws_json1_1PutRecordBatchResponseEntryList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1PutRecordBatchResponseEntry(entry, context));
};
const deserializeAws_json1_1PutRecordOutput = (output, context) => {
    let contents = {
        __type: "PutRecordOutput",
        Encrypted: undefined,
        RecordId: undefined
    };
    if (output.Encrypted !== undefined && output.Encrypted !== null) {
        contents.Encrypted = output.Encrypted;
    }
    if (output.RecordId !== undefined && output.RecordId !== null) {
        contents.RecordId = output.RecordId;
    }
    return contents;
};
const deserializeAws_json1_1RedshiftDestinationDescription = (output, context) => {
    let contents = {
        __type: "RedshiftDestinationDescription",
        CloudWatchLoggingOptions: undefined,
        ClusterJDBCURL: undefined,
        CopyCommand: undefined,
        ProcessingConfiguration: undefined,
        RetryOptions: undefined,
        RoleARN: undefined,
        S3BackupDescription: undefined,
        S3BackupMode: undefined,
        S3DestinationDescription: undefined,
        Username: undefined
    };
    if (output.CloudWatchLoggingOptions !== undefined &&
        output.CloudWatchLoggingOptions !== null) {
        contents.CloudWatchLoggingOptions = deserializeAws_json1_1CloudWatchLoggingOptions(output.CloudWatchLoggingOptions, context);
    }
    if (output.ClusterJDBCURL !== undefined && output.ClusterJDBCURL !== null) {
        contents.ClusterJDBCURL = output.ClusterJDBCURL;
    }
    if (output.CopyCommand !== undefined && output.CopyCommand !== null) {
        contents.CopyCommand = deserializeAws_json1_1CopyCommand(output.CopyCommand, context);
    }
    if (output.ProcessingConfiguration !== undefined &&
        output.ProcessingConfiguration !== null) {
        contents.ProcessingConfiguration = deserializeAws_json1_1ProcessingConfiguration(output.ProcessingConfiguration, context);
    }
    if (output.RetryOptions !== undefined && output.RetryOptions !== null) {
        contents.RetryOptions = deserializeAws_json1_1RedshiftRetryOptions(output.RetryOptions, context);
    }
    if (output.RoleARN !== undefined && output.RoleARN !== null) {
        contents.RoleARN = output.RoleARN;
    }
    if (output.S3BackupDescription !== undefined &&
        output.S3BackupDescription !== null) {
        contents.S3BackupDescription = deserializeAws_json1_1S3DestinationDescription(output.S3BackupDescription, context);
    }
    if (output.S3BackupMode !== undefined && output.S3BackupMode !== null) {
        contents.S3BackupMode = output.S3BackupMode;
    }
    if (output.S3DestinationDescription !== undefined &&
        output.S3DestinationDescription !== null) {
        contents.S3DestinationDescription = deserializeAws_json1_1S3DestinationDescription(output.S3DestinationDescription, context);
    }
    if (output.Username !== undefined && output.Username !== null) {
        contents.Username = output.Username;
    }
    return contents;
};
const deserializeAws_json1_1RedshiftRetryOptions = (output, context) => {
    let contents = {
        __type: "RedshiftRetryOptions",
        DurationInSeconds: undefined
    };
    if (output.DurationInSeconds !== undefined &&
        output.DurationInSeconds !== null) {
        contents.DurationInSeconds = output.DurationInSeconds;
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
const deserializeAws_json1_1S3DestinationDescription = (output, context) => {
    let contents = {
        __type: "S3DestinationDescription",
        BucketARN: undefined,
        BufferingHints: undefined,
        CloudWatchLoggingOptions: undefined,
        CompressionFormat: undefined,
        EncryptionConfiguration: undefined,
        ErrorOutputPrefix: undefined,
        Prefix: undefined,
        RoleARN: undefined
    };
    if (output.BucketARN !== undefined && output.BucketARN !== null) {
        contents.BucketARN = output.BucketARN;
    }
    if (output.BufferingHints !== undefined && output.BufferingHints !== null) {
        contents.BufferingHints = deserializeAws_json1_1BufferingHints(output.BufferingHints, context);
    }
    if (output.CloudWatchLoggingOptions !== undefined &&
        output.CloudWatchLoggingOptions !== null) {
        contents.CloudWatchLoggingOptions = deserializeAws_json1_1CloudWatchLoggingOptions(output.CloudWatchLoggingOptions, context);
    }
    if (output.CompressionFormat !== undefined &&
        output.CompressionFormat !== null) {
        contents.CompressionFormat = output.CompressionFormat;
    }
    if (output.EncryptionConfiguration !== undefined &&
        output.EncryptionConfiguration !== null) {
        contents.EncryptionConfiguration = deserializeAws_json1_1EncryptionConfiguration(output.EncryptionConfiguration, context);
    }
    if (output.ErrorOutputPrefix !== undefined &&
        output.ErrorOutputPrefix !== null) {
        contents.ErrorOutputPrefix = output.ErrorOutputPrefix;
    }
    if (output.Prefix !== undefined && output.Prefix !== null) {
        contents.Prefix = output.Prefix;
    }
    if (output.RoleARN !== undefined && output.RoleARN !== null) {
        contents.RoleARN = output.RoleARN;
    }
    return contents;
};
const deserializeAws_json1_1SchemaConfiguration = (output, context) => {
    let contents = {
        __type: "SchemaConfiguration",
        CatalogId: undefined,
        DatabaseName: undefined,
        Region: undefined,
        RoleARN: undefined,
        TableName: undefined,
        VersionId: undefined
    };
    if (output.CatalogId !== undefined && output.CatalogId !== null) {
        contents.CatalogId = output.CatalogId;
    }
    if (output.DatabaseName !== undefined && output.DatabaseName !== null) {
        contents.DatabaseName = output.DatabaseName;
    }
    if (output.Region !== undefined && output.Region !== null) {
        contents.Region = output.Region;
    }
    if (output.RoleARN !== undefined && output.RoleARN !== null) {
        contents.RoleARN = output.RoleARN;
    }
    if (output.TableName !== undefined && output.TableName !== null) {
        contents.TableName = output.TableName;
    }
    if (output.VersionId !== undefined && output.VersionId !== null) {
        contents.VersionId = output.VersionId;
    }
    return contents;
};
const deserializeAws_json1_1Serializer = (output, context) => {
    let contents = {
        __type: "Serializer",
        OrcSerDe: undefined,
        ParquetSerDe: undefined
    };
    if (output.OrcSerDe !== undefined && output.OrcSerDe !== null) {
        contents.OrcSerDe = deserializeAws_json1_1OrcSerDe(output.OrcSerDe, context);
    }
    if (output.ParquetSerDe !== undefined && output.ParquetSerDe !== null) {
        contents.ParquetSerDe = deserializeAws_json1_1ParquetSerDe(output.ParquetSerDe, context);
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
const deserializeAws_json1_1SourceDescription = (output, context) => {
    let contents = {
        __type: "SourceDescription",
        KinesisStreamSourceDescription: undefined
    };
    if (output.KinesisStreamSourceDescription !== undefined &&
        output.KinesisStreamSourceDescription !== null) {
        contents.KinesisStreamSourceDescription = deserializeAws_json1_1KinesisStreamSourceDescription(output.KinesisStreamSourceDescription, context);
    }
    return contents;
};
const deserializeAws_json1_1SplunkDestinationDescription = (output, context) => {
    let contents = {
        __type: "SplunkDestinationDescription",
        CloudWatchLoggingOptions: undefined,
        HECAcknowledgmentTimeoutInSeconds: undefined,
        HECEndpoint: undefined,
        HECEndpointType: undefined,
        HECToken: undefined,
        ProcessingConfiguration: undefined,
        RetryOptions: undefined,
        S3BackupMode: undefined,
        S3DestinationDescription: undefined
    };
    if (output.CloudWatchLoggingOptions !== undefined &&
        output.CloudWatchLoggingOptions !== null) {
        contents.CloudWatchLoggingOptions = deserializeAws_json1_1CloudWatchLoggingOptions(output.CloudWatchLoggingOptions, context);
    }
    if (output.HECAcknowledgmentTimeoutInSeconds !== undefined &&
        output.HECAcknowledgmentTimeoutInSeconds !== null) {
        contents.HECAcknowledgmentTimeoutInSeconds =
            output.HECAcknowledgmentTimeoutInSeconds;
    }
    if (output.HECEndpoint !== undefined && output.HECEndpoint !== null) {
        contents.HECEndpoint = output.HECEndpoint;
    }
    if (output.HECEndpointType !== undefined && output.HECEndpointType !== null) {
        contents.HECEndpointType = output.HECEndpointType;
    }
    if (output.HECToken !== undefined && output.HECToken !== null) {
        contents.HECToken = output.HECToken;
    }
    if (output.ProcessingConfiguration !== undefined &&
        output.ProcessingConfiguration !== null) {
        contents.ProcessingConfiguration = deserializeAws_json1_1ProcessingConfiguration(output.ProcessingConfiguration, context);
    }
    if (output.RetryOptions !== undefined && output.RetryOptions !== null) {
        contents.RetryOptions = deserializeAws_json1_1SplunkRetryOptions(output.RetryOptions, context);
    }
    if (output.S3BackupMode !== undefined && output.S3BackupMode !== null) {
        contents.S3BackupMode = output.S3BackupMode;
    }
    if (output.S3DestinationDescription !== undefined &&
        output.S3DestinationDescription !== null) {
        contents.S3DestinationDescription = deserializeAws_json1_1S3DestinationDescription(output.S3DestinationDescription, context);
    }
    return contents;
};
const deserializeAws_json1_1SplunkRetryOptions = (output, context) => {
    let contents = {
        __type: "SplunkRetryOptions",
        DurationInSeconds: undefined
    };
    if (output.DurationInSeconds !== undefined &&
        output.DurationInSeconds !== null) {
        contents.DurationInSeconds = output.DurationInSeconds;
    }
    return contents;
};
const deserializeAws_json1_1StartDeliveryStreamEncryptionOutput = (output, context) => {
    let contents = {
        __type: "StartDeliveryStreamEncryptionOutput"
    };
    return contents;
};
const deserializeAws_json1_1StopDeliveryStreamEncryptionOutput = (output, context) => {
    let contents = {
        __type: "StopDeliveryStreamEncryptionOutput"
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
const deserializeAws_json1_1TagDeliveryStreamOutput = (output, context) => {
    let contents = {
        __type: "TagDeliveryStreamOutput"
    };
    return contents;
};
const deserializeAws_json1_1UntagDeliveryStreamOutput = (output, context) => {
    let contents = {
        __type: "UntagDeliveryStreamOutput"
    };
    return contents;
};
const deserializeAws_json1_1UpdateDestinationOutput = (output, context) => {
    let contents = {
        __type: "UpdateDestinationOutput"
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