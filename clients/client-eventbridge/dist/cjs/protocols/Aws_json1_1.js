"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1ActivateEventSourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSEvents.ActivateEventSource";
    let body;
    body = JSON.stringify(serializeAws_json1_1ActivateEventSourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ActivateEventSourceCommand = serializeAws_json1_1ActivateEventSourceCommand;
async function serializeAws_json1_1CreateEventBusCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSEvents.CreateEventBus";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateEventBusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateEventBusCommand = serializeAws_json1_1CreateEventBusCommand;
async function serializeAws_json1_1CreatePartnerEventSourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSEvents.CreatePartnerEventSource";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreatePartnerEventSourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreatePartnerEventSourceCommand = serializeAws_json1_1CreatePartnerEventSourceCommand;
async function serializeAws_json1_1DeactivateEventSourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSEvents.DeactivateEventSource";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeactivateEventSourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeactivateEventSourceCommand = serializeAws_json1_1DeactivateEventSourceCommand;
async function serializeAws_json1_1DeleteEventBusCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSEvents.DeleteEventBus";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteEventBusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteEventBusCommand = serializeAws_json1_1DeleteEventBusCommand;
async function serializeAws_json1_1DeletePartnerEventSourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSEvents.DeletePartnerEventSource";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeletePartnerEventSourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeletePartnerEventSourceCommand = serializeAws_json1_1DeletePartnerEventSourceCommand;
async function serializeAws_json1_1DeleteRuleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSEvents.DeleteRule";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteRuleCommand = serializeAws_json1_1DeleteRuleCommand;
async function serializeAws_json1_1DescribeEventBusCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSEvents.DescribeEventBus";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEventBusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeEventBusCommand = serializeAws_json1_1DescribeEventBusCommand;
async function serializeAws_json1_1DescribeEventSourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSEvents.DescribeEventSource";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEventSourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeEventSourceCommand = serializeAws_json1_1DescribeEventSourceCommand;
async function serializeAws_json1_1DescribePartnerEventSourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSEvents.DescribePartnerEventSource";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribePartnerEventSourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribePartnerEventSourceCommand = serializeAws_json1_1DescribePartnerEventSourceCommand;
async function serializeAws_json1_1DescribeRuleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSEvents.DescribeRule";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeRuleCommand = serializeAws_json1_1DescribeRuleCommand;
async function serializeAws_json1_1DisableRuleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSEvents.DisableRule";
    let body;
    body = JSON.stringify(serializeAws_json1_1DisableRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DisableRuleCommand = serializeAws_json1_1DisableRuleCommand;
async function serializeAws_json1_1EnableRuleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSEvents.EnableRule";
    let body;
    body = JSON.stringify(serializeAws_json1_1EnableRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1EnableRuleCommand = serializeAws_json1_1EnableRuleCommand;
async function serializeAws_json1_1ListEventBusesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSEvents.ListEventBuses";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListEventBusesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListEventBusesCommand = serializeAws_json1_1ListEventBusesCommand;
async function serializeAws_json1_1ListEventSourcesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSEvents.ListEventSources";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListEventSourcesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListEventSourcesCommand = serializeAws_json1_1ListEventSourcesCommand;
async function serializeAws_json1_1ListPartnerEventSourceAccountsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSEvents.ListPartnerEventSourceAccounts";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListPartnerEventSourceAccountsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListPartnerEventSourceAccountsCommand = serializeAws_json1_1ListPartnerEventSourceAccountsCommand;
async function serializeAws_json1_1ListPartnerEventSourcesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSEvents.ListPartnerEventSources";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListPartnerEventSourcesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListPartnerEventSourcesCommand = serializeAws_json1_1ListPartnerEventSourcesCommand;
async function serializeAws_json1_1ListRuleNamesByTargetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSEvents.ListRuleNamesByTarget";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListRuleNamesByTargetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListRuleNamesByTargetCommand = serializeAws_json1_1ListRuleNamesByTargetCommand;
async function serializeAws_json1_1ListRulesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSEvents.ListRules";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListRulesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListRulesCommand = serializeAws_json1_1ListRulesCommand;
async function serializeAws_json1_1ListTagsForResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSEvents.ListTagsForResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
async function serializeAws_json1_1ListTargetsByRuleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSEvents.ListTargetsByRule";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTargetsByRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTargetsByRuleCommand = serializeAws_json1_1ListTargetsByRuleCommand;
async function serializeAws_json1_1PutEventsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSEvents.PutEvents";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutEventsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutEventsCommand = serializeAws_json1_1PutEventsCommand;
async function serializeAws_json1_1PutPartnerEventsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSEvents.PutPartnerEvents";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutPartnerEventsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutPartnerEventsCommand = serializeAws_json1_1PutPartnerEventsCommand;
async function serializeAws_json1_1PutPermissionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSEvents.PutPermission";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutPermissionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutPermissionCommand = serializeAws_json1_1PutPermissionCommand;
async function serializeAws_json1_1PutRuleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSEvents.PutRule";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutRuleCommand = serializeAws_json1_1PutRuleCommand;
async function serializeAws_json1_1PutTargetsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSEvents.PutTargets";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutTargetsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutTargetsCommand = serializeAws_json1_1PutTargetsCommand;
async function serializeAws_json1_1RemovePermissionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSEvents.RemovePermission";
    let body;
    body = JSON.stringify(serializeAws_json1_1RemovePermissionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RemovePermissionCommand = serializeAws_json1_1RemovePermissionCommand;
async function serializeAws_json1_1RemoveTargetsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSEvents.RemoveTargets";
    let body;
    body = JSON.stringify(serializeAws_json1_1RemoveTargetsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RemoveTargetsCommand = serializeAws_json1_1RemoveTargetsCommand;
async function serializeAws_json1_1TagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSEvents.TagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
async function serializeAws_json1_1TestEventPatternCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSEvents.TestEventPattern";
    let body;
    body = JSON.stringify(serializeAws_json1_1TestEventPatternRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1TestEventPatternCommand = serializeAws_json1_1TestEventPatternCommand;
async function serializeAws_json1_1UntagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSEvents.UntagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
async function deserializeAws_json1_1ActivateEventSourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ActivateEventSourceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ActivateEventSourceCommand = deserializeAws_json1_1ActivateEventSourceCommand;
async function deserializeAws_json1_1ActivateEventSourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalException":
        case "com.amazon.jetstream.v20151007.exceptions#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidStateException":
        case "com.amazon.jetstream.v20151007.exceptions#InvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.jetstream.v20151007.exceptions#ResourceNotFoundException":
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
async function deserializeAws_json1_1CreateEventBusCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateEventBusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateEventBusResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateEventBusResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateEventBusCommand = deserializeAws_json1_1CreateEventBusCommand;
async function deserializeAws_json1_1CreateEventBusCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazon.jetstream.v20151007.exceptions#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.amazon.jetstream.v20151007.exceptions#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidStateException":
        case "com.amazon.jetstream.v20151007.exceptions#InvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.jetstream.v20151007.exceptions#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazon.jetstream.v20151007.exceptions#ResourceAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.jetstream.v20151007.exceptions#ResourceNotFoundException":
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
async function deserializeAws_json1_1CreatePartnerEventSourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreatePartnerEventSourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreatePartnerEventSourceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreatePartnerEventSourceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreatePartnerEventSourceCommand = deserializeAws_json1_1CreatePartnerEventSourceCommand;
async function deserializeAws_json1_1CreatePartnerEventSourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazon.jetstream.v20151007.exceptions#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.amazon.jetstream.v20151007.exceptions#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.jetstream.v20151007.exceptions#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazon.jetstream.v20151007.exceptions#ResourceAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeactivateEventSourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeactivateEventSourceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeactivateEventSourceCommand = deserializeAws_json1_1DeactivateEventSourceCommand;
async function deserializeAws_json1_1DeactivateEventSourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalException":
        case "com.amazon.jetstream.v20151007.exceptions#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidStateException":
        case "com.amazon.jetstream.v20151007.exceptions#InvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.jetstream.v20151007.exceptions#ResourceNotFoundException":
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
async function deserializeAws_json1_1DeleteEventBusCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteEventBusCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteEventBusCommand = deserializeAws_json1_1DeleteEventBusCommand;
async function deserializeAws_json1_1DeleteEventBusCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalException":
        case "com.amazon.jetstream.v20151007.exceptions#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeletePartnerEventSourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeletePartnerEventSourceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeletePartnerEventSourceCommand = deserializeAws_json1_1DeletePartnerEventSourceCommand;
async function deserializeAws_json1_1DeletePartnerEventSourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalException":
        case "com.amazon.jetstream.v20151007.exceptions#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteRuleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteRuleCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteRuleCommand = deserializeAws_json1_1DeleteRuleCommand;
async function deserializeAws_json1_1DeleteRuleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazon.jetstream.v20151007.exceptions#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.amazon.jetstream.v20151007.exceptions#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ManagedRuleException":
        case "com.amazon.jetstream.v20151007.exceptions#ManagedRuleException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ManagedRuleExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.jetstream.v20151007.exceptions#ResourceNotFoundException":
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
async function deserializeAws_json1_1DescribeEventBusCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeEventBusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEventBusResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeEventBusResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeEventBusCommand = deserializeAws_json1_1DescribeEventBusCommand;
async function deserializeAws_json1_1DescribeEventBusCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalException":
        case "com.amazon.jetstream.v20151007.exceptions#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.jetstream.v20151007.exceptions#ResourceNotFoundException":
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
async function deserializeAws_json1_1DescribeEventSourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeEventSourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEventSourceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeEventSourceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeEventSourceCommand = deserializeAws_json1_1DescribeEventSourceCommand;
async function deserializeAws_json1_1DescribeEventSourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalException":
        case "com.amazon.jetstream.v20151007.exceptions#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.jetstream.v20151007.exceptions#ResourceNotFoundException":
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
async function deserializeAws_json1_1DescribePartnerEventSourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribePartnerEventSourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribePartnerEventSourceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribePartnerEventSourceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribePartnerEventSourceCommand = deserializeAws_json1_1DescribePartnerEventSourceCommand;
async function deserializeAws_json1_1DescribePartnerEventSourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalException":
        case "com.amazon.jetstream.v20151007.exceptions#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.jetstream.v20151007.exceptions#ResourceNotFoundException":
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
async function deserializeAws_json1_1DescribeRuleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeRuleResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeRuleResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeRuleCommand = deserializeAws_json1_1DescribeRuleCommand;
async function deserializeAws_json1_1DescribeRuleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalException":
        case "com.amazon.jetstream.v20151007.exceptions#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.jetstream.v20151007.exceptions#ResourceNotFoundException":
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
async function deserializeAws_json1_1DisableRuleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DisableRuleCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DisableRuleCommand = deserializeAws_json1_1DisableRuleCommand;
async function deserializeAws_json1_1DisableRuleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazon.jetstream.v20151007.exceptions#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.amazon.jetstream.v20151007.exceptions#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ManagedRuleException":
        case "com.amazon.jetstream.v20151007.exceptions#ManagedRuleException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ManagedRuleExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.jetstream.v20151007.exceptions#ResourceNotFoundException":
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
async function deserializeAws_json1_1EnableRuleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1EnableRuleCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1EnableRuleCommand = deserializeAws_json1_1EnableRuleCommand;
async function deserializeAws_json1_1EnableRuleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazon.jetstream.v20151007.exceptions#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.amazon.jetstream.v20151007.exceptions#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ManagedRuleException":
        case "com.amazon.jetstream.v20151007.exceptions#ManagedRuleException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ManagedRuleExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.jetstream.v20151007.exceptions#ResourceNotFoundException":
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
async function deserializeAws_json1_1ListEventBusesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListEventBusesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListEventBusesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListEventBusesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListEventBusesCommand = deserializeAws_json1_1ListEventBusesCommand;
async function deserializeAws_json1_1ListEventBusesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalException":
        case "com.amazon.jetstream.v20151007.exceptions#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListEventSourcesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListEventSourcesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListEventSourcesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListEventSourcesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListEventSourcesCommand = deserializeAws_json1_1ListEventSourcesCommand;
async function deserializeAws_json1_1ListEventSourcesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalException":
        case "com.amazon.jetstream.v20151007.exceptions#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListPartnerEventSourceAccountsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListPartnerEventSourceAccountsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListPartnerEventSourceAccountsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListPartnerEventSourceAccountsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListPartnerEventSourceAccountsCommand = deserializeAws_json1_1ListPartnerEventSourceAccountsCommand;
async function deserializeAws_json1_1ListPartnerEventSourceAccountsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalException":
        case "com.amazon.jetstream.v20151007.exceptions#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.jetstream.v20151007.exceptions#ResourceNotFoundException":
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
async function deserializeAws_json1_1ListPartnerEventSourcesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListPartnerEventSourcesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListPartnerEventSourcesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListPartnerEventSourcesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListPartnerEventSourcesCommand = deserializeAws_json1_1ListPartnerEventSourcesCommand;
async function deserializeAws_json1_1ListPartnerEventSourcesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalException":
        case "com.amazon.jetstream.v20151007.exceptions#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListRuleNamesByTargetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListRuleNamesByTargetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListRuleNamesByTargetResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListRuleNamesByTargetResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListRuleNamesByTargetCommand = deserializeAws_json1_1ListRuleNamesByTargetCommand;
async function deserializeAws_json1_1ListRuleNamesByTargetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalException":
        case "com.amazon.jetstream.v20151007.exceptions#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.jetstream.v20151007.exceptions#ResourceNotFoundException":
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
async function deserializeAws_json1_1ListRulesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListRulesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListRulesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListRulesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListRulesCommand = deserializeAws_json1_1ListRulesCommand;
async function deserializeAws_json1_1ListRulesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalException":
        case "com.amazon.jetstream.v20151007.exceptions#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.jetstream.v20151007.exceptions#ResourceNotFoundException":
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
        case "InternalException":
        case "com.amazon.jetstream.v20151007.exceptions#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.jetstream.v20151007.exceptions#ResourceNotFoundException":
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
async function deserializeAws_json1_1ListTargetsByRuleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListTargetsByRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTargetsByRuleResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListTargetsByRuleResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListTargetsByRuleCommand = deserializeAws_json1_1ListTargetsByRuleCommand;
async function deserializeAws_json1_1ListTargetsByRuleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalException":
        case "com.amazon.jetstream.v20151007.exceptions#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.jetstream.v20151007.exceptions#ResourceNotFoundException":
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
async function deserializeAws_json1_1PutEventsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutEventsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutEventsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutEventsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutEventsCommand = deserializeAws_json1_1PutEventsCommand;
async function deserializeAws_json1_1PutEventsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalException":
        case "com.amazon.jetstream.v20151007.exceptions#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1PutPartnerEventsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutPartnerEventsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutPartnerEventsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutPartnerEventsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutPartnerEventsCommand = deserializeAws_json1_1PutPartnerEventsCommand;
async function deserializeAws_json1_1PutPartnerEventsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalException":
        case "com.amazon.jetstream.v20151007.exceptions#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1PutPermissionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutPermissionCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutPermissionCommand = deserializeAws_json1_1PutPermissionCommand;
async function deserializeAws_json1_1PutPermissionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazon.jetstream.v20151007.exceptions#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.amazon.jetstream.v20151007.exceptions#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PolicyLengthExceededException":
        case "com.amazon.jetstream.v20151007.exceptions#PolicyLengthExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PolicyLengthExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.jetstream.v20151007.exceptions#ResourceNotFoundException":
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
async function deserializeAws_json1_1PutRuleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutRuleResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutRuleResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutRuleCommand = deserializeAws_json1_1PutRuleCommand;
async function deserializeAws_json1_1PutRuleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazon.jetstream.v20151007.exceptions#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.amazon.jetstream.v20151007.exceptions#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidEventPatternException":
        case "com.amazon.jetstream.v20151007.exceptions#InvalidEventPatternException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidEventPatternExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.jetstream.v20151007.exceptions#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ManagedRuleException":
        case "com.amazon.jetstream.v20151007.exceptions#ManagedRuleException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ManagedRuleExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.jetstream.v20151007.exceptions#ResourceNotFoundException":
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
async function deserializeAws_json1_1PutTargetsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutTargetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutTargetsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutTargetsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutTargetsCommand = deserializeAws_json1_1PutTargetsCommand;
async function deserializeAws_json1_1PutTargetsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazon.jetstream.v20151007.exceptions#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.amazon.jetstream.v20151007.exceptions#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.jetstream.v20151007.exceptions#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ManagedRuleException":
        case "com.amazon.jetstream.v20151007.exceptions#ManagedRuleException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ManagedRuleExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.jetstream.v20151007.exceptions#ResourceNotFoundException":
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
async function deserializeAws_json1_1RemovePermissionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RemovePermissionCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RemovePermissionCommand = deserializeAws_json1_1RemovePermissionCommand;
async function deserializeAws_json1_1RemovePermissionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazon.jetstream.v20151007.exceptions#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.amazon.jetstream.v20151007.exceptions#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.jetstream.v20151007.exceptions#ResourceNotFoundException":
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
async function deserializeAws_json1_1RemoveTargetsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RemoveTargetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RemoveTargetsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RemoveTargetsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RemoveTargetsCommand = deserializeAws_json1_1RemoveTargetsCommand;
async function deserializeAws_json1_1RemoveTargetsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazon.jetstream.v20151007.exceptions#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.amazon.jetstream.v20151007.exceptions#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ManagedRuleException":
        case "com.amazon.jetstream.v20151007.exceptions#ManagedRuleException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ManagedRuleExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.jetstream.v20151007.exceptions#ResourceNotFoundException":
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
        case "com.amazon.jetstream.v20151007.exceptions#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.amazon.jetstream.v20151007.exceptions#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ManagedRuleException":
        case "com.amazon.jetstream.v20151007.exceptions#ManagedRuleException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ManagedRuleExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.jetstream.v20151007.exceptions#ResourceNotFoundException":
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
async function deserializeAws_json1_1TestEventPatternCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1TestEventPatternCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1TestEventPatternResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "TestEventPatternResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1TestEventPatternCommand = deserializeAws_json1_1TestEventPatternCommand;
async function deserializeAws_json1_1TestEventPatternCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalException":
        case "com.amazon.jetstream.v20151007.exceptions#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidEventPatternException":
        case "com.amazon.jetstream.v20151007.exceptions#InvalidEventPatternException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidEventPatternExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "com.amazon.jetstream.v20151007.exceptions#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.amazon.jetstream.v20151007.exceptions#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ManagedRuleException":
        case "com.amazon.jetstream.v20151007.exceptions#ManagedRuleException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ManagedRuleExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.jetstream.v20151007.exceptions#ResourceNotFoundException":
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
const deserializeAws_json1_1InternalExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalException(body, context);
    const contents = Object.assign({ name: "InternalException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidEventPatternExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidEventPatternException(body, context);
    const contents = Object.assign({ name: "InvalidEventPatternException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidStateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidStateException(body, context);
    const contents = Object.assign({ name: "InvalidStateException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LimitExceededException(body, context);
    const contents = Object.assign({ name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ManagedRuleExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ManagedRuleException(body, context);
    const contents = Object.assign({ name: "ManagedRuleException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1PolicyLengthExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PolicyLengthExceededException(body, context);
    const contents = Object.assign({ name: "PolicyLengthExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceAlreadyExistsException(body, context);
    const contents = Object.assign({ name: "ResourceAlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceNotFoundException(body, context);
    const contents = Object.assign({ name: "ResourceNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1ActivateEventSourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1AwsVpcConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.AssignPublicIp !== undefined) {
        bodyParams["AssignPublicIp"] = input.AssignPublicIp;
    }
    if (input.SecurityGroups !== undefined) {
        bodyParams["SecurityGroups"] = serializeAws_json1_1StringList(input.SecurityGroups, context);
    }
    if (input.Subnets !== undefined) {
        bodyParams["Subnets"] = serializeAws_json1_1StringList(input.Subnets, context);
    }
    return bodyParams;
};
const serializeAws_json1_1BatchArrayProperties = (input, context) => {
    const bodyParams = {};
    if (input.Size !== undefined) {
        bodyParams["Size"] = input.Size;
    }
    return bodyParams;
};
const serializeAws_json1_1BatchParameters = (input, context) => {
    const bodyParams = {};
    if (input.ArrayProperties !== undefined) {
        bodyParams["ArrayProperties"] = serializeAws_json1_1BatchArrayProperties(input.ArrayProperties, context);
    }
    if (input.JobDefinition !== undefined) {
        bodyParams["JobDefinition"] = input.JobDefinition;
    }
    if (input.JobName !== undefined) {
        bodyParams["JobName"] = input.JobName;
    }
    if (input.RetryStrategy !== undefined) {
        bodyParams["RetryStrategy"] = serializeAws_json1_1BatchRetryStrategy(input.RetryStrategy, context);
    }
    return bodyParams;
};
const serializeAws_json1_1BatchRetryStrategy = (input, context) => {
    const bodyParams = {};
    if (input.Attempts !== undefined) {
        bodyParams["Attempts"] = input.Attempts;
    }
    return bodyParams;
};
const serializeAws_json1_1Condition = (input, context) => {
    const bodyParams = {};
    if (input.Key !== undefined) {
        bodyParams["Key"] = input.Key;
    }
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
    }
    if (input.Value !== undefined) {
        bodyParams["Value"] = input.Value;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateEventBusRequest = (input, context) => {
    const bodyParams = {};
    if (input.EventSourceName !== undefined) {
        bodyParams["EventSourceName"] = input.EventSourceName;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1CreatePartnerEventSourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.Account !== undefined) {
        bodyParams["Account"] = input.Account;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1DeactivateEventSourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteEventBusRequest = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1DeletePartnerEventSourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.Account !== undefined) {
        bodyParams["Account"] = input.Account;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteRuleRequest = (input, context) => {
    const bodyParams = {};
    if (input.EventBusName !== undefined) {
        bodyParams["EventBusName"] = input.EventBusName;
    }
    if (input.Force !== undefined) {
        bodyParams["Force"] = input.Force;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeEventBusRequest = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeEventSourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribePartnerEventSourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeRuleRequest = (input, context) => {
    const bodyParams = {};
    if (input.EventBusName !== undefined) {
        bodyParams["EventBusName"] = input.EventBusName;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1DisableRuleRequest = (input, context) => {
    const bodyParams = {};
    if (input.EventBusName !== undefined) {
        bodyParams["EventBusName"] = input.EventBusName;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1EcsParameters = (input, context) => {
    const bodyParams = {};
    if (input.Group !== undefined) {
        bodyParams["Group"] = input.Group;
    }
    if (input.LaunchType !== undefined) {
        bodyParams["LaunchType"] = input.LaunchType;
    }
    if (input.NetworkConfiguration !== undefined) {
        bodyParams["NetworkConfiguration"] = serializeAws_json1_1NetworkConfiguration(input.NetworkConfiguration, context);
    }
    if (input.PlatformVersion !== undefined) {
        bodyParams["PlatformVersion"] = input.PlatformVersion;
    }
    if (input.TaskCount !== undefined) {
        bodyParams["TaskCount"] = input.TaskCount;
    }
    if (input.TaskDefinitionArn !== undefined) {
        bodyParams["TaskDefinitionArn"] = input.TaskDefinitionArn;
    }
    return bodyParams;
};
const serializeAws_json1_1EnableRuleRequest = (input, context) => {
    const bodyParams = {};
    if (input.EventBusName !== undefined) {
        bodyParams["EventBusName"] = input.EventBusName;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1EventResourceList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1InputTransformer = (input, context) => {
    const bodyParams = {};
    if (input.InputPathsMap !== undefined) {
        bodyParams["InputPathsMap"] = serializeAws_json1_1TransformerPaths(input.InputPathsMap, context);
    }
    if (input.InputTemplate !== undefined) {
        bodyParams["InputTemplate"] = input.InputTemplate;
    }
    return bodyParams;
};
const serializeAws_json1_1KinesisParameters = (input, context) => {
    const bodyParams = {};
    if (input.PartitionKeyPath !== undefined) {
        bodyParams["PartitionKeyPath"] = input.PartitionKeyPath;
    }
    return bodyParams;
};
const serializeAws_json1_1ListEventBusesRequest = (input, context) => {
    const bodyParams = {};
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NamePrefix !== undefined) {
        bodyParams["NamePrefix"] = input.NamePrefix;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListEventSourcesRequest = (input, context) => {
    const bodyParams = {};
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NamePrefix !== undefined) {
        bodyParams["NamePrefix"] = input.NamePrefix;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListPartnerEventSourceAccountsRequest = (input, context) => {
    const bodyParams = {};
    if (input.EventSourceName !== undefined) {
        bodyParams["EventSourceName"] = input.EventSourceName;
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListPartnerEventSourcesRequest = (input, context) => {
    const bodyParams = {};
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NamePrefix !== undefined) {
        bodyParams["NamePrefix"] = input.NamePrefix;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListRuleNamesByTargetRequest = (input, context) => {
    const bodyParams = {};
    if (input.EventBusName !== undefined) {
        bodyParams["EventBusName"] = input.EventBusName;
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.TargetArn !== undefined) {
        bodyParams["TargetArn"] = input.TargetArn;
    }
    return bodyParams;
};
const serializeAws_json1_1ListRulesRequest = (input, context) => {
    const bodyParams = {};
    if (input.EventBusName !== undefined) {
        bodyParams["EventBusName"] = input.EventBusName;
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NamePrefix !== undefined) {
        bodyParams["NamePrefix"] = input.NamePrefix;
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
const serializeAws_json1_1ListTargetsByRuleRequest = (input, context) => {
    const bodyParams = {};
    if (input.EventBusName !== undefined) {
        bodyParams["EventBusName"] = input.EventBusName;
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.Rule !== undefined) {
        bodyParams["Rule"] = input.Rule;
    }
    return bodyParams;
};
const serializeAws_json1_1NetworkConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.awsvpcConfiguration !== undefined) {
        bodyParams["awsvpcConfiguration"] = serializeAws_json1_1AwsVpcConfiguration(input.awsvpcConfiguration, context);
    }
    return bodyParams;
};
const serializeAws_json1_1PutEventsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Entries !== undefined) {
        bodyParams["Entries"] = serializeAws_json1_1PutEventsRequestEntryList(input.Entries, context);
    }
    return bodyParams;
};
const serializeAws_json1_1PutEventsRequestEntry = (input, context) => {
    const bodyParams = {};
    if (input.Detail !== undefined) {
        bodyParams["Detail"] = input.Detail;
    }
    if (input.DetailType !== undefined) {
        bodyParams["DetailType"] = input.DetailType;
    }
    if (input.EventBusName !== undefined) {
        bodyParams["EventBusName"] = input.EventBusName;
    }
    if (input.Resources !== undefined) {
        bodyParams["Resources"] = serializeAws_json1_1EventResourceList(input.Resources, context);
    }
    if (input.Source !== undefined) {
        bodyParams["Source"] = input.Source;
    }
    if (input.Time !== undefined) {
        bodyParams["Time"] = Math.round(input.Time.getTime() / 1000);
    }
    return bodyParams;
};
const serializeAws_json1_1PutEventsRequestEntryList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1PutEventsRequestEntry(entry, context));
    }
    return contents;
};
const serializeAws_json1_1PutPartnerEventsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Entries !== undefined) {
        bodyParams["Entries"] = serializeAws_json1_1PutPartnerEventsRequestEntryList(input.Entries, context);
    }
    return bodyParams;
};
const serializeAws_json1_1PutPartnerEventsRequestEntry = (input, context) => {
    const bodyParams = {};
    if (input.Detail !== undefined) {
        bodyParams["Detail"] = input.Detail;
    }
    if (input.DetailType !== undefined) {
        bodyParams["DetailType"] = input.DetailType;
    }
    if (input.Resources !== undefined) {
        bodyParams["Resources"] = serializeAws_json1_1EventResourceList(input.Resources, context);
    }
    if (input.Source !== undefined) {
        bodyParams["Source"] = input.Source;
    }
    if (input.Time !== undefined) {
        bodyParams["Time"] = Math.round(input.Time.getTime() / 1000);
    }
    return bodyParams;
};
const serializeAws_json1_1PutPartnerEventsRequestEntryList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1PutPartnerEventsRequestEntry(entry, context));
    }
    return contents;
};
const serializeAws_json1_1PutPermissionRequest = (input, context) => {
    const bodyParams = {};
    if (input.Action !== undefined) {
        bodyParams["Action"] = input.Action;
    }
    if (input.Condition !== undefined) {
        bodyParams["Condition"] = serializeAws_json1_1Condition(input.Condition, context);
    }
    if (input.EventBusName !== undefined) {
        bodyParams["EventBusName"] = input.EventBusName;
    }
    if (input.Principal !== undefined) {
        bodyParams["Principal"] = input.Principal;
    }
    if (input.StatementId !== undefined) {
        bodyParams["StatementId"] = input.StatementId;
    }
    return bodyParams;
};
const serializeAws_json1_1PutRuleRequest = (input, context) => {
    const bodyParams = {};
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.EventBusName !== undefined) {
        bodyParams["EventBusName"] = input.EventBusName;
    }
    if (input.EventPattern !== undefined) {
        bodyParams["EventPattern"] = input.EventPattern;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.RoleArn !== undefined) {
        bodyParams["RoleArn"] = input.RoleArn;
    }
    if (input.ScheduleExpression !== undefined) {
        bodyParams["ScheduleExpression"] = input.ScheduleExpression;
    }
    if (input.State !== undefined) {
        bodyParams["State"] = input.State;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1PutTargetsRequest = (input, context) => {
    const bodyParams = {};
    if (input.EventBusName !== undefined) {
        bodyParams["EventBusName"] = input.EventBusName;
    }
    if (input.Rule !== undefined) {
        bodyParams["Rule"] = input.Rule;
    }
    if (input.Targets !== undefined) {
        bodyParams["Targets"] = serializeAws_json1_1TargetList(input.Targets, context);
    }
    return bodyParams;
};
const serializeAws_json1_1RemovePermissionRequest = (input, context) => {
    const bodyParams = {};
    if (input.EventBusName !== undefined) {
        bodyParams["EventBusName"] = input.EventBusName;
    }
    if (input.StatementId !== undefined) {
        bodyParams["StatementId"] = input.StatementId;
    }
    return bodyParams;
};
const serializeAws_json1_1RemoveTargetsRequest = (input, context) => {
    const bodyParams = {};
    if (input.EventBusName !== undefined) {
        bodyParams["EventBusName"] = input.EventBusName;
    }
    if (input.Force !== undefined) {
        bodyParams["Force"] = input.Force;
    }
    if (input.Ids !== undefined) {
        bodyParams["Ids"] = serializeAws_json1_1TargetIdList(input.Ids, context);
    }
    if (input.Rule !== undefined) {
        bodyParams["Rule"] = input.Rule;
    }
    return bodyParams;
};
const serializeAws_json1_1RunCommandParameters = (input, context) => {
    const bodyParams = {};
    if (input.RunCommandTargets !== undefined) {
        bodyParams["RunCommandTargets"] = serializeAws_json1_1RunCommandTargets(input.RunCommandTargets, context);
    }
    return bodyParams;
};
const serializeAws_json1_1RunCommandTarget = (input, context) => {
    const bodyParams = {};
    if (input.Key !== undefined) {
        bodyParams["Key"] = input.Key;
    }
    if (input.Values !== undefined) {
        bodyParams["Values"] = serializeAws_json1_1RunCommandTargetValues(input.Values, context);
    }
    return bodyParams;
};
const serializeAws_json1_1RunCommandTargetValues = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1RunCommandTargets = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1RunCommandTarget(entry, context));
    }
    return contents;
};
const serializeAws_json1_1SqsParameters = (input, context) => {
    const bodyParams = {};
    if (input.MessageGroupId !== undefined) {
        bodyParams["MessageGroupId"] = input.MessageGroupId;
    }
    return bodyParams;
};
const serializeAws_json1_1StringList = (input, context) => {
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
    if (input.ResourceARN !== undefined) {
        bodyParams["ResourceARN"] = input.ResourceARN;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1Target = (input, context) => {
    const bodyParams = {};
    if (input.Arn !== undefined) {
        bodyParams["Arn"] = input.Arn;
    }
    if (input.BatchParameters !== undefined) {
        bodyParams["BatchParameters"] = serializeAws_json1_1BatchParameters(input.BatchParameters, context);
    }
    if (input.EcsParameters !== undefined) {
        bodyParams["EcsParameters"] = serializeAws_json1_1EcsParameters(input.EcsParameters, context);
    }
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    if (input.Input !== undefined) {
        bodyParams["Input"] = input.Input;
    }
    if (input.InputPath !== undefined) {
        bodyParams["InputPath"] = input.InputPath;
    }
    if (input.InputTransformer !== undefined) {
        bodyParams["InputTransformer"] = serializeAws_json1_1InputTransformer(input.InputTransformer, context);
    }
    if (input.KinesisParameters !== undefined) {
        bodyParams["KinesisParameters"] = serializeAws_json1_1KinesisParameters(input.KinesisParameters, context);
    }
    if (input.RoleArn !== undefined) {
        bodyParams["RoleArn"] = input.RoleArn;
    }
    if (input.RunCommandParameters !== undefined) {
        bodyParams["RunCommandParameters"] = serializeAws_json1_1RunCommandParameters(input.RunCommandParameters, context);
    }
    if (input.SqsParameters !== undefined) {
        bodyParams["SqsParameters"] = serializeAws_json1_1SqsParameters(input.SqsParameters, context);
    }
    return bodyParams;
};
const serializeAws_json1_1TargetIdList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1TargetList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Target(entry, context));
    }
    return contents;
};
const serializeAws_json1_1TestEventPatternRequest = (input, context) => {
    const bodyParams = {};
    if (input.Event !== undefined) {
        bodyParams["Event"] = input.Event;
    }
    if (input.EventPattern !== undefined) {
        bodyParams["EventPattern"] = input.EventPattern;
    }
    return bodyParams;
};
const serializeAws_json1_1TransformerPaths = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceARN !== undefined) {
        bodyParams["ResourceARN"] = input.ResourceARN;
    }
    if (input.TagKeys !== undefined) {
        bodyParams["TagKeys"] = serializeAws_json1_1TagKeyList(input.TagKeys, context);
    }
    return bodyParams;
};
const deserializeAws_json1_1AwsVpcConfiguration = (output, context) => {
    let contents = {
        __type: "AwsVpcConfiguration",
        AssignPublicIp: undefined,
        SecurityGroups: undefined,
        Subnets: undefined
    };
    if (output.AssignPublicIp !== undefined && output.AssignPublicIp !== null) {
        contents.AssignPublicIp = output.AssignPublicIp;
    }
    if (output.SecurityGroups !== undefined && output.SecurityGroups !== null) {
        contents.SecurityGroups = deserializeAws_json1_1StringList(output.SecurityGroups, context);
    }
    if (output.Subnets !== undefined && output.Subnets !== null) {
        contents.Subnets = deserializeAws_json1_1StringList(output.Subnets, context);
    }
    return contents;
};
const deserializeAws_json1_1BatchArrayProperties = (output, context) => {
    let contents = {
        __type: "BatchArrayProperties",
        Size: undefined
    };
    if (output.Size !== undefined && output.Size !== null) {
        contents.Size = output.Size;
    }
    return contents;
};
const deserializeAws_json1_1BatchParameters = (output, context) => {
    let contents = {
        __type: "BatchParameters",
        ArrayProperties: undefined,
        JobDefinition: undefined,
        JobName: undefined,
        RetryStrategy: undefined
    };
    if (output.ArrayProperties !== undefined && output.ArrayProperties !== null) {
        contents.ArrayProperties = deserializeAws_json1_1BatchArrayProperties(output.ArrayProperties, context);
    }
    if (output.JobDefinition !== undefined && output.JobDefinition !== null) {
        contents.JobDefinition = output.JobDefinition;
    }
    if (output.JobName !== undefined && output.JobName !== null) {
        contents.JobName = output.JobName;
    }
    if (output.RetryStrategy !== undefined && output.RetryStrategy !== null) {
        contents.RetryStrategy = deserializeAws_json1_1BatchRetryStrategy(output.RetryStrategy, context);
    }
    return contents;
};
const deserializeAws_json1_1BatchRetryStrategy = (output, context) => {
    let contents = {
        __type: "BatchRetryStrategy",
        Attempts: undefined
    };
    if (output.Attempts !== undefined && output.Attempts !== null) {
        contents.Attempts = output.Attempts;
    }
    return contents;
};
const deserializeAws_json1_1CreateEventBusResponse = (output, context) => {
    let contents = {
        __type: "CreateEventBusResponse",
        EventBusArn: undefined
    };
    if (output.EventBusArn !== undefined && output.EventBusArn !== null) {
        contents.EventBusArn = output.EventBusArn;
    }
    return contents;
};
const deserializeAws_json1_1CreatePartnerEventSourceResponse = (output, context) => {
    let contents = {
        __type: "CreatePartnerEventSourceResponse",
        EventSourceArn: undefined
    };
    if (output.EventSourceArn !== undefined && output.EventSourceArn !== null) {
        contents.EventSourceArn = output.EventSourceArn;
    }
    return contents;
};
const deserializeAws_json1_1DescribeEventBusResponse = (output, context) => {
    let contents = {
        __type: "DescribeEventBusResponse",
        Arn: undefined,
        Name: undefined,
        Policy: undefined
    };
    if (output.Arn !== undefined && output.Arn !== null) {
        contents.Arn = output.Arn;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Policy !== undefined && output.Policy !== null) {
        contents.Policy = output.Policy;
    }
    return contents;
};
const deserializeAws_json1_1DescribeEventSourceResponse = (output, context) => {
    let contents = {
        __type: "DescribeEventSourceResponse",
        Arn: undefined,
        CreatedBy: undefined,
        CreationTime: undefined,
        ExpirationTime: undefined,
        Name: undefined,
        State: undefined
    };
    if (output.Arn !== undefined && output.Arn !== null) {
        contents.Arn = output.Arn;
    }
    if (output.CreatedBy !== undefined && output.CreatedBy !== null) {
        contents.CreatedBy = output.CreatedBy;
    }
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.ExpirationTime !== undefined && output.ExpirationTime !== null) {
        contents.ExpirationTime = new Date(Math.round(output.ExpirationTime * 1000));
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.State !== undefined && output.State !== null) {
        contents.State = output.State;
    }
    return contents;
};
const deserializeAws_json1_1DescribePartnerEventSourceResponse = (output, context) => {
    let contents = {
        __type: "DescribePartnerEventSourceResponse",
        Arn: undefined,
        Name: undefined
    };
    if (output.Arn !== undefined && output.Arn !== null) {
        contents.Arn = output.Arn;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1DescribeRuleResponse = (output, context) => {
    let contents = {
        __type: "DescribeRuleResponse",
        Arn: undefined,
        Description: undefined,
        EventBusName: undefined,
        EventPattern: undefined,
        ManagedBy: undefined,
        Name: undefined,
        RoleArn: undefined,
        ScheduleExpression: undefined,
        State: undefined
    };
    if (output.Arn !== undefined && output.Arn !== null) {
        contents.Arn = output.Arn;
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.EventBusName !== undefined && output.EventBusName !== null) {
        contents.EventBusName = output.EventBusName;
    }
    if (output.EventPattern !== undefined && output.EventPattern !== null) {
        contents.EventPattern = output.EventPattern;
    }
    if (output.ManagedBy !== undefined && output.ManagedBy !== null) {
        contents.ManagedBy = output.ManagedBy;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.RoleArn !== undefined && output.RoleArn !== null) {
        contents.RoleArn = output.RoleArn;
    }
    if (output.ScheduleExpression !== undefined &&
        output.ScheduleExpression !== null) {
        contents.ScheduleExpression = output.ScheduleExpression;
    }
    if (output.State !== undefined && output.State !== null) {
        contents.State = output.State;
    }
    return contents;
};
const deserializeAws_json1_1EcsParameters = (output, context) => {
    let contents = {
        __type: "EcsParameters",
        Group: undefined,
        LaunchType: undefined,
        NetworkConfiguration: undefined,
        PlatformVersion: undefined,
        TaskCount: undefined,
        TaskDefinitionArn: undefined
    };
    if (output.Group !== undefined && output.Group !== null) {
        contents.Group = output.Group;
    }
    if (output.LaunchType !== undefined && output.LaunchType !== null) {
        contents.LaunchType = output.LaunchType;
    }
    if (output.NetworkConfiguration !== undefined &&
        output.NetworkConfiguration !== null) {
        contents.NetworkConfiguration = deserializeAws_json1_1NetworkConfiguration(output.NetworkConfiguration, context);
    }
    if (output.PlatformVersion !== undefined && output.PlatformVersion !== null) {
        contents.PlatformVersion = output.PlatformVersion;
    }
    if (output.TaskCount !== undefined && output.TaskCount !== null) {
        contents.TaskCount = output.TaskCount;
    }
    if (output.TaskDefinitionArn !== undefined &&
        output.TaskDefinitionArn !== null) {
        contents.TaskDefinitionArn = output.TaskDefinitionArn;
    }
    return contents;
};
const deserializeAws_json1_1EventBus = (output, context) => {
    let contents = {
        __type: "EventBus",
        Arn: undefined,
        Name: undefined,
        Policy: undefined
    };
    if (output.Arn !== undefined && output.Arn !== null) {
        contents.Arn = output.Arn;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Policy !== undefined && output.Policy !== null) {
        contents.Policy = output.Policy;
    }
    return contents;
};
const deserializeAws_json1_1EventBusList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1EventBus(entry, context));
};
const deserializeAws_json1_1EventSource = (output, context) => {
    let contents = {
        __type: "EventSource",
        Arn: undefined,
        CreatedBy: undefined,
        CreationTime: undefined,
        ExpirationTime: undefined,
        Name: undefined,
        State: undefined
    };
    if (output.Arn !== undefined && output.Arn !== null) {
        contents.Arn = output.Arn;
    }
    if (output.CreatedBy !== undefined && output.CreatedBy !== null) {
        contents.CreatedBy = output.CreatedBy;
    }
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.ExpirationTime !== undefined && output.ExpirationTime !== null) {
        contents.ExpirationTime = new Date(Math.round(output.ExpirationTime * 1000));
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.State !== undefined && output.State !== null) {
        contents.State = output.State;
    }
    return contents;
};
const deserializeAws_json1_1EventSourceList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1EventSource(entry, context));
};
const deserializeAws_json1_1InputTransformer = (output, context) => {
    let contents = {
        __type: "InputTransformer",
        InputPathsMap: undefined,
        InputTemplate: undefined
    };
    if (output.InputPathsMap !== undefined && output.InputPathsMap !== null) {
        contents.InputPathsMap = deserializeAws_json1_1TransformerPaths(output.InputPathsMap, context);
    }
    if (output.InputTemplate !== undefined && output.InputTemplate !== null) {
        contents.InputTemplate = output.InputTemplate;
    }
    return contents;
};
const deserializeAws_json1_1KinesisParameters = (output, context) => {
    let contents = {
        __type: "KinesisParameters",
        PartitionKeyPath: undefined
    };
    if (output.PartitionKeyPath !== undefined &&
        output.PartitionKeyPath !== null) {
        contents.PartitionKeyPath = output.PartitionKeyPath;
    }
    return contents;
};
const deserializeAws_json1_1ListEventBusesResponse = (output, context) => {
    let contents = {
        __type: "ListEventBusesResponse",
        EventBuses: undefined,
        NextToken: undefined
    };
    if (output.EventBuses !== undefined && output.EventBuses !== null) {
        contents.EventBuses = deserializeAws_json1_1EventBusList(output.EventBuses, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListEventSourcesResponse = (output, context) => {
    let contents = {
        __type: "ListEventSourcesResponse",
        EventSources: undefined,
        NextToken: undefined
    };
    if (output.EventSources !== undefined && output.EventSources !== null) {
        contents.EventSources = deserializeAws_json1_1EventSourceList(output.EventSources, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListPartnerEventSourceAccountsResponse = (output, context) => {
    let contents = {
        __type: "ListPartnerEventSourceAccountsResponse",
        NextToken: undefined,
        PartnerEventSourceAccounts: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.PartnerEventSourceAccounts !== undefined &&
        output.PartnerEventSourceAccounts !== null) {
        contents.PartnerEventSourceAccounts = deserializeAws_json1_1PartnerEventSourceAccountList(output.PartnerEventSourceAccounts, context);
    }
    return contents;
};
const deserializeAws_json1_1ListPartnerEventSourcesResponse = (output, context) => {
    let contents = {
        __type: "ListPartnerEventSourcesResponse",
        NextToken: undefined,
        PartnerEventSources: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.PartnerEventSources !== undefined &&
        output.PartnerEventSources !== null) {
        contents.PartnerEventSources = deserializeAws_json1_1PartnerEventSourceList(output.PartnerEventSources, context);
    }
    return contents;
};
const deserializeAws_json1_1ListRuleNamesByTargetResponse = (output, context) => {
    let contents = {
        __type: "ListRuleNamesByTargetResponse",
        NextToken: undefined,
        RuleNames: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.RuleNames !== undefined && output.RuleNames !== null) {
        contents.RuleNames = deserializeAws_json1_1RuleNameList(output.RuleNames, context);
    }
    return contents;
};
const deserializeAws_json1_1ListRulesResponse = (output, context) => {
    let contents = {
        __type: "ListRulesResponse",
        NextToken: undefined,
        Rules: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Rules !== undefined && output.Rules !== null) {
        contents.Rules = deserializeAws_json1_1RuleResponseList(output.Rules, context);
    }
    return contents;
};
const deserializeAws_json1_1ListTagsForResourceResponse = (output, context) => {
    let contents = {
        __type: "ListTagsForResourceResponse",
        Tags: undefined
    };
    if (output.Tags !== undefined && output.Tags !== null) {
        contents.Tags = deserializeAws_json1_1TagList(output.Tags, context);
    }
    return contents;
};
const deserializeAws_json1_1ListTargetsByRuleResponse = (output, context) => {
    let contents = {
        __type: "ListTargetsByRuleResponse",
        NextToken: undefined,
        Targets: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Targets !== undefined && output.Targets !== null) {
        contents.Targets = deserializeAws_json1_1TargetList(output.Targets, context);
    }
    return contents;
};
const deserializeAws_json1_1NetworkConfiguration = (output, context) => {
    let contents = {
        __type: "NetworkConfiguration",
        awsvpcConfiguration: undefined
    };
    if (output.awsvpcConfiguration !== undefined &&
        output.awsvpcConfiguration !== null) {
        contents.awsvpcConfiguration = deserializeAws_json1_1AwsVpcConfiguration(output.awsvpcConfiguration, context);
    }
    return contents;
};
const deserializeAws_json1_1PartnerEventSource = (output, context) => {
    let contents = {
        __type: "PartnerEventSource",
        Arn: undefined,
        Name: undefined
    };
    if (output.Arn !== undefined && output.Arn !== null) {
        contents.Arn = output.Arn;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1PartnerEventSourceAccount = (output, context) => {
    let contents = {
        __type: "PartnerEventSourceAccount",
        Account: undefined,
        CreationTime: undefined,
        ExpirationTime: undefined,
        State: undefined
    };
    if (output.Account !== undefined && output.Account !== null) {
        contents.Account = output.Account;
    }
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.ExpirationTime !== undefined && output.ExpirationTime !== null) {
        contents.ExpirationTime = new Date(Math.round(output.ExpirationTime * 1000));
    }
    if (output.State !== undefined && output.State !== null) {
        contents.State = output.State;
    }
    return contents;
};
const deserializeAws_json1_1PartnerEventSourceAccountList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1PartnerEventSourceAccount(entry, context));
};
const deserializeAws_json1_1PartnerEventSourceList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1PartnerEventSource(entry, context));
};
const deserializeAws_json1_1PutEventsResponse = (output, context) => {
    let contents = {
        __type: "PutEventsResponse",
        Entries: undefined,
        FailedEntryCount: undefined
    };
    if (output.Entries !== undefined && output.Entries !== null) {
        contents.Entries = deserializeAws_json1_1PutEventsResultEntryList(output.Entries, context);
    }
    if (output.FailedEntryCount !== undefined &&
        output.FailedEntryCount !== null) {
        contents.FailedEntryCount = output.FailedEntryCount;
    }
    return contents;
};
const deserializeAws_json1_1PutEventsResultEntry = (output, context) => {
    let contents = {
        __type: "PutEventsResultEntry",
        ErrorCode: undefined,
        ErrorMessage: undefined,
        EventId: undefined
    };
    if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
        contents.ErrorCode = output.ErrorCode;
    }
    if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
        contents.ErrorMessage = output.ErrorMessage;
    }
    if (output.EventId !== undefined && output.EventId !== null) {
        contents.EventId = output.EventId;
    }
    return contents;
};
const deserializeAws_json1_1PutEventsResultEntryList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1PutEventsResultEntry(entry, context));
};
const deserializeAws_json1_1PutPartnerEventsResponse = (output, context) => {
    let contents = {
        __type: "PutPartnerEventsResponse",
        Entries: undefined,
        FailedEntryCount: undefined
    };
    if (output.Entries !== undefined && output.Entries !== null) {
        contents.Entries = deserializeAws_json1_1PutPartnerEventsResultEntryList(output.Entries, context);
    }
    if (output.FailedEntryCount !== undefined &&
        output.FailedEntryCount !== null) {
        contents.FailedEntryCount = output.FailedEntryCount;
    }
    return contents;
};
const deserializeAws_json1_1PutPartnerEventsResultEntry = (output, context) => {
    let contents = {
        __type: "PutPartnerEventsResultEntry",
        ErrorCode: undefined,
        ErrorMessage: undefined,
        EventId: undefined
    };
    if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
        contents.ErrorCode = output.ErrorCode;
    }
    if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
        contents.ErrorMessage = output.ErrorMessage;
    }
    if (output.EventId !== undefined && output.EventId !== null) {
        contents.EventId = output.EventId;
    }
    return contents;
};
const deserializeAws_json1_1PutPartnerEventsResultEntryList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1PutPartnerEventsResultEntry(entry, context));
};
const deserializeAws_json1_1PutRuleResponse = (output, context) => {
    let contents = {
        __type: "PutRuleResponse",
        RuleArn: undefined
    };
    if (output.RuleArn !== undefined && output.RuleArn !== null) {
        contents.RuleArn = output.RuleArn;
    }
    return contents;
};
const deserializeAws_json1_1PutTargetsResponse = (output, context) => {
    let contents = {
        __type: "PutTargetsResponse",
        FailedEntries: undefined,
        FailedEntryCount: undefined
    };
    if (output.FailedEntries !== undefined && output.FailedEntries !== null) {
        contents.FailedEntries = deserializeAws_json1_1PutTargetsResultEntryList(output.FailedEntries, context);
    }
    if (output.FailedEntryCount !== undefined &&
        output.FailedEntryCount !== null) {
        contents.FailedEntryCount = output.FailedEntryCount;
    }
    return contents;
};
const deserializeAws_json1_1PutTargetsResultEntry = (output, context) => {
    let contents = {
        __type: "PutTargetsResultEntry",
        ErrorCode: undefined,
        ErrorMessage: undefined,
        TargetId: undefined
    };
    if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
        contents.ErrorCode = output.ErrorCode;
    }
    if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
        contents.ErrorMessage = output.ErrorMessage;
    }
    if (output.TargetId !== undefined && output.TargetId !== null) {
        contents.TargetId = output.TargetId;
    }
    return contents;
};
const deserializeAws_json1_1PutTargetsResultEntryList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1PutTargetsResultEntry(entry, context));
};
const deserializeAws_json1_1RemoveTargetsResponse = (output, context) => {
    let contents = {
        __type: "RemoveTargetsResponse",
        FailedEntries: undefined,
        FailedEntryCount: undefined
    };
    if (output.FailedEntries !== undefined && output.FailedEntries !== null) {
        contents.FailedEntries = deserializeAws_json1_1RemoveTargetsResultEntryList(output.FailedEntries, context);
    }
    if (output.FailedEntryCount !== undefined &&
        output.FailedEntryCount !== null) {
        contents.FailedEntryCount = output.FailedEntryCount;
    }
    return contents;
};
const deserializeAws_json1_1RemoveTargetsResultEntry = (output, context) => {
    let contents = {
        __type: "RemoveTargetsResultEntry",
        ErrorCode: undefined,
        ErrorMessage: undefined,
        TargetId: undefined
    };
    if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
        contents.ErrorCode = output.ErrorCode;
    }
    if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
        contents.ErrorMessage = output.ErrorMessage;
    }
    if (output.TargetId !== undefined && output.TargetId !== null) {
        contents.TargetId = output.TargetId;
    }
    return contents;
};
const deserializeAws_json1_1RemoveTargetsResultEntryList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1RemoveTargetsResultEntry(entry, context));
};
const deserializeAws_json1_1Rule = (output, context) => {
    let contents = {
        __type: "Rule",
        Arn: undefined,
        Description: undefined,
        EventBusName: undefined,
        EventPattern: undefined,
        ManagedBy: undefined,
        Name: undefined,
        RoleArn: undefined,
        ScheduleExpression: undefined,
        State: undefined
    };
    if (output.Arn !== undefined && output.Arn !== null) {
        contents.Arn = output.Arn;
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.EventBusName !== undefined && output.EventBusName !== null) {
        contents.EventBusName = output.EventBusName;
    }
    if (output.EventPattern !== undefined && output.EventPattern !== null) {
        contents.EventPattern = output.EventPattern;
    }
    if (output.ManagedBy !== undefined && output.ManagedBy !== null) {
        contents.ManagedBy = output.ManagedBy;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.RoleArn !== undefined && output.RoleArn !== null) {
        contents.RoleArn = output.RoleArn;
    }
    if (output.ScheduleExpression !== undefined &&
        output.ScheduleExpression !== null) {
        contents.ScheduleExpression = output.ScheduleExpression;
    }
    if (output.State !== undefined && output.State !== null) {
        contents.State = output.State;
    }
    return contents;
};
const deserializeAws_json1_1RuleNameList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1RuleResponseList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Rule(entry, context));
};
const deserializeAws_json1_1RunCommandParameters = (output, context) => {
    let contents = {
        __type: "RunCommandParameters",
        RunCommandTargets: undefined
    };
    if (output.RunCommandTargets !== undefined &&
        output.RunCommandTargets !== null) {
        contents.RunCommandTargets = deserializeAws_json1_1RunCommandTargets(output.RunCommandTargets, context);
    }
    return contents;
};
const deserializeAws_json1_1RunCommandTarget = (output, context) => {
    let contents = {
        __type: "RunCommandTarget",
        Key: undefined,
        Values: undefined
    };
    if (output.Key !== undefined && output.Key !== null) {
        contents.Key = output.Key;
    }
    if (output.Values !== undefined && output.Values !== null) {
        contents.Values = deserializeAws_json1_1RunCommandTargetValues(output.Values, context);
    }
    return contents;
};
const deserializeAws_json1_1RunCommandTargetValues = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1RunCommandTargets = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1RunCommandTarget(entry, context));
};
const deserializeAws_json1_1SqsParameters = (output, context) => {
    let contents = {
        __type: "SqsParameters",
        MessageGroupId: undefined
    };
    if (output.MessageGroupId !== undefined && output.MessageGroupId !== null) {
        contents.MessageGroupId = output.MessageGroupId;
    }
    return contents;
};
const deserializeAws_json1_1StringList = (output, context) => {
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
const deserializeAws_json1_1TagList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Tag(entry, context));
};
const deserializeAws_json1_1TagResourceResponse = (output, context) => {
    let contents = {
        __type: "TagResourceResponse"
    };
    return contents;
};
const deserializeAws_json1_1Target = (output, context) => {
    let contents = {
        __type: "Target",
        Arn: undefined,
        BatchParameters: undefined,
        EcsParameters: undefined,
        Id: undefined,
        Input: undefined,
        InputPath: undefined,
        InputTransformer: undefined,
        KinesisParameters: undefined,
        RoleArn: undefined,
        RunCommandParameters: undefined,
        SqsParameters: undefined
    };
    if (output.Arn !== undefined && output.Arn !== null) {
        contents.Arn = output.Arn;
    }
    if (output.BatchParameters !== undefined && output.BatchParameters !== null) {
        contents.BatchParameters = deserializeAws_json1_1BatchParameters(output.BatchParameters, context);
    }
    if (output.EcsParameters !== undefined && output.EcsParameters !== null) {
        contents.EcsParameters = deserializeAws_json1_1EcsParameters(output.EcsParameters, context);
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.Input !== undefined && output.Input !== null) {
        contents.Input = output.Input;
    }
    if (output.InputPath !== undefined && output.InputPath !== null) {
        contents.InputPath = output.InputPath;
    }
    if (output.InputTransformer !== undefined &&
        output.InputTransformer !== null) {
        contents.InputTransformer = deserializeAws_json1_1InputTransformer(output.InputTransformer, context);
    }
    if (output.KinesisParameters !== undefined &&
        output.KinesisParameters !== null) {
        contents.KinesisParameters = deserializeAws_json1_1KinesisParameters(output.KinesisParameters, context);
    }
    if (output.RoleArn !== undefined && output.RoleArn !== null) {
        contents.RoleArn = output.RoleArn;
    }
    if (output.RunCommandParameters !== undefined &&
        output.RunCommandParameters !== null) {
        contents.RunCommandParameters = deserializeAws_json1_1RunCommandParameters(output.RunCommandParameters, context);
    }
    if (output.SqsParameters !== undefined && output.SqsParameters !== null) {
        contents.SqsParameters = deserializeAws_json1_1SqsParameters(output.SqsParameters, context);
    }
    return contents;
};
const deserializeAws_json1_1TargetList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Target(entry, context));
};
const deserializeAws_json1_1TestEventPatternResponse = (output, context) => {
    let contents = {
        __type: "TestEventPatternResponse",
        Result: undefined
    };
    if (output.Result !== undefined && output.Result !== null) {
        contents.Result = output.Result;
    }
    return contents;
};
const deserializeAws_json1_1TransformerPaths = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1UntagResourceResponse = (output, context) => {
    let contents = {
        __type: "UntagResourceResponse"
    };
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
const deserializeAws_json1_1InternalException = (output, context) => {
    let contents = {
        __type: "InternalException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidEventPatternException = (output, context) => {
    let contents = {
        __type: "InvalidEventPatternException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidStateException = (output, context) => {
    let contents = {
        __type: "InvalidStateException",
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
const deserializeAws_json1_1ManagedRuleException = (output, context) => {
    let contents = {
        __type: "ManagedRuleException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1PolicyLengthExceededException = (output, context) => {
    let contents = {
        __type: "PolicyLengthExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ResourceAlreadyExistsException = (output, context) => {
    let contents = {
        __type: "ResourceAlreadyExistsException",
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