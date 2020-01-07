"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const fast_xml_parser_1 = require("fast-xml-parser");
async function serializeAws_queryAddPermissionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryAddPermissionRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "AddPermission", Version: "2012-11-05" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryAddPermissionCommand = serializeAws_queryAddPermissionCommand;
async function serializeAws_queryChangeMessageVisibilityCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryChangeMessageVisibilityRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ChangeMessageVisibility", Version: "2012-11-05" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryChangeMessageVisibilityCommand = serializeAws_queryChangeMessageVisibilityCommand;
async function serializeAws_queryChangeMessageVisibilityBatchCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryChangeMessageVisibilityBatchRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ChangeMessageVisibilityBatch", Version: "2012-11-05" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryChangeMessageVisibilityBatchCommand = serializeAws_queryChangeMessageVisibilityBatchCommand;
async function serializeAws_queryCreateQueueCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateQueueRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateQueue", Version: "2012-11-05" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateQueueCommand = serializeAws_queryCreateQueueCommand;
async function serializeAws_queryDeleteMessageCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteMessageRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteMessage", Version: "2012-11-05" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteMessageCommand = serializeAws_queryDeleteMessageCommand;
async function serializeAws_queryDeleteMessageBatchCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteMessageBatchRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteMessageBatch", Version: "2012-11-05" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteMessageBatchCommand = serializeAws_queryDeleteMessageBatchCommand;
async function serializeAws_queryDeleteQueueCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteQueueRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteQueue", Version: "2012-11-05" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteQueueCommand = serializeAws_queryDeleteQueueCommand;
async function serializeAws_queryGetQueueAttributesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryGetQueueAttributesRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "GetQueueAttributes", Version: "2012-11-05" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryGetQueueAttributesCommand = serializeAws_queryGetQueueAttributesCommand;
async function serializeAws_queryGetQueueUrlCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryGetQueueUrlRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "GetQueueUrl", Version: "2012-11-05" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryGetQueueUrlCommand = serializeAws_queryGetQueueUrlCommand;
async function serializeAws_queryListDeadLetterSourceQueuesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListDeadLetterSourceQueuesRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListDeadLetterSourceQueues", Version: "2012-11-05" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListDeadLetterSourceQueuesCommand = serializeAws_queryListDeadLetterSourceQueuesCommand;
async function serializeAws_queryListQueueTagsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListQueueTagsRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListQueueTags", Version: "2012-11-05" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListQueueTagsCommand = serializeAws_queryListQueueTagsCommand;
async function serializeAws_queryListQueuesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListQueuesRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListQueues", Version: "2012-11-05" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListQueuesCommand = serializeAws_queryListQueuesCommand;
async function serializeAws_queryPurgeQueueCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryPurgeQueueRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "PurgeQueue", Version: "2012-11-05" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryPurgeQueueCommand = serializeAws_queryPurgeQueueCommand;
async function serializeAws_queryReceiveMessageCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryReceiveMessageRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ReceiveMessage", Version: "2012-11-05" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryReceiveMessageCommand = serializeAws_queryReceiveMessageCommand;
async function serializeAws_queryRemovePermissionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryRemovePermissionRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "RemovePermission", Version: "2012-11-05" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryRemovePermissionCommand = serializeAws_queryRemovePermissionCommand;
async function serializeAws_querySendMessageCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_querySendMessageRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "SendMessage", Version: "2012-11-05" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_querySendMessageCommand = serializeAws_querySendMessageCommand;
async function serializeAws_querySendMessageBatchCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_querySendMessageBatchRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "SendMessageBatch", Version: "2012-11-05" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_querySendMessageBatchCommand = serializeAws_querySendMessageBatchCommand;
async function serializeAws_querySetQueueAttributesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_querySetQueueAttributesRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "SetQueueAttributes", Version: "2012-11-05" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_querySetQueueAttributesCommand = serializeAws_querySetQueueAttributesCommand;
async function serializeAws_queryTagQueueCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryTagQueueRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "TagQueue", Version: "2012-11-05" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryTagQueueCommand = serializeAws_queryTagQueueCommand;
async function serializeAws_queryUntagQueueCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryUntagQueueRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "UntagQueue", Version: "2012-11-05" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryUntagQueueCommand = serializeAws_queryUntagQueueCommand;
async function deserializeAws_queryAddPermissionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryAddPermissionCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryAddPermissionCommand = deserializeAws_queryAddPermissionCommand;
async function deserializeAws_queryAddPermissionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "OverLimit":
        case "com.amazonaws.sqs#OverLimit":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryOverLimitResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryChangeMessageVisibilityCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryChangeMessageVisibilityCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryChangeMessageVisibilityCommand = deserializeAws_queryChangeMessageVisibilityCommand;
async function deserializeAws_queryChangeMessageVisibilityCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "MessageNotInflight":
        case "com.amazonaws.sqs#MessageNotInflight":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryMessageNotInflightResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ReceiptHandleIsInvalid":
        case "com.amazonaws.sqs#ReceiptHandleIsInvalid":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryReceiptHandleIsInvalidResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryChangeMessageVisibilityBatchCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryChangeMessageVisibilityBatchCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryChangeMessageVisibilityBatchResult(data.ChangeMessageVisibilityBatchResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ChangeMessageVisibilityBatchResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryChangeMessageVisibilityBatchCommand = deserializeAws_queryChangeMessageVisibilityBatchCommand;
async function deserializeAws_queryChangeMessageVisibilityBatchCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BatchEntryIdsNotDistinct":
        case "com.amazonaws.sqs#BatchEntryIdsNotDistinct":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryBatchEntryIdsNotDistinctResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EmptyBatchRequest":
        case "com.amazonaws.sqs#EmptyBatchRequest":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryEmptyBatchRequestResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidBatchEntryId":
        case "com.amazonaws.sqs#InvalidBatchEntryId":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidBatchEntryIdResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyEntriesInBatchRequest":
        case "com.amazonaws.sqs#TooManyEntriesInBatchRequest":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTooManyEntriesInBatchRequestResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryCreateQueueCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateQueueCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateQueueResult(data.CreateQueueResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateQueueResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateQueueCommand = deserializeAws_queryCreateQueueCommand;
async function deserializeAws_queryCreateQueueCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "QueueDeletedRecently":
        case "com.amazonaws.sqs#QueueDeletedRecently":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryQueueDeletedRecentlyResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "QueueNameExists":
        case "com.amazonaws.sqs#QueueNameExists":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryQueueNameExistsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDeleteMessageCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteMessageCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteMessageCommand = deserializeAws_queryDeleteMessageCommand;
async function deserializeAws_queryDeleteMessageCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidIdFormat":
        case "com.amazonaws.sqs#InvalidIdFormat":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidIdFormatResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ReceiptHandleIsInvalid":
        case "com.amazonaws.sqs#ReceiptHandleIsInvalid":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryReceiptHandleIsInvalidResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDeleteMessageBatchCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteMessageBatchCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteMessageBatchResult(data.DeleteMessageBatchResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteMessageBatchResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteMessageBatchCommand = deserializeAws_queryDeleteMessageBatchCommand;
async function deserializeAws_queryDeleteMessageBatchCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BatchEntryIdsNotDistinct":
        case "com.amazonaws.sqs#BatchEntryIdsNotDistinct":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryBatchEntryIdsNotDistinctResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EmptyBatchRequest":
        case "com.amazonaws.sqs#EmptyBatchRequest":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryEmptyBatchRequestResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidBatchEntryId":
        case "com.amazonaws.sqs#InvalidBatchEntryId":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidBatchEntryIdResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyEntriesInBatchRequest":
        case "com.amazonaws.sqs#TooManyEntriesInBatchRequest":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTooManyEntriesInBatchRequestResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDeleteQueueCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteQueueCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteQueueCommand = deserializeAws_queryDeleteQueueCommand;
async function deserializeAws_queryDeleteQueueCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryGetQueueAttributesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryGetQueueAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetQueueAttributesResult(data.GetQueueAttributesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetQueueAttributesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryGetQueueAttributesCommand = deserializeAws_queryGetQueueAttributesCommand;
async function deserializeAws_queryGetQueueAttributesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidAttributeName":
        case "com.amazonaws.sqs#InvalidAttributeName":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidAttributeNameResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryGetQueueUrlCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryGetQueueUrlCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetQueueUrlResult(data.GetQueueUrlResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetQueueUrlResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryGetQueueUrlCommand = deserializeAws_queryGetQueueUrlCommand;
async function deserializeAws_queryGetQueueUrlCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "QueueDoesNotExist":
        case "com.amazonaws.sqs#QueueDoesNotExist":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryQueueDoesNotExistResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryListDeadLetterSourceQueuesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListDeadLetterSourceQueuesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListDeadLetterSourceQueuesResult(data.ListDeadLetterSourceQueuesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListDeadLetterSourceQueuesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListDeadLetterSourceQueuesCommand = deserializeAws_queryListDeadLetterSourceQueuesCommand;
async function deserializeAws_queryListDeadLetterSourceQueuesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "QueueDoesNotExist":
        case "com.amazonaws.sqs#QueueDoesNotExist":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryQueueDoesNotExistResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryListQueueTagsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListQueueTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListQueueTagsResult(data.ListQueueTagsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListQueueTagsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListQueueTagsCommand = deserializeAws_queryListQueueTagsCommand;
async function deserializeAws_queryListQueueTagsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryListQueuesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListQueuesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListQueuesResult(data.ListQueuesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListQueuesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListQueuesCommand = deserializeAws_queryListQueuesCommand;
async function deserializeAws_queryListQueuesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryPurgeQueueCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryPurgeQueueCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryPurgeQueueCommand = deserializeAws_queryPurgeQueueCommand;
async function deserializeAws_queryPurgeQueueCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "PurgeQueueInProgress":
        case "com.amazonaws.sqs#PurgeQueueInProgress":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryPurgeQueueInProgressResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "QueueDoesNotExist":
        case "com.amazonaws.sqs#QueueDoesNotExist":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryQueueDoesNotExistResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryReceiveMessageCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryReceiveMessageCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryReceiveMessageResult(data.ReceiveMessageResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ReceiveMessageResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryReceiveMessageCommand = deserializeAws_queryReceiveMessageCommand;
async function deserializeAws_queryReceiveMessageCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "OverLimit":
        case "com.amazonaws.sqs#OverLimit":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryOverLimitResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryRemovePermissionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryRemovePermissionCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryRemovePermissionCommand = deserializeAws_queryRemovePermissionCommand;
async function deserializeAws_queryRemovePermissionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_querySendMessageCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_querySendMessageCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySendMessageResult(data.SendMessageResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SendMessageResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_querySendMessageCommand = deserializeAws_querySendMessageCommand;
async function deserializeAws_querySendMessageCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidMessageContents":
        case "com.amazonaws.sqs#InvalidMessageContents":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidMessageContentsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperation":
        case "com.amazonaws.sqs#UnsupportedOperation":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryUnsupportedOperationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_querySendMessageBatchCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_querySendMessageBatchCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySendMessageBatchResult(data.SendMessageBatchResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SendMessageBatchResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_querySendMessageBatchCommand = deserializeAws_querySendMessageBatchCommand;
async function deserializeAws_querySendMessageBatchCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BatchEntryIdsNotDistinct":
        case "com.amazonaws.sqs#BatchEntryIdsNotDistinct":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryBatchEntryIdsNotDistinctResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "BatchRequestTooLong":
        case "com.amazonaws.sqs#BatchRequestTooLong":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryBatchRequestTooLongResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EmptyBatchRequest":
        case "com.amazonaws.sqs#EmptyBatchRequest":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryEmptyBatchRequestResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidBatchEntryId":
        case "com.amazonaws.sqs#InvalidBatchEntryId":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidBatchEntryIdResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyEntriesInBatchRequest":
        case "com.amazonaws.sqs#TooManyEntriesInBatchRequest":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTooManyEntriesInBatchRequestResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperation":
        case "com.amazonaws.sqs#UnsupportedOperation":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryUnsupportedOperationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_querySetQueueAttributesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_querySetQueueAttributesCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_querySetQueueAttributesCommand = deserializeAws_querySetQueueAttributesCommand;
async function deserializeAws_querySetQueueAttributesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidAttributeName":
        case "com.amazonaws.sqs#InvalidAttributeName":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidAttributeNameResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryTagQueueCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryTagQueueCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryTagQueueCommand = deserializeAws_queryTagQueueCommand;
async function deserializeAws_queryTagQueueCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryUntagQueueCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryUntagQueueCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryUntagQueueCommand = deserializeAws_queryUntagQueueCommand;
async function deserializeAws_queryUntagQueueCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
const deserializeAws_queryBatchEntryIdsNotDistinctResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryBatchEntryIdsNotDistinct(body.Error, context);
    const contents = Object.assign({ name: "BatchEntryIdsNotDistinct", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryBatchRequestTooLongResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryBatchRequestTooLong(body.Error, context);
    const contents = Object.assign({ name: "BatchRequestTooLong", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryEmptyBatchRequestResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryEmptyBatchRequest(body.Error, context);
    const contents = Object.assign({ name: "EmptyBatchRequest", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidAttributeNameResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidAttributeName(body.Error, context);
    const contents = Object.assign({ name: "InvalidAttributeName", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidBatchEntryIdResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidBatchEntryId(body.Error, context);
    const contents = Object.assign({ name: "InvalidBatchEntryId", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidIdFormatResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidIdFormat(body.Error, context);
    const contents = Object.assign({ name: "InvalidIdFormat", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidMessageContentsResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidMessageContents(body.Error, context);
    const contents = Object.assign({ name: "InvalidMessageContents", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryMessageNotInflightResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryMessageNotInflight(body.Error, context);
    const contents = Object.assign({ name: "MessageNotInflight", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryOverLimitResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryOverLimit(body.Error, context);
    const contents = Object.assign({ name: "OverLimit", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryPurgeQueueInProgressResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryPurgeQueueInProgress(body.Error, context);
    const contents = Object.assign({ name: "PurgeQueueInProgress", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryQueueDeletedRecentlyResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryQueueDeletedRecently(body.Error, context);
    const contents = Object.assign({ name: "QueueDeletedRecently", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryQueueDoesNotExistResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryQueueDoesNotExist(body.Error, context);
    const contents = Object.assign({ name: "QueueDoesNotExist", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryQueueNameExistsResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryQueueNameExists(body.Error, context);
    const contents = Object.assign({ name: "QueueNameExists", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryReceiptHandleIsInvalidResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryReceiptHandleIsInvalid(body.Error, context);
    const contents = Object.assign({ name: "ReceiptHandleIsInvalid", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryTooManyEntriesInBatchRequestResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTooManyEntriesInBatchRequest(body.Error, context);
    const contents = Object.assign({ name: "TooManyEntriesInBatchRequest", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryUnsupportedOperationResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryUnsupportedOperation(body.Error, context);
    const contents = Object.assign({ name: "UnsupportedOperation", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_queryAWSAccountIdList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryActionNameList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryAddPermissionRequest = (input, context) => {
    const entries = {};
    if (input.AWSAccountIds !== undefined) {
        const memberEntries = serializeAws_queryAWSAccountIdList(input.AWSAccountIds, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `AWSAccountId.${key.substring(key.indexOf(".") + 1)}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Actions !== undefined) {
        const memberEntries = serializeAws_queryActionNameList(input.Actions, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ActionName.${key.substring(key.indexOf(".") + 1)}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Label !== undefined) {
        entries["Label"] = input.Label;
    }
    if (input.QueueUrl !== undefined) {
        entries["QueueUrl"] = input.QueueUrl;
    }
    return entries;
};
const serializeAws_queryAttributeNameList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryBinaryList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`BinaryListValue.${counter}`] = context.base64Encoder(entry);
        counter++;
    }
    return entries;
};
const serializeAws_queryChangeMessageVisibilityBatchRequest = (input, context) => {
    const entries = {};
    if (input.Entries !== undefined) {
        const memberEntries = serializeAws_queryChangeMessageVisibilityBatchRequestEntryList(input.Entries, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ChangeMessageVisibilityBatchRequestEntry.${key.substring(key.indexOf(".") + 1)}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.QueueUrl !== undefined) {
        entries["QueueUrl"] = input.QueueUrl;
    }
    return entries;
};
const serializeAws_queryChangeMessageVisibilityBatchRequestEntry = (input, context) => {
    const entries = {};
    if (input.Id !== undefined) {
        entries["Id"] = input.Id;
    }
    if (input.ReceiptHandle !== undefined) {
        entries["ReceiptHandle"] = input.ReceiptHandle;
    }
    if (input.VisibilityTimeout !== undefined) {
        entries["VisibilityTimeout"] = input.VisibilityTimeout;
    }
    return entries;
};
const serializeAws_queryChangeMessageVisibilityBatchRequestEntryList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_queryChangeMessageVisibilityBatchRequestEntry(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`member.${counter}.${key}`] = memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryChangeMessageVisibilityRequest = (input, context) => {
    const entries = {};
    if (input.QueueUrl !== undefined) {
        entries["QueueUrl"] = input.QueueUrl;
    }
    if (input.ReceiptHandle !== undefined) {
        entries["ReceiptHandle"] = input.ReceiptHandle;
    }
    if (input.VisibilityTimeout !== undefined) {
        entries["VisibilityTimeout"] = input.VisibilityTimeout;
    }
    return entries;
};
const serializeAws_queryCreateQueueRequest = (input, context) => {
    const entries = {};
    if (input.Attributes !== undefined) {
        const memberEntries = serializeAws_queryQueueAttributeMap(input.Attributes, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Attribute.${key.substring(key.indexOf(".") + 1)}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.QueueName !== undefined) {
        entries["QueueName"] = input.QueueName;
    }
    if (input.tags !== undefined) {
        const memberEntries = serializeAws_queryTagMap(input.tags, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Tag.${key.substring(key.indexOf(".") + 1)}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryDeleteMessageBatchRequest = (input, context) => {
    const entries = {};
    if (input.Entries !== undefined) {
        const memberEntries = serializeAws_queryDeleteMessageBatchRequestEntryList(input.Entries, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `DeleteMessageBatchRequestEntry.${key.substring(key.indexOf(".") + 1)}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.QueueUrl !== undefined) {
        entries["QueueUrl"] = input.QueueUrl;
    }
    return entries;
};
const serializeAws_queryDeleteMessageBatchRequestEntry = (input, context) => {
    const entries = {};
    if (input.Id !== undefined) {
        entries["Id"] = input.Id;
    }
    if (input.ReceiptHandle !== undefined) {
        entries["ReceiptHandle"] = input.ReceiptHandle;
    }
    return entries;
};
const serializeAws_queryDeleteMessageBatchRequestEntryList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_queryDeleteMessageBatchRequestEntry(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`member.${counter}.${key}`] = memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryDeleteMessageRequest = (input, context) => {
    const entries = {};
    if (input.QueueUrl !== undefined) {
        entries["QueueUrl"] = input.QueueUrl;
    }
    if (input.ReceiptHandle !== undefined) {
        entries["ReceiptHandle"] = input.ReceiptHandle;
    }
    return entries;
};
const serializeAws_queryDeleteQueueRequest = (input, context) => {
    const entries = {};
    if (input.QueueUrl !== undefined) {
        entries["QueueUrl"] = input.QueueUrl;
    }
    return entries;
};
const serializeAws_queryGetQueueAttributesRequest = (input, context) => {
    const entries = {};
    if (input.AttributeNames !== undefined) {
        const memberEntries = serializeAws_queryAttributeNameList(input.AttributeNames, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `AttributeName.${key.substring(key.indexOf(".") + 1)}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.QueueUrl !== undefined) {
        entries["QueueUrl"] = input.QueueUrl;
    }
    return entries;
};
const serializeAws_queryGetQueueUrlRequest = (input, context) => {
    const entries = {};
    if (input.QueueName !== undefined) {
        entries["QueueName"] = input.QueueName;
    }
    if (input.QueueOwnerAWSAccountId !== undefined) {
        entries["QueueOwnerAWSAccountId"] = input.QueueOwnerAWSAccountId;
    }
    return entries;
};
const serializeAws_queryListDeadLetterSourceQueuesRequest = (input, context) => {
    const entries = {};
    if (input.QueueUrl !== undefined) {
        entries["QueueUrl"] = input.QueueUrl;
    }
    return entries;
};
const serializeAws_queryListQueueTagsRequest = (input, context) => {
    const entries = {};
    if (input.QueueUrl !== undefined) {
        entries["QueueUrl"] = input.QueueUrl;
    }
    return entries;
};
const serializeAws_queryListQueuesRequest = (input, context) => {
    const entries = {};
    if (input.QueueNamePrefix !== undefined) {
        entries["QueueNamePrefix"] = input.QueueNamePrefix;
    }
    return entries;
};
const serializeAws_queryMessageAttributeNameList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryMessageAttributeValue = (input, context) => {
    const entries = {};
    if (input.BinaryListValues !== undefined) {
        const memberEntries = serializeAws_queryBinaryList(input.BinaryListValues, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `BinaryListValue.${key.substring(key.indexOf(".") + 1)}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.BinaryValue !== undefined) {
        entries["BinaryValue"] = context.base64Encoder(input.BinaryValue);
    }
    if (input.DataType !== undefined) {
        entries["DataType"] = input.DataType;
    }
    if (input.StringListValues !== undefined) {
        const memberEntries = serializeAws_queryStringList(input.StringListValues, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `StringListValue.${key.substring(key.indexOf(".") + 1)}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.StringValue !== undefined) {
        entries["StringValue"] = input.StringValue;
    }
    return entries;
};
const serializeAws_queryMessageBodyAttributeMap = (input, context) => {
    const entries = {};
    let counter = 1;
    Object.keys(input).forEach(key => {
        entries[`entry.${counter}.Name`] = key;
        const memberEntries = serializeAws_queryMessageAttributeValue(input[key], context);
        Object.keys(memberEntries).forEach(key => {
            entries[`entry.${counter}.Value.${key}`] = memberEntries[key];
        });
        counter++;
    });
    return entries;
};
const serializeAws_queryMessageBodySystemAttributeMap = (input, context) => {
    const entries = {};
    let counter = 1;
    Object.keys(input).forEach(key => {
        entries[`entry.${counter}.Name`] = key;
        const memberEntries = serializeAws_queryMessageSystemAttributeValue(input[key], context);
        Object.keys(memberEntries).forEach(key => {
            entries[`entry.${counter}.Value.${key}`] = memberEntries[key];
        });
        counter++;
    });
    return entries;
};
const serializeAws_queryMessageSystemAttributeValue = (input, context) => {
    const entries = {};
    if (input.BinaryListValues !== undefined) {
        const memberEntries = serializeAws_queryBinaryList(input.BinaryListValues, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `BinaryListValue.${key.substring(key.indexOf(".") + 1)}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.BinaryValue !== undefined) {
        entries["BinaryValue"] = context.base64Encoder(input.BinaryValue);
    }
    if (input.DataType !== undefined) {
        entries["DataType"] = input.DataType;
    }
    if (input.StringListValues !== undefined) {
        const memberEntries = serializeAws_queryStringList(input.StringListValues, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `StringListValue.${key.substring(key.indexOf(".") + 1)}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.StringValue !== undefined) {
        entries["StringValue"] = input.StringValue;
    }
    return entries;
};
const serializeAws_queryPurgeQueueRequest = (input, context) => {
    const entries = {};
    if (input.QueueUrl !== undefined) {
        entries["QueueUrl"] = input.QueueUrl;
    }
    return entries;
};
const serializeAws_queryQueueAttributeMap = (input, context) => {
    const entries = {};
    let counter = 1;
    Object.keys(input).forEach(key => {
        entries[`entry.${counter}.Name`] = key;
        entries[`entry.${counter}.Value`] = input[key];
        counter++;
    });
    return entries;
};
const serializeAws_queryReceiveMessageRequest = (input, context) => {
    const entries = {};
    if (input.AttributeNames !== undefined) {
        const memberEntries = serializeAws_queryAttributeNameList(input.AttributeNames, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `AttributeName.${key.substring(key.indexOf(".") + 1)}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.MaxNumberOfMessages !== undefined) {
        entries["MaxNumberOfMessages"] = input.MaxNumberOfMessages;
    }
    if (input.MessageAttributeNames !== undefined) {
        const memberEntries = serializeAws_queryMessageAttributeNameList(input.MessageAttributeNames, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `MessageAttributeName.${key.substring(key.indexOf(".") + 1)}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.QueueUrl !== undefined) {
        entries["QueueUrl"] = input.QueueUrl;
    }
    if (input.ReceiveRequestAttemptId !== undefined) {
        entries["ReceiveRequestAttemptId"] = input.ReceiveRequestAttemptId;
    }
    if (input.VisibilityTimeout !== undefined) {
        entries["VisibilityTimeout"] = input.VisibilityTimeout;
    }
    if (input.WaitTimeSeconds !== undefined) {
        entries["WaitTimeSeconds"] = input.WaitTimeSeconds;
    }
    return entries;
};
const serializeAws_queryRemovePermissionRequest = (input, context) => {
    const entries = {};
    if (input.Label !== undefined) {
        entries["Label"] = input.Label;
    }
    if (input.QueueUrl !== undefined) {
        entries["QueueUrl"] = input.QueueUrl;
    }
    return entries;
};
const serializeAws_querySendMessageBatchRequest = (input, context) => {
    const entries = {};
    if (input.Entries !== undefined) {
        const memberEntries = serializeAws_querySendMessageBatchRequestEntryList(input.Entries, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `SendMessageBatchRequestEntry.${key.substring(key.indexOf(".") + 1)}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.QueueUrl !== undefined) {
        entries["QueueUrl"] = input.QueueUrl;
    }
    return entries;
};
const serializeAws_querySendMessageBatchRequestEntry = (input, context) => {
    const entries = {};
    if (input.DelaySeconds !== undefined) {
        entries["DelaySeconds"] = input.DelaySeconds;
    }
    if (input.Id !== undefined) {
        entries["Id"] = input.Id;
    }
    if (input.MessageAttributes !== undefined) {
        const memberEntries = serializeAws_queryMessageBodyAttributeMap(input.MessageAttributes, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `MessageAttribute.${key.substring(key.indexOf(".") + 1)}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.MessageBody !== undefined) {
        entries["MessageBody"] = input.MessageBody;
    }
    if (input.MessageDeduplicationId !== undefined) {
        entries["MessageDeduplicationId"] = input.MessageDeduplicationId;
    }
    if (input.MessageGroupId !== undefined) {
        entries["MessageGroupId"] = input.MessageGroupId;
    }
    if (input.MessageSystemAttributes !== undefined) {
        const memberEntries = serializeAws_queryMessageBodySystemAttributeMap(input.MessageSystemAttributes, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `MessageSystemAttribute.${key.substring(key.indexOf(".") + 1)}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_querySendMessageBatchRequestEntryList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_querySendMessageBatchRequestEntry(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`member.${counter}.${key}`] = memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_querySendMessageRequest = (input, context) => {
    const entries = {};
    if (input.DelaySeconds !== undefined) {
        entries["DelaySeconds"] = input.DelaySeconds;
    }
    if (input.MessageAttributes !== undefined) {
        const memberEntries = serializeAws_queryMessageBodyAttributeMap(input.MessageAttributes, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `MessageAttribute.${key.substring(key.indexOf(".") + 1)}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.MessageBody !== undefined) {
        entries["MessageBody"] = input.MessageBody;
    }
    if (input.MessageDeduplicationId !== undefined) {
        entries["MessageDeduplicationId"] = input.MessageDeduplicationId;
    }
    if (input.MessageGroupId !== undefined) {
        entries["MessageGroupId"] = input.MessageGroupId;
    }
    if (input.MessageSystemAttributes !== undefined) {
        const memberEntries = serializeAws_queryMessageBodySystemAttributeMap(input.MessageSystemAttributes, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `MessageSystemAttribute.${key.substring(key.indexOf(".") + 1)}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.QueueUrl !== undefined) {
        entries["QueueUrl"] = input.QueueUrl;
    }
    return entries;
};
const serializeAws_querySetQueueAttributesRequest = (input, context) => {
    const entries = {};
    if (input.Attributes !== undefined) {
        const memberEntries = serializeAws_queryQueueAttributeMap(input.Attributes, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Attribute.${key.substring(key.indexOf(".") + 1)}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.QueueUrl !== undefined) {
        entries["QueueUrl"] = input.QueueUrl;
    }
    return entries;
};
const serializeAws_queryStringList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`StringListValue.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryTagKeyList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryTagMap = (input, context) => {
    const entries = {};
    let counter = 1;
    Object.keys(input).forEach(key => {
        entries[`entry.${counter}.Key`] = key;
        entries[`entry.${counter}.Value`] = input[key];
        counter++;
    });
    return entries;
};
const serializeAws_queryTagQueueRequest = (input, context) => {
    const entries = {};
    if (input.QueueUrl !== undefined) {
        entries["QueueUrl"] = input.QueueUrl;
    }
    if (input.Tags !== undefined) {
        const memberEntries = serializeAws_queryTagMap(input.Tags, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Tag.${key.substring(key.indexOf(".") + 1)}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryUntagQueueRequest = (input, context) => {
    const entries = {};
    if (input.QueueUrl !== undefined) {
        entries["QueueUrl"] = input.QueueUrl;
    }
    if (input.TagKeys !== undefined) {
        const memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `TagKey.${key.substring(key.indexOf(".") + 1)}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const deserializeAws_queryBatchEntryIdsNotDistinct = (output, context) => {
    let contents = {
        __type: "BatchEntryIdsNotDistinct"
    };
    return contents;
};
const deserializeAws_queryBatchRequestTooLong = (output, context) => {
    let contents = {
        __type: "BatchRequestTooLong"
    };
    return contents;
};
const deserializeAws_queryBatchResultErrorEntry = (output, context) => {
    let contents = {
        __type: "BatchResultErrorEntry",
        Code: undefined,
        Id: undefined,
        Message: undefined,
        SenderFault: undefined
    };
    if (output["Code"] !== undefined) {
        contents.Code = output["Code"];
    }
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    if (output["SenderFault"] !== undefined) {
        contents.SenderFault = output["SenderFault"] == "true";
    }
    return contents;
};
const deserializeAws_queryBatchResultErrorEntryList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryBatchResultErrorEntry(entry, context));
    });
    return contents;
};
const deserializeAws_queryBinaryList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(context.base64Decoder(entry));
    });
    return contents;
};
const deserializeAws_queryChangeMessageVisibilityBatchResult = (output, context) => {
    let contents = {
        __type: "ChangeMessageVisibilityBatchResult",
        Failed: undefined,
        Successful: undefined
    };
    if (output.BatchResultErrorEntry === "") {
        contents.Failed = [];
    }
    if (output["BatchResultErrorEntry"] !== undefined) {
        const wrappedItem = output["BatchResultErrorEntry"] instanceof Array
            ? output["BatchResultErrorEntry"]
            : [output["BatchResultErrorEntry"]];
        contents.Failed = deserializeAws_queryBatchResultErrorEntryList(wrappedItem, context);
    }
    if (output.ChangeMessageVisibilityBatchResultEntry === "") {
        contents.Successful = [];
    }
    if (output["ChangeMessageVisibilityBatchResultEntry"] !== undefined) {
        const wrappedItem = output["ChangeMessageVisibilityBatchResultEntry"] instanceof Array
            ? output["ChangeMessageVisibilityBatchResultEntry"]
            : [output["ChangeMessageVisibilityBatchResultEntry"]];
        contents.Successful = deserializeAws_queryChangeMessageVisibilityBatchResultEntryList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryChangeMessageVisibilityBatchResultEntry = (output, context) => {
    let contents = {
        __type: "ChangeMessageVisibilityBatchResultEntry",
        Id: undefined
    };
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    return contents;
};
const deserializeAws_queryChangeMessageVisibilityBatchResultEntryList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryChangeMessageVisibilityBatchResultEntry(entry, context));
    });
    return contents;
};
const deserializeAws_queryCreateQueueResult = (output, context) => {
    let contents = {
        __type: "CreateQueueResult",
        QueueUrl: undefined
    };
    if (output["QueueUrl"] !== undefined) {
        contents.QueueUrl = output["QueueUrl"];
    }
    return contents;
};
const deserializeAws_queryDeleteMessageBatchResult = (output, context) => {
    let contents = {
        __type: "DeleteMessageBatchResult",
        Failed: undefined,
        Successful: undefined
    };
    if (output.BatchResultErrorEntry === "") {
        contents.Failed = [];
    }
    if (output["BatchResultErrorEntry"] !== undefined) {
        const wrappedItem = output["BatchResultErrorEntry"] instanceof Array
            ? output["BatchResultErrorEntry"]
            : [output["BatchResultErrorEntry"]];
        contents.Failed = deserializeAws_queryBatchResultErrorEntryList(wrappedItem, context);
    }
    if (output.DeleteMessageBatchResultEntry === "") {
        contents.Successful = [];
    }
    if (output["DeleteMessageBatchResultEntry"] !== undefined) {
        const wrappedItem = output["DeleteMessageBatchResultEntry"] instanceof Array
            ? output["DeleteMessageBatchResultEntry"]
            : [output["DeleteMessageBatchResultEntry"]];
        contents.Successful = deserializeAws_queryDeleteMessageBatchResultEntryList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryDeleteMessageBatchResultEntry = (output, context) => {
    let contents = {
        __type: "DeleteMessageBatchResultEntry",
        Id: undefined
    };
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    return contents;
};
const deserializeAws_queryDeleteMessageBatchResultEntryList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryDeleteMessageBatchResultEntry(entry, context));
    });
    return contents;
};
const deserializeAws_queryEmptyBatchRequest = (output, context) => {
    let contents = {
        __type: "EmptyBatchRequest"
    };
    return contents;
};
const deserializeAws_queryGetQueueAttributesResult = (output, context) => {
    let contents = {
        __type: "GetQueueAttributesResult",
        Attributes: undefined
    };
    if (output.Attribute === "") {
        contents.Attributes = {};
    }
    if (output["Attribute"] !== undefined) {
        const wrappedItem = output["Attribute"] instanceof Array
            ? output["Attribute"]
            : [output["Attribute"]];
        contents.Attributes = deserializeAws_queryQueueAttributeMap(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryGetQueueUrlResult = (output, context) => {
    let contents = {
        __type: "GetQueueUrlResult",
        QueueUrl: undefined
    };
    if (output["QueueUrl"] !== undefined) {
        contents.QueueUrl = output["QueueUrl"];
    }
    return contents;
};
const deserializeAws_queryInvalidAttributeName = (output, context) => {
    let contents = {
        __type: "InvalidAttributeName"
    };
    return contents;
};
const deserializeAws_queryInvalidBatchEntryId = (output, context) => {
    let contents = {
        __type: "InvalidBatchEntryId"
    };
    return contents;
};
const deserializeAws_queryInvalidIdFormat = (output, context) => {
    let contents = {
        __type: "InvalidIdFormat"
    };
    return contents;
};
const deserializeAws_queryInvalidMessageContents = (output, context) => {
    let contents = {
        __type: "InvalidMessageContents"
    };
    return contents;
};
const deserializeAws_queryListDeadLetterSourceQueuesResult = (output, context) => {
    let contents = {
        __type: "ListDeadLetterSourceQueuesResult",
        queueUrls: undefined
    };
    if (output.QueueUrl === "") {
        contents.queueUrls = [];
    }
    if (output["QueueUrl"] !== undefined) {
        const wrappedItem = output["QueueUrl"] instanceof Array
            ? output["QueueUrl"]
            : [output["QueueUrl"]];
        contents.queueUrls = deserializeAws_queryQueueUrlList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryListQueueTagsResult = (output, context) => {
    let contents = {
        __type: "ListQueueTagsResult",
        Tags: undefined
    };
    if (output.Tag === "") {
        contents.Tags = {};
    }
    if (output["Tag"] !== undefined) {
        const wrappedItem = output["Tag"] instanceof Array ? output["Tag"] : [output["Tag"]];
        contents.Tags = deserializeAws_queryTagMap(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryListQueuesResult = (output, context) => {
    let contents = {
        __type: "ListQueuesResult",
        QueueUrls: undefined
    };
    if (output.QueueUrl === "") {
        contents.QueueUrls = [];
    }
    if (output["QueueUrl"] !== undefined) {
        const wrappedItem = output["QueueUrl"] instanceof Array
            ? output["QueueUrl"]
            : [output["QueueUrl"]];
        contents.QueueUrls = deserializeAws_queryQueueUrlList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryMessage = (output, context) => {
    let contents = {
        __type: "Message",
        Attributes: undefined,
        Body: undefined,
        MD5OfBody: undefined,
        MD5OfMessageAttributes: undefined,
        MessageAttributes: undefined,
        MessageId: undefined,
        ReceiptHandle: undefined
    };
    if (output.Attribute === "") {
        contents.Attributes = {};
    }
    if (output["Attribute"] !== undefined) {
        const wrappedItem = output["Attribute"] instanceof Array
            ? output["Attribute"]
            : [output["Attribute"]];
        contents.Attributes = deserializeAws_queryMessageSystemAttributeMap(wrappedItem, context);
    }
    if (output["Body"] !== undefined) {
        contents.Body = output["Body"];
    }
    if (output["MD5OfBody"] !== undefined) {
        contents.MD5OfBody = output["MD5OfBody"];
    }
    if (output["MD5OfMessageAttributes"] !== undefined) {
        contents.MD5OfMessageAttributes = output["MD5OfMessageAttributes"];
    }
    if (output.MessageAttribute === "") {
        contents.MessageAttributes = {};
    }
    if (output["MessageAttribute"] !== undefined) {
        const wrappedItem = output["MessageAttribute"] instanceof Array
            ? output["MessageAttribute"]
            : [output["MessageAttribute"]];
        contents.MessageAttributes = deserializeAws_queryMessageBodyAttributeMap(wrappedItem, context);
    }
    if (output["MessageId"] !== undefined) {
        contents.MessageId = output["MessageId"];
    }
    if (output["ReceiptHandle"] !== undefined) {
        contents.ReceiptHandle = output["ReceiptHandle"];
    }
    return contents;
};
const deserializeAws_queryMessageAttributeValue = (output, context) => {
    let contents = {
        __type: "MessageAttributeValue",
        BinaryListValues: undefined,
        BinaryValue: undefined,
        DataType: undefined,
        StringListValues: undefined,
        StringValue: undefined
    };
    if (output.BinaryListValue === "") {
        contents.BinaryListValues = [];
    }
    if (output["BinaryListValue"] !== undefined) {
        const wrappedItem = output["BinaryListValue"] instanceof Array
            ? output["BinaryListValue"]
            : [output["BinaryListValue"]];
        contents.BinaryListValues = deserializeAws_queryBinaryList(wrappedItem, context);
    }
    if (output["BinaryValue"] !== undefined) {
        contents.BinaryValue = context.base64Decoder(output["BinaryValue"]);
    }
    if (output["DataType"] !== undefined) {
        contents.DataType = output["DataType"];
    }
    if (output.StringListValue === "") {
        contents.StringListValues = [];
    }
    if (output["StringListValue"] !== undefined) {
        const wrappedItem = output["StringListValue"] instanceof Array
            ? output["StringListValue"]
            : [output["StringListValue"]];
        contents.StringListValues = deserializeAws_queryStringList(wrappedItem, context);
    }
    if (output["StringValue"] !== undefined) {
        contents.StringValue = output["StringValue"];
    }
    return contents;
};
const deserializeAws_queryMessageBodyAttributeMap = (output, context) => {
    const mapParams = {};
    output.forEach((pair) => {
        mapParams[pair["Name"]] = deserializeAws_queryMessageAttributeValue(pair["Value"], context);
    });
    return mapParams;
};
const deserializeAws_queryMessageList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryMessage(entry, context));
    });
    return contents;
};
const deserializeAws_queryMessageNotInflight = (output, context) => {
    let contents = {
        __type: "MessageNotInflight"
    };
    return contents;
};
const deserializeAws_queryMessageSystemAttributeMap = (output, context) => {
    const mapParams = {};
    output.forEach((pair) => {
        mapParams[pair["Name"]] = pair["Value"];
    });
    return mapParams;
};
const deserializeAws_queryOverLimit = (output, context) => {
    let contents = {
        __type: "OverLimit"
    };
    return contents;
};
const deserializeAws_queryPurgeQueueInProgress = (output, context) => {
    let contents = {
        __type: "PurgeQueueInProgress"
    };
    return contents;
};
const deserializeAws_queryQueueAttributeMap = (output, context) => {
    const mapParams = {};
    output.forEach((pair) => {
        mapParams[pair["Name"]] = pair["Value"];
    });
    return mapParams;
};
const deserializeAws_queryQueueDeletedRecently = (output, context) => {
    let contents = {
        __type: "QueueDeletedRecently"
    };
    return contents;
};
const deserializeAws_queryQueueDoesNotExist = (output, context) => {
    let contents = {
        __type: "QueueDoesNotExist"
    };
    return contents;
};
const deserializeAws_queryQueueNameExists = (output, context) => {
    let contents = {
        __type: "QueueNameExists"
    };
    return contents;
};
const deserializeAws_queryQueueUrlList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryReceiptHandleIsInvalid = (output, context) => {
    let contents = {
        __type: "ReceiptHandleIsInvalid"
    };
    return contents;
};
const deserializeAws_queryReceiveMessageResult = (output, context) => {
    let contents = {
        __type: "ReceiveMessageResult",
        Messages: undefined
    };
    if (output.Message === "") {
        contents.Messages = [];
    }
    if (output["Message"] !== undefined) {
        const wrappedItem = output["Message"] instanceof Array
            ? output["Message"]
            : [output["Message"]];
        contents.Messages = deserializeAws_queryMessageList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_querySendMessageBatchResult = (output, context) => {
    let contents = {
        __type: "SendMessageBatchResult",
        Failed: undefined,
        Successful: undefined
    };
    if (output.BatchResultErrorEntry === "") {
        contents.Failed = [];
    }
    if (output["BatchResultErrorEntry"] !== undefined) {
        const wrappedItem = output["BatchResultErrorEntry"] instanceof Array
            ? output["BatchResultErrorEntry"]
            : [output["BatchResultErrorEntry"]];
        contents.Failed = deserializeAws_queryBatchResultErrorEntryList(wrappedItem, context);
    }
    if (output.SendMessageBatchResultEntry === "") {
        contents.Successful = [];
    }
    if (output["SendMessageBatchResultEntry"] !== undefined) {
        const wrappedItem = output["SendMessageBatchResultEntry"] instanceof Array
            ? output["SendMessageBatchResultEntry"]
            : [output["SendMessageBatchResultEntry"]];
        contents.Successful = deserializeAws_querySendMessageBatchResultEntryList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_querySendMessageBatchResultEntry = (output, context) => {
    let contents = {
        __type: "SendMessageBatchResultEntry",
        Id: undefined,
        MD5OfMessageAttributes: undefined,
        MD5OfMessageBody: undefined,
        MD5OfMessageSystemAttributes: undefined,
        MessageId: undefined,
        SequenceNumber: undefined
    };
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    if (output["MD5OfMessageAttributes"] !== undefined) {
        contents.MD5OfMessageAttributes = output["MD5OfMessageAttributes"];
    }
    if (output["MD5OfMessageBody"] !== undefined) {
        contents.MD5OfMessageBody = output["MD5OfMessageBody"];
    }
    if (output["MD5OfMessageSystemAttributes"] !== undefined) {
        contents.MD5OfMessageSystemAttributes =
            output["MD5OfMessageSystemAttributes"];
    }
    if (output["MessageId"] !== undefined) {
        contents.MessageId = output["MessageId"];
    }
    if (output["SequenceNumber"] !== undefined) {
        contents.SequenceNumber = output["SequenceNumber"];
    }
    return contents;
};
const deserializeAws_querySendMessageBatchResultEntryList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_querySendMessageBatchResultEntry(entry, context));
    });
    return contents;
};
const deserializeAws_querySendMessageResult = (output, context) => {
    let contents = {
        __type: "SendMessageResult",
        MD5OfMessageAttributes: undefined,
        MD5OfMessageBody: undefined,
        MD5OfMessageSystemAttributes: undefined,
        MessageId: undefined,
        SequenceNumber: undefined
    };
    if (output["MD5OfMessageAttributes"] !== undefined) {
        contents.MD5OfMessageAttributes = output["MD5OfMessageAttributes"];
    }
    if (output["MD5OfMessageBody"] !== undefined) {
        contents.MD5OfMessageBody = output["MD5OfMessageBody"];
    }
    if (output["MD5OfMessageSystemAttributes"] !== undefined) {
        contents.MD5OfMessageSystemAttributes =
            output["MD5OfMessageSystemAttributes"];
    }
    if (output["MessageId"] !== undefined) {
        contents.MessageId = output["MessageId"];
    }
    if (output["SequenceNumber"] !== undefined) {
        contents.SequenceNumber = output["SequenceNumber"];
    }
    return contents;
};
const deserializeAws_queryStringList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryTagMap = (output, context) => {
    const mapParams = {};
    output.forEach((pair) => {
        mapParams[pair["Key"]] = pair["Value"];
    });
    return mapParams;
};
const deserializeAws_queryTooManyEntriesInBatchRequest = (output, context) => {
    let contents = {
        __type: "TooManyEntriesInBatchRequest"
    };
    return contents;
};
const deserializeAws_queryUnsupportedOperation = (output, context) => {
    let contents = {
        __type: "UnsupportedOperation"
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
const decodeEscapedXML = (str) => {
    return str
        .replace(/&amp;/g, "&")
        .replace(/&apos;/g, "'")
        .replace(/&quot;/g, '"')
        .replace(/&gt;/g, ">")
        .replace(/&lt;/g, "<");
};
const parseBody = (streamBody, context) => {
    return collectBodyString(streamBody, context).then(encoded => {
        if (encoded.length) {
            const parsedObj = fast_xml_parser_1.parse(encoded, {
                attributeNamePrefix: "",
                ignoreAttributes: false,
                parseNodeValue: false,
                tagValueProcessor: (val, tagName) => decodeEscapedXML(val)
            });
            const textNodeName = "#text";
            const key = Object.keys(parsedObj)[0];
            const parsedObjToReturn = parsedObj[key];
            if (parsedObjToReturn[textNodeName]) {
                parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
                delete parsedObjToReturn[textNodeName];
            }
            return parsedObjToReturn;
        }
        return {};
    });
};
const buildFormUrlencodedString = (entries) => {
    return Object.keys(entries)
        .map(key => smithy_client_1.extendedEncodeURIComponent(key) +
        "=" +
        smithy_client_1.extendedEncodeURIComponent(entries[key]))
        .join("&");
};
const loadQueryErrorCode = (output, data) => {
    if (data.Error.Code !== undefined) {
        return data.Error.Code;
    }
    if (output.statusCode == 404) {
        return "NotFound";
    }
    return "";
};
//# sourceMappingURL=Aws_query.js.map